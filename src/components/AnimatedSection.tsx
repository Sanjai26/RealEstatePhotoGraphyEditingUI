import React from 'react';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delayMs?: number;
  durationMs?: number;
  yOffset?: number;
  once?: boolean;
};

const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', update);
      return () => mediaQuery.removeEventListener('change', update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  return prefersReducedMotion;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  style,
  delayMs = 0,
  durationMs = 650,
  yOffset = 22,
  once = true,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(prefersReducedMotion);

  React.useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) setIsVisible(true);
  }, [prefersReducedMotion]);

  React.useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, prefersReducedMotion]);

  const transition = prefersReducedMotion
    ? undefined
    : `opacity ${durationMs}ms ease ${delayMs}ms, transform ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : `translate3d(0, ${yOffset}px, 0)`,
        transition,
        willChange: prefersReducedMotion ? undefined : 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
