let btn = document.getElementById('btn');
let output = document.getElementById('output');
let movie = [
    'Rey Leon', 'La Bella y la Bestia', 'La Sirenita', 'Blanca Nieves y los Siete Enanos', 'Aladdin', 'Pinocho', 'La Bella Durmiente', 'El Libro de la Selva', 'La Cenicienta', 'La Dama y el Vagabundo', 'Fantasia', 'Bambi', 'Dumbo', 'Hércules', 'Peter Pan', 'Frozen', 'Mulan', 'Pocahontas', 'Alicia en el País de las Maravillas', 'La Espada en la Piedra', 'Lilo y Stitch', 'Tarzan', 'Enredados', 'Los Aristogatos', 'El Jorobado de Notre Dame', 'Los Tres Caballeros', 'Robin Hood', 'El Caldero Mágico', 'Tierra de Osos', 'Los Tres Mosqueteros', 'La Princesa y el Sapo', 'El Planeta del Tesoro', 'Bernardo y Bianca'
    ];

    btn.addEventListener('click', function(){
        var randomMovie = movie[Math.floor(Math.random() * movie.length)]
        output.innerHTML = randomMovie;
    })
