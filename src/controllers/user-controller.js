const user_service = require('../services/user-services');
const router = require('express').Router();

/**
 *  @swagger
 *   /user:
 *   post:
 *     tags:
 *     - "User"
 *     summary: "Add a new User to the database"
 *     description: "Add a new User to the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A User must have all the properties"
 *       required: false
 *       schema:
 *         type: "user_web"
 *         properties:
 *           login_email:
 *              type: "string"
 *           password:
 *              type: "string"
 *           name:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "User added Successfully"
 *       304:
 *         description: "User already added"
 *       401:
 *         description: "Wrong User properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    return user_service.SaveUser(req.body,res);
});

/**
 *  @swagger
 *   /user:
 *   put:
 *     tags:
 *     - "User"
 *     summary: "Update a User on the database"
 *     description: "Update a User on the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A User must have all the properties"
 *       required: false
 *       schema:
 *         type: "user_web"
 *         properties:
 *           id_user:
 *              type: "string"
 *           password:
 *              type: "string"
 *           name:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "User updated Successfully"
 *       401:
 *         description: "Wrong User's 'idUserro'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.put('/', async (req, res) => {
    return user_service.UpdateUser(req.body,res);
});

/**
 *  @swagger
 * /users:
 *   get:
 *     tags:
 *     - "User"
 *     summary: "Get all Users on the database"
 *     description: "Get all Users on the database"
 *     responses:
 *       200:
 *         description: "The Users were found!"
 *       401:
 *         description: "Users were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/', async (req, res) => {
    return user_service.GetAllUsers(res);
});

/**
 *  @swagger
 * /user/id:
 *   get:
 *     tags:
 *     - "User"
 *     summary: "Find a User on the database"
 *     description: "Find a User on the database"
 *     parameters:
*     - in: "query"
 *       name: "id_user"
 *       description: "'id' is obligatory to update a User"
 *       required: true
 *     responses:
 *       200:
 *         description: "The User was found!"
 *       401:
 *         description: "Wrong User's 'id'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/id', async (req, res) => {
    return user_service.GetUserById(req.query.id_user,res);
});

/**
 *  @swagger
 *   /user:
 *   delete:
 *     tags:
 *     - "User"
 *     summary: "Erase a User from the database"
 *     description: "Erase a User on the database"
 *     parameters:
*     - in: "query"
 *       name: "id_user"
 *       description: "'id' is obligatory to erase a User"
 *       required: true
 *     responses:
 *       200:
 *         description: "The User is now gone!"
 *       401:
 *         description: "Wrong User's 'id'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.delete('/', async (req, res) => {
    return user_service.DeleteUser(req.query.id_user,res);
});

/**
 *  @swagger
 * /user/login:
 *   post:
 *     tags:
 *     - "User"
 *     summary: "Authenticate a user"
 *     description: "Authenticate a user"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A User must have all the properties"
 *       required: false
 *       schema:
 *         type: "user_web"
 *         properties:
 *           login:
 *              type: "string"
 *           password:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "User added Successfully"
 *       304:
 *         description: "User already added"
 *       401:
 *         description: "Wrong User properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/login', async (req, res) => {
    return user_service.Login(req.body,res);
});

module.exports = router;
