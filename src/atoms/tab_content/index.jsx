import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const TabContent = ({ tab, content, active }) => {
  return(
    <div data-tab={tab} className={active ? 'tab-content tab-content--active' : 'tab-content'}>
      { content }
    </div>
  );
};

TabContent.propTypes = {
  tab: PropTypes.any.isRequired,
  content: PropTypes.any.isRequired,
  active: PropTypes.bool.isRequired
};

export default TabContent;
