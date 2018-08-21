const HOST_URI = "https://www.v2ex.com/api/";

const fetchData = (url, method, successCallback, failCallback) => {
  fetch(url, {
    method: method
  })
    .then(response => response.json())
    .then(responseJSON => {
      successCallback(responseJSON);
    })
    .catch(err => {
      failCallback(err);
    });
};

const fetchList = (channel, successCallback, failCallback) => {
  let URL = HOST_URI
  if (channel === '最新') {
    // https://www.v2ex.com/api/topics/latest.json
    URL += 'topics/latest.json'
  } else if (channel === '最热') {
    URL += 'topics/hot.json'
  } else {
    URL += 'nodes/show.json?name='
  }
  
  return fetchData(URL, 'GET', successCallback, failCallback)
}

export { fetchList }