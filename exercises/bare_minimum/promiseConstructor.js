/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  var promise = new Promise(function(resolve, reject) {

    fs.readFile(filePath, function(error, data) {
      if (error) { return reject(error); } else {
        var firstLine = data.toString().split('\n')[0];
        return resolve(firstLine);
      }
    });
    // resolve(somevalue);
    // reject(somevalue);
  });
  return promise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  var promise = new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      if (error) {
        return reject(error);
      }
      console.log('response.statusCode', response.statusCode);
      return resolve(response.statusCode);
    });
  });

  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
