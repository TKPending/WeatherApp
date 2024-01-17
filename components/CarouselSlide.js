import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CarouselSlide = ({ day, date }) => (
  <div className="w-full m-5">
    <div className="bg-blue-100 bg-opacity-50 p-4 rounded-md shadow-md flex flex-col items-center">
      <h2 className="text-xl font-bold text-red-600 mb-2">{day}</h2>
      <p className="font-mono text-blue-800">{date}</p>
      {/* Enter weather card */}
    </div>
  </div>
);
const DayCarousel = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const initialIndex = new Date().getDay();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const getFormattedDate = (dayIndex) => {
    const currentDate = new Date();
    const offset = dayIndex - initialIndex;
    currentDate.setDate(currentDate.getDate() + offset + (offset < 0 ? 7 : 0));
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return currentDate.toLocaleDateString("en-GB", options); // Set the locale to 'en-GB' for UK format
  };
  const changeSlide = (index) => {
    const newIndex =
      (currentIndex + index + daysOfWeek.length) % daysOfWeek.length;
    setCurrentIndex((prevIndex) =>
      newIndex < initialIndex ? newIndex + daysOfWeek.length : newIndex
    );
  };
  return (
    <div className="relative overflow-hidden">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-red-500 py-2 px-4 rounded-md hover:bg-red-600 bg-opacity-50"
        onClick={() => changeSlide(-1)}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-red-500 py-2 px-4 rounded-md hover:bg-red-600 bg-opacity-50"
        onClick={() => changeSlide(1)}
      >
        <FaArrowRight />
      </button>
      <div className="flex transition-transform ease-in-out duration-300">
        {daysOfWeek.map((day, index) => (
          <CarouselSlide
            key={index}
            day={daysOfWeek[(currentIndex + index) % daysOfWeek.length]}
            date={getFormattedDate((currentIndex + index) % daysOfWeek.length)}
          />
        ))}
      </div>
    </div>
  );
};
export default DayCarousel;
