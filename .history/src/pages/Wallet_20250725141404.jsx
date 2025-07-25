import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight, faHandHoldingDollar, faPiggyBank, faPlusCircle, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useOutletContext } from 'react-router';

const Wallet = () => {
  const { totalPay, deposite,result } = useOutletContext();
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
      {/* transaction section */}
      <NavLink to='/transaction-history' className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-2 rounded-lg justify-between items-center font-light'>
        <h2>
          View Transaction History
        </h2>
        <FontAwesomeIcon icon={faChevronRight} />
      </NavLink>
      {/* winning balance */}
      <div className='flex w-[96%] mx-auto bg-cardbg text-white py-2 px-3 rounded-lg justify-between items-center font-light'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 items-center'>
            <FontAwesomeIcon icon={faTrophy} className='text-amber-400' /> <p className='text-[15px]'>WINNING CASH BALANCE</p>
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
            <FontAwesomeIcon icon={faPiggyBank} className='text-amber-400' /> <p className='text-[15px]'>DIPOSIT CASH BALANCE</p>
          </div>
          {/* <h2 className='text-lg'>BDT 0</h2> */}
        </div>
        <NavLink to='/addmoney' className='flex items-center gap-1 bg-white rounded-sm text-cardbg px-1 py-1'>
          <FontAwesomeIcon icon={faPlusCircle} className='text-xl' /> <p>Add Money</p>
        </NavLink>
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
    </div>
  );
};

export default Wallet;