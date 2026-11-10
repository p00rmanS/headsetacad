/* TSR L2, weeks 10 and 11 */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"b4",track:"l2",title:"IP addresses, DHCP and the default gateway",level:"intermediate",account:"Brightdesk IT / Northwave",mins:16,
 teach:[
  ["The address book of a network","Every device on a network needs an IP address, a subnet mask, a default gateway and DNS servers. The IP is the device’s address. The gateway is the door to other networks, usually the router. DNS turns names like example.com into addresses."],
  ["Private vs public","Home and office networks use private addresses: 10.x.x.x, 172.16 to 172.31.x.x and 192.168.x.x. The router has one public address facing the internet and shares it with every private device through NAT."],
  ["DHCP hands them out","The router acts as a DHCP server. A device asks, the server offers an address from its pool, the device accepts, and the server confirms (Discover, Offer, Request, Acknowledge). The address is leased for a time, then renewed."],
  ["169.254.x.x means DHCP failed","If a device shows an address starting 169.254, it could not reach a DHCP server and assigned itself one. Look for a bad cable, a Wi-Fi password mismatch, or a router that has run out of leases."],
  ["Conflicts and exhaustion","Two devices with the same address cause drops. Cause: a static address set on a device inside the DHCP pool. A router with too small a pool, or too many smart devices, can run out of addresses."],
  ["Carrier-grade NAT (CGNAT)","Some providers share one public address among many customers. This breaks port forwarding and some games and cameras. Check whether the WAN address shown on the router is private (such as 100.64.x.x) while the internet sees a different one."],
  ["Reading ipconfig","On Windows run ipconfig /all. Check IPv4 address, mask, default gateway, DHCP server, lease times and DNS servers. Compare them with what you expect for the network."]
 ],
 steps:{h:"Read the network settings",items:[
  ["Address","Is it a private address in the expected range, or 169.254?"],
  ["Mask","Does the mask match the network (often 255.255.255.0)?"],
  ["Gateway","Is the default gateway the router’s address?"],
  ["DHCP","Which DHCP server answered and when does the lease expire?"],
  ["DNS","Are the DNS servers set and reachable?"]
 ]},
 script:[
  ["c","My laptop says connected but no websites open."],
  ["a","Let’s look at its network details. Could you open Command Prompt and type ipconfig, then tell me what you see next to IPv4 Address?","Asks for one value."],
  ["c","It starts with 169.254."],
  ["a","That’s a helpful clue. It means the laptop never got an address from the router. Let’s make it ask again. Type ipconfig /release, press Enter, then ipconfig /renew.","Explains the meaning, then the fix."]
 ],
 qa:["Asks for specific values, not just “check settings”","Explains what each value means in plain words","Release/renew performed in order","Values and result recorded in notes"],
 quiz:[
  ["An address beginning 169.254 means:",["The internet is fast","DHCP failed","The router is new"],1,"The device assigned itself an address."],
  ["The default gateway is usually:",["The DNS server","The router","The printer"],1,"The router is the door out."],
  ["Which is a private range?",["8.8.8.8","192.168.1.20","203.0.113.5"],1,"192.168.x.x is private."],
  ["Why can CGNAT break port forwarding?",["The router is old","Customers share a public address","DHCP is off"],1,"No unique public address."]
 ]},

