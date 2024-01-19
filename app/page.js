'use client';

import React from 'react'
import SearchBar from '@/components/SearchBar'
import BackgroundGif from "@/components/BackgroundGif";
import DayCarousel from '@/components/DayCarousel'; 
import WeatherCard from '@/components/WeatherCard';
import { useState, useEffect } from 'react';
import LandingPage from '@/components/LandingPage';

export default function Home() {

  const [weatherData, setWeatherData] = useState({});
  const [selectedDay, setSelectedDay] = useState(0);
  const [landingPage, setLandingPage] = useState(true);

  // Hide background
  const hideBackground = () => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  };

  // User presses on the X button
  const handleXClick = () => {
    setWeatherData({});
    setSelectedDay(0);
    hideBackground();
  }

  const handleLanding = (value) => {
    setLandingPage(value);
  }

  return (
    <body className="flex max-h-screen max-w-screen flex-col items-center">
      {/* <h1>Homepage</h1> */}
      <SearchBar setWeatherData={setWeatherData} handleClick={handleXClick} handleLanding={handleLanding} />

      {landingPage && <LandingPage />}

      {selectedDay != 0 && <BackgroundGif selectedDay={selectedDay} />}

      {Object.keys(weatherData).length !== 0 && <DayCarousel weatherData={weatherData} setSelectedDay={setSelectedDay} />}
      
    </body>
  )
}