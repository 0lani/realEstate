import React, { FC, ReactElement } from 'react';
import data from './featuredData';
import img1 from 'images/ft-homes1.png';
import img2 from 'images/ft-homes2.png';
import img3 from 'images/ft-homes3.png';
import icon1 from 'icons/bed-solid.png';
import icon2 from 'icons/bath-solid.png';
import icon3 from 'icons/home-solid.png';

type listingTypes = {address:string, price: string, homeInfo: {room: number, bath:number, size: string, unit: string}, homeLink: {linkTitle: string, link: string}};

const Featured: FC = (): ReactElement => {
  const {
    location,
    title,
    sale,
    featuredHomes: {
      1: first,
      2: second,
      3: third
    }
  } = data;
  const homesArray: object[] = [first, second, third];
  const imgArray: string[] = [img1, img2, img3];

  return (
    <section className="flex flex-col w-screen mb-8 md:h-screen md:mb-0 lg:mb-48">
      <header className="mx-auto text-center text-base mb-12 text-gray-600 mt-12 md:mt-0">
        <p className="mb-4 text-xl">{location}</p>
        <p className="text-4xl">
          <span className="font-bold text-black font-display">{title}{" "}</span><span>{sale}</span>
        </p>
      </header>

      <hr className="mx-auto bg-blue-700 border-blue-700 mb-20 h-hrLine w-hrLine-mobile border-t-19 md:w-hrLine md:border-t-0"/>
      
      <article className="mx-auto flex justify-between flex-col md:flex-row md:ml-3 lg:mx-auto lg:my-0">
        {
          homesArray.map((listing: listingTypes, index: number) => {
            const {
              address,
              price,
              homeInfo: {
                room, bath, size, unit
              },
              homeLink: {
                linkTitle, link
              }
            } = listing;

            return (
              <React.Fragment>
                <div key={index} className="flex flex-col text-center mx-auto mb-12 w-90 md:w-full md:mb-0 md:mr-3 lg:mr-8 bxshdw ">
                  <img src={imgArray[index]} alt="photo of home listing" className="md:h-20 lg:h-fImg mb-6"/>

                  <div className="text-center mb-8">
                    <p className="mb-6 md:p-3 lg:p-0">{address}</p>
                    <p className="mb-4 font-display font-bold">{price}</p>
                    <p className="mb-8 flex justify-evenly font-bold">
                      <span className="icon-feat"><img className="mr-2" src={icon1} alt="bed icon"/>{" "}{room}</span> 
                      <span className="icon-feat"><img className="mr-2" src={icon2} alt="bathtub icon"/>{" "}{bath}</span> 
                      <span className="special-icon-feat"><img className="mr-2" src={icon3} alt="home icon"/>{" "}{size}{" "}{unit}</span>
                    </p >
                    <a className="underline text-blue-700 font-bold" href={link}>{linkTitle}</a>
                  </div>
                </div>
              </React.Fragment>
            )
          })
        }
      </article>
    </section>
  )
};

export default Featured;
