import profileImg from '../img/profile-img.jpg';

const About = () => {
	const basicInfos = {
		info1: {
			Birthday: 'July 3, 1994',
			Website: 'www.dimassuprayogi.me',
			Phone: '+973 32396217',
			Resident: 'Salmaniya, Kingdom of Bahrain',
			Nationality: 'Indonesian',
		},
		info2: {
			Age: 27,
			Degree: 'Diploma/ Bachelor Degree',
			Email: 'dimas.suprayogi17@gmail.com',
			Languages: 'English/ Indonesian/ Arabic',
			Religion: 'Muslim',
		},
	};

	return (
		<section id='about' className='about'>
			<div className='container'>
				<div className='section-title'>
					<h2>About</h2>
					<p>To get a professional & personal grow up inside of organization where I can share and apply my knowledge, abilities & expectation through teamwork for achieving the organization objectives.</p>
				</div>

				<div className='row'>
					<div className='col-lg-4' data-aos='fade-right'>
						<img src={profileImg} class='img-fluid' alt='' />
					</div>
					<div className='col-lg-8 pt4 pt-lg-0 content' data-aos='fade-left'>
						<h3>Human Resource Management.</h3>
						<p style={{ fontStyle: 'italic' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus cupiditate esse sint, eaque sed Lorem ipsum dolor sit.</p>
						<div className='row'>
							<div className='col-lg-6'>
								<ul>
									{Object.entries(basicInfos.info1).map(([title, value]) => {
										return (
											<li>
												<i className='icofont-rounded-right'></i>
												<strong>{title}: </strong>
												{value}
											</li>
										);
									})}
								</ul>
							</div>
							<div className='col-lg-6'>
								<ul>
									{Object.entries(basicInfos.info2).map(([title, value]) => {
										return (
											<li>
												<i className='icofont-rounded-right'></i>
												<strong>{title}: </strong>
												{value}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<p>
							Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia.
							Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditatedolores.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
