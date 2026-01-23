import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/studio-logo.png';

interface NavItem {
  key: string;
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [, setScrolled] = useState(false);
  const location = useLocation();

  const navigationItems: NavItem[] = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'services', label: 'Services', href: '/services' },
    { key: 'gallery', label: 'Our Gallery', href: '/gallery' },
    { key: 'about', label: 'About', href: '/about' },
    { key: 'contact', label: 'Contact', href: '/contact' }
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get current active menu key
  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Fixed Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '70px',
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: 'none',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Real Estate Photography"
              style={{
                height: '45px',
                width: 'auto',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              alignItems: 'center',
              gap: '32px',
            }}
            className="hidden lg:flex"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                style={{
                  color: isActive(item.href) ? '#fff' : 'rgba(255, 255, 255, 0.85)',
                  fontSize: '15px',
                  fontWeight: isActive(item.href) ? 600 : 500,
                  textDecoration: 'none',
                  padding: '8px 0',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.3px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = isActive(item.href) ? '#fff' : 'rgba(255, 255, 255, 0.85)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {item.label}
                {/* Active indicator line */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: isActive(item.href) ? '100%' : '0',
                    height: '2px',
                    background: '#f97316',
                    transition: 'width 0.3s ease',
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Only show on mobile/tablet */}
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: '20px' }} />}
            onClick={() => setMobileMenuVisible(true)}
            style={{
              color: '#fff',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              width: '44px',
              height: '44px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-menu-btn"
          />
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={300}
        styles={{
          header: { display: 'none' },
          body: {
            background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
            padding: 0,
          },
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <img
            src="/assets/images/studio-logo.png"
            alt="Logo"
            style={{ height: '40px', width: 'auto' }}
          />
          <Button
            type="text"
            icon={<CloseOutlined style={{ fontSize: '18px' }} />}
            onClick={() => setMobileMenuVisible(false)}
            style={{
              color: '#fff',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              width: '40px',
              height: '40px',
            }}
          />
        </div>

        {/* Mobile Nav Links */}
        <nav style={{ padding: '16px 0' }}>
          {navigationItems.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              onClick={() => setMobileMenuVisible(false)}
              style={{
                display: 'block',
                padding: '16px 24px',
                color: isActive(item.href) ? '#f97316' : 'rgba(255, 255, 255, 0.9)',
                fontSize: '16px',
                fontWeight: isActive(item.href) ? 600 : 500,
                textDecoration: 'none',
                borderLeft: isActive(item.href) ? '3px solid #f97316' : '3px solid transparent',
                background: isActive(item.href) ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Drawer>

      {/* Header Spacer */}
      <div style={{ height: '70px' }} />
    </>
  );
};

export default Header;