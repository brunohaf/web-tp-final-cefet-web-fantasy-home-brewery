const article_theme_service = require('../services/article-theme-services');
const router = require('express').Router();

/**
 *  @swagger
 * /article-theme:
 *   post:
 *     tags:
 *     - "ArticleTheme"
 *     summary: "Add a new ArticleTheme to the database"
 *     description: "Add a new ArticleTheme to the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A ArticleTheme must have all the properties"
 *       required: false
 *       schema:
 *         type: "article_theme_web"
 *         properties:
 *           name:
 *              type: "string"
 *           description:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "ArticleTheme added Successfully"
 *       304:
 *         description: "ArticleTheme already added"
 *       401:
 *         description: "Wrong ArticleTheme properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    return article_theme_service.SaveArticleTheme(req.body,res);
});

/**
 *  @swagger
 * /article-theme:
 *   put:
 *     tags:
 *     - "ArticleTheme"
 *     summary: "Update a ArticleTheme on the database"
 *     description: "Update a ArticleTheme on the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "'id_theme' is obligatory to update a ArticleTheme"
 *       required: false
 *       schema:
 *         type: "article_theme_web"
 *         properties:
 *           id_theme:
 *              type: "integer"
 *           name:
 *              type: "string"
 *           description:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "ArticleTheme added Successfully"
 *       304:
 *         description: "ArticleTheme already added"
 *       401:
 *         description: "Wrong ArticleTheme properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.put('/', async (req, res) => {
    return article_theme_service.UpdateArticleTheme(req.body,res);
});

/**
 *  @swagger
 * /article-themes:
 *   get:
 *     tags:
 *     - "ArticleTheme"
 *     summary: "Get all ArticleThemes on the database"
 *     description: "Get all ArticleThemes on the database"
 *     responses:
 *       200:
 *         description: "The ArticleThemes were found!"
 *       401:
 *         description: "ArticleThemes were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/', async (req, res) => {
    return article_theme_service.GetAllArticleThemes(res);
});

/**
 *  @swagger
 * /article-theme/id:
 *   get:
 *     tags:
 *     - "ArticleTheme"
 *     summary: "Find a ArticleTheme on the database"
 *     description: "Find a ArticleTheme on the database"
 *     parameters:
*     - in: "query"
 *       name: "id_theme"
 *       description: "'id_theme' is obligatory to update a ArticleTheme"
 *       required: true
 *     responses:
 *       200:
 *         description: "The ArticleTheme was found!"
 *       401:
 *         description: "Wrong ArticleTheme's 'id_theme'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/id', async (req, res) => {
    return article_theme_service.GetArticleThemeById(req.query.id_theme,res);
});

/**
 *  @swagger
 * /article-theme:
 *   delete:
 *     tags:
 *     - "ArticleTheme"
 *     summary: "Erase a ArticleTheme from the database"
 *     description: "Erase a ArticleTheme on the database"
 *     parameters:
*     - in: "query"
 *       name: "id_theme"
 *       description: "'id_theme' is obligatory to erase a ArticleTheme"
 *       required: true
 *     responses:
 *       200:
 *         description: "The ArticleTheme is now gone!"
 *       401:
 *         description: "Wrong ArticleTheme's 'id_theme'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.delete('/', async (req, res) => {
    return article_theme_service.DeleteArticleTheme(req.query.id_theme,res);
});

module.exports = router;
