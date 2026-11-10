/* TSR L1, weeks 7 and 8 */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"a11",track:"l1",title:"Mac basics: Wi-Fi, storage, frozen apps and updates",level:"basic",account:"Brightdesk IT",mins:14,
 teach:[
  ["Same method, different menus","Isolate first, then fix. Mac menus differ from Windows, so learn where things live and say the path out loud: “Click the Apple menu in the top left, then System Settings.”"],
  ["Know the version","Click the Apple menu, then About This Mac. Note the macOS version and whether it says Apple silicon (M-series) or Intel. Steps and menu names differ between versions, so confirm before you guide."],
  ["Frozen app","Press Option+Command+Esc to open Force Quit, choose the app and click Force Quit. If the entire Mac is frozen, hold the power button until it shuts off, then restart. Warn the customer about unsaved work."],
  ["Wi-Fi trouble","Turn Wi-Fi off and on in the menu bar. Restart the Mac. If one network misbehaves, remove it in System Settings, Wi-Fi, Details, Forget This Network, then rejoin with the password."],
  ["Storage","System Settings, General, Storage shows what fills the disk. Empty the Trash, remove large unused files and apps, and offload photos to the cloud if the customer wants. A nearly full Mac slows down and cannot update."],
  ["Updates","System Settings, General, Software Update. Make sure the Mac is plugged in and has enough space. Updates need a restart."],
  ["Activity Monitor","Spotlight (Command+Space) then type Activity Monitor. Sort by CPU or Memory to see what is making the fan loud or the Mac slow."]
 ],
 steps:{h:"Mac slow or frozen checklist",items:[
  ["Version","Apple menu, About This Mac. Note the macOS version and chip."],
  ["Force quit","Option+Command+Esc and close the stuck app."],
  ["Restart","Apple menu, Restart."],
  ["Storage","System Settings, General, Storage. Free some space."],
  ["Activity Monitor","Find any process using most of the CPU or memory."]
 ]},
 script:[
  ["c","My Mac keeps spinning the rainbow wheel."],
  ["a","That’s frustrating, especially if you’re in the middle of something. Is it one app or the whole Mac?","Empathy, then scope."],
  ["c","It’s just Photoshop."],
  ["a","Thanks. Press Option, Command and Escape together, choose Photoshop in the list and click Force Quit. Be aware unsaved work in it may be lost. Ready?","Warns about unsaved work."]
 ],
 qa:["Mac version confirmed before guiding","Menu path spoken clearly","Warns of unsaved work before force quit","Storage and update checks offered"],
 quiz:[
  ["To force quit an app on a Mac:",["Ctrl+Alt+Del","Option+Command+Esc","Alt+F4"],1,"That opens Force Quit."],
  ["Where do you see macOS version?",["About This Mac","Trash","Safari"],0,"Apple menu, About This Mac."],
  ["A nearly full Mac may:",["Run faster","Slow down and fail to update","Use less power"],1,"Low storage causes problems."]
 ]},

{id:"a12",track:"l1",title:"iPhone: Wi-Fi, storage, backups and Apple Account basics",level:"basic",account:"Brightdesk IT",mins:14,
 teach:[
  ["Know what you can and cannot do","You can guide settings and basic fixes. You cannot reset an Apple Account password for the customer; Apple’s own account recovery does that. Never ask for their Apple password."],
  ["Wi-Fi and cellular","Settings, Wi-Fi: confirm it is on and connected. Toggle Airplane Mode on and off. Restart the phone. If one network fails, tap its info icon and choose Forget This Network, then rejoin."],
  ["Reset Network Settings (last resort)","Settings, General, Transfer or Reset iPhone, Reset, Reset Network Settings. This erases saved Wi-Fi networks and passwords, VPN and cellular settings. Warn the customer and get their agreement first."],
  ["Storage full","Settings, General, iPhone Storage lists the biggest items. Offer to remove unused apps, large videos, or old message attachments. Suggest iCloud only if the customer wants it; it costs money above the free tier."],
  ["Backups","Backups protect photos, messages and settings. Settings, the customer’s name, iCloud, iCloud Backup shows the last backup time. Encourage a backup before any major reset or update."],
  ["Updates","Settings, General, Software Update. The phone should be charging, on Wi-Fi and have free space."],
  ["Lost or stolen","Direct the customer to use Find My from another device or the website to lock or erase the phone. Do not attempt this for them."]
 ],
 steps:{h:"iPhone Wi-Fi fix order",items:[
  ["Check","Is Wi-Fi on and connected? Does it show Wi-Fi at the top?"],
  ["Airplane toggle","Turn Airplane Mode on for ten seconds, then off."],
  ["Restart","Power off, wait ten seconds, power on."],
  ["Forget and rejoin","Info icon next to the network, Forget This Network, then rejoin."],
  ["Reset network settings","Only after warning about saved networks and passwords."]
 ]},
 script:[
  ["c","My iPhone says storage full and I can’t take photos."],
  ["a","That’s a common one, and we can fix it together. Let’s open Settings, General, iPhone Storage. Tell me what’s at the top of the list.","Clear path, short question."],
  ["c","Photos, 38 gigabytes. And Messages, 12."],
  ["a","Thanks. Before we delete anything, do you have a recent backup of your photos? I’d like to check so nothing is lost.","Protects the customer’s data first."]
 ],
 qa:["Never asks for the Apple password","Backup confirmed before deletions or resets","Warns before Reset Network Settings","Clear menu paths spoken"],
 quiz:[
  ["Reset Network Settings will:",["Delete photos","Erase saved Wi-Fi networks and passwords","Fix every problem"],1,"It clears network info only."],
  ["The customer forgot their Apple password. You:",["Reset it","Direct them to Apple’s account recovery","Ask them to read it out"],1,"Only Apple can recover it."],
  ["Before deleting photos, you:",["Check there is a backup","Delete quickly","Skip it"],0,"Back up first."]
 ]},

