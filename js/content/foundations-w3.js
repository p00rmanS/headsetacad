/* Foundations, week 3: KPIs, compliance, tools, checkpoint */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"f13",track:"found",title:"KPIs: AHT, FCR, CSAT, adherence and QA",level:"basic",account:"All accounts",mins:14,
 teach:[
  ["Why you need to know your numbers","Your supervisor reviews a few numbers on you every week. Know what they mean and what moves them, and you can protect your job and earn promotions. Targets differ by company; the ideas do not."],
  ["AHT: average handle time","Talk time plus hold time plus after-call work, divided by calls. Lower is not always better. Rushing hurts quality and drives repeat calls. Aim for efficient, not fast: ask good questions, avoid long silences, finish notes promptly."],
  ["FCR: first call resolution","The share of issues solved without the customer calling back. It is the most valuable number in support. Confirm the fix, give a reference number, and set clear next steps to raise it."],
  ["CSAT and NPS","CSAT is the customer’s satisfaction rating after the call. NPS asks how likely they are to recommend the company. You influence these most with ownership, empathy and a clean close."],
  ["Adherence and occupancy","Adherence is how closely you follow your schedule (login, breaks, lunch, coaching). Occupancy is the share of logged-in time spent on calls and wrap-up. Being late back from break hurts adherence even if your calls are perfect."],
  ["QA score","A quality analyst scores a sample of your calls on the QA form. You have seen it: greeting, verification, empathy, discovery, resolution, ownership, tone, closing and notes."],
  ["Balance, not gaming","Never hang up early, transfer to dodge a hard call, or rush to lower AHT. These show up in QA and repeat-call reports and will cost you more than they save."]
 ],
 steps:{h:"What moves each metric",items:[
  ["AHT","Good discovery questions, no dead air, wrap-up notes done fast, knowledge base searched quickly."],
  ["FCR","Confirm the fix with the customer, give a reference number, explain next steps and timelines."],
  ["CSAT","Name the customer’s feelings, own the problem, summarize, and close warmly."],
  ["Adherence","Be at your seat on time, take breaks as scheduled, tell your lead of any change early."],
  ["QA","Follow the form on every call, not only the ones you think will be scored."]
 ]},
 script:[
  ["a","I’ve updated your account and written the details in your ticket, number 55102. If you call back, mention it and the next agent can continue immediately.","Raises FCR by giving a reference."]
 ],
 qa:["Can define AHT, FCR, CSAT, adherence and QA","Does not rush or transfer to protect AHT","Gives a reference number on every unresolved or follow-up issue","Returns from breaks on time"],
 quiz:[
  ["Which metric measures whether the issue stayed fixed?",["AHT","FCR","Adherence"],1,"First call resolution."],
  ["Your AHT is high. What is the best fix?",["End calls early","Improve discovery questions and cut dead air","Skip notes"],1,"Efficiency, not rushing."],
  ["Late back from break affects:",["CSAT","Adherence","FCR"],1,"Adherence tracks schedule compliance."],
  ["Which behavior is gaming the metrics?",["Searching the knowledge base","Hanging up on a hard call","Writing notes"],1,"It hurts quality and the customer."]
 ]},

{id:"f14",track:"found",title:"Privacy and compliance: PCI, HIPAA and personal data",level:"intermediate",account:"Harborline Bank / Meridian Health Plan",mins:16,sim:"sim-f5",
 teach:[
  ["Why it matters","A compliance mistake can cost the company fines and cost you your job. QA calls these “critical” or “auto-fail” items. You do not need to be a lawyer, only to follow the procedure every time."],
  ["PII: personally identifiable information","Name with date of birth, address, SSN, account numbers, phone numbers tied to an account. Share only with the verified account holder, and only what they need."],
  ["PCI: payment card data","Never write a full card number, expiry or CVV in notes, chat or on paper. Use the secure payment tool or IVR so the number never touches your screen. If a customer reads the number aloud on a recorded line, follow your pause-recording procedure. Never repeat the full number back."],
  ["HIPAA: health information","Protected health information includes diagnoses, claims, treatments and member IDs tied to a person. Use the minimum necessary. Disclose only to the member, or to someone the member has authorized on file. A spouse or parent (of an adult) is not automatically authorized."],
  ["Minimum necessary and need to know","Look only at what the call requires. Never browse accounts out of curiosity or for people you know. Access is logged, and snooping is a firing offense."],
  ["Recording and consent","Many calls are recorded. Say the required disclosure at the start if your center requires it, and follow state consent rules."],
  ["If you make a mistake","Report it to your supervisor or compliance line immediately. An honestly reported mistake is fixable. A hidden one is not."]
 ],
 steps:{h:"Compliance reflexes",items:[
  ["Verify first","No account details before verification passes."],
  ["Mask sensitive data","Say and write only the last four of numbers."],
  ["Never write card data","Use the secure tool; never notes, chat or paper."],
  ["Third party?","Check authorization on file. If none, the holder must give consent on the call."],
  ["Mistake?","Tell your supervisor right away."]
 ]},
 script:[
  ["c","I’m calling for my husband. He had an MRI last month. Can you tell me if it was approved?"],
  ["a","I’m glad to help. For his privacy, I’m only able to discuss his claim with him or with someone he’s authorized on his plan. I don’t see an authorization on file. If he’s with you, I can speak to him now and he can give permission, or he can add you through the member portal.","Declines politely, explains why, offers a way forward."]
 ],
 qa:["Verification and authorization checked before any health or account data is shared","Card data never written or repeated in full","Mistakes reported at once","Only the minimum necessary information accessed and shared"],
 quiz:[
  ["A customer reads a full card number aloud. In the notes you write:",["The full number","The last four only, per policy","Nothing about payment"],1,"Mask and follow procedure. Never store the full number."],
  ["A spouse asks about a claim with no authorization on file. You:",["Share it; they are family","Decline politely and offer options","Ask for the password"],1,"Protect the member’s information."],
  ["You accidentally read the wrong account to a caller. You:",["Hope nobody notices","Report it to your supervisor immediately","Delete your notes"],1,"Report right away."]
 ]},

