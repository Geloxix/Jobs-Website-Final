import React from 'react'
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
    return (
        <section className='h-lvh flex items-center flex-col justify-center text-8xl gap-2 font-poppins'>  
            < FaExclamationTriangle 
                className='text-yellow-400 text-6xl flex'
            />
            <h1 className='text-indigo-500 text-5xl'>
                404 Not Found!
            </h1>
            <p className='text-2xl'>Page doesn't Exist!</p>
            <Link 
                to='/'
                className='text-lg underline text-indigo-500'
            >
                Go to Home
            </Link>
        </section>
    );
}

export default NotFoundPage