{id:"a13",track:"l1",title:"Android: connectivity, storage, app crashes and Google account",level:"intermediate",account:"Brightdesk IT",mins:16,sim:"sim-l1g",
 teach:[
  ["Many makers, many menus","Samsung, Google Pixel and others word things a little differently. Ask for the brand and model, and use the search box at the top of Settings to find an option fast."],
  ["Connectivity","Settings, Network and internet (or Connections). Toggle Airplane mode. Forget and rejoin the Wi-Fi network. Restart. Check whether Wi-Fi or mobile data is the one failing."],
  ["App crashes","Force stop the app (Settings, Apps, the app, Force stop). Clear the app’s cache first. Clear storage only as a last step because it erases the app’s local data. Make sure the app and the phone’s system are updated."],
  ["Storage","Settings, Storage lists categories. Remove unused apps, clear caches, and offer to move photos to the cloud or a computer. Ask before deleting."],
  ["Battery drain and heat","Settings, Battery shows which apps use the most. Suggest dimming the screen, closing background apps and updating. A swollen or very hot battery is a safety risk: tell the customer to stop using it and take it to a repair center."],
  ["Google account","Account recovery is done by Google at the recovery page. You can guide the customer there but cannot reset it. Never ask for their password or recovery codes."],
  ["Safe mode","Holding the power menu’s power off option can boot into safe mode, which disables third-party apps. If the problem vanishes in safe mode, an app is the cause."]
 ],
 steps:{h:"Android app crashing",items:[
  ["Identify","Which app, and does it happen every time?"],
  ["Force stop","Settings, Apps, the app, Force stop. Reopen."],
  ["Clear cache","Settings, Apps, the app, Storage, Clear cache."],
  ["Update","Open Google Play Store and update the app. Install system updates."],
  ["Last step","Clear storage or reinstall, after warning about lost local data."]
 ]},
 script:[
  ["c","My banking app crashes every time I open it."],
  ["a","That’s frustrating when you need to check your account. Let’s try a quick fix. Open Settings, Apps, find the banking app and tap Force stop. Tell me when that’s done.","Empathy, one step."],
  ["c","Done. It still crashes."],
  ["a","Okay. Now tap Storage, then Clear cache, not Clear data. Clearing the cache is safe and won’t sign you out.","Explains the difference between cache and data."]
 ],
 qa:["Brand and model confirmed","Cache cleared before data","Customer warned about lost local data","Never asks for Google password"],
 quiz:[
  ["Which erases an app’s local data?",["Clear cache","Clear storage","Force stop"],1,"Clear storage erases data."],
  ["A phone battery looks swollen. You:",["Keep using it","Advise stopping use and getting it repaired","Charge it overnight"],1,"Safety risk."],
  ["Safe mode helps you find:",["A bad app","A bad SIM","A weak signal"],0,"It disables third-party apps."]
 ]},

