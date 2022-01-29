import blinder from "./blinders.png";

let img = new Image();
img.src = blinder;
console.log(blinder);

let root = document.getElementById("root");
root.append(img);
