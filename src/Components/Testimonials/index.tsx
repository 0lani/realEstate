import React, { FC, ReactElement } from 'react';
import { Fade } from 'react-slideshow-image';
import data from './testimonalData'

const Testimonials: FC = (): ReactElement => {
const { subTitle, title, testimonials } = data;

  return (
    <section className="w-full h-60 flex justify-center flex-col">
      <header className="text-center font-bold mb-3">
        <p className="text-gray-600 text-2xl">{subTitle}</p>
        <p className="text-2xlCM">{title}</p>

        <hr className="mx-auto bg-blue-700 border-blue-700 mb-8 mt-4 h-hrLine w-hrLine-mobile border-t-19 md:w-hrLine md:border-t-0"/>
      </header>

      <article className="flex justify-center">
        <Fade easing="ease" duration="2500" transitionDuration="650">
          {
            testimonials.map((content, index: number) => {
              const {stars, testimonial, name} = content
              return (
                <React.Fragment>
                  <div key={index} className="each-fade absolute mx-auto mt-4 w-36">
                    <div className="text-center">
                      <p className="text-2xlC text-goldS mb-4">{stars}</p>
                      <p>{testimonial}</p>
                      <p className="mt-2">-{" "}{name}</p>
                    </div>
                  </div>
                </React.Fragment>
              )
            })
          }
        </Fade>
      </article>

    </section>
  )
}

export default Testimonials