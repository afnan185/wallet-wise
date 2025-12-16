import express, { Router } from 'express';
import tripController from '../controllers/tripController';

const TripRouter = express.Router();
//create a new trip
//post /api/trips
TripRouter.post(
  '/',
  tripController.createTrip,
  (req, res) => {
    return res.status(201).json(res.locals.newTrip);
  }
);

//get a trip by name 
//get /api/trip/:tripname

TripRouter.get(
    '/tripName',
    tripController.getTrip,
    (req, res) => { 
        return res.status(200).json(res.locals.trip);
    }
);

//update trip by name
//put /api/trip/:tripname
// router.put(
//   '/:name',
//   tripController.updateTrip,
//   (req, res) => {
//     return res.status(201).json(res.locals.updateTrip);
//   }
// ); - update trip on hold. 

export default TripRouter;