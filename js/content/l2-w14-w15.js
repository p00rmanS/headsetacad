/* TSR L2, weeks 14 and 15 */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"b15",track:"l2",title:"Remote support sessions: consent, security and screen sharing",level:"intermediate",account:"Brightdesk IT",mins:16,sim:"sim-l2h",
 teach:[
  ["Why remote support helps","Seeing the screen is faster than describing it. You can fix settings, gather logs and show the customer what you are doing. It also carries risk, so security rules come first."],
  ["Scam awareness","Fake tech support scammers use the same tools. To protect customers, you always start the session on your own authorized platform, and the customer never needs to give you banking access. Say clearly who you are, why you need access, and what you will do."],
  ["Consent and verification","Verify identity, then get clear permission: ‘With your permission, I’d like to view your screen to fix this. I won’t open personal files. You can end the session at any time.’ Some accounts require recorded consent."],
  ["Starting the session","Direct the customer to the official session page, have them read you the code or click the link you send from the company platform. Never install tools from unknown sources or accept a link they received from someone else."],
  ["During the session","Narrate every action. Do not open personal files, email or banking pages. Ask the customer to enter passwords themselves, or look away. Keep the session short and on topic."],
  ["Ending properly","Tell the customer you are ending the session, close it from the platform, confirm access is gone, and note the start and end time, what you changed and what you did not touch."],
  ["Limits","Some work needs hands-on care: hardware faults, unsupported devices, or anything legal or sensitive. Know what your policy allows and escalate when unsure."]
 ],
 steps:{h:"Safe remote session",items:[
  ["Verify","Complete identity verification for the account."],
  ["Explain","Say who you are, why you need access and what you will do."],
  ["Consent","Get a clear yes. Mention they can end it at any time."],
  ["Work","Narrate each action; avoid personal files; customer types passwords."],
  ["Close","End the session, confirm it is closed, document everything."]
 ]},
 script:[
  ["a","I can fix this faster if I can see your screen. With your permission, I’d like to start a remote session from our official page. I won’t open any of your personal files, and you can end the session at any time. Is that okay?","Clear consent and limits."],
  ["c","Okay, I guess."],
  ["a","Thank you. I’m going to send a link from our support platform to your email on file. Please open it and read me the six-digit code you see, so I know you’re on the right page.","Uses the official platform and email on file."]
 ],
 qa:["Identity verified before access","Explicit consent and scope stated","Official platform used; no outside tools","Session ended and documented"],
 quiz:[
  ["Where should the session link come from?",["The company’s official platform","Any tool the caller suggests","A random website"],0,"Only the official platform."],
  ["When a password is needed, you:",["Ask them to type it themselves","Ask them to read it","Skip it"],0,"The customer types it."],
  ["After the session, you must:",["Confirm it’s closed and document it","Leave it open","Forget it"],0,"Close and document."]
 ]},

