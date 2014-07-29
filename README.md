# Tease

<img src="http://media.giphy.com/media/gMyoO4SfMhmzm/giphy.gif" alt="Pipeline" align="right" width=280/>

**Version:** *1.0.0*<br/>
**Master build:** [![Master branch build status][travis-master]][travis]<br/>

```bash
$ npm install tease
```

This library provides basic time zone information with UTC and DST offsets and
canonical links from the [IANA Time Zone Database][wiki]. It can be installed
in whichever way you prefer, but I recommend [NPM][npm].

## Documentation
```js
var tease = require('tease');

tease.all();
// {
//     "Europe/London": {"utc":"+00:00", "dst":"+01:00", "link":null},
//     "US/Eastern": {"utc":"-05:00", "dst":"-04:00", "link":"America/New_York"},
//     "UTC": {"utc":"+00:00", "dst":"+00:00", "link":null},
//     ...
// }

tease.ids();
// [
//     "Europe/London",
//     "US/Eastern",
//     "UTC",
//     ...
// ]

tease.get('US/Eastern');
// {"utc":"-05:00", "dst":"-04:00", "link":"America/New_York"}

tease.get('US/Eastern', /*canonical*/ true) === tease.get('America/New_York');
// true

tease.utc('US/Eastern');
// "-05:00"

tease.dst('US/Eastern');
// "-04:00"

tease.has('US/Eastern');
// true

tease.has('Planet/Mars');
// false
```

## Contributing
I accept contributions to the source via Pull Request, but passing unit tests
must be included before it will be considered for merge.
```bash
$ curl -O https://raw.githubusercontent.com/adlawson/vagrantfiles/master/nodejs/Vagrantfile
$ vagrant up
$ vagrant ssh
$ cd /srv

$ npm test
```

### License
The content of this library is released under the **MIT License** by
**Andrew Lawson**.<br/> You can find a copy of this license in
[`LICENSE`][license] or at http://www.opensource.org/licenses/mit.

<!-- Links -->
[travis]: https://travis-ci.org/adlawson/tease.js
[travis-master]: https://travis-ci.org/adlawson/tease.js.png?branch=master
[npm]: https://npmjs.org/package/tease
[license]: /LICENSE
[wiki]: http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
