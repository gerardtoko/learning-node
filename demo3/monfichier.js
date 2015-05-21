module.exports = {
  parseFile: function(callback){
   setTimeout(function(){
    callback(null, "-> ParseFile fini");
   }, (Math.random() * 1000) + 1);
  },

  webServiceExterne: function(callback){
   setTimeout(function(){
    callback(null, "-> WebServiceExterne fini");
   }, (Math.random() * 1000) + 1);
  },

  maDB: function(callback){
   setTimeout(function(){
    callback(null, "-> MaDB fini");
   }, (Math.random() * 1000) + 1);
  },
};