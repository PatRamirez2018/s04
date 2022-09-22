employee
    [
    /* 1 */
        {
            "_id" : ObjectId("632bffda31d19c7d7a2594ce"),
            "id" : "202201",
            "name" : "Harold Cruz",
            "age" : 22,
            "jobRole" : "Store Manager",
            "salary" : "50000"
        },

        /* 2 */
        {
            "_id" : ObjectId("632bffe931d19c7d7a2594db"),
            "id" : "202202",
            "name" : "Himiko Koyanagi",
            "age" : 22,
            "jobRole" : "Store Associate",
            "salary" : "40000"
        },

        /* 3 */
        {
            "_id" : ObjectId("632bfff331d19c7d7a2594de"),
            "id" : "202203",
            "name" : "James Arthur",
            "age" : 27,
            "jobRole" : "Cashier",
            "salary" : "38000"
        },

        /* 4 */
        {
            "_id" : ObjectId("632bfffe31d19c7d7a2594e3"),
            "id" : "202204",
            "name" : "Kasandra Park",
            "age" : 42,
            "jobRole" : "45000",
            "salary" : "72500"
        },

        /* 5 */
        {
            "_id" : ObjectId("632c000b31d19c7d7a2594e6"),
            "id" : "202205",
            "name" : "Jam Rosario",
            "age" : 25,
            "jobRole" : "Store Associate",
            "salary" : "32000"
        }
    ],

inventory [
    /* 1 */
    {
        "_id" : ObjectId("632c028e31d19c7d7a259514"),
        "id" : "2022201",
        "name" : "Potato chips - 15 grams",
        "price" : "7",
        "quantity" : "10000",
        "category" : [ 
            "chips", 
            "potato"
        ]
    },

    /* 2 */
    {
        "_id" : ObjectId("632c02a131d19c7d7a259523"),
        "id" : "2022202",
        "name" : "Coke - 15 ml",
        "price" : "15",
        "quantity" : "20000",
        "category" : [ 
            "Soda", 
            "Sugary Drink"
        ]
    },

    /* 3 */
    {
        "_id" : ObjectId("632c02ab31d19c7d7a259526"),
        "id" : "2022203",
        "name" : "Beef Noodles - 6 packs",
        "price" : "40",
        "quantity" : "15000",
        "category" : [ 
            "Noodle", 
            "Beef flavor"
        ]
    },

    /* 4 */
    {
        "_id" : ObjectId("632c02b631d19c7d7a259529"),
        "id" : "2022204",
        "name" : "Canned Tuna",
        "price" : "20.5",
        "quantity" : "30000",
        "category" : [ 
            "Tuna", 
            "Fish meat"
        ]
    },

    /* 5 */
    {
        "_id" : ObjectId("632c02c031d19c7d7a25952c"),
        "id" : "2022205",
        "name" : "Canned mackerel",
        "price" : "22.5",
        "quantity" : "30000",
        "category" : [ 
            "Fish", 
            "Fish meat"
        ]
    },

    /* 6 */
    {
        "_id" : ObjectId("632c02ca31d19c7d7a25952f"),
        "id" : "2022206",
        "name" : "Chicken cubes",
        "price" : "6.75",
        "quantity" : "10000",
        "category" : [ 
            "Chicken seasoning", 
            "Broth"
        ]
    },

    /* 7 */
    {
        "_id" : ObjectId("632c02d431d19c7d7a259534"),
        "id" : "2022207",
        "name" : "Chili",
        "price" : "3.5",
        "quantity" : "12000",
        "category" : [ 
            "Spice", 
            "healthy"
        ]
    },

    /* 8 */
    {
        "_id" : ObjectId("632c02df31d19c7d7a259537"),
        "id" : "2022208",
        "name" : "Bottled Water",
        "price" : "10",
        "quantity" : "50000",
        "category" : [ 
            "water", 
            "healthy"
        ]
    }
],

Payment 
[
    /* 1 */
    {
        "_id" : ObjectId("632c0e7e31d19c7d7a259646"),
        "id" : "2022101",
        "grossAmount" : "110.50",
        "discounts" : "20",
        "netAmount" : "93.5",
        "date/time" : "2022-01-01T16:00:00Z"
    },

    /* 2 */
    {
        "_id" : ObjectId("632c0e8a31d19c7d7a25964b"),
        "id" : "2022102",
        "grossAmount" : "50.5",
        "discounts" : "10",
        "netAmount" : "45.25",
        "date/time" : "2022-01-01T16:15:55Z"
    },

    /* 3 */
    {
        "_id" : ObjectId("632c0e9431d19c7d7a25964e"),
        "id" : "2022103",
        "grossAmount" : "160.50",
        "discounts" : "15.5",
        "netAmount" : "140",
        "date/time" : "2022-01-01T16:31:08Z"
    },

    /* 4 */
    {
        "_id" : ObjectId("632c0e9f31d19c7d7a259651"),
        "id" : "2022104",
        "grossAmount" : "40",
        "discounts" : "5",
        "netAmount" : "25",
        "date/time" : "2022-01-01T20:25:52Z"
    },

    /* 5 */
    {
        "_id" : ObjectId("632c0eab31d19c7d7a259659"),
        "id" : "2022105",
        "grossAmount" : "100.5",
        "discounts" : "5",
        "netAmount" : "90",
        "date/time" : "2022-01-01T08:45:12Z"
    },

    /* 6 */
    {
        "_id" : ObjectId("632c0eb731d19c7d7a25965c"),
        "id" : "2022106",
        "grossAmount" : "55",
        "discounts" : "15.5",
        "netAmount" : "13",
        "date/time" : "2022-01-01T11:02:35Z"
    }
],

StorePromo 
[
    /* 1 */
    {
        "_id" : ObjectId("632c0ff031d19c7d7a25968f"),
        "id" : "PROMO01",
        "name" : "Pro Sales",
        "period" : 8,
        "dailySales" : "10, 40, 26, 30, 25, 20, 55"
    },

    /* 2 */
    {
        "_id" : ObjectId("632c0ffb31d19c7d7a25969c"),
        "id" : "PROMO02",
        "name" : "Winter sale",
        "period" : 4,
        "dailySales" : "200, 400"
    },

    /* 3 */
    {
        "_id" : ObjectId("632c14ef31d19c7d7a259756"),
        "id" : "PROMO03",
        "name" : "Canned Promo",
        "period" : 4,
        "dailySales" : "110, 220"
    },

    /* 4 */
    {
        "_id" : ObjectId("632c14fa31d19c7d7a259759"),
        "id" : "PROMO04",
        "name" : "Holiday Promo",
        "period" : 7,
        "dailySales" : "50, 68, 98, 120, 80, 250, 300"
    }
]