import React from 'react';
import { useSelector } from "react-redux";

function End() {
    const { count } = useSelector((state) => state.counter);
    return (
        <div>
            <h1>This is the end of the game !</h1>
            <span>{count}</span>
        </div>
    )
}

export default End
