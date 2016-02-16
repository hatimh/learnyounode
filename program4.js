var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];
var lines = fs.readdir(path, function(err, list){
  if (!err) {
    list.forEach(function(file){
      if(file.includes('.'+ext)){console.log(file + '\n')};
    });
  };
});

