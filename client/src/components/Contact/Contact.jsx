/* eslint-disable */
import React, { useRef, useState } from 'react';
import './ContactCSS.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EarthCanvas } from '../../JS_MASTERY_Components';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className='contactContainer'>
      <motion.div className='contactFormContainer' variants={slideIn('left', 'tween', 0.2, 1)}>
        <h3 className='sectionTitle'>Contact Me Anywhere, Anytime</h3>
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
                />
            </label>
            <button className='btn' type='submit'>{loading ? 'Sending...' : 'Send'}</button>
        </form>
      </motion.div>

      <motion.div className='earthContainer' variants={slideIn('right', 'tween', 0.2, 1)}>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact', false);
