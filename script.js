// 打字机

const text="欢迎来到我的开发者博客"

let i=0

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text[i]

i++

setTimeout(typing,80)

}

}

typing()



// 主题切换

document.getElementById("themeToggle").onclick=()=>{

document.body.classList.toggle("dark")

}



// 平滑滚动

function scrollToSection(id){

document.getElementById(id).scrollIntoView({

behavior:"smooth"

})

}



// 加载博客

let allPosts=[]

fetch("posts.json")

.then(r=>r.json())

.then(data=>{

allPosts=data

renderPosts(data)

})



function renderPosts(posts){

let html=""

posts.forEach(p=>{

html+=`

<div class="card"

onclick="location.href='post.html?id=${p.id}'">

<h3>${p.title}</h3>

<p>${p.date}</p>

<p>${p.tag}</p>

</div>

`

})

document.getElementById("posts").innerHTML=html

}



// 搜索

document.getElementById("search").oninput=(e)=>{

let q=e.target.value.toLowerCase()

let filtered=allPosts.filter(p=>

p.title.toLowerCase().includes(q)

)

renderPosts(filtered)

}



// 项目展示

fetch("projects.json")

.then(r=>r.json())

.then(data=>{

let html=""

data.forEach(p=>{

html+=`

<div class="card">

<h3>${p.name}</h3>

<p>${p.desc}</p>

</div>

`

})

document.getElementById("projectList").innerHTML=html

})



// 粒子背景

const canvas=document.getElementById("bg")

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth

canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<100;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

particles.forEach(p=>{

ctx.beginPath()

ctx.arc(p.x,p.y,p.r,0,Math.PI*2)

ctx.fill()

p.y+=0.5

if(p.y>canvas.height)p.y=0

})

requestAnimationFrame(draw)

}

draw()