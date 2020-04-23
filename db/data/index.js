const ENV = process.env.NODE_ENV || "development";
const testData = require("./test-data/testData");
const devData = require("./development-data/completeData");

const data = {
  development: devData,
  test: testData,
  production: devData,
};

module.exports = data[ENV];
