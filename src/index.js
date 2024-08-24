import 'dotenv/config'
import './services/telegramService.js'
import './models/models.js'
import sequelize from './config/db.js'

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
    } catch (e) {
        throw e
    }
}

start()
