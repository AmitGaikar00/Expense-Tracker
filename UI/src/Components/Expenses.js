import React from "react";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {deleteExpenses} from '../Services/requests'
import toast from "react-hot-toast";


function Expenses({ list }) {
  const navigate = useNavigate();
  // console.log(typeof(list));
  function handleDelete(expense){
    // e.preventDefault();
    console.log("delete :" , expense)

    try{
      const response = deleteExpenses();
      toast.success("Expense deleted successfully");
      

    }catch(error){
      toast.error(error.message);
      console.log(error);
    }
    
  }
  function handleView(expense){
    const id = expense?.id;
    console.log("view:" , id)
    navigate(`/expense/${id}`);
    
  }
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
            <th scope="col" className="px-6 py-4">
              Amount (Rs.)
            </th>
            <th scope="col" className="px-6 py-4">
              Date
            </th>
            <th scope="col" className="px-6 py-4">
              Options
            </th>
          </tr>
        </thead>
        {list.map((expense, index) => (
          <tbody key={index}>
            <tr className="border-b ">
              <td className="whitespace-nowrap px-4 py-4 font-medium">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{expense.name}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {expense.category}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-bold">
                {expense.amount}
              </td>
              <td className=" px-6 py-4"></td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex gap-5 ">
                  <button className="" onClick={() => handleDelete(expense) }>
                    <AiOutlineDelete className="text-xl text-primary hover:text-black cursor-pointer" />
                  </button>
                  <button onClick={() => handleView(expense)}>
                    <BsPencil className="text-xl text-black hover:text-primary cursor-pointer" />
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
