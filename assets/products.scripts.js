// Operaciones individuales
var user = {
    username: "JohnDoe",
    fullname: "John Doe",
    email: "john.doe@gmail.com",
};
var product = {
    name: 'caja',
    company: 'matchbox',
    price: 100,
    categories: [
        "reciclables",
        "paqueteria"
    ],
    stock: 10000,
    username: user.username,
};
// Operaciones individuales
db.usuarios.deleteOne({username: user.username});
db.usuarios.insertOne(user);
// Escritura masiva de Productos
db.productos.bulkWrite([
    { insertOne: { document: product } },
    { updateMany: { filter: { name: "caja" }, update: { $set: { price: 150 } } } },
    { deleteOne: { filter: { name: "caja" }} }
]);