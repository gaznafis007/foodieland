import React from 'react';
import Button from '../Button/Button';
import { fetchData } from '@/utils/fetchData';
import Image from 'next/image';

const Categories = async () => {
    const categories = await fetchData('/categories');
    return (
        <section className='px-10 md:px-20 py-10 md:py-20 space-y-10 md:space-y-20'>
            <div className="flex flex-row justify-between">
                <h2 className="text-5xl font-semibold">Categories</h2>
                <Button>View More</Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-8 lg:gap-10">
                {
                    categories.map(category =>(
                        <div key={category._id} style={{
                            backgroundImage: category.background,
                        }}
                        className="flex flex-col justify-between items-center rounded-2xl space-y-6 pb-4">
                            <div className="w-30 h-20">
                            <Image src={category.img} alt={category.title} width={50} height={650} className='w-full'/>
                            </div>
                            <h3 className="text-xl font-semibold">{category.title}</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Categories;