/* CSR casebooks: telecom, retail, bank, insurance, difficult customers, policy */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"d25",track:"csr",title:"Casebook 1: Telecom billing and account situations",level:"basic",account:"Northwave Fiber",mins:20,
 teach:[
  S("Bill jumped by $30","Customer was told $65 and now pays $95.","Promo ended, a fee was added, or a one-time charge such as install or equipment.","1) Open the bill and compare two months. 2) Identify each line: plan, taxes, fees, promos. 3) Explain in plain words. 4) Offer options: a new promo, a cheaper plan, or a courtesy credit if policy allows.","Let me walk you through the change line by line. I see your promo ended last month, which accounts for the $30.","Fee was added in error: adjustment per policy."),
  S("Charged twice this month","Two payments of the same amount.","Autopay plus a manual payment, or a duplicate posting.","1) Check payment history and dates. 2) Confirm the bank shows both. 3) If duplicate, request a refund or apply as credit. 4) Give a timeline.","I can see two payments on the same day. I’ll refund the extra one, and it should reach your account in 5 to 7 business days.","Duplicate from a processor error: billing team."),
  S("Can’t pay this month","Customer lost hours at work.","Cash flow.","1) Show empathy. 2) Offer a payment arrangement within policy. 3) Explain the late-fee and service risks. 4) Set a reminder.","We have options. Let’s set up a plan that fits your budget.","Hardship program or supervisor approval."),
  S("Moving next week","Customer wants to transfer service.","Move request.","1) Check coverage at the new address. 2) Set install date. 3) Handle equipment: keep, return or swap. 4) Final bill prorated.","Let me check that your new address is covered, then schedule it so you don’t lose service.","Not covered: cancel instructions and equipment return."),
  S("Autopay failed","Card expired.","Update payment method.","1) Verify the customer. 2) Take the new card using the secure process. 3) Make the payment. 4) Confirm that autopay is back.","Your card on file expired. I can update it now and send a confirmation.",""),
  S("Promo price not applied","Customer says an agent promised $50.","Offer not entered or a mismatch.","1) Check notes and offer eligibility. 2) If a record exists, honor it. 3) If none, explain and offer what is available. 4) Never accuse the agent or the customer.","Let me check the notes from that call.","Documented promise: supervisor to honor."),
  S("Wants a credit for an outage","Internet was down two days.","Service outage.","1) Confirm the outage in the system. 2) Follow the outage credit rule. 3) Apply the credit and note it. 4) Tell them when it posts.","I’m sorry about the outage. I can see it was down for two days, so I’m applying a credit.","")
 ],
 steps:{h:"Billing call flow",items:[["Verify","Name plus a second identifier."],["Open the bill","Compare months."],["Explain","Line by line, plain words."],["Options","Plan, promo, credit, arrangement."],["Act","Do it while on the call."],["Confirm","Summary and timeline."]]},
 script:[["c","My bill is $30 higher and I want to know why."],["a","I understand why that’s upsetting. Let me look at your bill and compare it with last month so I can show you exactly what changed.","Empathy and a plan."],["c","Fine."],["a","Your promotional discount ended, which adds $30. I can check whether you qualify for another offer.","Plain answer plus option."]],
 qa:["Verified before discussing","Explained each charge","Offered options within policy","Confirmed timelines"],
 quiz:[
  ["A bill jumps $30. First step:",["Waive it","Compare two months and explain","Transfer"],1,"Find the reason."],
  ["Payment problems call for:",["Threats","A payment arrangement","Cancellation"],1,"Offer options."],
  ["A customer says an agent promised a price. You:",["Say they lie","Check notes and policy","Ignore"],1,"Verify and decide."]
 ]},

