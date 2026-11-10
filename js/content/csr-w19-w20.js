/* CSR, weeks 19 and 20: telecom billing and retail */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

/* ---------------- WEEK 19: TELECOM BILLING ---------------- */
{id:"d6",track:"csr",title:"Reading a bill: line items, taxes, fees and proration",level:"basic",account:"Northwave Fiber",mins:14,
 teach:[
  ["Why bills confuse people","Customers see one total and a list of codes. They call when the total changes. If you can read the bill in plain words, most calls end in one explanation."],
  ["The main parts","Previous balance and payments, new charges (monthly plan, equipment rental, add-ons), one-time charges (installation, late fee), credits and discounts, taxes and surcharges, and the amount due and due date."],
  ["Taxes and fees","Taxes are set by governments. Regulatory fees and surcharges are set by the company or required by law. Explain the difference: ‘Taxes go to the government. This fee is how we recover regulatory costs.’ Do not call a legitimate fee a mistake."],
  ["Proration","When a plan starts, changes or ends mid-cycle, you pay a share of the month. Example: a 30-day cycle, a plan that costs $60, activated 10 days before the cycle end: 10/30 of $60 is $20. Show the arithmetic."],
  ["Why the first bill is bigger","First bills often include a partial month, the full next month in advance, setup and equipment fees. Walk through each."],
  ["Promos ending","The most common reason for a jump: a promotional discount expired. See lesson d1. Check the promo end date in the account."],
  ["Compare two bills","Put the old and new bill side by side and find what changed line by line. Tell the customer what you found before you suggest a fix."],
  ["Never guess","If you cannot explain a charge, find the policy or ask a lead. A wrong explanation is worse than waiting two minutes."]
 ],
 steps:{h:"Explain a bill change",items:[
  ["Open both bills","Find this month’s and last month’s statements."],
  ["Compare","Identify each line that changed and by how much."],
  ["Explain","Plain words: what the charge is and why it appeared."],
  ["Check","Was it correct under the plan and policy?"],
  ["Resolve","Correct, credit, explain or offer a better plan; document."]
 ]},
 script:[
  ["c","My bill is $112 this month. It’s always $65."],
  ["a","I can see why that surprised you, and I’ll walk through exactly what changed. Your plan is still $65. This month there’s a one-time $27 installation charge for the extra set-top box, and a partial-month charge of $20 for the new service that started on the 20th. Do those match what you remember?","Itemizes and checks understanding."]
 ],
 qa:["Bills compared line by line","Plain explanation of every changed item","Proration shown as arithmetic","No guessing about fees"],
 quiz:[
  ["A $60 plan starts 10 days before a 30-day cycle ends. Prorated charge:",["$20","$60","$10"],0,"10/30 of $60 is $20."],
  ["First bills are bigger because:",["They include partial month, advance charges and setup fees","Customers are charged twice by mistake","Taxes triple"],0,"Explain each item."],
  ["If you can’t explain a charge you:",["Find the policy or ask a lead","Guess","Say it’s the system"],0,"Never guess."]
 ]},

