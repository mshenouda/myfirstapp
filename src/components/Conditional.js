import { useState } from "react";
function Conditional(props) {
    const [display, useDisplay] = useState(true);
    return display ? (
        <div><h1>This is conditional rendering</h1></div>  
    ) :
    (
        <div><h1>Nothing to display</h1></div>
    );
}

export default Conditional;

