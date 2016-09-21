process.env.NODE_ENV = 'test';
var app = require('../../app');
var http = require('http');
var Browser = require('zombie');
var models = require('../../models');

// Browser.localhost('makersbnb.com', 3000);

describe('sign up page', function() {

  // var browser = new Browser();

  before(function() {
     server = http.createServer(app).listen(3000);
     browser = new Browser({ site: 'localhost:3000'});
  });

  before(function(done) {
    browser.visit('/users/new', done);
  });

  before(function(done) {
    browser.fill('name', 'laura', done);
    browser.fill('email', 'ewan@ewan.ewan', done);
    browser.fill('password', 'ewan', done);
    browser.fill('password_confirmation', 'ewan', done);
    browser.pressButton('Sign up!', done);
  });

  it('should show a sign up form', function() {
    browser.assert.success();
  });

  it('form stores user in database', function() {
    browser.assert.url({pathname: '/'});
  });

  after(function(done) {
    server.close(done);
  });

});
