function christmasCountDown() {
    const christmasDate = new Date('December 25, 2023 00:00');
    const now = new Date();
    const difference = christmasDate - now;
    

    const msInSecond = 1000; //сколько миллисекунд в секунде
    const msInMinutes = 60 * 1000; //сколько миллисекунд в минуте
    const msInHours = 60 * 60 * 1000; //сколько миллисекунд в часе
    const msInDay = 24 * 60 * 60 * 1000; //сколько миллисекунд в сутках

    const displayDay = Math.floor(difference / msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor(difference / msInHours);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor(difference / msInMinutes);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor(difference / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (difference <= 0) {   //чтобы время не уходило в минус
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID); //чтобы остановить счетчик. Этот метод всегда идет в связке с setInterval 
        merryChristmas(); //изменится текст и цвет как только время дойдет до нуля
    }

}

let timerID = setInterval(christmasCountDown, 1000); // !!! Обязательно к setInterval вводить переменную let

function merryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'Merry Chrismas!!! HO-HO-HO!';
    heading.classList.add('red');
}

const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
}
)

const buttonTwo = document.querySelector('#myButtonTwo');

buttonTwo.addEventListener("click", function() {
    document.querySelector('#myAudio').pause();
})

