//import Trip from "./TripModels.ts"
import { Request, Response, NextFunction } from 'express';

//create a new trip in the Database, right now it just has the name property from our front end
//the properties of the new trip need to be updated with whatever we choose to include in our form or model
const tripController = {
    async createTrip(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const data = req.body;
            const newTrip = await Trip.create({
                adventureName: data.tripName
            });
            res.locals.newTrip = newTrip;
            return next();
        } catch(err) {
            return next(err);
        }
    },

    //get from database
    async getTrip(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const tripName = req.params.tripName;
            res.locals.trips = await Trip.find({ tripName: tripName });
            return next();
        } catch (err) {
            return next(err);
        }
    },
    async updateTrip(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const currentName = req.params.name;
            const newName = req.body.newName;
            const updatedTrip = await Trip.findOneAndUpdate(
                { name: currentName },
                { name: newName },
                { new: true }//return updated trip name, not the old one
            );
        }
    }
}