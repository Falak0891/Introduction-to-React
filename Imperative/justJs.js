const div = document.createElement("div");

const heading= document.createElement("h1");
heading.textContent = "Hello";
heading.className = "header";

const para= document.createElement("p");
heading.textContent = "Welcome to the session";
heading.className = "para";

const btn = document.createElement("button");
btn.textContent="Click";
btn.className = "btn";

div.append(heading);
div.append(btn);
div.append(para)

document.getElementById("root").append(div);

