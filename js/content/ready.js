/* Readiness phase: weeks 23 to 26 */
window.EXTRA_TRACKS=(window.EXTRA_TRACKS||[]).concat([
  {id:"ready",code:"READY",name:"Readiness",blurb:"Mixed calls under time pressure, mock QA, the final exam, interview prep and your first 30 days."}
]);

window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

/* ---------------- WEEK 23 ---------------- */
{id:"r1",track:"ready",title:"Switching accounts fast: the 30-second reset between calls",level:"intermediate",account:"All accounts",mins:12,
 teach:[
  ["The floor is mixed","One call is a bank, the next is a modem, the next a return. QA scores each call on its own. The agents who do well reset fully between calls and do not carry the last account’s rules into the next."],
  ["The 30-second reset","Finish notes. One breath. Check which account the next call is for. Open that account’s verification policy and key articles. Put your greeting for that account in your head: the brand name, your name, the offer to help."],
  ["Policy cards","Make a one-line card for each account: how to verify, what you can never ask for, how to credit or refund, and who to escalate to. Review the card as the call connects."],
  ["Common mix-ups","Using the bank’s strict verification on a retail call wastes time. Using the retail’s loose verification on a bank call is an automatic fail. Quoting the wrong company name in the greeting is a QA ding. Know which one you are in."],
  ["Voice reset","Your tone should fit the account: calm and precise for banking and health, friendly and quick for retail, patient and clear for tech support."],
  ["Practice","In the Drill page, start a gauntlet with Any area. Between calls take the 30 seconds on purpose."]
 ],
 steps:{h:"The reset between calls",items:[
  ["Notes","Finish and save the notes for the last call."],
  ["Breath","One slow breath, shoulders down."],
  ["Account","Which account is next? Open its policy card."],
  ["Greeting","Say the right brand name in your head."],
  ["Go","Answer with a smile in your voice."]
 ]},
 script:[
  ["a","Thank you for calling Harborline Bank, this is Jordan. How can I help you today?","The correct brand for this call."],
  ["c","Hi, my card was declined at the store."],
  ["a","I’m sorry about that, let’s sort it out. To protect your account, can you confirm your full name, date of birth and the last four of your account number?","Bank-level verification, not retail-level."]
 ],
 qa:["Right brand and policy for the account","Previous call’s notes finished","Verification matched to the account","Tone fits the account"],
 quiz:[
  ["You move from a retail call to a bank call. First:",["Switch to the bank’s verification and policy","Use the same verification as before","Skip verification"],0,"Policies differ by account."],
  ["A policy card helps you:",["Remember each account’s rules quickly","Avoid learning","Skip QA"],0,"It is a memory aid."],
  ["Why finish notes before the next call?",["Details are lost otherwise","It is decoration","It increases AHT"],0,"Write while fresh."]
 ]},

{id:"r2",track:"ready",title:"Two problems in one call: triage and sequence",level:"advanced",account:"Northwave Fiber",mins:14,sim:"sim-r1",
 teach:[
  ["It happens often","A customer calls about a bill and mentions Wi-Fi trouble halfway through. If you handle problems in the order they appear, the call wanders. Triage them."],
  ["List and agree","After discovery, list the issues aloud: “So I have two things to look at: your bill and the Wi-Fi in the bedroom. Is that right?” Agree on the order: “Which is more urgent for you?”"],
  ["Order by urgency and dependency","Service down comes before billing. Safety and security come first. If one fix makes the other easier (restart the router before a speed test), order by dependency."],
  ["Finish one before starting the next","Close the first issue with a summary and check: “That’s the bill sorted. Now let’s look at the Wi-Fi.” Do not leave half-finished threads."],
  ["Verification once","Verify once at the start. Do not make the customer prove who they are twice, unless the second issue needs a higher level."],
  ["Time and notes","Write one note per issue in the five-part format. Mention both in the close so nothing is forgotten."],
  ["When there is no time","If a second issue is long, book a callback with a clear time and a reference number rather than rushing."]
 ],
 steps:{h:"Handle two issues",items:[
  ["List","So I have two things: A and B. Right?"],
  ["Order","Which should we do first?"],
  ["Fix A","Resolve and summarize."],
  ["Fix B","Resolve and summarize."],
  ["Close","Recap both and give reference numbers."]
 ]},
 script:[
  ["c","My bill is wrong, and also my Wi-Fi is slow in the bedroom."],
  ["a","I can help with both. Let me make sure I have it right: first your bill, and second the Wi-Fi in the bedroom. Which would you like to start with?","Lists and agrees on order."],
  ["c","The bill, it’s more money."],
  ["a","Okay. Let’s look at the bill first, and when that’s done we’ll move to the Wi-Fi. I’ll write both down so nothing gets lost.","Sets expectations."]
 ],
 qa:["Issues listed and order agreed","One issue finished before the next","Verification done once","Both issues in notes and recap"],
 quiz:[
  ["A customer mentions a second problem. You:",["List both and agree the order","Ignore the second","Switch randomly"],0,"Triage."],
  ["Service down vs a billing question:",["Service down first","Billing first","Either"],0,"Urgency first."],
  ["At the close you:",["Recap both issues","Mention only one","Skip the recap"],0,"Close the loop."]
 ]},

