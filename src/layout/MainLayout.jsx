
import { Outlet } from 'react-router';
import BottomNav from '../components/BottomNav';

const MainLayout = () => {
    return (
        <div className='max-w-md mx-auto'>
            <Outlet/>
            <BottomNav />
        </div>
    );
};

export default MainLayout;