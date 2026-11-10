/* Foundations, weeks 1 and 2: extra lessons */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

/* ---------------- WEEK 1 ---------------- */
{id:"f5",track:"found",title:"Voice, pace and tone: sound confident on the phone",level:"basic",account:"All accounts",mins:12,
 teach:[
  ["Your voice is the whole product","The customer cannot see your face, your desk or your effort. They judge you in the first ten seconds by pace, volume, warmth and clarity. QA forms score this under “tone” and “professionalism”, and customers rate it in the survey."],
  ["Pace: slightly slower than you think","Most new agents speak too fast when nervous. Aim for a calm conversational pace. Slow down further for numbers, names, addresses and instructions. Speed up a little with a customer who is rushed and clearly knows what they want."],
  ["Warmth: smile and lower your pitch","A real smile before you speak changes your sound. Keep your pitch steady or slightly lower on empathy statements. A rising pitch at the end of a statement sounds unsure. End statements down."],
  ["Clarity: no jargon, no filler","Say “restart” instead of “power cycle” until the customer shows they know the term. Cut filler such as “um”, “like”, “you know”, “basically”. Replace silence with a short bridge: “I’m opening your account now.”"],
  ["Dead air and keyboard noise","More than about ten seconds of silence feels like you hung up. Narrate what you are doing: “I’m checking that now, bear with me a moment.” Mute or move away from loud typing, and never eat or chew on a call."],
  ["Match, then lead","Match the customer’s energy a little (a worried customer wants calm, not cheerfulness), then lead them to a steady, confident tone. Never mirror anger."]
 ],
 steps:{h:"Your 5-second voice check before every call",items:[
  ["Posture","Sit upright, feet flat, headset mic two fingers from the corner of your mouth."],
  ["Breath","One slow breath in and out before the call connects."],
  ["Smile","Smile before you speak the greeting. It is audible."],
  ["Pace","Say the greeting at a calm pace: “Thank you for calling Northwave Fiber, this is Jordan.”"],
  ["Finish low","End the first sentence with a falling tone, then ask the question: “How can I help you today?”"]
 ]},
 script:[
  ["c","Hello? Hello, are you there?"],
  ["a","Yes, I’m here, sorry about that. I was opening your account so I could see your details. Thank you for waiting. How can I help?","Explains the silence, thanks the customer, moves forward."],
  ["c","I need someone to fix my router, it keeps flashing."],
  ["a","Okay, a flashing light can be a worry, and we’ll sort it out together. Let’s start with the color of the light. What color is it right now?","Warm, slow, one clear question."]
 ],
 qa:["Greeting delivered at a calm pace with a smile in the voice","No filler words, no dead air longer than about ten seconds","Plain language; jargon explained","Steady, confident tone on empathy statements"],
 quiz:[
  ["You need to read back a phone number. How?",["Quickly, to save time","Slowly, in groups, then confirm","Skip it; the customer knows their number"],1,"Slow down for numbers, group them, and confirm."],
  ["There is a long pause while you search. What is the best move?",["Stay silent until you find it","Narrate: “I’m checking that now, bear with me.”","Place the customer on mute without telling them"],1,"Narrate. Silence feels like you hung up."],
  ["A worried customer calls. Which tone fits best?",["Very upbeat and fast","Calm, steady and reassuring","Flat and formal"],1,"Match their concern, then lead with calm."]
 ]},

