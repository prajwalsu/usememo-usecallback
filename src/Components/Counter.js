import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [ counterOne, setCounterOne] = useState(0);
    const [ counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1);
    };

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1);
    }; 

    // usememeo hook will return the memoized value, it will be executed
    // only when the dependency else it will return the memoized value

    // is even return boolean values
    const isEven = useMemo(() => {
        console.log("even is executed");

        let i = 0;
        while (i < 1000000000) {
            i++;
        }
        return counterTwo % 2 === 0;
    },[counterTwo])
    return (
        <div>
            <h1>Counter one {counterOne}</h1>
            <h1>counter Two {counterTwo}</h1>
            <span>{isEven ? "even":"odd"}</span>
            <button onClick={incrementCounterOne}>increment Coubter One</button>
            <button onClick={incrementCounterTwo}>increment SSCounter Two</button>
            
        </div>
    )
}

export default Counter
