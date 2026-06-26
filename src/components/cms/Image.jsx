import React from 'react';

const Image = ({ src, alt = '', style, className, width, height, objectFit }) => {
  const imageStyles = { ...style, width: width || '100%', height: height || 'auto', objectFit: objectFit || 'cover' };
  return <img src={src} alt={alt} style={imageStyles} className={className} />;
};

export default Image;