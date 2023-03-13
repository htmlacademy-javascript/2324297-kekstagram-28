const stringLengthCheck = function (line, symbols) {
  return line.length <= symbols;
};
stringLengthCheck('проверяемая строка', 20);
stringLengthCheck('проверяемая строка', 18);
stringLengthCheck('проверяемая строка', 10);

const checkingForPalindrome = function (string) {
  const newString = string
    .replaceAll(' ', '')
    .toLowerCase();

  let reverseString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString.at(i);
  }
  return newString === reverseString;
};
checkingForPalindrome('топот');
checkingForPalindrome('ДовОд');
checkingForPalindrome('Кекс');
checkingForPalindrome('Лёша на полке клопа нашёл ');

const getString = function (string) {
  let value = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      value += string.at(i);
    }
  }

  return parseInt(value, 10);
};
getString('2023 год');
getString('ECMAScript 2022');
getString('1 кефир, 0.5 батона');
getString('агент 007');
getString('а я томат');

const getSymbols = function (string, minLength, symbols) {
  while(string.length < minLength) {
    string = symbols.slice(0, minLength - string.length) + string;
  }
  return string;
};
getSymbols('1', 2, '0');
getSymbols('1', 4, '0');
getSymbols('q', 4, 'werty');
getSymbols('q', 4, 'we');
getSymbols('qwerty', 4, '0');
