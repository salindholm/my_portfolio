import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useStartAnimation from '../hooks/useStartAnimation';

const Work = () => {
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';
  const animated = useStartAnimation();
  return (
    <div>
      <h1
        className=' text-5xl font-dosis font-bold flex justify-center'
        id='mywork'
      >
        Projects
      </h1>
      <p className='text-gray-600 text-2xl font-dosis flex justify-center'>
        I have done
      </p>
      <div className=' mt-5 ml-3 mr-3 flex justify-center items-center'>
        <ul className='grid grid-cols-3 gap-4'>
          <div
            style={{
              minHeight: '50vh',
              background: 'black',
            }}
            className='w-5/5 md:w-5/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center'
          >
            <div className='font-dosis w-5/5 md:w-4/5 transition duration-2000'>
              <h1
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-4xl font-bold`}
              >
                TuneShare
              </h1>
              <p
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-1xl`}
              >
                A mobile application built with React Native where the user can
                post their favorite music and share their thoughts. The backend
                server is using the Spotify API to provide users with music data
                to post.
              </p>
              <a href='https://github.com/salindholm/tuneshare_client'>
                <button
                  className={` animate-bounce bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Github
                </button>
              </a>{' '}
              <a href='https://github.com/salindholm/tuneshare_client'>
                <button
                  className={` animate-bounceFirst bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-3 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Website
                </button>
              </a>
            </div>
          </div>
          <div
            style={{
              minHeight: '50vh',
              background: 'black',
            }}
            className='w-5/5 md:w-5/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center'
          >
            <div className='font-dosis w-5/5 md:w-4/5 transition duration-2000'>
              <h1
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-4xl font-bold`}
              >
                Kitty News
              </h1>
              <p
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-1xl`}
              >
                A web application of a digital news paper. Visitors can sign up
                and pay a subscription fee to get full access to all articles.
                Also built a mobile app that has fewer functions and an admin
                client for the news paper staff.
              </p>
              <a href='https://github.com/salindholm/kitty_news_client_user'>
                <button
                  className={` animate-bounce bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Github
                </button>
              </a>{' '}
              <a href='https://kittynews.netlify.app/'>
                <button
                  className={` animate-bounceFirst bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-3 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Website
                </button>
              </a>
            </div>
          </div>
          <div
            style={{
              minHeight: '50vh',
              background: 'black',
            }}
            className='w-5/5 md:w-5/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center'
          >
            <div className='font-dosis w-4/5 md:w-4/5 transition duration-2000'>
              <h1
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-4xl font-bold`}
              >
                Trumpster
              </h1>
              <p
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-1xl`}
              >
                A web application created for the sole purpose of making fun of
                the former president of the United States. Users can view a
                random quote, search for quotes and customize their own insult
                using quotes.
              </p>
              <a href='https://github.com/salindholm/trumpster_client'>
                <button
                  className={` animate-bounce bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Github
                </button>
              </a>{' '}
              <a href='https://trumpster-dumpster.netlify.app/'>
                <button
                  className={` animate-bounceFirst bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-3 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Website
                </button>
              </a>
            </div>
          </div>
        </ul>
      </div>
      <div className=' mt-5 ml-3 mr-3 flex justify-center items-center'>
        <ul className='grid grid-cols-3 gap-4'>
          <div
            style={{
              minHeight: '50vh',
              background: 'black',
            }}
            className='w-5/5 md:w-5/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center'
          >
            <div className='font-dosis w-5/5 md:w-4/5 transition duration-2000'>
              <h1
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-4xl font-bold`}
              >
                Slowfood
              </h1>
              <p
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-1xl`}
              >
                A web application for ordering food online. Registered users can
                add products to their order and check out the current order.
              </p>
              <a href='https://github.com/salindholm/slowfood_client_team1_october2020'>
                <button
                  className={` animate-bounce bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Github
                </button>
              </a>{' '}
              <a href='https://revisarik.netlify.app/'>
                <button
                  className={` animate-bounceFirst bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-3 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Website
                </button>
              </a>
            </div>
          </div>
          <div
            style={{
              minHeight: '50vh',
              background: 'black',
            }}
            className='w-5/5 md:w-5/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center'
          >
            <div className='font-dosis w-5/5 md:w-4/5 transition duration-2000'>
              <h1
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-4xl font-bold`}
              >
                Rock Paper Scissors
              </h1>
              <p
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-1xl`}
              >
                A web application of the popular game Rock Paper Scissors which
                could be played between the user and the computer.
              </p>
              <a href='https://github.com/salindholm/rock_paper_scissors_challange'>
                <button
                  className={` animate-bounce bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Github
                </button>
              </a>{' '}
              <a href='https://salindholm-rps-challange.netlify.app/'>
                <button
                  className={` animate-bounceFirst bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-3 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Website
                </button>
              </a>
            </div>
          </div>
          <div
            style={{
              minHeight: '50vh',
              background: 'black',
            }}
            className='w-5/5 md:w-5/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center'
          >
            <div className='font-dosis w-4/5 md:w-4/5 transition duration-2000'>
              <h1
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-4xl font-bold`}
              >
                Cooper Challange
              </h1>
              <p
                className={`${
                  animated ? '' : 'translate-y-10 opacity-1'
                } transform transition duration-3000 text-white text-1xl`}
              >
                A web application that allows users to calculate their cooper
                test result, save it and view their past test results.
              </p>
              <a href='https://github.com/salindholm/cooper_client'>
                <button
                  className={` animate-bounce bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Github
                </button>
              </a>{' '}
              <a href='https://whssl-cooper-challenge.netlify.app/'>
                <button
                  className={` animate-bounceFirst bg-regal-orange px-10 py-3 text-lg uppercase text-white rounded-lg mt-3 hover:bg-grey transform  ${
                    animated ? 'translate-y-0' : styleTranslate
                  } ${transition(3500)}`}
                >
                  Website
                </button>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Work;
