import React from 'react';

import Title from './../../atoms/title/index';
import Text from './../../atoms/text/index';
import { MapMarker, Calendar, Clock } from './../../libraries/icons/index';

import './styles.scss';

const ObservationCard = ({ title, organism, date, duration, location, image }) => {

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
            content={ `${organism.title}, ${organism.name}` }
            size="sm"
          />
        </span>
        <span className="observation-card__duration">
          <Clock />
          <Title
            tag="h5"
            colour="dark"
            children={ duration }
            margin="no-margin"
          />
        </span>
      </div>
    </a>
  )
};

export default ObservationCard;
