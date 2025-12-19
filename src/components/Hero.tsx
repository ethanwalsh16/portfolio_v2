import "../index.css"

const Hero = () => {
	return (
		<div className="md:pb-16 pb-8 md:ml-4 ml-1">
			<p className="font-serif text-slate-900 pb-2"><i>Current Snapshot:</i></p>
			<ul className="font-serif text-slate-900 text-md space-y-1">
				<li>Building real-time payments infrastructure and microservices with Java, Spring Boot, and Camunda at the Royal Bank of Canada</li>
				<li>Won the $20k technical distinction award and filed a provisional patent at RBC for a payment routing engine that optimizes the flow of international transactions</li>
				<li>Studying software engineering at McMaster University</li>
				<li>Creating toSCAN, an automated analyzer of privacy policies and TOS documents using natural language processing, spaCy, and Python</li>
				<li>Making music and performing with McMaster's engineering jazz band</li>
			</ul>
		</div>
	);
};

export default Hero;
