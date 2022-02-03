class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.timerHTML = document.querySelector(selector);
    this.targetDate = targetDate;
    this.onTick = onTick;
    this.refs = {
      days: this.timerHTML.querySelector('[data-value="days"]'),
      hours: this.timerHTML.querySelector('[data-value="hours"]'),
      mins: this.timerHTML.querySelector('[data-value="mins"]'),
      secs: this.timerHTML.querySelector('[data-value="secs"]'),
    };

    setInterval(() => {
      const currentTime = Date.now();
      const finishTime = this.targetDate.getTime();
      const deltaTime = finishTime - currentTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Feb 13, 2022'),
  onTick: updateClockface,
});

function updateClockface({ days, hours, mins, secs }) {
  this.refs.days.textContent = days;
  this.refs.hours.textContent = hours;
  this.refs.mins.textContent = mins;
  this.refs.secs.textContent = secs;

  console.log(`${days}:${hours}:${mins}:${secs}`);
}
