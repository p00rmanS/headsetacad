/* TSR L3, week 18 and L3 exam + practice calls */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"c12",track:"l3",title:"Incident messages: initial, update and resolution templates",level:"advanced",account:"Northwave Fiber Business",mins:16,sim:"sim-l3e",
 teach:[
  ["What customers want","Honest, early information they can act on: what is wrong, who is affected, what you are doing, when they will hear next. They do not need technical detail, they need clarity."],
  ["Initial message","Acknowledge, say what you know, what you do not know, and when the next update is. Do not guess the cause or promise a time you cannot meet."],
  ["Update messages","Short and regular: current status, what changed, expected next step, next update time. If nothing has changed say so."],
  ["Resolution message","Service restored, when, what was done in plain words, whether anything is still being watched, how to report lingering issues, and the credit process if there is one. Offer a root cause summary later when known."],
  ["Plain words, no blame","‘A fiber cut caused an outage in your area’ is clear. ‘A contractor dug up our cable’ pins blame; it may be true but is unhelpful. Avoid jargon and internal system names."],
  ["Honest estimates","Give a time range with a reason: ‘Crews are on site; we expect restoration between 18:00 and 20:00. We will update at 17:00.’ If an estimate slips, tell the customer as soon as you know."],
  ["Channels","Use the channel the customer prefers and the incident policy allows: phone for critical contacts, email or portal for broad updates, the status page for public ones. Keep messages consistent across channels."],
  ["Review before sending","Check facts, tone, spelling, names and times. Never include other customers’ data."]
 ],
 steps:{h:"Initial message template",items:[
  ["Acknowledge","We are aware of an issue affecting internet service at your site."],
  ["Known","Since 14:05 several customers in the north area have lost service. Our network team is investigating."],
  ["Unknown","We have not yet confirmed the cause."],
  ["Action","Engineers and a field crew are being engaged."],
  ["Next update","We will update you by 15:00, sooner if anything changes."]
 ]},
 script:[
  ["c","Our business is down and nobody has told us anything for an hour."],
  ["a","You deserve better information than that, and I’m sorry. Here’s what I can tell you: since 14:05 a number of customers in your area have lost service. Our network team is working on it, and a crew is being sent. We don’t yet have the cause or an estimate. I’ll call you by 15:00 with an update, and sooner if anything changes.","Owns the gap, states known and unknown, sets a time."]
 ],
 qa:["Known and unknown stated honestly","Next update time given and kept","Plain language without blame","No other customers’ data shared"],
 quiz:[
  ["A good initial message includes:",["What we know, what we don’t, next update time","A guessed cause","Technical jargon"],0,"Clarity and a time."],
  ["If an estimate will slip:",["Tell customers as soon as you know","Wait until the deadline","Hide it"],0,"Be early and honest."],
  ["A resolution message should include:",["When service was restored and what was done","Nothing","A new sales pitch"],0,"Close the loop."]
 ]},

