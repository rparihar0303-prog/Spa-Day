/*
# Create enquiries table for SPA DAY booking form

1. Purpose
   - Stores booking/enquiry submissions from the SPA DAY website contact form.
   - This is a no-auth (single-tenant) website: visitors submit enquiries without signing in.
   - The business owner can later view enquiries directly in the Supabase dashboard.

2. New Tables
   - `enquiries`
     - `id` (uuid, primary key, auto-generated)
     - `full_name` (text, not null) — visitor's name
     - `phone` (text, not null) — visitor's phone number
     - `email` (text, nullable) — optional email address
     - `preferred_date` (date, nullable) — requested appointment date
     - `preferred_time` (text, nullable) — requested appointment time slot
     - `treatment_interest` (text, nullable) — which treatment the visitor is interested in
     - `message` (text, nullable) — free-text message from the visitor
     - `created_at` (timestamptz, default now()) — when the enquiry was submitted

3. Security
   - Enable RLS on `enquiries`.
   - Allow anon + authenticated INSERT only (visitors can submit enquiries but cannot read or modify them).
   - No SELECT, UPDATE, or DELETE policies for anon/authenticated — only the service role (dashboard) can read and manage enquiries.
   - This protects visitor data: submitted enquiries are not publicly readable.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text,
  preferred_date date,
  preferred_time text,
  treatment_interest text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);