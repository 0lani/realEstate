import React, { FC, ReactElement } from 'react';
import data from './contactData';
import img from 'images/agent.png';

const Contact: FC = ():ReactElement => {
  const {title, subTitle, description, button} = data;
  return (
    <section className="w-screen h-screen flex flex-row md:mb-40">
      <div className="absolute md:left-12">
        <img src={img} alt="photo of real estate agent, alden casas"/>
      </div>
      
      <article className="flex flex-col justify-center w-screen h-cImg bg-blue-700 md:mt-20 md:mx-auto">
        <div className="flex flex-col justify-center text-left text-white md:mx-auto md:w-22 md:h-50">
          <header className="md:mb-4">
            <div className=" flex ml-4 md:mb-2 md:ml-0 text-2xlCM text-white tracking-normal">
              <p className="font-display mr-2 font-bold">{title[0]}</p><p>{title[1]}</p>
            </div>
            <p className="text-1xlC">{subTitle}</p>
          </header>

          <hr className="mx-auto bg-white border-white mb-8 h-hrLine w-hrLine-mobile border-t-19 md:w-4w md:h-1h md:border-t-0 md:ml-0"/>

          <p className="w-description mx-auto">{description}</p>

          <button 
            className="m-auto text-lg text-white border border-white border-solid hover:bg-indigo-400 active:bg-indigo-400 w-40 h-12 md:w-48 md:ml-0"
          >
            {button}
          </button>
        </div>
      </article>
    </section>
  )
}

export default Contact;
