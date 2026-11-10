/* TSR L1, weeks 4 to 6 */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"a5",track:"l1",title:"Know the equipment: modem, router, gateway, cables and ports",level:"basic",account:"Northwave Fiber",mins:14,
 teach:[
  ["Why equipment knowledge comes first","You cannot guide a customer to “the cable on the back” if you do not know what is there. Learn the parts, the names customers use, and what each does."],
  ["Modem, router, gateway","A modem connects your home to the provider’s network. A router shares that connection between devices and creates Wi-Fi. A gateway is one box that does both. On fiber, an ONT (optical network terminal) turns light signals into Ethernet. Customers often call everything “the router”, so confirm what they mean: “Is it the box with the lights that the cable from the wall goes into?”"],
  ["Cables and what they look like","Coax: round, with a screw-on metal connector. Ethernet: flat plastic plug that clicks, like a larger phone jack. Fiber: thin, usually green or yellow with a small square plug, and it can be damaged by sharp bends. Power: a barrel or small round plug. Phone line: a thin plug in a telephone-style jack."],
  ["Ports and labels","WAN or Internet is the port that connects to the provider. LAN ports connect your devices. Reset is a small hole: a long press factory-resets the device and erases settings, so never ask a customer to press it unless the procedure says so."],
  ["Lights as a language","Power, Internet/Online, Wi-Fi and LAN lights each have a meaning. Solid usually means connected, blinking means trying or active, off means no power or no link, and red or amber means a fault. Always check your account’s legend."],
  ["Describe by sight, not by jargon","Instead of “check the WAN port”, say “turn it around and find the port labeled Internet. Is a cable clicked into it?” Ask the customer to read you the labels and lights."]
 ],
 steps:{h:"Equipment walk-through with a customer",items:[
  ["Identify","What brand and model is on the label? Is there one box or two?"],
  ["Power","Is the power light on? Is the power cable firm at both ends?"],
  ["Provider cable","Which cable goes from the wall to the box: round with a screw, or thin and green?"],
  ["Ports","Is the Ethernet cable clicked into the port labeled Internet or WAN?"],
  ["Lights","Read me the lights from left to right and tell me their color and whether they blink."]
 ]},
 legend:{h:"Typical gateway lights (check your account)",rows:[
  ["#16a34a",false,"Solid green or white","Connected and healthy"],
  ["#16a34a",true,"Blinking green or white","Trying to connect, or traffic is flowing"],
  ["#f59e0b",true,"Blinking amber","Searching for the network"],
  ["#dc2626",false,"Solid red","Fault: no signal or hardware problem; escalate after cable and power checks"],
  ["#9ca3af",false,"Off","No power, or a light that has been turned off"]
 ]},
 script:[
  ["a","Let’s find out exactly which box you have. Can you turn it around and read me the brand name and the model on the label?"],
  ["c","It says Northwave, G4."],
  ["a","Perfect, that’s a gateway, so it’s both the modem and the router in one box. On the back, is there a round cable with a screw-on end? That’s the one from the wall.","Names the device and describes the cable by sight."]
 ],
 qa:["Equipment identified before steps are given","Cables described by appearance, not jargon","Reset hole never used without a procedure","Lights read and confirmed with the customer"],
 quiz:[
  ["A gateway is:",["Only a modem","A modem and router in one box","A Wi-Fi extender"],1,"A gateway combines both."],
  ["A customer says “the router” but means the box from the wall. You:",["Assume they are right","Confirm exactly which box and its label","Hang up"],1,"Customers use the words loosely. Confirm."],
  ["The small Reset hole should be pressed:",["First, always","Only when your procedure says so","Never; it does nothing"],1,"Long press factory-resets and erases settings."]
 ]},

