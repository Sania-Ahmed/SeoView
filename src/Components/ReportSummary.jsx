/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import SummaryBox from './SummaryBox';

const ReportSummary = ({ info }) => {
  console.log(info[0] ?.result[0]?.audits?.['speed-index']
    )
  const speedIndex = info[0] ?.result[0]?.audits?.['speed-index'] ;
  const jsExeTime = info[0] ?.result[0]?.audits?.['bootup-time'] ;
  const interactivity = info[0] ?.result[0]?.audits?.['interactive'] ;
  const readablity =info[0] ?.result[0]?.audits?.['font-size'] 
 
    
  


  return (
    <>
    <div className='mt-10 w-full flex justify-end '>
    <button className="w-30 font-sans font-medium py-1 px-2 border border-black rounded-lg  ">Copy Code</button>
    </div>
    <div className='mt-10 md:flex flex-col items-center justify-center space-y-5'>
    <SummaryBox info={readablity}  ></SummaryBox>
    <SummaryBox info={speedIndex}  ></SummaryBox>
    <SummaryBox info={jsExeTime}  ></SummaryBox>
    <SummaryBox info={interactivity}  ></SummaryBox>
    </div>
    </>
  );
};

export default ReportSummary;