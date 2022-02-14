module.exports = (sequelize, type) => {
    return sequelize.define('user_web', {
        id_user: {
          type: type.STRING,
          primaryKey: true
        },
        name: type.STRING,
        password:type.STRING
    },
        {
            timestamps: false
        })
}