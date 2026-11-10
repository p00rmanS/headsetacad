/* ============================== CONTENT ============================== */
const TRACKS = [
  {id:"found", code:"F-00", name:"Foundations", blurb:"Call flow, empathy, de-escalation, hold and transfer, ticket notes. Every role starts here."},
  {id:"l1", code:"TSR-L1", name:"Tech Support L1", blurb:"Front-line fixes: connectivity, passwords, printers. Isolate, fix, confirm, document."},
  {id:"l2", code:"TSR-L2", name:"Tech Support L2", blurb:"DNS and IP, intermittent Wi-Fi, email profiles. Deeper diagnostics with command-line tools."},
  {id:"l3", code:"TSR-L3", name:"Tech Support L3", blurb:"Outage triage, engineering escalations, and incident communication with business customers."},
  {id:"csr", code:"CSR", name:"Customer Service", blurb:"Billing, orders and returns, fraud disputes, insurance claims and retention across four accounts."},
  {id:"es", code:"BIL-ES", name:"Bilingual Spanish", blurb:"Run the same calls in Spanish: greetings, verification, tech and billing vocabulary, empathy."}
];

const ACCOUNTS = {
  "Northwave Fiber":"Telecom / ISP",
  "Brightdesk IT":"Software & devices helpdesk",
  "Harborline Bank":"Banking",
  "Cartwell":"Retail & e-commerce",
  "Meridian Health Plan":"Health insurance"
};

