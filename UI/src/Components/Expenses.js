import React, { useEffect, useState } from "react";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useExpense } from "../context/ContextProvider";
import { deleteExpense } from "../Services/requests";

function Expenses() {
  const navigate = useNavigate();
  const { state, dispatch } = useExpense();
  const [data, setData] = useState(state);
  useEffect(() => {
    setData(state);
  }, [state]);

  function handleDelete(expense) {
    console.log("delete :", expense);
    const id = expense.id;

    const response = deleteExpense(id);

    response.then((result) => {
      dispatch({
        type: "DELETE_EXPENSE",
        payload: expense,
      });
      toast.success("Expense deleted successfully");
      console.log(result);
    });
  }
  function handleView(expense) {
    const id = expense?.id;
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
            <th scope="col" className="px-4 py-4 hover:bg-gray-100">
              #
            </th>
            <th scope="col" className="px-6 py-4 hover:bg-gray-100">
              Name
            </th>
            <th scope="col" className="px-6 py-4 hover:bg-gray-100">
              Category
            </th>
            <th scope="col" className="px-6 py-4 hover:bg-gray-100">
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
            <th scope="col" className="px-6 py-4 hover:bg-gray-100">
              Date
            </th>
            <th scope="col" className="px-6 py-4 hover:bg-gray-100">
              Options
            </th>
          </tr>
        </thead>

        {data.length !== 0 &&
          data?.map((expense, index) => (
            <tbody key={index}>
              <tr className="border-b ">
                <td className="whitespace-nowrap px-4 py-4 font-medium hover:bg-gray-100">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4 hover:bg-gray-100">
                  {expense?.expenseName}
                </td>
                <td className="whitespace-nowrap px-6 py-4 hover:bg-gray-100">
                  {expense?.expenseCategory}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-bold hover:bg-gray-100">
                  {expense?.expenseAmount}
                </td>
                <td className=" px-6 py-4 hover:bg-gray-100">
                  {expense?.createdAt}
                </td>
                <td className="whitespace-nowrap px-6 py-4 hover:bg-gray-100">
                  <div className="flex gap-5 ">
                    <AiOutlineDelete
                      onClick={() => handleDelete(expense)}
                      className="text-xl text-primary hover:text-black cursor-pointer"
                    />
                    <BsPencil
                      onClick={() => handleView(expense)}
                      className="text-xl text-black hover:text-primary cursor-pointer"
                    />
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
