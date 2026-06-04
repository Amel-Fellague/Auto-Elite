const cars = [
    {
        id: 1,
        name: "Mercedes-Benz S 580",
        category: "Berline",
        price: 135000,
        image: "../images/Mercedes-Benz_S_580.jpg",
        description: "La référence ultime des berlines de luxe",
        annee: "2022",
        etat: "Neuf",
        couleur: "Blanche"
    },
    {
        id: 2,
        name: "BMW Serie 7 760i",
        category: "Berline",
        price: 145000,
        image: "../images/BMW_Série_7_760i﻿.jpg",
        description: "Puissance et raffinement allemand",
        annee: "2020",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 3,
        name: "Audi A8 60 TFSI",
        category: "Berline",
        price: 115000,
        image: "../images/Audi_A8_60_TFSI.jpg",
        description: "Technologie Matrix LED et confort exceptionnel",
        annee: "2024",
        etat: "Neuf",
        couleur: "Bleu nuit"
    },
    {
        id: 4,
        name: "Mercedes-Maybach S 680",
        category: "Berline",
        price: 250000,
        image: "../images/Mercedes-Maybach_S_680.jpg",
        description: "Le summum du luxe ultra-premium",
        annee: "2023",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 5,
        name: "Rolls-Royce Ghost",
        category: "Berline",
        price: 320000,
        image: "../images/Rolls-Royce_Ghost.jpg",
        description: "Luxe absolu et silence légendaire",
        annee: "2022",
        etat: "Neuf",
        couleur: "Blanche"
    },
    {
        id: 6,
        name: "Bentley Flying Spur",
        category: "Berline",
        price: 220000,
        image: "../images/Bentley_Flying_Spur.jpg",
        description: "Grand tourisme britannique raffiné",
        annee: "2022",
        etat: "Neuf",
        couleur: "Blanche"
    },
    {
        id: 7,
        name: "Porsche Panamera Turbo S",
        category: "Berline",
        price: 195000,
        image: "../images/Porsche_Panamera_Turbo_S.jpg",
        description: "Sportive et luxueuse à la fois",
        annee: "2023",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 8,
        name: "BMW i7 M70",
        category: "Electrique",
        price: 165000,
        image: "../images/BMW_i7_M70.jpg",
        description: "La berline électrique la plus puissante de BMW",
        annee: "2023",
        etat: "Neuf",
        couleur: "Maron"
    },
    {
        id: 9,
        name: "Mercedes EQS 450+",
        category: "Electrique",
        price: 115000,
        image: "../images/Mercedes_EQS_450+.jpg",
        description: "Berline électrique futuriste avec Hyperscreen",
        annee: "2022",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 11,
        name: "Audi A8 L Horch",
        category: "Berline",
        price: 180000,
        image: "../images/Audi_A8_L_Horch.jpg",
        description: "Version ultra-luxe chinoise exclusive",
        annee: "2023",
        etat: "Neuf",
        couleur: "vert"
    },
    {
        id: 12,
        name: "Genesis G90",
        category: "Berline",
        price: 95000,
        image: "../images/Genesis_G90.jpg",
        description: "Luxe coréen à prix compétitif",
        annee: "2024",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 13,
        name: "Maserati Quattroporte Trofeo",
        category: "Berline",
        price: 165000,
        image: "../images/Maserati_Quattroporte_Trofeo.jpg",
        description: "Élégance italienne et sonorité unique",
        annee: "2022",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 14,
        name: "Lexus LS 500h",
        category: "Berline",
        price: 115000,
        image: "../images/Lexus_LS_500h.jpg",
        description: "Confort japonais et hybridation raffinée",
        annee: "2023",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 15,
        name: "Cadillac Celestiq",
        category: "Berline",
        price: 340000,
        image: "../images/Cadillac_Celestiq.jpg",
        description: "Ultra-luxe américain fait main",
        annee: "2022",
        etat: "Neuf",
        couleur: "Maron"
    },
    {
        id: 16,
        name: "BMW Série 5 540i",
        category: "Berline",
        price: 75000,
        image: "../images/BMW_Série_5_540i.jpg",
        description: "Berline premium dynamique",
        annee: "2024",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 17,
        name: "Mercedes E 450 4MATIC",
        category: "Berline",
        price: 85000,
        image: "../images/Mercedes_E_450_4MATIC.jpg",
        description: "Élégance et polyvalence",
        annee: "2023",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 18,
        name: "Audi S8",
        category: "Berline",
        price: 135000,
        image: "../images/Audi_S8.jpg",
        description: "Berline sportive discrète",
        annee: "2024",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 19,
        name: "Rolls-Royce Phantom VIII",
        category: "Berline",
        price: 550000,
        image: "../images/Rolls-Royce_Phantom_VIII.jpg",
        description: "Le roi du luxe automobile",
        annee: "2025",
        etat: "Neuf",
        couleur: "GRIS"
    },
    {
        id: 20,
        name: "Bentley Mulsanne (occasion récente)",
        category: "Berline",
        price: 280000,
        image: "../images/Bentley_Mulsanne.jpg",
        description: "Puissance et opulence",
        annee: "2023",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 21,
        name: "Porsche Taycan Turbo GT",
        category: "Electrique",
        price: 240000,
        image: "../images/Porsche_Taycan_Turbo_GT.jpg",
        description: "Berline électrique la plus sportive",
        annee: "2024",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 22,
        name: "Mercedes-AMG GT 63 S E Performance",
        category: "Berline",
        price: 180000,
        image: "../images/Mercedes-AMG_GT_63_S_E_Performance.jpg",
        description: "Hybride rechargeable performant",
        annee: "2023",
        etat: "Neuf",
        couleur: "Rouge"
    },
    {
        id: 23,
        name: "BMW M760e",
        category: "Berline",
        price: 155000,
        image: "../images/BMW_M7_60e.jpg",
        description: "Puissance hybride",
        annee: "2025",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 24,
        name: "Audi RS e-tron GT",
        category: "Electrique",
        price: 150000,
        image: "../images/Audi_RS_e-tron_GT.jpg",
        description: "Sportive électrique élégante",
        annee: "2025",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 25,
        name: "Lucid Air Grand Touring",
        category: "Electrique",
        price: 135000,
        image: "../images/Lucid_Air_Grand_Touring.jpg",
        description: "Autonomie exceptionnelle et luxe minimaliste",
        annee: "2023",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 26,
        name: "Range Rover Autobiography",
        category: "SUV",
        price: 180000,
        image: "../images/Range_Rover_Autobiography.jpg",
        description: "Le SUV de luxe par excellence",
        annee: "2024",
        etat: "Neuf",
        couleur: "Maron"
    },
    {
        id: 27,
        name: "Mercedes GLS 600 Maybach",
        category: "SUV",
        price: 220000,
        image: "../images/Mercedes_GLS_600_Maybach.jpg",
        description: "SUV ultra-luxe spacieux",
        annee: "2023",
        etat: "Neuf",
        couleur: "Vert"
    },
    {
        id: 28,
        name: "BMW X7 M60i",
        category: "SUV",
        price: 145000,
        image: "../images/BMW_X7_M60i.jpg",
        description: "Puissance et présence imposante",
        annee: "2024",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 29,
        name: "Audi Q8 55 TFSI",
        category: "SUV",
        price: 105000,
        image: "../images/Audi_Q8_55_TFSI.jpg",
        description: "SUV coupé premium",
        annee: "2025",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 30,
        name: "Porsche Cayenne Turbo GT",
        category: "SUV",
        price: 195000,
        image: "../images/Porsche_Cayenne_Turbo_GT.jpg",
        description: "Le SUV le plus sportif",
        annee: "2026",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 31,
        name: "Bentley Bentayga S",
        category: "SUV",
        price: 230000,
        image: "../images/Bentley_Bentayga_S.jpg",
        description: "Luxe et performances britanniques",
        annee: "2023",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 32,
        name: "Rolls-Royce Cullinan",
        category: "SUV",
        price: 380000,
        image: "../images/Rolls-Royce_Cullinan.jpg",
        description: "Le SUV le plus luxueux du monde",
        annee: "2023",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 33,
        name: "Mercedes G 500",
        category: "SUV",
        price: 165000,
        image: "../images/Mercedes_G_500.jpg",
        description: "Icône intemporelle",
        annee: "2025",
        etat: "Neuf",
        couleur: "Bleu"
    },
    {
        id: 34,
        name: "Lamborghini Urus Performante",
        category: "SUV",
        price: 280000,
        image: "../images/Lamborghini_Urus_Performante.jpg",
        description: "SUV supersportif",
        annee: "2026",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 35,
        name: "Ferrari Purosangue",
        category: "SUV",
        price: 390000,
        image: "../images/Ferrari_Purosangue.jpg",
        description: "Le premier SUV Ferrari",
        annee: "2024",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 36,
        name: "Aston Martin DBX707",
        category: "SUV",
        price: 220000,
        image: "../images/Aston_Martin_DBX707.jpg",
        description: "SUV britannique ultra-performant",
        annee: "2022",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 37,
        name: "Maserati Levante Trofeo",
        category: "SUV",
        price: 160000,
        image: "../images/Maserati_Levante_Trofeo.jpg",
        description: "Élégance et sportivité italienne",
        annee: "2023",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 38,
        name: "BMW iX M60",
        category: "Electrique",
        price: 135000,
        image: "../images/BMW_iX_M60.jpg",
        description: "SUV électrique premium",
        annee: "2026",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 39,
        name: "Mercedes EQS SUV",
        category: "Electrique",
        price: 130000,
        image: "../images/Mercedes_EQS_SUV.jpg",
        description: "SUV électrique spacieux et silencieux",
        annee: "2024",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 40,
        name: "Audi Q8 e-tron",
        category: "Electrique",
        price: 95000,
        image: "../images/Audi_Q8_e-tron.jpg",
        description: "SUV électrique raffiné",
        annee: "2025",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 41,
        name: "Porsche Macan Electric",
        category: "Electrique",
        price: 95000,
        image: "../images/Porsche_Macan_Electric.jpg",
        description: "SUV compact électrique sportif",
        annee: "2024",
        etat: "Neuf",
        couleur: "Vert"
    },
    {
        id: 42,
        name: "Lotus Eletre",
        category: "Electrique",
        price: 110000,
        image: "../images/Lotus_Eletre.jpg",
        description: "SUV électrique hyper performant",
        annee: "2026",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 43,
        name: "Volvo EX90",
        category: "Electrique",
        price: 105000,
        image: "../images/Volvo_EX90.jpg",
        description: "SUV électrique sécuritaire et luxueux",
        annee: "2024",
        etat: "Neuf",
        couleur: "Maron"
    },
    {
        id: 44,
        name: "Genesis GV80",
        category: "SUV",
        price: 85000,
        image: "../images/Genesis_GV80.jpg",
        description: "SUV coréen haut de gamme",
        annee: "2024",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 45,
        name: "Land Rover Defender 130 V8",
        category: "SUV",
        price: 130000,
        image: "../images/Land_Rover_Defender_130 _V8.jpg",
        description: "Aventure de luxe",
        annee: "2025",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 46,
        name: "Jeep Grand Wagoneer",
        category: "SUV",
        price: 120000,
        image: "../images/Jeep_Grand_Wagoneer.jpg",
        description: "Luxe américain robuste",
        annee: "2025",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 47,
        name: "Cadillac Escalade V",
        category: "SUV",
        price: 170000,
        image: "../images/Cadillac_Escalade_V.jpg",
        description: "Puissance américaine démesurée",
        annee: "2026",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 48,
        name: "Volkswagen Touareg R eHybrid",
        category: "SUV",
        price: 110000,
        image: "../images/Volkswagen_Touareg_R_eHybrid.jpg",
        description: "SUV allemand hybride rechargeable puissant et confortable",
        annee: "2024",
        etat: "Neuf",
        couleur: "Bleu"
    },
    {
        id: 49,
        name: "Range Rover Sport SV",
        category: "SUV",
        price: 160000,
        image: "../images/Range_Rover_Sport_SV.jpg",
        description: "Version sportive du Range Rover",
        annee: "2025",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 50,
        name: "Mercedes GLE 450",
        category: "SUV",
        price: 95000,
        image: "../images/Mercedes_GLE_450.jpg",
        description: "SUV polyvalent premium",
        annee: "2026",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 51,
        name: "BMW X5 M Competition",
        category: "SUV",
        price: 140000,
        image: "../images/BMW_X5_M_Competition.jpg",
        description: "SUV haute performance",
        annee: "2026",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 52,
        name: "Audi SQ7",
        category: "SUV",
        price: 115000,
        image: "../images/Audi_SQ7.jpg",
        description: "SUV 7 places puissant",
        annee: "2024",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 53,
        name: "Porsche Cayenne E-Hybrid",
        category: "SUV",
        price: 130000,
        image: "../images/Porsche_Cayenne_E-Hybrid.jpg",
        description: "SUV hybride rechargeable",
        annee: "2025",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 54,
        name: "Bentley Bentayga Hybrid",
        category: "SUV",
        price: 210000,
        image: "../images/Bentley_Bentayga_Hybrid.jpg",
        description: "Luxe hybride",
        annee: "2014",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 55,
        name: "Rolls-Royce Spectre",
        category: "Electrique",
        price: 420000,
        image: "../images/Rolls-Royce_Spectre.jpg",
        description: "Coupé électrique ultra-luxe (SUV-like)",
        annee: "2025",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 56,
        name: "Porsche 911 Turbo S",
        category: "Sportive",
        price: 210000,
        image: "../images/Porsche_911_Turbo_S.jpg",
        description: "Icône intemporelle",
        annee: "2026",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 57,
        name: "Ferrari 296 GTB",
        category: "Sportive",
        price: 320000,
        image: "../images/Ferrari_296_GTB.jpg",
        description: "Hybride V6 sensationnelle",
        annee: "2025",
        etat: "Neuf",
        couleur: "Rouge"
    },
    {
        id: 58,
        name: "Lamborghini Huracán Tecnica",
        category: "Sportive",
        price: 280000,
        image: "../images/Lamborghini_Huracán_Tecnica.jpg",
        description: "Design et sonorité extrêmes",
        annee: "2023",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 59,
        name: "McLaren 750S",
        category: "Sportive",
        price: 280000,
        image: "../images/McLaren_750S.jpg",
        description: "Légèreté et performances pures",
        annee: "2026",
        etat: "Neuf",
        couleur: "Rouge"
    },
    {
        id: 60,
        name: "Aston Martin Vantage",
        category: "Sportive",
        price: 160000,
        image: "../images/Aston_Martin_Vantage.jpg",
        description: "Élégance britannique",
        annee: "2025",
        etat: "Neuf",
        couleur: "Bleu"
    },
    {
        id: 61,
        name: "Mercedes-AMG GT 63",
        category: "Sportive",
        price: 180000,
        image: "../images/Mercedes-AMG_GT_63.jpg",
        description: "Grand tourer puissant",
        annee: "2025",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 62,
        name: "BMW M8 Competition",
        category: "Sportive",
        price: 170000,
        image: "../images/BMW_M8_Competition.jpg",
        description: "Puissance bavaroise",
        annee: "2026",
        etat: "Neuf",
        couleur: "Maron"
    },
    {
        id: 63,
        name: "Audi RS7 Sportback",
        category: "Sportive",
        price: 135000,
        image: "../images/Audi_RS7_Sportback.jpg",
        description: "Sportive discrète",
        annee: "2024",
        etat: "Neuf",
        couleur: "Bleu"
    },
    {
        id: 64,
        name: "Maserati MC20",
        category: "Sportive",
        price: 230000,
        image: "../images/Maserati_MC20.jpg",
        description: "Supercar italienne légère",
        annee: "2026",
        etat: "Neuf",
        couleur: "Rouge"
    },
    {
        id: 65,
        name: "Lotus Emira V6",
        category: "Sportive",
        price: 95000,
        image: "../images/Lotus_Emira_V6.jpg",
        description: "La dernière Lotus thermique, pureté de conduite et légèreté",
        annee: "2025",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 66,
        name: "Alpine A110",
        category: "Sportive",
        price: 75000,
        image: "../images/Alpine_A110.jpg",
        description: "Sportive française légère",
        annee: "2024",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 67,
        name: "Porsche 718 Cayman GT4 RS",
        category: "Sportive",
        price: 140000,
        image: "../images/Porsche_718_Cayman_GT4_RS.jpg",
        description: "Plaisir de conduite pur",
        annee: "2025",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 68,
        name: "Ferrari Roma",
        category: "Sportive",
        price: 220000,
        image: "../images/Ferrari_Roma.jpg",
        description: "GT élégante",
        annee: "2025",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 69,
        name: "Bentley Continental GT Speed",
        category: "Sportive",
        price: 250000,
        image: "../images/Bentley_Continental_GT_Speed.jpg",
        description: "GT de luxe ultime",
        annee: "2025",
        etat: "Neuf",
        couleur: "Rouge"
    },
    {
        id: 70,
        name: "Aston Martin DB12",
        category: "Sportive",
        price: 230000,
        image: "../images/Aston_Martin_DB12.jpg",
        description: "Nouveau grand tourer",
        annee: "2024",
        etat: "Neuf",
        couleur: "Bleu"
    },
    {
        id: 71,
        name: "Maserati GranTurismo Folgore",
        category: "Electrique",
        price: 200000,
        image: "../images/Maserati_GranTurismo_Folgore.jpg",
        description: "GT électrique",
        annee: "2025",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 72,
        name: "Porsche Taycan Turbo S",
        category: "Electrique",
        price: 200000,
        image: "../images/Porsche_Taycan_Turbo_S.jpg",
        description: "Sportive électrique",
        annee: "2025",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 73,
        name: "Rimac Nevera",
        category: "Electrique",
        price: 2000000,
        image: "../images/Rimac_Nevera.jpg",
        description: "Hypercar électrique la plus rapide du monde (1914 ch)",
        annee: "2023",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 74,
        name: "Tesla Model 3 Performance",
        category: "Electrique",
        price: 60000,
        image: "../images/Tesla_Model_3_Performance.jpg",
        description: "Berline électrique sportive au meilleur rapport prix/puissance",
        annee: "2024",
        etat: "Neuf",
        couleur: "Rouge"
    },
    {
        id: 75,
        name: "Tesla Model S Plaid",
        category: "Electrique",
        price: 95000,
        image: "../images/Tesla_Model_S_Plaid.jpg",
        description: "Accélérations folles",
        annee: "2023",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 76,
        name: "BMW M5 CS",
        category: "Sportive",
        price: 145000,
        image: "../images/BMW_M5_CS.jpg",
        description: "Berline sportive ultime",
        annee: "2025",
        etat: "Neuf",
        couleur: "Vert"
    },
    {
        id: 77,
        name: "Mercedes-AMG E 63 S",
        category: "Sportive",
        price: 160000,
        image: "../images/Mercedes-AMG_E_63_S.jpg",
        description: "Berline muscle allemande",
        annee: "2025",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 78,
        name: "Audi RS6 Avant",
        category: "Sportive",
        price: 130000,
        image: "../images/Audi_RS6_Avant.jpg",
        description: "Break familial ultra-performant",
        annee: "2026",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 79,
        name: "Ferrari SF90 Stradale",
        category: "Sportive",
        price: 450000,
        image: "../images/Ferrari_SF90_Stradale.jpg",
        description: "Hybride rechargeable",
        annee: "2026",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 80,
        name: "Lamborghini Revuelto",
        category: "Sportive",
        price: 600000,
        image: "../images/Lamborghini_Revuelto.jpg",
        description: "V12 hybride nouvelle génération",
        annee: "2023",
        etat: "Neuf",
        couleur: "Jaune"
    },
    {
        id: 81,
        name: "Rolls-Royce Phantom",
        category: "Berline",
        price: 550000,
        image: "../images/Rolls-Royce_Phantom_VIII.jpg",
        description: "Le meilleur du monde",
        annee: "2024",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 83,
        name: "Bentley Bacalar",
        category: "Sportive",
        price: 1800000,
        image: "../images/Bentley_Bacalar.jpg",
        description: "Barchetta ultra-rares",
        annee: "2026",
        etat: "Neuf",
        couleur: "Rouge"
    },
    {
        id: 84,
        name: "Bugatti Tourbillon",
        category: "Sportive",
        price: 4000000,
        image: "../images/Bugatti_Tourbillon.jpg",
        description: "Hypercar nouvelle génération",
        annee: "2024",
        etat: "Neuf",
        couleur: "Bleu"
    },
    {
        id: 85,
        name: "Koenigsegg Gemera",
        category: "Sportive",
        price: 1800000,
        image: "../images/Koenigsegg_Gemera.jpg",
        description: "Hypercar 4 places",
        annee: "2025",
        etat: "Neuf",
        couleur: "Vert"
    },
    {
        id: 86,
        name: "Pagani Huayra",
        category: "Sportive",
        price: 3000000,
        image: "../images/Pagani_Huayra.jpg",
        description: "Art automobile",
        annee: "2025",
        etat: "Neuf",
        couleur: "Bleu"
    },
    {
        id: 87,
        name: "BMW XM Label Red",
        category: "SUV",
        price: 185000,
        image: "../images/BMW_XM_Label_Red.jpg",
        description: "SUV hybride haute performance le plus puissant de BMW",
        annee: "2026",
        etat: "Neuf",
        couleur: "Noir"
    },
    {
        id: 88,
        name: "Aston Martin Valhalla",
        category: "Sportive",
        price: 800000,
        image: "../images/Aston_Martin_Valhalla.jpg",
        description: "Hypercar hybride",
        annee: "2026",
        etat: "Neuf",
        couleur: "Vert"
    },
    {
        id: 89,
        name: "Mercedes-Maybach GLS 600",
        category: "SUV",
        price: 220000,
        image: "../images/Mercedes-Maybach_GLS_600.jpg",
        description: "Luxe extrême en SUV",
        annee: "2025",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 90,
        name: "Bentley Flying Spur Mulliner",
        category: "Berline",
        price: 280000,
        image: "../images/Bentley_Flying_Spur_Mulliner.jpg",
        description: "Personnalisation extrême",
        annee: "2025",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 91,
        name: "NIO ET9",
        category: "Electrique",
        price: 120000,
        image: "../images/NIO_ET9.jpg",
        description: "Berline électrique chinoise ultra-premium avec charge par batterie swap",
        annee: "2025",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 92,
        name: "Lucid Gravity",
        category: "Electrique",
        price: 110000,
        image: "../images/Lucid_Gravity.jpg",
        description: "SUV électrique luxueux",
        annee: "2025",
        etat: "Neuf",
        couleur: "Gris"
    },
    {
        id: 93,
        name: "Rivian R1S",
        category: "Electrique",
        price: 95000,
        image: "../images/Rivian_R1S.jpg",
        description: "SUV électrique aventureux premium",
        annee: "2024",
        etat: "Neuf",
        couleur: "Blanc"
    },
    {
        id: 94,
        name: "Polestar 4",
        category: "Electrique",
        price: 85000,
        image: "../images/Polestar_4.jpg",
        description: "Coupé SUV sans lunette arrière",
        annee: "2026",
        etat: "Neuf",
        couleur: "Gris"
    }
];

