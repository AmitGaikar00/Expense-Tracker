import React from "react";

function Expenses() {
  return (
    <section className="container overflow-x-scroll lg:overflow-auto animate-pulse ">
      <table className="min-w-full text-left text-sm font-light bg-slate-300 border-white ">
        <thead className="border-b font-medium dark:border-neutral-500 bg-slate-300">
          <tr>
            <th scope="col" className="px-4 py-4 bg-slate-300"></th>
            <th scope="col" className="px-6 py-4 bg-slate-300"></th>
            <th scope="col" className="px-6 py-4 bg-slate-300"></th>
            <th scope="col" className="px-6 py-4 bg-slate-300"></th>
            <th scope="col" className="px-6 py-4 bg-slate-300"></th>
            <th scope="col" className="px-6 py-4 bg-slate-300"></th>
          </tr>
        </thead>
        <br />
        {[...Array(10)].map((index) => (
          <tbody key={index}>
            <tr className="border-b bg-slate-300">
              <td className="whitespace-nowrap px-4 py-4 font-medium bg-slate-300"></td>
              <td className="whitespace-nowrap px-6 py-4 bg-slate-300"></td>
              <td className="whitespace-nowrap px-6 py-4 bg-slate-300"></td>
              <td className="whitespace-nowrap px-6 py-4 font-bold bg-slate-300"></td>
              <td className=" px-6 py-4 bg-slate-300"></td>
              <td className="whitespace-nowrap px-6 py-4 bg-slate-300">
                <div className="flex gap-5 bg-slate-300"></div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
}

export default Expenses;
