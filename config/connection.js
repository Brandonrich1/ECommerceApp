const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;
if (process.env.JANSDB_URL) {
sequelize = new Sequelize(process.env.JANSDB_URL)
}    else {
    sequelize = new Sequelize(process.env.ED_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    })
}

module.exports = sequelize;