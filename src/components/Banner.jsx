import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='min-h-[calc(100vh-120px)] bg-[url(https://i.ibb.co/C51jtG7K/3.png)] grid grid-cols-2 items-center justify-center mb-18 bg-auto bg-center bg-no-repeat'>
           
                <div></div>
                <div className='space-y-4'>
                    <h1 className='text-white text-5xl'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-white font font-light text-[12px]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <Link to='/addcoffee' className='btn text-[#242222] border border-black hover:bg-[#dbcc9d] hover:text-white bg-[#E3B577]'>Learn More</Link>
                </div>
           
        </div>
    );
};

export default Banner;