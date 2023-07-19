import React from 'react'
import IconGitHub from '../icons/Github'
import IconLinkedin from '../icons/LinkedIn'


const Footer = () => {
  return (
    <footer>

      <div className='md:hidden links flex flex-row w-2/3 mx-auto justify-evenly h-8 my-5'>
          <a className='w-8' href="https://github.com/Ammarkhan96" target='_blank' rel="noreferrer"><IconGitHub/></a>
          <a className='w-8' href="https://www.linkedin.com/in/ammar-khan-159369188/" target='_blank' rel="noreferrer"><IconLinkedin/></a>
         
      </div>
      
    

      <p className='font-mono text-center text-gray-500'>All rights reserved. <br className='md:hidden'/> Created by Muhammad Urwah</p>
    </footer>
  )
}

export default Footer