{id:"b16",track:"l2",title:"Event Viewer, Safe Mode, Device Manager and drivers",level:"advanced",account:"Brightdesk IT",mins:18,
 teach:[
  ["Logs show what happened","Windows records errors and warnings in Event Viewer. Open it by typing Event Viewer in the Start menu. Look under Windows Logs for System and Application, filter by Critical and Error around the time of the problem."],
  ["Read an event","Note the source, the Event ID, the time and the message. Search the ID in the knowledge base. Kernel-Power Event ID 41 means the PC restarted without a clean shutdown, often due to power, overheating or a crash."],
  ["Device Manager","Right-click Start, then Device Manager. A yellow triangle means a problem with a driver or device. Right-click, open Properties and read the status message. Options: update, roll back, disable and re-enable, or uninstall and restart so Windows reinstalls it."],
  ["Drivers","A driver is software that lets Windows use hardware. After an update, a new driver can break something. Roll Back Driver restores the previous one. Download drivers only from the maker’s or PC vendor’s site."],
  ["Safe Mode","Safe Mode loads minimal drivers. If a problem disappears there, a driver or startup program is the cause. Reach it by holding Shift while choosing Restart, then Troubleshoot, Advanced options, Startup Settings, Restart, and choose Safe Mode."],
  ["System file checks","sfc /scannow in an administrator Command Prompt repairs protected system files. DISM /Online /Cleanup-Image /RestoreHealth repairs the component store. Run DISM first, then sfc, and restart."],
  ["Back up first","Before bigger fixes, make sure the customer’s data is backed up or safe. Warn them that repairs can take a long time."]
 ],
 steps:{h:"Investigate a crash or hardware fault",items:[
  ["When","When did it start? What changed: update, driver, new device?"],
  ["Events","Event Viewer: System and Application errors around that time."],
  ["Devices","Device Manager: any yellow triangles?"],
  ["Safe Mode","Does the problem disappear in Safe Mode?"],
  ["Repair","Roll back or update the driver; run DISM then sfc if system files are suspect."]
 ]},
 script:[
  ["c","My computer restarts by itself a few times a day."],
  ["a","That’s disruptive, especially if you lose work. Let’s check the logs to see what Windows recorded when it restarted. Can you open Event Viewer from the Start menu?","Empathy, then logs."],
  ["c","Okay, I’m in."],
  ["a","Great. Expand Windows Logs, click System, and look for entries with a red icon near the time of the last restart. Tell me what the source and Event ID say.","Specific instruction."]
 ],
 qa:["Log source and ID captured","Driver actions are reversible and explained","Data protected before repairs","Steps and results recorded"],
 quiz:[
  ["A yellow triangle in Device Manager means:",["A device or driver problem","The PC is new","Updates done"],0,"Check its status."],
  ["Kernel-Power 41 indicates:",["An unclean shutdown","A fast boot","An email error"],0,"Unexpected shutdown."],
  ["DISM and sfc run in what order?",["DISM, then sfc","sfc, then DISM","Neither"],0,"DISM first."]
 ]},

{id:"b17",track:"l2",title:"Blue screens, boot loops and when to hand off",level:"advanced",account:"Brightdesk IT",mins:16,
 teach:[
  ["What a blue screen is","A BSOD (stop error) means Windows hit a problem it could not recover from. The screen shows a stop code such as CRITICAL_PROCESS_DIED or MEMORY_MANAGEMENT. Write it down exactly."],
  ["Gather clues","When does it happen: at startup, under load, after an update, or after plugging in a device? Recent changes matter more than the code alone."],
  ["First moves","Remove newly attached devices, restart, and boot into Safe Mode if it happens. If Safe Mode is stable, suspect a driver or startup program. Roll back the latest driver or update."],
  ["Startup Repair","If Windows cannot start, the recovery environment offers Startup Repair, System Restore and Uninstall Updates. Guide the customer to it by forcing three failed starts, or follow the vendor’s recovery key. These actions are generally safe for personal files, but warn the customer."],
  ["BitLocker","If the drive is encrypted, recovery steps may ask for a BitLocker recovery key. Never ask for it to be read to you unless policy allows; it is tied to the customer’s Microsoft account or company IT."],
  ["Hardware suspects","Frequent crashes with different stop codes suggest failing memory, a failing drive, overheating or power issues. A hardware test from the vendor or Windows Memory Diagnostic can help."],
  ["Hand-off criteria","Escalate or refer to a repair shop if data is at risk, the drive is clicking or reported failing, or the PC will not boot after recovery steps. Give the customer a clear next step and set expectations about data."]
 ],
 steps:{h:"Blue screen triage",items:[
  ["Capture","Write down the stop code and any file name shown."],
  ["Recent change","What changed: update, driver, new device, install?"],
  ["Simplify","Unplug extra devices; try Safe Mode."],
  ["Repair","Roll back the update or driver; try Startup Repair or System Restore."],
  ["Hand off","Escalate for data risk, a failing drive, or unresolved boot failure."]
 ]},
 script:[
  ["c","My laptop shows a blue screen and restarts. I have a presentation tomorrow."],
  ["a","That’s stressful with a deadline, and I’ll help you through this. First, can you read me the stop code at the bottom of the blue screen, exactly as written?","Empathy, specific request."],
  ["c","It says MEMORY_MANAGEMENT."],
  ["a","Thank you. Before we try anything, do you have your presentation saved somewhere other than this laptop?","Protects the data first."]
 ],
 qa:["Stop code recorded exactly","Data protected before repairs","Safe, reversible steps first","Clear hand-off with expectations"],
 quiz:[
  ["First thing to capture from a blue screen:",["The stop code","The brand of the desk","The weather"],0,"Write down the stop code."],
  ["Before repairs, check:",["Whether the data is backed up","The color of the case","Nothing"],0,"Back up first."],
  ["Recovery key requests should:",["Follow policy and be handled carefully","Be posted online","Be ignored"],0,"The key is sensitive."]
 ]},

