//useState hooks
import { useState } from "react";

function Functional() { 
    const [counter, setCounter] = useState(0);
    
    const increment = ()=> { 
        setCounter(counter + 1);
    }
    const reset = () => { 
        setCounter(0);
    }
    return (
        <div>
            <h1>Value: {counter}</h1>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Click</button>
        </div>
    );
}
export default Functional;