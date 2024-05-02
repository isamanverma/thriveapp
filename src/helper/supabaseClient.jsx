import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wbvjdjnfacyjrgpfzyar.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indidmpkam5mYWN5anJncGZ6eWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MDExNDUsImV4cCI6MjAzMDA3NzE0NX0.NsIyyifue-fvCYSrExqQTZaky_3epaNCMXgCH-bu0y4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
