import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ejuglxhfmqreldecbuww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdWdseGhmbXFyZWxkZWNidXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NDc2MjMsImV4cCI6MjAxNTEyMzYyM30.3bmhNJ7poDQWPk2BBmayJc02qzZBNgzwfYz_2bHz2ec";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
