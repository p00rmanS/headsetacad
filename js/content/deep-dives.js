/* In-depth explainers: how things actually work, so you can fix and explain anything */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"a26",track:"l1",title:"Deep dive: how the internet actually works, from wall to website",level:"basic",account:"Northwave Fiber",mins:28,
 teach:[
  ["The big picture","When a customer opens a website, a request leaves their device, crosses their home network, passes through the modem into the provider’s network, travels across other networks (the internet), reaches the website’s server, and the answer returns the same way. Every link in that chain can fail or slow down. Your job is to find which link. Think of it as a road trip: the car (device), the driveway (home Wi-Fi), the highway on-ramp (modem and line), the highways (provider and internet), and the destination (website)."],
  ["The device and its network card","A phone, laptop or TV has a network adapter. It either has a Wi-Fi radio, an Ethernet port, or both. When troubleshooting, always ask which device and how it connects. A single device failing while others work points to the device: its Wi-Fi setting, its software or its adapter."],
  ["The router and the local network","The router creates the home network. It hands each device a private IP address (usually starting with 192.168), keeps a list of who is connected, and sends traffic to the right place. It also does NAT, translating many private addresses into the single public address the provider gave the home. If the router fails, devices may still show Wi-Fi connected, but nothing reaches the internet."],
  ["The modem or ONT","The modem (cable) or ONT (fiber) translates between the provider’s line and the home network. On cable it converts radio signals on a coax wire; on fiber it converts pulses of light; on DSL it uses telephone wire. When its Online light is not solid, the problem is between the home and the provider. Many modern devices combine modem and router in one box, often called a gateway."],
  ["The last mile","The line from the street to the home is called the last mile. It can be fiber, coax, copper or wireless. Cuts, water in a connector, corroded splitters and loose fittings are common causes of drops. A technician measures signal levels to see how healthy this link is."],
  ["The provider network","Behind the last mile sits a tiered network: access (the node or OLT in the neighborhood), aggregation (combines many neighborhoods), and the core (large routers connecting to other networks). A fault in access affects a street; a fault in the core affects a region. This is why many tickets from the same area suggest an outage."],
  ["The wider internet and DNS","Websites live on servers with numeric addresses. People type names, and DNS translates the name into the address, like a phonebook. If DNS fails, websites will not load even though the connection works. A quick test is to ping a number such as 8.8.8.8: if that works but a name does not, the problem is DNS."],
  ["Latency, speed and loss","Speed (bandwidth) is how much data can move per second. Latency is how long a round trip takes. Packet loss is data that never arrives. Streaming needs speed; calls and games need low latency and no loss. A fast speed test does not prove a call will be clear."],
  ["How to use this in a call","Ask which device and what exactly fails. Check the modem lights. Test one device with a cable to split Wi-Fi from the line. Ping the router, then 8.8.8.8, then a name. That sequence tells you which link failed, and you can explain it in plain words: “Your home network is fine; the break is between your modem and our network.”"]
 ],
 steps:{h:"Walk the chain",items:[["Device","Which device, how connected?"],["Wi-Fi","Signal and band."],["Router","Lights, restart, DHCP."],["Modem","Online light."],["Line","Cables, signal, outage."],["Names","DNS: ping a number, then a name."]]},
 script:[["c","Why does my internet go out? I don’t get how it even works."],["a","Great question. Think of it as a road. Your laptop is the car, your Wi-Fi is the driveway, your modem is the on-ramp, and our network is the highway. When it breaks, I find which part of the road is closed.","Plain analogy."],["c","Okay. So how do you know?"],["a","I check the lights on your modem, test with a cable, and then test the path outward. Each result tells us which part is the problem.","Explains the method."]],
 qa:["Explained the chain simply","Used a control test","Explained results in plain words","Named which link failed"],
 quiz:[
  ["DNS does what?",["Speeds up Wi-Fi","Translates names into addresses","Blocks viruses"],1,"Names to numbers."],
  ["Ping to 8.8.8.8 works but a website name fails. Likely:",["DNS","Cable","Modem power"],0,"Name resolution."],
  ["Many tickets from one area suggest:",["Many home issues","A network outage","Bad passwords"],1,"Pattern means outage."],
  ["The router mainly:",["Creates the home network and routes traffic","Delivers fiber","Hosts websites"],0,"Routing."]
 ]},

