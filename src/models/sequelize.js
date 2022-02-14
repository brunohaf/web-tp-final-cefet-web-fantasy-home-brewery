const Sequelize = require('sequelize')
const UserModel = require('./user')
const ArticleModel = require('./article')
const ArticleThemeModel = require('./article_theme')
const ArticleCommentModel = require('./article_comment')

const sequelize = new Sequelize('essgdb', 'essgdb', 'Hl88m0gOX-?n', {
  host: 'den1.mysql3.gear.host',
  dialect: 'mysql',
  pool: {
    max: 15,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const User = UserModel(sequelize, Sequelize);
const Article = ArticleModel(sequelize, Sequelize);
const ArticleTheme = ArticleThemeModel(sequelize, Sequelize);
const ArticleComment = ArticleCommentModel(sequelize, Sequelize);

module.exports = {
  User,
  Article,
  ArticleTheme,
  ArticleComment
}