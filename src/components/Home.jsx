import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import CoffeeCard from './coffeeCard';

const Home = () => {
    const coffees=useLoaderData()
    
    return (
        <div className='rela'>
           <Banner></Banner>
           <div className='grid grid-cols-1 p-12 lg:grid-cols-2 bg-no-repeat bg-[url(https://i.ibb.co/C5PZTbX2/1.png)] mb-12 h-[800px] gap-4 gap-y-8'>
            {
                coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
           </div>
        </div>
    );
};

export default Home;