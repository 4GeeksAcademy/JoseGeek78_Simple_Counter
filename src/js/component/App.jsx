import React from 'react';
import Number from './Number.jsx';



const App = () => {
    const [seconds, setSeconds] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(
            () => setSeconds((seconds + 1) % 600000),
            1000
        )
        return () => {
            clearInterval(intervalId)
        }
    })
    return (
        <>
            <h1 className="text-center">Simple Counter</h1>
            <div className="container text-center bg-dark p-3">
                <i class="far fa-clock icon"></i>
                <Number num={Math.floor(seconds / 60000)} />
                <Number num={Math.floor(seconds / 10000) % 6} />
                <Number num={Math.floor(seconds / 1000) % 10} />
                <Number num={Math.floor(seconds / 100) % 10} sixDigits={true} />
                <Number num={Math.floor(seconds / 10) % 10} sixDigits={true} />
                <Number num={seconds % 10} sixDigits={true} />
             </div>
        </>
    )
};

export default App;