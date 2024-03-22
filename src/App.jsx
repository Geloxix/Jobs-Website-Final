import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListings";
import Footer from "./components/Footer";

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <HomeCards />
            <JobListing />
            <Footer />
        </main>
    );
}

export default App
