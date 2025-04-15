import React, { useState, useEffect } from "react";
import Overview from "../components/Overview";
import iconDashboard from "../assets/3_Data/Lab_05/Squares four 1.png";
import filetext from "../assets/3_Data/Lab_05/File text 1.png";
import search from "../assets/3_Data/Lab_05/Search.png";
import bell from "../assets/3_Data/Lab_05/Bell 1.png";
import help from "../assets/3_Data/Lab_05/Question 1.png";
import avatar from "../assets/3_Data/Lab_05/Avatar 313.png";
import download from "../assets/3_Data/Lab_05/Download.png";
import up from "../assets/3_Data/Lab_05/Move up.png";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";

const Dashboard = () => {
  const [stats, setStats] = useState({
    turnover: { value: 0, change: 5.33 },
    profit: { value: 0, change: 5.33 },
    newCustomers: { value: 0, change: 6.84 },
  });

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Thêm state loading
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
 
  const openAddModal = () => {
    setSelectedOrder(null);
    setModalOpen(true);
  };
 
  const openEditModal = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };
 
  const closeModal = () => {
    setModalOpen(false);
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://67ec9394aa794fb3222e224b.mockapi.io/report"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setOrders(data);

        const totalTurnover = data.reduce(
          (sum, item) => sum + (parseFloat(item.orderValue) || 0),
          0
        );
        const profit = totalTurnover * 0.35;

        const newCustomersCount = data.filter(
          (item) => item.status === "New"
        ).length;

        setStats({
          turnover: { value: totalTurnover, change: 5.33 },
          profit: { value: profit, change: 3.21 },
          newCustomers: { value: newCustomersCount, change: 6.84 },
        });

        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

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
        <DataTable
           data={orders}
           loading={loading}
           setOrders={setOrders}
           setStats={setStats}
        />
      </section>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        order={selectedOrder}
      />
    </div>
  );
};

export default Dashboard;