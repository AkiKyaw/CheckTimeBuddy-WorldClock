function updateTime() {
  yourCity = moment.tz.guess();
  yourTimezone = moment.tz(`${yourCity}`);

  let cityIdElement = document.querySelector(".localCity");
  cityIdElement.id = `${yourCity}`;
  let yourCityNameElement = document.querySelector("#City");
  let yourTimeElement = document.querySelector("#Time");
  let yourDateElement = document.querySelector("#Date");
  let yourAMElement = document.querySelector("#AM");
  yourCityNameElement.innerHTML = yourCity.replace("_", " ").split("/")[1];
  yourDateElement.innerHTML = yourTimezone.format("MMMM Do, YYYY");
  yourTimeElement.innerHTML = yourTimezone.format("h:mm:ss");
  yourAMElement.innerHTML = yourTimezone.format("a").toUpperCase();
}

function addNewTimezone(event) {
  let timeZoneName = event.target.value;
  if (timeZoneName.length > 0 && !document.getElementById(timeZoneName)) {
    timeZone = moment.tz(`${timeZoneName}`);
    let cityName = timeZoneName.replace("_", " ").split("/")[1];
    let display = document.querySelector(".cities-container");
    display.innerHTML += `
    <div class="city" id="${timeZoneName}">
          <div class="cityInfo">
            <h2 class="city-name">${cityName}</h2>
            <span class="date newDate">${timeZone.format(
              "MMMM Do, YYYY"
            )}</span>
          </div>
          <div class="city-time">
            <h2 class="time">${timeZone.format("h:mm:ss")}</h2>
            <span class="AM newAM">${timeZone.format("a").toUpperCase()}</span>
          </div>
    </div>
    `;
  }

  setInterval(() => {
    let city = document.getElementById(timeZoneName);
    if (city) {
      timeZone = moment.tz(`${timeZoneName}`);
      let cityTime = city.querySelector(".time");
      let cityTimeAM = city.querySelector(".newAM");
      let cityTimedate = city.querySelector(".newDate");
      cityTime.innerHTML = timeZone.format("h:mm:ss");
      cityTimeAM.innerHTML = timeZone.format("a").toUpperCase();
      cityTimedate.innerHTML = timeZone.format("MMMM Do, YYYY");
    }
  }, 100);
}

function populateTimezoneSelect() {
  const timezones = moment.tz.names();
  const selectElement = document.querySelector("#cities");

  timezones.forEach((timezone) => {
    if (timezone.includes("/")) {
      const option = document.createElement("option");
      option.value = timezone;
      option.text = timezone.replace("_", " ").split("/")[1];
      selectElement.appendChild(option);
    }
  });
}

populateTimezoneSelect();

let selectedCityElement = document.querySelector("#cities");

selectedCityElement.addEventListener("change", addNewTimezone);

setInterval(updateTime, 100);