const LESSONS = [
/* ---------- FOUNDATIONS ---------- */
{id:"f1",track:"found",title:"The call flow: open, verify, discover, resolve, close",level:"basic",account:"All accounts",mins:12,
 teach:[
  ["Why a call flow","Every QA scorecard follows the shape of the call. If you know the five stages and what QA listens for in each, you can score well on any account, even one you have never worked. The stages are Open, Verify, Discover, Resolve and Close."],
  ["Open (first 10 seconds)","Brand the call, give your name, and offer help: “Thank you for calling Northwave Fiber, this is Jordan. How can I help you today?” Smile while you say it; it changes your tone. Do not start with “Account number?” before the customer has spoken."],
  ["Verify","Confirm identity before you discuss or change anything on the account. Each account has its own policy (name plus last four of the account, a PIN, date of birth, a one-time code). Ask with a reason: “To protect your account, can you confirm…”. Never read the data to the customer and ask them to say yes."],
  ["Discover","Let the customer finish their story, then restate it in one sentence. Use open questions first (“Walk me through what happens when you…”), then closed questions to pin details (“Is the light solid or blinking?”)."],
  ["Resolve","Explain what you are going to do before you do it. Give one instruction at a time and wait for the result. If you cannot fix it, own the next step: ticket number, who will act, and when."],
  ["Close","Summarize what was done, confirm the issue is resolved, ask “Is there anything else I can help you with today?”, and brand the closing. Then write your notes before taking the next call."]
 ],
 steps:{h:"The five stages at a glance",items:[
  ["Open","Thank you for calling [Company], this is [Name]. How can I help you today?"],
  ["Verify","I can help with that. To protect your account, can you please confirm your full name and the last four digits of your account number?"],
  ["Discover","Just so I make sure I have it right: since this morning your internet light is red and nothing loads. Is that correct?"],
  ["Resolve","Here is what we will do: first, check the cables, then restart the modem. It takes about three minutes. Ready?"],
  ["Close","Your connection is back and stable. Is there anything else I can help you with today? Thank you for choosing [Company]."]
 ]},
 script:[
  ["a","Thank you for calling Northwave Fiber, this is Jordan. How can I help you today?"],
  ["c","Hi, my internet has been out since this morning."],
  ["a","I’m sorry it’s been down all morning, I’ll get that sorted with you. To protect your account, can you confirm your full name and the last four of your account number?","Empathy statement before verification, with a reason for verifying."],
  ["c","Maria Lopez, 4417."],
  ["a","Thank you, Maria, you’re verified. So since this morning nothing loads at all. What do you see on the lights on your modem?","Restates the issue, then an open question."]
 ],
 qa:["Branded greeting with name in the first sentence","Verification asked with a reason, before account details are discussed","Issue restated back to the customer","Closing summary plus “anything else”"],
 quiz:[
  ["A customer starts reading their account number before you finish your greeting. What should you do?",["Interrupt and ask them to start over","Let them finish, then complete verification per policy","Skip verification since they offered the number"],1,"Let the customer speak, then complete the full verification the account requires. Offering a number is not verification."],
  ["Which question is the best first discovery question?",["Is your modem on?","Can you walk me through what happens when you try to connect?","Did you restart it?"],1,"Open questions first. They give you the story and the clues; closed questions come next."],
  ["What must come before discussing account details?",["Verification","Closing","Ticket notes"],0,"Never discuss or change account details before the caller is verified."]
 ]},

{id:"f2",track:"found",title:"Empathy and active listening that QA can hear",level:"basic",account:"All accounts",mins:10,
 teach:[
  ["Empathy is a sentence, not a feeling","QA cannot score what you felt. It scores what you said. An empathy statement names the customer’s situation and its impact: “Being without internet while you work from home is really disruptive.” Then pivot to action: “Let’s get it fixed.”"],
  ["Acknowledge, Align, Assure (AAA)","Acknowledge the issue, align with the customer (“I’d want this fixed too”), and assure them of your next step (“I’m going to stay with you until it’s working”). Use AAA at the start of the call and again whenever emotion rises."],
  ["Active listening behaviors","Do not interrupt. Use short verbal nods (“I see”, “Okay”, “Got it”). Paraphrase. Ask a clarifying question about something they said; it proves you heard it. Never make the customer repeat information they already gave you."],
  ["Phrases to avoid","“Calm down.” “That’s not my department.” “You should have…” “Policy says…” (on its own). “Like I said…” Replace them with positive language: say what you can do, not what you can’t."]
 ],
 steps:{h:"Swap negative language for positive",items:[
  ["Instead of “I can’t do that”","What I can do right now is…"],
  ["Instead of “You have to”","The quickest way to fix this is to…"],
  ["Instead of “Calm down”","I hear how frustrating this is, and I’m going to help."],
  ["Instead of “That’s not my department”","The billing team handles that, and I’m going to connect you directly so you don’t have to explain it again."]
 ]},
 script:[
  ["c","This is the third time I’m calling about this. Nobody ever fixes anything."],
  ["a","Three calls for the same problem is a lot, and I understand why you’re frustrated. I’d feel the same. I’m going to review what was done before so you don’t have to repeat it, and I’ll stay on until we have a fix or a clear next step.","Acknowledge, Align, Assure."]
 ],
 qa:["Empathy statement that names the specific situation","No interruptions; customer finishes their thoughts","Positive language (what you can do)","No requests for information the customer already gave"],
 quiz:[
  ["Which is the strongest empathy statement?",["I understand.","Sorry about that.","Losing your connection during a work meeting is really disruptive. Let’s fix it now."],2,"It names the specific situation and its impact, then moves to action."],
  ["The customer already gave their address. Later you need it again. What should you do?",["Ask them to repeat it","Confirm what they gave: “I have 22 Pine Street, is that right?”","Skip it"],1,"Confirming shows you listened and avoids making them repeat themselves."],
  ["What does AAA stand for?",["Ask, Answer, Assist","Acknowledge, Align, Assure","Apologize, Apologize, Apologize"],1,"Acknowledge the issue, align with the customer, assure them of the next step."]
 ]},

{id:"f3",track:"found",title:"De-escalation: the angry caller",level:"intermediate",account:"Northwave Fiber",mins:14,sim:"sim-f1",
 teach:[
  ["Let the wave pass","An upset customer needs to vent before they can listen. Stay silent except for short acknowledgements until they pause. Interrupting resets the anger."],
  ["Lower and slow down","Match their urgency, not their volume. Speak a little slower and lower than them. Use their name once, calmly."],
  ["Take ownership with specifics","“I’m sorry for the trouble” is weak. “I see two previous tickets that were closed without a technician visit. That shouldn’t have happened, and I’m going to fix that today” is ownership."],
  ["Offer choices","People calm down when they regain control. “I can send a technician Thursday morning or Friday afternoon. Which works better?”"],
  ["Abusive language","You can set a boundary politely: “I want to help you, and I need us to keep this respectful so I can.” If abuse continues, follow your account’s policy (usually one warning, then supervisor or disconnect). Document it."]
 ],
 steps:{h:"The HEARD method",items:[
  ["Hear","Let them finish. Short nods only: “I understand.” “Go on.”"],
  ["Empathize","Being without service for three days and having to call again is exhausting."],
  ["Apologize (once, specifically)","I’m sorry the last two visits were cancelled without anyone calling you."],
  ["Resolve","Here’s what I’m doing right now: a priority technician ticket, and a credit for the days you were down."],
  ["Diagnose / Document","Note the root cause and what you promised so the next agent doesn’t repeat history."]
 ]},
 script:[
  ["c","I have been without internet for three days! You people cancelled my technician TWICE!"],
  ["a","Mr. Grant, three days without service and two cancelled visits is unacceptable, and I’m sorry that happened. Let me look at both tickets right now.","Uses name, names the specific failure, apologizes once, moves to action."],
  ["c","You’re going to tell me the same thing everyone else did."],
  ["a","I can see why you’d expect that. Here’s what’s different: I’m booking this as a priority repair, I’ll give you the ticket number, and I’m adding a three-day service credit. Would Thursday morning or Friday afternoon work better?","Specifics plus a choice."]
 ],
 qa:["Customer allowed to vent without interruption","Specific apology (not repeated “sorry”)","Ownership with concrete next steps and a timeline","Choice offered to the customer","Calm, professional tone throughout"],
 quiz:[
  ["The customer is yelling. What do you do first?",["Ask them to calm down","Let them finish, with brief acknowledgements","Place them on hold"],1,"Let the wave pass. Interrupting or holding usually escalates."],
  ["Why offer two appointment options instead of one?",["It sounds more professional","It returns a sense of control to the customer","It’s faster"],1,"Choices give control back, which reduces anger."],
  ["The customer uses repeated personal insults. Best first step?",["Hang up","Set a respectful boundary and continue helping","Insult them back"],1,"Give a polite boundary first; follow the account’s abuse policy if it continues."]
 ]},

{id:"f4",track:"found",title:"Hold, transfer and ticket notes",level:"basic",account:"All accounts",mins:10,
 teach:[
  ["Hold etiquette","Ask permission, give a reason and a time: “May I place you on a brief hold while I check the outage map? It should be about two minutes.” Return before the time you promised, or check in. Thank them when you return."],
  ["Warm vs cold transfer","A warm transfer means you brief the next agent before connecting the customer, so they don’t repeat themselves. Most QA forms require warm transfers when possible. Tell the customer who you are transferring them to and why."],
  ["Ticket notes are graded","Notes are how the next agent, L2, or engineering continues your work. A good note is short and complete: issue, verification, steps tried and results, resolution or next step, and what you promised."],
  ["The note format","Use a consistent structure such as: ISSUE / VERIFIED / TROUBLESHOOTING / RESULT / NEXT STEP. No opinions about the customer. Write facts."]
 ],
 steps:{h:"Ticket note template",items:[
  ["ISSUE","Cust reports no internet since 8am, modem online light red."],
  ["VERIFIED","Name + last 4 of acct."],
  ["TROUBLESHOOTING","Checked coax (loose at wall, tightened). Power cycled modem 60s."],
  ["RESULT","Online light solid white, speed test 480/22 Mbps. Resolved."],
  ["NEXT STEP","None. Advised to call back if drops recur; offered self-help article."]
 ]},
 script:[
  ["a","I’d like to check whether there’s an outage in your area. May I place you on a brief hold? It should be about two minutes."],
  ["c","Sure."],
  ["a","Thank you for holding, Ms. Lee. Good news: there’s no outage in your area, so it’s something we can fix at your end. Let’s check your cables next.","Thanks them, gives the result, explains the next step."]
 ],
 qa:["Permission, reason and time given before hold","Thanked customer after hold","Warm transfer with explanation to the customer","Notes contain issue, verification, steps, result and next step"],
 quiz:[
  ["What three things should you say before a hold?",["Name, number, address","Permission, reason, expected time","Sorry, sorry, sorry"],1,"Ask permission, say why, and say how long."],
  ["What makes a transfer “warm”?",["You speak to the next agent first and pass the context","The customer is told it’s a transfer","It happens quickly"],0,"Warm transfers pass the context so the customer doesn’t repeat themselves."],
  ["Which belongs in ticket notes?",["Customer was rude and annoying","Power cycled modem 60s; online light solid; speed 480/22","Called about stuff"],1,"Notes are factual: steps and results."]
 ]},

/* ---------- TSR L1 ---------- */
{id:"a1",track:"l1",title:"Troubleshooting method: isolate before you fix",level:"basic",account:"All tech accounts",mins:10,
 teach:[
  ["The method","Good technicians don’t guess. They narrow it down: Is it one device or all devices? One website or all websites? Wired or wireless? Started when? Anything changed? Each answer cuts the problem in half."],
  ["Work bottom-up","For connectivity, check from the physical layer upward: power, cables, lights, then the network settings, then the application. Most L1 tickets are solved in the first two layers."],
  ["One change at a time","Change one thing, test, record the result. If you change three things at once and it works, you don’t know what fixed it, and your notes can’t help the next agent."],
  ["Talk the customer through it","Customers can’t see what you see. Give one instruction, describe what they should see, and wait for confirmation: “On the back there’s a round cable that screws in. Can you check it’s finger-tight?”"]
 ],
 steps:{h:"Isolation questions",items:[
  ["Scope","Is this happening on every device in the home, or just this one?"],
  ["Timing","When did it start? Did anything change around then, like a storm, a move, or a new device?"],
  ["Pattern","Does it happen all the time, or at certain times of day?"],
  ["Error","Do you see an error message? Can you read it to me exactly?"],
  ["Previous steps","What have you already tried, so we don’t repeat it?"]
 ]},
 script:[
  ["c","My laptop won’t connect."],
  ["a","Let’s narrow it down. Are your phone or other devices able to get online right now?"],
  ["c","Yeah, my phone works on the Wi-Fi."],
  ["a","That’s really useful. It means your internet service is fine, and we’re looking at something on the laptop itself.","Explains the meaning of the result in plain language."]
 ],
 qa:["Scope and timing questions asked before any fix","One instruction at a time with confirmation","Explains results in plain language","Steps and results documented"],
 quiz:[
  ["A phone works on Wi-Fi but a laptop doesn’t. Where is the problem most likely?",["The ISP network","The laptop","The power grid"],1,"Other devices work, so the service is up. Focus on the laptop."],
  ["Why change one thing at a time?",["It takes longer","You know what fixed it and can document it","QA requires slowness"],1,"Single changes make the fix clear and repeatable."],
  ["Bottom-up troubleshooting starts with:",["Reinstalling the app","Power, cables and lights","Calling engineering"],1,"Physical layer first."]
 ]},

{id:"a2",track:"l1",title:"No internet: modem and router power cycle",level:"basic",account:"Northwave Fiber",mins:15,sim:"sim-l1a",
 teach:[
  ["What the lights mean","Most Northwave gateways show Power, Online (or Internet), and Wi-Fi lights. Solid white or green usually means good. Blinking Online means the modem is trying to reach the network. Red or amber Online means no connection to the network."],
  ["Check the outage map first","Before you troubleshoot, check for an area outage. If there is one, don’t walk the customer through resets: give the estimated restore time, and offer outage alerts by text."],
  ["Cables before resets","Loose coax or fiber cables are common after storms, cleaning, or furniture moves. Ask the customer to check the cable from the wall to the modem is finger-tight, and the power cable is firmly in."],
  ["The proper power cycle","Unplug the modem (and separate router if they have one) from power, wait a full 60 seconds, plug the modem in first, wait until Online is solid (2 to 5 minutes), then plug in the router. Order matters."],
  ["Confirm the fix","Ask them to load a site and run a speed test. Compare to their plan speed. Record both numbers in your notes."]
 ],
 steps:{h:"Step by step: No internet",items:[
  ["1. Verify and check outage","May I place you on a brief hold while I check for outages in your area? About one minute."],
  ["2. Read the lights","Can you tell me which lights are on at the front of the modem, and whether any are blinking or red?"],
  ["3. Check cables","Please follow the round cable from the wall to the back of the modem and make sure it’s screwed in finger-tight."],
  ["4. Power cycle","Unplug the modem’s power cord, wait a full 60 seconds, then plug it back in. I’ll stay on the line while it starts up."],
  ["5. Confirm","When the Online light turns solid, please open a website. Then let’s run a quick speed test together."],
  ["6. Escalate if needed","If Online is still red after the restart, I’ll run a signal test from here and book a technician if needed."]
 ]},
 script:[
  ["a","Can you tell me which lights are on at the front of the modem?"],
  ["c","Power is white, the one with the globe is blinking orange."],
  ["a","Thanks, that tells me the modem is on but can’t reach our network. After storms, the cable on the back sometimes works loose. Can you check the round cable going into the back is finger-tight?","Explains what the light means, then gives one step."],
  ["c","Oh, it was a little loose. I tightened it."],
  ["a","Perfect. Now let’s restart the modem so it reconnects cleanly. Please unplug the power cord, and we’ll wait a full 60 seconds together."]
 ],
 qa:["Outage check before troubleshooting","Lights read and explained","Cables checked before reset","Correct power-cycle order and timing","Fix confirmed with a website and speed test","Notes include light status before and after"],
 quiz:[
  ["The Online light is blinking. What does it usually mean?",["Everything is fine","The modem is trying to reach the network","The Wi-Fi password is wrong"],1,"Blinking Online usually means the modem is searching for the network."],
  ["How long should the modem stay unplugged?",["5 seconds","A full 60 seconds","10 minutes"],1,"60 seconds lets the modem fully discharge and re-register cleanly."],
  ["There is an area outage. What do you do?",["Walk them through resets anyway","Give the restore estimate and offer alerts","Book a technician"],1,"Resets won’t fix an outage; set expectations instead."]
 ]},

{id:"a3",track:"l1",title:"Password reset and account lockout",level:"basic",account:"Brightdesk IT",mins:12,sim:"sim-l1b",
 teach:[
  ["Security first","Password resets are the most common attack against help desks. Social engineers sound urgent and important. Always verify identity according to policy, no matter who the caller says they are or how rushed they sound."],
  ["Brightdesk verification policy","Verify with employee ID plus a one-time code sent to the phone number on file (MFA). Never send a code to a new number the caller gives you, and never reset based on “my manager says it’s fine.”"],
  ["Lockout vs forgotten password","Lockout happens after too many failed attempts (often 5). It may unlock by itself after 15 to 30 minutes, or the agent can unlock it. A common cause is an old password saved on a phone’s email app that keeps retrying."],
  ["Temporary passwords","Set a temporary password that must be changed at next sign-in. Read it slowly, or better, send it through the secure channel. Never email a password to a personal address."],
  ["Prevent the repeat","After reset, tell the customer to update the password on their phone, tablet and any saved browsers, or the account will lock again."]
 ],
 steps:{h:"Step by step: Locked account",items:[
  ["1. Verify identity","Before I make changes, I’ll verify your identity. What is your employee ID? I’m sending a six-digit code to the phone on file now."],
  ["2. Check status","I can see the account is locked after five failed attempts at 8:12 this morning."],
  ["3. Find the cause","Do you have work email set up on your phone? It may still be trying your old password."],
  ["4. Unlock and reset","I’ve unlocked the account and set a temporary password. You’ll be asked to create a new one when you sign in."],
  ["5. Update devices","Please update the password in your phone’s mail app right away so it doesn’t lock again."],
  ["6. Confirm","Can you sign in now and tell me when you see your inbox?"]
 ]},
 script:[
  ["c","I’m the regional director, I have a board meeting in 10 minutes, just reset my password now."],
  ["a","I understand you’re short on time, and I’ll move fast. For your security I need to verify you first. It takes about 30 seconds. Can you give me your employee ID? I’ll send a code to the phone on file.","Empathy with urgency, but verification is not skipped."],
  ["c","Send it to my personal cell instead, 555-0148."],
  ["a","I’m only able to send codes to the number already on your profile. That protects your account if someone ever tries to impersonate you. Do you have that phone with you?","Holds the line politely and explains why."]
 ],
 qa:["Identity verified per policy before any change","Did not send codes to an unverified number","Root cause identified (saved old password)","Customer told to update all devices","Sign-in confirmed before closing"],
 quiz:[
  ["A caller asks you to send the MFA code to a new number. What do you do?",["Send it, they sound legitimate","Only send to the number on file","Ask their manager by email"],1,"Codes go only to verified contact methods on file."],
  ["The account locks again an hour after reset. Most likely cause?",["The server is down","A device still uses the old password","The keyboard is broken"],1,"Saved old credentials on phones or apps keep retrying and re-lock the account."],
  ["Temporary passwords should:",["Never expire","Require change at next sign-in","Be emailed to a personal address"],1,"Temporary passwords must be changed at first sign-in."]
 ]},

{id:"a4",track:"l1",title:"Printer offline (Windows)",level:"intermediate",account:"Brightdesk IT",mins:14,sim:"sim-l1c",
 teach:[
  ["Why printers go “offline”","Windows marks a printer offline when it can’t reach it. Common causes: the printer is on a different Wi-Fi network (like guest Wi-Fi), its IP address changed, the print queue is stuck, or “Use Printer Offline” was switched on."],
  ["Check the printer side","Is the printer on and showing no errors (paper, toner)? On the printer’s screen, which Wi-Fi network is it connected to? It must be the same network as the computer."],
  ["Check the computer side","Settings > Bluetooth & devices > Printers & scanners > select the printer > Open print queue. In the Printer menu, make sure “Use Printer Offline” is unchecked, and cancel stuck jobs."],
  ["Restart the Print Spooler","If jobs won’t clear: press Windows + R, type services.msc, find Print Spooler, right-click > Restart. This clears most stuck queues."],
  ["Last resort","Remove the printer and add it again so Windows picks up its new address. Then print a test page to confirm."]
 ],
 steps:{h:"Step by step: Printer offline",items:[
  ["1. Scope","Is it just you, or can’t anyone in the office print to it?"],
  ["2. Printer status","Can you look at the printer’s screen? Any error lights, and which Wi-Fi network does it show?"],
  ["3. Same network","Your computer is on “Office-Staff” and the printer is on “Office-Guest”. Let’s move the printer to the staff network."],
  ["4. Offline toggle and queue","Open the print queue. In the Printer menu, is “Use Printer Offline” checked? Let’s uncheck it and cancel the stuck jobs."],
  ["5. Spooler","Press Windows and R together, type services dot msc, and press Enter. Find Print Spooler and choose Restart."],
  ["6. Test page","Let’s print a test page to confirm everything works."]
 ]},
 script:[
  ["c","It just says offline. It worked yesterday."],
  ["a","Thanks. Is anyone else in the office able to print to it today?"],
  ["c","No, nobody can."],
  ["a","That points to the printer itself rather than your computer. Can you look at the printer’s screen and tell me which Wi-Fi network it shows?","Scope question narrows it to the printer."]
 ],
 qa:["Scope question first (one user or everyone)","Printer status and network checked","Clear click-by-click guidance","Test page confirmed","Notes include root cause"],
 quiz:[
  ["Nobody in the office can print. Focus first on:",["One user’s laptop","The printer and its network","Reinstalling Windows"],1,"Everyone affected points to the shared device."],
  ["Which Windows service manages print jobs?",["Print Spooler","Windows Update","DHCP Client"],0,"The Print Spooler queues and sends print jobs."],
  ["The printer is on guest Wi-Fi. Result?",["Prints faster","Computers on the staff network can’t reach it","No effect"],1,"Guest networks are usually isolated from the main network."]
 ]},

/* ---------- TSR L2 ---------- */
{id:"b1",track:"l2",title:"DNS and IP: connected but nothing loads",level:"intermediate",account:"Brightdesk IT / Northwave",mins:18,sim:"sim-l2a",
 teach:[
  ["Connected is not the same as online","Wi-Fi bars mean the device reached the router. It doesn’t prove the router reaches the internet, or that names like google.com can be turned into addresses (DNS)."],
  ["The three-test split","1) ping 8.8.8.8 tests raw internet by IP address. 2) nslookup google.com tests DNS name lookup. 3) Open a site in the browser tests the app. If ping works but nslookup fails, it’s DNS."],
  ["Reading ipconfig /all","Look at IPv4 Address (should be like 192.168.x.x or 10.x.x.x). An address starting with 169.254 means the device didn’t get an address from the router (DHCP failure). Look at DNS Servers: an old or odd manual entry is a red flag."],
  ["Common fixes","Set DNS back to automatic (Settings > Network > adapter > DNS server assignment > Automatic). Then flush the cache: ipconfig /flushdns. For 169.254 addresses: ipconfig /release then ipconfig /renew, or restart the router."],
  ["Explaining DNS to customers","“DNS is like your phone’s contacts. Your computer knows the internet is there, but it lost the contact list that turns website names into numbers.”"]
 ],
 steps:{h:"Step by step: DNS diagnosis",items:[
  ["1. Open Command Prompt","Click Start, type cmd, and press Enter. A black window will open."],
  ["2. Ping by IP","Type ping 8.8.8.8 and press Enter. Do you see “Reply from”, or “Request timed out”?"],
  ["3. Test DNS","Now type nslookup google.com. Read me what it says."],
  ["4. Check settings","Type ipconfig /all and read me the line that says DNS Servers."],
  ["5. Fix","That DNS address is old. Let’s set DNS back to automatic in your network settings."],
  ["6. Flush and test","Type ipconfig /flushdns, then open a website."]
 ]},
 script:[
  ["c","Ping says Reply from 8.8.8.8, time 14 ms."],
  ["a","Great, that means your internet connection itself is working. Now type nslookup google.com."],
  ["c","It says DNS request timed out. Server: 10.0.0.53."],
  ["a","That’s the problem. Your computer is asking an old address for directions to websites, and nobody answers there. We’ll switch it back to automatic.","Translates technical results into plain language."]
 ],
 qa:["Used ping / nslookup to split the problem","Read ipconfig output correctly","Root cause explained in plain language","Change made and verified with a live site","Notes include before/after DNS values"],
 quiz:[
  ["Ping 8.8.8.8 works, nslookup fails. The issue is:",["The physical cable","DNS","The monitor"],1,"IP connectivity works, name resolution doesn’t: DNS."],
  ["An IPv4 address of 169.254.10.4 means:",["Perfect connection","The device didn’t get an address from DHCP","DNS is fine"],1,"169.254 is a self-assigned address when DHCP fails."],
  ["Which command clears the local DNS cache?",["ipconfig /flushdns","ping /clear","netstat -dns"],0,"ipconfig /flushdns clears cached lookups."]
 ]},

{id:"b2",track:"l2",title:"Intermittent Wi-Fi: signal, channels and interference",level:"intermediate",account:"Northwave Fiber",mins:16,sim:"sim-l2b",
 teach:[
  ["Intermittent means pattern","Ask when it drops: certain times of day, certain rooms, when the microwave runs, when everyone streams. Evening-only drops in apartments often mean channel congestion from neighbors."],
  ["2.4 GHz vs 5 GHz","2.4 GHz reaches further and through walls but is crowded and slower. 5 GHz is faster and less crowded but has shorter range. Devices near the router should use 5 GHz."],
  ["Check from the back end","At L2 you can usually see the gateway’s logs and connected devices: signal strength per device (RSSI), the channel in use, and how many neighboring networks share it. RSSI better than -67 dBm is good; worse than -75 dBm is weak."],
  ["Fixes in order","Move the router to a central, raised, open spot. Change the 2.4 GHz channel to 1, 6 or 11 (the non-overlapping ones). Enable band steering so capable devices use 5 GHz. If the home is large, offer a mesh extender."],
  ["Wired vs wireless test","If drops also happen on a wired device, it’s not Wi-Fi: check signal levels on the line and escalate for a technician."]
 ],
 steps:{h:"Step by step: Evening Wi-Fi drops",items:[
  ["1. Pattern","When does it drop? Every evening around the same time, or randomly?"],
  ["2. Wired check","Does anything plugged in by cable also lose connection, or only Wi-Fi devices?"],
  ["3. Back-end check","I’m looking at your gateway: the 2.4 GHz band is on channel 9, shared with 14 neighbor networks."],
  ["4. Change channel","I’m moving your 2.4 GHz band to channel 1, which is much quieter. Your devices will reconnect in about 30 seconds."],
  ["5. Band steering","I’ve turned on band steering so your laptop and TV use the faster 5 GHz band when close enough."],
  ["6. Follow up","I’ll schedule a check-in for tomorrow evening; if it drops again we’ll send a technician."]
 ]},
 script:[
  ["c","It’s fine all day, then around 7 every night it keeps dropping."],
  ["a","That timing is a really helpful clue. In the evening, everyone nearby is online, and the Wi-Fi channels get crowded, a bit like rush-hour traffic. Let me look at your gateway from here."]
 ],
 qa:["Pattern and wired/wireless questions asked","Back-end data used (channel, RSSI)","Change explained before it was made","Follow-up plan set","Notes include channel before/after"],
 quiz:[
  ["Which 2.4 GHz channels don’t overlap?",["1, 6, 11","2, 5, 9","3, 7, 12"],0,"Channels 1, 6 and 11 are the non-overlapping set."],
  ["Drops happen on wired devices too. Likely cause?",["Wi-Fi channel","The line or modem signal","The laptop"],1,"Wired drops rule out Wi-Fi; look at line signal."],
  ["RSSI of -80 dBm is:",["Excellent","Weak","Not measurable"],1,"Worse than -75 dBm is weak."]
 ]},

{id:"b3",track:"l2",title:"Outlook profile and email sync issues",level:"advanced",account:"Brightdesk IT",mins:15,
 teach:[
  ["Symptoms","Outlook stuck on “Disconnected” or “Trying to connect”, search not working, or emails visible on the web but not in the desktop app. If webmail (Outlook on the web) works, the mailbox is fine and the problem is the local Outlook profile."],
  ["Quick checks","Is Outlook in Work Offline mode (Send/Receive tab)? Is the account’s password current (password prompts loop)? Is there an Office update pending?"],
  ["Repair the profile","Control Panel > Mail > Show Profiles > Add a new profile, sign in, set “Always use this profile” to the new one. This rebuilds the local cache (OST) without touching the server mailbox."],
  ["Explain the cache","“Outlook keeps a copy of your mailbox on your computer. That copy got scrambled. We’re building a fresh copy from the server; nothing on the server is deleted.” Warn them the first sync can take a while on large mailboxes."]
 ],
 steps:{h:"Step by step: Outlook won’t sync",items:[
  ["1. Test webmail","Please open a browser and sign in to webmail. Do you see your recent emails there?"],
  ["2. Offline mode","In Outlook, click the Send/Receive tab. Is Work Offline highlighted?"],
  ["3. New profile","Close Outlook. Open Control Panel, choose Mail, then Show Profiles, then Add."],
  ["4. Set default","Choose Always use this profile and select the new one."],
  ["5. Confirm","Open Outlook and send yourself a test email."]
 ]},
 script:[
  ["c","I can see my emails on my phone but Outlook on my laptop hasn’t updated since yesterday."],
  ["a","Thanks, that tells me your mailbox is fine, and the problem is the copy on your laptop. We can rebuild it without losing anything."]
 ],
 qa:["Webmail test to isolate server vs client","Explained no data loss before rebuilding","Profile rebuilt correctly","Test email confirmed"],
 quiz:[
  ["Webmail works, desktop Outlook doesn’t. The problem is:",["The mailbox server","The local Outlook profile/cache","The internet"],1,"The mailbox is fine; the local client is not."],
  ["Creating a new Outlook profile deletes server emails.",["True","False"],1,"It only rebuilds the local cache; server data is untouched."],
  ["Where do you add a new mail profile?",["Control Panel > Mail > Show Profiles","Task Manager","Device Manager"],0,"The Mail control panel manages profiles."]
 ]},

/* ---------- TSR L3 ---------- */
{id:"c1",track:"l3",title:"Escalation triage: outage or single customer?",level:"advanced",account:"Northwave Fiber Business",mins:18,sim:"sim-l3a",
 teach:[
  ["The L3 job","L3 receives what L1 and L2 couldn’t fix. Your first question is always scope: is this one customer, one node (neighborhood), one region, or a core service? Scope decides who you wake up."],
  ["Correlate","Check: other tickets with the same symptom in the last hour, monitoring alarms on the node or upstream router, recent changes (maintenance windows, deployments). Three similar tickets from one node is an outage until proven otherwise."],
  ["Gather evidence before you escalate","Timestamps (with time zone), affected circuits or account IDs, traceroute results showing where packets stop, error codes, and what was already ruled out. Engineering ignores tickets that say “internet not working.”"],
  ["Severity levels","Sev 1: many customers or a critical business fully down, no workaround. Sev 2: significant degradation or a single business down with partial workaround. Sev 3: single user, workaround exists. Over-calling Sev 1 burns trust; under-calling hurts customers."],
  ["Communicate with business customers","Business IT contacts are technical. Give them facts, scope and next update time: “We see packet loss at the aggregation router serving your three sites. Engineering is engaged as Severity 2. Next update by 2:30 PM Eastern.”"]
 ],
 steps:{h:"Step by step: L3 triage",items:[
  ["1. Scope","How many of your sites are affected, and are all users at each site impacted?"],
  ["2. Timeline","When exactly did it start, and in which time zone?"],
  ["3. Evidence","Can you send a traceroute from an affected site to 8.8.8.8, and tell me the last hop that answers?"],
  ["4. Correlate","I’m checking monitoring: all three of your sites route through the same aggregation router, which shows packet loss since 9:42."],
  ["5. Escalate","I’m opening a Severity 2 incident with network engineering with these traces attached."],
  ["6. Commit to updates","You’ll get an update from me by 10:30, even if we don’t have a fix yet."]
 ]},
 script:[
  ["c","Three of our branch offices have intermittent packet loss since this morning. Your L1 had me reboot routers twice."],
  ["a","I’m sorry you had to go through reboots; at this point that won’t help. Let’s look at what the three sites have in common. Can you give me the circuit IDs, and the time you first saw loss, with time zone?","Acknowledges, stops repeating L1 steps, moves to correlation."]
 ],
 qa:["Scope and exact timeline gathered","Evidence collected (traceroute, circuits, timestamps)","Correlation with monitoring and other tickets","Correct severity chosen with reasoning","Next update time committed"],
 quiz:[
  ["Three tickets, same symptom, same node within 30 minutes. Treat it as:",["Three separate issues","A probable node outage","User error"],1,"Correlated symptoms on one node point to an outage."],
  ["Which belongs in an engineering escalation?",["Customer is angry","Traceroute stopping at hop 6, circuit IDs, timestamps with time zone","Internet bad"],1,"Engineering needs evidence and scope."],
  ["A single business is fully down with a partial workaround. Severity?",["Sev 1","Sev 2","Sev 4"],1,"Significant impact with a workaround is usually Sev 2."]
 ]},

{id:"c2",track:"l3",title:"Writing an escalation ticket engineering will act on",level:"advanced",account:"All tech accounts",mins:12,
 teach:[
  ["The 30-second test","An engineer should know what’s broken, how badly, and what you already ruled out within 30 seconds of opening your ticket. If they have to call you to ask, the ticket failed."],
  ["Structure","Summary (one line), Impact (who and how many), Timeline (start time with time zone), Evidence (logs, traces, screenshots), Already tried (with results), Ask (what you need from engineering)."],
  ["Write the summary like a headline","Bad: “Customer having issues.” Good: “3 business sites on node AGG-07 have 12–30% packet loss since 09:42 ET.”"],
  ["Facts, not theories","Write what you observed. If you include a hypothesis, label it: “Hypothesis: possible optic degradation on AGG-07 uplink.”"]
 ],
 steps:{h:"Escalation template",items:[
  ["SUMMARY","3 business sites on node AGG-07: 12–30% packet loss since 09:42 ET."],
  ["IMPACT","Acct 88120 (Harbor Dental). 3 sites, ~40 users, VoIP calls dropping."],
  ["EVIDENCE","Traceroutes attached; loss begins at hop 4 (agg07-core). Monitoring alarm AGG-07 09:41 ET."],
  ["TRIED","CPE reboots x2 (L1). Swapped site A to backup circuit: loss persists."],
  ["ASK","Investigate AGG-07 uplink. Sev 2. Customer update promised by 10:30 ET."]
 ]},
 script:[
  ["a","Quick summary for engineering: three sites on AGG-07, packet loss starting at hop 4 since 09:42 Eastern, traces attached, Sev 2, I owe the customer an update at 10:30."]
 ],
 qa:["Headline-style summary with numbers","Impact quantified","Time zone included","Already-tried list with results","Clear ask and severity"],
 quiz:[
  ["Which summary is best?",["Internet issue","Customer upset again","3 sites on AGG-07: 12–30% loss since 09:42 ET"],2,"Specific scope, symptom, and time."],
  ["A hypothesis in a ticket should be:",["Stated as fact","Labeled as a hypothesis","Left out always"],1,"Label theories so engineers don’t mistake them for evidence."],
  ["Why include the time zone?",["Tradition","Teams and logs may be in different zones","It isn’t needed"],1,"Mismatched time zones cause wrong log searches."]
 ]},

{id:"c3",track:"l3",title:"Incident communication with business customers",level:"advanced",account:"Northwave Fiber Business",mins:10,
 teach:[
  ["Cadence beats content","During an incident, customers mostly want to know you haven’t forgotten them. Commit to an update time and keep it, even if the update is “no change yet.”"],
  ["What each update contains","Current status, what we know, what we’re doing, workaround if any, next update time. Avoid guessing a fix time unless engineering gave one."],
  ["Closing an incident","Confirm with the customer that service is stable, give a short root cause in plain words, what prevents a repeat, and any service credit per contract (SLA)."]
 ],
 steps:{h:"Update template",items:[
  ["Status","Investigating / Identified / Monitoring / Resolved"],
  ["Known","Packet loss traced to a failing optic on the router serving your area."],
  ["Doing","Engineers are replacing the optic during an emergency window."],
  ["Workaround","Site A can use the LTE backup in the meantime."],
  ["Next update","By 11:15 AM Eastern."]
 ]},
 script:[
  ["a","Hi Dana, it’s Sam from Northwave with the 10:30 update. Status: identified. A failing part on the router serving your sites is causing the loss. Engineers are replacing it now. Next update by 11:15, sooner if it’s fixed."]
 ],
 qa:["Update delivered on time","Status label used","No guessed fix time","Next update committed","Root cause and credit on closure"],
 quiz:[
  ["No progress by the promised update time. You should:",["Skip the update","Send the update saying no change and the next update time","Make up an ETA"],1,"Keep cadence; say what you know."],
  ["Which is NOT part of an incident update?",["Next update time","Status","A guessed fix time without engineering input"],2,"Never guess ETAs."],
  ["On closure, include:",["Root cause, prevention, SLA credit if due","Nothing","Blame on a vendor"],0,"Close with root cause, prevention and credit."]
 ]},

/* ---------- CSR ---------- */
{id:"d1",track:"csr",title:"Billing disputes and promo expiry",level:"intermediate",account:"Northwave Fiber",mins:15,sim:"sim-c1",
 teach:[
  ["The most common billing call","“My bill went up.” Usually a 12-month promotion ended, a one-time fee (installation, late fee) was added, or a partial month (proration) appeared after a plan change."],
  ["Read the bill with the customer","Go line by line: previous balance, payments, new charges, taxes and fees. Compare this bill to last month’s and find the exact line that changed."],
  ["Explain without blame","Not “Your promo expired, it was in the contract.” Instead: “Your 12-month welcome discount of $40 ended on October 3, which is why the monthly price went from $55 to $95. Let me see what I can do.”"],
  ["Know your options","Current retention offers, plan downgrades, autopay discount ($5), paperless discount, one-time courtesy credit (Northwave agents may approve up to $25 without a supervisor). Offer what fits; don’t give everything at once."],
  ["Confirm and document","Restate the new monthly price including taxes estimate, when it starts, and any contract term. Note the offer code in the account."]
 ],
 steps:{h:"Step by step: Bill went up",items:[
  ["1. Verify","I can help with your bill. To protect your account, please confirm your name and the last four of your account number."],
  ["2. Compare","I have your October and November bills open. The difference is on the monthly service line."],
  ["3. Explain","Your 12-month welcome discount of $40 ended October 3."],
  ["4. Options","I can move you to our Fiber 500 Loyalty plan at $65 for 12 months, and autopay takes off another $5."],
  ["5. Confirm","So your new price will be $60 a month plus taxes, starting next bill, with no contract. Shall I apply that?"],
  ["6. Close","I’ve applied it and sent a confirmation email. Anything else I can help with?"]
 ]},
 script:[
  ["c","Why is my bill $95? It’s always been $55!"],
  ["a","A $40 jump would surprise anyone. I have last month’s and this month’s bills open side by side. The change is your welcome discount, which ended October 3. Let me look at what I can offer to bring that down.","Empathy, specific explanation, then moves to options without blame."]
 ],
 qa:["Verified before discussing the bill","Specific line explained, no blame","Appropriate offer (not all at once)","New price, start date and terms confirmed","Offer code documented"],
 quiz:[
  ["A bill increased by exactly the promo amount. Most likely cause?",["Billing error","Promotion ended","Tax increase"],1,"Exact match to promo amount usually means it expired."],
  ["Best way to explain an expired promo?",["It was in your contract","Your 12-month discount of $40 ended Oct 3; let me check options","Nothing can be done"],1,"Specific, no blame, moves to options."],
  ["Before applying a new plan you must:",["Confirm price, start date and terms","Transfer to billing","End the call"],0,"Customers must agree to clear terms."]
 ]},

{id:"d2",track:"csr",title:"Orders, shipping and returns",level:"basic",account:"Cartwell",mins:12,sim:"sim-c2",
 teach:[
  ["Where’s my order","Check order status and the carrier tracking. Know the statuses: Processing, Shipped, Out for delivery, Delivered, Exception (weather, address problem)."],
  ["Delivered but not received","Cartwell policy: confirm the shipping address, check the carrier’s delivery photo or GPS note, suggest checking with neighbors, porch, mailroom. Carriers sometimes mark delivered early; wait 24 hours. After 24 hours, file a missing package claim and offer a reship or refund."],
  ["Returns","30-day return window for most items, original condition. Generate a prepaid label, explain drop-off options, and when the refund posts (3–5 business days after the warehouse receives it)."],
  ["Set expectations","Always give dates: “Your replacement will ship within 1 business day and arrive by Thursday.”"]
 ],
 steps:{h:"Step by step: Delivered, not received",items:[
  ["1. Verify order","Can I have your order number and the email on the order?"],
  ["2. Confirm address","I see it shipped to 14 Elm Court, Apartment 3B. Is that correct?"],
  ["3. Carrier details","The carrier marked it delivered yesterday at 2:14 PM with a photo at a door marked 3D."],
  ["4. Next step","That may be a neighbor’s door. Could you check with 3D? If it’s not there, I’ll ship a replacement right away."],
  ["5. Resolve","I’ve filed a claim and your replacement ships tomorrow, arriving by Friday."]
 ]},
 script:[
  ["c","It says delivered but there’s nothing here."],
  ["a","That’s frustrating, especially when you were waiting for it. Let me pull up the carrier details. I can see a delivery photo, and the door looks like it says 3D, not 3B.","Uses data to find the likely cause."]
 ],
 qa:["Order and address verified","Carrier data checked and explained","Policy followed (24h, claim)","Dates given for replacement or refund"],
 quiz:[
  ["Package marked delivered 2 hours ago, customer doesn’t see it. First step?",["Refund immediately","Check address, carrier photo, and suggest checking around; policy wait","Tell them it’s their problem"],1,"Follow the investigation steps and policy first."],
  ["Refunds usually post:",["Instantly","3–5 business days after the warehouse receives the return","Never"],1,"Give accurate timelines."],
  ["The return window for most Cartwell items is:",["7 days","30 days","1 year"],1,"30 days, original condition."]
 ]},

{id:"d3",track:"csr",title:"Fraud and card disputes",level:"intermediate",account:"Harborline Bank",mins:15,sim:"sim-c3",
 teach:[
  ["Verify strongly","Banking requires stronger verification: full name, date of birth, last four of the card, and a one-time passcode to the phone on file. Never ask for the full card number or PIN."],
  ["Unauthorized vs disputed","Unauthorized: the customer didn’t make it (possible fraud). Disputed: they made the purchase but there’s a problem (never delivered, charged twice). The process differs."],
  ["Protect first","For unauthorized charges: lock or block the card immediately, review recent transactions with the customer to find all unrecognized ones, then order a new card."],
  ["Explain the process","File the dispute, issue provisional credit if eligible (Harborline: within 10 business days), and explain the investigation can take up to 45 days. Send dispute documents to the email on file."],
  ["Stay calm and reassuring","Fraud is scary. “You won’t be responsible for charges you didn’t make once we confirm them. I’m locking the card right now.”"]
 ],
 steps:{h:"Step by step: Unrecognized charges",items:[
  ["1. Verify","For your security, please confirm your full name, date of birth, and the last four digits of the card. I’ll also send a passcode to your phone."],
  ["2. Lock card","I’m locking your card right now so no new charges can go through."],
  ["3. Review","Let’s go through the last 10 transactions together. Tell me which ones you don’t recognize."],
  ["4. Dispute","I’m filing a dispute for the three charges totaling $412.37."],
  ["5. New card","A new card with a new number will arrive in 5–7 business days."],
  ["6. Timeline","You’ll see a provisional credit within 10 business days; the investigation can take up to 45 days."]
 ]},
 script:[
  ["c","There are charges from a store in another state, I didn’t make them!"],
  ["a","I’m going to help you protect your account right now. First, I need to verify you, then I’ll lock the card immediately. Can you confirm your full name and date of birth?","Reassurance and urgency, verification first."]
 ],
 qa:["Strong verification, never asked for PIN or full card number","Card locked early","All unrecognized transactions identified","Timelines explained accurately","Customer reassured"],
 quiz:[
  ["Which should you NEVER ask for?",["Date of birth","Card PIN","Last 4 of the card"],1,"Never ask for PINs or passwords."],
  ["The customer bought an item that never arrived. This is:",["Unauthorized","Disputed","Not your problem"],1,"They authorized the purchase; it’s a dispute."],
  ["What to do first with confirmed unrecognized charges?",["Lock the card","Order a pizza","Wait 45 days"],0,"Stop further fraud immediately."]
 ]},

{id:"d4",track:"csr",title:"Claims and benefits (health insurance)",level:"advanced",account:"Meridian Health Plan",mins:16,sim:"sim-c4",
 teach:[
  ["Privacy rules","Health information is protected (HIPAA in the US). Verify the member: name, date of birth, member ID. If someone calls for a spouse or adult child, you need that member’s authorization on file before sharing anything."],
  ["Read the EOB","The Explanation of Benefits shows: billed amount, allowed amount, what the plan paid, and what the member owes (deductible, copay, coinsurance), plus a denial code if denied."],
  ["Common denial reasons","Missing prior authorization, out-of-network provider, not medically necessary, or coding errors from the provider’s office. Each has a different fix."],
  ["Appeals","Explain the member’s right to appeal, the deadline (Meridian: 180 days from denial), and what to include. For prior auth issues, the provider can often request a retro-authorization or resubmit."],
  ["Plain language","Translate terms: “Your deductible is the amount you pay before the plan starts paying. You’ve met $300 of your $1,000 deductible this year.”"]
 ],
 steps:{h:"Step by step: Claim denied",items:[
  ["1. Verify","Please confirm your full name, date of birth and member ID."],
  ["2. Locate","I see the claim for your MRI on September 12, denied with code PA-01."],
  ["3. Explain","PA-01 means the plan didn’t receive a prior authorization from the doctor before the MRI."],
  ["4. Path","Your doctor’s office can ask for a retro-authorization. If that’s denied, you can file an appeal within 180 days."],
  ["5. Help","I can send the appeal form to your email and add a note so the reviewer sees this call."],
  ["6. Confirm","Your reference number is MH-2290144."]
 ]},
 script:[
  ["c","They’re saying I owe $1,800 for an MRI my doctor ordered!"],
  ["a","That’s a stressful bill to receive. Let’s find out exactly why. The good news is a denial isn’t always the final word. Can I verify your name, date of birth and member ID?"]
 ],
 qa:["Privacy verification and authorization checked","Denial code explained in plain language","Correct path (retro-auth/appeal) with deadline","Reference number given"],
 quiz:[
  ["A husband calls about his wife’s claim with no authorization on file. You:",["Share the details","Explain you need her authorization; offer to help her add it","Hang up"],1,"No authorization, no PHI."],
  ["Denial for missing prior authorization. Best first path?",["Tell the member to pay","Provider requests retro-authorization; appeal if denied","Nothing can be done"],1,"Retro-auth then appeal."],
  ["The deductible is:",["The monthly premium","The amount the member pays before the plan pays","A fine"],1,"Explain terms simply."]
 ]},

{id:"d5",track:"csr",title:"Retention: saving a cancellation",level:"advanced",account:"Northwave Fiber",mins:12,
 teach:[
  ["Find the real reason","“I want to cancel” is a position. The reason is the interest: price, reliability, moving, a competitor offer. Ask: “Can I ask what’s making you want to leave?”"],
  ["Match the save to the reason","Price: loyalty plans. Reliability: technician visit plus credit. Moving: transfer service to the new address. Competitor: compare total cost including equipment fees and contract terms."],
  ["Respect the no","Make one well-fitted offer, maybe a second. If they still want to cancel, process it smoothly and kindly. Pushing hurts QA scores and the brand, and in many regions it violates consumer rules."],
  ["Process correctly","Confirm the cancellation date, final bill, equipment return instructions and deadline, and give a confirmation number."]
 ],
 steps:{h:"Save conversation",items:[
  ["Probe","Before I process that, can I ask what’s prompting the change?"],
  ["Match","Since it’s mostly the price, I can offer Fiber 300 at $45 a month for 12 months."],
  ["Respect","I understand, I’ll take care of the cancellation for you."],
  ["Wrap up","Service ends on the 30th. Please return the gateway within 14 days; I’m emailing a prepaid label. Your confirmation number is NW-55102."]
 ]},
 script:[
  ["c","I just want to cancel."],
  ["a","I can help with that. Before I do, may I ask what’s prompting it? If there’s something I can fix, I’d like the chance."]
 ],
 qa:["Asked for the reason before offering","Offer matched to the reason","Respected the final decision","Cancellation details and confirmation number given"],
 quiz:[
  ["Customer is moving to an area you serve. Best save?",["Price discount","Transfer service to the new address","Technician visit"],1,"Match the save to the reason."],
  ["After two declined offers, you should:",["Keep pushing","Process the cancellation kindly","Transfer to a supervisor"],1,"Respect the decision."],
  ["What must you give at the end of a cancellation?",["Confirmation number, end date, equipment return info","Nothing","A survey only"],0,"Complete the process clearly."]
 ]},

/* ---------- BILINGUAL ---------- */
{id:"e1",track:"es",title:"Saludo, verificación y cierre en español",level:"basic",account:"All accounts (línea en español)",mins:12,lang:"es",
 teach:[
  ["Use usted by default","On Spanish lines, address customers as usted, not tú, unless they ask you to. Usted is respectful across Latin America and Spain. Say “¿En qué le puedo ayudar?” not “¿En qué te puedo ayudar?”."],
  ["The greeting","Brand, name, offer help, exactly like English: “Gracias por llamar a Northwave Fiber, le atiende Ana. ¿En qué le puedo ayudar hoy?”"],
  ["Verification with a reason","“Para proteger su cuenta, ¿me puede confirmar su nombre completo y los últimos cuatro dígitos de su número de cuenta?” Spanish speakers often give two surnames (apellidos); record the full name as given."],
  ["Numbers","Practice numbers clearly. Read account digits one by one: “cuatro, cuatro, uno, siete.” Confirm dates as day-month: “el tres de octubre”."],
  ["The close","Summarize, ask “¿Hay algo más en lo que le pueda ayudar hoy?” and close with the brand: “Gracias por elegir Northwave Fiber. Que tenga un excelente día.”"]
 ],
 phrases:[
  ["Gracias por llamar a Northwave Fiber, le atiende Ana. ¿En qué le puedo ayudar hoy?","Thank you for calling Northwave Fiber, this is Ana. How can I help you today?"],
  ["Con mucho gusto le ayudo con eso.","I’d be glad to help you with that."],
  ["Para proteger su cuenta, ¿me puede confirmar su nombre completo?","To protect your account, can you confirm your full name?"],
  ["¿Y los últimos cuatro dígitos de su número de cuenta?","And the last four digits of your account number?"],
  ["Gracias, su cuenta está verificada.","Thank you, your account is verified."],
  ["¿Me permite ponerle en espera un momento? Serán unos dos minutos.","May I place you on hold for a moment? It will be about two minutes."],
  ["Gracias por su paciencia.","Thank you for your patience."],
  ["¿Hay algo más en lo que le pueda ayudar hoy?","Is there anything else I can help you with today?"],
  ["Gracias por elegir Northwave Fiber. Que tenga un excelente día.","Thank you for choosing Northwave Fiber. Have a great day."]
 ],
 script:[
  ["a","Gracias por llamar a Northwave Fiber, le atiende Ana. ¿En qué le puedo ayudar hoy?"],
  ["c","Buenos días, tengo un problema con mi factura."],
  ["a","Con mucho gusto le ayudo. Para proteger su cuenta, ¿me puede confirmar su nombre completo y los últimos cuatro dígitos de su número de cuenta?","Usted form, reason for verification."],
  ["c","Sí, Rosa Martínez Delgado, cuatro, cuatro, uno, siete."],
  ["a","Gracias, señora Martínez, su cuenta está verificada. Cuénteme, ¿qué es lo que ve en su factura?","Uses first surname with señora; open question."]
 ],
 qa:["Usted used consistently","Branded greeting in Spanish","Verification with a reason","Spanish close with “algo más” and brand"],
 quiz:[
  ["Which is correct for a customer you just met?",["¿En qué te puedo ayudar?","¿En qué le puedo ayudar?"],1,"Use usted (le) by default."],
  ["“Rosa Martínez Delgado”. How do you address her formally?",["Señora Delgado","Señora Martínez","Rosa"],1,"The first surname (paternal) is the one used: señora Martínez."],
  ["“Que tenga un excelente día” means:",["Have a great day","Thank you for calling","Please hold"],0,"A standard warm close."]
 ]},

{id:"e2",track:"es",title:"Vocabulario técnico: internet y equipos",level:"basic",account:"Northwave Fiber / Brightdesk",mins:15,lang:"es",sim:"sim-b1",
 teach:[
  ["Regional words","Many customers mix English tech words into Spanish (el router, el Wi-Fi, resetear). That’s fine; mirror the customer’s words. “Computadora” is used across Latin America; “ordenador” in Spain."],
  ["Describing lights","Encendida (on), apagada (off), fija (solid), parpadeando (blinking), roja, verde, blanca, naranja/ámbar."],
  ["Giving instructions","Use usted commands: desconecte (unplug), conecte (plug in), espere (wait), presione (press), revise (check), apriete (tighten). Keep each instruction short and confirm: “¿Me avisa cuando lo tenga?”"],
  ["The power cycle in Spanish","“Desconecte el cable de corriente del módem, espere un minuto completo y vuelva a conectarlo. Yo me quedo en la línea mientras se reinicia.”"]
 ],
 phrases:[
  ["el módem / el enrutador (el router)","the modem / the router"],
  ["el cable coaxial / el cable de corriente","the coax cable / the power cable"],
  ["La luz está parpadeando / está fija.","The light is blinking / is solid."],
  ["¿Qué luces ve encendidas al frente del módem?","Which lights do you see on at the front of the modem?"],
  ["Revise que el cable esté bien apretado.","Check that the cable is tightened well."],
  ["Desconecte el módem, espere un minuto completo y vuelva a conectarlo.","Unplug the modem, wait a full minute and plug it back in."],
  ["¿Me avisa cuando la luz se quede fija?","Will you let me know when the light stays solid?"],
  ["Abra una página web, por favor.","Please open a web page."],
  ["Vamos a hacer una prueba de velocidad.","Let’s do a speed test."],
  ["la contraseña / la red inalámbrica","the password / the wireless network"]
 ],
 script:[
  ["c","No tengo internet desde anoche."],
  ["a","Lamento mucho los inconvenientes, vamos a resolverlo juntos. ¿Qué luces ve encendidas al frente del módem?"],
  ["c","La de encendido está blanca y la del globito está parpadeando en naranja."],
  ["a","Gracias, eso me indica que el módem no logra conectarse a nuestra red. Revise, por favor, que el cable redondo de atrás esté bien apretado.","Explains the light, then one instruction."]
 ],
 qa:["Mirrors customer’s vocabulary","Usted commands, one step at a time","Explains results in Spanish plain language","Confirms each step"],
 quiz:[
  ["“Parpadeando” means:",["Solid","Blinking","Off"],1,"Parpadear = to blink."],
  ["Correct usted command for “unplug”:",["Desconecta","Desconecte","Desconectar"],1,"Usted command: desconecte."],
  ["Customer says “el router”. You should:",["Correct them to “enrutador”","Mirror “el router”","Switch to English"],1,"Mirror the customer’s words."]
 ]},

{id:"e3",track:"es",title:"Facturación y cobros en español",level:"intermediate",account:"Northwave Fiber / Harborline",mins:14,lang:"es",sim:"sim-b3",
 teach:[
  ["Key terms","Factura (bill), cargo (charge), saldo (balance), fecha de vencimiento (due date), promoción/descuento (promotion/discount), crédito (credit), reembolso (refund), pago automático (autopay), cargo por pago atrasado (late fee)."],
  ["Explaining an expired promo","“Su descuento de bienvenida de 40 dólares por 12 meses terminó el 3 de octubre. Por eso el precio mensual pasó de 55 a 95 dólares. Déjeme revisar qué opciones tengo para usted.”"],
  ["Money and numbers","Say amounts fully: “noventa y cinco dólares”, “cuatrocientos doce dólares con treinta y siete centavos”. Confirm: “¿Le parece bien?”"],
  ["Offering options","“Le puedo ofrecer…”, “Otra opción sería…”, “¿Cuál le conviene más?”"]
 ],
 phrases:[
  ["Tengo abiertas sus facturas de octubre y noviembre.","I have your October and November bills open."],
  ["La diferencia está en el cargo mensual del servicio.","The difference is in the monthly service charge."],
  ["Su descuento de bienvenida terminó el 3 de octubre.","Your welcome discount ended on October 3."],
  ["Le puedo ofrecer un plan de lealtad por 65 dólares al mes.","I can offer you a loyalty plan for 65 dollars a month."],
  ["Con el pago automático se le descuentan 5 dólares más.","With autopay you get another 5 dollars off."],
  ["Su nuevo precio sería de 60 dólares al mes, más impuestos.","Your new price would be 60 dollars a month, plus taxes."],
  ["¿Le parece bien que lo aplique?","Is it okay with you if I apply it?"],
  ["Le aplicaré un crédito de cortesía de 25 dólares.","I’ll apply a 25 dollar courtesy credit."]
 ],
 script:[
  ["c","¿Por qué me llegó la factura de 95 dólares? Siempre pago 55."],
  ["a","Entiendo, un aumento de 40 dólares sorprende a cualquiera. Tengo abiertas sus facturas de octubre y noviembre. Su descuento de bienvenida terminó el 3 de octubre. Déjeme revisar qué opciones tengo para usted."]
 ],
 qa:["Correct billing vocabulary","Amounts said clearly and confirmed","Options offered with “¿cuál le conviene más?”","New price, start date and terms confirmed in Spanish"],
 quiz:[
  ["“Fecha de vencimiento” means:",["Due date","Discount","Balance"],0,"Vencimiento = expiration / due."],
  ["“Reembolso” is:",["A charge","A refund","A fee"],1,"Reembolso = refund."],
  ["How do you ask which option suits them?",["¿Cuál le conviene más?","¿Qué quieres?","¿Por qué?"],0,"Polite usted form."]
 ]},

{id:"e4",track:"es",title:"Empatía y desescalamiento en español",level:"intermediate",account:"Harborline Bank / all",mins:12,lang:"es",sim:"sim-b2",
 teach:[
  ["Empathy statements","“Entiendo perfectamente su preocupación.” “Lamento mucho lo que está pasando.” “Tiene toda la razón en estar molesto/molesta.” Use the gender that matches the customer."],
  ["Ownership","“Me voy a encargar personalmente de esto.” “No se preocupe, vamos a resolverlo juntos.” “Le voy a dar un número de referencia.”"],
  ["Fraud reassurance","“Lo primero que voy a hacer es bloquear su tarjeta para proteger su dinero.” “Usted no será responsable por cargos que no reconoce, una vez que los confirmemos.”"],
  ["Boundary","“Quiero ayudarle, y para poder hacerlo necesito que mantengamos la conversación con respeto.”"]
 ],
 phrases:[
  ["Entiendo perfectamente su preocupación.","I completely understand your concern."],
  ["Lamento mucho lo que está pasando.","I’m very sorry about what’s happening."],
  ["Tiene toda la razón en estar molesto.","You have every right to be upset."],
  ["Me voy a encargar personalmente de esto.","I’m going to personally take care of this."],
  ["Lo primero que voy a hacer es bloquear su tarjeta.","The first thing I’m going to do is lock your card."],
  ["Vamos a revisar juntos sus últimos movimientos.","Let’s review your latest transactions together."],
  ["¿Cuáles de estos cargos no reconoce?","Which of these charges don’t you recognize?"],
  ["Su nueva tarjeta llegará en 5 a 7 días hábiles.","Your new card will arrive in 5 to 7 business days."]
 ],
 script:[
  ["c","¡Me robaron! Hay cargos en mi cuenta que yo no hice."],
  ["a","Entiendo perfectamente su preocupación, y le voy a ayudar ahora mismo. Primero necesito verificar su identidad y enseguida bloqueo su tarjeta. ¿Me confirma su nombre completo y su fecha de nacimiento?"]
 ],
 qa:["Empathy statement in Spanish","Ownership language","Protective action explained","Respectful boundary if needed"],
 quiz:[
  ["“Me voy a encargar personalmente” shows:",["Ownership","A hold","Verification"],0,"It’s an ownership statement."],
  ["For a female customer: “Tiene toda la razón en estar…”",["molesto","molesta"],1,"Match gender: molesta."],
  ["“Días hábiles” means:",["Weekend days","Business days","Holidays"],1,"Hábiles = business days."]
 ]}
];
if(window.EXTRA_LESSONS) LESSONS.push(...window.EXTRA_LESSONS);

