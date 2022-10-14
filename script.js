// set an interval for how often a function runs in milliseconds
setInterval(setClock, 1000);

const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

// define the set clock function
function setClock() {
    // new Date for the current time
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    // console.log(currentDate);

    // because we dont want the hours or minutes hands to jump by minutes or hours, we want them to move gradually so we can call upon the previous ratio to allow them to move smoothly

    // Call the setRotation function of each hand passing in the correct elements
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
// 