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