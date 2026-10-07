-- ==============================================================================
-- DOT Jeans Co. - Complete Products, Colours & Sizes Seed & Permissions
-- Run this in Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ==============================================================================

-- 1. Ensure tables exist with the required columns
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    item_name TEXT NOT NULL,
    brand_name TEXT NOT NULL,
    description TEXT,
    category TEXT,
    fit TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure all column aliases exist on products
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'products' AND column_name = 'item_name') THEN
        ALTER TABLE public.products ADD COLUMN item_name TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'products' AND column_name = 'brand_name') THEN
        ALTER TABLE public.products ADD COLUMN brand_name TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'products' AND column_name = 'category') THEN
        ALTER TABLE public.products ADD COLUMN category TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'products' AND column_name = 'fit') THEN
        ALTER TABLE public.products ADD COLUMN fit TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'products' AND column_name = 'image_url') THEN
        ALTER TABLE public.products ADD COLUMN image_url TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'products' AND column_name = 'is_active') THEN
        ALTER TABLE public.products ADD COLUMN is_active BOOLEAN DEFAULT true;
    END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.product_colours (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    colour_name TEXT NOT NULL,
    colour_code TEXT,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'product_colours' AND column_name = 'colour_name') THEN
        ALTER TABLE public.product_colours ADD COLUMN colour_name TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'product_colours' AND column_name = 'colour_code') THEN
        ALTER TABLE public.product_colours ADD COLUMN colour_code TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'product_colours' AND column_name = 'image_url') THEN
        ALTER TABLE public.product_colours ADD COLUMN image_url TEXT;
    END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.product_sizes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    size TEXT NOT NULL,
    stock_quantity INTEGER DEFAULT 2,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'product_sizes' AND column_name = 'size') THEN
        ALTER TABLE public.product_sizes ADD COLUMN size TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'product_sizes' AND column_name = 'stock_quantity') THEN
        ALTER TABLE public.product_sizes ADD COLUMN stock_quantity INTEGER DEFAULT 2;
    END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.product_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    is_primary BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Configure Row Level Security (RLS) to allow public reading
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_colours ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_sizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view products" ON public.products;
CREATE POLICY "Public can view products" ON public.products FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view product colours" ON public.product_colours;
CREATE POLICY "Public can view product colours" ON public.product_colours FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view product sizes" ON public.product_sizes;
CREATE POLICY "Public can view product sizes" ON public.product_sizes FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view product images" ON public.product_images;
CREATE POLICY "Public can view product images" ON public.product_images FOR SELECT USING (true);

-- 3. Seed Products with fixed UUIDs for reliability
DO $$
DECLARE
    p_straight_black UUID := 'a1111111-1111-1111-1111-111111111111';
    p_wideleg_brown  UUID := 'a2222222-2222-2222-2222-222222222222';
    p_cargos_olive   UUID := 'a3333333-3333-3333-3333-333333333333';
    p_linen_pants    UUID := 'a4444444-4444-4444-4444-444444444444';
    p_kids_cargos    UUID := 'a5555555-5555-5555-5555-555555555555';
    p_shorts_denim   UUID := 'a6666666-6666-6666-6666-666666666666';
    p_kocoa_baggy    UUID := 'b1111111-1111-1111-1111-111111111111';
    p_kocoa_skater   UUID := 'b2222222-2222-2222-2222-222222222222';
