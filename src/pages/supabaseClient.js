import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://ebuceiyfgahcbctefmrv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidWNlaXlmZ2FoY2JjdGVmbXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NTIxODQsImV4cCI6MjAwNzEyODE4NH0.JOzIf-BBnveAT1FmEdBpSK7hffuSvjPQjs3xpajzmmc');

export default supabase;