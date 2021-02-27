import React from 'react';
import Birthday from './Birthday';

const RouterBirthday = (props) => {
  const { params } = props.match;
  const { name, day, month } = params;
  return (
    <>
      <Birthday name={name} month={month} day={day} />
    </>
  );
};

export default RouterBirthday;
