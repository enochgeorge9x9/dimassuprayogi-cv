// Tutorial: https://youtu.be/K1HchLD6fHI?list=PLQWw-1GTSudu5luWn6kzk-8EZYE4Y0tce
// Deployed in Netlify: github account
// Form Submissions: FormSpark: yrxo58 account
// Domain Name: Namecheap
// Google ReCAPTCHA v2: https://www.google.com/recaptcha/admin/site/464470714: enochgeorge1999 account

// Vendor Links
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/boxicons/css/boxicons.min.css';
import './vendor/icofont/icofont.min.css';

import './App.scss';

import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Facts from './components/Facts.js';
import Skills from './components/Skills.js';
import Services from './components/Services';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

require('dotenv').config();

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<main id='main'>
				<About />
				<Resume />
				<Facts />
				<Skills />
				{/* <Services /> */}
				{/* <Testimonials /> */}
				<Contact />
			</main>
			<Footer />

			{/* Back To Top */}
			<a href='#top' class='back-to-top'>
				<i class='icofont-simple-up'></i>
			</a>
		</div>
	);
}

export default App;
