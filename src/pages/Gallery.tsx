import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import img_hero from '../assets/images/aesthetic-summer-holidays.jpg';
import AnimatedSection from '../components/AnimatedSection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
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

interface ServiceGallery {
  id: string;
  title: string;
  images: Array<{
    id: string;
    beforeImage: string;
    afterImage: string;
  }>;
}

const Gallery: React.FC = () => {
  const serviceGalleries: ServiceGallery[] = [
    {
      id: 'color',
      title: 'Image Enhancement and Color Correction',
      images: [
        { id: 'color-1', beforeImage: clipingbefore, afterImage: clipingafter },
        { id: 'color-2', beforeImage: clipingbefore, afterImage: clipingafter },
        { id: 'color-3', beforeImage: clipingbefore, afterImage: clipingafter },
        { id: 'color-4', beforeImage: clipingbefore, afterImage: clipingafter },
      ],
    },
    {
      id: 'twilight',
      title: 'Twilight Photo Editing',
      images: [
        { id: 'twilight-1', beforeImage: twilightBefore, afterImage: twilightAfter },
        { id: 'twilight-2', beforeImage: twilightBefore, afterImage: twilightAfter },
        { id: 'twilight-3', beforeImage: twilightBefore, afterImage: twilightAfter },
        { id: 'twilight-4', beforeImage: twilightBefore, afterImage: twilightAfter },
      ],
    },
    {
      id: 'hdr',
      title: 'HDR Real Estate Photo Editing',
      images: [
        { id: 'hdr-1', beforeImage: hdrBefore, afterImage: hdrAfter },
        { id: 'hdr-2', beforeImage: hdrBefore, afterImage: hdrAfter },
        { id: 'hdr-3', beforeImage: hdrBefore, afterImage: hdrAfter },
        { id: 'hdr-4', beforeImage: hdrBefore, afterImage: hdrAfter },
      ],
    },
    {
      id: 'object',
      title: 'Object Removal/Addition',
      images: [
        { id: 'object-1', beforeImage: objectRemovalBefore, afterImage: objectRemovalAfter },
        { id: 'object-2', beforeImage: objectRemovalBefore, afterImage: objectRemovalAfter },
        { id: 'object-3', beforeImage: objectRemovalBefore, afterImage: objectRemovalAfter },
        { id: 'object-4', beforeImage: objectRemovalBefore, afterImage: objectRemovalAfter },
      ],
    },
    {
      id: 'staging',
      title: 'Virtual Staging and Renovations',
      images: [
        { id: 'staging-1', beforeImage: virtualStagingBefore, afterImage: virtualStagingAfter },
        { id: 'staging-2', beforeImage: virtualStagingBefore, afterImage: virtualStagingAfter },
        { id: 'staging-3', beforeImage: virtualStagingBefore, afterImage: virtualStagingAfter },
        { id: 'staging-4', beforeImage: virtualStagingBefore, afterImage: virtualStagingAfter },
      ],
    },
    {
      id: 'sky',
      title: 'Sky Replacement',
      images: [
        { id: 'sky-1', beforeImage: skyBefore, afterImage: skyAfter },
        { id: 'sky-2', beforeImage: skyBefore, afterImage: skyAfter },
        { id: 'sky-3', beforeImage: skyBefore, afterImage: skyAfter },
        { id: 'sky-4', beforeImage: skyBefore, afterImage: skyAfter },
      ],
    },
    {
      id: 'flambient',
      title: 'Flambient Photo Editing',
      images: [
        { id: 'flambient-1', beforeImage: flabientBefore, afterImage: flabientAfter },
        { id: 'flambient-2', beforeImage: flabientBefore, afterImage: flabientAfter },
        { id: 'flambient-3', beforeImage: flabientBefore, afterImage: flabientAfter },
        { id: 'flambient-4', beforeImage: flabientBefore, afterImage: flabientAfter },
      ],
    },
    {
      id: 'aerial',
      title: 'Aerial Photo Editing',
      images: [
        { id: 'aerial-1', beforeImage: arielBefore, afterImage: arielAfter },
        { id: 'aerial-2', beforeImage: arielBefore, afterImage: arielAfter },
        { id: 'aerial-3', beforeImage: arielBefore, afterImage: arielAfter },
        { id: 'aerial-4', beforeImage: arielBefore, afterImage: arielAfter },
      ],
    },
  ];

  return (
    <Content>
      {/* Hero Section */}
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
              See the Power of Professional Real Estate Editing
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
              Watch ordinary property photos transform into stunning, market-ready visuals. Explore our before-and-after
              gallery and discover how expert editing increases appeal, grabs attention, and helps properties sell faster.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Gallery Sections by Service */}
      {serviceGalleries.map((service, serviceIndex) => (
        <AnimatedSection key={service.id} delayMs={Math.min(240, serviceIndex * 60)} yOffset={22}>
          <section
            style={{
              background: serviceIndex % 2 === 0 ? '#fff' : '#f8fafc',
              padding: '40px 20px',
            }}
          >
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div style={{ marginBottom: '48px' }}>
                <h2
                  style={{
                    fontSize: 'clamp(28px, 4vw, 30px)',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '-40px',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h2>
              </div>

              <Row gutter={[24, 24]}>
                {service.images.map((image) => (
                  <Col key={image.id} xs={24} sm={12} lg={6}>
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
                      <div style={{ height: '280px', overflow: 'hidden', borderRadius: '12px', position: 'relative' }}>
                        <BeforeAfterSlider beforeImage={image.beforeImage} afterImage={image.afterImage} />
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </section>
        </AnimatedSection>
      ))}
    </Content>
  );
};

export default Gallery;