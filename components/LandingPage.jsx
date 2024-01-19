import React from 'react'

const LandingPage = () => {
  return (
    <div className='bg-gradient absolute h-full w-full'>
        <div className='p-5 m-5 px-60 mt-40 text-white flex justify-center items-center flex-col'>
            <h1 className='font-thin text-3xl pb-9'>Welcome to Weather App!</h1>
            <p className='font-thin text-xl'>Enter your city in the search bar above!</p>
        </div>
    </div>
  )
}

export default LandingPage