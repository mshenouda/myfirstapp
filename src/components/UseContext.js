import React, { useContext, useState } from "react";
import CompD from 'react';

export default function UseContext()
{ 
    const [value, setValue] = useContext();
    return (
        <>
            <CompD />
        </>
    );
};