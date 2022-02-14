const express = require('express');
const swagger_ui = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const package_info = require('../package.json');
const controllers = require('./controllers');
const body_parser = require('body-parser');
//require('dotenv').config();
try {
    // Starting API service
    const app = express();
    app.use(body_parser.json())
    app.use(function (req, res, next) {

        res.header("Access-Control-Allow-Origin", "*");

        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        next();

    });
    app.disable('etag');
    app.use('/api/v1', controllers);

    // Swagger stuff
    // Swagger Options
    const options = {
        swaggerDefinition: {
            info: {
                title: package_info.name,
                version: package_info.version,
                description: package_info.description
            },
            basePath: '/api/v1'
        },
        apis: ['./src/controllers/*.js']
    };

    // Starting swagger
    const specs = swaggerJSDoc(options);
    app.use('/', swagger_ui.serve, swagger_ui.setup(specs));

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Running on http://localhost:${port}`)
    })
} catch (e) {
    console.log(e)
}
