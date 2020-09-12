import React, { FC, ReactElement } from 'react';
import data from './contactData';
import img from 'images/agent.png';

const Contact: FC = ():ReactElement => {
  const {title, subTitle, description, button} = data;
  return (
    <section className="w-screen md:h-screen flex flex-col md:flex-row">
      <div className="relative md:absolute lg:left-12">
        <img src={img} alt="photo of real estate agent, alden casas" className="md:max-w-60 lg:max-w-none"/>
      </div>
      
      <article className="flex flex-col justify-center w-screen md:h-50 lg:h-cImg bg-blue-700 md:mt-20 md:mx-auto">
        <div className="flex flex-col justify-center text-white mt-8 md:text-left md:mt-0 md:mx-auto md:w-22 md:h-50">
          <header className="mb-4 md:w-50 lg:w-auto">
            <div className=" flex justify-center text-2xlCM text-white tracking-normal md:justify-start md:mb-2 md:ml-0 lg:ml-4">
              <p className="font-display mr-2 font-bold">{title[0]}</p><p>{title[1]}</p>
            </div>
            <p className="text-1xlC text-center md:text-left">{subTitle}</p>
          </header>

          <hr className="mx-auto bg-white border-white mb-8 w-hrLine-mobile border-t-19 md:w-4w md:h-1h md:border-t-0 md:ml-0"/>

          <p className="mx-auto text-center mb-8 md:mb-0 md:text-left md:w-61 lg:w-description">{description}</p>

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
