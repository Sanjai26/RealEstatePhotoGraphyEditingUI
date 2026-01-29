import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import AnimatedSection from '../components/AnimatedSection';
import img_01 from '../assets/images/hero-img-1.jpg';
import img_02 from '../assets/images/hero-img-2.jpg';
import img_03 from '../assets/images/hero-img-3.jpg'; 
import freeTrail from '../assets/images/free-trial_5579376.png';
import fastAndQualityEditing from '../assets/images/stopwatch_4109118.png';
import noSubscriptions from '../assets/images/subscription-inactive.png';
import unlimitedChanges from '../assets/images/change.png';
import noCopyRight from '../assets/images/documents.png';
import realService from '../assets/images/24-7.png';
import testimonial_01 from '../assets/images/testimonial-1.jpg';
import testimonial_02 from '../assets/images/testimonial-2.jpg';
import testimonial_03 from '../assets/images/testimonial-3.jpg';
import testimonial_04 from '../assets/images/testimonial-4.jpg';

const { TextArea } = Input;

// Hero slide data
const heroSlides = [
  {
    id: 1,
    image: img_01,
    badge: 'THE #1 FULL-SERVICE REAL ESTATE MARKETING AGENCY',
    title: 'Edit your photos,',
    subtitle: 'Conquer the market',
    description:
      'Turn dull property photos into vibrant, high-converting visuals that make listings stand out on every platform. From color correction to sky replacement – we make your photos irresistible.',
    cta: 'View Our Services',
    navigation: '/services',
  },
  {
    id: 2,
    image: img_02,
    badge: 'TRANSFORM EMPTY SPACES INTO DREAM HOMES',
    title: 'Interior Design & Virtual Staging',
    subtitle: '',
    description:
      'Bring empty rooms to life with realistic virtual staging, object removal, and décor enhancements.',
    cta: 'See Before & After',
    navigation: '/gallery',
  },
  {
    id: 3,
    image: img_03,
    badge: 'CAPTIVATING AERIAL & TWILIGHT PHOTOGRAPHY',
    title: 'Drone Edits & Day-to-Dusk Magic',
    subtitle: '',
    description:
      'Highlight property beauty with breathtaking drone enhancements and twilight lighting.',
    cta: 'Get a Free Quote',
    navigation: '/contact',
  },
];

// Features data
const features = [
  {
    icon: fastAndQualityEditing,
    title: 'Fast & Quality Editing',
    description:
      'Experience quick 24-hour turnaround with top-quality professional edits (48 hours for virtual staging).',
  },
  {
    icon: noSubscriptions,
    title: 'No Subscriptions',
    description:
      'Pay only for what you use with no subscriptions — just one fixed low rate per image.',
  },
  {
    icon: unlimitedChanges,
    title: 'Unlimited Changes',
    description: 'Enjoy 100% satisfaction with our unlimited change guarantee.',
  },
  {
    icon: freeTrail,
    title: 'Free Trial',
    description:
      'Receive 3 image enhancements and 1 day to dusk edit when you sign up.',
  },
  {
    icon: noCopyRight,
    title: 'No Copyright',
    description:
      'We edit your images and return them to you — no ownership taken.',
  },
  {
    icon: realService,
    title: 'Real Service',
    description:
      'Our customer service experts are available 24/7 via live chat, phone, or email.',
  },
];

// How it works cards
const howItWorks = [
  {
    title: 'Upload photos or videos of your property',
    description:
      'Simply drag and drop your photos to submit a project in seconds. We accept every photo from iPhones to DSLRs.',
  },
  {
    title: 'Real estate editors go to work',
    description:
      'Every project you send will be assigned to an expert editor. We enhance your HDR photos using the latest processing and retouching techniques.',
  },
  {
    title: 'High-quality work every time',
    description:
      '"I chose this service for my real estate photo editing and the images I received were absolutely wonderful."',
  },
  {
    title: 'Receive high-quality photos the same day',
    description:
      'Expect quality, consistency, and 99.98% on-time delivery. We process all real estate photography types and deliver final images in high-resolution print and MLS formats.',
  },
];

