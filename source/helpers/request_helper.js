const RequestHelper = function (url) {
  this.url = url
};
//Fetch API provides an interface for returning resources. It replaces XMLHttpRequest
RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

module.exports = RequestHelper;
