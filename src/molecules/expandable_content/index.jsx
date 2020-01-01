import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Plus, Minus } from './../../libraries/icons/index';

import Text from './../../atoms/text/index';

import './styles.scss';

const ExpandableContent = ({ title, content, isToggled }) => {
  const [isOpen, setIsOpen] = useState(isToggled);

  return(
    <div className={isOpen ? 'expandable-content expandable-content--open' : 'expandable-content'}>
      <div className="expandable-content__title" onClick={ () => setIsOpen(!isOpen) }>
        <span className="expandable-content__icon">
          { isOpen ? <Minus /> : <Plus/> }
        </span>
        <Text
          content={ title }
          weight="bold"
        />
      </div>
      <div className="expandable-content__content">
        { content }
      </div>
    </div>
  )
};

ExpandableContent.defaultProps = {
  isToggled: false
};

ExpandableContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isToggled: PropTypes.bool,
};

export default ExpandableContent;
