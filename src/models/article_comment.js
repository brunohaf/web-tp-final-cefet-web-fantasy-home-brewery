module.exports = (sequelize, type) => {
    return sequelize.define('article_comment_web', {
        id_comment: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        id_user: type.INTEGER,
        id_article: type.INTEGER,
        content: type.STRING
        },
        {
            timestamps: false
        }
)};
