/* TSR L2 and L3 casebooks */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"b22",track:"l2",title:"Casebook 1: Network diagnostics from the customer’s keyboard",level:"mid",account:"Northwave Fiber",mins:22,
 teach:[
  S("Gateway pings fine, internet doesn’t","Ping 192.168.1.1 is 1 ms. Ping 8.8.8.8 times out.","Problem is beyond the router: no upstream, modem not online, or an account issue.","1) Check the modem Online light. 2) Power cycle the modem. 3) Check provisioning and account status. 4) Check the outage board. 5) Dispatch or L3 if confirmed.","Your home network is healthy. The break is between your router and the internet. I’m going to check the line from our side.","Signal levels bad or area outage: L3 or dispatch."),
  S("8.8.8.8 works, websites don’t","Ping by IP works. Ping google.com fails.","DNS failure.","1) nslookup google.com. 2) ipconfig /flushdns. 3) Set DNS to automatic or to a public DNS to test. 4) Check for a bad DNS on the router.","Your connection works but the phone book that translates names into addresses is failing. Let’s fix that.",""),
  S("Gateway pings show 40 percent loss on Wi-Fi","Ping to router drops often.","Wi-Fi interference or distance. Not the ISP.","1) Test with a cable. 2) If the cable is clean, change the Wi-Fi channel. 3) Switch to 5 GHz. 4) Move closer or add a mesh node.","Cable is clean, so the line is fine. The Wi-Fi in that room is the problem.",""),
  S("Ping is fine but streaming buffers","Latency 20 ms, but 480p video.","Throughput or congestion at the CDN.","1) Test speed on a cable. 2) Test multiple streaming services. 3) Check for other devices using bandwidth. 4) Evening-only? Log times.","Basic reachability is perfect. Let’s measure how much data you actually get.",""),
  S("Traceroute dies at hop 2","Request timed out from hop 2 onwards.","Hop 2 may simply not reply to ICMP. Only worry if the final target also fails.","1) Check whether later hops respond. 2) Check if the final destination loads. 3) Do not blame the hop that shows asterisks.","Some devices just don’t reply to this test. Let’s see what the later hops show.",""),
  S("IP address begins with 169.254","ipconfig shows 169.254.x.x.","The device could not get an address from DHCP.","1) Renew: ipconfig /release then /renew. 2) Restart the router. 3) Check DHCP is on. 4) Try wired.","The computer asked for an address and nobody answered. Let’s find out why.","DHCP down on the router or modem: replace or escalate."),
  S("Two devices have the same IP","Intermittent drops, random devices.","IP conflict, usually from a static IP inside the DHCP pool.","1) Find the duplicate. 2) Move the static IP outside the DHCP range. 3) Renew the leases. 4) Use a DHCP reservation instead.","Two devices think they own the same address, so they keep bumping each other. Let’s give each its own.","")
 ],
 steps:{h:"The diagnostic ladder",items:[["Own device","ipconfig: valid IP and gateway?"],["Gateway","ping the router."],["Outside","ping 8.8.8.8."],["Names","ping google.com / nslookup."],["Path","tracert to see where it breaks."],["Decide","Home side, line side, or provider side."]]},
 script:[["c","I pinged google.com and it says could not find host."],["a","Thanks, that detail is useful. Let’s ping an address instead of a name: 8.8.8.8.","Separates name from connectivity."],["c","That works."],["a","Then your internet is fine and the name lookup is failing. Let’s fix DNS.","Interprets the result."]],
 qa:["Used the ladder in order","Explained results in plain words","Documented commands and results","Escalated with evidence"],
 quiz:[
  ["Ping by IP works but by name fails. Problem:",["DNS","Cable","Modem power"],0,"Name resolution."],
  ["A 169.254 address means:",["Great connection","No DHCP lease","Static IP"],1,"Self-assigned address."],
  ["Stars in one traceroute hop mean:",["Always broken","Maybe it doesn’t answer pings","Customer error"],1,"Look at later hops."]
 ]},

