// Twitter API config

// Obtain from dev.twitter.com
var config = {
  consumer_key:         ,
  consumer_secret:      ,
  access_token:         ,
  access_token_secret:  ,
  timeout_ms:           5*1000,  // 5s interval - Maximum 180 calls per minute
};
// Weather API config
var weatherAPI = "http://api.wunderground.com/api/xxxxxxxxxxxxxxx/conditions/q/Canada/Vancouver.json";

// NYTimes API config
var nyTimes = "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=xxxxxxxxxxxxxxxxxxxxxxxxxxx";

// So that variable can be accessed
module.exports.Config = config;
module.exports.weather = weatherAPI;
module.exports.nyTimes = nyTimes;