{id:"d7",track:"csr",title:"Payments, autopay, late fees and payment arrangements",level:"basic",account:"Northwave Fiber",mins:14,
 teach:[
  ["Take payment safely","Use the secure payment tool or IVR. Never write card numbers. Confirm the amount, date and method before submitting, and give a confirmation number."],
  ["Payment methods","Card, bank draft, online portal, in-store, mail. Each has a different posting time. Tell the customer when the payment will show and whether it stops a suspension or late fee."],
  ["Autopay","It charges the stored method on the due date. Explain the cut-off for changing it, and what happens if the card fails. Do not enroll anyone without clear consent."],
  ["Late fees and suspensions","A late fee applies after the grace period in the policy. Suspension comes later. Many companies waive a first late fee; know your authority and the criteria. Never promise a waiver you cannot give."],
  ["Payment arrangements","If a customer cannot pay in full, offer a plan: pay part now and the rest by a date, within policy. Confirm the amounts and dates and tell them what happens if a payment is missed."],
  ["Financial hardship","Customers may be stressed or ashamed. Be respectful and calm. Explain available programs and assistance without judgement."],
  ["Disputed payments","If a payment appears missing, check the processing date and the payment method. If it has not posted after the expected time, escalate with the confirmation number."],
  ["Record everything","Notes include amount, date, method (last four only), confirmation number and any commitments."]
 ],
 steps:{h:"Take a payment",items:[
  ["Verify","Verify the account holder."],
  ["Confirm","Amount, date, method; say them back."],
  ["Submit","Use the secure tool; never write card data."],
  ["Confirmation","Give the confirmation number and posting time."],
  ["Notes","Record details with last four only."]
 ]},
 script:[
  ["c","I can’t pay the full amount this month. I lost some hours at work."],
  ["a","I’m sorry you’re going through that, and thank you for telling me. Let’s see what we can do. I can set up an arrangement: you pay $50 today and the remaining $62 by the 28th, and the late fee will be paused while the arrangement is active. Would that work?","Empathy, specific plan, consequences clear."],
  ["c","Yes, that works."],
  ["a","Great. I’ll note the arrangement on your account and give you a confirmation number. If the second payment can’t be made on the 28th, call us before then and we’ll look at the options.","Sets expectations."]
 ],
 qa:["Secure payment method used","Amount, date and method confirmed","Arrangement terms stated clearly","Notes complete and compliant"],
 quiz:[
  ["Card numbers should be:",["Never written down","Written in notes","Sent by chat"],0,"Use the secure tool."],
  ["Enrolling in autopay requires:",["Clear consent","Nothing","Only the first name"],0,"Get consent."],
  ["If you can’t waive a fee:",["Explain what you can do","Promise it anyway","Hang up"],0,"Stay in authority."]
 ]},

{id:"d8",track:"csr",title:"Plan changes, upgrades, moves and disconnects",level:"intermediate",account:"Northwave Fiber",mins:14,
 teach:[
  ["Needs first","Ask what the customer wants to achieve: faster speed, lower cost, more devices, working from home. Then match a plan to the need."],
  ["Compare in plain terms","Speed, price, contract length, equipment, taxes and fees. Show the total monthly cost, not only the headline price. Mention any one-time charges."],
  ["Upgrades and downgrades","Effective date, proration, early-termination terms, any equipment change. Downgrades may reduce speeds that the customer depends on; check their use first."],
  ["Moves","Check service availability at the new address, the install date, the equipment plan, and what happens at the old address. Offer to schedule both disconnect and connect so there is no gap."],
  ["Disconnects","Ask why. Offer help if the reason is solvable (see d5). If the customer still wants to leave, honor the request clearly: final bill date, equipment return, refunds and when service ends."],
  ["Confirm in writing","Summarize the change: new plan, price, start date, one-time charges and the first bill. Many companies send an email confirmation; tell the customer when to expect it."],
  ["Don’t oversell","Recommending a bigger plan the customer doesn’t need creates complaints and cancellations later."]
 ],
 steps:{h:"Plan change call",items:[
  ["Need","What do you want to improve?"],
  ["Options","Present two plans with total monthly cost."],
  ["Details","Start date, proration, fees, contract."],
  ["Confirm","Repeat the new plan, price and date."],
  ["Document","Update notes and send the confirmation."]
 ]},
 script:[
  ["c","I’m moving next month. What do I need to do?"],
  ["a","Congratulations on the move. Let me check that we serve your new address first. What’s the new address and the date you’ll be moving?","Warm, then facts."],
  ["c","14 Willow Lane, on the 15th."],
  ["a","We do serve Willow Lane. I can schedule your disconnect at the old address for the 15th and a new installation on the 15th as well, so you’re not without service. There’s a $49 transfer fee. Would you like me to book that?","Gives the price and offers to book."]
 ],
 qa:["Needs asked before recommending","Total monthly cost explained","Dates and fees confirmed","Confirmation sent and noted"],
 quiz:[
  ["Before recommending a plan you:",["Ask about the customer’s needs","Pick the most expensive","Read the policy aloud"],0,"Needs first."],
  ["For a move you should:",["Schedule disconnect and connect to avoid a gap","Cancel immediately","Ignore dates"],0,"Plan the transition."],
  ["A customer wants to cancel. You:",["Ask why, offer help, then honor the request","Refuse","Transfer endlessly"],0,"Be respectful."]
 ]},

