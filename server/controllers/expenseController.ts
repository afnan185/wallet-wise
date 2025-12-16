import supabase from "../utils/database";
import { Request, Response, NextFunction } from 'express';

const expenseController = {

    async  createExpense(req : Request, res : Response, next : NextFunction){
       
        try{

            const { tripId, total, paidBy, createdAt, name } = req.body;
    
            const {data, error} = await supabase
            .from('expense')
            .insert({
                tripId,
                total: total,
                paidBy : paidBy,
                createdAt : createdAt,
                name: name
            })
            .select()
        } catch(err) {

        }
        
        
    }
}
export default expenseController;