import React, { useState, useEffect } from 'react';

const CountDownTimer = ({ seconds }) => {
    const [count, setCount] = useState(seconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [count]);

    return <h1>{count}</h1>;
};

export default CountDownTimer;