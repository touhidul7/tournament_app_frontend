import React from 'react';

const MyMatches = () => {
    return (
        <div className='max-w-md mx-auto font-Jakarta'>
            {/* eclips shape  */}
            <div className=" bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <button className="bg-cardbg text-white px-6 py-2 rounded-xl font-medium shadow">
                        My Matches
                    </button>
                </div>

                {/* Optional content area */}
                <div className="pt-40 w-full max-w-md px-4">
                    {/* Future content goes here */}
                </div>
            </div>
        </div>
    );
};

export default MyMatches;