import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <main className="dark:bg-zinc-900 font-poppins">  
            <Navbar />
            <Outlet />
        </main> 
    );
}

export default MainLayout;