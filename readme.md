# is-birthday

> given birthdate checks if today is a birthday

`is-birthday` takes in a date formatted as a string and returns true if it is a birthday on that date.

## Install

```
$ npm install is-birthday
```

## Usage

```js
const isBirthday = require('is-birthday');

// If today is 2020-05-07
isBirthday("1999-05-07") // => true
isBirthday("1999-02-06") // => false

// Can evaluate differ
const options = {today: new Date("2020-05-06")}
isBirthday("1999-05-06",  options) // => true
```

## API

### isBirthday(birthdate, [options])

Returns `true` or `false` depending on whether it is a birthday given a birthdate. 

#### birthdate

Type: `object`

String to work on.

#### options

Type: `object`

##### today

Type: `object`<br>
Default: `new Date()`

Date to compare birthdate with. 

## License

MIT © [Jan Meppe](https://janmeppe.com)