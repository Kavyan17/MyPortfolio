import React from 'react';
import contactData from '../../data/Contact.json';
import '../../styles/Contact.css';

import github from '../../assets/contact-icons/github.png';
import leetcode from '../../assets/contact-icons/leetcode.png';
import gmail from '../../assets/contact-icons/gmail.png';
import codeforces from '../../assets/contact-icons/codeforces.png';
import linkedin from '../../assets/contact-icons/linkedin.png';
import medium from '../../assets/contact-icons/medium.png';
import wordpress from '../../assets/contact-icons/wordpress.png';

const icons = {
  github,
  leetcode,
  gmail,
  codeforces,
  linkedin,
  wordpress,
  medium,
};

const Contact = ({ className = "contact-container" }) => {
  return (
    <div className={className}>
      {contactData.map(({ id, media, link }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <img src={icons[media]} alt={media} />
        </a>
      ))}
    </div>
  );
};

export default Contact;
