// let box = document.querySelectorAll(".box");
// console.dir(box)

// // box[0].innerText = "new value 1";
// // box[1].innerText = "new value 2";
// // box[2].innerText = "new value 3";


// idx = 1;

// for(boxs of box){
//     boxs.innerText = `New Value is : ${idx}`;
//     idx++;
// }


// let div = document.querySelector("div");
// console.dir(div);

// div.style.backgroundColor = "blue"; 
// div.style.backgroundColor = "purple"; 

// div.style.fontSize = "40px";

// div.innerText = "Hello!"

// div.style.visibility = "hidden";


// let div = document.querySelector("div");
// let id = div.getAttribute("id");
// console.log(id);
// console.log(div.getAttribute("name"));



// console.log(div.setAttribute("id", "1st div"))


let button = document.createElement("button");

button.innerText = "Click Me";

console.dir(button);

let div = document.querySelector("div");

div.append(button)
div.prepend(button)
div.before(button)
div.after(button)