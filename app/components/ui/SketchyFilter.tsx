import React from 'react';

const SketchyFilter = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <filter id="sketchy-filter">
      <feTurbulence type="fractalNoise" baseFrequency="0.02 0.08" numOctaves="4" seed="2" stitchTiles="no-stitch" result="turbulence" />
      <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="8" xChannelSelector="R" yChannelSelector="B" result="displacement" />
    </filter>
  </svg>
);

export default SketchyFilter; 