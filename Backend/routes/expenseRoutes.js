import express from "express";
const router = express.Router();
import {
getAllExpenses ,getExpense ,
createExpense, updateExpense, deleteExpense
} from "../controllers/expenseControllers";


router.route("/").post(createExpense).get(getAllExpenses);
router.route("/:slug").put(updateExpense).delete(deleteExpense).get(getExpense);

export default router;
