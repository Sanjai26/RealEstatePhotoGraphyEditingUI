import React, { useState } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import img_hero from '../assets/images/aesthetic-summer-holidays.jpg';
import AnimatedSection from '../components/AnimatedSection';

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
  const [comparisonPositions, setComparisonPositions] = useState<Record<string, number>>({});

  const serviceGalleries: ServiceGallery[] = [
    {
      id: 'color',
      title: 'Image Enhancement and Color Correction',
      images: [
        { id: 'color-1', beforeImage: img_hero, afterImage: img_hero },
        { id: 'color-2', beforeImage: img_hero, afterImage: img_hero },
        { id: 'color-3', beforeImage: img_hero, afterImage: img_hero },
        { id: 'color-4', beforeImage: img_hero, afterImage: img_hero },
      ],
    },
    {
      id: 'perspective',
      title: 'Perspective Correction',
      images: [
        { id: 'perspective-1', beforeImage: img_hero, afterImage: img_hero },
        { id: 'perspective-2', beforeImage: img_hero, afterImage: img_hero },
        { id: 'perspective-3', beforeImage: img_hero, afterImage: img_hero },
        { id: 'perspective-4', beforeImage: img_hero, afterImage: img_hero },
      ],
    },
    {
      id: 'hdr',
      title: 'HDR Real Estate Photo Editing',
      images: [
        { id: 'hdr-1', beforeImage: img_hero, afterImage: img_hero },
        { id: 'hdr-2', beforeImage: img_hero, afterImage: img_hero },
        { id: 'hdr-3', beforeImage: img_hero, afterImage: img_hero },
        { id: 'hdr-4', beforeImage: img_hero, afterImage: img_hero },
      ],
    },
    {
      id: 'object',
      title: 'Object Removal/Addition',
      images: [
        { id: 'object-1', beforeImage: img_hero, afterImage: img_hero },
        { id: 'object-2', beforeImage: img_hero, afterImage: img_hero },
        { id: 'object-3', beforeImage: img_hero, afterImage: img_hero },
        { id: 'object-4', beforeImage: img_hero, afterImage: img_hero },
      ],
    },
    {
      id: 'staging',
      title: 'Virtual Staging and Renovations',
      images: [
        { id: 'staging-1', beforeImage: img_hero, afterImage: img_hero },
        { id: 'staging-2', beforeImage: img_hero, afterImage: img_hero },
        { id: 'staging-3', beforeImage: img_hero, afterImage: img_hero },
        { id: 'staging-4', beforeImage: img_hero, afterImage: img_hero },
      ],
    },
    {
      id: 'sky',
      title: 'Sky Replacement',
      images: [
        { id: 'sky-1', beforeImage: img_hero, afterImage: img_hero },
        { id: 'sky-2', beforeImage: img_hero, afterImage: img_hero },
        { id: 'sky-3', beforeImage: img_hero, afterImage: img_hero },
        { id: 'sky-4', beforeImage: img_hero, afterImage: img_hero },
      ],
    },
    {
      id: 'flambient',
      title: 'Flambient Photo Editing',
      images: [
        { id: 'flambient-1', beforeImage: img_hero, afterImage: img_hero },
        { id: 'flambient-2', beforeImage: img_hero, afterImage: img_hero },
        { id: 'flambient-3', beforeImage: img_hero, afterImage: img_hero },
        { id: 'flambient-4', beforeImage: img_hero, afterImage: img_hero },
      ],
    },
    {
      id: 'aerial',
      title: 'Aerial Photo Editing',
      images: [
        { id: 'aerial-1', beforeImage: img_hero, afterImage: img_hero },
        { id: 'aerial-2', beforeImage: img_hero, afterImage: img_hero },
        { id: 'aerial-3', beforeImage: img_hero, afterImage: img_hero },
        { id: 'aerial-4', beforeImage: img_hero, afterImage: img_hero },
      ],
    },
  ];

  React.useEffect(() => {
    const initialPositions: Record<string, number> = {};
    serviceGalleries.forEach((service) => {
      service.images.forEach((image) => {
        initialPositions[image.id] = 50;
      });
    });
    setComparisonPositions(initialPositions);
  }, []);

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
                {service.images.map((image) => {
                const position = comparisonPositions[image.id] ?? 50;
                const [isDragging, setIsDragging] = React.useState(false);

                const handleMouseDown = () => setIsDragging(true);

                const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                  if (!isDragging) return;

                  const rect = e.currentTarget.getBoundingClientRect();
                  const newPosition = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));

                  setComparisonPositions((prev) => ({
                    ...prev,
                    [image.id]: newPosition,
                  }));
                };

                const handleMouseUp = () => setIsDragging(false);

                React.useEffect(() => {
                  if (isDragging) {
                    window.addEventListener('mouseup', handleMouseUp);
                    return () => window.removeEventListener('mouseup', handleMouseUp);
                  }
                }, [isDragging]);

                return (
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
                      <div
                        style={{
                          position: 'relative',
                          height: '280px',
                          overflow: 'hidden',
                          userSelect: 'none',
                          cursor: isDragging ? 'grabbing' : 'grab',
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setIsDragging(false)}
                      >
                        {/* Before Image (Background) */}
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${image.beforeImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />

                        {/* After Image (Overlay) */}
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: `${position}%`,
                            height: '100%',
                            backgroundImage: `url(${image.afterImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'saturate(1.08) brightness(1.02)',
                            overflow: 'hidden',
                            pointerEvents: 'none',
                          }}
                        />

                        {/* Slider Handle */}
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: `${position}%`,
                            width: '3px',
                            height: '100%',
                            background: '#fff',
                            cursor: 'ew-resize',
                            transform: 'translateX(-50%)',
                            zIndex: 10,
                            boxShadow: '0 0 10px rgba(0,0,0,0.25)',
                            pointerEvents: 'none',
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              background: '#fff',
                              border: '3px solid #f97316',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                              cursor: 'ew-resize',
                              pointerEvents: 'none',
                            }}
                          >
                            <span style={{ fontSize: '14px', color: '#f97316', fontWeight: 700 }}>⟷</span>
                          </div>
                        </div>

                        {/* Labels */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            background: 'rgba(0,0,0,0.75)',
                            color: '#fff',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.3px',
                            zIndex: 5,
                            pointerEvents: 'none',
                          }}
                        >
                          BEFORE
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: 'rgba(249, 115, 22, 0.92)',
                            color: '#fff',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.3px',
                            zIndex: 5,
                            pointerEvents: 'none',
                          }}
                        >
                          AFTER
                        </div>
                      </div>
                    </Card>
                  </Col>
                );
                })}
              </Row>
            </div>
          </section>
        </AnimatedSection>
      ))}
    </Content>
  );
};

export default Gallery;