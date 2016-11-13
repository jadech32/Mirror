// Twitter API config

// Obtain from dev.twitter.com
var config = {
  consumer_key:         'tg4zxQa7FqxcrrksmObVqnjfQ',
  consumer_secret:      'IyLyUgZFbt6Hi0bwRQObgEC1H1CHGVrz9AcYdngDwtY52eYEKm',
  access_token:         '1923070242-MDEgjNbTxkysqe91s1b0xQGwp2nw1mhjiJxNnBQ',
  access_token_secret:  'eUBzL1c148WAYatmlN6CwiHk6i3KGmOr5PyybEizDS0Ie',
  timeout_ms:           5*1000,  // 5s interval - Maximum 180 calls per minute
};
// Weather API config
var weatherAPI = "http://api.wunderground.com/api/7ef8fc32acd04dd5/conditions/q/Canada/Vancouver.json";

// NYTimes API config
var nyTimes = "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=cc5ee843469c4fbf95ce3aca5ee099f9";


// So that variable can be accessed
module.exports.Config = config;
module.exports.weather = weatherAPI;
module.exports.nyTimes = nyTimes;
