function expandedForm(num) {
  const d = String(num);
  const p = [];
  for(let i = 0; i < d.length; i++){
    if(d[i] === '0') continue;
    const z = '0'.repeat(d.length - i - 1);
    p.push(d[i] + z);
  }
  return p.join(' + ');
}