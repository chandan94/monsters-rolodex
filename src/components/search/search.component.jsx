import React from 'react';

export const Search = ({placeholder, handleChange}) => {
   return (   
       <div>
            <input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
       </div>
   );
}