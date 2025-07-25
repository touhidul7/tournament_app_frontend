import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Rules = () => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = useState(0);

    useEffect(() => {
        console.log("hit rules");
        fetch(`${BASE_URL}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error("Failed to fetch categories:", err));
    }, [BASE_URL]);

    return (
        <div className='max-w-md mx-auto font-Jakarta bg-mainbg pb-30 j min-h-screen'>
            <div className=" bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to='/profile' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3">
                        <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                        Rules
                    </NavLink>
                </div>
                {/* top navigation button */}
                <div className='mt-28'>

                    {categories && categories.length > 0 ? (
                        <div className="md-w-[95%] grid grid-cols-3 gap-4 bg-cardbg py-2 px-2 rounded-lg shadow-sm shadow-gray-600">
                            {categories.map((category, index) => (
                                <button onClick={() => setOpen(index)} key={index} className='w-full text-center p-2 bg-hoverbg rounded-lg text-cardbg font-semibold inset-shadow-sm inset-shadow-green-500/60 hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>{category?.name}</button>
                            ))}</div>

                    ) : (<p className='text-white'>No Categories Found</p>)}

                </div>
            </div>
            {/* === Rules === */}
            <div className='w-full justify-items-center'>
                <div className="w-[95%] mt-2 text-white font-Siliguri font-medium">
                    {categories.length > 0 ? (
                        <div
                            dangerouslySetInnerHTML={{ __html: categories[open]?.rules }}
                        />
                    ) : (<div className='text-center'> No Rules Available</div>)}
                </div>
            </div>

        </div >
    );
};

export default Rules;