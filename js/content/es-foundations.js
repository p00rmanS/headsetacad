/* Bilingual Spanish: foundations (numbers, register, pronunciation, hold/notes) */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"e5",track:"es",title:"Números, fechas, dinero y deletreo: la base de toda llamada",level:"basic",account:"All accounts (línea en español)",mins:16,lang:"es",
 teach:[
  ["Read digits one by one","Account numbers, phone numbers and codes are read digit by digit, never as one big number. 4417 is “cuatro, cuatro, uno, siete”. Pause between groups: “cinco cinco cinco, uno dos tres, cuatro cinco seis siete”."],
  ["Numbers you must own","0 cero, 1 uno, 2 dos, 3 tres, 4 cuatro, 5 cinco, 6 seis, 7 siete, 8 ocho, 9 nueve, 10 diez, 11 once, 12 doce, 13 trece, 14 catorce, 15 quince, 16 dieciséis, 17 diecisiete, 18 dieciocho, 19 diecinueve, 20 veinte, 30 treinta, 40 cuarenta, 50 cincuenta, 60 sesenta, 70 setenta, 80 ochenta, 90 noventa, 100 cien (ciento before more: ciento doce), 200 doscientos, 500 quinientos, 1,000 mil."],
  ["Money","$112.40 is “ciento doce dólares con cuarenta centavos”. $65 is “sesenta y cinco dólares”. Say the currency every time so there is no confusion. Percent is “por ciento”: 20% is “veinte por ciento”."],
  ["Dates","Spanish uses day then month: “el tres de octubre”. Months: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre. Years: 1988 is “mil novecientos ochenta y ocho”, 2025 is “dos mil veinticinco”. Confirm ambiguous dates aloud: “3/4, ¿es el tres de abril o el cuatro de marzo?”"],
  ["Time","“Son las tres de la tarde.” “A las nueve de la mañana.” Add the time zone when it matters: “hora del este”."],
  ["Spelling names and emails","Use the Spanish alphabet names: a, be, ce, de, e, efe, ge, hache, i, jota, ka, ele, eme, ene, eñe, o, pe, cu, erre, ese, te, u, uve, doble ve, equis, i griega, zeta. For email: arroba (@), punto (.), guion (-), guion bajo (_). Ask the customer to spell, then read back in groups."],
  ["Two surnames","Many customers have two apellidos. Record both. Address them with the first surname, and if the system takes only one, ask which one is on the account."],
  ["Read back everything","After each number, name or date, read it back: “Permítame confirmar: cuatro, cuatro, uno, siete. ¿Es correcto?”"]
 ],
 phrases:[
  ["¿Me puede dar los últimos cuatro dígitos, uno por uno?","Can you give me the last four digits, one by one?"],
  ["Permítame confirmar: cuatro, cuatro, uno, siete. ¿Es correcto?","Let me confirm: 4, 4, 1, 7. Is that correct?"],
  ["El total es ciento doce dólares con cuarenta centavos.","The total is $112.40."],
  ["El pago vence el quince de noviembre.","The payment is due November 15."],
  ["¿Me puede deletrear su apellido, por favor?","Can you spell your last name, please?"],
  ["¿Es con be de burro o uve de vaca?","Is it with B as in burro or V as in vaca?"],
  ["Su correo es juan punto pérez arroba ejemplo punto com.","Your email is juan.perez@example.com."],
  ["¿Me puede repetir el número más despacio?","Can you repeat the number more slowly?"],
  ["Su cita es el martes a las diez de la mañana.","Your appointment is Tuesday at ten in the morning."]
 ],
 steps:{h:"Capturing data accurately",items:[
  ["Ask","Pídale el dato con claridad: ¿Me puede dar su número de cuenta, uno por uno?"],
  ["Listen","Escriba mientras escucha; no interrumpa."],
  ["Read back","Repita el dato en grupos: cuatro, cuatro, uno, siete."],
  ["Confirm","¿Es correcto?"],
  ["Correct","Si hay un error: Perdón, permítame corregirlo."]
 ]},
 script:[
  ["a","Para verificar su cuenta, ¿me puede dar los últimos cuatro dígitos, uno por uno?"],
  ["c","Sí. Cuatro, siete, siete, tres."],
  ["a","Permítame confirmar: cuatro, siete, siete, tres. ¿Es correcto?","Reads back digit by digit."],
  ["c","Sí, correcto."],
  ["a","Gracias. ¿Y su fecha de nacimiento, por favor?","Moves to the next item."],
  ["c","El doce de abril de mil novecientos ochenta y ocho."],
  ["a","El doce de abril de mil novecientos ochenta y ocho. Gracias, está verificado.","Repeats the date in full."]
 ],
 qa:["Digits read one by one","Numbers and dates read back","Currency said aloud","Names and emails spelled with Spanish letter names"],
 quiz:[
  ["How do you say 4417 as an account digit string?",["Cuatro mil cuatrocientos diecisiete","Cuatro, cuatro, uno, siete","Cuarenta y cuatro, diecisiete"],1,"Account digits are read one by one."],
  ["What is “el tres de octubre” in numbers?",["October 3","March 10","3 October 2010 only"],0,"Spanish dates are day then month."],
  ["How do you say 112 dollars?",["Cien doce dólares","Ciento doce dólares","Uno doce dólares"],1,"Ciento before additional numbers; cien alone."]
 ]},

