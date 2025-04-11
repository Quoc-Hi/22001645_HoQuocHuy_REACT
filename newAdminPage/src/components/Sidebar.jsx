import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/3_Data/Lab_05/image 1858.png'
import iconDashboard from '../assets/3_Data/Lab_05/Squares four 1.png'
import folder from '../assets/3_Data/Lab_05/Folder.png'
import groups from '../assets/3_Data/Lab_05/Groups.png'
import pie_chart from '../assets/3_Data/Lab_05/Pie chart.png'
import chat from '../assets/3_Data/Lab_05/Chat.png'
import code from '../assets/3_Data/Lab_05/Code.png'
import img from '../assets/3_Data/Lab_05/Group.png'

const Sidebar = () => {
  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="px-5 py-4">
        <div className="text-pink-500 font-bold text-xl flex items-center gap-2">
          <div className="flex justify-center items-center px-5 py-6">
            <img src={logo} alt="" className="w-24 object-contain" />
          </div>
        </div>
      </div>
      
      <nav className="flex-1">
        <Link to="/" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <div className="mr-3">
            <img src={iconDashboard} alt=""  />
          </div>
          <span className="mr-3">Dashboard</span>
        </Link>
        <Link to="/projects" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <div className="mr-3">
            <img src={folder} alt="" />
          </div>
          <span className="mr-3">Projects</span>
        </Link>
        <Link to="/teams" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <div className="mr-3">
            <img src={groups} alt="" />
          </div>
          <span className="mr-3">Teams</span>
        </Link>
        <Link to="/analytics" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <div className="mr-3">
            <img src={pie_chart} alt="" />
          </div>
          <span className="mr-3">Analytics</span> 
        </Link>
        <Link to="/messages" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <div className="mr-3">
            <img src={chat} alt="" />
          </div>
          <span className="mr-3">Messages</span> 
        </Link>
        <Link to="/integrations" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <div className="mr-3">
            <img src={code} alt="" />
          </div>
          <span className="mr-3">Integrations</span> 
        </Link>
      </nav>
      
      <div className="p-4 m-4 bg-blue-50 rounded-lg text-center mt-auto">
        <div className="mb-2">
          <img src={img} alt=""  />
        </div>
        <div className="font-bold mb-2">v2.0 is available</div>
        <button className="w-full py-2 px-4 bg-white border border-gray-200 rounded hover:bg-gray-50">
          Try now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;