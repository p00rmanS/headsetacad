/* TSR L3, weeks 16 and 17 */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"c4",track:"l3",title:"How the provider network is built: access, aggregation, core",level:"advanced",account:"Northwave Fiber Business",mins:16,
 teach:[
  ["Why L3 needs a map","You cannot triage an outage without knowing what feeds what. A problem high in the network hits many customers; a problem at the edge hits one. The map tells you who else is probably affected."],
  ["Three layers","Access: the last stretch to the customer (fiber, coax, DSL, wireless). Aggregation: devices that collect many access links into bigger ones. Core: the high-capacity backbone and connections to other networks and the internet."],
  ["Fiber access","A passive optical network splits one fiber from an OLT (optical line terminal) among many customers’ ONTs. A fault on the shared fiber or at the OLT affects everyone behind it. A fault on the drop to one home affects one."],
  ["Cable access","A CMTS serves a group of customers on a shared coax node. Noise or a fault on a node causes errors for the whole node. A loose connector at one home can also add noise to neighbors."],
  ["Supporting services","DHCP gives addresses, DNS resolves names, RADIUS or similar systems authenticate customers, provisioning systems configure equipment. A failure here affects many customers even though the lines are fine."],
  ["Upstream and peering","The provider connects to other networks (transit and peering). A problem there makes only some destinations slow or unreachable, while local traffic is fine."],
  ["Power and facilities","Cabinets, huts and cell sites run on mains with battery backup. Storms and fires cause clusters of failures. A location pattern often means a power or facility cause."],
  ["Use the map in triage","Ask: how many customers share this element? Which are affected? Which are not? The overlap points to the failing element."]
 ],
 steps:{h:"Map a problem to a network layer",items:[
  ["Who is affected","One customer, a street, a node/PON, a town, or everyone?"],
  ["What is affected","Everything, only some sites, only a service (DNS, email, voice)?"],
  ["Shared element","What do the affected customers share: a node, OLT port, cabinet, upstream link?"],
  ["Compare","Are customers on neighboring elements unaffected?"],
  ["Hypothesis","State the most likely failing element and who to engage."]
 ]},
 script:[
  ["a","I’m looking at several tickets from the same area. Before I call it an outage I want to know what these customers share. Are they all on the same street, and do you know whether your neighbors are affected too?","Looks for a shared element."]
 ],
 qa:["Scope of impact established","Shared network element identified","Hypothesis stated with the evidence","Right team engaged"],
 quiz:[
  ["A fault on a shared OLT port affects:",["One customer","Everyone behind it","Nobody"],1,"Shared elements impact many."],
  ["Customers can reach local sites but not some far sites. Suspect:",["Upstream or peering","A loose cable at one home","The Wi-Fi"],0,"Upstream issues affect some destinations."],
  ["DNS failure across the network looks like:",["Pings to IPs work but names fail for many","Total power loss","One bad cable"],0,"A shared service fault."]
 ]},

