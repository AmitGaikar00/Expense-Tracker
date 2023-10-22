import { Schema, model } from "mongoose";

const ExpenseSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true},
  },
  { timestamps: true }
);


const Expense = model("Expense", ExpenseSchema);
export default Expense;
