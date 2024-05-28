import React, { useState } from 'react'


function ArrayState() { 
    let index = 0;
    const [name, setName] = useState('');
    const [array, setArray] = useState([]);   
    const [object, setObject] = useState({firstName:'', lastName:''});

    const handleChange = (event) => {
        //console.log(event.target.value);
        setName(event.target.value);
    }
    const addInputs = () => {
        setArray([...array, name]);
        printOutput();
    }
    const printOutput = () => array.map(val => console.log(val));
 
    const handleFirst = (event) => setObject(prevState => ({...prevState, firstName:event.target.value})); 
    const handleLast = (event) => setObject(prevState => ({...prevState, lastName: event.target.value}));
    let hidden = true;
    const handleObject = () => { console.log({firstName: object.firstName, lastName: object.lastName}); };

    //const addObjects = () => { setObject(...object, [id]= id++); }
    /*
    return (<div>
        <input type="text" placeholder='Insert a text' onChange={handleChange} value={name}/>
        <button onClick={addInputs}>Add Inputs</button>
        <h2>Values are :</h2>
        <ul>{array.map(val => <li key={index++}>name: {val} index: {index}</li>)}</ul>
    </div>);
    */
    return (<div>
        <input type='text' placeholder='firstName' onChange={handleFirst} value={object.firstName} />
        <input type='text' placeholder='lastName' onChange={handleLast} value={object.lastName} />
        <button onClick={handleObject}>Add Objects</button>
        <h2>firstName: {object.firstName}, lastName: {object.lastName}</h2>
    </div>);
}

export default ArrayState;