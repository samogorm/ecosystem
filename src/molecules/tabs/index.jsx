import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TabButton from './../../atoms/tab_button/index';
import TabContent from './../../atoms/tab_content/index';

import './styles.scss';

const Tabs = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
 
  return(
    <div className="tabs">
      <div className="tabs__navigator">
        {tabs.map(tab => 
          <TabButton
            tab={ tab.id }
            label={ tab.title }
            active={tab.id == activeTab }
            onClick={(e) => setActiveTab(event.target.dataset.tab)}
          />
        )}
      </div>
      <div className="tabs__content-wrapper">
        {tabs.map(tab =>
          <TabContent
            tab={ tab.id }
            content={ tab.content }
            active={ tab.id == activeTab }
          />
        )}
      </div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultTab: "1"
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  defaultTab: PropTypes.string
};

export default Tabs;