BEGIN
    -- Product 1: CROSS COUNTRY – Straight Fit – Black
    INSERT INTO public.products (id, brand_name, item_name, description, category, fit, image_url, is_active)
    VALUES (p_straight_black, 'CROSS COUNTRY', 'CROSS COUNTRY – Straight Fit – Black',
            'Classic straight fit jeans built with heavyweight durable black denim. Comfortable waist with clean aesthetic and reinforced stitching for high-demand wholesale partner delivery.',
            'Jeans', 'Straight Fit', 'asses/regular.jpg', true)
    ON CONFLICT (id) DO UPDATE SET item_name = EXCLUDED.item_name, brand_name = EXCLUDED.brand_name, description = EXCLUDED.description;

    DELETE FROM public.product_colours WHERE product_id = p_straight_black;
    INSERT INTO public.product_colours (product_id, colour_name, colour_code, image_url) VALUES
        (p_straight_black, 'Black', '#1a1a1a', 'asses/regular.jpg'),
        (p_straight_black, 'Indigo Blue', '#2b3952', 'asses/regular.jpg'),
        (p_straight_black, 'Stone Grey', '#5c5957', 'asses/regular.jpg');

    DELETE FROM public.product_sizes WHERE product_id = p_straight_black;
    INSERT INTO public.product_sizes (product_id, size, stock_quantity) VALUES
        (p_straight_black, '28', 2),
        (p_straight_black, '30', 3),
        (p_straight_black, '32', 3),
        (p_straight_black, '34', 2),
        (p_straight_black, '36', 2);

    DELETE FROM public.product_images WHERE product_id = p_straight_black;
    INSERT INTO public.product_images (product_id, image_url, is_primary, display_order) VALUES
        (p_straight_black, 'asses/regular.jpg', true, 1),
        (p_straight_black, 'asses/detail image/rope.png', false, 2),
        (p_straight_black, 'asses/detail image/fabric.png', false, 3);

    -- Product 2: CROSS COUNTRY – Wide Leg – Brown
    INSERT INTO public.products (id, brand_name, item_name, description, category, fit, image_url, is_active)
    VALUES (p_wideleg_brown, 'CROSS COUNTRY', 'CROSS COUNTRY – Wide Leg – Brown',
            'Contemporary wide leg silhouette in rich earthy brown denim wash. Relaxed streetwear drape and premium texture engineered for commercial bulk orders.',
            'Jeans', 'Wide Leg', 'asses/wideleg.jpg', true)
    ON CONFLICT (id) DO UPDATE SET item_name = EXCLUDED.item_name, brand_name = EXCLUDED.brand_name, description = EXCLUDED.description;

    DELETE FROM public.product_colours WHERE product_id = p_wideleg_brown;
    INSERT INTO public.product_colours (product_id, colour_name, colour_code, image_url) VALUES
        (p_wideleg_brown, 'Brown', '#8c6a51', 'asses/wideleg.jpg'),
        (p_wideleg_brown, 'Black', '#2c2f33', 'asses/wideleg.jpg'),
        (p_wideleg_brown, 'Rugged Blue', '#4a6fa5', 'asses/wideleg.jpg');

    DELETE FROM public.product_sizes WHERE product_id = p_wideleg_brown;
    INSERT INTO public.product_sizes (product_id, size, stock_quantity) VALUES
        (p_wideleg_brown, '30', 3),
        (p_wideleg_brown, '32', 4),
        (p_wideleg_brown, '34', 4),
        (p_wideleg_brown, '36', 2),
        (p_wideleg_brown, '38', 2);

    DELETE FROM public.product_images WHERE product_id = p_wideleg_brown;
    INSERT INTO public.product_images (product_id, image_url, is_primary, display_order) VALUES
        (p_wideleg_brown, 'asses/wideleg.jpg', true, 1),
        (p_wideleg_brown, 'asses/detail image/rope.png', false, 2),
        (p_wideleg_brown, 'asses/detail image/fabric.png', false, 3);

    -- Product 3: CROSS COUNTRY – Men''s Cargos
    INSERT INTO public.products (id, brand_name, item_name, description, category, fit, image_url, is_active)
    VALUES (p_cargos_olive, 'CROSS COUNTRY', 'CROSS COUNTRY Heavyweight Tactical Cargo Pants',
            'Six-pocket rugged tactical cargo trousers in premium heavy twill cotton with reinforced stress points. Ideal for everyday utility wear.',
            'Cargo Pants', 'Cargo Fit', 'asses/cargo.jpg', true)
    ON CONFLICT (id) DO UPDATE SET item_name = EXCLUDED.item_name, brand_name = EXCLUDED.brand_name;

    DELETE FROM public.product_colours WHERE product_id = p_cargos_olive;
    INSERT INTO public.product_colours (product_id, colour_name, colour_code, image_url) VALUES
        (p_cargos_olive, 'Olive Green', '#9fa196', 'asses/cargo.jpg'),
        (p_cargos_olive, 'Desert Beige', '#d1c8bd', 'asses/cargo.jpg'),
        (p_cargos_olive, 'Earth Brown', '#8c766b', 'asses/cargo.jpg'),
        (p_cargos_olive, 'Slate Blue', '#3b5066', 'asses/cargo.jpg');

    DELETE FROM public.product_sizes WHERE product_id = p_cargos_olive;
    INSERT INTO public.product_sizes (product_id, size, stock_quantity) VALUES
        (p_cargos_olive, '30', 2),
        (p_cargos_olive, '32', 3),
        (p_cargos_olive, '34', 3),
        (p_cargos_olive, '36', 2),
        (p_cargos_olive, '38', 2);

    -- Product 4: CROSS COUNTRY – Regular Linen Pants
    INSERT INTO public.products (id, brand_name, item_name, description, category, fit, image_url, is_active)
    VALUES (p_linen_pants, 'CROSS COUNTRY', 'CROSS COUNTRY Regular Linen Pants',
            'Breathable lightweight premium linen blend casual trousers designed for comfortable all-day wear and superior thermal comfort.',
            'Linen Pants', 'Regular Fit', 'asses/linen.jpg', true)
    ON CONFLICT (id) DO UPDATE SET item_name = EXCLUDED.item_name, brand_name = EXCLUDED.brand_name;

    DELETE FROM public.product_colours WHERE product_id = p_linen_pants;
    INSERT INTO public.product_colours (product_id, colour_name, colour_code, image_url) VALUES
        (p_linen_pants, 'Beige', '#d6d2c4', 'asses/linen.jpg'),
        (p_linen_pants, 'Black', '#1a1a1a', 'asses/linen.jpg'),
        (p_linen_pants, 'Navy Blue', '#2b3952', 'asses/linen.jpg');

    DELETE FROM public.product_sizes WHERE product_id = p_linen_pants;
    INSERT INTO public.product_sizes (product_id, size, stock_quantity) VALUES
        (p_linen_pants, '28', 2),
        (p_linen_pants, '30', 2),
        (p_linen_pants, '32', 3),
        (p_linen_pants, '34', 3),
        (p_linen_pants, '36', 2);

    -- Product 5: KOCOA Baggy Fit Jeans – Washed Indigo
    INSERT INTO public.products (id, brand_name, item_name, description, category, fit, image_url, is_active)
    VALUES (p_kocoa_baggy, 'KOCOA', 'KOCOA Baggy Fit Jeans – Washed Indigo',
            'Authentic streetwear baggy silhouette in heavy vintage wash denim. Premium brass rivets and reinforced pocket bags.',
            'Jeans', 'Baggy Fit', 'asses/kocoa-baggy.jpg', true)
    ON CONFLICT (id) DO UPDATE SET item_name = EXCLUDED.item_name, brand_name = EXCLUDED.brand_name;

    DELETE FROM public.product_colours WHERE product_id = p_kocoa_baggy;
    INSERT INTO public.product_colours (product_id, colour_name, colour_code, image_url) VALUES
        (p_kocoa_baggy, 'Washed Indigo', '#4a6fa5', 'asses/kocoa-baggy.jpg'),
        (p_kocoa_baggy, 'Dark Indigo', '#1e2b45', 'asses/kocoa-baggy.jpg');

    DELETE FROM public.product_sizes WHERE product_id = p_kocoa_baggy;
    INSERT INTO public.product_sizes (product_id, size, stock_quantity) VALUES
        (p_kocoa_baggy, '30', 2),
        (p_kocoa_baggy, '32', 3),
        (p_kocoa_baggy, '34', 3),
        (p_kocoa_baggy, '36', 2);

    -- Product 6: KOCOA Skater Wide Leg Jeans – Vintage Black
    INSERT INTO public.products (id, brand_name, item_name, description, category, fit, image_url, is_active)
    VALUES (p_kocoa_skater, 'KOCOA', 'KOCOA Skater Wide Leg Jeans – Vintage Black',
            'Skater inspired wide leg silhouette in washed charcoal black denim. Relaxed fit for effortless street fashion style.',
            'Jeans', 'Wide Leg', 'asses/kocoa-black.jpg', true)
    ON CONFLICT (id) DO UPDATE SET item_name = EXCLUDED.item_name, brand_name = EXCLUDED.brand_name;

    DELETE FROM public.product_colours WHERE product_id = p_kocoa_skater;
    INSERT INTO public.product_colours (product_id, colour_name, colour_code, image_url) VALUES
        (p_kocoa_skater, 'Vintage Black', '#1c1c1c', 'asses/kocoa-black.jpg'),
        (p_kocoa_skater, 'Charcoal Grey', '#3d3d3d', 'asses/kocoa-black.jpg');

    DELETE FROM public.product_sizes WHERE product_id = p_kocoa_skater;
    INSERT INTO public.product_sizes (product_id, size, stock_quantity) VALUES
        (p_kocoa_skater, '28', 2),
        (p_kocoa_skater, '30', 2),
        (p_kocoa_skater, '32', 3),
        (p_kocoa_skater, '34', 3),
        (p_kocoa_skater, '36', 2);
END $$;
