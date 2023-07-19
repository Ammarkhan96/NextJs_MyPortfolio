import React from 'react'
import IconGitHub from '../icons/Github'
import IconLinkedin from '../icons/LinkedIn'


const Sidebars = () => {
  return (
    <div>
      
      <div className="hidden left-fixedbar md:block fixed w-6 h-[400px] bottom-0 left-5">
        <div className="icons flex flex-col gap-4">
          <a href="https://github.com/Ammarkhan96" target='_blank' rel="noreferrer"><IconGitHub/></a>
          <a href="https://www.linkedin.com/in/ammar-khan-159369188/" target='_blank' rel="noreferrer"><IconLinkedin/></a>
         
          <div className='h-[300px] w-1 bg-gray-400 mx-auto'></div>
        </div>
      </div>

      <div className="hidden right-fixedbar md:block fixed w-6 h-[400px] bottom-0 right-5">
        <div className="flex flex-col gap-4">
            <a className='iconhover mb-[164px] rotate-90 text-gray-400 font-mono -mr-1' href='mailto:ammarkhaan96@gmail.com'>ammarkhaan96@gmail.com</a>
        
        <div className='relative w-1 h-80 bg-gray-400 mx-auto'></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebars;