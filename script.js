let btn = document.querySelector("#btn");


btn.onclick = function () {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    alert("Button Turned red")
}

btn.onclick = () => {
    btn.style.padding = "40px"
}

document.querySelector("div").onmouseover = () => console.log("You are inside div");



let clicked = document.querySelector("#clicked");


//toggle button light to dark and dark to light

let toggleBtn = document.querySelector("#toggle");
let body = document.querySelector("body");
let mode = "light";


toggleBtn.addEventListener ("click", () =>  {
    if(mode =="light"){
        body.style.backgroundColor = "#121212";
        toggleBtn.innerText = "Dark mode";
        toggleBtn.style.color = "white";
        toggleBtn.style.backgroundColor = "#121212";
        toggleBtn.style.border = "1px solid white";
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        body.style.backgroundColor = "white";
        toggleBtn.innerText = "Light mode";
        toggleBtn.style.color = "#121212";
        toggleBtn.style.backgroundColor = "white";
        toggleBtn.style.border = "1px solid #121212";
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})