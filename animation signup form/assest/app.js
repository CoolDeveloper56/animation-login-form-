let registerBtn = document.getElementById("register");
let container = document.getElementById("container");
let loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    container.classList.add('active')
});

loginBtn.addEventListener("click",()=>{
    container.classList.remove('active')
})