const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

let count = 0
btn1.addEventListener('click', () => {
    btn3.removeAttribute('disabled')
    count++
    updateCount()
})

btn3.addEventListener('click', () => {
    if(count === 1) {
        btn3.setAttribute('disabled', '')
    }
    count--
    updateCount()
})

function updateCount() {
    btn2.innerText = count
}

btn4.addEventListener('click', () => {
    count = 0
    btn3.removeAttribute('disabled')
    updateCount()
})