{id:"r3",track:"ready",title:"Pace under pressure: lower handle time without rushing",level:"intermediate",account:"All accounts",mins:12,sim:"sim-r2",
 teach:[
  ["What really lowers AHT","Not talking faster. Good discovery, one question at a time, no dead air, searching while talking, notes as you go, and a clean close. These also raise quality."],
  ["Where time leaks","Long greetings, repeating verification, silence while you search, explaining too much, re-asking things already answered, slow typing and writing notes after the call."],
  ["The efficient call","Open, verify, restate, fix, confirm, close. Speak plainly. Tell the customer what you are doing while you do it. Never go silent."],
  ["Use shortcuts","Text snippets for greetings, holds and closes. Keyboard shortcuts for windows. Bookmark the ten articles you use most."],
  ["Do not rush verification or the close","These are the parts QA protects. Skipping them to save thirty seconds can cost the whole call."],
  ["Know your target","Your center’s AHT target is a range. Consistently under it with falling quality is worse than over it with high quality."],
  ["Review your calls","Look at your longest calls. What took the time? Fix that one thing."]
 ],
 steps:{h:"Shave minutes safely",items:[
  ["Prepare","Open the account’s policy card before the call."],
  ["Discover","One open question, then closed ones."],
  ["Narrate","Tell the customer what you are doing while you search."],
  ["Notes","Write as you go."],
  ["Close","Recap, reference, anything else, brand."]
 ]},
 script:[
  ["a","Thanks for holding on while I look. I’m opening your account now. While that loads, can you tell me what you see on the screen?","Fills silence usefully."]
 ],
 qa:["No dead air longer than about ten seconds","Verification and close not skipped","Notes written during the call","Efficient but warm tone"],
 quiz:[
  ["Best way to lower AHT:",["Better discovery and no dead air","Talking faster","Skipping verification"],0,"Efficient, not rushed."],
  ["What should you never skip to save time?",["Verification and the close","The greeting","The hold music"],0,"QA protects them."],
  ["A long call. First review:",["What took the time","The customer’s mood","The headset"],0,"Find the leak."]
 ]},

