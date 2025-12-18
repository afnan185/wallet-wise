import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { List } from "../src/components/List";
import { Button } from "../src/components/Buttons";
import { ChevronLeft } from "lucide-react";


type Trip = {
  id: string;
  trip_name: string;
  total_members: number;
  created_by: string;
  created_at: string;
};

export const GroupTripDetails = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    if (!tripId) return;

    const fetchTrip = async () => {
      try {
        const res = await fetch(`http://localhost:3000/trips/${tripId}`);
        if (!res.ok) throw new Error("Failed to fetch trip");
        const data = await res.json();
        setTrip(data);
      } catch (err) {
        console.error("Failed to fetch trip", err);
      }
    };

    fetchTrip();
  }, [tripId]);

  if (!trip) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <Link to="/create-group">
        <ChevronLeft />
      </Link>

      <List
        title={trip.trip_name}
        subtitle={`${trip.total_members} member(s)`}
        amount={0}
      />

      <div className="flex gap-3 mt-4">
        <Button name="Expenses" variant="ho" isActive={true} route="/add-expense" />
        <Button name="Balances" variant="ho" isActive={true} route="/balances" />
      </div>
    </div>
  );
};