{id:"b18",track:"l2",title:"Static IPs, DHCP reservations and port forwarding",level:"advanced",account:"Northwave Fiber Business",mins:18,sim:"sim-l2i",
 teach:[
  ["Why some devices need fixed addresses","Printers, cameras, servers and phones are easier to reach if their address never changes. There are two ways: a static address typed on the device, or a DHCP reservation that always gives it the same address."],
  ["Prefer reservations","A reservation is managed in one place (the router), avoids conflicts and survives a factory reset of the device. If you must use a static address, choose one outside the DHCP pool and record it."],
  ["What port forwarding does","It sends incoming traffic on a chosen port from the internet to a device inside the network. It is used for cameras, game servers or remote desktop. It also opens the network to attack."],
  ["Requirements","The device needs a fixed address (a reservation), the router needs the right rule (protocol, external port, internal IP, internal port), and the customer needs a public IP, not CGNAT. Some providers block certain ports."],
  ["Testing","Test from outside the home network, such as a phone on mobile data, not from the same Wi-Fi. Many routers do not allow hairpin testing from inside."],
  ["Safer alternatives","Use the vendor’s cloud service, a VPN, or a secure remote tool. If forwarding is required, use strong passwords, keep firmware updated, avoid default ports and never forward remote desktop (RDP) directly."],
  ["UPnP","Universal Plug and Play lets devices open ports automatically. It is convenient but risky. Turn it off if not needed and record any change."],
  ["Document","Record the device, address, rule, reason and who requested it, so it can be removed later."]
 ],
 steps:{h:"Set up port forwarding safely",items:[
  ["Need","What device and what service? Is there a safer alternative?"],
  ["Address","Create a DHCP reservation for the device."],
  ["Rule","Add the forwarding rule: protocol, external port, internal IP, internal port."],
  ["Test","Test from outside the network."],
  ["Secure","Strong password, updated firmware, document the rule."]
 ]},
 script:[
  ["c","I need to view my security cameras while I’m away. The app doesn’t work from outside."],
  ["a","I can help with that. Before we open anything, many cameras have a cloud option that doesn’t require opening your network. What brand are your cameras?","Offers the safer path first."],
  ["c","It’s an older brand, no cloud."],
  ["a","Understood. Then we can set up port forwarding, but first we’ll reserve a fixed address for the recorder so it doesn’t change. I’ll walk you through both, and I’ll note the safety steps we should take.","Sets expectations and safety."]
 ],
 qa:["Safer alternative offered first","Reservation made before the rule","Test from outside the network","Rule, reason and risks documented"],
 quiz:[
  ["Best way to keep a device’s address fixed:",["A DHCP reservation","Turn off the router","A longer cable"],0,"Reservations are easier to manage."],
  ["Port forwarding is hard when:",["The ISP uses CGNAT","The cable is blue","The phone is old"],0,"No public address."],
  ["Test forwarding:",["From outside the home network","Only from the same Wi-Fi","Never"],0,"Use mobile data."]
 ]},