{id:"f15",track:"found",title:"Social engineering and fraud red flags",level:"intermediate",account:"Harborline Bank",mins:14,sim:"sim-f4",
 teach:[
  ["What social engineering is","Attackers do not hack systems; they trick agents. They sound confident, make urgent stories, and ask for small favors that add up. Your job is to keep to the process, however nice or desperate the caller sounds."],
  ["Common tactics","Urgency (“my flight leaves in an hour”). Sympathy (“my mother is in the hospital”). Authority (“I’m from your IT department”). Rapport and name-dropping. Partial information, then asking you to fill in the rest. Calling many times until someone bends."],
  ["Red flags on the line","Background noise that does not match the story. Hesitation on basic details, or reading from a script. Trying to change contact details or add a new payer right away. Asking you to skip steps. Calls that come in just after a failed verification on another line."],
  ["Hold the line, kindly","“I understand this is urgent, and I want to help. I can’t access the account until the verification is complete.” Repeat it calmly. The process is the same for everyone, so it is not personal."],
  ["Never help the attacker finish","Do not say which answer was wrong, do not confirm partial data (“yes, that’s the right ZIP, but the DOB is off”), and do not volunteer account details to “help” them pass."],
  ["Report it","Note it exactly and send it to your fraud team or lead per policy. A pattern across calls is how fraud rings get caught."]
 ],
 steps:{h:"When something feels off",items:[
  ["Slow down","Do not be rushed; take the time to follow the process."],
  ["Restate the rule","I can only access the account after verification."],
  ["Offer a safe path","Use the app, visit a branch, or call from the number on file."],
  ["Do not confirm partial data","Never say which item was wrong."],
  ["Document and report","Write exact words and send to fraud per policy."]
 ]},
 script:[
  ["c","Please, I’m traveling and my card was stolen. I need the balance and to change my email right now. I don’t have the account number with me."],
  ["a","I’m sorry to hear that, and I want to help you protect your account. I can’t discuss or change anything until I verify you. Do you have your date of birth and the phone number on the account? If not, I can help you freeze the card, which doesn’t need account access.","Empathy, rule, safe alternative."],
  ["c","Just change the email, then I’ll send you the rest."],
  ["a","I understand the pressure. I’m not able to change contact details before verification. I can place a temporary lock on the card for your safety, and you can complete verification at a branch or in the app.","Holds the line, offers protection."]
 ],
 qa:["Process followed under pressure","No confirmation of partial data","Safe alternative offered","Suspicious call documented and reported"],
 quiz:[
  ["A caller wants to change an email before verification. You:",["Do it to be helpful","Decline kindly and offer safe options","Ask them to send the details later"],1,"Contact detail changes are a classic attack."],
  ["Which is a red flag?",["Caller knows the account number","Caller pushes you to skip steps due to urgency","Caller is polite"],1,"Urgency plus skipping steps."],
  ["They get the ZIP right and the DOB wrong. You say:",["“The ZIP is right but the DOB is wrong.”","“I’m not seeing a match. Could you try once more?”","“Try your mother’s birthday.”"],1,"Never confirm partial data."]
 ]},

