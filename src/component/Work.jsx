import React from 'react';
import Data2 from '../Data/Data2';
import workImg from '../assets/../assets/work.jpg';
import { BsGithub } from 'react-icons/bs';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import OtherProject from './OtherProject';

const Work = () => {
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
      document
        .querySelectorAll('.card')
        .forEach(card => card.classList.remove('work-bg'));
    } else {
      document
        .querySelectorAll('.card')
        .forEach(card => card.classList.add('work-bg'));
    }
  });
  return (
    <section id='work' className='bg-secondryColor px-[5px]'>
      <div className=' w-[100%] max-w-[1000px] px-5 sm:px-12 xl:px-0 md:mx-auto py-20'>
        <h2 className='relative text-white text-xl md:text-3xl z-[1] mb-5 after:h-[1px] after:w-[100%] after:bg-gray-500 after:absolute after:top-[50%] after:left-[0] after:-z-[1]'>
          Some things I have build
        </h2>
        {Data2.map(data => (
          <div
            key={data.id}
            onResize={() => resize()}
            className=' card lg:bg-secondryColor  flex items-center justify-between 
            py-5 px-2 sm:py-20 my-20 lg:my-0 '
          >
            <div className='h-[100%] max-w-[50%] z-[0] relative hidden lg:block'>
              <img
                src={data.img}
                alt='Work Image'
                className=' h-[100%] w-[100%]'
              />
            </div>

            <div
              className={` lg:max-w-[50%] max-w-[800px] mx-auto lg:mx-0 w-[100%] space-y-5  h-[100%] lg:text-right z-[1]`}
            >
              <h3 className='text-primaryColor'>{data.title}</h3>
              <h2 className=' text-white text-xl md:text-2xl z-[1] py-2 font-bold'>
                {data.name}
              </h2>
              <div className='bg-color p-4 lg:-ml-10 '>
                <p>{data.description}</p>
              </div>
              <div className='flex flex-wrap lg:justify-end'>
                {data.subTitles.map(title => (
                  <div key={title.id} className='flex text-right '>
                    <p className='mx-2'>{title.title}</p>
                  </div>
                ))}
              </div>
              <div className='flex items-center lg:justify-end gap-5 my-5 '>
                <BsGithub className='text-primaryColor text-2xl cursor-pointer' />
                <BsBoxArrowUpRight className='text-primaryColor text-2xl cursor-pointer' />
              </div>
            </div>
          </div>
        ))}
      </div>

      <OtherProject />
    </section>
  );
};

export default Work;
