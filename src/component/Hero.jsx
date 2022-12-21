import React from 'react';
import Button from './Button';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Hero = () => {
  const textStyle = {
    writingMode: 'vertical-rl',
  };
  return (
    <section id='home' className='bg-secondryColor px-[5px]'>
      <div
        className='w-[100%] max-w-[1200px] px-5 sm:px-12 xl:px-0 md:mx-auto 
        space-y-5 md:space-y-10 py-10 md:py-20 '
      >
        <p className='text-primaryColor'>Hi, my name is</p>
        <h1 className='text-white text-3xl font-bold md:text-5xl '>
          Wiheed Developer <br />
          <span className='text-gray-300'>
            I build everything about full stack
          </span>
        </h1>
        <p className=' max-w-[600px] text-base md:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          quod nam dolores distinctio nisi deleniti pariatur, repudiandae
          provident possimus dolore fugit veritatis amet illo suscipit, sit
          modi? Quis, voluptate vel!
        </p>
        <Button text={'Read more'} />
      </div>

      <div className='hidden sm:block'>
        <div
          className='fixed flex   gap-4 after:h-[200px] after:w-[2px]
           after:bg-gray-200 after:absolute after:top-[130%] after:left-[50%]
            text-primaryColor top-[40%] left-3cd text-2xl'
          style={textStyle}
        >
          <AiFillFacebook className='cursor-pointer text-3xl hover:-translate-y-1' />
          <BsTwitter className='cursor-pointer text-3xl hover:-translate-y-1' />
          <AiFillInstagram className='cursor-pointer text-3xl hover:-translate-y-1' />
          <AiFillLinkedin className='cursor-pointer text-3xl hover:-translate-y-1' />
        </div>
        <p
          className='fixed text-primaryColor top-[35%] right-3 text-lg 
          hover:-translate-y-3 cursor-pointer after:h-[200px] 
          after:w-[1px] after:bg-gray-200 after:absolute 
          after:top-[110%] after:left-[50%]'
          style={textStyle}
        >
          waheeddeveloper@gamil.com
        </p>
      </div>
    </section>
  );
};

export default Hero;
