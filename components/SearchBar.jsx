'use client';

import { useState } from "react";
import SearchHistory from "./SearchHistory";
import { ApiClient } from "@/utils/ApiClient";

const SearchBar = ({setWeatherData}) => {
    const [searchText, setSearchText] = useState("");
    const [checkSearch, setCheckSearch] = useState(true);
    const [renderHistory, setRenderHistory] = useState(false);

    // GET()
    const apiClient = new ApiClient;

    // Update Text
    const handleSearchText = (event) => {
        const {value} = event.target;
        setSearchText(value);
        setRenderHistory(true);
    }

    // Clear Search
    const handleClearSearch = () => {
        setSearchText("");
        setRenderHistory(false);
    }

    // Update local history with search history
    const updateSearchHistory = () => {
        const currentSearchHistory = localStorage.getItem("history");
        const localSearchHistory = currentSearchHistory ? JSON.parse(currentSearchHistory) : [];

        const newHistory = [searchText, ...localSearchHistory];
        localStorage.setItem('history', JSON.stringify(newHistory));
    }

    // Handle Enter
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (searchText === "") {
            setCheckSearch(false)

            setTimeout(() => {
                setCheckSearch(true);
            }, 2000);
        }
        setSearchText(searchText);
        const response = await apiClient.getRequest(searchText);
        setWeatherData(response.daily);

        updateSearchHistory(searchText);

        // Handle API logic for cities not found
        // Deal with sending information to cards
    }

    return (
        <div className="w-2/5 h-16 p-2 border border-black rounded-lg">
            {checkSearch &&
            <form className="flex w-full h-full bg-green z-0" onSubmit={handleSubmit}>
                <input 
                    onChange={handleSearchText}
                    value={searchText}
                    className="font-semibold h-full w-4/5 text-center text-2xl outline-none"
                    type="text"
                    placeholder="Enter a city"
                />

                <div onClick={handleClearSearch} className="w-1/5 flex justify-center items-center">
                    <p className="text-4xl hover:scale-105 hover:text-orange-900" >
                        X
                    </p>
                </div>
            </form> }
            {!checkSearch && 
                <div className="flex w-full h-full bg-red-500 text-center flex items-center justify-center z-0 transition-500">
                    <p className="text-white text-4xl font-semibold">Please enter a real location</p>
                </div>
            }

            {renderHistory && <SearchHistory setRenderHistory={setRenderHistory} setSearchText={setSearchText}/>}
        </div>
    )
}

export default SearchBar;
