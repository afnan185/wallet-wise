import { Link, useNavigate } from "react-router-dom";
import { Button } from "../src/components/Buttons";
import { ChevronLeft, Plus } from "lucide-react";
import { useState } from "react";

//do we need to input state here since we're taking in data? - esm
//import {useState} from "react"
//context API is a thing: The Context API provides a way to pass data deeply through the component tree without explicitly passing props down at every level (prop drilling).
// You create a Context and a Provider component that holds the state.
// Consumer components within the Provider's scope can access the context value using useContext

export const CreateNewGroup = () => {
  const navigate = useNavigate();
  const [tripName, setTripName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateTrip = async () => {
    // simple guard: don't create an empty trip name
    if (tripName.trim() === "") return;

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/trips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trip_name: tripName,
          total_members: 1,
          created_by: "Robyn",
        }),
      });

      if (!res.ok) throw new Error("Failed to create trip");

      const newTrip = await res.json();

      // go to the real trip page
      navigate(`/trip/${newTrip.id}`);
    } catch (err) {
      console.error(err);
      alert("Trip creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center w-full gap-2">
        <Link to="/">
          <ChevronLeft />
        </Link>
        <h1 className="font-semibold">Create a New Group Trip</h1>
      </div>

      <div className="mt-4">
        <label>Trip Name</label>
        <input
          className="border p-2 w-full rounded mt-2"
          type="text"
          placeholder="What's the adventure?"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <Button
          className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
          name={loading ? "Creating..." : "Create New Group"}
          variant="ho"
          isActive={!loading}
          onClick={handleCreateTrip}
          plusIcon={<Plus />}
          route="" 
        />
      </div>
    </div>
  );
};