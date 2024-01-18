"use client";

import { useState, useEffect } from "react";
import SearchHistory from "./SearchHistory";
import { ApiClient } from "@/utils/ApiClient";

const SearchBar = ({ setWeatherData }) => {
  const [searchText, setSearchText] = useState("");
  const [checkSearch, setCheckSearch] = useState(true);
  const [renderHistory, setRenderHistory] = useState(false);
  const [pressedEnter, setPressedEnter] = useState(false);

  const apiClient = new ApiClient();

  // Update Text
  const handleSearchText = (event) => {
    const { value } = event.target;
    setSearchText(value);
    if (value.length === 0) {
      setRenderHistory(false);
      setWeatherData({});
      return;
    }
    setRenderHistory(true);
  };

  // Clear Search
  const handleClearSearch = () => {
    setSearchText("");
    setRenderHistory(false);
  };

  // Update local history with search history
  const updateSearchHistory = (capitalCity) => {
    const currentSearchHistory = localStorage.getItem("history");
    const localSearchHistory = currentSearchHistory
      ? JSON.parse(currentSearchHistory)
      : [];

    // Prevent duplicates
    if (!localSearchHistory.includes(capitalCity)) {
      const newHistory = [capitalCity, ...localSearchHistory];

      // Update local storage
      localStorage.setItem("history", JSON.stringify(newHistory));
    }
  };

  // Entered nothing
  const searchEmpty = () => {
    setCheckSearch(false);

    setTimeout(() => {
      setCheckSearch(true);
    }, 2000);
  };

  // Handle Enter
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (searchText === "") {
      searchEmpty();
      return;
    }
    setSearchText(searchText);
    const capitalCity = searchText.replace(/\b\w/g, (match) => match.toUpperCase());

    // Make API Call
    const response = await apiClient.getRequest(capitalCity);

    if (response) {
      setWeatherData(response.daily);

      // Update search history + close search history
      updateSearchHistory(capitalCity);
      setRenderHistory(false);
      setPressedEnter(true);
    } else {
      setRenderHistory(false);
      searchEmpty();
    }

    setPressedEnter(false);
  };

  return (
    <div className="w-2/5 h-16 mt-8 p-2 border border-black rounded-lg z-10">
      {checkSearch && (
        <form
          className="flex w-full h-full bg-green z-0"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleSearchText}
            value={searchText}
            className="font-semibold h-full w-4/5 text-center text-2xl outline-none"
            type="text"
            placeholder="Enter a city"
          />

          <div
            onClick={handleClearSearch}
            className="w-1/5 flex justify-center items-center"
          >
            <p className="text-4xl hover:scale-105 hover:text-orange-900">X</p>
          </div>
        </form>
      )}
      {!checkSearch && (
        <div className="flex w-full h-full bg-red-500 text-center flex items-center justify-center z-0 transition-500">
          <p className="text-white text-4xl font-semibold">
            Location doesn't exist
          </p>
        </div>
      )}

      {renderHistory && (
        <SearchHistory
          setRenderHistory={setRenderHistory}
          setSearchText={setSearchText}
          pressedEnter={pressedEnter}
        />
      )}
    </div>
  );
};

export default SearchBar;