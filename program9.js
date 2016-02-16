var http = require('http');
var bl = require('bl');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var data1 = [];
var data2 = [];
var data3 = [];
var counter = 0;

http.get(url1,function(response){
  response.on('data',function(data){
    data1.push(data);
  }).on('end',function(){
    data1 = Buffer.concat(data1).toString();    
    eventEmitter.emit('success');
  });
});

http.get(url2,function(response){
  response.on('data',function(data){
    data2.push(data);
  }).on('end',function(){
    data2 = Buffer.concat(data2).toString();    
    eventEmitter.emit('success');
  });
});

http.get(url3,function(response){
  response.on('data',function(data){
    data3.push(data);
  }).on('end',function(){
    data3 = Buffer.concat(data3).toString();    
    eventEmitter.emit('success');
  });
});

eventEmitter.on('success', function(){
  counter++;
  if (counter==3){
    console.log(data1);
    console.log(data2);
    console.log(data3);
  }
})


