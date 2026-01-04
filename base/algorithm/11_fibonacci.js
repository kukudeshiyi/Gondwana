function fibonacci1(n) {
  if (n < 2 && n >= 0) return n;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

function fibonacci2(n) {
  const temp = [0, 1];
  for (let i = 2; i <= n; i++) {
    temp[i] = temp[i - 1] + temp[i - 2];
  }
  return temp[temp.length - 1];
}
