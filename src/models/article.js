module.exports = (sequelize, type) => {
    return sequelize.define('article_web', {
        id_article: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        id_author: type.INTEGER,
        id_theme: type.INTEGER,
        content: type.STRING,
        star_score: type.INTEGER,
        title: type.STRING,
        comment_count: type.INTEGER
        },
        {
            timestamps: true
        }
)};
