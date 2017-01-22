"use strict";

function collatz(n) {
  var count = 0;

  (function recursive(n) {
    if (n === 1) {
      return;
    }

    n = applyRule(n);

    count ++;

    recursive(n);
  })(n);

  return count;
}

function isEven(n) {
  return n % 2 === 0;
}

function divideBy2(n) {
  return n / 2;
}

function timesBy3AndAdd1(n) {
  return n * 3 + 1;
}

function applyRule(n) {
  return isEven(n) ? divideBy2(n) : timesBy3AndAdd1(n);
}
