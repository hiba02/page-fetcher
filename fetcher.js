const request = require('request');
const fs = require('fs');
let args = process.argv.slice(2);
const url = args[0];
const fileName = args[1];
request(url, (error, response, body) => {
  if (error) {
    console.log("Sorry. We can not find the URL");
    return;
  } else if (response.statusCode !== 200) {
    const message = `response.statusCode: ${response.statusCode}`;
    console.log(message);
    return message;
  } else {
    fs.writeFile(fileName, body, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
});


