import dotenv  from 'dotenv'
import { createClient } from '@supabase/supabase-js'

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const connectionString = process.env.PG_URI

// const sql = postgres(connectionString);

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// import meta would be utilized for front end

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


const supabase = createClient(supabaseUrl, supabaseAnonKey);


export default supabase;