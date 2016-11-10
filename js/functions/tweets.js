//function tweet() {
var Twit = require('twit');
var config = require('./js/functions/config.js')
var T = new Twit(config.Config);


  var params = {
    slug: 'Sneakers',
    owner_screen_name: 'GnarlyNarwhal1',
    count: 2,

  }

  T.get('lists/statuses', params, gotData);


  function gotData(err, data, response) {
    console.log("@"+data[0].user.screen_name + ":" + " " + data[0].text);
    //document.getElementById('tweet').innerHTML = "@" + data[0].user.screen_name + ":" + " " + data[0].text;
  }

  //setTimeout("tweet()",5000);
//};
