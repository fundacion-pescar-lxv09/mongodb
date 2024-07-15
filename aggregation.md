## CURSOR

Además de los métodos CRUD y la definición de claves, MongoDB ofrece una serie de funcionalidades avanzadas que pueden ser utilizadas junto con el _método find_ o de manera independiente para manejar, manipular y analizar datos de manera eficiente, como las _funciones de agregacion_.

| metodo | descripcion |
|--|--|
| __.count()__ | devuelve el numero que reprenta la cantidad de registros contados |
| __.pretty()__ | muestra los resultados en un formato de salida legible |
| __.sort({`filter`})__ | ordena los objetos de salida segun el criterio establecido |
| __.limit(`n`)__ | establece la cantidad maxima de documentos a mostrar |
| __.skip(`n`)__ | omite la cantidad de documentos espeficada de los resultados |
| __.distinct({`filter`})__ | metodo independiente que devuelve documentos unicos |
| __.aggregate([`steps`])__ | metodo independiente que realiza una consulta de agregacion |

### AGGREGATE

Uno de los usos más comunes de la agregación es calcular valores agregados para grupos de documentos. __MongoDB Aggregation__ también puede realizar uniones de tipo relacional, remodelar documentos, crear nuevas colecciones y actualizar las existentes, entre otras cosas. 

|etapa| ejemplo | descripcion |
|--|--|--|
| $match | { __$match__: {`filter` } } | establece los criterios de busqueda |
| $project | { __$project__: {`Object`} } | define las claves que deben mostrarse |
| $group | { __$group__: { *_id*:`"$field"`} } | indica los criterios de agrupacion |
| $limit | { __$limit__:`n` } | cantidad de documentos mostrar |
| $sort | { __$sort__: {`Object`} }| establece el criterio ordinal |
| $lookup | { __$lookup__: {`relationship`} } | union de coleccion |

### $GROUP

corresponden a las operadores que se pueden utilizar cuando se implementa el __operador de grupo ($group)__ y admite determinadas expresiones que permiten realizar operaciones aritméticas, array, booleanas y de otro tipo como parte de la cadena de agregación.

| operador | ejemplo | descripcion |
|---|---|---|
| $first | { __$first__: `"$name"` } | Devuelve el primer elemento de la coleccion |
| $last | { __$last__: `"$name"` } | Devuelve el ultimo elemento de la coleccion |
| $min | { __$min__: `"$price"` } | Obtiene el valor mas bajo de los campos |
| $max | { __$max__: `"$price"` } | Obtiene el valor mas alto de los campos| 
| $avg | { __$avg__: `"$price"` } | Calcula el promedio de la lista de valores |
| $sum | { __$sum__: `"$price"` } | Suma todos los valores de los campos |
| $count | { __$count__: {} } | cuenta la cantidad total de registros |

### $LOOKUP

Debido a que MongoDB esta __basado en documentos__, podemos darles la forma que necesitemos. Sin embargo, en ocasiones es necesario utilizar información de más de una colección, para ello podemos utilizar el __operador de busqueda relacional__, estableciendo cuales son los criterios que permiten vincular ambas colecciones.

| clave | referencia | descripcion |
|--|--|--|
| from | __from:__ `posts` | define la coleccion a vincular de la cual se obtendran los datos |
| localField | __localField:__ `username` | identifica la clave local o campo relacional |
| foreignField | __foreignField:__ `user` | selecciona el campo de la coleccion remota |
| as | __as:__ `userPosts` | nombre con el que se identificara la clave que almacenara el objeto |

[Volver](./readme.md)