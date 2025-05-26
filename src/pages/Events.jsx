import React, { useState } from "react";
import Navbar  from "../components/Navbar.jsx";
import date1 from "../assets/date1.svg";
import place1 from "../assets/place1.svg";
import sortie1 from "../assets/sortie1.jpeg";
import sortie2 from "../assets/sortie2.jpeg";
import sortie3 from "../assets/sortie3.jpeg";
import croix from "../assets/croix.svg";
import loupe from "../assets/loupe.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EventCard = ({ img, name, date, place, description, navigate }) => (
  <div className="flex flex-col lg:flex-row gap-6 p-4 border-b border-gray-300">
    <img
      src={img}
      alt="Event"
      className="w-full lg:w-[450px] h-auto rounded-md"
    />
    <div className="flex flex-col justify-between">
      <h2 className="text-2xl font-normal text-black ml-10">{name}</h2>
      <div className="flex items-center gap-2 mt-1 ml-12 text-gray-700">
        <img src={date1} alt="icon" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-2 ml-12 text-gray-700">
        <img src={place1} alt="icon" />
        <span>{place}</span>
      </div>
      <p className="mt-2 ml-12 text-gray-800">{description}</p>
      <button
        onClick={() => navigate("/Eventsform")}
        className="ml-30 mt-4 w-40 bg-[#43862e] text-white py-2 rounded-xl hover:bg-[#356d24] transition cursor-pointer"
      >
        Participate
      </button>
    </div>
  </div>
);

export const Events = () => {
  const events = [
    {
      img: sortie1,
      name: "Akfadou lake",
      date: "May 25, 2025",
      place: "Bejaia",
      description:
        "Join us for a fun cleaning campagne in the outstanding lands of Akfadou",
    },
    {
      img: sortie2,
      name: "National park of Cherea",
      date: "June 15, 2025",
      place: "Blida",
      description:
        "Help us protect Algeria's natural wonders—join our cleanup mission in Chréa National Park!",
    },
    {
      img: sortie3,
      name: "Parc de la liberté",
      date: "August 5, 2025",
      place: "Algiers",
      description:
        "Grab your gloves and help us refresh Parc de la Liberté—one cleaner park for a greener Algiers!",
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [searchDone, setSearchDone] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    const results = events.filter(
      (event) =>
        event.name.toLowerCase().includes(search.toLowerCase()) ||
        event.description.toLowerCase().includes(search.toLowerCase()) ||
        event.place.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEvents(results);
    setSearchDone(true);
  };

  const clearSearch = () => {
    setSearch("");
    setFilteredEvents(events);
    setSearchDone(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#e1ece3]">
      <Navbar />
      <section className="text-center mt-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-4xl font-medium">
            Join our events and grow
          </h1>
          <h1 className="text-3xl md:text-4xl font-medium">
            {" "}
            your <span className="text-[#43862e]">world</span>.
          </h1>
        </motion.div>
      </section>

      {/* Search bar */}
      <div className="flex flex-col items-center my-15 px-4">
        <div className="relative w-full max-w-2xl bg-[#f9f9f9] rounded-full px-6 py-4 flex items-center">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-black placeholder-[#818181]"
          />
          {search && (
            <img
              src={croix}
              alt="Clear"
              onClick={clearSearch}
              className="w-4 h-4 mx-4 cursor-pointer"
            />
          )}
          <img
            src={loupe}
            alt="Search"
            onClick={handleSearch}
            className="w-6 h-6 mx-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Events list */}
      <div className="container mx-auto px-4 mt-20 space-y-16">
        {(searchDone ? filteredEvents : events).length > 0 ? (
          (searchDone ? filteredEvents : events).map((event, index) => (
            <EventCard key={index} {...event} navigate={navigate} />
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">No events found.</p>
        )}
      </div>

      {/* Pagination
      <div className=" flex justify-center items-center gap-6 mt-16 mb-12 text-black text-base underline">
        <span>Prev</span>
        <div className="flex gap-2">
          <div className="w-[11px] h-[11px] bg-[#43862e] rounded-full" />
          <div className="w-[31px] h-[11px] bg-[#43862e] rounded-full" />
          <div className="w-[11px] h-[11px] bg-[#43862e] rounded-full" />
        </div>
        <span>Next</span>
      </div>
      */}
    </div>
  );
};

export default Events;