const formatString = function (string) {
  let lengthString = string.length;
  if (lengthString < 40) {
    return `${string} ${lengthString}`;
  } else {
    newString = string.substr(0, 40);
    return `${newString}... ${lengthString}`;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
