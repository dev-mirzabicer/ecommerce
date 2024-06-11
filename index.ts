import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import warehouseRoutes from './routes/warehouseRoutes';
import sellerRoutes from './routes/sellerRoutes';
import customerRoutes from './routes/customerRoutes';
import carrierRoutes from './routes/carrierRoutes';
import bankRoutes from './routes/bankRoutes';

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api/warehouse', warehouseRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/carrier', carrierRoutes);
app.use('/api/bank', bankRoutes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
