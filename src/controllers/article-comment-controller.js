const article_comments_service = require('../services/article-comment-services');
const router = require('express').Router();

/**
 *  @swagger
 * /article-comment:
 *   post:
 *     tags:
 *     - "ArticleComment"
 *     summary: "Add a new ArticleComment to the database"
 *     description: "Add a new ArticleComment to the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A ArticleComment must have all the properties"
 *       required: false
 *       schema:
 *         type: "article_comment_web"
 *         properties:
 *           id_user:
 *              type: "string"
 *           id_article:
 *              type: "integer"
 *           content:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "ArticleComment added Successfully"
 *       304:
 *         description: "ArticleComment already added"
 *       401:
 *         description: "Wrong ArticleComment properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    return article_comments_service.SaveArticleComment(req.body,res);
});

/**
 *  @swagger
 * /article-comment:
 *   put:
 *     tags:
 *     - "ArticleComment"
 *     summary: "Update a ArticleComment on the database"
 *     description: "Update a ArticleComment on the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "'id_comment' is obligatory to update a ArticleComment"
 *       required: false
 *       schema:
 *         type: "article_comment_web"
 *         properties:
 *           id_comment:
 *              type: "integer"
 *           id_user:
 *              type: "string"
 *           id_article:
 *              type: "integer"
 *           content:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "ArticleComment updated Successfully"
 *       401:
 *         description: "Wrong ArticleComment's 'id_comment'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.put('/', async (req, res) => {
    return article_comments_service.UpdateArticleComment(req.body,res);
});

/**
 *  @swagger
 * /article-comments:
 *   get:
 *     tags:
 *     - "ArticleComment"
 *     summary: "Get all ArticleComments on the database"
 *     description: "Get all ArticleComments on the database"
 *     responses:
 *       200:
 *         description: "The ArticleComments were found!"
 *       401:
 *         description: "ArticleComments were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/', async (req, res) => {
    return  article_comments_service.GetAllComments(res);
});

/**
 *  @swagger
 * /article-comment/id:
 *   get:
 *     tags:
 *     - "ArticleComment"
 *     summary: "Find a ArticleComment on the database"
 *     description: "Find a ArticleComment on the database"
 *     parameters:
*     - in: "query"
 *       name: "id_comment"
 *       description: "'id_comment' is obligatory to update a ArticleComment"
 *       required: true
 *     responses:
 *       200:
 *         description: "The ArticleComment was found!"
 *       401:
 *         description: "Wrong ArticleComment's 'id_comment'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/id', async (req, res) => {
    return article_comments_service.GetArticleCommentById(req.query.id_comment,res);
});

/**
 *  @swagger
 * /article-comment:
 *   delete:
 *     tags:
 *     - "ArticleComment"
 *     summary: "Erase a ArticleComment from the database"
 *     description: "Erase a ArticleComment on the database"
 *     parameters:
*     - in: "query"
 *       name: "id_comment"
 *       description: "'id_comment' is obligatory to erase a ArticleComment"
 *       required: true
 *     responses:
 *       200:
 *         description: "The ArticleComment is now gone!"
 *       401:
 *         description: "Wrong ArticleComment's 'id_comment'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.delete('/', async (req, res) => {
    return article_comments_service.DeleteArticleComment(req.query.id_comment,res);
});

module.exports = router;