{id:"f6",track:"found",title:"Questioning skills: open, closed, probing, restating",level:"basic",account:"All accounts",mins:14,
 teach:[
  ["Questions are your diagnostic tool","A good question gets the facts you need in the fewest turns. A bad question wastes time, annoys the customer, and raises handle time. Questioning is scored under discovery on the QA form."],
  ["Open questions: get the story","They start with what, how, when or tell me about. “Walk me through what happens when you try to print.” Use them first, and again whenever you are lost."],
  ["Closed questions: pin down facts","Yes/no or short-answer questions. “Is the light solid or blinking?” “Which version of Windows?” Use them after the story, to confirm one detail at a time."],
  ["Probing questions: go one level deeper","When the answer is vague, go deeper. Customer: “It’s slow.” You: “Slow when you open websites, or slow when you stream video? And is it slow on all devices?”"],
  ["Restating: prove you heard","Say it back in one sentence: “So since Tuesday your printer shows offline, and this is only happening on your laptop. Is that right?” This catches mistakes early and builds trust."],
  ["Avoid leading and stacked questions","Leading: “You already restarted it, right?” (invites a lie). Stacked: “What model is it, when did you buy it, and have you updated it?” (customers answer one). Ask one question, then wait."]
 ],
 steps:{h:"Discovery sequence",items:[
  ["Open","Walk me through what happens when you try to connect."],
  ["Probe","When did this start? Did anything change that day?"],
  ["Narrow","Is it every device or only this laptop?"],
  ["Restate","So since this morning, only the laptop can’t get online. Is that correct?"],
  ["Confirm goal","What would you like to see working by the end of this call?"]
 ]},
 script:[
  ["c","My email is broken."],
  ["a","I can help with that. Tell me what happens when you open it.","Open question."],
  ["c","It just spins and spins."],
  ["a","Thank you. Does it spin when you open the app, or only when you try to send or receive?","Probing, narrowed to two options."],
  ["c","When I open it."],
  ["a","Got it, so the app spins when you open it. Is it the same on your phone, or only on the computer?","Restates, then one closed question."]
 ],
 qa:["Open question used first","One question at a time, then wait","Vague answers probed","Issue restated before troubleshooting begins"],
 quiz:[
  ["Which is an open question?",["Is it plugged in?","Tell me what you see on the screen.","Did you restart it?"],1,"Open questions invite a description."],
  ["A customer says, “It’s slow.” Best next question?",["Why is it slow?","Slow when doing what, and on which devices?","Have you tried turning it off?"],1,"Probe for specifics: activity and scope."],
  ["Which question is stacked, and best avoided?",["What error do you see?","What model is it, when did you buy it, and did you update it?","When did this start?"],1,"Stacked questions get partial answers. Ask one at a time."],
  ["Why restate the issue?",["It fills time","It confirms understanding and catches errors","It is required by law"],1,"Restating catches misunderstandings early."]
 ]},

{id:"f7",track:"found",title:"Verification done right: every account, every time",level:"basic",account:"All accounts",mins:14,
 teach:[
  ["Why verification matters","Verification stops account takeover and fraud. Skipping it is an automatic fail on almost every QA form, and in banking and health it can be a legal breach. Verify before you discuss or change anything."],
  ["Common methods","Name plus the last four digits of the account number, date of birth, billing ZIP, security question, PIN, or a one-time code sent to the contact on file. Each account sets its own policy. Read it in the knowledge base before the call."],
  ["Ask with a reason, then wait","“To protect your account, can you confirm your full name and the last four of your account number?” Do not read the answer to the customer and ask them to say yes. They must supply it."],
  ["Never ask for these","Full passwords, PINs in plain text, full card numbers, or full Social Security numbers unless your account policy specifically requires a masked portion. Never accept a code sent to a number that is not already on file."],
  ["When verification fails","Do not hint at the right answer. Allow the number of tries your policy permits (often two or three), then offer another method or tell the caller what they can do next (visit in person, use the app, call back with documents). Stay polite."],
  ["Third parties","A spouse, assistant or relative is not the account holder. Follow your policy: usually the holder must be on the line to give permission, or an authorized user must already be on the account. Document who you spoke to."],
  ["Document it","Notes say how the caller was verified and by whom: “Verified: holder, name + last 4 + DOB.” If verification failed, say that."]
 ],
 steps:{h:"Verification flow",items:[
  ["Confirm who is calling","Am I speaking with the account holder?"],
  ["Ask with a reason","To protect your account, can you confirm your full name and the last four digits of your account number?"],
  ["Check against the CRM","Compare silently. Do not read the data aloud."],
  ["Confirm or retry","Thank you, you’re verified. / I’m not seeing a match. Could you try that once more?"],
  ["Fallback","If it still fails: I’m not able to continue on the account without verification. Here’s what we can do instead…"]
 ]},
 script:[
  ["a","To protect your account, can you please confirm your full name and the last four digits of your account number?"],
  ["c","It’s Daniel Reyes. The last four is… 7733."],
  ["a","Thank you, Daniel. I’m not seeing a match for those digits. Could you check the number on your latest statement and try once more?","Does not reveal the right digits."],
  ["c","Oh, sorry, 7738."],
  ["a","Thank you, Daniel, you’re verified. How can I help you today?","Moves on warmly after a pass."]
 ],
 qa:["Verification completed before any account details are shared","Asked with a reason, in the customer’s words not read back","No hints given on failed attempts","Verification method written in the notes"],
 quiz:[
  ["A caller says, “It’s my wife’s account, she’s busy.” What do you do?",["Help; it’s a family matter","Follow policy: the account holder must authorize or be an authorized user","Ask for her password"],1,"A spouse is a third party unless authorized on the account."],
  ["The caller gives the wrong last four. What do you say?",["“Is it 7738?”","“I’m not seeing a match. Could you try once more?”","“That’s wrong, hang up and call back.”"],1,"Never hint. Allow retries per policy."],
  ["Which item should you never ask for?",["Name","Last four of account","Full password"],2,"Never ask for passwords."]
 ]},