// ── State ───────────────────────────────────
let currentCategory = 'Tous';
let searchQuery = '';
let currency = 'EUR';
const DZD_RATE = 145;
let pendingCarId = null;
let pendingColor = null;

// ── DOM refs ────────────────────────────────
const grid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const currencyBtn = document.getElementById('currency-toggle');
const authNav = document.getElementById('auth-nav');
const userNav = document.getElementById('user-nav');
const userNameEl = document.getElementById('user-name');
const logoutBtn = document.getElementById('logout-btn');
const modal = document.getElementById('color-modal');
const modalCarName = document.getElementById('modal-car-name');
const colorOptions = document.getElementById('color-options');
const selectedColorName = document.getElementById('selected-color-name');
const modalCancel = document.getElementById('modal-cancel');
const modalAdd = document.getElementById('modal-add');

// ── Init ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    updateNav();
    renderGrid();
    bindEvents();
    updateCartBadge();
});

// ── Auth nav ────────────────────────────────
function updateNav() {
    const session = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    if (session) {
        authNav?.classList.add('hidden');
        userNav?.classList.remove('hidden');
        if (userNameEl) userNameEl.textContent = session.name || session.email;
    } else {
        authNav?.classList.remove('hidden');
        userNav?.classList.add('hidden');
    }
}

