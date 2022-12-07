const loginS = require('../function/login-star');

Feature('Leave the Call');
// no esta completa por el tema de la camara
Scenario(`As a Star who lived a call, I want to see a pop-up where 
    I can choose among three different reasons why I decided to leave the call`, ({ I }) => {
    loginS(I);
    I.wait(2);
    I.tap({ xpath: '//android.widget.Button[@content-desc="NextUp, tab, 2 of 4"]' });
    I.wait(2);
    I.tap('#com.android.permissioncontroller:id/permission_allow_foreground_only_button');
    I.wait(2);
    I.tap('#go_live_button_button');
    I.wait(2);
    I.tap('#go_live_button_popup');
    I.wait(2);
    I.tap('#gotIt');
    I.wait(2);
    //boton de star
    I.tap('#start_button');
    //I.tap({xpath:'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[7]/android.view.ViewGroup'});
    I.wait(2);
    //lest go
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.Button/android.widget.TextView' });
    I.wait(2);
    //pop up
    I.tap('#com.android.permissioncontroller:id/permission_allow_foreground_only_button');
    I.wait(2);
    //I.tap({ xpath:'/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]'});
    I.tap('#com.android.permissioncontroller:id/permission_allow_button');
    I.wait(2);
    //I.tap({ xpath:'/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]'});
    
    pause();
});