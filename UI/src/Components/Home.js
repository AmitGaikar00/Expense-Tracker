import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import Expenses from "./Expenses";
import ExpensesSkeleton from "./ExpensesSkeleton";
import { getAllExpenses } from "../Services/requests";

function Home() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchExpenses() {
    // setLoading(true);
    console.log("fetchExpenses run");
    const response = getAllExpenses();
    response.then((result) => {
      setList([...result]);
      setLoading(false);
    });
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
    fetchExpenses();
  }, [navigate]);

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
      {loading ? <ExpensesSkeleton /> : <Expenses key="key" list={list} />}

      {/* <ExpenseCard /> */}
    </section>
  );
}

export default Home;