{id:"c13",track:"l3",title:"SLAs, credits and managing expectations",level:"advanced",account:"Northwave Fiber Business",mins:14,
 teach:[
  ["What an SLA says","A service level agreement lists commitments: availability, response and restore times, and remedies such as credits. Read the customer’s contract; do not rely on memory."],
  ["Availability math","99.9 percent availability allows about 43 minutes of downtime in a 30-day month; 99.99 percent allows about 4 minutes. Customers may quote these numbers. Know them."],
  ["What counts as downtime","Contracts exclude planned maintenance, customer-caused faults and force majeure. Measure from the defined start. Be factual: do not promise a credit you cannot approve."],
  ["Credits","Credits are calculated by the contract and approved through a defined process. Explain the process and timeline, not a guess. If a credit is not due, say why kindly and offer other help such as a callback or service review."],
  ["Managing expectations","Be specific about what will happen next, who will do it, and when. Under-promise and over-deliver. If you must say no, offer what you can do."],
  ["Documentation","Record every commitment made. Customers will quote you later."]
 ],
 steps:{h:"Answer a credit request",items:[
  ["Listen","What outage, when, and what was the impact?"],
  ["Check","Find the contract terms and the confirmed outage window."],
  ["Explain","State what the contract says in plain words."],
  ["Process","Explain how to request the credit and how long approval takes."],
  ["Record","Note the conversation and any commitments."]
 ]},
 script:[
  ["c","We were down for three hours. We want a credit."],
  ["a","I’m sorry about the outage and the impact on your business. Let me check the confirmed outage window and your agreement so I give you accurate information. Our records show service was down for two hours and forty minutes. Under your agreement that qualifies for a credit, which I’ll submit now. You’ll see it on your next bill, and I’ll confirm the reference number.","Accurate, contract-based, specific."]
 ],
 qa:["Contract consulted, not memory","No promises beyond authority","Credit process and timing explained","Commitments recorded"],
 quiz:[
  ["99.9 percent monthly availability allows about:",["43 minutes of downtime","4 hours","4 seconds"],0,"About 43 minutes."],
  ["Planned maintenance usually:",["Is excluded from downtime","Always counts","Cancels the contract"],0,"Check the contract."],
  ["If a credit is not due, you:",["Explain why and offer other help","Ignore it","Argue"],0,"Be clear and kind."]
 ]},

{id:"c14",track:"l3",title:"Post-incident reviews: blameless writing that gets things fixed",level:"advanced",account:"All tech accounts",mins:14,
 teach:[
  ["Purpose","A post-incident review (PIR) turns a bad day into learning. It explains what happened, why, how it was handled, and what will change. It is not for punishing people."],
  ["Blameless means system focus","People work within systems. Ask ‘how did the system allow this?’ not ‘who made the mistake?’ You will learn more and people will tell the truth."],
  ["Structure","Summary, impact (who, how many, how long), timeline, root cause and contributing factors, what went well, what went poorly, action items with owners and dates, and lessons."],
  ["Impact numbers","Customers affected, duration, tickets and calls, SLA breaches, credits issued, revenue or reputation impact if known. Use measured data."],
  ["Action items that work","Specific, owned, dated and tied to a cause. ‘Be more careful’ is not an action. ‘Add a pre-change checklist step requiring a staging test by June 30, owner: network team’ is."],
  ["Share and follow up","Publish to the affected teams. Review actions regularly until done. A PIR with no follow-up teaches people to ignore it."],
  ["Customer-facing summary","For business customers, offer a shorter, plain-language version: what happened, what was fixed, what will prevent a repeat."]
 ],
 steps:{h:"PIR outline",items:[
  ["Summary","Two sentences on what happened and the impact."],
  ["Timeline","Events with times and sources."],
  ["Causes","Root cause and contributing factors."],
  ["Learning","What went well; what to improve."],
  ["Actions","Owners, due dates and how success is measured."]
 ]},
 script:[
  ["a","In the review I’d like us to focus on how our process allowed this, not on who pushed the change. The change checklist didn’t require a staging test, so I’m proposing we add one and make it a required step by the end of next month.","Blameless and specific."]
 ],
 qa:["System-focused language, no blame","Impact quantified with data","Actions with owners and dates","Follow-up scheduled"],
 quiz:[
  ["Blameless means:",["Looking at how the system allowed the failure","Nobody is responsible for anything","No review"],0,"Focus on the system."],
  ["Which is a good action item?",["Be more careful","Add a staging test step by June 30, owner network team","Try harder"],1,"Specific and owned."],
  ["A PIR without follow-up:",["Gets ignored","Is perfect","Fixes itself"],0,"Follow up."]
 ]},

