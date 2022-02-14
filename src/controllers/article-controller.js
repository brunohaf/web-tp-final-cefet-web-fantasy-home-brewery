const article_service = require('../services/article-services');
const article_op_service = require('../services/article-operation-services');
const router = require('express').Router();

/**
 *  @swagger
 * /article:
 *   post:
 *     tags:
 *     - "Article"
 *     summary: "Add a new Article to the database"
 *     description: "Add a new Article to the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A Article must have all the properties"
 *       required: false
 *       schema:
 *         type: "article_web"
 *         properties:
 *           id_author:
 *              type: "integer"
 *           id_theme:
 *              type: "integer"
 *           title:
 *              type: "string"
 *           content:
 *              type: "string"
 *           star_score:
 *              type: "integer"
 *           comment_count:
 *              type: "integer"
 *     responses:
 *       200:
 *         description: "Article added Successfully"
 *       304:
 *         description: "Article already added"
 *       401:
 *         description: "Wrong Article properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    return article_service.SaveArticle(req.body,res);
});

/**
 *  @swagger
 * /article:
 *   put:
 *     tags:
 *     - "Article"
 *     summary: "Update a Article on the database"
 *     description: "Update a Article on the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "'id_article' is obligatory to update a Article"
 *       required: false
 *       schema:
*         type: "article_web"
 *         properties:
 *           id_article:
 *              type: "integer"
 *           id_author:
 *              type: "integer"
 *           id_theme:
 *              type: "integer"
 *           title:
 *              type: "string"
 *           content:
 *              type: "string"
 *           star_score:
 *              type: "integer"
 *           comment_count:
 *              type: "integer"
 *     responses:
 *       200:
 *         description: "Article updated Successfully"
 *       401:
 *         description: "Wrong Article's 'id_article'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.put('/', async (req, res) => {
    return article_service.UpdateArticle(req.body,res);
});

/**
 *  @swagger
 * /articles:
 *   get:
 *     tags:
 *     - "Article"
 *     summary: "Get all Articles on the database"
 *     description: "Get all Articles on the database"
 *     responses:
 *       200:
 *         description: "The Articles were found!"
 *       401:
 *         description: "Articles were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/', async (req, res) => {
    return article_service.GetAllArticles(res);
});

/**
 *  @swagger
 * /article/id:
 *   get:
 *     tags:
 *     - "Article"
 *     summary: "Find a Article on the database"
 *     description: "Find a Article on the database"
 *     parameters:
*     - in: "query"
 *       name: "id_article"
 *       description: "'id_article' is obligatory to update a Article"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Article was found!"
 *       401:
 *         description: "Wrong Article's 'id_article'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/id', async (req, res) => {
    return article_service.GetArticleById(req.query.id_article,res);
});

/**
 *  @swagger
 * /article:
 *   delete:
 *     tags:
 *     - "Article"
 *     summary: "Erase a Article from the database"
 *     description: "Erase a Article on the database"
 *     parameters:
*     - in: "query"
 *       name: "id_article"
 *       description: "'id_article' is obligatory to erase a Article"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Article is now gone!"
 *       401:
 *         description: "Wrong Article's 'id_article'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.delete('/', async (req, res) => {
    return article_service.DeleteArticle(req.query.id_article,res);
});

module.exports = router;
