import express, { Router } from 'express';
import balanceController from '../controllers/balanceController';

const BalanceRouter = express.Router();

//get balances for a trip
//GET /api/balances/:tripId

BalanceRouter.get('/:tripId', balanceController.getBalanceByTrip, (req, res) => {
  return res.status(200).json(res.locals.balances);
});
//settle balances for a trip
//POST /api/balances/settle/:tripId

//  BalanceRouter .post('/settle', balanceController.settleBalance, (req, res) => {
//   return res.status(201).json(res.locals.settle);
// });

export default BalanceRouter;
