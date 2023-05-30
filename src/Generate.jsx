import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Generate = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [link, setLink] = useState('');
  const generateLink = () => {
    setLink(
      `https://birthday-wisher.netlify.app/birthday/${name}/${day}/${month}`
    );
  };
  return (
    <div className='page'>
      <h1>Generate Here</h1>
      <div className='form'>
        <input
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          placeholder='Enter Day'
          value={day}
          onChange={(e) => setDay(e.target.value)}
          max={31}
          min={1}
        />
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option className='item' value=''>Select Month</option>
          <option className='item' selected value='1'>January</option>
          <option className='item' value='2'>February</option>
          <option className='item' value='3'>March</option>
          <option className='item' value='4'>April</option>
          <option className='item' value='5'>May</option>
          <option className='item' value='6'>June</option>
          <option className='item' value='7'>July</option>
          <option className='item' value='8'>August</option>
          <option className='item' value='9'>September</option>
          <option className='item' value='10'>October</option>
          <option className='item' value='11'>November</option>
          <option className='item' value='12'>December</option>
        </select>
      </div>
      <button className='btn' onClick={() => generateLink()}>
        Generate Link
      </button>

      {link !== '' ? (
        <>
          <p className='gen-link'>{link}</p>
          <Link to={`birthday/${name}/${day}/${month}`}>
            <button className='btn'>Visit Link</button>
          </Link>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Generate;
