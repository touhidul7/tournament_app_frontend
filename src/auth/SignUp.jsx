const SignUp = () => {
    return (
        <div className='max-w-md mx-auto font-Jakarta'>
            <div>
                <h1 className="grid items-center justify-items-center text-4xl py-12">Welcome !!</h1>
            </div>
            <div className="items-center justify-items-center bg-mainbg h-screen rounded-t-[40px]">
                <h1 className="text-2xl py-8 text-white">Sign Up</h1>
                <div className="w-[80%] grid gap-5 items-center justify-items-center">
                <input className="focus:outline-none bg-amber-50 placeholder:text-mainbg rounded-md text-md w-full px-2 py-2" type="text" placeholder="First Name" />
                <input className="focus:outline-none bg-amber-50 placeholder:text-mainbg rounded-md text-md w-full px-2 py-2" type="text" placeholder="Last Name" />
                <input className="focus:outline-none bg-amber-50 placeholder:text-mainbg rounded-md text-md w-full px-2 py-2" type="e-mail" placeholder="Email" />
                <input className="focus:outline-none bg-amber-50 placeholder:text-mainbg rounded-md text-md w-full px-2 py-2" type="password" placeholder="password" />
                <button className="w-40 bg-amber-50 text-cardbg px-8 py-2 rounded-md text-xl font-semibold">Sign Up</button>
                <a className="text-center underline text-white" href="#">I already have an account</a>
                <button className="w-40 bg-cardbg border text-white px-8 py-2 rounded-md text-xl font-semibold">Log in</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;