{id:"d26",track:"csr",title:"Casebook 2: Retail orders, returns and delivery",level:"basic",account:"Meridian Retail",mins:20,
 teach:[
  S("Order says delivered, nothing arrived","Customer checked porch, mailbox and neighbors.","Carrier mis-scan or porch theft.","1) Confirm the address. 2) Ask them to check around and with neighbors. 3) Open a carrier trace if policy requires waiting. 4) Replace or refund as policy allows.","I’m sorry. Let’s find it, and if we can’t, I’ll make it right.","Several claims from the same address: fraud team."),
  S("Wrong item shipped","Customer ordered blue, got red.","Picking error.","1) Verify the order. 2) Apologize. 3) Offer to ship the right one first or refund. 4) Provide a prepaid return label.","That’s our mistake. I’ll send the correct item now and email a free return label.",""),
  S("Return outside the window","Customer is 5 days late.","Policy 30 days.","1) Explain the policy kindly. 2) Offer alternatives: exchange, store credit if allowed. 3) Ask a supervisor if the policy permits an exception.","I can’t refund past 30 days, but I can ask a supervisor whether store credit is possible.","Supervisor approves exceptions."),
  S("Item arrived damaged","Cracked in the box.","Shipping damage.","1) Ask for photos. 2) Apologize. 3) Replacement or refund. 4) Note the claim.","I’m so sorry. Please send a photo and I’ll set a replacement right away.",""),
  S("Order delayed","Promised Friday, now next week.","Stock or carrier delay.","1) Check the status. 2) Give an honest new date. 3) Offer to cancel or expedite. 4) Do not promise what you cannot control.","The new estimate is Tuesday. If that’s too late, I can cancel with a full refund.",""),
  S("Coupon didn’t apply","Customer expected 20 percent off.","Expired code, excluded item, or a minimum not met.","1) Read the terms. 2) Explain the reason. 3) Offer an eligible alternative.","That code excludes sale items. I can apply our current 10 percent offer.","Site error: IT ticket."),
  S("Where is my refund?","Returned two weeks ago.","Refund processing time.","1) Confirm the return was received. 2) State the timeline. 3) Show the date it was issued. 4) Explain the bank’s timing.","We received your return on the 3rd and issued the refund the next day. Banks can take 5 to 7 business days.","Not received after the time frame: escalate to billing.")
 ],
 steps:{h:"Order call flow",items:[["Find the order","Order number or email."],["Status","Tracking and dates."],["Policy","What it allows."],["Options","Replace, refund, credit."],["Act","Complete it live."],["Confirm","Summary by email."]]},
 script:[["c","My order says delivered but I don’t have it."],["a","I’m sorry; that’s frustrating. Let’s sort it out. Can you check around the door and with neighbors while I look at the tracking?","Helps while investigating."],["c","Not there."],["a","Thank you. I’ll open a trace and tell you the next steps and the date you’ll hear back.","Plan and date."]],
 qa:["Apology plus ownership","Policy explained kindly","Honest dates","Documented claim"],
 quiz:[
  ["Order late. You:",["Promise tomorrow","Give the real estimate and options","Blame the carrier"],1,"Be honest."],
  ["A return outside the window. You:",["Refuse and hang up","Explain, then offer alternatives","Waive it always"],1,"Explain and offer options."],
  ["Damaged item needs:",["Photos","Nothing","A supervisor"],0,"Evidence."]
 ]},

{id:"d27",track:"csr",title:"Casebook 3: Banking, cards and fraud",level:"mid",account:"Bright Bank",mins:22,
 teach:[
  S("Card lost abroad","Customer is traveling and panicking.","Lost or stolen card.","1) Verify strictly. 2) Lock the card. 3) Review recent charges. 4) Order a replacement and expedite abroad if offered. 5) Mention travel notes.","I’m locking the card right now so no one else can use it.",""),
  S("Unrecognized $240 charge","Customer didn’t make it.","Fraud or a merchant name that is unfamiliar.","1) Verify. 2) Review the details with the customer. 3) Open a dispute. 4) Replace the card. 5) Explain timeline and provisional credit rules without promising the outcome.","We’ll investigate and give you a decision within the required time.",""),
  S("Caller wants to send $5,000 to a “prize” company","Elderly customer, urgent tone.","Scam.","1) Slow down. 2) Ask who contacted them and why. 3) Explain the red flags. 4) Offer to put a hold or follow the elder protection policy. 5) Report.","Before we send this, can I ask you a few questions to be sure you’re protected?","Customer insists: supervisor and fraud team."),
  S("Overdraft fee surprise","Customer was charged $35.","A pending debit created a negative balance.","1) Explain how pending items work. 2) Check eligibility for a courtesy refund. 3) Offer alerts and a buffer.","I can see the debit posted before your deposit. Let me see if we can refund the fee as a courtesy.","Policy allows only one refund."),
  S("Locked out of online banking","Too many tries.","Security lock.","1) Verify. 2) Reset the password. 3) Send the code to the number on file. 4) Never give the code over the phone.","For your security I can only send the code to the number on file.",""),
  S("Caller asks about their spouse’s account","Not a joint owner.","Privacy.","1) Politely decline. 2) Offer to add them as an authorized user with the owner. 3) Explain how.","I can’t discuss another person’s account, but if they call we can set you up.",""),
  S("Dispute a subscription charge","Customer cancelled but still billed.","Merchant error.","1) Ask if they contacted the merchant. 2) Dispute if they did and the merchant refused. 3) Block future charges.","Let’s see what the merchant said and whether we should dispute.","")
 ],
 steps:{h:"Banking call flow",items:[["Verify","Strict, no exceptions."],["Secure","Lock first if there's risk."],["Investigate","Review details."],["Act","Dispute, replace, reset."],["Explain","Timelines and rules."],["Document","Notes and case numbers."]]},
 script:[["c","I got a call from someone saying my account is hacked and I need to move money."],["a","Thank you for calling us. That is a very common scam. Please don’t move any money. Can I ask what number they called from and what they asked for?","Stops the transfer calmly."],["c","They said they were from the bank."],["a","We never ask you to move money to protect it. Let’s check your account and secure it together.","Clear rule."]],
 qa:["Strict verification","Locked before investigating","No PIN or code requested","Scam red flags explained"],
 quiz:[
  ["Caller claims to be from the bank and asks to move money. This is:",["Normal","A scam","A promo"],1,"Banks never ask that."],
  ["Lost card. First:",["Dispute","Lock it","Mail new card"],1,"Lock immediately."],
  ["Spouse not on account asks for details. You:",["Share","Decline and offer authorized user","Hang up"],1,"Privacy."]
 ]},