{id:"b19",track:"l2",title:"Firewalls, VLANs and guest networks for small business",level:"advanced",account:"Northwave Fiber Business",mins:16,
 teach:[
  ["Firewalls in plain words","A firewall allows or blocks traffic by rules. Home routers block unsolicited incoming traffic by default. Business firewalls add rules for specific services and can log what is blocked."],
  ["Default deny","Good rules start by blocking everything inbound, then allow only what is needed. Every opened port is a risk and must have an owner and a reason."],
  ["Troubleshooting blocks","If a service is unreachable, check whether a rule blocks it: source, destination, port and protocol. Logs show blocked attempts. Never turn the firewall off to test; add or adjust a specific rule."],
  ["VLANs","A VLAN splits one physical network into separate virtual ones, for example staff, guests, voice and cameras. Devices on different VLANs cannot talk unless a rule allows it."],
  ["Guest networks","Guest Wi-Fi should be isolated from the business network, with client isolation on, optional bandwidth limits and a different password. This protects business data."],
  ["Common VLAN faults","A device plugged into a port assigned to the wrong VLAN. A printer in the staff VLAN that guests cannot reach. A voice phone that needs a special VLAN setting. Check the port’s VLAN and the device’s address range."],
  ["Change control","In business settings, changes can break other users. Follow the change process, make one change at a time and record the previous setting so you can restore it."]
 ],
 steps:{h:"Service blocked on a business network",items:[
  ["Define","Which device, service, port and direction?"],
  ["VLAN","Which VLAN is the device on, and is that correct?"],
  ["Rule","Is a firewall rule blocking it? Check the logs."],
  ["Adjust","Add or adjust a specific rule; never disable the firewall."],
  ["Record","Document the change and how to undo it."]
 ]},
 script:[
  ["c","Our guest Wi-Fi users can print to the office printer, and we don’t want that."],
  ["a","Good catch, that’s a security risk. It suggests the guest network isn’t isolated from the office network. May I check how the guest network is set up and which VLAN it’s on?","Explains the risk and asks permission."]
 ],
 qa:["Specific rule changes only; firewall never disabled","VLAN and port assignments checked","Changes recorded with a rollback plan","Customer told the risk and the fix"],
 quiz:[
  ["Best firewall approach:",["Default deny, allow only what’s needed","Open everything","Turn it off"],0,"Default deny."],
  ["VLANs separate:",["Virtual networks on shared hardware","Wi-Fi bands","Cables"],0,"Logical separation."],
  ["Guests should be:",["Isolated from business devices","On the same network","Given admin access"],0,"Isolate guest traffic."]
 ]},

{id:"b20",track:"l2",title:"VPN at L2: split tunnel, DNS, certificates and logs",level:"advanced",account:"Brightdesk IT",mins:16,
 teach:[
  ["Beyond ‘it won’t connect’","L1 checks internet, credentials and the client. L2 explains why a connected VPN still fails: routing, DNS, certificates, MTU or server load."],
  ["Split vs full tunnel","In full tunnel all traffic goes through the company. In split tunnel only company traffic does. Split tunnel makes video calls and streaming faster but depends on correct routes."],
  ["Connected but cannot reach internal sites","Usually a DNS or route problem. Test by IP address first: if the internal server answers by IP but not by name, the VPN DNS is not being used. Flush DNS, disconnect and reconnect."],
  ["Certificates","Many VPNs use certificates that expire. Symptoms: a sudden failure for one user or many, and an error mentioning a certificate or authentication. Check the date and time on the device and the certificate dates."],
  ["Time and clocks","Wrong device time breaks certificates and MFA codes. Make sure automatic time is on."],
  ["MTU and performance","VPNs add headers, so a lower MTU may be needed. Symptoms: connects fine, large transfers hang. Use the MTU test and the KB’s recommended value."],
  ["Logs and evidence","Collect the client log, time, user, network type, client version and the exact error. If many users are affected, escalate to the network or security team at once."]
 ],
 steps:{h:"Connected VPN, nothing works",items:[
  ["Scope","One user or many? Which resources fail?"],
  ["IP test","Can the user reach an internal server by IP?"],
  ["DNS","If IP works but name fails, flush DNS and check VPN DNS settings."],
  ["Time and certificate","Check device time and certificate validity."],
  ["Collect","Client log, time, version, error; escalate if widespread."]
 ]},
 script:[
  ["c","I’m connected to the VPN but I can’t open any internal sites."],
  ["a","Thanks, that narrows it down. The tunnel is up, so let’s test whether it’s a name problem. Could you open Command Prompt and ping this internal address I’ll give you?","Isolates DNS from routing."],
  ["c","It replies."],
  ["a","Great, that means traffic is flowing. The problem is name lookup. Let’s flush your DNS cache and reconnect.","Interprets and fixes."]
 ],
 qa:["IP test before DNS change","Time and certificate checked","Client logs collected","Wide impact escalated immediately"],
 quiz:[
  ["VPN is up; internal IP works, names fail:",["DNS","Hardware","Power"],0,"A name lookup problem."],
  ["Wrong device time can break:",["Certificates and MFA codes","Printing","The monitor"],0,"Time matters."],
  ["Widespread VPN failure should be:",["Escalated at once","Ignored","Fixed by each user"],0,"Escalate quickly."]
 ]},

