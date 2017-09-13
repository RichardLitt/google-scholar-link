# google-scholar-link

[![Greenkeeper badge](https://badges.greenkeeper.io/RichardLitt/google-scholar-link.svg)](https://greenkeeper.io/)
Link out to Google Scholar

### Usage

```js
var scholar = require('google-scholar-link')

scholar('This is a paper title', {language: 'en', since: 2015})
// https://scholar.google.com/scholar?hl=en&as_ylo=2105&q="This+is+a+paper+title"
```

### Options

* `language`: _String_. Defaults to `en`.
* `since`: _Num_. Years to search. Example: `2015`.
* `citations`: _Bool_. Include citations or not. Defaults to `true`.
* `patents`: _Bool_. Include patents or not. Defaults to `true`.
* `author`: _String_. Include an author with the query
* `exact`: _Bool_. Search for the exact query or not. Defaults to `true`.

### Contribute

This module uses [standard](https://github.com/feross/standard). Contributions welcome. 