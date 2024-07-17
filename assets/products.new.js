var postDate = new Date(2021, 3, 19); // YYYY,MM,DD
var createdAt = new Date("2020-04-18") // toLocateString

var productOne = {
    product: "teclado",
    categories: [
        "hardware",
        "perifericos",
        "hardware"
    ],
    company: "logitech",
    user: "JohnDoe",
    stock: 45,
    price: 5400.00,
    createdAt
}
var productTwo = {
    product: "Silla para Oficina",
    categories: [
        "oficina",
        "muebles"
    ],
    stock: 100,
    price: 749999.99,
    company: "techome",
    postDate
}
db.posts.bulkWrite([
    { insertOne: { document: productOne } },
    { insertOne: { document: productTwo } }
])