var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];
fs.readdir(path, function(err, list){
  if (!err) {
    list.forEach(function(file){
      if(file.toString().indexOf('.'+ext)>0){
        console.log(file);
      }
    });
  };
});



