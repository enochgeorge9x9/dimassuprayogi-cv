import profileImg from '../img/profile-img.jpg';
import React, { useState } from 'react';

const Header = () => {
	const socialLinks = {
		twitter: '',
		facebook: '',
		// youtube: '',
		linkedin: 'https://www.linkedin.com/in/dimas-suprayogi-07038984/',
		instagram: 'https://www.instagram.com/suprayogi5.7/?hl=en',
	};
	const [menu, setMenu] = useState({ checked: false });

	let menuToggle = () => {
		return setMenu(!menu);
	};

	// Icons from Box-Icon
	// Name: Icon_Name

	const NavLinks = {
		About: 'user',
		Resume: 'file',
		Services: 'server',
		// Testimonials: 'message-rounded-detail',
		Contact: 'envelope',
		// Portfolio: 'book-content',
	};

	return (
		<header className={menu ? 'header' : 'header header-active'}>
			<div className='d-flex flex-column'>
				<div className='profile'>
					<img src={profileImg} alt='' className='img-fluid rounded-circle' />
					<h1 className='text-light'>
						<a href='index.html'>Dimas Suprayogi</a>
					</h1>
					<div className='social-links mt-3 text-center'>
						{Object.entries(socialLinks).map(([name, link]) => {
							return (
								<a href={link} className={name} key={name} target='_blank' rel='noreferrer'>
									<i class={`bx bxl-${name}`}></i>
								</a>
							);
						})}
					</div>
				</div>
			</div>

			{/* ============NavBar==================== */}
			<nav className='nav-menu'>
				<ul>
					<li className='active'>
						<a href='index.html'>
							<i className='bx bx-home'></i>
							<span>Home</span>
						</a>
					</li>
					{Object.entries(NavLinks).map(([link, logo]) => {
						return (
							<li>
								<a href={`#${link.toLowerCase()}`}>
									<i className={`bx bx-${logo}`}></i>
									<span>{link}</span>
								</a>
							</li>
						);
					})}
				</ul>
				<button onClick={menuToggle} type='button' class='mobile-nav-toggle d-xl-none'>
					<i class={menu ? 'icofont-navigation-menu' : 'icofont-close'}></i>
				</button>
			</nav>
		</header>
	);
};

export default Header;
