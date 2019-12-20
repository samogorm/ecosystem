import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';

library.add(faChevronDown)

export const ChevronDown = () => (<FontAwesomeIcon icon={ faChevronDown } />);
