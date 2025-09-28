'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseProps {
  slot: string;
  style?: React.CSSProperties;
}

const AdSense = ({ slot, style }: AdSenseProps) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
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
