import { useState } from 'react'
import './style.css'

function Counter2() { 
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(prevCounter => prevCounter + 1);
    const decrment = () => setCounter(prevCounter => prevCounter - 1);
    function incrementBy5()
    {
        setCounter(prevCounter => prevCounter + 5);
    }
        
    return (
        <>
            <h1>Counter {counter}</h1>
            <button onClick={increment} className='button'>Increment</button>
            <button onClick={decrment} className='button'>Decrement</button>
            <button onClick={incrementBy5} className='button'>Increment-5</button>
        </>
    );
}
export default Counter2;
