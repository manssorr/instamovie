import {Dimensions} from 'react-native';
import {IMovie} from './types';

// this should be env file.
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=b4cdf243de74de7898c5475998831984';

export {BASE_URL, API_KEY};

// Navigation Screens

export const errors = {
  GENERIC: 'Something went wrong',
  EMPTY: 'No data found!',
  SERVER_ERROR: 'Something went wrong while fetching data',
  NO_CONNECTION: "Can't load resources, please check your internet connection",
};

export const routes = {
  MOVIES: 'Movies',
  TRENDING: 'Trending',
  MOVIE: 'Movie',
};

export const colors = {
  dark: 'rgb(23 23 23)',
  light: 'rgb(231 229 228)',
  text: 'rgb(255 255 255)',
  primary: 'rgb(0 0 0)',
};

export const spaces = {
  small: 10,
  medium: 20,
  large: 30,

  screenPadding: 10,
};

export const Device = {
  SCREEN_WIDTH: Dimensions.get('screen').width,
  SCREEN_HEIGHT: Dimensions.get('screen').height,
  STATUSBAR_HEIGHT: 20,
};

export const data = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
      genre_ids: [28, 12, 878],
      id: 640146,
      original_language: 'en',
      original_title: 'Ant-Man and the Wasp: Quantumania',
      overview:
        "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      popularity: 9272.643,
      poster_path: '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
      release_date: '2023-02-15',
      title: 'Ant-Man and the Wasp: Quantumania',
      video: false,
      vote_average: 6.5,
      vote_count: 1856,
    },
    {
      adult: false,
      backdrop_path: '/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg',
      genre_ids: [16, 12, 10751, 14, 35],
      id: 502356,
      original_language: 'en',
      original_title: 'The Super Mario Bros. Movie',
      overview:
        'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
      popularity: 7212.464,
      poster_path: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      release_date: '2023-04-05',
      title: 'The Super Mario Bros. Movie',
      video: false,
      vote_average: 7.5,
      vote_count: 1435,
    },
    {
      adult: false,
      backdrop_path: '/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg',
      genre_ids: [28, 35, 14],
      id: 594767,
      original_language: 'en',
      original_title: 'Shazam! Fury of the Gods',
      overview:
        'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
      popularity: 4319.273,
      poster_path: '/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg',
      release_date: '2023-03-15',
      title: 'Shazam! Fury of the Gods',
      video: false,
      vote_average: 6.8,
      vote_count: 1203,
    },
    {
      adult: false,
      backdrop_path: '/ovM06PdF3M8wvKb06i4sjW3xoww.jpg',
      genre_ids: [878, 12, 28],
      id: 76600,
      original_language: 'en',
      original_title: 'Avatar: The Way of Water',
      overview:
        'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      popularity: 3471.132,
      poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
      release_date: '2022-12-14',
      title: 'Avatar: The Way of Water',
      video: false,
      vote_average: 7.7,
      vote_count: 7519,
    },
    {
      adult: false,
      backdrop_path: '/xwA90BwZXTh8ke3CVsQlj8EOkFr.jpg',
      genre_ids: [28, 12, 36, 18, 10752],
      id: 948713,
      original_language: 'en',
      original_title: 'The Last Kingdom: Seven Kings Must Die',
      overview:
        "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
      popularity: 3162.414,
      poster_path: '/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg',
      release_date: '2023-04-14',
      title: 'The Last Kingdom: Seven Kings Must Die',
      video: false,
      vote_average: 7.4,
      vote_count: 226,
    },
    {
      adult: false,
      backdrop_path: '/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
      genre_ids: [18, 28],
      id: 677179,
      original_language: 'en',
      original_title: 'Creed III',
      overview:
        'After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.',
      popularity: 2865.256,
      poster_path: '/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg',
      release_date: '2023-03-01',
      title: 'Creed III',
      video: false,
      vote_average: 7.3,
      vote_count: 1183,
    },
    {
      adult: false,
      backdrop_path: '/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg',
      genre_ids: [27, 53],
      id: 713704,
      original_language: 'en',
      original_title: 'Evil Dead Rise',
      overview:
        'Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.',
      popularity: 1898.367,
      poster_path: '/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg',
      release_date: '2023-04-12',
      title: 'Evil Dead Rise',
      video: false,
      vote_average: 6.9,
      vote_count: 192,
    },
    {
      adult: false,
      backdrop_path: '/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg',
      genre_ids: [35, 9648, 28],
      id: 638974,
      original_language: 'en',
      original_title: 'Murder Mystery 2',
      overview:
        'After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.',
      popularity: 1855.858,
      poster_path: '/s1VzVhXlqsevi8zeCMG9A16nEUf.jpg',
      release_date: '2023-03-28',
      title: 'Murder Mystery 2',
      video: false,
      vote_average: 6.6,
      vote_count: 856,
    },
    {
      adult: false,
      backdrop_path: '/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg',
      genre_ids: [16, 10751, 14, 12, 35, 18],
      id: 315162,
      original_language: 'en',
      original_title: 'Puss in Boots: The Last Wish',
      overview:
        'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
      popularity: 1407.152,
      poster_path: '/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
      release_date: '2022-12-07',
      title: 'Puss in Boots: The Last Wish',
      video: false,
      vote_average: 8.3,
      vote_count: 5326,
    },
    {
      adult: false,
      backdrop_path: '/h8gHn0OzBoaefsYseUByqsmEDMY.jpg',
      genre_ids: [28, 53, 80],
      id: 603692,
      original_language: 'en',
      original_title: 'John Wick: Chapter 4',
      overview:
        'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      popularity: 1312.743,
      poster_path: '/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
      release_date: '2023-03-22',
      title: 'John Wick: Chapter 4',
      video: false,
      vote_average: 8,
      vote_count: 1202,
    },
    {
      adult: false,
      backdrop_path: '/nDmPjKLqLwWyd4Ssti8HCdhW5cZ.jpg',
      genre_ids: [28],
      id: 1048300,
      original_language: 'en',
      original_title: 'Adrenaline',
      overview:
        'A female FBI agent holidaying in Eastern Europe with her family gets her life upside down when her daughter is kidnapped. She has to team up with a criminal on the run to save her daughter before time runs out.',
      popularity: 1269.765,
      poster_path: '/qVzRt8c2v4gGBYsnaflXVVeQ9Lh.jpg',
      release_date: '2022-12-15',
      title: 'Adrenaline',
      video: false,
      vote_average: 4,
      vote_count: 4,
    },
    {
      adult: false,
      backdrop_path: '/a2tys4sD7xzVaogPntGsT1ypVoT.jpg',
      genre_ids: [53, 35, 80],
      id: 804150,
      original_language: 'en',
      original_title: 'Cocaine Bear',
      overview:
        'Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.',
      popularity: 1223.954,
      poster_path: '/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg',
      release_date: '2023-02-22',
      title: 'Cocaine Bear',
      video: false,
      vote_average: 6.4,
      vote_count: 873,
    },
    {
      adult: false,
      backdrop_path: '/54IXMMEQKlkPXHqPExWy98UBmtE.jpg',
      genre_ids: [27],
      id: 1008005,
      original_language: 'es',
      original_title: 'La niña de la comunión',
      overview:
        "Spain, late 1980s. Newcomer Sara tries to fit in with the other teens in this tight-knit small town in the province of Tarragona. If only she were more like her extroverted best friend, Rebe. They go out one night at a nightclub, on the way home, they come upon a little girl holding a doll, dressed for her first communion. And that's when the nightmare begins.",
      popularity: 1191.393,
      poster_path: '/sP6AO11a7jWgsmT9T8j9EGIWAaZ.jpg',
      release_date: '2023-02-10',
      title: 'The Communion Girl',
      video: false,
      vote_average: 6.3,
      vote_count: 55,
    },
    {
      adult: false,
      backdrop_path: '/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg',
      genre_ids: [878, 12, 53, 28],
      id: 700391,
      original_language: 'en',
      original_title: '65',
      overview:
        '65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.',
      popularity: 1189.997,
      poster_path: '/rzRb63TldOKdKydCvWJM8B6EkPM.jpg',
      release_date: '2023-03-02',
      title: '65',
      video: false,
      vote_average: 6.3,
      vote_count: 752,
    },
    {
      adult: false,
      backdrop_path: '/tFaC1Fb1sv1dALB0i9Avi76MHmn.jpg',
      genre_ids: [10751, 28, 12],
      id: 946310,
      original_language: 'nl',
      original_title: "De Piraten van Hiernaast II: De Ninja's van de Overkant",
      overview:
        "The pirates feel right at home in Sandborough, but the atmosphere cools right down when the ninjas come to live in the street. After all, pirates and ninjas are sworn enemies!  While pirate captain Hector Blunderbuss struggles to get rid of his new neighbours, son Billy and ninja daughter Yuka become friends. The pirates challenge the ninjas to the ultimate battle at the village's annual hexathlon. Who will win the match? Ninjas are faster and more agile of course, but pirates are the best cheats in all of the seven seas...",
      popularity: 1145.777,
      poster_path: '/uDsvma9dAwnDPVuCFi99YpWvBk0.jpg',
      release_date: '2022-04-20',
      title: 'Pirates Down the Street II: The Ninjas from Across',
      video: false,
      vote_average: 6.2,
      vote_count: 21,
    },
    {
      adult: false,
      backdrop_path: '/rPSJAElGxOTko1zK6uIlYnTMFxN.jpg',
      genre_ids: [80],
      id: 1104040,
      original_language: 'en',
      original_title: 'Gangs of Lagos',
      overview:
        'A group of friends who each have to navigate their own destiny, growing up on the bustling streets and neighborhood of Isale Eko, Lagos.',
      popularity: 1133.317,
      poster_path: '/nGwFsB6EXUCr21wzPgtP5juZPSv.jpg',
      release_date: '2023-04-07',
      title: 'Gangs of Lagos',
      video: false,
      vote_average: 5.6,
      vote_count: 20,
    },
    {
      adult: false,
      backdrop_path: '/5Y5pz0NX7SZS9036I733F7uNcwK.jpg',
      genre_ids: [27, 53],
      id: 758323,
      original_language: 'en',
      original_title: "The Pope's Exorcist",
      overview:
        "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      popularity: 1103.242,
      poster_path: '/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg',
      release_date: '2023-04-05',
      title: "The Pope's Exorcist",
      video: false,
      vote_average: 6.5,
      vote_count: 142,
    },
    {
      adult: false,
      backdrop_path: '/m1fgGSLK0WvRpzM1AmZu38m0Tx8.jpg',
      genre_ids: [28],
      id: 842945,
      original_language: 'en',
      original_title: 'Supercell',
      overview:
        'Good-hearted teenager William always lived in hope of following in his late father’s footsteps and becoming a storm chaser. His father’s legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.',
      popularity: 962.106,
      poster_path: '/gbGHezV6yrhua0KfAgwrknSOiIY.jpg',
      release_date: '2023-03-17',
      title: 'Supercell',
      video: false,
      vote_average: 6.4,
      vote_count: 122,
    },
    {
      adult: false,
      backdrop_path: '/tYcmm8XtzRdcT6kliCbHuWwLCwB.jpg',
      genre_ids: [28, 80, 53],
      id: 849869,
      original_language: 'ko',
      original_title: '길복순',
      overview:
        "At work, she's a renowned assassin. At home, she's a single mom to a teenage daughter. Killing? That's easy. It's parenting that's the hard part.",
      popularity: 956.601,
      poster_path: '/taYgn3RRpCGlTGdaGQvnSIOzXFy.jpg',
      release_date: '2023-02-17',
      title: 'Kill Boksoon',
      video: false,
      vote_average: 6.8,
      vote_count: 184,
    },
    {
      adult: false,
      backdrop_path: '/eNJhWy7xFzR74SYaSJHqJZuroDm.jpg',
      genre_ids: [28, 878],
      id: 1033219,
      original_language: 'en',
      original_title: 'Attack on Titan',
      overview:
        "As viable water is depleted on Earth, a mission is sent to Saturn's moon Titan to retrieve sustainable H2O reserves from its alien inhabitants. But just as the humans acquire the precious resource, they are attacked by Titan rebels, who don't trust that the Earthlings will leave in peace.",
      popularity: 875.796,
      poster_path: '/qNz4l8UgTkD8rlqiKZ556pCJ9iO.jpg',
      release_date: '2022-09-30',
      title: 'Attack on Titan',
      video: false,
      vote_average: 6.1,
      vote_count: 104,
    },
  ],
  total_pages: 38020,
  total_results: 760385,
};

