import React from 'react';
import envalop from '../assets/dark-envelop.png';
import Button from './Button';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <section id='contact' className='bg-secondryColor px-[5px]'>
      <div
        className='className=w-[100%] max-w-[1000px] px-5 sm:px-12 xl:px-0 
      md:mx-auto py-20'
      >
        <h2
          className='relative text-white text-xl md:text-3xl z-[1] mb-5 
        after:h-[1px] after:w-[100%] after:bg-gray-500 after:absolute 
        after:top-[50%] after:left-[0] after:-z-[1] text-center'
        >
          Get In Touch
        </h2>
        <div className='px-5 relative'>
          <form className='absolute top-0 sm:top-[10%] px-2 left-[5%] md:top-[20%]  max-w-[90%] w-[100%] space-y-1 sm:space-y-5 z-[1] '>
            <div className='flex flex-col  sm:flex-row  justify-center gap-2 sm:justify-between text-gray-500'>
              <div className='flex flex-col w-full'>
                <label htmlFor='name'>Your Full Name</label>
                <input
                  type='text'
                  id='name'
                  className='bg-color bg-opacity-80 w-full focus:outline-none rounded p-1 active:bg-color
                   text-gray-500'
                />
              </div>
              <div className='flex flex-col w-[100%]'>
                <label htmlFor='email'>Your Email</label>
                <input
                  type='email'
                  id='name'
                  className='bg-color bg-opacity-80 w-full focus:outline-none rounded p-1
                   active:bg-color text-gray-500'
                />
              </div>
            </div>
            <div className='flex flex-col text-gray-500 w-[100%] '>
              <label htmlFor='text'>Type Message</label>
              <textarea
                name='text'
                id='text'
                cols='30'
                rows='5'
                className='bg-color bg-opacity-80  w-[100%] rounded p-1 
                focus:outline-none  text-gray-500'
              ></textarea>
            </div>
            <div className='flex items-center justify-center w-full '>
              <input
                type='submit'
                value='Send Message'
                className='bg-color cursor-pointer bg-opacity-50  rounded p-1 
                focus:outline-none active:bg-color active:bg-opacity-50 text-gray-500 w-[100%] '
              />
            </div>
          </form>
          <div className=' z-[0] w-[100%]'>
            <img
              src={envalop}
              alt='Envalop'
              className='min-h-[320px]  h-[100%] w-[100%] '
            />
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center justify-center mt-10'>
          <div className='flex gap-3 text-primaryColor text-3xl'>
            <AiFillFacebook className='cursor-pointer' />
            <BsTwitter className='cursor-pointer' />
            <AiFillInstagram className='cursor-pointer' />
            <AiFillLinkedin className='cursor-pointer' />
          </div>
          <p className='text-primaryColor cursor-pointer'>
            waheeddeveloper@gamil.com
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center py-2 bg-color'>
        <p>Azmat Developer Handicraft</p>
      </div>
    </section>
  );
};

export default Footer;
