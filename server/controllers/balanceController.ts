import supabase from '../utils/database';
import { Request, Response, NextFunction } from 'express';

const balanceController = {
  async getBalanceByTrip(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
            //we should exract tripID for GET req, req.params = {tripId: '123'}
             console.log(1);
            const { tripId } = req.params;
            //trip balance table query supabase
            console.log(2);
            const { data: expenses, error: expenseError } = await supabase
              .from('Expense')
              .select('id')
              .eq('trip_id', tripId);
            //choose which table to query
            // .from('Balance')

            //select all columns from match rows
            // .select('*')

            //only return rows where trip_id matches tripID
            // .eq('Expense.trip_id', tripId);

            //error handling
            console.log(3);
            if (expenseError) return next(expenseError);
            
            
            //send back data as json response
            // console.log(4)
            //  res.status(200).json(data);
            if (!expenses || expenses.length === 0) {
             res.locals.balances = [];
             return next()
        }
        // catch (error) {
        //     console.error('Unexpected error:', error);
        //     res.status(500).json({ message: 'Internal server error' });

        const { data: balances, error: balanceError } = await supabase
          .from('Balance')
          .select('*, Expense!inner(trip_id)')
          .eq('Expense.trip_id', tripId);
          

      if (balanceError) return next(balanceError);

      res.locals.balances = balances;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};

export default balanceController;
