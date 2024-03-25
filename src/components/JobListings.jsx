import { useEffect, useState } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:8000/jobs');
                const data = await response.json();
                setJobs(data);
                if (!response.ok) {
                    throw new Error('Failed to fetch data!');
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
            
        }

        fetchJobs();
    },[]);

    const recentJobs = isHome ? jobs.slice(0, 3) : jobs;

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ? 'Recent Jobs' : 'Browse Jobs'} 
                </h2>
                { loading ? (<Spinner loading={loading} />) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recentJobs.map((job) => (
                            <JobListing 
                                key={job.id}
                                job={job}
                            />
                        ))}
                    </div>
                )}
                
            </div>
        </section>
    );
}

export default JobListings;