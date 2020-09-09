import React, { FC, ReactElement } from 'react';
import data from './heroData';

const Hero: FC = ():ReactElement => {
  const {p1, p2, p3, button} = data;
  return (
    <section className="clip-hero w-screen h-super z-0 bg-hero bg-mobile-center-hero md:bg-tablet-center-hero md:relative md:mb-20 lg:bg-center-hero">
      <div className="absolute w-full top-45 left-0 md:w-full md:top-34 lg:w-6/12 lg:left-24">
        <div className="w-full flex flex-col text-center">
          <p className="text-base text-white md:text-2xlC">{p1}</p>

          <p className="text-white text-2xlC md:text-3xlC">{p2}</p>
          <p className="font-display text-white font-bold text-2xlCM mb-4 md:text-5xlC md:mb-0">{p3}</p>

          <button 
            className=" m-auto text-lg text-white border border-white border-solid hover:bg-indigo-400 active:bg-indigo-400 w-40 h-12 md:w-48"
          >
            {button}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero