import Expense from "../models/Expense";

const createExpense = async (req, res, next) => {
  try {
    const { name, category, amount } = req.body;

    const expense = new Expense({
      name: name,
      category: category,
      amount: amount,
    });

    const createdExpense = await expense.save();
    return res.json(createdExpense);
  } catch (error) {
    next(error);
  }
};

const updateExpense = async (req, res, next) => {
  try {
    const { name, category, amount } = req.body;
    const update = {
      name: name,
      category: category,
      amount: amount,
    };
    const expense = await Expense.findOneAndUpdate(
      { slug: req.params.slug },
      update,
      { new: true }
    );

    if (!expense) {
      const error = new Error("Expense not found");
      next(error);
      return;
    }

    // expense.name = name || expense.name;
    // expense.category = category || expense.category;
    // expense.amount = amount || expense.amount;

    const updatedExpense = await expense.save();
    return res.json(updatedExpense);
  } catch (error) {
    next(error);
  }
};

const deleteExpense = async (req, res, next) => {
  const id = req.params.slug;
  try {
    // const expense = await Expense.findOneAndDelete({ slug: req.params.slug });
    const expense = await Expense.findByIdAndDelete(id);

    if (!expense) {
      const error = new Error("Expense not found");
      return next(error);
    }
    return res.json({
      message: "Expense is successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};

const getExpense = async (req, res, next) => {
  const id = req.params.slug;
  try {
    // const expense = await Expense.findOne({ slug: req.params.slug });
    const expense = await Expense.findById(id);

    if (!expense) {
      const error = new Error("Expense not found");
      return next(error);
    }
    return res.json(expense);
  } catch (error) {
    next(error);
  }
};

const getAllExpenses = async (req, res, next) => {
  try {
    const allExpense = await Expense.find({});

    return res.json(allExpense);
  } catch (error) {
    next(error);
  }
};

export {
  getAllExpenses,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
};
