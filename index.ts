BigInt.prototype["toJSON"] = function () {
  return this.toString();
};

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from "morgan";

import warehouseRoutes from './routes/warehouseRoutes.js';
import sellerRoutes from './routes/sellerRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import carrierRoutes from './routes/carrierRoutes.js';
import bankRoutes from './routes/bankRoutes.js';

const app = express();
const port = 8181;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/api/warehouse', warehouseRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/carrier', carrierRoutes);
app.use('/api/bank', bankRoutes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