/* Visual aids: decision trees ("decide") and indicator legends ("legend") */
const VISUALS = {
 a2:{decide:{h:"Decision tree: no internet",nodes:[
   {q:"Is there an outage in the area?",b:"Yes",out:"Give the restore estimate, offer text alerts. Don’t walk through resets."},
   {q:"Is the Online light solid white?",b:"Yes",out:"Modem is online. Check the Wi-Fi and the device instead."},
   {q:"Is the cable from the wall loose?",b:"Yes",out:"Tighten it finger-tight, wait 2 minutes, test again."},
   {q:"Online solid after a 60-second power cycle?",b:"Yes",out:"Confirm with a website and speed test. Document. Close."},
   {end:"Run a signal test from your side and book a technician."}]},
  legend:{h:"Reading the modem lights",rows:[
   ["var(--ok)",false,"Solid white / green","Connected and working."],
   ["var(--warn)",true,"Blinking","Searching for the network or starting up. Wait 2–5 min."],
   ["var(--bad)",false,"Red / amber, solid","No connection to the network. Check cables, then power cycle."],
   ["var(--sunk)",false,"Off","No power. Check the outlet and power cord."]]}},
 a4:{decide:{h:"Decision tree: printer offline",nodes:[
   {q:"Is only one person affected?",b:"Yes",out:"Focus on that PC: “Use Printer Offline”, stuck queue, driver."},
   {q:"Is the printer showing an error?",b:"Yes",out:"Clear paper, toner or jam errors first."},
   {q:"Is the printer on a different Wi-Fi network?",b:"Yes",out:"Move it to the staff network."},
   {q:"Are jobs stuck in the queue?",b:"Yes",out:"Cancel jobs, restart the Print Spooler."},
   {end:"Remove and re-add the printer, then print a test page."}]}},
 b1:{decide:{h:"Decision tree: connected, nothing loads",nodes:[
   {q:"Does the IPv4 address start with 169.254?",b:"Yes",out:"DHCP failed. ipconfig /release then /renew, or restart the router."},
   {q:"Does ping 8.8.8.8 fail?",b:"Yes",out:"No path to the internet. Go back to the L1 modem flow."},
   {q:"Does nslookup google.com fail?",b:"Yes",out:"DNS problem. Set DNS to automatic, then ipconfig /flushdns."},
   {end:"Network is fine. Look at the browser: proxy, extensions, cache."}]}},
 b2:{legend:{h:"Wi-Fi signal strength (RSSI)",rows:[
   ["var(--ok)",false,"-30 to -67 dBm","Good to excellent. Streaming and video calls work."],
   ["var(--warn)",false,"-68 to -75 dBm","Fair. Drops possible; move closer or use 5 GHz carefully."],
   ["var(--bad)",false,"-76 dBm or worse","Weak. Move the router, add a mesh point, or use a cable."]]},
  decide:{h:"Decision tree: intermittent drops",nodes:[
   {q:"Do wired devices drop too?",b:"Yes",out:"Not Wi-Fi. Check line signal levels and book a technician."},
   {q:"Is the device signal worse than -75 dBm?",b:"Yes",out:"Range problem. Relocate the router or add a mesh point."},
   {q:"Is the 2.4 GHz channel crowded?",b:"Yes",out:"Change to channel 1, 6 or 11 and enable band steering."},
   {end:"Check for device driver updates and set a follow-up."}]}},
 c1:{decide:{h:"Decision tree: L3 triage",nodes:[
   {q:"Other tickets or alarms on the same node?",b:"Yes",out:"Likely outage. Link to the master incident; set severity by impact."},
   {q:"Traceroute shows loss inside our network?",b:"Yes",out:"Escalate to network engineering with traces and timestamps."},
   {q:"Loss starts at the customer’s own equipment?",b:"Yes",out:"Customer side. Guide their IT team and document the evidence."},
   {end:"Collect more data: continuous ping, exact times, and schedule monitoring."}]}},
 d1:{decide:{h:"Decision tree: “my bill went up”",nodes:[
   {q:"Does the increase match an expired promo?",b:"Yes",out:"Explain the end date, offer the loyalty plan and autopay."},
   {q:"Is there a one-time fee on the bill?",b:"Yes",out:"Explain the fee; courtesy credit up to $25 if eligible."},
   {q:"Did the plan change mid-cycle?",b:"Yes",out:"Explain proration with the exact dates."},
   {end:"Possible billing error. Open a billing review ticket and give the reference number."}]}},
 d3:{decide:{h:"Decision tree: card charges",nodes:[
   {q:"Is the caller fully verified, including the passcode?",b:"No",out:"Stop. Don’t discuss the account until verification passes."},
   {q:"Did the customer make the purchase?",b:"Yes",out:"Disputed charge: start the merchant dispute process."},
   {end:"Unauthorized: lock card → identify every charge → file fraud claim → new card → explain timelines."}]}},
 d4:{decide:{h:"Decision tree: denied claim",nodes:[
   {q:"Is the caller the member or authorized on file?",b:"No",out:"Don’t share details. Explain how the member can add authorization."},
   {q:"Denial code is missing prior authorization?",b:"Yes",out:"Provider requests retro-authorization; appeal within 180 days if denied."},
   {q:"Provider out of network?",b:"Yes",out:"Explain network rules; check for an exception or appeal."},
   {end:"Possible coding error. Ask the provider to correct and resubmit."}]}},
 e2:{legend:{h:"Las luces del módem",rows:[
   ["var(--ok)",false,"Fija en blanco / verde","Conectado y funcionando."],
   ["var(--warn)",true,"Parpadeando","Buscando la red o reiniciándose. Espere de 2 a 5 minutos."],
   ["var(--bad)",false,"Roja / naranja, fija","Sin conexión a la red. Revise los cables y reinicie."],
   ["var(--sunk)",false,"Apagada","Sin corriente. Revise el enchufe y el cable."]]}}
};
LESSONS.forEach(l=>Object.assign(l,VISUALS[l.id]||{}));
LESSONS.forEach(l=>{ if(!l.steps) l.steps={h:"",items:[]}; });

