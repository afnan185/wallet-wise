// import dotenv c from 'dotenv'
import { createClient } from '@supabase/supabase-js'

// dotenv.config();

const VITE_SUPABASE_URL= "https://odjlwvlhgdynmjdwqngn.supabase.co"
const VITE_SUPABASE_ANON_KEY = "sb_publishable_jZKhLnmmaf4Oa81M8kuNug_oFRrBKCw"

// const supabaseUrl = process.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
// const supabase = createClient(supabaseUrl, supabaseServiceKey);
// const connectionString = process.env.PG_URI

// const sql = postgres(connectionString);

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// import meta would be utilized for front end

// console.log(process.env)
// console.log({VITE_SUPABASE_URL})

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY );


export default supabase;