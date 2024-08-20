// let div = document.createElement("div")
// div.className = "alert"
// div.innerHTML = "<i>i am mudassir i work all day on computer and make website guess who am i ? </i>"
// document.querySelector(".container").after(div)

// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("afterend" , "<b> hello i am harry dont try to be faster than me </b>")

// document.querySelector("b").remove()

// function myFunction() {
   let b = document.getElementById("demo")
   b.style.display = "none"

   let a = document.querySelector('#text')
  let img = document.createElement('img')
//   }

let btn = document.getElementsByClassName("btn")    
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")

btn1.addEventListener('click' , ()=>{
  document.querySelector('h1').innerHTML = "Babar Azam"
  b.style.display = "block"
  img.setAttribute('src' , 'images/babar.jpeg')
  document.querySelector('#demo').prepend(img)
  a.innerHTML = " <b> Mohammad Babar Azam </b> born 15 October 199) is a Pakistani international cricketer and the current captain of the Pakistan national cricket team in limited overs formats."
})

btn2.addEventListener('click' , ()=>{
  document.querySelector('h1').innerHTML = "Virat kohli"
  b.style.display = "block"
  img.setAttribute('src' , 'images/kohli.jpeg')
  document.querySelector('#demo').prepend(img)
  a.innerHTML = "<b>Virat Kohli</b> born 5 November 1988)  is an Indian international cricketer who plays Test and One Day International (ODI) cricket for the Indian national team. A former captain in all formats, Kohli retired from Twenty20 International (T20I) following India's win at the 2024 T20 World Cup."
})

btn3.addEventListener('click' , ()=>{
  document.querySelector('h1').innerHTML = "Lionel Messi"
  b.style.display = "block"
  img.setAttribute('src' , 'images/messi.jpeg')
  document.querySelector('#demo').prepend(img)
  a.innerHTML = "<b>Lionel Messi</b> born 24 June 1987 is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. Widely regarded as one of the greatest players of all time, Messi has won a record eight Ballon d'Or awards, a record six European Golden Shoes, and was named the world's best player for a record eight times by FIFA."
})

btn4.addEventListener('click' , ()=>{
  document.querySelector('h1').innerHTML = "Cristiano Ronaldo"
  b.style.display = "block"
  img.setAttribute('src' , 'images/ronaldo.jpg')
  document.querySelector('#demo').prepend(img)
  a.innerHTML = " <b>Cristiano Ronaldo</b> born 5 February 1985 is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards"
})

btn5.addEventListener('click' , ()=>{
  document.querySelector('h1').innerHTML = "Arshad Nadeem"
  b.style.display = "block"
  img.setAttribute('src' , 'images/arshad.jpeg')
  document.querySelector('#demo').prepend(img)
  a.innerHTML = "<b>Arshad Nadeem</b> born 2 January 1997) is a Pakistani javelin thrower.[1] He is the reigning Olympic and Commonwealth Games champion. He is also the current silver medalist in the World Athletics Championship."
})
