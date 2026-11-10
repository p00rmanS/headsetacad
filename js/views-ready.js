/* Readiness tools: Mixed-call Drill, Final Exam builder, Readiness report. Loaded before app.js; uses its globals at call time. */

const AREAS=[["any","Any area"],["tech","Tech (L1 to L3)"],["csr","Customer service"],["es","Spanish"],["found","Foundations"]];
const EXAM_MIX={found:6,l1:5,l2:5,l3:3,csr:6,es:5};
const EXAM_N=Object.values(EXAM_MIX).reduce((a,b)=>a+b,0);
const EXAM_PASS=80;
const REQ={found:{calls:2,exam:"f19"},l1:{calls:3,exam:"a21"},l2:{calls:4,exam:"b21"},l3:{calls:3,exam:"c16"},csr:{calls:4,exam:"d24"},es:{calls:4,exam:"e19"}};
const CRIT_DRILLS={
  "Greeting & branding":["f1","f5"],
  "Verification & security":["f7","f14","d14"],
  "Empathy & active listening":["f2","f3","f11"],
  "Discovery & diagnosis":["f6","a1","b5"],
  "Resolution accuracy":["a2","b1","d1"],
  "Ownership & expectations":["f10","c10","c11"],
  "Communication & tone":["f5","a6","e6"],
  "Closing":["f8"],
  "Documentation":["f12","c2"]
};

function simTrack(id){ const s=SIMS[id]; const l=s&&LESSONS.find(x=>x.id===s.lesson); return l?l.track:null; }
function simPool(area,level){
  return Object.keys(SIMS).filter(id=>{
    const t=simTrack(id); if(!t) return false;
    if(area==="tech"&&!["l1","l2","l3"].includes(t)) return false;
    if(area!=="any"&&area!=="tech"&&t!==area) return false;
    if(level!=="any"&&SIMS[id].level!==level) return false;
    return true;
  });
}
function pickSims(pool,n){
  const w=pool.map(id=>{const b=bestSim(id);return {id,k:(b===null?0:b<PASS?1:2)+Math.random()*0.9};});
  w.sort((a,b)=>a.k-b.k); return w.slice(0,n).map(x=>x.id);
}
const gBest=(id,since)=>{const r=P.sims.filter(x=>x.id===id&&(x.ts||0)>=since);return r.length?Math.max(...r.map(x=>x.score)):null;};
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const selStyle='padding:7px 10px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--ink);font:inherit';

