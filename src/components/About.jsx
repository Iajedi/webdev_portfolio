import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-br from-amber-900 via-black to-red-900 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r  from-amber-400 to-red-500 border-b-4 border-red-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Machines have captivated me since I built my first computer at the age of 11. Through computers I endeavored to develop different projects. 
            </p>
            <br />

            <p className='text-xl'>
                My passion for computer science is based on an abundance of opportunities for me to hone my 
                problem-solving and analytical skills. Although any first attempt at creating a comprehensive computer 
                system will almost invariably result in errors, I believe that the satisfaction I receive from exploring this 
                field will allow me to overcome any setback and apply this culmination of human ingenuity to serve the 
                greater good.
            </p>
        </div>
    </div>
  )
}

export default About