import React from 'react';
import Button from './Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [icon, setIcon] = React.useState(true);
  function changeIcon() {
    setIcon(!icon);
  }
  const Icon = icon ? <GiHamburgerMenu /> : <FaTimes />;
  const style = {
    display: `${icon ? 'none' : 'flex'}`,
  };
  return (
    <nav className='bg-secondryColor px-[5px]'>
      <div className=' w-[100%] max-w-[1400px] mx-auto py-5  flex items-center justify-between relative'>
        <h2 className='text-2xl font-bold flex-1 text-primaryColor'>
          Waheed Dev
        </h2>
        <ul className='hidden md:flex flex-1 gap-3 justify-between items-center'>
          <li>
            <a href='#home' className='text-gray-400 hover:text-primaryColor'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='text-gray-400 hover:text-primaryColor'>
              About
            </a>
          </li>
          <li>
            <a
              href='#experience'
              className='text-gray-400 hover:text-primaryColor'
            >
              Experience
            </a>
          </li>
          <li>
            <a href='#work' className='text-gray-400 hover:text-primaryColor'>
              Work
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='text-gray-400 hover:text-primaryColor'
            >
              Contact
            </a>
          </li>
          <li>
            <Button text={'Resume'} />
          </li>
        </ul>
        <div
          onClick={() => changeIcon()}
          className='h-[20px] w-[20px] flex items-center justify-center md:hidden'
        >
          <p className='text-3xl'>{Icon}</p>
        </div>

        <ul
          style={style}
          className='absolute top-20 z-[10] right-0 md:hidden flex flex-col flex-1 gap-3 justify-around items-center bg-color w-full h-[90vh]'
        >
          <li>
            <a
              onClick={() => changeIcon()}
              href='#home'
              className='text-gray-400 hover:text-primaryColor'
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => changeIcon()}
              href='#about'
              className='text-gray-400 hover:text-primaryColor'
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => changeIcon()}
              href='#experience'
              className='text-gray-400 hover:text-primaryColor'
            >
              Experience
            </a>
          </li>
          <li>
            <a
              onClick={() => changeIcon()}
              href='#work'
              className='text-gray-400 hover:text-primaryColor'
            >
              Work
            </a>
          </li>
          <li>
            <a
              onClick={() => changeIcon()}
              href='#contact'
              className='text-gray-400 hover:text-primaryColor'
            >
              Contact
            </a>
          </li>
          <li>
            <Button text={'Resume'} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
