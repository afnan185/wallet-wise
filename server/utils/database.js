import dotenv  from 'dotenv'
import { createClient } from '@supabase/supabase-js'

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const connectionString = process.env.PG_URI

// const sql = postgres(connectionString);



export default supabase;