'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle?: { push: (config: object) => void } | unknown[];
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
  const [unfilled, setUnfilled] = useState(false);
  const pushedRef = useRef(false);
  const insRef = useRef<HTMLModElement>(null);

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
        const ags = window.adsbygoogle;
        if (ags && typeof (ags as { push: (c: object) => void }).push === 'function') {
          (ags as { push: (c: object) => void }).push({});
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

    // Detectar unfilled: AdSense pone data-ad-status="unfilled" cuando no hay anuncio
    const statusObserver = new MutationObserver(() => {
      if (element.getAttribute('data-ad-status') === 'unfilled') {
        setUnfilled(true);
      }
    });
    statusObserver.observe(element, { attributes: true, attributeFilter: ['data-ad-status'] });

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
      statusObserver.disconnect();
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

  const adFormat = getAdFormat();

  const getMinHeight = (fmt: string) => {
    if (fmt === 'vertical') return '600px';
    if (fmt === 'rectangle') return '280px';
    if (fmt === 'horizontal') return '100px';
    return '280px'; // auto
  };

  // Ocultar completamente cuando AdSense confirma que no hay anuncio
  if (unfilled) return null;

  if (!mounted) {
    return <div className={`ad-container ${className || ''}`} style={{ width: '100%', minHeight: getMinHeight(adFormat), margin: '20px 0' }} />;
  }

  return (
    <div className={`ad-container ${className || ''}`} style={{ width: '100%', minHeight: getMinHeight(adFormat), margin: '20px 0' }}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={style || {
          display: 'block',
          textAlign: 'center',
          minHeight: getMinHeight(adFormat),
          width: '100%',
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