{id:"b25",track:"l2",title:"Deep dive: Wi-Fi in depth, standards, channels, signal and roaming",level:"mid",account:"Northwave Fiber",mins:28,
 teach:[
  ["What Wi-Fi really is","Wi-Fi is radio. Your router and devices send data on shared radio channels, like people talking in a room. Only one device can talk on a channel at a time; others wait. More devices, more neighbors and more distance all mean more waiting and more errors."],
  ["Bands: 2.4, 5 and 6 GHz","2.4 GHz travels farther and passes through walls but is slower and crowded (microwaves, baby monitors, neighbors). 5 GHz is faster with more channels but weaker through walls. 6 GHz (Wi-Fi 6E and 7) is the fastest and least crowded but has the shortest range. Many smart devices only support 2.4 GHz."],
  ["Standards in plain words","Wi-Fi 4 (802.11n), Wi-Fi 5 (802.11ac), Wi-Fi 6 (802.11ax), Wi-Fi 6E, Wi-Fi 7. Newer standards are faster and handle many devices better, but only if both the router and the device support them. An old laptop on a new router still runs at the old laptop’s speed."],
  ["Channels and interference","On 2.4 GHz only channels 1, 6 and 11 do not overlap. In apartments, many networks fight for the same channels. Switching to a quieter channel, or using 5 GHz, often fixes slow evening Wi-Fi. Auto channel can be unreliable; set it manually if needed."],
  ["Signal strength: RSSI","Signal is measured in dBm, a negative number: -50 is excellent, -60 good, -70 fair, -80 poor, -90 unusable. A strong signal does not guarantee speed; noise and congestion also matter. Ask a customer to test near the router and in the problem room and compare."],
  ["Walls, floors and materials","Drywall costs a little; brick, concrete, metal, mirrors and water (fish tanks) cost a lot. Floors are worse than walls. A router in a closet, behind a TV or in a basement hurts coverage. Central, high and open is best."],
  ["Mesh, extenders and access points","An extender repeats a signal and often halves speed. A mesh system uses several nodes that cooperate and can hand devices off. The best setups wire the nodes together with Ethernet (wired backhaul). Place nodes where the signal is still strong, not in the dead zone."],
  ["Roaming and sticky devices","A phone may stay stuck to a distant node even when a closer one exists. Turning Wi-Fi off and on, or forgetting and rejoining, forces a new choice. Band steering and 802.11k/v/r help but are not perfect."],
  ["Security basics","Use WPA2 or WPA3, a long password, and change defaults. Give guests a separate guest network. Hidden SSIDs do not add security. If a customer shares a password publicly, change it."],
  ["Explaining it to a customer","“Wi-Fi is like a shared room. The more people talk, and the farther they are, the harder it is to hear. We can move the router closer, use the quieter channel, or add a node halfway.”"]
 ],
 steps:{h:"Wi-Fi diagnosis order",items:[["Wired test","Is the line fast on a cable?"],["Signal","Where is it weak?"],["Band","2.4 or 5 GHz?"],["Channel","Crowded?"],["Placement","Open, central, high."],["Hardware","Mesh or wired backhaul."]]},
 script:[["c","My Wi-Fi is fast in the living room and terrible upstairs."],["a","That usually means distance and walls. Let me confirm the line itself is healthy by testing with a cable, then we’ll look at moving the router or adding a node.","Plan with a control test."],["c","The cable test is great."],["a","Good, so the line is fine. Upstairs is the problem. A node halfway up the stairs will carry the signal.","Explains the cause and solution."]],
 qa:["Wired test first","Explained bands in plain words","Placement advice given","Did not blame the customer"],
 quiz:[
  ["Longest range, slowest speed:",["2.4 GHz","5 GHz","6 GHz"],0,"2.4 GHz."],
  ["Best signal strength reading:",["-50 dBm","-80 dBm","-90 dBm"],0,"-50 is best."],
  ["An extender placed in a dead zone will:",["Fix it","Repeat a weak signal","Speed up the line"],1,"It repeats what it receives."]
 ]},

