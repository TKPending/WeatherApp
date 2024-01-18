'use client';

import { useState, useEffect } from "react";

const SearchHistory = ({setRenderHistory, setSearchText, pressedEnter}) => {
  const [currentSearchHistory, setCurrentSearchHistory] = useState([]);
  

  // Get and show history
  useEffect(() => {
    const getSearchHistory = localStorage.getItem('history');
    const searchHistory = getSearchHistory ? JSON.parse(getSearchHistory) : [];
    
    setCurrentSearchHistory(searchHistory);
  }, [pressedEnter]);  // This is causing the warning


  // Recent 5 searches
  const recentSearches = currentSearchHistory.slice(-5);

  // Remove location from search history
  const removeSearchHistory = (index, event) => {
    event.stopPropagation();
  
    const updatedSearchHistory = [...currentSearchHistory];
    updatedSearchHistory.splice(index, 1);
  
    setCurrentSearchHistory(updatedSearchHistory);
    localStorage.setItem('history', JSON.stringify(updatedSearchHistory));
  
    if (updatedSearchHistory.length <= 0) {
      setRenderHistory(false);
    }
  };
  

  // Update Search Bar
  const autoFillSearch = (location) => {
    setSearchText(location);
    setRenderHistory(false);
  }

  return (
    currentSearchHistory.length > 0 && 
        <div className="h-80 mt-2 w-full border-2 z-10 bg-white border-lg">
        {currentSearchHistory.length > 0 &&
            recentSearches.map((location, index) => (
            <div key={index} onClick={() => autoFillSearch(location)} className="flex w-full h-16 items-center border-b-2 hover:bg-red-300">
                <div className="w-4/5 h-full flex items-center justify-center">
                    <p className="text-2xl">{location}</p>
                </div>
                <div className="w-1/5 h-full flex items-center justify-center">
                    <p onClick={(event) => removeSearchHistory(index, event)} className="text-2xl hover:scale-105 hover:text-orange-900">X</p>
                </div>
            </div>
            ))}
        </div>
  );
};

export default SearchHistory;