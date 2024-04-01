import React from 'react'
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import Error from '../assets/images/Error.png';

const NotFoundPage = () => {
    return (
        <>
            <section className="h-lvh flex items-center justify-center gap-9 font-poppins">  
                <div>
                    <h1 className='mb-5 text-8xl font-bold text-red-500'>Ooopss!</h1>
                    <h3 className='mb-10 text-4xl text-indigo-500 font-bold'>404 Page Not Found!</h3>
                    <Link 
                        to='/'
                        className='text-md text-white px-5 py-2 rounded-md bg-indigo-500 flex items-center gap-2 justify-center w-[250px] hover:bg-indigo-400 transition-all'
                    >
                        <span>{ <FaArrowLeft /> }</span>Go to Home
                    </Link>
                </div>
                <div >
                    <div>
                        <img 
                            src={Error} 
                            alt="404 images" 
                            className='w-[700px]'  
                        />
                    </div>
                </div>
                
            </section>
        </>
    );
}

export default NotFoundPage