{id:"a6",track:"l1",title:"Wi-Fi basics: bands, range, placement and what slows it down",level:"basic",account:"Northwave Fiber",mins:14,
 teach:[
  ["Wi-Fi is radio","Your devices talk to the router by radio waves. Distance, walls and other devices weaken the signal. Fixing Wi-Fi is mostly about the radio, not the internet service."],
  ["The two main bands","2.4 GHz travels farther and through walls but is slower and more crowded. 5 GHz is faster but covers less distance. Newer gear also offers 6 GHz, which is the fastest and the shortest range. Many routers join them under one name and pick for you."],
  ["Placement beats everything","Put the router in a central, open, elevated spot. Not in a cabinet, on the floor, behind a TV, or in the basement. Keep it away from microwaves, cordless phone bases and large metal or water objects such as aquariums and mirrors."],
  ["Signal strength in plain words","Bars or “signal” show how strong the connection is. One or two bars means the device is too far or blocked. Walk closer to confirm: if it gets fast near the router, the problem is range, not service."],
  ["What slows Wi-Fi","Too many devices streaming at once, an old device, a microwave in use, a distant neighbor’s network on the same channel, or a router that has been running for months. Ask about all of these."],
  ["Ethernet is the control test","If the speed is fine by cable and bad by Wi-Fi, the internet service is fine. That narrows it to Wi-Fi and saves everyone time."],
  ["Extenders and mesh","Extenders repeat a signal and cut the speed roughly in half. Mesh systems use several units that work together and are better for large homes. Both belong near the edge of good coverage, not at the dead spot."]
 ],
 steps:{h:"Wi-Fi isolation questions",items:[
  ["Scope","Is it slow on every device or only one?"],
  ["Location","Is it worse in certain rooms? How far is that from the router?"],
  ["Timing","Does it happen at a certain time of day?"],
  ["Control test","Can you plug a laptop into the router with a cable and run a speed test?"],
  ["Placement","Where is the router sitting right now?"]
 ]},
 decide:{h:"Decision tree: slow or weak Wi-Fi",nodes:[
  {q:"Is the speed also slow over an Ethernet cable?",b:"Yes",out:"Not a Wi-Fi problem. Check the service: modem lights, outage map, then escalate if needed."},
  {q:"Is it slow only far from the router?",b:"Yes",out:"Range problem. Move the router, move the device, or recommend an extender or mesh."},
  {q:"Is it slow on only one device?",b:"Yes",out:"Device problem. Forget and rejoin the network, restart, update drivers; check for old hardware."},
  {end:"Slow everywhere on Wi-Fi at certain times: check for interference and busy channels (L2) and restart the gateway."}
 ]},
 script:[
  ["c","The Wi-Fi in my bedroom is terrible, but the living room is fine."],
  ["a","Thanks, that’s a useful clue. It sounds like distance or walls between the bedroom and the router. Where is the router sitting?","Explains the clue and asks about placement."],
  ["c","It’s in a cabinet in the living room."],
  ["a","That’s the likely cause. Cabinets block signal. If you can move it onto a shelf in the open, I expect the bedroom to improve a lot. Want to try it while I’m on the line?","Offers a fix, keeps ownership."]
 ],
 qa:["Scope and location questions asked first","Ethernet control test used when appropriate","Placement explained in plain language","Expectation set before recommending hardware"],
 quiz:[
  ["Which band travels farther?",["2.4 GHz","5 GHz","6 GHz"],0,"2.4 GHz goes farther but is slower."],
  ["A great speed over cable and a bad one over Wi-Fi means:",["The internet service is down","The issue is in the Wi-Fi","The modem is broken"],1,"The service is fine."],
  ["The best router spot is:",["In a cabinet","Central, open and raised","On the floor behind the TV"],1,"Central and open."]
 ]},

