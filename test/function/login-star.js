
const { user, password } = { user: 'va1@nonerds.com', password: 'Testtest3' };
const { loginInit } = require('./init-function');
const loginS = (I) => {
    loginInit(I);
    I.fillField('#email', user);
    I.wait(2);
    I.fillField('#password', password);
    I.wait(2);
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.Button/android.widget.TextView' })
    I.wait(5);
}

module.exports = loginS