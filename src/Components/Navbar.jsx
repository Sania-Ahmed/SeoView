import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-white w-full flex justify-between items-center p-5 border border-b-black '>
            <div>
                <h1 className='text-xl font-semibold text-black'><Link to={'/'}>SeoView</Link></h1>
            </div>
            <div>
                <button className='font-medium py-1 px-2 border border-purple-500 rounded-lg hover:bg-purple-500  hover:text-white'><Link to={'/report'}>Get Started</Link></button>
            </div>
        </nav>
    );
};

export default Navbar;