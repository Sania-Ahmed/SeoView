import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';


const MainPage = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='h-[100vh]'>
            <Outlet></Outlet>
        </div>
        </>
    );
};

export default MainPage;