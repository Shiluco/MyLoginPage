import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

//エラーハンドリング
if (!supabaseUrl) {
  throw new Error("Supabase URL is not defined.");
}
if (!supabaseKey) {
  throw new Error("Supabase Key is not defined.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
