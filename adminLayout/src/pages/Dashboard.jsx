import React, { useState } from "react";
import Overview from "../components/Overview";
import iconDashboard from "../assets/3_Data/Lab_05/Squares four 1.png";
import filetext from "../assets/3_Data/Lab_05/File text 1.png";
import search from "../assets/3_Data/Lab_05/Search.png";
import bell from "../assets/3_Data/Lab_05/Bell 1.png";
import help from "../assets/3_Data/Lab_05/Question 1.png";
import avatar from "../assets/3_Data/Lab_05/Avatar 313.png";
import download from "../assets/3_Data/Lab_05/Download.png";
import up from "../assets/3_Data/Lab_05/Move up.png";

const Dashboard = () => {
  const [stats, setStats] = useState({
    turnover: { value: 0, change: 5.33 },
    profit: { value: 0, change: 5.33 },
    newCustomers: { value: 0, change: 6.84 },
  });

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-8 border-b">
        <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center w-64 bg-gray-100 rounded-full px-3 py-2">
            <img src={search} alt="Search" className="w-8 h-8 rounded-full object-cover" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm placeholder-gray-400 w-full"
            />
          </div>
          <img src={bell} alt="" className="w-8 h-8 rounded-full object-cover" />
          <img src={help} alt="" className="w-8 h-8 rounded-full object-cover" />
          <img src={avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
        </div>
      </header>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <img src={iconDashboard} alt="" className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold">Overview</h2>
        </div>
        <Overview stats={stats} />
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={filetext} alt="" className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">Detailed report</h2>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center px-4 py-2 bg-white border border-pink-500 rounded text-pink-500">
              <span className="mr-2">
                <img src={filetext} alt="" />
              </span>{" "}
              Add
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-pink-500 rounded">
              <div className="mr-2">
                <img src={download} alt="" />
              </div>
              <span className="mr-2 text-pink-500">Import</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-pink-500 rounded">
              <div className="mr-2">
                <img src={up} alt="" />
              </div>
              <span className="mr-2 text-pink-500">Export</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;