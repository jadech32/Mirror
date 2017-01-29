function renderNews() {
var news = new XMLHttpRequest();
news.open("GET",config.nyTimes);
news.responseType = 'json';
news.send(null);
news.onreadystatechange = function () {
  if (news.readyState === XMLHttpRequest.DONE && news.status === 200) {
    var nr = news.response;
    var headlines = nr.results[0].title;

    console.lognr.results[0].title;

  }
}
 setTimeout("renderNews()",600000); // once every 10 minutes
}

renderNews();
