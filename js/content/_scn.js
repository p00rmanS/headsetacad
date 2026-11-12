/* Scenario helpers for casebook lessons. S = English, SE = Spanish. */
window.S=(t,sit,cause,fix,say,esc)=>["Scenario: "+t,"Situation: "+sit+"\nCause: "+cause+"\nFix: "+fix+"\nSay: “"+say+"”"+(esc?"\nEscalate if: "+esc:"")];
window.SE=(t,sit,cause,fix,say,esc)=>["Escenario: "+t,"Situación: "+sit+"\nCausa: "+cause+"\nSolución: "+fix+"\nDiga: “"+say+"”"+(esc?"\nEscale si: "+esc:"")];
