// npm i --save @supabase/supabase-js

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://szvycgnfsngawjoilcun.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6dnljZ25mc25nYXdqb2lsY3VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMzQ1NTAsImV4cCI6MjA3MjkxMDU1MH0.ompLVZQxn6GZCtSw2D3pbkVo-E-KJVyH6UbBdPF6D6A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