{id:"f8",track:"found",title:"Closing the call: summary, survey and next steps",level:"basic",account:"All accounts",mins:10,
 teach:[
  ["The close is where calls are won or lost","Customers remember the end. A rushed or missing close costs QA points and survey scores even if the fix was perfect."],
  ["Summarize in three parts","What we found, what we did, what happens next. “Today we found a loose cable, tightened it, and your speed is 480 Mbps. Nothing else is needed. If it drops again, call us and mention ticket 55102.”"],
  ["Check for understanding","Ask “Does that make sense?” or “Is there anything I explained that you’d like me to repeat?” Customers rarely admit confusion unless you invite it."],
  ["Ask once: anything else?","“Is there anything else I can help you with today?” Wait for the answer. If they have another issue, handle it, then close again."],
  ["Survey and branding","If your account uses a survey, mention it as policy says: “You may get a short survey about today’s call. I’d appreciate your feedback.” Do not beg for scores or hint at a number. End with the brand: “Thank you for choosing Northwave Fiber. Have a great day.”"],
  ["Let the customer hang up first","Wait a beat for the customer to end the call. Then do your notes right away while the details are fresh."]
 ],
 steps:{h:"Closing checklist",items:[
  ["Recap","Today we found…, we did…, and next…"],
  ["Reference","Your ticket number is 55102 if you need to call back."],
  ["Understanding","Does that all make sense?"],
  ["Anything else","Is there anything else I can help you with today?"],
  ["Brand","Thank you for choosing [Company]. Have a great day."]
 ]},
 script:[
  ["a","So to recap: the cable at the wall was loose, we tightened it, and your speed test shows 480 down. Nothing else is needed on your side.","Three-part summary."],
  ["c","Great, thank you."],
  ["a","If it drops again, call us and mention ticket 55102 so we can pick up where we left off. Is there anything else I can help you with today?","Reference number plus one ask."],
  ["c","No, that’s it."],
  ["a","Thank you for choosing Northwave Fiber, Maria. Have a great evening.","Name and brand."]
 ],
 qa:["Summary of cause, action and next step","Reference or ticket number given","Understanding checked","Branded close, customer allowed to end the call"],
 quiz:[
  ["Which is the best summary?",["All done.","We found a loose cable, tightened it, and your speed is back. Nothing more needed.","Okay, bye."],1,"State the cause, the action and the next step."],
  ["How should you handle the survey?",["Ask for a 10","Mention it as policy says without pressuring","Never mention it"],1,"Follow policy and never coach the score."],
  ["After the call ends, you should:",["Take the next call immediately","Write your notes while details are fresh","Talk with a coworker"],1,"Notes right away."]
 ]},

/* ---------------- WEEK 2 ---------------- */
{id:"f9",track:"found",title:"Call control: steering a talkative or confused caller",level:"intermediate",account:"Brightdesk IT",mins:14,sim:"sim-f2",
 teach:[
  ["Control is not rudeness","Call control means keeping the call moving toward a resolution while the customer feels heard. It protects handle time and the next customer in the queue."],
  ["Acknowledge, then redirect","“I can hear this has been a long week, and I want to get your printer working. May I ask you a quick question to get us there?” Acknowledge first, then steer with a question."],
  ["Use summarizing to interrupt politely","If the caller keeps going, wait for a breath and summarize: “Let me make sure I have this right…” Summaries are a polite interruption because they show you were listening."],
  ["Use closed questions to stop wandering","Open questions invite stories. When the story has gone off track, switch to closed questions: “Is the printer on a USB cable or Wi-Fi?”"],
  ["Confused callers need smaller steps","Slow down, use simple words, give one action at a time, and confirm each result. Offer to stay on the line while they do it."],
  ["Time and transparency","If a task will take a while, tell the customer: “This will take about ten minutes. I’ll stay with you.” People forgive length when they know what to expect."]
 ],
 steps:{h:"Redirect without sounding rude",items:[
  ["Wait","Let them finish the sentence."],
  ["Acknowledge","I can tell this has been frustrating."],
  ["Summarize","So the printer stopped working after the update."],
  ["Redirect","To fix that, may I ask which printer model it is?"],
  ["Confirm","Thank you. Let’s try one step now."]
 ]},
 script:[
  ["c","...and then my nephew installed something, and my neighbor said it could be the cloud, and last year the same thing happened with my old laptop..."],
  ["a","I appreciate you telling me all of that, and I want to make sure we fix this today. So the printer stopped working after your nephew installed something. May I ask, what is the make and model on the front of the printer?","Summarizes, then a closed question."],
  ["c","Oh, it’s a HP something."],
  ["a","That’s helpful. Can you read me the numbers and letters on the front, just after HP?","Smaller step, one action."]
 ],
 qa:["Customer acknowledged before being redirected","Polite summary used to interrupt","Closed questions used to narrow the topic","Time expectation set for longer tasks"],
 quiz:[
  ["A caller keeps telling long stories. Best move?",["Interrupt loudly","Acknowledge, summarize, then ask a closed question","Let them talk the whole call"],1,"Acknowledge, summarize, redirect."],
  ["Why set a time expectation?",["To end the call faster","Customers tolerate length when they know what to expect","It is required by law"],1,"Transparency reduces frustration."],
  ["With a confused caller, give:",["Five steps at once","One step at a time with confirmation","A link to a manual"],1,"Small steps and confirmation."]
 ]},

