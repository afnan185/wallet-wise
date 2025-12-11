import express, { Request, Response} from "express";
import 'dotenv/config';
import pool from "./server/models/database.ts"; 
import cors from "cors"

const app = express();
const PORT = 3000; // 5432 this is the port in .env

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test server is working by creating an endpoint "test" that asks the db to return the number one ... should work even without any specific tables yet
app.get("/test", async (req: Request, res: Response) => {
    try{
        const result = await pool.query('SELECT 1');
        res.send(`Yay! Database is connected `)
    } catch{
        console.error(err);
        res.status(500).send(`Womp, womp! Database is not connected`)
    }
})

//create posts: newGroup button and Add expense button


//Create gets: for adventure page, adventure detail (expenses and balances sections)


//400 error handler


//global error handler 500



app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...!`); });
export default app;
