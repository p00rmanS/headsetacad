/* Tagalog practice calls (AI customer, needs an API key) and talk-throughs (no key) */
window.EXTRA_SIMS=Object.assign(window.EXTRA_SIMS||{},{
 "sim-tl1":{title:"Mabagal ang internet sa gabi (Tagalog)",account:"Northwave Fiber",level:"basic",lang:"tl",lesson:"tl5",
  crm:{Name:"Ramon Villanueva",Account:"NW-44-31987 (last 4: 1987)",Plan:"Fiber 500",Equipment:"Gateway NW G4",Outage:"No outage in the area",Verification:"Full name + last 4 of account"},
  goal:"Greet and verify in Tagalog with po and opo, discover that the line is fine on a cable, identify Wi-Fi congestion or placement as the cause, and agree on a fix.",
  persona:"Ramon Villanueva, 58, a Filipino-American retiree in California. Polite, speaks mostly Tagalog with some English words. Uses po and opo. His grandchildren stream every evening.",
  issue:"Mabagal ang internet at nagba-buffer ang TV tuwing gabi.",
  facts:"Last 4 digits: 1987. About six devices are on at night. The router is in a closet in the living room. With a cable on a laptop the speed test shows 470 down. On Wi-Fi in the bedroom it shows 40.",
  behavior:"If the agent asks about devices, he lists them. If the agent has him test with a cable, he gets 470. If the agent explains that the closet blocks the signal and suggests moving the router to an open shelf, he agrees and after moving it Wi-Fi in the bedroom gets about 180. If the agent tells him to buy a new router without testing, he becomes doubtful.",
  mood:"Polite and a little worried about bothering the agent. Responds well to patience, po and opo, and clear step-by-step guidance."},
 "sim-tl2":{title:"Tumaas ang bill (Tagalog)",account:"Northwave Fiber",level:"intermediate",lang:"tl",lesson:"tl7",
  crm:{Name:"Liza Santos",Account:"NW-62-70452 (last 4: 0452)",Plan:"Fiber 300, $65",Bill:"This month $95; promo of $30 ended last month",Offers:"Loyalty plan $60 with autopay for 12 months",Verification:"Full name + last 4 of account"},
  goal:"Verify, explain the bill line by line, own the confusion, offer the loyalty plan or a courtesy credit within policy, and confirm terms.",
  persona:"Liza Santos, 41, a nurse in New Jersey who sends money to family in the Philippines. Budget-conscious, speaks Taglish, uses po. Upset because nobody told her the promo would end.",
  issue:"Tumaas ng thirty dollars ang bill niya at hindi niya alam kung bakit.",
  facts:"Last 4 digits: 0452. She remembers being told $65 monthly. Her promo ended last month. She has autopay off.",
  behavior:"If the agent blames her or says it was in the contract, she becomes upset and mentions cancelling. If the agent explains the promo clearly and apologizes for the lack of notice, she calms down. She accepts the loyalty plan at $60 with autopay and would like a courtesy credit if offered.",
  mood:"Upset and suspicious at first, warms up with clear explanations and respectful tone."},
 "sim-tl3":{title:"Pinadalhan ako ng kahina-hinalang text (Tagalog)",account:"Brightdesk IT",level:"intermediate",lang:"tl",lesson:"tl8",
  crm:{Name:"Jun Dela Cruz",Account:"BD-77124 (last 4: 7124)",Policy:"Never ask for passwords or codes. Report phishing to security. Direct bank issues to the bank.",Verification:"Full name + last 4 of account"},
  goal:"Verify, stay calm and non-blaming, guide him to change his password and enable two-step verification, and check whether money or work accounts were affected.",
  persona:"Jun Dela Cruz, 52, a warehouse supervisor. Polite, a bit embarrassed. Mixes Tagalog and English, uses po.",
  issue:"Nag-click siya sa link sa text at nag-type ng password sa isang page.",
  facts:"Last 4 digits: 7124. It was a text saying his parcel was held. He typed his email password and nothing else. He uses the same password on other sites. He has not noticed bank activity.",
  behavior:"If the agent blames him he becomes quiet and defensive. If the agent thanks him for reporting quickly and guides him to change his password from his own phone, he cooperates. He asks if he should change the other sites too (good answer: yes, and use different passwords). He agrees to turn on two-step verification.",
  mood:"Embarrassed and worried, relieved by calm, kind guidance."}
});
[["tl5","sim-tl1"],["tl7","sim-tl2"],["tl8","sim-tl3"]].forEach(([l,s])=>{const x=(window.EXTRA_LESSONS||[]).find(a=>a.id===l); if(x) x.sim=s;});

