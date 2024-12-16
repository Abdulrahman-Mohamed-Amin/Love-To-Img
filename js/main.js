let img_like = document.getElementById("like")
let counter = document.querySelector(".counter span")
img_like.addEventListener("dblclick" , (e) =>{
    counter.innerHTML++
   let imgX = e.clientX - img_like.offsetLeft
   let imgY = e.clientY - 150

   let heart = document.createElement("i")
   heart.className = "fa-solid fa-heart"
   heart.style.color = "red"

   heart.style.top = `${imgY}px`
   heart.style.left = `${imgX}px`
   img_like.appendChild(heart)

   setTimeout(() => {
    heart.remove()
   }, 1000);
})