
function App(){
    return(
    <div>
        <MainText />
    </div>
    );
}

let show = false;

function MainText(){
    return(
        <>
        
        {show? <Message />:<Start/>}
        </>
    )
}
function showText(){
    show= true;
    rootElement.render(<App/>);
    console.log(show)
}
function Start(){
    return(
    <>
    <h1>Click on the button</h1>
    <button onClick={showText}>Click</button>
    </>
    );
}

function Message(){
    return(
    <div className="container">
    <h2>Hi, This is created in React!</h2>
    <button onClick={handleClose}>Close</button>
    </div>
    );
}

function handleClose(){
    show=false;
    rootElement.render(<App/>);
}







const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>)