{id:"c5",track:"l3",title:"Monitoring, alarms and logs: what engineering sees",level:"advanced",account:"Northwave Fiber Business",mins:16,
 teach:[
  ["Monitoring in plain words","Network gear reports its health through alarms, metrics and logs. Systems poll devices (SNMP), collect traffic data (NetFlow) and gather text logs (syslog). The network operations center (NOC) watches these screens."],
  ["Alarms","An alarm says something crossed a threshold or changed state: a link down, high temperature, power loss, loss of signal. Alarms have a severity (critical, major, minor, warning). One fault can cause many alarms (a storm), so look for the first one."],
  ["Metrics and trends","Utilization, error counts, signal levels and latency over time. A slow trend shows a developing fault. A sudden step shows a failure or change."],
  ["Logs and timestamps","Logs tell the story in order. Match the customer’s complaint time to the log. Use one time zone, and note whether times are UTC or local."],
  ["Correlate","Line up alarms, changes, weather and customer tickets on one timeline. If tickets begin right after a change, the change is a prime suspect."],
  ["Know your access","As L3 you may view dashboards and logs. Use only what your role allows and record what you looked at. Never share screenshots outside approved channels."],
  ["Questions to ask","Is the element reporting? Was there a change? Is the alarm still active? How many customers are mapped to this element? Is a power or fiber event reported?"]
 ],
 steps:{h:"Build an incident timeline",items:[
  ["Start","When did the first alarm or the first ticket arrive?"],
  ["Changes","Any change, maintenance or deployment near that time?"],
  ["Correlate","Line up alarms, metrics and tickets in time order."],
  ["Impact","Count affected customers and services."],
  ["Share","Post a clear timeline for engineering and managers."]
 ]},
 script:[
  ["a","I’ve built a timeline: at 14:02 the first customer tickets arrive, at 14:03 the alarm for link down on the north aggregation switch fires, and a maintenance window was scheduled for 14:00. Can you confirm whether the maintenance touched that switch?","Presents evidence and asks a precise question."]
 ],
 qa:["Single time zone used and stated","First alarm identified, not just the loudest","Changes and weather checked","Timeline posted in the approved channel"],
 quiz:[
  ["During an alarm storm, you look for:",["The first alarm","The loudest alarm","The newest alarm"],0,"The earliest event often shows the cause."],
  ["Why note the time zone?",["Logs mix UTC and local","It is decorative","It is not needed"],0,"Mismatched time causes errors."],
  ["Tickets spike right after a change. Suspect:",["The change","The weather","The customer"],0,"Correlate with changes."]
 ]},

{id:"c6",track:"l3",title:"Severity, priority and SLAs: deciding what is a P1",level:"advanced",account:"Northwave Fiber Business",mins:16,sim:"sim-l3b",
 teach:[
  ["Impact and urgency","Severity depends on impact (how many people and how badly) and urgency (how fast the harm grows). A hospital line down is high on both. One customer’s slow Wi-Fi is low on both."],
  ["Typical levels","P1/SEV1: critical, many customers or a critical service down, no workaround. P2/SEV2: major degradation or a high-value customer fully down. P3/SEV3: single customer or partial impact. P4/SEV4: questions or minor issues. Use your company’s definitions."],
  ["SLAs and targets","An SLA is a promise: for example, respond within 15 minutes for P1, restore within 4 hours. Missing it may cost credits. Know the clock: when does it start, when does it stop, and what pauses it?"],
  ["Customer claims vs facts","Customers say ‘this is critical’. Ask what is down, who is affected, whether there is a workaround and the business impact. Classify on facts, and explain the level kindly."],
  ["Reclassify when facts change","An incident can be raised or lowered. Document why. Raising too often hides real emergencies; lowering to avoid work is a serious failing."],
  ["Communicate the level","Tell the customer the severity, the target response and restoration time, and what you will do. This sets expectations and reduces calls."],
  ["Fairness","Treat similar cases the same. Prioritization by who shouts loudest is unfair and causes harm."]
 ],
 steps:{h:"Classify an incident",items:[
  ["Impact","Who and what is affected? How many users or sites?"],
  ["Urgency","What is the harm and how fast does it grow?"],
  ["Workaround","Is there a safe workaround?"],
  ["Match","Compare with your severity table and the customer’s SLA."],
  ["Explain","Tell the customer the level, targets and next update time."]
 ]},
 script:[
  ["c","This is a P1! My entire office is down!"],
  ["a","I understand how serious this is. Let me confirm a few facts so I classify it correctly and get the right team on it. How many sites are affected, and is there any service still working, such as a backup line?","Respects urgency, asks fact questions."],
  ["c","One office, 40 people, no backup."],
  ["a","Thank you. A full business outage at a site with no workaround meets our critical definition, so I’m treating it as a priority one. Our target is a response in 15 minutes and updates every 30. Here’s your ticket number.","Classifies, gives targets, gives reference."]
 ],
 qa:["Facts gathered before classification","Severity matches the table and SLA","Targets and next update time stated","Reclassification documented"],
 quiz:[
  ["Severity is decided by:",["Impact and urgency","How loud the customer is","The time of day"],0,"Facts, not volume."],
  ["An SLA clock usually starts:",["When the ticket is opened or the incident is acknowledged per contract","Never","At random"],0,"Know the contract."],
  ["Lowering severity to avoid work is:",["Acceptable","A serious failing","Required"],1,"Document honest reclassification only."]
 ]},

