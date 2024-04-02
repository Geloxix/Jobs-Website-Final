import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
    const { id } = useParams(); 
    const job = useLoaderData(); //storing loader data
    const navigate = useNavigate();
    //Hande the Deleting Job
    const handleDeleteJob = (jobId) => {
        const confirm = window.confirm('Are you sure you want to delete this job?');

        if (!confirm) {
            return;
        }

        deleteJob(jobId);
        
        toast.success(`Job deleted successfully`);
        return navigate('/jobs');
    };

    
    return (
        <>
            <section className="dark:bg-zinc-800">
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft className='mr-2'/> Back to Job Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50 dark:bg-zinc-800">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-2 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left dark:bg-zinc-900"
                            >
                                <div className="text-gray-500 mb-4">{ job.type }</div>
                                <h1 className="text-3xl font-bold mb-4 dark:text-indigo-500">
                                    { job.title }
                                </h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <FaMapMarkerAlt className="fa-solid fa-location-dot text-lg text-orange-700 mr-2" />
                                    <p className="text-orange-700">{ job.location }</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6 dark:bg-zinc-900">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Job Description
                                </h3>

                                <p className="mb-4 dark:text-white">
                                    { job.description }
                                </p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                                <p className="mb-4 dark:text-white">{ `${job.salary } / Year` }</p>
                            </div>
                        </main>

                    {/* <!-- Sidebar --> */}
                    <aside>
                        {/* <!-- Company Info --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-zinc-900 dark:text-white">
                            <h3 className="text-xl font-bold mb-6 dark:text-indigo-500">Company Info</h3>

                            <h2 className="text-2xl dark:text-indigo-500">{ job.company.name }</h2>

                            <p className="my-2">
                                { job.company.description }
                            </p>

                            <hr className="my-4" />

                            <h3 className="text-xl dark:text-indigo-500">Contact Email:</h3>

                            <p className="my-2 bg-indigo-100 dark:bg-zinc-600 p-2 font-bold">
                                { job.company.contactEmail }
                            </p>

                            <h3 className="text-xl dark:text-indigo-500">Contact Phone:</h3>

                            <p className="my-2 bg-indigo-100 p-2 font-bold dark:bg-zinc-600">{ job.company.contactPhone }</p>
                        </div>

                        {/* <!-- Manage --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md mt-6 dark:bg-zinc-900 dark:text-white">
                            <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                            <Link
                                to={`/edit-job/${job.id}`}
                                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Job</Link>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                onClick={() => handleDeleteJob(job.id)}
                            >
                                Delete Job
                            </button>
                        </div>
                    </aside>
                    </div>
                </div>
            </section>
        </>  
    );
}

const jobLoader = async({ params } ) => {
    const jobId = params.id;
    // const user = await getUser();

    // if (!user) {
    //     return redirect('/jobs');
    // }

    const response = await fetch(`/api/jobs/${jobId}`);
    const data = await response.json();
    return data;
}

export { JobPage as default, jobLoader};