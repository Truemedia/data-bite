const Data = require('./src/index');

let preset;

/**
  * GraphQL (using gridsome)
  * This setup uses gridsome with the faker source plugin installed
  */
preset = 'gridsome';
let service = new Data(preset).service();
let query = `query Posts {
  allFaker {
    edges {
      node {
        author
        title
      }
    }
  }
}`;
service.request(query).then(data => console.log(data));
