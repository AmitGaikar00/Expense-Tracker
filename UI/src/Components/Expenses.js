import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { deleteExpense } from "../Services/requests";
import toast from "react-hot-toast";

function Expenses({ list, fetchExpenses }) {
  const [data, setData] = useState(list);
  const navigate = useNavigate();

  function handleDelete(expense) {
    console.log("delete :", expense);
    const id = expense?._id;

    try {
      const response = deleteExpense(id);
      response.then(() => {
        navigate("/");
        fetchExpenses();
      });

      toast.success("Expense deleted successfully");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }
  function handleView(expense) {
    const id = expense?._id;
    console.log("view:", id);
    navigate(`/expense/${id}`);
  }

  const handleAmountAscending = () => {
    const sortedData = data.sort(function (a, b) {
      return a.amount - b.amount;
    });

    setData([...sortedData]);
  };
  const handleAmountDescending = () => {
    const sortedData = data.sort(function (a, b) {
      return b.amount - a.amount;
    });

    setData([...sortedData]);
  };

  return (
    <section className="container overflow-x-scroll lg:overflow-auto">
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-4 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Category
            </th>
            <th scope="col" className="px-6 py-4 ">
              <div className="flex  items-center gap-2">
                Amount (Rs.)
                <FaSortAlphaUp
                  className="text-lg cursor-pointer"
                  onClick={handleAmountAscending}
                />
                <FaSortAlphaDown
                  className="text-lg cursor-pointer"
                  onClick={handleAmountDescending}
                />
              </div>
            </th>
            <th scope="col" className="px-6 py-4 ">
              Date
            </th>
            <th scope="col" className="px-6 py-4">
              Options
            </th>
          </tr>
        </thead>
        {data.map((expense, index) => (
          <tbody key={index}>
            <tr className="border-b ">
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{expense?.name}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {expense?.category}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-bold">
                {expense?.amount}
              </td>
              <td className=" px-6 py-4">{expense?.createdAt}</td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex gap-5 ">
                  <button className="" onClick={() => handleDelete(expense)}>
                    <AiOutlineDelete
                      // onClick={() => handleDelete(expense)}
                      className="text-xl text-primary hover:text-black cursor-pointer"
                    />
                  </button>
                  <button onClick={() => handleView(expense)}>
                    <BsPencil
                      // onClick={() => handleView(expense)}
                      className="text-xl text-black hover:text-primary cursor-pointer"
                    />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
}

export default Expenses;
