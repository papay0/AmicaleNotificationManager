// app/app.js

/**
  * Require all the app dependencies
  * Create the main module of the app
**/
require('angular-material')
require('angularfire')
require('firebase')
require('angular-route')
require('angular-messages')

angular.module('amicale', ['ngMaterial', 'firebase', 'ngRoute', 'ngMessages'])

require('./config')
require('./run')
require('./services')
require('./controllers')
