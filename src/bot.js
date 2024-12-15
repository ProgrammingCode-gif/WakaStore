require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const handleBot = require('./handlers/handlers');
const connectToDb = require('./database/db');
const setCommands = require('./comands');

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true})

// Connecting to database and launch bot handlers
const start = async () => {
    await connectToDb(process.env.DB_URL)
    setCommands(bot)
    handleBot(bot)
}

start()