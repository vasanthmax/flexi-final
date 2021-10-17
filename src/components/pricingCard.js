import React from 'react';
import Tick from '../assets/tick.png';

const PricingCard = ({
  planName,
  planPrice,
  planLink,
  planfeature1,
  planfeature2,
  planfeature3,
  planfeature4,
  planfeature5,
  PricingCardColor,
  PricingPlanColor,
  PricingPlanSize,
  PricingPriceColor,
  PricingPriceSize,
  PricingButtonColor,
  PricingButtonTextColor,
  PricingFeatureColor,
  PricingFeatureSize,
  PricingFont,
}) => {
  return (
    <div
      className='PricingCard'
      style={{
        background: `${PricingCardColor}`,
        fontFamily: `${PricingFont}`,
      }}
    >
      <h3
        className='plan-pricing'
        style={{
          fontSize: `${PricingPlanSize}px`,
          color: `${PricingPlanColor}`,
        }}
      >
        {planName}
      </h3>
      <h1
        className='price'
        style={{
          fontSize: `${PricingPriceSize}px`,
          color: `${PricingPriceColor}`,
        }}
      >
        {planPrice}
      </h1>
      {planLink === undefined ? (
        ''
      ) : (
        <a href={planLink}>
          <button
            style={{
              background: `${PricingButtonColor}`,
              color: `${PricingButtonTextColor}`,
            }}
          >
            Get Started
          </button>
        </a>
      )}
      <ul>
        {planfeature1 === undefined ? (
          ''
        ) : planfeature1 === '' ? (
          ''
        ) : (
          <li
            style={{
              fontSize: `${PricingFeatureSize}px`,
              color: `${PricingFeatureColor}`,
            }}
          >
            <span>
              <img src={Tick} alt='' className='ticker' />
            </span>{' '}
            {planfeature1}
          </li>
        )}
        {planfeature2 === undefined ? (
          ''
        ) : planfeature2 === '' ? (
          ''
        ) : (
          <li
            style={{
              fontSize: `${PricingFeatureSize}px`,
              color: `${PricingFeatureColor}`,
            }}
          >
            <span>
              <img src={Tick} alt='' className='ticker' />
            </span>{' '}
            {planfeature2}
          </li>
        )}
        {planfeature3 === undefined ? (
          ''
        ) : planfeature3 === '' ? (
          ''
        ) : (
          <li
            style={{
              fontSize: `${PricingFeatureSize}px`,
              color: `${PricingFeatureColor}`,
            }}
          >
            <span>
              <img src={Tick} alt='' className='ticker' />
            </span>{' '}
            {planfeature3}
          </li>
        )}
        {planfeature4 === undefined ? (
          ''
        ) : planfeature4 === '' ? (
          ''
        ) : (
          <li
            style={{
              fontSize: `${PricingFeatureSize}px`,
              color: `${PricingFeatureColor}`,
            }}
          >
            <span>
              <img src={Tick} alt='' className='ticker' />
            </span>{' '}
            {planfeature4}
          </li>
        )}
        {planfeature5 === undefined ? (
          ''
        ) : planfeature5 === '' ? (
          ''
        ) : (
          <li
            style={{
              fontSize: `${PricingFeatureSize}px`,
              color: `${PricingFeatureColor}`,
            }}
          >
            <span>
              <img src={Tick} alt='' className='ticker' />
            </span>{' '}
            {planfeature5}
          </li>
        )}
      </ul>
    </div>
  );
};

export default PricingCard;
