const startWars = require("./index.js");
const expect = require("chai").expect;
describe("start wars", () => {
  describe("all method", () => {
    it("array of strings", () => {
      expect(startWars.all).to.satisfy(checkTypes);
      function checkTypes(array) {
        return array.every((item) => typeof item === "string");
      }
    });
    it("should be in array", () => {
      expect(startWars.all).include("Sir Gray");
    });
  });
  describe("random method", () => {
    it("should be work", () => {
      const randomeArray = startWars.random();
      expect(startWars.all).include(randomeArray);
    });
  });
});
