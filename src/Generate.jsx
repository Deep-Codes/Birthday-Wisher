import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { T, useTranslate } from '@tolgee/react';

const Generate = () => {
  const { t } = useTranslate();
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
      <h1>
<T keyName="generate-title" /></h1>
      <div className='form'>
        <input
          type='text'
          placeholder={
t('enter-name-placeholder')}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          placeholder={
t('enter-day-placeholder')}
          value={day}
          onChange={(e) => setDay(e.target.value)}
          max={31}
          min={1}
        />
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value=''>
<T keyName="select-month" /></option>
          <option selected value='1'>
            
<T keyName="january-option" />
          </option>
          <option value='2'>
<T keyName="february-option" /></option>
          <option value='3'>
<T keyName="march-option" /></option>
          <option value='4'>
<T keyName="april-option" /></option>
          <option value='5'>
<T keyName="may-option" /></option>
          <option value='6'>
<T keyName="june-option" /></option>
          <option value='7'>
<T keyName="july-option" /></option>
          <option value='8'>
<T keyName="august-option" /></option>
          <option value='9'>
<T keyName="september-option" /></option>
          <option value='10'>
<T keyName="october-option" /></option>
          <option value='11'>
<T keyName="november-option" /></option>
          <option value='12'>
<T keyName="december-option" /></option>
        </select>
      </div>
      <button className='btn' onClick={() => generateLink()}>
        
<T keyName="generate-link-button" />
      </button>

      {link !== '' ? (
        <>
          <p className='gen-link'>{link}</p>
          <Link to={`birthday/${name}/${day}/${month}`}>
            <button className='btn'>
<T keyName="visit-link-button" /></button>
          </Link>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Generate;
