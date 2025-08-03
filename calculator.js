function calculateSum(numbers) {
  if (numbers === "") {
    return 0;
  }

  if (numbers.length === 1) {
    const num = parseInt(numbers, 10);
    if (Number.isNaN(num)) {
      throw new Error(`Invalid number provided: ${numbers}`);
    }
    return num;
  }

  const numbersArr = numbers.split(",");
  const num1 = parseInt(numbersArr[0], 10);
  const num2 = parseInt(numbersArr[1], 10);

  if (Number.isNaN(num1)) {
    throw new Error(`Invalid number provided: ${numbersArr[0]}`);
  }

  if (Number.isNaN(num2)) {
    throw new Error(`Invalid number provided: ${numbersArr[1]}`);
  }

  return num1 + num2;
}

module.exports = calculateSum;
