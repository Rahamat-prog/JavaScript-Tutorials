//mainly two issue are faceing -> callback hell and invention of control 
// callback hell -> callback inside callback .... 

const heading1 = document.getElementById('heading1')
const heading2 = document.getElementById('heading2')
const heading3 = document.getElementById('heading3')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    setTimeout(() => {
        heading1.style.color = 'red'
        setTimeout(() => {
            heading2.style.color = 'blue'
            setTimeout(() => {
                heading3.style.color = 'green'

            }, 2000);
        }, 2000);
    }, 2000);
} )


