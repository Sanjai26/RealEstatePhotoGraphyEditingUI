import React from 'react';
import { Card } from 'antd';
import BeforeAfterSlider from './BeforeAfterSlider';

interface GalleryBeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  height?: string | number;
  id: string;
}

const GalleryBeforeAfterCard: React.FC<GalleryBeforeAfterCardProps> = ({
  beforeImage,
  afterImage,
  height = '280px',
  id,
}) => {
  return (
    <Card
      key={id}
      style={{
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        height: '75%',
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          height: height,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} />
      </div>
    </Card>
  );
};

export default GalleryBeforeAfterCard;
