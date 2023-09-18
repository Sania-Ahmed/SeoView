import React from 'react';
import bannerImage from '../assets/animation_lmksf36g_medium.gif'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='xl:h-full flex flex-col-reverse md:flex-row items-center px-5'>
            <div className='md:w-1/2 space-y-4'>
                <h1 className='font-semibold text-5xl leading-snug'>
                Boost Your Website&apos;s <span className='text-purple-500'>SEO</span> Performance
                </h1>
                <p className='font-extralight text-lg text-gray-500 leading-snug'>
                Welcome to our powerful SEO analysis tool. Gain valuable insights into your website&apos;s performance with a single click. Our widget delivers instant reports on your site&apos;s SEO strengths and weaknesses. Optimize your online presence, climb the search engine rankings, and drive more organic traffic to your website. Take the first step towards SEO success today!
                </p>
                <button className='w-[250px] font-medium py-2 px-2 border border-purple-500 rounded-lg hover:bg-purple-500  hover:text-white'><Link to={'/report'}>Get Started</Link></button>
            </div>
            <div className='md:w-1/2'>
                <img src={bannerImage}/>
            </div>
        </section>
    );
};

export default Banner;