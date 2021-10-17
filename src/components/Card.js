import React, { useState } from 'react';
import Star from '../assets/star.png';

const Card = ({
  Photo,
  Ratings,
  Name,
  Position,
  Title,
  Review,
  Companylogo,
  Service,
  cardColor,
  avatarShape,
  nameColor,
  nameSize,
  positionColor,
  positionSize,
  titleSize,
  titleColor,
  reviewSize,
  reviewColor,
  serviceColor,
  serviceSize,
  fontname,
}) => {
  const [readMore, setReadMore] = useState(false);
  const Stars = [];
  const star = Ratings === undefined ? '' : Ratings.slice(0, 1);
  console.log(star);
  for (let i = 0; i < parseInt(star); i++) {
    Stars.push(<img className='star-row' src={Star} alt='' />);
  }
  return (
    <div
      className='endorsal-card'
      style={{ background: `${cardColor}`, fontFamily: `${fontname}` }}
    >
      {Photo === undefined ? (
        ''
      ) : Photo === '' ? (
        ''
      ) : (
        <div className='avatar-shape'>
          <img
            src={Photo}
            alt=''
            // className='avatar-shape'
            style={{
              borderRadius: `${
                avatarShape === 'Round'
                  ? '50%'
                  : avatarShape === 'Square'
                  ? '0%'
                  : '10%'
              }`,
            }}
          />
        </div>
      )}
      <div className='rating'>{Stars}</div>
      <h3
        className='name'
        style={{ fontSize: `${nameSize}px`, color: `${nameColor}` }}
      >
        {Name}
      </h3>
      <h4
        className='place'
        style={{ fontSize: `${positionSize}px`, color: `${positionColor}` }}
      >
        {Position}
      </h4>
      <h3 style={{ fontSize: `${titleSize}px`, color: `${titleColor}` }}>
        {Title}
      </h3>
      {Review === '' ? (
        ''
      ) : (
        <p style={{ fontSize: `${reviewSize}px`, color: `${reviewColor}` }}>
          {Review === undefined
            ? ''
            : readMore === false
            ? Review.slice(0, 100)
            : Review}
          <span>
            {Review === undefined ? (
              ''
            ) : Review.length < 100 ? (
              ''
            ) : readMore === true ? (
              ''
            ) : (
              <button onClick={() => setReadMore(true)}>Read More</button>
            )}
          </span>
        </p>
      )}
      {Companylogo === '' ? (
        ''
      ) : (
        <div className='logo'>
          <img src={Companylogo} alt='' />
        </div>
      )}
      <p
        className='review'
        style={{ fontSize: `${serviceSize}px`, color: `${serviceColor}` }}
      >
        {Service === undefined ? '' : `Review for ${Service}`}
      </p>
    </div>
  );
};

export default Card;
