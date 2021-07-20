const Skills = () => {
	const skills = {
		skills_1: { 'Microsoft Office': 98, 'Media Marketing': 90, 'Time Management': 90 },

		skills_2: { Communication: 97, 'Team Worker': 94, 'Customer Service': 95 },
	};

	return (
		<section id='skills' className='skills section-bg'>
			<div className='container'>
				<div className='section-title'>
					<h2>Skills</h2>
					<p>I am confident that I can able to discharge my responsibility with maximum perfection with strong communication and organizational skills</p>
				</div>

				<div className='row skills-content'>
					<div className='col-lg-6' data-aos='fade-up'>
						{Object.entries(skills.skills_1).map(([skill, value]) => {
							return (
								<div className='progress'>
									<span className='skill'>
										{skill}
										<i className='val'>{value}%</i>{' '}
									</span>
									<div className='progress-bar-wrap'>
										<div className='progress-bar' role='progressbar' style={{width: `${value}%`}} aria-valuenow={value} aria-valuemin='0' aria-valuemax='100'></div>
									</div>
								</div>
							);
						})}
					</div>
					<div className='col-lg-6' data-aos='fade-up' data-aos-duration='500'>
						{Object.entries(skills.skills_2).map(([skill, value]) => {
							return (
								<div className='progress'>
									<span className='skill'>
										{skill}
										<i className='val'>{value}%</i>{' '}
									</span>
									<div className='progress-bar-wrap'>
										<div className='progress-bar' role='progressbar' style={{width: `${value}%`}} aria-valuenow={value} aria-valuemin='0' aria-valuemax='100'></div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
