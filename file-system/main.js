var fs = require("fs");
console.log("Going to open file");
fs.open("input.txt", "r+", function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("file opened successfully");
});
// Check file type
console.log("Going to get file info!");
fs.stat("input.txt", function(err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("Got file info successfully!");

  console.log("isFile ? " + stats.isFile());
  console.log("isDirectory ? " + stats.isDirectory());
});
//writing a file
console.log("Going to write into existing file");
fs.writeFile("input.txt", "Simply Easy Learning!", function(err) {
  if (err) {
    return console.error(err);
  }

  console.log("Data written successfully!");
  console.log("Let's read newly written data");

  fs.readFile("input.txt", function(err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});
