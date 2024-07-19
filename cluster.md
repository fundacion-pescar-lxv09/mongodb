## CLUSTER DE DATOS

Conjunto de __nodos o sistemas interconectados__ que trabajan juntos para _almacenar, procesar y gestionar datos de manera distribuida_. Están diseñados para proporcionar __alta disponibilidad, rendimiento escalable y tolerancia a fallos__ en entornos donde el volumen de datos es grande o donde se requiere _procesamiento intensivo_.

### ReplicaSet

Servidores secundarios que cumplen la __funcion de respaldo__ y sincronizan su informacion periodicamente mediante _heartbeats (mensajes periodicos)_. El servidor principal acepta las operaciones de escritura y luego las replica a los secundarios de forma asíncrona.

Si un servidor posee la _direccion 191.186.34.56/27_, y queremos habilitar un equipo, dentro de la misma red con nombre __"backup_server.com"__ y direccion __IP 191.186.34.62/27__ podriamos aplicar el siguiente comando en el servidor principal, para habilitar un _servidor de respaldo identificado_ como __"rs0"__.

```sh
mongod --auth --replSet rs0 --dbpath "/path/to/replSet/data" --bind_ip 191.186.34.62
mongod --auth --replSet rs0 --dbpath "/path/to/replSet/data" --bind_ip backup_server.com
```

```js
rs.initiate({
  _id :  "rs0",
  members: [
    { _id:  0, host:  "mongodb0.191.186.34.60:27017" }, // ip address
    { _id:  1, host:  "mongodb1.backup_server.com:27017" }, // dns name
  ]
})
```

### Sharding

Servidores secundarios que permiten el __almacenamiento horizontal de datos__, es decir, que puede utilizarse la capacidad sumarizada de los recursos que posee cada uno para _mejorar el rendimiento y permitir el crecimiento horizontal_. Cada shard es un conjunto independiente de servidores. 

Por ejemplo: Si tenemos 4 servidores, con una capacidad de almacenamiento de 256GB y 8GB RAM, gracias a esta caracteristica, tendriamos un servidor compartido con una capacidad total de 1024GB y 32GB de RAM.

```sh
mongod --shardsvr --replSet shard1 --dbpath "/path/to/data/shard1" --port 27018
mongod --shardsvr --replSet shard2 --dbpath "/path/to/data/shard2" --port 27020
mongos --configdb configReplSet/localhost:27019 --port 27017
```

```js
sh.addShard("191.186.34.60::27017")
sh.addShard("shard_server.com::27017")

sh.enableSharding("database")
sh.shardCollection("database.collection", { field_shard: 1 })
```

[Volver al inicio](./readme.md)