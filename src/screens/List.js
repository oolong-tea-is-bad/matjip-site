import { useLocation } from "react-router-dom"
import React from "react";

export default function List() {
    const location = useLocation()
    const { inputValue } = location.state || {};

    return (
        <div>
            <p>List tests : {inputValue}</p>
        </div>
    )
}