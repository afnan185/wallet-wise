//import Trip from "./TripModels.ts"
import supabase from '../utils/database';
import { Request, Response, NextFunction } from 'express';

//create a new trip in the Database, right now it just has the name property from our front end
// const TRIP_Table = 'Trip';
// const TRIP_MEMBER_TABLE = 'Member';



//the properties of the new trip need to be updated with whatever we choose to include in our form or model
const tripController = {
    async createTrip(req: Request, res: Response, next: NextFunction) { //Promise<void>{}
        try{
            const { trip_name , total_members, created_by } = req.body; //tripID, userID,

            const { data, error } = await supabase //: newTripMember
            // .from(TABLE_NAME) //is the table name actually trips??
            .from('Trip')
            .insert([
                {
                    //auto gen a uuid
                    trip_name,//user_name: userName,// this might just be name
                    total_members,
                    created_by,//user_id: userID,// this might just be created by
                    // trip_id: tripID
            }])
            .select() //returns inserted records
            .single();

            if(error) return next(error);
            
            res.locals.newTrip = data;
            return next();

        } catch(err) {
            return next(err);
        }
    },

    //get from database
    async getTrip(req: Request, res: Response, next: NextFunction) {
    try {
      const { tripId } = req.params;

      const { data, error } = await supabase
        .from('Trip')
        .select('*')
        .eq('id', tripId)
        .single();

      if (error) return next(error);

      res.locals.trip = data;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};

// function updateTrip(req: any, Request: { new(input: RequestInfo | URL, init?: RequestInit): globalThis.Request; prototype: globalThis.Request; }, res: any, Response: { new(body?: BodyInit | null, init?: ResponseInit): globalThis.Response; prototype: globalThis.Response; error(): globalThis.Response; json(data: any, init?: ResponseInit): globalThis.Response; redirect(url: string | URL, status?: number): globalThis.Response; }, next: any, NextFunction: any) {
//     throw new Error('Function not implemented.');
// }

export default tripController