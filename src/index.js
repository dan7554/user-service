import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import initRoutes from './routes/index.js';
import serverConfig from './config/server';
import swaggerDocument from './swagger.json';

const app = express();

if ( process.argv.includes('--prod') ) {
    app.serverConfig = serverConfig['production'];
} else {
    app.serverConfig = serverConfig['default'];
}

var options = { explorer : true };

app.use(bodyParser.json()); 
app.use('/swag', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

initRoutes(app);

app.listen(3111);

console.log('app listening ...', app.serverConfig);