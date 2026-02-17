'use client';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSenseProps {
  slot: string;
  style?: React.CSSProperties;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  className?: string;
}

const AdSense = ({ slot, style, format = 'auto', className }: AdSenseProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [viewportSize, setViewportSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    // Detect viewport size for dynamic ad formats
    const updateViewportSize = () => {
      const width = window.innerWidth;
      if (width < 640) setViewportSize('mobile');
      else if (width < 1024) setViewportSize('tablet');
      else setViewportSize('desktop');
    };

    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);

    return () => window.removeEventListener('resize', updateViewportSize);
  }, []);

  useEffect(() => {
    let mounted = true;

    const pushAd = () => {
      try {
        if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
          window.adsbygoogle.push({});
          return true;
        }
        return false;
      } catch (e) {
        console.debug('AdSense push failed, will retry:', e);
        return false;
      }
    };

    // Try to push ad immediately (even if not visible yet)
    if (!pushAd()) {
      let attempts = 0;
      const id = setInterval(() => {
        if (!mounted) return clearInterval(id);
        attempts += 1;
        if (pushAd() || attempts >= 10) clearInterval(id);
      }, 300);
      
      return () => {
        clearInterval(id);
        mounted = false;
      };
    }

    return () => {
      mounted = false;
    };
  }, []);

  // Use Intersection Observer only for analytics/lazy loading, not for ad initialization
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const selector = `[data-ad-slot="${slot}"]`;
    const element = document.querySelector(selector);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [slot]);

  // Dynamic format based on viewport and prop
  const getAdFormat = () => {
    if (format !== 'auto') return format;

    switch (viewportSize) {
      case 'mobile':
        return 'vertical';
      case 'tablet':
        return 'rectangle';
      case 'desktop':
        return 'horizontal';
      default:
        return 'auto';
    }
  };

  const adFormat = getAdFormat();

  return (
    <div className={`ad-container ${className || ''}`}>
      <ins
        className="adsbygoogle"
        style={style || {
          display: 'block',
          textAlign: 'center',
          margin: '20px 0',
          minHeight: adFormat === 'vertical' ? '250px' : '90px'
        }}
        data-ad-client="ca-pub-4657042320327960"
        data-ad-slot={slot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSense;
