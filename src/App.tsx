import React, { Suspense, useEffect } from 'react';
import { ConfigProvider, Layout, Spin, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

// Lazy load pages for better performance and code splitting
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Loading component for page transitions
const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <Spin size="large" />
  </div>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

// Main App component with optimized structure
const App: React.FC = () => {
  return (
    <ConfigProvider 
      theme={{ 
        token: {
          colorPrimary: '#f97316', // Orange-500
          borderRadius: 8,
          colorBgContainer: 'rgba(255, 255, 255, 0.05)',
          colorBorder: 'rgba(255, 255, 255, 0.1)',
          colorText: 'rgba(255, 255, 255, 0.9)',
          fontSize: 16,
        },
        algorithm: theme.darkAlgorithm
      }}
    >
      <Router>
        <ScrollToTop />
        <Layout className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Header - Fixed positioning handled within component */}
          <Header />
          
          {/* Main Content Area */}
          <Layout className="bg-transparent">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Fallback route for 404 - redirects to home */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </Layout>

          {/* Footer */}
          <Footer />
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;