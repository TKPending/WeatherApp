import React, { useState, useEffect } from 'react';


const BackgroundGif = ({selectedDay}) => {
  // console.log(selectedDay)

  function backgroundChange(weather) {
    if (weather == "Rain") {
    document.body.style.backgroundImage = "url('https://pin.it/1mIULf2xT')";
    } else if (weather == "Clouds") {
    document.body.style.backgroundImage = "url('https://i.gifer.com/7RtV.gif')";
    } else if (weather == "Clear") {
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif')";
    } else {
    document.body.style.backgroundImage= "url('https://unsplash.com/photos/body-of-water-lHXU9TgGHEA')";
    }
  }

    setBackgroundImage();
  }, [weather]);

  return <div style={{ backgroundImage: backgroundUrl, backgroundSize: 'cover' }} />;
};

export default BackgroundGif;
