require("express-async-errors");
const winston = require("winston");

module.exports = function()
{
    // winston.add(
    //     new winston.transports.Console({
    //         handleExceptions: true,
    //         format: winston.format.combine(
    //             winston.format.colorize(),
    //             winston.format.simple()
    //             )
    //     }));
    // winston.exitOnError = false;

    process.on("unhandledRejection", (ex) => {
        console.log("uncaughtRejection occured");
        throw ex;
    });
}