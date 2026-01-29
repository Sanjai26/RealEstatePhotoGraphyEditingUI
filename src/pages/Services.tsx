import React, { useState } from 'react';
import { Layout, Typography, Card, Row, Col, Button, Input, Form, message, Tag } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import AnimatedSection from '../components/AnimatedSection';
import img_hero from '../assets/images/aesthetic-summer-holidays.jpg';
import aiIcon from '../assets/images/artificial-intelligence.png';
import stopwatchIcon from '../assets/images/stopwatch.png';
import infinityIcon from '../assets/images/forever.png';
import clipingbefore from '../assets/images/clipping-before-1.jpg';
import clipingafter from '../assets/images/clipping-after-1.jpg';
import hdrBefore from '../assets/images/HDR-before-1.jpg';
import hdrAfter from '../assets/images/HDR-after-1.jpg';
import objectRemovalBefore from '../assets/images/object-removal-before-1.jpg';
import objectRemovalAfter from '../assets/images/object-removal-after-1.jpg';
import virtualStagingBefore from '../assets/images/virtual-staging-before-1.jpg';
import virtualStagingAfter from '../assets/images/virtual-staging-after-1.jpg';
import skyBefore from '../assets/images/sky-replacement-before-1.jpg';
import skyAfter from '../assets/images/sky-replacement-after-1.jpg';
import twilightBefore from '../assets/images/twilight-before-1.jpg';
import twilightAfter from '../assets/images/twilight-after-1.jpg';
import flabientBefore from '../assets/images/flabient-before-1.jpg';
import flabientAfter from '../assets/images/flabient-after-1.jpg';
import arielBefore from '../assets/images/ariel-before-2.jpg';
import arielAfter from '../assets/images/ariel-after-1.jpg';


const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const comparisonServices = [
  {
    id: 'color',
    title: 'Clipping Path',
    tag: 'Color & Lighting',
    description:
      'Achieve clean, precise background removal with our professional clipping path service. We manually trace subjects using vector paths to isolate objects with sharp, accurate edges—perfect for product images, eCommerce listings, and marketing visuals.',
  },
  {
    id: 'twilight',
    title: 'Twilight Photo Editing',
    tag: 'Day-to-Dusk',
    description:
      'Transform daytime property photos into stunning twilight scenes with perfectly balanced ambient and artificial lighting. Create dramatic, high-converting evening property photos that showcase your listings in their best light.',
  },
  {
    id: 'hdr',
    title: 'HDR Real Estate Photo Editing',
    tag: 'HDR Blend',
    description:
      'Blend multiple exposures to create stunning, balanced images that show both interior and exterior details perfectly, even in challenging lighting conditions.',
  },
  {
    id: 'object',
    title: 'Object Removal/Addition',
    tag: 'Declutter',
    description:
      'Clean up your real estate photos by removing unwanted objects or adding essential elements. Perfect for decluttering spaces or enhancing curb appeal.',
  },
  {
    id: 'staging',
    title: 'Virtual Staging and Renovations',
    tag: 'Staged',
    description:
      'Transform empty spaces into beautifully furnished rooms or visualize renovation potential with our virtual staging service. Help buyers see the true potential of any property.',
  },
  {
    id: 'sky',
    title: 'Sky Replacement',
    tag: 'Twilight',
    description:
      "Replace dull or overcast skies with beautiful blue skies or dramatic sunset scenes to enhance your property's exterior shots and maximize curb appeal.",
  },
  {
    id: 'flambient',
    title: 'Flambient Photo Editing',
    tag: 'Balanced Light',
    description:
      'Blend flash and ambient light exposures to create perfectly balanced interior photos that show both window views and interior details in stunning clarity.',
  },
  {
    id: 'aerial',
    title: 'Aerial Photo Editing',
    tag: 'Drone',
    description:
      'Enhance your drone photography with professional editing that improves clarity, corrects perspective, and highlights property features from above.',
  },
];

type VolumeDiscountRow = {
  quantity: string;
  standardPrice: string;
  discount: string;
  finalPrice: string;
  popular?: boolean;
};

type PriorityPackageRow = {
  packageName: string;
  images: string;
  weeklyPayment: string;
  popular?: boolean;
};

