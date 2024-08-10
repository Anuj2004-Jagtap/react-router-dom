import React from 'react';
import { Link , Outlet} from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <h1>Contact Page</h1>
      <button><Link to='contact-us'>Call or mail us</Link></button>
      <button><Link to='address'>Drop a letter</Link></button>

      <Outlet/>
    </>
  );
}

export default Contact;
