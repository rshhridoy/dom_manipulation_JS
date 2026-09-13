let box = document.querySelectorAll(".box");
console.dir(box)

// box[0].innerText = "new value 1";
// box[1].innerText = "new value 2";
// box[2].innerText = "new value 3";


idx = 1;

for(boxs of box){
    boxs.innerText = `New Value is : ${idx}`;
    idx++;
}