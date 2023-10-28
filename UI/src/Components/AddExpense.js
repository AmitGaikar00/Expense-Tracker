import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useExpense } from "../context/ContextProvider";
import { createExpense } from "../Services/requests";

function AddExpense() {
  const { dispatch } = useExpense();
  const navigate = useNavigate();
  const [data, setExpenseData] = useState({
    name: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setExpenseData({ ...data, [id]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    createExpense(data).then((result) => {
      // dispatch({
      //   type: "ADD_EXPENSE",
      //   payload: result,
      // });
      // navigate("/");
      // toast.success("Expense has been added");
      console.log(result)
    });
  }

  return (
    <section className="container mx-auto px-5 py-10">
      <div className="w-full mx-auto max-w-sm">
        <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
          Add Expense
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
              id="name"
              placeholder="Enter Expense Name"
              value={data.name}
              onChange={handleChange}
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
              type="text"
              id="amount"
              value={data.amount}
              onChange={handleChange}
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
              value={data.category}
              onChange={handleChange}
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

          <button className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 border-blue-500 border-2 hover:bg-white hover:text-blue-500 transition-all duration-200">
            Add
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddExpense;
