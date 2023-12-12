// IconComponent.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const IconComponent = ({ icon }) => {
  return (
    <div className='Icon'>
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faPhone} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faYoutube} />
    </div>
  );
};

export default IconComponent;
