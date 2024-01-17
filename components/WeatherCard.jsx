import React from 'react';


const WeatherCard = ({}) => {
    return (
    <div className='flex flex-row items-center justify-center gap-24 w-full h-screen pl-10 pr-10 text-white'>
    {/* 1st weather card */}
        <div id='weather-card1' className='bg-black w-full h-80 flex items-center flex-col rounded-md shadow-md p-2.5 relative'> 
        <div className='flex justify-center items-center flex-col border-b-gray-300'>
<p className='text-white text-lg'>Yesterday</p>
<p className='text-white text-sm'>Monday</p>
<p className='text-white text-5xl pt-5 pl-5'>3°</p>
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 15a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M7 14a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M10 4c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C17 11.763 15.714 13 14.128 13H5.872C4.286 13 3 11.763 3 10.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 5.561 7.535 4 10 4"/></svg>
<p className='text-xl pt-5'>Mostly Cloudy</p>
</div><div className='flex items-center flex-row gap-20 pt-2.5'>
<p>Min: -2°</p><p>Max: 3°</p>
</div>
<div className='flex flex-row items-center pt-2.5'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M184 184a32 32 0 0 1-32 32c-13.7 0-26.95-8.93-31.5-21.22a8 8 0 0 1 15-5.56C137.74 195.27 145 200 152 200a16 16 0 0 0 0-32H40a8 8 0 0 1 0-16h112a32 32 0 0 1 32 32m-64-80a32 32 0 0 0 0-64c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C105.74 60.73 113 56 120 56a16 16 0 0 1 0 32H24a8 8 0 0 0 0 16Zm88-32c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C193.74 92.73 201 88 208 88a16 16 0 0 1 0 32H32a8 8 0 0 0 0 16h176a32 32 0 0 0 0-64"/></svg>
   <p className='pl-2.5'>Wind 12 MPH</p> 
</div>
<div className='absolute bottom-2 right-2'>
    
</div>
</div>

{/* 2nd weather card */}
        <div id='weather-card2' className='bg-black w-full h-80 flex items-center flex-col rounded-md shadow-md p-2.5'> 
        <div className='flex justify-center items-center flex-col border-b-gray-300'>
<p className='text-white text-lg'>Today</p>
<p className='text-white text-sm'>Tuesday</p>
<p className='text-white text-5xl pt-5 pl-5'>2°</p>
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 15a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M7 14a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M10 4c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C17 11.763 15.714 13 14.128 13H5.872C4.286 13 3 11.763 3 10.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 5.561 7.535 4 10 4"/></svg>
<p className='text-xl pt-5'>Mostly Cloudy</p>
</div><div className='flex items-center flex-row gap-20 pt-2.5'>
<p>Min: -4°</p><p>Max: 2°</p>
</div>
<div className='flex flex-row items-center pt-2.5'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M184 184a32 32 0 0 1-32 32c-13.7 0-26.95-8.93-31.5-21.22a8 8 0 0 1 15-5.56C137.74 195.27 145 200 152 200a16 16 0 0 0 0-32H40a8 8 0 0 1 0-16h112a32 32 0 0 1 32 32m-64-80a32 32 0 0 0 0-64c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C105.74 60.73 113 56 120 56a16 16 0 0 1 0 32H24a8 8 0 0 0 0 16Zm88-32c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C193.74 92.73 201 88 208 88a16 16 0 0 1 0 32H32a8 8 0 0 0 0 16h176a32 32 0 0 0 0-64"/></svg>
   <p className='pl-2.5'>Wind 9 MPH</p> 
</div>
        </div>

        {/* 3rd weather card */}
        <div id='weather-card3' className='bg-black w-full h-80 flex items-center flex-col rounded-md shadow-md p-2.5'> 
        <div className='flex justify-center items-center flex-col border-b-gray-300'>
<p className='text-white text-lg'>Tomorrow</p>
<p className='text-white text-sm'>Wednesday</p>
<p className='text-white text-5xl pt-5 pl-5'>2°</p>
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 15a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M7 14a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M10 4c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C17 11.763 15.714 13 14.128 13H5.872C4.286 13 3 11.763 3 10.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 5.561 7.535 4 10 4"/></svg>
<p className='text-xl pt-5'>Mostly Cloudy</p>
</div><div className='flex items-center flex-row gap-20 pt-2.5'>
<p>Min: -4°</p><p>Max: 2°</p>
</div>
<div className='flex flex-row items-center pt-2.5'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M184 184a32 32 0 0 1-32 32c-13.7 0-26.95-8.93-31.5-21.22a8 8 0 0 1 15-5.56C137.74 195.27 145 200 152 200a16 16 0 0 0 0-32H40a8 8 0 0 1 0-16h112a32 32 0 0 1 32 32m-64-80a32 32 0 0 0 0-64c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C105.74 60.73 113 56 120 56a16 16 0 0 1 0 32H24a8 8 0 0 0 0 16Zm88-32c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C193.74 92.73 201 88 208 88a16 16 0 0 1 0 32H32a8 8 0 0 0 0 16h176a32 32 0 0 0 0-64"/></svg>
   <p className='pl-2.5'>Wind 19 MPH</p> 
</div>
        </div>
    </div>
    )
}

export default WeatherCard
