const loginS = require('../function/login-star');

Feature('Go Live');

Scenario(`As a Star in the Waiting Room, I want to be able to go live.`, ({ I }) => {
    loginS(I);
    I.wait(5);
    I.tap({ xpath: '//android.widget.Button[@content-desc="NextUp, tab, 2 of 4"]' });
    I.wait(2);
    I.tap('#com.android.permissioncontroller:id/permission_allow_foreground_only_button');
    I.wait(2);
    I.tap('#go_live_button_button');
    I.wait(2);

    for (var i = 0; i++; i < 3) {
        I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView' });
        I.wait(2);
    }

    for (var i = 0; i++; i < 3) {
        I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.ImageView' });
        I.wait(2);
    }

    I.tap('#go_live_button_popup');
    I.wait(2);
    I.tap('#gotIt');
    I.wait(2);
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[7]/android.view.ViewGroup/android.widget.TextView' });
    I.wait(2);
    I.tap('#go_offline_button_modal');
    I.wait(3);

    pause();

});