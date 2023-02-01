import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/isaac-shun-yat-lee-317058226/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href: "https://github.com/Iajedi"
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto:iajd216@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                CV <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: "/resume.pdf",
            style: 'rounded-br-md',
            download: true,
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) => (
                // eslint-disable-next-line no-useless-concat
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-6px] hover:rounded-md duration-300 bg-black' + " " + style}>
                <a
                href={href}
                className='flex justify-between items-center w-full text-white'
                download={download}
                target='_blank'
                rel='noreferrer'>
                    {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks