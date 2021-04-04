'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function generateNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
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
listItem.textContent = `Total: ${totalCookies} cookies`;
