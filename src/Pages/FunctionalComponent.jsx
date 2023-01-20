import React, { useState } from "react";

function FunctionalComponent(props) {
    // Here count is the state and setCount() is the method to manipulate the state i.e. 'count'
    // 10 is default parameter given to the 'useState'
    const [count, setCount] = useState(10);
    const sub = function () {
        setCount(count - 1);
    }

    const [changeName, setChangeName] = useState("Gold");

    // To remove the neccesity of using props.{properties} many times we can define the following -
    const {name,Height,Company,setName} = props;

    return (
        <div>
            <p>This is Functional Component</p>

            {/* Arrow function is used to prevent function to go into infinite loop */}
            <button onClick={() => setCount(count + 1)}>Click to inc. count</button>
            <button onClick={sub}>Click to dec. count</button>

            <h2>{count}</h2>

            <h5>Hello my name is {name} </h5>
            <h5>Hello my Height is {Height}</h5>
            <h5>Hello my company is {Company}</h5>

            <input onChange={(e) => setChangeName(e.target.value)}></input>
            <button onClick={() => setName(changeName)}>Click to change Name</button>
        </div>
    );
};

export default FunctionalComponent;