{id:"b26",track:"l2",title:"Deep dive: DNS, DHCP, NAT and what happens when a web page loads",level:"mid",account:"Brightdesk IT",mins:28,
 teach:[
  ["Step 1: getting an address (DHCP)","When a device joins the network it has no address. It shouts: “Who can give me one?” The router running DHCP answers with an IP address, a subnet mask, a default gateway and DNS servers, for a limited time called a lease. If DHCP fails, the device self-assigns 169.254.x.x and cannot reach anything."],
  ["IP addressing basics","An IPv4 address has four numbers like 192.168.1.42. Private ranges (192.168.x.x, 10.x.x.x, 172.16–31.x.x) are used inside homes. The subnet mask says which addresses are local. The default gateway is the router’s address: the door out of the local network."],
  ["Step 2: asking DNS","The device wants example.com. It asks its DNS server for the address. The server checks its cache, otherwise asks a chain of servers (root, top-level, authoritative) and returns an IP. The answer is cached for a time called TTL. Bad DNS settings cause the classic symptom: connected, but websites will not load."],
  ["Step 3: connecting","With the IP address, the device opens a connection, usually TCP on port 443 (HTTPS). It performs a handshake, negotiates encryption, and requests the page. Slow handshakes and packet loss can make pages feel sluggish even on fast connections."],
  ["NAT","The router has one public IP to the world and many private IPs inside. NAT keeps a table of which inside device made which request so replies go to the right device. This is why you cannot reach a home camera from outside without port forwarding."],
  ["Port forwarding and firewalls","Port forwarding tells the router: traffic arriving on port X goes to device Y. A firewall decides what traffic is allowed in or out. Forwarding ports creates risk; prefer vendor cloud apps. If a provider uses CGNAT, port forwarding may be impossible."],
  ["Static IPs and reservations","Printers and servers need predictable addresses. Best practice is a DHCP reservation (the router always gives that device the same address) rather than setting a static IP on the device, which risks conflicts. Keep static addresses outside the DHCP pool."],
  ["Reading the evidence","ipconfig /all shows IP, mask, gateway, DNS and lease. nslookup tests DNS directly. ping tests reachability. tracert shows the path. Match the symptom to the step: no IP (DHCP), IP but no names (DNS), names resolve but page fails (routing, firewall or the site)."],
  ["Explaining it to a customer","“Your computer needs three things: an address, a phonebook and a route. Yours has the address and the route but the phonebook is giving wrong numbers, so I’m going to replace the phonebook.”"]
 ],
 steps:{h:"Match symptom to step",items:[["169.254 address","DHCP failed."],["IP but no names","DNS."],["Names resolve, site fails","Route, firewall, site."],["One device only","Device settings."],["All devices","Router or line."],["Remote access fails","NAT, port forwarding, CGNAT."]]},
 script:[["c","My computer says connected but nothing loads."],["a","Let me check three things: does it have an address, can it reach the router, and can it find names. Please open Command Prompt and type ipconfig slash all.","Frames the test."],["c","It says DNS server 10.0.0.53."],["a","That’s likely the problem. That DNS server isn’t answering. We’ll switch it back to automatic.","Reads the evidence."]],
 qa:["Used ipconfig /all correctly","Mapped symptom to step","Explained in plain words","Verified with a live site"],
 quiz:[
  ["A 169.254 address means:",["DHCP failed","DNS failed","VPN active"],0,"No lease."],
  ["Connected but sites won’t load, ping by IP works:",["DNS","Cable","Power"],0,"DNS."],
  ["Best way to give a printer a fixed address:",["Static on the device inside the pool","DHCP reservation","Random"],1,"Reservation."]
 ]},

