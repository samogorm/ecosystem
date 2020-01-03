import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const TabContent = ({ tab, active }) => {
  return(
    <div data-tab={tab} className={active ? 'tab-content tab-content--active' : 'tab-content'}>
      Tab { tab }
    </div>
  );
};

export default TabContent;