{id:"b23",track:"l2",title:"Casebook 2: Wi-Fi, mesh, smart home and business network cases",level:"mid",account:"Northwave Fiber",mins:22,
 teach:[
  S("Dead zone in the back bedroom","No Wi-Fi past two walls.","Distance and building materials.","1) Measure signal room by room. 2) Move the router central and high. 3) Add a mesh node halfway. 4) Wire the node if possible.","The signal weakens through the walls. A node halfway will carry it the rest of the way.",""),
  S("Extender made the speed worse","Customer bought an extender and speed halved.","Single-radio extender repeating wirelessly halves throughput, or it is too far.","1) Place it where the signal is still strong. 2) Use a tri-band mesh or a wired backhaul. 3) Use a separate network name to test.","The extender has to receive and re-send over the same radio, which cuts speed. Placement matters.",""),
  S("Smart plugs offline after a router swap","IoT devices won’t reconnect.","Different Wi-Fi name, 2.4 GHz only devices, or band steering.","1) Split the bands. 2) Keep the same SSID and password as before for old devices. 3) Join the phone to 2.4 during setup.","The new router changed something the gadgets rely on. We’ll make it look like the old one.",""),
  S("Phone call quality poor over Wi-Fi","Voice drops and robot sound.","Jitter and loss from congestion.","1) Check QoS or WMM. 2) Move to 5 GHz. 3) Test with a cable. 4) Reduce competing traffic.","Calls need steady timing more than raw speed. Let’s give them a clean lane.",""),
  S("Guest Wi-Fi can see the office printer","Security concern at a small business.","Guest network not isolated.","1) Turn on client isolation. 2) Put the guest on a separate VLAN. 3) Keep the printer on the staff network.","Guests should reach the internet only. Let’s isolate that network.","VLAN work beyond the customer’s router: L3 or network team."),
  S("Port forwarding doesn’t work for a camera","Customer wants to view cameras from outside.","CGNAT, double NAT, wrong internal IP, firewall block.","1) Give the camera a reservation. 2) Forward the right port. 3) Test from mobile data. 4) Check double NAT. 5) Suggest the camera’s cloud app, which is safer.","Opening ports to cameras is risky. The manufacturer’s app is usually the safest way.","Provider uses CGNAT: offer a public IP or an alternate solution."),
  S("VPN connects but internal sites don’t load","Tunnel is up, no access.","DNS or split tunneling misconfigured.","1) Confirm the VPN assigned an IP. 2) Test by IP vs by name. 3) Flush DNS. 4) Check route table. 5) Get the VPN admin involved.","You’re connected. The remaining issue is how names get resolved inside the tunnel.","Admin must change policies: escalate with logs.")
 ],
 steps:{h:"Wi-Fi case order",items:[["Wired test","Does a cable work?"],["Signal","Where is it weak?"],["Band","2.4 or 5 GHz?"],["Channel","Crowded?"],["Hardware","Extender, mesh, router placement."],["Security","Isolation and guest rules."]]},
 script:[["c","I added an extender and my speed got worse."],["a","That happens when it’s placed too far. Where is it plugged in now?","Targets placement."],["c","In the far bedroom, where the signal is weak."],["a","That’s the issue. It needs to be halfway, where the signal is still strong.","Names the cause."]],
 qa:["Wired test first","Placement checked","Explained trade-offs","Security risk flagged"],
 quiz:[
  ["An extender placed in a dead zone will:",["Work best","Repeat a weak signal","Fix the line"],1,"It can only repeat what it receives."],
  ["Smart devices usually need:",["5 GHz","2.4 GHz","Ethernet"],1,"Many are 2.4 only."],
  ["VPN is up but no internal sites. Suspect:",["Cable","DNS or routing","Printer"],1,"Name resolution or routes."]
 ]},

{id:"b24",track:"l2",title:"Casebook 3: Microsoft 365, email and Windows deep fixes",level:"mid",account:"Orbit Software",mins:22,
 teach:[
  S("Outlook asks for a password repeatedly","Prompt keeps appearing.","Stale credentials, MFA change, or a broken profile.","1) Sign in to webmail to test the password. 2) Remove cached credentials in Credential Manager. 3) Create a new Outlook profile. 4) Re-add the account.","Your account itself is fine. Outlook just has an old saved password. Let’s clear it.",""),
  S("User is not receiving an external sender’s mail","Everyone else gets it.","Spam filter, a block rule, or the sender’s SPF failure.","1) Check Junk and quarantine. 2) Run a message trace. 3) Check for blocked sender rules. 4) Ask the sender for the bounce.","Let’s trace the message. That shows whether it reached us and what happened to it.","Quarantine release or tenant settings need an admin."),
  S("Mailbox full","Cannot send or receive.","Storage quota reached.","1) Empty Deleted Items and Junk. 2) Archive old mail. 3) Offer larger plan or online archive. 4) Check for a huge attachment.","Your mailbox is at its limit. Let’s free space or increase it.",""),
  S("License missing","User cannot open Teams or Word online.","License unassigned or expired.","1) Admin center, Users, Active users. 2) Check licenses. 3) Assign and wait up to 15 minutes. 4) Sign out and in.","The account has no license for that app. I’m assigning it now.","No license available: purchasing, Sales."),
  S("Blue screen after driver update","Stop code and reboot loop.","Bad driver.","1) Note the stop code. 2) Safe Mode. 3) Roll back the driver or use System Restore. 4) If it won’t boot, recovery tools.","Let’s boot in a special mode that loads the bare minimum, so we can undo the update.","Boot fails even in Safe Mode: hardware or imaging, escalate."),
  S("Computer won’t boot, black screen","Power light on, no display.","Display, RAM, or disk.","1) Check an external monitor. 2) Hard reset (remove power, hold the button 30 seconds). 3) Listen for beeps or lights. 4) Try recovery.","Let’s find out if the computer is working but the screen isn’t.","Hardware fault: repair or replacement."),
  S("Remote support session request","Customer is nervous about letting you in.","Trust and security.","1) Explain what you will do. 2) Get verbal consent. 3) Use the approved tool only. 4) Tell them they can end the session at any time. 5) Never ask for passwords.","You’ll see everything I do on your screen and you can end it at any time.","Customer declines: continue with guided steps.")
 ],
 steps:{h:"Email problem checklist",items:[["Webmail","Does webmail work?"],["Credentials","Clear saved passwords."],["Profile","New Outlook profile."],["Trace","Message trace."],["Records","Check SPF, DKIM, DMARC."],["Admin","Licenses and quarantine."]]},
 script:[["c","Outlook keeps asking me for my password."],["a","Let’s check whether the account itself is OK. Can you sign in at the web address I’ll give you?","Uses webmail as the control test."],["c","Yes, that works."],["a","Great. So the account is fine and the app has an old saved password. We’ll clear that.","Narrow cause."]],
 qa:["Webmail control test","Consent for remote","No passwords requested","Used message trace"],
 quiz:[
  ["Webmail works but Outlook doesn’t. Problem is probably:",["The account","The Outlook profile or cached credentials","The ISP"],1,"The app side."],
  ["Before remote support you:",["Skip consent","Get consent and explain","Ask for the password"],1,"Always get consent."],
  ["Which mode loads minimal drivers?",["Safe Mode","Sleep","Airplane"],0,"Safe Mode."]
 ]},

