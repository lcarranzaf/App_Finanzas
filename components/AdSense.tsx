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
  const [mounted, setMounted] = useState(false);
  const [viewportSize, setViewportSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    setMounted(true);
    
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
    if (!mounted) return;

    let mountedEffect = true;

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

    if (!pushAd()) {
      let attempts = 0;
      const id = setInterval(() => {
        if (!mountedEffect) return clearInterval(id);
        attempts += 1;
        if (pushAd() || attempts >= 10) clearInterval(id);
      }, 300);
      
      return () => {
        clearInterval(id);
        mountedEffect = false;
      };
    }

    return () => {
      mountedEffect = false;
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
  }, [slot, mounted]);

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

  const adFormat = mounted ? getAdFormat() : 'auto';

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
