# Data bite
ES6 simplified class for consuming data from an external service

## Installation

Make sure you have an .env file present in the directory of the root script with the following params

```bash
DATA_HOST=domain
DATA_PORT=portNumber
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
  let service = new Data().service();

  let resource = 'resource-name';
  let opts = {};

  service.get(resource, opts).then( (res) => {
    console.log(res.data);
  }).catch( (err) => {
    // Handle error
  });
```