{id:"b5",track:"l2",title:"The command-line toolkit: ipconfig, ping, tracert, nslookup",level:"intermediate",account:"Brightdesk IT",mins:18,sim:"sim-l2c",
 teach:[
  ["Why use the command line","A command gives a clear, checkable answer. Guiding a customer through the same four commands in the same order is faster than clicking around and gives you evidence for your notes."],
  ["ipconfig","ipconfig shows settings. ipconfig /all shows full detail. ipconfig /release and /renew refresh the DHCP lease. ipconfig /flushdns clears the DNS cache."],
  ["ping","Sends small test packets and times the replies. Windows sends four by default (ping -n 10 example.com for more, ping -t to keep going until stopped). Replies mean the path works. “Request timed out” means no reply in time. “Destination host unreachable” means the sender knows there is no route."],
  ["tracert","tracert example.com lists each hop between the PC and the destination with times. Stars at one hop but normal replies afterward are normal: some routers ignore these probes. A problem is shown when delays or stars begin at a hop and continue to the end."],
  ["nslookup","nslookup example.com asks the DNS server for the address. nslookup example.com 8.8.8.8 asks a specific server. If the default DNS fails and 8.8.8.8 works, the problem is the DNS server in use."],
  ["The standard test order","1) ping 127.0.0.1 (the PC itself). 2) ping the default gateway. 3) ping a public IP such as 8.8.8.8. 4) ping a name such as example.com. The first failure shows the layer to fix."],
  ["Mac and Linux","Use ifconfig or Network settings for details, ping -c 4 to send four, traceroute instead of tracert, and dig or nslookup for DNS."]
 ],
 steps:{h:"The four-ping ladder",items:[
  ["Self","ping 127.0.0.1. Fails: network software problem on the PC."],
  ["Gateway","ping the default gateway. Fails: Wi-Fi, cable or router."],
  ["Internet IP","ping 8.8.8.8. Fails: the router or the provider connection."],
  ["Name","ping example.com. Fails here only: DNS problem."],
  ["Record","Write which step failed and the exact reply text."]
 ]},
 decide:{h:"Decision tree: cannot reach websites",nodes:[
  {q:"Does ping to the default gateway succeed?",b:"No",out:"Local network problem. Check Wi-Fi/cable, renew the IP, restart the router."},
  {q:"Does ping 8.8.8.8 succeed?",b:"No",out:"Router or provider side. Check modem lights, outage map, restart; escalate if still failing."},
  {q:"Does ping example.com succeed?",b:"No",out:"DNS problem. Flush DNS, try nslookup with 8.8.8.8, change DNS servers."},
  {end:"All pings work but a site fails: check the browser, firewall or the site itself."}
 ]},
 script:[
  ["a","I’ll have you run a few quick tests so we can see exactly where the connection stops. Open Command Prompt and type ping 8.8.8.8, then press Enter. Tell me what it says.","Explains the purpose first."],
  ["c","Reply from 8.8.8.8, four times."],
  ["a","Good. That means your internet connection reaches the outside world. Now type ping example.com.","Interprets, then the next step."],
  ["c","Ping request could not find host."],
  ["a","That tells us it’s a name lookup problem, not the connection. Let’s fix your DNS next.","Narrows the problem."]
 ],
 qa:["Ping ladder done in order","Output read back and interpreted","Exact replies recorded in notes","Fix matched to the layer that failed"],
 quiz:[
  ["Ping to 8.8.8.8 works but ping example.com fails. The issue is:",["The cable","DNS","The monitor"],1,"A name lookup problem."],
  ["The first failure in the ladder shows:",["The layer to fix","Who to blame","The router brand"],0,"Fix the first broken layer."],
  ["Which command clears the DNS cache?",["ipconfig /flushdns","ipconfig /all","tracert"],0,"/flushdns."],
  ["Stars at one middle hop but a normal end result:",["Always a fault","Often normal; some devices ignore the probe","The customer’s PC is broken"],1,"Judge by the end of the path."]
 ]},

