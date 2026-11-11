/* Talk-throughs: pick the best reply, turn by turn. Works with no API key. Loaded before app.js. */
window.TALKS=window.TALKS||{};
const TALK_PASS=85;
let TK=null;

const talkBest=id=>{const r=(P.talks||[]).filter(x=>x.id===id);return r.length?Math.max(...r.map(x=>x.score)):null;};
const talkTrack=t=>{const l=LESSONS.find(x=>x.id===t.lesson);return l?l.track:"found";};

function viewTalks(){
  nav("talks");
  const ids=Object.keys(TALKS);
  const by={};
  ids.forEach(id=>{const t=TALKS[id];const k=t.lang==="es"?"es":talkTrack(t);(by[k]=by[k]||[]).push(id);});
  const order=["found","l1","l2","l3","csr","es","ready"];
  const done=ids.filter(id=>(talkBest(id)||0)>=TALK_PASS).length;
  return `<section style="display:grid;gap:8px"><span class="label">No API key needed</span><h1>Talk-throughs</h1><p class="muted" style="max-width:66ch">Read the customer, then choose the best reply for each turn. You get instant feedback on why each option is strong or weak. Aim for ${TALK_PASS}% on a scenario, then move on to the live AI calls. ${done}/${ids.length} passed.</p></section>
  ${order.filter(k=>by[k]).map(k=>`<section style="display:grid;gap:10px"><h2>${k==="es"?"Spanish line":esc(trackOf(k).name)}</h2><div class="list">${by[k].map((id,i)=>{const t=TALKS[id];const b=talkBest(id);return `<a class="item" href="#talk-${id}" style="grid-template-columns:34px 1fr auto"><span class="n">${String(i+1).padStart(2,"0")}</span><div><div style="font-weight:600">${esc(t.title)}</div><div class="meta"><span class="chip">${esc(t.account)}</span>${lvl(t.level)}${t.lang==="es"?'<span class="chip es">Español</span>':""}<span class="chip">${t.turns.length} turns</span></div></div>${b===null?`<span class="chip">Not tried</span>`:`<span class="chip ${b>=TALK_PASS?"done":""}">${b}%</span>`}</a>`;}).join("")}</div></section>`).join("")}`;
}

function viewTalk(id){
  const t=TALKS[id]; if(!t) return viewTalks();
  nav("talks");
  return `<div class="crumb"><a href="#talks">Talk-throughs</a> / ${esc(t.title)}</div>
  <section style="display:grid;gap:8px"><div class="row"><span class="chip">${esc(t.account)}</span>${lvl(t.level)}${t.lang==="es"?'<span class="chip es">Español</span>':""}</div><h1>${esc(t.title)}</h1></section>
  <div class="sim" style="grid-template-columns:minmax(0,1fr)">
   <div class="crm"><h3>Account view</h3><dl>${Object.entries(t.crm||{}).map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>${t.goal?`<div class="brief"><span class="label">Goal</span><span>${esc(t.goal)}</span></div>`:""}</div>
   <div class="console" style="min-height:0"><div class="console-head"><div class="status"><span class="dot on"></span><span id="tkStat">Turn 1 of ${t.turns.length}</span></div><span class="mono muted" id="tkScore"></span></div>
    <div class="feed" id="tkFeed" style="max-height:none"></div>
    <div class="compose" id="tkOpts"></div></div>
  </div><div id="tkRes"></div>`;
}

