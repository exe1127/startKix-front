const loginS = require('../function/login-star');

Feature('Arrow button to return');

Scenario(`Stars can go back to the previous screen (My Profile) by tapping on the back button.`, ({ I }) => {
    loginS(I);
    I.wait(2);
    I.tap({ xpath: '//android.widget.Button[@content-desc="Profile, tab, 4 of 4"]' });
    I.wait(2);
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView' });
    I.wait(5);
    pause();
});