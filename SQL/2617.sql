SELECT pr.name AS product_name, pv.name AS provider_name
FROM products pr
JOIN providers pv ON pr.id_providers = pv.id 
WHERE pv.name = 'Ajax SA';