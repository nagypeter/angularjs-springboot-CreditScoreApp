'use strict';

var App = angular.module('myApp',[]);

console.log('HAHO app.js');

$(document).ready(function(){
    $("#datepicker").datepicker({altFormat: '@'});
});