{id:"a14",track:"l1",title:"Email setup and send/receive problems",level:"intermediate",account:"Brightdesk IT",mins:16,
 teach:[
  ["Start with the symptom","Cannot sign in, cannot send, cannot receive, or only some messages? Each points to a different cause. Ask for the exact error message and whether the webmail works."],
  ["Webmail is the control test","If the customer can sign in and use the email on the provider’s website, the account is healthy. The problem is in the app or the device settings."],
  ["IMAP, POP and SMTP in plain words","IMAP keeps mail on the server and syncs across devices. POP downloads mail to one device. SMTP sends mail. Customers rarely need to know more than that these three settings must match the provider’s documentation."],
  ["Typical sign-in problems","Wrong password, password changed on another device, or MFA enabled: some providers need an app password for older mail apps. A mailbox that is full can reject new mail."],
  ["Send and receive problems","Check the outbox for stuck messages, confirm the internet works, check the sent-to address, and check the spam or junk folder. A very large attachment can block sending."],
  ["Phone and PC differences","Add the account again rather than fixing a broken one if many settings are wrong. Back up anything stored only locally before removing an account."],
  ["Provider help pages","Use the knowledge base for exact server names and ports. Do not guess or read settings from memory."]
 ],
 steps:{h:"Email troubleshooting order",items:[
  ["Symptom","Sign in, send, or receive? What is the exact message?"],
  ["Webmail test","Can you sign in on the website?"],
  ["Connection","Are other sites loading right now?"],
  ["Account settings","Check username, password, and server settings against the provider’s page."],
  ["Re-add","Remove and add the account again if the settings are corrupted."]
 ]},
 script:[
  ["c","I can’t get my email on my phone anymore."],
  ["a","I’m sorry about that, and I’ll help get it back. First, can you open a web browser and sign in to your email on the website? That tells us whether the account itself is fine.","Uses webmail as a control test."],
  ["c","Yes, it works on the site."],
  ["a","That’s good news. It means your account is fine and we only need to fix the app on your phone. What does the phone say when you open the mail app?","Explains what the result means."]
 ],
 qa:["Webmail control test performed","Exact error message captured","Settings checked against official documentation","Customer data protected before removing accounts"],
 quiz:[
  ["Webmail works but the app does not. The problem is:",["The account is deleted","The app or device settings","The internet provider"],1,"The account is fine."],
  ["Which sends mail?",["IMAP","SMTP","POP"],1,"SMTP sends."],
  ["Before removing an account, you:",["Check for local-only data","Remove immediately","Ask for the password"],0,"Protect local data."]
 ]},

{id:"a15",track:"l1",title:"MFA: lost phones, missing codes and lockouts",level:"intermediate",account:"Brightdesk IT",mins:16,sim:"sim-l1h",
 teach:[
  ["What MFA is","Multi-factor authentication asks for something you know (a password) plus something you have (a phone or key) or are (a fingerprint). It blocks most account takeovers even when a password is stolen."],
  ["Common MFA problems","The code never arrives. The phone is new or lost. The authenticator app was wiped. The customer travels and has no signal. Codes expire after 30 seconds, so a clock that is off causes failures."],
  ["Codes that never arrive","Check the number or app on file, signal strength, blocked texts, and whether too many attempts triggered a temporary lock. Wait a few minutes before sending again."],
  ["New phone, old authenticator","Authenticator apps are tied to the old phone unless transferred. The customer may have backup codes or can use another method. If none, a strict identity check is needed to reset MFA."],
  ["Never accept or ask for sign-in codes","A code that signs someone into their account must go only to the person. Do not ask a customer to read you their login code. A scammer’s favorite trick is asking a victim to read it out. Verification codes your own system sends to confirm identity on the call are a separate, policy-based process."],
  ["Resetting MFA safely","Follow your procedure exactly: full identity verification, a log of the request, and a confirmation sent to the existing contact. High-risk resets often need a supervisor or the security team."],
  ["Backup methods","Encourage customers to set a second method (another phone number, backup codes, or a hardware key) and store backup codes safely."]
 ],
 steps:{h:"MFA code not arriving",items:[
  ["Confirm","Which method: text, call, or authenticator app?"],
  ["Check","Is the number on file correct? Is there signal?"],
  ["Retry","Wait two minutes, request one new code, and avoid repeated requests."],
  ["Alternative","Offer backup codes or another registered method."],
  ["Reset","If nothing works, verify identity per policy and request an MFA reset."]
 ]},
 decide:{h:"Decision tree: customer cannot pass MFA",nodes:[
  {q:"Does the customer still have the registered phone or app?",b:"Yes",out:"Troubleshoot the code delivery: signal, number on file, clock settings, and retry after a short wait."},
  {q:"Does the customer have backup codes or another registered method?",b:"Yes",out:"Use that method to sign in, then update the main method."},
  {q:"Has the customer passed full identity verification?",b:"Yes",out:"Follow the MFA reset procedure; document everything; supervisor approval if required."},
  {end:"If identity cannot be verified, do not reset. Explain safe options, such as an in-person check or sending documents per policy."}
 ]},
 script:[
  ["c","I got a new phone and I can’t sign in. The code goes to my old number."],
  ["a","I understand, that’s a common issue when switching phones, and I can help. Before I look at the account security, I need to verify you. Could you confirm your full name, date of birth and the last four of your account number?","Empathy, then verification before any security change."],
  ["c","Sure. Alexis Park, 4/12/1988, 6620."],
  ["a","Thank you, Alexis, you’re verified. I’ll submit an MFA reset request. For your security, we’ll send the confirmation to your email on file and you’ll set up the new phone then.","Process followed; confirmation to the contact on file."]
 ],
 qa:["Full verification before any MFA change","Never asks for login codes","Confirmation sent to existing contact","Reset logged in notes"],
 quiz:[
  ["Why should you not ask a customer for their login code?",["It is slow","Scammers use that trick to take over accounts","Codes are long"],1,"Login codes must stay private."],
  ["New phone, no backup codes. First step?",["Reset MFA immediately","Verify identity fully per policy","Tell them to wait a week"],1,"Verification comes first."],
  ["A code never arrives. A good move is:",["Request ten codes quickly","Wait a couple of minutes and request one","Disable MFA"],1,"Too many attempts can lock the account."]
 ]},