{id:"r4",track:"ready",title:"Your practice week: how to run a mixed-call day",level:"basic",account:"All accounts",mins:10,
 teach:[
  ["Treat it like a shift","Pick a 90-minute block. No notes beyond the policy cards. Use the Drill page to start a gauntlet. Take the calls in order and do your 30-second reset between them."],
  ["After each call","Read the QA review. Write down the lowest two criteria. Do not retry the same call right away; wait until you have done a different one."],
  ["After the gauntlet","Look at the average. If it is below 85 percent, open the Readiness page and read the “Where to improve” list. Study the linked lessons, then run another gauntlet in a day or two."],
  ["Spanish days","Use the Spanish area for two gauntlets a week from now on. Record yourself once a week."],
  ["Rest","Short, regular practice beats one long session. Stop when you are tired."]
 ],
 steps:{h:"A good practice day",items:[
  ["Warm up","Read your policy cards for five minutes."],
  ["Gauntlet","Start three to five calls with Any area."],
  ["Review","Read each QA review and note two fixes."],
  ["Study","Open the lessons the Readiness page recommends."],
  ["Reflect","Write one win and one thing to improve."]
 ]},
 script:[
  ["a","Before I start the next call, I’m opening the policy card for this account and taking one breath.","A reminder of the habit."]
 ],
 qa:["Time block protected","Policy cards used","Two fixes noted per call","One win and one improvement written"],
 quiz:[
  ["After a gauntlet below 85 percent, you:",["Study the weakest criteria and run another","Quit","Skip review"],0,"Targeted practice."],
  ["Practice works best when it is:",["Short and regular","Rare and long","Random"],0,"Consistency wins."],
  ["Between calls you:",["Do your 30-second reset","Skip it","Read social media"],0,"Reset on purpose."]
 ]},

/* ---------------- WEEK 24 ---------------- */
{id:"r5",track:"ready",title:"How QA calibrates: reading your scorecard like an analyst",level:"intermediate",account:"All accounts",mins:14,
 teach:[
  ["What calibration is","QA teams listen to the same calls and compare scores so everyone grades the same way. That makes your score fair. Learn how they think and you will see your own calls more clearly."],
  ["Evidence, not impressions","A good score comment cites what was said or missed. “Did not verify before discussing the account” is evidence. “Seemed rude” is not."],
  ["Auto-fail items","Skipped verification, asking for a PIN or password, sharing information with a non-authorized caller, writing card numbers in notes, hanging up on a customer. A single one fails the call regardless of other points."],
  ["Weights","Resolution accuracy and verification carry the most weight. Greeting and closing are small but easy points, so never lose them."],
  ["Common mistakes","Skipping the restate, using jargon, making the customer repeat information, not giving a reference number, no ‘anything else’, thin notes."],
  ["Scores are for learning","A low score points to what to practice next. Compare scores by criterion over many calls, not one call at a time."]
 ],
 steps:{h:"Read a QA review",items:[
  ["Total","What is the weighted score and pass status?"],
  ["Lowest two","Which criteria scored lowest?"],
  ["Evidence","What specific line caused the score?"],
  ["Better line","Read the suggested stronger wording aloud."],
  ["Plan","Pick one drill to fix the lowest criterion."]
 ]},
 script:[
  ["a","Thanks for calling. To protect your account, can you confirm your full name and the last four digits?","Verification first, the highest-weight criterion after resolution."]
 ],
 qa:["Evidence cited for every criterion","Auto-fail items understood","Lowest criteria identified","A drill chosen for the weakest one"],
 quiz:[
  ["Which is an auto-fail item?",["Skipped verification","A short greeting","A long hold"],0,"Never skip verification."],
  ["Good QA comments cite:",["Specific words or actions","The listener’s mood","Nothing"],0,"Evidence."],
  ["Scores are most useful when you:",["Compare criteria over many calls","Focus on one call","Ignore them"],0,"Look for patterns."]
 ]},

