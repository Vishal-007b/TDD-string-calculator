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

  const numbersArr = numbers.replace(/\n/g, ',').split(',').map(numStr => {
    const num = parseInt(numStr, 10);
    if (Number.isNaN(num)) {
      throw new Error(`Invalid number provided: ${numStr}`);
    }
    return num;
  });
  return numbersArr.reduce((sum, current) => sum + current, 0);
}

module.exports = calculateSum;
