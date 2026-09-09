import React, { useRef, useState, useEffect } from 'react';
import Section from './Section.jsx';
import Heading from './Heading.jsx';
import { arrow, tick, copy } from '../assets/index.js';
import { BottomLine, Gradient } from './design/Hero.jsx';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [imageSrc, setImageSrc] = useState(copy);  // Default to 'copy' image

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText("info@ncstechnologia.com");
        setHasCopied(true);
        setImageSrc(tick);  // Change to tick image on copy
        setTimeout(() => {
            setHasCopied(false);
            setImageSrc(copy);  // Reset to copy image after 2 seconds
        }, 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_k77txt7',
                'template_pup2uut',
                {
                    from_name: form.name,
                    reply_to: form.email,
                    from_email: form.email,
                    message: form.message
                },
                'P2bMynMCSoGOoTgVe'
            );
            setLoading(false);
            alert('Your message was sent successfully. Thank you!');
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false);
            console.error('EmailJS Error:', error);
            alert('Oops, something went wrong. Please try again later.');
        }
    };

    return (
        <Section id="contact">
            <div className="container">
                <Heading
                    title="Connect with NCS Technologia"
                    text="Discover how our high-performance inks can transform your printing needs. Reach out to explore the possibilities."
                />

                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden p-6">
                        <div className="flex flex-col items-center justify-center space-y-4 h-1/2">
                            {/* Email */}
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">Email</h3>
                                <div>
                                    <div className="copy-container" onClick={handleCopy}>
                                        <img className="w-8 h-8" src={imageSrc} alt="copy" />
                                        <p className="text-gray-600">info@ncstechnologia.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <a href="tel:+244930945273" className="text-gray-600 hover:text-color-1">
                                    +244 930 945 273
                                </a>
                            </div>

                            {/* Address */}
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p className="text-gray-600">222. Rua do Kikuxi-Shopping, Kikuxi-Zango, Luanda, Angola</p>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1/2 border-t border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15763.077075158893!2d13.3677214!3d-8.9933667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a52030034df7c93%3A0xb059f819a2e1149c!2sNCS%20TECHNOLOGIA%20LUANDA!5e0!3m2!1sen!2sza!4v1731090729366!5m2!1sen!2sza"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="NCS Tecnologia Luanda Location"
                            ></iframe>
                        </div>
                    </div>

                    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] dark-gradient">
                        <div className="py-12 px-4 xl:px-8">
                            <div className="contact-container">
                                <h3 className="head-text">Get in Touch</h3>
                                <p className="text-white-600 mt-3">We’d love to hear from you! Whether you have questions, want to collaborate, or need support, feel free to connect. Together, let’s make a lasting impression.</p>

                                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-3">
                                    <label className="space-y-3">
                                        <span className="field-label"> Full Name</span>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className="field-input"
                                            placeholder="Enter your name"
                                        />
                                    </label>
                                    <label className="space-y-3">
                                        <span className="field-label">Email</span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className="field-input"
                                            placeholder="Enter your email"
                                        />
                                    </label>
                                    <label className="space-y-3">
                                        <span className="field-label">Your Message</span>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="field-input"
                                            placeholder="Hi, I am interested in..."
                                        />
                                    </label>
                                    <button className="field-btn" type="submit" disabled={loading}>
                                        {loading ? 'Sending...' : 'Send Message'}
                                        <img src={arrow} alt="arrow-up" className="field-btn_arrow" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Gradient />
            </div>
        </Section>
    );
};

export default ContactForm;
