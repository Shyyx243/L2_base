function hasTwoCubeSums(n) {
  let w = 0;
  for (let a = 1; a * a * a < n; a++) {
    for (let b = a + 1; a * a * a + b * b * b <= n; b++) {
      if (a * a * a + b * b * b === n) {
        w++;
      }
    }
  }
  return w >= 2;
}
