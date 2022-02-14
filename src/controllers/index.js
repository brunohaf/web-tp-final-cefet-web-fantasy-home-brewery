const router = require('express').Router();

//Usability EndPoints
router.use('/article', require('./article-controller'));
router.use('/articles', require('./article-controller'));
router.use('/article/id', require('./article-controller'));
router.use('/articles-op', require('./article-operations-controller'));
router.use('/articles-op/top-five', require('./article-operations-controller'));
router.use('/articles-op/articles/', require('./article-operations-controller'));
router.use('/articles-op/trending', require('./article-operations-controller'));
router.use('/articles-op/comments/', require('./article-operations-controller'));

//ArticleTheme CRUD EndPoints
router.use('/article-theme', require('./article-theme-controller'));
router.use('/article-themes', require('./article-theme-controller'));
router.use('/article-theme/id', require('./article-theme-controller'));

//ArticleComment CRUD EndPoints
router.use('/article-comment', require('./article-comment-controller'));
router.use('/article-comments', require('./article-comment-controller'));
router.use('/article-comment/id', require('./article-comment-controller'));

//User CRUD EndPoints
router.use('/user', require('./user-controller'));
router.use('/user/id', require('./user-controller'));
router.use('/user/login', require('./user-controller'));
router.use('/users', require('./user-controller'));

module.exports = router;