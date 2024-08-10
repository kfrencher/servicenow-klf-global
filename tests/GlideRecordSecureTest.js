const impersonator = new GlideImpersonate();
impersonator.impersonate('a8f98bb0eb32010045e1a5115206fe3a');
const breed = new GlideRecord('x_53417_demo_cat_breed');
breed.query();
gs.info(gs.getUserDisplayName());
gs.info(breed.getRowCount());
while (breed.next()) {
    gs.info(breed.getValue('breed'));
}