import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
    const { id } = useParams(); 
    const [job, setJob] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const fetchJob = async () => {
            try {
                const response = await fetch(`/api/jobs/${id}`);
                const data = await response.json();
                setJob(data);
            } catch (err) {
                console.log('Failed to fetch job data', err);
            } finally {
                setLoading(false);
            }
        }

        fetchJob();
    });
    return loading ? <Spinner /> : (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <div className='bg-white rounded-xl shadow-md relative'>
                    <div className='p-4'>
                        <div className='mb-6'>
                            <div className='text-gray-600 my-2'>{job.type}</div>
                            <h3 className='text-xl font-bold'>{job.title}</h3>
                        </div>

                        <div className='mb-2 font-palanquin'>
                            {job.description}
                        </div>

                        <h3 className='text-indigo-500 mb-2'>
                            {job.salary} / Year
                        </h3>
                        
                        <div className='border border-gray-100 mb-5'></div>  

                        <div className='flex flex-col lg:flex-row justify-between mb-2'>
                            <div className='text-orange-700 mb-3'>
                                <FaMapMarkerAlt className="inline text-lg mb-2 mr-2" />
                                {job.location}
                            </div>
                        </div>

                        <div className="flex gap-3 flex-col font-palanquin">
                            <h1 className="text-lg text-gray-600">Company</h1>
                            <h2 className="font-bold mb-2 text-xl">{job.company.name} </h2>
                            <div>{ job.company.description }</div>
                            <div>
                                <p className="underline text-red-500">{`Email: ${job.company.contactEmail}`}</p>
                                <p className="">{`Contact: ${job.company.contactPhone}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JobPage;