import { Question } from '../../types/quiz';

// Higher-order comprehension questions for Dreams from My Father chapters 10-19.
// Set: main idea + tone/mood + two higher-order questions per chapter
// (character trait, inference, or author's point). Sample passages are
// paraphrased prose, never verbatim book quotes.
export const OBAMA_COMP_B: Record<string, Question[]> = {
  "obama-dreams-ch10": [
    {
      id: "od10-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Barack decides to quit organizing and move to a new neighborhood",
        "Ruby opens a beauty shop selling blue contact lenses to her friends",
        "During a hard winter of organizing, Barack wrestles with questions of Black identity and pride, concluding that slogans and self-esteem cannot fix problems like poverty",
        "Rafiq's Black nationalism solves all of Chicago's problems"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Through a cold winter of organizing, Barack watches residents fight over parking spaces and skip meetings while he wrestles with what Black pride really means. The blue contact lenses Ruby wears spark a painful conversation about beauty and self-worth, and talk of Black nationalism from Rafiq pushes Barack to conclude that pride is a powerful feeling but not a working plan. In the end he decides that poverty does more damage than poor self-esteem.",
      hint: "The passage names what Barack wrestles with all winter and what he finally decides harms people most.",
      explanation: "The chapter's central thread is Barack's struggle with Black identity — through the lenses, Rafiq's nationalism, and the play — ending in his conclusion that pride and slogans cannot undo poverty."
    },
    {
      id: "od10-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Serious",
        "Playful",
        "Cheerful",
        "Comical"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Barack trudges through a bitter winter listening to stories of sacrifice and illness, argues with himself over identity and power, and regrets a careless remark to a friend. Even the evening at the theater ends in thoughtful silence on the drive home.",
      hint: "The passage describes a heavy mood, from winter hardship to a silent ride home.",
      explanation: "Nothing in the chapter is light or funny — it is a season of hard questions, regret, and reflection, so the tone is serious."
    },
    {
      id: "od10-13",
      question: "Which of these best describes Barack in this chapter?",
      options: [
        "Completely confident — he never doubts any of his own ideas",
        "Indifferent to others — he ignores Ruby and Rafiq",
        "Quick to accept slogans — he embraces Rafiq's nationalism without question",
        "Thoughtful and self-critical — he regrets his harsh remark to Ruby and keeps rethinking his own beliefs"
      ],
      correctAnswerIndex: 3,
      samplePassage: "When Barack blurts out a rude comment about the blue contact lenses Ruby wears, he regrets it at once. He keeps turning his own assumptions over in his mind, first about whether self-esteem can save people and then about whether the nationalism Rafiq preaches is a real plan or only a feeling.",
      hint: "The passage shows Barack regretting his own words and questioning his own ideas.",
      explanation: "Barack is honest with himself — he admits his comment to Ruby was wrong and keeps testing his beliefs instead of settling for easy answers."
    },
    {
      id: "od10-14",
      question: "Which of these best demonstrates the author's point that pride and slogans cannot fix real problems?",
      options: [
        "Marty's claim that winter makes organizing easy and fun",
        "Barack's conclusion that telling people to feel proud will not undo the damage of poverty",
        "Rafiq's belief that refusing to join protests shows true strength",
        "The success of the Nation of Islam toiletry line, which made millions"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Barack watches a Nation of Islam toiletry line rise and fall because white people still control the markets. He decides that the nationalism Rafiq preaches is a successful emotion but not a successful program, and that while self-esteem might help, poverty does more harm than poor self-esteem.",
      hint: "The passage names what Barack decides matters more than feelings of pride.",
      explanation: "The chapter's point is that feelings of pride, however powerful, are not a plan — real change has to confront poverty and who controls the markets."
    }
  ],
  "obama-dreams-ch11": [
    {
      id: "od11-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Auma's visit from Germany brings Barack the painful story of the Old Man's rise and fall, ending with her plea that they go home to Kenya",
        "Barack and Auma spend ten days touring German universities",
        "The Old Man writes letters inviting Barack to visit Nairobi",
        "Auma's headmistress visits Chicago to collect unpaid school fees"
      ],
      correctAnswerIndex: 0,
      samplePassage: "When Auma arrives from Germany, she spends ten days telling Barack the story of their father, the Old Man: his return from America, his work in Nairobi, his blacklisting by the president, his drinking, and his death. The visit ends at the airport with Auma saying they must go home to Alego and see their father.",
      hint: "The passage traces the Old Man's whole story and ends with Auma's request at the airport.",
      explanation: "The chapter is built around Auma telling their father's tragic story and the decision it forces: Barack must finally face his father's past in Kenya."
    },
    {
      id: "od11-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Playful",
        "Triumphant",
        "Hopeful",
        "Sorrowful"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Auma describes a brilliant father destroyed by blacklisting and drink, a mother who could not pay school fees, children left behind, and a death that came too soon. Even the small comforts, like the scholarship from the headmistress, sit inside a story of loss.",
      hint: "The passage is filled with loss, from ruined careers to a father's death.",
      explanation: "The chapter is a painful family history of downfall and death, so its tone is sorrowful."
    },
    {
      id: "od11-13",
      question: "Which of these best describes Auma in this chapter?",
      options: [
        "Secretive — she hides the story of the Old Man from Barack",
        "Brave and honest — she tells Barack painful truths about their father even though they hurt",
        "Indifferent — she does not care about her family or its past",
        "Fearful of the future — she refuses to leave Germany"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Over ten days Auma lays out the whole painful story of the Old Man, from his early success to his blacklisting, his drinking, and his death. She does not soften the hard parts, and she ends by telling Barack they must go home to Alego and face their father together.",
      hint: "The passage shows Auma telling hard truths and urging Barack to face them.",
      explanation: "Auma is brave enough to tell the painful truth about their father and honest enough to insist they confront it together."
    },
    {
      id: "od11-14",
      question: "What can you infer from Auma's plea that she and Barack go home to Alego?",
      options: [
        "Auma wants to move to Alego and never return to Germany",
        "Auma believes Barack is afraid of flying",
        "Auma believes visiting their father's home will help them both understand him",
        "Auma wants Barack to pay for her trip"
      ],
      correctAnswerIndex: 2,
      samplePassage: "At the airport Auma tells Barack they need to go home to Alego and see their father. She has just spent ten days trying to explain the Old Man to her brother, and she wants them to stand together where the Old Man is buried.",
      hint: "The passage connects Auma's long story to her wish to visit their father's home.",
      explanation: "After spending ten days explaining their father, Auma's plea to visit Alego shows she believes standing where he lived and died will help them truly understand him."
    }
  ],
  "obama-dreams-ch12": [
    {
      id: "od12-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Mayor Harold Washington personally repairs every toilet in Altgeld",
        "Dr. Collier invites Barack to a parents' meeting and nothing else happens",
        "Barack gives up on organizing after only eight people show up downtown",
        "A small, determined group of Altgeld residents uses a press conference to force officials to promise asbestos testing"
      ],
      correctAnswerIndex: 3,
      samplePassage: "After the ribbon cutting for the MET center, Sadie brings Barack a legal notice about asbestos removal. When weeks of calls go unanswered, only eight people agree to ride downtown, but a surprise news crew turns the press conference Sadie gives into leverage, and officials promise to begin testing the apartments at once.",
      hint: "The passage shows how a tiny group plus reporters won a promise from officials.",
      explanation: "The chapter's heart is the asbestos fight: a handful of residents, ignored for weeks, finally force action by speaking to the press."
    },
    {
      id: "od12-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Bored",
        "Determined",
        "Gloomy",
        "Playful"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Sadie will not let the asbestos question go. She corners the property manager, demands test results, rounds up neighbors for a downtown trip, and speaks to reporters even though she is nervous. Barack keeps pushing even when the office of the mayor will not return his calls.",
      hint: "The passage shows Sadie and Barack refusing to give up.",
      explanation: "Despite tiny numbers and official stonewalling, the group keeps pushing — a determined tone from start to finish."
    },
    {
      id: "od12-13",
      question: "Which of these best demonstrates the author's point that ordinary people can make powerful officials listen?",
      options: [
        "The mayor solves every neighborhood problem on his own",
        "Officials always keep their promises without any pressure",
        "Eight residents and a surprise news crew force the CHA director's office to promise testing",
        "Sadie gives up after her first meeting with Mr. Anderson fails"
      ],
      correctAnswerIndex: 2,
      samplePassage: "For weeks nobody returns their calls. Then eight residents ride downtown, a news crew happens to arrive, Sadie gives a press conference, and the assistant to the director hurries everyone into a conference room where testing is finally promised.",
      hint: "The passage shows ignored residents suddenly being heard once reporters appear.",
      explanation: "The chapter's point is that power listens when ordinary people refuse to be ignored — especially with the press watching."
    },
    {
      id: "od12-14",
      question: "What can you infer from Mr. Anderson sputtering when Sadie asks to see the test results?",
      options: [
        "He likely knew no testing had been done and did not want to admit it",
        "He was thrilled to show off the excellent test results",
        "He had lost the results in a fire",
        "He was angry that Sadie cared about her neighbors"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Mr. Anderson assures Sadie there is no asbestos, but when she asks to see the test results he sputters and cannot produce them. Later the group learns the apartments have never been tested at all.",
      hint: "The passage shows his confident claim collapsing when proof is requested.",
      explanation: "His sputtering is a tell: he claimed there was no danger but could not back it up, because no testing had ever happened."
    }
  ],
  "obama-dreams-ch13": [
    {
      id: "od13-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Barack and Kyle play one game of basketball and become best friends",
        "A year after the asbestos fight, Barack faces a South Side overwhelmed by guns and drugs, mentoring youth and building programs while confronting the limits of his work",
        "Dr. King hands out resumes and hires his whole family",
        "Barack moves to Washington, D.C. to live with Roy"
      ],
      correctAnswerIndex: 1,
      samplePassage: "By 1987 the South Side has grown more desperate, with boys carrying guns and neighbors in wheelchairs. Barack mentors the angry teenager Kyle, helps build a tutoring and mentoring network, and visits his struggling brother Roy in Washington, D.C., all while wondering whether his work can ever be enough.",
      hint: "The passage names the year, the crisis, and Barack's efforts to respond.",
      explanation: "The chapter shows Barack up against a deepening crisis — drugs, guns, despair — trying to help through mentoring and programs while doubting they are enough."
    },
    {
      id: "od13-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Cheerful",
        "Playful",
        "Troubled",
        "Bored"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Boys snap young saplings, young men sit in wheelchairs, and gunfire sends Barack and Johnnie diving to the ground. Kyle has given up on his dreams, and Roy blames the Old Man for a lifetime of unhappiness.",
      hint: "The passage lists signs of a neighborhood in crisis.",
      explanation: "Violence, despair, and broken dreams fill the chapter — a troubled tone throughout."
    },
    {
      id: "od13-13",
      question: "Which of these best describes Barack in this chapter?",
      options: [
        "Committed but discouraged — he keeps mentoring youth even as the violence makes him question his work",
        "Carefree — he ignores the neighborhood's problems",
        "Defeated — he gives up on the South Side completely",
        "Judgmental — he blames residents for their troubles"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Barack takes Kyle to play basketball and keeps showing up for the neighborhood, helping to build a counseling network for tutoring and mentoring. At the same time he admits to Johnnie that he is not sure the work can ever be enough, and he begins to think about leaving for law school.",
      hint: "The passage shows Barack working hard while doubting the work's impact.",
      explanation: "Barack stays committed — mentoring Kyle, building programs — but the worsening crisis leaves him discouraged about whether organizing alone can fix it."
    },
    {
      id: "od13-14",
      question: "What can you infer from Kyle's claim that they will never let a Black man fly a plane?",
      options: [
        "Kyle has already applied to the air force and been accepted",
        "Kyle knows many Black pilots personally",
        "Kyle loves basketball more than flying",
        "Kyle has absorbed the belief that racism will block his dreams, so he has given up on the air force"
      ],
      correctAnswerIndex: 3,
      samplePassage: "When Barack asks whether Kyle is still thinking about joining the air force, Kyle insists they will never let a Black man fly a plane and says he will stay in Chicago. His mother is frightened by his angry behavior, and Barack realizes the boy has stopped believing in his own future.",
      hint: "The passage links Kyle's words to his decision to stay in Chicago.",
      explanation: "Kyle's words reveal he has internalized the idea that racism makes his dream impossible — which is why he has given up before even trying."
    }
  ],
  "obama-dreams-ch14": [
    {
      id: "od14-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Barack visits Trinity Church in October and counts its four thousand members",
        "Mary congratulates Barack warmly at his farewell luncheon",
        "After years of organizing and Harold Washington's sudden death, Barack finds a spiritual home at Trinity Church, weeping during a sermon about hope",
        "Barack decides to run for mayor to replace Harold Washington"
      ],
      correctAnswerIndex: 2,
      samplePassage: "With law school ahead and Harold Washington suddenly gone, Barack finally visits the Trinity Church led by Reverend Wright. During a sermon about keeping hope in a fallen world, he realizes the church carries the stories of Black people forward, and he weeps without realizing it.",
      hint: "The passage names the sermon theme and what Barack realizes about the church.",
      explanation: "The chapter's arc is Barack's search for belonging ending at Trinity — where a sermon on hope moves him to tears and gives him a spiritual home."
    },
    {
      id: "od14-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Fearful",
        "Hopeful",
        "Angry",
        "Gloomy"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Reverend Wright preaches about keeping hope in a fallen world, the choir sings, and people cry out and rise. Barack feels the church carrying stories forward and leaves with a sense that faith can hold a community together.",
      hint: "The passage centers on a sermon about hope.",
      explanation: "Even amid Washington's death and farewells, the chapter's emotional center is hope — the sermon's theme and Barack's response to it."
    },
    {
      id: "od14-13",
      question: "Which of these best describes Reverend Wright in this chapter?",
      options: [
        "Inspiring and ambitious for his church — he preaches hope and is building a new sanctuary for thousands of members",
        "Dismissive of young people — he ignores men like Barack",
        "Focused only on money — he cares only about donations",
        "Timid — he avoids speaking about hard truths"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Reverend Wright is building a new sanctuary for a church of four thousand members, with clubs for every age. He tells Barack that young men are the hardest to reach, and his sermon about hope in a fallen world moves the whole congregation, including Barack, to tears.",
      hint: "The passage shows Wright's big plans and the power of his preaching.",
      explanation: "Wright is both a visionary builder and a powerful preacher — he aims to grow the church and reaches even a skeptical visitor like Barack."
    },
    {
      id: "od14-14",
      question: "What can you infer from the fact that Barack did not realize he was crying during the sermon?",
      options: [
        "Barack was bored and falling asleep",
        "Barack was angry at Reverend Wright",
        "Barack had planned to cry to impress the congregation",
        "The sermon touched him so deeply that his feelings surfaced before he noticed"
      ],
      correctAnswerIndex: 3,
      samplePassage: "As the choir sings, the boy next to Barack offers him a tissue, and Barack is surprised to take it. He had not realized tears were running down his face during the sermon about hope.",
      hint: "The passage shows the tears arriving before Barack noticed them.",
      explanation: "Unnoticed tears mean the feeling came from deep inside — the sermon's message of hope reached Barack before his mind even caught up."
    }
  ],
  "obama-dreams-ch15": [
    {
      id: "od15-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Barack's joyful arrival in Nairobi — lost luggage but a warm family welcome — begins his discovery of a Kenya where family connections matter most",
        "Auma's VW Beetle breaks down and strands them at the airport",
        "Barack spends the whole chapter shopping alone at the Nairobi market",
        "The British Airways manager personally apologizes and upgrades Barack's ticket"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Barack lands in Nairobi to find his bag sent to Johannesburg, but Miss Omoro recognizes his family name, and Auma and Aunt Zeituni welcome him warmly. Over the next days the family feeds him, teases him, argues over him, and teaches him that in Kenya things get done through family, friends, and tribe.",
      hint: "The passage contrasts the lost bag with the warm welcome and the lesson about Kenya.",
      explanation: "The chapter is Barack's homecoming — a joyful, chaotic welcome that teaches him how Kenya really works."
    },
    {
      id: "od15-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Bored",
        "Angry",
        "Excited",
        "Nervous"
      ],
      correctAnswerIndex: 2,
      samplePassage: "A stranger recognizes his name for the first time, Auma arrives in her rattling Beetle, relatives crowd around him with food and questions, and the market bursts with color and bargaining. Barack feels a thrill of belonging he has never known.",
      hint: "The passage lists one happy surprise after another.",
      explanation: "From the airport to the family apartment, the chapter hums with the excitement of a long-awaited homecoming."
    },
    {
      id: "od15-13",
      question: "Which of these best describes Auma in this chapter?",
      options: [
        "Cold and distant — she ignores Barack after the airport",
        "Ashamed of her family — she hides Barack from her relatives",
        "Lazy — she lets Barack handle everything on his own",
        "Caring and protective — she meets Barack at the airport and guides him through his first days in Kenya"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Auma is waiting when Barack lands, drives him through Nairobi, takes him to the market, explains what it means to get lost, and brings him to the crowded apartment of Aunt Jane so the whole family can meet him.",
      hint: "The passage shows Auma at Barack's side through every first-day experience.",
      explanation: "Auma acts as Barack's guide and protector — meeting him, teaching him, and folding him into the family."
    },
    {
      id: "od15-14",
      question: "Which of these best demonstrates the author's point that in Kenya, personal connections get things done?",
      options: [
        "The airline quickly fixes the lost-bag mistake on its own",
        "A relative who knows the British Airways manager is the only one who gets Barack's bag delivered",
        "Barack buys his way out of every problem with American money",
        "Officials at the airport always follow the rules fairly"
      ],
      correctAnswerIndex: 1,
      samplePassage: "After two days of no help at the airline office, a relative appears who knows the British Airways manager, and with his prodding the manager arranges delivery that same day. Auma explains that in Kenya you get things done through family, friends, or tribe.",
      hint: "The passage names whose connection solved the problem.",
      explanation: "Rules and offices failed Barack for two days; one family connection succeeded in hours — the chapter's lesson about how Kenya works."
    }
  ],
  "obama-dreams-ch16": [
    {
      id: "od16-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Bernard becomes a basketball star and moves to America",
        "Abo is delighted with the cassette player Barack brings him",
        "Zeituni advises Barack to give money to everyone who asks",
        "Meeting the wider Kenyan family exposes old quarrels and divided loyalties — Sarah's bitterness, Ruth's new life, and Mark's rejection of his roots"
      ],
      correctAnswerIndex: 3,
      samplePassage: "In Nairobi Barack meets relatives who pull him in different directions. Sarah spits out bitter claims and demands money, Ruth has built a comfortable new life with a husband who is not the Old Man, and Mark tells Barack flatly that he wants nothing to do with his Kenyan past.",
      hint: "The passage names three relatives with three very different attitudes.",
      explanation: "The chapter is about the messy reality of family — old wounds, competing claims, and a brother who has walked away from his heritage."
    },
    {
      id: "od16-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Tense",
        "Relaxed",
        "Cheerful",
        "Sleepy"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Sarah spits her accusations in a cramped Mathare apartment, Zeituni hurries Barack out before things get worse, and lunch with Mark turns cold as he declares his resentment of the Old Man. Even the basketball game ends with Bernard worn out and dreaming of a business that does not exist.",
      hint: "The passage shows one uncomfortable encounter after another.",
      explanation: "Bitter accusations, demands for money, and a brother's cold rejection make the chapter tense throughout."
    },
    {
      id: "od16-13",
      question: "Which of these best describes Mark in this chapter?",
      options: [
        "Warm and welcoming — he embraces Barack as a brother",
        "Proud of his heritage — he studies Luo traditions",
        "Bitter and distant — he resents the Old Man and wants nothing to do with his Kenyan roots",
        "Forgiving — he speaks kindly of their father"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Over lunch Mark tells Barack he is studying physics at Stanford, that he loves Shakespeare and Beethoven, and that he resents the Old Man and is cutting himself off from his Kenyan roots.",
      hint: "The passage names what Mark loves and what he is cutting off.",
      explanation: "Mark has turned away from his Kenyan identity, holding onto resentment of the Old Man instead."
    },
    {
      id: "od16-14",
      question: "What can you infer from Mark's love of Shakespeare and Beethoven combined with his rejection of his Kenyan roots?",
      options: [
        "Mark plans to move back to Kenya next year",
        "Mark has chosen to identify with Western culture instead of his Kenyan heritage",
        "Mark has forgotten how to speak English",
        "Mark wants Barack to teach him Luo"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Mark fills the lunch with talk of Shakespeare and Beethoven and physics at Stanford, then tells Barack he resents the Old Man and is cutting himself off from his Kenyan roots.",
      hint: "The passage pairs his Western tastes with his break from Kenya.",
      explanation: "Mark's tastes and his stated break from Kenya point to one conclusion: he has chosen a Western identity over his Kenyan one."
    }
  ],
  "obama-dreams-ch17": [
    {
      id: "od17-11",
      question: "What is the main idea of this chapter?",
      options: [
        "The safari group lists every animal in Kenya and nothing else happens",
        "The safari and the family feast give Barack joy and belonging, while Roy's confession about David adds a painful note of family grief",
        "Barack argues with Francis and leaves the safari early",
        "Roy's import-export business becomes an instant success"
      ],
      correctAnswerIndex: 1,
      samplePassage: "On safari Barack watches gazelle, wildebeest, and zebras, debates faith and colonialism around the campfire, and comes home to a feast celebrating the arrival of Roy. Then Roy shares the painful secret of the night David died, and Barack helps him lay the guilt to rest.",
      hint: "The passage moves from safari joy to a feast to a painful confession.",
      explanation: "The chapter balances celebration — the safari, the feast, the dancing — with the grief Roy has carried about David."
    },
    {
      id: "od17-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Gloomy",
        "Boring",
        "Frightening",
        "Joyful"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The van rolls past herds of grazing animals, the campfire crackles with debate, and back in Nairobi the family throws a feast with music and dancing. Even Roy, after unburdening his secret, leaps up to dance.",
      hint: "The passage describes animals, a feast, music, and dancing.",
      explanation: "Safari wonders, a family feast, and dancing make this one of the book's most joyful chapters."
    },
    {
      id: "od17-13",
      question: "Which of these best describes Roy in this chapter?",
      options: [
        "Generous but guilt-ridden — he celebrates with the family while carrying secret guilt about David's death",
        "Selfish — he refuses to share anything with the family",
        "Untroubled — nothing from his past bothers him",
        "Distant — he avoids Barack and tells him nothing"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Roy arrives with his girlfriend Amy, plans a business selling Kenyan crafts in America, and pours a beer on the floor when he announces his marriage plans. Later, outside the club, he confesses to Barack that he was in jail the night David died and has blamed himself ever since.",
      hint: "The passage shows Roy celebrating, then confessing a long-held guilt.",
      explanation: "Roy is big-hearted and festive, but beneath the celebration he has been carrying guilt about David's death for years."
    },
    {
      id: "od17-14",
      question: "Which of these best demonstrates the author's point that sharing a painful truth can bring relief?",
      options: [
        "Roy keeps his secret forever and feels worse every year",
        "The family pretends David never existed",
        "After confessing his secret about David, Roy leaps up to dance",
        "Roy decides to leave Kenya and never speak of David again"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Outside the club Roy finally tells Barack the truth about the night David died: he had been in jail, and David was fetching his papers. Barack assures him it was an accident, and Roy leaps up to dance.",
      hint: "The passage shows what Roy does right after unburdening himself.",
      explanation: "Roy's leap into dance right after confessing shows the relief that comes from finally speaking a painful truth aloud."
    }
  ],
  "obama-dreams-ch18": [
    {
      id: "od18-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Barack rides the train to Kisumu and learns railway history, nothing more",
        "Abo is thrilled with the cassette player and thanks Barack warmly",
        "The journey to the ancestral home in Alego connects Barack to his family's past — Granny's welcome, the graves, and Sayid's wisdom about the Old Man",
        "The family decides to sell Home Squared and move to Nairobi"
      ],
      correctAnswerIndex: 2,
      samplePassage: "The train, the matatus, and a long walk bring the family to Home Squared in Alego. Granny welcomes Barack into a house whose walls are covered with the diploma of the Old Man and family photos, Roy shows him the two family tombs, and Sayid shares hard-won wisdom about the great error of the Old Man.",
      hint: "The passage names the home, the welcome, the graves, and the wisdom.",
      explanation: "The chapter is a homecoming to the family's roots — the land, the graves, and the stories that finally make Barack's father real to him."
    },
    {
      id: "od18-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Angry",
        "Silly",
        "Rushed",
        "Reflective"
      ],
      correctAnswerIndex: 3,
      samplePassage: "On the train Barack stares out the window thinking about the railway the British built and the year his grandfather was born. At Home Squared he studies old photos, listens to stories of Onyango, and stands quietly before the family tombs.",
      hint: "The passage shows Barack thinking, listening, and standing quietly.",
      explanation: "The chapter moves slowly through memory and history — Barack reflecting on where his family came from."
    },
    {
      id: "od18-13",
      question: "Which of these best describes Granny in this chapter?",
      options: [
        "Cold — she refuses to speak with Barack",
        "Proud and welcoming — she shows Barack the Old Man's diploma and photos, and asks him to carry a message to Omar",
        "Ashamed of the family — she hides the photos from visitors",
        "Forgetful — she cannot remember anything about the Old Man"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Granny leads Barack into a house whose walls are covered with the diploma of the Old Man and family photos. Over tea she tells him she has not heard from her son Omar in over a year and asks Barack to tell Omar to come home if they ever meet.",
      hint: "The passage shows Granny displaying family honors and asking a favor about Omar.",
      explanation: "Granny is proud of her family's achievements and warm toward Barack — she displays the diploma like a shrine and trusts him with a message for Omar."
    },
    {
      id: "od18-14",
      question: "What can you infer from Sayid's warning that Roy is like the Old Man?",
      options: [
        "Sayid worries that Roy will repeat the Old Man's mistakes",
        "Sayid believes Roy is smarter than the Old Man ever was",
        "Sayid wants Roy to leave Kenya immediately",
        "Sayid has never met the Old Man"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Sayid tells Barack that Roy is like the Old Man, who used to buy drinks for everyone. He explains that the great error of the Old Man was wanting so badly to belong that he never learned to say no, and his generosity clashed with the discipline his work required.",
      hint: "The passage links Roy to the Old Man's great error.",
      explanation: "By comparing Roy to the Old Man and naming the Old Man's error, Sayid is warning that Roy could fall into the same trap."
    }
  ],
  "obama-dreams-ch19": [
    {
      id: "od19-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Granny's full account of Onyango and the Old Man ends with Barack weeping at his father's grave, finally at peace with his family's past",
        "Barack counts seven generations and writes them in a notebook",
        "Onyango's servant register proves he was a wealthy king",
        "Barack decides his family history is too painful to think about ever again"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Granny tells the whole story, from the harsh rise of Onyango to the brilliance and downfall of the Old Man. Standing before the graves, Barack feels all the parts of his life connect to that plot of land, and he weeps as the rain begins to fall.",
      hint: "The passage moves from Granny's long story to Barack's tears at the graves.",
      explanation: "The chapter completes Barack's journey — Granny's history gives him the full truth, and at the graves he finally feels whole."
    },
    {
      id: "od19-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Cheerful",
        "Sorrowful",
        "Playful",
        "Curious"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Granny recounts a father disowning his son, a mother running away, children lost on the road to Kendu, and a brilliant man destroyed by drink. Barack stands weeping before the graves as rain falls.",
      hint: "The passage is filled with loss and ends in tears.",
      explanation: "Disownment, abandonment, and death fill Granny's story — the tone is sorrowful even as Barack finds peace."
    },
    {
      id: "od19-13",
      question: "Which of these best describes Onyango as Granny describes him?",
      options: [
        "Lazy — he refused to work",
        "Gentle — he never punished anyone",
        "Indifferent — he did not care about his family",
        "Harsh but hardworking — he demanded strict discipline yet built a thriving farm in Alego"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Granny describes how Onyango forced the move to Alego and used Western farming techniques to turn the bush into a profitable farm within a year. At the same time he ruled the household with a stick, striking anyone who broke proper etiquette.",
      hint: "The passage pairs Onyango's farming success with his strict punishments.",
      explanation: "Onyango was both — a tireless worker who built a farm from bush, and a harsh disciplinarian the grandchildren called The Terror."
    },
    {
      id: "od19-14",
      question: "What can you infer from Barack calling the Old Man's letters his true inheritance?",
      options: [
        "Barack plans to sell the letters for a lot of money",
        "Barack is disappointed that the trunk held no gold",
        "He values understanding his father's story more than money or property",
        "Barack wants to burn the letters and forget the past"
      ],
      correctAnswerIndex: 2,
      samplePassage: "From the old leather trunk Granny brings out the register of domestic servants and the letters the Old Man wrote to American universities. Barack calls them his true inheritance, the papers that finally let him know his father.",
      hint: "The passage names what Barack treasures from the trunk and why.",
      explanation: "Calling old letters an inheritance shows Barack values the truth about his father above any material wealth."
    }
  ],
};
