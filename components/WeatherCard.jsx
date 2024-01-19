import React from 'react';
import { useState } from 'react';

const WeatherCard = ({ day, min, max, weather, summary, description, icon, wind_speed, currentTemp, humidity, uvi, clouds, rain }) => {
console.log(rain)
    const [isHidden, setIsHidden] = useState(true);
const handleButtonClick = () => {
    setIsHidden(!isHidden); 
}
    return (
        <div className='flex items-center justify-center w-full h-full text-white'>
            {/*weather card */}
            <div id='weather-card1' className='bg-black w-full h-auto flex items-center flex-col rounded-md shadow-md p-2.5 relative'>
                <div className='flex justify-center items-center flex-col border-b-gray-300'>
                    <p className='text-lg'>{day}</p>
                    <p className='text-sm'>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
                    <p className='text-5xl pt-5 pl-5'>{currentTemp.toFixed(0)}°</p>
                    <img className='w-20 h-20 text-xl' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather icon'/>
                    

                    <p className='text-xl pt-5'>{weather}</p>
                </div><div className='flex items-center flex-row gap-10 pt-5'>
                    <p>Min: {min.toFixed(0)}°</p><p>Max: {max.toFixed(0)}°</p>
                </div>
                <div className='flex flex-row items-center pt-5'>
                    {/* wind svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M184 184a32 32 0 0 1-32 32c-13.7 0-26.95-8.93-31.5-21.22a8 8 0 0 1 15-5.56C137.74 195.27 145 200 152 200a16 16 0 0 0 0-32H40a8 8 0 0 1 0-16h112a32 32 0 0 1 32 32m-64-80a32 32 0 0 0 0-64c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C105.74 60.73 113 56 120 56a16 16 0 0 1 0 32H24a8 8 0 0 0 0 16Zm88-32c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C193.74 92.73 201 88 208 88a16 16 0 0 1 0 32H32a8 8 0 0 0 0 16h176a32 32 0 0 0 0-64"/></svg>
                    <p className='pl-2.5'>{wind_speed.toFixed(0)} MPH</p>
                </div>
                <div className='pt-5 pb-5 flex flex-col justify-center items-center'>
                    <button className='text-red-300' onClick={handleButtonClick}>{isHidden ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 5a1 1 0 0 0-.993.883L11 8v3H8a1 1 0 0 0-.117 1.993L8 13h3v3a1 1 0 0 0 1.993.117L13 16v-3h3a1 1 0 0 0 .117-1.993L16 11h-3V8a1 1 0 0 0-1-1"/></g></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>}</button>
                    <div className={`text-center ${isHidden ? 'hidden' : ''} mt-2.5 pt-3 border-t-2 border-black`}>
                        
                        <p className='pb-2.5'>Humidity: {humidity}%</p>
                        <p className='pb-2.5'>UV Index: {uvi.toFixed(0)}</p>
                        <p className='pb-2.5'>Rain: {rain ? rain : 0}mm</p>
                        <p className='pb-2.5'>Clouds: {clouds}%</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
