-- ==============================================================================
-- DOT Jeans Co. - Wholesale Enquiries Table Setup & Schema Migration
-- Run this in Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ==============================================================================

-- 1. Create table if not exists with all required customer and product fields
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_id UUID,
    user_id UUID,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    shop_name TEXT,
    business_name TEXT,
    company_name TEXT,
    name TEXT,
    contact_person TEXT,
    mobile TEXT,
    whatsapp TEXT,
    phone TEXT,
    email TEXT,
    product_id TEXT,
    product_name TEXT,
    brand TEXT,
    colour TEXT,
    selected_colour TEXT,
    size TEXT,
    selected_size TEXT,
    quantity TEXT,
    fit TEXT,
    message TEXT,
    notes TEXT,
    status TEXT DEFAULT 'pending'
);

-- 2. Alter existing table to add any missing columns safely
DO $$
BEGIN
    -- Customer ID columns
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'customer_id') THEN
        ALTER TABLE public.enquiries ADD COLUMN customer_id UUID;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'user_id') THEN
        ALTER TABLE public.enquiries ADD COLUMN user_id UUID;
    END IF;

    -- Customer columns
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'shop_name') THEN
        ALTER TABLE public.enquiries ADD COLUMN shop_name TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'business_name') THEN
        ALTER TABLE public.enquiries ADD COLUMN business_name TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'company_name') THEN
        ALTER TABLE public.enquiries ADD COLUMN company_name TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'name') THEN
        ALTER TABLE public.enquiries ADD COLUMN name TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'contact_person') THEN
        ALTER TABLE public.enquiries ADD COLUMN contact_person TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'mobile') THEN
        ALTER TABLE public.enquiries ADD COLUMN mobile TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'whatsapp') THEN
        ALTER TABLE public.enquiries ADD COLUMN whatsapp TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'phone') THEN
        ALTER TABLE public.enquiries ADD COLUMN phone TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'email') THEN
        ALTER TABLE public.enquiries ADD COLUMN email TEXT;
    END IF;

    -- Product columns
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'product_id') THEN
        ALTER TABLE public.enquiries ADD COLUMN product_id TEXT;
    ELSE
        BEGIN
            ALTER TABLE public.enquiries ALTER COLUMN product_id TYPE TEXT USING product_id::text;
        EXCEPTION WHEN OTHERS THEN NULL;
        END;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'product_name') THEN
        ALTER TABLE public.enquiries ADD COLUMN product_name TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'brand') THEN
        ALTER TABLE public.enquiries ADD COLUMN brand TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'colour') THEN
        ALTER TABLE public.enquiries ADD COLUMN colour TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'selected_colour') THEN
        ALTER TABLE public.enquiries ADD COLUMN selected_colour TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'size') THEN
        ALTER TABLE public.enquiries ADD COLUMN size TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'selected_size') THEN
        BEGIN
            ALTER TABLE public.enquiries ALTER COLUMN selected_size TYPE TEXT USING selected_size::text;
        EXCEPTION WHEN OTHERS THEN NULL;
        END;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'quantity') THEN
        ALTER TABLE public.enquiries ADD COLUMN quantity TEXT;
    ELSE
        BEGIN
            ALTER TABLE public.enquiries ALTER COLUMN quantity TYPE TEXT USING quantity::text;
        EXCEPTION WHEN OTHERS THEN NULL;
        END;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'fit') THEN
        ALTER TABLE public.enquiries ADD COLUMN fit TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'message') THEN
        ALTER TABLE public.enquiries ADD COLUMN message TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'notes') THEN
        ALTER TABLE public.enquiries ADD COLUMN notes TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'enquiries' AND column_name = 'status') THEN
        ALTER TABLE public.enquiries ADD COLUMN status TEXT DEFAULT 'pending';
    END IF;
END $$;

-- 3. Enable RLS and create public policies
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can insert enquiries" ON public.enquiries;
CREATE POLICY "Public can insert enquiries" 
    ON public.enquiries FOR INSERT 
    WITH CHECK (true);

DROP POLICY IF EXISTS "Public can view enquiries" ON public.enquiries;
CREATE POLICY "Public can view enquiries" 
    ON public.enquiries FOR SELECT 
    USING (true);
