const login = require('../function/login')

Feature('star favorite');

Scenario(`As a Fan on a star profile, I want to be able to add this profile to my favorites`, ({ I }) => {

    login(I);
    I.wait(2);
    I.performSwipe({ x: 500, y: 1800 }, { x: 500, y: 300 });
    I.wait(1);
    I.performSwipe({ x: 500, y: 1800 }, { x: 500, y: 300 });
    I.wait(2);
    I.touchPerform([{
        action: 'tap',
        options: {
            x: 200,
            y: 1500,
        }
    }]);
    I.wait(1);
    //corazon
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView' });
    I.wait(3);
    //yes
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.Button/android.widget.TextView' });
    I.wait(2);
    //atras
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView' });
    I.wait(2);
    //favoritos
    I.tap('~Favourite, tab, 3 of 4');
    I.wait(5);

    pause();
})