{id:"b6",track:"l2",title:"Reading ping and traceroute results: latency, loss and where it breaks",level:"advanced",account:"Northwave Fiber",mins:16,
 teach:[
  ["Three numbers","Latency is the delay in milliseconds. Packet loss is the percent of packets that get no reply. Jitter is how much latency varies. Calls and games suffer from loss and jitter even when download speed looks fine."],
  ["Rough guides","Loss near zero is normal. Even 1 to 2 percent can break calls. Latency under about 50 ms to a nearby server is good for most uses; over 100 ms is noticeable. Jitter above about 30 ms hurts voice. Use your company’s thresholds when they exist."],
  ["Long ping tests","Use ping -n 100 or ping -t for a minute or two, not just four packets. Intermittent problems hide in short tests. Note the minimum, average and maximum, and the loss percent."],
  ["Compare destinations","Ping the gateway, then a public IP, then a site. If the gateway shows loss, the problem is in the home network. If only distant targets lose packets, it may be the provider or the site."],
  ["Traceroute logic","Find the first hop where latency jumps or loss begins and continues to later hops. If it stays high after that point, that is where to look. If only one hop is slow and the rest are fine, it is probably a router deprioritizing probes."],
  ["Test wired vs wireless","Repeat on Ethernet. If the wired test is clean and Wi-Fi shows loss, the problem is the radio, not the line."],
  ["Escalation evidence","Save timestamps, targets, loss percent, min/avg/max, and whether the test was wired. Engineering needs numbers, not “it’s slow”."]
 ],
 steps:{h:"Intermittent drops test plan",items:[
  ["Baseline","Wired ping to the gateway for one minute."],
  ["Outside","Ping 8.8.8.8 for one minute and compare."],
  ["Wireless","Repeat on Wi-Fi at the problem location."],
  ["Trace","Run tracert to a target and note where delay begins."],
  ["Record","Min, average, max, loss percent, times and location."]
 ]},
 script:[
  ["a","I’d like to run a longer test, because short ones can miss drops. Please type ping -n 100 8.8.8.8 and tell me when it finishes. While it runs, tell me what you were doing when the video freezes.","Sets expectations, keeps discovering."],
  ["c","It says 8 percent loss."],
  ["a","Thank you, that’s a clear number. Now let’s repeat the test with the laptop plugged in by cable to see whether the loss follows the Wi-Fi or the line.","Uses evidence to isolate."]
 ],
 qa:["Long enough tests for intermittent faults","Wired and wireless compared","Numbers explained in plain language","Complete evidence in escalation notes"],
 quiz:[
  ["Which hurts a video call most?",["High loss and jitter","A slow TV","A long cable"],0,"Calls need stable delivery."],
  ["Loss on a gateway ping suggests:",["A home network problem","A website outage","The customer’s plan is too small"],0,"The first hop is local."],
  ["A single slow middle hop with a clean destination is:",["Usually harmless","A failed line","An outage"],0,"Some routers ignore probes."]
 ]},

{id:"b7",track:"l2",title:"Mesh and extenders: placement, backhaul and roaming",level:"intermediate",account:"Northwave Fiber",mins:16,sim:"sim-l2d",
 teach:[
  ["Why mesh exists","One router cannot cover every room in a big or multi-story home. Extenders and mesh nodes add coverage. Done well they fix dead spots. Done badly they add confusion."],
  ["Extender vs mesh","An extender repeats a signal and often creates a second network name. A mesh system uses one network name and several nodes managed together. Mesh usually roams better."],
  ["Backhaul","The link between nodes is called backhaul. Wired (Ethernet) backhaul is fastest and most reliable. Wireless backhaul uses part of the radio time, so each wireless hop can cut speeds. Tri-band mesh dedicates a band to backhaul."],
  ["Node placement","Place a node where the main router’s signal is still good, usually about halfway to the dead spot, not in it. A node placed where the signal is already poor repeats a poor signal."],
  ["Roaming and sticky clients","Devices decide when to move to a stronger node. Some stay on a weak node too long (a “sticky” client). Turning Wi-Fi off and on, or updating the device, can force a move. Band steering and fast-roaming settings help."],
  ["Common faults","Two routers fighting (a second router in router mode creating double NAT), an old extender on the same channel, nodes too far apart, or firmware mismatch. Restart nodes in order: main unit first, then others."],
  ["When to recommend hardware","Only after you have proven the problem is range, with a clean wired test and a room-by-room speed test. Explain the cost and what it should fix, so expectations are fair."]
 ],
 steps:{h:"Mesh troubleshooting flow",items:[
  ["Map","Where are the main unit and nodes? Where are the dead spots?"],
  ["Backhaul","Wired or wireless between nodes? Is the node’s link light good?"],
  ["Placement","Move the node closer to the main unit and re-test."],
  ["Restart","Power cycle the main unit first, then each node."],
  ["Firmware","Check the app for updates and node status."]
 ]},
 script:[
  ["c","I bought an extender and the Wi-Fi is somehow worse upstairs."],
  ["a","Thanks for telling me. Extenders can sometimes make that happen if they’re placed in the dead spot. Where is it plugged in right now?","Acknowledges, asks about placement."],
  ["c","Right in the upstairs bedroom where the signal was bad."],
  ["a","That’s the likely cause. The extender can only repeat what it receives, so it needs to sit about halfway, where the signal is still strong. Would you be able to move it to the hallway outlet?","Explains why and offers a clear action."]
 ],
 qa:["Placement and backhaul asked about","Wired test done before recommending hardware","Plain-language explanation of repeating","Expectations set about cost and results"],
 quiz:[
  ["Best extender location:",["In the dead spot","About halfway to the dead spot","Next to a microwave"],1,"Where the signal is still strong."],
  ["Wired backhaul is:",["Slower than wireless","The most reliable","Not possible"],1,"Ethernet backhaul is best."],
  ["A second router in router mode behind the first causes:",["Double NAT","Faster internet","A new Wi-Fi band"],0,"Double NAT."]
 ]},

