import React, { useState, useMemo } from 'react';
import { Layout, Row, Col, Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import img_hero from '../assets/images/Gallery_Hero_img.jpg';
import AnimatedSection from '../components/AnimatedSection';

const { Content } = Layout;

// Dynamically import all images from gallery folder
const galleryImages = import.meta.glob('../assets/gallery/images/*.jpg', { eager: true }) as Record<
  string,
  { default: string }
>;

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  // Convert imported images to an array and sort them
  const allImages = useMemo(() => {
    return Object.entries(galleryImages)
      .map(([path, module]) => ({
        id: path.split('/').pop()?.replace('.jpg', '') || path,
        src: module.default,
      }))
      .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  }, []);

  // Paginate the images
  const startIndex = (currentPage - 1) * imagesPerPage;
  const paginatedImages = allImages.slice(startIndex, startIndex + imagesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to gallery section
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .ant-pagination-item-link {
          color: #f97316 !important;
        }
      `}</style>
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

      {/* Gallery Grid Section with Pagination */}
      <AnimatedSection yOffset={22}>
        <section style={{ background: '#fff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '16px',
                  lineHeight: 1.3,
                }}
              >
                Gallery Collection
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: '#64748b',
                  margin: 0,
                }}
              >
                Showing {startIndex + 1} - {Math.min(startIndex + imagesPerPage, allImages.length)} of {allImages.length}
                images
              </p>
            </div>

            {/* Images Grid - Only loading 10 at a time */}
            <Row gutter={[24, 24]} style={{ marginBottom: '40px' }}>
              {paginatedImages.map((image) => (
                <Col key={image.id} xs={24} sm={12} lg={8} xl={6}>
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      paddingBottom: '100%',
                      overflow: 'hidden',
                      borderRadius: '12px',
                      background: '#f0f0f0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const element = e.currentTarget;
                      element.style.transform = 'scale(1.05)';
                      element.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      const element = e.currentTarget;
                      element.style.transform = 'scale(1)';
                      element.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.id}
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', position: 'relative', zIndex: 10 }}>
              <Pagination
                current={currentPage}
                total={allImages.length}
                pageSize={imagesPerPage}
                onChange={handlePageChange}
                itemRender={(page, type, originalElement) => {
                  if (type === 'page') {
                    return (
                      <a
                        style={{
                          color: currentPage === page ? '#fff' : '#333',
                          background: currentPage === page ? '#f97316' : '#e0e0e0',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          display: 'inline-block',
                          minWidth: '32px',
                          textAlign: 'center',
                          fontWeight: currentPage === page ? 600 : 400,
                          border: currentPage === page ? 'none' : '1px solid #ccc',
                        }}
                      >
                        {page}
                      </a>
                    );
                  }
                  if (type === 'prev' || type === 'next') {
                    return (
                      <a
                        style={{
                          color: '#f97316',
                          background: '#e0e0e0',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          display: 'inline-block',
                          fontWeight: 600,
                          fontSize: '16px',
                        }}
                      >
                        {originalElement}
                      </a>
                    );
                  }
                  return originalElement;
                }}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Results & Impact Section */}
      <AnimatedSection delayMs={60} yOffset={24}>
        <section style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', padding: '60px 20px', color: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '50px',
                lineHeight: 1.3,
                textAlign: 'center',
              }}
            >
              Real Results, Real Impact
            </h2>
            <Row gutter={[48, 48]} style={{ textAlign: 'center' }}>
              {[
                {
                  stat: '50,000+',
                  label: 'Photos Enhanced',
                  description: 'Professional edits delivered to satisfied clients worldwide',
                },
                {
                  stat: '2,500+',
                  label: 'Happy Clients',
                  description: 'Agents, brokers, photographers, and property owners',
                },
                {
                  stat: '24 Hrs',
                  label: 'Average Turnaround',
                  description: 'Fast delivery without compromising on quality',
                },
                {
                  stat: '99.98%',
                  label: 'On-Time Delivery',
                  description: 'Industry-leading reliability you can count on',
                },
              ].map((item, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <div>
                    <div
                      style={{
                        fontSize: 'clamp(40px, 6vw, 56px)',
                        fontWeight: 800,
                        marginBottom: '12px',
                        color: '#fff',
                      }}
                    >
                      {item.stat}
                    </div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        marginBottom: '8px',
                        color: '#fff',
                      }}
                    >
                      {item.label}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </AnimatedSection>

      {/* Service Features Section */}
      <AnimatedSection delayMs={120} yOffset={22}>
        <section style={{ background: '#fff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '16px',
                lineHeight: 1.3,
                textAlign: 'center',
              }}
            >
              What You Get With Every Edit
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
              Our comprehensive editing service includes everything you need for market-ready property photos
            </p>
            <Row gutter={[32, 32]}>
              {[
                {
                  icon: '✓',
                  title: 'Professional Color Grading',
                  description: 'Enhanced colors, perfect white balance, and optimal contrast for vibrant, appealing images',
                },
                {
                  icon: '✓',
                  title: 'Exposure & Lighting Adjustment',
                  description: 'Perfect balance of highlights and shadows to showcase every detail of the property',
                },
                {
                  icon: '✓',
                  title: 'Perspective & Distortion Correction',
                  description: 'Straightened lines and corrected angles for professional, architectural-quality images',
                },
                {
                  icon: '✓',
                  title: 'Object Removal & Addition',
                  description: 'Remove distractions or add enhancements seamlessly and naturally',
                },
                {
                  icon: '✓',
                  title: 'Virtual Staging',
                  description: 'Transform empty rooms into beautifully furnished spaces that sell faster',
                },
                {
                  icon: '✓',
                  title: 'MLS & Web Optimization',
                  description: 'Delivered in all formats perfect for MLS, websites, social media, and print',
                },
              ].map((feature, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <div
                    style={{
                      padding: '24px',
                      background: 'linear-gradient(135deg, #fff8f3 0%, #ffe8d6 100%)',
                      borderRadius: '12px',
                      borderLeft: '4px solid #f97316',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '28px',
                        color: '#f97316',
                        fontWeight: 700,
                        marginBottom: '12px',
                      }}
                    >
                      {feature.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: '8px',
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                      {feature.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </AnimatedSection>

      {/* Before & After Benefits Section */}
      <AnimatedSection delayMs={160} yOffset={24}>
        <section style={{ background: '#f8fafc', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '50px',
                lineHeight: 1.3,
                textAlign: 'center',
              }}
            >
              Why Professional Editing Matters
            </h2>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} md={12}>
                <div>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      marginBottom: '24px',
                    }}
                  >
                    The Impact of Quality Editing
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      'First impressions matter - buyers decide within seconds',
                      'Professional photos receive 8x more clicks and inquiries',
                      'Better visuals lead to faster sales and higher offers',
                      'Properties listed with enhanced photos sell 30% faster',
                      'Virtual staging adds perceived value without cost',
                      'Consistency across all platforms builds trust',
                    ].map((benefit, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            minWidth: '24px',
                            background: '#f97316',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '14px',
                            fontWeight: 600,
                          }}
                        >
                          ✓
                        </div>
                        <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div
                  style={{
                    background: '#fff',
                    padding: '40px',
                    borderRadius: '16px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#f97316',
                      marginBottom: '24px',
                    }}
                  >
                    Client Success Stories
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      {
                        title: 'Faster Sales',
                        text: 'Properties with professional photos sell 30% faster on average',
                      },
                      {
                        title: 'Higher Offers',
                        text: 'Enhanced photos result in offers 5-10% higher than non-edited listings',
                      },
                      {
                        title: 'More Inquiries',
                        text: 'Professional images generate 8x more clicks and buyer inquiries',
                      },
                    ].map((story, index) => (
                      <div key={index}>
                        <p
                          style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#1a1a1a',
                            marginBottom: '6px',
                          }}
                        >
                          {story.title}
                        </p>
                        <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                          {story.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection delayMs={200} yOffset={24}>
        <section
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            padding: '80px 20px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              Ready to Transform Your Listings?
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '40px',
                lineHeight: 1.7,
              }}
            >
              See how professional editing can make your property photos stand out. Start your free trial with 3 complimentary
              image enhancements today.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                style={{
                  padding: '14px 40px',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(249, 115, 22, 0.4)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(249, 115, 22, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(249, 115, 22, 0.4)';
                }}
                onClick={() => navigate('/#free-trial')}
              >
                Start Free Trial
              </button>
              <button
                style={{
                  padding: '14px 40px',
                  background: 'transparent',
                  color: '#fff',
                  border: '2px solid #fff',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
                onClick={() => navigate('/services#pricing')}
              >
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Content>
    </>
  );
};

export default Gallery;