{id:"d28",track:"csr",title:"Casebook 4: Insurance, claims and appeals",level:"mid",account:"Harbor Health Plan",mins:22,
 teach:[
  S("Claim denied","Member got a letter.","Not covered, no prior authorization, or incorrect coding.","1) Read the reason code. 2) Explain in plain words. 3) Offer a resubmission or an appeal. 4) Give deadlines.","Let’s look at the reason on the letter. Some denials are paperwork issues that can be fixed.","Complex medical necessity: appeals team."),
  S("Surprise bill from an out-of-network provider","Member went to an in-network hospital.","Provider billed separately.","1) Check protections for surprise billing. 2) Ask the member not to pay yet. 3) File a review. 4) Provide timelines.","You may be protected. Please hold off paying while we review.",""),
  S("Deductible not met","Member says they've paid plenty.","Only certain costs count.","1) Show the deductible report. 2) Explain what counts. 3) Estimate remaining.","Your deductible is $1,500 and $900 has been met. Let me show you the claims counted.",""),
  S("Prior authorization needed","MRI ordered.","Plan requires approval.","1) Check requirements. 2) Explain who submits. 3) Provide a status. 4) Explain urgent or expedited review.","Your doctor’s office submits it. I can see whether it’s been received.",""),
  S("Referral to a specialist","Member wants to see a cardiologist.","HMO rules.","1) Check plan type. 2) Explain whether a referral is needed. 3) Find in-network options.","Your plan requires a referral from your primary doctor.",""),
  S("Explanation of Benefits confusion","“This is not a bill”.","EOB.","1) Explain each line: billed, allowed, plan paid, you owe. 2) Direct to the provider bill.","The EOB shows what happened to the claim. It isn’t a bill.",""),
  S("Member wants to appeal","Denied three times.","Member rights.","1) Explain levels: internal then external. 2) Deadlines. 3) How to submit. 4) Offer to note the case.","You have the right to appeal. I’ll explain the steps and the deadline.","Urgent medical need: expedited appeal.")
 ],
 steps:{h:"Insurance call flow",items:[["Verify","Member ID, name, DOB."],["Find the claim","Date, provider, amount."],["Explain","Plain English."],["Options","Resubmit, appeal."],["Rights","Deadlines."],["Document","Reference number."]]},
 script:[["c","My claim was denied and I don’t understand why."],["a","I’m sorry; insurance letters are confusing. I’ll read the reason with you and explain it in plain words.","Empathy and promise to simplify."],["c","It says no prior authorization."],["a","That means the office needed approval before the service. It may be fixable. Let’s see what can be resubmitted.","Interprets and offers a path."]],
 qa:["Plain language","No medical advice","Appeal rights explained","Case number given"],
 quiz:[
  ["An EOB is:",["A bill","A statement of how a claim was processed","A prescription"],1,"EOB."],
  ["Surprise bill. You tell the member to:",["Pay immediately","Hold and let us review","Ignore"],1,"Possible protection."],
  ["You give medical advice:",["Yes","Never","Sometimes"],1,"Not allowed."]
 ]},

