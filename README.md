# Data bite
ES6 simplified class for consuming data from an external service (Either JSONAPI or GraphQL)

Includes several presets for getting up an running quickly with API consumption, including [fortune](http://fortune.js.org/) and [gridsome](https://gridsome.org/)

## Installation

Make sure you have an .env file present in the directory of the root script with the following params (will use the defaults if not)

```bash
DATA_TYPE=jsonapi
DATA_HOST=domain
DATA_PORT=portNumber
DATA_PATH=path
```

NPM
```bash
    npm i --save data-bite
```

Yarn
```bash
    yarn add data-bite
```

## Usage
```js
  const Data = require('data-bite');
  let preset = 'fortune';
  let service = new Data(preset).service();

  let resource = 'resource-name';
  let opts = {};

  service.get(resource, opts).then( (res) => {
    console.log(res.data);
  }).catch( (err) => {
    // Handle error
  });
```
