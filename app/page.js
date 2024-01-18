'use client';

import React from 'react'
import SearchBar from '@/components/SearchBar'
import BackgroundGif from "@/components/BackgroundGif";
import DayCarousel from '@/components/DayCarousel'; 
import WeatherCard from '@/components/WeatherCard';
import { useState } from 'react';

export default function Home() {

  const [weatherData, setWeatherData] = useState({});
  const [selectedDay, setSelectedDay] = useState(0);
  

  return (
    <main className="flex max-h-screen max-w-screen flex-col items-center">
      {/* <h1>Homepage</h1> */}
      <SearchBar setWeatherData={setWeatherData} />
      <BackgroundGif selectedDay={selectedDay} />

      {Object.keys(weatherData).length !== 0 && <DayCarousel weatherData={weatherData} setSelectedDay={setSelectedDay} />}
      
    </main>
  )
}