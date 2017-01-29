var wd = require("wd");

require('colors');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();
var expect = chai.expect();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

if (process.env.npm_package_config_sauce) {
  process.env.SAUCE_USERNAME = process.env.npm_package_config_sauce_username;
  process.env.SAUCE_ACCESS_KEY = process.env.npm_package_config_sauce_access_key;
}

exports.should = should;
exports.expect = expect;
