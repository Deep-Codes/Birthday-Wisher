import React from 'react';
import { T } from '@tolgee/react';

const Wish = ({ name }) => {
  return (
    <div className='wish-message'>
      
<T keyName="happy-birthday-message" params={{ name: name.toUpperCase() }} />
    </div>
  );
};

export default Wish;

