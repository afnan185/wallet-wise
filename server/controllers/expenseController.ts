import supabase from "../utils/database";
import { Request, Response, NextFunction } from 'express';

const expenseController = {

    async createExpense(req : Request, res : Response, next : NextFunction){
       // when creating an expense we may need to think about how the expense was divided (i.e who owes what)
        try{
            const { trip_id, total, paid_by} = req.body;

            //ensure that all fields are filled out

            if(!trip_id || !total || !paid_by){
                return res.status(400).json(`Missing Field. All fields are required!`)
            }
    
            const {data, error} = await supabase
            .from("Expense")
            .insert ([{trip_id, total, paid_by}])
            .select()
            .single();

            if(error) return next(error);

            res.locals.createdExpense = data;

            return next();

        } catch(err) {
            return next(err)
        }
        
        
    },

     async getExpense(req : Request, res : Response, next : NextFunction){
       // when creating an expense we may need to think about how the expense was divided (i.e who owes what)
        try{
            const { trip_id } = req.params;

            //ensure that all fields are filled out

    
            const {data, error} = await supabase
            .from("Expense")
            .select("*")
            .eq("trip_id", trip_id);

            if(error) return next(error);

            res.locals.getExpense = data;

            return next();

        } catch(err) {
            return next(err)
        }
        
        
    }
}
export default expenseController;