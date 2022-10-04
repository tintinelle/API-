'use strict'

const activityName = document.getElementById('activityName');
const activityType = document.getElementById('activityType');
const activityAccessibility = document.getElementById('activityAccessibility');
const activityPeople = document.getElementById('activityPeople');
const activityPrice = document.getElementById('activityPrice');

fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.activity);
        console.log(data.type);
        console.log(data.price);
        console.log(data.participants);
        console.log(data.accessibility);

        activityName.innerHTML = data.activity;
        activityType.innerHTML += data.type;

        (data.accessibility == 0) ? activityAccessibility.innerHTML += 'very easy':
            (0 < data.accessibility <= 0.3) ? activityAccessibility.innerHTML += 'easy' :
            (0.3 < data.accessibility <= 0.6) ? activityAccessibility.innerHTML += 'normal' :
            (0.6 < data.accessibility <= 0.9) ? activityAccessibility.innerHTML += 'difficult' : activityAccessibility.innerHTML += 'very difficult';

        activityPeople.innerHTML += data.participants;

        (data.price == 0) ? activityPrice.innerHTML += 'free':
            (0 < data.price <= 0.3) ? activityPrice.innerHTML += 'minimum' :
            (0.3 < data.price <= 0.6) ? activityPrice.innerHTML += 'medium' :
            (0.6 < data.price <= 0.9) ? activityPrice.innerHTML += 'high' : activityPrice.innerHTML += 'maximum';
    })
    .catch(err => console.log(err));

// fetch('http://www.boredapi.com/documentation')
// .then(response => response.json())
// .then(data => {
//     console.log(data); 
//     // alert(data[0].question);
// })
// .catch(err => console.log(err));

// if (data.price == 0) {
//     activityPrice.innerHTML += `free`;
// }