export const data2 = {
  kind: 'ok',
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg',
      genre_ids: [878, 28, 18],
      id: 933131,
      original_language: 'ko',
      original_title: '황야',
      overview:
        'After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.',
      popularity: 3228.455,
      poster_path: '/24CL0ySodCF8bcm38xtBeHzHp7W.jpg',
      release_date: '2024-01-26',
      title: 'Badland Hunters',
      video: false,
      vote_average: 6.772,
      vote_count: 303,
    },
    {
      adult: false,
      backdrop_path: '/unvtbkgxh47BewQ8pENvdOdme0r.jpg',
      genre_ids: [28, 18],
      id: 1212073,
      original_language: 'de',
      original_title: '60 Minuten',
      overview:
        'Desperate to keep custody of his daughter, a mixed martial arts fighter abandons a big match and races across Berlin to attend her birthday party.',
      popularity: 2041.947,
      poster_path: '/aajCqg315CoJPu1NmgPCkbRjnl6.jpg',
      release_date: '2024-01-19',
      title: 'Sixty Minutes',
      video: false,
      vote_average: 7.019,
      vote_count: 265,
    },
    {
      adult: false,
      backdrop_path: '/yyFc8Iclt2jxPmLztbP617xXllT.jpg',
      genre_ids: [35, 10751, 14],
      id: 787699,
      original_language: 'en',
      original_title: 'Wonka',
      overview:
        'Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.',
      popularity: 1758.657,
      poster_path: '/qhb1qOilapbapxWQn9jtRCMwXJF.jpg',
      release_date: '2023-12-06',
      title: 'Wonka',
      video: false,
      vote_average: 7.214,
      vote_count: 2026,
    },
    {
      adult: false,
      backdrop_path: '/criPrxkTggCra1jch49jsiSeXo1.jpg',
      genre_ids: [878, 12, 28],
      id: 609681,
      original_language: 'en',
      original_title: 'The Marvels',
      overview:
        'Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.',
      popularity: 1634.973,
      poster_path: '/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg',
      release_date: '2023-11-08',
      title: 'The Marvels',
      video: false,
      vote_average: 6.312,
      vote_count: 1590,
    },
    {
      adult: false,
      backdrop_path: '/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg',
      genre_ids: [28, 35, 80],
      id: 955916,
      original_language: 'en',
      original_title: 'Lift',
      overview:
        'An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.',
      popularity: 1521.009,
      poster_path: '/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg',
      release_date: '2024-01-10',
      title: 'Lift',
      video: false,
      vote_average: 6.589,
      vote_count: 738,
    },
    {
      adult: false,
      backdrop_path: '/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg',
      genre_ids: [28, 53, 18],
      id: 866398,
      original_language: 'en',
      original_title: 'The Beekeeper',
      overview:
        'One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.',
      popularity: 1451.512,
      poster_path: '/A7EByudX0eOzlkQ2FIbogzyazm2.jpg',
      release_date: '2024-01-10',
      title: 'The Beekeeper',
      video: false,
      vote_average: 7.3,
      vote_count: 1008,
    },
    {
      adult: false,
      backdrop_path: '/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg',
      genre_ids: [28, 12, 14],
      id: 572802,
      original_language: 'en',
      original_title: 'Aquaman and the Lost Kingdom',
      overview:
        "Black Manta seeks revenge on Aquaman for his father's death. Wielding the Black Trident's power, he becomes a formidable foe. To defend Atlantis, Aquaman forges an alliance with his imprisoned brother. They must protect the kingdom.",
      popularity: 1268.816,
      poster_path: '/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg',
      release_date: '2023-12-20',
      title: 'Aquaman and the Lost Kingdom',
      video: false,
      vote_average: 6.918,
      vote_count: 1590,
    },
    {
      adult: false,
      backdrop_path: '/meyhnvssZOPPjud4F1CjOb4snET.jpg',
      genre_ids: [16, 28, 12, 35, 10751],
      id: 940551,
      original_language: 'en',
      original_title: 'Migration',
      overview:
        'After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.',
      popularity: 1266.962,
      poster_path: '/ldfCF9RhR40mppkzmftxapaHeTo.jpg',
      release_date: '2023-12-06',
      title: 'Migration',
      video: false,
      vote_average: 7.66,
      vote_count: 597,
    },
    {
      adult: false,
      backdrop_path: '/ehumsuIBbgAe1hg343oszCLrAfI.jpg',
      genre_ids: [16, 10751, 14, 12],
      id: 1022796,
      original_language: 'en',
      original_title: 'Wish',
      overview:
        'Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.',
      popularity: 1255.902,
      poster_path: '/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg',
      release_date: '2023-11-13',
      title: 'Wish',
      video: false,
      vote_average: 6.642,
      vote_count: 685,
    },
    {
      adult: false,
      backdrop_path: '/8GnWDLn2AhnmkQ7hlQ9NJUYobSS.jpg',
      genre_ids: [18, 878, 28],
      id: 695721,
      original_language: 'en',
      original_title: 'The Hunger Games: The Ballad of Songbirds & Snakes',
      overview:
        '64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.',
      popularity: 1217.148,
      poster_path: '/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg',
      release_date: '2023-11-15',
      title: 'The Hunger Games: The Ballad of Songbirds & Snakes',
      video: false,
      vote_average: 7.2,
      vote_count: 1690,
    },
    {
      adult: false,
      backdrop_path: '/zLj0peaxy5y2SlC6wNIQ4V0pfqg.jpg',
      genre_ids: [16, 10751, 35, 14],
      id: 1139829,
      original_language: 'en',
      original_title: 'Orion and the Dark',
      overview:
        'A boy with an active imagination faces his fears on an unforgettable journey through the night with his new friend: a giant, smiling creature named Dark.',
      popularity: 1089.639,
      poster_path: '/N2ddXhBX5kqwA9flbm2yqFtX6b.jpg',
      release_date: '2024-02-02',
      title: 'Orion and the Dark',
      video: false,
      vote_average: 6.809,
      vote_count: 157,
    },
    {
      adult: false,
      backdrop_path: '/r9oTasGQofvkQY5vlUXglneF64Z.jpg',
      genre_ids: [28, 35],
      id: 1029575,
      original_language: 'en',
      original_title: 'The Family Plan',
      overview:
        "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
      popularity: 1030.466,
      poster_path: '/a6syn9qcU4a54Lmi3JoIr1XvhFU.jpg',
      release_date: '2023-12-14',
      title: 'The Family Plan',
      video: false,
      vote_average: 7.348,
      vote_count: 879,
    },
    {
      adult: false,
      backdrop_path: '/sRLC052ieEzkQs9dEtPMfFxYkej.jpg',
      genre_ids: [878, 18, 28],
      id: 848326,
      original_language: 'en',
      original_title: 'Rebel Moon - Part One: A Child of Fire',
      overview:
        'When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.',
      popularity: 1020.18,
      poster_path: '/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg',
      release_date: '2023-12-15',
      title: 'Rebel Moon - Part One: A Child of Fire',
      video: false,
      vote_average: 6.413,
      vote_count: 1398,
    },
    {
      adult: false,
      backdrop_path: '/ay0PJQZizDXk0pzhoGX4v7K9h7A.jpg',
      genre_ids: [28, 53],
      id: 1214314,
      original_language: 'en',
      original_title: 'One More Shot',
      overview:
        'Following the attack on the black site in Poland, Navy SEAL Jake Harris is ordered to escort terrorist suspect Amin Mansur to Washington D.C. for interrogation. Before the prisoner transfer process is complete, though, the airport is attacked by a group of heavily armed, well-trained mercenaries.',
      popularity: 1015.987,
      poster_path: '/nQ1BQg4yMdlYSHvHZgwladzy7EF.jpg',
      release_date: '2024-01-12',
      title: 'One More Shot',
      video: false,
      vote_average: 6.804,
      vote_count: 102,
    },
    {
      adult: false,
      backdrop_path: '/acpFrSmVLnTNAIuHxnZArkC3dwU.jpg',
      genre_ids: [16, 28, 12, 10751, 14],
      id: 598387,
      original_language: 'en',
      original_title: "The Tiger's Apprentice",
      overview:
        'After the death of his grandmother, Tom Lee discovers he is part of a long lineage of magical protectors known as the Guardians. With guidance from a mythical tiger named Hu and the other Zodiac animal warriors, Tom trains to take on an evil force that threatens humanity.',
      popularity: 962.004,
      poster_path: '/iiid1xMhoAcW83VJ9LdAqf4Vtbr.jpg',
      release_date: '2024-02-02',
      title: "The Tiger's Apprentice",
      video: false,
      vote_average: 7.1,
      vote_count: 39,
    },
    {
      adult: false,
      backdrop_path: '/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg',
      genre_ids: [28, 35, 10749],
      id: 848187,
      original_language: 'en',
      original_title: 'Role Play',
      overview:
        'Emma has a wonderful husband and two kids in the suburbs of New Jersey – she also has a secret life as an assassin for hire – a secret that her husband David discovers when the couple decide to spice up their marriage with a little role play.',
      popularity: 958.002,
      poster_path: '/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg',
      release_date: '2024-01-04',
      title: 'Role Play',
      video: false,
      vote_average: 6.01,
      vote_count: 305,
    },
    {
      adult: false,
      backdrop_path: '/47SVqaO02doJ06tOmrjiWDkwU3T.jpg',
      genre_ids: [28, 53],
      id: 927107,
      original_language: 'en',
      original_title: 'The Bricklayer',
      overview:
        'Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.',
      popularity: 917.298,
      poster_path: '/36pYugctLa70NmwMEgXTR1G31Kq.jpg',
      release_date: '2023-12-14',
      title: 'The Bricklayer',
      video: false,
      vote_average: 6.227,
      vote_count: 86,
    },
    {
      adult: false,
      backdrop_path: '/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg',
      genre_ids: [28, 12, 53, 80, 18],
      id: 891699,
      original_language: 'en',
      original_title: 'Silent Night',
      overview:
        "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
      popularity: 914.134,
      poster_path: '/nJCP1ZNTPKlZ7S0Kv3gbmuraAT4.jpg',
      release_date: '2023-11-30',
      title: 'Silent Night',
      video: false,
      vote_average: 6.4,
      vote_count: 430,
    },
    {
      adult: false,
      backdrop_path: '/6OnoMgGFuZ921eV8v8yEyXoag19.jpg',
      genre_ids: [28, 53],
      id: 1211957,
      original_language: 'en',
      original_title: 'The Painter',
      overview:
        'An ex-CIA operative is thrown back into a dangerous world when a mysterious woman from his past resurfaces. Now exposed and targeted by a relentless killer and a rogue black ops program, he must rely on skills he thought he left behind in a high-stakes game of survival.',
      popularity: 879.778,
      poster_path: '/UZ0ydgbXtnrq8xZCI5lHVXVcH9.jpg',
      release_date: '2024-01-05',
      title: 'The Painter',
      video: false,
      vote_average: 7.087,
      vote_count: 52,
    },
    {
      adult: false,
      backdrop_path: '/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg',
      genre_ids: [28, 35],
      id: 897087,
      original_language: 'en',
      original_title: 'Freelance',
      overview:
        'An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.',
      popularity: 866.996,
      poster_path: '/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg',
      release_date: '2023-10-05',
      title: 'Freelance',
      video: false,
      vote_average: 6.568,
      vote_count: 535,
    },
  ],
  total_pages: 42439,
  total_results: 848763,
};

