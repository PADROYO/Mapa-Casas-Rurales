const houses = [

    {
        id: 1,
        name: "Casa Rural Astorki Goikoa",
        area: "Bizkaia · zona de Mungia",
        price: 440,
        people: 10,
        rooms: 5,

        lat: 43.354,
        lng: -2.78,

        image: "casas/astorki-goikoa/1.jpg",

        photos: Array.from(
            { length: 23 },
            (_, i) => `casas/astorki-goikoa/${i + 1}.jpg`
        ),

        description: "Alojamiento rural para disfrutar de una escapada en grupo. Añade aquí la descripción, equipamiento y condiciones.",

        features: [
            "Jardín",
            "Cocina equipada"
        ],

        mapsUrl: "https://maps.app.goo.gl/rXNCunCTE8rgQzXi9",

        bookingUrl: "https://www.booking.com/Share-6I7jML"
    },


    {
        id: 2,
        name: "Casa Rural Erreteneko Borda",
        area: "Gipuzkoa · zona de Irun",
        price: 580,
        people: 10,
        rooms: 5,

        lat: 43.302,
        lng: -1.79,

        image: "casas/erreteneko-borda/1.jpg",

        photos: Array.from(
            { length: 21 },
            (_, i) => `casas/erreteneko-borda/${i + 1}.jpg`
        ),

        description: "Casa rural rodeada de naturaleza. Sustituye este texto por los datos reales del alojamiento.",

        features: [
            "Terraza",
            "Barbacoa"
        ],

        mapsUrl: "https://maps.app.goo.gl/skTs6RapQtzYWHAv8",

        bookingUrl: "https://www.booking.com/Share-tRCHDko"
    },


    {
        id: 3,
        name: "Casa Rural Zimitxu",
        area: "Gipuzkoa · interior",
        price: 900,
        people: 12,
        rooms: 6,

        lat: 43.235,
        lng: -1.57,

        image: "casas/zimitxu/1.jpg",

        photos: Array.from(
            { length: 12 },
            (_, i) => `casas/zimitxu/${i + 1}.jpg`
        ),

        description: "Descripción del alojamiento, ubicación, normas y cualquier información útil para el grupo.",

        features: [
            "Jardín",
            "Parking"
        ],

        mapsUrl: "https://maps.app.goo.gl/qsy6VkgKHUYCX7uE7",

        bookingUrl: "https://www.booking.com/Share-WQKCwH8"
    },


    {
        id: 4,
        name: "Casa Rural Garbizaita",
        area: "Gipuzkoa · zona de Oiartzun",
        price: 630,
        people: 10,
        rooms: 5,

        lat: 43.205,
        lng: -1.82,

        image: "casas/garbizaita/1.jpg",

        photos: Array.from(
            { length: 17 },
            (_, i) => `casas/garbizaita/${i + 1}.jpg`
        ),

        description: "Añade aquí los detalles de la casa y lo que incluye el precio.",

        features: [
            "Cocina equipada",
            "Wi-Fi"
        ],

        mapsUrl: "https://maps.app.goo.gl/PzkFoHwtEV1gpeki6",

        bookingUrl: "https://www.booking.com/Share-A8WuEq"
    },


    {
        id: 5,
        name: "Casa Rural Arriaran",
        area: "Gipuzkoa · interior",
        price: 800,
        people: 12,
        rooms: 6,

        lat: 43.084021, 
        lng: -1.888885,

        image: "casas/arriaran/1.jpg",

        photos: Array.from(
            { length: 23 },
            (_, i) => `casas/arriaran/${i + 1}.jpg`
        ),

        description: "Alojamiento para grupos. Completa esta ficha con la información confirmada.",

        features: [
            "Vistas",
            "Jardín"
        ],

        mapsUrl: "https://maps.app.goo.gl/DzKfSaFZN8KoHnjr6",

        bookingUrl: "https://www.booking.com/Share-pvqq14"
    },


    {
        id: 6,
        name: "Casa Rural Erburu",
        area: "Navarra · zona de Sakana",
        price: 720,
        people: 10,
        rooms: 5,

        lat: 42.91,
        lng: -2.02,

        image: "casas/erburu/1.jpg",

        photos: Array.from(
            { length: 16 },
            (_, i) => `casas/erburu/${i + 1}.jpg`
        ),

        description: "Información sobre capacidad, habitaciones, servicios y condiciones de reserva.",

        features: [
            "Barbacoa",
            "Parking"
        ],

        mapsUrl: "https://maps.app.goo.gl/b4cYjnXWaMFBfUnW6",

        bookingUrl: "https://www.booking.com/Share-K5NLs6T"
    },


    {
        id: 7,
        name: "Casa Rural Nabarro I",
        area: "Navarra · zona de Estella",
        price: 669,
        people: 10,
        rooms: 5,

        lat: 42.70,
        lng: -1.95,

        image: "casas/nabarro-i/1.jpg",

        photos: Array.from(
            { length: 18 },
            (_, i) => `casas/nabarro-i/${i + 1}.jpg`
        ),

        description: "Incluye aquí los detalles que os ayuden a comparar las opciones.",

        features: [
            "Jardín",
            "Terraza"
        ],

        mapsUrl: "https://maps.app.goo.gl/CoNgLFCyPXkceUCo7",

        bookingUrl: "https://www.booking.com/Share-UAnY3W"
    },


    {
        id: 8,
        name: "Casa Rural Izargi",
        area: "Navarra · zona de Estella",
        price: 850,
        people: 12,
        rooms: 6,

        lat: 42.61,
        lng: -1.78,

        image: "casas/izargi/1.jpg",

        photos: Array.from(
            { length: 11 },
            (_, i) => `casas/izargi/${i + 1}.jpg`
        ),

        description: "Añade información real del alojamiento, política de cancelación y precio final.",

        features: [
            "Cocina equipada",
            "Barbacoa"
        ],

        mapsUrl: "https://maps.app.goo.gl/mq5t6R36Ds2odNqx9",

        bookingUrl: "https://www.booking.com/Share-tDiQPU"
    },


    {
        id: 9,
        name: "Casa Landa",
        area: "Álava · zona de Miranda",
        price: 700,
        people: 10,
        rooms: 5,

        lat: 42.72,
        lng: -3.10,

        image: "casas/casa-landa/1.jpg",

        photos: Array.from(
            { length: 10 },
            (_, i) => `casas/casa-landa/${i + 1}.jpg`
        ),

        description: "Casa rural para grupos, con espacio común y entorno natural. Edita esta descripción.",

        features: [
            "Jardín",
            "Parking"
        ],

        mapsUrl: "https://maps.app.goo.gl/HrHq7EW3pbBBjww68",

        bookingUrl: "https://www.booking.com/Share-mjnskwz"
    },


    {
        id: 10,
        name: "La casa de las Tinas",
        area: "La Rioja · zona de Haro",
        price: 810,
        people: 10,
        rooms: 5,

        lat: 42.56,
        lng: -2.85,

        image: "casas/casa-tinas/1.jpg",

        photos: Array.from(
            { length: 15 },
            (_, i) => `casas/casa-tinas/${i + 1}.jpg`
        ),

        description: "Añade los servicios incluidos, la distancia y las condiciones relevantes.",

        features: [
            "Terraza",
            "Cocina equipada"
        ],

        mapsUrl: "https://maps.app.goo.gl/yHNvyWFSrdWktgkS7",

        bookingUrl: "https://www.booking.com/Share-O6obdF"
    },


    {
        id: 11,
        name: "Casa Rural Baratza",
        area: "Burgos · zona de Oña",
        price: 761,
        people: 8,
        rooms: 4,

        lat: 42.74,
        lng: -3.41,

        image: "casas/baratza/1.jpg",

        photos: Array.from(
            { length: 16 },
            (_, i) => `casas/baratza/${i + 1}.jpg`
        ),

        description: "Completa esta ficha con los datos de la casa y el enlace donde se puede reservar.",

        features: [
            "Entorno rural",
            "Cocina"
        ],

        mapsUrl: "https://maps.app.goo.gl/YYTxvJod2kffpt8T7",

        bookingUrl: "https://www.booking.com/Share-2HXV7Y0"
    },


    {
        id: 12,
        name: "Casa Rural Enarakabi",
        area: "Navarra · zona de Pamplona",
        price: 900,
        people: 12,
        rooms: 6,

        lat: 42.78,
        lng: -1.55,

        image: "casas/enarakabi/1.jpg",

        photos: Array.from(
            { length: 19 },
            (_, i) => `casas/enarakabi/${i + 1}.jpg`
        ),

        description: "Indica aquí las condiciones, servicios, capacidad y precio total.",

        features: [
            "Jardín",
            "Barbacoa"
        ],

        mapsUrl: "https://maps.app.goo.gl/P8ZFS5agiHNqVJLV9",

        bookingUrl: "https://www.booking.com/Share-Mh4x5w"
    },


    {
        id: 13,
        name: "Casa Rural Valle Ulzama",
        area: "Navarra · zona de Pamplona",
        price: 800,
        people: 12,
        rooms: 6,

        lat: 0,
        lng: 0,

        image: "casas/valle-ulzama/1.jpg",

        photos: Array.from(
            { length: 16 },
            (_, i) => `casas/astorki-goikoa/${i + 1}.jpg`
        ),

        description: "Alojamiento rural para disfrutar de una escapada en grupo. Añade aquí la descripción, equipamiento y condiciones.",

        features: [
            "Jardín",
            "Cocina equipada",
            "Piscina"
        ],

        mapsUrl: "https://maps.app.goo.gl/41Rom2G6uEFVmRLo8",

        bookingUrl: "https://www.booking.com/Share-nwCbZD"
    },


    {
        id: 14,
        name: "Casa Rural Arotzenia",
        area: "Navarra · zona de Pamplona",
        price: 800,
        people: 12,
        rooms: 4,

        lat: 0,
        lng: 0,

        image: "casas/arotzenia/1.jpg",

        photos: Array.from(
            { length: 18 },
            (_, i) => `casas/astorki-goikoa/${i + 1}.jpg`
        ),

        description: "Alojamiento rural para disfrutar de una escapada en grupo. Añade aquí la descripción, equipamiento y condiciones.",

        features: [
            "Jardín",
            "Cocina equipada",
            "Piscina"
        ],

        mapsUrl: "https://maps.app.goo.gl/7QAuaa2QNC19VuqH9",

        bookingUrl: "https://www.booking.com/Share-29F18v"
    },


    {
        id: 14,
        name: "Casa Rural Balentzenea",
        area: "Gipuzkoa · zona de Irun",
        price: 630,
        people: 10,
        rooms: 4,

        lat: 0,
        lng: 0,

        image: "casas/balentzenea/1.jpg",

        photos: Array.from(
            { length: 20 },
            (_, i) => `casas/astorki-goikoa/${i + 1}.jpg`
        ),

        description: "Alojamiento rural para disfrutar de una escapada en grupo. Añade aquí la descripción, equipamiento y condiciones.",

        features: [
            "Cocina equipada"
        ],

        mapsUrl: "https://maps.app.goo.gl/e5KCJujtWTNWqFZdA",

        bookingUrl: "https://www.booking.com/Share-ObYrTb"
    },
];