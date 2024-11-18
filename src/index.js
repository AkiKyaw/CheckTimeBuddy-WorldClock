function updateTime() {
  yourCity = moment.tz.guess();
  yourTimezone = moment.tz(`${yourCity}`);

  let yourCityNameElement = document.querySelector("#City");
  let yourTimeElement = document.querySelector("#Time");
  let yourDateElement = document.querySelector("#Date");
  let yourAMElement = document.querySelector("#AM");
  yourCityNameElement.innerHTML = yourCity.replace("_", " ").split("/")[1];
  yourDateElement.innerHTML = yourTimezone.format("MMMM Do, YYYY");
  yourTimeElement.innerHTML = yourTimezone.format("h : mm : ss");
  yourAMElement.innerHTML = yourTimezone.format("a");
}

setInterval(updateTime, 1000);

function addNewTimezone(event) {
  let timeZoneName = event.target.value;
  if (timeZoneName.length > 0) {
    timeZone = moment.tz(`${timeZoneName}`);
    let cityName = timeZoneName.replace("_", " ").split("/")[1];
    let display = document.querySelector(".cities-container");
    display.innerHTML += `
    <div class="city">
          <div class="cityInfo">
            <h2 class="city-name">${cityName}</h2>
            <span class="date">${timeZone.format("MMMM Do, YYYY")}</span>
          </div>
          <div class="city-time">
            <h2>${timeZone.format("h : mm : ss")}</h2>
            <span class="AM" >${timeZone.format("a")}</span>
          </div>
    </div>
    `;
  }
}

let selectedCityElement = document.querySelector("#cities");

selectedCityElement.addEventListener("change", addNewTimezone);
