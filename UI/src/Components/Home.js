/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import Expenses from "./Expenses";
import ExpensesSkeleton from "./ExpensesSkeleton";
import { useExpense } from "../context/ContextProvider";
import { getAllExpenses } from "../Services/requests";

function Home() {
  const navigate = useNavigate();
  const { state, dispatch } = useExpense();
  function fetchExpenses() {
    getAllExpenses().then((result) => {
      // const data = result.config.data === undefined ? [] : result.config.data;

      // console.log("expense list ", data, result);

      dispatch({
        type: "SET_EXPENSES",
        payload: result,
      });
    });
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
    if (user) {
      fetchExpenses();
    }
  }, []);

  function handleClick(e) {
    e.preventDefault();
    navigate("/AddExpense");
  }

  return (
    <section className="container mx-auto px-5 py-4 w-full">
      <button
        onClick={handleClick}
        className="fixed bottom-10 right-10 text-5xl text-primary hover:text-black transition-all duration-200 z-500"
      >
        <BsPlusCircleFill />
      </button>
      <h1 className="font-poppins text-2xl mt-5 mb-5">
        Getting all Expenses...
      </h1>

      {/* // expnese section  */}
      {state.length === 0 ? <ExpensesSkeleton /> : <Expenses />}

      {/* <ExpenseCard /> */}
    </section>
  );
}

export default Home;
