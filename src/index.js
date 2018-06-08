const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require ('./helper')
const keyboard = require('./keyboard')
const kb = require ('./keyboard-buttons')

helper.logStart()


const bot = new TelegramBot (config.TOKEN, {
    polling: true
})

bot.on('message', msg => {
    console.log('Working', msg.from.first_name, msg.text)


    chatID = helper.getChatId(msg)

    const norder = chatID

    switch (msg.text) {
        case kb.home.buy:
            bot.sendMessage(chatID, `🤝Какого рода сделку Вы планируете воспроизвести?`, {
                reply_markup: {keyboard: keyboard.orders}
            })
            break
        case kb.order.tobuyrub:
            bot.sendMessage(chatID, `📝Укажите тип продаваемого товара:`, {
                reply_markup: {keyboard: keyboard.kolvorub}
            })
            break
        case kb.order.tobuyuah:
            bot.sendMessage(chatID, `📝Укажите тип покупаемого товара:`, {
                reply_markup: {keyboard: keyboard.kolvouah}
            })
            break

        case kb.howmuchrub.tenr:
            bot.sendMessage(chatID, `🖋Укажите точное название товара:\n❗️Например: схема по заработку, сканы паспортов.`, {
                reply_markup: {keyboard: keyboard.city2}
            })
            break
        case kb.howmuchrub.twentyr:
            bot.sendMessage(chatID, `🖋Укажите точное название товара:\n❗️Например: Samsung Galaxy S8+, скиммер.`, {
                reply_markup: {keyboard: keyboard.city1}
            })
            break


        case kb.choosecity1:
            bot.sendMessage(chatID, `✈Выберите желаемый способ доставки:`, {
                reply_markup: {keyboard: keyboard.deliveryone}
            })
            break
        case kb.deliverytype1.klad:
            bot.sendMessage(chatID, `🔍Укажите ссылку на Вашего партнера (покупателя/продавеца):\n❗В формате: @nick_name`, {
                reply_markup: {keyboard: keyboard.heis}
            })
            break
        case kb.deliverytype1.post:
            bot.sendMessage(chatID, `🔍Укажите ссылку на Вашего партнера (покупатель/продавец):\n❗В формате: @nick_name`, {
                reply_markup: {keyboard: keyboard.heis}
            })
            break
        case kb.deliverytype1.kurier:
        bot.sendMessage(chatID, `🔍Укажите ссылку на Вашего партнера (покупатель/продавец):\n❗В формате: @nick_name`, {
            reply_markup: {keyboard: keyboard.heis}
        })
        break

        case kb.choosecity2:
            bot.sendMessage(chatID, `✈Выберите желаемый способ доставки:`, {
                reply_markup: {keyboard: keyboard.deliverytwo}
            })
            break
        case kb.deliverytype2.email:
            bot.sendMessage(chatID, `🔍Укажите ссылку на Вашего партнера (покупателя/продавец):\n❗В формате: @nick_name`, {
                reply_markup: {keyboard: keyboard.heis}
            })
            break
        case kb.deliverytype2.teleg:
            bot.sendMessage(chatID, `🔍Укажите ссылку на Вашего партнера (покупатель/продавец):\n❗В формате: @nick_name`, {
                reply_markup: {keyboard: keyboard.heis}
            })
            break
        case kb.deliverytype2.anymes:
            bot.sendMessage(chatID, `🔍Укажите ссылку на Вашего партнера (покупатель/продавец):\n❗В формате: @nick_name`, {
                reply_markup: {keyboard: keyboard.heis}
            })
            break

        case kb.whois:
            bot.sendMessage(chatID, `❓Вы действительно хотите начать сделку?`, {
                reply_markup: {keyboard: keyboard.alldone}
            })
            break



        case kb.donet:
            bot.sendMessage(chatID, `✅Ваш заказ №${norder} принят.\n📣Сразу после создания заявки с Вами свяжется представитель технической поддержки, чтобы уточнить данные:\n1. Стоимость товара;\n2. Адрес (в случае заказа почтой или курьерской доставкой);\n3. Сроки и условия отправки/выполнения (товара или услуги).\n________________________________\n😉Спасибо, что Вы с нами!`, {
                reply_markup: {keyboard: keyboard.home}
            })
            break
        case kb.home.faq:
            bot.sendMessage(chatID, `⚙Техническая поддержка🛠\n________________________________\n👋Доброго времени суток!\n⚠Что-то пошло не так?\n❓Есть вопросы?\n✅Есть предложения?\n________________________________\n🏃Немедленно обращайтесь сюда: @Official_Help \n⏳В ближайшее время Вам ответит наш оператор!`, {
                reply_markup: {keyboard: keyboard.home}
            })
            break
        case kb.home.vacancy:
            bot.sendMessage(chatID, `💼О нас💼\n________________________________\n👋Приветствую тебя, мой дорогой коллега!\n⚠Сомневаешься в новоиспеченном партнере? Хочешь купить товар, но боишься потерять "кровные"?\n🆘Зачем рисковать? Если потратив всего 10% от суммы всей сделки, Вы можете сохранить уйму денег?.\n________________________________\n🤑Выход есть!\n💰Оформляй любые сделки посредством нашего сервиса и спи, зная, что твои деньги отправлены по назначению, а не в карман очередному мошеннику!\n________________________________\n✅Стоимость услуг варьируется от общей суммы сделки:\n1. Сделки от 1000 рублей до 10000 рублей - 10% (но не менее 250 руб);\n2. Сделки от 10000 рублей до 50000 рублей - 9,5%;\n3. Сделки от 50000 рублей до 200000 рублей - 8%.\n4. Сделки от 200000 рублей обсуждаются индивидуально.\n________________________________\n⚙За более детальной информацией обращайтесь в техническую поддержку.`, {
                reply_markup: {keyboard: keyboard.home}
            })
            break
        case kb.home.delivery:
            bot.sendMessage(chatID, `🔒Гарантии🔑\n________________________________\n👋Здравствуй, манимейкер!\n😉Ты ведь зашел сюда не просто так?\n⁉Тебя так и мучает вопрос: как сохранить свои бабки, не подарив их очередному школьнику?\n🏃Очередного "кидалы" можно легко и быстро избежать, просто предложив услуги нашего автогарант сервиса.\n________________________________\n✅Наши преимущества❗\n1. Анонимность (все данные уничтожаются после успешного проведения сделки).\n2. Заявки обрабатываются моментально.\n 3. Стоимость услуг. \n 4. Опыт и авторитетность.`, {
                reply_markup: {keyboard: keyboard.home}
            })
            break
        case kb.back:
            bot.sendMessage(chatID, `❓Что Вас интересует?`, {
                reply_markup: {keyboard: keyboard.home}
            })
            break

    }

})



bot.onText (/\/start/, msg => {
    const text = `👋Приветствую, ${msg.from.first_name}!\n🗝Добро пожаловать в "хранителя" Ваших денег и времени (не менее драгоценного).\n________________________________\n📈Мы расширяемся и улучшаемся ежедневно.\n👨‍👨‍👦‍👦Мы рады всем честным пользователям и активным покупателям!\n________________________________\n🔐Администрация бота не несёт ответственность за сделки совершенные Вами вне бота, и настоятельно рекомендует пользоваться услугами нашего автогарант-сервиса.`
        bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            keyboard: keyboard.home
        }

    })
})


