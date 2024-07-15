## CREATE (INSERT)

Estas operaciones las utilizaremos en caso que necesitemos agregar elementos a la coleccion con la que estemos trabajando, una de las ventajas que tiene este motor de base de datos, es la creacion de la colleccion cuando insertamos objetos en la misma.

| comando | descripcion |
|--|--|
| __.insertOne(`{Object}`)__ | agrega un registro a la coleccion de documentos |
| __.insertMany(`[ObjectArray]`)__ | agrega multiples registros a la coleccion |
| __.upsert(`{filter}`,`{Object}`)__ | actualiza o agrega un nuevo documento |

### Ejemplo SQL

```sql
-- Agregar un Registro
INSERT INTO `usuarios` SET 
    `username`= "cristian"
    `email` = "cristiandracedo@hotmail.com";
-- Agregar multiples Registros
INSERT INTO `productos`(`name`, `stock`, `price`) values 
    ("teclado", 100, 8000.00),
    ("monitor", 50, 755999.99),
    ("mouse", 10, 1500.00),
    ("teclado", 30, 8000.00),
    ("impresora", 15,15000.00);
```
### Ejemplo MongoDB

```js
// insertar un Documento
db.usuarios.insertOne({ 
    username: "cristian", 
    email: "cristiandracedo@hotmail.com"
})
// insertar multiples Documentos
db.productos.insertMany([
    { name: "teclado", stock: 100, price: 8000.00 },
    { name: "monitor", stock: 50, price: 755999.99 },
    { name: "mouse", stock: 10, price: 1500.00 }
    { name: "teclado", stock: 30, price: 8000.00 },
    { name: "impresora", stock: 15, price: 15000.00 }
])
```
## READ (SELECT)

cuando hayamos agregado algunos documentos a la coleccion, podremos consultarlos utilizando el __metodo find()__, al cual deberemos pasarle como parametro un objeto con los criterios de busqueda. Luego MongoDB realizar la comparacion de nuestro objeto con los documentos de la base de datos y devolvera los resultados coincidentes.

| comando | descripcion |
|--|--|
| __.find()__| muestra todos los documentos de la coleccion |
| __.find(`{filter}`)__ | muestra todos los objetos coincidentes |
| __.findOne(`{filter}`)__ | muestra el primer objeto que coincida con los criterios de busqueda |

### Ejemplo SQL

```sql
-- Consultar todos los Registros
SELECT * FROM `usuarios`;
-- Consultar Registros con condiciones
SELECT * FROM `productos` 
WHERE `stock` < 50;
```
### Ejemplo MongoDB

```js
// Consultar todos los Documentos
db.usuarios.find()
// Consultar Documentos con condiciones
db.productos.find({ stock: {$lt:50} })
```
## UPDATE

En ocasiones en necesario modificar algunos de los documentos creados con anterioridad, para ello podemos utilizar el __metodo update()__ que permite modificar los valores o agregar claves a los objetos previamente cargados.

| comando | descripcion |
|--|--|
| __.updateOne(`{filter}`, `{Object}`)__ | actualiza el primer elemento que coincida con los criterios del filtro |
| __.updateMany(`{filter}`,`{Object}`)__ | actualiza todos los objetos que cumplan los requisitos del filtro |
| __.replaceOne(`{filter}`,`{object}`)__ | reemplaza un documento de la coleccion por otro objeto |

### Ejemplo SQL

```sql
-- Actualizar uno o varios Registro
UPDATE `usuarios`
SET `username` = "c215714n"
WHERE `email` = "cristiandracedo@hotmail.com";
```
### Ejemplo MongoDB

```js
// Actualizar un Documento
db.usuarios.updateOne(
    { email: "cristiandracedo@hotmail.com" },
    { $set:{ username: "c215714n" } }
)
// Actualizar multiples Documentos
db.productos.updateMany(
    { price: { $lte: 30000 }},
    { $mul: { price: 1.15 }}
)
// Reemplazar un Documento
db.productos.replaceOne(
    { name: "teclado" },
    { name: "teclado", mustDelete: true }
)
```

## DELETE

En una base de datos de Documentos, podremos eliminar directamente aquellos objetos que no sean necesarios, ya que, normalmente, al no existir una relacion previa, no debemos preocuparnos por la integridad de las demas colecciones.

| comando | descripcion |
|--|--|
| __.deleteOne(`{filter}`)__ | elimina el primer elemento que coincida con los criterios del filtro |
| __.deleteMany(`{filter}`)__ | elimina todos los documentos que coincidan los criterios de eliminacion |

### Ejemplo SQL

```sql
-- Eliminar uno o varios Registros
DELETE FROM `productos`;
WHERE `name` = "teclado" AND `stock` = 10;
```

### Ejemplo MongoDB

```js
// Eliminar un Documento
db.productos.deleteOne({ name: "teclado" })
// Eliminar multiples Documentos
db.productos.deleteMany({ mustDelete: true })
```

[Volver](./readme.md)