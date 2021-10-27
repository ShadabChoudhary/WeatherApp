// const proxy="https://cors-anywhere.herokuapp.com"
// const key = "419c2e69aaedaf34c1184dbe87ee2673";
// let baseurl = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${key}`;

const searchbox = document.querySelector(".search-box");
const onClick = document.querySelector(".btn");
onClick.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchbox.value}&appid=419c2e69aaedaf34c1184dbe87ee2673`
  )
    .then((response) => response.json())
    .then(displayresults);
});

function displayresults(weather) {
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  // let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(new Date());

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>℃</span>`;

  let weather_type = document.querySelector(".current .weather");
  weather_type.innerHTML = weather.weather[0].main;

  let hilow = document.querySelector(".current .hi-low");
  hilow.innerHTML = `${Math.round(weather.main.temp_min)}℃ / ${Math.round(
    weather.main.temp_max
  )}℃`;
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Monday",
    "Teusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Saturady",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
