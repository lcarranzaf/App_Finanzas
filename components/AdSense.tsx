'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSenseProps {
  slot: string;
  style?: React.CSSProperties;
}

const AdSense = ({ slot, style }: AdSenseProps) => {
  useEffect(() => {
    let mounted = true

    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
        return true
      } catch (e) {
        console.debug('AdSense push failed, will retry:', e)
        return false
      }
    }

    // Try immediately, then retry a few times if the script hasn't loaded yet
    if (!pushAd()) {
      let attempts = 0
      const id = setInterval(() => {
        if (!mounted) return clearInterval(id)
        attempts += 1
        if (pushAd() || attempts >= 5) clearInterval(id)
      }, 500)
    }

    return () => {
      mounted = false
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style || { display: 'block', textAlign: 'center', margin: '20px 0' }}
      data-ad-client="ca-pub-4657042320327960"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdSense;
