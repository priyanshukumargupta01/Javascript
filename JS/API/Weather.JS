async function getWeather() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=30.7&longitude=76.7&current_weather=true"
    );

    const data = await res.json();

    console.log("Temperature:", data.current_weather.temperature + "°C");
    console.log("Wind Speed:", data.current_weather.windspeed);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getWeather();