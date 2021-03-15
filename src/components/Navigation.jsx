import React from 'react';
import content from '../content';
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  return (
    <div
      style={{
        background: 'black',
      }}
      className="font-dosis fixed top-0 w-screen z-40"
    >
      <div className='flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis'>
        <ScrollLink
          to='header'
          smooth={true}
          className='text-3xl  font-bold text-white flex-1 cursor-pointer'
        >
          <h1 className='text-3xl font-bold'>
            {content.nav.logo}{' '}
            <span className='w-3 h-3 bg-regal-orange inline-block rounded-full'></span>
          </h1>
        </ScrollLink>
        <div className='text-2xl'>
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span key={index} className='mr-4 cursor-pointer'>
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