{id:"c15",track:"l3",title:"High-stakes customers: executives, regulators and legal threats",level:"advanced",account:"Northwave Fiber Business",mins:16,sim:"sim-l3f",
 teach:[
  ["Same principles, higher pressure","Senior leaders are used to clear answers and quick action. They test whether you are credible. Be concise, prepared and honest."],
  ["Prepare before the call","Read the ticket history, the incident status, the contract and any promised commitments. Know the impact. Have three facts ready: what happened, what is being done, when the next update is."],
  ["Lead with ownership and facts","‘I’m the senior engineer on your case. Here is where we are.’ Do not ramble, do not speculate, do not blame other teams or customers."],
  ["Handle anger","Let them speak. Summarize their key concern. Do not defend. Offer concrete next steps with owners and times."],
  ["Threats of cancellation or legal action","Stay calm. Do not argue the law or admit liability. Say you take the concern seriously, document it and bring in your manager or account team per policy. Never promise outcomes outside your authority."],
  ["Regulators and press","Do not answer directly. Take the contact details and pass the request to the designated team immediately."],
  ["After the call","Send a short written summary with the commitments and times. Log it. Follow up exactly as promised."]
 ],
 steps:{h:"Executive call structure",items:[
  ["Own","Introduce yourself and your role in fixing this."],
  ["Facts","What happened, what is being done, current status."],
  ["Impact","Acknowledge the specific business impact."],
  ["Commit","Give next steps with owners and times."],
  ["Follow up","Written summary and exact follow-ups."]
 ]},
 script:[
  ["c","I’m the CEO. My company has lost two days of sales and I want to know why this keeps happening."],
  ["a","Thank you for taking the time, and I understand the impact on your sales. I’m the senior engineer on your account and I’ve reviewed the history. The cause of the repeated drops is a faulty module in the equipment at your site, which we are replacing tomorrow morning between 8 and 10. I’ll personally confirm with you at noon, and I’ll send a written summary today.","Ownership, facts, specific commitments."]
 ],
 qa:["Prepared with facts before the call","Concise, no speculation","Commitments specific and met","Legal and press contacts handed to the right team"],
 quiz:[
  ["On a call with an executive you should:",["Be concise, factual and own the case","Ramble to fill time","Blame another team"],0,"Credible and clear."],
  ["A customer threatens legal action. You:",["Stay calm, document, involve your manager","Argue the law","Promise anything"],0,"Follow policy."],
  ["A journalist calls for comment:",["Route to the designated team","Answer fully","Ignore the call"],0,"Do not speak for the company."]
 ]},

{id:"c16",track:"l3",title:"TSR L3 exam: mixed review",level:"advanced",account:"All tech accounts",mins:30,
 teach:[
  ["How this exam works","Answer without looking back. Pass is 80 percent, then complete at least three L3 practice calls at 85 percent or better. Missed items return as flashcards."],
  ["What it covers","Network layers, monitoring and alarms, severity and SLAs, outage triage, root cause analysis, problem management, engineering handoffs, incident messages, credits, post-incident reviews and high-stakes customers."],
  ["If you pass","You are ready for the customer service tracks (CSR) in weeks 19 to 22."],
  ["If you miss","Study the lessons you missed, rewrite one incident message and one timeline, and retake after three days."]
 ],
 steps:{h:"Ready for CSR when",items:[
  ["Exam","Score 80 percent or better."],
  ["Calls","Three L3 calls at 85 percent or better."],
  ["Message","Write an initial incident message from memory."],
  ["Timeline","Build a timeline from a set of alarms and tickets."],
  ["Escalation","Write an escalation note engineering would act on."]
 ]},
 script:[
  ["a","I’m seeing several tickets on the same street. Before I call it an outage I want to check whether neighbors on other nodes are affected, and whether there was a change at 14:00.","Starts with pattern and control group."]
 ],
 qa:["Facts before conclusions","Clear incident messages","Evidence in escalations","Calm professional tone"],
 quiz:[
  ["A fault on a shared OLT port affects:",["Everyone behind it","One customer","Nobody"],0,"Shared elements."],
  ["Severity depends on:",["Impact and urgency","The customer’s volume","The day of the week"],0,"Facts."],
  ["During an alarm storm look for:",["The first alarm","The loudest alarm","The last alarm"],0,"Earliest event."],
  ["Five whys stop at:",["A cause you can fix","The first answer","A person to blame"],0,"A fixable cause."],
  ["Initial message includes:",["Known, unknown and next update time","A guessed cause","Jargon"],0,"Honest clarity."],
  ["Blameless reviews focus on:",["The system","The individual","The customer"],0,"System focus."],
  ["99.9 percent monthly availability allows about:",["43 minutes down","4 hours","4 seconds"],0,"About 43 minutes."],
  ["A repeat issue handled three times should become:",["A problem record","A closed ticket","A joke"],0,"Raise a problem."],
  ["A good action item has:",["An owner and a due date","A vague wish","No cause"],0,"Specific."],
  ["A journalist calls. You:",["Route to the designated team","Give a quote","Hang up"],0,"Route it."],
  ["Neighbors on another node are fine. The fault is likely at:",["The node level","The core","Every home"],0,"Control group."],
  ["Update cadence when nothing changed:",["Send a no-change update","Stay silent","Cancel"],0,"Cadence builds trust."]
 ]}
]);

