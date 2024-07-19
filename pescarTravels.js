// Creacion y seleccion de Base de Datos
use pescarTravels;
// Definicion de la coleccion Destinos
db.createCollection("destinations", {
    validator: {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "location", "payment"],
        properties: {
            name: { bsonType: "string" },
            package: {
                bsonType: "object",
                properties: {
                    days: { bsonType: "number" },
                    nights: { bsonType: "number" },
                    activities: {
                        bsonType: "array",
                        items: { bsonType: "string" }
                },
                transportation: { bsonType: "string" },
                cost: { bsonType: "decimal" },
                currency: { bsonType: "string" }
            } },
            lodging: {
                bsonType: ["array", "object"],
                items: {
                    bsonType: "object",
                    properties: {
                    name: { bsonType: "string" },
                    address: {
                        bsonType: "object",
                        properties: {
                            street: { bsonType: "string" },
                            number: { bsonType: "number" },
                            city: { bsonType: "string" },
                            zipcode: { bsonType: "number" }
                    } },
                    pension: {
                        bsonType: ["array", "object"],
                        items: {
                            bsonType: "object",
                            properties: {
                                type: { bsonType: "string" },
                                cost: { bsonType: "decimal" },
                                currency: { bsonType: "string" }
                    } } }
            } } },
            location: {
                bsonType: "object",
                required: ["country", "city"],
                properties: {
                city: { bsonType: "string" },
                country: { bsonType: "string" },
                region: { bsonType: "string" },
                coords: {
                    bsonType: "object",
                    properties: {
                        latitude: { bsonType: "number" },
                        longitude: { bsonType: "number" }
                } } }
            },
            travelDate: { 
                bsonType: ["array", "date"],
                items: { bsonType: "date" }
            },
            payment: {
                bsonType: ["array", "object"],
                items: {
                    bsonType: "object",
                    properties: {
                        type: { bsonType: "string" },
                        currency: { bsonType: "string" }
            } } }
        }
    }}
});
// Indices de la Coleccion Destinos
db.destinations.createIndex({name:1},{unique:true});
db.destinations.createIndex({"lodging.pension.type":1});
db.destinations.createIndex({"location.country":1, "location.city":1});
db.destinations.createIndex({"payment.type":1,"payment.currency":-1});
db.destinations.createIndex({"package.cost":1,"lodging.pension.cost":1});

