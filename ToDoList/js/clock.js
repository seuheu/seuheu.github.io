const date = document.querySelector(".clock__date");
const time = document.querySelector(".clock__time");

function getClock() {
    const clock = new Date();

    const year = String(clock.getFullYear()).padStart(2, "0");
    const month = String(clock.getMonth()+1).padStart(2, "0");
    const day = String(clock.getDate()).padStart(2, "0");

    const hours = String(clock.getHours()).padStart(2, "0");
    const minutes = String(clock.getMinutes()).padStart(2, "0");
    const seconds = String(clock.getSeconds()).padStart(2, "0");

    date.innerText = `${year}년 ${month}월 ${day}일`
    time.innerText = `${hours}:${minutes}:${seconds}`;


}

getClock();
setInterval(getClock, 1000);

const test = new Date();
const day = test.getDay();

const test01 = test.getDate()