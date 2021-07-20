import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import testimonialImg_1 from '../img/testimonials/testimonials-1.jpg';
import testimonialImg_2 from '../img/testimonials/testimonials-2.jpg';
import testimonialImg_3 from '../img/testimonials/testimonials-3.jpg';
import testimonialImg_4 from '../img/testimonials/testimonials-4.jpg';
import testimonialImg_5 from '../img/testimonials/testimonials-5.jpg';

const Testimonials = () => {
	return (
		<section id='testimonials' className='testimonials section-bg'>
			<div className='container'>
				<div className='section-title'>
					<h2>Testimonials</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nesciunt odit non et, dolorum quo! Rem accusamus, nisi eveniet commodi nemo sint inventore non esse reprehenderit voluptatibus possimus earum laboriosam. Lorem ipsum
						dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea.
					</p>
				</div>
				<OwlCarousel className='owl-carousel testimonials-corousel owl-theme' loop>
					<div className='testimonial-item' data-aos='fade-up'>
						<p>
							<i className='bx bxs-quote-alt-left quote-icon-left'></i>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, commodi?
							<i className='bx bxs-quote-alt-right quote-icon-right'></i>
						</p>
						<img src={testimonialImg_1} className='testimonial-img' alt='' />
						<h3>Saul Goodman</h3>
						<h4>CEO &amp; Founder</h4>
					</div>

					<div className='testimonial-item' data-aos='fade-up' data-aos-delay='150'>
						<p>
							<i className='bx bxs-quote-alt-left quote-icon-left'></i>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, commodi?
							<i className='bx bxs-quote-alt-right quote-icon-right'></i>
						</p>
						<img src={testimonialImg_2} className='testimonial-img' alt='' />
						<h3>Sara Willsson</h3>
						<h4>Designer</h4>
					</div>

					<div className='testimonial-item' data-aos='fade-up' data-aos-delay='200'>
						<p>
							<i className='bx bxs-quote-alt-left quote-icon-left'></i>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, commodi?
							<i className='bx bxs-quote-alt-right quote-icon-right'></i>
						</p>
						<img src={testimonialImg_3} className='testimonial-img' alt='' />
						<h3>Jena Karalis</h3>
						<h4>Store Owner</h4>
					</div>
					<div className='testimonial-item' data-aos='fade-up' data-aos-delay='250'>
						<p>
							<i className='bx bxs-quote-alt-left quote-icon-left'></i>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, commodi?
							<i className='bx bxs-quote-alt-right quote-icon-right'></i>
						</p>
						<img src={testimonialImg_4} className='testimonial-img' alt='' />
						<h3>Matt Brandon</h3>
						<h4>Freelancer</h4>
					</div>
					<div className='testimonial-item' data-aos='fade-up' data-aos-delay='300'>
						<p>
							<i className='bx bxs-quote-alt-left quote-icon-left'></i>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, commodi?
							<i className='bx bxs-quote-alt-right quote-icon-right'></i>
						</p>
						<img src={testimonialImg_5} className='testimonial-img' alt='' />
						<h3>John Larson</h3>
						<h4>Entrepeneur</h4>
					</div>
				</OwlCarousel>
			</div>
		</section>
	);
};

export default Testimonials;
