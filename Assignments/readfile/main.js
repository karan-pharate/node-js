var fs = require("fs");

fs.access("something.txt", fs.F_OK, err => {
  if (err) {
    console.log(`Error occured while checking permissions ${err.message}`);
    return;
  }
  fs.readFile("something.txt", (err, data) => {
    if (err) {
      console.log(`Error occured while reading file ${err.message}`);
      return;
    }
    console.log(`Contents: ${data.toString()}`);
  });
});
