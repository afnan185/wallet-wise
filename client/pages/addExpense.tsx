import { useState } from "react";
import { Button } from "../src/components/Buttons";

/**
 * AddExpense Page
  - Collects expense name, amount, and who paid
  - Later this will POST to Express → Supabase
 */
export const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    console.log({
      title,
      amount
    });
  };

  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-4">Add Expense</h1>

      <label>Expense name</label>
      <input
        className="border p-2 w-full mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Amount</label>
      <input
        className="border p-2 w-full mb-3"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Button
        name="Save Expense"
        variant="ho"
        isActive={true}
        route=""
        onClick={handleSubmit}
      />
    </div>
  );
};
