function solution(str){
   if(str.length % 2 !== 0){
     str = str + '_';
     
   }
  const r = [];
  for(let i = 0; i < str.length; i+=2){
    r.push(str[i] + str[i + 1]);
  }
  return r;
}