import React from 'react';
import Button from '../Button/Button';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className='px-10 md:px-20 my-5 md:my-10 flex flex-col md:flex-row justify-between items-center'>
            {/* text section */}
            <div className=' w-full md:w-1/2'>
            <div className='flex flex-col space-y-3 md:space-y-6'>
                <h2 className="text-5xl font-semibold">
                Everyone can be a
                chef in their own kitchen
                </h2>
                <p className="font-thin w-[508px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
                </p>
            </div>
                <Button className={'text-white bg-black w-[180px] md:mt-[72px]'}>Learn More</Button>
            </div>
            {/* image section */}
            <div className="w-full md:w-1/2">
            <Image alt="chef" className="w-full" src="/assets/banner-chef.png" width={710} height={597} />
            </div>
        </section>
    );
};

export default Hero;