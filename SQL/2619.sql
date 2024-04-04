SELECT pr.name AS product_name, pv.name AS provider_name, pr.price
FROM products pr
JOIN providers pv ON pr.id_providers = pv.id
JOIN categories cat ON pr.id_categories = cat.id
WHERE pr.price > 1000 AND cat.name = 'Super Luxury';
