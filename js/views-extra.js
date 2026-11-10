/* Plan and Settings views. Loaded before app.js; uses its globals at call time. */

function viewPlan(){
  nav("plan");
  const W=window.WEEKS||[];
  const phases=[...new Set(W.map(w=>w.phase))];
  const have=id=>LESSONS.find(l=>l.id===id);
  const body=phases.map(ph=>`<section style="display:grid;gap:10px"><h2>${esc(ph)}</h2><div class="list">${W.filter(w=>w.phase===ph).map(w=>{
    const ls=(w.lessons||[]).map(have).filter(Boolean);
    const done=ls.filter(l=>P.done[l.id]).length;
    const status=ls.length?`<span class="chip ${done===ls.length?"done":""}">${done}/${ls.length} lessons</span>`:`<span class="chip">Coming soon</span>`;
    return `<div class="item" style="grid-template-columns:54px 1fr auto"><span class="n">${esc(w.span||("W"+w.w))}</span><div><b>${esc(w.title)}</b><div class="muted" style="font-size:13.5px;margin-top:2px">${esc(w.topics)}</div>${ls.length?`<div class="meta">${ls.map(l=>`<a class="chip ${P.done[l.id]?"done":""}" href="#lesson-${l.id}">${esc(l.title.length>46?l.title.slice(0,44)+"…":l.title)}</a>`).join("")}</div>`:""}</div>${status}</div>`;}).join("")}</div></section>`).join("");
  return `<section style="display:grid;gap:8px"><span class="label">26 weeks · about 90 min/day</span><h1>Your plan</h1><p class="muted" style="max-width:66ch">Work top to bottom. Each week ends with a checkpoint: quiz 80% or better, and calls at ${PASS}% on the QA scorecard. Weeks marked “Coming soon” are being built.</p></section>${body}`;
}

const INP='padding:9px 11px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink);font:inherit;width:100%';

function viewSettings(){
  nav("settings");
  const S=HA_SETTINGS.get();
  const hasKey=!!S.key;
  return `<section style="display:grid;gap:8px"><span class="label">Stored only in this browser</span><h1>Settings</h1></section>
  <div class="panel"><h2>AI customer and QA scoring</h2>
   <p class="muted" style="font-size:14px;max-width:64ch">Live calls use your own Anthropic API key, sent directly from your browser to Anthropic. It is saved in this browser only. Use it only on your own devices, never on a shared or work computer. Usage is billed to your Anthropic account.</p>
   <label class="label" for="akey">API key</label>
   <input id="akey" type="password" autocomplete="off" placeholder="${hasKey?"Saved (hidden). Paste a new key to replace.":"sk-ant-..."}" style="${INP}">
   <label class="label" for="amodel">Customer and scoring model (optional)</label>
   <input id="amodel" value="${esc(S.model||"")}" placeholder="claude-sonnet-5-5" style="${INP}">
   <label class="label" for="aquick">Coach hint model (optional)</label>
   <input id="aquick" value="${esc(S.quick||"")}" placeholder="claude-haiku-5-5" style="${INP}">
   <div class="row"><button class="btn pri" id="saveKey">Save</button><button class="btn" id="clearKey" ${hasKey?"":"disabled"}>Remove key</button><span class="muted" id="keyMsg" style="font-size:13.5px"></span></div>
  </div>
  <div class="panel"><h2>Your progress</h2>
   <p class="muted" style="font-size:14px">Progress lives in this browser. Export a backup now and then, and import it on another device.</p>
   <div class="row"><button class="btn" id="exp">Export backup</button><label class="btn" for="imp">Import backup</label><input id="imp" type="file" accept="application/json" hidden><button class="btn" id="reset">Reset all progress</button></div>
   <span class="muted" id="dataMsg" style="font-size:13.5px"></span>
  </div>
  <div class="panel"><h2>Voice</h2><p class="muted" style="font-size:14px">Uses your browser’s built-in speech. Reading aloud works in modern browsers. Speaking your answers works in Chrome and Edge. Turn it on with the Voice button at the top.</p>
   <div class="row"><button class="btn" id="testEn">Test English voice</button><button class="btn" id="testEs">Probar voz en español</button></div><span class="muted" id="voiceMsg" style="font-size:13.5px"></span></div>`;
}

function bindSettings(){
  $("#saveKey").onclick=()=>{
    const cur=HA_SETTINGS.get(); const k=$("#akey").value.trim();
    if(k && !/^sk-ant-/.test(k)){ $("#keyMsg").textContent="That doesn’t look like an Anthropic key (it starts with sk-ant-)."; return; }
    HA_SETTINGS.set({key:k||cur.key||"",model:$("#amodel").value.trim(),quick:$("#aquick").value.trim()});
    $("#keyMsg").textContent="Saved. Reloading…"; setTimeout(()=>location.reload(),500);
  };
  $("#clearKey").onclick=()=>{ HA_SETTINGS.set({}); location.reload(); };
  $("#exp").onclick=()=>{
    const blob=new Blob([JSON.stringify(P,null,1)],{type:"application/json"});
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="headset-academy-progress-"+today()+".json"; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),2000);
  };
  $("#imp").onchange=async e=>{
    const f=e.target.files[0]; if(!f) return;
    try{
      const j=JSON.parse(await f.text()); if(typeof j!=="object"||!j||!j.done) throw 0;
      P=Object.assign({done:{},quiz:{},sims:[],voice:false,cards:{},seen:{},reads:{}},j); save();
      $("#dataMsg").textContent="Imported. Reloading…"; setTimeout(()=>location.reload(),500);
    }catch(_){ $("#dataMsg").textContent="That file isn’t a Headset Academy backup."; }
  };
  $("#reset").onclick=()=>{ if(confirm("Erase all progress, scores and flashcard history in this browser? This cannot be undone.")){ P={done:{},quiz:{},sims:[],voice:false,cards:{},seen:{},reads:{}}; save(); location.reload(); } };
  const test=(lang,txt)=>{
    if(!CAP.tts){ $("#voiceMsg").textContent="This browser has no speech support."; return; }
    const n=speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith(lang)).length;
    $("#voiceMsg").textContent=n?"":"No "+(lang==="es"?"Spanish":"English")+" voice found on this device. Install one in your system speech settings.";
    CAP.tts.speak([{text:txt,voice:"glassy",language:lang}]).catch(()=>{});
  };
  $("#testEn").onclick=()=>test("en","Thank you for calling Northwave Fiber, this is Jordan. How can I help you today?");
  $("#testEs").onclick=()=>test("es","Gracias por llamar a Northwave Fiber, le habla Jordan. ¿En qué puedo ayudarle hoy?");
}
