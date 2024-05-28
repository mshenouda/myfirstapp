import React, {useState, useReducer, useEffect } from 'react';

const reducer = (state, action) => { 
    switch (action) { 
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'incrementBy5':
            return state + 5;
        case 'reset':
            return 0;
        default:
            return state;
    }
};

export default function Reducer() { 
    //const [counter, setCounter] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch('increment')}>Increment</button> 
            <button onClick={() => dispatch('decrement')}>Decrement</button> 
            <button onClick={() => dispatch('incrementBy5')}>IncrementBy5</button> 
            <button onClick={() => dispatch('reset')}>Reset</button> 
        </>
    );
};
