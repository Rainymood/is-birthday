'use strict';

const isBirthday = (dateObject, options = { today: new Date() }) => {
    const today = options.today;
    const date = new Date(dateObject);
    if (date.getMonth() == today.getMonth() && date.getDate() == today.getDate()) {
        return true
    } else {
        return false
    }
}

module.exports = isBirthday;
