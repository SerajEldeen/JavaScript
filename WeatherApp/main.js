let apikey = "619846095526c9d1aaf18efb88950784";
async function checkWeather(cityName) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apikey}`;
  let response = await fetch(apiUrl, icon);
  let data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${data.main.temp} °C`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} m/s`;
  if (data.weather[0].main === "Clouds") {
    icon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    icon.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    icon.src = "images/rains.png";
  } else if (data.weather[0].main === "Drizzle") {
    icon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    icon.src = "images/mist.png";
  } else {
    icon.src = "images/snow.png";
  }
  localStorage.setItem("cityName", cityName);
  localStorage.setItem("icon", icon);
}
let input = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
searchButton.addEventListener("click", () => {
  let cityName = input.value;
  checkWeather(cityName, icon);
  input.value = "";
});
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let cityName = input.value;
    checkWeather(cityName, icon);
    input.value = "";
  }
});
window.addEventListener("load", () => {
  let storedCity = localStorage.getItem("cityName");
  let icon = localStorage.getItem("icon");

  if (storedCity && icon) {
    checkWeather(storedCity, icon);
  }
});
let icon = document.querySelector(".wheather-icon");
