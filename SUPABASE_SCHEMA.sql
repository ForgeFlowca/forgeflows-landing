-- Create waitlist table in Supabase
-- Run this SQL in your Supabase dashboard: SQL Editor > New Query

CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(50) NOT NULL, -- 'GENERATOR' or 'ENABLER'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  PRIMARY KEY (id),
  CONSTRAINT valid_role CHECK (role IN ('GENERATOR', 'ENABLER'))
);

-- Enable RLS (Row Level Security) for security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into the waitlist (public signup)
CREATE POLICY waitlist_allow_insert ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

-- Allow authenticated users to view their own email
CREATE POLICY waitlist_select_own ON public.waitlist
  FOR SELECT
  USING (auth.email() = email);

-- Create an index for faster email lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);
CREATE INDEX idx_waitlist_role ON public.waitlist(role);
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at);

-- Optional: Create a view for your own dashboard
CREATE VIEW public.waitlist_summary AS
SELECT 
  role,
  COUNT(*) as count,
  MIN(created_at) as first_signup,
  MAX(created_at) as latest_signup
FROM public.waitlist
GROUP BY role;
