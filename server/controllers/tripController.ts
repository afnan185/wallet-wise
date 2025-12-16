//import Trip from "./TripModels.ts"
import supabase from '../utils/database';
import { Request, Response, NextFunction } from 'express';

//create a new trip in the Database, right now it just has the name property from our front end
const TRIP_Table = 'Trip';
const TRIP_MEMBER_TABLE = 'TripMember';

//the properties of the new trip need to be updated with whatever we choose to include in our form or model
const tripController = {
    async createTrip(req: Request, res: Response, next: NextFunction) { //Promise<void>{}
        try{
            const {  name , createdBy, totalMembers, newTripMember } = req.body; //tripID, userID,

            const { data, error } = await supabase //: newTripMember
            // .from(TABLE_NAME) //is the table name actually trips??
            .from(TRIP_Table)
            .insert([
                {
                    name: name,//user_name: userName,// this might just be name
                    createdBy: createdBy,//user_id: userID,// this might just be created by
                    // trip_id: tripID
                    totalMembers: totalMembers,
            }])
            .select() //returns inserted records

            if(error){
                console.error('Supabase Insert Error:', error);
                return next(error)
            }
            res.locals.newTrip = newTripMember ? newTripMember[0] : null;
            return next();
        } catch(err) {
            return next(err);
        }
    },

    //get from database
    async  getMember (req: Request, res: Response, next: NextFunction) {
        try{
            const member = req.params.userName;
            //supabase: .from('table').select().eq('column', 'value')
            const {data: tripMembers, error } = await supabase
            .from(TRIP_MEMBER_TABLE)
            // .select('*, members (*)')
            .select('*')
            .eq('user_name', member);

            if(error){
                console.error('Supabase Select Error:', error);
                return next(error);
            }
            res.locals.trips = tripMembers;
            return next();
        } catch (err) {
            return next(err);
        }
    },
    //trying to find one and update... maybe a member we are updating? i don't even know
    // async  updateTrip(req: Request, res: Response, next: NextFunction) {
    //     try{
    //         const { data: tripID, userName, userID } = req.params;
    //         const { newTrip }
    //         const newName = req.body.newName;
    //         const updatedTrip = await Trip.findOneAndUpdate(
    //             { name: currentName },
    //             { name: newName },
    //             { new: true }//return updated trip name, not the old one
    //         );

    //         res.locals.updateTrip = updatedTrip; 
    //         return next();
    //     } catch (err) {
    //         return next(err)
    //     }
    // }
    async  getTrip (req: Request, res: Response, next: NextFunction){
        const search = req.params.trip;
      const { data: trip, error } = await supabase //find Trip table
            // .from(TABLE_NAME) //is the table name actually trips??
            .from(TRIP_Table)
            .select('*')
            .eq('Trip', search)
    },

};


// function updateTrip(req: any, Request: { new(input: RequestInfo | URL, init?: RequestInit): globalThis.Request; prototype: globalThis.Request; }, res: any, Response: { new(body?: BodyInit | null, init?: ResponseInit): globalThis.Response; prototype: globalThis.Response; error(): globalThis.Response; json(data: any, init?: ResponseInit): globalThis.Response; redirect(url: string | URL, status?: number): globalThis.Response; }, next: any, NextFunction: any) {
//     throw new Error('Function not implemented.');
// }

export default tripController