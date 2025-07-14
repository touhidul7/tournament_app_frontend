
import { Outlet } from 'react-router';
import BottomNav from '../components/BottomNav';

const MainLayout = () => {
    return (
        <div>
            <Outlet/>
            <BottomNav />
        </div>
    );
};

export default MainLayout;