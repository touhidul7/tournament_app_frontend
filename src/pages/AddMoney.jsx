import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router";

const AddMoney = () => {
  const [selected, setSelected] = useState("bkash");

  const paymentManuals = {
    bkash: "1. Dial *247#\n2. Select 'Send Money'\n3. Enter our number\n4. Enter amount\n5. Confirm",
    nagad: "1. Open Nagad app\n2. Select 'Send Money'\n3. Input number\n4. Enter amount\n5. Confirm",
    rocket: "1. Dial *322#\n2. Select 'Send Money'\n3. Enter recipient\n4. Confirm transaction"
  };

  return (
    <div className="bg-mainbg max-w-md mx-auto font-Jakarta p-4 text-white">
      {/* Top bar */}
      <NavLink to='/wallet' className="flex items-center space-x-2 mb-4 max-w-md mx-auto bg-cardbg rounded-lg px-5 py-2 text-lg">
        <FontAwesomeIcon icon={faChevronLeft}/>
        <h1 className="text-lg font-semibold">Deposit</h1>
      </NavLink>

      {/* Banking Options */}
      <div className="flex space-x-3">
        <button
          onClick={() => setSelected("bkash")}
          className={`p-2 bg-white rounded-lg w-1/3 ${selected === "bkash" ? "ring-2 ring-pink-500" : ""}`}
        >
          <img src="./image/BKash-bKash2-Logo.wine.png" alt="bKash" className="w-full h-16 object-contain" />
        </button>
        <button
          onClick={() => setSelected("nagad")}
          className={`p-2 bg-white rounded-lg w-1/3 ${selected === "nagad" ? "ring-2 ring-orange-500" : ""}`}
        >
          <img src="./image/Nagad-Logo.wine.png" alt="Nagad" className="w-full h-16 object-contain" />
        </button>
        <button
          onClick={() => setSelected("rocket")}
          className={`p-2 bg-white rounded-lg w-1/3 ${selected === "rocket" ? "ring-2 ring-purple-600" : ""}`}
        >
          <img src="./image/dutch-bangla-rocket-seeklogo.png" alt="Rocket" className="w-full h-16 object-contain" />
        </button>
      </div>

      {/* Payment Manual */}
      <div className="mt-6 bg-white  text-black p-4 rounded-lg whitespace-pre-line">
        {paymentManuals[selected]}
      </div>
    </div>
  );
};

export default AddMoney;
