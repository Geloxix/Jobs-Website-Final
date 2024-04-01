import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <main className="dark:bg-zinc-900 font-poppins">  
            <Navbar />
            <Outlet />
            <ToastContainer />
        </main> 
    );
}

export default MainLayout;