const SIMS = {
 "sim-f1":{title:"Frustrated third-time caller",account:"Northwave Fiber",level:"intermediate",lang:"en",lesson:"f3",
  crm:{Name:"Derek Grant",Account:"NW-30-55291 (last 4: 5291)",Plan:"Fiber 300, $70/mo",Status:"Service down since Nov 7",Tickets:"#88301 tech visit (cancelled), #88412 tech visit (cancelled)",Verify:"Name + last 4"},
  goal:"De-escalate, take ownership, book a priority technician, offer an outage credit (up to 3 days approved).",
  persona:"Derek Grant, 45, works from home as an accountant. Very angry. Internet down 3 days. Two technician visits were cancelled without notice. He has called twice before.",
  issue:"Internet completely down for 3 days; two technician appointments cancelled with no call.",
  facts:"Last 4 of account: 5291. Modem online light is red. He already restarted it many times. He is free Thursday morning or Friday afternoon. He wants a credit for the days without service.",
  behavior:"If asked to restart the modem again, he gets more irritated (he has done it many times), but complies if the agent explains why briefly. Online light stays red regardless (a technician is needed).",
  mood:"Angry at the start, interrupts sometimes, calms down if the agent apologizes specifically and gives concrete ownership."},
 "sim-l1a":{title:"No internet after a storm",account:"Northwave Fiber",level:"basic",lang:"en",lesson:"a2",
  crm:{Name:"Maria Lopez",Account:"NW-22-74417 (last 4: 4417)",Plan:"Fiber 500, $65/mo",Outage:"No outage in area",Equipment:"NW Gateway G4",Verify:"Name + last 4"},
  goal:"Verify, check outage, read lights, find the loose cable, power cycle correctly, confirm with a speed test.",
  persona:"Maria Lopez, 34, works hybrid. Polite but worried because she has a video call in an hour.",
  issue:"Internet stopped working this morning after a thunderstorm last night.",
  facts:"Last 4 of account: 4417. Power light white; Online light (globe icon) blinking orange; Wi-Fi light white. Phone shows Wi-Fi connected but nothing loads. Nothing has been moved, but the storm was strong.",
  behavior:"If asked to check the cable from the wall to the back of the modem, she finds it slightly loose and tightens it. If asked to power cycle, she does it; after the restart the Online light turns solid white (after about 3 minutes) and websites load. Speed test shows 476 down / 21 up. If the agent restarts without checking cables, the light keeps blinking orange.",
  mood:"Polite, slightly anxious about her meeting."},
 "sim-l1b":{title:"Locked out before a board meeting",account:"Brightdesk IT",level:"basic",lang:"en",lesson:"a3",
  crm:{Name:"Patricia Hale",EmployeeID:"BD-10482",Phone:"(on file) ***-***-0192",Status:"Locked, 5 failed attempts 08:12",Title:"Regional Director",Verify:"Employee ID + MFA code to phone on file"},
  goal:"Verify per policy (do not send code to a new number), unlock, temporary password, find cause (phone mail app), confirm sign-in.",
  persona:"Patricia Hale, regional director. Impatient, in a hurry. Pushes to skip steps.",
  issue:"Locked out of her work account; board meeting in 10 minutes.",
  facts:"Employee ID BD-10482. Her phone on file ends in 0192 and is in her bag. She changed her password 2 days ago. Her phone's mail app still has the old password.",
  behavior:"First she asks the agent to send the code to her personal number 555-0148. If the agent refuses politely and explains, she grumbles but agrees and reads the code 731 504. If the agent asks about the phone mail app, she checks and it shows a password error. After the reset, she can sign in.",
  mood:"Impatient and demanding; softens if the agent is fast, confident and polite."},
 "sim-l1c":{title:"Office printer offline",account:"Brightdesk IT",level:"intermediate",lang:"en",lesson:"a4",
  crm:{Name:"Kevin Osei",EmployeeID:"BD-20977",Site:"Dental office, 6 staff",Printer:"BD-LaserJet M404",Network:"Office-Staff",Verify:"Employee ID"},
  goal:"Scope (everyone affected), check the printer's network, move it to Office-Staff, clear queue, print test page.",
  persona:"Kevin Osei, office manager at a dental clinic, not very technical but friendly.",
  issue:"Printer shows offline on all computers since this morning.",
  facts:"Employee ID BD-20977. Nobody in the office can print. Yesterday a technician reset the router. The printer screen shows it is connected to 'Office-Guest' Wi-Fi. No paper or toner errors.",
  behavior:"If asked which network the printer is on, he reads 'Office-Guest'. If guided to switch the printer to 'Office-Staff' (Settings > Wireless on the printer), he does it. Then the printer appears online, but old stuck jobs remain until the queue is cleared or the Print Spooler is restarted. Test page prints after that.",
  mood:"Friendly, a bit stressed because patients need forms printed."},
 "sim-l2a":{title:"Wi-Fi connected, nothing loads",account:"Brightdesk IT",level:"intermediate",lang:"en",lesson:"b1",
  crm:{Name:"Lena Fischer",EmployeeID:"BD-31840",Device:"Windows 11 laptop",Note:"Was on a contractor VPN last month",Verify:"Employee ID"},
  goal:"Use ping, nslookup, ipconfig /all to find a stale manual DNS (10.0.0.53); set DNS to automatic; flush DNS; confirm.",
  persona:"Lena Fischer, marketing analyst, comfortable following technical steps.",
  issue:"Laptop shows Wi-Fi connected but no websites load. Her phone works on the same Wi-Fi.",
  facts:"Employee ID BD-31840. Problem since she returned from a client site where IT set up a contractor network. Phone works fine.",
  behavior:"ping 8.8.8.8 shows 'Reply from 8.8.8.8: time=14ms'. nslookup google.com shows 'DNS request timed out. Server: Unknown Address: 10.0.0.53'. ipconfig /all shows IPv4 192.168.1.42 and DNS Servers 10.0.0.53. If guided to set DNS to automatic and run ipconfig /flushdns, websites load.",
  mood:"Calm, cooperative, a little impatient if asked to repeat steps."},
 "sim-l2b":{title:"Wi-Fi drops every evening",account:"Northwave Fiber",level:"intermediate",lang:"en",lesson:"b2",
  crm:{Name:"Tom Becker",Account:"NW-40-11834 (last 4: 1834)",Plan:"Fiber 1 Gig",Gateway:"2.4 GHz ch 9 (14 neighbor networks), 5 GHz ch 36; band steering OFF",Devices:"Smart TV RSSI -71, laptop RSSI -58",Verify:"Name + last 4"},
  goal:"Find the evening pattern, rule out wired, change 2.4 GHz channel to 1/6/11, enable band steering, set a follow-up.",
  persona:"Tom Becker, lives in a large apartment building, streams and games in the evening.",
  issue:"Wi-Fi keeps dropping every evening around 7pm.",
  facts:"Last 4: 1834. Drops last about a minute, several times a night. His desktop PC is wired and never drops. Daytime is fine. Router is on a shelf in the living room.",
  behavior:"Agrees to the channel change and band steering. If the agent explains the change, he is happy. He agrees to a follow-up tomorrow.",
  mood:"Mildly annoyed but friendly."},
 "sim-l3a":{title:"Business sites with packet loss",account:"Northwave Fiber Business",level:"advanced",lang:"en",lesson:"c1",
  crm:{Name:"Dana Whitfield, IT Manager",Account:"Harbor Dental Group, BUS-88120",Sites:"3 sites, circuits CKT-4410, 4411, 4412",Monitoring:"AGG-07 alarm: packet loss 09:41 ET",Contract:"SLA: 4h response, credits per hour down",Verify:"Account PIN 7720"},
  goal:"Gather scope, timeline (time zone), circuits, traceroute; correlate to AGG-07; open Sev 2; commit to the next update time.",
  persona:"Dana Whitfield, IT manager for a dental group with three offices. Technical, direct, frustrated that L1 made her reboot routers twice.",
  issue:"All three branch offices have 12–30% packet loss since about 9:40am Eastern; VoIP calls are dropping.",
  facts:"Account PIN 7720. Circuits CKT-4410, CKT-4411, CKT-4412. Started 09:40 ET. Traceroute from site A: fine to hop 3, loss starts at hop 4 (agg07-core.northwave.net). About 40 users. Site A has an LTE backup.",
  behavior:"Provides traceroute details if asked. Expects a severity level and next update time. If the agent proposes rebooting again, she pushes back firmly.",
  mood:"Professional, impatient with scripted answers, respects precise technical communication."},
 "sim-c1":{title:"My bill went up $40",account:"Northwave Fiber",level:"intermediate",lang:"en",lesson:"d1",
  crm:{Name:"Alicia Romero",Account:"NW-18-63320 (last 4: 3320)",Plan:"Fiber 500, $95/mo (promo $40 ended Oct 3)",Offers:"Loyalty Fiber 500 $65/12mo; autopay -$5; courtesy credit up to $25",Verify:"Name + last 4"},
  goal:"Verify, explain the promo expiry without blame, offer a fitting option, confirm the new price and terms.",
  persona:"Alicia Romero, budget-conscious single mother of two.",
  issue:"Her monthly bill went from $55 to $95 without warning.",
  facts:"Last 4: 3320. She has had service for 13 months. She didn't remember the promo was for 12 months. A competitor offered her $50/month. She is not on autopay.",
  behavior:"If the agent blames her ('it was in your contract'), she gets upset and threatens to cancel. She accepts the loyalty plan with autopay ($60). She would like a courtesy credit for this month if offered.",
  mood:"Upset and suspicious at first, warms up with clear explanation."},
 "sim-c2":{title:"Delivered but not here",account:"Cartwell",level:"basic",lang:"en",lesson:"d2",
  crm:{Name:"Brian Cho",Order:"CW-7731905",Item:"Noise-cancelling headphones, $189",Address:"14 Elm Ct, Apt 3B",Carrier:"Delivered yesterday 2:14 PM; photo shows door 3D",Verify:"Order # + email"},
  goal:"Verify order, confirm address, use carrier photo, suggest checking 3D, then file claim and reship with a date.",
  persona:"Brian Cho, bought headphones as a birthday gift for his sister this weekend.",
  issue:"Order shows delivered yesterday but he never received it.",
  facts:"Order CW-7731905, email brian.cho@example.com. He lives in 3B. He checked the mailroom. He hasn't asked neighbors.",
  behavior:"If the agent mentions the photo shows 3D, he says he will check later but wants assurance. If offered a replacement with an arrival date before Saturday, he is satisfied.",
  mood:"Frustrated but reasonable."},
 "sim-c3":{title:"Charges I didn’t make",account:"Harborline Bank",level:"intermediate",lang:"en",lesson:"d3",
  crm:{Name:"Gloria Patel",DOB:"03/14/1961",Card:"Debit ending 8823",Recent:"$4.50 Coffee Spot; $129.99 ElectroMart (Phoenix, AZ); $162.40 ElectroMart; $119.98 GasStop AZ; $62.10 FreshMart",Verify:"Name, DOB, last 4 + passcode"},
  goal:"Verify fully (never PIN), lock card, identify all unrecognized charges, file dispute, new card, explain timelines.",
  persona:"Gloria Patel, 64, retired teacher in Ohio. Scared and anxious.",
  issue:"She sees charges from Arizona she didn't make.",
  facts:"DOB March 14 1961. Card ends 8823. Passcode received: 448 213. She recognizes Coffee Spot and FreshMart. She does not recognize the three Arizona charges ($129.99, $162.40, $119.98 = $412.37). She has her card in her wallet.",
  behavior:"If asked for her PIN, she hesitates and asks if that's safe (a good agent never asks). Calms down once the card is locked.",
  mood:"Anxious, talks quickly; calms when reassured."},
 "sim-c4":{title:"MRI claim denied",account:"Meridian Health Plan",level:"advanced",lang:"en",lesson:"d4",
  crm:{Name:"Robert King",MemberID:"MHP-4418-2207",DOB:"07/02/1979",Claim:"MRI 09/12, billed $1,800, DENIED code PA-01 (no prior authorization)",Deductible:"$300 met of $1,000",Verify:"Name, DOB, member ID"},
  goal:"Verify, explain PA-01 plainly, explain retro-authorization and the 180-day appeal, give a reference number.",
  persona:"Robert King, 47, contractor. Stressed about money.",
  issue:"Got a bill for $1,800 for an MRI his doctor ordered.",
  facts:"Member ID MHP-4418-2207, DOB July 2 1979. His doctor's office said 'insurance would handle it'. He doesn't know what prior authorization is.",
  behavior:"Becomes relieved if told the provider can request retro-authorization and he can appeal. Asks whether he should pay the bill now (good answer: hold off while the review is pending, ask the provider to put the account on hold).",
  mood:"Stressed, a bit confused by insurance terms."},
 "sim-b1":{title:"Sin internet (línea en español)",account:"Northwave Fiber",level:"basic",lang:"es",lesson:"e2",
  crm:{Name:"Carmen Ruiz Vega",Account:"NW-27-90062 (últimos 4: 0062)",Plan:"Fibra 300",Outage:"Sin interrupción en el área",Verify:"Nombre + últimos 4"},
  goal:"Saludo y verificación en español, revisar luces, cable flojo, reinicio correcto, confirmar con una página web.",
  persona:"Carmen Ruiz Vega, 52, from Puerto Rico, speaks only Spanish. Her grandson uses the internet for school.",
  issue:"No tiene internet desde anoche.",
  facts:"Últimos 4 dígitos: 0062. La luz de encendido está blanca y la del 'globito' parpadea en naranja. Ayer limpió detrás del televisor donde está el módem.",
  behavior:"Si le piden revisar el cable redondo de atrás, lo encuentra flojo y lo aprieta. Después de desconectar el módem un minuto y conectarlo, la luz se queda fija en blanco y las páginas abren.",
  mood:"Amable pero preocupada; agradecida si la tratan con paciencia y de usted."},
 "sim-b2":{title:"Cobros no reconocidos (español)",account:"Harborline Bank",level:"intermediate",lang:"es",lesson:"e4",
  crm:{Name:"Jorge Hernández Soto",DOB:"22/08/1975",Card:"Débito terminada en 4410",Recent:"$12.30 Panadería Sol; $250.00 TechZone Online; $250.00 TechZone Online; $45.80 Farmacia Central",Verify:"Nombre, fecha de nacimiento, últimos 4 + código"},
  goal:"Empatía, verificación fuerte (nunca el PIN), bloquear la tarjeta, identificar cargos, disputa, tarjeta nueva y plazos en español.",
  persona:"Jorge Hernández Soto, 49, mechanic from Mexico, upset and loud at first.",
  issue:"Ve dos cargos de 250 dólares de una tienda en línea que no conoce.",
  facts:"Fecha de nacimiento: 22 de agosto de 1975. Tarjeta termina en 4410. Código recibido: 902 317. Reconoce la panadería y la farmacia. No reconoce los dos cargos de TechZone Online (total 500 dólares).",
  behavior:"Se calma cuando el agente usa una frase de empatía y bloquea la tarjeta. Pregunta cuándo le devolverán el dinero.",
  mood:"Molesto y alterado al inicio; se tranquiliza con empatía y acciones concretas."},
 "sim-b3":{title:"La factura subió (español)",account:"Northwave Fiber",level:"intermediate",lang:"es",lesson:"e3",
  crm:{Name:"Lucía Ramírez",Account:"NW-31-44178 (últimos 4: 4178)",Plan:"Fibra 500, $95/mes (promo de $40 terminó 3 oct)",Offers:"Plan lealtad $65/12 meses; pago automático -$5; crédito de cortesía hasta $25",Verify:"Nombre + últimos 4"},
  goal:"Verificar, explicar el fin de la promoción sin culpar, ofrecer opción, confirmar precio y condiciones en español.",
  persona:"Lucía Ramírez, 38, from Colombia, nurse working night shifts.",
  issue:"Su factura subió de 55 a 95 dólares.",
  facts:"Últimos 4: 4178. Tiene el servicio hace 13 meses. No sabía que la promoción era de 12 meses. No tiene pago automático.",
  behavior:"Si el agente la culpa, se molesta. Acepta el plan de lealtad con pago automático (60 dólares). Agradece un crédito de cortesía si se lo ofrecen.",
  mood:"Cansada y molesta; se calma con una explicación clara y respetuosa."}
};
if(window.EXTRA_SIMS) Object.assign(SIMS,window.EXTRA_SIMS);

