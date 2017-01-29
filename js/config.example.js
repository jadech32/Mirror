// Twitter API config

// Obtain from dev.twitter.com
var config = {
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           5*1000,  // 5s interval - Maximum 180 calls per minute
};

// Twitter user Parameters, from API documentation
var params = {
  slug: '',
  owner_screen_name: '',
  count: ,
}
// Weather API config - Darksky API
var weatherAPI = ;

// NYTimes API config
var nyTimes = ;


// So that variable can be accessed
module.exports.Config = config;
module.exports.weather = weatherAPI;
module.exports.nyTimes = nyTimes;
module.exports.params = params;
