import React, { useState } from "react";
import HeroesList from "./HeroesList";
import styled from "styled-components";
import Title from "./Title";
import Information from "./Information";
import Pictures from "./Pictures";
import Menu from "./Menu";

const HeroesPage = () => {




  const info = [
    {
      titlePart1: "IRON",
      titlePart2: "MAN",
      desc: `Iron Man is a fictional superhero in the Marvel Comics universe, first
      created by writer and editor Stan Lee, developed by Larry Lieber, and
      designed by artists Don Heck and Jack Kirby. The character made his
      debut in "Tales of Suspense" #39 in 1963 and is known for his real
      name.
      <br />
      Tony Stark, a genius billionaire, inventor, and philanthropist. Stark
      becomes Iron Man after crafting a suit of advanced armor with various
      technological features. Iron Man is a core member of the Avengers, a
      team of superheroes dedicated to protecting the world from threats.
      His iconic red and gold suit, equipped with an array of gadgets and
      weaponry, is powered by an arc reactor embedded in his chest. Tony
      Stark's character is complex, dealing with personal struggles, such as
      alcoholism, and the moral responsibility of his inventions. <br />
      His wit, intelligence, and charisma make him a beloved and enduring
      figure in the Marvel Universe, portrayed on the big screen by Robert
      Downey Jr. in the Marvel Cinematic Universe. Iron Man's popularity
      transcends comics, becoming a symbol of innovation and heroism.`,
      imageUrl:"/ironmanPoster.png",
      background:"linear-gradient(90deg, rgba(63,0,0,1) 0%, rgba(220,0,0,0.9669117647058824) 100%)",

    },
    {
      titlePart1: "CAPTAIN",
      titlePart2: "AMERICA",
      desc: `
      Captain America, a beloved Marvel Comics character, first appeared in "Captain America Comics" #1 in March 1941, co-created by Joe Simon and Jack Kirby. His real name is Steve Rogers, a frail but determined young man who volunteers for a super-soldier experiment during World War II. The experiment transforms him into the pinnacle of human physicality and a symbol of American heroism. He wields a vibranium shield, which is virtually indestructible, and uses it both for defense and as a ranged weapon. Captain America is known for his unwavering sense of justice, unyielding moral code, and dedication to protecting the innocent. As a leader and strategist, he often leads superhero teams like the Avengers. His iconic costume, featuring the star-spangled shield, has become a symbol of heroism worldwide. Captain America's character embodies the values of courage, honor, and sacrifice, making him a symbol of hope and inspiration not only in the comic book world but also in popular culture. His adventures continue to captivate readers and viewers across generations.
      

      `,
      imageUrl:"/america captain.png",
      background:"linear-gradient(90deg, rgba(0,5,57,1) 10%, rgba(0,45,220,0.9669117647058824) 100%)"
    },
    {
      titlePart1: "THOR",
      titlePart2: "",
      desc: `
      Thor, a legendary Marvel Comics character, made his debut in "Journey into Mystery" #83 in August 1962, created by writer Stan Lee, artist Jack Kirby, and scripter Larry Lieber. He hails from the realm of Asgard, the Norse god of thunder and son of Odin, the Allfather. Thor is easily recognizable by his mighty enchanted hammer, Mjolnir, which grants him incredible strength and the ability to control lightning. He is often referred to as the God of Thunder, known for wielding the immense power of storms. His character embodies nobility, honor, and a deep sense of responsibility, making him a central figure in the Marvel Universe. Thor is a member of the Avengers and has played a pivotal role in many of Marvel's major storylines. The character's complex personality, blending his regal demeanor with a love for battle and a deep compassion for mortals, has endeared him to fans worldwide. Thor's enduring legacy extends beyond comics, with Chris Hemsworth's portrayal in the Marvel Cinematic Universe further solidifying his status as an iconic superhero.      

      `,
      imageUrl:"/thorfree.png",
      background:"linear-gradient(90deg, rgba(0,56,74,1) 22%, rgba(0,237,255,1) 100%)"
    },
    {
      titlePart1: "HULK",
      titlePart2: "",
      desc: `
      The Hulk, a classic Marvel Comics character, first appeared in "The Incredible Hulk" #1 in May 1962, created by writer Stan Lee and artist Jack Kirby. Dr. Bruce Banner, the character's alter ego, transforms into the Hulk when exposed to gamma radiation during a laboratory accident. The Hulk is known for his colossal size, immense strength, and incredible resilience. His physical power is virtually limitless, and his strength increases with his level of anger or stress. Despite his destructive tendencies, the Hulk is not a villain but rather a complex anti-hero. He often struggles to control his rage and finds himself at odds with his human side, Dr. Banner. The character has been a core member of superhero teams like the Avengers, contributing his immense power to protect the world from various threats. The Hulk's iconic green appearance and catchphrase, "Hulk smash," have become cultural symbols in the world of comics and beyond. His story explores themes of identity, control, and the consequences of unchecked power, making the Hulk one of Marvel's most enduring and psychologically intriguing characters.
      `,
      imageUrl:"/hulk.png",
      background:"linear-gradient(90deg, rgba(6,74,0,1) 28%, rgba(0,216,39,1) 100%)"
    },
    {
      titlePart1: "BLACK",
      titlePart2: "WIDOW",
      desc: `
      Black Widow, a prominent Marvel Comics character, made her debut in "Tales of Suspense" #52 in April 1964, created by writer Stan Lee, artist Don Heck, and scriptwriter Don Rico. Her real name is Natasha Romanoff, and she's known as a highly skilled spy, assassin, and superhero. Black Widow is a former Russian operative who later becomes an integral member of the superhero team, the Avengers. She possesses exceptional combat skills, espionage expertise, and is a master of hand-to-hand combat. Her character is defined by her enigmatic and complex past, often shrouded in secrecy and moral ambiguity. Black Widow has undergone significant character development, evolving from a villainous spy to a heroic figure fighting for justice. Natasha Romanoff is known for her striking appearance, featuring a black bodysuit, red hair, and her signature "Widow's Bite" wrist gauntlets that release electric shocks. Scarlett Johansson's portrayal of Black Widow in the Marvel Cinematic Universe has further solidified the character's popularity, showcasing her resilience and dedication to the greater good. Black Widow's intriguing backstory and her role as a female superhero have made her a significant and influential character in the comic book world.
      `,
      imageUrl:"/BlackWidow1.png",
      background:"linear-gradient(90deg, rgba(72,74,0,1) 10%, rgba(245,255,0,1) 100%)"
    },
    {
      titlePart1: "HAWKEYE",
      titlePart2: "",
      desc: `
      Hawkeye, a Marvel Comics character, first appeared in "Tales of Suspense" #57 in September 1964, created by writer Stan Lee and artist Don Heck. His real name is Clint Barton, and he's known for being one of the world's greatest archers and a core member of the superhero team, the Avengers. Clint Barton possesses unparalleled accuracy and skill with a bow and arrows, making him a formidable marksman in combat. He's often referred to as the "master marksman" of the Marvel Universe. Hawkeye's character is characterized by his brash and confident personality, often serving as the team's sharp-witted and resourceful member. He doesn't possess superhuman powers but relies on his extensive training and weaponry. Throughout his comic book history, Hawkeye has undergone significant character development, showcasing his determination to stand alongside superpowered heroes and make a difference with his unique skills. The character has garnered further popularity through Jeremy Renner's portrayal in the Marvel Cinematic Universe, solidifying Hawkeye's place as a beloved and relatable figure among fans of comic books and superhero media.
      `,
      imageUrl:"/hawkeye-poster.png",
      background:"linear-gradient(90deg, rgba(41,0,74,1) 10%, rgba(175,0,255,1) 100%)"
    },
  ];

  const [selectId, setSelectId] = useState(0);

// console.log(info[selectId].imageUrl)
// const red="green"
  // console.log(setSelectId);

  
  return (
    <Box>
      <Page gradient={info[selectId].background}>
        <Content>
          <HeroesList setSelectId={setSelectId} />
          <Information info={info[selectId]} />
          <Pictures imageUrl={info[selectId].imageUrl}/>
          
        </Content>
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
  background: ${(props)=>(props.gradient)};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 1500px;
  overflow: hidden;
  
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
`;



export default HeroesPage;
