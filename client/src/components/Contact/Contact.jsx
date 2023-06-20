/* eslint-disable */
import React, { useRef, useState } from 'react';
import './ContactCSS.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
/* import { EarthCanvas } from '../3D_Components/index'; */
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
/* import RotateHint from '../RotateHint'; */

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_9bwd41f',
      'template_ra0uwj7',
      {
        from_name: form.name,
        to_name: 'Julian',
        from_email: form.email,
        to_email: 'bristoljulian.r+portfolioPages@gmail.com',
        message: form.message,
      },
      'OlSnfvmPWtVDrhrgi'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible');
      
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong with my email service. Send me an email directly at bristoljulian.r@gmail.com')
    })
  };

  return (
    <div className='contactContainer'>
      <motion.div className='contactFormContainer' variants={slideIn('left', 'tween', 0.2, 1)}>
        <h3 className='sectionTitle'>Contact Me</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='contactForm'
        >
            <label className='formLabel'>
                <span className='formLabelText'>Name</span>
                <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='What&apos;s your name?'
                className='formInput'
                required={true}
                />
            </label>

            <label className='formLabel'>
                <span className='formLabelText'>Email</span>
                <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='What&apos;s your email?'
                className='formInput'
                required={true}
                />
            </label>

            <label className='formLabel'>
                <span className='formLabelText'>Message</span>
                <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What&apos;s your message?'
                className='formInput'
                required={true}
                />
            </label>
            <button className='btn' type='submit'>{loading ? 'Sending...' : 'Send'}</button>
        </form>
      </motion.div>

      {/* <motion.div className='earthContainer' variants={slideIn('right', 'tween', 0.2, 1)}>
        <EarthCanvas />
        <RotateHint bottom='20px'/>
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, 'contact', false);