type ServicePriceRow = {
  service: string;
  price: string;
};

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Use import.meta.env for Vite environment variables
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
      
      // Map form fields to backend MailServiceEntity
      const mailServiceEntity = {
        customerName: values.name,
        mailId: values.email,
        specificMailService: values.service || 'General Inquiry',
        comment: values.description,
        specificPlatform: values.platform || 'Website',
        link: window.location.href,
      };

      const response = await fetch(`${API_BASE_URL}/api/requestMail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailServiceEntity),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      message.success('Request sent successfully! We\'ll contact you soon.');
      form.resetFields();
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('Failed to send request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const volumeDiscountPricing: VolumeDiscountRow[] = [
    { quantity: '100 images', standardPrice: '$60', discount: '10%', finalPrice: '$54' },
    { quantity: '200 images', standardPrice: '$120', discount: '25%', finalPrice: '$90' },
    { quantity: '300 images', standardPrice: '$180', discount: '30%', finalPrice: '$126' },
    { quantity: '400 images', standardPrice: '$240', discount: '33%', finalPrice: '$160' },
    { quantity: '500 images', standardPrice: '$300', discount: '35%', finalPrice: '$195', popular: true },
    { quantity: '800 images', standardPrice: '$480', discount: '38%', finalPrice: '$298', popular: true },
    { quantity: '1000+ images', standardPrice: 'Custom', discount: '~40–45%', finalPrice: '$0.35 / image' },
  ];

  const priorityPackages: PriorityPackageRow[] = [
    { packageName: 'Priority Basic', images: '300 images', weeklyPayment: '$180 / week' },
    { packageName: 'Priority Plus', images: '350 images', weeklyPayment: '$200 / week', popular: true },
    { packageName: 'Priority Max', images: '400 images', weeklyPayment: '$220 / week', popular: true },
    { packageName: 'Priority Ultra', images: '400+ images', weeklyPayment: '$220+ / week' },
  ];

  const photoEditingServicePricing: ServicePriceRow[] = [
    { service: 'Standard Image Editing', price: '$0.30 - $0.60' },
    { service: 'HDR / Bracket Merge', price: '$0.40 - $0.70' },
    { service: 'Flambient / Premium Editing', price: '$0.50 - $1.20' },
    { service: 'Day-to-Night Conversion', price: '$1.00 - $4.00' },
    { service: 'Hero Composites', price: '$7.00 - $10.00' },
    { service: 'Virtual Staging', price: '$15.00 - $20.00' },
    { service: 'Sky / TV / Window Replacement', price: '$0.30 - $1.00' },
    { service: 'Object Removal(Basic)', price: '$0.50 - $1.50' },
    { service: 'Object Removal(Complex)', price: '$2.00 - $5.00' },
  ];

  return (
    <Content className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <AnimatedSection yOffset={18}>
        <section
          style={{
            position: 'relative',
            minHeight: '550px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
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
              inset: 0,
              background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))',
              zIndex: 2,
            }}
          />

          {/* Content Container */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              width: '100%',
              padding: '40px 20px',
            }}
          >
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <Row gutter={[40, 40]} align="middle">
              {/* Left Side - Text Content (70%) */}
              <Col xs={24} lg={17}>
                <div style={{ color: '#fff', paddingRight: '40px' }}>
                  {/* Title */}
                  <h1
                    style={{
                      fontSize: 'clamp(32px, 5vw, 56px)',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      marginBottom: '24px',
                      marginTop: '16px',
                    }}
                  >
                    Our Services
                  </h1>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 'clamp(16px, 2vw, 20px)',
                      lineHeight: 1.7,
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '32px',
                    }}
                  >
                    Delivering high-quality, expertly enhanced real estate photos that help agents, property owners, and developers market homes faster and stand out in competitive markets.
                  </p>

                  {/* Feature Boxes */}
                  <div style={{ marginBottom: '32px' }}>
                    <Row gutter={[20, 20]}>
                      <Col xs={24} sm={8}>
                        <div
                          style={{
                            textAlign: 'center',
                            padding: '20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            height: '70%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px',
                          }}
                        >
                          <img
                            src={aiIcon}
                            alt="Quality"
                            style={{
                              height: '40px',
                              display: 'block',
                              filter: 'invert(1)',
                            }}
                          />
                          <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.85)' }}>
                            High-quality, enhanced real estate photos
                          </p>
                        </div>
                      </Col>

                      <Col xs={24} sm={8}>
                        <div
                          style={{
                            textAlign: 'center',
                            padding: '20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            height: '70%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px',
                          }}
                        >
                          <img
                            src={stopwatchIcon}
                            alt="Fast delivery"
                            style={{
                              height: '40px',
                              display: 'block',
                              filter: 'invert(1)',
                            }}
                          />
                          <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.85)' }}>
                            Faster turnaround with 12–24 hour delivery
                          </p>
                        </div>
                      </Col>

                      <Col xs={24} sm={8}>
                        <div
                          style={{
                            textAlign: 'center',
                            padding: '20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            height: '70%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px',
                          }}
                        >
                          <img
                            src={infinityIcon}
                            alt="Unlimited revisions"
                            style={{
                              height: '40px',
                              display: 'block',
                              filter: 'invert(1)',
                            }}
                          />
                          <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.85)' }}>
                            Unlimited revisions until you're fully satisfied
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>

              {/* Right Side - Form */}
              <Col xs={24} lg={7}>
                <Card
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                  }}
                  bodyStyle={{ padding: '20px 10px 10px 10px' }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <Title level={2} style={{ color: '#fff', marginBottom: '12px' }}>
                      Get Your FREE Trial
                    </Title>
                    <Paragraph style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px' }}>
                      Try our service with a free sample edit
                    </Paragraph>
                  </div>

                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                  >
                    {/* Name Field */}
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your name',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Full Name"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '6px',
                          color: '#fff',
                          fontSize: '15px',
                          padding: '12px 16px',
                        }}
                        className="placeholder-white/50"
                      />
                    </Form.Item>

                    {/* Email Field */}
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: 'email',
                          message: 'Please enter a valid email address',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Email Address"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '6px',
                          color: '#fff',
                          fontSize: '15px',
                          padding: '12px 16px',
                        }}
                        className="placeholder-white/50"
                      />
                    </Form.Item>

                    {/* Description Field */}
                    <Form.Item
                      name="description"
                      rules={[
                        {
                          required: true,
                          message: 'Please tell us about your requirements',
                        },
                      ]}
                    >
                      <TextArea
                        placeholder="Tell us about your requirement"
                        rows={4}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '6px',
                          color: '#fff',
                          fontSize: '15px',
                          padding: '12px 16px',
                          resize: 'none',
                        }}
                        className="placeholder-white/50"
                      />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        block
                        size="large"
                        style={{
                          height: '50px',
                          fontSize: '16px',
                          fontWeight: 600,
                          background: 'linear-gradient(135deg, #f97316, #ea580c)',
                          border: 'none',
                          borderRadius: '6px',
                          boxShadow: '0 8px 24px rgba(249, 115, 22, 0.3)',
                        }}
                      >
                        Submit & Get Free Trial
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
              </Row>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Showcase with Before/After */}
      <AnimatedSection delayMs={80} yOffset={22}>
        <section style={{ background: '#fff', padding: '80px 20px' }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '16px',
                lineHeight: 1.3,
              }}
            >
              Our Real Estate Photo Editing Services
            </h2>
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: 1.8,
                color: '#4a5568',
                maxWidth: '90%',
                margin: '0 auto',
              }}
            >
              Leveraging our team of seasoned real estate photography editing experts, industry-standard tools, and customized approach, we retouch multiple property images into compelling marketing assets, maximizing their visual impact which can help to drive more leads. Explore each service below and drag to compare before and after.
            </p>
          </div>

            <Row gutter={[24, 24]}>
            {comparisonServices.map((svc) => {
              return (
                <Col key={svc.id} xs={24} md={12}>
                  <Card
                    style={{
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      height: '100%',
                    }}
                    bodyStyle={{ padding: 0 }}
                  >
                    <div style={{ height: '400px', overflow: 'hidden', borderRadius: '12px', position: 'relative' }}>
                      <BeforeAfterSlider
                        beforeImage={svc.id === 'color' ? clipingbefore : svc.id === 'hdr' ? hdrBefore : svc.id === 'object' ? objectRemovalBefore : svc.id === 'staging' ? virtualStagingBefore : svc.id === 'sky' ? skyBefore : svc.id === 'twilight' ? twilightBefore : svc.id === 'flambient' ? flabientBefore : svc.id === 'aerial' ? arielBefore : img_hero}
                        afterImage={svc.id === 'color' ? clipingafter : svc.id === 'hdr' ? hdrAfter : svc.id === 'object' ? objectRemovalAfter : svc.id === 'staging' ? virtualStagingAfter : svc.id === 'sky' ? skyAfter : svc.id === 'twilight' ? twilightAfter : svc.id === 'flambient' ? flabientAfter : svc.id === 'aerial' ? arielAfter : img_hero}
                      />
                    </div>

                    <div style={{ padding: '20px 22px 18px', background: '#fff' }}>
                      <Title level={4} style={{ marginBottom: '8px', color: 'rgb(249, 115, 22)' }}>
                        {svc.title}
                      </Title>
                      <Paragraph style={{ color: '#10131a', marginBottom: '0px', fontSize: '14px', lineHeight: 1.7 }}>
                        {svc.description}
                      </Paragraph>
                    </div>
                  </Card>
                </Col>
              );
            })}
            </Row>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection delayMs={120} yOffset={24}>
        <div className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="container mx-auto">
            <div className="text-center mb-10">
            <Title level={2} className="!text-white !text-3xl md:!text-4xl !mb-3">
              Pricing
            </Title>
            <Paragraph className="!text-white/80 text-base max-w-3xl mx-auto">
              Transparent pricing with volume discounts and weekly packages. Prices may vary based on complexity and image quality requirements.
            </Paragraph>
          </div>

            <Row gutter={[24, 24]}>
              <Col xs={24} md={12} xl={6}>
              <Card
                className="bg-white/5 border-white/10 backdrop-blur-sm"
                bodyStyle={{ padding: '22px' }}
              >
                <Title level={3} className="!text-white !mb-4">
                  Volume Discounts (USD)
                </Title>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="text-white/80">
                        <th className="py-2 pr-4 font-semibold">Quantity</th>
                        <th className="py-2 pr-4 font-semibold">Standard Price</th>
                        <th className="py-2 pr-4 font-semibold">Discount</th>
                        <th className="py-2 font-semibold">Final Price</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/90">
                      {volumeDiscountPricing.map((row) => (
                        <tr key={row.quantity} className="border-t border-white/10">
                          <td className="py-2 pr-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span>{row.quantity}</span>
                              {row.popular && (
                                <Tag color="orange" style={{ marginInlineEnd: 0, fontWeight: 600 }}>
                                  Popular
                                </Tag>
                              )}
                            </div>
                          </td>
                          <td className="py-2 pr-4 whitespace-nowrap">{row.standardPrice}</td>
                          <td className="py-2 pr-4 whitespace-nowrap text-orange-400">{row.discount}</td>
                          <td className="py-2 whitespace-nowrap font-semibold">{row.finalPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              </Col>
              <Col xs={24} md={12} xl={6}>
              <Card
                className="bg-white/5 border-white/10 backdrop-blur-sm"
                bodyStyle={{ padding: '22px' }}
              >
                <Title level={3} className="!text-white !mb-4">
                  Photo Editing Services (USD)
                </Title>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="text-white/80">
                        <th className="py-2 pr-4 font-semibold">Service</th>
                        <th className="py-2 font-semibold">Price</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/90">
                      {photoEditingServicePricing.map((row) => (
                        <tr key={row.service} className="border-t border-white/10">
                          <td className="py-2 pr-4">{row.service}</td>
                          <td className="py-2 whitespace-nowrap text-orange-400 font-semibold">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              </Col>

              <Col xs={24} md={12} xl={6}>
              <Card
                className="bg-white/5 border-white/10 backdrop-blur-sm"
                bodyStyle={{ padding: '22px' }}
              >
                <Title level={3} className="!text-white !mb-4">
                  Weekly Priority Packages (USD)
                </Title>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="text-white/80">
                        <th className="py-2 pr-4 font-semibold">Package</th>
                        <th className="py-2 pr-4 font-semibold">Images / week</th>
                        <th className="py-2 font-semibold">Weekly Payment</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/90">
                      {priorityPackages.map((row) => (
                        <tr key={row.packageName} className="border-t border-white/10">
                          <td className="py-2 pr-4 whitespace-nowrap font-semibold">
                            <div className="flex items-center gap-2">
                              <span>{row.packageName}</span>
                              {row.popular && (
                                <Tag color="orange" style={{ marginInlineEnd: 0, fontWeight: 600 }}>
                                  Popular
                                </Tag>
                              )}
                            </div>
                          </td>
                          <td className="py-2 pr-4 whitespace-nowrap">{row.images}</td>
                          <td className="py-2 whitespace-nowrap text-orange-400 font-semibold">{row.weeklyPayment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              </Col>

            {/* CTA (4th column) */}
              <Col xs={24} md={12} xl={6}>
              <Card
                bordered={false}
                className="bg-white/5 backdrop-blur-sm"
                style={{
                  border: 'none',
                  borderRadius: 18,
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.35), rgba(15, 23, 42, 0.35))',
                  boxShadow: '0 18px 50px rgba(2, 6, 23, 0.45)',
                  height: '100%',
                }}
                bodyStyle={{ padding: '22px', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ flex: 1 }}>
                  <Title level={3} className="!text-white !mb-3">
                    Need a Custom Quote?
                  </Title>
                  <Paragraph className="!text-white/85 text-base !mb-4">
                    Get a fast response with a tailored plan for your workload, turnaround time, and editing style.
                  </Paragraph>

                  <div className="space-y-2 text-white/80 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>Volume & Bulk Image</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>Weekly packages</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>Custom editing pricing</span>
                    </div>
                  </div>
                </div>

                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  className="mt-6 px-10 py-6 h-auto text-base md:text-lg font-semibold border-0 w-full"
                  style={{
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    border: 'none',
                  }}
                  onClick={() => navigate('/contact')}
                >
                  Contact Us Now
                </Button>
              </Card>
              </Col>
            
            </Row>
          </div>
        </div>
      </AnimatedSection>
    </Content>
  );
};

export default Services;