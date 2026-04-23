let mobileMenu = document.getElementById("mobileMenu")
let btnMobile = document.getElementById("btnMobile");

btnMobile.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("active")
    console.log("Kepencet")
})

function closeMenu(){
    let closeBtn = document.getElementById("closeBtn");
    mobileMenu.classList.toggle("active")
}