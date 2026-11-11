/* More talk-through scenarios: [reply, score 0-2, feedback] */
Object.assign(window.TALKS=window.TALKS||{},{

"t-found3":{title:"Steering a talkative caller",account:"Northwave Fiber",level:"basic",lang:"en",lesson:"f9",
 crm:{Name:"Walter Brandt",Account:"NW-31-90552",Verify:"Verified",Issue:"Slow Wi-Fi in the evening"},goal:"Stay kind, take back control, and keep the call on the issue.",
 turns:[
  {c:"The Wi-Fi is slow at night. It reminds me of 1987, when we had the party line, and my neighbor Edna would stay on for hours...",o:[
   ["That sounds like quite a story, Walter. I want to fix tonight’s slowness, so let me ask: which devices are slow in the evening?",2,"Acknowledges, then redirects with a specific question."],
   ["Sir, I don’t have time for that. What’s the problem?",0,"Dismissive. Control does not require rudeness."],
   ["Ha, party lines! Tell me more about Edna.",0,"You just fed the tangent and lost control of the call."]]},
  {c:"Oh, the television mostly. And my wife’s tablet. Did I tell you about our television?",o:[
   ["I’d love to hear about it another time. For now, when the TV is slow, is it buffering video or not connecting at all?",2,"Polite boundary plus a focused question."],
   ["Yes, you did. Anyway, restart the router.",0,"Curt, and a fix before discovery."],
   ["Tell me about the television.",1,"Friendly, but it opens the tangent again."]]},
  {c:"Buffering. It’s been going on for, oh, three weeks, ever since our granddaughter visited with her phone and...",o:[
   ["Three weeks, thank you, that is helpful for my notes. Let me run a quick check on your line while I have you.",2,"Captures the key fact and moves to action."],
   ["Hold on, I’m going to interrupt you.",1,"Honest but abrupt; soften with a bridge."],
   ["Mm-hm. Mm-hm. Go on.",0,"Passive listening hands control over."]]},
  {c:"Oh good. Will this take long? I have my program at six.",o:[
   ["About five minutes, and I’ll tell you what I find at each step so you’re never waiting in silence. Does that work?",2,"Sets a time frame and sets the call’s structure."],
   ["It takes as long as it takes.",0,"Unhelpful and cold."],
   ["No, quick.",1,"Fine, but it gives no structure."]]}
 ]},

"t-found4":{title:"“I want a supervisor”",account:"Northwave Fiber",level:"basic",lang:"en",lesson:"f10",
 crm:{Name:"Priya Nair",Account:"NW-41-12098",Verify:"Verified",History:"3rd call about the same outage this week"},goal:"Acknowledge, try to resolve, and escalate correctly if the request stands.",
 turns:[
  {c:"This is the third time I’ve called! Put me through to your supervisor right now.",o:[
   ["Three calls is frustrating, Priya, and I’m sorry. Let me look at the history so I can help you right away. May I ask what happened on the last call?",2,"Owns the pain and offers help before escalating."],
   ["Supervisors aren’t available. I’m all you’ve got.",0,"Never lie about availability or dismiss the request."],
   ["Sure, hold on.",1,"Allowed, but you have not tried to help first."]]},
  {c:"They said a technician would call back and no one did. I took a day off work for nothing.",o:[
   ["I see the callback was promised and never logged. That’s on us. I can book the next available visit myself and make sure it’s confirmed by text before we hang up.",2,"Specific ownership and a concrete action."],
   ["I’m sure they did their best.",0,"Defending the company inflames the caller."],
   ["Let me check on that.",1,"Fine but vague; give the caller a plan."]]},
  {c:"That’s nice but I still want your supervisor. I don’t trust you to fix this.",o:[
   ["That’s fair, and I’ll arrange it. I’ll note everything we covered so you don’t repeat yourself. A supervisor can call you back within the hour, or you can hold now. Which do you prefer?",2,"Honors the request, protects the customer’s time, and offers a choice."],
   ["No supervisor will tell you anything different.",0,"Refusing a supervisor request is an auto-fail in most programs."],
   ["I’ll try to get them but I can’t promise anything.",1,"Honest but unhelpful. Offer a clear path."]]},
  {c:"Hold is fine. Thank you for not arguing with me.",o:[
   ["Thank you for your patience. I’m warm transferring you now and giving the supervisor the full story, so you won’t need to repeat any of it.",2,"Warm handoff, with context."],
   ["Transferring now.",1,"Correct but cold and without handoff."],
   ["Call back later if no one answers.",0,"Leaves the customer stranded again."]]}
 ]},

"t-found5":{title:"Social engineering at the front door",account:"Northwave Fiber",level:"mid",lang:"en",lesson:"f15",
 crm:{Name:"Dana Whitfield",Account:"NW-18-66120",Verify:"Not yet verified",Note:"Account holder on file: Dana Whitfield"},goal:"Do not break verification, stay polite, and offer a safe path.",
 turns:[
  {c:"Hi, I’m Dana’s husband. She’s at work. I need to change the Wi-Fi password and the email on the account.",o:[
   ["I’m happy to help. For security I can only make changes with the account holder. Dana can call, or she can add you as an authorized user. Can I walk you through how?",2,"Firm policy with a helpful path."],
   ["Sure, what’s her account number?",0,"You are starting to verify the wrong person for a sensitive change."],
   ["I can’t help you. Goodbye.",0,"Rude. Policy does not excuse tone."]]},
  {c:"Come on, I know everything. Her birthday is June 4th, and our address is 18 Mill Road. Just do it.",o:[
   ["Thank you for trying to help. Even with those details, I need the account holder or an authorized user. I can still help with general questions, such as how to get a modem restarted.",2,"Holds the line without insulting, and offers what is allowed."],
   ["Okay, that matches. Go ahead.",0,"Public facts do not verify identity. This is a classic breach."],
   ["I can’t tell you whether those are correct.",1,"Correct about not confirming, but wasted the chance to offer a path."]]},
  {c:"This is ridiculous. I’m going to cancel the account if you don’t help me.",o:[
   ["I understand it’s frustrating. I can’t change the account for you today, but Dana can add you in about two minutes by phone, and then you’d never need her again. Want me to note that for her?",2,"Empathy, no exception, and a quick solution."],
   ["Then go ahead and cancel.",0,"Dismissive."],
   ["Fine, I’ll just change the password.",0,"Giving in to a threat is what attackers count on."]]},
  {c:"Okay. Okay, fine. What do I tell her?",o:[
   ["Ask her to call this number, verify, and say she wants to add an authorized user. I’m leaving a note on the account so the next agent knows. Anything else I can do for you today?",2,"Clear next step and documentation."],
   ["Just tell her to call.",1,"Too thin; give the steps."],
   ["Her password is on her router sticker.",0,"Pointing around verification is a security failure."]]}
 ]},

"t-l1c":{title:"Locked out of MFA with a lost phone",account:"Orbit Software",level:"mid",lang:"en",lesson:"a15",
 crm:{Name:"Tom Reyes",Account:"ORB-8821",Verify:"Name + email + security Q",Issue:"New phone, no authenticator codes"},goal:"Verify, follow the recovery path, and never bypass MFA on a promise.",
 turns:[
  {c:"I got a new phone and my authenticator app is gone. I can’t log in to anything and I have a client demo in an hour.",o:[
   ["That’s stressful with a demo coming up. Let’s see what we can do. First I need to verify you. Can you confirm your name, the email on the account, and the answer to your security question?",2,"Empathy and verification before any recovery step."],
   ["Just disable the MFA for you then.",0,"Never disable MFA before verifying."],
   ["You’ll need to use your backup codes. Do you have those?",1,"Good idea, but verify first."]]},
  {c:"Tom Reyes, treyes@clientmail.com, and my first pet was Biscuit.",o:[
   ["Thank you, Tom, that matches. Do you have the backup codes you downloaded when you set up MFA, or any other signed-in device?",2,"Checks the self-service options first."],
   ["Great, I’ll reset it now.",1,"Verified, but try the self-service options first."],
   ["That’s not enough, I can’t help.",0,"Verification passed; refusing breaks the call."]]},
  {c:"No backup codes. I never saved them.",o:[
   ["No problem, there’s a recovery path. I’ll start an identity reset that sends a secure link to your verified email. After you open it, you’ll scan a new QR code on your new phone. Shall we begin?",2,"Clear recovery path with a plain explanation."],
   ["I’ll just read you the code.",0,"We never read codes or secrets aloud."],
   ["You’ll have to wait 3 days.",1,"May be true but give the process and options."]]},
  {c:"The link came through. Now what?",o:[
   ["Open it on your new phone, scan the QR code that appears with your authenticator app, and tell me when you see a six-digit code. Do not read it to me; type it into the login page.",2,"Gives a step and protects the code."],
   ["Read me the six digits and I’ll type it.",0,"Never ask for the code."],
   ["Try logging in.",1,"Not enough guidance."]]}
 ]},

"t-l1d":{title:"Reading a speed test with a customer",account:"Northwave Fiber",level:"mid",lang:"en",lesson:"a7",
 crm:{Name:"Eli Park",Account:"NW-55-20871",Verify:"Verified",Plan:"500 Mbps"},goal:"Get a meaningful speed test, explain the numbers and find the real bottleneck.",
 turns:[
  {c:"I pay for 500 and Google says I get 40. Fix it.",o:[
   ["Let’s test properly. Is your computer wired to the router, or on Wi-Fi? And is anything else downloading?",2,"Isolates the biggest variable first."],
   ["That’s normal for Wi-Fi.",0,"Dismissive and unverified."],
   ["Restart the router and call back.",0,"Skips discovery."]]},
  {c:"Wi-Fi. I’m in the bedroom, the router is downstairs.",o:[
   ["Thanks. Wi-Fi from a different floor can cut the speed a lot. Let’s test from the router’s room first, ideally with a cable, so we see what the line itself delivers.",2,"Explains cause and sets up a controlled test."],
   ["Move your router upstairs.",1,"Possibly right, but test first."],
   ["Wi-Fi is always slower, it’s fine.",0,"Not informative."]]},
  {c:"Okay, I’m next to it with a cable. It says 470 down.",o:[
   ["That’s excellent. Your line is delivering what you pay for. The problem is the Wi-Fi in the bedroom, so now we can fix that: placement, band, or an extender.",2,"Interprets the result and points to the cause."],
   ["Then there is no issue.",0,"Ends the call without solving the actual problem."],
   ["Still low, I’ll send a technician.",0,"470 is nearly the full speed, a dispatch is wrong."]]},
  {c:"So what do I do?",o:[
   ["Try the 5 GHz network in the bedroom, and tell me what you get. If it’s still under 150, a mesh or extender will likely help. I’ll explain both so you can choose.",2,"Next step, a threshold and options."],
   ["Buy a new router.",1,"Might be unnecessary."],
   ["Call back if it persists.",0,"Pushes work back to the customer."]]}
 ]},

"t-l1e":{title:"Card terminal down at a coffee shop",account:"Brightpay POS",level:"mid",lang:"en",lesson:"a20",
 crm:{Name:"Gina Alvarez",Account:"BP-3302",Verify:"Verified",Issue:"Terminal says Offline",Store:"Line of customers waiting"},goal:"Triage quickly: network, then power, then escalate. Keep the store selling.",
 turns:[
  {c:"My card machine says offline and I have a line out the door!",o:[
   ["Let’s get you selling fast. First, can you take cash or a backup method for the next few minutes while we fix this? Then tell me what the screen shows exactly.",2,"Protects the business, then diagnoses."],
   ["Please hold while I pull up your account.",0,"Dead air while a line grows."],
   ["Turn it off and on.",1,"Reasonable, but without protecting revenue or discovery."]]},
  {c:"It says Offline, and the Wi-Fi symbol has an X.",o:[
   ["That points to the network. Is the shop’s Wi-Fi working on your phone right now?",2,"Narrows the scope in one question."],
   ["Replace the terminal.",0,"Premature."],
   ["Is it plugged in?",1,"Fine but the symbol already told you it is powered."]]},
  {c:"My phone also has no internet. The router lights are red.",o:[
   ["Then the terminal is fine, the store’s internet is down. Please power-cycle the router: unplug it for 30 seconds and plug it back in. Meanwhile, I’ll check the area for an outage.",2,"Correct diagnosis, one step, parallel check."],
   ["Then it’s not our problem, call your internet provider.",1,"Technically right, but cold. Offer a path."],
   ["Factory reset the terminal.",0,"Unneeded and risky."]]},
  {c:"Lights are green now but it says Connecting.",o:[
   ["Great sign. Give it up to two minutes. If it connects, run a one-dollar test sale to confirm. I’ll stay on the line.",2,"Patience plus a verification step."],
   ["It should work, bye.",0,"No confirmation."],
   ["Replace the terminal.",0,"Premature."]]}
 ]},

"t-l2b":{title:"Email bouncing: reading the NDR",account:"Orbit Software",level:"advanced",lang:"en",lesson:"b14",
 crm:{Name:"Marcus Hill",Account:"ORB-9903",Verify:"Verified",Domain:"hillandsons.com",Issue:"Messages to one client bounce"},goal:"Read the bounce, identify the cause, and explain the fix without jargon.",
 turns:[
  {c:"Every email I send to a customer at bluepeak.com bounces back. Other customers are fine.",o:[
   ["Good detail, thanks. Can you read me the error code and text from the bounce message? It usually starts with 550 or 554.",2,"Gets the NDR, the key evidence."],
   ["Let me reset your email password.",0,"Unrelated to the symptom."],
   ["Try again in an hour.",0,"Does not use the bounce data."]]},
  {c:"It says 550 5.7.1 sender blocked by policy, SPF check failed.",o:[
   ["That tells us bluepeak’s server rejected the message because it couldn’t confirm your domain is allowed to send from that service. It’s an SPF record issue on your side. I’ll check your DNS.",2,"Translates the code into a cause and a next step."],
   ["Bluepeak blocked you, call them.",1,"Half right; the SPF is yours to fix."],
   ["Your mailbox is full.",0,"Wrong code family."]]},
  {c:"What does the SPF record look like now?",o:[
   ["I see the record only lists your old provider. We need to add the current mail service. I’ll walk you through the exact line to add, and you’ll need your domain registrar login.",2,"States the finding and the requirement."],
   ["It’s fine.",0,"Contradicts the bounce."],
   ["I’ll just change it for you.",1,"Needs consent and access to the DNS."]]},
  {c:"Done. How long until it works?",o:[
   ["DNS changes can take up to a few hours, often minutes. Send a test to bluepeak in 30 minutes, and if it still bounces, send me the new bounce and I’ll recheck. I’ll note the ticket with the record change.",2,"Realistic timeline, retest, documentation."],
   ["Immediately.",0,"Overpromising."],
   ["Wait a day.",1,"Vague and over-cautious."]]}
 ]},

"t-l2c":{title:"Smart-home gadgets dropping off Wi-Fi",account:"Northwave Fiber",level:"advanced",lang:"en",lesson:"b8",
 crm:{Name:"Helen Cho",Account:"NW-62-80031",Verify:"Verified",Issue:"Smart plugs offline after router change"},goal:"Identify the 2.4 GHz and band-steering cause, and fix without breaking other devices.",
 turns:[
  {c:"I got a new router last week. Now my smart plugs and the doorbell keep going offline.",o:[
   ["Thanks. Does the new router have one Wi-Fi name for both bands, or two separate ones?",2,"Targets the likeliest cause."],
   ["Replace the plugs.",0,"They worked before the router change."],
   ["Restart the plugs.",1,"Harmless but doesn’t explore the change."]]},
  {c:"One name. The router says it combines both.",o:[
   ["That’s the likely cause. Many smart devices only work on 2.4 GHz and can fail when the router steers them to 5. We can split the bands into two names, then connect the gadgets to the 2.4 one.",2,"Explains and proposes a targeted fix."],
   ["Turn off 5 GHz entirely.",1,"Works but harms speed for other devices."],
   ["Smart devices are unreliable.",0,"Not an answer."]]},
  {c:"Won’t my phone and laptop be affected?",o:[
   ["No. They can stay on the 5 GHz name and keep the speed. Only the gadgets use the 2.4 name. I’ll guide you to the settings step by step.",2,"Answers the worry."],
   ["Maybe.",0,"Uncertain."],
   ["They’ll slow down.",0,"Inaccurate."]]},
  {c:"Done. The plug is still not connecting.",o:[
   ["Common catch: the phone you use to set it up must also be on 2.4 GHz during setup. Switch your phone to the 2.4 name, try again, and then switch back.",2,"A real-world fix pitfall."],
   ["Then the plug is broken.",0,"Premature."],
   ["Factory reset the router.",0,"Disruptive."]]}
 ]},

"t-l3b":{title:"The executive demands credits",account:"Northwave Business",level:"advanced",lang:"en",lesson:"c15",
 crm:{Name:"Rachel Stein, COO",Account:"NWB-1007",Verify:"Verified",Incident:"4-hour outage yesterday, SLA 99.9%",Contract:"Credit = 5% per full hour over SLA, capped"},goal:"Stay factual, commit only to what the contract says, and route to the right owner.",
 turns:[
  {c:"We lost four hours of sales yesterday. I want a full month’s credit and an explanation within the hour.",o:[
   ["Rachel, I’m sorry. Four hours is serious for your business. I have the incident record in front of me. Let me confirm the facts and what your contract provides, then I’ll tell you exactly what happens next.",2,"Acknowledges and moves to facts, no promises."],
   ["I can give you the month.",0,"Beyond your authority."],
   ["Credits aren’t guaranteed.",1,"Possible, but too blunt without context."]]},
  {c:"Facts? You people knew about the fiber cut at nine and didn’t tell us until noon.",o:[
   ["That gap is a fair concern, and I’ll make sure it’s in the review. The log shows the cut at 9:05 and the first customer notice at 11:52. I won’t defend that, I’ll document it.",2,"Honest, uses the timeline, takes notes."],
   ["We notified as soon as we could.",0,"Contradicts the data."],
   ["I wasn’t here at the time.",0,"Deflects."]]},
  {c:"And my legal team will be calling about breach of contract.",o:[
   ["Understood. I’ll give your legal team the right contact and the incident record request process. I can’t comment on legal matters, but I will make sure the account owner and our legal contact are notified today.",2,"Calm, no legal opinions, correct routing."],
   ["Go ahead and sue us.",0,"Never."],
   ["Then I can’t talk to you.",0,"Escalating tension."]]},
  {c:"So what are you actually going to do right now?",o:[
   ["Three things: submit the SLA credit request with the four-hour window, ask for a written root cause within the committed time, and have your account manager call you by 3 p.m. today. You’ll get an email confirming all three in minutes.",2,"Specific, time-boxed, within authority."],
   ["I’ll try my best.",0,"Vague."],
   ["Wait for an email.",1,"Passive."]]}
 ]},

"t-csr6":{title:"Item arrived damaged",account:"Meridian Retail",level:"basic",lang:"en",lesson:"d12",
 crm:{Name:"Alex Moore",Order:"MR-77120",Item:"Ceramic lamp",Status:"Delivered 3 days ago",Policy:"Damage claims within 30 days; photo required"},goal:"Empathize, ask for photos, offer replacement or refund per policy, set expectations.",
 turns:[
  {c:"The lamp I ordered showed up in pieces. This was a gift!",o:[
   ["I’m so sorry, Alex. That’s disappointing, especially for a gift. I’ll make it right. Can you send photos of the box and the lamp so I can start the claim?",2,"Empathy, ownership and the evidence step."],
   ["Did you drop it?",0,"Accusatory."],
   ["Shipping damage isn’t our fault.",0,"Blame-shifting."]]},
  {c:"I can email the photos right now. What happens next?",o:[
   ["Once I see them, you can choose a free replacement or a full refund. Replacement ships in 2 business days with tracking.",2,"Options and timeline."],
   ["We’ll look into it.",0,"Vague."],
   ["You’ll get a refund.",1,"Right, but you left out the replacement option."]]},
  {c:"I need it by Friday for the party. Can you rush it?",o:[
   ["I can’t guarantee Friday, and I don’t want to promise something I can’t keep. I can upgrade you to express shipping at no cost, which usually arrives in two days. Would you like that?",2,"Honest, offers the best available."],
   ["Yes, it will definitely arrive by Friday.",0,"A promise you can’t control."],
   ["No rush options.",1,"Missed the express option."]]},
  {c:"Express is great. Thank you.",o:[
   ["Wonderful. The replacement is set with express shipping, and you’ll get tracking by email today. I noted the damage claim on your order. Is there anything else I can do?",2,"Confirms, documents and closes."],
   ["Okay, bye.",0,"Abrupt."],
   ["Check your email.",1,"Needs a summary."]]}
 ]},

"t-csr7":{title:"Prior authorization denied",account:"Harbor Health Plan",level:"advanced",lang:"en",lesson:"d22",
 crm:{Member:"Nora Banks",ID:"HH-445871",Verify:"Name + DOB + member ID",Case:"MRI denied, prior auth not on file",Note:"Provider submitted late"},goal:"Explain the denial, the provider’s role, and the appeal or resubmission paths. No medical advice.",
 turns:[
  {c:"My doctor ordered an MRI and you denied it. I’m in pain and I need it.",o:[
   ["I’m sorry you’re hurting, Nora. Let me find out exactly why it was denied and what we can do. I see the request needs a prior authorization that was not on file when it was submitted.",2,"Empathy and the specific reason."],
   ["That is your doctor’s mistake.",0,"Blaming."],
   ["It’s not covered.",0,"Inaccurate; the reason is paperwork."]]},
  {c:"So my doctor has to do something?",o:[
   ["Yes, the provider’s office submits the authorization with the medical reason. I can see the request is open, so it can be resubmitted. I recommend you call the office and ask them to resubmit today.",2,"Clear owner and next step."],
   ["I will approve it.",0,"Not within the agent’s role."],
   ["Wait a few weeks.",0,"Delays care."]]},
  {c:"What if they deny it again?",o:[
   ["You have the right to appeal. I can explain the steps and deadlines, and if the situation is urgent, ask for an expedited review. I can’t say how it will be decided.",2,"Rights, urgency path, no prediction."],
   ["They won’t.",0,"False reassurance."],
   ["You’ll have to pay.",1,"May be true, but without the appeal path."]]},
  {c:"Should I get the MRI anyway and see if you pay?",o:[
   ["I can’t advise on your medical care, but I can tell you that a service without an authorization may not be covered and you could be billed. The safest step is to wait for the approval. Would you like me to note that urgency on the case?",2,"No medical advice, but a financial caution, and an action."],
   ["Sure, go ahead.",0,"Risky guidance."],
   ["Don’t, it’s a waste.",0,"Medical judgment."]]}
 ]},

"t-csr8":{title:"Setting up a payment arrangement",account:"Cedar Utilities",level:"mid",lang:"en",lesson:"d7",
 crm:{Name:"Luis Ortega",Account:"CU-90871",Verify:"Verified",Balance:"$412, 25 days past due",Policy:"Up to 3 installments, first payment today"},goal:"Offer the arrangement, confirm affordable terms, and avoid disconnection language threats.",
 turns:[
  {c:"I got a notice that my power could be shut off. I just can’t pay all $412 right now.",o:[
   ["Thank you for calling before it happened, Luis. We have options. Let’s set up a payment arrangement that fits your budget. May I ask what amount you could pay today?",2,"Reassures and starts with their ability."],
   ["Pay it or get disconnected.",0,"Threatening."],
   ["You should have paid earlier.",0,"Judgmental."]]},
  {c:"Maybe $100 today.",o:[
   ["Thank you. With $100 today, the remaining $312 can be split into two payments of $156 on the next two due dates. That keeps your service on. Does that work for you?",2,"Applies the policy and checks fit."],
   ["That’s not enough.",1,"May be true, but offer a structure."],
   ["We can waive it.",0,"Not available."]]},
  {c:"Can the second payment be a little smaller?",o:[
   ["I can’t change the schedule under this plan. If the amounts don’t work, I can note your hardship, and a supervisor can review it. Would you like me to try that?",2,"Honest boundary with an escalation path."],
   ["Sure, just pay what you like.",0,"Not allowed."],
   ["No.",0,"Flat refusal."]]},
  {c:"Okay, let’s do the first plan.",o:[
   ["Great. I’ll take the $100 now, set the two $156 payments, and send a confirmation by email. Note that missing a payment can end the arrangement, so I’ll also set a reminder text. Anything else?",2,"Confirms the terms, the risk and reminder."],
   ["Done, bye.",0,"No summary."],
   ["You’re all set.",1,"Missing the terms recap."]]}
 ]},

"t-es4":{title:"Pedido que no llegó",account:"Meridian Retail",level:"basic",lang:"es",lesson:"e15",
 crm:{Cliente:"Rosa Medina",Pedido:"MR-80233",Estado:"Enviado hace 9 días",Política:"Reembolso o reenvío si pasan 10 días sin entrega"},goal:"Empatizar, revisar el rastreo y ofrecer reenvío o reembolso.",
 turns:[
  {c:"Hola, pedí unos zapatos hace dos semanas y todavía no llegan.",o:[
   ["Lamento la espera, señora Medina. Voy a revisar su pedido ahora mismo. ¿Me confirma su nombre completo y el número de pedido?",2,"Empatía y verificación."],
   ["Eso no es culpa nuestra.",0,"Evita responsabilidad."],
   ["Espere.",0,"Descortés."]]},
  {c:"Rosa Medina, pedido MR-80233.",o:[
   ["Gracias. Veo que se envió hace nueve días y el rastreo muestra que sigue en tránsito. Aún está dentro del plazo, pero quiero ayudarle. ¿Le sirve si lo vuelvo a revisar mañana y le aviso?",2,"Informa con datos y ofrece seguimiento."],
   ["Debe llegar pronto.",1,"Vago."],
   ["Ya llegó.",0,"Falso."]]},
  {c:"Pero lo necesito para el sábado.",o:[
   ["Entiendo la urgencia. No puedo garantizar el sábado. Si pasa el décimo día sin entrega, puedo enviar uno nuevo o reembolsarle. ¿Qué prefiere si eso sucede?",2,"Honesta y da opciones."],
   ["Sí llegará el sábado.",0,"Promesa falsa."],
   ["No hay nada que hacer.",0,"Rechazo sin opciones."]]},
  {c:"Reembolso, por favor, si no llega.",o:[
   ["Perfecto, lo dejo anotado: si no llega mañana, procesaremos el reembolso completo y le enviaré un correo. ¿Hay algo más en lo que le pueda ayudar?",2,"Confirma el acuerdo y cierra."],
   ["Está bien.",0,"Sin resumen."],
   ["Llámenos otra vez.",1,"Traslada el trabajo al cliente."]]}
 ]},

"t-es5":{title:"Cancelar el servicio sin presión",account:"Northwave Fiber",level:"mid",lang:"es",lesson:"e18",
 crm:{Cliente:"Esteban Rojas",Cuenta:"NW-70-33104",Verifica:"Verificado",Plan:"300 Mbps, $65/mes",Oferta:"Disponible: plan de $50 por 12 meses"},goal:"Preguntar el motivo, ofrecer una alternativa una sola vez y respetar la decisión.",
 turns:[
  {c:"Quiero cancelar mi internet.",o:[
   ["Con gusto le ayudo, señor Rojas. ¿Me puede decir el motivo? Si es el precio o un problema, quizás podamos resolverlo.",2,"Respeta y explora el motivo."],
   ["No puede cancelar sin pagar.",0,"Amenaza."],
   ["¿Está seguro? Se va a arrepentir.",0,"Presión."]]},
  {c:"Es muy caro. Pago sesenta y cinco y casi no lo uso.",o:[
   ["Entiendo. Tengo un plan de cincuenta dólares al mes por doce meses, con la misma velocidad. ¿Le gustaría escucharlo, o prefiere seguir con la cancelación?",2,"Ofrece una alternativa y deja elegir."],
   ["Todos los precios son así.",0,"Desestima."],
   ["Voy a cancelar.",1,"Respeta, pero sin explorar ayuda."]]},
  {c:"No, igual quiero cancelar.",o:[
   ["Muy bien, respeto su decisión. Voy a procesarla. Debe devolver el módem en 30 días para evitar un cargo de cien dólares. ¿Le explico cómo?",2,"Respeta y explica el equipo."],
   ["Espere, tengo otra oferta mejor.",0,"Insistir es presionar."],
   ["Cancelado.",1,"Sin información importante."]]},
  {c:"Está bien. ¿Cuándo termina el servicio?",o:[
   ["El servicio termina el día quince, al final de su ciclo. Le enviaré el resumen y la etiqueta de devolución por correo. Gracias por haber sido cliente. ¿Algo más?",2,"Fecha, resumen y buen cierre."],
   ["Hoy.",1,"Falta detalle."],
   ["No sé.",0,"No sabe su propio proceso."]]}
 ]},

"t-ready1":{title:"Two problems in one call",account:"Northwave Fiber",level:"advanced",lang:"en",lesson:"r2",
 crm:{Name:"Kim Delgado",Account:"NW-90-11876",Verify:"Verified",Issue1:"Internet drops",Issue2:"Bill is $30 higher"},goal:"List both issues, sequence them, solve the urgent one first, and keep control.",
 turns:[
  {c:"My internet keeps dropping, and also my bill went up by thirty dollars and nobody told me.",o:[
   ["I’m sorry about both, Kim. So I don’t lose track, I’ll handle the internet drops first since that affects you right now, and then we’ll go through the bill. Is that okay?",2,"Acknowledges both, sequences, asks permission."],
   ["Let’s do the bill first.",1,"Not wrong, but you didn’t ask what is urgent."],
   ["Which one do you want?",0,"Passes the work to the customer."]]},
  {c:"Sure, internet first. It drops every hour or so.",o:[
   ["Thanks. When it drops, what do the modem lights show, and does it come back on its own?",2,"Discovery question."],
   ["Restart the modem.",1,"Premature."],
   ["Let me switch to billing.",0,"Abandons the plan."]]},
  {c:"The online light goes orange, then comes back after a minute.",o:[
   ["That pattern suggests a line signal issue. I’ll check your levels and open a technician visit if they’re out of range. Let me look now, and I’ll tell you what I see.",2,"Interprets and acts."],
   ["That’s normal.",0,"Unsupported."],
   ["Keep an eye on it.",0,"No action."]]},
  {c:"Okay. And the bill?",o:[
   ["Thanks for waiting. Now the bill: your promo ended last month, which raised the price by thirty dollars. I can see if you qualify for a new offer. Would you like me to check?",2,"Returns to issue 2 and explains clearly."],
   ["I don’t know why it went up.",0,"Did not check."],
   ["It’s on your statement.",1,"Dismissive."]]}
 ]}
});
