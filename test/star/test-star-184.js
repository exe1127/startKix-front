const loginS = require('../function/login-star');

Feature('See my introduction video and my category tags');

Scenario(`As a Star in My Profile, I want to see my introduction video and my category tags`, ({ I }) => {
    loginS(I);
    I.wait(2);
    I.tap({ xpath: '//android.widget.Button[@content-desc="Profile, tab, 4 of 4"]' });
    //esperar para ver el video
    I.wait(15);
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView' });
    I.wait(2);
    pause();
});