import React, { useState, useEffect } from 'react';

const BackgroundGif = ({ weather }) => {
  const [backgroundUrl, setBackgroundUrl] = useState('');

  useEffect(() => {
    const setBackgroundImage = () => {
      if (weather === 'Rain') {
        setBackgroundUrl('url(https://pin.it/1mIULf2xT)');
      } else if (weather === 'Clouds') {
        setBackgroundUrl('url(https://pin.it/1mIULf2xT)');
      } else if (weather === 'Clear') {
        setBackgroundUrl('url(https://pin.it/1mIULf2xT)');
      } else {
        setBackgroundUrl('url(https://pin.it/1mIULf2xT)');
      }
    };

    setBackgroundImage();
  }, [weather]);

  return <div style={{ backgroundImage: backgroundUrl, backgroundSize: 'cover' }} />;
};

export default BackgroundGif;