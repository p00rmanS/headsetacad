/* TSR L1, week 9: software, peripherals, VPN, POS, exam */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"a17",track:"l1",title:"Installing software and fixing browser problems",level:"basic",account:"Brightdesk IT",mins:14,
 teach:[
  ["Check before installing","Confirm the software is approved for the customer, the operating system version is supported, and there is enough free space. For work devices follow the company’s approved software list; do not guide installs of unapproved tools."],
  ["Download from the source only","Send the customer to the vendor’s official site or the company portal. Warn about look-alike download pages and bundled extras."],
  ["Install and verify","Run the installer, accept only required options, restart if asked, then open the app and test one real task so you know it works."],
  ["Uninstalling","Windows: Settings, Apps, Installed apps. Mac: drag the app to the Trash from Applications and empty it. Restart afterward. Ask before removing anything the customer may need."],
  ["Browser problems","Most browser trouble is a bad extension, an old cache, or an out-of-date browser. Test in a private window: if it works there, an extension or cache is the cause."],
  ["Clear cache and cookies carefully","Clearing cookies signs the customer out of sites. Explain that and offer to clear only the affected site. Do not clear saved passwords unless asked."],
  ["Update the browser","Chrome, Edge, Firefox and Safari update through their About pages or system updates. Restart the browser after updating."]
 ],
 steps:{h:"Website won’t load or misbehaves",items:[
  ["Scope","Is it one site or all sites? One browser or all browsers?"],
  ["Private window","Try the page in a private or incognito window."],
  ["Extensions","Turn off extensions one by one, starting with recent ones."],
  ["Cache","Clear cache for that site and reload."],
  ["Update","Update the browser and restart it."]
 ]},
 script:[
  ["c","This one website won’t load properly, the page is all broken."],
  ["a","That sounds annoying. Let’s see if it’s the website or your browser. Could you open a private window and try the same page?","Uses a private window as a control test."],
  ["c","It works there."],
  ["a","That helps. It points to an extension or saved data in your usual window. Let’s turn off your extensions first.","Interprets and leads."]
 ],
 qa:["Source of software verified","Private window used as control test","Warns that clearing cookies signs out","Result tested after the fix"],
 quiz:[
  ["A site works in a private window only. The cause is likely:",["The router","An extension or cached data","The internet service"],1,"Private windows skip extensions and cache."],
  ["Where should downloads come from?",["Any search result","The vendor’s official site or company portal","A friend’s email"],1,"Official sources only."],
  ["Clearing cookies will:",["Sign the customer out of sites","Delete photos","Fix everything"],0,"Warn them first."]
 ]},

{id:"a18",track:"l1",title:"Peripherals: monitors, keyboards, webcams, headsets and USB",level:"basic",account:"Brightdesk IT",mins:14,
 teach:[
  ["Simple faults first","Most peripheral problems are power, cable, port or the wrong input. Check the obvious before reinstalling anything."],
  ["Monitors","No picture: confirm the power light, the cable at both ends and the monitor’s input source. Try another cable or port. On a laptop, press Windows+P and choose Extend or Duplicate for a second screen."],
  ["Keyboards and mice","Wireless: check batteries and the USB receiver or Bluetooth pairing. Wired: try another USB port. Test on another computer to see if the device is the fault."],
  ["Webcams and microphones","Check privacy settings so apps are allowed to use the camera and microphone. Look for a physical shutter or mute switch. Make sure the right device is selected in the video app."],
  ["Headsets","Check the volume, the mute button on the cord, and the default playback and recording device in sound settings. A USB headset often needs the right device set as default."],
  ["USB devices not recognized","Try a different port and cable, restart, avoid hubs for testing, and check Device Manager for a warning. A device that fails everywhere is likely faulty."],
  ["Swap tests","Swapping a part isolates the fault: new cable, new port, new device on a different machine."]
 ],
 steps:{h:"Device not working",items:[
  ["Power","Does it have power? Lights, batteries or a power switch?"],
  ["Cable and port","Reseat the cable and try another port."],
  ["Software setting","Is the right device selected as input or output?"],
  ["Another machine","Test it on another computer."],
  ["Decide","Replace the device or escalate if the software is at fault."]
 ]},
 script:[
  ["c","People can’t hear me in meetings."],
  ["a","Let’s fix that before your next meeting. First, is the headset’s mute switch on? Many have a small button on the cord.","Checks the physical mute first."],
  ["c","No, it’s unmuted."],
  ["a","Good. Now, in the meeting app, open the audio settings and tell me which microphone is selected.","Checks the software setting next."]
 ],
 qa:["Physical checks before software changes","Swap tests used to isolate faults","Right device selected in the app","Result confirmed with a live test"],
 quiz:[
  ["A monitor shows no signal. First check:",["Reinstall Windows","Cable and input source","Buy a new monitor"],1,"Basics first."],
  ["People cannot hear a headset user. Check first:",["Mute switch and selected microphone","Wi-Fi","The monitor"],0,"Mute and device selection."],
  ["Best way to confirm a faulty device?",["Test it on another computer","Guess","Replace the PC"],0,"A swap test."]
 ]},

