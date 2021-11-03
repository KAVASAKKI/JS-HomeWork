// // <--------------------TRAINING-1-------------------->
// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const freshFruits = filter(fruits, fruit => fruit.quantity >= 150);
// console.log(freshFruits);

// // <--------------------TRAINING-2-------------------->
// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// const showUserTag = user.showTag;

// showUserTag();

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

// // <--------------------TRAINING-3-------------------->
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log(`changeColor -> this ${this}`);
//     // this.color = color;
//   };

//   changeColor();

//   const sweater = {
//     color: 'teal',
//   };

//   sweater.updateColor = changeColor;

//   sweater.updateColor('red');

//   // console.log(sweater);

//   return sweater.updateColor;
// };

// const swapColor = makeChangeColor();
// // console.log(swapColor);
// swapColor('blue');
