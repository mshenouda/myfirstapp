import { Component } from 'react'

class FormClass extends Component { 
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        };
    }
    handleFirstName = (event) => {
        this.setState({ firstName: event.target.value});
    };    
    handleLastName = (event) => {
        this.setState({ lastName: event.target.value});
    }; 
    handleSubmit = (event) => { 
        event.preventDefault();
        console.log({
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
    };

     
    render() { 
        return (
            <div>
                Form
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.firstName} onChange={this.handleFirstName}></input>
                    <input type='text' value={this.state.lastName} onChange={this.handleLastName}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    };
};
export default FormClass;