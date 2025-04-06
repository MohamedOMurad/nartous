const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;

const { AppDataSource } = require('./database/data-source');
AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });
  })
  .catch((err: Error) => {
    console.error('Error during Data Source initialization', err);
  });
