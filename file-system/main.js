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

// reading a file
var buf = new Buffer(1024);

console.log("going to open an existing file");

fs.open("input.txt", "r+", function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("file opened successfully");
  console.log("going to read the file");

  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
    if (err) {
      console.log(err);
    }
    console.log(bytes + "bytes read");

    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});

//closing a file
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open("input.txt", "r+", function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
  console.log("Going to read the file");

  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
    if (err) {
      console.log(err);
    }

    // Print only read bytes to avoid junk.
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }

    // Close the opened file.
    fs.close(fd, function(err) {
      if (err) {
        console.log(err);
      }
      console.log("File closed successfully.");
    });
  });
});

//Delete a file

console.log("Going to delete an existing file");
fs.unlink('input.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});