{id:"r6",track:"ready",title:"Score your own call: a self-review routine",level:"intermediate",account:"All accounts",mins:14,
 teach:[
  ["Self-review builds the ear","After a call, replay it in your head or read the transcript. Score yourself on the nine criteria before you look at the QA review. Then compare. Gaps show blind spots."],
  ["The nine questions","Greeting: brand, name, offer? Verification: before account details? Empathy: a specific statement? Discovery: open then closed questions? Resolution: correct steps and a confirmed result? Ownership: next steps and reference? Tone: plain and warm? Close: summary and anything else? Notes: five parts?"],
  ["Be strict and kind","Give yourself credit for what you did well. Be honest about what you missed. The point is to improve, not to punish."],
  ["Look for patterns","The same miss three times is a habit. Fix habits with a small drill, like saying your closing line aloud ten times."],
  ["Rewrite one line","Pick your weakest line and rewrite it. Say the new line aloud twice. That is how it moves into your real calls."],
  ["Log it","Write your two takeaways in a notebook. Review it before your next session."]
 ],
 steps:{h:"After every call",items:[
  ["Score","Score yourself on the nine criteria."],
  ["Compare","Check the QA review. Where do you differ?"],
  ["Pattern","Is this a repeat miss?"],
  ["Rewrite","Rewrite one weak line and say it aloud."],
  ["Log","Write two takeaways."]
 ]},
 script:[
  ["a","Before I take the next call, I’m going to say my closing line aloud once: recap, reference number, anything else, thank you for choosing us.","A drill to build the habit."]
 ],
 qa:["Self-score done before reading the review","Patterns noticed","One line rewritten and spoken","Takeaways logged"],
 quiz:[
  ["Self-review should start:",["Before reading the QA review","After ignoring it","Never"],0,"Score yourself first."],
  ["A repeated miss is:",["A habit to drill","A one-off","Impossible"],0,"Drill it."],
  ["The goal of self-review is:",["Improvement","Punishment","Speed"],0,"Be kind and strict."]
 ]},

{id:"r7",track:"ready",title:"Fixing weak criteria with targeted drills",level:"intermediate",account:"All accounts",mins:14,
 teach:[
  ["One weakness at a time","Pick the lowest criterion on your Readiness page. Work on it for three days with small drills, then re-check."],
  ["Greeting and closing","Record yourself saying the greeting and the closing ten times. Use the real brand names. Aim for a smile and a falling tone."],
  ["Verification","Practice saying the verification reason without reading it. Role-play a failed verification where the caller pushes for an exception."],
  ["Empathy","Write five empathy statements for five situations: outage, billing, lost card, denied claim, wrong item. Each should name the situation and move to action."],
  ["Discovery","For each issue, write three open questions and three closed questions. Say them aloud."],
  ["Resolution accuracy","Reread the lesson’s steps and the decision tree. Do the fix from memory on a piece of paper."],
  ["Ownership","Practice ending with a reference number, a time and a name. “Your ticket is 55102. I’ll call you Thursday by noon.”"],
  ["Documentation","Write five five-part notes from the model calls. Check them against the format."]
 ],
 steps:{h:"Three-day fix",items:[
  ["Day 1","Study the linked lessons and flashcards."],
  ["Day 2","Role-play the drill aloud; record yourself."],
  ["Day 3","Take two calls focusing only on this criterion."],
  ["Check","Look at the criterion’s score on the Readiness page."],
  ["Next","Move to the next weakest criterion."]
 ]},
 script:[
  ["a","I’m sorry about the mix-up with your order. Here’s what I’ll do: I’m sending a replacement today, and your reference number is 77102. I’ll email you the tracking by five.","Ownership: action, reference, time."]
 ],
 qa:["One weakness chosen at a time","Daily drill done aloud","Targeted calls taken","Score re-checked"],
 quiz:[
  ["The best way to fix a weak criterion is:",["Targeted drills for a few days","Ignore it","Take random calls only"],0,"Focused practice."],
  ["Ownership sounds like:",["Action, reference number and a time","Okay","Call back later"],0,"Be specific."],
  ["Empathy statements should:",["Name the situation and move to action","Be generic","Be long"],0,"Specific, then action."]
 ]},