{id:"f16",track:"found",title:"Using the knowledge base fast",level:"basic",account:"All accounts",mins:10,
 teach:[
  ["Nobody remembers everything","Strong agents are not walking encyclopedias. They find the right article in seconds and follow it exactly. QA scores accuracy, and the knowledge base (KB) is the source of truth."],
  ["Search like a pro","Use the customer’s symptom words first (“printer offline”), then the product or account name. Use quotes for exact phrases. Open the top two results and check the date and the account they apply to."],
  ["Search while you talk","Do not go silent. Tell the customer what you are doing: “I’m pulling up the steps now.” Keep asking discovery questions while the page loads."],
  ["Follow the article, not memory","Policies change. If the article and your memory disagree, trust the article. If the article seems out of date or wrong, tell your lead and note the article title."],
  ["Bookmark and learn the structure","Learn where billing, returns, outage and compliance articles live. Bookmark the ten you use most. Know the difference between customer-facing articles and internal-only ones, and never read internal notes aloud."],
  ["When there is no article","Do not guess. Ask a lead or the escalation channel, tell the customer you are confirming, and write the question in your notes."]
 ],
 steps:{h:"Find it in 30 seconds",items:[
  ["Symptom","Type the customer’s words: printer offline."],
  ["Product","Add the account or device: printer offline Brightdesk Windows."],
  ["Check","Look at the date and scope of the top result."],
  ["Narrate","Tell the customer what you are doing."],
  ["Follow","Use the article’s steps in order."]
 ]},
 script:[
  ["a","I’d like to confirm the exact steps so I give you the right ones. I’m pulling up our guide now. While it loads, can you tell me whether the printer is connected by cable or Wi-Fi?","Narrates and keeps discovering."]
 ],
 qa:["Customer told what you are doing during searches","Accurate article used and followed in order","No guessing when no article exists","Internal-only content not shared"],
 quiz:[
  ["The KB article disagrees with your memory. You:",["Trust your memory","Follow the article","Make up a step"],1,"The KB is the source of truth."],
  ["While you search, you should:",["Stay silent","Tell the customer and keep asking questions","Put them on hold without asking"],1,"Narrate and keep discovering."],
  ["No article exists. You:",["Guess","Ask a lead or escalation channel","Tell them to call back tomorrow"],1,"Get the right answer."]
 ]},

{id:"f17",track:"found",title:"Typing, multitasking and screen navigation drills",level:"basic",account:"All accounts",mins:12,
 teach:[
  ["Why speed matters","Typing and navigation affect AHT and dead air. Most centers expect 35 to 45 words per minute with accuracy of 95% or better. This is a trainable skill."],
  ["Posture and setup","Keyboard at elbow height, wrists straight, screen at eye level, feet flat. Learn the home row. Look at the screen, not at the keys."],
  ["Type while you listen","Practice listening and typing at once. Write short notes as the customer talks (key words only) and expand them at the end. Do not stop talking to type, or you create dead air."],
  ["Shortcuts that save minutes","Alt-Tab switches windows, Ctrl-F finds on the page, Ctrl-C/V copy and paste, Ctrl-Shift-T reopens a closed tab. Use text snippets for greetings, closings and hold scripts."],
  ["Keep your screen layout the same","Put the CRM, the KB, and the notes window in the same place each time. You will find things without thinking."],
  ["Daily drill","Five minutes a day: type a transcript or an article while someone talks (a podcast works), and check your accuracy afterward."]
 ],
 steps:{h:"Daily 10-minute drill",items:[
  ["Warm up (2 min)","Type an article paragraph, accuracy first."],
  ["Listen and type (3 min)","Play a podcast and type key words as you hear them."],
  ["Navigate (3 min)","Practice Alt-Tab and Ctrl-F between three windows."],
  ["Notes (2 min)","Write a five-part note for any story you hear."]
 ]},
 script:[
  ["a","Go ahead and tell me what you see on the screen. I’m typing it into your ticket as we talk, so everything will be there if we need to pick it up later.","Types while listening, tells the customer."]
 ],
 qa:["Typing speed and accuracy meet the center target","Notes captured during the call, not after","Window layout consistent","No dead air from typing"],
 quiz:[
  ["Why use text snippets?",["To avoid thinking","To save time on repeated phrases","They are required by law"],1,"Snippets reduce typing time."],
  ["What reduces dead air most?",["Typing faster only","Narrating and typing while listening","Muting"],1,"Do both together."],
  ["Which matters more at first?",["Speed","Accuracy","Fancy shortcuts"],1,"Accuracy first, then speed."]
 ]},

