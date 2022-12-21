import React from 'react';
import userImg from '../assets/../assets/azmat.jpg';

const About = () => {
  return (
    <section id='about' className='bg-secondryColor px-[5px]'>
      <div className='w-[100%] max-w-[1200px] px-5 sm:px-12 xl:px-0 md:mx-auto py-20 flex flex-col-reverse md:flex-row justify-center items-center gap-2'>
        <div className='flex-1'>
          <h2 className='relative text-white text-xl md:text-3xl z-[1] mb-5 after:h-[1px] after:w-[100%] after:bg-gray-500 after:absolute after:top-[50%] after:left-[0] after:-z-[1]'>
            About me
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            esse provident rem? Quisquam, sapiente. Aspernatur perspiciatis
            sapiente aliquid ea reprehenderit deleniti asperiores. Dignissimos
            maiores vel itaque laborum <br /> nihil perspiciatis enim
            aspernatur, voluptate optio sed corrupti dolor voluptatibus eaque
            neque vero ad dolores quia, saepe porro veritatis perferendis? Quis,
            aliquam consequatur.
            <br /> Quisquam, sapiente. Aspernatur perspiciatis sapiente aliquid
            ea reprehenderit
          </p>
        </div>
        <div className='flex-1 flex items-center justify-end'>
          <img
            src={userImg}
            alt='User'
            className='relative h-[100%] max-w-[400px] w-[100%] rounded-lg 
             after:h-[300px] after:w-[300px] after:contents-[] after:bg-primaryColor'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