{id:"r8",track:"ready",title:"Mock QA week: how to run it",level:"intermediate",account:"All accounts",mins:12,
 teach:[
  ["What it is","A full week of calls scored like a real evaluation, with no replays and no peeking at the lessons. It shows where you stand."],
  ["The plan","Day 1: three mixed calls. Day 2: three Spanish calls. Day 3: three tech calls of different levels. Day 4: three CSR calls from different accounts. Day 5: a review day."],
  ["Rules","No notes except policy cards. One attempt per call. Write notes during the call. Do the 30-second reset between calls."],
  ["After each day","Read each QA review. Log your scores and the lowest two criteria. Look for repeating patterns."],
  ["Day 5 review","Open the Readiness page. Compare your recent average to the target. Choose the three weakest criteria and plan the next week’s drills."],
  ["If your average is 85 or higher","You are on track. Keep doing a gauntlet every day or two to stay sharp."]
 ],
 steps:{h:"Mock QA week",items:[
  ["Day 1","Three mixed calls."],
  ["Day 2","Three Spanish calls."],
  ["Day 3","Three tech calls at different levels."],
  ["Day 4","Three CSR calls on different accounts."],
  ["Day 5","Review, log, plan."]
 ]},
 script:[
  ["a","For the mock week, I’m treating every call as a real one: no pausing, no replays, and notes as I go.","A commitment."]
 ],
 qa:["No notes except policy cards","Each call attempted once","Notes written during calls","Review day completed"],
 quiz:[
  ["During mock QA week you:",["Take each call once without replays","Retry until perfect","Skip the review"],0,"Treat it like real."],
  ["Day 5 is for:",["Reviewing and planning","Resting only","Quitting"],0,"Use the data."],
  ["The recent call average target is:",["85 percent","50 percent","100 percent"],0,"Consistency."]
 ]},

/* ---------------- WEEK 25 ---------------- */
{id:"r9",track:"ready",title:"The final exam: how to take it and what to do after",level:"advanced",account:"All accounts",mins:40,
 teach:[
  ["The written part","Open the Exam page and start. It contains 30 questions drawn from every track, in random order. Pass is 80 percent. Take it in one sitting without notes. Then read every missed question and its explanation."],
  ["The call part","Take six scored calls in the Drill page: two tech, two customer service and two Spanish. Each should score 85 percent or better. If one misses, review the criteria and take a different call, not the same one."],
  ["Order matters","Do the written exam first so your misses guide your last study days. Then do the six calls over two days."],
  ["If you do not pass","That is information, not failure. Use the breakdown by track to see where to study. Take it again after three days."],
  ["Mark the exam lesson complete","Mark this lesson complete only after you have passed both parts. The Readiness page counts it."]
 ],
 steps:{h:"Final exam checklist",items:[
  ["Written","Pass the exam at 80 percent or better."],
  ["Review","Read every missed question and its lesson."],
  ["Calls","Six scored calls at 85 percent or better: two tech, two CSR, two Spanish."],
  ["Notes","Write five-part notes during each call."],
  ["Mark","Mark the lesson complete when both parts are done."]
 ]},
 script:[
  ["a","Thank you for calling Northwave Fiber, this is Jordan. How can I help you today?"],
  ["c","I’m calling about my internet."],
  ["a","I’d be glad to help. To protect your account, could you confirm your full name and the last four of your account number?","Greeting, offer and verification."]
 ],
 qa:["Written exam at 80 percent or better","Six calls at 85 percent or better","Auto-fail items avoided","Misses reviewed"],
 quiz:[
  ["Do the written exam:",["First, without notes","Last","While chatting"],0,"Let the misses guide you."],
  ["If you do not pass:",["Study by track and retake after a few days","Give up","Skip review"],0,"Use the data."],
  ["How many calls in the final call part?",["Six: two tech, two CSR, two Spanish","One","Twenty"],0,"A balanced set."]
 ]},

{id:"r10",track:"ready",title:"Auto-fail checklist: the mistakes that sink a perfect call",level:"intermediate",account:"All accounts",mins:10,
 teach:[
  ["Why a checklist","On a good call you can lose everything with one slip. Learn the short list and check it mentally on every call."],
  ["The list","1) Account details shared before verification. 2) Asking for a password, PIN, full card number or login code. 3) Writing card numbers or passwords in notes. 4) Sharing information with a non-authorized caller. 5) Making promises outside your authority. 6) Hanging up or transferring to avoid the call. 7) Abusive or sarcastic language. 8) Making changes the customer did not authorize."],
  ["Before you hit send or save","Ask: did I verify? Did I ask for anything I should not? Did I promise anything I cannot deliver? Did I tell the truth?"],
  ["When you slip","Tell your supervisor right away. Mistakes disclosed quickly can be fixed. Hidden ones grow."],
  ["Use it in practice","Pick one item each day and watch for it in every practice call."]
 ],
 steps:{h:"The eight-point check",items:[
  ["Verified","Verified before sharing."],
  ["No secrets","Never asked for passwords, PINs or codes."],
  ["Notes safe","No sensitive data in notes."],
  ["Authorized","Spoke only to the right person."],
  ["Honest","No promises I can’t keep."]
 ]},
 script:[
  ["a","Because this is a different person on the line than the account holder, I’m not able to discuss the account. If the account holder is with you, I can speak to them for permission.","Holds the line politely."]
 ],
 qa:["All eight items avoided","Slips reported immediately","Check used on every call","Honest answers throughout"],
 quiz:[
  ["Which is an auto-fail?",["Asking for a PIN","A friendly greeting","A short hold"],0,"Never ask for PINs."],
  ["You realize you made a mistake. You:",["Tell your supervisor right away","Hide it","Blame the system"],0,"Disclose quickly."],
  ["Notes may contain:",["Last four of a card only","Full card numbers","Passwords"],0,"Mask sensitive data."]
 ]},

