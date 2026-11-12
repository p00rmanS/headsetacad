/* Call arcs: every lesson gets a full call (beginning, middle, end) and an irate version
   that shows how to bring the temperature down. Data rows live in arc-*.js:
   [id, customerOpening, agentMiddleAction, agentFix, agentRecap, irateOpening, agentOwnership, calmTip] */
(function(){
  window.ARC_DATA = window.ARC_DATA || [];
  const G = {
    en:{
      name:"Sam", cn:"Sam",
      greet:(b)=>`Thank you for calling ${b}, this is Alex. Who am I speaking with?`,
      greet0:`Thank you for calling, this is Alex. Who am I speaking with?`,
      hi:(n,iss)=>`Hi, it’s ${n}. ${iss}`,
      open2:(n)=>`Thanks, ${n}. I’m sorry you’re dealing with that, and I can help. I’ll verify your account first for security, then we’ll work through it together.`,
      did:`Okay, I did that.`, good:`Okay, that looks right now. Thank you.`,
      more:(rec)=>`${rec} Is there anything else I can help you with today?`, nomore:`No, that’s everything.`,
      bye:(b,n)=>`I’ve put all of this in your notes so you won’t have to repeat it, and you can call back anytime. Thanks for calling${b?" "+b:""}, ${n}. Have a great day.`,
      ack:`That sounds really frustrating, and I’d be upset too.`,
      fine:`Fine, but I’m done being passed around.`,
      plan:`Understood. Here’s exactly what we’ll do so nothing is a surprise: a quick check, then the fix, and before we hang up I confirm it with you. Is that okay?`,
      go:`Okay. Go ahead.`, better:`Alright, that’s better. Thank you.`,
      final:(rec)=>`${rec} I’m sorry again that it took a call to get here. I’ve noted everything so nobody makes you repeat it.`
    },
    es:{
      name:"Marta", cn:"señora Marta",
      greet:(b)=>`Gracias por llamar a ${b}, habla Alex. ¿Con quién tengo el gusto?`,
      greet0:`Gracias por llamar, habla Alex. ¿Con quién tengo el gusto?`,
      hi:(n,iss)=>`Hola, soy ${n}. ${iss}`,
      open2:(n)=>`Mucho gusto, señora ${n}. Lamento que esté pasando por eso y con gusto la ayudo. Primero verifico su cuenta por seguridad y luego lo resolvemos paso a paso.`,
      did:`Listo, ya lo hice.`, good:`Ya quedó, muchas gracias.`,
      more:(rec)=>`${rec} ¿Hay algo más en lo que pueda ayudarla hoy?`, nomore:`No, eso es todo.`,
      bye:(b,n)=>`Dejé todo anotado en su cuenta para que no tenga que repetirlo, y puede llamarnos cuando quiera. Gracias por llamar${b?" a "+b:""}, señora ${n}. Que tenga un excelente día.`,
      ack:`Es completamente razonable que se sienta así.`,
      fine:`Está bien, pero ya estoy harta de que me pasen de un lado a otro.`,
      plan:`Entendido. Le explico el plan para que no haya sorpresas: una revisión rápida, luego la solución, y antes de colgar confirmo con usted que quedó resuelto. ¿Le parece bien?`,
      go:`Bueno, adelante.`, better:`Ahora sí, mucho mejor. Gracias.`,
      final:(rec)=>`${rec} Lamento otra vez que haya tomado tanto. Dejé todo anotado para que nadie le pida repetirlo.`
    },
    tl:{
      name:"Maria", cn:"Ma’am Maria",
      greet:(b)=>`Salamat po sa pagtawag sa ${b}, ako po si Alex. Sino po ang kausap ko?`,
      greet0:`Salamat po sa pagtawag, ako po si Alex. Sino po ang kausap ko?`,
      hi:(n,iss)=>`Hello, si ${n} po ito. ${iss}`,
      open2:(n)=>`Salamat po, Ma’am ${n}. Pasensya na po sa abala, matutulungan ko po kayo. I-verify ko po muna ang account ninyo para sa seguridad, tapos aayusin po natin nang paunti-unti.`,
      did:`Sige po, nagawa ko na.`, good:`Ayan po, gumagana na. Salamat po.`,
      more:(rec)=>`${rec} May iba pa po ba akong maitutulong sa inyo ngayon?`, nomore:`Wala na po, salamat.`,
      bye:(b,n)=>`Naitala ko na po ang lahat sa account ninyo para hindi na kayo magpapaulit, at puwede po kayong tumawag anumang oras. Salamat po sa pagtawag${b?" sa "+b:""}, Ma’am ${n}. Magandang araw po!`,
      ack:`Naiintindihan ko po na nakakainis ito, at maiinis din po ako.`,
      fine:`Sige, pero pagod na akong paikot-ikot.`,
      plan:`Opo, sasabihin ko po ang plano para walang sorpresa: una ang mabilis na pag-check, sunod ang pag-aayos, at bago po tayo magbaba, kukumpirmahin ko pong maayos na. Okay po ba iyon?`,
      go:`Sige, go.`, better:`Mas okay na. Salamat.`,
      final:(rec)=>`${rec} Humihingi po ulit ako ng paumanhin na natagalan. Naitala ko na po ang lahat para walang magpapaulit sa inyo.`
    }
  };
  function brandOf(acc){
    const s=String(acc||"").split(/ \/ | \(/)[0].trim();
    return /^(all|mixed|cuentas)/i.test(s)?"":s;
  }
  function build(l){
    const row=ARC_DATA.find(r=>r[0]===l.id); if(!row) return null;
    const [,iss,ask,fix,rec,hot,own,tip]=row;
    const g=G[l.lang==="es"?"es":l.lang==="tl"?"tl":"en"];
    const b=brandOf(l.account), n=g.name;
    const A=(t,note)=>["a",t,note], C=(t,note)=>["c",t,note];
    const open=[
      A(b?g.greet(b):g.greet0,"Brand, your name, and you ask theirs. Smile as you say it; they can hear it."),
      C(g.hi(n,iss)),
      A(g.open2(g.cn.replace(/^(señora|Ma’am) /,"")),"Empathy, verification and a roadmap in one breath. The customer knows what happens next.")
    ];
    const mid=[
      A(ask,"Middle: one clear step at a time, and say why you are doing it."),
      C(g.did),
      A(fix,"Fix it, then say out loud what you changed so they trust it."),
      C(g.good)
    ];
    const end=[
      A(g.more(rec),"End: recap what was done and what happens next, then ask if there is anything else."),
      C(g.nomore),
      A(g.bye(b,g.cn.replace(/^(señora|Ma’am) /,"")),"Close: notes, open door, brand, warm sign-off. The last 15 seconds drive the survey, so do not rush them.")
    ];
    const irate=[
      C(hot,"Let this wave pass. No interrupting, no “calm down”. Short “mm-hm” only."),
      A(g.ack+" "+own,"Step 2 and 3: name the feeling, then own it with something specific. Not “policy says”."),
      C(g.fine),
      A(g.plan,"Step 4: a plan plus a small yes. Predictability and a choice hand control back."),
      C(g.go),
      A(ask),
      C(g.did),
      A(fix,"Step 5: solve it visibly, in small steps."),
      C(g.better,"This is the turn. The customer softens when they feel heard and see movement."),
      A(g.final(rec),"Recap, apologize once more, and protect them from repeating themselves.")
    ];
    return {open,mid,end,irate,tip};
  }
  function bubs(arr,esc){
    return `<div class="script">${arr.map(s=>`<div class="bub ${s[0]}"><small>${s[0]==="a"?"Agent":"Customer"}</small>${esc(s[1])}${s[2]?`<span class="note">${esc(s[2])}</span>`:""}</div>`).join("")}</div>`;
  }
  window.ARCS={
    has:(id)=>ARC_DATA.some(r=>r[0]===id),
    html(l,esc){
      const a=build(l); if(!a) return "";
      const ph=(t,sub)=>`<h3 style="margin:14px 0 6px;font-size:15px">${t} <span class="muted" style="font-weight:400;font-size:13px">${sub}</span></h3>`;
      return `<section><h2>The whole call, start to finish</h2>
        <p class="muted" style="margin:0 0 4px">A normal call on this topic, with the three parts marked. Read the notes on the right of each line.</p>
        ${ph("Beginning","open, verify, set the plan")}${bubs(a.open,esc)}
        ${ph("Middle","diagnose and fix, narrated")}${bubs(a.mid,esc)}
        ${ph("End","recap, next steps, warm close")}${bubs(a.end,esc)}
        </section>
        <section><h2>Same call, but the customer is irate</h2>
        <p class="muted" style="margin:0 0 4px">Same problem, same fix. The only difference is how the first minute goes. Follow the five calming steps: <b>let them vent, name the feeling, own it, give a plan and a small yes, solve in small steps.</b></p>
        ${bubs(a.irate,esc)}
        <div class="panel" style="margin-top:10px"><span class="label">Calmer on this topic</span><p style="margin:6px 0 0">${esc(a.tip)}</p>
        <p class="muted" style="margin:8px 0 0;font-size:13.5px">Never say: “calm down”, “that’s our policy”, “as I already said”, “you should have”, “there’s nothing I can do”. Say what you CAN do. Full toolkit: <a href="#lesson-f20">The calm ladder</a>, <a href="#lesson-f21">Irate calls start to finish</a>, <a href="#lesson-f22">Keeping yourself calm</a>.</p></div>
        </section>`;
    }
  };
})();
