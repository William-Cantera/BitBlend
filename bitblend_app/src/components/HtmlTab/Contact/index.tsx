import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { createUseStyles } from 'react-jss';
import styles from './styles';
import LocationMap from './GoogleMap/myLocation';

const ContactForm = () => {
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://master.d12yk2hn6rz66e.amplifyapp.com/api/Math/sqrt',
          {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
          },
        );
        const data = await response.json();
        setResult(data);
        console.log('root: ' + data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(e.target);

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
          setFromEmail('');
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
    <div className={classes.contactInfo}>
      <LocationMap latitude={latitude} longitude={longitude} />
      <form onSubmit={handleSubmit} className={classes.form}>
        <p className={classes.p}>
          If you'd like to contact me, do so by sending a message with this
          form, or by reaching out directly to wfcantera@gmail.com.
        </p>
        <div className={classes.inputGroup}>
          <input
            id="fromName"
            type="text"
            name="fromName"
            placeholder="Your Name"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.inputGroup}>
          <input
            id="email"
            type="fromEmail"
            name="fromEmail"
            placeholder="Your Email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            required
            className={classes.input}
          />
        </div>
        <div className={classes.inputGroup}>
          <textarea
            id="message"
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