logoutBtn?.addEventListener('click', () => {
    sessionStorage.removeItem('currentUser');
    location.reload();
});

// ── Render ──────────────────────────────────
function renderGrid() {
    const filtered = cars.filter(car => {
        const matchCat = currentCategory === 'Tous' || car.category === currentCategory;
        const matchSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    if (!filtered.length) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3>Aucun véhicule trouvé</h3>
                <p>Essayez d'autres critères de recherche.</p>
            </div>`;
        return;
    }

    grid.innerHTML = filtered.map((car, i) => `
        <div class="car-card" style="animation-delay:${i * 0.08}s" data-id="${car.id}">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" loading="lazy" onerror="this.onerror=null;this.src='../images/photo-ACC.jpg'">
                <button class="car-fav ${isFavorite(car.id) ? 'active' : ''}" data-id="${car.id}" title="Favoris">
                    ${isFavorite(car.id) ? '❤' : '♡'}
                </button>
            </div>
            <div class="car-info">
                <div class="car-name">${car.name}</div>
                <div class="car-meta">
                    <span class="car-state">${car.etat || 'Neuf'}</span>
                    <span class="car-year">Année ${car.annee || 'N/A'}</span>
                </div>
                <div class="car-footer">
                    <div class="car-price">
                        <div class="car-price-value">${formatPrice(car.price)}</div>
                        <div class="car-price-currency">${currency === 'EUR' ? 'EUR TTC' : 'DZD TTC'}</div>
                    </div>
                    <button class="car-add-btn" data-id="${car.id}">Commander →</button>
                </div>
            </div>
        </div>
    `).join('');

    // Bind events
    grid.querySelectorAll('.car-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openColorModal(btn.dataset.id);
        });
    });

    grid.querySelectorAll('.car-fav').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(btn.dataset.id, btn);
        });
    });
}

// ── Format price ────────────────────────────
function formatPrice(eur) {
    if (currency === 'DZD') {
        const dzd = eur * DZD_RATE;
        return new Intl.NumberFormat('fr-DZ').format(dzd);
    }
    return new Intl.NumberFormat('fr-FR').format(eur);
}

// ── Favorites ───────────────────────────────
function getFavorites() {
    return JSON.parse(localStorage.getItem('ae_favorites') || '[]');
}

function isFavorite(id) {
    return getFavorites().includes(Number(id));
}

function toggleFavorite(id, btn) {
    const favs = getFavorites();
    const idx = favs.indexOf(Number(id));
    if (idx === -1) {
        favs.push(Number(id));
        btn.textContent = '❤';
        btn.classList.add('active');
    } else {
        favs.splice(idx, 1);
        btn.textContent = '♡';
        btn.classList.remove('active');
    }
    localStorage.setItem('ae_favorites', JSON.stringify(favs));
}

// ── Color Modal ─────────────────────────────
function openColorModal(carId) {
    const session = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    if (!session) {
        sessionStorage.setItem('redirectAfterLogin', location.href);
        window.location.href = 'connexion.html';
        return;
    }

    const car = cars.find(c => c.id === Number(carId));
    if (!car) return;

    pendingCarId = Number(carId);
    pendingColor = null;

    modalCarName.textContent = car.name;
    selectedColorName.textContent = '';

    colorOptions.innerHTML = `
        <div class="color-swatch" style="background:#ffffff" data-color="Blanc" title="Blanc"></div>
        <div class="color-swatch" style="background:#000000" data-color="Noir" title="Noir"></div>
        <div class="color-swatch" style="background:#c0c0c0" data-color="Gris" title="Gris"></div>
        <div class="color-swatch" style="background:#ff0000" data-color="Rouge" title="Rouge"></div>
    `; // Simplifié car tu n'avais pas de tableau colors

    colorOptions.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            colorOptions.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
            swatch.classList.add('selected');
            pendingColor = swatch.dataset.color;
            selectedColorName.textContent = `Couleur sélectionnée : ${pendingColor}`;
        });
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    pendingCarId = null;
    pendingColor = null;
}

modalCancel?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

modalAdd?.addEventListener('click', () => {
    if (!pendingColor) {
        selectedColorName.textContent = '⚠ Veuillez choisir une couleur.';
        selectedColorName.style.color = '#ef4444';
        return;
    }
    selectedColorName.style.color = '';

    const car = cars.find(c => c.id === pendingCarId);
    if (car) addToCart(car, pendingColor);
    closeModal();
});

// ── Cart ─────────────────────────────────────
function getCart() {
    return JSON.parse(localStorage.getItem('ae_cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('ae_cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(car, color) {
    const cart = getCart();
    const key = `${car.id}_${color}`;
    const existing = cart.find(i => i.key === key);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            key,
            id: car.id,
            name: car.name,
            price: car.price,
            color,
            img: car.image,
            qty: 1
        });
    }
    saveCart(cart);
    showToast(`${car.name} (${color}) ajouté à la commande.`);
}

function updateCartBadge() {
    const cart = getCart();
    const total = cart.reduce((s, i) => s + i.qty, 0);
    const link = document.querySelector('a[href*="panier"]');
    if (!link) return;

    let badge = link.querySelector('.cart-badge');
    if (total > 0) {
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'cart-badge';
            link.appendChild(badge);
        }
        badge.textContent = total;
    } else {
        badge?.remove();
    }
}

// ── Toast ────────────────────────────────────
function showToast(msg) {
    let t = document.querySelector('.toast-global');
    if (!t) {
        t = document.createElement('div');
        t.className = 'toast toast-global';
        document.body.appendChild(t);
        t.style.cssText = `
            position:fixed; bottom:2rem; right:2rem; z-index:999;
            padding:.9rem 1.4rem; background:var(--bg-card); border:1px solid var(--border-hover);
            border-radius:12px; font-size:.85rem; color:var(--text-primary);
            box-shadow:var(--shadow-card); transform:translateY(100px); opacity:0;
            transition:.3s cubic-bezier(.4,0,.2,1); max-width:340px;
        `;
    }
    t.textContent = '✓ ' + msg;
    t.style.transform = 'translateY(0)';
    t.style.opacity = '1';
    clearTimeout(t._timeout);
    t._timeout = setTimeout(() => {
        t.style.transform = 'translateY(100px)';
        t.style.opacity = '0';
    }, 3000);
}

// ── Events ───────────────────────────────────
function bindEvents() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderGrid();
        });
    });

    searchInput?.addEventListener('input', () => {
        searchQuery = searchInput.value;
        renderGrid();
    });

    currencyBtn?.addEventListener('click', () => {
        currency = currency === 'EUR' ? 'DZD' : 'EUR';
        currencyBtn.textContent = currency;
        renderGrid();
    });
}