
const login = require('../function/login');
let send = '! @ # $ % ^ & * ( ) _ + = ? . - / { } [ ] | a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';

send = send.split(' ');


Feature('Search star');

Scenario(`As a Fan typing in the search bar, 
I want the number of users to reduce to the ones that match what I am typing in`, ({ I }) => {
    login(I);
    I.tap('#search');
    I.wait(1);
    send.map(function (val, index) {
        I.wait(1);
        I.pressKey(val);
    });

    I.wait(2);
    pause();
});

