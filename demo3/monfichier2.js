module.exports = {
  parseFile: function(i, callback){
   setTimeout(function(){
    callback(null, "-> ParseFile fini "+i, i);
   }, (Math.random() * 1000) + 1);
  },

  webServiceExterne: function(i, callback){
   setTimeout(function(){
    callback(null, "-> WebServiceExterne fini "+i, i);
   }, (Math.random() * 1000) + 1);
  },

  maDB: function(i, callback){
   setTimeout(function(){
    callback(null, "-> MaDB fini "+i);
   }, (Math.random() * 1000) + 1);
  },
};