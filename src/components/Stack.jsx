import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import { Image } from 'semantic-ui-react';

const Stack = () => {
  return (
    <div
      className='min-h-screen flex items-center justify-center flex-col'
      style={{
        background: '#eee',
      }}
      id='mystack'
    >
      <h1 className='text-5xl font-dosis font-bold mb-10'>Stack I Use</h1>
      <div>
        <div className='flex flex-wrap justify-center'>
          {content.stack.tech.map((tech, index) => (
            <span
              key={index}
              className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
              }`}
            >
              <LazyLoadImage effect='blur' src={tech.img} alt={tech.alt} />
            </span>
          ))}
        </div>
      </div>
      <p className='mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis '>
        {content.stack.desc}.
      </p>
      <div
        style={{
          minHeight: '20vh',
        }}
        className='bg-regal-orange w-full mb-10 md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center'
      >
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/jsbw.png'}
          alt={'js'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/rubybw.png'}
          alt={'ruby'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/cssbw.png'}
          alt={'css3'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/html5bw.png'}
          alt={'html5'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/railsbw.png'}
          alt={'rails'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/nodejsbw.jpg'}
          alt={'nodejs'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/reactbw.png'}
          alt={'react'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/reduxbw.png'}
          alt={'redux'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/cypressbw.png'}
          alt={'cypress'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/rspec.jpg'}
          alt={'rspec'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'images/jestbw.png'}
          alt={'jest'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'images/netlifybw.png'}
          alt={'netlify'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'/images/herokubw.png'}
          alt={'heroku'}
        />
      </div>
    </div>
  );
};
export default Stack;
