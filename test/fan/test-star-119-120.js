const login = require('../function/login')

Feature('Waiting room');

Scenario(`As a Fan in the Waiting Room for the first time, I want to see a pop-up informing me of what’s this for`, ({ I }) => {

    login(I);
    I.wait(2);
    I.tap('~LiveQueue, tab, 2 of 4');
    I.wait(2);
    I.tap('#gotIt');
    I.wait(2);
    pause();
})