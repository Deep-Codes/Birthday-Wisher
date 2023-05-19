import React from 'react';
import Birthday from './Birthday';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

const RouterBirthday = () => {
  const {name, month, day} = useParams('');
  console.log(name, month, day)
 // const { params } = props.match;
  //const { name, day, month } = params;
  return (
    <>
      <Birthday name={name} month={month} day={day} />
    </>
  );
};

export default RouterBirthday;