{id:"c17",track:"l3",title:"Casebook 1: Outages, patterns and incident calls",level:"advanced",account:"Northwave Business",mins:22,
 teach:[
  S("Three calls from the same street in ten minutes","L1 sees several tickets, same area.","Possible local outage: cable cut, node down, power.","1) Map addresses and times. 2) Check node and alarm status. 3) Open one incident ticket and link the rest. 4) Post a status note for agents. 5) Notify engineering.","Let’s treat this as one incident rather than three separate issues.","Alarms confirm: P1 incident and customer messaging."),
  S("Business customer: fiber cut, 4 hour outage","Two hours in, no ETA.","Physical damage; repair times uncertain.","1) Confirm the incident. 2) Provide a next-update time even without an ETA. 3) Offer a backup (LTE failover, hotspot). 4) Document SLA clock start.","I don’t have a repair time yet. I’ll call you at 2:00 either way with an update.","SLA breached: begin credit process."),
  S("Chronic intermittent drops, seven tickets","Same customer, six weeks.","Failing hardware or a marginal signal.","1) Pull the ticket history. 2) Chart drop times. 3) Check signal levels trends. 4) Request line and equipment replacement. 5) Own the case.","You have called us seven times. I’m taking ownership of this until it’s fixed.","Engineering must schedule a repair."),
  S("Planned maintenance went wrong","Window ran two hours over.","Change failed or rolled back late.","1) Confirm status with the bridge. 2) Send an update. 3) Log impact. 4) Prepare a post-incident review.","The work took longer than planned. I’m sorry. Here’s the current status and next update time.",""),
  S("Executive on the line, 99.9 percent SLA missed","COO threatens contract exit.","Outage exceeded SLA.","1) Stay factual. 2) Check contract credit rules. 3) Promise only what you can deliver. 4) Involve account manager.","I understand the severity. Let me confirm the facts and what the contract provides.","Legal language: route to legal and account owner."),
  S("False alarm: customer router is the issue","Business says our network is down.","Their firewall rule or router config.","1) Show the evidence: our side is up. 2) Ask permission to test through a bypass. 3) Offer to help review their config.","Our side looks healthy from the monitoring. Let’s test straight from our equipment to confirm.",""),
  S("Repeat tickets on the same node","Dozens of tickets across weeks.","Overloaded node or aging hardware.","1) Quantify tickets per node. 2) Present to engineering as a problem record. 3) Track until resolved.","This is a problem record rather than one-off incidents.","Engineering must plan capacity.")
 ],
 steps:{h:"Incident handling",items:[["Detect","Pattern across tickets or alarms."],["Declare","One incident, a clear owner."],["Communicate","Initial message with next update time."],["Resolve","Engineering with updates."],["Close","Confirm with customers."],["Review","Root cause and follow-ups."]]},
 script:[["c","Our whole office is offline for two hours. What is happening?"],["a","I’m sorry. We have an incident in your area. I don’t yet have a repair time, but I will call you at 2:00 with an update either way.","Honest, next update time."],["c","We lose money every hour."],["a","I understand. Would a mobile hotspot help in the meantime? I can also log the outage times for your SLA claim.","Offers a stopgap and documentation."]],
 qa:["Single incident, many linked tickets","Next update time given","No false ETA","SLA clock documented"],
 quiz:[
  ["Many tickets from one street at once suggests:",["Many separate issues","A local outage","User error"],1,"Treat as one incident."],
  ["Without an ETA you should:",["Guess","Give the time of the next update","Stay silent"],1,"Promise an update."],
  ["Repeated tickets for one node become:",["A problem record","A refund","A sales lead"],0,"Problem management."]
 ]}
]);
