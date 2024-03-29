import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('profile test');

test('make sure there is a user', assert => {
    //arrange
    const user = {
        displayName: '',
        photoURL: './assets/default-image.jpg'
    };

    const profile = new Profile({ user });

    const expected = /*html*/ `
        <div class="profile">
            <img id="profile-image" src="./assets/default-image.jpg">
            <div>
                <span></span>
                <button>Sign Out</button>
            </div>
        </div>
    `;

    //act
    const actual = profile.renderTemplate();

    //assert
    assert.htmlEqual(actual, expected);
});

test('renders with default avatar when no photo URL', assert => {
    //arrange
    const user = {
        displayName: '',
        photoURL: null
    };

    const profile = new Profile({ user });

    const expected = /*html*/ `
        <div class="profile">
            <img id="profile-image" src="./assets/user-default-image.png">
            <div>
                <span></span>
                <button>Sign Out</button>
            </div>
        </div>
    `;

    //act
    const actual = profile.renderTemplate();

    //assert
    assert.htmlEqual(actual, expected);
});

test('renders empty div when no user', assert => {
    //arrange
    const user = null;

    const profile = new Profile({ user });

    const expected = /*html*/ `
        <div></div>
    `;

    //act
    const actual = profile.renderTemplate();

    //assert
    assert.htmlEqual(actual, expected);
});