import React from 'react'
import UserImage from '../assets/heroImage.png'
import { Link } from 'react-scroll'
import {RxDoubleArrowRight} from 'react-icons/rx'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-bl from-black via-black to-amber-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl py-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600'>
                    I'm Isaac Lee.
                </h2>
                <p className='text-white py-6 max-w-md'>
                    <p>
                    First year Computing student
                    <p className='font-semibold hover:text-blue-300 duration-300'><a href="https://www.imperial.ac.uk/computing/">@ Imperial College London</a></p>
                    </p>
                    <p>
                    Trying to be creative every day
                    </p>
                </p>
                <div>
                    <Link to='about' smooth duration={500}>
                        <button className='bg-gradient-to-tr from-yellow-400 to-orange-500 cursor-pointer group hover:bg-gradient-to-tr hover:from-cyan-400 hover:to-sky-200 hover:scale-110 duration-300 text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md'>
                        View About
                            <span className='group-hover:rotate-90 duration-500'>
                                <RxDoubleArrowRight size={17} className='ml-1'/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='px-4'>
                <img src={UserImage} alt="Me" className='mx-auto w-2/3 md:w-full rounded-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default Home