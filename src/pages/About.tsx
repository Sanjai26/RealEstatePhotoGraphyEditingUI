import React from 'react';
import { Layout, Row, Col } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import img_hero from '../assets/images/aesthetic-summer-holidays.jpg';
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
              background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.75))',
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
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '900px',
                margin: '0 auto',
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
    </Content>
  );
};

export default About;