'use strict';

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'];
let tableID = document.getElementById('tableID');
let arrTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let totals = 0;

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
  let footer = document.createElement('tfoot');
  tableID.appendChild(footer);
  let tableRow = document.createElement('tr');
  footer.appendChild(tableRow);
  let tdEl1 = document.createElement('td');
  tableRow.appendChild(tdEl1);
  tdEl1.textContent = 'Total';
  let tdEl;
  for (let i = 0; i < hours.length-1; i++) {
    tdEl = document.createElement('td');
    tableRow.appendChild(tdEl);
    tdEl.textContent = `${arrTotal[i]}`;
  }
  tdEl = document.createElement('td');
  tableRow.appendChild(tdEl);
  tdEl.textContent = `${totals}`;
}

heading();

// Calling to Creating Objects inside the body of tables

let seattle = new Store('Seattle', 23, 65, 6.3);
seattle.calccustPerHour();
seattle.calccookPerhour();
seattle.createElement();

let tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.calccustPerHour();
tokyo.calccookPerhour();
tokyo.createElement();

let dubai = new Store('Dubai', 11, 38, 3.7);
dubai.calccustPerHour();
dubai.calccookPerhour();
dubai.createElement();

let paris = new Store('Paris', 20, 38, 2.3);
paris.calccustPerHour();
paris.calccookPerhour();
paris.createElement();

let lima = new Store('Lima', 2, 16, 4.6);
lima.calccustPerHour();
lima.calccookPerhour();
lima.createElement();

footers();































/*function generateNum(min,max) {

  return Math.floor(Math.random()*(max-min+1)+min);
}

// create an object for seattle location

let seattle ={

  // properties of the seattle object
  minCust:23,
  maxCust:65,
  avgCook: 6.3,
  numCook:[],

  // a method of seattle object
  cust: function() {

    // generate the customer number & the cookies number
    for (let n=0;n<hours.length;n++){
      let numCust=generateNum(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }

  }
};

// create an object for tokyo location

let tokyo= {

  minCust:3,
  maxCust:24,
  avgCook: 1.2,
  numCook:[],

  // a method of tokyo object
  cust: function() {

    // generate the customer number & the cookies number
    for (let n=0;n<hours.length;n++){
      let numCust=generateNum(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }

  }
};

// create an object for dubai location

let dubai={

  minCust:11,
  maxCust:38,
  avgCook: 3.7,
  numCook:[],

  // a method of dubai object
  cust: function() {

    // generate the customer number & the cookies number
    for (let n=0;n<hours.length;n++){
      let numCust=generateNum(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }

  }
};

// create an object for paris location

let paris={

  minCust:20,
  maxCust:38,
  avgCook: 2.3,
  numCook:[],

  // a method of paris object
  cust: function() {

    // generate the customer number & the cookies number
    for (let n=0;n<hours.length;n++){
      let numCust=generateNum(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }

  }
};

// create an object for lima location

let lima={

  minCust:2,
  maxCust:16,
  avgCook: 4.6,
  numCook:[],

  // a method of lima object
  cust: function() {

    // generate the customer number & the cookies number
    for (let n=0;n<hours.length;n++){
      let numCust=generateNum(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }

  }
};


// // documentation (by using document object) on sales.html file // //

let parent1=document.getElementById('location');

// create an image element on sales.html file

let image=document.createElement('img');

// add the new element on the html page

parent1.appendChild(image);
image.setAttribute('src','img/salmon.png');

// Setting For Seattle Location //
let totalCook=0;
seattle.cust();

//First Header & First List
let firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='seattle';

let firstList=document.createElement('ul');
parent1.appendChild(firstList);

// For Loop to put the items of the seattle list

for (let n= 0; n < seattle.numCook.length; n++) {
  let listItem = document.createElement('li');
  firstList.appendChild(listItem);
  listItem.textContent = `${hours[n]}: ${seattle.numCook[n]} cookies`;
  totalCook = totalCook + seattle.numCook[n];
}

// add the totals cookies to previous list

let listItem = document.createElement('li');
firstList.appendChild(listItem);
listItem.textContent = `Total: ${totalCook} cookies`;

// Setting For Tokyo Location //

totalCook =0;
tokyo.cust();

//First Header & Second List
firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='Tokyo';

firstList=document.createElement('ul');
parent1.appendChild(firstList);

// For Loop to put the items of the tokyo list

for (let n= 0; n < tokyo.numCook.length; n++) {
  let listItem = document.createElement('li');
  firstList.appendChild(listItem);
  listItem.textContent = `${hours[n]}: ${tokyo.numCook[n]} cookies`;
  totalCook = totalCook + tokyo.numCook[n];
}

// add the totals cookies to previous list

listItem = document.createElement('li');
firstList.appendChild(listItem);
listItem.textContent = `Total: ${totalCook} cookies`;

// Setting For Dubai Location //
totalCook=0;
dubai.cust();

//First Header & First List
firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='Dubai';

firstList=document.createElement('ul');
parent1.appendChild(firstList);

// For Loop to put the items of the dubai list

for (let n= 0; n < dubai.numCook.length; n++) {
  let listItem = document.createElement('li');
  firstList.appendChild(listItem);
  listItem.textContent = `${hours[n]}: ${dubai.numCook[n]} cookies`;
  totalCook = totalCook + dubai.numCook[n];
}

// add the totals cookies to previous list

listItem = document.createElement('li');
firstList.appendChild(listItem);
listItem.textContent = `Total: ${totalCook} cookies`;


// Setting For Paris Location //

totalCook=0;
paris.cust();

//First Header & First List
firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='Paris';

firstList=document.createElement('ul');
parent1.appendChild(firstList);

// For Loop to put the items of the seattle list

for (let n= 0; n < paris.numCook.length; n++) {
  let listItem = document.createElement('li');
  firstList.appendChild(listItem);
  listItem.textContent = `${hours[n]}: ${paris.numCook[n]} cookies`;
  totalCook = totalCook + paris.numCook[n];
}

// add the totals cookies to previous list

listItem = document.createElement('li');
firstList.appendChild(listItem);
listItem.textContent = `Total: ${totalCook} cookies`;


// Setting For Lima Location //
totalCook=0;
lima.cust();

//First Header & First List
firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='Lima';

firstList=document.createElement('ul');
parent1.appendChild(firstList);

// For Loop to put the items of the Lima list

for (let n= 0; n < lima.numCook.length; n++) {
  let listItem = document.createElement('li');
  firstList.appendChild(listItem);
  listItem.textContent = `${hours[n]}: ${lima.numCook[n]} cookies`;
  totalCook = totalCook + lima.numCook[n];
}

// add the totals cookies to previous list

listItem = document.createElement('li');
firstList.appendChild(listItem);
listItem.textContent = `Total: ${totalCook} cookies`;
*/
