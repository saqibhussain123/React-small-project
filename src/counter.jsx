import React, { useState } from "react";

function Counters() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
        counter === 0 ? setCounter(counter):setCounter(counter-1);
    };

    return (
        <div style={{color:'blue', textAlign:'center'}}>
            <button onClick={increment}>+</button>
            <h1>{counter}</h1>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counters;
