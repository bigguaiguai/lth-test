import React, { useState, useEffect } from 'react';

function TempMainTwo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setInterval((param) => {
            setCount(param + 1);
        }, 1000, count);

        return () =>{
            // 1
            clearInterval(timerId);
        }
    }, [count]);

    return (
        <div>
            <h1>test2</h1>
            <h2>It is {count}.</h2>
        </div>
    )
}

export default TempMainTwo