{id:"f10",track:"found",title:"Objections, refusals and “I want a supervisor”",level:"intermediate",account:"Cartwell",mins:14,sim:"sim-f3",
 teach:[
  ["What an objection really is","“I don’t want to pay that.” “That policy is stupid.” “Give me a manager.” Behind it is usually a need: fairness, control, speed, or being heard. Find the need first."],
  ["The four-step response","Listen, Empathize, Explain (briefly why), Offer (what you can do). Never stop at “no”; always offer an alternative or next step."],
  ["Explain the why in plain words","“Returns after 30 days can’t be refunded to the card because our payment partner closes the window then. What I can do is a store credit for the full amount.” A short reason sounds fair; reading policy words does not."],
  ["Supervisor requests","Try once to help first, in a respectful way: “I’d like to try to fix this for you. If I can’t, I’ll bring in my supervisor.” If the customer insists a second time, follow your policy. Many centers want you to escalate. Do not argue or take it personally."],
  ["Warm handoff to a supervisor","Brief the supervisor first: who, the issue, what you did, what the customer wants. Tell the customer: “I’m bringing Dana, my supervisor, and I’ve given her the details so you don’t need to repeat anything.”"],
  ["Stay on your side of the line","You can refuse what policy forbids, but you can always apologize for the experience, own the next step and keep your tone kind."]
 ],
 steps:{h:"LEO: Listen, Empathize, Explain, Offer",items:[
  ["Listen","Let them say the whole objection."],
  ["Empathize","I understand why that feels unfair."],
  ["Explain","The window closes at 30 days because of the payment provider."],
  ["Offer","What I can do is issue a store credit now, or send it to our returns team for a review."],
  ["Confirm","Which would you prefer?"]
 ]},
 script:[
  ["c","This is ridiculous. I bought it 35 days ago and you won’t even take it back? Get me your manager."],
  ["a","I can hear how frustrating that is, and I’d like to try to fix this for you first. Our card refunds close at 30 days, so I can’t return it to your card, but I can offer you a full store credit right now. Would that work?","Empathy, brief reason, offer."],
  ["c","No. I want the manager."],
  ["a","Of course. I’m bringing in Dana, my supervisor, and I’ll give her the details so you don’t have to repeat yourself. Please hold for one moment.","Warm handoff, respectful."]
 ],
 qa:["Customer’s objection allowed in full","Brief reason given in plain words","An alternative offered, never a bare “no”","Supervisor handoff warm and briefed"],
 quiz:[
  ["The customer asks for a supervisor right away. What first?",["Refuse","Offer once to try helping, then follow policy if they repeat the request","Hang up"],1,"Try once, then escalate if they insist."],
  ["Which is a better refusal?",["No, that’s our policy.","I can’t refund it to the card, but I can give you a full store credit.","You should have read the terms."],1,"Offer the alternative."],
  ["What makes a handoff warm?",["Briefing the supervisor first so the customer need not repeat","Transferring quickly","Telling them to call back"],0,"Pass the context."]
 ]},

