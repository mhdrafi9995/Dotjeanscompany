-- ==============================================================================
-- DOT Jeans Co. - Brand Products & Wholesale Enquiry Setup
-- Run this in Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ==============================================================================

-- 1. Ensure products table exists and has 'brand' column
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT,
    fit TEXT,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- If table already exists, ensure brand column is present
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'products' AND column_name = 'brand'
    ) THEN
        ALTER TABLE public.products ADD COLUMN brand TEXT;
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'products' AND column_name = 'category'
    ) THEN
        ALTER TABLE public.products ADD COLUMN category TEXT;
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'products' AND column_name = 'fit'
    ) THEN
        ALTER TABLE public.products ADD COLUMN fit TEXT;
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'products' AND column_name = 'image_url'
    ) THEN
        ALTER TABLE public.products ADD COLUMN image_url TEXT;
    END IF;
END $$;

-- 2. Enable Row Level Security (RLS) and allow public reading of products
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view products" ON public.products;
CREATE POLICY "Public can view products" 
    ON public.products FOR SELECT 
    USING (true);

-- 3. Ensure enquiries table exists with RLS for public wholesale submissions
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    business_name TEXT,
    contact_person TEXT,
    phone TEXT,
    email TEXT,
    product_id TEXT,
    product_name TEXT,
    brand TEXT,
    selected_colour TEXT,
    selected_size TEXT,
    quantity INTEGER DEFAULT 1,
    notes TEXT
);

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can insert enquiries" ON public.enquiries;
CREATE POLICY "Public can insert enquiries" 
    ON public.enquiries FOR INSERT 
    WITH CHECK (true);

-- 4. Seed initial brand products for KOCOA and CROSS COUNTRY
INSERT INTO public.products (brand, name, description, category, fit, image_url)
VALUES
    -- KOCOA Products
    ('KOCOA', 'KOCOA Baggy Fit Jeans – Washed Indigo', 'Premium urban baggy denim with modern washed aesthetic, relaxed silhouette, and durable heavy denim.', 'Jeans', 'Baggy Fit', 'asses/kocoa-baggy.jpg'),
    ('KOCOA', 'KOCOA Skater Wide Leg Jeans – Vintage Black', 'Signature street skateboard fit wide leg denim in faded vintage black wash.', 'Jeans', 'Wide Leg', 'asses/kocoa-black.jpg'),
    ('KOCOA', 'KOCOA Street Relaxed Denim – Light Ice Wash', 'Contemporary light ice wash denim designed for relaxed streetwear layering.', 'Jeans', 'Relaxed Fit', 'asses/kocoa-baggy.jpg'),
    ('KOCOA', 'KOCOA Urban Utility Cargo Pants – Shadow Grey', 'Six-pocket utility cargo pants in washed heavy twill cotton with reinforced stitching.', 'Cargo Pants', 'Cargo Fit', 'asses/cargo.jpg'),

    -- CROSS COUNTRY Products
    ('CROSS COUNTRY', 'CROSS COUNTRY Men''s Wide Leg Jeans', 'Classic wide leg jeans with authentic rugged indigo denim and dependable everyday comfort.', 'Jeans', 'Wide Leg', 'asses/wideleg.jpg'),
    ('CROSS COUNTRY', 'CROSS COUNTRY Men''s Regular Fit Jeans', 'Timeless five-pocket regular fit jeans built with heavyweight durable denim.', 'Jeans', 'Regular Fit', 'asses/regular.jpg'),
    ('CROSS COUNTRY', 'CROSS COUNTRY Heavyweight Cargo Pants', 'Multi-pocket tactical & workwear cargos built for heavy commercial duty.', 'Cargo Pants', 'Cargo', 'asses/cargo.jpg'),
    ('CROSS COUNTRY', 'CROSS COUNTRY Regular Linen Pants', 'Breathable lightweight linen blend casual trousers for all-day wholesale demand.', 'Linen Pants', 'Regular', 'asses/linen.jpg'),
    ('CROSS COUNTRY', 'CROSS COUNTRY Classic Denim Shorts', 'Heavy denim knee-length shorts with reinforced rivets and clean stitching.', 'Shorts', 'Denim Shorts', 'asses/shorts.jpg'),
    ('CROSS COUNTRY', 'CROSS COUNTRY Kids Cargo Denim', 'Durable kids cargo jeans designed with comfort stretch and tough double knees.', 'Kids Wear', 'Kids Regular', 'asses/kids.png')
ON CONFLICT DO NOTHING;
