
import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, style, className, width, height, objectFit }) => {
  // Combine passed styles with explicit props for sizing and fit.
  const imageStyles = {
    ...style,
    width: width || '100%',
    height: height || 'auto',
    objectFit: objectFit || 'cover',
  };

  return (
    <img
      src={src}
      alt={alt}
      style={imageStyles}
      className={className}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  objectFit: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  style: {},
  className: '',
};

export default Image;