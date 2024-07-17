db.createCollection("products", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            // Campos Obligatorios
            required: [
                "productName",
                "price",
                "stock"
            ],
            properties: {
                productName: {
                    bsonType: ["string"],
                    minLength: 4,
                    description: "el nombre del producto debe ser de tipo string y tener por lo menos 3 caracteres"
                },
                categories: {
                    bsonType: ["array"],
                    description: "debe agregar los textos correspondientes a las categorias"
                },
                price: {
                    bsonType: ["number"],
                    minimum: 0.00,
                    description: "el precio debe ser mayor a cero"
                },
                stock: {
                    bsonType: ["number"],
                    minimum: 0,
                    description: "la cantidad debe ser superior a cero"
                }
            }
        }
    }
});
db.createIndex({productName: 1},{unique: true});
db.createIndex({price: 1, stock: 1});

// Invalido (faltan propiedades)
db.products.insertOne({
    productName: "memoria ram",
    price: 35500,
    categories: ["tecnologia", "informatica"]
});
// Invalido (no coinciden los tipos)
db.products.insertOne({
    productName: "memoria ssd",
    stock: "150",
    price: "225000"
});
// Valido
db.products.insertOne({
    productName: "procesador",
    stock: 100,
    price: 65000,
    categories: ["tecnologia", "informatica"]
})

db.products.bulkWrite([
    { insertOne: {document: {        
        productName: "memoria ram",
        price: 35500,
        stock: 120,
    } } },
    { insertOne: { document: {
        productName: "memoria ssd",
        price: 225000,
        stock: 150,
    } } },
    { insertOne: { document: {
        productName: "memoria usb",
        price: 21500,
        stock: 2000,
    } } }
])