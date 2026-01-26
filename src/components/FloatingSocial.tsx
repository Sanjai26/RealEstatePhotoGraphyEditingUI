import React from 'react';
import instagramIcon from '../assets/images/instagram-color.png';
import whatsappIcon from '../assets/images/whatsapp-color.png';

const FloatingSocial: React.FC = () => {
  const links = [
    {
      href: 'https://www.instagram.com/',
      label: 'Instagram',
      icon: instagramIcon,
    },
    {
      href: 'https://wa.me/1234567890',
      label: 'WhatsApp',
      icon: whatsappIcon,
    },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        right: '18px',
        bottom: '110px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 1000,
      }}
    >
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.28)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';
          }}
        >
          <img
            src={item.icon}
            alt={item.label}
            style={{ width: '26px', height: '26px' }}
            draggable={false}
          />
        </a>
      ))}
    </div>
  );
};

export default FloatingSocial;
