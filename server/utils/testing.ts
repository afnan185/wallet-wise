import supabase from "./database";

const test = await supabase
  .from('TripMember')
  .insert({ id: 13, Username: 'Mordor', tripId: 22, UserId: 7298 });

