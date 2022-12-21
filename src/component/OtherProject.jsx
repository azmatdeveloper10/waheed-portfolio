import React from 'react';
import { GoFileDirectory } from 'react-icons/go';
import { BsGithub } from 'react-icons/bs';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import OtherProjectData from '../Data/OtherProjectData';

const OtherProject = () => {
  function cardHover() {
    document.querySelectorAll('.other-card').forEach(card =>
      card.addEventListener('mouseenter', function () {
        card.classList.add('hoverEff');
      })
    );
  }

  function cardLeave() {
    document.querySelectorAll('.other-card').forEach(card =>
      card.addEventListener('mouseleave', function () {
        card.classList.remove('hoverEff');
      })
    );
  }
  return (
    <div className=' w-[100%] max-w-[1000px] px-5 sm:px-12 xl:px-0 md:mx-auto py-28'>
      <h2 className='relative text-white text-xl md:text-3xl z-[1] mb-5 after:h-[1px] after:w-[100%] after:bg-gray-500 after:absolute after:top-[50%] after:left-[0] after:-z-[1] text-center'>
        Other Networthy Projects
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {OtherProjectData.map(data => (
          <div
            key={data.id}
            onMouseEnter={() => cardHover()}
            onMouseLeave={() => cardLeave()}
            className='other-card work-bg  rounded p-5 space-y-2 cursor-pointer'
          >
            <div
              className='flex items-center justify-between cursor-pointer 
          '
            >
              <GoFileDirectory className='text-3xl  text-primaryColor' />
              <dir className='flex gap-2 text-xl text-gray-400'>
                <BsGithub />
                <BsBoxArrowUpRight />
              </dir>
            </div>
            <h3 className='text-white text-xl font-bold'>{data.title}</h3>
            <p className='text-gray-300 text-sm'>{data.description}</p>
            <div className='flex flex-wrap gap-2 mt-3'>
              {data.technology.map(tech => (
                <p key={tech.id} className='text-sm text-gray-500 '>
                  {tech.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProject;
