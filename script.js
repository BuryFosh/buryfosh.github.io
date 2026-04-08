fetch("posts.json")
.then(res=>res.json())
.then(data=>{

let html="";

data.forEach(post=>{
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