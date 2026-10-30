function toWeirdCase(string){
  const a = string.split(' ');
  for(let w = 0; w < a.length; w++){
    let s = ''; a
    for(let i = 0; i < a[w].length; i++){
      if(i % 2 === 0)s+= a[w][i].toUpperCase();
      else s += a[w][i].toLowerCase();
    }
    a[w] = s;
  }
  return a.join(' ');
}