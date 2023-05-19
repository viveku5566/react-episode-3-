 import React from "react";
 import ReactDOM from "react-dom/client";

const Title = () => (<h1 id="Heading">React using JSX</h1>);

const title = (<h1 className="heading">hello vivek this is element</h1>);

const vivek = "Vivek";

const HeadingComponent = () => (
    <>
<div id="container">
        <Title/>
 <h1>Hello Vivek you're doing Awesome</h1>

 <div id ="container 2">
    <h2>Hello this is second tag</h2>
 </div>
 </div>
 <div id ="container 3">
    <h3>This is the third tag</h3>
 </div>
 </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);