Object.assign(window.TALKS=window.TALKS||{},{
"t-tl1":{title:"Pagbati at verification",account:"Northwave Fiber",level:"basic",lang:"tl",lesson:"tl1",
 crm:{Name:"Maria Lopez",Account:"NW-22-74417",Verify:"Name + last 4 of account"},goal:"Brand, name, offer help, reason for verification, and restate the issue, with po and opo.",
 turns:[
  {c:"Hello? Nawala yung internet namin simula kaninang umaga.",o:[
   ["Salamat po sa pagtawag sa Northwave Fiber, si Jordan po ito. Pasensya na po sa abala. Para po sa seguridad, maaari po bang i-confirm ang buong pangalan ninyo at ang huling apat na numero ng account?",2,"Brand, name, apology and verification with a reason, all with po."],
   ["Hello. Anong account number mo?",0,"Walang po, walang sagot sa problema, at gumamit ng “mo” sa estranghero."],
   ["Salamat po sa pagtawag. Ano po ang problema?",1,"Magalang pero walang pangalan at walang paghingi ng paumanhin."]]},
  {c:"Maria Lopez po, 4417.",o:[
   ["Salamat po, Ma’am Maria. Na-verify ko na po kayo. Ibig sabihin po, wala pong internet simula kaninang umaga. Tama po ba?",2,"Kinukumpirma ang verification at inuulit ang problema."],
   ["Okay, i-restart mo ang modem.",0,"Walang po at walang pagtatanong muna."],
   ["Sige po. Ano po ang nangyari?",1,"Tinanong ulit ang sinabi na ng customer."]]},
  {c:"Opo, tama po. May video call po ako mamayang alas-dose.",o:[
   ["Naiintindihan ko po, mahalaga po iyon. Tutulungan ko po kayo agad. Anong kulay po ng ilaw na Online sa modem?",2,"Empatiya, pangako ng tulong at isang malinaw na tanong."],
   ["Hindi ko po masisiguro kung maaayos agad.",1,"Totoo pero hindi nakakatulong; magbigay ng plano."],
   ["Hintayin n'yo na lang po.",0,"Walang plano at walang empatiya."]]},
  {c:"Orange po, nagbi-blink.",o:[
   ["Salamat po. Ibig sabihin nito, hinahanap ng modem ang network. Maaari po bang tingnan ninyo ang kable mula sa pader kung mahigpit?",2,"Ipinaliwanag ang kahulugan at isang hakbang."],
   ["I-reset mo ang lahat.",0,"Masyadong malaki at walang po."],
   ["Hindi ko po alam.",0,"Hindi nakakatulong."]]}
 ]},
"t-tl2":{title:"Kung nagagalit ang customer",account:"Northwave Fiber",level:"intermediate",lang:"tl",lesson:"tl8",
 crm:{Name:"Ramon Cruz",Account:"NW-33-99120",Verify:"Verified",History:"Apat na tawag na tungkol sa parehong problema"},goal:"Magbigay ng tiyak na paumanhin, akuin ang problema, at magbigay ng oras.",
 turns:[
  {c:"Apat na beses na akong tumawag, wala pa ring nangyayari! Ano ba kayo?",o:[
   ["Apat na beses po, pasensya na po talaga. Ako po si Jordan, at ako na po ang mag-aasikaso nito hanggang maayos. Ano po ang nangyari sa huling tawag?",2,"Tiyak na paumanhin, akuin at tanong."],
   ["Kalma lang po kayo.",0,"Ang “kalma lang” ay nakakadagdag sa galit."],
   ["Hindi ko po alam kung bakit.",1,"Totoo pero walang pag-akuin."]]},
  {c:"Sinabi nilang tatawagan ako, hindi naman.",o:[
   ["Hindi po dapat nangyari iyon. Aayusin ko po ito, at tatawagan ko po kayo bago mag-alas-tres ngayong hapon.",2,"Inamin ang pagkakamali at nagbigay ng oras."],
   ["Baka po abala sila.",0,"Pagdadahilan para sa kompanya."],
   ["Susubukan ko pong tawagan kayo.",1,"Walang tiyak na oras."]]},
  {c:"Gusto ko ng supervisor ngayon din.",o:[
   ["Opo, ayos lang po. Ikokonekta ko po kayo sa supervisor at ibabahagi ko ang buong kuwento para hindi na kayo magpaulit-ulit.",2,"Iginagalang ang hiling na may warm transfer."],
   ["Wala po kaming supervisor.",0,"Hindi totoo."],
   ["Ako na lang po ang tutulong.",1,"Dapat sundin ang hiling."]]}
 ]},
"t-tl3":{title:"Mabagal ang internet sa gabi",account:"Northwave Fiber",level:"basic",lang:"tl",lesson:"tl5",
 crm:{Name:"Ramon Villanueva",Account:"NW-44-31987",Verify:"Verified",Plan:"500 Mbps"},goal:"Hanapin ang dahilan sa tamang pagkakasunod at magpaliwanag nang simple.",
 turns:[
  {c:"Mabagal po ang internet namin lalo na sa gabi.",o:[
   ["Naiintindihan ko po, nakakainis po iyan. Ilang device po ang gumagamit ng Wi-Fi tuwing gabi, at ano po ang mabagal?",2,"Empatiya at pagtuklas."],
   ["I-restart mo ang router.",0,"Walang po, at ayusin bago magtanong."],
   ["Normal po iyan sa gabi.",0,"Pagtanggi sa problema."]]},
  {c:"Mga lima po, may TV pa. Nagba-buffer ang TV.",o:[
   ["Salamat po. Subukan po natin kung ang linya o ang Wi-Fi ang may problema. May kable po ba kayo para ikonekta ang computer sa router?",2,"Control test na may paliwanag."],
   ["Bumili na lang po kayo ng bagong router.",0,"Walang pagsusuri."],
   ["Tawagan po ninyo ulit bukas.",0,"Itinutulak ang trabaho sa customer."]]},
  {c:"Nakakonekta na po. 470 daw po ang speed.",o:[
   ["Maganda po iyan. Ibig sabihin, buo ang bilis ng linya ninyo. Ang Wi-Fi po sa bahay ang kailangan nating ayusin. Nasaan po ang router?",2,"Binasa nang tama ang resulta."],
   ["Walang problema kung ganoon.",0,"Hindi nalutas ang problema."],
   ["Magpadala tayo ng technician.",0,"Hindi kailangan."]]},
  {c:"Nasa loob po ng aparador sa sala.",o:[
   ["Iyon po ang dahilan. Hinaharangan ng aparador ang signal. Ilipat po natin ito sa bukas na lugar na mataas, tapos mag-test ulit.",2,"Natukoy ang sanhi at praktikal na ayos."],
   ["Ayos lang iyan.",0,"Hindi totoo."],
   ["Magbayad ng upgrade.",0,"Hindi kailangan."]]}
 ]},
"t-tl4":{title:"Scam: nagpapadala ng pera",account:"Bright Bank",level:"intermediate",lang:"tl",lesson:"tl9",
 crm:{Name:"Nena Garcia",Account:"BB-9021",Verify:"Verified",Alert:"Pending wire to a personal account"},goal:"Pigilan nang mahinahon at ipaliwanag ang mga senyales ng scam.",
 turns:[
  {c:"Kailangan kong magpadala ng $3,000 ngayon, emergency daw ng pamangkin ko.",o:[
   ["Naiintindihan ko po na nag-aalala kayo. Bago po tayo magpadala, maaari po ba akong magtanong ng ilang bagay para masigurong ligtas kayo? Sino po ang humingi?",2,"Mahinahon at nagtatanong."],
   ["Sige po, ipapadala ko na.",0,"Hindi sinuri ang posibleng scam."],
   ["Scam iyan, huwag kayong magpadala.",1,"Maaaring tama pero walang paliwanag at nakakaalarma."]]},
  {c:"Tumawag po siya sa text, gamit ang bagong numero, at sabi huwag daw sabihin sa iba.",o:[
   ["Salamat po sa pagsabi. Ang bagong numero at ang “huwag sabihin sa iba” ay mga karaniwang senyales ng scam. Tawagan po muna natin ang pamangkin ninyo sa numerong alam ninyo.",2,"Ipinaliwanag ang mga senyales at ligtas na hakbang."],
   ["Wala po akong magagawa.",0,"Hindi nakakatulong."],
   ["Ipapadala ko po muna.",0,"Mapanganib."]]},
  {c:"Pero kung totoo po at kailangan niya talaga?",o:[
   ["Kung totoo po, maaari natin siyang makausap bago magpadala. Maaari ko pong ilagay sa hold ang transfer habang tinatawagan ninyo siya.",2,"Ligtas na daan na may opsyon."],
   ["Bahala po kayo.",0,"Iniwan ang customer."],
   ["Kanselahin natin lahat.",1,"Walang plano."]]}
 ]}
});