{id:"c7",track:"l3",title:"Single customer or area outage? Pattern recognition across tickets",level:"advanced",account:"Northwave Fiber Business",mins:18,sim:"sim-l3c",
 teach:[
  ["The same question as c1, at scale","Here you read many signals together: tickets, alarms, weather, maintenance and map data. The goal is to spot an area event early and avoid sending customers through useless steps."],
  ["Spot the cluster","Several tickets from one postcode or street in a short window suggests a shared cause. Map them. Check whether affected customers share a node, OLT port or power source."],
  ["Check the control group","Find customers in the same area who are not affected. If neighbors on a different node are fine, the fault is probably at the node level."],
  ["External causes","Storms, fires, road works and power cuts. Search for news, utility outage maps and field reports. A power cut often takes cabinets offline when batteries run out."],
  ["Avoid false clusters","A promotion, a software update on a popular device or a social media post can cause a spike in tickets that is unrelated to the network. Check the symptom is the same."],
  ["Declare early, with evidence","If the evidence meets your criteria, open or link to an incident, notify the NOC and set the outage banner or IVR message so customers get information instead of waiting."],
  ["Link, don’t duplicate","Attach new customer tickets to the incident so engineering sees a single number and the customers receive the same updates."]
 ],
 steps:{h:"Cluster check",items:[
  ["Collect","List tickets from the last hour with address and symptom."],
  ["Map","Group by street, node or PON. Is there a hotspot?"],
  ["Control","Find nearby customers who are fine."],
  ["External","Check weather, power, road works and planned maintenance."],
  ["Declare","Open or link to an incident; update the IVR and status page."]
 ]},
 decide:{h:"Decision tree: outage or single customer",nodes:[
  {q:"Are three or more customers in the same area reporting the same symptom?",b:"Yes",out:"Treat as a likely area event. Check alarms and call the NOC."},
  {q:"Do the affected customers share a node, PON or power source?",b:"Yes",out:"Hypothesis: that element. Raise an incident with the shared element named."},
  {q:"Is any external cause reported (storm, power, road works)?",b:"Yes",out:"Link the cause in the incident and inform customers."},
  {end:"If none of these apply, handle as a single-customer issue and continue diagnostics."}
 ]},
 script:[
  ["a","I’m seeing five tickets on Maple Street in the last twenty minutes, all with a red Online light. Neighbors on Oak Street, served from a different node, aren’t reporting anything. That pattern points to a node-level fault. I’m raising an incident and notifying the network operations team.","Evidence, control group, action."]
 ],
 qa:["Clusters mapped with evidence","Control group checked","External causes checked","Customer tickets linked to one incident"],
 quiz:[
  ["Why look at neighbors who are fine?",["It identifies the failing element","It wastes time","It is policy"],0,"The control group narrows the cause."],
  ["A spike after a viral post may be:",["A false cluster","A fiber cut","A power fault"],0,"Check the symptom first."],
  ["New tickets for the same incident should be:",["Linked to the incident","Closed immediately","Ignored"],0,"Link them."]
 ]},

