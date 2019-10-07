var fs = require('fs');

var data = JSON.parse(fs.readFileSync('assets/hotels.json'));
var pays = JSON.parse(fs.readFileSync('assets/countries.json'));

data.forEach(item => {
    if(item.country == 'UK'){
        item.code = 'GB';
    }else if(item.country == 'USA'){
        item.code = 'US';
    }else {
        item.code = search(pays,item.country);
        item.name += ' ,' + item.country + ' ,' + item.city + ' ,' + item.address;
    }
    if(!item.code){
        item.code = 'NN';
    }
    
});


function search(pays,country){
    var code;
    pays.forEach(item => {
        if(item.name == country){
            code = item.code;
            return true;
        }
    });

    return code;
}

let re = JSON.stringify(data);
fs.writeFileSync('assets/data.json', re);