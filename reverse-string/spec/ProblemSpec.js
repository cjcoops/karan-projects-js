describe("reverse", function() {

  it("should return olleh for hello", function() {
    expect(reverse("hello")).toEqual("olleh");
  })

  it("should return stac for cats", function() {
    expect(reverse("cats")).toEqual("stac");
  })

  it("should return I for I", function() {
    expect(reverse("I")).toEqual("I");
  })

})
