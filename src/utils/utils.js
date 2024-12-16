const path = require('path');
const texts = require('../config/texts');

// function to devide products in pairs and returns only the titles of the objects, in order to make keyboard smaller
const groupArrInGroups = (products) => {
    return products.reduce((acc, product, index) => {
        if (index % 2 === 0) {
            // Start a new group
            acc.push([{ text: product.title }]);
        } else {
            // Add to the last group
            acc[acc.length - 1].push({ text: product.title });
        }
        return acc;
    }, []);
};

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function to set interval in wich messanges will be sent
async function sendMessagesWithDelay(products, chatId, bot) {
    for (let i = 0; i < products.length; i++) {

        const photoPath = path.resolve(__dirname, `../../public/images/${products[i].image}`)
        
        await bot.sendPhoto(chatId, photoPath, {caption: texts.productText(products[i].title, products[i].price, products[i].description)});
        await delay(200);
    }
}

module.exports.groupArrInGroups = groupArrInGroups
module.exports.sendMessagesWithDelay = sendMessagesWithDelay