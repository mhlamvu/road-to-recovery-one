// function showTime() {
//     let date = new Date();
//     let hrs = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();

//     let time = hrs + ":" + min + ":" + sec;

//     // innerHTML is not supported in Firefox, and textContent is not supported in Internet Exloper.

//     // Adding both increases compatibility between browsers
//     document.getElementById('clockDisplay').innerHTML = time;
//     document.getElementById('clockDisplay').textContent = time;

//     setTimeout(showTime, 1000);

// }

// showTime()

// const time = new Date();

// console.log(time.getHours() % 12);
// console.log(time.getMinutes());
// console.log(time.getSeconds());


// console.log(time.getDate());
// console.log(time.getMonth());
// console.log(time.getFullYear());

const clockDate = document.getElementById('clockDate');
const clock = document.getElementById('clockDisplay');
const color = document.getElementById('clockColor');

function colorClock() {

    const time = new Date();

    let hrs = time.getHours().toString();
    let min = time.getMinutes().toString();
    let sec = time.getSeconds().toString();
    let milli = time.getMilliseconds().toString();
    let day = time.getDate().toString();
    let month = time.getMonth().toString();
    let year = time.getFullYear().toString();

    //These "if" statements check to see it the current date/time is in a standard format, which is 00:00:00

    if (hrs.length < 2) {
        hrs = '0' + hrs;
    }

    if (min.length < 2) {
        min = '0' + min;
    }

    if (sec.length < 2) {
        sec = '0' + sec;
    }

    if (day.length < 2) {
        day = '0' + day;
        month
    }

    if (month.length < 2) {
        month = '0' + month;
    }


    let displayDate = day + ' : ' + month + ' : ' + year;
    let clockStr = hrs + ' : ' + min + ' : ' + sec;
    let clockColorStr = '#' + hrs + min + sec;

    clock.textContent = clockStr;
    color.textContent = clockColorStr;
    clockDate.textContent = displayDate;

    document.getElementById('clockDisplay').style.color = clockColorStr;
    document.getElementById('clockDate').style.color = clockColorStr;
    document.getElementById('clockColor').style.display = 'none';

    setTimeout(colorClock, 1000);
}

colorClock();