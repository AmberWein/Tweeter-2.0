import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iwazotpblmwxchgvenlx.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPERBASE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);