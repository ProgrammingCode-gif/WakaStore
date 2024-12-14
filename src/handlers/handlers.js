const catalogHandler = require("./catalog");
const { startHandler } = require("./start");

//collects all handlers and launch them
function handleBot(bot) {
    startHandler(bot)
    catalogHandler(bot)
}

module.exports = handleBot