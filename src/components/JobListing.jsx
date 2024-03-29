import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;
    if (!showFullDescription) {
        description = description.substring(0, 90) + '-';
    }

    return (
        <div className='bg-white rounded-xl shadow-lg leading-5 relative dark:bg-zinc-800 dark:text-white'>
        <div className='p-5'>
            <div className='mb-4'>
                <div className='text-gray-600 text-[13px] my-2 dark:text-gray-400'>{job.type}</div>
                <h3 className='text-2xl  dark:text-indigo-500' >{job.title}</h3>
            </div>

            <div className='mb-1 text-[14px]'>
                {description}
            </div>

            <button 
                    className="text-indigo-700 hover:text-indigo-300 mb-5 text-[11px]"
                    onClick={() => {showFullDescription ? setShowFullDescription(false) : setShowFullDescription(true)}}
                >{showFullDescription ? 'Show Less..' : 'Show More..'}</button>
            
            <h3 className='text-indigo-500 mb-2'>
                {job.salary} / Year
            </h3>

            <div className='border border-gray-100 mb-5'></div>

            <div className='flex flex-col items-center lg:flex-row justify-between mb-4'>
                <div className='text-orange-700 mb-3 dark:text-red-500' >
                    <FaMapMarkerAlt className="inline text-md mb-2 mr-2 dark:text-red-500" />
                    {/* <i className="fa-solid fa-location-dot text-lg"></i> */}
                    {job.location}
                </div>
                <Link
                    to={`/jobs/${job.id}`}
                    className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-3xl text-center text-sm dark:shadow-lg dark:shadow-indigo-500/30 transition-all'
                >
                    Read More
                </Link>
            </div>
        </div>
    </div>
    );
}

export default JobListing;