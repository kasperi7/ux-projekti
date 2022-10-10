"use strict";

const getRemainingTime = (endTime) => {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

const initializeClock = (id, endTime) => {
  const clock = document.getElementById(id);

  const daysSpan = document.querySelector(".days");
  const hoursSpan = document.querySelector(".hours");
  const minutesSpan = document.querySelector(".minutes");
  const secondsSpan = document.querySelector(".seconds");

  const updateClock = () => {
    const t = getRemainingTime(endTime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  };

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
};

const deadline = new Date(2022, 9, 13, 9, 30);

initializeClock("clockdiv", deadline);