{id:"a16",track:"l1",title:"Phishing: spot it, report it, and help a customer who clicked",level:"intermediate",account:"Brightdesk IT",mins:16,sim:"sim-l1i",
 teach:[
  ["What phishing is","A fake message that pretends to be a bank, delivery company, boss or IT team, designed to steal logins, money or access. It arrives by email, text, phone and social media."],
  ["Red flags","Urgency and threats. A sender address that is slightly off. Links that do not match the real site when you hover. Unexpected attachments. Requests for passwords, codes or gift cards. Generic greetings. Bad grammar is a weaker clue now."],
  ["What to tell a customer who has not clicked","Do not click links or open attachments. Do not reply. Go to the company’s real website by typing it in. Report the message using the report phishing button in the mail app or per company policy, then delete it."],
  ["The customer clicked a link","Stay calm and do not blame. Ask: did they enter a password, a code or card details, or download a file? The answer decides the steps."],
  ["If they typed a password","Change the password at once from a clean device, on every site where it was reused. Turn on MFA. Review recent activity and sign out of other sessions."],
  ["If they gave card or bank details","Contact the bank or card company immediately to freeze or replace the card. Do not take the card number yourself."],
  ["If they downloaded a file","Disconnect the device from the internet, run a security scan, and escalate to L2 or security per policy."],
  ["Report and document","Record what the customer did, when and what you advised. Forward the suspicious message to the security team through the approved channel."]
 ],
 steps:{h:"Customer clicked a suspicious link",items:[
  ["Calm","It’s okay, this happens to many people. Let’s fix it together."],
  ["Find out","Did you enter a password, a code, card details, or download something?"],
  ["Secure","Change the password from a clean device and turn on MFA."],
  ["Contain","If a file was downloaded, disconnect and scan; escalate."],
  ["Report","Report the message and note exactly what happened."]
 ]},
 script:[
  ["c","I got a text saying my package is held, so I tapped the link and typed my card number. Now I think it was fake."],
  ["a","I’m glad you called right away, and this happens to a lot of people, so don’t be hard on yourself. The most urgent step is to contact your card company and freeze or replace the card. I can stay with you while you call them. Did you enter anything else, like a password?","No blame, urgent first step, keeps helping."]
 ],
 qa:["No blame and a calm tone","Right actions for the data exposed","Never collects card numbers","Reported through the approved channel"],
 quiz:[
  ["A customer entered a password on a fake site. First?",["Delete the message","Change the password from a clean device","Wait"],1,"Change it and turn on MFA."],
  ["Which is a red flag?",["Sender domain slightly misspelled","A message that greets by full name","A calendar invite from a coworker"],0,"Look-alike domains are common."],
  ["Card details were given. Who should the customer contact first?",["You","Their bank or card company","A friend"],1,"Freeze or replace the card."]
 ]}
]);
