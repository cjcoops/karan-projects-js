var findPi = function(n) {

  if (n > 15) {
    throw new Error("Number must be <= 15")
  }

  const pie = Math.PI;

  return parseFloat(pie.toFixed(n));
}
