import supabase from '../utils/database';
import { Request, Response, NextFunction } from 'express';

const balanceController = {
    // we are handeling GET
    async getBalancesByTrip(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            //we should exract tripID for GET req, req.params = {tripId: '123'}
            const { tripId } = req.params;
            //trip balance table query supabase
            const {data, error} = await supabase
            //choose which table to query
            .from('TripBalance')

            //select all columns from match rows
            .select('*')

            //only return rows where trip_id matches tripID
            .eq('tripId', tripId);

            //error handling
            if (error) return next(error);
            
            
            //send back data as json response
            res.status(200).json(data);
        }
        // res.locals.balances = data;
        catch (error) {
            console.error('Unexpected error:', error);
            res.status(500).json({ message: 'Internal server error' });


    }
  },
};

export default balanceController;
