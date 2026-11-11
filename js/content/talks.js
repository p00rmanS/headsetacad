/* Talk-through scenarios: [reply, score 0-2, feedback] */
Object.assign(window.TALKS=window.TALKS||{},{

"t-found1":{title:"Opening, verification and restating the issue",account:"Northwave Fiber",level:"basic",lang:"en",lesson:"f1",
 crm:{Name:"Maria Lopez",Account:"NW-22-74417",Verify:"Name + last 4 of account"},goal:"Brand the call, verify with a reason, restate the issue, and use an open question.",
 turns:[
  {c:"(The call connects. Silence for a moment, then:) Hello?",o:[
   ["Thank you for calling Northwave Fiber, this is Jordan. How can I help you today?",2,"Brand, name and an offer to help in the first sentence."],
   ["Hi, what’s your account number?",0,"Never start with a demand. The customer has not even said why they called."],
   ["Northwave, go ahead.",1,"Brief and a little cold; no name and no offer to help."]]},
  {c:"Hi, my internet has been out since this morning and I need it for a video call at noon.",o:[
   ["I’m sorry it’s been down all morning, and I’ll get that sorted with you. To protect your account, can you confirm your full name and the last four digits of your account number?",2,"Empathy first, then verification with a reason."],
   ["Okay. What’s your account number?",0,"No empathy and no reason for the verification."],
   ["Have you tried restarting your modem?",0,"You are troubleshooting before verifying and before discovering."]]},
  {c:"Maria Lopez, 4417.",o:[
   ["Thank you, Maria, you’re verified. So since this morning nothing loads at all, and you have a call at noon. Is that right?",2,"Confirms verification, restates the issue and the deadline."],
   ["Verified. Restart your modem now.",0,"Skips restating the issue and gives an instruction without context."],
   ["Thanks. What’s going on?",1,"Fine, but the customer just told you. Restating shows you listened."]]},
  {c:"Yes, exactly. I don’t know what to do.",o:[
   ["Let’s find out together. What lights do you see on your modem, and what color are they?",2,"Open question, calm and collaborative."],
   ["Just unplug it and plug it back in.",0,"A fix without discovery; you do not yet know what is wrong."],
   ["Is the modem plugged in?",1,"A closed question that could be useful, but start with the lights."]]},
  {c:"The Online light is blinking orange.",o:[
   ["Thank you, that tells me the modem is trying to reach our network. Let’s check the cable from the wall. Is it finger-tight?",2,"Explains the meaning of the result and gives one clear step."],
   ["That’s bad. We’ll probably need a technician.",0,"Jumping to a technician before simple checks creates worry and cost."],
   ["Blinking orange. Okay, unplug it.",1,"Fine step, but no explanation of what the light means."]]}
 ]},

"t-found2":{title:"De-escalating an angry caller",account:"Northwave Fiber",level:"intermediate",lang:"en",lesson:"f3",
 crm:{Name:"Derek Grant",Account:"NW-30-55291",Status:"Service down 3 days; two cancelled technician visits",Authority:"Up to 3 days credit"},goal:"Let him vent, apologize once and specifically, take ownership, and offer a choice.",
 turns:[
  {c:"I have been without internet for three days! You people cancelled my technician TWICE!",o:[
   ["Mr. Grant, three days without service and two cancelled visits is unacceptable, and I’m sorry that happened. Let me look at both tickets right now.",2,"Names the specific failure, apologizes once, moves to action."],
   ["Sir, please calm down.",0,"“Calm down” escalates anger."],
   ["I understand your frustration. Let me pull up your account.",1,"Acceptable, but it is generic and does not name the problem."]]},
  {c:"You’re going to tell me the same thing everyone else did.",o:[
   ["I can see why you’d expect that. Here’s what’s different: I’m booking a priority repair, giving you the ticket number, and adding a three-day service credit.",2,"Specific ownership and concrete actions."],
   ["Sir, I’m just following policy here.",0,"Policy talk without action sounds like a brush-off."],
   ["I’ll do my best to help you today.",1,"Soft and vague; he wants specifics."]]},
  {c:"And when exactly is this technician coming?",o:[
   ["I can offer Thursday morning or Friday afternoon. Which works better for you?",2,"A choice returns control to the customer."],
   ["They’ll come when they come, probably this week.",0,"No date, no ownership."],
   ["I can book you Thursday morning.",1,"A date is good; offering a choice is better."]]},
  {c:"Fine, Thursday morning. What about the days I lost?",o:[
   ["I’m adding a three-day service credit to your next bill, and I’ll note it on the ticket so nobody questions it. Is there anything else you’d like me to look at?",2,"Applies the credit within authority and documents it."],
   ["I’ll have to ask my manager about that.",0,"You have authority for up to three days; do not push it off."],
   ["Credits aren’t guaranteed, but I’ll put in a request.",1,"Weak: you can approve it now."]]},
  {c:"Okay. That’s something, I guess.",o:[
   ["Thank you for your patience, Mr. Grant. To recap: priority repair Thursday morning, ticket 88413, and the three-day credit on your next bill. If anything changes, call me back and mention that number.",2,"Clear recap and a reference number."],
   ["Great. Have a good day.",0,"No recap, no reference, no check."],
   ["Your ticket number is 88413. Anything else?",1,"Better, but a short recap protects the commitments."]]}
 ]},

"t-l1a":{title:"No internet: lights, cables and the power cycle",account:"Northwave Fiber",level:"basic",lang:"en",lesson:"a2",
 crm:{Name:"Maria Lopez",Account:"NW-22-74417",Outage:"None in area",Equipment:"NW Gateway G4"},goal:"Check cables before resetting, restart in the right order, and confirm with a live test.",
 turns:[
  {c:"My internet is out. The Online light is blinking orange and the Power light is white.",o:[
   ["Thank you. Is there an outage in your area? I’ll check that first so we don’t reset anything we don’t need to.",2,"Check for an outage before walking through steps."],
   ["Unplug the router now.",0,"A reset before any checks."],
   ["Okay, let’s restart the modem.",1,"Possibly useful, but cables and the outage check come first."]]},
  {c:"Is there an outage?",o:[
   ["No, there’s none in your area, so this is something we can fix at your end. Can you look at the cable from the wall? Is it screwed in firmly?",2,"Gives the result and one clear step."],
   ["There’s no outage. Restart everything.",1,"Skips the cable check, which is a common cause."],
   ["Yes, a big outage. Call back later.",0,"This is wrong given the account data."]]},
  {c:"It’s a little loose, I’ll tighten it. Now what?",o:[
   ["Great. Unplug the gateway’s power for 60 seconds, then plug it back in and tell me when the Online light is solid.",2,"A proper power cycle with a time and a target."],
   ["Unplug it for five seconds.",0,"Too short to clear it."],
   ["Restart it and see.",1,"Right idea, but no timing and no success measure."]]},
  {c:"The Online light is solid white now. Pages are loading!",o:[
   ["That’s great. Let’s confirm properly: please run a speed test and read me the numbers.",2,"Confirms the fix with evidence."],
   ["Good. Have a nice day.",0,"No verification of the fix."],
   ["Wonderful, call back if it happens again.",1,"Missing a confirmation test."]]},
  {c:"476 down and 21 up.",o:[
   ["That’s right on target for your plan. I’ve noted the loose cable and the speed result on your ticket, 55102. Is there anything else I can help with?",2,"Interprets the result, documents and closes."],
   ["Good. Bye.",0,"No notes, no close."],
   ["Great, you’re all set.",1,"Skips the reference number and the note."]]}
 ]},

"t-l1b":{title:"The customer who clicked a phishing link",account:"Brightdesk IT",level:"intermediate",lang:"en",lesson:"a16",
 crm:{Name:"Harold Weiss",Account:"BD-34550",Policy:"Never collect card numbers. Report phishing. Send card issues to the bank."},goal:"Be blame-free, secure the card first, then the password, and report.",
 turns:[
  {c:"I got a text about a held package, tapped the link and typed my card number. Now I think it was fake.",o:[
   ["I’m glad you called right away, and this happens to a lot of people. The most urgent step is to call your card company to freeze or replace the card. Did you enter anything else, like a password?",2,"No blame, the urgent action first, then discovery."],
   ["Read me the card number so I can check it.",0,"Never collect card numbers."],
   ["That wasn’t smart. You should never click links.",0,"Blaming makes people hide things."]]},
  {c:"I also typed my email password, the same one I use everywhere.",o:[
   ["Thank you for telling me. Let’s change that password right now from your own phone, on every site where you used it, and turn on two-step verification. I’ll stay on the line.",2,"Concrete steps and ongoing support."],
   ["Tell me the password and I’ll change it for you.",0,"Never take or use a password."],
   ["You should change it later when you can.",1,"Too casual; it is urgent."]]},
  {c:"I’m scared they have everything.",o:[
   ["That’s understandable. Acting quickly is exactly what helps. Once the card is frozen and the passwords are changed, the risk drops a lot. Let’s do the card first.",2,"Reassures honestly and prioritizes."],
   ["Don’t worry, it’s probably fine.",0,"False reassurance."],
   ["They probably do. It’s bad.",0,"Needlessly alarming."]]},
  {c:"Okay. How do I know if my email was accessed?",o:[
   ["Check the account’s recent sign-in activity and sign out of all other devices. I’ll walk you through it. If you see anything unfamiliar, we’ll note it and report it.",2,"Specific, safe steps."],
   ["You can’t really tell.",0,"Unhelpful and incorrect."],
   ["Look in your spam folder.",1,"Not the right place."]]},
  {c:"Alright, done. What now?",o:[
   ["I’m reporting the message to our security team and I’ve noted exactly what happened and what we did. Keep an eye on your card statement for the next weeks. Anything else I can help with?",2,"Reports, documents and closes with advice."],
   ["You’re all set. Bye.",0,"No report, no notes."],
   ["I’ll report it. Have a good day.",1,"Missing the notes and the follow-up advice."]]}
 ]},

"t-l2a":{title:"The ping ladder: where does it break?",account:"Brightdesk IT",level:"intermediate",lang:"en",lesson:"b5",
 crm:{Name:"Nate Collins",Account:"BD-71288",Device:"Windows 11 laptop on home Wi-Fi"},goal:"Walk the ping ladder, find DNS, fix it and record the evidence.",
 turns:[
  {c:"My laptop says connected but no website opens.",o:[
   ["Let’s find exactly where it stops. Open Command Prompt and type ping 8.8.8.8, then tell me what you see.",2,"A test that splits the problem, dictated clearly."],
   ["Reinstall your browser.",0,"A guess without a test."],
   ["Restart your router and see.",1,"May help, but a test tells you the layer first."]]},
  {c:"Reply from 8.8.8.8, four times.",o:[
   ["Good, that means you can reach the outside internet. Now type ping example.com and read me the result.",2,"Interprets and takes the next step."],
   ["Great, it works. You’re done.",0,"You have not tested name lookup."],
   ["Okay, now restart.",0,"The next test is more informative."]]},
  {c:"It says ‘could not find host’.",o:[
   ["That narrows it to name lookup, not the connection. Type ipconfig /flushdns and press Enter.",2,"Correct diagnosis and the right first fix."],
   ["Your internet provider is down.",0,"The first ping worked, so that is wrong."],
   ["Try the ping again.",1,"Repeating adds nothing."]]},
  {c:"Done, but the same message.",o:[
   ["Let’s test another DNS server: type nslookup example.com 8.8.8.8. If that works, your current DNS server is the issue and we’ll change it.",2,"Proves the cause before changing settings."],
   ["Reinstall Windows.",0,"Wildly out of proportion."],
   ["Change your DNS to 8.8.8.8 now.",1,"Likely right, but proof first and note the original values."]]},
  {c:"nslookup returns an address.",o:[
   ["That confirms it. I’ll note your current DNS value, then we’ll set DNS to 8.8.8.8 and test again. Let me write down the original first.",2,"Records the original value before changing."],
   ["Just change it, no need to note anything.",0,"Always note the before value for rollback and the ticket."],
   ["Let’s change it and see.",1,"Good, but record the original first."]]}
 ]},

"t-l3a":{title:"Your first incident message to a business customer",account:"Northwave Fiber Business",level:"advanced",lang:"en",lesson:"c12",
 crm:{Name:"Gareth Lloyd",Account:"NW-B-20933",Incident:"INC-5521: outage since 14:05, cause unknown, field not yet dispatched, next update 15:00"},goal:"Own the gap, state known and unknown, set a next update time, and offer a workaround.",
 turns:[
  {c:"Our business is down and nobody has told us anything for an hour.",o:[
   ["You deserve better information than that, and I’m sorry. Here’s what I know: since 14:05 customers in your area have lost service, our network team is working on it and a crew is being sent.",2,"Owns the gap, gives the facts."],
   ["I’m sure someone will update you soon.",0,"Vague and dismissive."],
   ["It’s a big outage, we’re doing our best.",1,"Some truth, but no facts, times or ownership."]]},
  {c:"What is the cause?",o:[
   ["We haven’t confirmed the cause yet, and I don’t want to guess. I’ll update you as soon as we know.",2,"Honest about what is unknown."],
   ["It’s probably a fiber cut.",0,"Guessing a cause can mislead."],
   ["It’s a network issue.",1,"True but empty."]]},
  {c:"When will we be back?",o:[
   ["I don’t have a confirmed time yet. I’ll call you by 15:00 with an update, and sooner if anything changes.",2,"Honest, with a firm update time."],
   ["Within the hour.",0,"A promise you cannot back."],
   ["As soon as possible.",1,"Honest-sounding but gives no next step."]]},
  {c:"We have to send files to a client by five.",o:[
   ["Understood. While we work on the line, you can use your phone’s hotspot to send the urgent files. If you’d like, I’ll walk you through turning it on now.",2,"Practical help for the deadline."],
   ["That’s not something I can help with.",0,"Unhelpful."],
   ["Maybe it will be fixed by then.",0,"Hope is not a plan."]]},
  {c:"Alright. Please make sure we hear from you.",o:[
   ["I will. Your ticket is 55102 and I’ll call you at 15:00 even if there’s no change. Is there anything else I can do right now?",2,"Reference, a firm callback and a check."],
   ["Sure, bye.",0,"No reference or commitment."],
   ["We’ll send an email update.",1,"Specify when and how."]]}
 ]},

"t-csr1":{title:"Why did my bill go up?",account:"Northwave Fiber",level:"intermediate",lang:"en",lesson:"d1",
 crm:{Name:"Sofia Reyes",Account:"NW-18-77301",Plan:"Fiber 300, now $95",Promo:"$40 promo ended Oct 31",Offer:"Loyalty plan $65 for 24 months"},goal:"Explain the promo expiry without blame, and offer a fitting option.",
 turns:[
  {c:"My bill went from $55 to $95. Nobody told me anything!",o:[
   ["I can see why that’s a shock, and I’ll show you exactly what changed. Your plan is the same, but a $40 promotion ended on October 31.",2,"Empathy, then a clear cause."],
   ["That’s what the terms say. You should have read them.",0,"Blaming the customer."],
   ["I’ll check. One moment.",1,"Fine but no empathy or explanation yet."]]},
  {c:"Twelve months? I thought it was permanent.",o:[
   ["I understand why you’d think that. It was a 12-month promotion. Let’s look at what we can do to bring it down.",2,"Acknowledges and moves to options."],
   ["It was in the contract.",0,"Policy without help."],
   ["Sorry about that.",1,"An apology with no action."]]},
  {c:"So what can you do?",o:[
   ["I can move you to a loyalty plan at $65 a month for 24 months, with the same speed. Would that work?",2,"A specific offer within policy."],
   ["Nothing, that’s the price.",0,"Not true, and not helpful."],
   ["I could put in a request for a discount.",1,"Weaker than offering what you can actually do."]]},
  {c:"Is it really the same speed?",o:[
   ["Yes, it’s the same 300 megabit service. The only differences are the price and the 24-month term. I’ll confirm the date it starts.",2,"Honest, including the term."],
   ["Yes. No catch.",1,"Mentions no conditions."],
   ["I think so.",0,"Never guess."]]},
  {c:"Okay, switch me.",o:[
   ["Done. The new price is $65 starting next cycle, with a 24-month term. You’ll get an email confirmation today, and the reference number is 77102. Is there anything else I can help with?",2,"Summary, reference and a check."],
   ["It’s switched. Bye.",0,"No confirmation or terms."],
   ["It’s done, you’ll see it on your bill.",1,"Missing the reference and the terms."]]}
 ]},

"t-csr2":{title:"Returning an item outside the window",account:"Cartwell",level:"intermediate",lang:"en",lesson:"f10",
 crm:{Name:"Marcus Bell",Order:"#CW-1189244 headphones $149, 35 days ago",Policy:"Card refund within 30 days; store credit up to 60; manufacturer warranty 1 year"},goal:"Explain the rule, offer alternatives, and hand off to a supervisor warmly if he insists.",
 turns:[
  {c:"I bought these 35 days ago and they stopped charging. I want my money back on my card.",o:[
   ["I’m sorry they stopped working. Card refunds close at 30 days, so I can’t return it to your card, but I can offer a full store credit, or help with a warranty replacement. Which would you prefer?",2,"Empathy, plain reason and two alternatives."],
   ["No, it’s past the return window.",0,"A bare no."],
   ["I can offer a store credit.",1,"One alternative, no empathy or reason."]]},
  {c:"This is ridiculous. I want a manager.",o:[
   ["I understand. I’d like to try to fix this for you first. If I can’t, I’ll bring in my supervisor right away. The warranty can send you a new pair at no cost.",2,"Tries once, respectfully, and keeps the door open."],
   ["I can’t get a manager.",0,"You should escalate if asked after a try."],
   ["Sure, hold.",1,"Skips a chance to solve it, and no briefing."]]},
  {c:"No. Manager. Now.",o:[
   ["Of course. I’m bringing in Dana, my supervisor, and I’ll give her the details so you don’t have to repeat yourself. Please hold one moment.",2,"A warm handoff."],
   ["Fine. Transferring.",0,"A cold transfer."],
   ["You’ll have to wait; it may take a while.",0,"Hostile and unhelpful."]]},
  {c:"(To the supervisor, you:) Dana, I have Marcus Bell, order 1189244, headphones outside the 30-day window. What would you say?",o:[
   ["Briefing: He bought them 35 days ago, they stopped charging two days ago, he wants a card refund. I offered store credit and warranty; he declined and asked for you. He is upset but respectful.",2,"A concise, factual briefing."],
   ["He’s a jerk and wants free stuff.",0,"Opinions have no place in a handoff."],
   ["He wants a refund. Take him.",1,"Too thin; the supervisor must start over."]]},
  {c:"(Back to Marcus:) Okay, Dana can help. What should I tell her?",o:[
   ["Dana has all the details. Thank you for your patience, Mr. Bell. Your reference number is 88102, and I’ve noted everything on the account.",2,"Reassures, gives a reference and documents."],
   ["Just tell her everything again.",0,"Defeats the purpose of a warm handoff."],
   ["Good luck.",0,"Dismissive."]]}
 ]},

"t-csr3":{title:"Possible scam: a wire for a grandson",account:"Harborline Bank",level:"advanced",lang:"en",lesson:"d17",
 crm:{Name:"Eleanor Davis",Age:"78",History:"No wires in 3 years",Policy:"Hold suspected scams, escalate, document exact words"},goal:"Spot the scam, ask gently, pause the wire, and involve the fraud team.",
 turns:[
  {c:"I need to wire $9,000 today to my grandson. He’s in trouble and told me not to tell anyone.",o:[
   ["I can hear how worried you are, and I want to help you. Before I send anything, may I ask a couple of questions? Have you spoken to your grandson directly, on a number you know is his?",2,"Empathy and a protective question."],
   ["Sure, I’ll set up the wire now.",0,"Ignores the red flags."],
   ["That sounds like a scam. You shouldn’t do that.",1,"Right instinct but harsh; it can make her defensive."]]},
  {c:"No, a man called and said he’s a lawyer and that Danny was arrested.",o:[
   ["Thank you for telling me. This matches a scam that targets grandparents. I’d like to pause the wire for now, and call Danny together on his own number. Would that be okay?",2,"Names the pattern kindly and pauses."],
   ["Ma’am, you’re being scammed.",1,"Accurate but without dignity or a next step."],
   ["Let me just process it quickly.",0,"Would complete a possible scam."]]},
  {c:"But he said I must hurry, or Danny will be in jail overnight.",o:[
   ["That pressure is part of how these scams work, because they want you to act before you think. Real courts and lawyers don’t ask for wires. Let’s call Danny now.",2,"Explains the tactic without blaming her."],
   ["Don’t worry, it will be fine.",0,"False reassurance."],
   ["Then maybe wire half.",0,"Never process part of a suspected scam."]]},
  {c:"(After the call:) Danny is at home, he’s fine. Oh no.",o:[
   ["I’m so glad he’s safe. You did the right thing by asking. I’m going to alert our fraud team and note exactly what happened, and I’ll tell you what to do if they call again.",2,"Warm, escalates and documents."],
   ["Well, now you know.",0,"Cold."],
   ["Next time don’t call them back.",1,"Unhelpful and slightly blaming."]]},
  {c:"Thank you. I feel foolish.",o:[
   ["Please don’t. These callers are skilled and target many people. Asking before sending was exactly right. Is there anything else I can help you with today?",2,"Protects her dignity."],
   ["Yes, it was a bit foolish.",0,"Harmful."],
   ["It happens. Anything else?",1,"Adequate but brisk."]]}
 ]},

"t-csr4":{title:"A denied claim: explain, don’t promise",account:"Meridian Health Plan",level:"advanced",lang:"en",lesson:"d20",
 crm:{Member:"Omar Haddad",ID:"MH-33907",Claim:"MRI denied: no prior authorization",Appeal:"180 days from the letter"},goal:"Verify, explain the denial simply, give options, never promise approval.",
 turns:[
  {c:"My MRI claim was denied! I can’t afford this.",o:[
   ["I’m sorry, that must be stressful. Before I look at the details, can I verify your identity? Could you give me your name, date of birth and member ID?",2,"Empathy and the required verification."],
   ["Why was it denied? Let me look.",0,"Reviewing health information before verification."],
   ["It’s probably nothing.",0,"False reassurance."]]},
  {c:"(Verified.) So why was it denied?",o:[
   ["The claim was denied because it needed prior authorization and none was on file. That’s a common reason, and there are ways to address it.",2,"Plain reason, hopeful but honest."],
   ["Denial code 197 per your plan.",1,"Accurate but jargon-heavy."],
   ["Your doctor made a mistake.",0,"Blaming without evidence."]]},
  {c:"What can I do?",o:[
   ["Two options: your doctor’s office can request a retroactive authorization, or you can file an appeal. The appeal deadline is 180 days from the date on your letter. I can open the appeal today.",2,"Options, deadline and action."],
   ["Just wait and see.",0,"Unhelpful."],
   ["File an appeal, that’s all.",1,"Missing the other option and the deadline."]]},
  {c:"Will they approve it?",o:[
   ["I can’t promise the outcome, because the review team decides. I can explain the process, make sure your paperwork is complete, and give you a reference number.",2,"Honest and supportive."],
   ["Yes, they will.",0,"Never promise outcomes."],
   ["Probably, but who knows.",1,"Vague and a soft promise."]]},
  {c:"Okay. Please open the appeal.",o:[
   ["Done. Your reference number is 90417. I recommend sending a letter from your doctor explaining why the MRI was needed. You’ll hear within the standard review time, and I’ve noted everything. Anything else?",2,"Reference, advice and a close."],
   ["Opened. Bye.",0,"No reference, no guidance."],
   ["It’s opened, you’ll hear back.",1,"No reference or timeline."]]}
 ]},

"t-csr5":{title:"Cancelling: one offer, then respect",account:"Northwave Fiber",level:"intermediate",lang:"en",lesson:"d23",
 crm:{Name:"Ana Pérez",Account:"NW-52-80331",Plan:"Fiber 500, $75/mo",Offer:"Fiber 200 at $45/mo"},goal:"Ask why, offer once, honor the request, explain next steps.",
 turns:[
  {c:"I want to cancel. It’s too expensive.",o:[
   ["I understand, thank you for telling me. Before I cancel, may I ask what you mostly use the internet for?",2,"Asks to find a fit."],
   ["Cancelling is a big mistake. You’ll regret it.",0,"Pressure."],
   ["Okay, I’ll cancel it right now.",1,"Respectful but skips a helpful question."]]},
  {c:"Email and video calls with my family.",o:[
   ["That would work well on a 200-megabit plan at $45 a month. Would you like that, or would you prefer to go ahead with the cancellation?",2,"One fitting offer with an easy exit."],
   ["How about our premium plan?",0,"The opposite of what she needs."],
   ["I could maybe get you a discount.",1,"Vague."]]},
  {c:"No, I’ve decided. Cancel it.",o:[
   ["Of course. I’ll cancel it effective the 30th.",2,"Honors the request promptly."],
   ["Are you sure? Think about it.",0,"Pressure after a clear no."],
   ["Let me transfer you to retention.",0,"Delay and a second pitch."]]},
  {c:"What happens now?",o:[
   ["You’ll get a final bill for the partial month, and I’ll email a prepaid box to return the gateway. Service ends on the 30th.",2,"Clear next steps."],
   ["Just return the equipment.",1,"Missing the final bill and the end date."],
   ["It’s all automatic.",0,"Leaves her surprised later."]]},
  {c:"Okay. Thanks.",o:[
   ["Thank you for having been a customer, Ana. If you ever want to come back, we’ll be glad to help. Your cancellation reference is 66201.",2,"Warm close with a reference."],
   ["Bye.",0,"Cold."],
   ["Have a great day.",1,"Polite but no reference."]]}
 ]},

"t-es1":{title:"Saludo y verificación en español",account:"Northwave Fiber",level:"basic",lang:"es",lesson:"e1",
 crm:{Cliente:"Rosa Martínez Delgado",Cuenta:"NW-27-44117",Verificación:"Nombre + últimos 4"},goal:"Saludar con la marca, usar usted, verificar con una razón y repetir los dígitos.",
 turns:[
  {c:"(Suena la llamada.) Buenos días, tengo un problema con mi factura.",o:[
   ["Gracias por llamar a Northwave Fiber, le atiende Ana. ¿En qué le puedo ayudar hoy?",2,"Marca, nombre y oferta de ayuda con usted."],
   ["Hola, ¿cuál es su número de cuenta?",0,"No empiece pidiendo datos."],
   ["Northwave, dígame.",1,"Demasiado seco; falta su nombre y una oferta de ayuda."]]},
  {c:"Es que me cobraron de más.",o:[
   ["Con mucho gusto le ayudo. Para proteger su cuenta, ¿me puede confirmar su nombre completo y los últimos cuatro dígitos de su número de cuenta?",2,"Verificación con una razón y en forma de usted."],
   ["¿Me das tu nombre?",0,"Use usted, no tú."],
   ["Dígame su cuenta.",1,"Es directo y sin razón; suena frío."]]},
  {c:"Sí, Rosa Martínez Delgado, cuatro, cuatro, uno, siete.",o:[
   ["Permítame confirmar: cuatro, cuatro, uno, siete. Gracias, señora Martínez, su cuenta está verificada. Cuénteme qué ve en su factura.",2,"Repite los dígitos, usa el primer apellido y hace una pregunta abierta."],
   ["Listo. ¿Qué pasa con su factura?",1,"Aceptable, pero no repite los datos ni usa un trato formal."],
   ["Rosa, ya está verificada.",0,"Use señora Martínez, no el nombre de pila."]]},
  {c:"Veo un cargo de cuarenta dólares que no entiendo.",o:[
   ["Entiendo su preocupación, vamos a revisarlo juntos. ¿Me permite ponerla en espera unos dos minutos mientras reviso el detalle?",2,"Empatía y espera con permiso, razón y tiempo."],
   ["Espere un momento.",0,"No pide permiso ni da razón."],
   ["No se preocupe, voy a verlo.",1,"Cálido pero sin tiempo estimado."]]},
  {c:"Está bien.",o:[
   ["Gracias por esperar, señora Martínez. Ese cargo es de una promoción que terminó el 31 de octubre. Con gusto le explico las opciones.",2,"Agradece y da una explicación clara."],
   ["Ya volví. Es la promoción.",1,"Correcto pero seco."],
   ["Es culpa de usted por no leer los términos.",0,"Nunca culpe al cliente."]]}
 ]},

"t-es2":{title:"Wi-Fi lento: instrucciones por teléfono",account:"Northwave Fiber",level:"basic",lang:"es",lesson:"e9",
 crm:{Cliente:"Luis Herrera Mora",Cuenta:"NW-31-66124",Plan:"Fibra 500",Equipo:"Gateway en un gabinete"},goal:"Dar un paso a la vez, describir lo que se ve y explicar el resultado.",
 turns:[
  {c:"El Wi-Fi está muy lento en mi cuarto pero bien en la sala.",o:[
   ["Entiendo, qué molesto. Eso nos da una pista importante. ¿Dónde está colocado el aparato del internet?",2,"Empatía y una pregunta de descubrimiento."],
   ["Reinicie el módem ya.",0,"No sabe aún cuál es el problema."],
   ["¿Tiene Wi-Fi?",0,"Pregunta innecesaria."]]},
  {c:"Está en un gabinete en la sala.",o:[
   ["Gracias, eso puede ser la causa: los gabinetes bloquean la señal. Primero vamos a medir la velocidad con un cable para confirmar. ¿Tiene un cable Ethernet?",2,"Explica y propone una prueba de control."],
   ["Compre un equipo nuevo.",0,"Recomienda gasto sin pruebas."],
   ["Muévalo a otra parte.",1,"Buena idea, pero primero confirme con una prueba."]]},
  {c:"Sí, tengo un cable.",o:[
   ["Conecte la computadora al aparato con el cable y abra la página de la prueba de velocidad. Dígame los tres números.",2,"Un paso claro."],
   ["Haga la prueba.",1,"Demasiado vago."],
   ["Desenchufe todo.",0,"Paso equivocado ahora."]]},
  {c:"Dice cuatrocientos setenta de bajada.",o:[
   ["Perfecto, su plan es de quinientos megabits, así que el servicio está bien. El problema es la señal del Wi-Fi hasta su cuarto. Vamos a sacar el aparato del gabinete.",2,"Interpreta el resultado en palabras sencillas."],
   ["Entonces todo está bien. Adiós.",0,"No resuelve el problema de la señal."],
   ["Su servicio está bien. Nada que hacer.",1,"Cierra sin ayudar con el Wi-Fi."]]},
  {c:"Lo saqué del gabinete, ¿ahora qué?",o:[
   ["Muy bien. Ahora haga la prueba en su cuarto y dígame el resultado. Si mejora, anotaré el cambio en su caso.",2,"Confirma con una prueba y documenta."],
   ["Listo, ya quedó.",0,"No confirma la solución."],
   ["Espero que mejore.",1,"Sin prueba."]]}
 ]},

"t-es3":{title:"Tarjeta perdida: bloquear primero",account:"Harborline Bank",level:"intermediate",lang:"es",lesson:"e16",
 crm:{Cliente:"Julián Soto Ríos",Cuenta:"HB-71204",Política:"Bloquear antes de la verificación completa; no pedir PIN ni contraseña"},goal:"Bloquear la tarjeta, verificar, revisar movimientos y no prometer el resultado.",
 turns:[
  {c:"Perdí mi tarjeta de débito en un restaurante, estoy preocupado.",o:[
   ["Lamento oír eso. Vamos a proteger su cuenta de inmediato. Voy a bloquear la tarjeta ahora mismo para que nadie pueda usarla.",2,"Actúa primero y explica."],
   ["Primero dígame su PIN.",0,"Nunca pida el PIN."],
   ["Deme su número de tarjeta completo.",0,"Nunca pida el número completo."]]},
  {c:"Gracias. ¿Qué más necesita?",o:[
   ["Para verificar su identidad, ¿me puede dar su nombre completo, su fecha de nacimiento y los últimos cuatro dígitos de su cuenta?",2,"Verificación con una razón."],
   ["Su contraseña del banco en línea.",0,"Nunca pida contraseñas."],
   ["Nada más, ya está.",0,"Falta la verificación antes de otros cambios."]]},
  {c:"Julián Soto Ríos, ocho de septiembre de mil novecientos setenta y nueve, uno, dos, cero, cuatro.",o:[
   ["Gracias, señor Soto, está verificado. ¿Revisamos juntos los movimientos recientes para ver si reconoce todo?",2,"Verifica y propone un paso útil."],
   ["Verificado. Adiós.",0,"No ayuda con el posible fraude."],
   ["Verificado. ¿Algo más?",1,"Perdió la oportunidad de revisar los cargos."]]},
  {c:"Veo un cargo de doscientos cuarenta dólares que no reconozco.",o:[
   ["Gracias por avisarme. Voy a abrir una reclamación por fraude y le enviaré una tarjeta nueva. Vamos a investigar y le daremos una decisión antes del veinte.",2,"Acción clara, fecha y sin prometer el resultado."],
   ["No se preocupe, le devolverán todo el dinero seguro.",0,"No prometa el resultado."],
   ["Eso no es nuestro problema.",0,"Inaceptable."]]},
  {c:"¿Y mis pagos automáticos?",o:[
   ["Con la tarjeta nueva tendrá que actualizar el número en sus pagos automáticos y billeteras digitales. Le recomiendo hacerlo apenas la reciba. ¿Algo más en lo que le pueda ayudar?",2,"Aconseja y cierra."],
   ["No pasa nada.",0,"Puede perder pagos."],
   ["Llame al comercio.",1,"Incompleto."]]}
 ]}
});
