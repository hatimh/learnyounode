module.exports = function work(path, ext, fn){
  var fs = require('fs');
  var files = []
  fs.readdir(path, function(err,list){
    if (err) {
      return fn(err,null);
    }
    else {
      list.forEach(function(file){
        if(file.toString().indexOf('.'+ext)>0){
          files.push(file);
        }
      });
    };
    fn(null,files);  
  });     
}

