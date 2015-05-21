var async = require('async');
var monfichier = require('./monfichier');

var arr = [1, 2, 3, 4, 5];

async.each(arr, function(i, callback){

   monfichier.parseFile(function(error, result){
    console.log(result, " ", i);
    callback();
   });

}, function(err){
    console.log("Fini le parsing");

    async.each(arr, function(i, callback){
      monfichier.webServiceExterne(function(error, result){
       console.log(result, " ", i);
       callback();
      });
    }, function(err){
        console.log("WebServiceExterne fini");

        async.each(arr, function(i, callback){
          monfichier.maDB(function(error, result){
           console.log(result, " ", i);
           callback();
          });
        }, function(err){
            console.log("maDB fini");
        });

    });
});