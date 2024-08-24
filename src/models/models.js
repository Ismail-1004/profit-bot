import sequelize from '../config/db.js'
import { DataTypes } from 'sequelize'

const Group = sequelize.define('group', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    course: { type: DataTypes.STRING, allowNull: false }
})

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    paid: { type: DataTypes.INTEGER, allowNull: false },
    mustPay: { type: DataTypes.INTEGER, allowNull: false }
})

Group.hasMany(User)
User.belongsTo(Group)

export default { User, Group }