{id:"a7",track:"l1",title:"Speed tests that mean something",level:"basic",account:"Northwave Fiber",mins:14,sim:"sim-l1d",
 teach:[
  ["Why speed tests confuse people","Customers see a number and compare it to what they pay for. A single bad test proves nothing. Your job is to run a clean test and explain the result."],
  ["Units: Mbps, not MBps","Internet plans use megabits per second (Mbps). File downloads usually show megabytes per second (MB/s). One byte is eight bits, so 100 Mbps is about 12.5 MB/s. Customers panic about a “slow” download that is really normal."],
  ["Run a clean test","Test on one device, wired if possible. Close streaming, downloads and cloud backups. Use the official test link your account provides. Run it twice and compare."],
  ["Realistic expectations","Wired tests should reach about 90 percent or more of the plan speed. Wi-Fi is often lower, and busy hours can reduce it. A modest dip from the plan is normal. A large, repeated gap is worth escalating."],
  ["Download, upload, ping","Download is receiving. Upload is sending, which matters for video calls. Ping (latency) is the delay, measured in milliseconds. High ping hurts gaming and calls even when speed is fine."],
  ["Record the results","Always write download, upload, ping, test method and device in your notes. If you must escalate, these numbers are the proof."]
 ],
 steps:{h:"How to run a test with the customer",items:[
  ["Prepare","Close streaming, downloads and other devices if possible."],
  ["Connect","Use Ethernet if the customer can; otherwise stand near the router."],
  ["Test","Open the test link and run it. Read me the three numbers."],
  ["Repeat","Run it a second time to compare."],
  ["Explain","Your plan is 500 Mbps. You’re getting 470 on a cable, which is normal."]
 ]},
 script:[
  ["c","I pay for 500 and my phone says 180. I’m being ripped off."],
  ["a","I can see why that’s frustrating, so let’s test it properly. Phones on Wi-Fi often show less than the plan. Can you plug a laptop into the gateway with a cable and run the test I’ll send you?","Empathy, explains why, sets up a control test."],
  ["c","Okay. It says 476 down."],
  ["a","That’s right on target for a 500 plan. It means the service is fine, and the slower number on your phone is a Wi-Fi matter. Let’s look at that next.","Interprets the result for the customer."]
 ],
 qa:["Clean test method used","Units explained when needed","Result interpreted against the plan","Numbers recorded in notes"],
 quiz:[
  ["A 200 Mbps plan is about how many MB/s?",["200","25","2"],1,"Divide by eight: 25 MB/s."],
  ["Best way to confirm the service speed?",["Phone on Wi-Fi in the far bedroom","Laptop on Ethernet with other devices idle","Smart TV test"],1,"A wired control test."],
  ["What matters most for video calls beyond download speed?",["Upload and ping","The router color","The cable length"],0,"Upload and latency."]
 ]},

{id:"a8",track:"l1",title:"Setting up a new router and changing the Wi-Fi name and password",level:"intermediate",account:"Northwave Fiber",mins:16,sim:"sim-l1e",
 teach:[
  ["The right order matters","Power off, connect the provider cable to the modem or the Internet/WAN port, power on the modem, wait until it is online, then power on the router. Rushing the order is the most common reason a new router will not get online."],
  ["Connect the router to the modem","With a separate router, one Ethernet cable runs from the modem to the router’s Internet/WAN port. Devices connect to the router’s LAN ports or Wi-Fi."],
  ["Reaching the settings","Most routers use an app, or a web page at an address on the label (often something like 192.168.x.1). The label also shows the default admin login. Customers should change that login and write it down."],
  ["Secure Wi-Fi settings","Use WPA2 or WPA3, never open or WEP. Choose a long password (passphrase) and a recognizable network name that does not include their address or last name."],
  ["After changing the name or password","Every device that used the old network is kicked off and must rejoin with the new password. Warn the customer first, and plan to reconnect their key devices (phones, TV, printer, smart home)."],
  ["Never ask for the Wi-Fi or admin password out loud unless the policy lets you","Customers can type it on their device. If you need to confirm it, ask them to read it only when your account policy allows, and never write it in notes."]
 ],
 steps:{h:"New router setup flow",items:[
  ["Power down","Unplug the modem and the old router."],
  ["Cabling","Provider line to modem. Ethernet from modem to router’s Internet port."],
  ["Power up","Modem first, wait for Online. Then router."],
  ["Configure","Open the app or settings page. Set the network name and password."],
  ["Reconnect and test","Rejoin the key devices, run a speed test, confirm everything works."]
 ]},
 script:[
  ["c","I just bought a new router and nothing works."],
  ["a","No problem, we’ll set it up together. First, let’s check the order. Can you tell me how the cables are connected right now?","Asks before instructing."],
  ["c","The old cable went into the new one."],
  ["a","Thanks. Let’s unplug both for a minute. Then we’ll connect the line from the wall to the modem, a cable from the modem to the Internet port on the router, and power the modem first. Ready?","Clear order, one step at a time."]
 ],
 qa:["Warns that devices will disconnect after the change","Cabling and power order explained in sequence","Secure settings recommended","No passwords written in notes"],
 quiz:[
  ["After a new Wi-Fi password is saved:",["Devices stay connected","Devices disconnect and must rejoin","The internet goes down for a day"],1,"Everything must rejoin."],
  ["Which security setting is best?",["Open","WEP","WPA2 or WPA3"],2,"Use WPA2 or WPA3."],
  ["Power up order:",["Router first","Modem first, then router","Either"],1,"Modem first."]
 ]},

