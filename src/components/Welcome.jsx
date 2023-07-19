import React from 'react'

const Welcome = () => {
  return (
    <div id='welcome' className='section h-screen'>
      <div id="greet">
        <h3 className='ml-1'>Hi, my name is</h3>
        <h1 className='title my-[0.5vw] text-slate-300 text-[44px] leading-none sm:text-[9vw] font-sans font-black md:text-6xl tracking-tight'>
          Ammar
          <span className='text-accent'> Khan.</span>
        </h1>
        <h1 className='text-slate-300 my-[0.5vw] text-[26px] leading-none sm:text-[9vw] font-sans font-extrabold md:text-6xl tracking-tight'>
          Full Stack Web Developer
        </h1> 
      </div>
      <p className='ml-1 md:w-1/2'>
        I possess expertise in constructing complete Web Applications with <strong className='text-accent'>Intuitive User Interfaces (UIs)</strong>, <strong className='text-accent'>Well-implemented Server-Side Architecture</strong> and <strong className='text-accent'>Accurate Data Management</strong>.
      </p>
      <a href="#about">
        <button className='block text-gray-300 mx-auto border-2 border-bg hover:border-gray-300 rounded-full p-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
            <path fillRule="evenodd" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
          </svg>
        </button>
      </a>
      
    </div>
    
  )
}

export default Welcome