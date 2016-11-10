var Twit = require('twit');

var T = new Twit({
  consumer_key:         'tg4zxQa7FqxcrrksmObVqnjfQ',
  consumer_secret:      'IyLyUgZFbt6Hi0bwRQObgEC1H1CHGVrz9AcYdngDwtY52eYEKm',
  access_token:         '1923070242-MDEgjNbTxkysqe91s1b0xQGwp2nw1mhjiJxNnBQ',
  access_token_secret:  'eUBzL1c148WAYatmlN6CwiHk6i3KGmOr5PyybEizDS0Ie',
  timeout_ms:           5*1000,  // 5s interval
});


  var params = {
    slug: 'Sneakers',
    owner_screen_name: 'GnarlyNarwhal1',
    count: 3,

  }

  T.get('lists/statuses', params, gotData);


  function gotData(err, data, response) {
    console.log(data);
    //document.getElementById('tweet').innerHTML = "@" + data[0].user.screen_name + ":" + " " + data[0].text;
  }
