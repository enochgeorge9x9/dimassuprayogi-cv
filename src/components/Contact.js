import { useState, useRef } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';


const Contact = () => {
    // Account: yrox58@gmail.com : FormID
	const formId = process.env.FORM_ID;
	const formSparkUrl = `https://submit-form.com/${formId}`;
	const recaptchaKey = process.env.RECAPTCHA_KEY;
	const recaptchaRef = useRef();

	const initialState = {
		name: '',
		email: '',
		subject: '',
		message: '',
	};

	const [formState, setFormState] = useState(initialState);
	const [submitting, setSubmitting] = useState(false);
	const [message, setMessage] = useState();
	const [recaptchaToken, setRecaptchaToken] = useState();

	const submitForm = async (event) => {
		event.preventDefault();
		setSubmitting(true);
		await postSubmission();
		setSubmitting(false);
	};

	const postSubmission = async () => {
		const payload = { ...formState, 'g-recaptcha-response': recaptchaToken };
		try {
			await axios.post(formSparkUrl, payload);
			setMessage({
				class: 'alert-success',
				text: 'Thank you! I will get in touch with you soon.',
			});
			setFormState(initialState);
			recaptchaRef.current.reset();
		} catch (e) {
			console.log({ Error: e });
			setMessage({
				class: 'alert-danger',
				text: 'Sorry, Something went wrong. Please try again.',
			});
		}
	};

	const updateFormControl = async (event) => {
		const { id, value } = event.target;
		const formKey = id;
		const updatedFormState = { ...formState };
		updatedFormState[formKey] = value;
		setFormState(updatedFormState);
	};

	const updateRecaptchaToken = (token) => {
		setRecaptchaToken(token);
	};

	return (
		<section id='contact' className='contact section-bg'>
			<div className='container'>
				<div className='section-title'>
					<h2>Contact</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere debitis, aliquid magni deleniti dignissimos voluptatibus dolorum tempora esse laboriosam libero ullam odit saepe modi nobis laudantium ut necessitatibus, nulla
						dolores quia veniam inventore fugiat. Voluptas?
					</p>
				</div>

				<div className='row' data-aos='fade-in'>
					<div className='col-lg-5 d-flex align-items-stretch'>
						<div className='info'>
							<div className='address'>
								<i className='icofont-google-map'></i>
								<h4>Location: </h4>
								<p>Road No 1121, Manama, Salmaniya 311, Kingdom of Bahrain</p>
							</div>

							<div className='email'>
								<i className='icofont-envelope'></i>
								<h4>Email: </h4>
								<p>dimas.suprayogi17@gmail.com</p>
							</div>

							<div className='phone'>
								<i className='icofont-phone'></i>
								<h4>Call: </h4>
								<p>+973 32396217</p>
							</div>

							{/* Google Maps */}
							<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14317.075248619556!2d50.570847!3d26.2204538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d57dabd78d2fc43!2sJakarta%20Manpower%20Services!5e0!3m2!1sen!2sbh!4v1626781517649!5m2!1sen!2sbh' title='map' frameborder='0' style={{ border: '0', width: '100%', height: '290px' }} allowFullScreen></iframe>
						</div>
					</div>

					{/* Form */}
					<div className='col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch '>
						<form className='email-form needs-validation' onSubmit={submitForm} novalidate>
							{message && (
								<div className={`alert alert-dismissible fade show ${message.class}`} role='alert'>
									{message.text}
									<button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
								</div>
							)}
							<div class='row form-row'>
								<div className='form-group col-md-6'>
									<label htmlFor='name' class='form-label'>
										Your Name
									</label>
									<input type='text' value={formState.name} onChange={updateFormControl} className='form-control' id='name' required />
									<div className='valid-feedback'>Looks good!</div>
								</div>
								<div className='form-group col-md-6'>
									<label htmlFor='email' className='form-label'>
										Your Email
									</label>
									<input type='email' className='form-control' onChange={updateFormControl} value={formState.email} id='email' required />
									<div class='valid-feedback'>Looks good!</div>
								</div>
							</div>
							<div className='form-group'>
								<label htmlFor='subject' className='form-label'>
									Subject
								</label>
								<input type='text' className='form-control' onChange={updateFormControl} value={formState.subject} id='subject' required />
								<div class='valid-feedback'>Looks good!</div>
							</div>
							<div className='form-group'>
								<label htmlFor='message' className='form-label'>
									Message
								</label>
								<textarea className='form-control' value={formState.message} onChange={updateFormControl} id='message' rows='10' required></textarea>
								<div class='valid-feedback'>Looks good!</div>
							</div>

							{/* Recaptcha/Verfiying */}
							<ReCAPTCHA sitekey={recaptchaKey} ref={recaptchaRef} onChange={updateRecaptchaToken} />

							{/* Button */}
							<div className='text-center mt-3'>
								<button type='submit' disabled={submitting}>
									{submitting ? 'Sending Message' : 'Submit'}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
