const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


// Proper format for 11:59 time for Cronjob in javascript  // this is another method but complex

setInterval( () => {   // setInterval is a easyest method controll by javascript event
    let date = new Date()
    // console.log(date);
    clock.innerHTML = date.toLocaleTimeString()
}, 1000 )
