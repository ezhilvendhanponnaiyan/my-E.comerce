import React, { useState } from 'react';
import './Contact.css';
export default function Contact() {
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
  });
  let name, value;

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const senddata = async (e) => {
    const { Name, Email, Subject, Message } = user;
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };
    const res = await fetch(
      'https://e-commerce-f2e7e-default-rtdb.firebaseio.com/Message.json',
      options
    );
    console.log(res);
    if (res) {
      alert('Your Message Sent');
    } else {
      alert('An error Occured');
    }
  };

  return (
    <>
      <div className='contact-container'>
        <div className='contant'>
          <h2># Contact us</h2>
          <div className='form'>
            <form method='POST'>
              <input
                type='text'
                name='Name'
                value={user.Name}
                placeholder='Enter Your Full Name'
                required
                autoComplete='off'
                onChange={data}
              ></input>
              <input
                type='email'
                name='Email'
                value={user.Email}
                placeholder='Enter Your E-mail'
                autoComplete='off'
                onChange={data}
              ></input>
              <input
                type='text'
                name='Subject'
                value={user.Subject}
                placeholder='Enter Your Subject'
                autoComplete='off'
                onChange={data}
              ></input>
              <textarea
                name='Message'
                value={user.Message}
                placeholder='Your Message'
                autoComplete='off'
                onChange={data}
              ></textarea>
              <button type='submit' onClick={senddata}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
