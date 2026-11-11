/* Hard talk-throughs: the options are close, so you have to think. [reply, score 0-2, feedback] */
Object.assign(window.TALKS=window.TALKS||{},{

"t-hard1":{title:"Hard: angry caller who is partly right",account:"Northwave Fiber",level:"advanced",lang:"en",lesson:"f10",
 crm:{Name:"Derek Grant",Account:"NW-12-70441",Verify:"Verified",History:"2 technician visits cancelled by us without notice"},goal:"Own what was your company’s fault without over-promising, and keep control.",
 turns:[
  {c:"Two technicians cancelled on me and nobody called. I work from home. Why should I believe you can fix anything?",o:[
   ["You’re right to be angry. Two cancellations with no call is on us, and I’m sorry. I’m going to stay on the line until there is a confirmed visit you can rely on.",2,"Specific apology, true ownership, and a commitment you control."],
   ["I apologize for any inconvenience this may have caused. Let me see what I can do.",1,"Scripted and vague. “Any inconvenience” sounds like you did not listen."],
   ["I understand your frustration. I promise a technician will come tomorrow.",0,"A promise you may not control; breaking it will cost you the call and the customer."]]},
  {c:"Fine. But if you cancel again I’m leaving. What day can someone actually come?",o:[
   ["The earliest confirmed window I can see is Thursday 8 to 12. I can’t promise sooner, and I won’t book something I can’t trust. I’ll text you the confirmation and add a note that no one may cancel without calling you.",2,"Honest date, no false hope, and a protective note."],
   ["Tomorrow if I can swing it. Let me try.",0,"Raises hope you cannot guarantee."],
   ["Thursday is the earliest. That’s the schedule.",1,"Honest but cold, with no ownership or protection."]]},
  {c:"Thursday is no good, I have a client meeting. What else do you have?",o:[
   ["Thank you for telling me. Let me look at the afternoon slots and the weekend. Friday 1 to 5 is open. Would that work, and should I set a call-ahead so you aren’t surprised?",2,"Treats the constraint seriously and offers a safeguard."],
   ["Then you’ll have to take Thursday.",0,"Forces a choice instead of looking harder."],
   ["I can put you on a cancellation list.",1,"Sometimes useful, but you asked for a plan now."]]}
 ]},

"t-hard2":{title:"Hard: the sympathetic third party",account:"Bright Bank",level:"advanced",lang:"en",lesson:"d14",
 crm:{Cardholder:"Evelyn Rhodes",Account:"BB-5520",Verify:"Account holder must verify (name, DOB, last 4 SSN)",Authorized:"No authorized users on file",Alert:"Possible fraud on card"},goal:"Do not discuss the account with an unverified caller, and still be genuinely helpful.",
 turns:[
  {c:"I’m calling for my mother Evelyn. She’s 82 and thinks someone stole her card. She can barely hear on the phone, so I’m doing it for her.",o:[
   ["I’m so sorry, that sounds scary. For her safety I can’t discuss the account unless she verifies or is an authorized user. But I can still help right now. Is she with you? She can speak with me for a minute, and you can stay on the line.",2,"Protects the account, shows empathy and offers a workable path."],
   ["I can lock the card for you as a courtesy, just give me the card number.",0,"Even a “lock” needs an owner or documented process; you are inviting an impersonator."],
   ["I can’t talk to you. Have her call.",1,"Correct policy, but cold and unhelpful for an urgent fraud worry."]]},
  {c:"She’s right here but she can’t remember her Social. Can you just confirm the last four on file so she can say yes?",o:[
   ["I can’t read any information to the caller. Let’s try the other items: her full name, date of birth and the address on file. If she can answer those, I can help; if not, she can visit a branch or I can send a verification link to the number on file.",2,"Never gives data; offers alternative verification routes."],
   ["It ends in 4412. Does that sound right?",0,"A verification failure and a data leak in one line."],
   ["Then I can’t do anything.",1,"Too final; there were legitimate alternatives."]]},
  {c:"She’s in tears. Please, can you at least tell me if there is fraud on the account?",o:[
   ["I understand, and I wish I could say more. Confirming anything about the account isn’t allowed until we verify. The fastest safe step is for her to verify with me now, or use the link. I’ll stay on the line while she does.",2,"Firm, kind and keeps moving toward resolution."],
   ["There are two suspicious charges.",0,"Disclosure to an unverified caller."],
   ["Please stop pressuring me.",0,"Sharp tone to a distressed caller."]]},
  {c:"Okay, she’ll answer. Her name is Evelyn Rhodes, born March 3, 1943.",o:[
   ["Thank you, Evelyn’s son. Evelyn, I’m going to ask you directly now. Can you confirm your full name, your date of birth and your address on file? Take your time.",2,"Redirects verification to the owner herself."],
   ["That matches. You’re verified, go ahead.",0,"Third-party answers do not verify the account holder."],
   ["Let me put you on hold.",1,"Not harmful, but unneeded and the call is urgent."]]}
 ]},

"t-hard3":{title:"Hard: wrong fix first, then the real one",account:"Orbit Software",level:"advanced",lang:"en",lesson:"b6",
 crm:{Name:"Jun Takeda",Account:"ORB-6601",Verify:"Verified",Issue:"Video calls freeze",Data:"Ping to gateway 1ms, ping to 8.8.8.8 avg 180ms with 9% loss"},goal:"Read the data correctly: the problem is beyond the home network.",
 turns:[
  {c:"My video calls freeze for a few seconds. I pinged my router like you said: 1 millisecond. Everything is fine, right?",o:[
   ["That’s a good result: your home network is healthy. Now ping something outside, like 8.8.8.8, and tell me the average and the percentage of loss.",2,"Reads the result correctly and moves outward."],
   ["Great, so it’s your Wi-Fi. Let’s move your router.",0,"1 ms to the gateway says the local link is fine."],
   ["Try restarting the router anyway.",1,"Harmless but unsupported by the data."]]},
  {c:"For 8.8.8.8: average 180 milliseconds, 9% loss.",o:[
   ["That’s high latency and real packet loss, which would absolutely freeze a video call. Since the router is fine, the problem is between your modem and the internet. Next, a traceroute will show where it starts.",2,"Interprets both numbers and names the segment."],
   ["Loss under 10% is normal.",0,"Incorrect and dismissive; 9% breaks real-time calls."],
   ["Your internet is slow. Run a speed test.",1,"A speed test measures capacity, not loss or latency."]]},
  {c:"Traceroute: hop 1 is 1ms, hop 2 is 8ms, hop 3 jumps to 170ms and drops packets.",o:[
   ["The trouble starts at hop 3, which is outside your home and likely in our network or the next provider. I’ll open a ticket with the traceroute attached and tell you what to expect next.",2,"Locates the break and escalates with evidence."],
   ["Reset your modem again.",0,"The data points past your equipment."],
   ["It’s probably the website you’re calling.",0,"The loss shows up on a neutral target."]]}
 ]},

"t-hard4":{title:"Hard: the retention save that backfires",account:"Northwave Fiber",level:"advanced",lang:"en",lesson:"d23",
 crm:{Name:"Marta Silva",Account:"NW-81-55290",Verify:"Verified",Plan:"$70/mo",Offer:"One retention offer: $15 off for 6 months",Reason:"Moving out of the service area"},goal:"Spot that the reason is not price, skip the save, and cancel cleanly.",
 turns:[
  {c:"I need to cancel. I’m moving to another city next month.",o:[
   ["Congratulations on the move, Marta. I can take care of that. Let me confirm your move date so I can set the right disconnect date.",2,"Hears the reason and moves to the task."],
   ["Before you go, we have a great discount that could save you money.",0,"The reason is the move, not price. A pitch here is pushy."],
   ["Is there anything we could do to keep you?",1,"Tone-deaf when the customer is leaving the area."]]},
  {c:"The 28th. Do I owe anything?",o:[
   ["Your service can end on the 28th and your final bill will be prorated. I do see a modem to return within 30 days to avoid a $100 fee. I’ll email the label.",2,"Specific facts and a clear next step."],
   ["You’ll get a bill. Don’t worry about it.",0,"Hides the equipment fee."],
   ["I’ll check and email you.",1,"Vague; the info is available now."]]},
  {c:"What if I take it with me? Does your service work there?",o:[
   ["Good question. Let me check coverage at the new address. If you give me the address, I can see if we serve it and, if so, move your service instead of cancelling.",2,"A real alternative that matches her need."],
   ["No, you must cancel.",0,"Assumes without checking."],
   ["Yes, of course it works.",0,"A guess; check coverage first."]]},
  {c:"Not served there. Okay, cancel it.",o:[
   ["I’m sorry we can’t follow you. I’ll cancel for the 28th and email the confirmation and the return label today. Is there anything else I can help with?",2,"Honors the decision, summarizes and closes."],
   ["Are you sure? We could try the discount.",0,"Reopening a closed decision."],
   ["Done.",1,"Missing the recap."]]}
 ]},

"t-hard5":{title:"Hard: lo sutil en la verificación",account:"Banco Alba",level:"advanced",lang:"es",lesson:"e16",
 crm:{Cliente:"Hugo Carrasco",Cuenta:"BA-7710",Verifica:"Nombre completo, fecha de nacimiento y últimos cuatro del SSN",Alerta:"Intento de inicio de sesión desde otro país"},goal:"Mantener la verificación aunque el cliente tenga prisa, y ofrecer un camino claro.",
 turns:[
  {c:"Hola, necesito que me bloqueen la tarjeta ya, es urgente. Soy Hugo Carrasco.",o:[
   ["Entiendo la urgencia, señor Carrasco. Para protegerlo, primero necesito verificar su identidad. ¿Me confirma su fecha de nacimiento y los últimos cuatro dígitos de su SSN?",2,"Muestra urgencia y protege la cuenta."],
   ["Listo, ya la bloqueo.",0,"Sin verificar, cualquiera puede bloquear o manipular la cuenta."],
   ["Debo verificar. Dé sus datos.",1,"Correcto, pero seco y sin empatía."]]},
  {c:"Mi fecha es 12 de mayo de 1981. Los últimos cuatro no los recuerdo ahora.",o:[
   ["Gracias. Para continuar, necesito otro dato válido. ¿Puede darme el domicilio registrado y el monto de su último depósito?",2,"Pide verificación alternativa válida."],
   ["Con eso basta, no se preocupe.",0,"Verificación incompleta."],
   ["Sin los cuatro dígitos no puedo ayudarle.",1,"Demasiado rígido, no ofrece alternativa."]]},
  {c:"Mi domicilio es calle Palma 41. El depósito fue de seiscientos.",o:[
   ["Gracias, señor Carrasco, está verificado. Voy a bloquear la tarjeta ahora y pedir una nueva. Le llegará en cinco a siete días hábiles. ¿Desea que revise los últimos movimientos?",2,"Verifica, actúa y ofrece el siguiente paso."],
   ["Verificado. Ya está.",1,"Falta explicar el plazo."],
   ["La tarjeta nueva llega mañana.",0,"Promesa incorrecta."]]},
  {c:"Sí, por favor. Me preocupa el intento de inicio de sesión.",o:[
   ["Entiendo. Voy a cambiar su contraseña con usted por el canal seguro, activar la verificación en dos pasos y marcar la cuenta para vigilancia. No le pediré su contraseña nueva por teléfono.",2,"Acciones claras y respeta la seguridad."],
   ["Dígame su contraseña actual para revisarla.",0,"Nunca pida contraseñas."],
   ["No se preocupe, es normal.",0,"Minimiza un posible fraude."]]}
 ]},

"t-hard6":{title:"Hard: two problems, wrong order",account:"Orbit Software",level:"advanced",lang:"en",lesson:"r2",
 crm:{Name:"Beth Okafor",Account:"ORB-4410",Verify:"Verified",Issue1:"Cannot send email, client waiting",Issue2:"Wants to add 3 licenses",Note:"Billing questions are handled by Sales; transfers available"},goal:"Urgent first, then the license add, then a correct handoff.",
 turns:[
  {c:"I need three more licenses today, and also my email won’t send. I have a client waiting on a contract.",o:[
   ["Understood, Beth. Let’s fix the email first because your client is waiting, then I’ll take care of the licenses. Does the message say anything when you try to send?",2,"Triages by urgency, then asks discovery."],
   ["Licenses first, since I can add those fast.",1,"Fast to do but not the customer’s urgent need."],
   ["I can’t help with both, call back.",0,"Gives up on a solvable call."]]},
  {c:"It says ‘mailbox full’.",o:[
   ["That explains it. Your mailbox is at its limit. I can clear space or raise the size; let’s start with the largest folders, then I’ll check whether adding a license would also increase storage.",2,"Interprets the message and checks a linked fix."],
   ["Just delete some emails.",1,"Valid but offered without guidance."],
   ["Restart Outlook.",0,"Does not match the error."]]},
  {c:"Okay it sends now. Now the licenses.",o:[
   ["Great. Licenses are handled by Sales. I’ll warm transfer you with a note: three licenses to add today, account verified, and the mailbox issue already fixed. That way you won’t repeat anything.",2,"Correct handoff with context."],
   ["I’ll add them now.",0,"Outside your remit per the account note."],
   ["Call Sales at this number.",1,"A cold handoff."]]}
 ]}
});
