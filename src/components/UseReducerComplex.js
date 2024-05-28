import React, {useState, useReducer, useEffect } from 'react';

const initialState = {
    name: 'No Function Yet',
    type: '',
    value: 0,
};
const reducer = (state, action) => { 
    switch (action.type) { 
        case 'increment':
            return {name: 'Increment', value: state.value + action.value};
        case 'decrement':
            return { name: 'Decrement', value: state.value - action.value};
        case 'incrementby5':
            return {name: 'IncrementBy5', value: state.value + action.value};
        case 'reset':
            return {name: 'Reset', value: action.value};
        default:
            return state;
    }
};

export default function ReducerComplex() { 
    //const [counter, setCounter] = useState(0);
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h2>Name: {count.name}, Counter: {count.value}</h2>
            <button onClick={() => dispatch({type: 'increment', value: 1 })}>Increment</button> 
            <button onClick={() => dispatch({type: 'decrement', value: 1 })}>Decrement</button> 
            <button onClick={() => dispatch({type: 'incrementby5', value: 5 })}>IncrementBy5</button> 
            <button onClick={() => dispatch({type: 'reset', value: 0 })}>Reset</button> 
        </>
    );
};
