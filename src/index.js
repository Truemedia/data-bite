require('dotenv').config();
const Kitsu = require('kitsu/node');
const {GraphQLClient} = require('graphql-request');
const presets = require('./presets/presets');

module.exports = class Data
{
  constructor(target = 'DATA', preset = 'gatsby', type = null, host = null, port = null, path = null, system = null)
  {
    this.preset = preset;
    let {defaults} = this;

    this.host = host || process.env[`${target}_HOST`] || defaults.host;
    this.path = path || process.env[`${target}_PATH`] || defaults.path;
    this.port = port || process.env[`${target}_PORT`] || defaults.port;
    this.system = system || process.env[`${target}_SYS`] || defaults.system;
    this.type = type || process.env[`${target}_TYPE`] || defaults.type;
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
