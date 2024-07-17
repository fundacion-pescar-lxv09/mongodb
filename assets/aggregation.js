// Estadisticas Publicaciones
db.posts.aggregate([
    { $group: {
        _id: "$username",
        posts: { $sum: 1 },
        lowest: { $min: "$price" },
        highest: { $max: "$price" },
        average: { $avg: "$price"}
    } }
])
// Publicaciones con poca cantidad de productos
db.posts.aggregate([
    { $match: { stock: { $lte: 30 } } },
    { $sort: { stock: -1 } },
    { $project: { stock: 1, product: 1, username: 1 } }
])
// Publicaciones de cada usuario
db.users.aggregate([
    { $lookup: {
        from: "posts",// coleccion de origen
        localField: "username",// campo local
        foreignField: "username",// campo remoto
        as: "posts"//alias
    } }
])
// Categorias de publicaciones
db.posts.aggregate([
    { $group: {
        _id: "$categories",
        total: {$sum: 1}
    }}
])
// Productos de una categoria
db.posts.aggregate([
    { $match: { product: /teclado|mouse/ }},
    { $project: { categories: 1, product: 1 }},
    { $sort: { categories: 1 }}
])

db.posts.updateMany(
    { $nor: [ {categories: "muebles"} ] }, // filter
    { $set: { categories: ["harware","computacion"] }} // valores
)
db.posts.updateMany(
    { $nor: [ {categories: "muebles"} ] }, // filter
    { $push: {categories: "tecnologia" } } // valores
)