{id:"d9",track:"csr",title:"Credits and adjustments: when to give, how much and how to document",level:"intermediate",account:"Northwave Fiber",mins:14,sim:"sim-c5",
 teach:[
  ["Credits are a tool, not a reflex","A credit repairs a real failure: an outage, a billing error, a missed appointment. It is not a substitute for solving the problem."],
  ["Know your authority","Each role has a limit: amounts, reasons and frequency. Stay inside it. For more, get supervisor approval."],
  ["Match credit to impact","Use the policy table: days of service lost times the daily rate, a fixed courtesy amount, or reimbursement for a direct cost. Be fair: same situation, same credit."],
  ["Offer without being asked, when appropriate","If a customer clearly suffered a failure, apply the credit proactively and say so. Customers appreciate fairness without having to demand it."],
  ["Explain the credit","State the reason, the amount, and when it will show on the bill. ‘Because of the three-day outage, I’ve added a $6 credit per day, $18 total, on your next bill.’"],
  ["Say no kindly","If no credit applies, explain why and offer another solution: a callback, a plan review, a follow-up. Do not invent reasons."],
  ["Document","Credit reason code, amount, authority used and customer conversation. Auditors review these."]
 ],
 steps:{h:"Apply a credit",items:[
  ["Fact","Confirm the failure and its dates."],
  ["Policy","Which credit applies and what is your limit?"],
  ["Apply","Enter the credit with the correct reason code."],
  ["Explain","Tell the customer amount, reason and timing."],
  ["Document","Notes: reason, amount, authority."]
 ]},
 script:[
  ["c","I was without service for two days and now I want something off my bill."],
  ["a","I’m sorry about the two days, that shouldn’t have happened. Let me confirm the outage dates on your account. I can see it. I’ll add a two-day service credit of $4.30 a day, so $8.60 in total, to your next bill. Is there anything else I can fix for you today?","Verifies, applies, explains."]
 ],
 qa:["Failure verified before credit","Credit within authority and policy","Amount, reason and timing explained","Correct reason code and notes"],
 quiz:[
  ["A credit should repair:",["A real failure","Any complaint","A mood"],0,"Tie it to a failure."],
  ["The credit is above your limit. You:",["Get supervisor approval","Apply it anyway","Refuse without a reason"],0,"Follow authority."],
  ["Documentation includes:",["Reason code, amount, authority","Only the amount","Nothing"],0,"Auditors review it."]
 ]},

/* ---------------- WEEK 20: RETAIL ---------------- */
{id:"d10",track:"csr",title:"Order status, delays and lost packages",level:"basic",account:"Cartwell",mins:14,
 teach:[
  ["The three questions","Where is it? When will it arrive? What can you do about it? Answer all three in order."],
  ["Reading tracking","Order placed, processing, shipped, in transit, out for delivery, delivered. ‘Delivered’ with no package is a separate case. Check the carrier’s last scan time and location."],
  ["Common delays","Weather, carrier backlog, address problems, stock issues, customs and holidays. Tell the customer the real reason when you know it."],
  ["Delivered but not received","Ask them to check around the property, with neighbors and the building front desk. Wait 24 to 48 hours as many carriers scan early. If still missing, open a claim and offer a reship or refund per policy."],
  ["Address errors","If the address is wrong, find out whether the package can be redirected. Warn the customer before you change it, and confirm the new address."],
  ["Compensation","Follow policy: shipping refund, discount on next order, expedited reship. Offer proactively when the company is at fault."],
  ["Set a follow-up","Give a date: ‘I’ll check again tomorrow at noon and email you.’ Then do it."]
 ],
 steps:{h:"Package not arrived",items:[
  ["Verify","Verify and open the order."],
  ["Tracking","Last scan, location, expected date."],
  ["Explain","Plain words about what happened."],
  ["Options","Wait, redirect, reship or refund per policy."],
  ["Follow-up","Set a date and confirm how you will reach the customer."]
 ]},
 script:[
  ["c","It says delivered yesterday but there’s nothing here."],
  ["a","That’s worrying, especially when you were expecting it. Let’s figure it out. The carrier shows delivery at 2:14 pm at the front porch. Can you check around the property, with neighbors, and with anyone else at home?","Empathy, facts, clear action."],
  ["c","I’ve looked. Nothing."],
  ["a","Thank you. I’ll open a claim with the carrier and, since you needed this, I can send a replacement now at no charge. It will ship tomorrow and I’ll email you the tracking.","Resolves and sets expectations."]
 ],
 qa:["Tracking details read accurately","Customer given a clear next step","Claim or replacement offered per policy","Follow-up date set and kept"],
 quiz:[
  ["Marked delivered but not received. First ask the customer to:",["Check around the property and with neighbors","Cancel the order","Pay again"],0,"Basic checks first."],
  ["Compensation when the company is at fault should be:",["Offered proactively per policy","Hidden","Always cash"],0,"Be fair."],
  ["A good follow-up is:",["A date and a method","‘Soon’","Nothing"],0,"Be specific."]
 ]},

