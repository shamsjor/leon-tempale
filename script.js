let closeIcon = document.querySelector("i.icon"),
barIcon = document.querySelector("span.icon"),
links = document.querySelector("ul");

barIcon.addEventListener("click", ()=>{
    links.style.display = "block";
    barIcon.style.display = "none"
    closeIcon.style.display = "flex"
})
closeIcon.addEventListener("click",()=>{
    links.style.display = "none";
    barIcon.style.display = "flex"
    closeIcon.style.display = "none"
})