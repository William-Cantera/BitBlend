import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { createUseStyles } from 'react-jss';
import styles from './styles';
import LocationMap from './GoogleMap/myLocation';

const ContactForm = () => {
  const [fromName, setFromName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_8185x4u',
        'template_oog76z8',
        e.target,
        't31mrleLvTg7WrNWX',
      )
      .then(
        (result: { text: any }) => {
          console.log(result.text);
          setEmailSent(true);
          // Clear form fields
          setFromName('');
          setEmail('');
          setMessage('');

          setTimeout(() => {
            setEmailSent(false);
          }, 5000);
        },
        (error: any) => {
          console.log(error.text);
        },
      );
  };

  const useStyles = createUseStyles(styles);
  const classes = useStyles();

  const latitude = 38.712742;
  const longitude = -90.468154;
  return (
    <div>
      <LocationMap latitude={latitude} longitude={longitude} />
      <form onSubmit={handleSubmit} className={classes.form}>
        <p className={classes.p}>
          If you'd like to contact me, do so by sending a message with this
          form, or by reaching out directly to wfcantera@gmail.com.
        </p>
        <div className={classes.inputGroup}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={classes.input}
          />
        </div>
        <div className={classes.inputGroup}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={classes.textarea}
          ></textarea>
        </div>
        <button type="submit" className={classes.button}>
          Send
        </button>
        {emailSent && (
          <p className={classes.successMessage}>Email sent successfully!</p>
        )}
      </form>
    </div>
  );
};
export default ContactForm;
