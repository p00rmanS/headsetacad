/* Difficulty ladder for live AI calls: Normal, Hard, Brutal. Loaded before app.js. */
window.HARD=(function(){
  const KEY="headset-academy-diff";
  const LEVELS=[
    {k:"normal",name:"Normal",blurb:"The customer as written."},
    {k:"hard",name:"Hard",blurb:"One curveball and a tougher customer."},
    {k:"brutal",name:"Brutal",blurb:"Two curveballs, low patience, strict scoring."}
  ];
  const CURVES=[
    {id:"interrupt",label:"Talks over you",t:"You interrupt the agent often and talk over them, and you repeat “I just want this fixed”. You only slow down when the agent acknowledges what you said in your own words first."},
    {id:"noise",label:"Bad audio, mishears",t:"You are calling from a noisy place. You mishear numbers and names, ask the agent to repeat them, and once read a number back wrong. A good agent slows down and confirms digit by digit."},
    {id:"wrongid",label:"Verification trap",t:"When first asked to verify, you give one detail slightly wrong (for example a transposed digit), then correct yourself only if the agent asks again. If the agent verifies loosely or skips verification, treat that as normal and do not volunteer a correction."},
    {id:"policy",label:"Asks for an exception",t:"Partway through, you ask the agent to bend a policy (skip a step, waive a rule, or do something only the account owner may do). You push back twice with “you did it for my friend”. You accept a polite, firm refusal that offers an alternative. You never accept a vague one."},
    {id:"second",label:"Second issue appears",t:"Once the first problem looks close to solved, you add a second, unrelated issue (a billing question or another device). A good agent states what is left, sequences it, and does not forget the first issue."},
    {id:"distrust",label:"Distrusts the company",t:"You say “you people always say that”. You want exact times and a reference number, and you challenge any vague promise. Specific commitments with a time frame calm you down."},
    {id:"lowtech",label:"Can’t follow jargon",t:"You describe things vaguely (“the box thing”, “the little light”). You cannot follow technical words and say so only after the second time. Plain language and one step at a time work; lists of steps lose you."},
    {id:"rushed",label:"Running out of time",t:"You have a hard deadline in about ten minutes and mention the clock repeatedly. You get sharper if the agent explains at length, and relax if the agent gives a short plan with a time estimate."},
    {id:"tangent",label:"Chatty tangents",t:"You drift into stories about your family or your day. A good agent acknowledges briefly and steers back politely. Do not stop on your own."},
    {id:"threat",label:"Threatens to leave",t:"You say you will cancel and leave a public review if the first fix does not work. You back down only when the agent shows ownership and a clear next step."},
    {id:"thirdparty",label:"Calling for someone else",t:"You say you are calling on behalf of a relative who owns the account (for example your mother). You are sympathetic and sure you are allowed to. You do not have their authorization on file. You accept a polite explanation and a path (they call, or add you as an authorized user)."},
    {id:"fixfail",label:"First fix doesn’t land",t:"The first thing the agent has you try does not seem to help right away, so you sound discouraged and say “that didn’t work”, even if it only needs another minute or step. A good agent stays calm and checks the details before changing plans."}
  ];
  const get=()=>{try{const v=localStorage.getItem(KEY);if(LEVELS.some(l=>l.k===v))return v;}catch(e){}return"normal";};
  const set=v=>{try{localStorage.setItem(KEY,v);}catch(e){}};
  const pick=(level,n)=>{
    const c=level==="brutal"?2:level==="hard"?1:0; if(!c) return [];
    const pool=CURVES.slice(); const out=[];
    for(let i=0;i<c;i++){out.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);}
    return out;
  };
  const addon=(level,curves)=>{
    if(level==="normal") return "";
    let s="\n\nDIFFICULTY: "+(level==="brutal"?"BRUTAL":"HARD")+". You are a harder customer than described above. ";
    s+=level==="brutal"
      ?"You have very little patience: you get short and sharp quickly, you do not forgive small slips, and you need clear, specific ownership before you calm down. Never become abusive or use slurs."
      :"You are less patient than described and you push back more, but you still calm down if the agent handles you well.";
    curves.forEach((c,i)=>{s+="\n\nCurveball "+(i+1)+": "+c.t;});
    s+="\n\nStay realistic: never become cooperative just because the agent is polite once; reward consistent, specific, correct handling.";
    return s;
  };
  const scoreNote=(level,curves)=>level==="normal"?"":
    "\nDifficulty: "+level.toUpperCase()+". The customer was deliberately difficult"+(curves.length?" with these hidden curveballs: "+curves.map(c=>c.label+" ("+c.t+")").join("; "):"")+". Do not penalize the agent for the customer’s attitude. Do judge how well the agent handled each curveball (de-escalation, verification discipline, policy, control, clarity)."+(level==="brutal"?" Grade strictly: a missed curveball should cost real points in the matching criterion.":"")+" In the comments, name a curveball and say whether it was handled.\n";
  const chips=(level,curves)=>level==="normal"?"":`<span class="chip">${level==="brutal"?"Brutal":"Hard"}</span>`;
  return {LEVELS,CURVES,get,set,pick,addon,scoreNote,chips};
})();
