import "./App.css";
import { gsap, Power3 } from "gsap";
import { useRef, useEffect, useState } from "react";
function App() {
	const [state, setState] = useState(false);
	let orangeCircle = useRef(null);
	let blueCircle = useRef(null);
	let redCircle = useRef(null);
	const circleHandlerRed = () => {
		gsap.to(redCircle, { width: 150, height: 150, ease: Power3.easeOut });
		setState(true);
	};
	const circleShrinkHandlerRed = () => {
		gsap.to(redCircle, { width: 75, height: 75, ease: Power3.easeOut });
		setState(false);
	};
	const circleHandlerOrange = () => {
		gsap.to(orangeCircle, { width: 150, height: 150, ease: Power3.easeOut });
		setState(true);
	};
	const circleShrinkHandlerOrange = () => {
		gsap.to(orangeCircle, { width: 75, height: 75, ease: Power3.easeOut });
		setState(false);
	};
	const circleHandlerBlue = () => {
		gsap.to(blueCircle, { width: 150, height: 150, ease: Power3.easeOut });
		setState(true);
	};
	const circleShrinkHandlerBlue = () => {
		gsap.to(blueCircle, { width: 75, height: 75, ease: Power3.easeOut });
		setState(false);
	};

	useEffect(() => {
		// console.log(orangeCircle, blueCircle, redCircle);
		gsap.from(orangeCircle, {
			opacity: 0,
			x: 80,
			ease: Power3.easeOut,
			duration: 0.8,
			delay: 0.2,
		});
		gsap.from(redCircle, {
			opacity: 0,
			x: 80,
			ease: Power3.easeOut,
			duration: 0.8,
			delay: 0.4,
		});
		gsap.from(blueCircle, {
			opacity: 0,
			x: 80,
			ease: Power3.easeOut,
			duration: 0.8,
			delay: 0.6,
		});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<div className="circle-container">
					<div
						onClick={
							state !== true ? circleHandlerOrange : circleShrinkHandlerOrange
						}
						ref={(el) => (orangeCircle = el)}
						className="circle"
					></div>
					<div
						onClick={state !== true ? circleHandlerRed : circleShrinkHandlerRed}
						ref={(el) => (redCircle = el)}
						className="circle red"
					></div>
					<div
						onClick={
							state !== true ? circleHandlerBlue : circleShrinkHandlerBlue
						}
						ref={(el) => (blueCircle = el)}
						className="circle blue"
					></div>
				</div>
			</header>
		</div>
	);
}

export default App;
