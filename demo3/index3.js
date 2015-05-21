var monfichier = require('./monfichier2');


for (var i = 1; i <= 10; i++) {
  monfichier.parseFile(i, function(error, result, i){
    console.log(result);
    monfichier.webServiceExterne(i, function(error, result, i){
      console.log(result);
      monfichier.maDB(i, function(error, result){
        console.log(result);
      });
    });
  });

}
