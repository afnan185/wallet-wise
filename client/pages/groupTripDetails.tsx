import { useLocation, Link } from "react-router-dom";
import { List } from "../src/components/List";
import { Button } from "../src/components/Buttons";
import { ChevronLeft } from "lucide-react";

/**
 * GroupTripDetails Page
 * - Shows group info
 * - Lists expenses for the trip
 */
export const GroupTripDetails = () => {
  const location = useLocation();
  const tripName = location.state?.tripName ?? "Unnamed Trip";

  return (
    <div className="p-4">
      <Link to="/create-group">
        <ChevronLeft />
      </Link>

      <List title={tripName} subtitle="4 members" amount={0} />

      <div className="flex gap-3 mt-4">
        <Button name="Expenses" variant="ho" isActive={true} route="/add-expense" />
       <Button name="Balances" variant="ho" isActive={true} route="/balances" />
      </div>

      {/* Hardcoded expenses for now */}
      <div className="mt-4 flex flex-col gap-2">
        <List title="Groceries" subtitle="Paid by you" amount={250} />
        <List title="Dinner" subtitle="Paid by Erika" amount={80} />
      </div>
    </div>
  );
};
