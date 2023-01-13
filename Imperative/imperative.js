const button = document.getElementById("btn");

button.addEventListener("click", handleClick);
let container;
let count = 0;
let c = count;
let message,cancelButton;

function handleClick(){
    
    if(container && c==count){
        
        return;
    }
    c = count;

    container = document.createElement("div");
    container.className = "contain";

    message = document.createElement('h2');
    message.textContent = count;

    cancelButton = document.createElement('button');
    cancelButton.textContent = 'add';
    cancelButton.addEventListener('click', closeButton);

    container.append(message);
    container.append(cancelButton);

    document.getElementById("dem").append(container);
    
}

function closeButton(){
    // container.remove();
    // container = null;
    count +=1;
    console.log(count)
    handleClick();
}
