'use strict'

const activityName = document.getElementById('activityName');
const activityType = document.getElementById('activityType');
const activityAccessibility = document.getElementById('activityAccessibility');
const activityPeople = document.getElementById('activityPeople');
const activityPrice = document.getElementById('activityPrice');

const activityTypesList = document.getElementById('activityTypes');


document.getElementById('btnRandom').addEventListener('click', () => {
    fetch('http://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(data => {

            activityName.innerHTML = data.activity;
            activityType.innerHTML = `Activity type: ${data.type}`;

            (data.accessibility == 0) ? activityAccessibility.innerHTML = 'Accessibility: very easy':
                (0 < data.accessibility <= 0.3) ? activityAccessibility.innerHTML = 'Accessibility: easy' :
                (0.3 < data.accessibility <= 0.6) ? activityAccessibility.innerHTML = 'Accessibility: normal' :
                (0.6 < data.accessibility <= 0.9) ? activityAccessibility.innerHTML = 'Accessibility: difficult' : activityAccessibility.innerHTML = 'Accessibility: very difficult';

            activityPeople.innerHTML = `Number of participants: ${data.participants}`;

            (data.price == 0) ? activityPrice.innerHTML = 'Price: free':
                (0 < data.price <= 0.3) ? activityPrice.innerHTML = 'Price: minimum' :
                (0.3 < data.price <= 0.6) ? activityPrice.innerHTML = 'Price: medium' :
                (0.6 < data.price <= 0.9) ? activityPrice.innerHTML = 'Price: high' : activityPrice.innerHTML = 'Price: maximum';
        })
        .catch(err => console.log(err));
});

// другой фетч запрос при выборе категории из списка
document.getElementById('btnByType').addEventListener('click', () => {
    const selectedActivityType = activityTypesList.options[activityTypesList.selectedIndex].value;

    fetch(`http://www.boredapi.com/api/activity?type=${selectedActivityType}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            activityName.innerHTML = data.activity;
            activityType.innerHTML = `Activity type: ${selectedActivityType}`;

            (data.accessibility == 0) ? activityAccessibility.innerHTML = 'Accessibility: very easy':
                (0 < data.accessibility <= 0.3) ? activityAccessibility.innerHTML = 'Accessibility: easy' :
                (0.3 < data.accessibility <= 0.6) ? activityAccessibility.innerHTML = 'Accessibility: normal' :
                (0.6 < data.accessibility <= 0.9) ? activityAccessibility.innerHTML = 'Accessibility: difficult' : activityAccessibility.innerHTML = 'Accessibility: very difficult';

            activityPeople.innerHTML = `Number of participants: ${data.participants}`;

            (data.price == 0) ? activityPrice.innerHTML = 'Price: free':
                (0 < data.price <= 0.3) ? activityPrice.innerHTML = 'Price: minimum' :
                (0.3 < data.price <= 0.6) ? activityPrice.innerHTML = 'Price: medium' :
                (0.6 < data.price <= 0.9) ? activityPrice.innerHTML = 'Price: high' : activityPrice.innerHTML = 'Price: maximum';
        })
        .catch(err => console.log(err));
});

