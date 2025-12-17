import { Link, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";


export const Balance = () => {
 
  const location = useLocation();
  const tripName = location.state?.tripName ?? "Unnamed Trip";

 
  const balances = [
    { name: "You", amount: 120 },
    { name: "Erika", amount: -45 },
    { name: "Arsy", amount: -75 },
  ];

  return (
    <div className="p-4">
      {/* Header / Back Navigation */}
      <div className="flex items-center gap-2 mb-4">
        <Link to="/trip-name">
          <ChevronLeft />
        </Link>
        <h1 className="font-semibold text-lg">
          Balances – {tripName}
        </h1>
      </div>

      {/* Balance List */}
      <div className="flex flex-col gap-3">
        {balances.map((balance) => (
          <div
            key={balance.name}
            className="flex justify-between items-center border rounded-lg p-3"
          >
            <p className="font-medium">{balance.name}</p>

            {/* Conditional styling based on owe vs owed */}
            <p
              className={
                balance.amount >= 0
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
              {balance.amount >= 0
                ? `Gets back $${balance.amount}`
                : `Owes $${Math.abs(balance.amount)}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};