/* ---------------- WEEK 26 ---------------- */
{id:"r11",track:"ready",title:"Interview prep: your story and the STAR method",level:"basic",account:"All accounts",mins:14,
 teach:[
  ["What interviewers look for","Calm, clear communication, honesty, willingness to learn, and examples of solving problems for people. They want to hear how you think, not a memorized speech."],
  ["The STAR method","Situation: the context. Task: what you had to do. Action: what you did, step by step. Result: what happened and what you learned. Keep each part short, about two minutes in total."],
  ["Build five stories","Pick five moments from work, school or life: a time you calmed an upset person, fixed a technical problem, learned something quickly, handled a mistake, and worked with a team. Write each in STAR form."],
  ["Use your training","You can truthfully say you trained across tech support, customer service and Spanish, and practiced scored calls on a QA scorecard. Describe what you learned and how you improved."],
  ["Be honest","Do not invent experience. Say what you know, what you are learning and how fast you learn."],
  ["Speak plainly","Short sentences. Name the customer’s feeling, then the action. The same skills as on the phone."]
 ],
 steps:{h:"Write a STAR story",items:[
  ["Situation","Where and when? What was happening?"],
  ["Task","What was your job in it?"],
  ["Action","What did you do, in order?"],
  ["Result","What was the outcome, in numbers if you can?"],
  ["Lesson","What did you learn?"]
 ]},
 script:[
  ["c","Tell me about a time you helped an upset customer."],
  ["a","At my last job, a customer arrived frustrated because a delivery was late. I listened without interrupting, apologized for the delay and checked the tracking. I found it was held at the depot and arranged a same-day reship. He thanked me and later left a positive review. I learned that a clear next step calms people faster than a long apology.","STAR: situation, action, result, lesson."]
 ],
 qa:["Five STAR stories written","Stories stay honest","Results stated plainly","Practiced aloud twice"],
 quiz:[
  ["STAR stands for:",["Situation, Task, Action, Result","Start, Tell, Ask, Repeat","Speak, Think, Act, Reflect"],0,"A story structure."],
  ["In an interview you should:",["Be honest about experience and learning","Invent experience","Memorize a script"],0,"Honesty matters."],
  ["A good story length is about:",["Two minutes","Ten minutes","Ten seconds"],0,"Keep it short."]
 ]},