{id:"f18",track:"found",title:"Staying steady: stress, breaks and your day on the floor",level:"basic",account:"All accounts",mins:10,
 teach:[
  ["The job is mentally tiring","Back-to-back calls with upset people drain you. This is normal. Plan for it like an athlete plans recovery."],
  ["Reset between calls","Use the wrap-up time to finish notes, then take one breath and drop your shoulders before the next call. Do not carry a bad call into the next one."],
  ["Use your breaks","Step away from the screen, drink water, walk, and eat real food. Do not spend break time doom-scrolling or replaying a hard call."],
  ["Hard calls are not personal","The customer is upset at the situation. Remind yourself: “It isn’t about me.” Debrief with a lead when a call stays with you."],
  ["Voice care","Drink water, avoid shouting, and warm up with a few hums before a long shift. A hoarse voice sounds tired."],
  ["Learn from calls, not punish yourself","After each shift, write down one thing that went well and one to improve. Growth comes from small steady corrections."],
  ["Ask for help early","If you are stuck on a policy, struggling with a metric or feeling burnt out, tell your lead early. They would rather help than lose you."]
 ],
 steps:{h:"Shift rhythm",items:[
  ["Before","Water, a quick stretch, headset check, tabs open."],
  ["Between calls","Finish notes, one breath, shoulders down."],
  ["After a hard call","Short reset, tell your lead if needed."],
  ["Breaks","Away from the screen, no replays."],
  ["End of shift","One win, one improvement, written."]
 ]},
 script:[
  ["a","Thank you for holding. I know that was a lot to repeat, and I appreciate your patience. Let me make sure we get this resolved.","A reset line after a long hold."]
 ],
 qa:["Resets between calls without carrying emotion","Breaks taken on schedule","Hard calls debriefed with a lead","Daily reflection written"],
 quiz:[
  ["After a rough call, you should:",["Vent to the next customer","Take a breath, finish notes, then continue","Skip notes"],1,"Reset and move forward."],
  ["A customer is angry. Remember:",["It is about you","They are upset at the situation","You failed"],1,"It isn’t personal."],
  ["You feel stuck on a metric. You:",["Hide it","Ask your lead for help early","Quit"],1,"Ask early."]
 ]},

{id:"f19",track:"found",title:"Foundations checkpoint: weeks 1 to 3",level:"intermediate",account:"All accounts",mins:20,
 teach:[
  ["How to use this checkpoint","Answer the questions below without looking at the lessons. Anything you miss comes back as flashcards. Aim for 80% or better, then take at least two foundation calls at 85% on the QA scorecard before starting TSR L1."],
  ["What it covers","Call flow, voice and tone, questioning, verification, closing, call control, objections, safety, notes, KPIs, privacy and compliance, fraud red flags, knowledge base use and staying steady."],
  ["If you scored under 80%","Open the lessons you missed, read the “QA will listen for” list, and try the flashcards again tomorrow. Repetition is the plan."]
 ],
 steps:{h:"Before you start the TSR L1 track",items:[
  ["Score","Quiz 80% or better."],
  ["Calls","Two foundation calls at 85% or better."],
  ["Notes","Write five notes using the five-part format."],
  ["Compliance","Explain PCI and HIPAA rules in your own words."],
  ["Say it","Say the five-stage call flow aloud from memory."]
 ]},
 script:[
  ["a","Thank you for calling Northwave Fiber, this is Jordan. How can I help you today?"],
  ["c","Hi, I’m calling about my bill."],
  ["a","I’d be glad to help with that. To protect your account, can you please confirm your full name and the last four digits of your account number?","Greeting, empathy and verification with a reason."]
 ],
 qa:["Five-stage call flow from memory","Verification before account access","Empathy statements that name the situation","Five-part notes","Compliance rules applied"],
 quiz:[
  ["What comes first on every call?",["Brand greeting, name and offer to help","Account number","Closing"],0,"Branded greeting."],
  ["What does FCR measure?",["How fast you type","Issues resolved without a callback","Break lengths"],1,"First call resolution."],
  ["A caller will not verify but pushes for urgency. You:",["Bypass the step","Stay kind, hold the process and offer safe alternatives","Hang up silently"],1,"Process over pressure."],
  ["Which is the best empathy statement?",["I understand.","Being without internet while you work is disruptive. Let’s fix it now.","Sorry for the inconvenience."],1,"Specific, then action."],
  ["Where do full card numbers go in notes?",["Nowhere; mask to the last four","In the notes if the customer allows","In chat"],0,"Never store them."],
  ["A long-story caller. You:",["Interrupt rudely","Acknowledge, summarize, redirect with a closed question","Let it run"],1,"Call control."],
  ["Which question is open?",["Is it blinking?","What happens when you try to connect?","Is it plugged in?"],1,"Open invites a story."],
  ["After an abusive call you:",["Say nothing","Document exact words and tell your supervisor","Post it online"],1,"Document and report."],
  ["Which is a note, not an opinion?",["Cust is rude","Power cycled modem 60s, Online solid","Probably a bad day"],1,"Facts."],
  ["The KB disagrees with your memory. Follow:",["Memory","The article","A coworker’s guess"],1,"KB is the source of truth."]
 ]}
]);
