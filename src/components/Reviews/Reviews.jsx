import { fetchData } from '@/utils/fetchData';
import React from 'react';
import InstagramPost from '../InstagramPost/InstagramPost';

const Reviews = async () => {
    const instaPosts = await fetchData('/instaPost')
    // console.log(instaPosts)
    return (
        <section className='px-10 md:px-20 py-10 md:py-20 bg-gradient-to-t from-primary to-white'>
            {/* heading text */}
            <div className="flex flex-col space-y-3 md:space-y-6">
                <h2 className="text-6xl font-semibold text-center">
                Check out @foodieland on Instagram
                </h2>
                <p className="font-thin text-center leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eveniet nesciunt sint ex atque officiis ad dolorem veritatis ratione libero.</p>
            </div>
            <div className="grid grid-cols-1 md:gri-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-20">
                {
                    instaPosts.map(instaPost =><InstagramPost key={instaPost.img} image={instaPost.img}></InstagramPost>)
                }
            </div>
        </section>
    );
};

export default Reviews;