{id:"r12",track:"ready",title:"Common interview questions with model answers",level:"intermediate",account:"All accounts",mins:16,
 teach:[
  ["Why do you want to work in support?","“I like solving problems for people and I’m good at staying calm. In my training I practiced hundreds of customer situations and I enjoyed the moment when a customer’s problem is fixed.”"],
  ["How do you handle an angry customer?","“I let them finish, then I name the specific problem and apologize once. I take ownership and give a clear next step with a time. In my practice calls, that approach calmed the customer fastest.”"],
  ["What if you don’t know the answer?","“I say I’ll confirm, search the knowledge base, ask a lead if needed and call back with a time. I never guess.”"],
  ["How do you handle a metric like AHT?","“I focus on good questions and clean notes, not speed. Quality and first-call resolution lower repeat calls, which helps the number honestly.”"],
  ["Tell me about a mistake","Choose a small real one. “I once gave a wrong policy detail. I corrected it, told my lead and wrote the right steps on my card. Since then I confirm in the knowledge base.”"],
  ["Your Spanish level","Be honest and specific: “I handle calls in Spanish using formal usted, billing and tech vocabulary, and I practice pronunciation daily. I switch to English if the customer prefers.”"],
  ["Questions you should ask","What does a typical day look like? How is quality measured? How are new hires coached? What is the path to L2 or team lead?"],
  ["Close strong","“Thank you for your time. I’m excited about this role and ready to start learning from your team.”"]
 ],
 steps:{h:"Practice routine",items:[
  ["Read","Read each question and model answer aloud."],
  ["Rewrite","Rewrite each answer in your own words and facts."],
  ["Record","Record yourself; listen for pace and filler words."],
  ["Mock","Ask a friend to ask the questions randomly."],
  ["Questions","Prepare three questions to ask them."]
 ]},
 script:[
  ["c","What would you do if you can’t solve the customer’s problem?"],
  ["a","I would tell the customer honestly what I’ve tried, what I’ll do next and who will take over, with a reference number and a time. Then I’d write clear notes so the next person doesn’t start over.","Honest, specific, ownership."]
 ],
 qa:["Answers are honest and specific","Spoken at a calm pace","No filler words","Three questions prepared for the interviewer"],
 quiz:[
  ["If you don’t know the answer you:",["Say you’ll confirm and follow up","Guess","Change the subject"],0,"Never guess."],
  ["A good answer about a mistake includes:",["What you did to fix it and what changed","Blaming others","Denying it"],0,"Own it."],
  ["You should end the interview by:",["Thanking them and asking questions","Hanging up silently","Complaining"],0,"Close strong."]
 ]},

{id:"r13",track:"ready",title:"Your first 30 days on the floor",level:"basic",account:"All accounts",mins:12,
 teach:[
  ["Expect to feel slow","New hires are slower and unsure. That is normal. Aim to get one thing better each day, not everything at once."],
  ["Week 1","Learn the tools, the policy cards and the top ten articles. Listen to calls beside an experienced agent. Ask questions. Write notes on what you hear."],
  ["Week 2","Take calls with a coach nearby. Focus on the greeting, the verification and the close. Accept feedback without defending."],
  ["Week 3","Handle more calls on your own. Build your policy cards and your list of favorite knowledge base articles."],
  ["Week 4","Start working on your weakest criterion and handle time. Ask for a calibration session with a QA analyst."],
  ["Habits that help","Arrive early, test your headset, keep water, use breaks, ask for help early, write one win and one improvement every day."],
  ["Keep learning","Keep the Academy open. Use the daily flashcard review and a gauntlet a few times a week to stay sharp."]
 ],
 steps:{h:"First 30 days",items:[
  ["Week 1","Learn tools and policy cards; listen in."],
  ["Week 2","Calls with a coach; focus on opens and closes."],
  ["Week 3","More solo calls; build your article list."],
  ["Week 4","Target your weakest criterion; ask for calibration."],
  ["Always","One win and one improvement every day."]
 ]},
 script:[
  ["a","I’m new on the floor, so I’d like to double-check this policy in the knowledge base before I confirm. May I put you on a brief hold?","Honest and professional."]
 ],
 qa:["Asks for help early","Uses policy cards and the knowledge base","Receives feedback calmly","Keeps practicing weekly"],
 quiz:[
  ["In the first weeks you should:",["Aim for small daily improvements","Be perfect immediately","Avoid feedback"],0,"Steady growth."],
  ["When unsure about a policy you:",["Check the knowledge base","Guess","Ignore it"],0,"Verify."],
  ["A habit that helps:",["One win and one improvement written daily","Skipping breaks","Hiding mistakes"],0,"Reflect daily."]
 ]},

