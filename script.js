let hour = document.getElementById("digital-clock__container__hour");
let minutes = document.getElementById("digital-clock__container__minutes");
let seconds = document.getElementById("digital-clock__container__seconds");

function setTime(h, min, sec) {
  hour.innerHTML = h;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
}
let time = new Date();

let currentSecond = time.getSeconds();
let currentMinute = time.getMinutes();
let currentHour = time.getHours();

function digitalClock() {
  currentSecond += 1;
  if (currentSecond > 59) {
    currentSecond = 0;
    currentMinute += 1;
  }
  if (currentMinute > 59) {
    currentMinute = 0;
    currentHour += 1;
  }
  if (currentHour > 23) {
    currentHour = 0;
  }
  setTime(currentHour, currentMinute, currentSecond);
  setTimeout(digitalClock, 1000);
}
digitalClock();

function arrowClock() {
  const deg = 6;
  const hr = document.querySelector("#hr");
  const mn = document.querySelector("#mn");
  const sc = document.querySelector("#sc");

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  });
}
arrowClock();
