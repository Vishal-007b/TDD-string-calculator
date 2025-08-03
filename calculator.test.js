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


test('should return the sum of any amount of numbers', () => {
  expect(calculateSum("1,2,3,4,5")).toBe(15);
  expect(calculateSum("10,20,30,40,50")).toBe(150);
});

test('should handle new lines between numbers', () => {
  expect(calculateSum("1\n2,3")).toBe(6);
  expect(calculateSum("1\n2\n3")).toBe(6);
});

test('should support different delimiters', () => {
  expect(calculateSum("//;\n1;2")).toBe(3);
  expect(calculateSum("//|\n1|2|3")).toBe(6);
  expect(calculateSum("//sep\n1sep2sep3")).toBe(6);
});

test('should throw an error for negative numbers', () => {
  expect(() => calculateSum("-1")).toThrow("negative numbers not allowed -1");
  expect(() => calculateSum("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
});