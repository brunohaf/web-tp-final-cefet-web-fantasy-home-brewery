const { ArticleComment, Article } = require('../models/sequelize')
const article_service = require('./article-services');

const SaveArticleComment = async (req, res) => {
     ArticleComment.create(  {  
                            id_user: req.id_user,
                            id_article: req.id_article,
                            content: req.content,
                }).then( response => {
                    UpdateArticleCommentCount(req.id_article, 1);
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Saving has failed: \t" + error)
                });
}

const UpdateArticleCommentCount = async (articleId, value) => {
    const res = {};
    res.status = () => res;
    res.json = () => res;
    await Article.findByPk(articleId).then(article => {
        article.comment_count = article.comment_count+value
        article_service.UpdateArticle(article, res)
    }).catch(error => {return error});
}


const UpdateArticleComment = (req, res) => {
    ArticleComment.update( {  
                            id_user: req.id_user,
                            id_article: req.id_article,
                            content: req.content,
                },
                {
                    where: {id_comment: req.id_comment}
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Update has an error: \t" + error )
                });;
}

const GetArticleCommentById = async (req,res) => {
    await ArticleComment.findByPk(req).then(articleComment => {
        return res.status( 200 ).json(articleComment.dataValues);
    } ).catch( error => {
        return res.status( 400 ).send( "Fetching has failed: \t" + error )
      });
}

const GetAllCommentsByCondition = async (whereCondition, res) => {
    await ArticleComment.findAll(whereCondition)
    .then( articleComments => {
      return res.status( 200 ).json( articleComments )
    })
    .catch( error => {
      return res.status( 400 ).send( "Fetching has failed:\t" + error)
    });
}

const GetAllCommentsByArticleId = async (req, res) => {
    return await GetAllCommentsByCondition
    (
        {
            where: {id_article: req}
        },
        res
    )
}

const GetAllComments = async (res) => {
    await ArticleComment.findAll()
    .then( articleComments => {
      return res.status( 200 ).json( articleComments )
    })
    .catch( error => {
      return res.status( 400 ).send( "Fetching has failed:\t" + error)
    });
}

const GetAllCommentsByUserId = async (req, res) => {
    return await GetAllCommentsByCondition
    (
        {
            where: {id_user: req.id_user}
        },
        res
    )
}

const DeleteArticleComment = async (req,res) => {
    let articleId = ""
    await ArticleComment.findByPk(req).then(articleComment => {
        articleId = articleComment.id_article;
    }).catch( error => {
        return  error
      });

    await ArticleComment.destroy({where: {id_comment: req}}).then(articleComment => {
        UpdateArticleCommentCount(articleId, -1)
        return res.status( 200 ).json("Success!");
    }).catch( error => {
        return res.status( 400 ).send( "Delete has failed:\t" + error )
    });
}


module.exports = { 
    SaveArticleComment,
    UpdateArticleComment,
    GetArticleCommentById,
    GetAllCommentsByArticleId,
    GetAllCommentsByUserId,
    GetAllComments,
    DeleteArticleComment
};