{id:"c18",track:"l3",title:"Deep dive: access technologies, fiber, cable, DSL and fixed wireless",level:"advanced",account:"Northwave Business",mins:28,
 teach:[
  ["Why know the technology","L3 reads signals, alarms and patterns. The technology tells you what can fail, how it fails, and how long a repair takes. A fiber cut and a cable amplifier fault look similar to the customer but are very different to repair."],
  ["Fiber to the home (GPON)","A central OLT sends light down a fiber to a splitter, which feeds many homes, each with an ONT. Light levels are measured in dBm; too low means a bad connector, a bend or a dirty fiber. Because the network is passive, outages are usually cuts or equipment at the OLT. One ONT down is a customer issue; many at once suggest a cut upstream."],
  ["Cable (DOCSIS)","Cable shares coax among many homes on a node. Modems report downstream and upstream signal levels, SNR and errors. Noise from loose connectors, bad splitters or corroded fittings ruins upstream. Evening slowness can be node congestion. Cable outages are often amplifier or power-supply failures."],
  ["DSL","DSL uses telephone copper. Speed depends on distance and line quality. Sync rate, attenuation and noise margin are key. Weather and wet lines cause drops. Repairs involve the line pair in the cabinet."],
  ["Fixed wireless and satellite","Fixed wireless uses radio from a tower to a rooftop antenna and needs line of sight. Rain, trees and tower congestion matter. Satellite adds high latency, which makes calls and games feel laggy even when speed is fine. Set expectations accordingly."],
  ["Reading signal levels","Know the healthy ranges for your platform (they vary by provider). Watch for trends: a slowly worsening upstream suggests a failing connector. Compare with neighbors on the same node to separate a home fault from a plant fault."],
  ["Monitoring and alarms","Engineering sees alarms: loss of signal, high error rates, power failures, optical power drops. Learn alarm names and what they imply. When you see ten tickets plus an alarm, you have an incident."],
  ["Repair paths and timelines","Home wiring: same-day to next-day technician. Neighborhood node or splitter: crew dispatch, hours to a day. Fiber cut: splicing crew, often 4 to 12 hours. Core equipment: hours with engineering bridge. Give honest ranges, never exact promises."],
  ["Explaining outages","“There’s a break on the fiber that feeds your area. A splicing crew is on the way. Typical repairs take four to twelve hours. I will update you at 2:00 either way.”"]
 ],
 steps:{h:"Technology-aware triage",items:[["Identify","Fiber, cable, DSL, wireless?"],["Scope","One home or many?"],["Signals","Read levels and trends."],["Alarms","Match to monitoring."],["Dispatch","Home, node or plant."],["Communicate","Honest range, next update."]]},
 script:[["c","Why is my service down? What actually broke?"],["a","I can see that several customers on your fiber branch lost light at the same time, which points to a cut upstream rather than your equipment. A crew is being dispatched.","Technology-aware explanation."],["c","How long will it take?"],["a","Fiber repairs usually take four to twelve hours depending on access. I can’t promise an exact time, but I will update you at 2:00 either way.","Honest range and next update."]],
 qa:["Identified technology","Separated home from plant","Gave honest ranges","Set the next update time"],
 quiz:[
  ["Many ONTs lose light at once. Likely:",["Many home faults","An upstream fiber cut","Bad passwords"],1,"Shared upstream."],
  ["Satellite internet is notable for:",["Low latency","High latency","No weather impact"],1,"High latency."],
  ["Evening-only cable slowness suggests:",["Node congestion","Bad cable at home","DNS"],0,"Shared node."]
 ]},

{id:"d31",track:"csr",title:"Deep dive: how billing really works, cycles, proration, taxes and collections",level:"mid",account:"Northwave Fiber",mins:26,
 teach:[
  ["The billing cycle","A bill covers a period, usually a month, and is generated on a fixed bill date. The due date is typically 10 to 21 days later. Customers confuse bill date, due date and cycle dates. Always say which one you mean."],
  ["Billing in advance vs arrears","Many services bill in advance: the bill for next month’s service arrives now. Usage charges (extra data, calls) bill in arrears: you pay for what you already used. A first bill often contains both, which surprises customers."],
  ["Proration","When service starts, ends or changes mid-cycle, charges are prorated: you pay only for the days used. Example: a $60 plan started on day 10 of a 30-day cycle is 21/30 of $60, or $42. Explain proration with a simple example. Plan changes can produce a credit for the old plan and a charge for the new one."],
  ["Line items","Recurring charges (plan, equipment rental), one-time charges (installation, activation), usage charges, taxes and fees, promotions and credits, and past-due balances. Walk through them in that order."],
  ["Taxes and regulatory fees","Taxes differ by location and service. Regulatory recovery fees are the company’s charges for costs of operating, shown separately. Do not call them taxes. If a customer disputes one, explain what it is and check the rate for their address."],
  ["Promotions and why they end","Promotional prices usually last 6 to 24 months, tied to terms like autopay or paperless billing. When they end, the bill rises. Agents should know the end date, what it will become, and the available renewal offers."],
  ["Late fees, suspension and collections","If unpaid, a late fee applies after the grace period, then reminders, service suspension, disconnection and finally collections. Know the timeline and the arrangement options to prevent each step. Never threaten; state facts and options."],
  ["Payments and posting","Payments can take 1 to 3 business days to post depending on method. Cards post fastest, bank drafts and mailed checks slower. A payment made today may not appear today. Offer the confirmation number."],
  ["Credits, adjustments and refunds","A credit lowers a future bill. A refund returns money. An adjustment corrects an error. Know your authority limits and document the reason code."],
  ["Explaining it simply","“This bill covers May 1 to May 31. Your plan is $65. Because you added a line on May 12, there’s a prorated charge of $18. Taxes and fees are $11. The total is $94.”"]
 ],
 steps:{h:"Walk a bill",items:[["Dates","Bill date, due date, cycle."],["Recurring","Plan and equipment."],["One-time","Install, activation."],["Prorations","Mid-cycle changes."],["Taxes","And regulatory fees."],["Past due","Balance and options."]]},
 script:[["c","My first bill is way higher than I expected."],["a","First bills are often higher because they include the first month in advance, a prorated amount and any one-time fees. Let me go through each line so you can see exactly what you’re paying.","Explains the usual reason."],["c","Okay."],["a","This line is the installation fee, this is the prorated period, and this is next month in advance. From next month it will be your plan price plus taxes.","Line by line."]],
 qa:["Explained each line item","Used a proration example","Distinguished taxes from fees","Stated options for past due"],
 quiz:[
  ["A mid-cycle start produces:",["A prorated charge","No charge","A double charge"],0,"Proration."],
  ["Which is not a tax?",["Sales tax","Regulatory recovery fee","State tax"],1,"It is a company fee."],
  ["Payments by card typically post:",["Fastest","Slowest","Never"],0,"Cards are fast."]
 ]},

