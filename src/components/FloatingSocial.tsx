import React from 'react';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const FloatingSocial: React.FC = () => {
  const links = [
    {
      href: 'https://www.facebook.com/people/Elite-Ajai/61583084661998/',
      label: 'Facebook',
      icon: <FacebookOutlined />,
      color: '#1877f2',
    },
    {
      href: 'https://www.instagram.com/ajai_pixel',
      label: 'Instagram',
      icon: <InstagramOutlined />,
      color: '#E4405F',
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
            background: '#fff',
            color: item.color,
            fontSize: '24px',
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
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default FloatingSocial;