/* ---------------- DRILL ---------------- */
function viewDrill(){
  nav("drill");
  const g=P.gaunt;
  let panel="";
  if(g&&g.ids&&g.ids.length){
    const res=g.ids.map(id=>gBest(id,g.started));
    const done=res.filter(x=>x!==null);
    const avg=done.length?Math.round(done.reduce((a,b)=>a+b,0)/done.length):null;
    panel=`<div class="panel"><div class="row" style="justify-content:space-between"><h2>Current gauntlet</h2>${done.length===g.ids.length?`<span class="verdict ${avg>=PASS?"pass":"fail"}">${avg>=PASS?"Passed":"Below "+PASS+"%"} · avg ${avg}%</span>`:`<span class="chip">${done.length}/${g.ids.length} calls done</span>`}</div>
    <div class="list">${g.ids.map((id,i)=>{const s=SIMS[id];return `<a class="item" href="#sim-${id}" style="grid-template-columns:34px 1fr auto"><span class="n">${i+1}</span><div><div style="font-weight:600">${esc(s.title)}</div><div class="meta"><span class="chip">${esc(s.account)}</span>${lvl(s.level)}${s.lang==="es"?'<span class="chip es">Español</span>':""}</div></div>${res[i]===null?`<span class="chip">Not taken</span>`:`<span class="chip ${res[i]>=PASS?"done":""}">${res[i]}%</span>`}</a>`;}).join("")}</div>
    <p class="muted" style="font-size:13.5px">Do the calls in order without reading ahead. Aim for a handle time under 8 minutes per call without rushing the verification or the close. Come back here after each call.</p>
    <div class="row"><button class="btn" id="clearG">Clear gauntlet</button></div></div>`;
  }
  return `<section style="display:grid;gap:8px"><span class="label">Weeks 23 to 26</span><h1>Mixed-call drill</h1><p class="muted" style="max-width:66ch">Real shifts do not announce the account or the problem. The gauntlet picks calls you have not passed yet, at random, so you practice switching fast. Each call is scored on the QA scorecard.</p></section>
  <div class="panel"><h2>Start a gauntlet</h2>
   <div class="row"><label class="label">Area <select id="dArea" style="${selStyle}">${AREAS.map(a=>`<option value="${a[0]}">${a[1]}</option>`).join("")}</select></label>
   <label class="label">Level <select id="dLvl" style="${selStyle}"><option value="any">Any level</option><option value="basic">Basic</option><option value="intermediate">Intermediate</option><option value="advanced">Advanced</option></select></label>
   <label class="label">Calls <select id="dN" style="${selStyle}"><option>3</option><option>5</option><option>8</option></select></label></div>
   <div class="row"><button class="btn pri" id="goG">Start gauntlet</button><button class="btn" id="goOne">One random call</button><span class="muted" id="dMsg" style="font-size:13.5px"></span></div>
   ${!CAP.sample?`<p class="notice">Calls need your API key in <a href="#settings">Settings</a>.</p>`:""}
  </div>${panel}`;
}
function bindDrill(){
  const pool=()=>simPool($("#dArea").value,$("#dLvl").value);
  $("#goG").onclick=()=>{
    const p=pool(); if(!p.length){ $("#dMsg").textContent="No calls match those filters."; return; }
    const ids=pickSims(p,Math.min(+$("#dN").value,p.length));
    P.gaunt={ids,started:Date.now()}; save(); route();
  };
  $("#goOne").onclick=()=>{
    const p=pool(); if(!p.length){ $("#dMsg").textContent="No calls match those filters."; return; }
    const id=pickSims(p,1)[0]; location.hash="#sim-"+id;
  };
  const c=$("#clearG"); if(c) c.onclick=()=>{ P.gaunt=null; save(); route(); };
}

