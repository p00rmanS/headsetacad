/* CSR, weeks 21 and 22: banking, insurance, cancellations, exam */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

/* ---------------- WEEK 21: BANKING ---------------- */
{id:"d14",track:"csr",title:"Bank verification and security: stricter rules, no exceptions",level:"intermediate",account:"Harborline Bank",mins:14,
 teach:[
  ["Higher stakes","A bank account is money. Verification is stricter than telecom or retail, and there are no favors. QA treats skipped verification as an automatic fail."],
  ["Layers","Typical layers: name, date of birth, last four of the account or card, phone on file, a one-time passcode to the contact on file, security question or PIN. Higher-risk requests need more layers."],
  ["Risk-based verification","Looking up a balance needs less than changing an address, adding a payee, sending a wire or resetting online access. Follow the table for each request."],
  ["One-time passcodes","The bank sends a code to the phone or email already on file. The customer reads it to you only through the approved process. Never send a code to a new number, and never ask for a code that logs the customer in online."],
  ["Never ask for","Online banking passwords, full card numbers or PINs. If a customer offers them, stop them: ‘Please don’t share that with me. I never need it.’"],
  ["Voice and device clues","Unusual urgency, a caller who cannot answer basic questions, call-center background noise, many failed attempts. Add layers, or end the process and document it."],
  ["Failed verification","Do not hint. Offer safe alternatives: use the app, visit a branch, or call back with documents. Document the attempt."]
 ],
 steps:{h:"Bank verification flow",items:[
  ["Request type","What are they asking for? Check the risk table."],
  ["Layer 1","Name, date of birth, last four."],
  ["Layer 2","One-time passcode to the contact on file."],
  ["Extra","Additional layer for high-risk requests."],
  ["Document","Method used, outcome, and any concerns."]
 ]},
 script:[
  ["a","Thank you for calling Harborline Bank, this is Jordan. To protect your account, I’ll need to verify you. Could you give me your full name, date of birth and the last four of your account number?","Clear reason."],
  ["c","Sure. Maria Santos, March 3rd, 1985, 4488."],
  ["a","Thank you. Because you’re asking to change your mailing address, I’ll also send a one-time code to the phone number on file. Please read it back when it arrives.","Adds a layer for a higher-risk request."]
 ],
 qa:["Verification layers match request risk","Codes only to contacts on file","Never asks for passwords or PINs","Failed attempts documented without hints"],
 quiz:[
  ["Changing an address needs:",["More layers than a balance check","The same as a balance check","No verification"],0,"Higher risk, more layers."],
  ["A one-time code is sent to:",["The contact already on file","Any new number","A relative"],0,"Never to a new contact."],
  ["A customer offers their password. You:",["Stop them","Write it down","Use it"],0,"You never need it."]
 ]},

{id:"d15",track:"csr",title:"Card lock, replacement, travel notices and lost or stolen cards",level:"basic",account:"Harborline Bank",mins:12,
 teach:[
  ["Act fast, then verify the details","For a lost or stolen card, speed protects the customer. A card lock is a safe action and can often be done before full verification, per policy. Follow your table."],
  ["Lock vs close","A lock is temporary and reversible (the card may have been misplaced). Closing a card is permanent and ships a new number. Ask when and where they last used it. If unsure, lock first."],
  ["Replacement","Confirm the shipping address on file, the delivery time and whether an expedited option exists. Warn that recurring payments may need the new number."],
  ["Recent transactions","Review recent activity with the verified customer. Identify charges they do not recognize and start a dispute for those (see d16)."],
  ["Travel notices","A notice tells the bank where the customer will be so travel purchases are not blocked. Note dates, destinations and whether the card works abroad."],
  ["Digital wallets and virtual cards","Remove the old card from phones and apps. Customers can use a virtual card number while waiting for the physical card."],
  ["Reassure","Explain what is protected: ‘You won’t be responsible for transactions you didn’t make, and we’ll investigate anything suspicious.’ Use the policy wording."]
 ],
 steps:{h:"Lost or stolen card",items:[
  ["Lock","Lock the card immediately per policy."],
  ["Verify","Complete verification for further actions."],
  ["Review","Check recent transactions together."],
  ["Replace","Confirm address, timing, and what changes."],
  ["Update","Remove from wallets; plan for recurring payments."]
 ]},
 script:[
  ["c","I can’t find my debit card. I think I lost it at a restaurant."],
  ["a","I’m sorry to hear that. Let’s protect your account right away. I’m placing a lock on the card now so nobody can use it. Then I’ll verify you and we’ll review your recent activity together.","Acts first, explains."]
 ],
 qa:["Card locked promptly per policy","Verification completed before account changes","Recent transactions reviewed","Replacement details confirmed"],
 quiz:[
  ["Unsure if a card is lost or stolen:",["Lock it first","Do nothing","Close it permanently without asking"],0,"A lock is reversible."],
  ["Replacement may require:",["Updating recurring payments","A new account","A new bank"],0,"Numbers change."],
  ["A travel notice helps:",["Prevent blocked purchases abroad","Raise fees","Lock the card"],0,"Let the bank know."]
 ]},

