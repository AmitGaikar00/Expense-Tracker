import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import Expenses from "./Expenses";
import AddExpense from "./AddExpense";

function Home() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, []);

  function handleClick(e) {
    e.preventDefault();
    navigate("/AddExpense");
  }
  const list = [
    {
      id: "1",
      name: "shopping billl",
      amount: 1324324,
      category: "grocery",
    },
    {
      id: "2",
      name: "shopping billl",
      amount: 1324324,
      category: "grocery",
    },
    {
      id: "3",
      name: "shopping billl",
      amount: 1324324,
      category: "grocery",
    },
    {
      id: "4",
      name: "shopping billl",
      amount: 1324324,
      category: "grocery",
    },
    {
      id: "5",
      name: "shopping billl",
      amount: 1324324,
      category: "grocery",
    },
    {
      id: "6",
      name: "shopping billl",
      amount: 1324324,
      category: "grocery",
    },
  ];

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
      <Expenses list={list} />

      {/* <ExpenseCard /> */}
    </section>
  );
}

export default Home;
