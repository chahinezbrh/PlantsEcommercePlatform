import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";

const Nurserydashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [nurseries, setNurseries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    fetch("http://localhost:9900/api/admin/approved")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch approved nurseries");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched nurseries data:", data);

        // Handle both raw array and wrapped object cases
        const fetchedNurseries = Array.isArray(data)
          ? data
          : Array.isArray(data.approvedNurseries)
          ? data.approvedNurseries
          : [];

        setNurseries(fetchedNurseries);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load nurseries.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-[#e1ece3] min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <p>Loading nurseries...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#e1ece3] min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <div className="flex justify-center items-center h-screen text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

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
          {/* Title */}
          <div className="text-center">
            <h2 className="text-black text-3xl sm:text-4xl font-medium font-inter mt-[60px]">
              Admin Dashboard
            </h2>
          </div>

          {/* Description */}
          <div className="text-center">
            <p className="text-black text-base sm:text-lg md:text-xl font-normal font-redhat leading-relaxed">
              Track performance, Manage and control your growth
            </p>
          </div>

          {/* Add New Nursery Button */}
          <div>
            <button
              onClick={() => navigate("/ManageNursery")}
              className="bg-[rgba(67,134,46,1)] text-white text-base sm:text-lg font-redhat font-normal py-2 px-6 rounded-md cursor-pointer transition duration-300"
            >
              + Add New Nursery
            </button>
          </div>

          {/* Nurseries Table */}
          <div className="w-full overflow-x-auto">
            {/* Table Header */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 font-redhat text-black text-base font-medium border-b border-[#818181] pb-2">
              <div className="col-span-2">Nursery</div>
              <div className="text-center">Location</div>
              <div className="text-center">Contact</div>
              <div className="text-center">Products</div>
            </div>

            {/* Nursery Rows */}
            {nurseries.length > 0 ? (
              nurseries.map((nursery, index) => (
                <div
                  key={nursery._id || index}
                  className="grid grid-cols-4 sm:grid-cols-6 gap-4 items-center border-b border-[#818181] py-4 font-redhat"
                >
                  <div className="col-span-2">
                    <div className="text-xl font-medium">
                      {nursery.name || nursery.title || "Unnamed Nursery"}
                    </div>
                    <div className="text-sm">
                      {nursery.ownerName || nursery.owner || "Unknown Owner"}
                    </div>
                  </div>
                  <div className="text-center">{nursery.location || "-"}</div>
                  <div className="text-center">
                    {nursery.contact || nursery.phone || "-"}
                  </div>
                  <div className="text-center">{nursery.products || 0}</div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-gray-600 font-redhat">
                No approved nurseries available.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nurserydashboard;

