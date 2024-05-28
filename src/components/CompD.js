import React, { useContext } from "react";
import CompE from "./CompE";
// import { UserContext, ChannelContext } from "../App";

// const firstname = useContext(UserContext);
// const lastname = useContext(ChannelContext);

export default function CompD() { 
    return (
        <>
            {/* <h1>Component D, Welcome {firstname} {lastname}</h1><b/>        */}
            Inherting <CompE />
        </>
    ); 
};