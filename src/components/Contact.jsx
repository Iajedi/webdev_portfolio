import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-bl from-blue-900 via-black to-purple-900 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div>
                <p className='text-4xl font-bold inline text-transparent bg-clip-text bg-gradient-to-l from-[#5e60ce] to-purple-500 border-b-4 border-purple-500'>Random stuff</p>
                <p className='py-6'>Contact me for random stuff</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="" className=' flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder="Enter your name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name="email" placeholder="Enter your email" className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder="Insert random stuff here" className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className=' text-white bg-gradient-to-bl from-purple-700 via-purple-600 to-pink-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>I want random stuff</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact