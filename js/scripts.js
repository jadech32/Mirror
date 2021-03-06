
// DATE AND TIME

function renderTime() {
    var mydate = new Date();
    var year = mydate.getYear();
      if(year < 1000) {
        year += 1900;
      }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December")
    // Date End

    // Time
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();

// 24 hour clock
    if (h == 24) {
      h = 0;
    } else if(h > 12) {
      h = h - 0;
    }

    if (h < 10) {
      h = "0" + h;
    }

    if (m < 10) {
      m = "0" + m;
    }

    if (s < 10) {
      s = "0" + s;
    }

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = h + ":" + m
    myClock.innerText = h + ":" + m

    var myDate = document.getElementById("dateDisplay");
    myDate.innerText = dayarray[day]

    var myMonth = document.getElementById("monthDisplay");
    myMonth.innerText = montharray[month] + " " + daym;
    setTimeout("renderTime()",1000);
}
// EXPORT VARIABLES
var config = require('./js/config.js')
// TODOIST



// WEATHER

function renderWeather() {


  var weather = new XMLHttpRequest();

  weather.open("GET",config.weather, false);
  weather.send(null);

  var r = JSON.parse(weather.response);
  var holder = String(r.currently.temperature).substring(0,2);
  var temp = holder + "°";
  var fore = r.hourly.summary;
  var underbar = String(r.hourly.data[0].precipProbability) + "%";


  var myWeather = document.getElementById("weather");
  myWeather.innerText = temp;

  var myForecast = document.getElementById("forecast");
  myForecast.innerText = fore;

  var myUnderbar = document.getElementById("underbar");
  myUnderbar.innerText = underbar;

  setTimeout("renderWeather()",3.6E6);
}

// IMAGE
/*
function renderImage() {

  var weather = new XMLHttpRequest();
  weather.open("GET",config.weather, false);
  weather.send(null);

  var r = JSON.parse(weather.response);
  var fore = r.current_observation.weather;  // keywords

  var currentTime = new Date();
  var h = currentTime.getHours();


        var thunder = "http://imgur.com/A1pHKxx.png"; //
        var wind = "http://imgur.com/eGDgZsz.png";
        var clear_day = "http://imgur.com/NTWotU9.png"; //
        var clear_night = "http://imgur.com/1H2uxp1.png"; //
        var fog = "http://imgur.com/zSfBxAU.png";
        var cloudy = "http://imgur.com/XrGJl5K.png"; //
        var part_cloudy_day = "http://imgur.com/hhy6fJC"; //
        var part_cloudy_night = "http://imgur.com/yrS56Fd.png"; //
        var rain = "http://imgur.com/nw1EcoS.png"; //
        var sleet = "http://imgur.com/ydsOZxE.png"; //
        var snow = "http://imgur.com/HftBFhI.png"; //


      if (fore.includes("Rain")) {
        show_image(rain,72,72,"Rain");
      } else if (fore.includes("Thunderstorm")) {
        show_image(thunder,72,72,"Thunderstorm");
      } else if ((fore.includes("Clear")) || (fore.includes("Sunny"))) {
        if ( h >= 18) {
          show_image(clear_night,72,72,"Clear Night");
        } else {
          show_image(clear_day,72,72,"Clear Day");
        }
      } else if((fore.includes("Partly Cloudy")) || (fore.includes("Scattered Clouds"))){
        if( h >= 18) {
          show_image(part_cloudy_night,72,72,"Partly Cloudy");
        } else {
          show_image(part_cloudy_day,72,72,"Partly Cloudy");
        }
      } else if(fore.includes("Cloudy") || fore.includes("Overcast")) {
        show_image(cloudy,72,72,"Cloudy");
      } else if((fore.includes("Snow")) || (fore.includes("Flurries"))) {
        show_image(snow,72,72,"Snow");
      } else if(fore.includes("Sleet")) {
        show_image(sleet,72,72,"Sleet");
      }

    //    show_image(src, 72,72, "Google Logo");
    }



function show_image(src, width, height, alt) {
      var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
        document.getElementById("img").appendChild(img);
}
*/
// News API

function renderNews() {
var news = new XMLHttpRequest();
news.open("GET",config.nyTimes);
news.responseType = 'json';
news.send(null);
news.onreadystatechange = function () {
  if (news.readyState === XMLHttpRequest.DONE && news.status === 200) {
    var nr = news.response;
    var headlines = nr.results[0].title;

    document.getElementById('news_1').innerHTML = nr.results[0].title;
    document.getElementById('news_2').innerHTML = nr.results[1].title;
    document.getElementById('news_3').innerHTML = nr.results[2].title;
    document.getElementById('news_4').innerHTML = nr.results[3].title;
    document.getElementById('news_5').innerHTML = nr.results[4].title;
  }
}
 setTimeout("renderNews()",600000); // once every 10 minutes
}

// Twitter API

function tweet() {
var Twit = require('twit');

var T = new Twit(config.Config);


  T.get('lists/statuses',config.params, gotData);

// Include quoted text if quoted  or RT
  function gotData(err, data, response) {
    console.log("@"+data[0].user.screen_name + ":" + " " + data[0].text);
    document.getElementById('tweet_1').innerHTML = "@" + data[0].user.screen_name + ":" + " " + data[0].text;
    document.getElementById('tweet_2').innerHTML = "@" + data[1].user.screen_name + ":" + " " + data[1].text;
    document.getElementById('tweet_3').innerHTML = "@" + data[2].user.screen_name + ":" + " " + data[2].text;
    document.getElementById('tweet_4').innerHTML = "@" + data[3].user.screen_name + ":" + " " + data[3].text;
    document.getElementById('tweet_5').innerHTML = "@" + data[4].user.screen_name + ":" + " " + data[4].text;
  }

  setTimeout("tweet()",5000);
}

// TODOIST



// ONLOAD FUNCTIONS

function startFunctions() {
  renderTime();
  renderWeather();
  //renderImage();
  renderNews();
  tweet();
}
