'use client';

import { useEffect, useRef, useState } from 'react';

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
  const pushedRef = useRef(false);

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

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const pushAd = () => {
      if (pushedRef.current) return true;
      try {
        if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
          window.adsbygoogle.push({});
          pushedRef.current = true;
          return true;
        }
        return false;
      } catch (e) {
        console.debug('AdSense push failed, will retry:', e);
        return false;
      }
    };

    const startPush = () => {
      if (!pushAd()) {
        let attempts = 0;
        intervalId = setInterval(() => {
          attempts += 1;
          if (pushAd() || attempts >= 10) {
            if (intervalId) clearInterval(intervalId);
          }
        }, 300);
      }
    };

    const selector = `[data-ad-slot="${slot}"]`;
    const element = document.querySelector(selector);

    if (!element) {
      startPush();
      return () => { if (intervalId) clearInterval(intervalId); };
    }

    // Lazy loading: el anuncio se empuja solo cuando entra al viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          startPush();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
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

  // Don't render <ins> during SSR or first client render.
  // Ad blockers remove <ins class="adsbygoogle"> from the DOM before React
  // hydrates, which causes hydration mismatch errors (#418/#425).
  // Rendering only after mount means hydration completes first, then the ad
  // element is inserted client-side where the ad blocker can remove it safely.
  if (!mounted) {
    return <div className={`ad-container ${className || ''}`} style={{ minHeight: '90px', margin: '20px 0' }} />;
  }

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
