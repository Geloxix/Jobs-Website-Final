import { Link } from "react-router-dom";

const ViewAllJobs = () => {
    return (
        <section className="m-auto max-w-lg px-6 py-6">
            <Link
                to="/jobs"
                className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 dark:bg-indigo-500"
            >
                View All Jobs
            </Link>
        </section>
    );
}

export default ViewAllJobs;

