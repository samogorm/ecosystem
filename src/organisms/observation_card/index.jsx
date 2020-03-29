import React from 'react';

import Title from './../../atoms/title/index';
import Text from './../../atoms/text/index';
import Tooltip from './../../atoms/tooltip/index';
import Image from './../../atoms/image/index';
import { MapMarker, Calendar, Clock, Ellipsis, Info, Paw } from './../../libraries/icons/index';

import './styles.scss';

const ObservationCard = ({
  id,
  author,
  title,
  excerpt,
  organism,
  date,
  duration,
  location,
  image
}) => {

  const ImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '14rem',
    width: '100%'
  };

  return (
    <a className="observation-card">
      <div className="observation-card__header">
        <div className="observation-card__author">
          <Image
            src={ author.image }
            label={ `${author.name} profile picture.` }
            size="xs"
            shape="circle"
          />
          { author.username }
        </div>
        <button className="observation-card__menu-toggle" onClick={() => console.log('clicked')}>
          <Ellipsis />
        </button>
      </div>
      <div className="observation-card__image">
        <Image
          src={ image }
          label={ `Picture of ${ organism.title }.`}
        />
      </div>
      <div className="observation-card__footer">
        <div className="observation-card__info">
          <span className="observation-card__location observation-card__tooltip">
            <MapMarker />
            <Tooltip
              content={ location }
              backgroundColour="bg-primary"
              fontColour="white"
            />
          </span>
          <span className="observation-card__date observation-card__tooltip">
            <Calendar />
            <Tooltip
              content={ date }
              backgroundColour="bg-primary"
              fontColour="white"
            />
          </span>
          <span className="observation-card__duration observation-card__tooltip">
            <Clock />
            <Tooltip
              content={ duration }
              backgroundColour="bg-primary"
              fontColour="white"
            />
          </span>
          <span className="observation-card__organism observation-card__tooltip">
            <Paw />
            <Tooltip
              content={ organism.title }
              backgroundColour="bg-primary"
              fontColour="white"
            />
          </span>
        </div>
        <div className="observation-card__title">
          <strong className="observation-card__title-name"> {title} </strong>
          <p>{excerpt}</p>
        </div>
      </div>
    </a>
  );
}

//   return(
//     <a className="observation-card">
//       <figure className="observation-card__image" style={ ImageStyle }>
//         <div className="observation-card__image-info">
//           <span className="observation-card__date">
//             <Calendar />
//             <Title
//               tag="h5"
//               colour="white"
//               children={ date }
//               margin="no-margin"
//             />
//           </span>
//           <span className="observation-card__location">
//             <MapMarker />
//             <Title
//               tag="h5"
//               colour="white"
//               children={ location }
//               margin="no-margin"
//             />
//           </span>
//         </div>

//         <div class="observation-card__tooltips">
          // <span className="observation-card__duration observation-card__tooltip">
          //   <Clock />
          //   <Tooltip
          //     content={duration}
          //     backgroundColour="bg-primary"
          //     fontColour="white"
          //   />
          // </span>
          // <span className="observation-card__organism observation-card__tooltip">
          //   <Paw />
          //   <Tooltip
          //     content={organism.title}
          //     backgroundColour="bg-primary"
          //     fontColour="white"
          //   />
          // </span>
//         </div>
//       </figure>
//       <div className="observation-card__footer">
//         <span className="observation-card__title">
//           <Title
//             tag="h3"
//             colour="dark"
//             children={ title }
//             margin="xs-margin"
//           />
//           <Text
//             content={ `${excerpt}...` }
//             size="sm"
//             colour="metal"
//           />
//         </span>
//         <div class="observation-card__actions">
//           <button className="observation-card__menu-toggle" onClick={() => console.log('clicked')}>
//             <Ellipsis />
//           </button>
//         </div>
//       </div>
//     </a>
//   )
// };

export default ObservationCard;
