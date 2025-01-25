import React from 'react';
import Button from '../Button/Button';

const Categories = () => {
    return (
        <section className='px-10 md:px-20 py-10 md:py-20'>
            <div className="flex flex-row justify-between">
                <h2 className="text-5xl font-semibold">Categories</h2>
                <Button>View More</Button>
            </div>
        </section>
    );
};

export default Categories;