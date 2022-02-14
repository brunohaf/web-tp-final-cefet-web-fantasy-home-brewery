module.exports = (sequelize, type) => {
    return sequelize.define('article_theme_web', {
        id_theme: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        description: type.STRING
        },
        {
            timestamps: false
        }
)};
