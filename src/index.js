require('dotenv').config();
const Kitsu = require('kitsu/node');
const {GraphQLClient} = require('graphql-request');
const presets = require('./presets/presets');

module.exports = class Data
{
  constructor(preset = 'gridsome', type = null, host = null, port = null, path = null)
  {
    this.preset = preset;
    let {defaults} = this;
    this.type = type || process.env['DATA_TYPE'] || defaults.type;
    this.host = host || process.env['DATA_HOST'] || defaults.host;
    this.port = port || process.env['DATA_PORT'] || defaults.port;
    this.path = path || process.env['DATA_PATH'] || defaults.path;
  }

  get defaults()
  {
    return presets[this.preset];
  }

  get baseURL()
  {
    return `http://${this.host}:${this.port}`;
  }

  get endpoint()
  {
    let endpoint = this.baseURL;
    if (this.path != null) {
      endpoint += `/${this.path}`;
    }
    return endpoint;
  }

  service()
  {
    let {endpoint} = this;
    let service;

    switch (this.type) {
      case 'jsonapi':
        service = new Kitsu({baseURL: endpoint});
      break;
      case 'graphql':
        service = new GraphQLClient(endpoint);
      break;
    }

    return service;
  }
}
