
import { Outlet } from 'react-router';
import BottomNav from '../components/BottomNav';
import { Toaster } from 'react-hot-toast';
import MainHeader from '../components/MainHeader';

const MainLayout = () => {
    return (
        <div className='max-w-md mx-auto'>
            <MainHeader/>
            <Outlet/>
            <BottomNav />
             <Toaster />
        </div>
    );
};

export default MainLayout;