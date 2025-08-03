function calculateSum(numbers) {
  
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  let numbersStr = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf('\n');
    let delimiterSection = numbers.substring(2, delimiterEndIndex);
    let delimiters;

    if (delimiterSection.startsWith('[')) {
      delimiters = delimiterSection.substring(1, delimiterSection.length - 1).split('][');
    } else {
      delimiters = [delimiterSection];
    }

    const escapedDelimiters = delimiters.map(d => {
      return d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    });
    
    delimiter = new RegExp(escapedDelimiters.join('|'));
    numbersStr = numbers.substring(delimiterEndIndex + 1);
  }

  const numbersArr = numbersStr.split(delimiter).map(numStr => {
    const num = parseInt(numStr, 10);
    if (Number.isNaN(num)) {
      throw new Error(`Invalid number provided: ${numStr}`);
    }
    return num;
  });

  const negativeNumbers = numbersArr.filter(num => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
  }

  return numbersArr
    .filter(num => num <= 1000)
    .reduce((sum, current) => sum + current, 0);
}

module.exports = calculateSum;
