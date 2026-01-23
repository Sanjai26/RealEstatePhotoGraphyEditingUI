import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Photo Editing', href: '/services' },
    { label: 'Virtual Staging', href: '/services' },
    { label: 'Floor Plans', href: '/services' },
  ];

  const socialIcons = [
    { icon: <FacebookOutlined />, href: '#', label: 'Facebook' },
    { icon: <TwitterOutlined />, href: '#', label: 'Twitter' },
    { icon: <InstagramOutlined />, href: '#', label: 'Instagram' },
    { icon: <LinkedinOutlined />, href: '#', label: 'LinkedIn' },
  ];

  const linkStyle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.75)',
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'color 0.2s ease',
    display: 'block',
    padding: '6px 0',
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #0b1220 0%, #0f172a 100%)',
        color: 'rgba(255, 255, 255, 0.9)',
        padding: '60px 5% 30px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Company Section */}
          <div>
            <h3
              style={{
                color: '#fff',
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '20px',
                letterSpacing: '0.5px',
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    style={linkStyle}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#f97316')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3
              style={{
                color: '#fff',
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '20px',
                letterSpacing: '0.5px',
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    style={linkStyle}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#f97316')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3
              style={{
                color: '#fff',
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '20px',
                letterSpacing: '0.5px',
              }}
            >
              Connect
            </h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#fff',
                    fontSize: '18px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #f97316, #fb923c)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(249, 115, 22, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '14px',
              margin: 0,
            }}
          >
            &copy; {currentYear} Real Estate Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;