const { connection, SQL, MONGO } = require("../config/database");

let userModel;

switch (connection) {

    case SQL:
        userModel = require("./sql/userModel"); break;
    case MONGO:
        userModel = require("./mongo/userModel"); break;
    default:
        throw `Must be specified DB_CONNECTION and only can be ${SQL} or ${MONGO}`;
}

module.exports = {
    userModel,
};