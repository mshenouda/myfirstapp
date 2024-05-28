import { Component } from "react";

class Message extends Component { 
    render() { 
        const { messagecode, messageword } = this.props;
        return <h1>
            Number: {messagecode} <b/>
            Letters: {messageword}
        </h1>;
    };
}
export default Message;