{id:"f11",track:"found",title:"Abusive, threatening and unsafe calls",level:"intermediate",account:"All accounts",mins:12,
 teach:[
  ["You are allowed to protect yourself","Frustration is normal. Verbal abuse, slurs, sexual remarks and threats are not. Every center has a policy; learn it before your first live call."],
  ["Three levels","Level 1: raised voice and swearing about the situation. Stay calm and keep helping. Level 2: personal insults or slurs. Set a boundary and warn. Level 3: threats or harassment. Follow your threat policy at once."],
  ["Boundary language","“I want to help you, and I need us to keep this respectful so I can.” Say it calmly, once. If it continues: “I’m going to end the call if the language continues.” Then follow through."],
  ["Threats and safety","If a caller threatens harm to you or others, or mentions self-harm, do not argue or debate. Follow the safety procedure: alert your supervisor immediately, and for imminent danger the policy often includes contacting emergency services with location information."],
  ["Document everything","Write exactly what was said, the time, the warnings you gave and the action you took. Use the caller’s words in quotes. Notes protect you and the company."],
  ["Look after yourself","Take a short break after a hard call. Tell your supervisor. Debrief with your team lead. It is part of the job to reset."]
 ],
 steps:{h:"Escalation ladder",items:[
  ["Stay calm","Lower your voice, keep your pace even."],
  ["Empathize","I can hear how upset you are."],
  ["Boundary","I want to help you, and I need us to keep this respectful."],
  ["Warning","If the language continues, I’ll need to end the call."],
  ["Act and document","End the call per policy, notify your supervisor, write exact notes."]
 ]},
 script:[
  ["c","You idiots can’t do anything right! Put someone competent on."],
  ["a","I can hear how upset you are, and I want to help you fix this. I need us to keep this respectful so I can do that. Can you tell me what happened?","First boundary, back to the issue."],
  ["c","I told you, you’re useless!"],
  ["a","I’d like to continue helping you. If the language continues I’ll have to end the call. Shall we start with your account number?","Clear warning, offers a way forward."]
 ],
 qa:["Calm tone maintained","Boundary set respectfully and only when needed","Warning given before ending the call","Exact words and actions documented"],
 quiz:[
  ["The caller swears about the situation but is not abusive to you. You:",["End the call","Stay calm and keep helping","Warn him"],1,"Swearing at a situation is not a boundary breach."],
  ["The caller threatens you. You:",["Argue back","Follow the threat policy and notify your supervisor","Ignore it"],1,"Safety first."],
  ["Notes about an abusive call should include:",["Your opinion of him","Exact words, time and your warnings","Nothing"],1,"Factual, with quotes."]
 ]},

{id:"f12",track:"found",title:"Notes that pass QA: good, bad and rewrite",level:"basic",account:"All accounts",mins:12,
 teach:[
  ["Why notes are graded","Notes are the memory of the company. The next agent, L2, engineering and QA all rely on them. Missing or vague notes cost points and cause repeat calls."],
  ["The five parts","ISSUE (what and since when), VERIFIED (how), TROUBLESHOOTING (steps and results), RESULT (fixed or not), NEXT STEP (who and when). Always in that order."],
  ["Abbreviations and style","Short, factual, present-tense. Use approved abbreviations (cust, acct, p/c for power cycle). No opinions, no emotions, no sarcasm. Never store full card numbers, passwords or SSNs in notes."],
  ["Bad vs good","Bad: “Cust called about internet, fixed.” Good: “ISSUE: no internet since 8am, Online light red. VERIFIED: name+last4. TS: coax loose at wall, tightened; p/c modem 60s. RESULT: Online solid, speed 480/22. NEXT: none.”"],
  ["Write while it is fresh","If you wait, you will forget the steps and results. Write as you go on long calls and finish within the wrap-up time."]
 ],
 steps:{h:"Rewrite this bad note",items:[
  ["Bad","Customer called, mad about bill, I explained and fixed it."],
  ["ISSUE","Cust disputes $40 increase on Nov bill, promo credit ended Oct 31."],
  ["VERIFIED","Name + last 4 of acct."],
  ["TROUBLESHOOTING","Reviewed bill: promo $40 expired. Explained. Offered loyalty plan $55 for 24 mo."],
  ["RESULT / NEXT","Cust accepted loyalty plan, eff. next cycle. No callback needed."]
 ]},
 script:[
  ["a","Before I let you go, I’m adding a note to your account so anyone you speak to next will see exactly what we did today.","Sets the expectation that notes protect the customer."]
 ],
 qa:["Five-part structure used in order","Facts only, no opinions","No sensitive data stored in the notes","Complete within wrap-up time"],
 quiz:[
  ["Which line does NOT belong in notes?",["Online light solid after p/c","Cust is a jerk","Speed 480/22"],1,"No opinions."],
  ["What is the right order?",["Result, verified, issue","Issue, verified, troubleshooting, result, next step","Next step, issue"],1,"Follow the five-part order."],
  ["Which belongs in notes?",["Full card number","Last four of card only if needed","Customer’s password"],1,"Never store sensitive data. Mask it."]
 ]}
]);
