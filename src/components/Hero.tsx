import "../index.css"

const Hero = () => {
	return (
		<div className="md:pb-16 pb-8 md:ml-4 ml-1">
			<p className="font-serif text-slate-900 pb-2"><i>Snapshot:</i></p>
			<ul className="font-serif text-slate-900 text-md space-y-1">
				<li>Working on the Cyber & Digital Engineering Team at Bruce Power, Canada's largest nuclear power facility</li>
				<li>Previously at RBC & RBC Capital Markets, along with working as a team lead and Vice President for the McMaster AI Society</li>
				<li>Won the $20k technical distinction award and filed a provisional patent at RBC for a payment routing engine that optimizes the flow of international wire transactions</li>
				<li>Created pianAI, a computer vision tool to help learn the hand & wrist positioning for proper piano technique</li>
				<li>Making music and performing with McMaster's engineering jazz band</li>
			</ul>
		</div>
	);
};

export default Hero;