{id:"c8",track:"l3",title:"Root cause analysis: timelines, the five whys and change correlation",level:"advanced",account:"All tech accounts",mins:16,
 teach:[
  ["Symptoms, causes, root causes","A symptom is what users see. An immediate cause is what directly produced it. A root cause is the underlying reason that, if fixed, prevents repeat. Restoring service is not the same as fixing the root cause."],
  ["Start with a timeline","List events in order with times: change, alarm, first ticket, actions, restore. Gaps in the timeline are questions to chase."],
  ["The five whys","Ask why repeatedly. Why did customers lose service? A switch failed. Why? It rebooted. Why? A software bug triggered a crash. Why now? A new configuration was pushed. Why was it not caught? No test in staging. Stop when the answer is something you can fix."],
  ["Contributing factors","Most incidents have several: a latent bug, a missed alert, a manual step, a lack of redundancy. List them without blame."],
  ["Change correlation","Check changes in the previous 24 to 72 hours: configs, firmware, maintenance, capacity changes and third-party work. Many outages follow a change."],
  ["Evidence over opinion","Mark each statement as fact, inference or hypothesis. State what data supports it. Avoid declaring a cause until evidence supports it."],
  ["Corrective and preventive actions","Corrective: fix this problem. Preventive: stop the class of problem, with an owner and a due date. Track them to completion."]
 ],
 steps:{h:"Five whys worked example",items:[
  ["Symptom","Fifty customers lost service for 40 minutes."],
  ["Why 1","The aggregation switch rebooted."],
  ["Why 2","A software bug crashed the switch under a rare condition."],
  ["Why 3","A new configuration, pushed that afternoon, triggered the condition."],
  ["Root cause and fix","The change had no staging test. Add a staging test and a rollback step."]
 ]},
 script:[
  ["a","Before we name a cause, let me line up the facts. The first alarm was at 14:03, the change was applied at 13:58 and the first tickets came in at 14:05. That fits a change-related fault, but I’d like engineering to confirm before we call it.","Separates fact from inference."]
 ],
 qa:["Timeline with times and sources","Facts, inferences and hypotheses labeled","Changes checked","Actions have owners and dates"],
 quiz:[
  ["Restoring service is:",["Not the same as fixing the root cause","Always the root cause fix","Unneeded"],0,"Prevent recurrence too."],
  ["The five whys stop when:",["You reach something you can fix","You run out of time","You blame someone"],0,"A fixable cause."],
  ["A statement without evidence is:",["A hypothesis","A fact","A root cause"],0,"Label it."]
 ]},

{id:"c9",track:"l3",title:"Incident vs problem management",level:"advanced",account:"All tech accounts",mins:12,
 teach:[
  ["Two different jobs","Incident management restores service quickly. Problem management finds and removes the underlying cause so incidents stop recurring. Mixing the two slows both."],
  ["Incident goals","Reduce time to detect, acknowledge and restore. Workarounds are welcome. Notes should record what restored service even if the cause is unknown."],
  ["Problem goals","Investigate trends: repeated tickets for the same cause, chronic faults, near-misses. Produce a known error record and a permanent fix."],
  ["Known errors and workarounds","When a cause is understood but not yet fixed, document it with a workaround so the front line can resolve it quickly next time."],
  ["Link everything","Link each incident to its problem record. Repeat incidents then show their cost, and make the case for the permanent fix."],
  ["Your role as L3","Spot patterns. If you handle the same cause three times, propose a problem record with evidence: ticket numbers, affected customers, time lost."]
 ],
 steps:{h:"From incident to problem",items:[
  ["Restore","Restore service first; record the workaround."],
  ["Notice","Is this a repeat? Search for similar tickets."],
  ["Raise","Open a problem record with evidence."],
  ["Link","Attach the incidents."],
  ["Publish","Write a known-error article for the front line."]
 ]},
 script:[
  ["a","This is the fourth ticket this month with the same symptom on the same model of gateway. I’m opening a problem record, attaching all four, and drafting a workaround for the front line while engineering looks for the cause.","Recognizes a repeat and acts."]
 ],
 qa:["Workaround documented","Repeat patterns identified","Problem record has evidence","Known-error article written"],
 quiz:[
  ["Incident management aims to:",["Restore service quickly","Find all root causes","Close tickets slowly"],0,"Restore first."],
  ["Problem management aims to:",["Remove the underlying cause","Answer the phone","Change prices"],0,"Prevent repeats."],
  ["A known-error article gives:",["A cause and a workaround","A refund","A password"],0,"Helps the front line."]
 ]},

