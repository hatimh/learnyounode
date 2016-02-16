var mymodule = require('./module6');
var path = process.argv[2];
var ext = process.argv[3];
var callbk = function(err,files){ 
  if (err) {return err}
  files.forEach(function(file){    
    console.log(file);    
  });    
}

mymodule(path,ext,callbk);

