/* TSR L2, weeks 12 and 13 */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"b9",track:"l2",title:"Packet loss, jitter and latency on real calls and games",level:"advanced",account:"Northwave Fiber",mins:16,sim:"sim-l2e",
 teach:[
  ["Match the symptom to the metric","Frozen video with robotic audio: loss and jitter. Lag in games: latency. Slow downloads: throughput. Buffering only at night: congestion. Ask what the customer sees and when."],
  ["Find the pattern","Does it happen at the same time every day? Only on Wi-Fi? Only for one app? A pattern points to congestion, interference or an app-side problem. Random, unrelated drops point to the line or equipment."],
  ["Bufferbloat","When a connection is saturated by uploads or downloads, delay grows for everything else. Symptom: calls break while a cloud backup runs. Fix: pause the heavy transfer, or enable smart queue settings on the router if supported."],
  ["Wi-Fi vs line","Wired tests clean and Wi-Fi bad: radio problem. Wired also bad: provider or equipment. Test with only one device active to rule out household load."],
  ["Equipment checks","Look at modem logs and signal values if you have access. Check for repeated resets, errors, and uncorrectable errors. A fiber ONT with low light levels or a coax line with bad signal needs a technician."],
  ["Application-side","Video apps have their own server problems and region issues. Check the vendor’s status page and test another app before concluding the line is bad."],
  ["Set honest expectations","State what you found, what you changed, and when to expect improvement. If it needs a technician visit, schedule it and give the ticket number."]
 ],
 steps:{h:"Call quality investigation",items:[
  ["Symptom","What exactly breaks? Video, audio, game lag? When?"],
  ["Pattern","Daily time, device, app, location."],
  ["Isolate","Only one device on, wired if possible."],
  ["Measure","Long ping test and speed test; record loss, jitter, latency."],
  ["Decide","Fix at home, schedule a technician, or escalate with evidence."]
 ]},
 decide:{h:"Decision tree: choppy calls",nodes:[
  {q:"Is the connection clean when wired with one device?",b:"Yes",out:"Home Wi-Fi or household load. Work on placement, channels and heavy uploads."},
  {q:"Does a long ping to the gateway show loss when wired?",b:"Yes",out:"Local cable or equipment fault. Swap the cable and test the gateway port."},
  {q:"Does loss appear only beyond the gateway?",b:"Yes",out:"Provider-side. Check the line status and signal levels; escalate with evidence."},
  {end:"If everything tests clean, check the app’s service status and test another application."}
 ]},
 script:[
  ["c","My work calls freeze every afternoon around three. Speeds look fine on a test."],
  ["a","Thanks, that timing is a helpful clue. Speed tests only show size, not stability. Let’s measure stability instead. At three o’clock, I’d like you to run a ping test while the problem happens. I’ll tell you exactly how. Does that work?","Explains why speed tests miss it."],
  ["c","Sure."],
  ["a","Great. Also, is anything else uploading in the afternoon, like a cloud backup?","Checks for bufferbloat."]
 ],
 qa:["Pattern and timing discovered","Stability measured, not just speed","Wired and wireless compared","Evidence-based next step with ticket number"],
 quiz:[
  ["Speed tests look fine but calls break. Likely measure:",["Loss and jitter","Download speed","Cable length"],0,"Stability matters."],
  ["A calls failure while a cloud backup uploads suggests:",["Bufferbloat","A DNS error","A bad monitor"],0,"Saturation adds delay."],
  ["Best next step if wired loss reaches the gateway:",["Swap the cable and test the port","Reinstall the app","Ignore it"],0,"Local fault first."]
 ]},

