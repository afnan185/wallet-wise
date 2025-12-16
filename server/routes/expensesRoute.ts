import express, { Router } from "express";
import expenseController from "../controllers/expenseController";

const ExpensesRouter = express.Router();

// create new expense
//post /api/expenses
ExpensesRouter.post("/", expenseController.createExpense, (req, res) => {
  return res.status(201).json(res.locals.createdExpense);
});

//get expenses for a trip
ExpensesRouter.get("/:tripId", expenseController.getExpense, (req, res) => {
  return res.status(200).json(res.locals.expense);
});

export default ExpensesRouter;
