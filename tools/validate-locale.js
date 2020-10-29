const fs = require("fs");
// const path = require("path");

console.dir(fs.readdirSync(process.env.HOME));

/*const contents = fs.readdirSync(path.join(process.env.HOME, "files.json"));

console.dir(contents);*/

/*

const filechanges = JSON.parse(fs.readFileSync("../files.json"));

filechanges.forEach((name) => {
  if (name.indexOf("nl.json") < -1 && name.indexOf("en.json") < -1) {
    throw new Error(
      "Only the files nl.json and/or en.json can be changed by a Lokalize PR."
    );
  }
});*/

throw new Error("I really want to fail!");
