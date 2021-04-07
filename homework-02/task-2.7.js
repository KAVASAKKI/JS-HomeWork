const numbers = [32, 54, 75, 48, 17, 94, 85];
let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log(smallestNumber);
