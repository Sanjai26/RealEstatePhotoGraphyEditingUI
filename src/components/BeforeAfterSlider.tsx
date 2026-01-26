import React, { useState, useRef, useCallback } from "react";
import "./styles.css";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    updateSliderPosition(e.touches[0].clientX);
  }, [updateSliderPosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    updateSliderPosition(e.touches[0].clientX);
  }, [updateSliderPosition]);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="before-after-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before Image (Right side - visible when slider moves left) */}
      <img
        src={beforeImage}
        alt="Before"
        className="before-after-image"
        draggable={false}
      />

      {/* After Image (Left side - clipped by slider) */}
      <div
        className="before-after-overlay"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="before-after-image"
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div
        className="before-after-slider-line"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="before-after-slider-handle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 5L3 12L8 19" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 5L21 12L16 19" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="before-after-label before-label">BEFORE</div>
      <div className="before-after-label after-label">AFTER</div>
    </div>
  );
};

export default BeforeAfterSlider;
