import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [send, setSend] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setSend(false);
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const formSubmit = e => {
    e.preventDefault();
    setSend(true);

    let formData = new FormData();

    formData.set('email', email);
    formData.set('phone', phone);
    formData.set('message', message);

    axios({
      method: 'post',
      url:
        'https://react-blog.devmatte.com/wp-json/contact-form-7/v1/contact-forms/8/feedback/',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(res => {
        console.log('Submit success');
        resetForm();
      })
      .catch(() => {
        console.log('Submit error');
      });
  };

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={formSubmit}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-wrapper">
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="input-wrapper">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="submit-wrapper">
              <button type="submit" className="btn btn--send">
                {send === true ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
