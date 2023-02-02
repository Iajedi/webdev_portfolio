import React from 'react'
import land1 from '../assets/portfolio/tomorrowland1.png'
import land2 from '../assets/portfolio/tomorrowland2.png'
import land3 from '../assets/portfolio/fantasyland1.png'
import land4 from '../assets/portfolio/fantasyland2.png'
import land5 from '../assets/portfolio/maryblair1.png'
import land6 from '../assets/portfolio/maryblair2.png'

export const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: land1
        },
        {
            id: 2,
            src: land2
        },
        {
            id: 3,
            src: land3
        },
        {
            id: 4,
            src: land4
        },
        {
            id: 5,
            src: land5
        },
        {
            id: 6,
            src: land6
        },
    ]

  return (
    <div name='portfolio' className=' bg-gradient-to-bl from-red-900 via-black to-green-900 w-full text-white md:h-screen'>
        
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-transparent bg-clip-text bg-gradient-to-l  from-lime-400 to-green-500 border-b-4 border-green-500'>Minecraft Builds</p>
                <p className='py-6'>My creations in the virtual game.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src}) => (
                        <div key={id} className=' shadow-md shadow-lime-400 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className=' flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105 hover:text-lime-400 hover:font-semibold'>Demo</button>
                                <button className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105 hover:text-lime-400 hover:font-semibold'>Download</button>
                            </div>
                        </div>
                    ))
                }

            </div>



        </div>

    </div>
  )
}

export default Portfolio;