{id:"e6",track:"es",title:"Registro y regionalismos: usted, cortesía y palabras que cambian",level:"intermediate",account:"All accounts (línea en español)",mins:14,lang:"es",
 teach:[
  ["Usted is the default","Use usted (le, su) with all customers unless they invite tú. Younger customers sometimes say “tutéame”; follow their lead only if they ask. Never switch to tú first."],
  ["Respectful titles","Señor, señora, señorita (use sparingly; many prefer señora), don, doña for older customers in some regions. Use the first surname: señor García Pérez → señor García. Ask if unsure: “¿Cómo prefiere que le llame?”"],
  ["Words that change by country","Computer: computadora (Mexico, Central America, US), ordenador (Spain), computador (Colombia, Chile). Cell phone: celular (most of Latin America), móvil (Spain). Router: enrutador or router. Download: descargar. Password: contraseña (universal). Mouse: ratón (Spain, many places), mouse (Mexico, US). Ask what they call it, then mirror the customer’s word."],
  ["Mirror the customer","If the customer says “compu”, you may say “computadora” or “compu” once to build rapport, but keep your grammar formal. Mirror their key nouns to avoid confusion."],
  ["Spanglish","Customers may switch languages (“el router está blinkeando”). Understand it, answer in clear Spanish, and do not correct them. Use the standard word and confirm: “Entiendo, la luz está parpadeando. ¿De qué color es?”"],
  ["Code-switching rules","If a customer says they prefer English or switches to English, switch with them. Do not insist on Spanish. If the customer asks to continue in Spanish, stay in Spanish."],
  ["False friends to avoid","“Actualmente” means currently, not actually. “Librería” is a bookstore, not a library. “Embarazada” means pregnant, not embarrassed (use “avergonzado/a”). “Constipado” means having a cold in some regions; use “estreñido” for constipated. “Aplicación” means application (app) but also a job application: use “solicitud” for a job form."],
  ["Warm but professional","Use “con mucho gusto”, “permítame”, “con su permiso”, “le agradezco su paciencia”. These phrases sound natural and respectful."]
 ],
 phrases:[
  ["¿Cómo prefiere que le llame?","How do you prefer that I address you?"],
  ["Con mucho gusto le ayudo.","I’m glad to help you."],
  ["Permítame un momento, por favor.","Allow me a moment, please."],
  ["Con su permiso, voy a revisar su cuenta.","With your permission, I’m going to review your account."],
  ["Le agradezco su paciencia.","I appreciate your patience."],
  ["¿Usted le llama computadora o computador?","Do you call it a computadora or a computador?"],
  ["Entiendo, la luz está parpadeando. ¿De qué color es?","I understand, the light is blinking. What color is it?"],
  ["Si prefiere, podemos continuar en inglés.","If you prefer, we can continue in English."],
  ["Actualmente su plan es de quinientos megabits.","Currently your plan is 500 megabits."]
 ],
 steps:{h:"Set the register in the first minute",items:[
  ["Greet","Use usted: ¿En qué le puedo ayudar?"],
  ["Name","Use señor/señora and the first surname."],
  ["Listen for words","Note how the customer names things."],
  ["Mirror","Use their noun once, in formal grammar."],
  ["Switch","Offer English only if they prefer it."]
 ]},
 script:[
  ["c","Hola, mi compu no se conecta al internet."],
  ["a","Buenos días, con mucho gusto le ayudo. ¿Cómo prefiere que le llame?","Formal, asks how to address."],
  ["c","Me llamo Beatriz, pero dígame Bety."],
  ["a","Muy bien, señora Bety. Entiendo que su compu no se conecta. ¿Me puede decir qué mensaje aparece en la pantalla?","Respects her preference, keeps usted, mirrors “compu”."]
 ],
 qa:["Usted used unless the customer invites tú","Customer’s preferred name and nouns used","Language switch handled gracefully","False friends avoided"],
 quiz:[
  ["A customer says “tutéame”. You:",["Switch to tú","Keep usted forever","Hang up"],0,"Follow the customer’s explicit invitation."],
  ["“Actualmente” means:",["Actually","Currently","Absolutely"],1,"A false friend."],
  ["Which word for computer is most common in Mexico and the US?",["Ordenador","Computadora","Computador"],1,"Mirror the customer’s word."]
 ]},

