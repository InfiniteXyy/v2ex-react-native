const HOST_URI = "https://www.v2ex.com/api/";
const TOPIC_TYPES = {
  latest: HOST_URI + "topics/latest.json",
  hot: HOST_URI + "topics/hot.json"
};
const PAGE_LIMIT = 20;

const fetchData = (url, method, successCallback, failCallback) => {
  fetch(url, {
    method: method,
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
  let URL = TOPIC_TYPES[channel];
  return fetchData(URL, "GET", successCallback, failCallback);
};

const fetchReplies = (topicId, page, successCallback, failCallback) => {
  const REPLY_URI = HOST_URI + "replies/show.json";
  return fetchData(REPLY_URI + "?topic_id=" + topicId, "GET", successCallback);
};

const fetchNodes = (successCallback) => {
  let URL = HOST_URI + "nodes/all.json"
  return fetchData(URL, "GET", successCallback)
}

export { fetchList, fetchReplies, fetchNodes };
