import { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./app.scss";
import beignet from "./image/beignet.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap, Power2 } from "gsap";
function App() {
	let container = useRef(null);
	let image = useRef(null);
	let imageReveal = CSSRulePlugin.getRule(".img-container:after");

	const tl = new gsap.timeline();
	useEffect(() => {
		console.log(imageReveal);
		tl.to(container, { duration: 0, visibility: "visible" })
			.to(imageReveal, {
				duration: 1.4,
				width: "0%",
				ease: Power2.easeInOut,
			})
			.from(image, {
				duration: 1.4,
				scale: 1.6,
				ease: Power2.easeInOut,
				delay: -1.4,
			});
	});

	return (
		<section className="main">
			<div ref={(el) => (container = el)} className="container">
				<>
					<div className="img-container">
						<img ref={(el) => (image = el)} src={beignet} />
					</div>
				</>
			</div>
		</section>
	);
}

export default App;
