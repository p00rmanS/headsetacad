/* Live-call walkthroughs: beginner-friendly, conversational, professional calls for TSR L1, L2 and L3,
   with the Spanish translation in parentheses after every line, plus more Spanish-line calls with English in parentheses. */
(function(){
const T=(en,es)=>en+" ("+es+")";
const A=(en,es,note)=>["a",T(en,es),note];
const C=(en,es,note)=>["c",T(en,es),note];
const S=(es,en,note)=>["a",T(es,en),note];
const K=(es,en,note)=>["c",T(es,en),note];

const L=[];

/* ---------- Phrasebook ---------- */
L.push({id:"bg0",track:"found",title:"Call phrasebook: say it in English (and Spanish)",level:"basic",account:"All accounts",mins:12,
teach:[
 ["How to use this","Every line below is a professional sentence you can say as is. The Spanish in parentheses helps you understand it and, on a bilingual line, say it. Learn the English first, then read the Spanish."],
 ["Opening a call","Brand, your name, then the question. Slow and warm. “Thank you for calling Northwave, this is Alex. Who am I speaking with?” (Gracias por llamar a Northwave, habla Alex. ¿Con quién tengo el gusto?)"],
 ["Verifying","Say why you ask. It sounds less like an interrogation. “For your security, I need to verify your account first.” (Por su seguridad, primero necesito verificar su cuenta.)"],
 ["Narrating while you work","Silence on a phone feels like being hung up on. “I’m opening your account now.” (Estoy abriendo su cuenta ahora.) “Thanks for waiting, I’m back.” (Gracias por esperar, ya regresé.)"],
 ["Closing well","Recap, notes, open door, thanks. “Is there anything else I can help you with today?” (¿Hay algo más en lo que pueda ayudarle hoy?)"]
],
steps:{h:"The shape of every call",items:[
 ["Open","Brand, name, ask theirs (Marca, su nombre, pregunte el de ellos)"],
 ["Verify","Name, address, security detail, with a reason (Con una razón)"],
 ["Discover","One question at a time (Una pregunta a la vez)"],
 ["Fix","Narrate each step (Narre cada paso)"],
 ["Close","Recap, notes, anything else, thanks (Resumen, notas, algo más, gracias)"]
]},
phrases:[
 ["Thank you for calling, this is Alex. Who am I speaking with?","Gracias por llamar, habla Alex. ¿Con quién tengo el gusto?"],
 ["I’m sorry you’re dealing with that. I can help.","Lamento que esté pasando por eso. Puedo ayudarle."],
 ["For your security, I need to verify your account first.","Por su seguridad, primero necesito verificar su cuenta."],
 ["Could you confirm your full name and the address on the account?","¿Me confirma su nombre completo y la dirección de la cuenta?"],
 ["Thank you, you’re verified.","Gracias, ya está verificado."],
 ["Let me look into that. I’ll tell you what I find as I go.","Déjeme revisar eso. Le iré diciendo lo que encuentre."],
 ["May I place you on a brief hold while I check?","¿Puedo ponerle en espera un momento mientras reviso?"],
 ["Thank you for holding. I appreciate your patience.","Gracias por esperar. Agradezco su paciencia."],
 ["What I can do is…","Lo que sí puedo hacer es…"],
 ["Let me repeat that back to make sure I have it right.","Permítame repetirlo para confirmar que lo tengo bien."],
 ["Can you tell me what the lights on the modem look like?","¿Me puede decir cómo se ven las luces del módem?"],
 ["Please give it about a minute.","Por favor, espere aproximadamente un minuto."],
 ["Is it working now?","¿Ya funciona?"],
 ["I’ve noted everything on your account so you won’t have to repeat it.","Dejé todo anotado en su cuenta para que no tenga que repetirlo."],
 ["Is there anything else I can help you with today?","¿Hay algo más en lo que pueda ayudarle hoy?"],
 ["Thank you for calling. Have a great day.","Gracias por llamar. Que tenga un excelente día."]
],
script:[
 A("Thank you for calling Northwave, this is Alex. Who am I speaking with?","Gracias por llamar a Northwave, habla Alex. ¿Con quién tengo el gusto?","Brand, name, ask theirs."),
 C("Hi, this is Dana Whitaker.","Hola, soy Dana Whitaker."),
 A("Thanks, Dana. How can I help you today?","Gracias, Dana. ¿En qué puedo ayudarle hoy?","Use their name once, early."),
 C("My internet is out.","Mi internet no funciona."),
 A("I’m sorry about that. I can help. For your security, I need to verify your account first.","Lamento eso. Puedo ayudar. Por su seguridad, primero necesito verificar su cuenta.","Empathy, offer, then the verification reason.")
],
qa:["Brand, name and their name","Reason given for verification","Narrates silence","Recap and notes","Warm close"],
quiz:[
 ["Why say “for your security” before asking verification questions?",["It is required by law to say it","It explains the question so it feels less like an interrogation","It speeds up the call"],1,"A reason makes verification feel like protection, not suspicion."],
 ["You need 40 seconds to look something up. What do you do?",["Stay silent and work","Narrate: “I’m opening your account now.”","Put them on hold with no warning"],1,"Silence sounds like a dropped call. Narrate or ask permission to hold."]
]});

/* ---------- TSR L1 ---------- */
L.push({id:"bg1",track:"l1",title:"Beginner call walkthrough: “My internet is down” (L1, with Spanish)",level:"basic",account:"Northwave Fiber (residential)",mins:16,
teach:[
 ["What this is","A complete beginner call, line by line, with the Spanish in parentheses. Read it like a script, then say it out loud, then cover the page and say it from memory."],
 ["Level 1 in one sentence","Level 1 fixes the common thing quickly and safely: verify, look at the basics, restart in the right order, confirm it works, and write it down. If the basics do not work, you hand off with notes."],
 ["Part 1: Beginning","Greet, get a name, verify, set the plan. This takes about a minute. Do not skip verification even if the customer is upset."],
 ["Part 2: Middle","One question at a time. Light colors first, then the restart order (modem first, then router), then wait, then test. Narrate everything."],
 ["Part 3: End","Recap in your own words, note the ticket, tell them what to do if it returns, ask if there is anything else, thank them."]
],
steps:{h:"L1 internet-down checklist",items:[
 ["Verify (Verifique)","Name, address, security detail"],
 ["Lights (Luces)","Power, internet, Wi-Fi: solid, blinking, red?"],
 ["Restart (Reinicio)","Unplug both, 30 seconds, modem first, router second"],
 ["Test (Prueba)","Open a website together"],
 ["Document (Documente)","Notes, ticket number, what to do if it returns"]
]},
phrases:[
 ["What color is the internet light right now?","¿De qué color está la luz de internet ahora?"],
 ["Unplug the modem and the router from the wall.","Desconecte el módem y el router de la pared."],
 ["Count thirty seconds, then plug in the modem first.","Cuente treinta segundos y conecte primero el módem."],
 ["Wait until the lights are solid.","Espere hasta que las luces estén fijas."],
 ["Try opening any website for me.","Intente abrir cualquier página web."],
 ["If it drops again, restart it this way and call us right away.","Si se cae otra vez, reinícielo así y llámenos enseguida."]
],
script:[
 A("Thank you for calling Northwave Fiber, this is Alex. Who am I speaking with?","Gracias por llamar a Northwave Fiber, habla Alex. ¿Con quién tengo el gusto?","BEGINNING. Brand, name, ask theirs."),
 C("Hi, this is Ben Carter. My internet is down and I need to work.","Hola, soy Ben Carter. No tengo internet y necesito trabajar."),
 A("Thanks, Ben. I’m sorry, that’s frustrating when you need to work. I can help. First I’ll verify your account for security, and then we’ll get you back online.","Gracias, Ben. Lamento eso, es frustrante cuando necesita trabajar. Puedo ayudar. Primero verifico su cuenta por seguridad y luego lo conectamos de nuevo.","Empathy plus the roadmap."),
 A("Could you give me your full name and the service address?","¿Me da su nombre completo y la dirección del servicio?"),
 C("Benjamin Carter, 42 Elm Street.","Benjamin Carter, calle Elm 42."),
 A("Thank you. And the last four digits of the phone number on the account?","Gracias. ¿Y los últimos cuatro dígitos del teléfono de la cuenta?"),
 C("It’s 3382.","Es 3382."),
 A("Perfect, Ben, you’re verified. Let’s see what’s going on. Can you look at the modem and tell me what color the internet light is?","Perfecto, Ben, ya está verificado. Veamos qué pasa. ¿Puede mirar el módem y decirme de qué color está la luz de internet?","MIDDLE. One question at a time."),
 C("It’s blinking orange.","Parpadea en naranja."),
 A("Thanks. Orange tells me the modem is not getting a signal. I’m going to check the line from my side, and then we’ll restart the modem together. Is that okay?","Gracias. El naranja me dice que el módem no recibe señal. Voy a revisar la línea desde mi lado y luego reiniciamos el módem juntos. ¿Le parece bien?","Plan plus a small yes."),
 C("Sure.","Claro."),
 A("I’m checking now… I don’t see an outage in your area, so a restart should help. Please unplug both the modem and the router from the wall.","Estoy revisando… no veo una falla en su zona, así que un reinicio debería ayudar. Por favor desconecte de la pared el módem y el router.","Narrate what you see."),
 C("Okay, they’re unplugged.","Listo, están desconectados."),
 A("Great. We’ll wait thirty seconds. I’ll count with you… Now plug in the modem first, and tell me when the lights settle.","Perfecto. Esperaremos treinta segundos. Cuento con usted… Ahora conecte primero el módem y dígame cuando las luces se estabilicen.","Order matters: modem, then router."),
 C("The internet light is solid green now.","La luz de internet está verde fija."),
 A("That’s what we want. Now plug in the router, give it about a minute, and then try opening a website for me.","Eso queremos. Ahora conecte el router, espere como un minuto y luego intente abrir una página web.","Always test with the customer."),
 C("It works! The page loaded.","¡Funciona! La página cargó."),
 A("Wonderful. So what we did was check your line, restart the modem and then the router, and the signal came back. I’ve put it all in your account notes, and your ticket number is 55120 in case you need it. If it drops again, restart it the same way and call us right away.","Qué bueno. Entonces revisamos su línea, reiniciamos el módem y luego el router, y volvió la señal. Dejé todo en las notas de su cuenta, y su número de ticket es 55120 por si lo necesita. Si se cae otra vez, reinícielo igual y llámenos enseguida.","END. Recap, notes, ticket, what to do next."),
 A("Is there anything else I can help you with today?","¿Hay algo más en lo que pueda ayudarle hoy?"),
 C("No, that’s everything. Thanks.","No, eso es todo. Gracias."),
 A("You’re welcome, Ben. Thank you for calling Northwave Fiber. Have a great day.","De nada, Ben. Gracias por llamar a Northwave Fiber. Que tenga un excelente día.","Warm close. The last 15 seconds drive the survey.")
],
qa:["Verified before touching the account","Asked one question at a time","Gave the restart order","Tested with the customer","Gave ticket number and next step"],
quiz:[
 ["Which device do you plug in first after a restart?",["The router","The modem","Either one"],1,"The modem needs to connect to the network first. Then the router can get an address from it."],
 ["The customer says it works. What is the best next move?",["Hang up quickly","Recap, give the ticket number, say what to do if it returns, then ask if anything else","Ask them to take a survey"],1,"A recap and a plan for ‘if it returns’ stops repeat calls."]
]});

L.push({id:"bg2",track:"l1",title:"Beginner call walkthrough: “I’m locked out of my account” (L1, with Spanish)",level:"basic",account:"Brightdesk IT",mins:16,
teach:[
 ["What this is","A password lockout call from start to finish. It teaches the single most important L1 rule: protect the account first, then help."],
 ["Part 1: Beginning","Brand and name, a clear empathy line (being locked out is stressful), and a reason for the verification."],
 ["Part 2: Middle","Verify with something other than the password. Send a reset code to the registered contact, wait, guide a strong password, test the sign-in."],
 ["Part 3: End","Recap, tell them about two-step verification, note the ticket, offer anything else, close warmly."],
 ["Never do this","Never tell a caller what the old password was, never email a password, and never skip verification for someone ‘in a hurry’."]
],
steps:{h:"L1 account unlock checklist",items:[
 ["Verify (Verifique)","Use details that are not the password"],
 ["Send code (Envíe código)","To the contact on file, never a new one"],
 ["Guide (Guíe)","They choose the new password, you never see it"],
 ["Test (Pruebe)","Sign in together"],
 ["Secure (Asegure)","Offer two-step verification and note the ticket"]
]},
phrases:[
 ["I’ll send a code to the phone number on the account.","Enviaré un código al teléfono de la cuenta."],
 ["Please read me only the code, not your password.","Por favor, léame solo el código, no su contraseña."],
 ["Choose a password of at least twelve characters.","Elija una contraseña de al menos doce caracteres."],
 ["I won’t see the password you choose.","No veré la contraseña que elija."],
 ["Let’s sign in together to make sure it works.","Iniciemos sesión juntos para confirmar que funciona."],
 ["I recommend turning on two-step verification.","Le recomiendo activar la verificación en dos pasos."]
],
script:[
 A("Thank you for calling Brightdesk support, this is Alex. Who am I speaking with?","Gracias por llamar a soporte de Brightdesk, habla Alex. ¿Con quién tengo el gusto?","BEGINNING."),
 C("Hi, I’m Priya Nair. I’m locked out of my account and I have a deadline.","Hola, soy Priya Nair. Estoy bloqueada de mi cuenta y tengo una fecha límite."),
 A("Thanks, Priya. Being locked out right before a deadline is stressful, and I’m glad you called. I’ll verify you first, since it protects your account, and then we’ll reset it together.","Gracias, Priya. Quedar bloqueada justo antes de una fecha límite es estresante, y me alegra que llamara. La verifico primero porque protege su cuenta y luego la restablecemos juntas.","Empathy plus the reason for verification."),
 A("Could you confirm your full name and the email address on the account?","¿Me confirma su nombre completo y el correo de la cuenta?"),
 C("Priya Nair, priya.nair at brightmail dot com.","Priya Nair, priya.nair en brightmail punto com."),
 A("Thank you. For a second check, what’s the company name on the account?","Gracias. Para una segunda verificación, ¿cuál es el nombre de la empresa en la cuenta?"),
 C("Harbor Design.","Harbor Design."),
 A("Perfect, you’re verified. I’m going to send a six-digit code to the phone on file, ending in 4410. It should arrive in a few seconds.","Perfecto, ya está verificada. Voy a enviar un código de seis dígitos al teléfono registrado, que termina en 4410. Debería llegar en unos segundos.","MIDDLE. Send only to the contact on file."),
 C("I got it. Should I read it to you?","Ya lo recibí. ¿Se lo leo?"),
 A("Yes, please read me just the code. Never your password.","Sí, por favor, léame solo el código. Nunca su contraseña.","Say the rule out loud."),
 C("It’s 624913.","Es 624913."),
 A("That matches. I’ve unlocked the account. Now you’ll choose a new password, at least twelve characters. I won’t see what you type. Let me know when it’s done.","Coincide. Ya desbloqueé la cuenta. Ahora elegirá una contraseña nueva, de al menos doce caracteres. No veré lo que escriba. Avíseme cuando termine."),
 C("Done. It accepted it.","Listo. La aceptó."),
 A("Great. Let’s sign in together to be sure. Go ahead and try the login page.","Perfecto. Iniciemos sesión juntos para asegurarnos. Pruebe la página de inicio de sesión."),
 C("I’m in. Thank you so much.","Ya entré. Muchísimas gracias."),
 A("You’re welcome. I recommend turning on two-step verification, so a lockout like this is harder to happen again. Would you like me to walk you through it?","De nada. Le recomiendo activar la verificación en dos pasos para que un bloqueo así sea más difícil que ocurra otra vez. ¿Quiere que le explique cómo?","END begins: offer a prevention step."),
 C("Not today, I have to get back to work.","Hoy no, tengo que volver al trabajo."),
 A("No problem. To recap, we verified you, sent a code, you reset your password, and you’re signed in. I’ve noted it all in your account, ticket 88017. Is there anything else I can help you with?","Sin problema. En resumen, la verificamos, enviamos un código, restableció su contraseña e inició sesión. Dejé todo anotado en su cuenta, ticket 88017. ¿Hay algo más en lo que pueda ayudarle?"),
 C("No, that’s it.","No, eso es todo."),
 A("Good luck with the deadline, Priya. Thank you for calling Brightdesk. Have a great day.","Mucha suerte con la fecha límite, Priya. Gracias por llamar a Brightdesk. Que tenga un excelente día.")
],
qa:["Verified with details other than the password","Code sent only to the contact on file","Never saw the password","Tested sign-in together","Offered two-step verification"],
quiz:[
 ["A caller offers to read you their old password. What do you say?",["Go ahead","Please don’t, I only need the code we sent","Spell it slowly"],1,"You never need or store a password. Ask only for the code."],
 ["The customer says they changed phones and can’t get the code. What now?",["Send it to a new number they give you","Offer another verified route, such as the recovery email on file","Skip the code"],1,"Only use contact details already on the account, never new ones from the caller."]
]});

L.push({id:"bg3",track:"l1",title:"Beginner call walkthrough: setting up a new router (L1, with Spanish)",level:"basic",account:"Northwave Fiber (residential)",mins:16,
teach:[
 ["What this is","A friendly guided setup. The customer is not angry, just unsure. Your job is to be a patient teacher: small steps, check each result, and celebrate small wins."],
 ["Part 1: Beginning","Greet, verify, and ask what they already tried. Learn the customer’s comfort level before you give instructions."],
 ["Part 2: Middle","Describe things by color and shape (“the box with the antennas”). Never assume they know what ‘WAN’ or ‘SSID’ means. Check each step before the next."],
 ["Part 3: End","Have them write down the new name and password, test a device, recap, and note it on the account."]
],
steps:{h:"L1 router setup checklist",items:[
 ["Identify (Identifique)","Modem versus router, by description"],
 ["Connect (Conecte)","Modem, then router, then power"],
 ["Name and password (Nombre y clave)","Make them write it down"],
 ["Test (Pruebe)","Two devices if possible"],
 ["Note (Anote)","Account notes, ticket, next steps"]
]},
phrases:[
 ["Tell me what you see on the back of the router.","Dígame qué ve en la parte de atrás del router."],
 ["The yellow port is for the cable from the modem.","El puerto amarillo es para el cable del módem."],
 ["Wait for the light to turn solid white.","Espere a que la luz se ponga blanca fija."],
 ["Choose a name that doesn’t include your address.","Elija un nombre que no incluya su dirección."],
 ["Write the password down somewhere safe.","Anote la contraseña en un lugar seguro."],
 ["You did great. That’s the hardest part.","Lo hizo muy bien. Esa es la parte más difícil."]
],
script:[
 A("Thank you for calling Northwave Fiber, this is Alex. Who am I speaking with?","Gracias por llamar a Northwave Fiber, habla Alex. ¿Con quién tengo el gusto?","BEGINNING."),
 C("Hi, this is Tom Alvarez. I got a new router in the mail and I don’t know how to set it up.","Hola, soy Tom Alvarez. Me llegó un router nuevo por correo y no sé cómo configurarlo."),
 A("Welcome, Tom, and congratulations on the new router. I’ll help you set it up step by step. First I’ll verify your account. May I have your full name and the service address?","Bienvenido, Tom, y felicidades por el router nuevo. Le ayudaré a configurarlo paso a paso. Primero verifico su cuenta. ¿Me da su nombre completo y la dirección del servicio?"),
 C("Thomas Alvarez, 9 Cedar Court.","Thomas Alvarez, Cedar Court 9."),
 A("Thank you, and the last four digits of your account PIN?","Gracias. ¿Y los últimos cuatro dígitos del PIN de su cuenta?"),
 C("7719.","7719."),
 A("You’re verified. Before we start, have you set up a router before, or is this your first time?","Ya está verificado. Antes de empezar, ¿ha configurado un router antes o es la primera vez?","Learn their level so you can set the pace."),
 C("First time. I’m not very technical.","Primera vez. No soy muy técnico."),
 A("No problem at all, I’ll go slowly and tell you exactly what to look for. Do you have the old router still plugged in?","No hay problema, iré despacio y le diré exactamente qué buscar. ¿Todavía tiene conectado el router viejo?","MIDDLE. Normalize being a beginner."),
 C("Yes.","Sí."),
 A("Let’s unplug it from the power. Then look at the new box. On the back there’s a yellow port. Do you see it?","Desconéctelo de la corriente. Luego mire la caja nueva. En la parte de atrás hay un puerto amarillo. ¿Lo ve?"),
 C("Yes, I see it.","Sí, lo veo."),
 A("Great. Take the cable that goes from the wall box, the modem, and plug it into the yellow port. You’ll hear a small click.","Perfecto. Tome el cable que sale de la caja de la pared, el módem, y conéctelo al puerto amarillo. Escuchará un clic pequeño.","Describe by color and sound."),
 C("Done. I heard the click.","Listo. Escuché el clic."),
 A("Now plug in the router’s power. The light will blink for a minute or two. Tell me when it turns solid white.","Ahora conecte la corriente del router. La luz parpadeará uno o dos minutos. Dígame cuando se ponga blanca fija."),
 C("It’s solid white now.","Ya está blanca fija."),
 A("Excellent. Now on your phone, open Wi-Fi settings and choose the network on the sticker at the bottom of the router.","Excelente. Ahora en su teléfono abra los ajustes de Wi-Fi y elija la red que aparece en la etiqueta debajo del router."),
 C("Okay, I’m connected.","Listo, estoy conectado."),
 A("Now we’ll change the name and password to your own. Open a browser and I’ll tell you what to type. Choose a name that doesn’t include your address, and write the password down.","Ahora cambiaremos el nombre y la contraseña por los suyos. Abra el navegador y le diré qué escribir. Elija un nombre que no incluya su dirección y anote la contraseña."),
 C("Done. I wrote it on a sticky note.","Listo. Lo anoté en una nota adhesiva."),
 A("Perfect. Let’s test it: connect your phone to the new name and open any website.","Perfecto. Probemos: conecte su teléfono al nombre nuevo y abra cualquier página web.","END begins: test."),
 C("It works!","¡Funciona!"),
 A("You did great, Tom, that was the hardest part. To recap: we connected the new router, named your network and set a password, and tested it. I’ve noted all of it on your account. Is there anything else I can help with?","Lo hizo muy bien, Tom, esa era la parte más difícil. En resumen, conectamos el router nuevo, le pusimos nombre a su red, creamos una contraseña y lo probamos. Dejé todo anotado en su cuenta. ¿Hay algo más en lo que pueda ayudarle?"),
 C("No, thank you so much.","No, muchísimas gracias."),
 A("My pleasure. Thank you for calling Northwave Fiber. Have a great day.","Un gusto. Gracias por llamar a Northwave Fiber. Que tenga un excelente día.")
],
qa:["Asked about experience before instructing","Described steps by color and shape","Checked each step","Customer wrote down credentials","Recap and notes"],
quiz:[
 ["The customer says they are not technical. What is the best response?",["Use shorter words and explain nothing","Say you will go slowly and describe what to look for","Offer to send a technician right away"],1,"Reassure, slow down and describe by color and shape."],
 ["Why ask the customer to write the password down?",["Company policy forbids storing it","So they don’t get locked out again and you never see it","It speeds the call"],1,"The customer owns the password; writing it down prevents a repeat call."]
]});

/* ---------- TSR L2 ---------- */
L.push({id:"bg4",track:"l2",title:"Beginner call walkthrough: “Wi-Fi is slow and drops” (L2, with Spanish)",level:"intermediate",account:"Brightdesk IT / Northwave",mins:18,
teach:[
 ["What L2 adds","L2 goes beyond the restart. You form a theory from a pattern, test it with one command or setting, and explain the result in plain words."],
 ["Part 1: Beginning","Same open and verification as L1, but your discovery questions are sharper: when, where, on which device, since when."],
 ["Part 2: Middle","Wired versus wireless is your cleanest test. If the cable is fast and Wi-Fi is slow, the line is fine and the Wi-Fi is the problem. Then look at band and channel."],
 ["Part 3: End","Explain the cause in one sentence, say what you changed, and set a check-in expectation (“if it drops again tonight, call and reference this ticket”)."]
],
steps:{h:"L2 slow Wi-Fi checklist",items:[
 ["Pattern (Patrón)","When, where, which devices"],
 ["Wired test (Prueba por cable)","Laptop on cable gives the line speed"],
 ["Band and channel (Banda y canal)","2.4 versus 5 GHz, crowded channel"],
 ["Change one thing (Cambie una cosa)","Then test again"],
 ["Explain (Explique)","One sentence for cause, one for fix"]
]},
phrases:[
 ["Does it slow down at a particular time?","¿Se pone lenta a una hora en particular?"],
 ["Let’s plug a laptop into the router with a cable.","Conectemos una laptop al router con un cable."],
 ["That tells me the line itself is healthy.","Eso me dice que la línea está sana."],
 ["The problem is the wireless part, not your service.","El problema es la parte inalámbrica, no su servicio."],
 ["I’m moving you to a clearer channel.","Lo cambio a un canal menos congestionado."],
 ["Run the speed test one more time for me.","Haga la prueba de velocidad una vez más."]
],
script:[
 A("Thank you for calling Brightdesk, this is Alex. Who am I speaking with?","Gracias por llamar a Brightdesk, habla Alex. ¿Con quién tengo el gusto?","BEGINNING."),
 C("Hi, this is Marcus Bell. My Wi-Fi is slow, and it keeps dropping in the evenings.","Hola, soy Marcus Bell. Mi Wi-Fi está lento y se cae por las noches."),
 A("Thanks, Marcus. A connection that drops every evening is annoying, and the timing helps me find the cause. Let me verify you first. Your full name and the address on the account?","Gracias, Marcus. Una conexión que se cae todas las noches es molesta, y la hora me ayuda a encontrar la causa. Primero lo verifico. ¿Su nombre completo y la dirección de la cuenta?"),
 C("Marcus Bell, 118 Harbor Road.","Marcus Bell, Harbor Road 118."),
 A("Thank you. And the last four of the account number?","Gracias. ¿Y los últimos cuatro del número de cuenta?"),
 C("2056.","2056."),
 A("You’re verified. Tell me about the pattern. About what time does it start dropping, and does it hit every device or only some?","Ya está verificado. Cuénteme el patrón. ¿A qué hora empieza a caerse y le pasa a todos los aparatos o solo a algunos?","MIDDLE. Pattern first."),
 C("Around eight at night. Phones and the TV drop, but my work laptop is fine.","Alrededor de las ocho de la noche. Los teléfonos y la TV se caen, pero mi laptop de trabajo no."),
 A("That’s useful. The laptop is fine, so the line itself may be healthy. Is the laptop on a cable or on Wi-Fi?","Eso es útil. La laptop está bien, así que la línea puede estar sana. ¿La laptop está por cable o por Wi-Fi?"),
 C("It’s on a cable.","Está por cable."),
 A("That explains a lot. The cable is steady and the Wi-Fi isn’t, so I suspect the wireless side, probably a crowded channel at night when neighbors are online. Let me check your router from here.","Eso explica mucho. El cable es estable y el Wi-Fi no, así que sospecho de la parte inalámbrica, probablemente un canal congestionado de noche cuando los vecinos están conectados. Déjeme revisar su router desde aquí.","Form a theory, say it out loud."),
 C("Okay.","Está bien."),
 A("I can see your Wi-Fi is on a 2.4 GHz channel shared with several neighbors. I’m moving it to a clearer 5 GHz channel. Your devices may disconnect for about thirty seconds. Is that all right?","Veo que su Wi-Fi está en un canal de 2.4 GHz compartido con varios vecinos. Lo paso a un canal más libre de 5 GHz. Sus aparatos pueden desconectarse unos treinta segundos. ¿Está bien?","Warn about the side effect, ask permission."),
 C("Yes, go ahead.","Sí, adelante."),
 A("Done. Please reconnect your phone to the network and run a speed test for me.","Listo. Por favor reconecte su teléfono a la red y haga una prueba de velocidad."),
 C("It says 310 megabits. That’s much better than before.","Dice 310 megabits. Es mucho mejor que antes."),
 A("Good. The TV is far from the router, so I’d also keep it on the 2.4 GHz name for range. Let’s test the TV too.","Bien. La TV está lejos del router, así que también la dejaría en la red de 2.4 GHz por el alcance. Probemos también la TV."),
 C("The TV works, and the video is smooth.","La TV funciona y el video se ve fluido."),
 A("In short, Marcus, the line is healthy, and the evening drops came from a crowded Wi-Fi channel. I moved your phones to a clearer one. I’ve noted the change on your ticket, 61204. If it drops again tonight, call us and mention that ticket so we can pick up where we left off. Anything else today?","En resumen, Marcus, la línea está sana y las caídas de la noche venían de un canal de Wi-Fi congestionado. Pasé sus teléfonos a uno más libre. Anoté el cambio en su ticket 61204. Si se cae otra vez esta noche, llámenos y mencione ese ticket para continuar donde quedamos. ¿Algo más hoy?","END. One-sentence cause, one-sentence fix, a follow-up plan."),
 C("No, that’s all. Thanks.","No, eso es todo. Gracias."),
 A("You’re welcome. Thank you for calling Brightdesk. Have a great evening.","De nada. Gracias por llamar a Brightdesk. Que tenga una excelente noche.")
],
qa:["Asked for pattern","Used wired test","Explained theory plainly","Warned about brief disconnect","Gave ticket and follow-up plan"],
quiz:[
 ["The laptop on a cable is fast, but phones on Wi-Fi are slow. What does this show?",["The line is bad","The line is fine and the wireless side is the problem","The laptop is faulty"],1,"A fast cable proves the line, so look at band, channel and placement."],
 ["Why warn before changing the channel?",["It is required by the contract","Devices will reconnect, and surprises feel like new problems","It makes the fix work"],1,"Warn before you disrupt, then the customer stays calm."]
]});

L.push({id:"bg5",track:"l2",title:"Beginner call walkthrough: “Outlook won’t sync” (L2, with Spanish)",level:"intermediate",account:"Brightdesk IT",mins:18,
teach:[
 ["What this teaches","Reading an error message exactly, separating ‘offline’, ‘password’ and ‘profile’ problems, and fixing them in the least risky order."],
 ["Least risky first","Check Work Offline, then the password, then repair the account, then create a new profile. Do not delete the data file unless you must."],
 ["Part 1 and 3","The open and close follow the same shape as every call. The middle is where L2 earns trust: read the status bar, explain what it means, then act."]
],
steps:{h:"L2 email sync checklist",items:[
 ["Read the status (Lea el estado)","Disconnected, Need Password, Offline?"],
 ["Work Offline (Sin conexión)","Untick it"],
 ["Password (Contraseña)","Re-enter and test"],
 ["Repair (Reparar)","Account repair"],
 ["New profile (Perfil nuevo)","Last resort, keep the data file"]
]},
phrases:[
 ["What does the bar at the bottom say, exactly?","¿Qué dice exactamente la barra de abajo?"],
 ["That message means Outlook can’t reach the server.","Ese mensaje significa que Outlook no alcanza el servidor."],
 ["I’ll start with the safest fix.","Empiezo con la solución más segura."],
 ["Your emails are safe. We’re not deleting anything.","Sus correos están seguros. No borraremos nada."],
 ["Let’s send a test message to confirm.","Enviemos un mensaje de prueba para confirmar."]
],
script:[
 A("Thank you for calling Brightdesk, this is Alex. Who am I speaking with?","Gracias por llamar a Brightdesk, habla Alex. ¿Con quién tengo el gusto?","BEGINNING."),
 C("Hi, I’m Laura Chen. My Outlook says disconnected and won’t get new mail.","Hola, soy Laura Chen. Mi Outlook dice desconectado y no recibe correos nuevos."),
 A("Thanks, Laura. Missing mail is stressful when you’re working, and I’ll help you sort it out. First I’ll verify the account. Your full name and the email address?","Gracias, Laura. Perder correos es estresante cuando se trabaja, y le ayudaré a resolverlo. Primero verifico la cuenta. ¿Su nombre completo y el correo?"),
 C("Laura Chen, laura at pinecrest dot com.","Laura Chen, laura en pinecrest punto com."),
 A("Thank you, and the company name?","Gracias, ¿y el nombre de la empresa?"),
 C("Pinecrest Dental.","Pinecrest Dental."),
 A("You’re verified. Look at the bar at the bottom of Outlook. What does it say exactly?","Ya está verificada. Mire la barra en la parte de abajo de Outlook. ¿Qué dice exactamente?","MIDDLE. Ask for the exact words."),
 C("It says Working Offline.","Dice Trabajando sin conexión."),
 A("That’s good news, it’s often the simplest fix. Your emails are safe, and we’re not deleting anything. Click the Send/Receive tab and look for Work Offline. Is it highlighted?","Eso es buena noticia, suele ser lo más sencillo. Sus correos están seguros y no borraremos nada. Haga clic en la pestaña Enviar y recibir y busque Trabajar sin conexión. ¿Está resaltado?","Reassure, then act."),
 C("Yes, it is.","Sí, lo está."),
 A("Click it once to turn it off. Then watch the bottom bar.","Haga clic una vez para apagarlo. Luego mire la barra de abajo."),
 C("Now it says Need Password.","Ahora dice Se necesita contraseña."),
 A("Good, that’s progress. It means Outlook is reaching the server but needs you to sign in again. Please enter your password when it asks.","Bien, eso es progreso. Significa que Outlook llega al servidor pero necesita que inicie sesión otra vez. Escriba su contraseña cuando se la pida."),
 C("Okay, it’s connecting. It says Connected now.","Listo, se está conectando. Ahora dice Conectado."),
 A("Let’s confirm it. I’ll send you a test email right now. Tell me when it arrives.","Confirmemos. Le envío un correo de prueba ahora mismo. Dígame cuando llegue."),
 C("It arrived.","Llegó."),
 A("Perfect. To recap, Laura: Outlook was in offline mode, then asked for your password, and now it’s syncing again. Nothing was deleted. I’ve noted it on your account, ticket 43377. If it goes offline again, call and mention that ticket. Is there anything else I can help you with?","Perfecto. En resumen, Laura: Outlook estaba en modo sin conexión, luego pidió su contraseña y ahora sincroniza otra vez. No se borró nada. Lo anoté en su cuenta, ticket 43377. Si vuelve a quedar sin conexión, llame y mencione ese ticket. ¿Hay algo más en lo que pueda ayudarle?","END."),
 C("No, thanks.","No, gracias."),
 A("Thank you for calling Brightdesk, Laura. Have a great day.","Gracias por llamar a Brightdesk, Laura. Que tenga un excelente día.")
],
qa:["Read the exact status","Safest fix first","Reassured data is safe","Test email sent","Ticket and next step"],
quiz:[
 ["Outlook says Working Offline. What do you try first?",["Create a new profile","Turn off Work Offline","Reinstall Outlook"],1,"Least risky first. It is often the entire problem."],
 ["Which message means Outlook reaches the server but needs sign-in?",["Disconnected","Need Password","Working Offline"],1,"Need Password means the connection works; credentials are the issue."]
]});

L.push({id:"bg6",track:"l2",title:"Beginner call walkthrough: “Laptop says no internet, phone works” (L2, with Spanish)",level:"intermediate",account:"Northwave Fiber / Brightdesk",mins:18,
teach:[
 ["What this teaches","Using the clue ‘one device works, one doesn’t’ to narrow the problem to the laptop. You will use ipconfig and read the result to the customer in plain words."],
 ["What a 169 address means","An address starting with 169.254 means the laptop never got an address from the router. The fix is to renew it, check the cable or Wi-Fi link, or restart DHCP."],
 ["Talk about commands gently","Tell customers exactly what to type, one command at a time, and what the result means. Never assume they know the command line."]
],
steps:{h:"L2 single-device no-internet checklist",items:[
 ["Clue (Pista)","Other devices work, so the line is fine"],
 ["ipconfig","Read the address and the gateway"],
 ["Renew (Renovar)","release then renew"],
 ["DNS","flushdns if needed"],
 ["Adapter (Adaptador)","Disable and enable it"]
]},
phrases:[
 ["Your phone working is a helpful clue.","Que su teléfono funcione es una pista útil."],
 ["Type ipconfig and press Enter.","Escriba ipconfig y presione Enter."],
 ["Read me the line that says IPv4 Address.","Léame la línea que dice dirección IPv4."],
 ["That address means the laptop didn’t get one from the router.","Esa dirección significa que la laptop no recibió una del router."],
 ["Now type ipconfig /renew and wait.","Ahora escriba ipconfig /renew y espere."]
],
script:[
 A("Thank you for calling Northwave, this is Alex. Who am I speaking with?","Gracias por llamar a Northwave, habla Alex. ¿Con quién tengo el gusto?","BEGINNING."),
 C("Hi, it’s Henry Park. My laptop says no internet, but my phone works fine.","Hola, soy Henry Park. Mi laptop dice sin internet, pero mi teléfono funciona bien."),
 A("Thanks, Henry. That’s a very helpful clue, and it tells me your line is probably fine. I’ll verify you first. Your full name and the address on the account?","Gracias, Henry. Esa es una pista muy útil y me dice que su línea probablemente está bien. Primero lo verifico. ¿Su nombre completo y la dirección de la cuenta?"),
 C("Henry Park, 31 Willow Lane.","Henry Park, Willow Lane 31."),
 A("And the last four digits of the phone on the account?","¿Y los últimos cuatro dígitos del teléfono de la cuenta?"),
 C("8821.","8821."),
 A("You’re verified. Since the phone works, we’ll focus on the laptop. Are you comfortable opening the command prompt? I’ll tell you exactly what to type.","Ya está verificado. Como el teléfono funciona, nos enfocaremos en la laptop. ¿Se siente cómodo abriendo el símbolo del sistema? Le diré exactamente qué escribir.","MIDDLE. Ask permission before going technical."),
 C("I can try.","Puedo intentarlo."),
 A("Press the Windows key, type cmd, and press Enter. When the black window opens, type ipconfig and press Enter. Tell me when it shows text.","Presione la tecla Windows, escriba cmd y presione Enter. Cuando se abra la ventana negra, escriba ipconfig y presione Enter. Dígame cuando aparezca texto."),
 C("It shows text now.","Ya aparece texto."),
 A("Find the line that says IPv4 Address and read me the numbers.","Busque la línea que dice dirección IPv4 y léame los números."),
 C("It says 169.254.43.12.","Dice 169.254.43.12."),
 A("That’s the clue I needed. An address beginning with 169 means the laptop never got an address from the router. It’s fixable. Type ipconfig /release and press Enter, then ipconfig /renew.","Esa es la pista que necesitaba. Una dirección que empieza con 169 significa que la laptop nunca recibió una dirección del router. Se puede arreglar. Escriba ipconfig /release y presione Enter, luego ipconfig /renew.","Translate the result into plain words."),
 C("It’s thinking… now it shows 192.168.1.24.","Está pensando… ahora muestra 192.168.1.24."),
 A("That’s a normal address, so the laptop is talking to the router now. Please open a website.","Esa es una dirección normal, así que la laptop ya habla con el router. Por favor abra una página web."),
 C("It loads.","Carga."),
 A("To make sure it stays that way, I’m also going to ask you to restart the laptop’s network adapter. Open the network settings and choose Disable, then Enable. This helps prevent the problem from coming back.","Para que se mantenga así, también le pediré reiniciar el adaptador de red de la laptop. Abra la configuración de red y elija Desactivar y luego Activar. Eso ayuda a que el problema no vuelva."),
 C("Done, still working.","Listo, sigue funcionando."),
 A("Great. In plain words, Henry: the laptop didn’t receive an address from the router, so it had no internet even though everything else was fine. We renewed it, and it’s working. I’ve noted it on ticket 74102. If it returns, call and mention that ticket. Anything else I can help with?","Muy bien. En palabras sencillas, Henry: la laptop no recibió una dirección del router, por eso no tenía internet aunque todo lo demás estaba bien. La renovamos y funciona. Lo anoté en el ticket 74102. Si vuelve, llame y mencione ese ticket. ¿Algo más en lo que pueda ayudarle?","END."),
 C("No, thanks.","No, gracias."),
 A("You’re welcome. Thank you for calling Northwave. Have a great day.","De nada. Gracias por llamar a Northwave. Que tenga un excelente día.")
],
qa:["Used the one-device clue","Told exact commands slowly","Translated 169 plainly","Confirmed with a website","Gave ticket"],
quiz:[
 ["A laptop shows 169.254.x.x. What does that mean?",["The internet is down for everyone","The laptop did not get an address from the router","The router is broken"],1,"169.254 is a self-assigned address when DHCP fails."],
 ["How should you introduce a command line step to a nervous customer?",["Just tell them to type it","Ask if they are comfortable, then give one command at a time","Offer remote access immediately"],1,"Permission and small steps keep the customer relaxed."]
]});

/* ---------- TSR L3 ---------- */
L.push({id:"bg7",track:"l3",title:"Beginner call walkthrough: “My whole office is down” (L3, with Spanish)",level:"advanced",account:"Northwave Fiber Business",mins:20,
teach:[
 ["What L3 adds","L3 owns the problem across systems and teams. You decide if it’s one customer or many, open an incident, and keep the customer informed on a schedule."],
 ["Part 1: Beginning","Acknowledge the business impact first (people can’t work). Verify quickly and ask three scoping questions: how many users, since when, any changes?"],
 ["Part 2: Middle","Check the outage map and sibling tickets. If many tickets share a node, it is an area outage. Open an incident, link the customer, and set update times."],
 ["Part 3: End","Give the customer a plain message they can forward, the next update time, and your direct reference. Then actually send the updates on time."]
],
steps:{h:"L3 business outage checklist",items:[
 ["Impact (Impacto)","Users, services, since when"],
 ["Scope (Alcance)","Outage map, sibling tickets"],
 ["Incident (Incidente)","Open and link"],
 ["Communicate (Comunique)","Message and next update time"],
 ["Follow through (Cumpla)","Send updates, even if nothing changed"]
]},
phrases:[
 ["How many people are affected right now?","¿Cuántas personas están afectadas ahora?"],
 ["When did it start, and did anything change before that?","¿Cuándo empezó y cambió algo antes?"],
 ["I’m checking whether other customers are affected.","Estoy revisando si hay otros clientes afectados."],
 ["I’ve opened an incident and linked your ticket.","Abrí un incidente y vinculé su ticket."],
 ["Here is something you can forward to your team.","Aquí tiene algo que puede reenviar a su equipo."],
 ["My next update to you will be at 2:30.","Mi próxima actualización para usted será a las 2:30."]
],
script:[
 A("Thank you for calling Northwave Fiber Business, this is Alex. Who am I speaking with?","Gracias por llamar a Northwave Fiber Business, habla Alex. ¿Con quién tengo el gusto?","BEGINNING."),
 C("This is Karen Ortiz at Summit Legal. Our whole office has lost internet and we have clients waiting.","Habla Karen Ortiz de Summit Legal. Toda nuestra oficina perdió el internet y tenemos clientes esperando."),
 A("Karen, I understand, this directly stops your work, so let’s move fast. I’ll verify you in a moment. First, how many people are affected, and when did it start?","Karen, entiendo, esto detiene directamente su trabajo, así que vamos rápido. La verifico en un momento. Primero, ¿cuántas personas están afectadas y cuándo empezó?","Impact first, then verification."),
 C("About thirty people. It started at 1:15.","Unas treinta personas. Empezó a la 1:15."),
 A("Thank you. For verification, I need the business name and the service address, plus the account PIN.","Gracias. Para verificar necesito el nombre de la empresa y la dirección del servicio, además del PIN de la cuenta."),
 C("Summit Legal, 200 Main Street, PIN 9034.","Summit Legal, Main Street 200, PIN 9034."),
 A("Verified. One more question: did anything change before 1:15, like new equipment, a power cut or a router restart?","Verificado. Una pregunta más: ¿cambió algo antes de la 1:15, como equipo nuevo, un corte de luz o un reinicio del router?","MIDDLE. Rule out your side before blaming the network."),
 C("No, nothing changed.","No, no cambió nada."),
 A("Thanks. I’m checking the outage map and recent tickets from your area now. Please bear with me for a minute… I see six tickets from your neighborhood in the last hour, all on the same fiber segment. This is an area outage, not a problem in your office.","Gracias. Estoy revisando el mapa de interrupciones y los tickets recientes de su zona. Espere un minuto, por favor… Veo seis tickets de su vecindario en la última hora, todos en el mismo tramo de fibra. Es una interrupción de zona, no un problema en su oficina.","Name the scope clearly."),
 C("So it’s not us. How long will it take?","Entonces no somos nosotros. ¿Cuánto tardará?"),
 A("Engineering has confirmed a fiber cut. The current estimate is 4:30 pm, and I’ll tell you if it changes. I’ve opened an incident, linked your ticket to it, and added your office as a priority business customer.","Ingeniería confirmó un corte de fibra. La estimación actual es 4:30 pm, y le avisaré si cambia. Abrí un incidente, vinculé su ticket y agregué su oficina como cliente empresarial prioritario.","Give a time, an owner and an action."),
 C("Can you give me something to tell my staff?","¿Puede darme algo para decirle a mi personal?"),
 A("Absolutely. You can forward this: ‘A fiber cut in our area has caused the outage. The provider is repairing it, with an estimate of 4:30 pm. We will receive updates every thirty minutes.’ Would you like me to email it to you?","Por supuesto. Puede reenviar esto: “Un corte de fibra en nuestra zona causó la interrupción. El proveedor la está reparando, con una estimación de las 4:30 pm. Recibiremos actualizaciones cada treinta minutos.” ¿Quiere que se lo envíe por correo?","END begins. Give them words they can reuse."),
 C("Yes, please. And what if it takes longer?","Sí, por favor. ¿Y si tarda más?"),
 A("Then I’ll call you before 4:30 with the new estimate, and I’ll start a service credit review once service returns. My next update is at 2:30. Here is the incident number: 90412.","Entonces la llamaré antes de las 4:30 con la nueva estimación, e iniciaré una revisión de crédito por servicio cuando vuelva. Mi próxima actualización es a las 2:30. Este es el número de incidente: 90412."),
 C("Thank you. That helps.","Gracias. Eso ayuda."),
 A("To recap: area outage from a fiber cut, estimate 4:30, incident 90412, updates every thirty minutes starting at 2:30, and a credit review afterward. Is there anything else I can do for you right now?","En resumen: interrupción de zona por corte de fibra, estimación 4:30, incidente 90412, actualizaciones cada treinta minutos desde las 2:30 y una revisión de crédito después. ¿Hay algo más que pueda hacer por usted ahora?"),
 C("No. Thank you, Alex.","No. Gracias, Alex."),
 A("Thank you for your patience, Karen. I’ll call at 2:30.","Gracias por su paciencia, Karen. La llamaré a las 2:30.","A promise with a time. Keep it.")
],
qa:["Impact and scope questions early","Checked sibling tickets","Named an owner, time and action","Gave a forwardable message","Promised and set the next update"],
quiz:[
 ["Six tickets from the same segment arrive in an hour. What is this?",["Six unrelated problems","An area outage","A billing issue"],1,"Same place, same time, many tickets means area outage."],
 ["You promise an update at 2:30 and nothing has changed. What do you do?",["Skip it","Call anyway and say nothing changed, plus when the next update is","Wait for the customer to call"],1,"On-time updates, even with no news, build trust."]
]});

L.push({id:"bg8",track:"l3",title:"Beginner call walkthrough: “It keeps dropping and we’ve called before” (L3, with Spanish)",level:"advanced",account:"Northwave Fiber Business",mins:20,
teach:[
 ["What L3 adds here","A repeat issue. The answer is rarely another restart. You review ticket history, find the pattern, and write an escalation engineering can act on."],
 ["What a good escalation contains","Symptom, exact times, tests done and results, customer impact, and the specific request. Write it so the engineer does not need to call the customer."],
 ["Tone","Own the repeat. “You should not have had to call back” is accurate and calming. Do not blame earlier agents."]
],
steps:{h:"L3 repeat-issue checklist",items:[
 ["History (Historial)","Read every earlier ticket"],
 ["Pattern (Patrón)","Same time, same port, same weather?"],
 ["Evidence (Evidencia)","Logs and timestamps"],
 ["Escalate (Escale)","Symptom, tests, impact, request"],
 ["Own it (Asuma)","Be the single contact"]
]},
phrases:[
 ["I’ve read all four earlier tickets.","He leído los cuatro tickets anteriores."],
 ["You should not have had to call back.","No debió tener que volver a llamar."],
 ["The drops line up with the same time each day.","Las caídas coinciden con la misma hora cada día."],
 ["I’m sending this to engineering with the logs.","Lo envío a ingeniería con los registros."],
 ["I’ll be your single point of contact until it’s fixed.","Seré su único punto de contacto hasta que se resuelva."]
],
script:[
 A("Thank you for calling Northwave Fiber Business, this is Alex. Who am I speaking with?","Gracias por llamar a Northwave Fiber Business, habla Alex. ¿Con quién tengo el gusto?","BEGINNING."),
 C("This is Omar Haddad at Redline Auto. Our internet drops every afternoon, and this is the fourth time I’ve called.","Habla Omar Haddad de Redline Auto. Nuestro internet se cae todas las tardes y esta es la cuarta vez que llamo."),
 A("Omar, thank you for calling again, and you should not have had to. Let me verify you, then I’ll read all four earlier tickets so you don’t repeat anything. Business name and service address?","Omar, gracias por llamar otra vez, y no debió tener que hacerlo. Lo verifico y luego leo los cuatro tickets anteriores para que no repita nada. ¿Nombre de la empresa y dirección del servicio?","Own the repeat, promise to read the history."),
 C("Redline Auto, 77 Dock Street.","Redline Auto, Dock Street 77."),
 A("And the account PIN?","¿Y el PIN de la cuenta?"),
 C("5512.","5512."),
 A("Thanks, you’re verified. Give me a minute to read the tickets… I see four calls over three weeks, each fixed with a restart. I also see the drops happening around 2 pm each time. Does that match what you see?","Gracias, ya está verificado. Deme un minuto para leer los tickets… Veo cuatro llamadas en tres semanas, cada una resuelta con un reinicio. También veo que las caídas ocurren alrededor de las 2 pm cada vez. ¿Coincide con lo que usted ve?","MIDDLE. Show you did the reading."),
 C("Exactly. Between two and two-fifteen, always.","Exacto. Siempre entre las dos y las dos y cuarto."),
 A("A fixed time every day is a strong clue. That points away from your equipment and toward something on the line or the node at that time. Do you have any equipment that turns on at that hour, like a compressor or a large machine?","Una hora fija cada día es una pista fuerte. Apunta a algo en la línea o en el nodo y no a su equipo. ¿Tiene algún equipo que se encienda a esa hora, como un compresor o una máquina grande?","Rule out your side with one question."),
 C("No, nothing like that.","No, nada de eso."),
 A("Then I’m going to check the signal levels and logs around 2 pm for the last week. One moment… Your signal quality drops at the same time each day, and the node shows errors then. This needs engineering, not another restart.","Entonces voy a revisar los niveles de señal y los registros alrededor de las 2 pm de la última semana. Un momento… La calidad de su señal baja a la misma hora cada día y el nodo muestra errores en ese momento. Esto necesita a ingeniería, no otro reinicio.","State the finding in plain words."),
 C("Finally. What happens now?","Por fin. ¿Qué pasa ahora?"),
 A("I’m escalating it with the symptom, the exact times, the logs and the impact on your shop. I’ll also ask for a field check at the node. I’ll be your single point of contact until it’s fixed.","Lo escalo con el síntoma, las horas exactas, los registros y el impacto en su taller. También pediré una revisión en campo en el nodo. Seré su único punto de contacto hasta que se resuelva."),
 C("When will I hear back?","¿Cuándo tendré noticias?"),
 A("I’ll call you tomorrow at 10 am with engineering’s response, and again right after 2 pm tomorrow to see whether it dropped. Is that a good number to reach you?","Lo llamaré mañana a las 10 am con la respuesta de ingeniería y otra vez justo después de las 2 pm para ver si se cayó. ¿Es buen número para localizarlo?","Two concrete times, one number."),
 C("Yes, my cell.","Sí, mi celular."),
 A("To recap: four earlier tickets reviewed, the drops are tied to the same time each day, it’s escalated to engineering with logs, and I’ll call you tomorrow at 10 and after 2. Ticket 31880. Anything else today?","En resumen: revisé los cuatro tickets anteriores, las caídas están ligadas a la misma hora cada día, está escalado a ingeniería con registros, y lo llamaré mañana a las 10 y después de las 2. Ticket 31880. ¿Algo más hoy?","END."),
 C("No. Thanks for finally digging into it.","No. Gracias por fin por investigarlo."),
 A("Thank you for your patience, Omar. Talk to you tomorrow at 10.","Gracias por su paciencia, Omar. Hablamos mañana a las 10.")
],
qa:["Owned the repeat without blaming","Read the history first","Found pattern in time","Escalation had symptom, tests, impact, request","Two concrete follow-up times"],
quiz:[
 ["Four calls over three weeks, each fixed by a restart. What does this suggest?",["Customers restart too often","The restart is hiding a recurring cause","The ticket should close"],1,"A repeat fix is a pattern. Look for the cause upstream."],
 ["What makes an escalation good?",["A short ‘please check’","Symptom, times, tests, impact and a specific request","Copying the customer’s email"],1,"Engineering should not need to call the customer to understand it."]
]});

L.push({id:"bg9",track:"l3",title:"Beginner call walkthrough: “I want a credit and a written explanation” (L3, with Spanish)",level:"advanced",account:"Northwave Fiber Business",mins:20,
teach:[
 ["What this teaches","The business customer wants three things after an outage: what happened, what you are doing to prevent it, and what they are owed. L3 delivers all three in plain, blame-free language."],
 ["Keep it factual","Use the timeline: start, detection, fix, cause, prevention. No guessing, no promising what the contract does not say."],
 ["SLA credits","The contract sets the credit. Check the outage duration, state the credit in plain terms, and file the request. Never promise a bigger credit than the SLA, and never refuse without checking."]
],
steps:{h:"L3 post-outage checklist",items:[
 ["Timeline (Cronología)","Start, detection, fix"],
 ["Cause (Causa)","Plain words, no blame"],
 ["Prevention (Prevención)","Three steps with owners"],
 ["Credit (Crédito)","Per SLA, filed"],
 ["Written summary (Resumen escrito)","Send within the day"]
]},
phrases:[
 ["I’ll walk you through the timeline.","Le explico la cronología."],
 ["The cause was a failed software update.","La causa fue una actualización de software fallida."],
 ["Here’s what we’re changing so it doesn’t repeat.","Esto es lo que cambiamos para que no se repita."],
 ["Your contract credits outages over four hours.","Su contrato acredita interrupciones de más de cuatro horas."],
 ["I’ll send the written summary today.","Le enviaré el resumen escrito hoy."]
],
script:[
 A("Thank you for calling Northwave Fiber Business, this is Alex. Who am I speaking with?","Gracias por llamar a Northwave Fiber Business, habla Alex. ¿Con quién tengo el gusto?","BEGINNING."),
 C("Rachel Stone, Meridian Clinic. We had a six-hour outage last Tuesday. I want a credit and a written explanation for my director.","Rachel Stone, Clínica Meridian. Tuvimos una interrupción de seis horas el martes pasado. Quiero un crédito y una explicación escrita para mi directora."),
 A("Rachel, six hours is a long time for a clinic, and I’m sorry. I’ll provide both: the explanation and a review of your credit. First, I’ll verify you. Business name, service address and the account PIN?","Rachel, seis horas es mucho tiempo para una clínica, y lo lamento. Le daré ambas cosas: la explicación y una revisión de su crédito. Primero la verifico. ¿Nombre de la empresa, dirección del servicio y el PIN de la cuenta?"),
 C("Meridian Clinic, 15 Park Avenue, PIN 4468.","Clínica Meridian, Park Avenue 15, PIN 4468."),
 A("Thank you, you’re verified. I’ll pull the incident record and your contract. One moment… I have both.","Gracias, ya está verificada. Voy a abrir el registro del incidente y su contrato. Un momento… Ya tengo ambos.","MIDDLE."),
 C("Okay. What happened?","Bien. ¿Qué pasó?"),
 A("Here is the timeline. The outage began at 8:05 am, our monitoring detected it at 8:12, the fix began at 9:40, and service was restored at 2:10 pm. The cause was a failed software update on a core router, which affected your segment.","Esta es la cronología. La interrupción comenzó a las 8:05 am, nuestro monitoreo la detectó a las 8:12, la reparación comenzó a las 9:40 y el servicio se restableció a las 2:10 pm. La causa fue una actualización de software fallida en un router central que afectó su segmento.","Plain timeline, no blame."),
 C("Why did it take so long to fix?","¿Por qué tardó tanto en repararse?"),
 A("Fair question. The update had to be rolled back in stages to avoid affecting other customers, which took longer than it should have. That’s one of the things we’re changing.","Buena pregunta. La actualización tuvo que revertirse por etapas para no afectar a otros clientes, y eso tardó más de lo debido. Eso es una de las cosas que estamos cambiando.","Honest, specific, no excuses."),
 C("What are you changing?","¿Qué están cambiando?"),
 A("Three things: we added a test before updates go live, we shortened the rollback process, and we assigned an owner for each. I can include those in the written summary.","Tres cosas: agregamos una prueba antes de aplicar actualizaciones, acortamos el proceso de reversión y asignamos un responsable para cada una. Puedo incluirlas en el resumen escrito."),
 C("And the credit?","¿Y el crédito?"),
 A("Your contract credits outages longer than four hours, and this one was just over six. I’ve filed the credit request, and you’ll see it on the next bill. I’ll email you the reference.","Su contrato acredita interrupciones de más de cuatro horas y esta fue de poco más de seis. Presenté la solicitud de crédito y la verá en la próxima factura. Le enviaré la referencia por correo.","State the credit per the contract."),
 C("Good. Can you send the summary today?","Bien. ¿Puede enviar el resumen hoy?"),
 A("Yes. I’ll send it by 5 pm today, with the timeline, cause, the three changes and your credit reference. Is the email on the account the right one?","Sí. Lo enviaré antes de las 5 pm de hoy, con la cronología, la causa, los tres cambios y la referencia de su crédito. ¿El correo de la cuenta es el correcto?"),
 C("Yes, it is.","Sí, es ese."),
 A("To recap: timeline and cause explained, three prevention steps, credit request filed, and a written summary by 5 pm. Is there anything else I can help with?","En resumen: expliqué la cronología y la causa, tres pasos de prevención, solicité el crédito y habrá un resumen escrito antes de las 5 pm. ¿Hay algo más en lo que pueda ayudarle?","END."),
 C("No. Thank you for being direct with me.","No. Gracias por hablarme con claridad."),
 A("Thank you, Rachel. You’ll have the summary by 5 pm.","Gracias, Rachel. Tendrá el resumen antes de las 5 pm.")
],
qa:["Acknowledged the impact","Gave a factual timeline","Named cause without blame","Stated credit per contract","Promised and met a written deadline"],
quiz:[
 ["A customer asks for more credit than the contract allows. What do you do?",["Promise it to calm them","Explain the contract credit clearly and offer to escalate a goodwill request if appropriate","Refuse without checking"],1,"Be honest about the contract, then use the proper path for exceptions."],
 ["Why include prevention steps with owners?",["It is a legal requirement","It shows the cause is being fixed and who is responsible","It makes the summary longer"],1,"Customers need to see that this will not happen again."]
]});

/* ---------- More Spanish line calls: Spanish with English in parentheses ---------- */
L.push({id:"e27",track:"es",lang:"es",title:"Llamada completa: sin internet (con inglés entre paréntesis)",level:"basic",account:"Northwave Fiber (línea en español)",mins:16,
teach:[
 ["Cómo usar esta lección (How to use this)","Lea la llamada en español y use el inglés entre paréntesis para confirmar el significado. Luego tape el inglés y repita las frases en voz alta."],
 ["Siempre de usted","Hable de usted con todos los clientes y con voz tranquila. Es un signo de respeto, sobre todo con personas mayores. (Always use usted. It shows respect.)"],
 ["Una pregunta a la vez","Pregunte una cosa, espere, y confirme. Así el cliente no se pierde. (One question at a time.)"]
],
steps:{h:"Pasos de la llamada (Call steps)",items:[
 ["Saludar (Greet)","Marca, su nombre, el nombre del cliente"],
 ["Verificar (Verify)","Nombre, dirección, últimos cuatro dígitos"],
 ["Revisar (Check)","Luces del módem"],
 ["Reiniciar (Restart)","Primero el módem, luego el router"],
 ["Cerrar (Close)","Resumen, notas, algo más"]
]},
phrases:[
 ["¿Qué color tiene la luz de internet?","What color is the internet light?"],
 ["Desconecte el módem y el router de la pared.","Unplug the modem and the router from the wall."],
 ["Espere treinta segundos, por favor.","Please wait thirty seconds."],
 ["Conecte primero el módem.","Plug in the modem first."],
 ["¿Ya puede abrir una página web?","Can you open a web page now?"],
 ["Dejé todo anotado en su cuenta.","I put everything in your account notes."]
],
script:[
 S("Gracias por llamar a Northwave Fiber, habla Alex. ¿Con quién tengo el gusto?","Thank you for calling Northwave Fiber, this is Alex. Who am I speaking with?","Comienzo (Beginning)."),
 K("Buenas tardes, soy Carmen Delgado. Mi internet no funciona desde esta mañana.","Good afternoon, I’m Carmen Delgado. My internet hasn’t worked since this morning."),
 S("Mucho gusto, señora Delgado. Lamento la molestia y con gusto la ayudo. Primero voy a verificar su cuenta por seguridad. ¿Me confirma su nombre completo y la dirección?","Nice to meet you, Mrs. Delgado. I’m sorry for the trouble and I’m happy to help. First I’ll verify your account for security. Can you confirm your full name and address?"),
 K("Carmen Delgado Ruiz, calle Roble número 12.","Carmen Delgado Ruiz, 12 Roble Street."),
 S("Gracias. ¿Y los últimos cuatro dígitos del teléfono de la cuenta?","Thank you. And the last four digits of the phone on the account?"),
 K("Cuatro, uno, cero, siete.","Four, one, zero, seven."),
 S("Perfecto, ya está verificada. Veamos qué pasa. ¿Qué color tiene la luz de internet en el módem?","Perfect, you’re verified. Let’s see what’s going on. What color is the internet light on the modem?","Medio (Middle)."),
 K("Está parpadeando en naranja.","It’s blinking orange."),
 S("Gracias. Eso me dice que el módem no recibe señal. Voy a revisar la línea desde mi lado. Un momento, por favor… No veo una falla en su zona, así que un reinicio puede ayudar. ¿Le parece bien?","Thank you. That tells me the modem isn’t getting a signal. I’ll check the line from my side. One moment please… I don’t see an outage in your area, so a restart may help. Is that okay?","Narre lo que hace (Narrate)."),
 K("Sí, está bien.","Yes, that’s fine."),
 S("Desconecte el módem y el router de la pared. Cuente treinta segundos y conecte primero el módem.","Unplug the modem and the router from the wall. Count thirty seconds and plug in the modem first."),
 K("Ya conecté el módem. La luz está verde fija.","I plugged in the modem. The light is solid green."),
 S("Eso es lo que queremos. Ahora conecte el router, espere un minuto y abra una página web.","That’s what we want. Now plug in the router, wait a minute and open a web page."),
 K("Ya abrió la página. ¡Funciona!","The page opened. It works!"),
 S("Qué bueno. Entonces revisamos su línea, reiniciamos el módem y el router, y volvió la señal. Dejé todo anotado en su cuenta, y su número de ticket es 55120. Si se cae otra vez, reinícielo igual y llámenos. ¿Hay algo más en lo que pueda ayudarla?","Great. So we checked your line, restarted the modem and router, and the signal came back. I put everything in your account notes, and your ticket number is 55120. If it drops again, restart it the same way and call us. Is there anything else I can help you with?","Cierre (End)."),
 K("No, eso es todo. Muchas gracias.","No, that’s all. Thank you very much."),
 S("Con mucho gusto, señora Delgado. Gracias por llamar a Northwave Fiber. Que tenga un excelente día.","My pleasure, Mrs. Delgado. Thank you for calling Northwave Fiber. Have a great day.")
],
qa:["Usted en toda la llamada","Verificó antes de ayudar","Narró lo que hacía","Dio número de ticket","Cierre con resumen y despedida"],
quiz:[
 ["¿Qué dispositivo se conecta primero después de desconectar todo?",["El router","El módem","El teléfono"],1,"El módem primero; el router recibe su dirección después."],
 ["¿Por qué decir “por seguridad” antes de verificar?",["Es una ley","Explica la razón y suena menos a interrogatorio","Acorta la llamada"],1,"La razón hace que la verificación se sienta como protección."]
]});

L.push({id:"e28",track:"es",lang:"es",title:"Llamada completa: cuenta bloqueada y restablecer contraseña (con inglés entre paréntesis)",level:"basic",account:"Brightdesk IT (línea en español)",mins:16,
teach:[
 ["Regla de oro (Golden rule)","Nunca pida ni acepte la contraseña. Solo el código que usted envió. (Never ask for the password, only the code you sent.)"],
 ["Verificación (Verification)","Use datos que no sean la contraseña: nombre, correo y el nombre de la empresa."],
 ["Cierre (Close)","Recomiende la verificación en dos pasos y anote el ticket."]
],
steps:{h:"Pasos (Steps)",items:[
 ["Verificar (Verify)","Datos que no son la contraseña"],
 ["Enviar código (Send code)","Solo al contacto registrado"],
 ["Guiar (Guide)","El cliente crea la clave"],
 ["Probar (Test)","Iniciar sesión juntos"],
 ["Proteger (Protect)","Dos pasos y ticket"]
]},
phrases:[
 ["Voy a enviar un código al teléfono de la cuenta.","I’m going to send a code to the phone on the account."],
 ["Léame solo el código, no su contraseña.","Read me only the code, not your password."],
 ["Elija una clave de al menos doce caracteres.","Choose a password of at least twelve characters."],
 ["No veré lo que escriba.","I won’t see what you type."],
 ["Le recomiendo activar la verificación en dos pasos.","I recommend turning on two-step verification."]
],
script:[
 S("Gracias por llamar a soporte de Brightdesk, habla Alex. ¿Con quién tengo el gusto?","Thank you for calling Brightdesk support, this is Alex. Who am I speaking with?","Comienzo."),
 K("Buenos días, soy Julio Herrera. No puedo entrar a mi cuenta.","Good morning, I’m Julio Herrera. I can’t get into my account."),
 S("Mucho gusto, señor Herrera. Quedar bloqueado es muy molesto, y con gusto lo ayudo. Primero lo verifico para proteger su cuenta. ¿Me da su nombre completo y el correo de la cuenta?","Nice to meet you, Mr. Herrera. Being locked out is really annoying, and I’m happy to help. First I’ll verify you to protect your account. Can you give me your full name and the email on the account?"),
 K("Julio Herrera, julio punto herrera en correo punto com.","Julio Herrera, julio dot herrera at correo dot com."),
 S("Gracias. Para una segunda verificación, ¿cuál es el nombre de su empresa?","Thank you. For a second check, what is your company’s name?"),
 K("Ferretería Herrera.","Herrera Hardware."),
 S("Perfecto, ya está verificado. Le envío un código de seis dígitos al teléfono registrado, que termina en 2290. Debe llegar en unos segundos.","Perfect, you’re verified. I’m sending a six-digit code to the registered phone ending in 2290. It should arrive in a few seconds.","Medio."),
 K("Ya me llegó. ¿Se lo digo?","It arrived. Should I tell you?"),
 S("Sí, por favor, solo el código. Nunca su contraseña.","Yes, please, just the code. Never your password."),
 K("Es el 408162.","It’s 408162."),
 S("Correcto. Ya desbloqueé la cuenta. Ahora elija una clave nueva de al menos doce caracteres. No veré lo que escriba. Avíseme cuando termine.","Correct. I’ve unlocked the account. Now choose a new password of at least twelve characters. I won’t see what you type. Let me know when you’re done."),
 K("Ya la puse.","I entered it."),
 S("Muy bien. Iniciemos sesión juntos para confirmar. Pruebe en la página.","Very good. Let’s sign in together to confirm. Try on the page."),
 K("Ya entré. Muchas gracias.","I’m in. Thank you very much."),
 S("Con gusto. Le recomiendo activar la verificación en dos pasos para evitar otro bloqueo. ¿Quiere que le explique cómo?","My pleasure. I recommend turning on two-step verification to avoid another lockout. Would you like me to explain how?","Cierre."),
 K("Hoy no, gracias.","Not today, thank you."),
 S("No hay problema. En resumen, lo verificamos, envié un código, cambió su clave y ya entró. Dejé todo anotado, ticket 88017. ¿Hay algo más en lo que pueda ayudarlo?","No problem. To recap, we verified you, I sent a code, you changed your password and you’re in. I put everything in the notes, ticket 88017. Is there anything else I can help you with?"),
 K("No, es todo.","No, that’s all."),
 S("Gracias por llamar a Brightdesk, señor Herrera. Que tenga un excelente día.","Thank you for calling Brightdesk, Mr. Herrera. Have a great day.")
],
qa:["Usted","No pidió la contraseña","Código solo al contacto registrado","Probó el acceso","Ticket y cierre"],
quiz:[
 ["El cliente quiere decirle su contraseña. ¿Qué responde?",["Dígamela despacio","Por favor no, solo necesito el código que le envié","Escríbala en el chat"],1,"Nunca pida ni acepte contraseñas."],
 ["¿Al contacto de quién se envía el código?",["Al que el cliente dicte","Solo al que ya está en la cuenta","Al que usted prefiera"],1,"Solo a datos ya registrados en la cuenta."]
]});

L.push({id:"e29",track:"es",lang:"es",title:"Llamada completa: pregunta de factura y cargo extra (con inglés entre paréntesis)",level:"basic",account:"Northwave Fiber (línea en español)",mins:16,
teach:[
 ["Qué practica esta llamada (What this practices)","Explicar una factura línea por línea, con calma, y ofrecer opciones sin presionar. (Explaining a bill line by line, calmly, and offering options without pressure.)"],
 ["Use los números del cliente (Use their numbers)","Compare la factura anterior con la actual. Las diferencias se ven mejor con cifras. (Compare last bill and current bill.)"],
 ["Cierre (Close)","Confirme lo que se quitó o cambió y cuándo lo verá en su factura."]
],
steps:{h:"Pasos (Steps)",items:[
 ["Verificar (Verify)","Nombre, dirección, PIN"],
 ["Comparar (Compare)","Factura anterior y actual"],
 ["Explicar (Explain)","Cada cargo en palabras sencillas"],
 ["Ofrecer (Offer)","Dos opciones"],
 ["Confirmar (Confirm)","Cuándo se refleja el cambio"]
]},
phrases:[
 ["Veamos juntos la factura de este mes y la del mes pasado.","Let’s look at this month’s bill and last month’s together."],
 ["Este cargo es por la instalación del mes anterior.","This charge is for last month’s installation."],
 ["Su promoción terminó el mes pasado.","Your promotion ended last month."],
 ["Puedo ofrecerle dos opciones.","I can offer you two options."],
 ["Lo verá reflejado en su próxima factura.","You’ll see it on your next bill."]
],
script:[
 S("Gracias por llamar a Northwave Fiber, habla Alex. ¿Con quién tengo el gusto?","Thank you for calling Northwave Fiber, this is Alex. Who am I speaking with?","Comienzo."),
 K("Hola, soy Elena Ríos. Mi factura subió y no entiendo por qué.","Hello, I’m Elena Ríos. My bill went up and I don’t understand why."),
 S("Mucho gusto, señora Ríos. Entiendo, un aumento sin explicación preocupa. Con gusto se lo explico. Primero verifico su cuenta. ¿Me da su nombre completo y la dirección?","Nice to meet you, Mrs. Ríos. I understand, an increase with no explanation is worrying. I’m happy to explain it. First I’ll verify your account. Can you give me your full name and address?"),
 K("Elena Ríos Soto, avenida Central número 80.","Elena Ríos Soto, 80 Central Avenue."),
 S("Gracias. ¿Y el PIN de la cuenta?","Thank you. And the account PIN?"),
 K("Seis, dos, nueve, uno.","Six, two, nine, one."),
 S("Perfecto, ya está verificada. Veamos juntas la factura de este mes y la del mes pasado. ¿Cuánto pagó el mes pasado?","Perfect, you’re verified. Let’s look at this month’s bill and last month’s together. How much did you pay last month?","Medio."),
 K("Cincuenta dólares. Este mes son setenta.","Fifty dollars. This month it’s seventy."),
 S("Gracias. Estoy comparando las dos… Veo la diferencia: su promoción de veinte dólares terminó el mes pasado, por eso el precio normal volvió. No es un error, pero entiendo que sorprenda.","Thank you. I’m comparing the two… I see the difference: your twenty-dollar promotion ended last month, so the regular price came back. It’s not an error, but I understand it’s surprising.","Explique con cifras."),
 K("Nadie me avisó.","Nobody told me."),
 S("Tiene razón en pedirlo claro, y lamento que no lo supiera. Puedo ofrecerle dos opciones: un plan con velocidad parecida a un precio más bajo, o quedarse con el actual. ¿Le explico el plan más bajo?","You’re right to ask for it plainly, and I’m sorry you didn’t know. I can offer you two options: a plan with similar speed at a lower price, or staying with your current one. Shall I explain the lower plan?","Dos opciones, sin presionar."),
 K("Sí, explíqueme.","Yes, explain it to me."),
 S("Es el plan de ciento cincuenta megas por cincuenta y cinco dólares, sin contrato. Para su uso normal es suficiente.","It’s the 150-megabit plan for fifty-five dollars, no contract. For your normal use it’s enough."),
 K("Ese me conviene. Cámbielo, por favor.","That one suits me. Please switch it."),
 S("Con gusto. Ya hice el cambio. Lo verá reflejado en su próxima factura, y le llegará un correo de confirmación. Dejé todo anotado, ticket 20871. ¿Hay algo más en lo que pueda ayudarla?","Gladly. I’ve made the change. You’ll see it on your next bill, and you’ll get a confirmation email. I put everything in the notes, ticket 20871. Is there anything else I can help you with?","Cierre."),
 K("No, eso es todo. Gracias.","No, that’s all. Thank you."),
 S("Gracias por llamar a Northwave Fiber, señora Ríos. Que tenga un excelente día.","Thank you for calling Northwave Fiber, Mrs. Ríos. Have a great day.")
],
qa:["Comparó dos facturas","Explicó sin culpar","Ofreció dos opciones","Confirmó cuándo se refleja","Cierre completo"],
quiz:[
 ["¿Por qué comparar la factura anterior con la actual?",["Para ganar tiempo","Las diferencias se ven con cifras y evitan confusión","Es obligatorio"],1,"Las cifras del cliente hacen la explicación concreta."],
 ["El cliente dice: “Nadie me avisó”. ¿Qué dice usted?",["Eso estaba en el contrato","Tiene razón, lamento que no lo supiera; le ofrezco opciones","No es culpa mía"],1,"Reconozca el hecho y pase a la solución."]
]});

L.push({id:"e30",track:"es",lang:"es",title:"Llamada completa: el Wi-Fi está lento y se cae (con inglés entre paréntesis)",level:"intermediate",account:"Brightdesk IT (línea en español)",mins:18,
teach:[
 ["Qué practica (What this practices)","Buscar un patrón, probar con cable y explicar la causa en una frase. (Look for a pattern, test with a cable, explain the cause in one sentence.)"],
 ["Lenguaje sencillo (Plain language)","Evite jerga. En lugar de “canal congestionado” puede decir “muchos vecinos usan la misma señal”. (Avoid jargon.)"]
],
steps:{h:"Pasos (Steps)",items:[
 ["Patrón (Pattern)","Hora, lugar, aparatos"],
 ["Cable (Cable)","Si por cable va rápido, el problema es el Wi-Fi"],
 ["Banda (Band)","2.4 o 5 GHz"],
 ["Canal (Channel)","Cambiar a uno más libre"],
 ["Explicar (Explain)","Una frase para la causa"]
]},
phrases:[
 ["¿A qué hora se pone lento?","What time does it get slow?"],
 ["Conecte una laptop al router con un cable.","Connect a laptop to the router with a cable."],
 ["La línea está sana; el problema es el Wi-Fi.","The line is healthy; the problem is the Wi-Fi."],
 ["Voy a cambiarlo a una señal menos usada por los vecinos.","I’m going to switch it to a signal less used by the neighbors."],
 ["Haga una prueba de velocidad otra vez.","Run a speed test again."]
],
script:[
 S("Gracias por llamar a Brightdesk, habla Alex. ¿Con quién tengo el gusto?","Thank you for calling Brightdesk, this is Alex. Who am I speaking with?","Comienzo."),
 K("Hola, soy Marcos Peña. Mi Wi-Fi está lento y se cae en las noches.","Hello, I’m Marcos Peña. My Wi-Fi is slow and drops at night."),
 S("Mucho gusto, señor Peña. Eso es molesto, y la hora en que ocurre me ayuda. Primero lo verifico. ¿Su nombre completo y la dirección?","Nice to meet you, Mr. Peña. That’s annoying, and the time it happens helps me. First I’ll verify you. Your full name and address?"),
 K("Marcos Peña Díaz, calle Sol 44.","Marcos Peña Díaz, 44 Sol Street."),
 S("Gracias, ¿y los últimos cuatro del número de cuenta?","Thank you, and the last four of the account number?"),
 K("Cero, tres, cinco, ocho.","Zero, three, five, eight."),
 S("Perfecto, ya está verificado. ¿A qué hora empieza a caerse y le pasa en todos los aparatos?","Perfect, you’re verified. What time does it start dropping and does it happen on all devices?","Medio."),
 K("Como a las ocho. Los celulares y la tele, pero mi computadora no.","Around eight. The phones and the TV, but not my computer."),
 S("Eso ayuda. ¿La computadora está conectada por cable o por Wi-Fi?","That helps. Is the computer connected by cable or Wi-Fi?"),
 K("Por cable.","By cable."),
 S("Entonces la línea está sana y el problema es el Wi-Fi: de noche muchos vecinos usan la misma señal. Voy a cambiar su router a una señal menos usada. Sus aparatos se desconectarán unos treinta segundos. ¿Está bien?","Then the line is healthy and the problem is the Wi-Fi: at night many neighbors use the same signal. I’m going to switch your router to a less-used signal. Your devices will disconnect for about thirty seconds. Is that okay?","Explique en palabras sencillas."),
 K("Sí, adelante.","Yes, go ahead."),
 S("Listo. Reconecte su celular y haga una prueba de velocidad, por favor.","Done. Reconnect your phone and run a speed test, please."),
 K("Dice trescientos diez. Mucho mejor.","It says three hundred ten. Much better."),
 S("Muy bien. En resumen, señor Peña: la línea estaba bien, y las caídas venían de una señal de Wi-Fi saturada. La cambié. Anoté todo en el ticket 61204. Si se cae esta noche, llámenos y mencione el ticket. ¿Algo más?","Very good. To recap, Mr. Peña: the line was fine, and the drops came from a saturated Wi-Fi signal. I changed it. I noted everything on ticket 61204. If it drops tonight, call us and mention the ticket. Anything else?","Cierre."),
 K("No, gracias.","No, thank you."),
 S("Gracias por llamar a Brightdesk. Que tenga una excelente noche.","Thank you for calling Brightdesk. Have a great night.")
],
qa:["Pidió el patrón","Probó con cable","Explicó sin jerga","Avisó de la desconexión breve","Dio ticket y plan"],
quiz:[
 ["La computadora por cable va rápido y los celulares lento. ¿Qué indica?",["La línea está mala","La línea está bien y el Wi-Fi es el problema","La computadora está mala"],1,"El cable prueba la línea."],
 ["¿Por qué avisar de la desconexión de treinta segundos?",["Es obligatorio","Evita que parezca un problema nuevo","Hace que funcione"],1,"Avisar antes mantiene la calma."]
]});

L.push({id:"e31",track:"es",lang:"es",title:"Llamada completa: quiero cancelar mi servicio (con inglés entre paréntesis)",level:"intermediate",account:"Northwave Fiber (línea en español)",mins:16,
teach:[
 ["Qué practica (What this practices)","Atender una cancelación con respeto, preguntar el motivo una sola vez y ofrecer una opción sin presionar. (Handle a cancellation respectfully, ask the reason once, offer one option without pressure.)"],
 ["Dos caminos (Two paths)","Si el motivo se puede resolver, ofrezca la solución. Si el cliente ya decidió, proceda sin insistir. (If it can be solved, offer it. If decided, proceed without pushing.)"],
 ["Cierre (Close)","Fecha final, última factura, equipo que debe devolver y puerta abierta."]
],
steps:{h:"Pasos (Steps)",items:[
 ["Verificar (Verify)","Identidad primero"],
 ["Motivo (Reason)","Pregunte una vez"],
 ["Ofrecer (Offer)","Solo si ayuda, una vez"],
 ["Procesar (Process)","Respete la decisión"],
 ["Detalles finales (Final details)","Fecha, factura, equipo"]
]},
phrases:[
 ["¿Me permite preguntar el motivo?","May I ask the reason?"],
 ["Entiendo, y respeto su decisión.","I understand, and I respect your decision."],
 ["Su servicio terminará el día quince.","Your service will end on the fifteenth."],
 ["Recibirá la factura final por correo.","You’ll receive the final bill by email."],
 ["Siempre será bienvenido de vuelta.","You’ll always be welcome back."]
],
script:[
 S("Gracias por llamar a Northwave Fiber, habla Alex. ¿Con quién tengo el gusto?","Thank you for calling Northwave Fiber, this is Alex. Who am I speaking with?","Comienzo."),
 K("Buenas tardes, soy Hugo Salazar. Quiero cancelar mi servicio.","Good afternoon, I’m Hugo Salazar. I want to cancel my service."),
 S("Mucho gusto, señor Salazar. Lamento oírlo, y con gusto lo ayudo. Primero verifico su cuenta. ¿Su nombre completo y la dirección?","Nice to meet you, Mr. Salazar. I’m sorry to hear that, and I’m happy to help. First I’ll verify your account. Your full name and address?"),
 K("Hugo Salazar Vega, calle Pino 9.","Hugo Salazar Vega, 9 Pino Street."),
 S("Gracias. ¿Y el PIN de la cuenta?","Thank you. And the account PIN?"),
 K("Uno, uno, siete, cinco.","One, one, seven, five."),
 S("Perfecto, ya está verificado. ¿Me permite preguntar el motivo? Quizá pueda ayudarle, pero si ya decidió, lo respeto.","Perfect, you’re verified. May I ask the reason? Maybe I can help, but if you’ve already decided, I respect that.","Medio. Pregunte una vez."),
 K("Me mudo a otra ciudad donde ustedes no dan servicio.","I’m moving to another city where you don’t offer service."),
 S("Entiendo, y gracias por decírmelo. Si no hay servicio en esa dirección, la cancelación es lo correcto. Voy a verificar que no haya penalidad. Un momento… No hay penalidad, porque su contrato ya terminó.","I understand, and thank you for telling me. If there’s no service at that address, cancellation is the right thing. I’m going to check that there’s no penalty. One moment… There’s no penalty, because your contract has ended."),
 K("Qué bien.","Good."),
 S("¿Para qué fecha desea que termine el servicio?","What date would you like the service to end?"),
 K("El día quince.","The fifteenth."),
 S("Perfecto. Su servicio terminará el día quince. Recibirá la factura final por correo, con el cobro hasta esa fecha. También debe devolver el módem; le envío una etiqueta de envío gratis.","Perfect. Your service will end on the fifteenth. You’ll receive the final bill by email, charged up to that date. You also need to return the modem; I’m sending you a free shipping label.","Cierre."),
 K("Está bien.","Okay."),
 S("En resumen: cancelación el día quince, sin penalidad, factura final por correo y etiqueta para el módem. Dejé todo anotado, ticket 70331. Siempre será bienvenido de vuelta. ¿Hay algo más en lo que pueda ayudarlo?","To recap: cancellation on the fifteenth, no penalty, final bill by email and a label for the modem. I put everything in the notes, ticket 70331. You’ll always be welcome back. Is there anything else I can help you with?"),
 K("No, gracias.","No, thank you."),
 S("Gracias por haber sido nuestro cliente, señor Salazar. Que tenga un excelente día y buena mudanza.","Thank you for being our customer, Mr. Salazar. Have a great day and a good move.")
],
qa:["Preguntó el motivo una vez","No presionó","Revisó penalidades","Dio fecha, factura y equipo","Cierre amable"],
quiz:[
 ["El cliente se muda a un lugar sin servicio. ¿Qué hace?",["Insistir en retener","Respetar, revisar penalidad, procesar la cancelación","Pasarlo a ventas"],1,"Si no hay solución posible, respete y haga bien el cierre."],
 ["¿Cuántas veces ofrece retener a un cliente decidido?",["Tres","Ninguna si ya decidió","Hasta que acepte"],1,"Ofrecer una vez como máximo y solo si ayuda."]
]});

L.push({id:"e32",track:"es",lang:"es",title:"Llamada completa: quiero hablar con un supervisor (con inglés entre paréntesis)",level:"intermediate",account:"All accounts (línea en español)",mins:16,
teach:[
 ["Qué practica (What this practices)","Manejar una solicitud de supervisor con calma: intente resolver primero, y si el cliente insiste, haga la transferencia con respeto. (Try to resolve first; if the customer insists, transfer respectfully.)"],
 ["Nunca se lo niegue (Never refuse)","Si pide un supervisor, usted lo gestiona. Ofrecer resolver primero está bien; negarse no. (If asked, you arrange it.)"],
 ["Transferencia cálida (Warm transfer)","Presente al cliente y resuma el caso al supervisor, para que no repita nada. (Brief the supervisor so the customer doesn’t repeat.)"]
],
steps:{h:"Pasos (Steps)",items:[
 ["Escuchar (Listen)","Deje que explique"],
 ["Ofrecer (Offer)","Intente resolver en un minuto"],
 ["Respetar (Respect)","Si insiste, gestione al supervisor"],
 ["Resumir (Brief)","Cuéntele el caso al supervisor"],
 ["Confirmar (Confirm)","Presente y quédese hasta que atiendan"]
]},
phrases:[
 ["Entiendo, y con gusto lo comunico con un supervisor.","I understand, and I’ll gladly connect you with a supervisor."],
 ["¿Me permite intentar ayudarle un minuto primero?","May I try to help you for a minute first?"],
 ["Voy a explicarle su caso al supervisor para que no tenga que repetirlo.","I’ll explain your case to the supervisor so you don’t have to repeat it."],
 ["Me quedo en la línea hasta que lo atiendan.","I’ll stay on the line until they take your call."]
],
script:[
 S("Gracias por llamar, habla Alex. ¿Con quién tengo el gusto?","Thank you for calling, this is Alex. Who am I speaking with?","Comienzo."),
 K("Soy Beatriz Mora. Quiero hablar con un supervisor, ya me cansé.","I’m Beatriz Mora. I want to speak to a supervisor, I’m tired of this."),
 S("Entiendo, señora Mora, y con gusto lo gestiono. ¿Me permite intentar ayudarle un minuto primero? Si no le sirve, la comunico con un supervisor de inmediato.","I understand, Mrs. Mora, and I’ll gladly arrange it. May I try to help you for a minute first? If it doesn’t help, I’ll connect you with a supervisor right away.","Ofrezca y respete."),
 K("Está bien, un minuto.","Okay, one minute."),
 S("Gracias. Para ayudarla necesito verificar su cuenta. ¿Su nombre completo y la dirección?","Thank you. To help you I need to verify your account. Your full name and address?"),
 K("Beatriz Mora Cruz, calle Luna 5.","Beatriz Mora Cruz, 5 Luna Street."),
 S("Gracias. ¿Y los últimos cuatro del teléfono de la cuenta?","Thank you. And the last four of the phone on the account?"),
 K("Dos, seis, cero, tres.","Two, six, zero, three."),
 S("Perfecto, ya está verificada. Cuénteme qué pasó y le escucho sin interrumpir.","Perfect, you’re verified. Tell me what happened and I’ll listen without interrupting.","Medio. Escuche sin interrumpir."),
 K("Me cobraron dos veces el mes pasado y nadie lo corrige. Es la tercera vez que llamo.","They charged me twice last month and nobody fixes it. It’s my third call."),
 S("Es la tercera llamada por el mismo cobro. Eso cansa, y lamento que no se haya resuelto. Estoy revisando… Veo los dos cobros. Voy a reembolsar el duplicado ahora mismo. ¿Le parece bien?","It’s your third call about the same charge. That’s exhausting, and I’m sorry it wasn’t solved. I’m checking… I see both charges. I’m going to refund the duplicate right now. Is that okay?"),
 K("Está bien, pero sigo queriendo que un supervisor lo confirme.","That’s fine, but I still want a supervisor to confirm it."),
 S("Por supuesto. Ya hice el reembolso. Voy a explicarle su caso al supervisor para que usted no tenga que repetirlo, y me quedo en la línea hasta que lo atiendan. Un momento, por favor.","Of course. I’ve made the refund. I’ll explain your case to the supervisor so you don’t have to repeat it, and I’ll stay on the line until they take your call. One moment, please.","Transferencia cálida."),
 S("(Al supervisor) Tengo a la señora Beatriz Mora, verificada. Se le cobró dos veces el mes pasado, es su tercera llamada, ya reembolsé el duplicado y pide su confirmación.","(To the supervisor) I have Mrs. Beatriz Mora, verified. She was charged twice last month, it’s her third call, I already refunded the duplicate and she asks for your confirmation."),
 S("Señora Mora, le presento al supervisor, que ya conoce su caso. Fue un gusto atenderla.","Mrs. Mora, I’m introducing you to the supervisor, who already knows your case. It was a pleasure helping you.","Cierre."),
 K("Gracias por quedarse conmigo.","Thank you for staying with me.")
],
qa:["No negó al supervisor","Intentó resolver sin retener","Escuchó sin interrumpir","Resumió el caso al supervisor","Presentó y se quedó en la línea"],
quiz:[
 ["El cliente pide un supervisor. ¿Qué hace?",["Decir que no hace falta","Ofrecer ayudar un minuto y, si insiste, gestionar al supervisor","Colgar"],1,"Nunca se niegue; ofrezca ayuda y respete la decisión."],
 ["¿Por qué resumir el caso al supervisor?",["Por cortesía","Para que el cliente no repita todo","Es un requisito de calidad"],1,"Evitar que el cliente repita es la mitad de la calma."]
]});

(window.EXTRA_LESSONS=window.EXTRA_LESSONS||[]).push(...L);
})();
