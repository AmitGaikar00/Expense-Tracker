import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, [navigate]);

  const handleSubmit = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("User has Logged out");
    navigate("/login");
  };
  return (
    <header>
      <nav className="container  mx-auto w-full px-5 py-4 flex justify-between items-center border-b-2">
        <h1
          onClick={() => navigate("/")}
          className="font-bold  md:text-2xl  text-xl cursor-pointer"
        >
          <span className="text-blue-500">Expense</span>
          App
        </h1>

        {user && (
          <button
            onClick={handleSubmit}
            className="text-sm md:text-base border-2 border-blue-500 md:px-7 px-5 py-1.5 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Log out
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
