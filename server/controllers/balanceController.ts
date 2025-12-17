import supabase from '../utils/database';
import { Request, Response, NextFunction } from 'express';

const balanceController = {
    // we are handeling GET
    async getBalanceByTrip(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.log('controller hit!')
        try {
            //we should exract tripID for GET req, req.params = {tripId: '123'}
            console.log(1)
             const { tripId } = req.params;
            //trip balance table query supabase
            console.log(2)
             const {data, error} = await supabase
            //choose which table to query
            .from('Balance')

            //select all columns from match rows
            .select('*')

            //only return rows where trip_id matches tripID
            .eq('Expense.trip_id', tripId);

            //error handling
            console.log(3)
             if (error) return next(error);
            
            
            //send back data as json response
            // console.log(4)
            //  res.status(200).json(data);
             res.locals.balances = data;
             return next()
        }
        catch (error) {
            console.error('Unexpected error:', error);
            res.status(500).json({ message: 'Internal server error' });


    }
  },
};

export default balanceController;
