const BeerListView = require('./views/beer_list_view.js');
const Beer = require('./models/beer.js')


//This checks that the DOM is loaded.
//It targets 'beer-display' and returns any changes and then makes a new instance
//of BeerListView.
//
document.addEventListener('DOMContentLoaded', ()=>{
const listContainer = document.querySelector('#beer-display');
const beerListView = new BeerListView(listContainer)
beerListView.bindEvents();

const beers = new Beer;
beers.getData();
})