{id:"b21",track:"l2",title:"TSR L2 exam: mixed review",level:"advanced",account:"All tech accounts",mins:30,
 teach:[
  ["How this exam works","Answer without looking back. Pass is 80 percent. Then complete at least four L2 practice calls at 85 percent or better. Missed items return as flashcards."],
  ["What it covers","IP, DHCP and the command-line tools, ping and traceroute, mesh and IoT, packet loss and latency, MTU and cabling, line signal levels, Microsoft 365, mail flow, bounces, remote support, logs and drivers, blue screens, port forwarding, firewalls, VLANs and VPN."],
  ["If you pass","Move on to L3: outage triage, escalation tickets, root cause and incident communication."],
  ["If you miss","Study the lessons you missed, practice the commands in a real Windows prompt, and retake after three days."]
 ],
 steps:{h:"Ready for L3 when",items:[
  ["Exam","Score 80 percent or better."],
  ["Calls","Four L2 calls at 85 percent or better."],
  ["Commands","Run the ping ladder from memory and explain each result."],
  ["Evidence","Write an escalation note with numbers, times and steps."],
  ["Explain","Teach DNS and DHCP to a friend in two minutes."]
 ]},
 script:[
  ["a","Thank you for calling Brightdesk IT, this is Jordan. How can I help you today?"],
  ["c","My laptop says connected but I can’t open any websites."],
  ["a","I can help. Let’s find where it stops. Could you open Command Prompt and type ping 8.8.8.8?","Starts the ladder."]
 ],
 qa:["Layers tested in order","Results explained in plain words","Changes recorded with rollback","Escalation evidence complete"],
 quiz:[
  ["169.254.x.x means:",["DHCP failed","The internet is fast","A static IP"],0,"Self-assigned address."],
  ["Ping 8.8.8.8 works but a name fails:",["DNS","Cable","Router power"],0,"DNS."],
  ["Which command refreshes a DHCP lease?",["ipconfig /release then /renew","tracert","nslookup"],0,"Release and renew."],
  ["Gigabit port at 100 Mbps suggests:",["Bad cable or port","Fast network","DNS error"],0,"Check cable."],
  ["Outlook web works but the desktop doesn’t:",["Account is fine, fix local Outlook","Mailbox deleted","Wi-Fi outage"],0,"Control test."],
  ["550 5.1.1 means:",["User unknown","Mailbox full","Server busy"],0,"Unknown recipient."],
  ["MX records point to:",["Mail servers","Web servers","Printers"],0,"Mail servers."],
  ["Port forwarding needs:",["A fixed internal address","A new cable","A faster plan"],0,"Use a reservation."],
  ["Test port forwarding from:",["Outside the network","The same Wi-Fi","Anywhere"],0,"Mobile data."],
  ["A VPN connects but names fail:",["DNS","Power","Keyboard"],0,"Check DNS."],
  ["Kernel-Power 41 means:",["Unclean shutdown","Update done","Network up"],0,"Unexpected restart."],
  ["Remote support session link should come from:",["The official company platform","Any caller","A stranger"],0,"Official platform only."],
  ["Packet loss of 5 percent on a wired gateway ping suggests:",["Local cable or equipment","The website","The monitor"],0,"Local fault."],
  ["Repeated gateway reboots at set times suggest:",["A line or equipment fault","A Wi-Fi password","The laptop"],0,"Line or equipment."]
 ]}
]);
