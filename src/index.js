function updateTime(){
YgnTimezone = moment.tz("Asia/Rangoon");

let YgnTimeElement = document.querySelector("#ygnTime");
let YgnDateElement = document.querySelector("#ygnDate");
let YgnAMElement = document.querySelector("#ygnAM");
YgnDateElement.innerHTML = YgnTimezone.format("MMMM Do, YYYY");
YgnTimeElement.innerHTML = YgnTimezone.format("h : mm : ss");
YgnAMElement.innerHTML = YgnTimezone.format("a");
}

setInterval(updateTime,1);

function addNewTimezone(event){
    let timeZoneName = event.target.value;
    let timeZone = moment.tz(`${timeZoneName}`);
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

let selectedCityElement = document.querySelector("#cities");

selectedCityElement.addEventListener('change', addNewTimezone);

