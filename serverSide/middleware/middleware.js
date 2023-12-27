
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const securityMiddleware = (app) => {
  app.use(helmet());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
};

module.exports = securityMiddleware;