function bindTalk(id){
  const t=TALKS[id]; if(!t) return;
  const es=t.lang==="es";
  TK={id,i:0,pts:0,log:[]};
  const feed=$("#tkFeed"), opts=$("#tkOpts");
  const bub=(who,text)=>{const d=document.createElement("div");d.className="bub "+who;d.innerHTML=`<small>${who==="a"?"You":"Customer"}</small>`;d.appendChild(document.createTextNode(text));feed.appendChild(d);feed.scrollTop=feed.scrollHeight;return d;};
  const say=(text,who)=>{ if(V()) speak([{text:text.slice(0,1500),voice:who==="a"?"glassy":"rounded",language:es?"es":"en"}]); };
  const showTurn=()=>{
    const turn=t.turns[TK.i];
    $("#tkStat").textContent=(es?"Turno ":"Turn ")+(TK.i+1)+(es?" de ":" of ")+t.turns.length;
    bub("c",turn.c); say(turn.c,"c");
    const order=shuf(turn.o.map((_,k)=>k));
    opts.innerHTML=`<span class="label">${es?"Elija su respuesta":"Choose your reply"}</span>`+order.map(k=>`<button class="opt" data-k="${k}">${esc(turn.o[k][0])}</button>`).join("");
    opts.querySelectorAll(".opt").forEach(b=>b.onclick=()=>choose(+b.dataset.k,order));
  };
  const choose=(k,order)=>{
    const turn=t.turns[TK.i]; const pick=turn.o[k]; const best=Math.max(...turn.o.map(o=>o[1]));
    TK.pts+=pick[1]; TK.log.push({c:turn.c,pick:pick[0],s:pick[1],best:turn.o.find(o=>o[1]===best)[0],f:pick[2]});
    bub("a",pick[0]); say(pick[0],"a");
    opts.querySelectorAll(".opt").forEach(b=>{const o=turn.o[+b.dataset.k]; b.disabled=true; if(o[1]===best) b.classList.add("right"); else if(+b.dataset.k===k) b.classList.add("wrong");});
    const last=TK.i===t.turns.length-1;
    const fb=document.createElement("div"); fb.className="coach"; fb.innerHTML=`<b>${pick[1]===best?(es?"Excelente. ":"Strong. "):pick[1]>0?(es?"Aceptable. ":"Acceptable. "):(es?"Débil. ":"Weak. ")}</b>${esc(pick[2])}`;
    opts.appendChild(fb);
    const nb=document.createElement("button"); nb.className="btn pri"; nb.textContent=last?(es?"Ver resultado":"See results"):(es?"Siguiente":"Next"); nb.onclick=()=>{ if(last) finish(); else { TK.i++; showTurn(); } }; opts.appendChild(nb); nb.focus();
    $("#tkScore").textContent=Math.round(TK.pts/(2*(TK.i+1))*100)+"%";
  };
  const finish=()=>{
    const pct=Math.round(TK.pts/(2*t.turns.length)*100);
    P.talks=(P.talks||[]).concat([{id,score:pct,at:today(),ts:Date.now()}]); save();
    opts.innerHTML=""; stopSpeak();
    $("#tkRes").innerHTML=`<div class="score"><div class="score-top"><div><span class="label">${es?"Resultado":"Score"}</span><div class="big">${pct}%</div></div><span class="verdict ${pct>=TALK_PASS?"pass":"fail"}">${pct>=TALK_PASS?(es?"Aprobado":"Pass"):(es?"Menos de "+TALK_PASS+"%":"Below "+TALK_PASS+"%")}</span>
     <div class="row" style="margin-left:auto"><button class="btn" id="tkAgain">${es?"Repetir":"Try again"}</button>${t.lesson?`<a class="btn" href="#lesson-${t.lesson}">${es?"Repasar lección":"Review lesson"}</a>`:""}<a class="btn pri" href="#talks">${es?"Más escenarios":"More scenarios"}</a></div></div>
     <div style="display:grid;gap:10px"><span class="label">${es?"Turno por turno":"Turn by turn"}</span>${TK.log.map((x,i)=>`<div class="panel"><div class="bub c" style="max-width:100%"><small>${es?"Cliente":"Customer"} ${i+1}</small>${esc(x.c)}</div><div class="why"><b>${es?"Su respuesta":"Your reply"}:</b> ${esc(x.pick)}</div>${x.s<2?`<div class="why" style="color:var(--ok)"><b>${es?"Mejor":"Best"}:</b> ${esc(x.best)}</div>`:""}<div class="why">${esc(x.f)}</div></div>`).join("")}</div></div>`;
    $("#tkAgain").onclick=()=>route();
    $("#tkRes").scrollIntoView({behavior:"smooth",block:"start"});
  };
  showTurn();
}
