// DOM practice on browser --> Below are some operations in DOM

// document.getElementById('title')
// <h1 class=​"heading" id=​"title">​DOM learning on chai or code​</h1>​

// document.getElementById('title').id
// 'title'

// document.getElementById('title').class
// undefined

// document.getElementById('title').className
// 'heading'

// document.getElementById('atribute')
// null

// document.getElementById('title').getAttribute
// ƒ getAttribute() { [native code] }


// document.getElementById('title').getAttribute('id')
// 'title'

// document.getElementById('title').getAttribute('class')
// 'heading'

// document.getElementById('title').setAttribute('class', 'test heading')

// title.style.backgroundColor = 'red'
// title.style.padding = '20px'
// title.style.borderRadius = '20px'
 
// title.innerText
// 'DOM learning on chai aur code'

// title.textContent
// 'DOM learning on chai aur code test content' // The textContent property returns "DOM learning on chai aur code test content".

//  document.querySelector('p')
// document.querySelector('input[type="password"]')
//  document.querySelector('ul')
// const mylist = document.querySelector('ul')


//  document.querySelectorAll('li')
// const myList =  document.querySelectorAll('li')
// // myList[0].style.color = "red"

// myList.forEach( (l) => {
//  l.style.backgroundColor = "red"
// })

// select by class name and convert into array and do change

// document.getElementsByClassName("item-list")
// const myList = document.getElementsByClassName("item-list")
//   const convertedArray = Array.from(myList)
// convertedArray.forEach((l) => {
//      l.style.color = "red"
// } )
// 

// example for practice
//  <div id="title">
//   DOM learning on chai aur code
//   <span style="display: none;">test content</span>
// </div> 
// <!-- <script>
// console.log(document.getElementById('title').innerText) // DOM learning on chai aur code
// console.log(document.getElementById('title').textContent) // DOM learning on chai aur code test content
// </script> -->