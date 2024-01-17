import React from 'react'

const BackgroundGif = () => {

  function backgroundChange(weather) {
    if (weatherinfo == Rain) {
    document.body.style.backgroundImage = "url(rain3.gif)";
    } else if (weatherinfo == Clouds) {
    document.body.style.backgroundImage = "url(cloud.gif)";
    } else if (weatherinfo == Clear) {
    document.body.style.backgroundImage = "url(sky3.gif)";
    } else {
    document.body.style.backgroundImage= "url(background.gif)";
    }
  }

  backgroundChange(weather);

  return (
    <div className=''>
      
    </div>
  )
}

export default BackgroundGif