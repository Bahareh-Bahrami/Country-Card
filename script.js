'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/portugal');
request.send();
