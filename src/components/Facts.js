import CountUp from 'react-countup';

const Facts = () => {
	return (
		<section id='facts' className='facts'>
			<div className='container'>
				<div className='section-title'>
					<h2>Facts</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe placeat, temporibus accusantium iure facilis officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptatum. Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Dolores, repellendus. Lorem ipsum dolor sit amet.
					</p>
				</div>
				<div className='row no-gutters'>
					<div className='col-lg-3 col-md-6 d-md-flex align-items-md-stretch' data-aos='fade-up'>
						<div className='count-box'>
							<i className='icofont-simple-smile'></i>
							<span>
								<CountUp end={232}  duration={10} />
							</span>
							<p>
								<strong>Happy Clients</strong>Consequuyer Quae
							</p>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 d-md-flex align-items-md-stretch' data-aos='fade-up' data-aos-delay='50'>
						<div className='count-box'>
							<i className='icofont-document-folder'></i>
							<span>
								<CountUp end={521}  duration={10} />
							</span>
							<p>
								<strong>Projects</strong> adipistct atqua cum
							</p>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 d-md-flex align-items-md-stretch' data-aos='fade-up' data-aos-delay='150'>
						<div className='count-box'>
							<i className='icofont-live-support'></i>
							<span>
								<CountUp end={1465}  duration={10} />
							</span>
							<p>
								<strong>Hours of Support </strong>adipistct atqua cum
							</p>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 d-md-flex align-items-md-stretch' data-aos='fade-up' data-aos-delay='200'>
						<div className='count-box'>
							<i className='icofont-user-alt-5'></i>
							<span>
								<CountUp end={15} duration={10} />
							</span>
							<p>
								<strong>Hard Workers </strong>rerun asperiose dolor
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Facts;
