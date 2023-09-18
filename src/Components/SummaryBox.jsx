/* eslint-disable react/prop-types */
import React from 'react';

const SummaryBox = ({info}) => {
  return (


    <section className='w-full md:w-3/5 md:flex items-center justify-around bg-white shadow-lg border-2 border-purple-500 rounded-md  lg:px-3 py-4'>
      <div className='md:w-1/2 p-2 overflow-x-scroll'>
        <h4 className='text-lg font-normal uppercase'>{info?.title}</h4>
        <h4 className='text-lg font-normal text-purple-500'>{info?.displayValue}</h4>
        <h4 className='text-base font-extralight '>{info?.description}</h4>
      </div>
      <div className='md:w-1/2 flex flex-col items-center justify-center text-purple-500 mt-4'>
        <div className="radial-progress w-14 h-14" style={{ "--value": `${info?.score * 100 }`, "--size": "1orem", "--thickness": "3px" }}>{info?.score * 100 }</div>
      </div>
    </section>


  );
};

export default SummaryBox;