{id:"b10",track:"l2",title:"MTU, duplex and cabling faults",level:"advanced",account:"Brightdesk IT",mins:14,
 teach:[
  ["MTU in plain words","MTU is the largest packet size a link will carry. Standard Ethernet is 1500 bytes. Some links (PPPoE, VPNs) use less. If a packet is too large and cannot be fragmented, it is dropped, and certain sites or uploads hang while others work."],
  ["Test MTU on Windows","Run ping example.com -f -l 1472. If it replies, the full 1500-byte packet fits (1472 plus 28 bytes of headers). If you see “Packet needs to be fragmented”, reduce the number until it works and add 28 to get the MTU."],
  ["Symptoms of an MTU problem","Some websites load slowly or half-load, large uploads stall, and VPN connects but transfers hang. Small things work, big things fail."],
  ["Speed and duplex","An Ethernet link negotiates speed (10, 100, 1000 Mbps) and duplex (half or full). A mismatch causes errors and slow speeds. Most devices set this automatically. A link stuck at 100 Mbps on a gigabit port often points to a bad cable."],
  ["Cabling basics","Cat5e or Cat6 handles gigabit. Damaged connectors, kinked cables, long runs over 100 meters and cheap flat cables cause errors. Swap the cable before suspecting hardware."],
  ["Check the lights and counters","Port lights show link speed on many devices. If the router reports errors on a port, replace the cable and try another port."],
  ["Change MTU carefully","Only change MTU when you have proof, follow your KB, and note the original value. Wrong settings can make things worse."]
 ],
 steps:{h:"Suspect MTU or cabling",items:[
  ["Symptom","Do small pages work while big ones or uploads fail?"],
  ["MTU test","Run the ping -f -l test, lowering the size until it succeeds."],
  ["Link speed","Is the Ethernet link at the speed it should be?"],
  ["Swap","Try a known good cable and a different port."],
  ["Document","Record the working size, the link speed and the cable change."]
 ]},
 script:[
  ["c","Some sites hang forever but others load fine."],
  ["a","That mix is a useful clue. Sometimes it’s a packet-size issue. I’d like to run a quick test with the ping command. Can you open Command Prompt and type exactly what I read?","Explains the idea in plain words."],
  ["c","Ready."],
  ["a","Type ping example.com, space, dash f, space, dash l, space, 1472. Tell me what it says.","Dictates the command carefully."]
 ],
 qa:["Command dictated clearly and confirmed","Result interpreted correctly","Cable swap tried before blaming hardware","Original and new MTU documented"],
 quiz:[
  ["Standard Ethernet MTU:",["1500","1000","9000"],0,"1500 bytes."],
  ["A gigabit link stuck at 100 Mbps suggests:",["A bad cable or port","A good connection","Too many users"],0,"Check the cable."],
  ["Packet-size problems usually show as:",["Small things work, big things hang","Everything fails","Only mornings"],0,"Large transfers break."]
 ]},

{id:"b11",track:"l2",title:"ISP side vs home side: line signal levels and modem logs",level:"advanced",account:"Northwave Fiber",mins:18,sim:"sim-l2f",
 teach:[
  ["The question that decides everything","Is the fault inside the customer’s home or on the provider’s line? Answering it correctly saves a pointless technician visit, or avoids sending a customer through steps that cannot fix the problem."],
  ["Home-side proof","Clean wired tests to the gateway, loss only on Wi-Fi, one device affected, a bad cable swapped, or a settings error. These all say home."],
  ["Line-side proof","Modem or ONT logs show repeated resets, loss of sync, errors, or poor signal. A wired test with the gateway as the only device still shows loss. Neighbors report the same. An outage or maintenance is posted."],
  ["Coax (cable) signals, typical ranges","Downstream power around −7 to +7 dBmV, downstream signal-to-noise ratio about 33 dB or better, upstream power around 35 to 50 dBmV. Uncorrectable errors rising quickly is a red flag. Use your company’s thresholds."],
  ["Fiber (ONT) signals, typical ranges","Received optical power commonly between about −8 and −27 dBm. Very low (more negative) readings suggest a dirty or bent connector, a damaged fiber, or a line problem. Never look into a fiber end and never bend fiber sharply."],
  ["Read the logs for patterns","Repeated T3 or T4 timeouts on cable, ‘loss of sync’ or ‘LOS’ on fiber, or reboots at set times point to the line. Note timestamps and match them to customer complaints."],
  ["Schedule the right visit","When the evidence points to the line, book a technician, give the ticket number and window, and say what the technician will check. When it points home, fix it on the call."]
 ],
 steps:{h:"Home or line?",items:[
  ["Wired test","One device wired directly to the gateway: clean or not?"],
  ["Lights and logs","Check the gateway/ONT lights and the logs or signal page."],
  ["Swap","Swap the Ethernet cable and, if possible, the device."],
  ["Compare","Do other customers or the outage map show a pattern?"],
  ["Decide","Fix at home, or book a technician with evidence."]
 ]},
 legend:{h:"Signal quality at a glance (check your KB)",rows:[
  ["#16a34a",false,"Within range","Signal levels and errors are normal"],
  ["#f59e0b",false,"Borderline","Low or noisy signal; watch the trend, check connectors"],
  ["#dc2626",false,"Out of range","Out-of-range power or high errors: book a technician"],
  ["#9ca3af",false,"No data","Cannot read signal; check cables or escalate"]
 ]},
 script:[
  ["c","The internet drops about ten times a day. I already replaced my router twice."],
  ["a","That sounds exhausting, and thank you for trying that. Let me check what the line itself looks like from our side. I can see the gateway restarted six times in the last two days. May I ask what time the drops usually happen?","Empathy, evidence, then discovery."],
  ["c","Mostly evenings."],
  ["a","That matches the restarts in our logs, which tells me this is likely on the line, not your equipment. I’d like to book a technician visit and note exactly what we saw so they start in the right place.","Explains the finding and takes ownership."]
 ],
 qa:["Evidence collected before deciding","Customer told what the evidence means","Technician visit booked with evidence","Logs and timestamps in notes"],
 quiz:[
  ["Repeated gateway reboots at set times suggests:",["A home Wi-Fi problem","A line or equipment fault","The customer’s laptop"],1,"Look at the line."],
  ["Rising uncorrectable errors on cable is a:",["Red flag","Normal sign","Speed upgrade"],0,"Errors mean trouble."],
  ["Never do this with fiber:",["Look into the end of a live fiber","Check the light","Ask for the model"],0,"Do not look into a live fiber end."]
 ]},