window.EXTRA_SIMS=Object.assign(window.EXTRA_SIMS||{},{
 "sim-l3b":{title:"“This is a P1!”: classify it correctly",account:"Northwave Fiber Business",level:"advanced",lang:"en",lesson:"c6",
  crm:{Name:"Brenda Okafor",Account:"NW-B-11872 (last 4: 1872)",Plan:"Business Fiber 1G, SLA P1 response 15 min",Equipment:"Business gateway, no backup line",Severity_table:"P1: site fully down or critical service down, no workaround. P2: major degradation. P3: single user or partial impact.",Verify:"Name + last 4 + PIN"},
  goal:"Gather facts, classify the incident against the table, give response and update targets, and open the ticket.",
  persona:"Brenda Okafor, 52, office manager at a law firm. Panicked and loud, uses the word P1 repeatedly.",
  issue:"She says the entire office is down.",
  facts:"Last 4: 1872. In reality only the Wi-Fi is down; the wired desks work and the phones work. A reboot of the Wi-Fi access point would fix it. She has 40 staff. She believes a P1 is the only way to get quick help.",
  behavior:"She insists on P1. If the agent asks what is working, she admits the wired desks and phones work. A correct classification is P3 or P2 depending on impact; the agent should explain kindly and still offer fast help (for example a remote reboot). If the agent simply agrees to P1, the call is marked down. If the agent is dismissive, she escalates.",
  mood:"Panicked, defensive, calms when she gets clear targets and a fix."},
 "sim-l3c":{title:"Five tickets on Maple Street",account:"Northwave Fiber Business",level:"advanced",lang:"en",lesson:"c7",
  crm:{Name:"Ray Dalton (NOC contact)",Role:"Network operations duty lead",Tickets:"5 tickets, Maple Street, red Online light, 14:05 to 14:25. No tickets from Oak Street.",Alarms:"Node N-14 link down at 14:03",Maintenance:"Window 14:00 to 14:30, scope: south cabinet only",Power:"Utility reports a local outage at 14:01"},
  goal:"Present the pattern and control group, name the likely shared element, request confirmation, and get customer messaging set up.",
  persona:"Ray Dalton, NOC duty lead, busy and brisk. Wants facts and a clear ask, not rambling.",
  issue:"The agent calls the NOC to propose that the Maple Street tickets are one area incident.",
  facts:"Node N-14 serves Maple Street. A utility power outage began at 14:01, and the cabinet battery lasts about 90 minutes. Maintenance scope does not include N-14. Field has not been dispatched.",
  behavior:"He answers precise questions. He is impatient with vague reports. He confirms the alarm and the power outage when asked specifically. If the agent asks what is happening in general, he says that is not enough to work with. He agrees to open an incident and asks the agent to link tickets and set an IVR message.",
  mood:"Brisk, professional."},
 "sim-l3d":{title:"Bridge call: your update",account:"Northwave Fiber Business",level:"advanced",lang:"en",lesson:"c10",
  crm:{Name:"Incident commander: Mia Torres",Incident:"INC-5521 north node outage, 42 tickets, first at 14:05",Status:"Link down, cause unknown, field not dispatched",Cadence:"Updates every 30 minutes"},
  goal:"Give a concise facts/unknowns/need update on the bridge and ask a specific question.",
  persona:"Mia Torres, calm incident commander who values concise reports. Interrupts rambling.",
  issue:"The agent is the support lead giving the customer-side update on the bridge.",
  facts:"42 tickets, all on the north node. First ticket 14:05. Link-down alarm at 14:03. Cause unknown: power or fiber. Field dispatch not confirmed. Power utility not yet checked.",
  behavior:"She responds well to structured updates (know, don’t know, need). If the agent rambles or speculates a cause, she cuts in and asks for facts. She answers a specific request about field ETA. She sets the next update at 15:00.",
  mood:"Calm, efficient, firm about structure."},
 "sim-l3e":{title:"“Nobody has told us anything for an hour”",account:"Northwave Fiber Business",level:"advanced",lang:"en",lesson:"c12",
  crm:{Name:"Gareth Lloyd",Account:"NW-B-20933 (last 4: 0933)",Incident:"INC-5521 north node outage, cause unknown, field not yet dispatched, next update 15:00",Plan:"Business Fiber 500, P2 SLA",Verify:"Name + last 4 + PIN"},
  goal:"Own the information gap, give a clear initial message (known, unknown, next update), set a callback time and keep it simple.",
  persona:"Gareth Lloyd, 46, owner of a printing business with a deadline. Angry about silence, less about the outage.",
  issue:"His business is offline and nobody contacted him for an hour.",
  facts:"Last 4: 0933. Service has been out since 14:05. He has a deadline to send files at 17:00. A mobile hotspot is available but slow.",
  behavior:"He calms when the agent apologizes for the silence, gives facts, says what is unknown and sets a time. If the agent guesses a cause or promises restoration by a time they cannot guarantee, he repeats the promise later and the call is marked down. He appreciates the hotspot suggestion for the deadline.",
  mood:"Angry at first, calms with clarity."},
 "sim-l3f":{title:"The CEO who lost two days of sales",account:"Northwave Fiber Business",level:"advanced",lang:"en",lesson:"c15",
  crm:{Name:"Helen Marsh (CEO)",Account:"NW-B-77310 (last 4: 7310)",Plan:"Business Fiber 1G",History:"4 tickets in 30 days, repeated drops, root cause: faulty module at site, replacement booked tomorrow 8 to 10",SLA:"P2, credit eligible for downtime over 4 hours",Verify:"Name + last 4 + PIN"},
  goal:"Be concise and credible, own the case, give the facts and commitments, avoid speculation and blame, and handle the cancellation threat calmly.",
  persona:"Helen Marsh, 58, CEO of a regional retailer. Direct, impatient, used to precise answers.",
  issue:"She wants to know why the connection keeps failing and threatens to cancel and consult lawyers.",
  facts:"Last 4: 7310. Her company lost about two days of online sales. The faulty module replacement is booked tomorrow 8 to 10. She has been told different things by different agents.",
  behavior:"She tests the agent. Concise facts and a specific commitment calm her. If the agent rambles, blames another team or promises a credit the agent cannot approve, she escalates. When she threatens legal action, the correct response is to stay calm, document it and involve the manager or account team, without arguing the law.",
  mood:"Sharp and impatient, respects competence."}
});
