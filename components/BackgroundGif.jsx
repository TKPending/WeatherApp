const BackgroundGif = ({ selectedDay }) => {
  const displayWeather = selectedDay.weather[0].main;

  const displayBackground = (url) => {
    document.body.style.backgroundImage = url;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }

  function backgroundChange() {
    if (displayWeather === "Rain") {
      displayBackground("url('https://i.pinimg.com/originals/3b/77/47/3b77474160f7426c77bb440d9a165916.gif')")
    } else if (displayWeather=== "Clouds") {
      displayBackground("url('https://i.gifer.com/7RtV.gif')")
    } else if (displayWeather=== "Clear") {
      displayBackground("url('https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif')");
    } else {
      displayBackground("url('https://images.unsplash.com/photo-1539952048355-a18b56589b7f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')");
    }
  };

  backgroundChange();
};

export default BackgroundGif;