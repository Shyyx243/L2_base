function isCircleSorted( arr ){
  let d = 0;
  for(let i = 0; i < arr.length; i++){
    const x = arr[(i +1) % arr.length];
    if(arr[i] > x)d++;
  }
  return d <= 1;
}