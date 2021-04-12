'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
let tableID = document.getElementById('tableID');
let arrTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let totals = 0;
let storeArray = [];
let footer = document.createElement('tfoot');


// Generating random numbers
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); }



// Generating the objects by construtors

function Store(location, minCust, maxCust, avgCook) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.custPerHour = [];
  this.cook = [];
  this.total = 0;
}

// first method to randomly calc the customer per hour
Store.prototype.calccustPerHour = function () {
  for (let i = 0; i < hours.length - 1; i++) {
    this.custPerHour.push(randomValue(this.minCust, this.maxCust));
  }
};

// second method to calc the cook per hour

Store.prototype.calccookPerhour = function () {
  for (let i = 0; i < hours.length - 1; i++) {
    this.cook.push(this.custPerHour[i] * Math.floor(this.avgCook));
    this.total = this.total + this.cook[i];
    arrTotal[i] = arrTotal[i] + this.cook[i];

  }
  this.cook[this.cook.length] = this.total;
  totals += this.total;
};

// third method build the body of the table

Store.prototype.createElement = function () {
  let tableRow = document.createElement('tr');
  tableID.appendChild(tableRow);
  let tdEl1 = document.createElement('td');
  tableRow.appendChild(tdEl1);
  tdEl1.textContent = this.location;
  let tdEl;
  for (let i = 0; i < this.cook.length; i++) {
    tdEl = document.createElement('td');
    tableRow.appendChild(tdEl);
    tdEl.textContent = this.cook[i];
  }
};

//  function to create headings

function heading() {
  let thead = document.createElement('thead');
  tableID.appendChild(thead);
  let tableRow = document.createElement('tr');
  thead.appendChild(tableRow);
  let tdEl1 = document.createElement('td');
  tableRow.appendChild(tdEl1);
  tdEl1.textContent = 'stores';
  let thEl;
  for (let i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    tableRow.appendChild(thEl);
    thEl.textContent = hours[i];
  }
}

// functions to create footers
function footers() {
  tableID.appendChild(footer);
  let tableRow = document.createElement('tr');
  footer.appendChild(tableRow);
  let tdEl1 = document.createElement('td');
  tableRow.appendChild(tdEl1);
  tdEl1.textContent = 'Total';
  let tdEl;
  for (let i = 0; i < hours.length - 1; i++) {
    tdEl = document.createElement('td');
    tableRow.appendChild(tdEl);
    tdEl.textContent = `${arrTotal[i]}`;
  }
  tdEl = document.createElement('td');
  tableRow.appendChild(tdEl);
  tdEl.textContent = `${totals}`;
}

// creating the from


const form = document.getElementById('storeform');
form.addEventListener('submit', stores);

function stores(event) {
  event.preventDefault();

  let storeName = event.target.storeName.value;

  let mincust = parseInt(event.target.mincust.value);

  let maxcust = parseInt(event.target.maxcust.value);


  let avgcook = parseFloat(event.target.avgcook.value);

  let newStore = new Store(storeName, mincust, maxcust, avgcook);
  newStore.calccustPerHour();
  newStore.calccookPerhour();
  newStore.createElement();

  tableID.deleteRow(tableID.rows.length - 1);
  footers();
}
heading();


// Calling to Creating Objects inside the body of tables

let seattle = new Store('Seattle', 23, 65, 6.3);
seattle.calccustPerHour();
seattle.calccookPerhour();
let tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.calccustPerHour();
tokyo.calccookPerhour();
let dubai = new Store('Dubai', 11, 38, 3.7);
dubai.calccustPerHour();
dubai.calccookPerhour();
let paris = new Store('Paris', 20, 38, 2.3);
paris.calccustPerHour();
paris.calccookPerhour();
let lima = new Store('Lima', 2, 16, 4.6);
lima.calccustPerHour();
lima.calccookPerhour();


storeArray = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < storeArray.length; i++) {
  storeArray[i].createElement();
}

footers();
