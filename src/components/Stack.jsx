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
          src={
            'data:image/png;base64,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'
          }
          alt={'js'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={
            'https://www.shareicon.net/data/512x512/2016/06/19/603737_ruby_512x512.png'
          }
          alt={'ruby'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={
            'https://brandslogos.com/wp-content/uploads/images/css-logo-black-and-white.png'
          }
          alt={'css3'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={
            'https://brandslogos.com/wp-content/uploads/images/html5-logo-black-and-white.png'
          }
          alt={'html5'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={
            'https://icons-for-free.com/iconfiles/png/512/rails+ruby+icon-1320190792036157850.png'
          }
          alt={'rails'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'https://icon-library.com/images/nodejs-icon/nodejs-icon-1.jpg'}
          alt={'nodejs'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={
            'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png'
          }
          alt={'react'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'https://img.icons8.com/ios/452/redux.png'}
          alt={'redux'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'https://cdn.auth0.com/blog/cypress-tests/logo.png'}
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
          src={
            'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jest-512.png'
          }
          alt={'rspec'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={'https://www.netlify.com/img/press/logos/logomark-light.png'}
          alt={'netlify'}
        />
        <Image
          effect='blur'
          className='m-2'
          width='60px'
          src={
            'https://cdn.iconscout.com/icon/free/png-512/heroku-3-555378.png'
          }
          alt={'heroku'}
        />
      </div>
    </div>
  );
};
export default Stack;
