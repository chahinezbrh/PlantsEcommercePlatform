import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import addEvents from "../assets/addpicture.svg";
import { useNavigate, useLocation } from "react-router-dom";

const AddNursery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get nurseryId passed from ManageNursery
  const nurseryId = location.state?.nurseryId;

  const [nursery, setNursery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!nurseryId) {
      setError("No nursery ID provided.");
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:9900/api/admin/pending/${nurseryId}`) // Adjusted path to /api/admin/pending/:id for consistency
      .then((res) => {
        setNursery(res.data);
        setSelectedImage(res.data.profilePicture || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch nursery details:", err);
        setError("Failed to load nursery details.");
        setLoading(false);
      });
  }, [nurseryId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApprove = () => {
    if (!nurseryId) return;

    axios
      .put(`http://localhost:9900/api/admin/approve/${nurseryId}`)
      .then(() => {
        alert("Nursery approved!");
        navigate("/ManageNursery");
      })
      .catch((err) => {
        console.error("Failed to approve nursery:", err);
        alert("Failed to approve nursery.");
      });
  };

  const handleReject = () => {
    if (!nurseryId) return;

    axios
      .put(`http://localhost:9900/api/admin/reject/${nurseryId}`)
      .then(() => {
        alert("Nursery rejected.");
        navigate("/ManageNursery");
      })
      .catch((err) => {
        console.error("Failed to reject nursery:", err);
        alert("Failed to reject nursery.");
      });
  };

  const navItems = [
    { label: "Statistics", paths: ["/Statistics"] },
    {
      label: "Nurseries",
      paths: ["/Nurserydashboard", "/AddNursery", "/ManageNursery"],
    },
    { label: "Events", paths: ["/EventsDashboard", "/AddEvent"] },
    { label: "Log Out", paths: ["/log-out"] },
  ];

  const isActive = (path) => location.pathname === path;

  if (loading) {
    return (
      <div className="bg-[#e1ece3] min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <p>Loading nursery details...</p>
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
        <div className="flex-1 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-8 flex flex-col items-center space-y-6 mt-[60px]">
          <h2 className="text-black text-3xl sm:text-4xl font-medium font-inter text-center">
            Nursery Details
          </h2>

          <p className="text-black text-base sm:text-lg md:text-xl font-normal font-redhat leading-relaxed text-center">
            Review nursery information and approve or reject registration
          </p>

          {/* Image Upload Section */}
          <div className="flex justify-center">
            <label htmlFor="imageUpload" className="cursor-pointer">
              <img
                src={selectedImage || addEvents}
                alt="Nursery Profile"
                className={`object-cover border border-black ${
                  selectedImage
                    ? "w-[300px] h-[200px] rounded-md"
                    : "rounded-full w-20 h-20"
                }`}
              />
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* Read-only fields */}
          <div className="w-full max-w-md space-y-4">
            <div className="bg-white text-black py-3 px-4 rounded-md shadow-sm">
              <strong>Name:</strong> {nursery.name}
            </div>
            <div className="bg-white text-black py-3 px-4 rounded-md shadow-sm">
              <strong>Owner:</strong> {nursery.ownerName}
            </div>
            <div className="bg-white text-black py-3 px-4 rounded-md shadow-sm">
              <strong>Contact:</strong> {nursery.phone}
            </div>
            <div className="bg-white text-black py-3 px-4 rounded-md shadow-sm">
              <strong>Address:</strong> {nursery.address}
            </div>
            <div className="bg-white text-black py-3 px-4 rounded-md shadow-sm">
              <strong>Description:</strong> {nursery.description || "N/A"}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-8 mt-10">
            <button
              onClick={handleReject}
              className="px-10 py-3 border-2 border-red-600 text-red-600 rounded-md text-lg font-bold hover:bg-red-600 hover:text-white transition"
            >
              Reject
            </button>

            <button
              onClick={handleApprove}
              className="px-10 py-3 border-2 border-green-600 text-green-600 rounded-md text-lg font-bold hover:bg-green-600 hover:text-white transition"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNursery;