{id:"a9",track:"l1",title:"Slow Windows PC: startup apps, storage and restarts",level:"basic",account:"Brightdesk IT",mins:16,sim:"sim-l1f",
 teach:[
  ["Slow is a symptom, not a diagnosis","Always find out what is slow: startup, a single program, the browser, or everything. Ask when it began and what changed (updates, new software, a full drive)."],
  ["Restart first, and mean it","A true restart (Start, Power, Restart) clears memory and finishes pending updates. Shutting down and powering on can use fast startup and may not fully reset. Ask when the PC was last restarted; many users keep PCs asleep for weeks."],
  ["Task Manager shows the culprit","Press Ctrl+Shift+Esc. On the Processes tab, sort by CPU, Memory and Disk. A program using most of the memory or CPU is the first suspect. End a task only after telling the customer to save work."],
  ["Startup apps","In Task Manager open Startup apps. Disable high-impact programs the customer does not need at login. Never disable security software or drivers you do not recognize."],
  ["Free up storage","Open Settings, System, Storage. A drive that is nearly full slows the PC and blocks updates. Delete temporary files, empty the recycle bin and uninstall unused programs. Ask before deleting anything personal."],
  ["Malware and browser extensions","Suspicious pop-ups or a hijacked browser may mean malware or a bad extension. Run the built-in Windows Security scan and remove unknown extensions."],
  ["Know your limits","An old PC with a slow mechanical drive or little memory will never be fast. Offer honest options: upgrade, replace, or accept a modest improvement."]
 ],
 steps:{h:"Slow PC checklist",items:[
  ["Define","What exactly is slow, and since when?"],
  ["Restart","Do a real restart: Start, Power, Restart."],
  ["Task Manager","Ctrl+Shift+Esc. What is using the most CPU, memory or disk?"],
  ["Startup and storage","Disable unneeded startup apps. Check free space in Settings, Storage."],
  ["Scan and update","Run Windows Security. Install pending updates."]
 ]},
 decide:{h:"Decision tree: slow Windows PC",nodes:[
  {q:"Has the PC been restarted in the last few days?",b:"No",out:"Do a full restart first. Re-test."},
  {q:"Is the drive more than 90 percent full?",b:"Yes",out:"Free up space: temporary files, recycle bin, unused programs. Re-test."},
  {q:"Does Task Manager show one program using most CPU or memory?",b:"Yes",out:"Close or update that program. If it keeps happening, reinstall or escalate."},
  {q:"Did pop-ups or browser changes start recently?",b:"Yes",out:"Run Windows Security scan and remove unknown extensions."},
  {end:"If still slow, document results and escalate to L2 for deeper diagnostics (disk health, memory, drivers)."}
 ]},
 script:[
  ["c","My computer takes forever to start. It’s been awful since Monday."],
  ["a","That sounds frustrating, especially if you use it for work. Let’s see what changed on Monday. Did anything get installed or updated that day?","Empathy, then discovery."],
  ["c","I think some updates, I don’t know."],
  ["a","That’s helpful. First, could you do a full restart, Start, Power, Restart, not a shutdown? Updates often finish during a restart. I’ll stay on the line.","Specific, polite, one step."]
 ],
 qa:["Defines the symptom before acting","Warns customer to save work before ending tasks","Does not delete personal files without asking","Honest expectations on older hardware"],
 quiz:[
  ["What is the first step in most slow-PC cases?",["Reinstall Windows","A true restart","Buy a new PC"],1,"Restart first."],
  ["To open Task Manager:",["Ctrl+Shift+Esc","Ctrl+P","Alt+F4"],0,"That shortcut opens it directly."],
  ["Which startup item should you leave enabled?",["A launcher the user never uses","Security software","A game updater"],1,"Never disable security software."]
 ]},

