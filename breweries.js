fetch('https://api.openbrewerydb.org/breweries')
.then(res => res.json())
.then(breweries => showBreweries(breweries))



