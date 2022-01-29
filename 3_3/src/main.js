import blinder from "./blinders.png";
import "./index.scss";

let img = new Image();
img.src = blinder;
// console.log(blinder);
img.classList.add("avatar");

let root = document.getElementById("root");
root.append(img);
