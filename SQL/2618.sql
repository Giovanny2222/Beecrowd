SELECT pr.name AS product_name, pv.name AS provider_name, cat.name AS category_name
FROM products pr
JOIN providers pv ON pr.id_providers = pv.id
JOIN categories cat ON pr.id_categories = cat.id
WHERE pv.name = 'Sansul SA' AND cat.name = 'Imported';
