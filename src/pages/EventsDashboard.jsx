import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";

const EventsDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (paths) => paths.includes(location.pathname);

  const [filter, setFilter] = useState("All");

  const allEvents = [
    {
      title: "Akfadou lake",
      location: "Bajaia, Akfadou",
      date: "June 1st, 2025 - 9AM",
      participants: 20,
      status: "Upcoming",
    },
    {
      title: "National park of Cherea",
      location: "Blida, Cherea",
      date: "June 15th, 2025 - 16PM",
      participants: 15,
      status: "Upcoming",
    },
    {
      title: "Parc de la liberté",
      location: "Didouche, Algiers",
      date: "June 1st, 2025 - 14PM",
      participants: 15,
      status: "Upcoming",
    },
    {
      title: "Cancelled Garden Fest",
      location: "Oran, City Park",
      date: "May 20th, 2025 - 10AM",
      participants: 0,
      status: "Cancelled",
    },
  ];

  const filteredEvents =
    filter === "All"
      ? allEvents
      : allEvents.filter((event) => event.status === filter);

  const navItems = [
    { label: "Statistics", paths: ["/Statistics"] },
    {
      label: "Nurseries",
      paths: ["/Nurserydashboard", "/AddNursery", "/ManageNursery"],
    },
    { label: "Events", paths: ["/EventsDashboard", "/AddEvent"] },
    { label: "Log Out", paths: ["/log-out"] },
  ];

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
                    isActive(item.paths)
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
              Events
            </h2>
          </div>

          {/* Description */}
          <div className="text-center">
            <p className="text-black text-base sm:text-lg md:text-xl font-normal font-redhat leading-relaxed">
              Manage and organize plant collection events
            </p>
          </div>

          {/* Add New Event Button */}
          <div>
            <button
              onClick={() => navigate("/AddEvent")}
              className="bg-[rgba(67,134,46,1)] text-white text-base sm:text-lg font-redhat font-normal py-2 px-6 rounded-md cursor-pointer transition duration-300"
            >
              + Add New Event
            </button>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Upcoming", "Completed", "Cancelled"].map((label) => (
              <button
                key={label}
                onClick={() => setFilter(label)}
                className={`w-28 h-10 rounded-[20px] text-base font-semibold font-redhat cursor-pointer transition duration-200 ${
                  filter === label
                    ? "bg-[rgba(67,134,46,1)] text-white"
                    : "bg-[#afc2b9] text-black"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Events Table */}
          <div className="w-full overflow-x-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 font-redhat text-black text-base font-semibold border-b border-[#818181] pb-2">
              <div className="col-span-2">Event</div>
              <div className="text-center">Participants</div>
              <div className="text-center">Status</div>
            </div>

            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="grid grid-cols-3 sm:grid-cols-4 gap-4 items-center border-b border-[#818181] py-4 font-redhat"
              >
                <div className="col-span-2">
                  <div className="text-xl font-semibold">{event.title}</div>
                  <div className="text-sm">{event.location}</div>
                  <div className="text-sm">{event.date}</div>
                </div>
                <div className="text-center">{event.participants}</div>
                <div className="flex justify-center">
                  <span className="bg-[#afc2b9] text-black text-sm rounded-[20px] px-4 py-1">
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
            {filteredEvents.length === 0 && (
              <div className="text-center py-6 text-gray-600 font-redhat">
                No events found for "{filter}"
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDashboard;


