import { AiFillCaretRight } from 'react-icons/ai';

import React from 'react';
import Data from '../Data/Data';
import { data } from 'autoprefixer';

const Experience = () => {
  const [cur, setCur] = React.useState(1);
  const [curData, setCurData] = React.useState({
    id: 1,
    company: 'Systems',
    jobTitle: 'Full stack developer',
    durationdate: '12 dec to current',
    state1:
      'Write modern, of different languages, platforms, frameworks, and content management systems performant, maintainable code for a diverse array of client and internal projects',
    state2:
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
    state3:
      'Work with a variety of different languages, platforms, frameworks, and       content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
  });

  function click(id) {
    setCur(id);
  }

  function dataClick(data) {
    setCurData(data);
  }

  return (
    <section id='experience' className='bg-secondryColor px-[5px]'>
      <div className='w-[100%] max-w-[1000px] px-5 sm:px-12 xl:px-0 md:mx-auto py-20'>
        <h2
          className='relative text-white text-xl md:text-3xl z-[1] mb-0 md:mb-5 
        after:h-[1px] after:w-[100%] after:bg-gray-500 after:absolute 
        after:top-[50%] after:left-[0] after:-z-[1]'
        >
          Where I have Worked
        </h2>
        <div className='flex flex-col  md:flex-row py-4 md:py-10'>
          <div
            className='mr-10 flex flex-row gap-5 items-center justify-center 
            md:flex-col md:items-start md:justify-start'
          >
            {Data.map(data => (
              <div key={data.id} onClick={() => dataClick(data)} className=''>
                <h3
                  onClick={() => click(data.id)}
                  className={` text-gray-400 cursor-pointer  font-light my-5 px-1 
                  py-1 md:py-3 ${
                    cur === data.id
                      ? 'border-b-[3px] md:border-b-0 md:border-l-[3px] border-primaryColor'
                      : 'border-none'
                  }`}
                >
                  {data.company}
                </h3>
              </div>
            ))}
          </div>
          <div className='max-w-[800px]'>
            <h2 className='text-white text-xl my-2'>
              {curData.jobTitle}
              <span className='text-primaryColor'>@{curData.company}</span>
            </h2>
            <p className='my-1 mb-5'>{curData.durationdate}</p>
            <div className='flex items-start ml-2'>
              <div className='mt-2'>
                <AiFillCaretRight className='text-2xl text-primaryColor mr-2' />
              </div>
              <p className=' my-2 flex '>{curData.state1}</p>
            </div>

            <div className='flex items-start ml-2'>
              <div className='mt-2'>
                <AiFillCaretRight className='text-2xl text-primaryColor mr-2' />
              </div>
              <p className=' my-2 flex '>{curData.state2}</p>
            </div>

            <div className='flex items-start ml-2'>
              <div className='mt-2'>
                <AiFillCaretRight className='text-2xl text-primaryColor mr-2' />
              </div>
              <p className=' my-2 flex '>{curData.state3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
