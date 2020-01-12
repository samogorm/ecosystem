import React from 'react';

import Title from './../../atoms/title/index';
import Text from './../../atoms/text/index';
import Tooltip from './../../atoms/tooltip/index';
import { MapMarker, Calendar, Clock, Ellipsis, Info, Paw } from './../../libraries/icons/index';

import './styles.scss';

const ObservationCard = ({ title, excerpt, organism, date, duration, location, image }) => {

  const ImageStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.73)), url(${image})`,
    backgroundSize: 'cover',
    borderRadius: '0.4rem 0.4rem 0 0',
    height: '14rem'
  };
  
  return(
    <a className="observation-card">
      <figure className="observation-card__image" style={ ImageStyle }>
        <div className="observation-card__image-info">
          <span className="observation-card__date">
            <Calendar />
            <Title
              tag="h5"
              colour="white"
              children={ date }
              margin="no-margin"
            />
          </span>
          <span className="observation-card__location">
            <MapMarker />
            <Title
              tag="h5"
              colour="white"
              children={ location }
              margin="no-margin"
            />
          </span>
        </div>

        <div class="observation-card__tooltips">
          <span className="observation-card__duration observation-card__tooltip">
            <Clock />
            <Tooltip
              content={duration}
              backgroundColour="bg-primary"
              fontColour="white"
            />
          </span>
          <span className="observation-card__organism observation-card__tooltip">
            <Paw />
            <Tooltip
              content={organism.title}
              backgroundColour="bg-primary"
              fontColour="white"
            />
          </span>
        </div>
      </figure>
      <div className="observation-card__footer">
        <span className="observation-card__title">
          <Title
            tag="h3"
            colour="dark"
            children={ title }
            margin="xs-margin"
          />
          <Text
            content={ `${excerpt}...` }
            size="sm"
            colour="metal"
          />
        </span>
        <div class="observation-card__actions">
          <button className="observation-card__menu-toggle" onClick={() => console.log('clciked')}>
            <Ellipsis />
          </button>
        </div>
      </div>
    </a>
  )
};

export default ObservationCard;
