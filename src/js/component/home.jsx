import React from "react";


const Number = ({ num, sixDigits }) => (
	<div className={`number ${sixDigits ? 'number-six-digits' : ''}`}>{num}</div>
);

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
		<div className="container">
			<h1 className="text-center">Simple Counter</h1>
			<div className="bg-dark text-center p-5">
				<span><i class="far fa-clock"></i></span>
				<Number num={Math.floor(seconds / 60000)} />
				<Number num={Math.floor(seconds / 10000) % 6} />
				<Number num={Math.floor(seconds / 1000) % 10} />
				<Number num={Math.floor(seconds / 100) % 10} sixDigits={true} />
				<Number num={Math.floor(seconds / 10) % 10} sixDigits={true} />
				<Number num={seconds % 10} sixDigits={true} />
			</div>
		</div>
	)
};

export default App;


