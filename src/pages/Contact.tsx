import React from 'react';
import { Layout, Row, Col, Form, Input, Button, Card, Space } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined, SendOutlined } from '@ant-design/icons';
import img_hero from '../assets/images/aesthetic-summer-holidays.jpg';
import AnimatedSection from '../components/AnimatedSection';

const { Content } = Layout;
const { TextArea } = Input;

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  // Spring Boot backend URL - update this after deployment
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  console.log('API_BASE_URL:', API_BASE_URL);
  const contactInfo: ContactInfo[] = [
    {
      icon: <MailOutlined />,
      title: 'Email Us',
      details: ['hello@realestatephoto.com', 'support@realestatephoto.com']
    },
    {
      icon: <PhoneOutlined />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: <EnvironmentOutlined />,
      title: 'Visit Us',
      details: ['123 Photography Street', 'Studio City, CA 91604']
    },
    {
      icon: <ClockCircleOutlined />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM']
    }
  ];

  interface ContactFormValues {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    phoneNumber: string;
    intrestService?: string;
    message: string;
  }

  const handleSubmit = async (values: ContactFormValues) => {
    setLoading(true);

    try {
      // Structure data to match RequestMailEntity
      const requestData = {
        firstName: values.firstName?.trim() || '',
        lastName: values.lastName?.trim() || '',
        email: values.email?.trim() || '',
        country: values.country?.trim() || '',
        phoneNumber: values.phoneNumber?.trim() || '',
        intrestService: values.intrestService?.trim() || 'General Inquiry',
        message: values.message?.trim() || '',
      };

      console.log('Sending contact form data:', requestData);

      const response = await fetch(`${API_BASE_URL}/api/requestMail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = { message: `HTTP ${response.status}` };
      }

      if (!response.ok) {
        const errorMsg = data?.message || data?.error || `Server returned ${response.status}`;
        throw new Error(errorMsg);
      }

      // Success
      alert('Message sent successfully! We will contact you soon.');
      form.resetFields();
    } catch (error) {
      console.error('Contact form error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Failed to send message: ${errorMessage}\n\nPlease try again or contact us directly at hello@realestatephoto.com`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Content>
      {/* Hero Section with Background Image */}
      <AnimatedSection yOffset={18}>
        <section
          id="contact-hero"
          className="contact-hero-section"
          style={{
            position: 'relative',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '80px 20px',
          }}
        >
          {/* Background Image */}
          <div
            id="contact-hero-bg"
            className="contact-hero-background"
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
            id="contact-hero-overlay"
            className="contact-hero-overlay"
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
            id="contact-hero-content"
            className="contact-hero-content"
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
              Contact Us
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
              Have questions or need assistance with real estate photo editing services? Our support team is here to help
              you. Feel free to reach out for inquiries, project discussions, pricing details, or technical support. We
              respond quickly and ensure you get the assistance you need.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* 24/7 Section */}
      <AnimatedSection delayMs={80} yOffset={20}>
        <section
          id="contact-247-banner"
          className="contact-247-section"
          style={{
            background: '#1a1a1a',
            padding: '0',
          }}
        >
          <Row style={{ margin: 0 }}>
          {/* Left Side - OUR EDITING TEAM WORK 24/7 */}
          <Col
            xs={24}
            md={6}
            className="contact-247-left"
            style={{
              background: '#2d2d2d',
              padding: '10px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  fontWeight: 600,
                  color: '#f97316',
                  letterSpacing: '2px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}
              >
                OUR EDITING TEAM
              </p>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 50px)',
                  fontWeight: 800,
                  color: '#fff',
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: '1px',
                }}
              >
                WORK 24/7
              </h2>
            </div>
          </Col>

          {/* Right Side - EDITING WITHOUT LIMITS */}
          <Col
            xs={24}
            md={18}
            className="contact-247-right"
            style={{
              background: '#1a1a1a',
              padding: '0px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  fontWeight: 800,
                  color: '#f97316',
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                EDITING WITHOUT LIMITS
              </h2>
            </div>
          </Col>
          </Row>
        </section>
      </AnimatedSection>

      {/* Contact Form and Info */}
      <AnimatedSection delayMs={120} yOffset={24}>
        <div id="contact-main-section" className="contact-main-wrapper" style={{ padding: '80px 20px', background: 'linear-gradient(to bottom, #0f172a, #1e293b)' }}>
          <div id="contact-main-container" className="contact-main-container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <Row gutter={[48, 48]} align="top">
            {/* Contact Form */}
            <Col xs={24} lg={12} className="contact-form-column">
              <Card
                id="contact-form-card"
                className="contact-form-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  height: '100%',
                }}
                bodyStyle={{ padding: '40px' }}
              >
                <h2
                  style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '32px',
                  }}
                >
                  Send us a Message
                </h2>
                
                <Form
                  id="contact-form"
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  size="large"
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="firstName"
                        label={<span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>First Name</span>}
                        rules={[{ required: true, message: 'Please enter your first name' }]}
                        style={{ marginBottom: '24px' }}
                      >
                        <Input 
                          placeholder="John"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '15px',
                            padding: '12px 16px',
                            height: '48px',
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="lastName"
                        label={<span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>Last Name</span>}
                        rules={[{ required: true, message: 'Please enter your last name' }]}
                        style={{ marginBottom: '24px' }}
                      >
                        <Input 
                          placeholder="Doe"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '15px',
                            padding: '12px 16px',
                            height: '48px',
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="email"
                    label={<span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>Email</span>}
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                    style={{ marginBottom: '24px' }}
                  >
                    <Input 
                      placeholder="john.doe@example.com"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '15px',
                        padding: '12px 16px',
                        height: '48px',
                      }}
                    />
                  </Form.Item>

                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="country"
                        label={<span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>Country</span>}
                        rules={[{ required: true, message: 'Please enter your country' }]}
                        style={{ marginBottom: '24px' }}
                      >
                        <Input 
                          placeholder="USA"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '15px',
                            padding: '12px 16px',
                            height: '48px',
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="phoneNumber"
                        label={<span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>Phone Number</span>}
                        rules={[
                          { required: true, message: 'Please enter your phone number' },
                          { pattern: /^[0-9]{6,15}$/, message: 'Please enter a valid phone number (6-15 digits)' }
                        ]}
                        style={{ marginBottom: '24px' }}
                      >
                        <Input 
                          placeholder="5551234567"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '15px',
                            padding: '12px 16px',
                            height: '48px',
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="intrestService"
                    label={<span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>Interested Service</span>}
                    style={{ marginBottom: '24px' }}
                  >
                    <Input 
                      placeholder="Photo Editing, Virtual Staging, etc."
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '15px',
                        padding: '12px 16px',
                        height: '48px',
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label={<span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>Message</span>}
                    rules={[{ required: true, message: 'Please enter your message' }]}
                    style={{ marginBottom: '32px' }}
                  >
                    <TextArea 
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '15px',
                        padding: '12px 16px',
                        resize: 'none',
                      }}
                    />
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Button
                      id="contact-submit-btn"
                      className="contact-submit-button"
                      type="primary"
                      htmlType="submit"
                      icon={<SendOutlined />}
                      loading={loading}
                      style={{
                        width: '100%',
                        height: '56px',
                        fontSize: '16px',
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #f97316, #ea580c)',
                        border: 'none',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>

            {/* Contact Information */}
            <Col xs={24} lg={12} className="contact-info-column">
              <div id="contact-info-wrapper" className="contact-info-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2
                  style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '8px',
                  }}
                >
                  Get in Touch
                </h2>
                
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="contact-info-card"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                    }}
                    bodyStyle={{ padding: '24px' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ color: '#f97316', fontSize: '28px', marginTop: '4px', flexShrink: 0 }}>
                        {info.icon}
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#fff',
                            marginBottom: '8px',
                            marginTop: 0,
                          }}
                        >
                          {info.title}
                        </h4>
                        <Space direction="vertical" size={4}>
                          {info.details.map((detail, idx) => (
                            <p key={idx} style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0, fontSize: '15px' }}>
                              {detail}
                            </p>
                          ))}
                        </Space>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Response Promise */}
              <Card
                id="contact-response-guarantee"
                className="contact-response-card"
                style={{
                  marginTop: '32px',
                  background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(234, 88, 12, 0.1))',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                }}
                bodyStyle={{ padding: '32px' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '12px',
                      marginTop: 0,
                    }}
                  >
                    Quick Response Guarantee
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.85)', margin: 0, fontSize: '15px', lineHeight: 1.7 }}>
                    We respond to all inquiries within 2 hours during business hours. 
                    For urgent projects, call us directly for immediate assistance.
                  </p>
                </div>
              </Card>
            </Col>
            </Row>
          </div>
        </div>
      </AnimatedSection>
    </Content>
  );
};

export default Contact;