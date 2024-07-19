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

let commonPayments = [
    {type: "Debito", currency: "ARS"},
    {type: "Credito", currency: "ARS"},
    {type: "Debito", currency: "USD"},
    {type: "Credito", currency: "USD"},
    {type: "Debito", currency: "EUR"},
    {type: "Credito", currency: "EUR"},
];
let commonPensions = [
    { type: "todo incluido", currency: "ARS" },
    { type: "todo incluido", currency: "USD" },
    { type: "todo incluido", currency: "EUR"},
    { type: "completa", currency: "ARS" },
    { type: "completa", currency: "USD" },
    { type: "completa", currency: "EUR"},
    { type: "media pension", currency: "ARS" },
    { type: "media pension", currency: "USD" },
    { type: "media pension", currency: "EUR"},
]

let ref = {
    name: "",
    package: {
        days: 0,
        nights: 0,
        activities: ["dormir", "comer", "amar"],
        transportation: ["avion", "barco"],
        cost: 0.0000,
        currency: "USD"
    },
    lodging: {
        name: "hotel trivago",
        address: {
            street: "falsa",
            number: "123",
            city: "algun",
            zipcode: "A103",
        },
        pension: commonPensions,
    },
    location: {
        city: "",
        country: "",
        region: "",
        coords: {
            latitude: -0.00,
            longitude: 0.00
        }
    },
    travelDate: ISODate("2024-08-01"),
    payment: commonPayments
}

let destinations = [
    {
        name: "acapulco",
        location: {country: "mexico", region: "norteamerica"},
    },
    {
        name: "bariloche",
        location: {country: "argentina", region: "sudamerica"},
    },
    {
        name: "machu pichu",
        location: {country: "peru", region: "sudamerica"},
    },
    {
        name: "paris",
        location: {country: "francia", region: "europa"},
    },
    {
        name: "mikonos",
        location: {country: "grecia", region: "europa"},
    }
]

destinations.forEach( d => {
    const current = {...ref, ...d};
    db.destinations.insertOne(current);
})