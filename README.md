[![travis build](https://img.shields.io/travis/accraze/text2token.svg)](https://travis-ci.org/accraze/text2token)
[![Codecov](https://img.shields.io/codecov/c/github/accraze/text2token.svg)](https://codecov.io/github/accraze/text2token)
[![version](https://img.shields.io/npm/v/text2token.svg)](https://www.npmjs.com/package/text2token)
[![license](https://img.shields.io/npm/l/text2token.svg)](https://www.npmjs.com/package/text2token)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# text2token
is a nodejs module that breaks down a corpus of text into lines and tokens.

## Useage
```
$ node
> 
> var lib = require('infinitejest-names');

> var converted = lib.text2token('./src/bigtext.txt')

> converted.tokens
  [ '©',
  '2015',
  'GitHub,',
  'Inc.',
  'Terms',
  'Privacy',
  'Security
  ..........

> converted.lines

[ '© 2015 GitHub, Inc. Terms Privacy Security Contact Help',
  'Status API Training Shop Blog About Pricing',
.......................
```

MIT License 2015 © Andy Craze