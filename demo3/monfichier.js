module.exports = {
  calculAsync: function(num, callback){
   return callback(null, num * 10);
  },
  calcul: function(num){
   return num * 10;
  }
}
