import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import WeatherCard from './WeatherCard';
import BackgroundGif from './BackgroundGif';

const CarouselSlide = ({date, weatherData, city, index}) => {
  console.log(weatherData)
  const data = weatherData[0];
  console.log(data)

  if (!data) {
    return <div>loading</div>  
  }

  const timestamp = data?.dt;
  const createDate = new Date(timestamp * 1000); // Convert seconds to milliseconds

  // Get the day of the week as a string
  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(createDate);

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

  return (
  <div className="w-full h-full bg-red-500 mr-4">
    <div className="bg-gray-400 bg-opacity-30 p-4 rounded-md shadow-md flex flex-col items-center h-2/3 w-[242px]">
    <h2 className="text-xl font-bold text-black mb-2">{city}</h2>
      <p className="font-mono text-black">{index === 0 ? "Today" : ""}</p>
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
      />
    </div>
  </div>
)};

const DayCarousel = ({weatherData, setSelectedDay, city}) => {
  const wData = weatherData;

  const [liveWeatherData, setLiveWeatherData] = useState(wData);

  const initialIndex = new Date().getDay();
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [selectedDay] = useState(weatherData[initialIndex]);

  useEffect(() => {
    // setSelectedDay(weatherData[currentIndex]);
    const slicedArray = wData.slice(currentIndex);
    console.log(slicedArray);
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
    console.log(`Changing Index To: ${currentIndex + index}`)
    setCurrentIndex(currentIndex + index)
  }

  console.log("before")
  liveWeatherData.map((e) => {
    console.log([e])
  })
  console.log("after")

  if (!liveWeatherData) return null;

  return (
      <div className="h-2/4 w-3/4 mt-40">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-red-500 py-2 px-4 rounded-md hover:bg-red-600 bg-opacity-50 z-10"
          onClick={() => changeSlide(-1)}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-red-500 py-2 px-4 rounded-md hover:bg-red-600 bg-opacity-50 z-10"
          onClick={() => changeSlide(1)}
        >
          <FaArrowRight />
        </button>
        <div className="flex overflow-hidden transition-transform ease-in-out duration-300">
          {liveWeatherData?.map((eachDay, index) => (
            <CarouselSlide
              key={index}
              index={index}
              date={getFormattedDate((currentIndex + index) % liveWeatherData.length)}
              weatherData={[eachDay]}
              city={city}
            />
          ))}
        </div>
        {/* <BackgroundGif selectedDay={selectedDay} /> */}
      </div>
  );
};

export default DayCarousel;