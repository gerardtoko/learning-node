var async = require('async');
var monfichier = require('./monfichier');

var arr = [1, 2, 3];

async.mapSeries(arr, function(i, callback){

   monfichier.parseFile(function(error, result){
    console.log(result, " ", i);
    callback(null, i*2);
   });

}, function(err, transformed){
    console.log("Fini le parsing", transformed);

    async.mapSeries(arr, function(i, callback){
      monfichier.webServiceExterne(function(error, result){
       console.log(result, " ", i);
       callback(null, i*10);
      });
    }, function(err, transformed){
        console.log("WebServiceExterne fini", transformed);

        async.mapSeries(arr, function(i, callback){
          monfichier.maDB(function(error, result){
           console.log(result, " ", i);
           callback(null, i*200);
          });
        }, function(err, transformed){
          console.log("maDB fini", transformed);
        });

    });
});