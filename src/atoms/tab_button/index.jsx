import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const TabButton = ({ tab, label, active, onClick }) => {
  return (
    <button
      data-tab={ tab }
      className={active ? 'tab-button tab-button--active' : 'tab-button'}
      onClick={(e) => onClick(e)}
    >
      { label }
      <span className="tab-button__border"></span>
    </button>
  );
};

TabButton.propTypes = {
  tab: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabButton;
