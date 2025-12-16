import dotenv from "dotenv";
import express , {Request,Response, NextFunction} from 'express';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


//health check to see if we're runner server
app.get("/", (req, res) => {
  console.log("Hit the endpoint");
  res.status(200).send("Henlo");
});

app.use((req, res, next) => {
  res.status(404).json({err: "unknown route"})
})

// global error handling
app.use((err, req : Request, res : Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))