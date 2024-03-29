import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
    return (
        <section className="py-4 dark:bg-zinc-900 dark:text-white ">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card>
                        <h2 className="text-3xl font-semibold">For Developers</h2>
                        <p className="mt-2 mb-4 text-[13px]">
                            Browse our React jobs and start your career today
                        </p>
                        <Link
                            to="/jobs"
                            className="inline-block text-[14px] bg-indigo-500 text-white rounded-3xl px-4 py-2 hover:bg-indigo-600 dark:text-white dark:shadow-lg dark:shadow-indigo-500/30 transition-all"
                        >
                            Browse Jobs
                        </Link>    
                    </Card>

                    <Card bG="bg-indigo-100">  
                        <h2 className="text-3xl font-semibold">For Employers</h2>
                            <p className="mt-2 mb-4 text-[13px] ">
                                List your job to find the perfect developer for the role
                            </p>
                            <Link
                                to="/add-jobs"
                                className="inline-block text-[14px] bg-indigo-500 text-white rounded-3xl px-4 py-2 hover:bg-indigo-600 dark:text-white dark:shadow-lg dark:shadow-indigo-500/30 transition-all"
                            >
                                Add Job
                            </Link>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default HomeCards;