{id:"e7",track:"es",title:"Pronunciación y claridad: sonar profesional en español",level:"basic",account:"All accounts (línea en español)",mins:14,lang:"es",
 teach:[
  ["Five pure vowels","a, e, i, o, u are always pronounced the same way, short and clean: a (ah), e (eh), i (ee), o (oh), u (oo). Do not glide them like English. “Banco” is BAHN-koh, not BAYN-koh."],
  ["Silent h, soft b and v","h is silent: “hola” is OH-lah, “hora” is OH-rah. b and v sound the same in Spanish (a soft b). “Vaca” and “baca” sound alike; clarify with ‘b de burro’ and ‘v de vaca’."],
  ["The rolled r and the tap","A single r between vowels is a quick tap: “pero”. Initial r or rr is rolled: “recibo”, “carro”. If you cannot roll it, a light tap is still understood; practice with “perro” and “pero”."],
  ["ñ, ll, y","ñ is like ny in canyon: “año”. ll and y sound like English y or j depending on region: “llamar” and “yo”. Choose one and stay consistent."],
  ["j, g and c","j is a breathy h: “jueves”. g before e/i is also h: “gente”. g before a/o/u is hard: “gato”. c before e/i sounds like s (Latin America): “cinco”. c before a/o/u is k: “cuenta”. z is s in Latin America."],
  ["Stress and accent marks","Words ending in a vowel, n or s stress the next-to-last syllable: “cuenta”. Others stress the last: “papel”. An accent mark overrides: “teléfono”, “factura” (no mark). The mark can change meaning: “si” (if) and “sí” (yes), “el” (the) and “él” (he)."],
  ["Pace and rhythm","Spanish is syllable-timed: each syllable gets about the same time. Do not rush. Slow down for numbers, names and instructions. Use a gentle falling tone on statements and rising on questions."],
  ["Practice routine","Record yourself saying the greeting and the closing. Compare with a native speaker audio. Repeat the tongue-twister “tres tristes tigres tragaban trigo” slowly three times a day. Use the app’s speech button to hear examples."]
 ],
 phrases:[
  ["Gracias por llamar, le habla Ana. (GRAH-see-ahs por yah-MAR, leh AH-blah AH-nah)","Thank you for calling, this is Ana."],
  ["Hola, buenos días. (OH-lah, BWEH-nos DEE-ahs)","Hello, good morning."],
  ["Su cuenta está verificada. (soo KWEN-tah es-TAH veh-ree-fee-KAH-dah)","Your account is verified."],
  ["Un momento, por favor. (oon moh-MEN-toh, por fah-VOR)","One moment, please."],
  ["Gracias por su paciencia. (GRAH-see-ahs por soo pah-see-EN-see-ah)","Thank you for your patience."],
  ["El jueves por la mañana. (el HWEH-ves por lah mah-NYAH-nah)","Thursday morning."],
  ["Quinientos dólares. (kee-nee-EN-tohs DOH-lah-res)","Five hundred dollars."],
  ["El carro es rojo. (el KAH-rroh es ROH-hoh)","The car is red. (rolled rr)"],
  ["Tres tristes tigres tragaban trigo.","Three sad tigers swallowed wheat. (tongue-twister)"]
 ],
 steps:{h:"Daily pronunciation drill",items:[
  ["Vowels","Say a, e, i, o, u ten times, short and pure."],
  ["Rolled r","Repeat pero, perro, carro, recibo."],
  ["Greeting","Say the full greeting three times at a calm pace."],
  ["Numbers","Say cuatro, cuatro, uno, siete aloud, slowly."],
  ["Record","Record yourself and listen back for stress and clarity."]
 ]},
 script:[
  ["a","Gracias por llamar a Brightdesk, le habla Ana. ¿En qué le puedo ayudar hoy?"],
  ["c","Hola, necesito ayuda con mi correo."],
  ["a","Con mucho gusto, señor. Voy a pedirle su nombre completo, por favor, y los últimos cuatro dígitos de su cuenta.","Clear syllables, calm pace."]
 ],
 qa:["Vowels clean and consistent","Rolled r attempted where needed","Numbers and names delivered slowly","Accent marks and stress correct"],
 quiz:[
  ["The letter h in “hola” is:",["Silent","A hard k","A soft j"],0,"h is silent."],
  ["Which pair changes meaning with an accent?",["si / sí","casa / cassa","pero / peru"],0,"si = if, sí = yes."],
  ["“Carro” has:",["A rolled rr","A silent r","An English r"],0,"The rr is rolled."]
 ]},

