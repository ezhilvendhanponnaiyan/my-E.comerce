import React, { useState } from 'react';
import './About.css';
const About = () => {
  return (
    <section className='About container' style={{ borderRadius: '30px' }}>
      <div className=' row homepage  px-5 justify-content-center align-items-center'>
        <div className='col-md-6 text-center'></div>
        <div className='about-text col-md-6'>
          <h1>About Us</h1>

          <h4>
            Hello <span>Users</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            molestiae id, tempora commodi ratione, vero quis est sunt quos,
            laudantium fuga beatae voluptatum necessitatibus et tempore
            reiciendis nulla repudiandae? Quidem?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
