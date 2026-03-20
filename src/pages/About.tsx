import React from 'react';
import { Layout, Row, Col } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import img_hero from '../assets/images/about-bg.jpg';
import AnimatedSection from '../components/AnimatedSection';
import adobe_cerificate from '../assets/images/Adobe-Certified.jpg';
import ps_logo from '../assets/images/photoshop.png';
import pr_logo from '../assets/images/premiere-pro.png';
import ae_logo from '../assets/images/after-effects.png';
import lr_logo from '../assets/images/photoshop-lightroom.png';
import br_logo from '../assets/images/adobe-bridge.png';
import gl_logo from '../assets/images/gimp.png';

const { Content } = Layout;
const About: React.FC = () => {


  return (
    <Content>
      {/* Hero Section with Background Image */}
      <AnimatedSection yOffset={18}>
        <section
          style={{
            position: 'relative',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '40px 20px',
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${img_hero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1,
            }}
          />

          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              maxWidth: '1100px',
              textAlign: 'center',
              padding: '0 20px',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '24px',
                lineHeight: 1.2,
                textShadow: '0 4px 12px rgba(0,0,0,0.4)',
              }}
            >
              Who We Are
            </h1>
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 24px)',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '900px',
                margin: '0 auto',
                letterSpacing: '1px',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              We are a dedicated team of professional real estate photo editors, photographers, designers, and digital
              imaging experts committed to transforming property visuals into market-ready masterpieces. With years of
              experience in real estate media production, we help agents, brokers, photographers, and property owners
              showcase their listings with stunning clarity and visual appeal.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Certificate Section */}
      <AnimatedSection delayMs={80} yOffset={22}>
        <section style={{ background: '#fff', padding: '40px 20px' }}>
          <div style={{ maxWidth: '100%', margin: '0 auto' }}>
            <Row gutter={[48, 48]} align="middle">
            {/* Certificate Image */}
            <Col xs={24} md={10}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  padding: '8px',
                }}
              >
                <div
                  style={{
                    borderRadius: '12px',
                    background: '#fff',
                    textAlign: 'center',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <img
                    src={adobe_cerificate}
                    alt="Adobe Photoshop Certificate"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                    }}
                  />
                </div>
              </div>
            </Col>

            {/* Certificate Description */}
            <Col xs={24} md={14}>
              <div>
                <h2
                  style={{
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '24px',
                    lineHeight: 1.3,
                  }}
                >
                  Professional Certification
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: '#4a5568',
                    marginBottom: '20px',
                  }}
                >
                  Our lead editor holds a Professional Adobe Photoshop Certificate, demonstrating advanced expertise in
                  photo enhancement, retouching, and creative editing. This certification ensures your real estate
                  images are handled with the highest standards of quality and precision, using industry-leading
                  techniques and tools.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    marginTop: '32px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <CheckCircleOutlined
                      style={{
                        fontSize: '24px',
                        color: '#f97316',
                        marginTop: '4px',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#1a1a1a',
                          marginBottom: '6px',
                        }}
                      >
                        Industry-Standard Expertise
                      </h3>
                      <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>
                        Certified training in advanced Photoshop techniques
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <CheckCircleOutlined
                      style={{
                        fontSize: '24px',
                        color: '#f97316',
                        marginTop: '4px',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#1a1a1a',
                          marginBottom: '6px',
                        }}
                      >
                        Quality Assurance
                      </h3>
                      <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>
                        Highest standards of precision and professionalism
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <CheckCircleOutlined
                      style={{
                        fontSize: '24px',
                        color: '#f97316',
                        marginTop: '4px',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#1a1a1a',
                          marginBottom: '6px',
                        }}
                      >
                        Latest Tools & Techniques
                      </h3>
                      <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>
                        Up-to-date with cutting-edge editing technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            </Row>
          </div>
        </section>
      </AnimatedSection>

      {/* Tools We Use Section */}
      <AnimatedSection delayMs={120} yOffset={22}>
        <section style={{ background: '#f8fafc', padding: '40px 20px', overflow: 'hidden' }}>
          <div style={{ maxWidth: '100%', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '16px',
              lineHeight: 1.3,
            }}
          >
            Tools We Use
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#1d232b',
              maxWidth: '700px',
              margin: '0 auto 48px',
            }}
          >
            We leverage industry-leading software and tools to deliver exceptional real estate photo editing results.
          </p>

          {/* Infinite Scrolling Logo Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              padding: '20px 0',
            }}
          >
            <style>
              {`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .scroll-container {
                  display: flex;
                  animation: scroll 30s linear infinite;
                  width: fit-content;
                }
              `}
            </style>

            <div className="scroll-container">
              {/* First set of logos */}
              <div style={{ display: 'flex', paddingRight: '20px'  }}>
                {[
                  { name: 'Adobe Photoshop', logo: ps_logo },
                  { name: 'Adobe Bridge', logo: br_logo },
                  { name: 'Adobe Lightroom', logo: lr_logo },
                  { name: 'Adobe Premiere Pro', logo: pr_logo },
                  { name: 'GIMP', logo: gl_logo },
                  { name: 'Adobe Illustrator', logo: ae_logo },
                ].map((tool, index) => (
                  <div
                    key={`tool-1-${index}`}
                    style={{
                      minWidth: '180px',
                      height: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '5px',
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px',
                      }}
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        margin: 0,
                        textAlign: 'center',
                        lineHeight: 1.3,
                      }}
                    >
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div style={{ display: 'flex', paddingRight: '20px'  }}>
                {[
                  { name: 'Adobe Photoshop', logo: ps_logo },
                  { name: 'Adobe Bridge', logo: br_logo },
                  { name: 'Adobe Lightroom', logo: lr_logo },
                  { name: 'Adobe Premiere Pro', logo: pr_logo },
                  { name: 'GIMP', logo: gl_logo },
                  { name: 'Adobe Illustrator', logo: ae_logo },
                ].map((tool, index) => (
                  <div
                    key={`tool-2-${index}`}
                    style={{
                      minWidth: '180px',
                      height: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '5px',
                    }}
                    
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px',
                      }}
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        margin: 0,
                        textAlign: 'center',
                        lineHeight: 1.3,
                      }}
                    >
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div style={{ display: 'flex', paddingRight: '20px' }}>
                {[
                  { name: 'Adobe Photoshop', logo: ps_logo },
                  { name: 'Adobe Bridge', logo: br_logo },
                  { name: 'Adobe Lightroom', logo: lr_logo },
                  { name: 'Adobe Premiere Pro', logo: pr_logo },
                  { name: 'GIMP', logo: gl_logo },
                  { name: 'Adobe Illustrator', logo: ae_logo },
                ].map((tool, index) => (
                  <div
                    key={`tool-2-${index}`}
                    style={{
                      minWidth: '180px',
                      height: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px',
                      }}
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        margin: 0,
                        textAlign: 'center',
                        lineHeight: 1.3,
                      }}
                    >
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission & Vision Section */}
      <AnimatedSection delayMs={160} yOffset={24}>
        <section style={{ background: '#fff', padding: '60px 20px', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '50px',
                lineHeight: 1.3,
                textAlign: 'center',
              }}
            >
              Our Mission & Vision
            </h2>
            <Row gutter={[48, 48]}>
              <Col xs={24} md={12}>
                <div
                  style={{
                    padding: '32px',
                    background: 'linear-gradient(135deg, #ffb37d53 0%, #ffe8d6 100%)',
                    borderRadius: '16px',
                    borderLeft: '4px solid #f97316',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: '#f97316',
                      marginBottom: '16px',
                    }}
                  >
                    Our Mission
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.8,
                      color: '#4a5568',
                      margin: 0,
                    }}
                  >
                    To empower real estate professionals by providing exceptional photo editing services that
                    transform property images into compelling visual assets. We are committed to delivering
                    fast, affordable, and high-quality editing that helps agents and photographers maximize their
                    listing potential and close deals faster.
                  </p>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div
                  style={{
                    padding: '32px',
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                    borderRadius: '16px',
                    borderLeft: '4px solid #0ea5e9',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: '#0ea5e9',
                      marginBottom: '16px',
                    }}
                  >
                    Our Vision
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.8,
                      color: '#4a5568',
                      margin: 0,
                    }}
                  >
                    To become the most trusted and reliable real estate photo editing partner globally, known for
                    exceptional quality, unmatched reliability, and customer-centric service. We envision a future
                    where every property listing is presented in its best light, helping buyers fall in love with homes
                    from their first glance.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </AnimatedSection>

      {/* Core Values Section */}
      <AnimatedSection delayMs={180} yOffset={22}>
        <section style={{ background: '#393b3f12', padding: '60px 20px', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '50px',
                lineHeight: 1.3,
                textAlign: 'center',
              }}
            >
              Core Values
            </h2>
            <Row gutter={[32, 32]}>
              {[
                {
                  title: 'Quality Excellence',
                  description: 'We never compromise on quality. Every edit is meticulously crafted to meet the highest industry standards.',
                  icon: '✨',
                },
                {
                  title: 'Customer Focus',
                  description: 'Your satisfaction is our priority. We listen, adapt, and exceed expectations every single time.',
                  icon: '💼',
                },
                {
                  title: 'Fast Delivery',
                  description: 'Speed matters in real estate. We deliver stunning results within 24 hours (48 for virtual staging).',
                  icon: '⚡',
                },
                {
                  title: 'Reliability',
                  description: 'You can count on us. With 99.98% on-time delivery, we are the partner you can trust completely.',
                  icon: '🎯',
                },
              ].map((value, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <div
                    style={{
                      padding: '32px',
                      background: '#fff',
                      borderRadius: '16px',
                      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s ease',
                      border: '1px solid #e5e7eb',
                      textAlign: 'center',
                      height: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(249, 115, 22, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.04)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      style={{
                        fontSize: '48px',
                        marginBottom: '16px',
                      }}
                    >
                      {value.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '12px',
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: '#64748b',
                        margin: 0,
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </AnimatedSection>

      {/* Work Process Section */}
      <AnimatedSection delayMs={200} yOffset={24}>
        <section style={{ background: '#fff', padding: '60px 20px', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '16px',
                lineHeight: 1.3,
                textAlign: 'center',
              }}
            >
              Our Work Process
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#64748b',
                maxWidth: '700px',
                margin: '0 auto 50px',
                textAlign: 'center',
              }}
            >
              A streamlined process designed for efficiency and exceptional results
            </p>
            <Row gutter={[32, 32]}>
              {[
                {
                  number: '01',
                  title: 'Receive Your Files',
                  description: 'You upload your photos through our easy-to-use platform. We accept all formats and handle every type of real estate image.',
                },
                {
                  number: '02',
                  title: 'Expert Analysis',
                  description: 'Our editors analyze your images to understand your vision and requirements for the perfect edit.',
                },
                {
                  number: '03',
                  title: 'Professional Editing',
                  description: 'Using industry-leading tools and techniques, we enhance your photos with precision and artistry.',
                },
                {
                  number: '04',
                  title: 'Quality Review',
                  description: 'Every edit undergoes rigorous quality control to ensure it meets our exacting standards.',
                },
                {
                  number: '05',
                  title: 'Fast Delivery',
                  description: 'Your polished images are ready for download within 24 hours, perfectly formatted for MLS and web.',
                },
                {
                  number: '06',
                  title: 'Unlimited Revisions',
                  description: 'Not satisfied? Request unlimited revisions until your images are exactly as you envision them.',
                },
              ].map((step, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <div
                    style={{
                      textAlign: 'center',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #f97316, #ea580c)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        fontSize: '32px',
                        fontWeight: 700,
                        color: '#fff',
                        boxShadow: '0 8px 24px rgba(249, 115, 22, 0.3)',
                      }}
                    >
                      {step.number}
                    </div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '12px',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: '#64748b',
                        margin: 0,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection delayMs={220} yOffset={24}>
        <section
          style={{
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            padding: '60px 20px',
            overflow: 'hidden',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '50px',
                lineHeight: 1.3,
                textAlign: 'center',
              }}
            >
              Why Choose AJAIPIXELS?
            </h2>
            <Row gutter={[32, 32]}>
              {[
                {
                  title: 'Adobe Certified Experts',
                  description: 'Professional certifications guarantee advanced expertise and up-to-date techniques.',
                },
                {
                  title: 'Real Estate Specialists',
                  description: 'We specialize exclusively in real estate media—we know what agents, brokers, and photographers need.',
                },
                {
                  title: 'Affordable Pricing',
                  description: 'Professional quality at competitive rates with no hidden fees or subscription requirements.',
                },
                {
                  title: '24/7 Customer Support',
                  description: 'Our dedicated support team is always ready to help via live chat, email, or phone.',
                },
                {
                  title: 'Fast Turnaround',
                  description: 'Standard edits within 24 hours. Our 99.98% on-time delivery rate is industry-leading.',
                },
                {
                  title: 'Complete Copyright',
                  description: 'All edited images belong to you. We claim no ownership or copyright to your work.',
                },
              ].map((item, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <div
                    style={{
                      padding: '24px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '12px',
                      }}
                    >
                      ✓ {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.7,
                        color: 'rgba(255, 255, 255, 0.9)',
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </AnimatedSection>
    </Content>
  );
};

export default About;