{id:"a19",track:"l1",title:"VPN basics: connect, disconnect and when to escalate",level:"intermediate",account:"Brightdesk IT",mins:14,
 teach:[
  ["What a VPN does","A virtual private network makes an encrypted tunnel from the customer’s device to the company’s network. It lets remote workers reach internal systems as if they were in the office."],
  ["Test the internet first","A VPN needs a working internet connection. Confirm a public website loads before blaming the VPN."],
  ["Common problems","Wrong password or expired password, MFA prompt missed, an old VPN client, a captive-portal Wi-Fi (hotel, café) that needs a web login first, or a home network that blocks VPN."],
  ["Connected but nothing works","The tunnel is up but internal sites fail or the internet is gone. This can be a DNS or routing issue. Disconnect and reconnect, then escalate to L2 with the exact behavior."],
  ["Basic fix path","Restart the VPN client, confirm the credentials work on another service, check for an update, restart the device, then try a different network (a phone hotspot) to isolate the home network."],
  ["Escalate when","Certificates or profiles are involved, the account is locked on the company side, or the problem affects many users. Write the error text, time, network and client version."]
 ],
 steps:{h:"VPN won’t connect",items:[
  ["Internet","Does a public website load without the VPN?"],
  ["Credentials","Are the username and password correct? Did MFA prompt?"],
  ["Client","Is the VPN client up to date? Close and reopen it."],
  ["Network","Try another network, such as a phone hotspot."],
  ["Escalate","Collect the error, time, network and version. Hand to L2."]
 ]},
 script:[
  ["c","The VPN says ‘connection failed’ and I need to get into the company system."],
  ["a","I know that’s urgent, and I’ll help you get in. First, can you open a regular website without the VPN to confirm your internet is working?","Isolates the internet first."],
  ["c","Yes, that works."],
  ["a","Great. Now when you try to connect, do you get a prompt to approve on your phone, or does it fail straight away?","Checks for MFA."]
 ],
 qa:["Internet checked before VPN troubleshooting","MFA step asked about","Alternate network used as isolation","Error text captured for escalation"],
 quiz:[
  ["First check before troubleshooting a VPN:",["The internet works","The color of the laptop","The VPN logo"],0,"Internet first."],
  ["A hotel Wi-Fi blocks VPN until:",["A web login is completed","The router is replaced","Never"],0,"Captive portals need a sign-in."],
  ["Best isolation test for a home network issue:",["Use a phone hotspot","Reinstall Windows","Wait a day"],0,"A different network isolates it."]
 ]},