{id:"b12",track:"l2",title:"Microsoft 365 sign-in, licenses and mailbox basics",level:"intermediate",account:"Brightdesk IT",mins:16,
 teach:[
  ["Accounts live in the cloud","In Microsoft 365 the user’s identity, licenses and mailbox are managed by an admin. Many ‘Outlook is broken’ calls are really account, license or sign-in issues, not the app."],
  ["Sign-in checklist","Right email address, password, and MFA method. Check whether the account is locked, disabled, or flagged for a risky sign-in. The sign-in logs in the admin center show the exact reason."],
  ["Licenses","A user without an assigned license cannot use Outlook, Teams or OneDrive. After a license is assigned, it can take time to take effect. A removed license can disable mail."],
  ["Mailbox size","Each plan has a mailbox limit. A full mailbox may cause send/receive problems. Offer archiving, emptying Deleted Items and clearing large attachments."],
  ["Autodiscover and profile","Outlook finds server settings through Autodiscover. Wrong DNS or old cached credentials break it. Remove stored credentials in Windows Credential Manager, then sign in again."],
  ["Web Outlook as a test","If Outlook on the web works, the account and mailbox are healthy. The problem is the local Outlook profile, the add-ins or the network."],
  ["Safe mode and add-ins","Start Outlook in safe mode by holding Ctrl while opening it, or run outlook.exe /safe. If it works there, a bad add-in is the cause."]
 ],
 steps:{h:"Outlook won’t sign in",items:[
  ["Web test","Can the user sign in to Outlook on the web?"],
  ["Account status","Locked, disabled, no license? Check the admin center."],
  ["Credentials","Clear saved credentials in Credential Manager."],
  ["Safe mode","Open Outlook with Ctrl held or /safe. Disable add-ins."],
  ["Profile","Create a new profile if the issue remains."]
 ]},
 script:[
  ["c","Outlook keeps asking for my password and then says it can’t connect."],
  ["a","That loop is annoying, and I’ll help break it. Let’s check whether your account itself is fine. Can you sign in to Outlook on the web in a browser?","Control test."],
  ["c","Yes, that works."],
  ["a","Good, so your account and mailbox are healthy. The issue is on this computer. Let’s clear the saved credentials and start fresh.","Interprets and leads."]
 ],
 qa:["Web test used first","Admin status checked when permitted","Credentials cleared before profile rebuild","Steps and results in notes"],
 quiz:[
  ["Outlook web works, desktop doesn’t:",["Account is fine; fix the local Outlook","Mailbox deleted","Wi-Fi is down"],0,"The account is healthy."],
  ["No license assigned means:",["User can’t use the service","Faster mail","Nothing changes"],0,"No license, no service."],
  ["Starting Outlook in safe mode tests:",["Add-ins","The router","DNS"],0,"Add-ins are disabled in safe mode."]
 ]},

