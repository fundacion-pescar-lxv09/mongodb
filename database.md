## BASE DE DATOS

Estructura elaborada con la finalidad organizar y almacenar informacion.Para esto se requiere de alguna herramienta que permite la manipulacion de los datos, conocida como __DB Engine(Motor de Base de datos)__.

### RELACIONALES

Organizan los datos en forma de tablas y el lenguaje comunmente utilizado para esto suele ser __SQL (Structured Query Languaje)__ desarrollado originalmente por __IBM (Industrial Business Machines)__. Entre los motores de bases de datos que utilizan SQL como lenguaje, se encuentran los siguientes.

* MySQL
* Oracle SQL Server
* MariaDB
* Microsoft SQL
* Postgree
* SQLite

A pesar de las diferencias que existen entre los motores de bases de datos, la _migracion es relativamente facil_, debido a que utilizan el mismo _lenguaje en comun_. 

Otra caracteristica que facilita el aprendizaje del lenguaje, independientemente del motor que se vaya a utilizar, es su organizacion estructurada en diferentes sintaxis.

* __DDL (Data Definition Language)__: Abarca aquellos comandos que permiten definir la estructura de datos, es decir, _crear, editar y eliminar las tablas_ que se van a utilizar; ademas de las bases de datos y usuarios del servidor.
* __DML (Data Manipulation Language)__: Abarca aquellos comandos tipicos de un _CRUD(create, read, update, delete)_ para agregar, consultar, actualizar o eliminar registros de las tablas, creadas con anterioridad.
* __DCL (Data Control Language)__: Abarca aquellos comandos que establecen los permisos para los usuarios de conexion, normalmente utilizados por administradores del servidor, __otorgando y rechazando__ el acceso a determinados comandos, bases de datos o tablas
