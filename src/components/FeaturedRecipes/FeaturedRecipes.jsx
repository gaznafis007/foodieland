import React from 'react';
import Card from '../Card/Card';
import { fetchData } from '@/utils/fetchData';

const FeaturedRecipes = async () => {
    const featuredRecipes = await fetchData('/recipes/featured');
    // console.log(featuredRecipes)
    return (
        <section className='px-10 md:px-20 py-10 md:py-20'>
            {/* text section */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <h2 className="text-4xl md:text-6xl font-semibold">
                Try this delicious recipe
                to make your day
                </h2>
                <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
                </p>
            </div>
            {/* recipes section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 md:pt-20">
                {
                    featuredRecipes.map(recipe => <Card data={recipe} key={recipe.title}></Card>)
                }
            </div>
        </section>
    );
};

export default FeaturedRecipes;