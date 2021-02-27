import React, { useState } from 'react';

const Generate = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [link, setLink] = useState('');
  const generateLink = () => {
    setLink(`http://localhost:3000/birthday/${name}/${day}/${month}`);
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
        />
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value=''>Select Month</option>
          <option selected value='1'>
            January
          </option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
      </div>
      <button className='btn' onClick={() => generateLink()}>
        Generate Link
      </button>
      {link !== '' ? link : ''}
    </div>
  );
};

export default Generate;
