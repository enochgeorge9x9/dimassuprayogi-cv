const Resume = () => {
	return (
		<section id='resume' className='resume section-bg'>
			<div className='container'>
				<div className='section-title'>
					<h2>Resume</h2>
					<p>To get a professional & personal grow up inside of organization where I can share and apply my knowledge, abilities & expectation through teamwork for achieving the organization objectives.</p>
				</div>

				<div className='row'>
					<div className='col-lg-6' data-aos='fade-up'>
						<h3 className='resume-title'>Summary</h3>
						<div className='resume-item pb-0'>
							<h4>Dimas Suprayogi</h4>
							<p>
								<em>Innovative and deadline-driven Human Resource Management with 3+ years of experience in recuriting talents and hiring the best suitable candidate for the job</em>
							</p>
							<ul>
								{/* <li>Road No 1121, Manama, Salmaniya 311</li> */}
								<li><b>Phone:</b> +973 32396217</li>
								<li><b>Email:</b> dimas.suprayogi17@gmail.com</li>
							</ul>
						</div>
						
                        <h3 className='resume-title'>Professional Experience</h3>
						<div className='resume-item'>
							<h4>Secretary</h4>
							<h5>2013 - Present</h5>
							<p>
								<em>Jakarta Manpower Services, Salmaniya, Kingdom of Bahrain</em>
							</p>
							<ul>
								<li>Answering calls, taking messages and handling correspondence</li>
								<li>Maintaining diaries and arranging appointments </li>
								<li>Logging or processing bills or expenses</li>
								<li>Organising and servicing meetings (producing agendas and taking minutes)</li>
								<li>Liaising with relevant organisations and clients</li>
								<li>Recruiting, training and supervising junior staff.</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-6' data-aos='fade-up' data-aos-delay='100'>
                    <h3 class='resume-title'>Education</h3>
						<div className='resume-item'>
							<h4>Bachelor of International Business</h4>
							<h5>2017 - 2021</h5>
							<p>
								<em>University Technology of Bahrain (UTB)</em>
							</p>
							<p>
								Knowledge and Skills to manage international and global business affairs. Equipped with skills and competencies necessary to understand the dynamics of international dimension of economics, banking and finance, and
								marketing. Also, obtain knowledge and experience in leading management positions and employability in general.
							</p>
						</div>
						<div className='resume-item'>
							<h4>Major in Marketing</h4>
							<h5>2013 - 2015</h5>
							<p>
								<em>University of Bahrain (UOB)</em>
							</p>
							<p>
								Knowledge and experience in branding and promoting of products and services to the public, which is targeted through specific demographics.Well-versed in advertising, communications, consumer behavior, public
								relations, and marketing strategy and research. Moreover, equipped with a strong background in liberal arts.
							</p>
						</div>
						<div className='resume-item'>
							<h4>Diploma - Higher Secondary School</h4>
							<h5>2006 - 2013</h5>
							<p>
								<em>Al Wesam International School</em>
							</p>
							<p>
								Knowledge in  English Language, Arabic Language, Mathematics, ICT, Arabic Social Studies and Citizenship, Islamic Studies, Physical Education
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
