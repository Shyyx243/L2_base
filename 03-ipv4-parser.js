function whatCentury(year)
{
  const century = Math.ceil(Number(year) / 100);
  let ending = 'th';
  const lastTwo = century % 100;
   const last = century % 10;
  
  if(lastTwo<11||lastTwo > 13){
    if(last === 1)ending = 'st';
     if(last === 2)ending = 'nd';
     if(last === 3)ending = 'rd';
    
  }
  return century + ending
}