const RUBRIC = [
  {k:"Greeting & branding",w:5,d:"Brand, name and offer of help in the opening sentence. Spanish lines: usted, branded greeting."},
  {k:"Verification & security",w:15,d:"Identity verified per account policy before account details are discussed. Never asks for PINs or passwords. Codes only to contacts on file."},
  {k:"Empathy & active listening",w:15,d:"Specific empathy statement, no interruptions, paraphrases the issue, doesn’t make the customer repeat info."},
  {k:"Discovery & diagnosis",w:15,d:"Open then closed questions; isolates scope, timing and pattern before fixing."},
  {k:"Resolution accuracy",w:20,d:"Correct steps in the correct order, one at a time, result confirmed. Correct policy and offers."},
  {k:"Ownership & expectations",w:10,d:"Clear next steps, timelines, reference numbers; commits to follow-up when needed."},
  {k:"Communication & tone",w:10,d:"Plain language, positive phrasing, explains jargon, professional and warm."},
  {k:"Closing",w:5,d:"Summarizes, asks if anything else is needed, branded close."},
  {k:"Documentation",w:5,d:"Ticket notes include issue, verification, steps and results, resolution or next step."}
];
const PASS = 85;

/* ============================== STATE ============================== */
const KEY = "headset-academy-v1";
function load(){ try{ return JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ return {}; } }
let P = Object.assign({done:{},quiz:{},sims:[],voice:false,cards:{},seen:{},reads:{}}, load());
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(P)); }catch(e){} }
const V = ()=>!!(CAP.tts && P.voice);
const D = ()=>!!(CAP.dict && P.voice);