{id:"d16",track:"csr",title:"Disputes, fraud claims and timelines (general US rules)",level:"advanced",account:"Harborline Bank",mins:16,
 teach:[
  ["Dispute or fraud?","Fraud: the customer did not make or authorize the charge. Dispute: the customer made the purchase but has a problem (not delivered, wrong amount, duplicate, cancelled subscription). The process and timelines differ."],
  ["Customer protections in general","In the US, rules limit what consumers can lose from unauthorized card use, and reporting quickly matters. Debit card protections depend on how fast the loss is reported. Credit card disputes have a reporting window after the statement date. Rules and bank policies vary: quote only what your policy says."],
  ["What to collect","Date, amount and merchant for each charge, what the customer did and did not authorize, whether the card was in their possession, and any contact with the merchant."],
  ["Provisional credit","Banks may give a temporary credit while they investigate. Explain the timeline and what happens if the claim is denied. Use the policy language."],
  ["Merchant first, when appropriate","For disputes (not fraud), customers may be asked to contact the merchant first. Explain why and give them a date to return."],
  ["New card, new number","If card data is compromised, replace the card. Mention updating subscriptions."],
  ["Honest outcomes","Never promise the result. ‘We’ll investigate and you’ll get a decision by [date]’ is accurate. ‘You’ll definitely get the money back’ is not."],
  ["Document precisely","Each disputed item, the reason code, what was told to the customer and the deadline."]
 ],
 steps:{h:"Fraud or dispute call",items:[
  ["Classify","Unauthorized (fraud) or a problem with a purchase (dispute)?"],
  ["Protect","Lock or replace the card if needed."],
  ["Collect","Date, amount, merchant, authorization facts."],
  ["File","Open the claim with the right reason code."],
  ["Explain","Timeline, provisional credit rules and next steps."]
 ]},
 script:[
  ["c","There’s a $240 charge from a store I’ve never been to."],
  ["a","I’m sorry, that’s alarming. Let’s sort it out. Do you still have your card with you?","Empathy, a key question."],
  ["c","Yes, it’s in my wallet."],
  ["a","Thank you. Since the card is with you, the number may have been compromised. I’ll lock this card, send a new one, and open a fraud claim for the $240. I’ll explain how the investigation works and when you’ll hear back.","Protects, files, explains."]
 ],
 qa:["Fraud and dispute distinguished","Card protected quickly","Facts collected and documented","No outcome promised, timeline stated"],
 quiz:[
  ["A purchase the customer made but never received is a:",["Dispute","Fraud","Plan change"],0,"A merchant problem."],
  ["You may promise:",["An investigation and a decision date","A guaranteed refund","Nothing"],0,"Be accurate."],
  ["Compromised card data calls for:",["A new card number","A new phone","Waiting"],0,"Replace the card."]
 ]},

