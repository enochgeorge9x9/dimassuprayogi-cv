import Typical from 'react-typical';

const Hero = () => {
	return (
		<section id='hero' className='d-flex flex-column justify-content-center align-items-center'>
			<div className='hero-container' data-aos='fade-in'>
				<h1>Dimas Suprayogi</h1>
				<p>
					I am a{' '}
					<span>
						<Typical loop={2} wrapper='b' steps={['Hardworker.', 1000, 'Problem-Solver.', 1000, 'Leader.', 1000, 'Motivator.', 1000]} />
					</span>
				</p>
			</div>
		</section>
	);
};

export default Hero;
