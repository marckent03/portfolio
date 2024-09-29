import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { blogs, companies } from '@/data'

const Blogs = () => {
  return (
    <div className='py-20' id="blogs">
        <h1 className="text-black heading">
            Kind words from {' '}
            <span className="text-blue-700">
                satisfied clients.
            </span>
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10">
            <InfiniteMovingCards 
                items={blogs}
                direction="right"
                speed="slow"
            />
            {/*
            <div className="flex flex-wrap items-center justify-center gap-4 md:16 max-lg:mt-10">
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <img 
                        src={img}
                        alt={name}
                        className="md:w-10 w-5"
                        />
                        <img 
                        src={nameImg}
                        alt={name}
                        className="md:w-24 w-20"
                        />
                    </div>
                ))}
            </div>
            */}
        </div>
    </div>
  )
}

export default Blogs