{id:"b13",track:"l2",title:"How email flows: MX, SPF, DKIM, DMARC and delivery problems",level:"advanced",account:"Brightdesk IT",mins:18,sim:"sim-l2g",
 teach:[
  ["Mail has a route","When someone sends mail to you@company.com, the sender’s server looks up the company’s MX record in DNS to find where to deliver. If the MX is wrong, mail goes nowhere."],
  ["MX","Mail exchanger records list the servers that accept mail for a domain, with priority numbers. After a mail provider change, the MX records must be updated, and changes can take time to spread."],
  ["SPF","A TXT record that lists the servers allowed to send mail for the domain. Missing or wrong SPF makes recipients treat mail as spam or reject it."],
  ["DKIM","A signature added to outgoing mail so recipients can verify it was not changed and came from the domain. It uses a key published in DNS."],
  ["DMARC","A policy that tells receivers what to do when SPF or DKIM fail (none, quarantine or reject), and where to send reports."],
  ["Typical symptoms","‘My emails go to the recipients’ junk’, ‘some people don’t receive mail’, or ‘mail stopped after we changed provider’. Look at DNS records for the domain."],
  ["Read before you change","Use a DNS lookup tool to see current records. DNS changes can break mail for the whole company, so only make them with authority and after noting the originals. Escalate DNS changes unless your role allows them."]
 ],
 steps:{h:"Mail not arriving at a domain",items:[
  ["Confirm","Is it all senders or some? Internal or external?"],
  ["Check MX","Look up the domain’s MX records; do they point to the right provider?"],
  ["Check SPF","Is there one SPF record that includes the sending services?"],
  ["Check bounce","Read any bounce message for the code and reason."],
  ["Escalate or fix","Document the records and who owns DNS."]
 ]},
 script:[
  ["c","Customers say they never get our emails since we switched providers last week."],
  ["a","That timing suggests the switch left something unfinished. I’d like to check your domain’s mail records. Could you tell me the domain name, and who manages your DNS?","Connects timing to a cause."],
  ["c","It’s northlake-dental.example. I think our web designer manages DNS."],
  ["a","Thank you. I’ll look up the records now. If the mail records still point to the old provider, your web designer will need to update them, and I’ll write down exactly what to change.","Takes ownership, explains the handoff."]
 ],
 qa:["Scope asked: all senders or some","Records checked with a tool, not guessed","No DNS changes without authority","Exact record values written for the DNS owner"],
 quiz:[
  ["MX records tell senders:",["Where to deliver mail","Your website color","Your IP speed"],0,"MX points to mail servers."],
  ["SPF is a:",["List of allowed senders","Spam filter app","Wi-Fi setting"],0,"A TXT record of allowed senders."],
  ["After switching providers mail stops. First check:",["MX records","The monitor","The printer"],0,"MX records."]
 ]},

{id:"b14",track:"l2",title:"Reading bounce messages and fixing failed sends",level:"intermediate",account:"Brightdesk IT",mins:14,
 teach:[
  ["A bounce is a free diagnosis","Non-delivery reports tell you what went wrong. Read them before guessing. Ask the customer to forward the bounce or read the code and message."],
  ["Temporary vs permanent","Codes starting 4 are temporary (try again later). Codes starting 5 are permanent failures. 4.x.x means the server will keep trying for a while. 5.x.x means it gave up."],
  ["Common codes","550 5.1.1: recipient address does not exist, usually a typo. 552 or 452: mailbox full. 550 5.7.1: rejected for policy, spam or authentication failure. 554: transaction failed, often a blocklist. 421 or 450: server busy or greylisting."],
  ["Fixes by cause","Typo: correct the address. Full mailbox: ask the recipient to clear space. Policy rejection: check SPF, DKIM, DMARC and whether the sending IP is blocklisted. Attachment too large: shrink or share by link."],
  ["Blocklists","If many recipients reject mail from the customer, check whether their sending IP is on a blocklist, then follow the removal process. A compromised account that sent spam is a common reason."],
  ["Customer communication","Explain the code in plain words: ‘The address doesn’t exist; it looks like there’s a letter missing’. Offer the next step."]
 ],
 steps:{h:"Handle a bounce",items:[
  ["Get the message","Ask the customer to forward or read the full bounce."],
  ["Read the code","4 is temporary, 5 is permanent. What does the text say?"],
  ["Match the cause","Address, mailbox, policy, size, blocklist."],
  ["Fix","Correct, resend, clear space, or escalate."],
  ["Confirm","Send a test and confirm delivery."]
 ]},
 script:[
  ["c","I keep getting an email back saying ‘550 5.1.1 user unknown’."],
  ["a","Thanks, that message is actually helpful. The code 5.1.1 means the receiving server doesn’t recognize the address. Could you read me the address you’re sending to, letter by letter?","Reads the code for the customer, then checks."],
  ["c","j-o-h-n-dot-s-m-i-t-h at example dot com."],
  ["a","Thank you. Another look at the contact card might show a different spelling. Could you confirm it with the person if you can?","Practical next step."]
 ],
 qa:["Bounce message read and interpreted","Temporary vs permanent distinguished","Plain-language explanation","Test message confirmed"],
 quiz:[
  ["550 5.1.1 usually means:",["Address doesn’t exist","Mailbox full","Server down"],0,"Unknown recipient."],
  ["A 4.x.x code is:",["Temporary","Permanent","A virus"],0,"Retry later."],
  ["Many rejections from one sender suggest:",["A possible blocklist or authentication issue","A bad monitor","A wrong keyboard"],0,"Check authentication and blocklists."]
 ]}
]);
