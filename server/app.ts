// import all routes
import tripRoute from './routes/tripRoute';
import expenseRoute from './routes/expensesRoute'
import balancesRoute from './routes/balancesRoute'
import express , {Request,Response, NextFunction} from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//health check to see if we're runner server
app.get("/", (req : Request, res : Response)  => {
  console.log("Hit the endpoint");
  res.status(200).send("Henlo");
});

// add route handling
app.use('/trips',tripRoute)
app.use('/expenses', expenseRoute)
app.use('/balances',balancesRoute)


app.use((req : Request, res : Response, next : NextFunction) => {
  res.status(404).json({err: "unknown route"})
})

// global error handling
app.use((err : Error, req : Request, res : Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


export default app;