{id:"d17",track:"csr",title:"Scams and elder financial exploitation: spot it, pause it, report it",level:"advanced",account:"Harborline Bank",mins:16,sim:"sim-c7",
 teach:[
  ["Why this matters","Older customers and other vulnerable people are targeted by scams that drain life savings. Bank staff are often the last line of defense."],
  ["Common scams","Fake tech support, romance scams, grandparent scams (‘your grandson is in jail’), lottery or prize, IRS or government impersonation, investment and crypto scams, and gift card demands. A scammer’s hallmark is urgency, secrecy and an unusual payment method."],
  ["Red flags on the call","The customer is coached on the phone, wants to wire money urgently, to a person they have not met, is told not to tell anyone, or wants to withdraw a large amount in cash or gift cards. The story does not match the account’s history."],
  ["Ask gentle questions","‘Who are you sending this to? How did you meet them? Has anyone asked you to keep this a secret?’ Ask with respect, never with accusation."],
  ["Slow it down","Pause the transaction per policy, offer to wait while the customer checks with a trusted family member, and explain that real government and companies do not demand gift cards or wires."],
  ["Escalate and report","Send the case to the fraud or elder-abuse team per policy. Many banks are required or encouraged to file reports. Document exact words and amounts."],
  ["Tone matters","Victims are often embarrassed. Be warm and respectful. Do not lecture. Let the customer keep their dignity."]
 ],
 steps:{h:"Suspected scam in progress",items:[
  ["Notice","Urgency, secrecy, unusual payment method."],
  ["Ask","Gentle questions about who and why."],
  ["Pause","Hold the transaction per policy; offer time."],
  ["Educate","Real agencies don’t ask for gift cards or wires."],
  ["Escalate","Fraud or elder-abuse team; document everything."]
 ]},
 script:[
  ["c","I need to wire $9,000 today to my grandson. He’s in trouble and told me not to tell anyone."],
  ["a","I can hear how worried you are, and I want to help you. Before I send anything, I’d like to ask a couple of questions. Have you spoken to your grandson directly, on a number you know is his?","Empathy, a protective question."],
  ["c","No, someone called and said he’s been arrested."],
  ["a","Thank you for telling me. This sounds like a scam that targets grandparents, and real agencies don’t ask for money by wire. Let’s hold this wire for now, and I’d like to help you call your grandson on his own number, together.","Names the scam kindly, pauses the transaction."]
 ],
 qa:["Warm tone, no accusation","Transaction paused per policy","Fraud team engaged","Exact words and amounts documented"],
 quiz:[
  ["A hallmark of a scam is:",["Urgency and secrecy","A long delay","A written contract"],0,"Pressure and secrecy."],
  ["When you suspect a scam you:",["Pause per policy and escalate","Process it quickly","Lecture the customer"],0,"Slow it down."],
  ["Tone with a victim should be:",["Respectful and warm","Scolding","Cold"],0,"Protect dignity."]
 ]},

{id:"d18",track:"csr",title:"Account access, fees and overdrafts",level:"intermediate",account:"Harborline Bank",mins:14,sim:"sim-c8",
 teach:[
  ["Locked out of online banking","After verification, help with reset through the approved process. Never reset by asking for the old password. Explain what the customer will receive and where."],
  ["Enrollment and new devices","Walk the customer through the app steps using the right screens. New devices may need extra verification. Never log in for them."],
  ["Overdraft and fees","An overdraft occurs when a transaction exceeds the balance. Fees depend on the account and the customer’s settings. Explain the order of posting if it matters: some banks process large items first."],
  ["Fee reversals","Many banks allow a courtesy waiver for a first-time or clearly one-off event. Know the criteria and your authority. Offer settings that reduce future fees: balance alerts, low balance notifications, overdraft protection from savings."],
  ["Pending vs posted","Pending transactions reduce the available balance but are not final. Explain the difference to customers who see a lower balance than expected."],
  ["Wires and ACH","Wires are fast and hard to reverse. ACH takes days and has limits. Always verify the details and warn the customer about the risk of sending to the wrong place."],
  ["Teach, don’t just fix","Show the customer how to set alerts and read their statement so they call less often."]
 ],
 steps:{h:"Overdraft fee complaint",items:[
  ["Verify","Complete verification."],
  ["Explain","What happened, in what order, and which fee applies."],
  ["Remedy","Waive within authority if criteria are met."],
  ["Prevent","Set alerts or overdraft protection."],
  ["Document","Reason, amount, authority."]
 ]},
 script:[
  ["c","I was charged a $35 overdraft fee and I had money in my account!"],
  ["a","I understand why that feels wrong, and I’ll look at exactly what happened. Your available balance was $22 when the $48 payment posted, because the earlier grocery charge had been pending. The $35 fee is correct under your account terms, but since this is your first overdraft in a year I can refund it as a courtesy. I’d also like to set up a low-balance alert so this doesn’t catch you again.","Explains, remedies, prevents."]
 ],
 qa:["Pending vs posted explained","Courtesy waiver within authority","Prevention offered","Documentation complete"],
 quiz:[
  ["Pending charges:",["Reduce the available balance","Are final","Don’t count"],0,"They reduce available balance."],
  ["Wires are:",["Fast and hard to reverse","Slow and reversible","Free"],0,"Warn the customer."],
  ["After fixing a fee you also:",["Offer alerts to prevent repeats","Close the account","Ignore"],0,"Teach and prevent."]
 ]},

