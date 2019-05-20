const PubSub = require('../helpers/pub_sub.js');
const BeerListView = require('../views/beer_list_view.js');

const BeerDetailView = function () {
}

//This function creates a classlist div called 'beer-detail'. Within this the
//seperate headings are created such as 'h2' and the elements from the data array
//are appended.
BeerDetailView.prototype.createBeerDetail= function (beer){
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

  const name = document.createElement('h2')
  name.textContent = beer.name
  beerDetail.appendChild(name)

  const tagline = document.createElement('h3')
  tagline.textContent = beer.tagline
  beerDetail.appendChild(tagline)

  const description = document.createElement('h4')
  description.textContent = beer.description
  beerDetail.appendChild(description)


  const abv = document.createElement('h5');
  abv.textContent = beer.abv
  beerDetail.appendChild(abv)

  const picture = document.createElement('img')
  picture.src = beer.image_url
  beerDetail.appendChild(picture)


   return beerDetail;
}

module.exports = BeerDetailView;
