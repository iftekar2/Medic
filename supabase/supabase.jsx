import { createClient } from "@supabase/supabase-js";

const URL = "https://rguonzuuwxsnstoykshh.supabase.co";
const KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJndW9uenV1d3hzbnN0b3lrc2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4NDYwNDMsImV4cCI6MTk5NzQyMjA0M30.CBiHmC4x7k08ZmTfvsdiYVl0PZLiFawsATShl6VD3-w";
const supabase = createClient(URL, KEY);

export default supabase;