/* ---- flashcards + spaced repetition (Leitner boxes) ---- */
const INTERVALS=[0,1,2,4,7,14]; // days until next review for box 0..5
const today=()=>new Date().toISOString().slice(0,10);
const addDays=n=>{const d=new Date();d.setDate(d.getDate()+n);return d.toISOString().slice(0,10);};
function cardsFor(l){
  const c=[];
  l.teach.forEach(([h,p],i)=>c.push({id:l.id+":t"+i,front:h,back:p}));
  l.steps.items.forEach((s,i)=>c.push({id:l.id+":s"+i,front:"Step “"+s[0]+"”: what do you say?",back:s[1]}));
  (l.phrases||[]).forEach((p,i)=>{c.push({id:l.id+":p"+i,front:"Say it in Spanish: "+p[1],back:p[0]});c.push({id:l.id+":r"+i,front:"What does this mean? "+p[0],back:p[1]});});
  l.quiz.forEach((q,i)=>c.push({id:l.id+":q"+i,front:q[0],back:q[1][q[2]]+" — "+q[3]}));
  l.qa.forEach((x,i)=>c.push({id:l.id+":a"+i,front:"QA checkpoint for “"+l.title+"” (#"+(i+1)+" of "+l.qa.length+")",back:x}));
  return c.map(x=>({...x,lesson:l.id}));
}
const ALLCARDS=()=>LESSONS.flatMap(cardsFor);
function dueCards(){
  const t=today();
  return ALLCARDS().filter(c=>P.seen[c.lesson]).filter(c=>{const r=P.cards[c.id];return !r||r.due<=t;});
}
function grade(c,ok){
  const r=P.cards[c.id]||{box:0};
  const box= ok? Math.min(r.box+1,5) : 0;
  P.cards[c.id]={box,due: ok? addDays(INTERVALS[box]) : today()};
  save();
}

let CAP = {sample:null, tts:null, dict:null};
(async()=>{
  if(!window.claude) return;
  try{ CAP.sample = await claude.use("sample"); }catch(e){}
  try{ CAP.tts = await claude.use("tts"); }catch(e){}
  try{ CAP.dict = await claude.use("dictation"); }catch(e){}
  if(CAP.tts){ try{ CAP.tts.onState(({state})=>{ document.querySelectorAll("[data-speaking]").forEach(b=>b.dataset.speaking = state==="idle"?"0":"1"); refreshListen(); }); }catch(e){} }
  route();
})();

/* ============================== HELPERS ============================== */
const $ = s=>document.querySelector(s);
const esc = s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const lvl = l=>`<span class="chip ${l}">${l[0].toUpperCase()+l.slice(1)}</span>`;
const trackOf = id=>TRACKS.find(t=>t.id===id);
const lessonsOf = t=>LESSONS.filter(l=>l.track===t);
function trackPct(t){ const ls=lessonsOf(t); return ls.length? Math.round(ls.filter(l=>P.done[l.id]).length/ls.length*100):0; }
function bestSim(id){ const s=P.sims.filter(x=>x.id===id); return s.length? Math.max(...s.map(x=>x.score)):null; }

async function speak(lines){
  if(!V()) return;
  try{ await CAP.tts.speak(lines); }catch(e){}
}
function stopSpeak(){ try{ CAP.tts && CAP.tts.stop(); }catch(e){} }
function refreshListen(){}

/* ============================== VIEWS ============================== */
function nav(active){
  const due=dueCards().length;
  const items=[["home","Home"],["plan","Plan"],...TRACKS.map(t=>["track-"+t.id,t.name.replace("Tech Support ","TSR ")]),["review","Review"+(due?" ("+due+")":"")],["qa","QA Scorecard"],["settings","Settings"]];
  $("#nav").innerHTML = items.map(([h,n])=>`<a href="#${h}" class="${active===h?"on":""}">${esc(n)}</a>`).join("")
    + (CAP.tts||CAP.dict?`<button class="vtoggle" id="vt" aria-pressed="${P.voice}" title="Read-aloud and speaking practice">Voice ${P.voice?"on":"off"}</button>`:"");
  const vt=$("#vt"); if(vt) vt.onclick=()=>{ P.voice=!P.voice; save(); stopSpeak(); route(); };
}

function flowHTML(l){
  return `<div class="flow">${l.steps.items.map((s,i)=>`<div class="fnode"><div class="box"><b>${String(i+1).padStart(2,"0")}</b><span>${esc(s[0].replace(/^\d+\.\s*/,""))}</span></div><span class="arr" aria-hidden="true">→</span></div>`).join("")}</div>`;
}
function treeHTML(d){
  return `<section><h2>${esc(d.h)}</h2><p class="muted" style="font-size:14px">Ask each question in order. Follow the branch when the answer matches; otherwise keep going down.</p><div class="tree">${d.nodes.map((n,i)=>n.end?`<div class="tend">${esc(n.end)}</div>`:`<div class="tnode"><div class="tq">${esc(n.q)}</div><div class="tline"><i>${esc(n.b)}</i></div><div class="tout">${esc(n.out)}</div></div><div class="tdown">${n.b==="Yes"?"No":"Yes"} ↓</div>`).join("")}</div></section>`;
}
function legendHTML(g){
  return `<section><h2>${esc(g.h)}</h2><div class="legend">${g.rows.map(r=>`<div class="lg"><span class="led ${r[1]?"blink":""}" style="background:${r[0]}"></span><b>${esc(r[2])}</b><span class="m muted">${esc(r[3])}</span></div>`).join("")}</div></section>`;
}

