function longest(arr, n) {
  const c = arr.map(function (s, i) {
    return { s: s, i: i };
  });
  c.sort(function (a, b) {
    if (b.s.length !== a.s.length) return b.s.length - a.s.length;
    return a.i - b.i;
  });
  return c[n - 1].s;
}