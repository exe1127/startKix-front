const login = require('../../function/login');

Feature('Update my profile');

Scenario(`As a Fan on Profile, I must be able to update my profile.`, ({ I }) => {
    login(I);
    I.wait(2);
    I.tap('~Profile, tab, 4 of 4');
    I.wait(2);
    pause();
});
