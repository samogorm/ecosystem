import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Image = ({ src, label, size, shape }) => (<img src={src} alt={ label } className={`image image--${ size } image--${ shape }`} />);

Image.defaultProps = {
  size: 'original',
  shape: 'original'
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  shape: PropTypes.string
};

export default Image;