{id:"d11",track:"csr",title:"Returns, exchanges and refunds: timelines and policy in plain words",level:"basic",account:"Cartwell",mins:14,
 teach:[
  ["Know the policy table","Return window, condition requirements, items that cannot be returned, restocking fees, refund method and timing. Keep it open during calls."],
  ["Return steps","Verify the order, check eligibility, offer the options (refund, exchange, store credit), generate the label or instructions, explain how to pack, and tell the customer when the refund will arrive."],
  ["Refund timing","Refunds go to the original payment method after the item is received and inspected. Banks may take several days more. Give the real timeline, not a hopeful one."],
  ["Exchanges","Check stock before promising. Explain price differences and whether the replacement ships before or after the return arrives."],
  ["Outside the window","Offer what policy allows: store credit, exchange, warranty claim. If an exception requires approval, say you will request it and when they will hear back."],
  ["Restocking and shipping fees","Explain them upfront, with the reason in plain words."],
  ["Say it kindly","‘The return window closed three days ago, so I can’t refund to your card. What I can do is give you store credit for the full amount, or look at a warranty exchange.’"]
 ],
 steps:{h:"Return call",items:[
  ["Eligible?","Check the window and condition."],
  ["Options","Refund, exchange or store credit."],
  ["Instructions","Label, packing, drop-off."],
  ["Timing","When the refund will arrive."],
  ["Confirm","Repeat the plan and send the label."]
 ]},
 script:[
  ["c","I want to return these shoes. They don’t fit."],
  ["a","No problem, I can help. They’re within our 30-day window, so you’re eligible for a full refund or an exchange for a different size. Which would you prefer?","States eligibility and options."],
  ["c","A refund."],
  ["a","I’ll email you a prepaid label right now. Once we receive and inspect the shoes, the refund goes to your original card within five business days, and your bank may take a little longer to show it.","Honest timeline."]
 ],
 qa:["Policy checked, not guessed","Options presented clearly","Refund timeline honest","Label or instructions sent"],
 quiz:[
  ["Refunds usually go to:",["The original payment method","A random card","Cash"],0,"Original method."],
  ["Outside the window you:",["Offer allowed alternatives and request exceptions if possible","Refuse and hang up","Ignore policy"],0,"Offer options."],
  ["Before promising an exchange:",["Check stock","Promise anyway","Ask for a gift"],0,"Don’t overpromise."]
 ]},

