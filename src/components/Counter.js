import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }
    
    increment() {
        this.setState({
            counter: this.state.counter + 1
        });   
    }

    reset() { 
        this.setState({
            counter: 0
        });
    }
    render() { 
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={() => this.reset()}>Reset</button>
                <button onClick={() => this.increment()}>Click</button>
            </div>
        );
    }
};
export default Counter;