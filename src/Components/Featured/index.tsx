import React, {FC} from 'react';
import data from './featuredData';
import img1 from 'images/ft-homes1.png';
import img2 from 'images/ft-homes2.png';
import img3 from 'images/ft-homes3.png';

type listingTypes = {address:string, price: string, homeInfo: {room: number, bath:number, size: string, unit: string}, homeLink: {linkTitle: string, link: string}};

const Featured: FC = () => {
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
    <section className="w-screen h-screen flex flex-col">
      <header className="mx-auto text-center text-base mb-12 text-gray-600">
        <p className="mb-4 text-xl">{location}</p>
        <p className="text-4xl">
          <span className="font-bold text-black">{title}{" "}</span><span>{sale}</span>
        </p>
      </header>

      <hr className="mx-auto bg-blue-700 mb-20 h-hrLine w-hrLine"/>
      
      <article className="mx-auto flex justify-between">
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
                <div className="flex flex-col text-center mx-auto mr-8 bxshdw ">
                  <img src={imgArray[index]} alt="photo of home listing" className="h-fImg mb-6"/>

                  <div className="text-center mb-8">
                    <p className="mb-6">{address}</p>
                    <p className="mb-4">{price}</p>
                    <p className="mb-8 flex justify-evenly">
                      <span><img/>{room}</span> <span><img/>{bath}</span> <span><img/>{size}{unit}</span>
                    </p>
                    <a href={link}>{linkTitle}</a>
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
