// === SKU auto-generation ===
document.getElementById('sku').value = 'SKU-' + Math.random().toString(36).substring(2, 8).toUpperCase();

// === Sub-categories mapping ===
const subCategories = {
    'Alimentaire': ['Riz & Céréales', 'Huiles', 'Conserves', 'Condiments', 'Viandes & Poissons'],
    'Boissons': ['Eau', 'Jus de fruits', 'Sodas', 'Boissons locales', 'Alcools'],
    'Hygiène & Beauté': ['Soins corporels', 'Cheveux', 'Parfums', 'Maquillage'],
    'Ménage': ['Nettoyants', 'Lessive', 'Vaisselle', 'Désodorisants'],
    'Électronique': ['Téléphones', 'Accessoires', 'Audio', 'Informatique'],
    'Mode & Vêtements': ['Homme', 'Femme', 'Enfant', 'Chaussures'],
    'Bébé & Enfants': ['Couches', 'Alimentation bébé', 'Jouets', 'Vêtements bébé'],
    'Épicerie': ['Sucre & Farine', 'Pâtes', 'Snacks', 'Petit-déjeuner']
};

const catSelect = document.getElementById('category');
const subSelect = document.getElementById('sub-category');

catSelect.addEventListener('change', () => {
    const subs = subCategories[catSelect.value] || [];
    subSelect.innerHTML = subs.length
        ? subs.map(s => `<option>${s}</option>`).join('')
        : '<option value="">— Aucune sous-catégorie —</option>';
});

// === Form submission ===
document.getElementById('product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
});
