import React from "react";
import { useNavigate } from "react-router-dom";
import app1Logo from "../app1/assets/logo.jpg";
import app2Logo from "../app2/assets/logo.png";
import app3Logo from "../app3/assets/logo.png";

const SelectApp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 tracking-wide text-center">
        Applications Board
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* App 1 Card */}
        <div 
          onClick={() => navigate("/app1")} 
          className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 text-center w-56"
        >
          <img 
            src={app1Logo} 
            alt="App 1" 
            className="w-36 h-36 rounded-full object-cover border-4 border-gray-200 mx-auto mb-4 transition-transform hover:scale-105" 
          />
          <p className="text-lg font-semibold text-blue-500 uppercase">House of Cert</p>
        </div>

        {/* App 2 Card */}
        <div 
          onClick={() => navigate("/ai-nsider")} 
          className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 text-center w-56"
        >
          <img 
            src={app2Logo} 
            alt="App 2" 
            className="w-36 h-36 rounded-full object-cover border-4 border-gray-200 mx-auto mb-4 transition-transform hover:scale-105" 
          />
          <p className="text-lg font-semibold text-blue-500 uppercase">
            AI-Nsider</p>
        </div>

        {/* App 3 Card */}
        <div 
          onClick={() => navigate("/app3")} 
          className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 text-center w-56"
        >
          <img 
            src={app3Logo} 
            alt="App 3" 
            className="w-36 h-36 rounded-full object-cover border-4 border-gray-200 mx-auto mb-4 transition-transform hover:scale-105" 
          />
          <p className="text-lg font-semibold text-blue-500 uppercase">Learn2Trade</p>
        </div>
      </div>
    </div>
  );
};

export default SelectApp;
