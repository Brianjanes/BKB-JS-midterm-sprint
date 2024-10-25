const Genres = {
  ACTION: "Action",
  ADVENTURE: "Adventure",
  ANIMATION: "Animation",
  CRIME: "Crime",
  DRAMA: "Drama",
  FANTASY: "Fantasy",
  HORROR: "Horror",
  ROMANCE: "Romance",
  SCI_FI: "Sci-Fi",
  THRILLER: "Thriller",
  WAR: "War",
};

const Movies = [
  {
    id: 1,
    title: "The Godfather",
    releaseYear: 1972,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    rating: 9.2,
    genre: Genres.CRIME,
    reviews: [
      "Makes you an offer you can't refuse: quality entertainment.",
      "Like a perfectly cooked Italian dinner, this film has layers of excellence.",
      "The family business has never looked so compelling. Just don't ask about the day job.",
    ],
  },
  {
    id: 2,
    title: "Inception",
    releaseYear: 2010,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    director: "Christopher Nolan",
    rating: 8.8,
    genre: Genres.SCI_FI,
    reviews: [
      "This movie will plant an idea in your head: it's brilliant.",
      "Like its characters, this film operates on multiple levels.",
      "The only thing more complex than the plot is explaining it to your friends afterward.",
    ],
  },
  {
    id: 3,
    title: "The Dark Knight",
    releaseYear: 2008,
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on Gotham.",
    director: "Christopher Nolan",
    rating: 9.0,
    genre: Genres.ACTION,
    reviews: [
      "Why so serious? Because it's seriously good.",
      "Like Batman's gadgets, every piece of this film serves a purpose.",
      "Proves that sometimes the knight is darkest before the dawn.",
    ],
  },
  {
    id: 4,
    title: "Schindler's List",
    releaseYear: 1993,
    description:
      "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce.",
    director: "Steven Spielberg",
    rating: 9.0,
    genre: Genres.DRAMA,
    reviews: [
      "A powerful reminder that one person's choices can change the world.",
      "The performances are so good, they should be on somebody's list.",
      "Black and white cinematography, but morally anything but.",
    ],
  },
  {
    id: 5,
    title: "Pulp Fiction",
    releaseYear: 1994,
    description:
      "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    rating: 8.9,
    genre: Genres.CRIME,
    reviews: [
      "A royale with cheese of a masterpiece.",
      "Like its timeline, this film is brilliantly out of order.",
      "The best movie to watch before or after a quarter pounder.",
    ],
  },
  {
    id: 6,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    releaseYear: 2001,
    description:
      "A meek Hobbit and eight companions set out on a journey to destroy a powerful ring.",
    director: "Peter Jackson",
    rating: 8.8,
    genre: Genres.FANTASY,
    reviews: [
      "One ring to rule them all, one film to bind audiences.",
      "A journey so good, you'll want to walk to Mordor.",
      "Makes three hours feel like first breakfast.",
    ],
  },
  {
    id: 7,
    title: "Forrest Gump",
    releaseYear: 1994,
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
    director: "Robert Zemeckis",
    rating: 8.8,
    genre: Genres.DRAMA,
    reviews: [
      "Life is like this movie: a masterpiece.",
      "Run, don't walk, to see this classic.",
      "Like a box of chocolates, every scene is a sweet surprise.",
    ],
  },
  {
    id: 8,
    title: "Fight Club",
    releaseYear: 1999,
    description:
      "An insomniac office worker forms an underground fight club that evolves into something more.",
    director: "David Fincher",
    rating: 8.8,
    genre: Genres.DRAMA,
    reviews: [
      "The first rule of Fight Club is: you must watch Fight Club.",
      "I am Jack's complete lack of criticism.",
      "Hits harder than a punch to the face.",
    ],
  },
  {
    id: 9,
    title: "Interstellar",
    releaseYear: 2014,
    description:
      "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    rating: 8.6,
    genre: Genres.SCI_FI,
    reviews: [
      "Love transcends space-time, and so does this movie's appeal.",
      "Like a black hole, it pulls you in and doesn't let go.",
      "The only thing that doesn't dilate is the audience's attention.",
    ],
  },
  {
    id: 10,
    title: "Gladiator",
    releaseYear: 2000,
    description:
      "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family.",
    director: "Ridley Scott",
    rating: 8.5,
    genre: Genres.ACTION,
    reviews: [
      "Are you not entertained? You will be!",
      "Worth its weight in laurel wreaths.",
      "The empire strikes back, but Maximus strikes harder.",
    ],
  },
  {
    id: 11,
    title: "The Matrix",
    releaseYear: 1999,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    director: "Lana Wachowski, Lilly Wachowski",
    rating: 8.7,
    genre: Genres.SCI_FI,
    reviews: [
      "Take the red pill and see how deep this rabbit hole goes.",
      "Reality is overrated anyway.",
      "There is no spoon, but there are plenty of spectacular scenes.",
    ],
  },
  {
    id: 12,
    title: "Saving Private Ryan",
    releaseYear: 1998,
    description:
      "Following the Normandy landings, a group of soldiers goes behind enemy lines to retrieve a paratrooper.",
    director: "Steven Spielberg",
    rating: 8.6,
    genre: Genres.WAR,
    reviews: [
      "Saves more than Private Ryan - it saves the war film genre.",
      "The opening sequence alone earns its stripes.",
      "Band of Brothers: The Preview.",
    ],
  },
  {
    id: 13,
    title: "The Shawshank Redemption",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    rating: 9.3,
    genre: Genres.DRAMA,
    reviews: [
      "Hope springs eternal, and so does this film's appeal.",
      "Like Andy's poster, this film conceals true greatness.",
      "Prison never looked so life-affirming.",
    ],
  },
  {
    id: 14,
    title: "Parasite",
    releaseYear: 2019,
    description:
      "A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated individuals.",
    director: "Bong Joon Ho",
    rating: 8.6,
    genre: Genres.THRILLER,
    reviews: [
      "Class warfare has never been so classy.",
      "A basement-to-penthouse thrill ride.",
      "Rich in metaphor, richer in entertainment.",
    ],
  },
  {
    id: 15,
    title: "Mad Max: Fury Road",
    releaseYear: 2015,
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
    director: "George Miller",
    rating: 8.1,
    genre: Genres.ACTION,
    reviews: [
      "What a lovely day for a masterpiece!",
      "Chrome-plated, turbo-charged filmmaking at its finest.",
      "Puts the 'rad' in 'post-apocalyptic road rage'.",
    ],
  },
  {
    id: 16,
    title: "The Lion King",
    releaseYear: 1994,
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    director: "Roger Allers, Rob Minkoff",
    rating: 8.5,
    genre: Genres.ANIMATION,
    reviews: [
      "Hakuna Matata: it means 'watch this movie'.",
      "Pride Rock's finest hour.",
      "Even Scar couldn't find anything wrong with this one.",
    ],
  },
  {
    id: 17,
    title: "Avengers: Endgame",
    releaseYear: 2019,
    description:
      "After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos' destruction.",
    director: "Anthony Russo, Joe Russo",
    rating: 8.4,
    genre: Genres.ACTION,
    reviews: [
      "I am inevitable... inevitably going to watch this again.",
      "Worth half the universe's population.",
      "Thanos should've snapped away the competition.",
    ],
  },
  {
    id: 18,
    title: "Toy Story",
    releaseYear: 1995,
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    director: "John Lasseter",
    rating: 8.3,
    genre: Genres.ANIMATION,
    reviews: [
      "To infinity and beyond... our expectations!",
      "There's a friend in this movie.",
      "Proves toys can tell better stories than most humans.",
    ],
  },
  {
    id: 19,
    title: "Titanic",
    releaseYear: 1997,
    description:
      "A young aristocrat falls in love with a kind but poor artist aboard the ill-fated R.M.S. Titanic.",
    director: "James Cameron",
    rating: 7.9,
    genre: Genres.ROMANCE,
    reviews: [
      "Like the ship, this film is unsinkable.",
      "Their hearts will go on, and so will this film's legacy.",
      "Drawing this movie like one of your French classics.",
    ],
  },
  {
    id: 20,
    title: "Jurassic Park",
    releaseYear: 1993,
    description:
      "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids.",
    director: "Steven Spielberg",
    rating: 8.1,
    genre: Genres.ADVENTURE,
    reviews: [
      "Life, uh, finds a way to make the perfect adventure movie.",
      "Spared no expense on the entertainment value.",
      "Clever girl of a movie.",
    ],
  },
  {
    id: 21,
    title: "Mars Uprising",
    releaseYear: 2025,
    description:
      "In a future where Mars has been colonized, a rebellion threatens to upend the fragile peace between Earth and Mars.",
    director: "Emily Summers",
    rating: null,
    genre: Genres.SCI_FI,
    reviews: [
      "The red planet's never been redder with revolution.",
      "Earth-shattering drama that's out of this world.",
      "Makes Matt Damon's Martian problems look like a picnic.",
    ],
  },
  {
    id: 22,
    title: "The Last Astronaut",
    releaseYear: 2024,
    description:
      "The final astronaut aboard an abandoned space station discovers a hidden threat as they try to return home.",
    director: "James Harker",
    rating: null,
    genre: Genres.THRILLER,
    reviews: [
      "Space may be silent, but you'll be screaming.",
      "Houston, we have a masterpiece.",
      "Gives new meaning to working from home... in space.",
    ],
  },
  {
    id: 23,
    title: "Quantum Paradox",
    releaseYear: 2026,
    description:
      "A scientist experimenting with quantum physics inadvertently creates a reality-destroying anomaly.",
    director: "Isabella Cruz",
    rating: null,
    genre: Genres.SCI_FI,
    reviews: [
      "Schrödinger's movie: simultaneously mind-blowing and mind-bending.",
      "The uncertainty principle of entertainment.",
      "Finally, a quantum physics film that doesn't collapse under observation.",
    ],
  },
  {
    id: 24,
    title: "Echoes of Tomorrow",
    releaseYear: 2027,
    description:
      "A time traveler struggles to prevent a catastrophic event that could unravel the future.",
    director: "Cameron Gray",
    rating: null,
    genre: Genres.ACTION,
    reviews: [
      "The future is bright, but the movie is brighter.",
      "Time waits for no one, except this film.",
      "Tomorrow called, it wants its plot back.",
    ],
  },
  {
    id: 25,
    title: "The Forgotten Island",
    releaseYear: 2025,
    description:
      "Explorers on a mysterious island uncover ancient secrets and unexpected dangers.",
    director: "Lara Stone",
    rating: null,
    genre: Genres.ADVENTURE,
    reviews: [
      "Lost meets Jurassic Park without the dinosaurs (we think).",
      "An island vacation gone perfectly wrong.",
      "More mysterious than your GPS on a bad day.",
    ],
  },
  {
    id: 26,
    title: "Nightfall City",
    releaseYear: 2025,
    description:
      "In a dystopian megacity, a lone detective uncovers a conspiracy involving the city's elite.",
    director: "Michael Liu",
    rating: null,
    genre: Genres.CRIME,
    reviews: [
      "Blade Runner's spiritual successor hits the streets running.",
      "Detective noir gets a neon makeover.",
      "The only thing darker than the city is the plot.",
    ],
  },
  {
    id: 27,
    title: "Lunar Colony",
    releaseYear: 2026,
    description:
      "The first lunar colony faces a disaster that threatens to wipe out its inhabitants.",
    director: "Sarah White",
    rating: null,
    genre: Genres.SCI_FI,
    reviews: [
      "One small step for film, one giant leap for sci-fi.",
      "Makes lunar colonization look like a walk in the park... sort of.",
      "Houston, we have a hit.",
    ],
  },
  {
    id: 28,
    title: "Codebreaker",
    releaseYear: 2024,
    description:
      "A talented hacker gets caught in a web of espionage that could change the world.",
    director: "John Doe",
    rating: null,
    genre: Genres.ACTION,
    reviews: [
      "Control-Alt-Delightful.",
      "Puts the 'cyber' in 'cyber-thriller'.",
      "Hack your way to the edge of your seat.",
    ],
  },
];

module.exports = {
  Genres,
  Movies,
};
