'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// code-Lab07 : constructor

let locations = [];

// create locations

function Locations(name, minCustomer, maxCustomer, avgCookies) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  locations.push(this);
}

Locations.prototype.calcCustomerPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customerPerHour.push(random(this.minCustomer, this.maxCustomer));
  }
};

Locations.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.avgCookies));
  }
};


Locations.prototype.calcDailyTotal = function () {
  for (let i = 0; i < hours.length; i++) {
    this.dailyTotal += this.cookiesPerHour[i];
  }
};

// render table 


Locations.prototype.render = function () {
  let tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  let tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);
  let tableHeading = document.createElement('th');
  tableRow.appendChild(tableHeading);
  tableHeading.textContent = this.name;
  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = this.cookiesPerHour[i];
  }
  let tableData = document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent = this.dailyTotal;
};


// renders img 

let parent1 = document.getElementById('locations');
let img = document.createElement('img');
img.setAttribute('src', 'img/salmon.png');
img.setAttribute('alt', 'Salmon Cookies Logo');
parent1.appendChild(img);

// renders table & table header 

let table = document.createElement('table');
parent1.appendChild(table);

(function () {
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
})();

// Creates new instances for each location

let Seattle = new Locations('Seattle', 23, 65, 6.3);
let Tokyo = new Locations('Tokyo', 3, 24, 1.2);
let Dubai = new Locations('Dubai', 11, 38, 3.7);
let Paris = new Locations('Paris', 20, 38, 2.3);
let Lima = new Locations('Lima', 2, 16, 4.6);


// calls objects 

for (let i = 0; i < locations.length; i++) {
  locations[i].calcCustomerPerHour();
  locations[i].calcCookiesPerHour();
  locations[i].calcDailyTotal();
  locations[i].render();
}

// renders table footer 

(function () {
  let tableFooter = document.createElement('tfoot');
  table.appendChild(tableFooter);
  let tableHeading = document.createElement('th');
  tableFooter.appendChild(tableHeading);
  tableHeading.textContent = 'Totals';
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < locations.length; j++) {
      hourlyTotal += locations[j].cookiesPerHour[i];
    }
    tableHeading = document.createElement('th');
    tableFooter.appendChild(tableHeading);
    tableHeading.textContent = hourlyTotal;
  }
  let grandTotal = 0;
  for (let i = 0; i < locations.length; i++) {
    grandTotal += locations[i].dailyTotal;
  }
  tableHeading = document.createElement('th');
  tableFooter.appendChild(tableHeading);
  tableHeading.textContent = grandTotal;
  console.log(grandTotal);
})();



// code-Lab06 : objects


/*let seattle = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  numCookies: [],
  randCustomer: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let numCust = generateNum(this.minCustomer, this.maxCustomer);
      this.numCookies.push(Math.floor(numCust * this.avgCookies));
    }
  }
};

let tokyo = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  numCookies: [],
  randCustomer: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let numCust = generateNum(this.minCustomer, this.maxCustomer);
      this.numCookies.push(Math.floor(numCust * this.avgCookies));
    }
  }
};

let dubai = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  numCookies: [],
  randCustomer: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let numCust = generateNum(this.minCustomer, this.maxCustomer);
      this.numCookies.push(Math.floor(numCust * this.avgCookies));
    }
  }
};

let paris = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  numCookies: [],
  randCustomer: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let numCust = generateNum(this.minCustomer, this.maxCustomer);
      this.numCookies.push(Math.floor(numCust * this.avgCookies));
    }
  }
};

let lima = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  numCookies: [],
  randCustomer: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let numCust = generateNum(this.minCustomer, this.maxCustomer);
      this.numCookies.push(Math.floor(numCust * this.avgCookies));
    }
  }
};

let parent1 = document.getElementById('locations');
let image = document.createElement('img');
parent1.appendChild(image);
image.setAttribute('src', 'img/salmon.png');

//Seattle

let totalCookies = 0;
seattle.randCustomer();

let header = document.createElement('h4');
parent1.appendChild(header);
header.textContent = 'Seattle';
let unorderedList = document.createElement('ul');

parent1.appendChild(unorderedList);
for (let i = 0; i < seattle.numCookies.length; i++) {
  let listItem = document.createElement('li');
  unorderedList.appendChild(listItem);
  listItem.textContent = `${workingHours[i]}: ${seattle.numCookies[i]} cookies`;
  totalCookies = totalCookies + seattle.numCookies[i];
}
let listItem = document.createElement('li');
unorderedList.appendChild(listItem);
listItem.textContent = `Total: ${totalCookies} cookies`;

//Tokyo

totalCookies = 0;
tokyo.randCustomer();

header = document.createElement('h4');
parent1.appendChild(header);
header.textContent = 'Tokyo';
unorderedList = document.createElement('ul');

parent1.appendChild(unorderedList);
for (let i = 0; i < tokyo.numCookies.length; i++) {
  let listItem = document.createElement('li');
  unorderedList.appendChild(listItem);
  listItem.textContent = `${workingHours[i]}: ${tokyo.numCookies[i]} cookies`;
  totalCookies = totalCookies + tokyo.numCookies[i];
}
listItem = document.createElement('li');
unorderedList.appendChild(listItem);
listItem.textContent = `Total: ${totalCookies} cookies`;

//Dubai

totalCookies = 0;
dubai.randCustomer();

header = document.createElement('h4');
parent1.appendChild(header);
header.textContent = 'Dubai';
unorderedList = document.createElement('ul');

parent1.appendChild(unorderedList);
for (let i = 0; i < dubai.numCookies.length; i++) {
  let listItem = document.createElement('li');
  unorderedList.appendChild(listItem);
  listItem.textContent = `${workingHours[i]}: ${dubai.numCookies[i]} cookies`;
  totalCookies = totalCookies + dubai.numCookies[i];
}
listItem = document.createElement('li');
unorderedList.appendChild(listItem);
listItem.textContent = `Total: ${totalCookies} cookies`;

//Paris

totalCookies = 0;
paris.randCustomer();

header = document.createElement('h4');
parent1.appendChild(header);
header.textContent = 'Paris';
unorderedList = document.createElement('ul');

parent1.appendChild(unorderedList);
for (let i = 0; i < paris.numCookies.length; i++) {
  let listItem = document.createElement('li');
  unorderedList.appendChild(listItem);
  listItem.textContent = `${workingHours[i]}: ${paris.numCookies[i]} cookies`;
  totalCookies = totalCookies + paris.numCookies[i];
}
listItem = document.createElement('li');
unorderedList.appendChild(listItem);
listItem.textContent = `Total: ${totalCookies} cookies`;

//Lima

totalCookies = 0;
lima.randCustomer();

header = document.createElement('h4');
parent1.appendChild(header);
header.textContent = 'Lima';
unorderedList = document.createElement('ul');

parent1.appendChild(unorderedList);
for (let i = 0; i < lima.numCookies.length; i++) {
  let listItem = document.createElement('li');
  unorderedList.appendChild(listItem);
  listItem.textContent = `${workingHours[i]}: ${lima.numCookies[i]} cookies`;
  totalCookies = totalCookies + lima.numCookies[i];
}
listItem = document.createElement('li');
unorderedList.appendChild(listItem);
listItem.textContent = `Total: ${totalCookies} cookies`;*/
