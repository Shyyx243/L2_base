function wave(str){
  const r = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' ')continue;
    const s = str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1);
    r.push(s);
  }
  return r;
}