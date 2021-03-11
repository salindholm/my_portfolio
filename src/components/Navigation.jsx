import React from 'react';
import content from '../content';

const Navigation = () => {
  return (
    <div style={{ background: '#091c29' }}>
      <div className='flex items-center justify-between w-10/12 mx-auto py-3'>
        <h1>{content.nav.logo}</h1>
        <div>
          {content.nav.links.map((link, index) => {
            return <span>{link.text}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
