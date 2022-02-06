-- 1.1. 
	#SELECT nombre FROM articulos;

-- 1.2. 
	#SELECT nombre, precio FROM articulos;

-- 1.3.
	#SELECT nombre FROM articulos WHERE precio <= 200;
    
-- 1.4.
	#SELECT nombre, precio FROM articulos WHERE precio BETWEEN 60 AND 120;
    
-- 1.5.
	#SELECT nombre, precio * 166.386 AS 'pesetas' FROM articulos;
    
-- 1.6.
	#SELECT AVG(precio) AS 'precio medio' FROM articulos;
    
-- 1.7.
	#SELECT AVG(precio) AS 'precio medio fab.2' FROM articulos WHERE fabricante = 2;
    
-- 1.8.
	#SELECT COUNT(*) FROM articulos WHERE precio >= 180; 
    
-- 1.9.
	#SELECT nombre, precio FROM articulos WHERE precio >= 180 ORDER BY precio DESC; 
    
-- 1.10. 
	#SELECT * FROM articulos INNER JOIN fabricantes on articulos.fabricante = fabricantes.codigo;
    
-- 1.11.
	#SELECT articulos.nombre, articulos.precio, fabricantes.nombre FROM articulos, fabricantes;

-- 1.12. 
	#SELECT AVG(precio), fabricante FROM articulos GROUP BY fabricante;

-- 1.13.
	#SELECT AVG(articulos.precio), fabricantes.nombre FROM articulos, fabricantes GROUP BY fabricantes.nombre;
    
-- 1.14. 
	#SELECT fabricantes.nombre FROM fabricantes, articulos WHERE articulos.fabricante = fabricantes.codigo GROUP BY fabricantes.nombre HAVING AVG(articulos.precio) >= 150;

-- 1.15.
	#SELECT MIN(nombre), MIN(precio) FROM articulos;
    
-- 1.16. !!A pesar de que este funcione no he entendido del todo el porque¡¡
	#SELECT articulos.nombre, articulos.precio, fabricantes.nombre FROM articulos INNER JOIN fabricantes ON articulos.fabricante = fabricantes.codigo AND articulos.precio = (SELECT MAX(articulos.precio) FROM articulos WHERE articulos.fabricante = fabricantes.codigo);
    
-- 1.17. !!Añado el valor de la columna codigo a mano porque no es auto incremental¡¡
	#INSERT INTO articulos (codigo, nombre, precio, fabricante) VALUES (11, 'Altavoces', 70, 2);
    
-- 1.18. 
	#UPDATE articulos SET nombre = 'Impresora Laser' WHERE codigo = 8;
    
-- 1.19. !!No se porqué pero desde mysql esta linea de comandos no me funciona, sin embargo al hacerlo manualmente desde la terminal me funciona perfectamente¡¡
	#UPDATE articulos SET precio = precio * 0.9; 

