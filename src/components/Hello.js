/*
function Hello() { 
    return <h1>Hello World</h1>    
}
export default Hello
*/

//ES6 format
const name = 'Mina Shenouda'
function displayMessage() { 
    return <h1>{ name }</h1>;
}

const Hello = () => <h2>Hello {displayMessage()}</h2>;
export default Hello
