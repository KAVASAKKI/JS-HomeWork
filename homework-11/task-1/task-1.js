// let intervalId = null;
// let isActive = false;
// const DELAY_TIME = 1000;
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// const btnStart = document.querySelector('button[data-action="start"]');
// const btnStop = document.querySelector('button[data-action="stop"]');

// btnStart.addEventListener('click', onBtnStartClick);
// btnStop.addEventListener('click', onBtnStopClick);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// function onBtnStartClick() {
//   if (isActive) return;

//   intervalId = setInterval(() => {
//     const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
//     document.body.style.backgroundColor = colors[randomIndex];
//   }, DELAY_TIME);
//   isActive = true;

//   console.log('Interval started');
// }

// function onBtnStopClick() {
//   if (!isActive) return console.log('Interval not started!');

//   clearInterval(intervalId);
//   isActive = false;

//   console.log('Interval stopped');
// }

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

class ColorSwitch {
  colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

  constructor() {
    this.intervalId = null;
    this.isActive = false;
    this.delay_time = 500;
  }

  start() {
    if (this.isActive) return;

    this.intervalId = setInterval(() => {
      const randomIndex = this.randomIntegerFromInterval(
        0,
        this.colors.length - 1,
      );
      document.body.style.backgroundColor = this.colors[randomIndex];
    }, this.delay_time);
    this.isActive = true;

    console.log('Interval started');
  }

  stop() {
    if (!this.isActive) return console.log('Interval not started!');

    clearInterval(this.intervalId);
    this.isActive = false;

    console.log('Interval stopped');
  }

  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

const colorBody = new ColorSwitch();

btnStart.addEventListener('click', colorBody.start.bind(colorBody));
btnStop.addEventListener('click', colorBody.stop.bind(colorBody));
