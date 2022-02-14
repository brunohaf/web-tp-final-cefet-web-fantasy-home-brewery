const article_op_service = require('../services/article-operation-services');
const article_theme_service = require('../services/article-theme-services');
const article_comments_service = require('../services/article-comment-services');
const router = require('express').Router();

/**
 *  @swagger
 * /articles-op/trending:
 *   get:
 *     tags:
 *     - "ArticleOperations"
 *     summary: "Get Trending Articles on the database"
 *     description: "Get Trending Articles on the database"
 *     parameters:
*     - in: "query"
 *       name: "trend_count"
 *       description: "'trend_count' is obligatory to get the trending topics"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Articles were found!"
 *       401:
 *         description: "Articles were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
 router.get('/trending', async (req, res) => {
    return article_op_service.GetTrendingArticles(req.query.trend_count, res);
});

/**
 *  @swagger
 * /articles-op/top-five:
 *   get:
 *     tags:
 *     - "ArticleOperations"
 *     summary: "Get Top 5 Articles on the database"
 *     description: "Get Top 5 Articles on the database"
 *     responses:
 *       200:
 *         description: "The Articles were found!"
 *       401:
 *         description: "Articles were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
 router.get('/top-five', async (req, res) => {
    return article_op_service.GetTopFiveArticles(res);
});
/**
 *  @swagger
 * /articles-op/articles/:
 *   get:
 *     tags:
 *     - "ArticleOperations"
 *     summary: "Get All Articles on the database from the given Theme"
 *     description: "Get All Articles on the database from the given Theme"
 *     parameters:
*     - in: "query"
 *       name: "id_theme"
 *       description: "'id_theme' is obligatory to get the comments of an article"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Articles were found!"
 *       401:
 *         description: "Articles were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
 router.get('/articles/', async (req, res) => {
    return article_theme_service.GetArticlesByTheme(req.query.id_theme, res);
});

/**
 *  @swagger
 * /articles-op/comments/:
 *   get:
 *     tags:
 *     - "ArticleOperations"
 *     summary: "Get All Comments on the database from the given Article"
 *     description: "Get All Comments on the database from the given Article"
 *     parameters:
*     - in: "query"
 *       name: "id_article"
 *       description: "'id_article' is obligatory to get the comments of an article"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Comments were found!"
 *       401:
 *         description: "Comments were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
 router.get('/comments/', async (req, res) => {
    return article_comments_service.GetAllCommentsByArticleId(req.query.id_article, res);
});


module.exports = router;
