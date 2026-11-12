/* Browser replacement for the Claude-hosted runtime: speech, dictation and the AI customer (bring your own API key). */
(function(){
  const SKEY="headset-academy-settings-v1";
  window.HA_SETTINGS={
    get(){ try{ return JSON.parse(localStorage.getItem(SKEY))||{}; }catch(e){ return {}; } },
    set(o){ try{ if(o&&Object.keys(o).length) localStorage.setItem(SKEY,JSON.stringify(o)); else localStorage.removeItem(SKEY); }catch(e){} }
  };
  if(window.claude) return; // running inside Claude: use its own runtime

  const err=(code,msg)=>Object.assign(new Error(msg||code),{code});

  /* ---------- AI customer / scoring ---------- */
  function makeSample(){
    const S=HA_SETTINGS.get(); if(!S.key) return null;
    const model=tier=>tier==="quick"?(S.quick||"claude-haiku-5-5"):(S.model||"claude-sonnet-5-5");
    async function sample(input,opts={}){
      const messages=typeof input==="string"?[{role:"user",content:input}]:input;
      const body={model:model(opts.modelTier),max_tokens:opts.maxTokens||(opts.modelTier==="quick"?300:700),messages,stream:!!opts.onText};
      let r;
      try{
        r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",signal:opts.signal,headers:{
          "content-type":"application/json","x-api-key":S.key,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(body)});
      }catch(e){ if(e&&e.name==="AbortError") throw e; throw err("network","Network error"); }
      if(!r.ok){
        let m=""; try{ m=(await r.json()).error.message||""; }catch(_){}
        if(r.status===401||r.status===403) throw err("bad_key",m);
        if(r.status===429) throw err("rate_limited",m);
        if(r.status===400&&/credit/i.test(m)) throw err("no_credit",m);
        throw err("api_"+r.status,m);
      }
      if(!body.stream){ const j=await r.json(); return {text:(j.content||[]).map(c=>c.text||"").join("")}; }
      const rd=r.body.getReader(), dec=new TextDecoder(); let buf="", text="";
      for(;;){
        const {done,value}=await rd.read(); if(done) break;
        buf+=dec.decode(value,{stream:true});
        let i; while((i=buf.indexOf("\n"))>=0){
          const line=buf.slice(0,i).trim(); buf=buf.slice(i+1);
          if(!line.startsWith("data:")) continue;
          try{ const ev=JSON.parse(line.slice(5)); if(ev.type==="content_block_delta"&&ev.delta&&ev.delta.text){ text+=ev.delta.text; opts.onText({text}); } }catch(_){}
        }
      }
      return {text};
    }
    sample.json=async(prompt,opts={})=>{
      const r=await sample(prompt,{...opts,maxTokens:2500,onText:null});
      const m=r.text.match(/\{[\s\S]*\}/); if(!m) throw err("bad_json");
      return JSON.parse(m[0]);
    };
    return sample;
  }

  /* ---------- Text to speech ---------- */
  function makeTTS(){
    if(!("speechSynthesis" in window)) return null;
    const synth=window.speechSynthesis; let stateCb=null, token=0;
    const setState=s=>{ try{ stateCb&&stateCb({state:s}); }catch(e){} };
    const pick=(lang,role)=>{
      const vs=synth.getVoices().filter(v=>{const l=v.lang.toLowerCase().replace("_","-");return lang==="tl"?(l.startsWith("fil")||l.startsWith("tl")):l.startsWith(lang);});
      if(!vs.length) return null;
      const pref=lang==="es"?["es-us","es-mx","es-es"]:["en-us","en-gb"];
      const ranked=[...vs].sort((a,b)=>{
        const ra=pref.indexOf(a.lang.toLowerCase().replace("_","-")), rb=pref.indexOf(b.lang.toLowerCase().replace("_","-"));
        return (ra<0?9:ra)-(rb<0?9:rb) || (/natural|neural|online/i.test(b.name)-/natural|neural|online/i.test(a.name));
      });
      return role==="rounded"&&ranked.length>1?ranked[1]:ranked[0];
    };
    const chunks=t=>t.match(/[^.!?¿¡]+[.!?]*|[^]+/g).map(x=>x.trim()).filter(Boolean);
    return {
      async speak(lines){
        synth.cancel(); const my=++token; setState("speaking");
        for(const ln of lines){
          for(const c of chunks(ln.text)){
            if(my!==token) return;
            await new Promise(res=>{
              const u=new SpeechSynthesisUtterance(c); const lang=ln.language==="es"?"es":ln.language==="tl"?"tl":"en";
              u.lang=lang==="es"?"es-US":lang==="tl"?"fil-PH":"en-US"; const v=pick(lang,ln.voice); if(v){ u.voice=v; u.lang=v.lang; }
              u.pitch=ln.voice==="rounded"?0.9:1.05; u.rate=1;
              u.onend=u.onerror=()=>res(); synth.speak(u);
            });
          }
        }
        if(my===token) setState("idle");
      },
      stop(){ token++; synth.cancel(); setState("idle"); },
      onState(cb){ stateCb=cb; }
    };
  }

  /* ---------- Dictation ---------- */
  function makeDict(){
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition; if(!SR) return null;
    let rec=null, fin=null, st=null;
    return {
      onFinal(cb){ fin=cb; }, onState(cb){ st=cb; },
      async start({language}={}){
        rec=new SR(); rec.lang=language==="es"?"es-US":language==="tl"?"fil-PH":"en-US"; rec.interimResults=false; rec.continuous=true;
        rec.onresult=e=>{ for(let i=e.resultIndex;i<e.results.length;i++) if(e.results[i].isFinal&&fin) fin({text:e.results[i][0].transcript.trim()}); };
        rec.onend=()=>st&&st({state:"idle"});
        rec.onerror=e=>{ if(e.error==="not-allowed"||e.error==="service-not-allowed"){ st&&st({state:"idle"}); } };
        rec.start(); st&&st({state:"listening"});
      },
      async stop(){ if(rec) rec.stop(); }
    };
  }

  const caps={sample:makeSample(),tts:makeTTS(),dictation:makeDict()};
  window.claude={ async use(name){ if(!caps[name]) throw err("unavailable",name); return caps[name]; } };
})();
