fetch("posts.json")

.then(res=>res.json())

.then(posts=>{

let html=""

posts.forEach(post=>{

html+=`

<div class="post">

<a href="post.html?id=${post.id}">
${post.title}
</a>

<p>${post.date}</p>

</div>

`

})

document.getElementById("posts").innerHTML=html

})


// 鼠标背景粒子

document.addEventListener("mousemove",function(e){

let circle=document.createElement("div")

circle.style.position="fixed"
circle.style.left=e.clientX+"px"
circle.style.top=e.clientY+"px"
circle.style.width="6px"
circle.style.height="6px"
circle.style.background="white"
circle.style.borderRadius="50%"

document.body.appendChild(circle)

setTimeout(()=>{

circle.remove()

},500)

})