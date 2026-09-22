const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'data', 'db.json');
function read(){ return JSON.parse(fs.readFileSync(file,'utf8')); }
function write(db){ fs.writeFileSync(file, JSON.stringify(db,null,2)); }
module.exports={read,write};
