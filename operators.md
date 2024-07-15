## COMPARACION

Cuando necesitamos filtrar textos o valores numericos podemos implementar alguno de los nombres reservadores para este tipo de operadores, que definen el criterio a tener en cuenta al momento de evaluar el valor de referencia.

| filtro | referencia | criterio | 
|--|--|--|
|$eq  | { _price_: 49999.99 } |  es igual a (por omision)  |
|$ne  | { _price_: { __$ne__: 49999.99 } } |  no es igual a |
|$gt  | { _stock_: { __$gt__: 200 } } |  mayor que (no incluye el valor) |
|$gte | { _stock_: { __$gte__: 200 } } |  mayor o igual a (inclusive) |
|$lt  | { _stock_: { __$lt__: 50 } } |  menor que (no incluye el valor) |
|$lte | { _stock_: { __$lte__: 50 } } |  menor o igual a (inclusive) |

## LOGICOS

cuando necesitamos devolver valores en base a __multiples condiciones__, que pueden ser o no excluyentes podemos utilizar los siguiente operadores, que evaluaran toda la expresion e identificaran aquellos documentos que cumplan con los criterios.

| filtro | referencia | criterio | 
|--|--|--|
|$and | { _price_: 85699.99, _stock_: 10 } | todas las condiciones se deben cumplir (por omision)  |
|$or | { __$or__: [ { _price_: 85699.99}, { _stock_: 10 } ] } |  al menos una de las condiciones se debe cumplir |
|$not | { __$not__: [ { _price_: 85699.99}, { _stock_: 10 } ] } | ninguna de las condiciones se debe cumplir |
|$nor | { __$nor__: [ { _price_: 85699.99}, { _stock_: 10 } ] } | una de las condiciones debe cumplirse y la otra no |
|$in  | { _categories_: { __$in__: [_'hogar'_, _'muebles'_] }} |  debe coincidir con algun valor de la lista |
|$nin | { _categories_: { __$nin__: [_'hogar'_, _'muebles'_] }} |  no debe coincidir con ningun valor de la lista |

## CLAVES

Cuando necesitamos realizar una actualizacion, puede que necesitemos __cambiar la estructura de nuestros documentos__, para ello debemos utilizar los operadores que afectan tanto a las claves, como a los valores del objeto.

| filtro | referencia | criterio | 
|--|--|--| 
|$inc | { __$inc__: { _price_: 500 } } | aumenta el valor del campo en la cantidad solicitada
|$set | { __$set__: { _postDate_: new Date() } } | define el valor a modificar de un documento |
|$unset | { __$unset__: { _post_: 1 } } | elimina la clave y su respectivo valor de un documento
|$rename| { __$rename__: { `"username"` : `"user"` } } | cambia el nombre de una de las clave de documento

## ARREGLOS

En ciertas ocasiones nuestros objetos tendran como valor una _lista numerada de elementos (array)_ y por lo tanto, si necesitamos actualizar la misma, no podemos utilizar directamente el operador $set, ya que reemplazariamos una clave y valor por otros. Para ello existen los operadores de arreglos.

| filtro | referencia | criterio | 
|--|--|--| 
| $push | __$push__: { _categories_: 'muebles' } | agregar a un array el valor especificado |
| $addToSet | __$addToSet__: { _categories_: 'muebles' } | verifica si existe el valor y luego lo agrega |
| $pull | __$pull__: { _categories_: 'muebles' } | elimina el primer elemento que coincida con el criterio |
| $pullAll | __$pullAll__: { _categories_: 'muebles' } | elimina todas las coincidencias del array |
| $pop | __$pop__: { _categories_: 1 } | elimina el primer o ultimo elemento de un array (primero: 1, ultimo: -1) |

[Volver](./readme.md)