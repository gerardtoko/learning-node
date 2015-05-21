var monfichier = require('./monfichier');


monfichier.parseFile(function(error, result){
  console.log(result);
  monfichier.webServiceExterne(function(error, result){
    console.log(result);
    monfichier.maDB(function(error, result){
      console.log(result);
    });
  });
});

