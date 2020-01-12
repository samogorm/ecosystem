import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faPlus,
  faMinus,
  faTimes,
  faMapMarkerAlt,
  faCalendarAlt,
  faClock
} from '@fortawesome/pro-regular-svg-icons';

library.add(faChevronDown)

export const ChevronDown = () => (<FontAwesomeIcon icon={ faChevronDown } />);
export const ChevronRight = () => (<FontAwesomeIcon icon={faChevronRight} />);
export const ChevronLeft = () => (<FontAwesomeIcon icon={faChevronLeft} />);
export const Plus = () => (<FontAwesomeIcon icon={faPlus} />);
export const Minus = () => (<FontAwesomeIcon icon={faMinus} />);
export const Times = () => (<FontAwesomeIcon icon={faTimes} />);
export const MapMarker = () => (<FontAwesomeIcon icon={faMapMarkerAlt} />);
export const Calendar = () => (<FontAwesomeIcon icon={faCalendarAlt} />);
export const Clock = () => (<FontAwesomeIcon icon={faClock} />);
