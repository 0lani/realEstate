import React, { FC, useRef, useState, ReactElement } from 'react';
import data from './navData';

const NavBar: FC = (): ReactElement => {
  const menuEl = useRef(undefined);
  const intialState: {open?: boolean} = {open: false}
  const [mobileState, setCheck] = useState(intialState)
  const {logo, menuItems} = data;

  let mobileMenu: HTMLElement;
  // listner to activate mobile menu
  const clickListner = (): void => {
    mobileMenu = menuEl.current;

    setCheck({open: !mobileState.open});

    if((typeof mobileMenu !== undefined) && !mobileState.open){
      mobileMenu.style.display = 'none';
      return void(0);
    }

    mobileMenu.style.display = 'flex';
    mobileMenu.style.flexDirection = 'column';
    mobileMenu.style.position = 'absolute';
    mobileMenu.style.top = '100%';
    mobileMenu.style.right = '0';
    mobileMenu.style.margin = '0.5rem';
    mobileMenu.style.backgroundColor = 'rgb(127, 156, 245)';
    mobileMenu.style.width = '50vw';
    mobileMenu.style.height = '20vh';
    mobileMenu.style.justifyContent = 'center';
    mobileMenu.style.borderRadius = '1rem';
  };

  const mobileMenuButton: JSX.Element = (
    <button onMouseDown={clickListner} id="hamburgerbtn" className="inline md:hidden ml-16 text-white bg-opacity-0 border border-white border-solid w-20 h-12">
      Menu
    </button>
  )

  return (
    <header className="w-screen z-10 bg-opacity-0 fixed">
      <nav className="container mx-auto flex md:justify-between mt-8">
        <div className="inline ml-4 md:ml-0 text-2xl text-white tracking-normal">
          <span className="font-display mr-2 font-bold">{logo[0]}</span><span className="text-2xl">{logo[1]}</span>
        </div>
        {
         mobileMenuButton
        }
        <ul className="hidden md:flex md:flex-row" id="mobileMenu" ref={menuEl}>
          {menuItems.map((item) => {
            return (
              <li key={item} 
                className="text-base text-white my-2 mx-auto border-b-2 border-white md:mr-5 md:my-0 md:border-transparent hover:border-indigo-400"> 
                <a href="#">{item}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;