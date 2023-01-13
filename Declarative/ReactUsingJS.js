const heading = React.createElement("h1", null, "Hello World");
const para = React.createElement("p", {className:"para"}, "Welcome to the React World");
const btn = React.createElement("button", {className:"btn"}, "Click");

const div = React.createElement("div", {className:"App", children : [btn,para,heading]});

console.log(btn);


ReactDOM.createRoot(document.getElementById("root")).render(div);