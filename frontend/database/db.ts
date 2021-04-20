import { createClient } from '@supabase/supabase-js';

console.log(process.env.NEXT_PUBLIC_DB_URL);

// Create a single supabase client for interacting with your database
export const db = createClient(
  process.env.NEXT_PUBLIC_DB_URL ?? '',
  process.env.NEXT_PUBLIC_DB_PUBLIC_ANON_KEY ?? '',
);
