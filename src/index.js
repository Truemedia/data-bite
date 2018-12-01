require('dotenv').config();
const Kitsu = require('kitsu/node');

module.exports = class Data
{
  constructor(host = null, port = null)
  {
    let {defaults} = this;
    this.host = host || process.env['DATA_HOST'] || defaults.host;
    this.port = port || process.env['DATA_PORT'] || defaults.port;
  }

  get defaults()
  {
    return {
      host: 'localhost',
      port: 1337
    };
  }

  get baseURL()
  {
    return `http://${this.host}:${this.port}`;
  }

  service()
  {
    let {baseURL} = this;
    return new Kitsu({baseURL});
  }
}
