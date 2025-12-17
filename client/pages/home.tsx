import { Form } from "../src/components/Forms";
import { Button } from "../src/components/Buttons";
import { List } from "../src/components/List";
import { Plus } from "lucide-react";

/**
 * Home page
 * - Lists all existing group trips
 * - Entry point to create a new group
 * -was orignally called firstpage
 */
export const Home = () => {
  return (
    <div>
      <Form />

      <div className="flex justify-center">
        <Button
          name="Create New Group"
          variant="ho"
          isActive={true}
          plusIcon={<Plus />}
          route="/create-group"
        />
      </div>

      <h2 className="font-bold text-4 pl-3 mt-4 mb-4">All groups</h2>

      {/* Hardcoded groups for now (later fetched from Supabase) */}
      <div className="flex flex-col justify-center items-center gap-3">
        <List title="Trip to Paris" subtitle="4 members" amount={1300} />
        <List title="Trip to Tokyo" subtitle="3 members" amount={2000} />
        <List title="Trip to Cartagena" subtitle="7 members" amount={4000} />
      </div>
    </div>
  );
};