/* ---------------- WEEK 22: INSURANCE ---------------- */
{id:"d19",track:"csr",title:"Insurance basics: deductible, copay, coinsurance and networks",level:"intermediate",account:"Meridian Health Plan",mins:16,sim:"sim-c9",
 teach:[
  ["The vocabulary customers confuse","Premium: the monthly price. Deductible: what the member pays before the plan pays most costs. Copay: a flat fee for a service. Coinsurance: a percentage the member pays after the deductible. Out-of-pocket maximum: the cap on what the member pays in a year for covered care."],
  ["Worked example","Deductible $1,000, coinsurance 20 percent, bill $3,000. The member pays the first $1,000, then 20 percent of the remaining $2,000, which is $400. Total member cost is $1,400. The plan pays $1,600."],
  ["Networks","In-network providers have agreed prices with the plan. Out-of-network providers may cost more or not be covered at all. Always check the provider’s status before explaining costs."],
  ["Plan types","HMO, PPO, EPO and POS differ in referrals and out-of-network coverage. Check the member’s plan; do not describe them by habit."],
  ["Explain with numbers","Use the member’s actual figures from the account: deductible met so far, copay, coinsurance. Avoid reading policy language."],
  ["Privacy","Health information is protected. Verify identity and authorization before discussing claims or benefits. See f14."],
  ["Say what you know and don’t","If a coverage question needs a clinical or legal decision, say so and explain who decides and when the member will hear."]
 ],
 steps:{h:"Explain a bill with the member’s numbers",items:[
  ["Verify","Verify the member and check authorization."],
  ["Find","Deductible met so far, coinsurance rate, copay."],
  ["Calculate","Show the arithmetic in plain steps."],
  ["Compare","Compare to the bill or EOB."],
  ["Confirm","Check the member understands; offer a written summary."]
 ]},
 script:[
  ["c","I got a bill for $1,400 after my surgery. I thought insurance covered it."],
  ["a","That’s a lot of money, and I understand why you’re confused. Let me show you how it works with your numbers. Your deductible is $1,000 and you had met none of it. After that, you pay 20 percent. So the total bill was $3,000. You pay the first $1,000 and 20 percent of the remaining $2,000, which is $400, so $1,400. The plan paid $1,600.","Uses the member’s numbers."]
 ],
 qa:["Member and authorization verified","Math shown in plain steps","In-network status checked","Written summary offered"],
 quiz:[
  ["Deductible $1,000, coinsurance 20%, bill $3,000. Member pays:",["$1,400","$600","$3,000"],0,"$1,000 plus 20% of $2,000."],
  ["Copay is:",["A flat fee for a service","A percentage","The premium"],0,"A flat fee."],
  ["An out-of-network provider may:",["Cost more or not be covered","Always be free","Not exist"],0,"Check network status."]
 ]},

