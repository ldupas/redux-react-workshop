import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

function Counter() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="Counter" >
            <h1>How many players will dare joining?</h1>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(100))}>increment by 100</button>
        </div>
    )
}

export default Counter