function viewHome(){
  nav("home");
  const total=LESSONS.length, done=LESSONS.filter(l=>P.done[l.id]).length;
  const simIds=Object.keys(SIMS); const passed=simIds.filter(id=>(bestSim(id)||0)>=PASS).length;
  const avg=P.sims.length? Math.round(P.sims.reduce((a,b)=>a+b.score,0)/P.sims.length):null;
  const next=LESSONS.find(l=>!P.done[l.id]);
  return `
  <section class="hero">
    <div>
      <div class="label">Self-paced contact center training</div>
      <h1 style="margin-top:8px">Train for TSR L1 to L3, CSR and the Spanish line, one real call at a time.</h1>
      <p class="lede">Every lesson shows the fix as a flow diagram and decision tree, gives you the exact words to say, and lists what QA listens for. Repeat it with flashcards and a daily review, then take a typed live call with an AI customer and get scored on a ${RUBRIC.length}-point QA form.</p>
    </div>
    <div class="stats">
      <div class="stat"><span class="label">Lessons</span><b>${done}/${total}</b></div>
      <div class="stat"><span class="label">Calls passed</span><b>${passed}/${simIds.length}</b></div>
      <div class="stat"><span class="label">Avg QA</span><b>${avg===null?"—":avg+"%"}</b></div>
    </div>
  </section>
  ${next?`<div class="continue"><div><div class="label">Up next</div><h3 style="margin-top:4px">${esc(next.title)}</h3><div class="muted" style="font-size:13.5px">${esc(trackOf(next.track).name)} · ${esc(next.account)} · ${next.mins} min</div></div><a class="btn pri" href="#lesson-${next.id}">Continue</a></div>`:`<div class="continue"><h3>All lessons complete. Keep your QA score sharp with live calls.</h3></div>`}
  ${(()=>{const d=dueCards().length;const seen=Object.keys(P.seen).length;return seen?`<div class="continue" style="background:var(--surface);border:1px solid var(--line)"><div><div class="label">Daily review</div><h3 style="margin-top:4px">${d?d+" flashcards due today":"You’re caught up on reviews"}</h3><div class="muted" style="font-size:13.5px">Short daily repetition from the ${seen} lesson${seen>1?"s":""} you’ve opened.</div></div>${d?`<a class="btn pri" href="#review">Start review</a>`:""}</div>`:"";})()}
  <section style="display:grid;gap:14px">
    <h2>Career ladder</h2>
    <div class="ladder">
    ${TRACKS.map(t=>{const p=trackPct(t.id);const n=lessonsOf(t.id).length;const sims=Object.values(SIMS).filter(s=>LESSONS.find(l=>l.id===s.lesson).track===t.id).length;
      return `<a class="track" href="#track-${t.id}"><span class="code">${t.code}</span><h3>${esc(t.name)}</h3><p>${esc(t.blurb)}</p><div style="display:grid;gap:6px"><div class="row" style="justify-content:space-between;font-size:12.5px" ><span class="muted">${n} lessons · ${sims} live calls</span><span class="mono">${p}%</span></div><div class="bar"><i style="width:${p}%"></i></div></div></a>`}).join("")}
    </div>
  </section>
  <section style="display:grid;gap:12px">
    <h2>Accounts you’ll work</h2>
    <div class="row">${Object.entries(ACCOUNTS).map(([a,d])=>`<span class="chip" title="${esc(d)}">${esc(a)} · ${esc(d)}</span>`).join("")}</div>
    ${!CAP.sample?`<p class="notice">Live AI calls turn on when you add your Anthropic API key in <a href="#settings">Settings</a>. Lessons, diagrams, quizzes, flashcards and voice work without it.</p>`:""}
  </section>`;
}

function viewTrack(id){
  const t=trackOf(id); if(!t) return viewHome();
  nav("track-"+id);
  const ls=lessonsOf(id);
  return `
  <div class="crumb"><a href="#home">Home</a> / ${esc(t.name)}</div>
  <section style="display:grid;gap:8px"><span class="mono" style="color:var(--accent)">${t.code}</span><h1>${esc(t.name)}</h1><p class="muted" style="max-width:62ch">${esc(t.blurb)}</p>
   <div style="max-width:360px;display:grid;gap:4px;margin-top:6px"><div class="row" style="justify-content:space-between;font-size:13px"><span class="muted">Progress</span><span class="mono">${trackPct(id)}%</span></div><div class="bar"><i style="width:${trackPct(id)}%"></i></div></div></section>
  <div class="list">
   ${ls.map((l,i)=>{const s=l.sim?SIMS[l.sim]:null;const b=s?bestSim(l.sim):null;
    return `<a class="item" href="#lesson-${l.id}"><span class="n">${String(i+1).padStart(2,"0")}</span><div><div style="font-weight:600">${esc(l.title)}</div><div class="meta">${lvl(l.level)}<span class="chip">${esc(l.account)}</span><span class="chip">${l.mins} min</span>${l.lang==="es"?'<span class="chip es">Español</span>':""}${s?`<span class="chip">Live call${b!==null?" · best "+b+"%":""}</span>`:""}${P.done[l.id]?'<span class="chip done">Complete</span>':""}</div></div><span class="go btn sm">Open</span></a>`}).join("")}
  </div>`;
}

function viewLesson(id){
  const l=LESSONS.find(x=>x.id===id); if(!l) return viewHome();
  const t=trackOf(l.track); nav("track-"+t.id);
  const qs=P.quiz[l.id]||{};
  const ls=lessonsOf(l.track); const idx=ls.indexOf(l); const nx=ls[idx+1];
  return `
  <div class="crumb"><a href="#home">Home</a> / <a href="#track-${t.id}">${esc(t.name)}</a> / Lesson ${idx+1}</div>
  <section style="display:grid;gap:10px">
    <div class="row">${lvl(l.level)}<span class="chip">${esc(l.account)}</span><span class="chip">${l.mins} min</span>${l.lang==="es"?'<span class="chip es">Español</span>':""}</div>
    <h1>${esc(l.title)}</h1>
    <div class="row">${V()?`<button class="btn" id="listen">▶ Listen to lesson</button><button class="btn sm" id="stopL">Stop</button>`:""}<a class="btn" href="#cards-${l.id}">Flashcards (${cardsFor(l).length})</a>${l.sim?`<a class="btn live" href="#sim-${l.sim}">Take the live call</a>`:""}<span class="chip">Read ${P.reads[l.id]||0}×</span></div>
  </section>
  ${l.steps.items.length?`<section style="display:grid;gap:10px"><span class="label">The whole lesson at a glance</span>${flowHTML(l)}</section>`:""}
  <div class="lesson">
   <div class="prose">
    ${l.teach.map(([h,p])=>`<section><h2>${esc(h)}</h2><p>${esc(p)}</p></section>`).join("")}
    ${l.legend?legendHTML(l.legend):""}
    ${l.phrases?`<section><h2>Key phrases</h2><div class="tbl-wrap"><table class="phr">${l.phrases.map((p,i)=>`<tr><td>${esc(p[0])}${V()?` <button class="btn sm" data-say="${i}" aria-label="Hear phrase">▶</button>`:""}</td><td class="muted">${esc(p[1])}</td></tr>`).join("")}</table></div></section>`:""}
    ${l.steps.items.length?`<section><h2>${esc(l.steps.h)}</h2><div class="steps">${l.steps.items.map((s,i)=>`<div class="step"><span class="k">${String(i+1).padStart(2,"0")}</span><div><div style="font-weight:600">${esc(s[0])}</div><div class="say">${esc(s[1])}</div></div></div>`).join("")}</div></section>`:""}
    ${l.decide?treeHTML(l.decide):""}
    <section><div class="row" style="justify-content:space-between"><h2>Model call</h2>${V()?`<button class="btn sm" id="playScript">▶ Play call</button>`:""}</div><div class="script">${l.script.map(s=>`<div class="bub ${s[0]}"><small>${s[0]==="a"?"Agent":"Customer"}</small>${esc(s[1])}${s[2]?`<span class="note">${esc(s[2])}</span>`:""}</div>`).join("")}</div></section>
    <section><h2>Check your understanding</h2><div class="quiz">${l.quiz.map((q,qi)=>`<div class="q" data-q="${qi}"><b>${qi+1}. ${esc(q[0])}</b>${q[1].map((o,oi)=>`<button class="opt ${qs[qi]!==undefined?(oi===q[2]?"right":(qs[qi]===oi?"wrong":"")):""}" data-o="${oi}">${esc(o)}</button>`).join("")}<div class="why" ${qs[qi]===undefined?"hidden":""}>${esc(q[3])}</div></div>`).join("")}<button class="btn sm" id="retake" style="justify-self:start">Retake quiz</button></div></section>
    <section class="recap"><span class="label">Recap: read this again before your next call</span>
      <ol>${l.teach.map(([h,p])=>`<li><b>${esc(h)}.</b> ${esc(p.split(/(?<=\.)\s/)[0])}</li>`).join("")}</ol>
      <div class="row"><button class="btn sm" id="readAgain">I read it again (+1)</button><a class="btn sm" href="#cards-${l.id}">Drill flashcards</a></div>
    </section>
   </div>
   <aside class="aside">
    <div class="panel"><span class="label">What QA listens for</span><ul class="qa-list">${l.qa.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
    <div class="panel">
      <span class="label">Finish</span>
      <button class="btn ${P.done[l.id]?"":"pri"}" id="mark">${P.done[l.id]?"✓ Completed":"Mark lesson complete"}</button>
      ${l.sim?`<a class="btn live" href="#sim-${l.sim}">Practice: ${esc(SIMS[l.sim].title)}</a>`:""}
      ${nx?`<a class="btn" href="#lesson-${nx.id}">Next: ${esc(nx.title)}</a>`:`<a class="btn" href="#track-${t.id}">Back to ${esc(t.name)}</a>`}
    </div>
   </aside>
  </div>`;
}
function bindLesson(id){
  const l=LESSONS.find(x=>x.id===id); if(!l) return;
  const lang=l.lang==="es";
  document.querySelectorAll(".q").forEach(qd=>{
    qd.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
      const qi=+qd.dataset.q, oi=+b.dataset.o, q=l.quiz[qi];
      P.quiz[l.id]=P.quiz[l.id]||{}; P.quiz[l.id][qi]=oi; save();
      qd.querySelectorAll(".opt").forEach((x,i)=>{x.classList.toggle("right",i===q[2]);x.classList.toggle("wrong",i===oi&&oi!==q[2]);});
      qd.querySelector(".why").hidden=false;
    });
  });
  if(!P.seen[l.id]){ P.seen[l.id]=today(); P.reads[l.id]=(P.reads[l.id]||0)+1; save(); }
  $("#mark").onclick=()=>{ P.done[l.id]=!P.done[l.id]; if(P.done[l.id]) P.seen[l.id]=P.seen[l.id]||today(); save(); route(); };
  $("#retake").onclick=()=>{ delete P.quiz[l.id]; save(); route(); };
  $("#readAgain").onclick=()=>{ P.reads[l.id]=(P.reads[l.id]||0)+1; save(); route(); };
  const L=$("#listen"); if(L) L.onclick=()=>{
    const lines=[{text:l.title,voice:"buttery",language:"en"}].concat(l.teach.map(([h,p])=>({text:h+". "+p,voice:"buttery",language:"en"})));
    l.steps.items.forEach((s,i)=>lines.push({text:s[0]+". "+s[1],voice:"buttery",language:(lang&&/[áéíóúñ¿¡]/i.test(s[1]))?"es":"en"}));
    speak(lines);
  };
  const S=$("#stopL"); if(S) S.onclick=stopSpeak;
  const PS=$("#playScript"); if(PS) PS.onclick=()=>speak(l.script.map(s=>({text:s[1],voice:s[0]==="a"?"glassy":"rounded",language:lang?"es":"en"})));
  document.querySelectorAll("[data-say]").forEach(b=>b.onclick=()=>speak([{text:l.phrases[+b.dataset.say][0],voice:"glassy",language:"es"}]));
}

/* ---------------- SIM ---------------- */
let CALL=null;
function viewSim(id){
  const s=SIMS[id]; if(!s) return viewHome();
  const les=LESSONS.find(l=>l.id===s.lesson); const t=trackOf(les.track); nav("track-"+t.id);
  const es=s.lang==="es";
  return `
  <div class="crumb"><a href="#home">Home</a> / <a href="#track-${t.id}">${esc(t.name)}</a> / <a href="#lesson-${les.id}">${esc(les.title)}</a> / Live call</div>
  <section style="display:grid;gap:8px"><div class="row">${lvl(s.level)}<span class="chip">${esc(s.account)}</span>${es?'<span class="chip es">Español</span>':""}${bestSim(id)!==null?`<span class="chip done">Best ${bestSim(id)}%</span>`:""}</div><h1>${esc(s.title)}</h1></section>
  ${!CAP.sample?`<p class="notice">The AI customer runs once you add your API key in <a href="#settings">Settings</a>. Until then, review the model call in the <a href="#lesson-${les.id}">lesson</a>.</p>`:""}
  <div class="sim" id="simWrap">
    <div class="crm">
      <h3>CRM · ${esc(s.account)}</h3>
      <dl>${Object.entries(s.crm).map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
      <div class="brief"><span class="label">Your goal</span><span>${esc(s.goal)}</span></div>
      <div class="brief"><span class="label">Tips</span><span class="muted">Type what you’d say out loud. ${es?"Speak Spanish the whole call. ":""}Write your ticket notes before ending the call: they are graded.</span></div>
    </div>
    <div class="console">
      <div class="console-head">
        <div class="status"><span class="dot" id="dot"></span><span id="stat">Ready</span><span class="timer" id="timer">00:00</span></div>
        <div class="row">
          ${V()?`<label class="row" style="gap:6px;font-size:13px"><input type="checkbox" id="voiceOn" checked> Customer voice</label>`:""}
          <button class="btn live sm" id="startCall" ${CAP.sample?"":"disabled"}>Answer call</button>
          <button class="btn sm" id="endCall" disabled>End call & score</button>
        </div>
      </div>
      <div class="feed" id="feed"><div class="sys">An incoming call is waiting on the ${esc(s.account)} ${es?"Spanish line":"queue"}. Answer it, then greet the customer.</div></div>
      <div class="compose">
        <textarea id="msg" placeholder="${es?"Escriba lo que diría al cliente…":"Type what you would say to the customer…"}" disabled></textarea>
        <div class="row" style="justify-content:space-between">
          <div class="row">
            <button class="btn sm" id="hint" disabled>Coach hint</button>
            ${D()?`<button class="btn sm" id="mic" disabled>🎙 Speak</button>`:""}
          </div>
          <button class="btn pri sm" id="send" disabled>Send (Enter)</button>
        </div>
        <div class="coach" id="coach" hidden></div>
      </div>
    </div>
    <div class="panel notes">
      <span class="label">Ticket notes (graded)</span>
      <textarea id="notes" placeholder="ISSUE:&#10;VERIFIED:&#10;TROUBLESHOOTING:&#10;RESULT:&#10;NEXT STEP:"></textarea>
      <span class="muted" style="font-size:12.5px">Use the template from Foundations 4.</span>
    </div>
  </div>
  <div id="result"></div>`;
}

function personaPrompt(s){
  const es=s.lang==="es";
  return `You are role-playing a CUSTOMER calling ${s.account} customer support, inside a training simulator for a call-center agent. Stay fully in character as the customer at all times. Never act as the agent, never coach or hint at what the agent should do, never mention being an AI or a simulation.

Who you are: ${s.persona}
Why you are calling: ${s.issue}
Facts you know (share them only when the agent asks, or when a real customer naturally would): ${s.facts}
What happens when the agent has you check or try things: ${s.behavior}
Mood: ${s.mood} Become calmer and more cooperative when the agent shows genuine, specific empathy and clear ownership. Become more frustrated if the agent is robotic, blames you, uses jargon without explaining, interrupts, makes you repeat yourself, or puts you on hold without asking. If the agent asks you to do something not covered above, react realistically and consistently with the facts.
Only the agent's words are shown to you; you cannot see their screen.

Speak ${es?"ONLY in natural Latin American Spanish, as the customer described (you address the agent as usted). Even if the agent writes in English, answer in Spanish and sound a bit confused by the English.":"in natural, conversational English."} Keep each reply short, 1 to 3 sentences, like real speech on a phone. No stage directions, no asterisks, no quotation marks around your reply.
If the agent closes the call after the issue is handled, say a brief goodbye.`;
}

