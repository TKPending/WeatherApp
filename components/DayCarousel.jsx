import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import WeatherCard from './WeatherCard';
import BackgroundGif from './BackgroundGif';

const CarouselSlide = ({weatherData, city, date, index, currentWeatherData }) => {
  const data = weatherData[0];
  if (!data) {
    return <div>loading</div>  
  }

  const timestamp = data?.dt;
  const createDate = new Date(timestamp * 1000); // Convert seconds to milliseconds

  // Get the day of the week as a string
  const dayOfWeek = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(createDate);

  const dayData = {
    day: dayOfWeek,
    temp: {
      min: data.temp.min,
      max: data.temp.max,
      currentTemp: data.temp.day
    },
    "wind_speed": data.wind_speed,
    summary: data.summary,
    image: {
      weather: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    }
  }

  const currentDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date().getDay()];

  console.log(currentWeatherData)

  return (
  <div className="w-full h-full mr-4">
    <div id={`${dayData.day === currentDay && currentWeatherData.length === 8 ? 'background' : ""}`} className="p-4 rounded-md flex flex-col  shadow-md items-center h-2/3 w-[242px]  ">
    <h2 className="text-xl font-bold text-black mb-2">{`${dayData.day === currentDay && currentWeatherData.length === 8 ? date : ''}`}</h2>
      <p className="absolute top-28 font-mono text-white font-semibold">{dayData.day === currentDay && currentWeatherData.length === 8 ? "Today" : ""}</p>
      {/* Enter weather card */}
      <WeatherCard 
        day={dayData.day}
        currentTemp={dayData.temp.currentTemp}
        min={dayData.temp.min}
        max={dayData.temp.max}
        summary={dayData.summary}
        description={dayData.image.description}
        weather={dayData.image.weather}
        icon={dayData.image.icon}
        wind_speed={dayData["wind_speed"]}
        index={index}
        humidity={data.humidity}
        uvi={data.uvi}
        clouds={data.clouds}
        rain={data.rain}
        date={date}

      />
    </div>
  </div>
)};

const DayCarousel = ({weatherData, setSelectedDay, city}) => {
  const wData = weatherData;

  const [liveWeatherData, setLiveWeatherData] = useState(wData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const initialIndex = new Date().getDay();
  const [dayIndex, setDayIndex] = useState(initialIndex);

  useEffect(() => {
    setSelectedDay(wData[currentIndex]);
    const slicedArray = wData.slice(currentIndex);
    setLiveWeatherData(slicedArray)
  }, [currentIndex])

  const getFormattedDate = (dayIndex) => {
    const currentDate = new Date();
    const offset = dayIndex - initialIndex;
    currentDate.setDate(currentDate.getDate() + offset + (offset < 0 ? 7 : 0));

    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return currentDate.toLocaleDateString('en-GB', options); // Set the locale to 'en-GB' for UK format
  };

  const changeSlide = (index) => {
    setCurrentIndex(currentIndex + index)
    const newIndex = (dayIndex + index + daysOfWeek.length) % daysOfWeek.length;
    setDayIndex((prevIndex) => (newIndex < initialIndex ? newIndex + daysOfWeek.length : newIndex));
  }

  if (!liveWeatherData) return null;

  return (
      <div className="h-2/4 w-3/4 mt-10">
        {liveWeatherData.length !== 8 &&
        <button
          className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white bg-red-500 py-2 px-4 rounded-md hover:bg-red-600 bg-opacity-50 z-10"
          onClick={() => changeSlide(-1)}
        >
          <FaArrowLeft />
        </button>}

        {liveWeatherData.length !== 1 &&
        <button
          className="absolute right-10 top-1/2 transform -translate-y-1/2 text-white bg-red-500 py-2 px-4 rounded-md hover:bg-red-600 bg-opacity-50 z-10"
          onClick={() => changeSlide(1)}
        >
          <FaArrowRight />
        </button>}

        <div className="flex overflow-hidden transition-transform ease-in-out duration-300">
          {liveWeatherData?.map((eachDay, index) => (
            <CarouselSlide
              key={index}
              index={index}
              date={getFormattedDate((dayIndex + index) % liveWeatherData.length)}
              weatherData={[eachDay]}
              city={city}
              currentIndex={currentIndex}
              currentWeatherData={liveWeatherData}
            />
          ))}
        </div>
      </div>
  );
};

export default DayCarousel;