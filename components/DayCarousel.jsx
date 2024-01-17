import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import WeatherCard from './WeatherCard';
import BackgroundGif from './BackgroundGif';

const CarouselSlide = ({index, day, date, weatherData}) => {
  const data = weatherData;

  const timestamp = data.dt;
  const createDate = new Date(timestamp * 1000); // Convert seconds to milliseconds

  // Get the day of the week as a string
  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(createDate);

  const dayData = {
    day: dayOfWeek,
    temp: {
      min: data.temp.min,
      max: data.temp.max,
    },
    "wind_speed": data.wind_speed,
    summary: data.summary,
    image: {
      weather: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    }
  }


  return (
  <div className="w-full m-5">
    <div className="bg-gray-400 bg-opacity-30 p-4 rounded-md shadow-md flex flex-col items-center">
      <h2 className="text-xl font-bold text-black mb-2">{day}</h2>
      <p className="font-mono text-black">{date}</p>
      {/* Enter weather card */}
      <WeatherCard 
        day={dayData.day}
        min={dayData.temp.min}
        max={dayData.temp.max}
        summary={dayData.summary}
        description={dayData.image.description}
        weather={dayData.image.weather}
        icon={dayData.image.icon}
        wind_speed={dayData["wind_speed"]}
      />
    </div>
  </div>
)};

const DayCarousel = ({weatherData, setSelectedDay}) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const initialIndex = new Date().getDay();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [selectedDay] = useState(weatherData[initialIndex]);

  const getFormattedDate = (dayIndex) => {
    const currentDate = new Date();
    const offset = dayIndex - initialIndex;
    currentDate.setDate(currentDate.getDate() + offset + (offset < 0 ? 7 : 0));

    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return currentDate.toLocaleDateString('en-GB', options); // Set the locale to 'en-GB' for UK format
  };

  const changeSlide = (index) => {
    const newIndex = (currentIndex + index + daysOfWeek.length) % daysOfWeek.length;
    setCurrentIndex((prevIndex) => (newIndex < initialIndex ? newIndex + daysOfWeek.length : newIndex));
    setSelectedDay(weatherData[currentIndex])
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
              key={day}
              index={index}
              day={daysOfWeek[(currentIndex + index) % daysOfWeek.length]}
              date={getFormattedDate((currentIndex + index) % daysOfWeek.length)}
              weatherData={weatherData[index]}
            />
          ))}
        </div>
        <BackgroundGif selectedDay={selectedDay} />
      </div>
  );
};

export default DayCarousel;
