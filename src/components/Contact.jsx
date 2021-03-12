import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import useWindowPosition from '../hooks/useWindowPosition';

export default function Contact() {
  const animated = useWindowPosition('header', 0.6, 4);
  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="mycontact"
    >
      <div
        style={{
          minHeight: '50vh',
          background: 'black',
        }}
        className="w-full md:w-3/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <LazyLoadImage
          effect="blur"
          src={content.contact.img}
          placeholderSrc={content.contact.imgPlaceholder}
          alt="profile"
          width="300px"
          className=" transition duration-2000 ease-in-out mx-auto"
        />
        <div className="font-dosis w-4/5 md:w-2/5 transition duration-2000">
          <h1
            className={`${
              animated ? '' : 'translate-y-10 opacity-1'
            } transform transition duration-3000 text-white text-5xl font-bold`}
          >
            {content.contact.title}
          </h1>
          <p
            className={`${
              animated ? '' : 'translate-y-10 opacity-1'
            } transform transition duration-3000 text-white text-2xl`}
          >
            {content.contact.desc}
          </p>
          <div
            className={`flex ${
              animated ? '' : 'translate-y-10 opacity-1'
            } transform transition duration-3000 `}
          >
            {content.contact.socials.map((social, index) => {
              return (
                <LazyLoadImage
                  effect="blur"
                  className="m-2"
                  width="60px"
                  key={index}
                  src={social.img}
                  alt={social.alt}
                  to={social.href}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
