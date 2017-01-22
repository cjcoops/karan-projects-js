describe("collatz", function() {

  it("should return 1 for 2", function() {
    expect(collatz(2)).toEqual(1);
  });

  it("should return 9 for 12", function() {
    expect(collatz(12)).toEqual(9);
  });

  it("should return 0 for 1", function() {
    expect(collatz(1)).toEqual(0);
  })

  it("should return 111 for 27", function() {
    expect(collatz(1)).toEqual(0);
  })

});

describe("isEven", function() {

  it("should return true for 2", function() {
    expect(isEven(2)).toBe(true);
  });

  it("should return false for 3", function() {
    expect(isEven(3)).toBe(false);
  });

});

describe("divideBy2", function() {

  it("should return 4 for 8", function() {
    expect(divideBy2(8)).toEqual(4);
  });

});

describe("timesBy3AndAdd1", function() {

  it("should return 10 for 3", function() {
    expect(timesBy3AndAdd1(3)).toEqual(10);
  });

});

describe("applyRule", function() {

  it("should return 10 for 3", function() {
    expect(applyRule(3)).toEqual(10);
  });

});
