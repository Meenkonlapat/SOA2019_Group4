require("express-async-errors");
const winston = require("winston");

module.exports = function()
{
    winston.exceptions.handle(
        new winston.transports.Console({
            colorize: true,
            exitOnError: false,
            format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.simple()
                )
        }));

    process.on("unhandledRejection", (ex) => {
        console.log("uncaughtRejection occured");
        throw ex;
    });
}