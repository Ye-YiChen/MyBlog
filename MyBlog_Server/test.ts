const bcryptjs = require('bcryptjs');

const salt = bcryptjs.genSaltSync(10);
const hash = bcryptjs.hashSync('123456', salt);
console.log(hash);
console.log(salt);