{id:"d32",track:"csr",title:"Deep dive: cards, disputes, chargebacks and fraud rules, step by step",level:"mid",account:"Bright Bank",mins:28,
 teach:[
  ["How a card payment works","A customer taps a card. The merchant’s processor asks the issuing bank for authorization. The bank checks funds and risk and approves or declines. The charge shows as pending, then posts after settlement, usually 1 to 3 days. Merchants can add tips or adjust amounts after authorization."],
  ["Pending vs posted","Pending charges reduce available balance but can change or drop off. Posted charges are final in the statement. Many overdraft complaints come from pending items posting in a different order than the customer expected."],
  ["What is a dispute","A dispute (chargeback) is a formal challenge to a charge. The bank investigates and may issue a provisional credit while it does. Reasons include unauthorized use, billed but not received, defective goods, duplicate charges and cancelled subscriptions."],
  ["Fraud vs billing error vs dispute with a merchant","Fraud: the customer did not authorize it. Billing error: the amount or date is wrong. Merchant dispute: the customer authorized it but did not get what they paid for. Ask clarifying questions to classify correctly, because the process differs."],
  ["General US timelines","Rules vary by product, but generally: report unauthorized card transactions promptly; the bank acknowledges and investigates within set time frames; consumers have strong protections on credit cards and good protections on debit cards if they report quickly. Explain that the details depend on their card agreement and give the case number, without promising the outcome."],
  ["Card replacement and travel","When fraud is suspected, lock the card, issue a new number, update recurring payments, and note travel. Digital wallets may need re-adding."],
  ["Account takeover signs","A changed phone number or email, new payees, a sudden password reset, logins from new countries. Follow the stricter protocol: verify strongly, secure the account, and escalate to the fraud team."],
  ["Common scams you will hear","Fake bank calls asking to move money, romance scams, prize and lottery scams, family emergency requests, tech support pop-ups, and fake check overpayment. The red flags: urgency, secrecy, unusual payment methods, and requests to move money to “safe” accounts."],
  ["Talking to a victim","Be calm, kind and non-judgmental. Embarrassment is common; reassure them that skilled criminals fool smart people. Explain what you can do, what happens next, and how to protect the account."],
  ["Documentation","Record the transactions, dates, merchant names, what the customer said, what you did, and the case number. QA will check."]
 ],
 steps:{h:"Classify then act",items:[["Verify","Strongly."],["Secure","Lock first if risk."],["Classify","Fraud, error, or merchant dispute?"],["Open","The correct case type."],["Explain","Timeline, no promises."],["Document","Case number and notes."]]},
 script:[["c","There’s a charge I never made."],["a","I’m sorry; let’s deal with it. First I need to verify you, then I’ll lock the card to stop any more charges, and we’ll go through the transaction together.","Verify, secure, review."],["c","It’s a $240 charge from a store I don’t know."],["a","Thanks. I’ll open a fraud claim, send a new card, and give you a case number. We’ll investigate and give you a decision within the required time.","Action and honest timeline."]],
 qa:["Strong verification","Locked before investigating","Correct classification","Case number provided"],
 quiz:[
  ["A customer authorized the charge but never got the item. This is:",["Fraud","A merchant dispute","A billing error"],1,"Merchant dispute."],
  ["First action on suspected fraud:",["Wait","Lock the card","Mail a letter"],1,"Lock."],
  ["Common scam red flag:",["Patience","Urgency and secrecy","Written contract"],1,"Urgency and secrecy."]
 ]},

