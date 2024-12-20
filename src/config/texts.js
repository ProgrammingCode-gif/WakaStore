// Texts to return to the user

const texts = {
    // /start
    startText: `Приветствуем в WAKA STORE | WAKA ALMATY! 🚬✨

Ваш надежный магазин электронных сигарет и аксессуаров.

Здесь вы найдёте:
✅ Широкий ассортимент одноразовых и POD-систем
✅ Качество и оригинальность продукции
✅ Быстрая доставка по Алматы
    
🛒 Нажмите на кнопку "Каталог товаров"
💨 Наслаждайтесь покупками!`,

    // "Каталог товаров" button
    catalogText: `📂 WAKA STORE Алматы

🔹 Категории товаров:
• 🛠 Одноразовые электронные сигареты
• 💧 Жидкости для POD-систем
• 🔋 Аксессуары и расходники
    
📩 Как заказать?
• Напишите нам в WhatsApp: https://wa.me/998500251948
• Или в Telegram: @selerkz
    
📢 Telegram канал: https://t.me/TABACHKAlshop
📦 Доставка по Алматы

Спасибо, что выбираете WAKA STORE! 💨`,
    productText: (title, price, description) => {
        return `
💨 ${title}
💵 Цена: ${price}
✔️ Долгий ресурс
✔️ Широкий выбор вкусов
${description ? `
${description}
` : ''}
📩 Как заказать?
    WhatsApp: https://wa.me/998500251948
    Telegram: @selerkz

📢 Telegram канал: https://t.me/TABACHKAlshop
🔸 WAKA STORE — стиль и комфорт для тебя!`
    }
}

module.exports = texts