{id:"d20",track:"csr",title:"Claims status, explanation of benefits and denials",level:"advanced",account:"Meridian Health Plan",mins:16,
 teach:[
  ["The EOB is not a bill","An explanation of benefits shows what the provider charged, what the plan allowed, what the plan paid and what the member owes. It is a statement, not a request for payment."],
  ["Claim statuses","Received, in review, pended (waiting for information), approved, partially approved, denied. Each needs a different explanation and next step."],
  ["Common denial reasons","No prior authorization, service not covered, provider out of network, missing information, duplicate claim, exceeded benefit limits, coding errors. Many denials can be fixed by the provider resubmitting."],
  ["Read the reason codes","Use the denial code and the plain-language reason on the account. Translate it: ‘The claim was denied because the provider didn’t send the diagnosis code. They can fix and resubmit.’"],
  ["What you can do","Explain the denial, tell the member their options (provider resubmission, appeal, payment plan with the provider), offer to open an inquiry, and give a timeline."],
  ["What you cannot do","Overturn a medical decision, promise approval or give medical advice. Say who can: the claims review team, the medical director, or the appeals process."],
  ["Empathy matters","Members may be in pain, worried or facing bills. Acknowledge the situation first, then give facts."]
 ],
 steps:{h:"Claim denied call",items:[
  ["Acknowledge","Recognize the stress and impact."],
  ["Read","Find the status, denial reason and date."],
  ["Explain","Plain words, one reason at a time."],
  ["Options","Resubmission, appeal, provider billing office."],
  ["Next step","Open an inquiry or appeal; give a timeline."]
 ]},
 script:[
  ["c","My MRI claim was denied! I can’t afford this."],
  ["a","I’m sorry, that must be stressful. Let me look at it right now. The claim was denied because it needed prior authorization and none was on file. There are two ways to fix this: your doctor’s office can request an authorization after the fact, or you can file an appeal. I can open an appeal today and I’ll explain what you need to send.","Empathy, reason, options."]
 ],
 qa:["EOB explained as a statement, not a bill","Denial reason translated into plain words","Options and timelines given","No promises about outcomes"],
 quiz:[
  ["An EOB is:",["A statement of benefits, not a bill","A request for payment","A prescription"],0,"It explains the claim."],
  ["A denial for missing information can be:",["Fixed by resubmission","Never fixed","Always final"],0,"Provider resubmits."],
  ["You cannot:",["Promise approval","Explain denials","Open an inquiry"],0,"Never promise outcomes."]
 ]},

{id:"d21",track:"csr",title:"Appeals and grievances: how to guide a member",level:"advanced",account:"Meridian Health Plan",mins:14,
 teach:[
  ["Appeal vs grievance","An appeal asks the plan to reconsider a coverage or payment decision. A grievance is a complaint about service or quality, such as rudeness or long waits. They follow different processes."],
  ["Deadlines","Appeals usually have a time limit (often 180 days from the denial). Tell the member the deadline from the denial letter and the plan documents. Missing it can end their rights."],
  ["What an appeal needs","The member’s details, the claim and denial information, why they disagree, and supporting documents such as the doctor’s letter. Help them gather it."],
  ["Expedited appeals","If waiting could seriously harm health, an expedited review may be available with a shorter timeline. Follow the procedure and involve a clinician as required."],
  ["Levels","Internal review first, then, in many cases, an independent external review. Explain what comes next, not just the first step."],
  ["Keep promises","Give a reference number and a date. Follow up when you said you would."],
  ["Stay neutral","Do not advise whether the member will win. Say you can explain the process and the plan will decide."]
 ],
 steps:{h:"Guide an appeal",items:[
  ["Identify","Appeal or grievance? Which decision?"],
  ["Deadline","Find the deadline in the denial letter."],
  ["Documents","Doctor’s letter, bills, denial notice."],
  ["Submit","Open the appeal and give a reference number."],
  ["Follow up","Tell the member when and how they will hear."]
 ]},
 script:[
  ["c","I want to fight this denial. How do I do that?"],
  ["a","I can help you with that. You can file an appeal, and the deadline is 180 days from the denial date on your letter, so you have plenty of time. I recommend sending a letter from your doctor explaining why the MRI was needed. I’ll open the appeal now and give you a reference number.","Process, deadline, supporting documents."]
 ],
 qa:["Appeal and grievance distinguished","Deadline stated from documents","Supporting documents explained","Reference number and follow-up given"],
 quiz:[
  ["An appeal is:",["A request to reconsider a decision","A complaint about rudeness","A bill"],0,"Reconsideration."],
  ["Deadlines matter because:",["Missing them can end appeal rights","They are decorative","They are optional"],0,"Be precise."],
  ["You should not:",["Predict the outcome","Explain the process","Give a reference"],0,"Stay neutral."]
 ]},