/* ---------------- EXAM ---------------- */
let EX=null;
function buildExam(){
  const seen=new Set(), by={};
  LESSONS.forEach(l=>{ if(!EXAM_MIX[l.track]) return;
    (l.quiz||[]).forEach(q=>{ const key=q[0]; if(seen.has(key)) return; seen.add(key);
      (by[l.track]=by[l.track]||[]).push({q:q[0],opts:q[1],a:q[2],why:q[3],lesson:l.id,track:l.track}); }); });
  const qs=[];
  Object.entries(EXAM_MIX).forEach(([t,n])=>{ shuf(by[t]||[]).slice(0,n).forEach(x=>{
    const order=shuf(x.opts.map((_,i)=>i));
    qs.push({...x,opts:order.map(i=>x.opts[i]),a:order.indexOf(x.a)}); }); });
  return shuf(qs);
}
function viewExam(){
  nav("exam");
  const hist=(P.exams||[]).slice().reverse().slice(0,8);
  const best=(P.exams||[]).length?Math.max(...P.exams.map(e=>e.score)):null;
  return `<section style="display:grid;gap:8px"><span class="label">Week 25</span><h1>Final written exam</h1><p class="muted" style="max-width:66ch">${EXAM_N} questions drawn at random from every track, in random order. Pass at ${EXAM_PASS}%. Do it without notes, then review the misses. Take it again as often as you like; each attempt has different questions.</p></section>
  <div class="panel"><div class="row"><button class="btn pri" id="startEx">Start exam</button>${best!==null?`<span class="chip ${best>=EXAM_PASS?"done":""}">Best ${best}%</span>`:""}</div></div>
  <div id="exArea"></div>
  ${hist.length?`<section style="display:grid;gap:10px"><h2>Attempts</h2><div class="tbl-wrap"><table class="hist"><tr><th>Date</th><th>Score</th><th>Foundations</th><th>L1</th><th>L2</th><th>L3</th><th>CSR</th><th>Spanish</th></tr>${hist.map(e=>`<tr><td class="mono">${esc(e.at)}</td><td class="mono" style="color:${e.score>=EXAM_PASS?"var(--ok)":"var(--bad)"}">${e.score}%</td>${["found","l1","l2","l3","csr","es"].map(t=>`<td class="mono">${e.by&&e.by[t]!==undefined?e.by[t]+"%":"–"}</td>`).join("")}</tr>`).join("")}</table></div></section>`:""}`;
}
function bindExam(){
  $("#startEx").onclick=()=>{
    EX={qs:buildExam(),done:false};
    const area=$("#exArea");
    area.innerHTML=`<form id="exForm" style="display:grid;gap:14px">${EX.qs.map((q,i)=>`<div class="panel q"><span class="label">${i+1} of ${EX.qs.length} · ${esc(trackOf(q.track).name)}</span><b>${esc(q.q)}</b>${q.opts.map((o,oi)=>`<label class="opt" style="display:flex;gap:10px;align-items:flex-start;cursor:pointer"><input type="radio" name="q${i}" value="${oi}" style="margin-top:3px"><span>${esc(o)}</span></label>`).join("")}</div>`).join("")}<div class="row"><button class="btn pri" type="submit">Submit exam</button><span class="muted" id="exMsg" style="font-size:13.5px"></span></div></form>`;
    area.scrollIntoView({behavior:"smooth",block:"start"});
    $("#exForm").onsubmit=e=>{
      e.preventDefault();
      const ans=EX.qs.map((q,i)=>{const c=document.querySelector(`input[name=q${i}]:checked`);return c?+c.value:-1;});
      const un=ans.filter(a=>a<0).length;
      if(un&&!confirm(un+" question"+(un>1?"s are":" is")+" unanswered and will count as wrong. Submit anyway?")) return;
      const by={}, cnt={}; let right=0; const miss=[];
      EX.qs.forEach((q,i)=>{ cnt[q.track]=(cnt[q.track]||0)+1; if(ans[i]===q.a){right++;by[q.track]=(by[q.track]||0)+1;} else miss.push({q,pick:ans[i]}); });
      const pct=Math.round(right/EX.qs.length*100);
      const byPct={}; Object.keys(cnt).forEach(t=>byPct[t]=Math.round(((by[t]||0)/cnt[t])*100));
      P.exams=(P.exams||[]).concat([{at:today(),ts:Date.now(),score:pct,by:byPct}]); save();
      area.innerHTML=`<div class="score"><div class="score-top"><div><span class="label">Exam score</span><div class="big">${pct}%</div></div><span class="verdict ${pct>=EXAM_PASS?"pass":"fail"}">${pct>=EXAM_PASS?"Pass":"Below "+EXAM_PASS+"%"}</span><span class="chip">${right}/${EX.qs.length} correct</span></div>
      <div class="row">${Object.keys(byPct).map(t=>`<span class="chip ${byPct[t]>=EXAM_PASS?"done":""}">${esc(trackOf(t).name)} ${byPct[t]}%</span>`).join("")}</div>
      ${miss.length?`<div style="display:grid;gap:10px"><span class="label">Review what you missed</span>${miss.map(m=>`<div class="panel"><b>${esc(m.q.q)}</b><div class="why">Your answer: ${m.pick<0?"(blank)":esc(m.q.opts[m.pick])}</div><div class="why" style="color:var(--ok)">Correct: ${esc(m.q.opts[m.q.a])}</div><div class="why">${esc(m.q.why)} <a href="#lesson-${m.q.lesson}">Review lesson</a></div></div>`).join("")}</div>`:`<p>No misses. Excellent.</p>`}
      <div class="row"><button class="btn pri" onclick="route()">Back</button></div></div>`;
      area.scrollIntoView({behavior:"smooth",block:"start"});
    };
  };
}

