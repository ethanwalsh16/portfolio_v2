import "../index.css"

const Hero = () => {
	return (
		<div className="md:pb-16 pb-8 md:ml-4 ml-1">
					<p className="font-serif text-slate-900 pb-2"><i>Currently:</i></p>
					<ul className="font-serif text-slate-900 text-md space-y-1">
						<li>Studying software engineering at McMaster University</li>
						<li>Working at the Royal Bank of Canada on the real-time payments team</li>
						<li>Making music with the engineering jazz band</li>
						<li>Learning about digital ethics, how to get off your phone, and the return to physical media</li>
					</ul>
		</div>
	);
};

export default Hero;