{id:"a20",track:"l1",title:"Point-of-sale and card terminals: when the store can’t take payments",level:"intermediate",account:"Cartwell",mins:16,
 teach:[
  ["Why it is urgent","A store that cannot take payments loses money every minute. Customers on the line are often a manager or cashier under pressure. Be calm, fast and clear."],
  ["Start with the symptom","Does the terminal not turn on, show an error, fail to read cards, or fail to connect? Does it happen on every register or only one?"],
  ["Power and network","Check power and cables, then connectivity: Ethernet or Wi-Fi, and whether other devices in the store have internet. A store-wide internet outage is a different ticket."],
  ["Card reader problems","Clean the reader with a soft cloth. Try both swipe, chip and tap. Check cable seating. A reader that works for some cards but not others suggests a card issue, not a reader fault."],
  ["Restart in order","Close the sale. Restart the terminal, then the register, following your procedure. Do not restart in the middle of a payment; a transaction may be pending."],
  ["Offline mode and manual workarounds","Some systems store sales offline and send them later. Follow policy for what is allowed and for the limits. Never write down a customer’s card number as a workaround."],
  ["Payment security","Never ask for or accept a full card number, CVV or PIN. Use the approved secure tools only."],
  ["Escalate when","The processor shows an outage, the same error appears at many stores, or the hardware is faulty. Include the terminal ID, store, error text and what you tried."]
 ],
 steps:{h:"Terminal won’t take cards",items:[
  ["Scope","One register or all? Since when?"],
  ["Power","Power and cable connections solid?"],
  ["Network","Does the store have internet? Is the terminal showing connected?"],
  ["Restart","Finish or void the sale, then restart per procedure."],
  ["Escalate","Terminal ID, store, error text and steps tried."]
 ]},
 script:[
  ["c","Our card machine says ‘Network error’ and I have a line of customers."],
  ["a","I understand, let’s get you running quickly. Is it just this register or every register in the store?","Quick scope question."],
  ["c","Just this one."],
  ["a","Good, that narrows it down. Can you check the cable at the back of the terminal is firmly clicked in, and tell me if any small lights are lit near the port?","Clear instruction, one thing."]
 ],
 qa:["Scope established immediately","Never collects card numbers","Restart done safely, not mid-payment","Escalation notes complete"],
 quiz:[
  ["A manual workaround that requires writing the card number:",["Is fine","Is never allowed","Is allowed on weekends"],1,"Never write down card numbers."],
  ["The terminal fails at every register in the store:",["The problem is the store’s network or the processor","One terminal is faulty","It’s a card issue"],0,"Wide impact means network or processor."],
  ["Restart a terminal:",["Mid-payment","After closing or voiding the sale","Never"],1,"Avoid pending transactions."]
 ]},

{id:"a21",track:"l1",title:"TSR L1 exam: mixed review",level:"intermediate",account:"All tech accounts",mins:25,
 teach:[
  ["How this exam works","Answer without looking back. Pass is 80 percent, then complete at least three L1 practice calls at 85 percent or better. Missed items return as flashcards."],
  ["What it covers","The troubleshooting method, equipment and lights, Wi-Fi, speed tests, router setup, Windows, Mac, iPhone, Android, email, MFA, phishing, software and browsers, peripherals, VPN and point-of-sale."],
  ["If you pass","Move to L2: DNS, intermittent Wi-Fi, packet loss, mail servers and business networks."],
  ["If you miss","Read the lessons for the questions you missed and drill their flashcards for three days, then retake."]
 ],
 steps:{h:"Ready for L2 when",items:[
  ["Exam","Score 80 percent or better."],
  ["Calls","Three L1 calls at 85 percent or better."],
  ["Notes","Five clean notes with steps and results."],
  ["Explain","Teach back a speed test result to a friend in plain words."],
  ["Escalation","Name three cases that you would escalate to L2."]
 ]},
 script:[
  ["a","Thank you for calling Brightdesk IT, this is Jordan. How can I help you today?"],
  ["c","My laptop can’t get online."],
  ["a","I can help with that. Are your phone and other devices able to get online right now?","Isolation question first."]
 ],
 qa:["Isolates scope before fixing","One change at a time","Verification before account changes","Results recorded in notes"],
 quiz:[
  ["First question for a no-internet call:",["Is it one device or all devices?","What is your password?","Do you have a new router?"],0,"Scope first."],
  ["Start with which layer?",["Application","Physical: power, cables, lights","Reinstall"],1,"Bottom-up."],
  ["A 300 Mbps plan is roughly:",["30 MB/s","37 MB/s","300 MB/s"],1,"Divide by eight."],
  ["A site works only in a private window:",["Router issue","Extension or cache","ISP outage"],1,"Extensions and cache."],
  ["Customer cannot receive MFA codes on a new phone. First:",["Reset MFA","Verify identity fully","Disable MFA"],1,"Verification first."],
  ["A customer entered a password on a fake site. Next step:",["Delete the message","Change the password from a clean device and enable MFA","Wait"],1,"Secure the account."],
  ["A VPN fails. Test first:",["Internet works without VPN","The headset","The printer"],0,"Internet first."],
  ["Terminal fails at every register in the store:",["Terminal broken","Store network or processor","Card issue"],1,"Wide impact."],
  ["Which band travels farther?",["2.4 GHz","5 GHz","6 GHz"],0,"2.4 GHz."],
  ["Reset hole on a router is used:",["First always","Only when the procedure says so","Never"],1,"It factory-resets."],
  ["After a Wi-Fi password change, devices:",["Stay connected","Must rejoin","Update automatically"],1,"Rejoin required."],
  ["Slow PC and a nearly full drive. First:",["Free space","Reinstall","Replace"],0,"Storage."]
 ]}
]);
