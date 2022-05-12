const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
    info: {
        version: '1.0.0',
        title: '<Here the title of your project>',
        description: '<Here the description of your project>',
    },
    baseDir: __dirname,
    filesPattern: ['../routers/**/*.js', '../errors/*.js', '../models/*.js'],
    swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE,
    exposeApiDocs: true,
    apiDocsPath: '/api/docs',
};

/**
 * Swagger middleware factory
 * @param {object} app Express application
 * @returns Express JSDoc Swagger middleware that create web documentation
 */
module.exports = (app) => expressJSDocSwagger(app)(options);
