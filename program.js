
// var fs = require('fs');
//
// var contents = fs.readFileSync(process.argv[2])
//
// var lines = contents.toString().split('\n').length - 1;
//
// console.log(lines);


// fs.readFile(process.argv[2], function (err, contents) {
//  var lines = contents.toString().split('\n').length - 1;
//    console.log(lines);
// });

// console.log(process.argv)

// var result = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }
// console.log(result);

//////

// var fs = require('fs');
// var path = require('path');
// var mymodule = require('./mymodule')
//
// fs.readdir(process.argv[2], function (err, list){
//   list.forEach(function (file){
//     if (path.extname(file) === '.' + process.argv[3]){
//           console.log(file);
//     }
//   })
// });
