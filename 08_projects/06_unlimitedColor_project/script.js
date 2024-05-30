//generate a random color

const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(i = 0; i < 6; i++) {
        color += hex[Math.floor((Math.random() * 16))]  // random number print
    }
    return color
}

let intervalId = null 
const startChangingColor = function() {
    changeBgColor = function() {
    document.body.style.backgroundColor = randomColor()
}
    if (!intervalId) {
        intervalId =  setInterval(changeBgColor, 1000)
        // console.log("start");
    }

}
    
const stopChangingColor = function() {
    if (intervalId) {
        clearInterval(intervalId)
        // console.log("stoped");
        intervalId = null
    }
  
}

document.querySelector('#start').addEventListener('click', startChangingColor )
document.querySelector('#stop').addEventListener('click', stopChangingColor )