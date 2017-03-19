# JavaScript App Starter Kit

[![Build Status](https://travis-ci.org/PiotrBerebecki/javascript-app-starter-kit.svg?branch=master)](https://travis-ci.org/PiotrBerebecki/javascript-app-starter-kit)
[![codecov.io](https://codecov.io/github/PiotrBerebecki/javascript-app-starter-kit/coverage.svg?branch=master)](https://codecov.io/github/PiotrBerebecki/javascript-app-starter-kit?branch=master)


## Sharing work in progress

```sh
# share you on a random localtunnel url, e.g. https://kjsjsqbg.localtunnel.me/
$ npm run share

# add specific domain e.g. https://cool-app.localtunnel.me/
$ npm run share --subdomain cool-app
```

## Continuous Integration

Currently handled on Travis CI.


## Code Coverage

Code coverage is setup via npm script and integrated into `.travis.yml` file


## HTTP Calls

- Ajax calls with Fetch. Add polyfill to index.html if required:
```html
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=fetch"></script>
```

- Serve mock API database (e.g. on http://localhost:3001) with [JSON server](https://github.com/typicode/json-server) (server working on a fake local static JSON database with the ability to add / delete data in the local JSON file).
App with mock Api is at: http://localhost:3000/?useMockApi=true
App with real Api is at: http://localhost:3000/

- [JSON Schema Faker](http://json-schema-faker.js.org/)
- Random data every time the app is started with faker.js, change.js, randexp.js


## Production build

- Dist server to debug production build
- Minification
- Sourcemaps
- Dynamic html
- Cache busting by hashing filenames
- Code splitting