function bindSim(id){
  const s=SIMS[id]; if(!s) return;
  const es=s.lang==="es";
  const feed=$("#feed"), msg=$("#msg"), send=$("#send"), start=$("#startCall"), end=$("#endCall"), hint=$("#hint"), coach=$("#coach");
  CALL={id, turns:[], started:0, timer:null, busy:false, ctl:null};
  const add=(who,text)=>{
    const d=document.createElement("div");
    if(who==="sys"){d.className="sys";d.textContent=text;}
    else{d.className="bub "+who;d.innerHTML=`<small>${who==="a"?"You":"Customer"}</small>`;d.appendChild(document.createTextNode(text));}
    feed.appendChild(d); feed.scrollTop=feed.scrollHeight; return d;
  };
  const tick=()=>{const sec=Math.floor((Date.now()-CALL.started)/1000);$("#timer").textContent=String(Math.floor(sec/60)).padStart(2,"0")+":"+String(sec%60).padStart(2,"0");};
  start.onclick=()=>{
    CALL.started=Date.now(); CALL.timer=setInterval(tick,1000);
    $("#dot").classList.add("on"); $("#stat").textContent="On call";
    start.disabled=true; end.disabled=false; msg.disabled=false; send.disabled=false; hint.disabled=false; const m=$("#mic"); if(m) m.disabled=false;
    add("sys",es?"Llamada conectada. Salude al cliente.":"Call connected. Greet the customer.");
    msg.focus();
  };
  const buildInput=()=>{
    const out=[]; const sys=personaPrompt(s);
    CALL.turns.forEach((t,i)=>{
      if(t.who==="a") out.push({role:"user",content: i===0? sys+"\n\nThe call just connected. The agent says:\n"+t.text : t.text});
      else out.push({role:"assistant",content:t.text});
    });
    return out;
  };
  const doSend=async()=>{
    const text=msg.value.trim(); if(!text||CALL.busy) return;
    msg.value=""; add("a",text); CALL.turns.push({who:"a",text});
    CALL.busy=true; send.disabled=true;
    const bub=add("c","…"); const span=document.createTextNode("");
    try{
      CALL.ctl=new AbortController();
      const r=await CAP.sample(buildInput(),{modelTier:"default",cache:false,signal:CALL.ctl.signal,onText:({text})=>{bub.lastChild.textContent=text;feed.scrollTop=feed.scrollHeight;}});
      const reply=r.text.trim(); bub.lastChild.textContent=reply; CALL.turns.push({who:"c",text:reply});
      const v=$("#voiceOn"); if(V() && v && v.checked) speak([{text:reply.slice(0,1900),voice:"rounded",language:es?"es":"en"}]);
    }catch(e){
      bub.remove(); CALL.turns.pop();
      add("sys", e&&e.code==="bad_key"?"Your API key was rejected. Check it in Settings.": e&&e.code==="no_credit"?"Your API account has no credit left.": e&&e.code==="rate_limited"?"Too many requests right now. Wait a moment and send again.":"The customer didn’t respond. Send your line again.");
      msg.value=text;
    }finally{ CALL.busy=false; send.disabled=false; msg.focus(); }
  };
  send.onclick=doSend;
  msg.onkeydown=e=>{ if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();doSend();} };
  hint.onclick=async()=>{
    if(!CALL.turns.length){coach.hidden=false;coach.textContent=es?"Empiece con un saludo con la marca, su nombre y ofrezca ayuda.":"Start with a branded greeting, your name, and an offer to help.";return;}
    hint.disabled=true; coach.hidden=false; coach.textContent="Thinking…";
    const tr=CALL.turns.map(t=>(t.who==="a"?"AGENT: ":"CUSTOMER: ")+t.text).join("\n");
    try{
      const r=await CAP.sample(`You are a contact-center QA coach. The trainee is on a live ${es?"Spanish-language ":""}call for ${s.account}. Call goal: ${s.goal}\nAccount data visible to the agent: ${JSON.stringify(s.crm)}\n\nTranscript so far:\n${tr}\n\nIn at most 2 sentences, tell the trainee the single best next move and give one example line they could say${es?" in Spanish (usted)":""}. Do not reveal hidden facts the customer hasn't said.`,{modelTier:"quick",cache:false});
      coach.textContent=r.text.trim();
    }catch(e){ coach.textContent="Coach unavailable right now."; }
    hint.disabled=false;
  };
  const mic=$("#mic");
  if(mic&&D()){
    let listening=false;
    try{
      CAP.dict.onFinal(({text})=>{ msg.value=(msg.value?msg.value+" ":"")+text; });
      CAP.dict.onState(({state})=>{ listening=state!=="idle"; mic.textContent=listening?"■ Stop":"🎙 Speak"; });
    }catch(e){}
    mic.onclick=()=>{
      if(listening){ CAP.dict.stop().catch(()=>{}); return; }
      stopSpeak();
      CAP.dict.start({language:es?"es":"en"}).catch(err=>{ if(err&&err.code==="not_granted"){mic.hidden=true;} });
    };
  }
  end.onclick=async()=>{
    clearInterval(CALL.timer); if(CALL.ctl) CALL.ctl.abort(); stopSpeak();
    const dur=$("#timer").textContent;
    $("#dot").classList.remove("on"); $("#stat").textContent="Call ended"; end.disabled=true; msg.disabled=true; send.disabled=true; hint.disabled=true; if(mic) mic.disabled=true;
    if(CALL.turns.filter(t=>t.who==="a").length<2){ add("sys","Call too short to score. Answer again to retry."); start.disabled=false; return; }
    const res=$("#result"); res.innerHTML=`<div class="score"><h2>QA review</h2><p class="muted">Scoring your call against the ${RUBRIC.length}-point form…</p></div>`;
    res.scrollIntoView({behavior:"smooth",block:"start"});
    const tr=CALL.turns.map(t=>(t.who==="a"?"AGENT: ":"CUSTOMER: ")+t.text).join("\n");
    const prompt=`You are a strict but fair contact-center Quality Assurance analyst scoring a trainee's call. Score it like a real QA department would.

Account: ${s.account}. Line language: ${es?"Spanish (agent must speak Spanish and use usted)":"English"}.
Scenario goal: ${s.goal}
What the correct resolution looks like (hidden from the agent during the call): ${s.behavior}
Customer facts: ${s.facts}
Data visible to the agent in the CRM (including verification policy): ${JSON.stringify(s.crm)}
Call duration: ${dur}

QA form (criterion: weight: description):
${RUBRIC.map(r=>`- ${r.k}: ${r.w}: ${r.d}`).join("\n")}

Transcript:
${tr}

Agent's ticket notes:
${$("#notes").value.trim()||"(none written)"}

Return JSON only, in this exact shape:
{"criteria":[{"name":"<criterion name exactly as above>","score":<0-100 for this criterion>,"comment":"<one specific sentence citing what the agent said or missed>"}],"strengths":["<up to 3>"],"improve":["<up to 3 specific, actionable>"],"better_lines":[{"you_said":"<agent line from transcript>","try":"<stronger version${es?", in Spanish":""}>"}],"resolved":<true|false>}
Include every criterion once, in order. Give 1-2 better_lines.`;
    try{
      const j=await CAP.sample.json(prompt,{modelTier:"default",cache:false});
      const crit=RUBRIC.map(r=>{const f=(j.criteria||[]).find(c=>c.name===r.k)||{score:0,comment:"Not assessed."};return {...r,score:Math.max(0,Math.min(100,+f.score||0)),comment:f.comment};});
      const total=Math.round(crit.reduce((a,c)=>a+c.score*c.w,0)/RUBRIC.reduce((a,c)=>a+c.w,0));
      P.sims.push({id,score:total,at:new Date().toISOString().slice(0,10),dur}); save();
      res.innerHTML=`<div class="score">
        <div class="score-top"><div><span class="label">Weighted QA score</span><div class="big">${total}%</div></div>
          <span class="verdict ${total>=PASS?"pass":"fail"}">${total>=PASS?"Pass":"Below "+PASS+"% target"}</span>
          <span class="chip">AHT ${dur}</span><span class="chip">${j.resolved?"Resolved":"Not resolved"}</span>
          <div class="row" style="margin-left:auto"><button class="btn" id="retry">Take the call again</button><a class="btn" href="#lesson-${s.lesson}">Review lesson</a></div></div>
        <div>${crit.map(c=>`<div class="crit"><span style="font-weight:600">${esc(c.k)} <span class="muted mono" style="font-weight:400;font-size:12px">×${c.w}</span></span><span class="pill" style="color:${c.score>=85?"var(--ok)":c.score>=60?"var(--warn)":"var(--bad)"}">${c.score}</span><span class="c">${esc(c.comment||"")}</span></div>`).join("")}</div>
        <div class="rubric">
          <div class="rub"><span class="label">Strengths</span><ul class="qa-list">${(j.strengths||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="rub"><span class="label">Improve next time</span><ul class="qa-list">${(j.improve||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
        </div>
        ${(j.better_lines||[]).length?`<div style="display:grid;gap:8px"><span class="label">Stronger wording</span>${j.better_lines.map(b=>`<div class="bub c"><small>You said</small>${esc(b.you_said)}</div><div class="bub a"><small>Try</small>${esc(b.try)}</div>`).join("")}</div>`:""}
      </div>`;
      $("#retry").onclick=()=>route(true);
    }catch(e){
      res.innerHTML=`<div class="score"><h2>QA review</h2><p>Scoring didn’t finish${e&&e.code==="rate_limited"?" (too many requests; wait a minute)":""}. Your transcript is still above. <button class="btn sm" id="rescore">Try scoring again</button></p></div>`;
      $("#rescore").onclick=()=>{ end.disabled=false; end.click(); };
    }
  };
}

/* ---------------- FLASHCARDS ---------------- */
let DECK=null;
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function viewCards(lessonId){
  const l=lessonId?LESSONS.find(x=>x.id===lessonId):null;
  nav(l?"track-"+l.track:"review");
  const cards=l?cardsFor(l):dueCards().slice(0,30);
  DECK={cards:shuffle(cards),i:0,right:0,again:0,lesson:lessonId};
  const head = l
    ? `<div class="crumb"><a href="#home">Home</a> / <a href="#track-${l.track}">${esc(trackOf(l.track).name)}</a> / <a href="#lesson-${l.id}">${esc(l.title)}</a> / Flashcards</div><h1>Flashcards</h1><p class="muted">${esc(l.title)} · ${cards.length} cards. Read the front, answer in your head, then flip.</p>`
    : `<div class="crumb"><a href="#home">Home</a> / Review</div><h1>Today’s review</h1><p class="muted" style="max-width:64ch">Cards come back on a schedule: miss one and you’ll see it again today; get it right and it returns in 1, 2, 4, 7, then 14 days. Cards appear here from every lesson you’ve opened.</p>`;
  if(!cards.length) return `<section style="display:grid;gap:10px">${head}</section><div class="continue"><div><h3>${l?"No cards":"Nothing due right now."}</h3><p class="muted" style="font-size:14px">${Object.keys(P.seen).length?"Come back tomorrow, or drill a single lesson’s cards from its page.":"Open a lesson first. Its cards will start showing up here."}</p></div><a class="btn pri" href="#home">Back to lessons</a></div>`;
  return `<section style="display:grid;gap:10px">${head}</section><div class="card-stage" id="stage"></div>`;
}
function drawCard(){
  const st=$("#stage"); if(!st||!DECK) return;
  if(DECK.i>=DECK.cards.length){
    st.innerHTML=`<div class="fcard" style="cursor:default"><span class="side">Session complete</span><div class="front">${DECK.right} got it · ${DECK.again} to repeat</div><p class="muted">Repetition is what makes it stick. ${DECK.again?"Run it again to clear the ones you missed.":"Read the lesson recap once more, then try a live call."}</p></div><div class="row" style="justify-content:center"><button class="btn pri" id="again">Run these cards again</button>${DECK.lesson?`<a class="btn" href="#lesson-${DECK.lesson}">Back to lesson</a>`:`<a class="btn" href="#home">Home</a>`}</div>`;
    $("#again").onclick=()=>route();
    nav(DECK.lesson?"track-"+LESSONS.find(x=>x.id===DECK.lesson).track:"review");
    return;
  }
  const c=DECK.cards[DECK.i]; const box=(P.cards[c.id]||{box:0}).box; const les=LESSONS.find(x=>x.id===c.lesson);
  st.innerHTML=`<div class="row" style="justify-content:space-between"><span class="mono muted">${DECK.i+1} / ${DECK.cards.length}</span><span class="chip">${esc(les.title)}</span></div>
   <div class="fcard" id="fc" tabindex="0" role="button" aria-label="Flip card"><span class="side">Question</span><div class="front">${esc(c.front)}</div><div class="back" hidden>${esc(c.back)}</div><span class="muted" id="fhint" style="font-size:13px">Click or press Space to flip</span></div>
   <div class="boxes" title="Memory strength">${[1,2,3,4,5].map(n=>`<i class="${box>=n?"on":""}"></i>`).join("")}</div>
   <div class="row" style="justify-content:center"><button class="btn" id="miss" disabled>Again (show me later)</button><button class="btn pri" id="hit" disabled>Got it</button></div>`;
  const fc=$("#fc");
  const flip=()=>{ if(fc.classList.contains("flipped")) return; fc.classList.add("flipped"); fc.querySelector(".side").textContent="Answer"; fc.querySelector(".back").hidden=false; $("#fhint").hidden=true; $("#miss").disabled=false; $("#hit").disabled=false; $("#hit").focus(); };
  fc.onclick=flip; fc.onkeydown=e=>{ if(e.key===" "||e.key==="Enter"){e.preventDefault();flip();} };
  $("#miss").onclick=()=>{ grade(c,false); DECK.again++; DECK.cards.push(c); DECK.i++; drawCard(); };
  $("#hit").onclick=()=>{ grade(c,true); DECK.right++; DECK.i++; drawCard(); };
  fc.focus();
}

/* ---------------- QA ---------------- */
function viewQA(){
  nav("qa");
  const rows=[...P.sims].reverse().slice(0,30);
  return `
  <section style="display:grid;gap:8px"><span class="label">How every live call is graded</span><h1>QA Scorecard</h1><p class="muted" style="max-width:64ch">Each criterion is scored 0–100 and weighted. Most centers expect ${PASS}% or better; auto-fail items in real QA usually include skipped verification and asking for PINs or passwords.</p></section>
  <div class="rubric">${RUBRIC.map(r=>`<div class="rub"><div class="row" style="justify-content:space-between"><h3>${esc(r.k)}</h3><span class="w">weight ${r.w}</span></div><p class="muted" style="font-size:14px">${esc(r.d)}</p></div>`).join("")}</div>
  <section style="display:grid;gap:10px"><h2>Your call history</h2>
  ${rows.length?`<div class="tbl-wrap"><table class="hist"><tr><th>Date</th><th>Call</th><th>Account</th><th>AHT</th><th>Score</th></tr>${rows.map(r=>`<tr><td class="mono">${esc(r.at)}</td><td><a href="#sim-${r.id}">${esc(SIMS[r.id].title)}</a></td><td>${esc(SIMS[r.id].account)}</td><td class="mono">${esc(r.dur)}</td><td class="mono" style="color:${r.score>=PASS?"var(--ok)":"var(--bad)"}">${r.score}%</td></tr>`).join("")}</table></div>`:`<p class="muted">No scored calls yet. Start with <a href="#sim-sim-l1a">No internet after a storm</a>.</p>`}
  </section>`;
}

/* ============================== ROUTER ============================== */
function route(){
  stopSpeak(); if(CALL&&CALL.timer) clearInterval(CALL.timer); CALL=null;
  const h=(location.hash||"#home").slice(1);
  const app=$("#app");
  if(h.startsWith("track-")) app.innerHTML=viewTrack(h.slice(6));
  else if(h.startsWith("lesson-")){ app.innerHTML=viewLesson(h.slice(7)); bindLesson(h.slice(7)); }
  else if(h.startsWith("sim-")){ app.innerHTML=viewSim(h.slice(4)); bindSim(h.slice(4)); }
  else if(h.startsWith("cards-")){ app.innerHTML=viewCards(h.slice(6)); drawCard(); }
  else if(h==="review"){ app.innerHTML=viewCards(null); drawCard(); }
  else if(h==="qa") app.innerHTML=viewQA();
  else if(h==="plan") app.innerHTML=viewPlan();
  else if(h==="settings"){ app.innerHTML=viewSettings(); bindSettings(); }
  else app.innerHTML=viewHome();
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);
route();
