const calculateSum = require("./calculator");

test("should return 0 for an empty string", () => {
  expect(calculateSum("")).toBe(0);
});

test("should return the number itself for a single number string", () => {
  expect(calculateSum("1")).toBe(1);
});

test("should return the sum of two numbers", () => {
  expect(calculateSum("1,5")).toBe(6);
  expect(calculateSum("10,20")).toBe(30);
});

test("should throw an error for invalid number input", () => {
  expect(() => calculateSum("a")).toThrow("Invalid number provided: a");
  expect(() => calculateSum("1,a")).toThrow("Invalid number provided: a");
});