{id:"d29",track:"csr",title:"Casebook 5: Difficult customers, one situation at a time",level:"mid",account:"Mixed accounts",mins:22,
 teach:[
  S("Yelling from the first word","Customer starts screaming.","Frustration built up before the call.","1) Let them vent for 20 to 30 seconds. 2) Lower your voice. 3) Use their name. 4) Specific apology. 5) Ask a question that moves to action.","I can hear how upset you are, and you’re right to be. I’m going to fix this with you.",""),
  S("Customer demands a refund you can’t give","Outside policy.","Policy limit.","1) Acknowledge. 2) Explain the reason briefly. 3) Offer what you can. 4) Offer a supervisor.","I can’t refund this, but I can offer a replacement or ask a supervisor to review.",""),
  S("Customer curses at you","Personal insults.","Anger.","1) First warning: respectful boundary. 2) Second: final warning. 3) End the call by policy and document.","I want to help, and I need us to speak respectfully so I can.","Threats or hate speech: end the call and report."),
  S("Customer says “you people are useless”","Insults the company.","General frustration.","1) Do not take it personally. 2) Agree with the feeling, not the insult. 3) Redirect.","I can see why you feel that way based on what happened. Let me do my part to fix it.",""),
  S("Customer keeps repeating the same demand","Going in circles.","Needs a different answer.","1) Summarize what you can and cannot do. 2) Offer a path. 3) Offer a supervisor.","Let me summarize where we are, and what I can do next.",""),
  S("Customer is crying","Emotional call.","Stress.","1) Slow down and soften your voice. 2) Offer time. 3) Offer next steps.","Take your time. I’m here, and we’ll go one step at a time.","Mention of self-harm: follow your safety protocol immediately."),
  S("Customer refuses verification","“I shouldn't have to prove who I am.”","Frustration.","1) Explain the reason in one sentence. 2) Offer alternatives. 3) Hold the line.","It’s to protect you from someone else getting into your account.","")
 ],
 steps:{h:"The de-escalation ladder",items:[["Let them vent","20 to 30 seconds."],["Acknowledge","Specific."],["Own","Say what you will do."],["Reframe","Offer options."],["Boundary","Respectful warning."],["Escalate","Supervisor or end per policy."]]},
 script:[["c","This is ridiculous! I've called four times!"],["a","Four calls is too many, and I’m sorry. I’m going to stay with this until it’s resolved. May I ask what happened on the last call?","Specific acknowledgment and ownership."],["c","They said they'd call back and never did."],["a","That shouldn’t have happened. I’ll fix it and give you a time you can count on.","Concrete commitment."]],
 qa:["Let them vent","Specific apology","Offered options","Followed abuse policy"],
 quiz:[
  ["A customer is yelling. First:",["Hang up","Let them vent briefly","Raise your voice"],1,"Let steam out."],
  ["Customer curses. You:",["Curse back","Set a respectful boundary","Transfer"],1,"Boundary."],
  ["Customer is crying. You:",["Rush","Slow down and soften","Ignore"],1,"Empathy."]
 ]},

{id:"d30",track:"csr",title:"Casebook 6: Cancellations, retention and tough policy conversations",level:"mid",account:"Mixed accounts",mins:20,
 teach:[
  S("Wants to cancel because of price","Too expensive.","Value gap.","1) Ask the reason. 2) Offer a lower plan or promo once. 3) Respect a no.","I can offer a plan for $50. Would you like to hear it?",""),
  S("Wants to cancel after a bad experience","Technician no-show.","Service failure.","1) Apologize specifically. 2) Offer to fix it. 3) Offer a courtesy credit. 4) Respect the decision.","I’m sorry. Would you give us one more chance with a credit? If not, I’ll process the cancellation.",""),
  S("Moving out of area","Cannot take service.","Coverage.","1) Check coverage. 2) If none, cancel cleanly. 3) Equipment return.","I’m sorry we can’t follow you. Let’s cancel on your move date.",""),
  S("Early termination fee","Customer in a contract.","Contract.","1) Verify the term. 2) Explain the fee. 3) Offer waiver rules if any.","Your contract ends in March. The fee is $120 if you cancel today.","Supervisor for exceptions."),
  S("Customer wants to cancel for a deceased relative","Account holder passed away.","Sensitive situation.","1) Express condolences. 2) Ask for the required documents. 3) Explain the steps gently.","I’m so sorry for your loss. I’ll make this as easy as I can.",""),
  S("Customer says “don’t try to keep me”","Firm cancellation.","Decision made.","1) Honor it. 2) No retention pitch.","Understood. I’ll process it now.",""),
  S("Customer wants a supervisor to waive a fee","Fee waiver.","Policy.","1) Try to fix within your authority. 2) If they ask for a supervisor, arrange it. 3) Warm transfer with notes.","Of course. I’ll bring a supervisor in and explain what we've covered.","")
 ],
 steps:{h:"Cancellation flow",items:[["Reason","Ask why."],["Fix","Solve if possible."],["Offer","Once, never pushy."],["Honor","Process the decision."],["Explain","Fees, equipment, dates."],["Confirm","Email summary."]]},
 script:[["c","I want to cancel."],["a","I can help with that. May I ask what’s prompting it, in case it’s something I can fix?","Respectful exploration."],["c","It’s too expensive."],["a","I understand. I have one option that lowers your bill. Would you like to hear it?","One offer, asks permission."]],
 qa:["Asked the reason","One offer only","Honored the decision","Explained fees and equipment"],
 quiz:[
  ["Customer says firm cancel. You:",["Pitch more","Honor it","Argue"],1,"Respect."],
  ["Retention offer is made:",["Three times","Once","Never to anyone"],1,"Once."],
  ["Deceased account holder. You start with:",["Policy","Condolences","Sales"],1,"Empathy."]
 ]}
]);