{id:"e8",track:"es",title:"Espera, transferencia y notas en español",level:"basic",account:"All accounts (línea en español)",mins:12,lang:"es",
 teach:[
  ["Hold in Spanish","Ask permission, give a reason and a time, then thank them. “¿Me permite ponerle en espera unos dos minutos mientras reviso su cuenta?” Return before the time and thank them: “Gracias por esperar.”"],
  ["Warm transfer","Brief the next agent first, in the language they will use, so the customer does not repeat. Tell the customer who is next and why: “Voy a transferirle con el equipo de facturación. Ya les expliqué su situación, así que no tendrá que repetirla.”"],
  ["No Spanish agent available","Never leave a Spanish speaker without help. Follow your policy: use a language interpreter line, offer a callback with a Spanish-speaking agent, or explain the wait kindly. Do not guess or use machine translation unless approved."],
  ["Notes in English","Most systems require English notes. Write facts clearly and add the language: “Cust speaks Spanish; call handled in Spanish.” Quote key phrases only if useful. Avoid translating idioms literally."],
  ["Names and accents in the system","Enter names with accents when the system allows (José, María). If the system rejects them, enter without accents and follow policy. Never change a customer’s name."],
  ["Mark the language","Update the contact preference to Spanish so the next call routes correctly, if the customer agrees."],
  ["Interpreter etiquette","If you use a three-way interpreter, speak to the customer, not the interpreter. Use short sentences and pause."]
 ],
 phrases:[
  ["¿Me permite ponerle en espera unos dos minutos?","May I place you on hold for about two minutes?"],
  ["Gracias por esperar. Ya tengo su información.","Thanks for waiting. I have your information now."],
  ["Voy a transferirle con el equipo de facturación.","I’m going to transfer you to the billing team."],
  ["Ya les expliqué su situación, no tendrá que repetirla.","I’ve already explained your situation; you won’t have to repeat it."],
  ["Voy a conectarle con un intérprete para ayudarle mejor.","I’m going to connect you with an interpreter to help you better."],
  ["Le puedo devolver la llamada con un agente que habla español.","I can call you back with a Spanish-speaking agent."],
  ["¿Desea que dejemos el español como su idioma preferido?","Would you like us to keep Spanish as your preferred language?"],
  ["Su número de referencia es cinco cinco uno cero dos.","Your reference number is 5 5 1 0 2."]
 ],
 steps:{h:"Transfer in Spanish",items:[
  ["Explain","Voy a transferirle con el equipo de facturación."],
  ["Reason","Ellos pueden revisar ese cargo."],
  ["Brief","Resuma el caso al siguiente agente primero."],
  ["Reassure","No tendrá que repetir nada."],
  ["Notes","Notas en inglés: idioma, motivo, pasos."]
 ]},
 script:[
  ["a","¿Me permite ponerle en espera unos dos minutos mientras reviso su cuenta?"],
  ["c","Sí, claro."],
  ["a","Gracias por esperar, señora Ruiz. Veo que el cargo es de un equipo que usted devolvió. Voy a transferirle con facturación. Ya les expliqué su situación, así que no tendrá que repetirla.","Explains, reassures, warm transfer."]
 ],
 qa:["Permission, reason and time given before hold","Warm transfer with a briefing","No customer left without language support","Notes in English with language marked"],
 quiz:[
  ["No Spanish agent is free. You:",["Follow the interpreter or callback policy","Guess in broken Spanish","Hang up"],0,"Never leave the customer unsupported."],
  ["Notes are usually written in:",["English, with the language noted","Spanish only","Emoji"],0,"Follow system rules."],
  ["A warm transfer means:",["You brief the next agent first","You transfer silently","You hang up"],0,"The customer doesn’t repeat."]
 ]}
]);