{id:"d12",track:"csr",title:"Damaged, wrong or missing items",level:"intermediate",account:"Cartwell",mins:14,sim:"sim-c6",
 teach:[
  ["The customer is already unhappy","A broken or wrong item means the company failed. Apologize once, sincerely, and move quickly to a fix."],
  ["Collect facts","Order number, which item, what is wrong, when it arrived, whether the box was damaged. Ask for photos if policy requires; explain why and how to send them."],
  ["Damaged","Offer a replacement or refund without making the customer prove too much. Mention return rules: some items do not need to be sent back."],
  ["Wrong item","Confirm what they received and what they ordered. Offer a correct item, a prepaid return and a courtesy if policy allows."],
  ["Missing item","Check the packing slip. Some orders ship in multiple boxes. If it is truly missing, send the item or refund it."],
  ["Prevent repeats","Note the issue code and the packing facility so the team can fix a pattern."],
  ["Fraud awareness","Rarely, claims are abused. Use policy criteria (repeat claims, patterns) quietly; do not accuse customers. If a pattern fits, escalate rather than confront."]
 ],
 steps:{h:"Damaged item",items:[
  ["Apologize","I’m sorry it arrived that way."],
  ["Facts","Order number, item, what happened."],
  ["Evidence","Photos if policy needs them."],
  ["Fix","Replacement or refund; return if required."],
  ["Prevent","Issue code in notes."]
 ]},
 script:[
  ["c","The lamp I ordered arrived with a cracked base."],
  ["a","I’m sorry it arrived broken. That’s not the experience we want you to have. Could you send me a photo of the base and the box? You can reply to the email I’ll send now. Once I see it, I’ll send a replacement at no charge, and you don’t need to return the broken one.","Apology, photo request with reason, clear fix."]
 ],
 qa:["Single sincere apology","Facts and evidence collected per policy","Replacement or refund offered quickly","Issue code recorded"],
 quiz:[
  ["A customer receives a wrong item. You:",["Offer the correct item and a prepaid return","Blame the customer","Tell them to pay again"],0,"Fix it."],
  ["Photos are asked for:",["As policy requires, with an explanation","Always aggressively","Never"],0,"Explain why."],
  ["Suspected abuse should be:",["Escalated per policy without accusing","Accused openly","Ignored"],0,"Stay professional."]
 ]},

{id:"d13",track:"csr",title:"Recommending products and add-ons without being pushy",level:"intermediate",account:"Cartwell",mins:12,
 teach:[
  ["Help first, sell second","The best recommendations solve the customer’s stated problem. A wrong or pushy offer erodes trust and increases returns."],
  ["Listen for the need","‘I’m buying this for my daughter’s dorm.’ → A surge protector and storage might help. If nothing connects to the need, do not offer."],
  ["Offer once, clearly","One suggestion with a reason and a price. ‘Many people with this laptop add the two-year protection plan for $39. Would you like details?’ Accept the answer."],
  ["Honest benefits","Say what it does and does not cover. Never overstate. Mislead no one."],
  ["Compliance","Some products (insurance, financing) have required disclosures. Follow your scripts."],
  ["Never pressure","No false urgency, no guilt, no ‘last chance’. If a customer says no, move on."],
  ["Measure what matters","Conversion matters, but returns and complaints matter more. A smaller number of fitting offers is better than many poor ones."]
 ],
 steps:{h:"Fit-based offer",items:[
  ["Listen","What problem are they solving?"],
  ["Match","Does a product fit that need?"],
  ["Offer","One suggestion, a reason and a price."],
  ["Respect","Accept yes or no."],
  ["Document","Note the offer and the answer."]
 ]},
 script:[
  ["c","I’m buying a laptop for school."],
  ["a","Great choice. Students often use a protective sleeve and a two-year protection plan since laptops get carried around a lot. The plan is $39 and covers accidental damage. Would that interest you, or would you prefer to stay with just the laptop?","One offer, a reason, a price, an open door."]
 ],
 qa:["Offer based on a stated need","One clear offer with price","No pressure after a no","Required disclosures included"],
 quiz:[
  ["A good recommendation:",["Fits the customer’s need","Is the most expensive item","Uses false urgency"],0,"Fit first."],
  ["After a ‘no’ you:",["Accept it and move on","Repeat three times","Argue"],0,"Respect the answer."],
  ["Required disclosures are:",["Part of the script","Optional","Rude"],0,"Follow compliance."]
 ]}
]);