{id:"c10",track:"l3",title:"Working with engineering: handoffs, bridges and status updates",level:"advanced",account:"Northwave Fiber Business",mins:16,sim:"sim-l3d",
 teach:[
  ["Engineers are your partners","Engineering is busy and focused. A clear request gets fast help. A vague one gets questions and delay. Your job is to make the next person’s work easy."],
  ["The bridge call","For major incidents a conference bridge brings people together. Roles: incident commander (runs it), operations leads (fix), communications lead (updates), scribe (notes). Speak only when you have facts or a request."],
  ["Reporting on the bridge","Use a short format: what I know, what I don’t know, what I need. Example: ‘Forty tickets, all on the north node, first at 14:05, the NOC sees the link down. I don’t yet know if power is involved. I need field dispatch confirmed.’"],
  ["Ask crisp questions","Not ‘what’s happening?’ but ‘Is the OLT port alarm active, and when do we expect field arrival?’"],
  ["Status updates on a cadence","Agree an update time (for example every 30 minutes) and keep it even if there is nothing new: ‘No change, next update at 15:30.’ Silence causes escalation."],
  ["Handoffs","At shift change give a written handoff: current state, hypotheses, actions in flight, owners, next steps. Never leave the next person to guess."],
  ["Respect and tone","Stay calm and factual. Thank people. Do not blame in public channels. Keep side chats off the main bridge."]
 ],
 steps:{h:"Speak on the bridge",items:[
  ["Know","State the facts you have, with times."],
  ["Don’t know","Say what is unconfirmed."],
  ["Need","State the specific request and who you want to act."],
  ["Confirm","Repeat back the action and owner."],
  ["Record","Write it in the incident log."]
 ]},
 script:[
  ["a","Update from support: forty-two customer tickets, all on the north node, first at 14:05. We know the link is down. We don’t know yet whether the cause is power or fiber. I need field dispatch to confirm an ETA. Can the network lead confirm that?","Facts, unknowns, a specific request."],
  ["c","Field is two hours out; power utility reports an outage in the area."],
  ["a","Thank you. I’ll tell customers it’s a power-related outage with restoration expected in about two hours and update at fifteen thirty.","Turns engineering information into a customer message with a time."]
 ],
 qa:["Facts, unknowns and requests separated","Updates on an agreed cadence","Written handoffs at shift change","Calm, respectful tone"],
 quiz:[
  ["On a bridge you should speak:",["When you have facts or a request","Constantly","Never"],0,"Keep it focused."],
  ["If nothing has changed at the update time:",["Send a no-change update","Stay silent","Cancel the update"],0,"Cadence builds trust."],
  ["A good handoff includes:",["State, hypotheses, actions, owners, next steps","Only the ticket number","Nothing"],0,"Written and complete."]
 ]},

{id:"c11",track:"l3",title:"Chronic and repeat issues: finding the pattern across tickets",level:"advanced",account:"Northwave Fiber",mins:14,
 teach:[
  ["Why repeats happen","A fix that treats the symptom brings the customer back. Repeat contacts hurt the customer and your numbers. L3 is where chronic issues are finally solved."],
  ["Read the history","Before you act, read all previous tickets: what was tried, what the customer was told and any promises that were made. Do not repeat steps that failed."],
  ["Look for the common thread","Same time of day? Same device? Same equipment model or firmware? Same area? A single common thread often points to the cause."],
  ["Own the case","Assign yourself as the case owner, tell the customer you will follow through, and set a callback date. One owner prevents the customer repeating the story."],
  ["Escalate with a full file","Summarize: customer, timeline of issues, steps tried, evidence, and the question for engineering. Attach logs and test results."],
  ["Follow through","Call back when promised, even with no news. When fixed, confirm with the customer that it stayed fixed before closing the case."]
 ],
 steps:{h:"Chronic issue file",items:[
  ["History","List every prior contact with dates and results."],
  ["Pattern","Time, device, location or equipment in common?"],
  ["Hypothesis","What cause fits all the facts?"],
  ["Ownership","Take the case, set a callback date."],
  ["Escalate","Send a full file to engineering."]
 ]},
 script:[
  ["c","This is the fifth time I’m calling. It always drops in the evening."],
  ["a","Five calls is far too many, and I’m sorry. I’ve read all of the earlier tickets so you won’t need to repeat anything. I’m taking ownership of this case, and I’ll call you on Thursday with an update whether or not I have news. What I see is that all five happened between 7 and 9 in the evening, which suggests a pattern we can chase.","Ownership, history read, pattern named."]
 ],
 qa:["Prior history read and referenced","Case ownership taken","Callback date set and kept","Full escalation file attached"],
 quiz:[
  ["Before acting on a chronic case you:",["Read the entire history","Start from scratch","Close the case"],0,"Do not repeat failed steps."],
  ["A common thread might be:",["Time of day or equipment model","The agent’s name","The weather in another city"],0,"Look for patterns."],
  ["Case ownership means:",["One person follows through","Nobody follows","The customer calls daily"],0,"One owner."]
 ]}
]);
