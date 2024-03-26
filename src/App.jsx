import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobs from './pages/AddJobs';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />} >
            <Route index element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/jobs/:id' element={<JobPage />} />
            <Route path='/add-jobs' element={<AddJobs />} />
            <Route path='*' element={<NotFoundPage />} />
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App
