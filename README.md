
# `$ mdy` [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/mdy.svg)](https://www.npmjs.com/package/mdy) [![Downloads](https://img.shields.io/npm/dt/mdy.svg)](https://www.npmjs.com/package/mdy) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> View markdown files in your command line with ASNII styled images.

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g mdy
```


Then, run `mdy --help` and see what the CLI tool can do.


```
$ mdy --help
0.5
Usage: mdy <path> [options]

View markdown files in your command line with ASNII styled images.

Command arguments:
  <path>  The path to the markdown file.

Options:
  -v, --version  Displays version information.
  -h, --help     Displays this help.

Documentation can be found at https://github.com/IonicaBizau/mdy#readme.
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save mdy
```



```js
const cliMd = require("mdy");

console.log(cliMd(`${__dirname}/../README.md`));
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
