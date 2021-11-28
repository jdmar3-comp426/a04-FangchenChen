var db = require('./database.js');
var md5 = require("md5");

const all= db.prepare('SELECT * FROM userinfo').all();
console.log("\nAll records in my database:", db.name);
console.log(all)