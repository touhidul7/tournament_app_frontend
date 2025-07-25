import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight, faHandHoldingDollar, faPiggyBank, faPlusCircle, faTimes, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { NavLink, useOutletContext } from 'react-router';

const Wallet = () => {
  const { totalPay, deposite, result, updateData, withdrawRequest } = useOutletContext();
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { register, handleSubmit, reset } = useForm();




  const onSubmit = (data) => {
    // console.log("Form Data:", data );
    let getIncomeData = result.message != "No player results found for this user" ? ((result.total_prize + result.total_win_price) - result.total_income_deposit) : 0

    if (parseInt(data?.amount) > parseInt(getIncomeData) || parseInt(data?.amount) <= 0) {
      toast.error("Insufficient balance to deposit.");
      // navigate("/addmoney");
      return;
    }

    const depositPayload = {
      user_id: user.user.uid,
      // transaction_id: 'dfgfg',
      // payment_phone_number:'3424',
      status: 1,
      amount: data?.amount,
      payment_method: "income",
    };
    console.log("Deposit Payload:", depositPayload);

    const request = axios.post(`${VITE_API_BASE_URL}/add/deposite`, depositPayload);

    toast.promise(request, {
      loading: 'Sending...',
      success: 'Success !',
      error: 'Something went wrong!',
    });
    request
      .then((response) => {
        console.log("Response:", response);
        if (response.status === 201) {
          updateData();
          reset();
          setShowModal(false);
        }
      })

  };





  return (
    <div className='max-w-md mx-auto font-Jakarta bg-mainbg space-y-3 pb-30 pt-5'>
      {/* wallet header */}
      <div className='w-[96%] mx-auto flex justify-between items-center py-3 px-4 font-medium text-white bg-cardbg rounded-lg'>
        <NavLink to='/profile'><FontAwesomeIcon icon={faChevronLeft} className='text-xl' /></NavLink>
        <h2 className='text-lg'>Your Wallet</h2>
      </div>
      {/* Deposite section */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-2 rounded-lg justify-between items-center'>
        <h2>TOTAL DEPOSIT</h2>
        <h2 className='text-lg font-semibold'>
          BDT <span className='text-green-600'>{deposite ? deposite : 0}</span>
        </h2>
      </div>
      {/* Payed section */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-2 rounded-lg justify-between items-center'>
        <h2>TOTAL PAYED</h2>
        <h2 className='text-lg font-semibold'>
          BDT <span className='text-green-600'>{totalPay ? totalPay : 0}</span>
        </h2>
      </div>
      {/* Total Get Prize */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-2 rounded-lg justify-between items-center'>
        <h2>TOTAL INCOME</h2>
        <h2 className='text-lg font-semibold'>
          BDT <span id='incomeData' className='text-green-600'>{result.message != "No player results found for this user" ? (result.total_prize + result.total_win_price) - result.total_income_deposit : 0}</span>
        </h2>
      </div>
      {/* Total Withdraw */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-2 rounded-lg justify-between items-center'>
        <h2>TOTAL WITHDRAW</h2>
        <h2 className='text-lg font-semibold'>
          BDT <span id='incomeData' className='text-green-600'>{withdrawRequest ? withdrawRequest : 0}</span>
        </h2>
      </div>
      {/* transaction section */}
      <NavLink to='/notifications' className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-2 rounded-lg justify-between items-center font-light'>
        <h2>
          View Transaction History
        </h2>
        <FontAwesomeIcon icon={faChevronRight} />
      </NavLink>
      {/* winning balance */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-3 rounded-lg justify-between items-center font-light'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 items-center'>
            <FontAwesomeIcon icon={faTrophy} className='text-amber-400' /> <p className='text-[15px]'>WITHDRAW</p>
          </div>
          {/* <h2 className='text-lg'>BDT 0</h2> */}
        </div>
        <NavLink to='/withdraw' className='flex items-center gap-1 bg-white rounded-sm text-cardbg px-1 py-1'>
          <FontAwesomeIcon icon={faHandHoldingDollar} className='text-xl' /> <p>Withdraw</p>
        </NavLink>
      </div>
      {/* Deposit cash section */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-3 rounded-lg justify-between items-center font-light'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2'>
            <FontAwesomeIcon icon={faPiggyBank} className='text-amber-400' /> <p className='text-[15px]'>DEPOSIT MONEY</p>
          </div>
          {/* <h2 className='text-lg'>BDT 0</h2> */}
        </div>
        <NavLink to='/addmoney' className='flex items-center gap-1 bg-white rounded-sm text-cardbg px-1 py-1'>
          <FontAwesomeIcon icon={faPlusCircle} className='text-xl' /> <p>Add Money</p>
        </NavLink>
      </div>
      {/* Deposit Income section */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-3 rounded-lg justify-between items-center font-light'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2'>
            <FontAwesomeIcon icon={faPiggyBank} className='text-amber-400' /> <p className='text-[15px]'>DIPOSIT BY INCOME </p>
          </div>
          {/* <h2 className='text-lg'>BDT 0</h2> */}
        </div>
        <button onClick={() => setShowModal(true)} className='flex items-center gap-1 bg-white rounded-sm text-cardbg px-1 py-1'>
          <FontAwesomeIcon icon={faPlusCircle} className='text-xl' /> <p>Deposite </p>
        </button>
      </div>
      {/* HOW TO ADD MONEY? */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-3 rounded-lg justify-between items-center font-light'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 items-center'>
            <FontAwesomeIcon icon={faPlayCircle} className='text-amber-400' /> <p className='text-[15px]'>How to add money?</p>
          </div>
          <h2 className='text-md font-Siliguri'>কিভাবে টাকা অ্যাড করবেন</h2>
        </div>
        <div className='flex items-center gap-1 bg-white rounded-sm text-cardbg px-1 py-1 font-Siliguri'>
          <FontAwesomeIcon icon={faPlayCircle} className='text-xl text-red-800' /> <p>ভিডিওটি দেখুন</p>
        </div>
      </div>
      {/* how get room id */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-3 rounded-lg justify-between items-center font-light'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 items-center'>
            <FontAwesomeIcon icon={faPlayCircle} className='text-amber-400' /> <p className='text-[15px]'>How to collect Room ID?</p>
          </div>
          <h2 className='text-md font-Siliguri'>কিভাবে রুম আইডি পাবেন</h2>
        </div>
        <div className='flex items-center gap-1 bg-white rounded-sm text-cardbg px-1 py-1 font-Siliguri'>
          <FontAwesomeIcon icon={faPlayCircle} className='text-xl text-red-800' /> <p>ভিডিওটি দেখুন</p>
        </div>
      </div>
      {/* how to join a match */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-3 rounded-lg justify-between items-center font-light'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 items-center'>
            <FontAwesomeIcon icon={faPlayCircle} className='text-amber-400' /> <p className='text-[15px]'>How to join in a match?</p>
          </div>
          <h2 className='text-md font-Siliguri'>কিভাবে ম্যাচে জয়েন করবেন</h2>
        </div>
        <div className='flex items-center gap-1 bg-white rounded-sm text-cardbg px-1 py-1 font-Siliguri'>
          <FontAwesomeIcon icon={faPlayCircle} className='text-xl text-red-800' /> <p>ভিডিওটি দেখুন</p>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-5 rounded-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-black"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
            <h2 className="text-lg font-semibold mb-3">Deposit Money</h2>
            {/* Modal content here */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
              <input
                type="number"
                {...register("amount", { required: true })}
                placeholder="Enter amount (BDT)"
                className="border border-gray-300 p-2 rounded"
              />
              <button type='submit' className="bg-cardbg text-white py-2 rounded hover:bg-opacity-80">
                Submit Deposit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;