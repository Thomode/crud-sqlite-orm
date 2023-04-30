import app from './app.js'
import { sequelize } from './database/database.js'
//import './models/Project.js'
//import './models/Task.js'

const PORT = 4000

const main = async () => {
    try {
        await sequelize.sync({force: false})
        
        app.listen(PORT)
        console.log('Server is listening on port', PORT)
    } catch (error) {
        console.log('Unable to connect to the database', error)
    }
}

main()