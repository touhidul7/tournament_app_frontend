
import { Outlet } from 'react-router';
import BottomNav from '../components/BottomNav';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='max-w-md mx-auto'>
            <Outlet/>
            <BottomNav />
             <Toaster />
        </div>
    );
};

export default MainLayout;