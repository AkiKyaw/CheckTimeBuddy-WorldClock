function updateTime(){
YgnTimezone = moment.tz("Asia/Rangoon");

let YgnTimeElement = document.querySelector("#ygnTime");
let YgnDateElement = document.querySelector("#ygnDate");
let YgnAMElement = document.querySelector("#ygnAM");
YgnDateElement.innerHTML = YgnTimezone.format("MMMM Do, YYYY");
YgnTimeElement.innerHTML = YgnTimezone.format("hh : mm : ss");
YgnAMElement.innerHTML = YgnTimezone.format("a");

BkkTimezone = moment.tz("Asia/Bangkok");

let BkkTimeElement = document.querySelector("#bkkTime");
let BkkDateElement = document.querySelector("#bkkDate");
let BkkAMElement = document.querySelector("#bkkAM");
BkkDateElement.innerHTML = BkkTimezone.format("MMMM Do, YYYY");
BkkTimeElement.innerHTML = BkkTimezone.format("hh : mm : ss");
BkkAMElement.innerHTML = BkkTimezone.format("a");
}

setInterval(updateTime,1);