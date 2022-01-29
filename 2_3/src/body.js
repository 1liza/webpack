function Body() {
  var root = document.getElementById("root");

  var body = document.createElement("div");
  body.innerText = "body";
  root.appendChild(body);
}

module.exports = new Body();
