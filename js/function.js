const logItems = function (...array) {
  let message;
  for (let i = 0; i < array.length; i++) {
    const number = i + 1;
    const name = array[i];
    message = `${number} - ${name}`;
    console.log(message)
  }
  return message;
}

logItems("Mango", "Poly", "Ajax")

const calculateEngravingPrice = function (message, priceWord) {
  const wordArray = message.split(" ");
  let count = wordArray.length;
  const price = count * priceWord;
  return `Текст "${message}" коштує ${price}$`;
}

const message = prompt("Введіть текст")
console.log(calculateEngravingPrice(message, 52))

const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    } else {
      continue;
    }
  }
  return `${longestWord} - найдовше слово з введеного рядка "${string}"`;
}

const words = prompt("Введи декілька слів");
console.log(findLongestWord(words));

const formatString = function (string) {
  if (string.length > 40) {
    string.slice(0, 40)
    return `${string}...`;
  } else {
    return string;
  }
}

const text = prompt("Введіть текст");
console.log(formatString(text));

const checkForSpam = function (message) {
    const message0 = message.toLowerCase()
    const wordArray = message0.split(" ")
    for (const spamWord of wordArray) {
      if ("spam" === spamWord || "sale" === spamWord) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  }
  
  const text2 = prompt("Введіть текст, заборонені слова: spam і sale");
  console.log(checkForSpam(text2));
  

  const numbers = [];
  const addNumbersToArray = function (number) {
    if (isNaN(number)) {
      return "Ви ввели не число або ввели щось неправильно. Введіть число ще раз";
    } else {
      number = Number(number);
      numbers.push(number);
      let sum = 0;
      for (const num of numbers) {
        sum = sum + num;
      }
      return sum;
    }
  }
  
  let input;
  do {
    input = prompt("Введіть число");
    console.log(addNumbersToArray(input));
  } while (input !== null);