/* ---------------- READINESS ---------------- */
function readinessData(){
  const tracks=["found","l1","l2","l3","csr","es"].map(t=>{
    const ls=lessonsOf(t), done=ls.filter(l=>P.done[l.id]).length;
    const pct=ls.length?Math.round(done/ls.length*100):0;
    const sims=Object.keys(SIMS).filter(id=>simTrack(id)===t);
    const passed=sims.filter(id=>(bestSim(id)||0)>=PASS).length;
    const exam=!!P.done[REQ[t].exam];
    const ok=pct>=90&&exam&&passed>=REQ[t].calls;
    return {t,name:trackOf(t).name,pct,done,total:ls.length,exam,passed,need:REQ[t].calls,sims:sims.length,ok};
  });
  const recent=P.sims.slice(-10);
  const avg=recent.length?Math.round(recent.reduce((a,b)=>a+b.score,0)/recent.length):null;
  const best=(P.exams||[]).length?Math.max(...P.exams.map(e=>e.score)):null;
  const avgOk=recent.length>=6&&avg>=PASS;
  const examOk=best!==null&&best>=EXAM_PASS;
  const withCrit=P.sims.filter(s=>s.crit).slice(-20);
  const crit={};
  withCrit.forEach(s=>s.crit.forEach(([k,v])=>{(crit[k]=crit[k]||[]).push(v);}));
  const weak=Object.entries(crit).map(([k,a])=>[k,Math.round(a.reduce((x,y)=>x+y,0)/a.length)]).sort((a,b)=>a[1]-b[1]).slice(0,3);
  return {tracks,avg,nRecent:recent.length,avgOk,best,examOk,weak,ready:tracks.every(t=>t.ok)&&avgOk&&examOk};
}
function viewReadiness(){
  nav("readiness");
  const d=readinessData();
  const row=(ok,label,detail)=>`<div class="item" style="grid-template-columns:34px 1fr auto"><span class="n" style="color:${ok?"var(--ok)":"var(--muted)"}">${ok?"✓":"○"}</span><div><b>${esc(label)}</b><div class="muted" style="font-size:13.5px">${esc(detail)}</div></div><span class="chip ${ok?"done":""}">${ok?"Done":"To do"}</span></div>`;
  return `<section style="display:grid;gap:8px"><span class="label">Week 26</span><h1>Readiness report</h1><p class="muted" style="max-width:66ch">The goal is not a perfect score. It is steady, repeatable quality across tracks. This report shows what is done and what is next.</p></section>
  <div class="continue" style="background:${d.ready?"var(--ok-soft)":"var(--accent-soft)"}"><div><div class="label">Status</div><h3 style="margin-top:4px">${d.ready?"Ready for the floor":"Still building"}</h3><div class="muted" style="font-size:13.5px">${d.ready?"Every track, the exam and your recent call average meet the targets.":"Close the open items below. Each completed item moves you closer."}</div></div><div class="row"><input id="rName" placeholder="Your name (for the printout)" value="${esc(P.name||"")}" style="${selStyle}"><button class="btn" id="printR">Print report</button></div></div>
  <section style="display:grid;gap:10px"><h2>By track</h2><div class="list">${d.tracks.map(t=>row(t.ok,t.name,`${t.done}/${t.total} lessons (${t.pct}%) · exam lesson ${t.exam?"done":"not done"} · ${t.passed}/${t.need} calls at ${PASS}% or better (${t.sims} available)`)).join("")}</div></section>
  <section style="display:grid;gap:10px"><h2>Overall</h2><div class="list">
   ${row(d.avgOk,"Recent call average",d.nRecent<6?`Need at least 6 scored calls (you have ${d.nRecent}).`:`Last ${d.nRecent} calls average ${d.avg}% (target ${PASS}%).`)}
   ${row(d.examOk,"Final written exam",d.best===null?"Not taken yet.":`Best score ${d.best}% (target ${EXAM_PASS}%).`)}
  </div></section>
  <section style="display:grid;gap:10px"><h2>Where to improve</h2>${d.weak.length?`<div class="list">${d.weak.map(([k,v])=>`<div class="item" style="grid-template-columns:54px 1fr"><span class="mono" style="font-size:18px;color:${v>=PASS?"var(--ok)":v>=60?"var(--warn)":"var(--bad)"}">${v}</span><div><b>${esc(k)}</b><div class="meta">${(CRIT_DRILLS[k]||[]).map(id=>{const l=LESSONS.find(x=>x.id===id);return l?`<a class="chip" href="#lesson-${id}">${esc(l.title.length>42?l.title.slice(0,40)+"…":l.title)}</a>`:"";}).join("")}</div></div></div>`).join("")}</div>`:`<p class="muted">Take a few scored calls and your weakest criteria will appear here.</p>`}</section>
  <div class="row"><a class="btn pri" href="#drill">Mixed-call drill</a><a class="btn" href="#exam">Final exam</a><a class="btn" href="#plan">Plan</a></div>`;
}
function bindReadiness(){
  $("#printR").onclick=()=>{ P.name=$("#rName").value.trim(); save(); window.print(); };
  $("#rName").onchange=()=>{ P.name=$("#rName").value.trim(); save(); };
}
