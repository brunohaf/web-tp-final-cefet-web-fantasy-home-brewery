const { Article } = require('../models/sequelize')

const SaveArticle = (req, res) => {
    Article.create( {  
                        id_author : req.id_author,
                        id_theme: req.id_theme,
                        title: req.title,
                        content : req.content,
                        star_score: !!req.star_score ? req.star_score : 0,
                        comment_count: !!req.comment_count ? req.comment_count : 0,
            }).then( response =>{
                return res.status( 200 ).json("Success!");
            }).catch( error => {
                return res.status( 400 ).send( "Saving has failed: \t" + error)
            });
}

const UpdateArticle = (req, res) => {
    Article.update( {   
                    id_author : req.id_author,
                    id_theme: req.id_theme,
                    content : req.content,
                    star_score: req.star_score,
                    title: req.title,
                    comment_count: req.comment_count,
                },
                {
                    where: {id_article: req.id_article}
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Update has an error: \t" + error )
                });
}

const GetArticleById = async (req,res) => {
    await Article.findByPk(req).then(article => {
        return res.status( 200 ).json(article.dataValues);
    } ).catch( error => {
        return res.status( 400 ).send( "Fetching has failed: \t" + error )
      });
}

const GetAllArticles = async (res) => {
    await Article.findAll()
    .then( articles => {
      return res.status( 200 ).json( articles )
    })
    .catch( error => {
      return res.status( 400 ).send( "Fetching has failed:\t" + error)
    });
}

const DeleteArticle = async (req,res) => {
    await Article.destroy({where: {id_article: req}}).then(article => {
        return res.status( 200 ).json("Success!");
    } ).catch( error => {
        return res.status( 400 ).send( "Delete has failed:\t" + error )
      });
}

const GetArticlesByPeriod = async (start, end, res) => {
    const dateCondition =
    {
        [Op.and]: [
            {
                'publish_date': {
                    [Op.gte]: start
                },
            },
            {
                'publish_date': {
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
        return res.status(200).json(response.map(c => c.article));
    }).catch(error => {
        return res.status(400).send("Fetching has failed: \t" + error)
    });
}

module.exports = { 
    SaveArticle,
    UpdateArticle,
    GetArticleById,
    GetAllArticles,
    DeleteArticle
};






