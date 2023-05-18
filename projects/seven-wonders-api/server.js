//CHECK FOR AUSTRALIA'S NAMES
//TURN NORTH AMERICA AND SOUTH AMERICA INTO READABLE STRINGS
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const wonders = {
    continents: ['Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America'],
    africa: [
        {
            name: 'Pyramids of Giza',
            location: 'Egypt',
            description: 'A complex of ancient pyramids, the oldest and largest of which is the Great Pyramid, built over 4,500 years ago.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/1024px-Kheops-Pyramid.jpg'
        },
        {
            name: 'Timbuktu',
            location: 'Mali',
            description: 'A city in the Sahara desert known for its rich history as a center of Islamic scholarship and trade.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Tombouctou.jpg'
        },
        {
            name: 'Victoria Falls',
            location: 'Zambia/Zimbabwe',
            description: 'A waterfall on the Zambezi River, known for its spectacular beauty and as one of the largest waterfalls in the world.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_06.jpg/1280px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_06.jpg'
        },
        {
            name: 'Table Mountain',
            location: 'South Africa',
            description: 'A flat-topped mountain in Cape Town that offers stunning views of the city and the surrounding landscape.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Table_Mountain_DanieVDM.jpg/800px-Table_Mountain_DanieVDM.jpg'
        },
        {
            name: 'Mount Kilimanjaro',
            location: 'Tanzania',
            description: 'The highest peak in Africa, Mount Kilimanjaro is a popular destination for hikers and climbers.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/800px-Mt._Kilimanjaro_12.2006.JPG'
        },
        {
            name: 'The Nile River',
            location: 'Egypt',
            description: 'The longest river in the world, the Nile has been a vital source of life and civilization for thousands of years.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cairo_skyline%2C_Panoramic_view%2C_Egypt.jpg/1024px-Cairo_skyline%2C_Panoramic_view%2C_Egypt.jpg'
        },
        {
            name: 'The Great Mosque of Djenne',
            location: 'Mali',
            description: 'One of the largest mud-brick structures in the world, the Great Mosque of Djenne is a stunning example of Sahelian architecture.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Djenne_great_mud_mosque.jpg/1024px-Djenne_great_mud_mosque.jpg'
        }
    ],
    antarctica: [
        {
            name: 'Mount Erebus',
            location: 'Ross Island',
            description: 'The southernmost active volcano in the world, towering over the barren landscape of Ross Island.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Mt_erebus.jpg'
        },
        {
            name: 'McMurdo Dry Valleys',
            location: 'Victoria Land',
            description: 'A series of valleys in Antarctica where no ice is present, offering a unique and otherworldly landscape.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Landsat7_dry_valley_lrg.jpg/1024px-Landsat7_dry_valley_lrg.jpg'
        },
        {
            name: 'Penguin colonies',
            location: 'Various locations',
            description: 'Antarctica is home to a number of penguin species, such as emperor penguins and Adélie penguins, which can be observed in their natural habitat.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2007_Snow-Hill-Island_Luyten-De-Hauwere-Emperor-Penguin-03.jpg/1280px-2007_Snow-Hill-Island_Luyten-De-Hauwere-Emperor-Penguin-03.jpg'
        },
        {
            name: 'Antarctic Ice Sheet',
            location: 'Antarctica',
            description: 'The largest ice sheet in the world, covering almost the entire continent of Antarctica and holding about 90 percent of the world\’s ice.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AA_bedrock_surface.4960.tif/lossy-page1-1024px-AA_bedrock_surface.4960.tif.jpg'
        },
        {
            name: 'South Pole',
            location: 'Antarctica',
            description: 'The southernmost point on Earth, located at the geographic South Pole, where the Earth\’s axis of rotation intersects the surface.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Saludo_a_la_Bandera_Argentina_durante_la_Operaci%C3%B3n_90.jpg'
        }
    ],
    asia: [
        {
            name: 'The Great Wall of China',
            location: 'China',
            description: 'A series of fortifications built along the northern borders of China to protect against invasions.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1024px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg'
        },
        {
            name: 'Angkor Wat',
            location: 'Cambodia',
            description: 'A Hindu temple complex and the largest religious monument in the world, built in the 12th century.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/20171126_Angkor_Wat_4712_DxO.jpg/800px-20171126_Angkor_Wat_4712_DxO.jpg'
        },
        {
            name: 'Taj Mahal',
            location: 'India',
            description: 'A mausoleum built by the Mughal emperor Shah Jahan in memory of his favorite wife, Mumtaz Mahal.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg'
        },
        {
            name: 'Petra',
            location: 'Jordan',
            description: 'An ancient city carved into the rock, known for its beautiful architecture and intricate water system.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Amphitheatre%2C_Petra%2C_Jordan1.jpg/1024px-Amphitheatre%2C_Petra%2C_Jordan1.jpg'
        },
        {
            name: 'Borobudur',
            location: 'Indonesia',
            description: 'A Buddhist temple and UNESCO World Heritage site, built in the 9th century.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Borobudur_Temple.jpg/800px-Borobudur_Temple.jpg'
        },
        {
            name: 'Mount Everest',
            location: 'Nepal',
            description: 'The highest mountain in the world, standing at 8,848 meters (29,029 feet).',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1280px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg'
        },
        {
            name: 'The Forbidden City',
            location: 'China',
            description: 'A palace complex in the heart of Beijing that served as the imperial palace of the Ming and Qing dynasties.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Forbidden_City_-_View_from_Coal_Hill.jpg/1280px-The_Forbidden_City_-_View_from_Coal_Hill.jpg'
        }
    ],
    australia: [
        {
            name: 'Uluru',
            location: 'Northern Territory',
            description: 'A large sandstone rock formation in the heart of the Australian outback, sacred to the Indigenous Anangu people.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/ULURU.jpg/800px-ULURU.jpg'
        },
        {
            name: 'Great Barrier Reef',
            location: 'Queensland',
            description: 'The world\'s largest coral reef system, stretching over 2,300 km and home to an incredible diversity of marine life.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg/1024px-ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg'
        },
        {
            name: 'Sydney Opera House',
            location: 'New South Wales',
            description: 'One of the most iconic and recognizable buildings in the world, known for its distinctive sail-like design and stunning location on Sydney Harbour.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/800px-Sydney_Australia._%2821339175489%29.jpg'
        },
        {
            name: 'Kakadu National Park',
            location: 'Northern Territory',
            description: 'A vast wilderness area filled with wetlands, ancient rock art, and incredible wildlife, including saltwater crocodiles and the elusive kangaroo.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Kakadu_2411.jpg'
        },
        {
            name: 'Great Ocean Road',
            location: 'Victoria',
            description: 'A scenic coastal drive that winds along the cliffs and beaches of southern Australia, passing by stunning natural landmarks like the Twelve Apostles.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2009-0825-GreatOceanRoadsign.jpg/1024px-2009-0825-GreatOceanRoadsign.jpg'
        },
        {
            name: 'Fraser Island',
            location: 'Queensland',
            description: 'The world\'s largest sand island, home to crystal-clear lakes, towering sand dunes, and a unique ecosystem of plants and animals adapted to the island\'s harsh conditions.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Indian_Head_view_on_Fraser_Island_%28May_2016%29.jpg/800px-Indian_Head_view_on_Fraser_Island_%28May_2016%29.jpg'
        },
        {
            name: 'Cradle Mountain',
            location: 'Tasmania',
            description: 'A rugged mountain peak and surrounding wilderness area, known for its stunning natural beauty and opportunities for hiking and wildlife spotting.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cradle_Mountain_Behind_Dove_Lake.jpg/800px-Cradle_Mountain_Behind_Dove_Lake.jpg'
        }
    ],
    oceania: [
        {
            name: 'Uluru',
            location: 'Northern Territory',
            description: 'A large sandstone rock formation in the heart of the Australian outback, sacred to the Indigenous Anangu people.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/ULURU.jpg/800px-ULURU.jpg'
        },
        {
            name: 'Great Barrier Reef',
            location: 'Queensland',
            description: 'The world\'s largest coral reef system, stretching over 2,300 km and home to an incredible diversity of marine life.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg/1024px-ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg'
        },
        {
            name: 'Sydney Opera House',
            location: 'New South Wales',
            description: 'One of the most iconic and recognizable buildings in the world, known for its distinctive sail-like design and stunning location on Sydney Harbour.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/800px-Sydney_Australia._%2821339175489%29.jpg'
        },
        {
            name: 'Kakadu National Park',
            location: 'Northern Territory',
            description: 'A vast wilderness area filled with wetlands, ancient rock art, and incredible wildlife, including saltwater crocodiles and the elusive kangaroo.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Kakadu_2411.jpg'
        },
        {
            name: 'Great Ocean Road',
            location: 'Victoria',
            description: 'A scenic coastal drive that winds along the cliffs and beaches of southern Australia, passing by stunning natural landmarks like the Twelve Apostles.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2009-0825-GreatOceanRoadsign.jpg/1024px-2009-0825-GreatOceanRoadsign.jpg'
        },
        {
            name: 'Fraser Island',
            location: 'Queensland',
            description: 'The world\'s largest sand island, home to crystal-clear lakes, towering sand dunes, and a unique ecosystem of plants and animals adapted to the island\'s harsh conditions.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Indian_Head_view_on_Fraser_Island_%28May_2016%29.jpg/800px-Indian_Head_view_on_Fraser_Island_%28May_2016%29.jpg'
        },
        {
            name: 'Cradle Mountain',
            location: 'Tasmania',
            description: 'A rugged mountain peak and surrounding wilderness area, known for its stunning natural beauty and opportunities for hiking and wildlife spotting.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cradle_Mountain_Behind_Dove_Lake.jpg/800px-Cradle_Mountain_Behind_Dove_Lake.jpg'
        }
    ],
    australasia: [
        {
            name: 'Uluru',
            location: 'Northern Territory',
            description: 'A large sandstone rock formation in the heart of the Australian outback, sacred to the Indigenous Anangu people.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/ULURU.jpg/800px-ULURU.jpg'
        },
        {
            name: 'Great Barrier Reef',
            location: 'Queensland',
            description: 'The world\'s largest coral reef system, stretching over 2,300 km and home to an incredible diversity of marine life.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg/1024px-ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg'
        },
        {
            name: 'Sydney Opera House',
            location: 'New South Wales',
            description: 'One of the most iconic and recognizable buildings in the world, known for its distinctive sail-like design and stunning location on Sydney Harbour.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/800px-Sydney_Australia._%2821339175489%29.jpg'
        },
        {
            name: 'Kakadu National Park',
            location: 'Northern Territory',
            description: 'A vast wilderness area filled with wetlands, ancient rock art, and incredible wildlife, including saltwater crocodiles and the elusive kangaroo.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Kakadu_2411.jpg'
        },
        {
            name: 'Great Ocean Road',
            location: 'Victoria',
            description: 'A scenic coastal drive that winds along the cliffs and beaches of southern Australia, passing by stunning natural landmarks like the Twelve Apostles.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2009-0825-GreatOceanRoadsign.jpg/1024px-2009-0825-GreatOceanRoadsign.jpg'
        },
        {
            name: 'Fraser Island',
            location: 'Queensland',
            description: 'The world\'s largest sand island, home to crystal-clear lakes, towering sand dunes, and a unique ecosystem of plants and animals adapted to the island\'s harsh conditions.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Indian_Head_view_on_Fraser_Island_%28May_2016%29.jpg/800px-Indian_Head_view_on_Fraser_Island_%28May_2016%29.jpg'
        },
        {
            name: 'Cradle Mountain',
            location: 'Tasmania',
            description: 'A rugged mountain peak and surrounding wilderness area, known for its stunning natural beauty and opportunities for hiking and wildlife spotting.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cradle_Mountain_Behind_Dove_Lake.jpg/800px-Cradle_Mountain_Behind_Dove_Lake.jpg'
        }
    ],
    europe: [
        {
            name: 'The Colosseum',
            location: 'Rome, Italy',
            description: 'An iconic amphitheater built in the 1st century AD, known for its impressive size and historical significance.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg'
        },
        {
            name: 'The Acropolis',
            location: 'Athens, Greece',
            description: 'A complex of ancient ruins perched on a rocky hill, including the Parthenon temple dedicated to Athena, the goddess of wisdom.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_Acropolis_of_Athens_on_June_1%2C_2021.jpg/1024px-The_Acropolis_of_Athens_on_June_1%2C_2021.jpg'
        },
        {
            name: 'Stonehenge',
            location: 'Wiltshire, England',
            description: 'A prehistoric monument consisting of large standing stones arranged in a circle, believed to have been constructed around 2500 BC.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/800px-Stonehenge2007_07_30.jpg'
        },
        {
            name: 'The Eiffel Tower',
            location: 'Paris, France',
            description: 'A world-famous landmark and symbol of Paris, the Eiffel Tower was completed in 1889 and stands at over 300 meters tall.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/2013_Fireworks_on_Eiffel_Tower_11.jpg/800px-2013_Fireworks_on_Eiffel_Tower_11.jpg'
        },
        {
            name: 'The Alhambra',
            location: 'Granada, Spain',
            description: 'A palace and fortress complex built in the 14th century by the Moorish rulers of the Emirate of Granada, known for its stunning Islamic architecture and gardens.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/800px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg'
        },
        {
            name: 'The Sistine Chapel',
            location: 'Vatican City',
            description: 'A chapel within the Vatican Palace that is famous for its ceiling painted by Michelangelo, featuring scenes from the Book of Genesis.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Chapelle_sixtine_plafond.jpg/800px-Chapelle_sixtine_plafond.jpg'
        },
        {
            name: 'The Northern Lights',
            location: 'Northern Europe',
            description: 'A natural phenomenon that occurs in the polar regions, where colorful lights appear in the sky due to the interaction of solar particles with the Earth’s magnetic field.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Church_of_light.jpg/800px-Church_of_light.jpg'
        }
    ],
    northamerica: [
        {
            name: 'Grand Canyon',
            location: 'Arizona, United States',
            description: 'A massive gorge carved by the Colorado River, known for its stunning vistas and geologic significance.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/1024px-Canyon_River_Tree_%28165872763%29.jpeg'
        },
        {
            name: 'Niagara Falls',
            location: 'Ontario, Canada/New York, United States',
            description: 'A massive waterfall on the Niagara River, known for its beauty and power.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/3Falls_Niagara.jpg/1024px-3Falls_Niagara.jpg'
        },
        {
            name: 'Chichen Itza',
            location: 'Yucatan Peninsula, Mexico',
            description: 'An ancient Maya city featuring impressive architecture and a famous pyramid known as El Castillo.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/800px-Chichen_Itza_3.jpg'
        },
        {
            name: 'Yellowstone National Park',
            location: 'Wyoming, United States',
            description: 'A vast wilderness area featuring geysers, hot springs, and other geothermal features.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Travertine_Terrace_Mammoth_Hot_Springs_Yellowstone_National_Park_Wyoming_USA.jpg/1024px-Travertine_Terrace_Mammoth_Hot_Springs_Yellowstone_National_Park_Wyoming_USA.jpg'
        },
        {
            name: 'Mount Rushmore',
            location: 'South Dakota, United States',
            description: 'A mountain carving featuring the faces of four U.S. presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mount_Rushmore_detail_view_%28100MP%29.jpg/1024px-Mount_Rushmore_detail_view_%28100MP%29.jpg'
        },
        {
            name: 'Banff National Park',
            location: 'Alberta, Canada',
            description: 'A beautiful wilderness area known for its glaciers, lakes, and stunning mountain vistas.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/800px-Moraine_Lake_17092005.jpg'
        },
        {
            name: 'Havana',
            location: 'Cuba',
            description: 'The capital city of Cuba, known for its vibrant culture, colorful architecture, and classic cars.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Habana_Vieja_de_noche.jpg/1280px-Habana_Vieja_de_noche.jpg'
        }
    ],
    southamerica: [
        {
            name: 'Machu Picchu',
            location: 'Peru',
            description: 'An ancient Incan city situated high in the Andes mountains, known for its impressive stonework and stunning vistas.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1024px-Machu_Picchu%2C_Peru.jpg'
        },
        {
            name: 'Amazon Rainforest',
            location: 'Brazil, Peru, Colombia, Ecuador, Venezuela, Guyana, Suriname, French Guiana, Bolivia',
            description: 'The largest rainforest in the world, covering more than 2 million square miles and home to an incredible array of plant and animal life.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Amazon14_%285641588550%29.jpg/800px-Amazon14_%285641588550%29.jpg'
        },
        {
            name: 'Iguazu Falls',
            location: 'Argentina/Brazil',
            description: 'A breathtaking series of waterfalls located on the border between Argentina and Brazil, surrounded by lush forests and diverse wildlife.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cataratas.jpg/1024px-Cataratas.jpg'
        },
        {
            name: 'Easter Island',
            location: 'Chile',
            description: 'An isolated island in the South Pacific known for its mysterious moai statues, which were carved by the island\'s ancient inhabitants.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Rano_Raraku_quarry.jpg/800px-Rano_Raraku_quarry.jpg'
        },
        {
            name: 'Galapagos Islands',
            location: 'Ecuador',
            description: 'A group of volcanic islands located in the Pacific Ocean, known for their unique wildlife and their role in inspiring Charles Darwin\'s theory of evolution.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lobo_marino_%28Zalophus_californianus_wollebaeki%29%2C_Punta_Pitt%2C_isla_de_San_Crist%C3%B3bal%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-24%2C_DD_11.JPG/800px-Lobo_marino_%28Zalophus_californianus_wollebaeki%29%2C_Punta_Pitt%2C_isla_de_San_Crist%C3%B3bal%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-24%2C_DD_11.JPG'
        },
        {
            name: 'Salar de Uyuni',
            location: 'Bolivia',
            description: 'The largest salt flat in the world, spanning more than 4,000 square miles and offering stunning vistas of the surrounding mountains and sky.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Salar_Uyuni_au01.jpg/800px-Salar_Uyuni_au01.jpg'
        },
        {
            name: 'Christ the Redeemer',
            location: 'Brazil',
            description: 'A massive statue of Jesus Christ located in Rio de Janeiro, standing more than 100 feet tall and offering panoramic views of the city and the ocean beyond.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Est%C3%A1tua_do_Cristo_Redentor_nas_cores_da_Bandeira_do_Brasil.jpg/1024px-Est%C3%A1tua_do_Cristo_Redentor_nas_cores_da_Bandeira_do_Brasil.jpg'
        },
    ],
    InvalidContinent: [
        {
            name: 'Unknown',
            location: 'N/A',
            description: 'Sorry, we do not have any information about this continent; it may not exist.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Atlantis_Kircher_Mundus_subterraneus_1678.jpg/1024px-Atlantis_Kircher_Mundus_subterraneus_1678.jpg'
        }
    ]
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/seven-wonders-api/main.js', (request, response) => {
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name', (request, response) => {
    const wonderName = request.params.name.toLowerCase().replaceAll(/\W/g, '') // replaces white space in North and South America
    console.log(wonderName)
    if (wonders[wonderName]) {
        response.json(wonders[wonderName])
    } else {
        response.json(wonders['InvalidContinent']) // the string must be here
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})