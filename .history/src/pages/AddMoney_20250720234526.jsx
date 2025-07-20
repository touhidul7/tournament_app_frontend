/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";

const AddMoney = () => {
  const [activeTab, setActiveTab] = useState("bKash");
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const tabs = ["bKash", "Rocket", "Nagad"];
  const receiverNumber = "01767872006";
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const handleCopy = () => {
    navigator.clipboard.writeText(receiverNumber);
    alert("Number copied!");
  };
  const navigate = useNavigate();

  /* Data Post System Here */

  const onSubmit = (data) => {
    // console.log("Form Data:", data );

    const depositPayload = {
      user_id: user.user.uid,
      transaction_id: data.transaction_id,
      payment_phone_number: data?.payment_phone_number,
      amount: data?.amount,
      payment_method: activeTab,
    };
    console.log("Deposit Payload:", depositPayload);

    const request = axios.post(`${VITE_API_BASE_URL}/add/deposite`, depositPayload);

    toast.promise(request, {
      loading: 'Saving project...',
      success: 'Project saved!',
      error: 'Something went wrong!',
    });
    request
      .then((response) => {
        console.log("Response:", response);
        if (response.status === 201) {
          reset();
          navigate("/thankyou");
        }
      })

  };
  return (
    <div className="max-w-md mx-auto  p-6 bg-white rounded-lg shadow-lg">
      {/* Tab Buttons */}
      <div className="flex justify-between mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-center py-2 font-semibold border ${activeTab === tab
              ? "bg-purple-100 text-purple-700 border-purple-400"
              : "bg-gray-100 text-gray-600 border-gray-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Transaction ID Input */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="transaction_id" className={`block font-bold mb-1 ${activeTab == "bKash" ? "text-pink-700" : activeTab == "Nagad" ? "text-[#EF8F1C]" : "text-[#7D2A8B]"} `}>ট্রানজেকশন আইডি দিন</label>
          <input
            type="text"
            id="transaction_id"
            name="transaction_id"
            {...register("transaction_id", { required: true })}
            className={`w-full p-2 border  rounded focus:outline-none focus:ring-2  ${activeTab == "bKash" ? "focus:ring-pink-500 border-pink-300" : activeTab == "Nagad" ? "focus:ring-[#EF8F1C] border-[#e1a55c]" : "focus:ring-[#7D2A8B] border-[#93529d]"}`}
            placeholder="ট্রানজেকশন আইডি দিন"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="payment_phone_number" className={`block font-bold mb-1 ${activeTab == "bKash" ? "text-pink-700" : activeTab == "Nagad" ? "text-[#EF8F1C]" : "text-[#7D2A8B]"} `}>ফোন নাম্বার দিন</label>
          <input
            type="text"
            id="payment_phone_number"
            name="payment_phone_number"
            {...register("payment_phone_number", { required: true })}
            className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="ট্রানজেকশন আইডি দিন"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className={`block font-bold mb-1 ${activeTab == "bKash" ? "text-pink-700" : activeTab == "Nagad" ? "text-[#EF8F1C]" : "text-[#7D2A8B]"} `}>পরিমাণ</label>
          <input
            type="text"
            id="amount"
            name="amount"
            {...register("amount", { required: true })}
            className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="ট্রানজেকশন আইডি দিন"
          />
        </div>

        {/* Instructions */}
        <div className="text-sm space-y-2 text-gray-700 bg-pink-50 p-4 rounded-md border border-pink-200">
          <p>◉ *247# ডায়াল করে আপনার {activeTab} মোবাইল মেনুতে যান অথবা অ্যাপে যান।</p>
          <p>◉ <span className="text-green-600 font-semibold">Send Money</span> - এ ক্লিক করুন।</p>
          <p>◉ প্রাপক নম্বর হিসেবে নিচের এই নম্বরটি লিখুন</p>

          <div className="flex items-center gap-2">
            <span className="font-bold text-yellow-700">{receiverNumber}</span>
            <button
              onClick={handleCopy}
              className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
            >
              Copy
            </button>
          </div>

          <p>◉ নিশ্চিত করতে এখন আপনার {activeTab} মোবাইল মেনু পিন লিখুন।</p>
          <p>
            ◉ এরপর উপরের বক্সে আপনার Transaction ID এবং Amount দিন আর নিচের VERIFY বাটনে ক্লিক করুন।
          </p>
        </div>

        {/* Verify Button */}
        <button
          type="submit"
          className={`w-full mt-6  text-white py-2 rounded font-bold mb-16 ${activeTab == "bKash" ? "bg-pink-600 hover:bg-pink-700" : activeTab == "Nagad" ? "bg-[#EF8F1C] hover:bg-[#ef7e1c]" : "bg-[#7D2A8B] hover:bg-[#632a8b]"}`}
        >
          VERIFY
        </button>
      </form>
    </div>
  );
};

export default AddMoney;
