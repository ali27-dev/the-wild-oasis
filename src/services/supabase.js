import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sqwnldoxpepieuawjvop.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxd25sZG94cGVwaWV1YXdqdm9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyMzA0NTcsImV4cCI6MjA4NzgwNjQ1N30.3_uXLaW6eKJBCg_IAEpQbL9XOxrSP0rTsTKieXqf7hg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
