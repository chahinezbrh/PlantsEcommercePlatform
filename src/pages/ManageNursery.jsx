import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ManageNursery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nurseries, setNurseries] = useState([]);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { label: "Statistics", paths: ["/Statistics"] },
    {
      label: "Nurseries",
      paths: ["/Nurserydashboard", "/AddNursery", "/ManageNursery"],
    },
    { label: "Events", paths: ["/EventsDashboard", "/AddEvent"] },
    { label: "Log Out", paths: ["/log-out"] },
  ];

  useEffect(() => {
    fetch("http://localhost:9900/api/admin/pending")
      .then((res) => res.json())
      .then((data) => setNurseries(data))
      .catch((error) => console.error("Failed to fetch nurseries:", error));
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:9900/api/admin/approve/${id}`);
      setNurseries((prev) => prev.filter((nursery) => nursery._id !== id));
    } catch (error) {
      console.error("Failed to approve nursery:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.put(`http://localhost:9900/api/admin/reject/${id}`);
      setNurseries((prev) => prev.filter((nursery) => nursery._id !== id));
    } catch (error) {
      console.error("Failed to reject nursery:", error);
    }
  };

  const handleView = (nursery) => {
    navigate(`/AddNursery`, { state: { nurseryId: nursery._id } });
  };

  return (
    <div className="bg-[#e1ece3] min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="relative w-full lg:w-1/4 flex-shrink-0 px-4 sm:px-8 md:px-12 pt-10">
          <ul className="mt-6 pt-40 space-y-5 lg:absolute left-0 w-full px-4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => navigate(item.paths[0])}
                  className={`text-[16px] font-light w-full py-4 font-RedHatText transition duration-300 cursor-pointer ${
                    isActive(item.paths[0])
                      ? "bg-[rgba(67,134,46,1)] text-white"
                      : "hover:bg-[rgba(67,134,46,1)] hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto p-4 space-y-14">
          <h2 className="text-black text-3xl sm:text-4xl font-medium font-inter mt-[60px]">
            Admin Dashboard
          </h2>
          <p className="text-black text-base sm:text-lg md:text-xl font-normal font-redhat leading-relaxed text-center">
            Track performance, Manage and control your growth
          </p>

          <div className="w-full overflow-x-auto">
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-4 font-redhat text-black text-base font-medium border-b border-[#818181] pb-2">
              <div className="col-span-2">Nursery</div>
              <div className="text-center">Location</div>
              <div className="text-center">Contact</div>
              <div className="text-center">Action</div>
            </div>

            {nurseries.map((nursery) => (
              <div
                key={nursery._id}
                className="grid grid-cols-5 sm:grid-cols-6 gap-4 items-center border-b border-[#818181] py-4 font-redhat"
              >
                <div className="col-span-2">
                  <div className="text-xl font-medium">{nursery.name}</div>
                  <div className="text-sm">{nursery.owner}</div>
                </div>
                <div className="text-center">{nursery.location}</div>
                <div className="text-center">{nursery.contact}</div>

                <div className="flex flex-col items-center justify-center space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleApprove(nursery._id)}
                      className="text-green-800 underline"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleView(nursery)}
                      className="text-blue-700 underline"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(nursery._id)}
                      className="text-black text-xl leading-none"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {nurseries.length === 0 && (
              <div className="text-center py-6 text-gray-600 font-redhat">
                No nurseries available.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageNursery;



