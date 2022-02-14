const { Article } = require('../models/sequelize')
const article_service = require('./article-services');

const GetTrendingArticles = async (req, res) => {
    await Article.findAll().then( articles => {
        return res.status( 200 ).json(FilterTrendingArticles(articles, req))
      })
      .catch( error => {
        return res.status( 400 ).send( "Fetching has failed:\t" + error)
      });
}

const FilterTrendingArticles = (articles, trendCount) => {
    articles.sort((a,b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })    
      return articles.sort((a,b) => {
        return a.comment_count - b.comment_count;
      }).reverse().slice(0,trendCount);
}

const GetTopFiveArticles = async (res) => {
    await Article.findAll()
    .then( articles => {
      return res.status( 200 ).json( FilterTopFiveArticles(articles) )
    })
    .catch( error => {
      return res.status( 400 ).send( "Fetching has failed:\t" + error)
    });
}

const FilterTopFiveArticles = (articles) => {
    let topFiveArticles = articles.sort((a,b) => b.star_score-a.star_score).slice(0,5);
    return topFiveArticles       
}

const GetArticlesByPeriod = async (start, end, res) => {
    const dateCondition =
    {
        [Op.and]: [
            {
                'createdAt': {
                    [Op.gte]: start
                },
            },
            {
                'createdAt': {
                    [Op.lte]: end
                }
            }
        ]
    }

    Article.belongsTo(ArticleTheme, { foreignKey: 'id_theme' });
    ArticleTheme.hasMany(Article, { foreignKey: 'id_theme' }, { targetKey: 'id_theme' });

     await Article.findAll({
        include: [{
            model: Article,
            required: true,
        }],
        where: [dateCondition]
    }).then(response => {
        return res.status(200).json(response.map(c => c.article_web));
    }).catch(error => {
        return res.status(400).send("Fetching has failed: \t" + error)
    });
}

module.exports = { 
    GetArticlesByPeriod,
    GetTopFiveArticles,
    GetTrendingArticles
};