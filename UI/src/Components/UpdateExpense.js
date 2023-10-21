import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddExpense() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  useEffect(() => {});
  const { expenseId } = useParams();
  //   console.log(expenseId);
  return (
    <section className="container mx-auto px-5 py-10">
      <div className="w-full mx-auto max-w-sm">
        <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
          Update Expense
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="Name"
              className="text-[#5a7184] font-semibold block absolute pl-5"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              placeholder="Enter Expense Name"
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border"
            />
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="amount"
              className="text-[#5a7184] font-semibold block absolute pl-5"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border"
            />
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="category"
              className="text-[#5a7184] font-semibold block absolute pl-5"
            >
              Category
            </label>
            <select
              type="select"
              id="category"
              placeholder="Select Category"
              className="text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border"
            >
              <option defaultValue>Select Category</option>
              <option value="ENTERTAINMENT">ENTERTAINMENT</option>
              <option value="GROCERY">GROCERY</option>
              <option value="RESTAURANT">RESTAURANT</option>
              <option value="UTILITY">UTILITY</option>
              <option value="MISCELLANEOUS">MISCELLANEOUS</option>
            </select>
          </div>

          <button className="bg-black text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 border-black border-2 hover:bg-white hover:text-black transition-all duration-200">
            Update
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddExpense;
