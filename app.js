var fs = require('fs');

var hotels = JSON.parse(fs.readFileSync('assets/hotels.json'));
var pays = JSON.parse(fs.readFileSync('assets/countries.json'));

function merge(hotels,pays){

    var re = {};
    re["pays"] = pays;

    hotels.forEach(item => {
        item.name += ' ,' + item.country + ' ,' + item.city + ' ,' + item.address;
        item.code = 'NN';
    });

    re["hotel"] = hotels;


    re = JSON.stringify(re);
    fs.writeFileSync('assets/data.json',re);

}



merge(hotels,pays);