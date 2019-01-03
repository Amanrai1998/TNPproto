const icon = document.querySelector(".fa-align-justify");
const navul = document.querySelector(".nav-links");
icon.onclick = (e)=>{
    e.preventDefault();
    navul.classList.toggle("nav-links");
};