{id:"b8",track:"l2",title:"Smart-home devices that break Wi-Fi: 2.4 GHz, DHCP and IoT",level:"advanced",account:"Northwave Fiber",mins:14,
 teach:[
  ["IoT in plain words","Smart plugs, cameras, bulbs, thermostats and speakers are small, cheap devices with weak Wi-Fi. They often work only on 2.4 GHz and can cause problems for the whole network."],
  ["2.4 GHz-only devices","Many smart devices cannot join a combined 2.4/5 GHz network name that uses band steering. Temporarily separate the bands, or use a guest or IoT network on 2.4 GHz, to onboard them."],
  ["DHCP exhaustion","Dozens of devices can use up the address pool. Symptoms: random devices stop connecting. Fix: enlarge the pool, shorten lease times, or remove devices that no longer exist."],
  ["IP reservations","Printers, cameras and hubs should have a fixed address. Use a DHCP reservation so the router always gives the same IP to that device, rather than typing a static address on the device."],
  ["Interference and chatter","Cheap devices that reconnect constantly or send large video streams consume airtime. A camera uploading continuously can slow other devices. Check device placement and quality settings."],
  ["Security","Change default passwords, update firmware, and keep IoT devices off the main network when possible with a guest or IoT network."]
 ],
 steps:{h:"Smart device won’t connect",items:[
  ["Band","Is the device 2.4 GHz only? Is the phone on 5 GHz during setup?"],
  ["Network","Temporarily switch to 2.4 GHz-only or disable band steering."],
  ["Signal","Is the device within good range?"],
  ["DHCP","Check the pool and the device list for exhaustion."],
  ["Reservation","Reserve an address for devices that must not change."]
 ]},
 script:[
  ["c","My smart plug won’t set up. The app keeps failing."],
  ["a","Those can be picky. Many smart plugs only work on the 2.4 GHz band. Is your phone connected to the 5 GHz part of the network right now?","Explains a common cause."],
  ["c","I don’t know, it’s all one name."],
  ["a","That’s okay. We can temporarily turn off the 5 GHz band so your phone has to use 2.4 during setup, and then turn it back on after. Want to try that?","Offers a clean solution and says it is temporary."]
 ],
 qa:["Band question asked early","Temporary change explained and reversed","Reservation suggested for fixed devices","Security tips offered"],
 quiz:[
  ["Many smart plugs work only on:",["2.4 GHz","5 GHz","6 GHz"],0,"2.4 GHz."],
  ["A DHCP reservation does what?",["Always gives the same IP to a device","Turns off DHCP","Changes the Wi-Fi band"],0,"A fixed address by device."],
  ["Best home for cheap IoT devices:",["The main network with work laptops","A separate guest or IoT network","Nowhere"],1,"Segregate them."]
 ]}
]);
