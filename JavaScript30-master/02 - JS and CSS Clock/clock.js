const secondHand = document.querySelector('.second-hand')

var date = function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    document.querySelector('.min-hand').style.transform = `rotate(${minutesDegrees}deg)`
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval (date, 1000)
