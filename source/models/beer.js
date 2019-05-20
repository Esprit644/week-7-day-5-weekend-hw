const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js')

const Beer = function () {
  this.beerData = [];//an empty array as it is awaiting all the details from the API
}

//this takes the data from the url and puts it into 'request'.
//request is transformed by .get and .then
//the output 'data' is pushed into the empty array 'beerData'
//This is then published on the channel 'BeerListView:allDetails' with the payload 'this.beerData'.

  Beer.prototype.getData = function () {
    const request = new RequestHelper(' https://api.punkapi.com/v2/beers')
      request.get().then((data) => {
          this.beerData = data
          console.log(this.beerData);
      PubSub.publish('BeerListView:allDetails', this.beerData);
  })

}


module.exports = Beer;
