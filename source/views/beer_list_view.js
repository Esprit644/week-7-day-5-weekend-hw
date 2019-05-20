const PubSub = require('../helpers/pub_sub.js');
const BeerDetailView = require('../views/beer_detail_view.js')

const BeerListView  = function (container) {
  this.container = container;
}

BeerListView.prototype.bindEvents = function (){
  PubSub.subscribe('BeerListView:allDetails', (eventPayload) =>{
    this.renderBeerDetail(eventPayload.detail);
  });
};

//this function is passed all the eventPayload data and passes it through
//a forEach loop. The createBeerListItem modifies each index of the loop and
//pushes it into var eachBeer.
//This is then passed to this.container to be appended to the list.

BeerListView.prototype.renderBeerDetail = function (beerDetails) {
  beerDetails.forEach((beer) =>{
    const eachBeer = this.createBeerListItem(beer);
    this.container.appendChild(eachBeer);
  })
}



//This function is passed beer as an argument from renderBeerDetail.
//It creates a new instance of BeerDetailView and returns it. It is called in the function 'renderBeerDetail'.
//
BeerListView.prototype.createBeerListItem = function (beer) {
  const beerDetailView = new BeerDetailView();
  const beerDetail = beerDetailView.createBeerDetail(beer);
  return beerDetail;
}


module.exports = BeerListView;
