'use strict';

const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Creates an empty array to add new shops

let shops = [], table;

// Creates shop objects using constructor notation

function Shop(locationName, minCustomer, maxCustomer, avgCookies) {
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  shops.push(this);
}

// Generates a random number of customers per hour

Shop.prototype.calcCustomerPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customerPerHour.push(random(this.minCustomer, this.maxCustomer));
  }
};

// Calculates the number of cookies per hour by multiplying average cookies per customer by hourly number of customers

Shop.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
  }
};

// Calculates the daily total cookies per location

Shop.prototype.calcDailyTotal = function () {
  for (let i = 0; i < hours.length; i++) {
    this.dailyTotal += this.cookiesPerHour[i];
  }
};

// Renders table body

Shop.prototype.render = function () {
  let tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  let tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);
  let tableHeading = document.createElement('th');
  tableRow.appendChild(tableHeading);
  tableHeading.textContent = this.locationName;
  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = this.cookiesPerHour[i];
  }
  let tableData = document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent = this.dailyTotal;
};

// Renders logo image

let parent1 = document.getElementById('locations');
let img = document.createElement('img');
img.setAttribute('src', 'img/salmon.png');
img.setAttribute('alt', 'Salmon Cookies Logo');
parent1.appendChild(img);

// Renders table header

function renderHeader() {
  let tableHeader = document.createElement('thead');
  table.appendChild(tableHeader);
  let tableRow = document.createElement('tr');
  tableHeader.appendChild(tableRow);
  let tableHeading = document.createElement('th');
  tableRow.appendChild(tableHeading);
  tableHeading.textContent = '';
  for (let i = 0; i < hours.length; i++) {
    tableHeading = document.createElement('th');
    tableRow.appendChild(tableHeading);
    tableHeading.textContent = hours[i];
  }
  tableHeading = document.createElement('th');
  tableRow.appendChild(tableHeading);
  tableHeading.textContent = 'Daily Location Total';
}

// Renders table footer

function renderFooter() {
  let tableFooter = document.createElement('tfoot');
  table.appendChild(tableFooter);
  let tableHeading = document.createElement('th');
  tableFooter.appendChild(tableHeading);
  tableHeading.textContent = 'Totals';
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < shops.length; j++) {
      hourlyTotal += shops[j].cookiesPerHour[i];
      grandTotal += shops[j].cookiesPerHour[i];
    }
    tableHeading = document.createElement('th');
    tableFooter.appendChild(tableHeading);
    tableHeading.textContent = hourlyTotal;
  }
  tableHeading = document.createElement('th');
  tableFooter.appendChild(tableHeading);
  tableHeading.textContent = grandTotal;
}

// Creates new instances for each location

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

// Creates shop form

let shopForm = document.getElementById('shopForm');
shopForm.addEventListener('submit', submitData);

function submitData(event) {
  event.preventDefault();
  let locationName = event.target.locationName.value;
  let minCustomer = parseInt(event.target.minCustomer.value);
  let maxCustomer = parseInt(event.target.maxCustomer.value);
  let avgCookies = parseFloat(event.target.avgCookies.value);

  let newLocation = new Shop(locationName, minCustomer, maxCustomer, avgCookies);

  parent1.textContent = '';
  table = document.createElement('table');
  parent1.appendChild(table);
  renderHeader();

  // Calls object methods

  for (let i = 0; i < shops.length; i++) {
    shops[i].calcCustomerPerHour();
    shops[i].calcCookiesPerHour();
    shops[i].calcDailyTotal();
    shops[i].render();
  }
  renderFooter();
}
