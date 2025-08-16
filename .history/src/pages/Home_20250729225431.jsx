/* eslint-disable react-hooks/exhaustive-deps */
import {
  faBangladeshiTakaSign,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { NavLink, useOutletContext } from "react-router";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Home = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const IMAGE_URL = import.meta.env.VITE_API_IMAGE_URL;


  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const{settings} = useOutletContext();


  console.log(settings);


  useEffect(() => {
    fetch(`${BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  // console.log(categories);

  // popUpHandler function to close the dialog

  useEffect(() => {
    const popup = localStorage.getItem("popup");
    if (popup == "false") {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);


  const popUpHandler = () => {
    setOpen(false);
    localStorage.setItem("popup", "false");
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-mainbg font-Jakarta items-center justify-center justify-items-center py-2 pb-24">
      <section className="w-[95%]">
        {/* === notice board ==== */}
        <div className="bg-cardbg p-2 rounded-md text-white font-medium text-center mt-4 mb-4">
          <p>
            OFFER NOTICEBOARD{" "}
            <FontAwesomeIcon className="text-[#ff5a00]" icon={faFire} />{" "}
            <FontAwesomeIcon className="text-[#ff5a00]" icon={faFire} />
          </p>
        </div>
        <Carousel settings={settings}/>
        {/* === Match Title === */}
        <div className="bg-cardbg text-white text-lg font-medium text-center py-1 rounded-md my-6">
          <p>BR AND LONEWOLF MATCH</p>
        </div>
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
          />

          <div className="fixed top-4 right-0 left-0 m-auto z-10  overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-mainbg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-in-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
              >
                <div className="bg-mainbg px-4 pt-2 pb-4 ">
                  <div className="">
                    <div className="mt-3 w-full text-start text-lg bg-white text-cardbg font-Siliguri flex flex-col gap-2 rounded-md px-3 py-3">
                      <p className="text-center bg-red-400 text-white py-1 rounded">
                        গুরুত্বপূর্ণ নোটিশ!!
                      </p>
                      <p>
                        Br Update M590 সম্পূর্ণভাবে ব্যান এপ থেকে, M590, Double
                        Victor, Awm, M82B এগুলো চালানো যাবে না Br এ বাহিরের
                        প্লেয়ার নিয়ে ডুকবেননা এবং ইনভাইট দিবেন না - নাইলে সোজা
                        কিক খাবেন টাকা বেক পাবেন না
                      </p>
                      <ul>
                        <li>
                          ডিপোজিটে সমস্যা হলে টেলিগ্রামে মেসেজ দিন নাম্বারে কল
                          দিবেন না দয়া করে
                        </li>
                        <li>
                          {" "}
                          উইথড্র লিমিট ২৫০{" "}
                          <FontAwesomeIcon icon={faBangladeshiTakaSign} />
                        </li>
                        <li>*যেকোনো সহযোগিতায় টেলিগ্রামে জয়েন করুন</li>
                        <li>ফ্রি ম্যাচে!</li>
                        <li> জয়েন করুন, ধন্যবাদ</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => popUpHandler()}
                    className="inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-md font-Jakarta font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Okay
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
        {/* === Match Card Section === */}
        <div>
          {/* === CARD === */}

          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat, index) => (
              <NavLink
                key={index}
                to={`/brmatches/${cat.id}`} // You can customize this route
                className="bg-cardbg p-2 rounded-xl text-white"
              >
                <img
                  className="rounded-md w-full h-32 object-cover"
                  src={`${IMAGE_URL}/${cat.image}`}
                  alt={cat.name}
                />
                <p className="font-semibold text-md mt-2">{cat.name}</p>
                <p className="text-sm font-light">
                  {cat?.matches?.length || 0}  Match Found
                </p>
                {" "}
                {/* Replace with actual count if available */}
              </NavLink>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