{id:"d33",track:"csr",title:"Deep dive: health insurance end to end, plans, networks, claims and costs",level:"mid",account:"Harbor Health Plan",mins:30,
 teach:[
  ["Premium, deductible, copay, coinsurance, out-of-pocket maximum","Premium: the monthly price of the plan. Deductible: what you pay before the plan starts sharing costs. Copay: a flat fee for a visit or prescription. Coinsurance: a percentage you pay after the deductible (for example 20 percent). Out-of-pocket maximum: the most you pay in a year; after that the plan pays covered services at 100 percent. Premiums do not count toward the deductible."],
  ["Plan types","HMO: choose a primary doctor, need referrals, stay in network. PPO: more freedom, can see out-of-network at higher cost. EPO: in-network only, no referrals. POS: a mix. High-deductible plans pair with HSAs. Know the member’s plan type before answering."],
  ["Networks","In-network providers have agreed rates. Out-of-network providers can charge more, and the member may owe the difference (balance billing), except where surprise-billing protections apply, such as emergencies and certain hospital-based providers."],
  ["Claims lifecycle","The provider submits a claim. The plan checks eligibility, coverage and coding, then decides: pays, partially pays or denies. The member receives an Explanation of Benefits (EOB), which shows billed amount, allowed amount, plan paid and member responsibility. It is not a bill."],
  ["Why claims are denied","No prior authorization, service not covered, out-of-network, coding error, duplicate claim, missing information, or timely filing deadline missed. Many denials are paperwork and can be resubmitted."],
  ["Prior authorization and referrals","Some services need approval before they happen. The provider usually requests it with clinical information. Urgent requests have expedited timelines. Explain who does what: member, provider, plan."],
  ["Appeals and grievances","A member can appeal a denial: first an internal appeal, then an independent external review. Know deadlines. A grievance is a complaint about service. Expedited appeals exist for urgent medical situations."],
  ["Pharmacy benefits","Formularies list covered drugs in tiers. Higher tiers cost more. Some need prior authorization or step therapy. Generics are usually cheapest."],
  ["Privacy rules","HIPAA protects health information. Verify the member and check authorization before discussing with a spouse, parent or provider. Never give medical advice."],
  ["Speaking plainly","“Your deductible is $1,500 and you have met $900. After you meet it, you pay 20 percent of covered services until you reach $5,000, and then the plan pays 100 percent.”"]
 ],
 steps:{h:"Insurance call order",items:[["Verify","Member ID, DOB, authorization."],["Plan type","HMO, PPO, EPO?"],["Find the claim","Date, provider, amount."],["Explain","EOB and reason code."],["Options","Resubmit, appeal."],["Rights","Deadlines and case number."]]},
 script:[["c","I got a bill for $1,200 but I thought my insurance covered this."],["a","I understand the worry. Let me look at the claim and the EOB so I can show exactly what the plan paid and what you owe.","Plan to investigate."],["c","The bill says I owe all of it."],["a","I see that the claim was denied for missing information. It can be resubmitted. Please don’t pay yet; I’ll note the case and explain the next steps.","Explains the reason and protects the member."]],
 qa:["Verified and checked authorization","Explained cost terms with an example","No medical advice","Gave appeal rights and deadlines"],
 quiz:[
  ["Premiums count toward the deductible:",["Yes","No","Sometimes"],1,"They do not."],
  ["An EOB is:",["A bill","An explanation of how a claim was processed","A prescription"],1,"EOB."],
  ["Which plan generally requires referrals?",["HMO","PPO","None"],0,"HMO."]
 ]}
]);