{id:"r14",track:"ready",title:"The readiness report: what done looks like",level:"basic",account:"All accounts",mins:8,
 teach:[
  ["What the report checks","For each core track: lessons completed, the exam lesson, and enough calls at 85 percent or better. Overall: your recent call average, and the final written exam at 80 percent or better."],
  ["How to use it","Open the Readiness page each week. Work the open items. Use “Where to improve” to pick your next drills."],
  ["Print it","On the Readiness page, enter your name and press Print report. You can save it as a PDF from the print window for your own records or to share if you choose."],
  ["After you are ready","Keep practicing. Ready is not finished. Keep the daily review and a gauntlet every few days, and keep your notes."],
  ["A note of honesty","This report measures your practice in this Academy. Real employers decide hiring on their own tests and interviews. Use it as a guide."]
 ],
 steps:{h:"Finish line",items:[
  ["Tracks","Every core track has lessons, exam and calls done."],
  ["Average","Recent calls average 85 percent or better."],
  ["Exam","Final written exam passed."],
  ["Report","Print or save the report."],
  ["Keep going","Keep a weekly gauntlet and the daily review."]
 ]},
 script:[
  ["a","Thank you for calling. I’m ready to help you today.","Your standard from now on."]
 ],
 qa:["Open items closed","Average above target","Exam passed","Report saved"],
 quiz:[
  ["The readiness report is:",["A guide to your practice progress","A job offer","A legal document"],0,"A guide."],
  ["After you are ready you should:",["Keep practicing regularly","Stop forever","Delete everything"],0,"Keep sharp."],
  ["Employers decide hiring by:",["Their own process","This report alone","Chance"],0,"Be honest about its role."]
 ]}
]);

window.EXTRA_SIMS=Object.assign(window.EXTRA_SIMS||{},{
 "sim-r1":{title:"My bill is wrong, and the Wi-Fi is slow too",account:"Northwave Fiber",level:"advanced",lang:"en",lesson:"r2",
  crm:{Name:"Dana Whitfield",Account:"NW-44-10928 (last 4: 0928)",Plan:"Fiber 300, $70/mo",Bill:"This month $98: one-time $28 equipment swap fee",Equipment:"NW Gateway G4 in a cabinet in the living room",Verify:"Name + last 4"},
  goal:"List both issues and agree an order, verify once, explain the $28 fee, fix or explain the bedroom Wi-Fi, and close with a recap of both issues and a reference number.",
  persona:"Dana Whitfield, 36, works from home, in a hurry and a little scattered.",
  issue:"Her bill is higher than usual and the Wi-Fi in the bedroom is slow.",
  facts:"Last 4: 0928. The $28 is a one-time fee for swapping her gateway last month. In the bedroom the speed is about 30 Mbps but 280 in the living room. The gateway sits inside a cabinet.",
  behavior:"She starts with the bill and brings up Wi-Fi in the middle. If the agent lists both and agrees an order, she is relieved. If the agent explains the fee and offers a one-time courtesy credit within policy, she accepts. If the agent moves on without finishing the bill, she circles back and gets irritated. If the agent suggests moving the gateway out of the cabinet, she agrees to try. If asked for verification twice, she complains.",
  mood:"Busy and scattered, appreciative of structure."},
 "sim-r2":{title:"Quick call: password reset and a bill question",account:"Brightdesk IT",level:"basic",lang:"en",lesson:"r3",
  crm:{Name:"Eli Park",Account:"BD-20771 (last 4: 0771)",Plan:"Home Office Support, $19/mo",Verify:"Name + last 4 + email on file",Notes:"Reset link goes to email on file"},
  goal:"Verify, reset the password safely through the emailed link, answer the plan price question, and close within about five minutes without skipping verification or the close.",
  persona:"Eli Park, 29, polite and short on time before a meeting.",
  issue:"He is locked out of his account and wants to confirm his monthly price.",
  facts:"Last 4: 0771. Email on file eli.park@example.com. He has access to that email. His plan is $19 per month, billed on the 5th.",
  behavior:"He answers quickly and is happy if the agent stays efficient. If the agent asks for his password or reads a reset code aloud, the call is an automatic fail. If the agent is slow or goes silent, he mentions his meeting. He accepts the email link flow and thanks the agent for the quick close.",
  mood:"Polite but hurried."}
});