export const filmData = {
  adult: false,
  backdrop_path: '/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg',
  belongs_to_collection: {
    backdrop_path: '/9iJi448p9cvnpnLN7C0jBFjSseX.jpg',
    id: 1196130,
    name: 'Concrete Utopia Collection',
    poster_path: '/l4emA6jN9YQxhdpoZ4IThpMofc6.jpg',
  },
  budget: 0,
  genres: [
    {id: 878, name: 'Science Fiction'},
    {id: 28, name: 'Action'},
    {id: 18, name: 'Drama'},
  ],
  homepage: 'https://www.netflix.com/title/81721676',
  id: 933131,
  imdb_id: 'tt29722855',
  kind: 'ok',
  original_language: 'ko',
  original_title: '황야',
  overview:
    'After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.',
  popularity: 2655.112,
  poster_path: '/24CL0ySodCF8bcm38xtBeHzHp7W.jpg',
  production_companies: [
    {
      id: 127541,
      logo_path: '/Aq35mXuZv7lhPm8a60YKRaB9Vek.png',
      name: 'Climax Studios',
      origin_country: 'KR',
    },
    {id: 159339, logo_path: null, name: 'Nova Film', origin_country: 'KR'},
    {
      id: 129217,
      logo_path: null,
      name: 'Big Punch Pictures',
      origin_country: 'KR',
    },
    {
      id: 7819,
      logo_path: '/ghFZAt4edln0M7BzDExyYMzUGX1.png',
      name: 'Lotte Entertainment',
      origin_country: 'KR',
    },
  ],
  production_countries: [{iso_3166_1: 'KR', name: 'South Korea'}],
  release_date: '2024-01-26',
  revenue: 0,
  runtime: 109,
  spoken_languages: [
    {english_name: 'Korean', iso_639_1: 'ko', name: '한국어/조선말'},
  ],
  status: 'Released',
  tagline: 'One last hunt to save us all.',
  title: 'Badland Hunters',
  video: false,
  vote_average: 6.772,
  vote_count: 303,
};

export const fakeImage =
  'https://media.licdn.com/dms/image/C4D03AQFk4momJ6BhRw/profile-displayphoto-shrink_800_800/0/1616879811901?e=1713398400&v=beta&t=ZW6w6kk4xCPKcT62uJKtv1qTtFGCsJUEfTWtWCUmuJo';

// images
export const getImage500px = path => `https://image.tmdb.org/t/p/w500/${path}`;
export const getImage342px = path => `https://image.tmdb.org/t/p/w500/${path}`;
export const getImage185px = path => `https://image.tmdb.org/t/p/w500/${path}`;
export const noImage = require('../assets/no-image.webp');

//  utils
export const getImage = (movie): IMovie => {
  if (movie?.poster_path) {
    // console.log(`we have poster`, movie.title);
    return {uri: `${getImage500px(movie.poster_path)}`};
  } else if (movie?.backdrop_path) {
    // console.log(`we have backdrop`, movie.title);
    return {uri: `${getImage500px(movie.backdrop_path)}`};
  } else {
    // console.log(`we have no image`, movie.title);
    return noImage;
  }
};
