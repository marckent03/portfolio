import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pb-5 mb-[100px] md:mb-0" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="text-black font-sans heading lg:max-w-[45vw]">
                For more information or if you have any questions, <span className="text-blue-500">Contact Us</span>
            </h1>
            <p className="text-black font-sans mt-3 md:mt-5">
                Email:alfarhama04@gmail.com | Number:+1234567890
            </p>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center text-black">
            <img 
                src="/AmberCash-PH.png"
                width={100}
                height={100}
            />
            <p className="md:text-base text-sm md:font-normal font-light -left-[50%]">
                Phase 4 A&W Subdivision, Zone 7, Guiwan  Zamboanga City, Zamboanga Del Sur. 7000
            </p>
            <div className="flex items-center md:gap-3 gap-6">
                <p className="md:text-base text-sm md:font-normal font-light items-center justify-center">
                    Copyright © 2024 MarcKentE
                </p>
                <p className="md:text-base text-sm md:font-normal font-light">
                    |
                </p>  
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-blue-700 rounded-lg border border-black'>
                        <img 
                            src={profile.img}
                            width={20}
                            height={20}
                        />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
