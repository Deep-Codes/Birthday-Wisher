import React from 'react';
import { T } from '@tolgee/react';
import Wish from './Wish';

const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div>
        <h1 className='heading'>
          <T keyName="countdown-title" params={{ name: name }}>
            Countdown to <span className='highlight'>{name}'s</span> Birthday
          </T>
        </h1>
        <div className='countdown-wrapper'>
          <div className='countdown-box'>
            {countdownData.days}
            <span className='legend'>
<T keyName="countdown-days" /></span>
          </div>
          <div className='countdown-box'>
            {countdownData.hours}
            <span className='legend'>
<T keyName="countdown-hours" /></span>
          </div>
          <div className='countdown-box'>
            {countdownData.minutes}
            <span className='legend'>
<T keyName="countdown-minutes" /></span>
          </div>
          <div className='countdown-box'>
            {countdownData.seconds}
            <span className='legend'>
<T keyName="countdown-seconds" /></span>
          </div>
        </div>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
