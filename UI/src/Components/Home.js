import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import Expenses from "./Expenses";
import { getAllExpenses } from "../Services/requests";

function Home() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  function fetchExpenses() {
    const response = getAllExpenses();
    response.then((result) => {
      setList([...result]);
      // console.log(result);
    });
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }

    fetchExpenses();
  }, [navigate, list]);

  function handleClick(e) {
    e.preventDefault();
    navigate("/AddExpense");
  }

  return (
    <section className="container mx-auto px-5 py-4 w-full">
      <button
        onClick={handleClick}
        className="fixed bottom-10 right-10 text-5xl text-primary hover:text-black transition-all duration-200"
      >
        <BsPlusCircleFill />
      </button>
      <h1 className="font-poppins text-2xl mt-5 mb-5">
        Getting all Expenses...
      </h1>

      {/* // expnese section  */}
      <Expenses list={list} fetchExpenses={fetchExpenses}/>

      {/* <ExpenseCard /> */}
    </section>
  );
}

export default Home;
