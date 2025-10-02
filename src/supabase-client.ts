import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://szukeiaxirpedkxkfgiu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6dWtlaWF4aXJwZWRreGtmZ2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMDMyMTQsImV4cCI6MjA3NDg3OTIxNH0.a6ISlaJSTezZaNZgytxVvNB9-OZqJ6JxC1AWhqWFXBs"
);
