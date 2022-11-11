
const login = require('./function/login');
Feature('Search star');

Scenario(`As a Fan typing in the search bar, 
I want the number of users to reduce to the ones that match what I am typing in`, ({ I }) => {
    login(I);
    pause();
});