{id:"a10",track:"l1",title:"Windows Update problems: stuck, failing or restarting forever",level:"intermediate",account:"Brightdesk IT",mins:14,
 teach:[
  ["Why updates matter","Updates fix security holes and bugs. A PC that cannot update is at risk, so fixing update trouble is part of L1 support."],
  ["Patience first","A big update can take an hour or more and restart several times. If the customer says it is stuck, ask how long and whether the drive light is flashing. Never advise a forced power-off during installation unless it has been frozen for a very long time and your procedure says so."],
  ["Common causes","Not enough free space, a pending restart, a flaky connection, a conflicting program, or a corrupted update file."],
  ["The basic fixes","Make sure there is enough free space (often 10 GB or more), restart, check the date and time, and run the Windows Update troubleshooter from Settings, System, Troubleshoot. Try again after a restart."],
  ["When it fails with an error code","Write the exact code. Look it up in the knowledge base. Many codes have a known fix. If it is unfamiliar, escalate with the code, what was tried and the Windows version."],
  ["Prevent a repeat","Show the customer how to set active hours so the PC restarts outside work time, and explain why leaving it asleep for weeks causes problems."]
 ],
 steps:{h:"Update troubleshooting steps",items:[
  ["Check status","Settings, Windows Update. Read the exact message and error code."],
  ["Free space","Confirm plenty of free space on the system drive."],
  ["Restart","A full restart, then try the update again."],
  ["Troubleshooter","Settings, System, Troubleshoot, Other troubleshooters, Windows Update."],
  ["Document","Record the error code, steps and results; escalate if unresolved."]
 ]},
 script:[
  ["c","It’s been on ‘Working on updates, 35 percent’ for two hours."],
  ["a","Thanks for staying with it. Two hours is long. Is the drive light flashing or does it look completely frozen?","Checks if it is truly stuck."],
  ["c","It’s flickering a little."],
  ["a","Good sign, it’s still working. Let’s wait another 20 minutes while I stay with you. If it hasn’t moved by then, I’ll walk you through the next safe step.","Reassures and sets a time boundary."]
 ],
 qa:["Asks how long and whether activity continues before advising anything drastic","Exact error code captured","Safe order of steps followed","Escalation notes include code and steps"],
 quiz:[
  ["Update is at 35% for 10 minutes with disk activity. You:",["Force a power-off","Wait and keep monitoring","Reinstall Windows"],1,"It is still working."],
  ["What should you capture if it fails?",["The exact error code","The color of the case","Nothing"],0,"The code drives the fix."],
  ["Why set active hours?",["To prevent restarts during work time","To disable updates","To speed up internet"],0,"Restarts happen outside work hours."]
 ]}
]);
