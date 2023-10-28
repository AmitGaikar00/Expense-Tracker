import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useExpense } from "../context/ContextProvider";
import { updateExpense } from "../Services/requests";

function AddExpense() {
  const navigate = useNavigate();
  const { state, dispatch } = useExpense();

  function handleOK(e) {
    e.preventDefault();
    navigate(-1);
  }

  function handleUpdate(e) {
    // console.log("update", data);
    e.preventDefault();

    const updateData = {
      expenseName: data.expenseName,
      expenseCategory: data.expenseCategory,
      expenseAmount: data.expenseAmount,
      attributes: [
        {
          attribute_name: "to",
          attribute_value: "test_attribute_value",
        },
      ],
    };

    updateExpense(updateData, expenseId).then(() => {
      dispatch({
        type: "UPDATE_EXPENSE",
        payload: data,
      });

      // console.log("updateed", state);
      navigate("/");
      toast.success("Expense has been updated");
    });
  }

  const { expenseId } = useParams();
  const [data, setExpenseData] = useState(
    state.find((e) => e.id === expenseId)
  );

  useEffect(() => {
    setExpenseData(state.find((e) => e.id === expenseId));
  }, [expenseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({ ...data, [name]: value });
  };

  return (
    <section className="container mx-auto px-5 py-10">
      <div className="w-full mx-auto max-w-sm">
        <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
          Update Expense
        </h1>
        {/* <form> */}
        <div className="flex flex-col mb-6 w-full">
          <label
            htmlFor="Name"
            className="text-[#5a7184] font-semibold block absolute pl-5"
          >
            Name
          </label>
          <input
            type="text"
            name="expenseName"
            value={data?.expenseName || ""}
            onChange={handleChange}
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
            type="text"
            name="expenseAmount"
            value={data?.expenseAmount}
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
            name="expenseCategory"
            value={data?.expenseCategory}
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

        <div className="flex justify-around">
          <button
            onClick={handleOK}
            className="bg-white text-blue-500 font-bold text-lg py-4 px-8 rounded-lg my-6 border-blue-500 border-2 hover:bg-blue-500 hover:text-white transition-all duration-200"
          >
            ok
          </button>
          <button
            onClick={handleUpdate}
            className="bg-black text-white font-bold text-lg py-4 px-8  rounded-lg my-6 border-black border-2 hover:bg-white hover:text-black transition-all duration-200"
          >
            Update
          </button>
        </div>
        {/* </form> */}
      </div>
    </section>
  );
}

export default AddExpense;