{id:"d22",track:"csr",title:"Prior authorizations and referrals",level:"advanced",account:"Meridian Health Plan",mins:14,sim:"sim-c10",
 teach:[
  ["What prior authorization is","For certain services, the plan must approve before the service happens. It checks medical necessity and coverage. Without it the claim may be denied."],
  ["Who requests it","Usually the provider’s office requests authorization, not the member. The member can check status and nudge the provider."],
  ["Check status","Look up whether the service needs authorization, whether one is on file, its dates and approved quantity."],
  ["Timelines","Standard requests can take several days. Urgent requests have shorter timelines. Tell the member the real timeline."],
  ["Referrals","Some plans require a referral from a primary care provider before seeing a specialist. Check the plan type and the status."],
  ["When denied","Explain the reason, the appeal right and the option of a peer-to-peer review between the doctors. Do not promise approval."],
  ["Protect the member","Encourage the member to confirm authorization before scheduling an expensive procedure. This prevents surprise bills."]
 ],
 steps:{h:"Authorization check",items:[
  ["Service","Which procedure or medication?"],
  ["Required?","Does it need prior authorization or a referral?"],
  ["Status","On file, pending, approved, denied."],
  ["Next step","Who submits, who follows up, expected timeline."],
  ["Warn","Confirm before scheduling to avoid surprise bills."]
 ]},
 script:[
  ["c","My doctor wants me to get a knee MRI next week. Do I need anything from you?"],
  ["a","Good question to ask before scheduling. For your plan, a knee MRI needs prior authorization. Your doctor’s office usually submits it. I don’t see a request yet. I’d suggest asking them to submit it today, since standard review can take about five business days. I can check again with you on Monday.","Specific, honest timeline."]
 ],
 qa:["Authorization requirement checked","Honest timeline given","Member warned about surprise bills","Follow-up date set"],
 quiz:[
  ["Prior authorization is requested by:",["Usually the provider’s office","The member always","Nobody"],0,"The provider requests it."],
  ["Without it, a claim may be:",["Denied","Paid twice","Waived"],0,"Check before scheduling."],
  ["After a denial, an option is:",["A peer-to-peer review","Ignoring it","A new plan"],0,"Doctors may discuss it."]
 ]},

{id:"d23",track:"csr",title:"Cancellations done right: save when it helps, honor when it doesn’t",level:"intermediate",account:"All accounts",mins:14,
 teach:[
  ["Find the real reason","‘It’s too expensive’, ‘I’m moving’, ‘the service was bad’, ‘I don’t use it’. Each needs a different response. Ask one open question and listen."],
  ["Offer help that fits","Price: a better plan or a discount. Service: fix the problem and offer a credit. Not using it: pause or downgrade. Moving: transfer. Offer once, clearly. See also d5."],
  ["Know the limits","Do not hide the cancel option, delay it, argue, or invent fees. Some jurisdictions and companies require you to honor a clear cancellation request promptly."],
  ["Say what happens next","Last day of service, final bill, refunds, equipment return and how to restart later. Many cancellations become complaints because the customer was surprised later."],
  ["Keep the door open","Thank them. ‘We’re sorry to see you go. If you want to come back, the easiest way is…’."],
  ["Document the reason","Reason codes help the company improve. Be accurate."],
  ["Respect the answer","A respectful honor is better than a bitter save. The customer may return."]
 ],
 steps:{h:"Cancellation call",items:[
  ["Ask","What’s prompting the cancellation?"],
  ["Offer","One fitting solution, with details."],
  ["Honor","If they still want to cancel, do it without pressure."],
  ["Explain","Last day, final bill, refunds, equipment."],
  ["Close","Thank them and note the reason."]
 ]},
 script:[
  ["c","I want to cancel. It’s just too expensive."],
  ["a","I understand, and thank you for telling me. Before I cancel, I’d like to see if I can lower your cost. I can move you to the 200-megabit plan at $45, which would still handle your household. Would you like that, or would you prefer to go ahead with the cancellation?","One offer, an easy way out."],
  ["c","Go ahead and cancel."],
  ["a","Of course. I’ll cancel effective the 30th. You’ll get a final bill for the partial month, and please return the gateway using the prepaid box I’ll email you. Thank you for being a customer.","Honors the request, clear next steps."]
 ],
 qa:["Reason asked and noted","One fitting offer, no pressure","Cancellation honored promptly","Next steps and thanks given"],
 quiz:[
  ["A cancellation request should be:",["Honored clearly after one offer","Delayed with many offers","Ignored"],0,"Be respectful."],
  ["Tell the customer:",["Last day, final bill and equipment steps","Nothing","A joke"],0,"Avoid surprises."],
  ["The reason code should be:",["Accurate","Always ‘price’","Blank"],0,"Be honest."]
 ]},