// Testimonials data
const testimonials = [
  {
    image: testimonial_01,
    name: 'John Peterson',
    role: 'Real Estate Agent, New York',
    stars: 5,
    review:
      '"The photo edits were stunning! My listings now look professional and attract more buyers. Super fast delivery!"',
  },
  {
    image: testimonial_02,
    name: 'Sophia Martinez',
    role: 'Property Manager, Los Angeles',
    stars: 5,
    review:
      '"Exceptional editing quality. The team transformed dull interiors into bright, inviting spaces. Highly recommended!"',
  },
  {
    image: testimonial_03,
    name: 'Michael Lee',
    role: 'Broker, Chicago',
    stars: 4,
    review:
      '"Quick turnaround and great communication. My clients love the enhanced daylight and virtual staging results."',
  },
  {
    image: testimonial_04,
    name: 'Emily Johnson',
    role: 'Photographer, Miami',
    stars: 5,
    review:
      '"The best editing service I\'ve worked with! The color correction and sky replacement were flawless."',
  },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  // Auto-advance hero carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main style={{ background: '#fff', overflowX: 'hidden' }}>
      {/* ─────────────────────────────────────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatedSection yOffset={18}>
        <section
          style={{
            position: 'relative',
            height: '55vh',
            minHeight: '465px',
            overflow: 'hidden',
          }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: index === currentSlide ? 1 : 0,
                zIndex: index === currentSlide ? 10 : 0,
                transition: 'opacity 0.8s ease-in-out',
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  textAlign: 'center',
                  color: '#fff',
                  padding: '0 20px',
                }}
              >
              {/* Badge */}
              <span
                style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  marginBottom: '24px',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '30px',
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease 0.2s',
                }}
              >
                {slide.badge}
              </span>

              {/* Title */}
              <h1
                style={{
                  fontSize: 'clamp(32px, 6vw, 56px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: '8px',
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease 0.3s',
                }}
              >
                {slide.title}
              </h1>

              {slide.subtitle && (
                <h2
                  style={{
                    fontSize: 'clamp(28px, 5vw, 48px)',
                    fontWeight: 700,
                    marginBottom: '24px',
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease 0.4s',
                  }}
                >
                  {slide.subtitle}
                </h2>
              )}

              {/* Description */}
              <p
                style={{
                  maxWidth: '700px',
                  margin: '0 auto 32px',
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.9)',
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease 0.5s',
                }}
              >
                {slide.description}
              </p>

              {/* CTA Button */}
                  <Button
                  type="primary"
                  size="large"
                  style={{
                    height: '50px',
                    padding: '0 40px',
                    fontSize: '16px',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(249, 115, 22, 0.4)',
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease 0.6s',
                  }}
                  onClick={() => navigate(slide.navigation)}
                  >
                  {slide.cta}
                  </Button>
              </div>
            </div>
          ))}
        </section>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES SECTION
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatedSection delayMs={80} yOffset={22}>
        <section
          style={{
            padding: '40px 5%',
            background: 'linear-gradient(180deg, #fff8f3 0%, #fff 100%)',
            overflowX: 'hidden',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '50px',
            }}
          >
            Why We're Your Best Choice
          </h2>

          <div
            className="features-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
              width: '100%',
            }}
          >
            {features.map((feature, index) => (
                <Card
                key={index}
                hoverable
                style={{
                  width: '100%',
                  textAlign: 'center',
                  border: 'none',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease',
                }}
                styles={{ body: { padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' } }}
                >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  }}
                />
                <h3
                  style={{
                  color: '#f97316',
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '12px',
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                  {feature.description}
                </p>
                </Card>
            ))}
          </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────────────────
          HOW IT WORKS SECTION
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatedSection delayMs={120} yOffset={22}>
        <section style={{ padding: '40px 5%', background: '#f8f9fa', overflowX: 'hidden' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '16px',
            }}
          >
            How AJAIPIXELS Works
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: '#666',
              fontSize: '18px',
              maxWidth: '700px',
              margin: '0 auto 50px',
              lineHeight: 1.7,
            }}
          >
            The only real estate photo editing company you need for photo outsourcing,
            video processing, and virtual staging.
          </p>

          <div
            className="how-it-works-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '24px',
              width: '100%',
            }}
          >
            {howItWorks.map((item, index) => (
              <Card
                key={index}
                hoverable
                style={{
                  border: 'none',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                }}
                styles={{ body: { padding: '30px' } }}
              >
                <h3
                  style={{
                    color: '#f97316',
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '14px',
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────────────────
          UPLOAD / FREE TRIAL SECTION
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatedSection delayMs={160} yOffset={24}>
        <section style={{ padding: '40px 5%', background: '#fff', overflowX: 'hidden' }}>
          <div
            style={{
              maxWidth: '90%',
              margin: '0 auto',
              width: '100%',
              background: '#fff',
              borderRadius: '24px',
              boxShadow: '0 10px 60px rgba(0, 0, 0, 0.1)',
              padding: '50px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '50px',
              alignItems: 'start',
            }}
          >
          {/* Upload Box */}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>
              Upload Files
            </h3>
            <p style={{ color: '#666', marginBottom: '24px' }}>
              Drag & drop your photos here or click to browse
            </p>
            <div
              style={{
                height: '200px',
                border: '2px dashed #d1d5db',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: '#fafafa',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#f97316';
                e.currentTarget.style.background = '#fff8f3';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#d1d5db';
                e.currentTarget.style.background = '#fafafa';
              }}
            >
              <UploadOutlined style={{ fontSize: '40px', color: '#999', marginBottom: '12px' }} />
              <p style={{ color: '#666', margin: 0 }}>Drop files here</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px' }}>
              Get Your Free Trial
            </h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#333' }}>
                  Full Name
                </label>
                <Input
                  size="large"
                  placeholder="Enter your name"
                  style={{ borderRadius: '8px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#333' }}>
                  Email ID
                </label>
                <Input
                  size="large"
                  type="email"
                  placeholder="Enter your email"
                  style={{ borderRadius: '8px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#333' }}>
                  Description
                </label>
                <TextArea
                  rows={3}
                  placeholder="Tell us about your project"
                  style={{ borderRadius: '8px' }}
                />
              </div>
              <Button
                type="primary"
                size="large"
                block
                style={{
                  height: '48px',
                  fontSize: '16px',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  border: 'none',
                  borderRadius: '8px',
                }}
              >
                Submit
              </Button>
            </form>
          </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────────────────
          STATS SECTION
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatedSection delayMs={180} yOffset={20}>
        <section style={{ 
          padding: '60px 5%', 
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
          overflowX: 'hidden' 
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: '40px',
                textAlign: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                  50,000+
                </div>
                <div style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>
                  Photos Edited
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                  2,500+
                </div>
                <div style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>
                  Happy Clients
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                  24 Hrs
                </div>
                <div style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>
                  Average Turnaround
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                  99.98%
                </div>
                <div style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>
                  On-Time Delivery
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────────────────
          SERVICES OVERVIEW SECTION
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatedSection delayMs={190} yOffset={22}>
        <section style={{ padding: '60px 5%', background: '#fff', overflowX: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '16px',
                }}
              >
                Professional Real Estate Photo Services
              </h2>
              <p
                style={{
                  color: '#666',
                  fontSize: '18px',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7,
                }}
              >
                From basic enhancements to advanced virtual staging, we offer complete editing solutions
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: '30px',
              }}
            >
              {[
                {
                  title: 'HDR Real Estate Editing',
                  description: 'Perfect balance of highlights and shadows for stunning interior and exterior shots',
                  price: 'Starting at $0.75/photo',
                },
                {
                  title: 'Virtual Staging',
                  description: 'Transform empty spaces into beautifully furnished rooms that sell properties faster',
                  price: 'Starting at $24/photo',
                },
                {
                  title: 'Sky Replacement',
                  description: 'Replace dull or overcast skies with vibrant blue skies for maximum curb appeal',
                  price: 'Starting at $1.50/photo',
                },
                {
                  title: 'Day to Dusk Conversion',
                  description: 'Create stunning twilight photos that highlight property features with warm lighting',
                  price: 'Starting at $3.00/photo',
                },
                {
                  title: 'Object Removal',
                  description: 'Remove unwanted items, power lines, or distractions for cleaner property photos',
                  price: 'Starting at $2.00/photo',
                },
                {
                  title: 'Flambient Editing',
                  description: 'Blend flash and ambient exposures for perfectly lit, natural-looking interiors',
                  price: 'Starting at $1.25/photo',
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  hoverable
                  style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '16px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease',
                  }}
                  styles={{ body: { padding: '32px' } }}
                >
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      marginBottom: '12px',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                    {service.description}
                  </p>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#f97316' }}>
                    {service.price}
                  </div>
                </Card>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Button
                type="primary"
                size="large"
                onClick={() => navigate('/services')}
                style={{
                  height: '50px',
                  padding: '0 40px',
                  fontSize: '16px',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 8px 24px rgba(249, 115, 22, 0.3)',
                }}
              >
                View All Services
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────────────────
          TESTIMONIALS SECTION
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatedSection delayMs={200} yOffset={24}>
        <section style={{ padding: '40px 5%', background: '#f3f4f6', overflowX: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '50px',
            }}
          >
            What Our Clients Say
          </h2>

          <div
            className="testimonials-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: '24px',
              width: '100%',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                hoverable
                style={{
                  width: '100%',
                  border: 'none',
                  borderRadius: '20px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                }}
                styles={{ body: { padding: '30px' } }}
              >
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  {/* Image on Left */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid #f3f4f6',
                      flexShrink: 0,
                    }}
                  />
                  
                  {/* Content on Right/Center */}
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '4px' }}>
                      {testimonial.name}
                    </h3>
                    <p style={{ color: '#888', fontSize: '14px', marginBottom: '12px' }}>
                      {testimonial.role}
                    </p>
                    <div style={{ color: '#fbbf24', fontSize: '18px', marginBottom: '16px' }}>
                      {'⭐'.repeat(testimonial.stars)}
                    </div>
                    <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                      {testimonial.review}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────────────────
          FAQ SECTION
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatedSection delayMs={220} yOffset={24}>
        <section style={{ padding: '60px 5%', background: '#fff', overflowX: 'hidden' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '16px',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '18px',
                marginBottom: '50px',
                lineHeight: 1.7,
              }}
            >
              Everything you need to know about our services
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  question: 'What is the turnaround time for photo editing?',
                  answer: 'Standard photo editing takes 24 hours. Virtual staging requires 48 hours. Rush delivery options are available for urgent projects.',
                },
                {
                  question: 'Do you offer a free trial?',
                  answer: 'Yes! New clients receive 3 free image enhancements and 1 free day-to-dusk edit when they sign up.',
                },
                {
                  question: 'What file formats do you accept?',
                  answer: 'We accept all common formats including JPG, PNG, RAW files (CR2, NEF, ARW), and TIFF. We deliver final images in high-resolution JPG format.',
                },
                {
                  question: 'Can I request revisions?',
                  answer: 'Absolutely! We offer unlimited revisions until you\'re 100% satisfied with the results. Your satisfaction is our priority.',
                },
                {
                  question: 'How does pricing work?',
                  answer: 'We charge per image with no subscriptions or hidden fees. Pricing varies by service type, starting at $0.75 per photo for basic editing.',
                },
                {
                  question: 'Who owns the edited photos?',
                  answer: 'You do! We don\'t claim any copyright or ownership of your images. All edited photos are 100% yours to use as you wish.',
                },
                {
                  question: 'Do you provide video editing services?',
                  answer: 'Yes! We offer professional real estate video editing including color correction, stabilization, transitions, music, and more. Contact us for custom video editing quotes.',
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  hoverable
                  onClick={() => toggleFaq(index)}
                  style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  styles={{ body: { padding: '10px 14px 10px 14px' } }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {faq.question}
                    </h3>
                    <span
                      style={{
                        fontSize: '24px',
                        color: '#f97316',
                        fontWeight: 600,
                        marginLeft: '16px',
                        transform: openFaqIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        display: 'inline-block',
                      }}
                    >
                      +
                    </span>
                  </div>
                  {openFaqIndex === index && (
                    <p
                      style={{
                        color: '#666',
                        fontSize: '15px',
                        lineHeight: 1.7,
                        margin: 0,
                        marginTop: '16px',
                        paddingTop: '16px',
                        borderTop: '1px solid #e5e7eb',
                      }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────────────────
          FINAL CTA SECTION
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatedSection delayMs={240} yOffset={24}>
        <section
          style={{
            padding: '80px 5%',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            textAlign: 'center',
            overflowX: 'hidden',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              Ready to Transform Your Property Photos?
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '40px',
                lineHeight: 1.7,
              }}
            >
              Join thousands of real estate professionals who trust us with their photo editing needs.
              Start your free trial today—no credit card required.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                type="primary"
                size="large"
                onClick={() => navigate('/contact')}
                style={{
                  height: '56px',
                  padding: '0 48px',
                  fontSize: '18px',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 8px 24px rgba(249, 115, 22, 0.4)',
                }}
              >
                Get Started Free
              </Button>
              <Button
                size="large"
                onClick={() => navigate('/gallery')}
                style={{
                  height: '56px',
                  padding: '0 48px',
                  fontSize: '18px',
                  fontWeight: 600,
                  background: 'transparent',
                  border: '2px solid #fff',
                  color: '#fff',
                  borderRadius: '8px',
                }}
              >
                View Gallery
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
};

export default Home;