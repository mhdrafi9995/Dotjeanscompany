// Admin Panel Logic

// 1. Authentication
async function checkAuth() {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (!session || error) {
        window.location.href = 'login.html';
    } else {
        loadProducts();
    }
}

async function logout() {
    await supabase.auth.signOut();
    window.location.href = 'login.html';
}

// Initialize Auth State
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
        window.location.href = 'login.html';
    }
});

document.addEventListener('DOMContentLoaded', checkAuth);

// 2. Tabs
function switchTab(tabId) {
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId + 'Tab').classList.add('active');
    event.currentTarget.classList.add('active');
    
    if (tabId === 'products') loadProducts();
    if (tabId === 'enquiries') loadEnquiries();
}

// 3. UI Helpers for form
function addColourRow() {
    const cont = document.getElementById('coloursContainer');
    if (cont.children.length >= 7) {
        alert("Maximum 7 colours allowed.");
        return;
    }
    const div = document.createElement('div');
    div.className = 'colour-row';
    div.innerHTML = '<input type="text" class="c-name" placeholder="Colour Name"><input type="color" class="c-hex" value="#000000">';
    cont.appendChild(div);
}

function addSizeRow() {
    const cont = document.getElementById('sizesContainer');
    const div = document.createElement('div');
    div.className = 'size-row';
    div.innerHTML = '<input type="text" class="s-size" placeholder="Size" required><input type="number" class="s-qty" placeholder="Stock Qty" min="0" required>';
    cont.appendChild(div);
}

// 4. Load Data
async function loadProducts() {
    const { data, error } = await supabase.from('products').select('*, product_images(*)');
    if (error) { console.error(error); return; }
    
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = '';
    
    data.forEach(p => {
        const mainImg = p.product_images?.find(i => i.is_primary)?.image_url || '';
        tbody.innerHTML += `
            <tr>
                <td>${mainImg ? `<img src="${mainImg}" width="50">` : 'No Image'}</td>
                <td>${p.brand}</td>
                <td>${p.name}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteProduct('${p.id}')">Delete</button>
                </td>
            </tr>
        `;
    });
}

async function loadEnquiries() {
    const { data, error } = await supabase.from('enquiries').select('*').order('created_at', { ascending: false });
    if (error) { console.error(error); return; }
    
    const tbody = document.getElementById('enquiriesTableBody');
    tbody.innerHTML = '';
    
    data.forEach(e => {
        const date = new Date(e.created_at).toLocaleDateString();
        tbody.innerHTML += `
            <tr>
                <td>${date}</td>
                <td>${e.business_name || 'N/A'}</td>
                <td>${e.contact_person} (${e.phone})</td>
                <td>Product ID: ${e.product_id}</td>
                <td>Colour: ${e.selected_colour}, Size: ${e.selected_size}, Qty: ${e.quantity}</td>
            </tr>
        `;
    });
}

// 5. Save Product
async function saveProduct(e) {
    e.preventDefault();
    document.getElementById('saveMessage').innerText = "Saving... please wait.";
    
    const brand = document.getElementById('pBrand').value;
    const name = document.getElementById('pName').value;
    const description = document.getElementById('pDesc').value;
    
    // Insert Product
    const { data: prodData, error: prodErr } = await supabase.from('products').insert([{ brand, name, description }]).select();
    if (prodErr) { alert("Error saving product: " + prodErr.message); return; }
    const productId = prodData[0].id;
    
    // Insert Colours
    const colours = [];
    document.querySelectorAll('.colour-row').forEach(row => {
        const cName = row.querySelector('.c-name').value;
        const cHex = row.querySelector('.c-hex').value;
        if (cName) colours.push({ product_id: productId, name: cName, hex_code: cHex });
    });
    if (colours.length > 0) await supabase.from('product_colours').insert(colours);
    
    // Insert Sizes
    const sizes = [];
    document.querySelectorAll('.size-row').forEach(row => {
        const sSize = row.querySelector('.s-size').value;
        const sQty = row.querySelector('.s-qty').value;
        if (sSize) sizes.push({ product_id: productId, size: sSize, quantity: parseInt(sQty) });
    });
    if (sizes.length > 0) await supabase.from('product_sizes').insert(sizes);
    
    // Upload Images
    await uploadImages(productId);
    
    // Upload data.json
    const productInfo = { id: productId, brand, name, description, colours, sizes };
    const jsonBlob = new Blob([JSON.stringify(productInfo, null, 2)], { type: 'application/json' });
    await supabase.storage.from('Product Images').upload(`products/${productId}/data.json`, jsonBlob);
    
    document.getElementById('saveMessage').innerText = "Product saved successfully!";
    document.getElementById('productForm').reset();
    setTimeout(() => { switchTab('products'); document.getElementById('saveMessage').innerText = ''; }, 1500);
}

async function uploadImages(productId) {
    const mainImgFile = document.getElementById('pMainImg').files[0];
    const detailImgFiles = document.getElementById('pDetailImgs').files;
    
    if (mainImgFile) {
        const url = await uploadToStorage(mainImgFile, productId);
        if (url) await supabase.from('product_images').insert([{ product_id: productId, image_url: url, is_primary: true, display_order: 1 }]);
    }
    
    for (let i = 0; i < detailImgFiles.length && i < 2; i++) {
        const url = await uploadToStorage(detailImgFiles[i], productId);
        if (url) await supabase.from('product_images').insert([{ product_id: productId, image_url: url, is_primary: false, display_order: i + 2 }]);
    }
}

async function uploadToStorage(file, productId) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `products/${productId}/images/${fileName}`;
    
    const { error: uploadError } = await supabase.storage.from('Product Images').upload(filePath, file);
    if (uploadError) {
        console.error("Upload error:", uploadError);
        return null;
    }
    
    const { data } = supabase.storage.from('Product Images').getPublicUrl(filePath);
    return data.publicUrl;
}

// 6. Delete Product
async function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product?")) {
        try {
            // Delete folder from Supabase storage (images + data.json)
            const { data: imgFiles } = await supabase.storage.from('Product Images').list(`products/${id}/images`);
            const pathsToRemove = [];
            if (imgFiles && imgFiles.length > 0) {
                imgFiles.forEach(f => pathsToRemove.push(`products/${id}/images/${f.name}`));
            }
            pathsToRemove.push(`products/${id}/data.json`);
            
            if (pathsToRemove.length > 0) {
                await supabase.storage.from('Product Images').remove(pathsToRemove);
            }
        } catch(e) {
            console.error('Error deleting storage files', e);
        }

        await supabase.from('products').delete().eq('id', id);
        loadProducts();
    }
}
