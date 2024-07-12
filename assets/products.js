db.productos.insertMany([
    {
        name: "Monitor 27",
        categories: [
            "tecnologia",
            "informatica",
            "computacion",
            "perifericos", 
            "hardware"
        ],
        price: 51999.99,
        stock: 20,
        company: "LG",
    },
    {
        name: "Escritorio",
        categories: [
            "muebles",
            "hogar",
            "oficina",
            "gamming"
        ],
        price: 90000.00,
        stock: 100,
        company: "Easy",
    },
    {
        name: "Impresora Sistema Continuo",
        categories:  [
            "tecnologia",
            "informatica",
            "computacion",
            "perifericos", 
            "hardware",
            "impresion",
            "oficina"
        ],
        price: 45500.00,
        stock: 35,
        company: "HP",
    },
    {
        name: "Aceleradora Grafica",
        categories:  [
            "tecnologia",
            "informatica",
            "computacion",
            "perifericos", 
            "hardware",
            "gamming",
            "streaming"
        ],
        price: 1300000.00,
        stock: 30,
        company: "Nvidia",
    }
])