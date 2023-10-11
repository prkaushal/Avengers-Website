import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Movie from "./Movie";

const MoviesPage = () => {
  const movies = [
    {
      imageUrl: "/guardiansofthegalaxyvolume3_lob_crd_03.jpg",
      movietitle: "Guardians Of The Galaxy Volume3",
      moviedesc: `
      "Guardians of the Galaxy Vol. 3," slated for release in 2023, is the highly anticipated third installment in the popular Guardians of the Galaxy film series within the Marvel Cinematic Universe (MCU). Directed by James Gunn, the film reunites the beloved group of misfit heroes, including Star-Lord, Rocket, Groot, Drax, and Gamora. It is expected to delve into unresolved character arcs and explore the cosmic side of the MCU. With Gunn's signature blend of humor, music, and heart, "Volume 3" promises to deliver another unforgettable space adventure while setting the stage for the MCU's future cosmic storytelling.
      `,
    },
    {
      imageUrl: "/antman3.jpg",
      movietitle: "Ant Man And The Wasp Quantumania",
      moviedesc: `
      "Ant-Man and The Wasp: Quantumania," scheduled for release in 2023, is the third installment in the Ant-Man film series within the Marvel Cinematic Universe (MCU). The movie continues the adventures of Scott Lang, portrayed by Paul Rudd, as he embraces his role as Ant-Man. It introduces Kang the Conqueror, portrayed by Jonathan Majors, as the primary antagonist, a powerful time-traveling villain. Directed by Peyton Reed, the film promises to delve into quantum physics, time travel, and the consequences of manipulating the Quantum Realm. "Quantumania" is expected to deliver a blend of humor, science-fiction, and thrilling action, expanding the MCU's exploration of alternate dimensions.
      `,
    },
    {
      imageUrl: "/blackpantherwakandaforever_lob_crd_06.jpg",
      movietitle: "Black Panther Wakanda Forever",
      moviedesc:`
      "Black Panther: Wakanda Forever," set to release in 2022, is a highly anticipated sequel to the groundbreaking "Black Panther" film. The movie faces the unique challenge of continuing the story of Wakanda and the legacy of Chadwick Boseman's T'Challa, who tragically passed away. It is expected to explore the world of Wakanda further, introduce new characters, and honor Boseman's portrayal of the iconic hero. Directed by Ryan Coogler, "Wakanda Forever" is poised to be a tribute to both the character of T'Challa and the cultural impact of the first film. The film carries the weight of continuing the legacy of "Black Panther" in the Marvel Cinematic Universe.
      ` ,
    },
    {
      imageUrl: "/thorloveandthunder_lob_crd_04.jpg",
      movietitle: "Thor Love and Thunder",
      moviedesc: `
      "Thor: Love and Thunder," scheduled for release in 2022, is the fourth installment in the Thor film series within the Marvel Cinematic Universe (MCU). Directed by Taika Waititi, who previously helmed "Thor: Ragnarok," the movie continues the adventures of Thor, portrayed by Chris Hemsworth, and explores his relationship with Jane Foster, who will become the Mighty Thor, played by Natalie Portman. The film promises to blend cosmic elements, humor, and epic battles, with the return of characters like Valkyrie and the Guardians of the Galaxy. "Love and Thunder" is expected to take the MCU in exciting and unexpected directions, further expanding the Thor mythos.
      `,
    },
    {
      imageUrl: "/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
      movietitle: "Doctor Strange The Multiverse Of Madness",
      moviedesc: `
      "Doctor Strange in the Multiverse of Madness," set to release in 2022, is a highly anticipated installment in the Marvel Cinematic Universe (MCU). The film continues the journey of Dr. Stephen Strange, portrayed by Benedict Cumberbatch, as he grapples with the mystical and multiverse-threatening challenges. It is expected to explore the consequences of tampering with the multiverse, with Wanda Maximoff, the Scarlet Witch, playing a significant role. Directed by Sam Raimi, known for his work on the "Spider-Man" trilogy, the movie promises to blend mind-bending visuals with dark and mystical storytelling. "Multiverse of Madness" is poised to be a pivotal entry in the MCU's Phase Four.
      `,
    },
    {
      imageUrl: "/spider-mannowayhome_lob_crd_03.jpg",
      movietitle: "Spiderman No Way Home",
      moviedesc: `
      "Spider-Man: No Way Home," released in 2021, is a highly anticipated installment in the Spider-Man franchise within the Marvel Cinematic Universe (MCU). The film follows Peter Parker, portrayed by Tom Holland, as he grapples with the consequences of his secret identity being exposed and seeks the help of Doctor Strange to erase everyone's memory of him being Spider-Man. The movie features the return of iconic villains from previous Spider-Man film series, creating a multiverse of Spider-Man adventures. "No Way Home" is known for its mind-bending plot, thrilling action, and emotional depth, becoming a major milestone in the MCU and Spider-Man lore.
      `,
    },
    {
      imageUrl: "/eternals_lob_crd_06.jpg",
      movietitle: "Eternals",
      moviedesc: `
      "Eternals," released in 2021, is a unique addition to the Marvel Cinematic Universe (MCU) that introduces a group of immortal beings known as the Eternals. Directed by Chloé Zhao, the film explores the Eternals' role in Earth's history and their mission to protect humanity from the Deviants, their ancient enemies. The movie features a diverse ensemble cast, including Angelina Jolie, Richard Madden, and Salma Hayek, and delves into themes of identity and purpose. "Eternals" is known for its epic scale, philosophical questions, and the introduction of new cosmic elements to the MCU. It sets the stage for the MCU's future cosmic adventures.
      `,
    },
    {
      imageUrl: "/shangchi_lob_crd_07.jpg",
      movietitle: "Shang Chi",
      moviedesc: `
      "Shang-Chi and the Legend of the Ten Rings," released in 2021, is a groundbreaking Marvel film that introduces Shang-Chi, portrayed by Simu Liu, as the titular hero. The movie explores Shang-Chi's journey from being trained as an assassin by the mysterious Ten Rings organization to his quest to stop their dangerous plans. "Shang-Chi" is celebrated for its cultural representation, martial arts choreography, and stunning visuals. It introduces the mystical and fantastical elements of the MCU while also tying into its larger narrative. The film received critical acclaim and marked a significant step forward for Asian representation in superhero cinema.
      `,
    },
    {
      imageUrl: "/blackwidow_lob_crd_06.jpg",
      movietitle: "Black Widow",
      moviedesc: `
      "Black Widow," released in 2021, is a standalone film that delves into the backstory of Natasha Romanoff, portrayed by Scarlett Johansson. The movie is set after the events of "Captain America: Civil War" and explores Natasha's past as a trained assassin and her ties to the enigmatic Red Room. "Black Widow" introduces new characters, including Yelena Belova, portrayed by Florence Pugh, and explores the complex dynamics of found family. With its mix of espionage, action, and character-driven storytelling, the film provides a deeper understanding of Natasha's character and her place in the Marvel Cinematic Universe (MCU).
      `,
    },
    {
      imageUrl: "/spider-manfarfromhome_lob_crd_04_3.jpg",
      movietitle: "Spider Man Far From Home",
      moviedesc: `
      "Spider-Man: Far From Home," released in 2019, is the second solo film featuring Tom Holland as Peter Parker/Spider-Man within the Marvel Cinematic Universe (MCU). The story takes Peter and his classmates on a European vacation, but his plans are disrupted when Nick Fury enlists him to battle elemental creatures alongside Mysterio, portrayed by Jake Gyllenhaal. The film explores Peter's struggle to balance his responsibilities as a hero and a high school student while dealing with the legacy of Tony Stark. "Far From Home" is known for its thrilling action sequences and the expansion of the Spider-Man mythology within the MCU.
      `,
    },
    {
      imageUrl: "/avengersendgame_lob_crd_05_2.jpg",
      movietitle: "Avengers Endgame",
      moviedesc: `
      "Avengers: Endgame," released in 2019, is an epic conclusion to the Infinity Saga in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo, the film follows the remaining Avengers as they work to undo the catastrophic effects of Thanos' snap from "Infinity War." The movie is marked by emotional depth, character development, and jaw-dropping battles. "Endgame" pays homage to the entire MCU history, delivering a satisfying conclusion to several beloved character arcs. With its ensemble cast and unforgettable moments, it became one of the highest-grossing films of all time, leaving an indelible mark on superhero cinema.
      `,
    },
    {
      imageUrl: "/captainmarvel_lob_crd_06.jpg",
      movietitle: "Captain Marvel",
      moviedesc: `
      "Captain Marvel," released in 2019, is a pivotal entry in the Marvel Cinematic Universe (MCU). Brie Larson stars as Carol Danvers, a former U.S. Air Force pilot who becomes Captain Marvel, one of the most powerful heroes in the MCU. The film is set in the 1990s and delves into Carol's origin story while also tying into the broader MCU narrative. "Captain Marvel" showcases themes of empowerment and the strength of women. It features stunning visual effects and introduces the Skrulls, a shape-shifting alien race. The film's arrival marked a significant step forward for female representation in superhero cinema.
      `,
    },
    {
      imageUrl: "/antman2.jpg",
      movietitle: "Ant Man And The Wasp",
      moviedesc: `
      "Ant-Man and The Wasp," released in 2018, is the sequel to Marvel's "Ant-Man." Paul Rudd reprises his role as Scott Lang, aka Ant-Man, while Evangeline Lilly joins him as the Wasp, Hope Van Dyne. The film explores the Quantum Realm, technology, and the search for Janet Van Dyne, the original Wasp, played by Michelle Pfeiffer. The movie strikes a balance between humor and action, utilizing the heroes' shrinking and enlarging abilities for inventive sequences. "Ant-Man and The Wasp" is a lighthearted and entertaining addition to the Marvel Cinematic Universe.
      `,
    },
    {
      imageUrl: "/avengersinfinitywar_lob_crd_02_1.jpg",
      movietitle: "Avengers Infinity War",
      moviedesc: `
      "Avengers: Infinity War," released in 2018, is a monumental Marvel Cinematic Universe (MCU) film that brings together nearly all the major characters from previous MCU movies to face the formidable Thanos, played by Josh Brolin. Thanos seeks to obtain all six Infinity Stones to achieve god-like power and reshape the universe. The film is marked by epic battles, emotional depth, and the high stakes of the heroes' struggle to stop Thanos. With its shocking ending, "Infinity War" left audiences eagerly anticipating its sequel, "Avengers: Endgame," and showcased the magnitude of storytelling that the MCU could achieve.
      `,
    },
    {
      imageUrl: "/blackpanther_lob_crd_01_4.jpg",
      movietitle: "Black Panther",
      moviedesc: `
      "Black Panther," released in 2018, is a groundbreaking Marvel Cinematic Universe (MCU) film that celebrates African culture and introduces the enigmatic hero, T'Challa, portrayed by Chadwick Boseman. The movie explores the fictional African nation of Wakanda, a technologically advanced and isolated kingdom with vibranium, a powerful resource. T'Challa, who is also the Black Panther, must defend his throne and the nation from internal and external threats, including Erik Killmonger, portrayed by Michael B. Jordan. "Black Panther" received widespread acclaim for its representation, cultural significance, and compelling storytelling, becoming a cultural phenomenon and a tribute to Chadwick Boseman's legacy.
      `,
    },
    {
      imageUrl: "/thorragnarok_lob_crd_03.jpg",
      movietitle: "Thor Ragnarok",
      moviedesc: `
      "Thor: Ragnarok," released in 2017, is the third installment in the Thor film series within the Marvel Cinematic Universe (MCU). Directed by Taika Waititi, it takes a more comedic and colorful approach, infusing humor into the character of Thor. The film follows Thor's quest to prevent the destruction of Asgard by the ruthless Hela, his sister and the Goddess of Death, portrayed by Cate Blanchett. Along the way, Thor is forced into gladiatorial combat on the planet Sakaar, where he reunites with the Hulk and Loki. "Ragnarok" is known for its vibrant visuals, witty humor, and a fresh take on the God of Thunder's character, revitalizing the franchise.
      `,
    },
    {
      imageUrl: "/spider-manhomecoming_lob_crd_02.jpg",
      movietitle: "Spider Man Homecoming",
      moviedesc: `
      "Spider-Man: Homecoming," released in 2017, marks Spider-Man's official entry into the Marvel Cinematic Universe (MCU). Tom Holland portrays Peter Parker, a high school student who juggles the challenges of being a teenager and a superhero. The film explores Peter's desire to prove himself to his mentor, Tony Stark (Iron Man), while dealing with the villainous Vulture, portrayed by Michael Keaton. "Homecoming" is praised for its youthful and light-hearted tone, emphasizing the relatable struggles of a young superhero. It blends humor, action, and heart, making it a fan-favorite installment in the MCU.
      `,
    },
    {
      imageUrl: "/guardiansofthegalaxyvol.2_lob_crd_01.jpg",
      movietitle: "Guardians Of The Galaxy Vol.2",
      moviedesc: `
      "Guardians of the Galaxy Vol. 2," released in 2017, is the sequel to the popular Marvel Cinematic Universe (MCU) film. Directed by James Gunn, the movie continues the adventures of the misfit group of heroes, including Star-Lord, Rocket, Gamora, Drax, and the lovable Baby Groot. The film delves into the personal backgrounds of the characters, particularly Star-Lord's relationship with his father, Ego the Living Planet. With its signature humor, fantastic soundtrack, and visually stunning sequences, "Guardians of the Galaxy Vol. 2" is another hit in the MCU, celebrating the power of found families and the importance of embracing one's identity.
      `,
    },
    {
      imageUrl: "/doctorstrange_lob_crd_01_6.jpg",
      movietitle: "Doctor Strange",
      moviedesc: `
      "Doctor Strange," released in 2016, is a Marvel Cinematic Universe (MCU) film that introduces Dr. Stephen Strange, portrayed by Benedict Cumberbatch. Dr. Strange is a brilliant neurosurgeon whose life takes a dramatic turn after a car accident leaves his hands damaged. Desperate for a cure, he seeks mystical healing in the ancient and mystical Kamar-Taj. There, he learns the mystic arts under the guidance of the Ancient One and becomes the Sorcerer Supreme. The film explores themes of magic, alternate dimensions, and the responsibility that comes with wielding incredible power in the MCU.
      `,
    },
    {
      imageUrl: "/captainamericacivilwar_lob_crd_01_9.jpg",
      movietitle: "Captain America Civil War",
      moviedesc: `
      "Captain America: Civil War," released in 2016 and directed by Anthony and Joe Russo, is a monumental entry in the Marvel Cinematic Universe. The film pits hero against hero as the Avengers are divided over government oversight and accountability. Captain America, portrayed by Chris Evans, and Iron Man, played by Robert Downey Jr., lead opposing sides in a morally complex conflict. The movie introduces new characters like Black Panther (Chadwick Boseman) and Spider-Man (Tom Holland) while deepening the emotional arcs of familiar faces. With its high-stakes action sequences and thought-provoking themes of freedom and responsibility, "Civil War" is a masterclass in superhero storytelling. It challenges the very nature of heroism and explores the consequences of power, leaving a lasting impact on the MCU and setting the stage for future narratives.
      `,
    },
    {
      imageUrl: "/antman1.jpg",
      movietitle: "Ant Man",
      moviedesc: `
      "Ant-Man," released in 2015 and directed by Peyton Reed, brings a unique and comedic twist to the Marvel Cinematic Universe. The film follows Scott Lang, portrayed by Paul Rudd, as he takes on the mantle of Ant-Man under the mentorship of Dr. Hank Pym, played by Michael Douglas. Equipped with a suit that grants him the ability to shrink in size while increasing in strength, Lang must pull off a heist to prevent the misuse of Pym's groundbreaking technology. "Ant-Man" balances humor, heart, and inventive action sequences, allowing Rudd's charisma to shine. It's a refreshing departure from the grand-scale superhero films, offering a smaller, more personal story that still ties into the larger MCU. With its clever exploration of size manipulation and a strong cast, "Ant-Man" adds a delightful and unexpected dimension to the superhero genre.
      `,
    },
    {
      imageUrl: "/avengersageofultron_lob_crd_03.jpg",
      movietitle: "Avengers Age Of Ultron",
      moviedesc: `
      "Avengers: Age of Ultron," released in 2015 and directed by Joss Whedon, is an action-packed and emotionally charged installment in the Marvel Cinematic Universe. The film reunites Earth's mightiest heroes, including Iron Man, Thor, Captain America, Hulk, Black Widow, and Hawkeye, as they face off against the formidable artificial intelligence, Ultron, voiced by James Spader. The movie explores complex themes of artificial intelligence, the consequences of power, and the nature of heroism. It introduces new characters like Scarlet Witch (Elizabeth Olsen) and Quicksilver (Aaron Taylor-Johnson), who add depth to the team dynamics. With breathtaking action sequences and character-driven storytelling, "Age of Ultron" deepens the personal struggles of the Avengers while setting the stage for future conflicts within the MCU. The film also marks a turning point in the evolution of several key characters, making it a significant chapter in the overarching narrative of the franchise.
      `,
    },
    {
      imageUrl: "/guardiansofthegalaxy_lob_crd_03.jpg",
      movietitle: "Guardians Of The Galaxy",
      moviedesc: `
      "Guardians of the Galaxy," released in 2014 and directed by James Gunn, is a refreshing and irreverent addition to the Marvel Cinematic Universe. The film introduces a motley crew of unlikely heroes, including Peter Quill, aka Star-Lord (Chris Pratt), Gamora (Zoe Saldana), Drax (Dave Bautista), Rocket (voiced by Bradley Cooper), and Groot (voiced by Vin Diesel). Set against a vibrant and cosmic backdrop, the movie combines humor, heart, and a killer '70s and '80s soundtrack to create a unique space opera. The chemistry among the Guardians is electric, and their quest to stop the power-hungry Ronan the Accuser (Lee Pace) is both entertaining and emotionally resonant. "Guardians of the Galaxy" not only expands the MCU's scope beyond Earth but also proves that even a group of misfits can come together to save the day. It quickly became a fan favorite and a testament to Marvel's ability to take risks and tell fresh, adventurous stories within its cinematic universe.
      `,
    },
    {
      imageUrl: "/captainamericathewintersoldier_lob_crd_01_1.jpg",
      movietitle: "Captain America The Winter Soldier",
      moviedesc: `
      "Captain America: The Winter Soldier," released in 2014 and directed by Anthony and Joe Russo, is a standout entry in the Marvel Cinematic Universe. The film follows Steve Rogers, aka Captain America, played by Chris Evans, as he grapples with the complexities of a modern world filled with political intrigue and espionage. The emergence of the mysterious Winter Soldier, portrayed by Sebastian Stan, adds a thrilling element of suspense and emotion to the story. With its grounded, spy-thriller tone and thought-provoking themes of surveillance and freedom, the film elevates the superhero genre. The action sequences are brilliantly choreographed, showcasing Captain America's unparalleled combat skills. "The Winter Soldier" not only deepens the character of Steve Rogers but also has a profound impact on the larger MCU, setting the stage for dramatic changes and consequences that ripple through subsequent films.
      `,
    },
    {
      imageUrl: "/thorthedarkworld_lob_crd_02_1.jpg",
      movietitle: "Thor The Dark World",
      moviedesc: `
      "Thor: The Dark World," released in 2013, continues the adventures of the God of Thunder in the Marvel Cinematic Universe. Directed by Alan Taylor, the film explores the realms beyond Earth as Thor, played by Chris Hemsworth, battles a malevolent ancient force known as the Dark Elves, led by the formidable Malekith, played by Christopher Eccleston. The movie weaves together elements of myth, magic, and science fiction, offering breathtaking visuals and epic battles across different realms. While it may not be as critically acclaimed as some other MCU entries, "Thor: The Dark World" expands on the character's development and relationships, notably his bond with Loki, portrayed by Tom Hiddleston. It adds layers to the overarching narrative of the MCU and serves as a bridge to future events, making it a significant installment in the Marvel saga.
      `,
    },
    {
      imageUrl: "/ironman3_lob_crd_01_10.jpg",
      movietitle: "Iron Man 3",
      moviedesc: `
      "Iron Man 3," released in 2013 and directed by Shane Black, takes Tony Stark, played by Robert Downey Jr., on a deeply personal journey. The film explores Stark's vulnerability and post-traumatic stress disorder following the events of "The Avengers." Stark faces a formidable adversary in the Mandarin, portrayed by Ben Kingsley, whose enigmatic terrorist acts pose a grave threat. The movie delves into themes of identity and resilience as Stark must rely on his ingenuity without the aid of his Iron Man suits. With a blend of humor, action, and introspection, "Iron Man 3" is a character-driven installment that challenges its hero in unexpected ways, adding depth to the iconic character while still delivering the signature spectacle and wit associated with the Marvel Cinematic Universe.
      `,
    },
    {
      imageUrl: "/theavengers_lob_crd_03.jpg",
      movietitle: "The Avengers",
      moviedesc: `
      "The Avengers," released in 2012, stands as a pivotal moment in cinematic history, uniting Marvel's most iconic superheroes in a grand spectacle. Directed by Joss Whedon, the film brings together Iron Man, Thor, Captain America, the Hulk, Black Widow, and Hawkeye to form an extraordinary team tasked with saving the world from the malevolent Loki. The movie expertly balances character development, witty banter, and explosive action sequences, showcasing the chemistry among the ensemble cast. As the heroes unite, they must overcome their differences and egos to thwart an alien invasion, culminating in an epic battle in the heart of New York City. "The Avengers" not only delivered on the promise of a shared cinematic universe but also set the standard for superhero team-up films, leaving an indelible mark on pop culture and paving the way for numerous MCU adventures to follow.
      `,
    },
    {
      imageUrl: "/captainamerica_lob_crd_01.jpg",
      movietitle: "Captain America The First Avenger",
      moviedesc: `
      "Captain America: The First Avenger," released in 2011, takes audiences back to the 1940s during World War II and tells the origin story of Steve Rogers, portrayed by Chris Evans, who transforms into the iconic Captain America. The film showcases Rogers' unwavering determination and courage as he volunteers for a super-soldier experiment, becoming a symbol of hope and patriotism. Directed by Joe Johnston, the movie beautifully captures the era's nostalgic feel while delivering thrilling action sequences. With a strong supporting cast, including Hayley Atwell as Peggy Carter and Hugo Weaving as the menacing Red Skull, the film blends superhero elements with historical context, making it a memorable and essential part of the Marvel Cinematic Universe. Captain America's journey from a scrawny underdog to a symbol of heroism is both heartwarming and inspiring, solidifying his place as one of Marvel's most beloved characters.
      `,
    },
    {
      imageUrl: "/thor_lob_crd_01.jpg",
      movietitle: "Thor",
      moviedesc: `
      "Thor," released in 2011, marked the God of Thunder's debut in the Marvel Cinematic Universe. Directed by Kenneth Branagh, the film introduced audiences to the mythical realm of Asgard, where Thor, portrayed by Chris Hemsworth, is stripped of his godly powers and banished to Earth as punishment for his arrogance. Here, Thor embarks on a journey of self-discovery and humility while forging a unique bond with scientist Jane Foster, played by Natalie Portman. As the epic narrative unfolds, the film masterfully blends grandeur with humor, balancing the otherworldly realms of Asgard with the charm of earthly settings. With stunning visuals, charismatic performances, and a compelling origin story, "Thor" laid a solid foundation for the character's evolution in the Marvel Cinematic Universe, setting the stage for his subsequent adventures and his pivotal role in the Avengers ensemble.
      `,
    },
    {
      imageUrl: "/ironman2_lob_crd_01_3 (1).jpg",
      movietitle: "Iron Man 2",
      moviedesc: `
      "Iron Man 2" is the second installment in the Marvel Cinematic Universe's Iron Man series, released in 2010. The film continues the story of billionaire inventor Tony Stark, played by Robert Downey Jr., as he grapples with the consequences of revealing his identity as Iron Man to the world. Directed by Jon Favreau, the movie delves deeper into Stark's character development, showcasing his struggles with personal demons and health issues related to his Arc Reactor. Mickey Rourke delivers a memorable performance as the villain Ivan Vanko, aka Whiplash, whose technological prowess challenges Stark's genius. Scarlett Johansson makes her debut as Natasha Romanoff, the enigmatic Black Widow, adding depth to the ever-expanding MCU. The film features exhilarating action sequences, including the epic Monaco Grand Prix battle and the climactic showdown at Stark Expo.
      `,
    },
    {
      imageUrl: "/theincrediblehulk.jpg",
      movietitle: "The Incredible Hulk",
      moviedesc:
        "The first Hulk movie, released in 2003 and directed by Ang Lee, marked a significant step in the superhero genre. The film skillfully blended psychological depth with action-packed sequences. It focused on the origin story of Dr. Bruce Banner, brilliantly portrayed by Eric Bana, whose exposure to gamma radiation transforms him into the iconic green behemoth, the Hulk. The film delved into Banner's struggle to control his anger and the destructive power within him. Ang Lee's unique visual style, including comic book-inspired split screens, lent an artistic dimension to the narrative. The movie showcased the ethical dilemmas of scientific exploration and military intervention as General Thunderbolt Ross, played by Sam Elliott, pursued the Hulk relentlessly. Despite mixed reviews, the film set the stage for future adaptations of the character, influencing the trajectory of superhero cinema.",
    },
    {
      imageUrl: "/ironman1.webp",
      movietitle: "Iron Man",
      moviedesc:
        "The inaugural Iron Man movie, released in 2008 and directed by Jon Favreau, marked a turning point in the superhero genre and launched the Marvel Cinematic Universe (MCU). Robert Downey Jr.'s charismatic portrayal of Tony Stark breathed life into the character, as the brilliant inventor evolves from a self-centered industrialist to the armored hero, Iron Man. The film's perfect blend of humor, action, and heart resonated with audiences. Set in a realistic world, the movie depicted Stark's transformation following a life-altering experience and his decision to use his technological prowess for good. The film not only introduced iconic characters like Pepper Potts (Gwyneth Paltrow) and James Rhodey Rhodes (Terrence Howard) but also laid the foundation for an interconnected universe of superheroes. Its critical and commercial success solidified Iron Man's place in cinematic history and paved the way for a new era of superhero storytelling.",
    },
  ];
  return (
    <Box>
      <Page>
        <Title>MARVEL MOVIES</Title>
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </Page>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  background-color: yellow;
`;
const Page = styled.div`
  background: rgb(141, 0, 255);
  background: linear-gradient(
    180deg,
    rgba(141, 0, 255, 1) 0%,
    rgba(77, 0, 210, 0.9669117647058824) 100%
  );
  display: flex;
  flex-direction: column;
  width: 1500px;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  color: yellow;
`;

export default MoviesPage;
