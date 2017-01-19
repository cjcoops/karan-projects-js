describe("findPi", function() {

  it("should return 3 for 0", function() {
    expect(findPi(0)).toEqual(3);
  });

  it("should return 3.1 for 1", function() {
    expect(findPi(1)).toEqual(3.1);
  });

  it("should return 3.14 for 2", function() {
    expect(findPi(2)).toEqual(3.14);
  });

  it("is correct for 15", function() {
    expect(findPi(15)).toEqual(3.141592653589793);
  });

  it("throws error for numbers over 15", function() {
    expect(function() { findPi(16) } ).toThrowError("Number must be <= 15");
  });
});
