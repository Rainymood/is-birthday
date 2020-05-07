const test = require('ava');
const isBirthday = require('./index.js');

test('main', t => {
    t.true(isBirthday("2020-05-02", { today: new Date("1900-05-02") }), "Is valid birthday");
});