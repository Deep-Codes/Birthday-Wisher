import React from 'react';
import Wish from './Wish';

const Countdown = ({ countdownData, name }) => {
   if (!name.trim()) {
    return (
      <div>
        <p className='error-message'>Please enter a valid name for the countdown.</p>
      </div>
    );
  }
  
  if (!countdownData.isItBday) {
    return (
      <div>
        <h1 className='heading'>
          Countdown to <span className='highlight'>{name}'s</span> Birthday
        </h1>
        <div className='countdown-wrapper'>
          <div className='countdown-box'>
            {countdownData.days}
            <span className='legend'>Days</span>
          </div>
          <div className='countdown-box'>
            {countdownData.hours}
            <span className='legend'>Hours</span>
          </div>
          <div className='countdown-box'>
            {countdownData.minutes}
            <span className='legend'>Minutes</span>
          </div>
          <div className='countdown-box'>
            {countdownData.seconds}
            <span className='legend'>Seconds</span>
          </div>
        </div>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
