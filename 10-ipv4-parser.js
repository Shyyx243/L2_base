function bingo(ticket, win){
let m = 0;
  for(let i = 0; i < ticket.length; i ++){
    const s = ticket[i][0];
    const x = ticket[i][1];
    
    for(let j = 0; j < s.length; j++){
      if(s.charCodeAt(j)===x){
        m++;
        break;
      }
      
    }
  }
  return m>= win ? 'Winner!' : 'Loser!';
}