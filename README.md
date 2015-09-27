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