{id:"d24",track:"csr",title:"CSR exam: mixed review",level:"advanced",account:"All accounts",mins:30,
 teach:[
  ["How this exam works","Answer without looking back. Pass is 80 percent, then complete at least four CSR practice calls at 85 percent or better across at least three accounts. Missed items return as flashcards."],
  ["What it covers","Reading bills, payments, plan changes, credits, order status, returns, damaged items, product offers, bank verification, card lock, disputes and fraud, scams, overdrafts, insurance terms, claims, appeals, authorizations and cancellations."],
  ["If you pass","You are ready for the Spanish line final stage and the readiness phase."],
  ["If you miss","Study the lessons you missed, redo two practice calls on different accounts and retake after three days."]
 ],
 steps:{h:"Ready for readiness weeks when",items:[
  ["Exam","Score 80 percent or better."],
  ["Calls","Four CSR calls at 85 percent or better across three accounts."],
  ["Policy","Explain three policies in your own words."],
  ["Math","Do the proration and the deductible math without a calculator."],
  ["Tone","Deliver an apology plus action line from memory."]
 ]},
 script:[
  ["a","Thank you for calling Harborline Bank, this is Jordan. To protect your account, can you please confirm your full name, date of birth and the last four of your account number?","Branded greeting, verification."]
 ],
 qa:["Verification risk-matched","Plain-language policy explanations","Promises within authority","Compliant, respectful tone"],
 quiz:[
  ["Prorated charge: $90 plan for 10 days of a 30-day cycle:",["$30","$90","$10"],0,"10/30 of $90."],
  ["Deductible $500, coinsurance 20%, bill $2,500. Member pays:",["$900","$500","$2,500"],0,"$500 plus 20% of $2,000."],
  ["A card is lost. First:",["Lock it","Close the account","Wait"],0,"Lock per policy."],
  ["A purchase never delivered is a:",["Dispute","Fraud","Upgrade"],0,"Merchant problem."],
  ["EOB means:",["Explanation of benefits","Extra order bill","Email on behalf"],0,"A statement."],
  ["A caller wires $9,000 under urgency and secrecy. You:",["Pause per policy and escalate","Process it","Lecture"],0,"Possible scam."],
  ["An appeal deadline comes from:",["The denial letter and plan documents","Memory","A guess"],0,"Be precise."],
  ["Cancel request. You:",["Offer once, then honor","Delay","Hide the option"],0,"Respect the request."],
  ["Credit above your limit:",["Supervisor approval","Apply anyway","Refuse silently"],0,"Stay within authority."],
  ["Card numbers in notes:",["Never","If the customer allows","Always"],0,"Use secure tools."],
  ["A refund usually goes to:",["The original payment method","A new card","Cash"],0,"Original method."],
  ["Prior authorization is usually requested by:",["The provider","The member","The bank"],0,"The provider."]
 ]}
]);
