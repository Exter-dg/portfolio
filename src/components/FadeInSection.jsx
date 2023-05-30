import React from "react";

export default function FadeInSection(props) {
	const [isVisible, setVisible] = React.useState(false);
	const domRef = React.useRef();
	React.useEffect(() => {
		const ref = domRef.current;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(ref);
				}
			});
		});
		observer.observe(domRef.current);
		return () => observer.unobserve(ref);
	}, []);

	React.useEffect(() => {
		console.log("is Visible changed to: ", isVisible);
	}, [isVisible]);
	return (
		<div
			className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
			ref={domRef}>
			{props.children}
		</div>
	);
}
