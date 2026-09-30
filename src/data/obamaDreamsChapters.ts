import { Book } from '../types/quiz';

// Chapters 3-19 of Dreams from My Father by Barack Obama.
// (Chapters 1-2 live in chapterQuizzes.ts.) Sample passages are paraphrased
// scene summaries, not verbatim book quotes.
export const OBAMA_DREAMS_CHAPTERS: Book[] = [

  {
    id: 'obama-dreams-ch3',
    title: "Dreams from My Father: Chapter 3",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "rose",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "At nine, Barack returns to Hawaii to live with his grandparents, starts fifth grade at Punahou Academy, and meets his father for the first time during a month-long Christmas visit.",
    questions: [
      {
        id: 'od3-1',
        question: "When Barack is nine, where does he go to live with Gramps and Toot?",
        options: [
          "Back to Hawaii, where they now live in a high-rise apartment",
          "To Indonesia, to rejoin Lolo in Jakarta",
          "To Kenya, to live with his father",
          "To Kansas, where his grandparents grew up"
        ],
        correctAnswerIndex: 0,
        samplePassage: "At nine years old, Barack returns to Hawaii to live with Gramps and Toot. They have changed a lot since he last saw them, and now live in a high-rise apartment where Gramps works as a life insurance agent.",
        hint: "The passage names the state and the kind of building his grandparents now live in.",
        explanation: "Barack moves back to Hawaii to live with his grandparents in their high-rise apartment. At first it is thrilling, but he soon realizes he is basically living with strangers."
      },
      {
        id: 'od3-2',
        question: "What is Gramps's job in Hawaii?",
        options: [
          "A taxi driver in Honolulu",
          "A life insurance agent whose heart is not in it",
          "A teacher at Punahou Academy",
          "A cook at a Waikiki hotel"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Gramps is now a life insurance agent, but his heart is not in it. Some nights he tells Barack about his schemes to write poems or build a house, but evenings always end with a fight between Gramps and Toot.",
        hint: "The passage names his job and says his heart is not really in it.",
        explanation: "Gramps sells life insurance, though his heart isn't in it — he'd rather talk about writing poems or building a house."
      },
      {
        id: 'od3-3',
        question: "Why do Gramps and Toot fight so often?",
        options: [
          "Gramps lost his job and they have no money",
          "Barack keeps getting in trouble at school",
          "Toot makes more money than Gramps, though she never went to college",
          "They disagree about moving back to Kansas"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Evenings always end with a fight between Gramps and Toot. They fight because Toot makes more money than Gramps, a situation she never expected since she has no college education.",
        hint: "The passage says Toot earns more than Gramps, which surprises them both.",
        explanation: "Toot earns more than Gramps despite having no college education, and the tension over this leads to constant evening fights."
      },
      {
        id: 'od3-4',
        question: "Which school does Barack start attending in Hawaii?",
        options: [
          "Honolulu Public Elementary",
          "Waikiki Junior High",
          "Kamehameha Boarding School",
          "Punahou Academy, a prestigious private school"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Barack is excited to start school and make friends, but Gramps and Toot are most excited that he will attend Punahou Academy. It is prestigious, and Gramps excitedly pores over the school catalog.",
        hint: "The passage names a prestigious academy Gramps studies the catalog for.",
        explanation: "Barack attends Punahou Academy, a prestigious private school. For Gramps, Barack's admission signals an elevation in the family's status."
      },
      {
        id: 'od3-5',
        question: "What name does Barack go by at school?",
        options: [
          "Barry",
          "Stanley",
          "Barack Jr.",
          "Hugo"
        ],
        correctAnswerIndex: 0,
        samplePassage: "On his first day, everyone titters when the teacher reads Barack's full name aloud — he goes by Barry — and asks what Kenyan tribe Barack's father is from.",
        hint: "The passage says everyone giggles when the teacher reads his full name, because he goes by something shorter.",
        explanation: "He goes by Barry. The teacher reading his full Kenyan name aloud makes him a target of teasing on day one."
      },
      {
        id: 'od3-6',
        question: "What happens between Barack and Coretta, the only other Black student, on the playground?",
        options: [
          "They become best friends and sit together at lunch",
          "He shouts at her and pushes her after other kids tease them, and they never speak again",
          "They start a club for Black students at Punahou",
          "They decide to run for student council together"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack and the only other Black student, Coretta, carefully avoid each other until one day they chase each other on the playground. As they laugh, children surround them and tease them about being boyfriend and girlfriend. Barack shouts at Coretta and pushes her, and they never speak again.",
        hint: "The passage describes a chase, teasing from other kids, and a shove that ends their contact.",
        explanation: "After other kids tease them about being boyfriend and girlfriend, Barack lashes out at Coretta and pushes her. He fixates on her disappointed look, but they never speak again."
      },
      {
        id: 'od3-7',
        question: "What does the telegram announce to the family?",
        options: [
          "Ann is moving back to Indonesia alone",
          "Gramps has been offered a new job in Kansas",
          "Barack's father is coming to stay for a month, over Christmas",
          "Punahou is closing for the winter holidays"
        ],
        correctAnswerIndex: 2,
        samplePassage: "One day, Toot reads a telegram announcing that Barack's father is coming to stay for a month, over Christmas. Barack tells the boys at school that his father is a prince, which earns him social capital — though he knows it is a lie.",
        hint: "The passage says the telegram brings news of a month-long visit over the holidays.",
        explanation: "The telegram announces that Barack's father will visit for a month over Christmas. Barack, embarrassed, tells classmates his father is a prince."
      },
      {
        id: 'od3-8',
        question: "What does Ann tell Barack about his family in Kenya before his father arrives?",
        options: [
          "He has no relatives left in Kenya",
          "His grandfather is the chief of a village",
          "He has five brothers and a sister in Kenya",
          "His father wants him to move to Kenya"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Ann arrives a few weeks before Barack's father and tells him what to expect. His father has recently been in a car accident, and Barack has five brothers and a sister in Kenya.",
        hint: "The passage lists how many half-siblings Barack has in Kenya — five of one kind and one of another.",
        explanation: "Ann tells him his father was recently in a car accident and that he has five brothers and a sister in Kenya — a family Barack never knew about."
      },
      {
        id: 'od3-9',
        question: "What gift does Barack's father give him for Christmas?",
        options: [
          "A basketball",
          "A bicycle",
          "A book about East Africa",
          "A set of wooden figurines"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Two weeks after speaking to Barack's class, his father leaves. He gives Barack a basketball for Christmas and, right before leaving, finds two records of the music of Barack's continent and teaches Barack to dance.",
        hint: "The passage names a sports gift he receives at Christmas, plus records and a dance lesson.",
        explanation: "His father gives him a basketball for Christmas. Before leaving, he also finds two records of African music and joyfully teaches Barack to dance — a memory that stays with him for life."
      },
      {
        id: 'od3-10',
        question: "Right before leaving Hawaii, what joyful thing does Barack's father share with him?",
        options: [
          "A trip to the Honolulu zoo",
          "A fishing trip off Waikiki",
          "Two records of African music and a dance lesson, laughing with joy",
          "A letter promising to visit again next year"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Right before he leaves, Barack's father finds two records of the sounds of Barack's continent. He teaches Barack to dance and laughs with joy. This memory sticks with Barack for the rest of his life.",
        hint: "The passage describes records, dancing, and laughter right before his father departs.",
        explanation: "His father plays two records of African music, teaches Barack to dance, and laughs with joy. It becomes one of Barack's most treasured memories of the visit."
      }
    ]
  },
  {
    id: 'obama-dreams-ch4',
    title: "Dreams from My Father: Chapter 4",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "amber",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "As a Punahou sophomore, Barack befriends Ray, wrestles with what it means to be a young Black man in Hawaii, and hears hard truths about race from his grandparents' friend Frank.",
    questions: [
      {
        id: 'od4-1',
        question: "Who is Ray?",
        options: [
          "A senior from Los Angeles who introduces Barack to the Black parties on the island",
          "Barack's basketball coach at Punahou",
          "A Kenyan cousin who visits Hawaii",
          "A teacher who tutors Barack in math"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack, now a high school sophomore, grouses with his friend Ray about the Punahou parties. Ray, a senior, moved to Hawaii from L.A. a year ago, and Ray introduces Barack to the Black parties on the island.",
        hint: "The passage says Ray is older, recently arrived from a big mainland city, and brings Barack into a new social world.",
        explanation: "Ray is a senior who moved from L.A. He introduces Barack to Black parties on the island and pushes Barack to think harder about racism."
      },
      {
        id: 'od4-2',
        question: "Why does Ray say that no girls will date him?",
        options: [
          "Because they are all racist",
          "Because he is too shy to ask anyone out",
          "Because he only likes girls from Los Angeles",
          "Because he spends all his time studying"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Ray moans that no girls will date him because they are all racist. Ray insists that this is also why Barack is single and why he does not get much playing time on the basketball team.",
        hint: "Ray gives the same reason for his dating troubles, Barack's, and their basketball minutes.",
        explanation: "Ray blames racism for everything — his dating life, Barack's, and their lack of basketball playing time. Barack pushes back, saying white people here just want people who look and play like them."
      },
      {
        id: 'od4-3',
        question: "When Ann has to return to Indonesia for fieldwork for her degree, what does Barack decide?",
        options: [
          "To move to Indonesia with her and Maya",
          "To stay in Hawaii with his grandparents",
          "To go live with Lolo in Jakarta",
          "To transfer to a boarding school in California"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack lived with Ann and Maya for three years, but when Ann had to return to Indonesia for fieldwork for her degree, Barack decided to stay with his grandparents. They mostly leave him alone, which suits Barack fine.",
        hint: "The passage says he chooses to remain where he is when his mother must travel for her studies.",
        explanation: "He decides to stay in Hawaii with Gramps and Toot rather than follow Ann to Indonesia. His grandparents mostly leave him alone, which suits him fine."
      },
      {
        id: 'od4-4',
        question: "Who is Frank?",
        options: [
          "Barack's homeroom teacher at Punahou",
          "A former well-known poet and Black friend of Gramps's who plays poker with him",
          "The owner of the bar in the red-light district",
          "Ray's older brother"
        ],
        correctAnswerIndex: 1,
        samplePassage: "For a time, Barack occasionally accompanies Gramps to play poker with Gramps's Black friends. One of these men, Frank, used to be a well-known poet, and he fascinates Barack while making Barack vaguely uncomfortable.",
        hint: "The passage describes him as a one-time famous writer among Gramps's poker companions.",
        explanation: "Frank is a former well-known poet and a Black friend of Gramps's. His conversations with Barack about race are fascinating and unsettling, and Barack later seeks him out for hard truths."
      },
      {
        id: 'od4-5',
        question: "Besides playing for Punahou, where else does Barack play basketball in high school?",
        options: [
          "On a team in Indonesia",
          "Only in his grandparents' driveway",
          "In a professional league in Honolulu",
          "On the university courts, where Black men teach him respect and companionship"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack turns to basketball to figure out how to be a Black man. He plays for Punahou and on the university courts, where Black men teach him respect, follow-through, and companionship.",
        hint: "The passage names a second place he plays — college courts where older Black men mentor him.",
        explanation: "On the university courts, older Black men teach him respect, follow-through, and companionship. Basketball gives him a community and introduces him to Ray and other Black boys who are also angry and confused."
      },
      {
        id: 'od4-6',
        question: "What happens when Barack brings his white friends Jeff and Scott to Ray's party?",
        options: [
          "They become the most popular guests there",
          "They challenge Ray to a basketball game",
          "They seem self-conscious and ask to leave after an hour",
          "They invite everyone to a Punahou party the next week"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Ray suggests that Barack bring their white friends Jeff and Scott to a party at Ray's house — the first time their white friends attend a Black party. Jeff and Scott are fine at first, but they seem self-conscious and ask to leave after an hour.",
        hint: "The passage says the two white friends feel awkward and want to go home early.",
        explanation: "Jeff and Scott feel self-conscious at the Black party and leave after an hour. Outside, Jeff says he gets how tough it must be for Ray and Barack at school parties — and part of Barack is enraged."
      },
      {
        id: 'od4-7',
        question: "What troubles Barack about Malcolm X?",
        options: [
          "Malcolm X never wrote any books",
          "Malcolm X wished his white blood could be expunged, which Barack knows he can never do",
          "Malcolm X refused to speak about Hawaii",
          "Malcolm X thought basketball was a waste of time"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Of all the Black authors Barack reads, Malcolm X seems to be the only one who did better — but Barack is concerned by Malcolm's wish that his white blood would be expunged. Barack knows he will never get rid of his own white blood.",
        hint: "The passage says Malcolm wanted to erase part of his own heritage — something Barack could never do.",
        explanation: "Malcolm X wished his white blood could be expunged. Barack knows he can never erase his own white heritage — and wonders what he would give up if he abandoned his white family."
      },
      {
        id: 'od4-8',
        question: "What frightens Toot at the bus stop?",
        options: [
          "A stray dog that chases her",
          "A Black panhandler who harasses her",
          "A sudden thunderstorm",
          "A car that almost hits her"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Barack learns that a Black panhandler harassed Toot yesterday at the bus stop — understandably scaring her — but Gramps is incensed that Toot was afraid of a Black man.",
        hint: "The passage describes an aggressive beggar scaring Toot while she waits for the bus.",
        explanation: "A Black panhandler harassed Toot at the bus stop, scaring her. Gramps is furious that she was afraid of a Black man, and the fight leaves Barack sad — his grandparents love him, but they're easily scared of men who could be his brothers."
      },
      {
        id: 'od4-9',
        question: "What does Frank tell Barack that Black people must do to survive?",
        options: [
          "Move to a different country",
          "Stay vigilant and never get to relax",
          "Avoid reading books about race",
          "Trust that white people will change"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Frank quietly says that Gramps cannot know what it is like to be Black. He does not understand that Black people never get to relax — they have to stay vigilant to survive.",
        hint: "The passage says Black people must remain watchful at all times just to get by.",
        explanation: "Frank tells Barack that Black people never get to relax — they must stay vigilant to survive. He also says Toot is right to be afraid, because Black people have reasons to hate. Barack leaves feeling entirely alone."
      },
      {
        id: 'od4-10',
        question: "How far apart did Frank and Gramps grow up?",
        options: [
          "In the same house",
          "Across the country from each other",
          "In different countries",
          "About fifty miles apart"
        ],
        correctAnswerIndex: 3,
        samplePassage: "After pouring whiskey, Frank shares that he and Gramps grew up fifty miles apart. He suggests that Gramps has never told Barack how Black people had to step off the sidewalk for whites, even in Kansas.",
        hint: "The passage gives a specific short distance between their childhood homes.",
        explanation: "Frank and Gramps grew up only fifty miles apart — yet Gramps never told Barack how Black people had to step off the sidewalk for whites, even in Kansas. Frank scoffs at Gramps's claim that a Black girl hired to look after Ann was a regular part of the family."
      }
    ]
  },
  {
    id: 'obama-dreams-ch5',
    title: "Dreams from My Father: Chapter 5",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "emerald",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "At Occidental College in Los Angeles, Barack confronts his high-school drug use, joins anti-apartheid protests, and begins to rethink what his identity really means.",
    questions: [
      {
        id: 'od5-1',
        question: "Who threw the party that left the apartment a mess at 3 a.m.?",
        options: [
          "Barack and his roommate Hasan",
          "Regina and Marcus",
          "Ann and Maya",
          "Gramps and Toot"
        ],
        correctAnswerIndex: 0,
        samplePassage: "It is 3 a.m. Barack pours himself a drink, looks around at his apartment — a mess after a party he and his roommate, Hasan, threw — and listens to Billie Holiday. Everyone but Regina enjoyed the party.",
        hint: "The passage names Barack's roommate as his co-host of the party.",
        explanation: "Barack and his roommate Hasan threw the party. Everyone enjoyed it except Regina, who accused Barack of being self-centered."
      },
      {
        id: 'od5-2',
        question: "In high school, what did Barack use to forget his troubles and find a community?",
        options: [
          "Drinking and drugs",
          "Long-distance running",
          "Reading Black authors",
          "Playing chess"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack's journey to learning not to care began in high school when he started drinking and using drugs, which helped him forget. Drugs gave him a community and helped him laugh.",
        hint: "The passage names two substances he turned to as a teenager.",
        explanation: "He started drinking and using drugs in high school. Drugs helped him forget and gave him a community to laugh with."
      },
      {
        id: 'od5-3',
        question: "As a teenager, what did Barack decide mostly determined a person's fate?",
        options: [
          "Mostly luck",
          "Hard work alone",
          "Having rich parents",
          "Going to a famous college"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack decided that while race and money matter, one's fate comes down mostly to luck — it was bad luck that his friends were arrested, had bad acid trips, or died in car crashes.",
        hint: "The passage says he believed chance, not effort, decided how life turned out.",
        explanation: "He decided fate came down mostly to luck — bad luck explained his friends' arrests, bad acid trips, and car crashes. It was also a way to avoid taking responsibility for his own choices."
      },
      {
        id: 'od5-4',
        question: "What was Ann afraid Barack would become?",
        options: [
          "A professional basketball player",
          "Like Gramps, who never went to college",
          "A lawyer in New York",
          "A poet like Frank"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Ann accused him of being cavalier about his future and of being a loafer. Wanting to hurt her, he suggested that he might end up like Gramps, who never went to college — and seeing her reaction, he knew he had touched a nerve.",
        hint: "The passage says his mother feared he would follow the path of his grandfather, who skipped higher education.",
        explanation: "Ann feared he would end up like Gramps, who never went to college. Her talking-to worked — he graduated and was admitted to Occidental College."
      },
      {
        id: 'od5-5',
        question: "What is the 'real price of admission' Frank warns Barack about before college?",
        options: [
          "Paying expensive tuition fees",
          "Giving up on being Black — being trained to see America as opportunity until 'they' remind him he is just a well-trained, well-paid nigger",
          "Leaving Hawaii forever",
          "Cutting ties with his grandparents"
        ],
        correctAnswerIndex: 1,
        samplePassage: "At his last visit with Frank, Frank told Barack the real price of admission: giving up on being Black. In college, Barack would be trained to believe America is the land of opportunity for all — but one day, when he wants to run things, they will remind him that he is just a well-trained, well-paid nigger. He warned Barack to keep his eyes open.",
        hint: "The passage quotes Frank's warning that college will ask him to surrender his Black identity.",
        explanation: "Frank warns that college's real price is giving up on being Black — being trained to believe in equal opportunity until the day he is reminded he is just a well-trained, well-paid Black man. He tells Barack to keep his eyes open."
      },
      {
        id: 'od5-6',
        question: "Who is Joyce?",
        options: [
          "A professor who teaches Barack economics",
          "Hasan's sister, who visits the apartment",
          "A multiracial classmate with Italian, African, French, and Native American ancestors who feels only Black people make her choose a race",
          "A nurse who helps Ann with her fieldwork"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Barack mentions Joyce, a multiracial classmate who has Italian, African, French, and Native American ancestors but feels as though it is only Black people who try to make her choose a race.",
        hint: "The passage describes a classmate with four ancestries who resents being forced to pick one.",
        explanation: "Joyce is a multiracial classmate with Italian, African, French, and Native American ancestors. She feels that only Black people try to make her choose a race — and Barack recognizes himself in her."
      },
      {
        id: 'od5-7',
        question: "After Barack mocks Tim for talking like Beaver Cleaver and says Tim should change his name to Tom, what does Marcus tell him?",
        options: [
          "To transfer to a different college",
          "To write an apology letter to Tim",
          "To stop judging others and focus on himself",
          "To join the debate team instead"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Later, Barack tells Marcus that Tim should change his name to Tom. Marcus insists that Tim is fine — but Barack should stop judging others and focus on himself.",
        hint: "The passage has Marcus turn the criticism back on Barack himself.",
        explanation: "Marcus insists Tim is fine and tells Barack to stop judging others and focus on himself. Barack still burns with shame a year later, knowing he was living a lie his first year of college."
      },
      {
        id: 'od5-8',
        question: "What does Regina ask to call Barack instead of Barry?",
        options: [
          "Bartholomew",
          "Bobby",
          "Barack",
          "Bam"
        ],
        correctAnswerIndex: 2,
        samplePassage: "They discussed Barack's name and Regina asked if she could call him Barack instead of Barry. They spent the day together talking about her childhood in Chicago, surrounded by family.",
        hint: "The passage says Regina wants to use his full first name rather than the nickname.",
        explanation: "Regina asks to call him Barack instead of Barry. They spend the day talking about her family-filled childhood in Chicago — and Barack feels himself growing and rediscovering his voice."
      },
      {
        id: 'od5-9',
        question: "What happens during Barack's speech at the anti-apartheid rally?",
        options: [
          "The audience boos him off the stage",
          "His friends, dressed in paramilitary uniforms, drag him offstage to dramatize apartheid",
          "The police cancel the rally",
          "He forgets his speech and runs away"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Barack plans to give a speech at a rally, and helps plan a bit of theater — students dressed in paramilitary uniforms will drag him offstage to make a point about apartheid. Just as the audience starts to listen, Barack's friends yank him away.",
        hint: "The passage describes costumed students pulling him away mid-speech as a planned stunt.",
        explanation: "As part of a planned piece of theater, students dressed in paramilitary uniforms drag Barack offstage to dramatize apartheid in South Africa. Part of him really wants to keep talking."
      },
      {
        id: 'od5-10',
        question: "Why does Regina leave angrily that night?",
        options: [
          "Barack refuses to walk her home",
          "Reggie laughs about Mexican maids crying at the mess from their dorm party, and Regina says her grandmother cleaned up after people like him",
          "Marcus insults her cooking",
          "The party runs out of food"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Reggie drunkenly wanders in and begins talking about a party they threw at the dorms last year. The Mexican maids began to cry when they saw the mess and Barack laughs at the memory. Shaking, Regina tells Barack that is not funny and says her grandmother cleaned up after people like him. She leaves.",
        hint: "The passage connects her anger to her grandmother's work cleaning up after careless people.",
        explanation: "When Barack laughs about Mexican maids crying at their party mess, Regina — shaking — says her grandmother cleaned up after people like him, and leaves. It forces Barack to realize that fear, not pride, made him push Coretta and mock Tim."
      }
    ]
  },
  {
    id: 'obama-dreams-ch6',
    title: "Dreams from My Father: Chapter 6",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "sky",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Barack transfers to Columbia University in New York, cleans up his life, and — after his father's death — feels pulled to search for the father he barely knew.",
    questions: [
      {
        id: 'od6-1',
        question: "Where does Barack spend his first night in Manhattan?",
        options: [
          "In an alley, because no one answered the door of the friend-of-a-friend's apartment",
          "In a fancy hotel near Times Square",
          "At Sadik's apartment",
          "In a Columbia dorm room"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack spends his first night in Manhattan in an alley. The plan was to take over the apartment of a friend of a friend — but no one answered the door.",
        hint: "The passage says his housing plan fell through and he slept outside.",
        explanation: "His plan to take over a friend-of-a-friend's apartment fails when no one answers the door, so he spends his first Manhattan night in an alley. The next morning he calls his friend Sadik."
      },
      {
        id: 'od6-2',
        question: "What does the short letter from Barack's father invite him to do?",
        options: [
          "Visit Kenya so he can know his people",
          "Apply for a job in Chicago",
          "Come back to Hawaii for Christmas",
          "Study law at Harvard"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack reads over a short letter from his father, the first he has received in years. The letter is an invitation to visit so Barack can know his people, although he wonders if it really is that simple.",
        hint: "The passage says the letter invites him to a place where he could meet his father's family.",
        explanation: "His father's letter — the first in years — invites Barack to visit so he can know his people. Barack wonders if it can really be that simple, and decides he first needs community in New York."
      },
      {
        id: 'od6-3',
        question: "Which university does Barack transfer to?",
        options: [
          "Harvard University",
          "The New School",
          "Columbia University",
          "UCLA"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Deciding he needs community, Barack signs up for a transfer program with Columbia University. There is little keeping him in L.A., as Regina and Hasan have graduated and Marcus dropped out.",
        hint: "The passage names the New York school he transfers to for a sense of community.",
        explanation: "He transfers to Columbia University in New York, seeking community. Little keeps him in L.A. — Regina and Hasan have graduated and Marcus dropped out."
      },
      {
        id: 'od6-4',
        question: "How does Barack introduce himself to Sadik's girlfriend in New York?",
        options: [
          "As Barry, like always",
          "As Barack, not Barry",
          "As B, for short",
          "He does not introduce himself at all"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack introduces himself to Sadik's current girlfriend using the name Barack, not Barry. Sadik listens to Barack's idealistic reasons for coming to New York.",
        hint: "The passage says he switches from his old nickname to his full name.",
        explanation: "Going by Barack instead of Barry is a step in his development — the name makes his heritage more obvious."
      },
      {
        id: 'od6-5',
        question: "What three changes does Barack make to clean up his life in New York?",
        options: [
          "He joins a fraternity, buys a car, and gets a dog",
          "He gives up drugs, starts running, and starts a journal",
          "He moves to Harlem, learns guitar, and takes up cooking",
          "He drops out of school, travels Europe, and writes poetry"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Eventually, they move in together. Around this time, Barack gives up drugs, starts running, and starts a journal. He applies himself to his studies and refuses invitations to go out.",
        hint: "The passage lists three healthy habits: quitting something harmful and starting two good routines.",
        explanation: "He gives up drugs, starts running, and starts a journal. He applies himself to his studies and refuses invitations to go out, choosing the straight and narrow because the city so easily corrupts people."
      },
      {
        id: 'od6-6',
        question: "Why can't Barack live in Harlem?",
        options: [
          "He is afraid of the subway",
          "The brownstones are too expensive and the tenements are uninhabitable",
          "Sadik refuses to move there",
          "Columbia forbids students from living there"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Barack attempts to live in Harlem, but the brownstones are too expensive and the tenements are uninhabitable. He is offended, but others insist this is just how New York is.",
        hint: "The passage says the nice buildings cost too much and the cheap ones are unlivable.",
        explanation: "Harlem's brownstones are too expensive and the tenements uninhabitable. In New York he also sees America's race and class problems up close — the Black community collapsing while others hold only low-paying jobs."
      },
      {
        id: 'od6-7',
        question: "What movie does Ann take Barack and Maya to see in New York?",
        options: [
          "A new action movie",
          "Black Orpheus, the first foreign film Ann ever saw when she was sixteen in Chicago",
          "A documentary about Kenya",
          "A comedy about college life"
        ],
        correctAnswerIndex: 2,
        samplePassage: "One night, Ann takes them to a showing of the movie Black Orpheus. It was the first foreign film she saw when she was sixteen and working in Chicago. Barack is disgusted, and embarrassed when he sees how much Ann loves the film.",
        hint: "The passage names a film that was Ann's first foreign movie as a teenager.",
        explanation: "Ann takes them to Black Orpheus, the first foreign film she ever saw at sixteen. Barack is disgusted and embarrassed by how much she loves it — he realizes people always look for missing parts of themselves in people of different races."
      },
      {
        id: 'od6-8',
        question: "What did Barack's grandfather Onyango write to Gramps after Ann married Barack's father?",
        options: [
          "A warm letter welcoming Ann to the family",
          "A nasty letter saying he did not want a white woman to sully the Obama blood",
          "An invitation to visit Kenya",
          "A request for money for Harvard tuition"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Ann says that right after they married, Barack's grandfather, Hussein Onyango, wrote Gramps a nasty letter saying he did not want a white woman to sully the Obama blood.",
        hint: "The passage quotes the hostile reason Onyango opposed the marriage.",
        explanation: "Onyango wrote Gramps a nasty letter saying he didn't want a white woman to sully the Obama blood, and kept writing nasty letters until Toot became hysterical."
      },
      {
        id: 'od6-9',
        question: "After his father dies, who does Barack call in the United States to share the news?",
        options: [
          "His mother Ann",
          "His friend Sadik",
          "His uncle Omar",
          "Marty Kaufman"
        ],
        correctAnswerIndex: 3,
        samplePassage: "After Barack's father dies, Barack calls his uncle Omar in the U.S. to tell him the news. He does not go to the funeral, but he writes a letter to the family in Nairobi.",
        hint: "The passage names a relative living in America whom he calls with the news.",
        explanation: "He calls his uncle Omar in the U.S. He doesn't attend the funeral but writes to the family in Nairobi — feeling no pain, just the sense that he lost an opportunity."
      },
      {
        id: 'od6-10',
        question: "A year after his father's death, what dream shakes Barack?",
        options: [
          "He dreams he is lost in the Kenyan desert",
          "He dreams he meets his father in a jail cell, and wakes up crying",
          "He dreams he is giving a speech to thousands",
          "He dreams he is back at Punahou as a student"
        ],
        correctAnswerIndex: 3,
        samplePassage: "A year later, Barack dreams that he meets his father in a jail cell, and then he wakes up crying and digs out his father's old letters. He realizes how much of a presence his father was in his life, even just as a story or an image.",
        hint: "The passage describes a dream meeting in an unlikely, confined place that leaves him in tears.",
        explanation: "He dreams of meeting his father in a jail cell and wakes up crying. Digging out his father's old letters, he realizes how present his father was in his life — even just as a story — and decides he needs to search for his father."
      }
    ]
  },
  {
    id: 'obama-dreams-ch7',
    title: "Dreams from My Father: Chapter 7",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "indigo",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "In 1983 Barack decides to become a community organizer, quits a high-paying consulting job, and accepts an offer from Marty Kaufman to organize in Chicago.",
    questions: [
      {
        id: 'od7-1',
        question: "In 1983, what does Barack decide to become?",
        options: [
          "A community organizer",
          "A basketball coach",
          "A newspaper reporter",
          "A bank manager"
        ],
        correctAnswerIndex: 0,
        samplePassage: "In 1983, Barack decides to become a community organizer. He wants to organize Black folks at the grassroots level, though his ideas are vague. At night, he thinks about the Civil Rights Movement.",
        hint: "The passage names the grassroots job he chooses in 1983.",
        explanation: "He decides to become a community organizer, wanting to organize Black folks at the grassroots level — and hoping that by organizing, he'll be able to redeem himself."
      },
      {
        id: 'od7-2',
        question: "What happens when Barack writes letters to civil rights organizations, Black elected officials, and tenant rights groups?",
        options: [
          "No one writes back",
          "Three groups offer him jobs",
          "He is invited to speak at a rally",
          "He gets a scholarship for law school"
        ],
        correctAnswerIndex: 0,
        samplePassage: "He spends the months before graduation writing to civil rights organizations, Black elected officials, and tenant rights groups. No one writes back.",
        hint: "The passage says his mailbox stays empty after all those letters.",
        explanation: "No one writes back. This silence shows him how difficult organizing work will be — and he takes a high-paying job that doesn't match his values to pay off his loans."
      },
      {
        id: 'od7-3',
        question: "What job does Barack take to pay off his loans?",
        options: [
          "A research assistant for a consulting house",
          "A bus driver in Harlem",
          "A waiter at a Chicago restaurant",
          "A lifeguard at a public pool"
        ],
        correctAnswerIndex: 0,
        samplePassage: "To pay off his loans, Barack takes a job as a research assistant for a consulting house. He is ashamed to be the only Black employee at his level.",
        hint: "The passage names a well-paid office research job he takes despite his organizing dreams.",
        explanation: "He becomes a research assistant for a consulting house. The high pay doesn't advance his values, and he feels ashamed to be the only Black employee at his level."
      },
      {
        id: 'od7-4',
        question: "What embarrasses Barack about his consulting job?",
        options: [
          "He has to wear a uniform",
          "He is the only Black employee at his level",
          "His office has no windows",
          "He has to work weekends"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack is ashamed to be the only Black employee at his level, but the Black secretaries treat him like a son. They seem secretly disappointed that he wants to organize instead.",
        hint: "The passage says he stands out at his level in one particular way.",
        explanation: "He is the only Black employee at his level, which shames him — it reminds him of being the new kid at Punahou. The Black secretaries treat him like a son but seem disappointed he won't climb the corporate ladder."
      },
      {
        id: 'od7-5',
        question: "What does the Black security guard tell Barack to do?",
        options: [
          "Quit and go back to school",
          "Move to Kenya with his family",
          "Focus on making money and let the people who are going to make it make it on their own",
          "Join the army to pay off his loans"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Only the Black security guard says outright that he does not approve. He tells Barack to focus on making money and let the people who are going to make it make it on their own.",
        hint: "The passage quotes the guard's blunt advice about money versus helping others.",
        explanation: "The security guard tells him to focus on making money and leave struggling people to make it on their own. Barack ignores this, but watches his organizing dreams disappear as he gets promoted."
      },
      {
        id: 'od7-6',
        question: "What news does Auma call Barack with?",
        options: [
          "She is getting married in Nairobi",
          "Their brother David died, so she cannot visit",
          "Their father wants Barack to move to Kenya",
          "She has been accepted to Columbia"
        ],
        correctAnswerIndex: 2,
        samplePassage: "One day, Barack's half sister Auma calls him at his office. She asks to visit and Barack agrees. He excitedly prepares, but several weeks later, Auma calls with the news that their brother David died and she cannot come.",
        hint: "The passage says a death in the family cancels her planned visit.",
        explanation: "Auma calls to say their brother David died, so she can't visit. Barack is shaken — he barely knows Auma and David, and he wonders who he is if he didn't cry for his brother."
      },
      {
        id: 'od7-7',
        question: "How does Barack react to learning that his brother David died?",
        options: [
          "He flies to Kenya for the funeral",
          "He writes a long letter to Auma",
          "He wonders who he is if he did not cry for his brother",
          "He quits his job that same day"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Barack wonders who Auma and David are — and who he is if he did not cry for his brother. His reaction impresses upon him that he is totally cut off from half of his family.",
        hint: "The passage says his lack of tears makes him question himself.",
        explanation: "He doesn't cry, and that disturbs him — he wonders who he is if he didn't cry for his own brother. It shows him how cut off he is from half of his family."
      },
      {
        id: 'od7-8',
        question: "Who is Marty Kaufman?",
        options: [
          "Barack's boss at the consulting house",
          "A Jewish man who calls looking for a trainee to organize in Chicago",
          "A pastor at a South Side church",
          "Barack's roommate in New York"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Not long after, a Jewish man named Marty Kaufman calls Barack, looking for a trainee to organize in Chicago. Marty is pudgy, unkempt, and insists that Barack must be angry if he wants to organize.",
        hint: "The passage names the man who phones Barack with an organizing job in Chicago.",
        explanation: "Marty Kaufman is a Jewish organizer who calls Barack looking for a trainee to organize in Chicago. He is pudgy and unkempt, and insists Barack must be angry if he wants to organize."
      },
      {
        id: 'od7-9',
        question: "Why does Marty say he needs Barack specifically?",
        options: [
          "Because Barack speaks Swahili",
          "Because Barack has a law degree",
          "Because Marty needs a Black person to help him, since most of his work is with churches",
          "Because Barack grew up in Chicago"
        ],
        correctAnswerIndex: 3,
        samplePassage: "He explains that he needs a Black person to help him. Most of his work is with churches, since the unions have so little power anymore — but the churches are notoriously hard to work with.",
        hint: "The passage says Marty needs someone of a particular background because his work runs through churches.",
        explanation: "Marty needs a Black person to help him, since most of his organizing work runs through churches now that unions have little power. Most of what Barack knows about Chicago is Harold Washington, the recently elected first Black mayor, and that the city is highly segregated."
      },
      {
        id: 'od7-10',
        question: "What finally pushes Barack to leave for Chicago?",
        options: [
          "Marty doubles the salary offer",
          "A boy by the river asks him why the river sometimes runs in different directions, and Barack realizes he has never noticed it",
          "His landlord raises the rent",
          "Ann tells him to go"
        ],
        correctAnswerIndex: 3,
        samplePassage: "While Barack sits by the river to think, a boy asks him why the river sometimes runs in different directions. Realizing he has never noticed the river, Barack packs up and heads for Chicago a week later.",
        hint: "The passage describes a child's curious question by the water that snaps Barack into action.",
        explanation: "A boy asks why the river sometimes runs in different directions, and Barack realizes he has never even noticed the river. He packs up and heads for Chicago a week later."
      }
    ]
  },
  {
    id: 'obama-dreams-ch8',
    title: "Dreams from My Father: Chapter 8",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "purple",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Barack arrives in Chicago, tours the South Side with Marty, and begins the slow, humbling work of organizing residents around their own concerns.",
    questions: [
      {
        id: 'od8-1',
        question: "On Barack's childhood trip to Chicago at age eleven, what fascinated him at the Field Museum?",
        options: [
          "Shrunken heads",
          "A giant whale skeleton",
          "Ancient Egyptian mummies",
          "Dinosaur footprints"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack has only been to Chicago once, when he was eleven. That was when Toot, Maya, and Ann traveled the country. He was impressed by the indoor swimming pool at their motel and fascinated by shrunken heads at the Field Museum.",
        hint: "The passage names a creepy exhibit that caught his eye as a kid.",
        explanation: "At eleven, traveling with Toot, Maya, and Ann, he was impressed by the motel's indoor pool and fascinated by shrunken heads at the Field Museum. Arriving as an adult in July, the city seems much prettier."
      },
      {
        id: 'od8-2',
        question: "At Smitty's Barbershop, who do the men talk about affectionately, like a relative?",
        options: [
          "Harold Washington, the recently elected first Black mayor",
          "Martin Luther King Jr.",
          "Muhammad Ali",
          "Stevie Wonder"
        ],
        correctAnswerIndex: 0,
        samplePassage: "On the third day, he stops in at Smitty's Barbershop. As he cuts Barack's hair, Smitty and the other men discuss Harold Washington's election. They talk about the mayor affectionately, like he is a relative.",
        hint: "The passage says the men discuss the new mayor with family-like warmth.",
        explanation: "The men at Smitty's discuss Harold Washington's election — the first Black mayor — talking about him affectionately, like a relative."
      },
      {
        id: 'od8-3',
        question: "Where does Marty take Barack on his first day in Chicago?",
        options: [
          "To a baseball game",
          "To the Art Institute",
          "To the old Wisconsin Steel plant",
          "To a pizza restaurant downtown"
        ],
        correctAnswerIndex: 2,
        samplePassage: "That afternoon, Marty picks Barack up and they drive to the old Wisconsin Steel plant. Marty says that lots of different people used to work there, but they all ignored each other outside of work. These people need to work together if they want their jobs back.",
        hint: "The passage names a closed industrial site Marty shows him.",
        explanation: "Marty drives him to the old Wisconsin Steel plant and says the people who used to work there need to work together if they want their jobs back."
      },
      {
        id: 'od8-4',
        question: "How did Marty's church-based organization get started?",
        options: [
          "The city government created it",
          "Marty started it two years ago with the help of a Catholic bishop",
          "Harold Washington founded it after his election",
          "It grew out of a labor union strike"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Marty talks about his organization. He started it two years ago with the help of a Catholic bishop when he learned that both Black and white people were equally ashamed of being unemployed. Over twenty churches formed the group.",
        hint: "The passage says Marty launched it recently with a religious leader's help.",
        explanation: "Marty started the organization two years earlier with a Catholic bishop, after seeing that unemployed Black and white people were equally ashamed. More than twenty churches joined."
      },
      {
        id: 'od8-5',
        question: "What has Marty's organization just won funding for?",
        options: [
          "A new church building",
          "A basketball league",
          "A $500,000 job placement program from the state",
          "A scholarship fund for organizers"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The organization just won funding from the state for a $500,000 job placement program, and they are headed to a celebratory rally. Marty allows that it will take ten years to rebuild manufacturing in the city, but people need victories now.",
        hint: "The passage names a large dollar amount for a jobs program they are celebrating.",
        explanation: "They just won $500,000 in state funding for a job placement program and head to a celebratory rally. Marty admits rebuilding manufacturing will take ten years, but people need victories now."
      },
      {
        id: 'od8-6',
        question: "At the rally, who introduces themselves to Barack as Angela, Shirley, and Mona?",
        options: [
          "Three women from the churches who are thrilled to have him",
          "Three reporters covering the event",
          "Three nuns from the Catholic diocese",
          "Three of Marty's relatives"
        ],
        correctAnswerIndex: 2,
        samplePassage: "When they arrive at a school auditorium, Marty introduces Barack to Deacon Will Milton. Three Black women block Barack from following and introduce themselves as Angela, Shirley, and Mona. They start to tell Barack that they are thrilled to have him.",
        hint: "The passage names three church women who greet him enthusiastically.",
        explanation: "Angela, Shirley, and Mona — three Black women from the churches — introduce themselves and say they're thrilled to have him. The rally includes a choir, a roll call of churches, and speakers."
      },
      {
        id: 'od8-7',
        question: "What is Deacon Will Milton's life story?",
        options: [
          "He was a teacher who became a pastor",
          "He served in Vietnam, worked at a bank, was laid off, and turned to Christ",
          "He was a steelworker who lost his job",
          "He was a police officer who retired early"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack sits next to Will and hears Will's life story. Will served in Vietnam and then worked at a bank, but when he was laid off, he turned to Christ. He wears a collar even though he is married and not ordained.",
        hint: "The passage traces his path from the military to a bank job to faith.",
        explanation: "Will served in Vietnam, worked at a bank, and turned to Christ after being laid off. He calls out hypocrisy in the church and wears a collar though married and not ordained — even the cardinal doesn't mind."
      },
      {
        id: 'od8-8',
        question: "What is Barack's job when Marty sends him out to interview South Side residents?",
        options: [
          "To collect money for the churches",
          "To find out their self-interest, because that will get them to organize",
          "To register them to vote",
          "To take photos for a newsletter"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The next day, Marty gives Barack a list of people to interview. His job is to find out their self-interest, because that will get these people to organize. The interviews are harder than expected — people are tired and suspicious, but once he is in people's kitchens, most are happy to talk.",
        hint: "The passage states Marty's exact instruction about what Barack must discover in each home.",
        explanation: "Marty's instruction is to find out people's self-interest — what they truly care about — because that will motivate them to organize. In their kitchens, residents tell stories of growing up on the West Side and working as social workers, teachers, or bus drivers."
      },
      {
        id: 'od8-9',
        question: "In every home Barack visits, what offers what he calls 'collective redemption'?",
        options: [
          "A family Bible",
          "A photo of Harold Washington",
          "A union membership card",
          "A church bulletin"
        ],
        correctAnswerIndex: 3,
        samplePassage: "In every home, no matter how poor or wealthy, Barack notices a photo of Harold Washington. Washington offers collective redemption for the community.",
        hint: "The passage says the same image of the mayor hangs in rich and poor homes alike.",
        explanation: "A photo of Harold Washington hangs in every home — rich or poor — offering collective redemption. Yet Marty still accuses Barack of not digging deep enough in his interviews."
      },
      {
        id: 'od8-10',
        question: "What goes wrong at the community meeting about gangs that Barack organizes with Ruby?",
        options: [
          "It rains and the power goes out",
          "Only thirteen people show up and the district commander cancels, so Barack spends his time directing elderly people to the Bingo game upstairs",
          "Ruby forgets to invite anyone",
          "The church locks its doors"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The community meeting is a disaster. Thirteen people show up and the district commander cancels. Barack spends his time directing elderly people to the Bingo game upstairs while Ruby sits sadly.",
        hint: "The passage describes a tiny turnout, a canceled official, and an upstairs Bingo game.",
        explanation: "Only thirteen people show up and the district commander cancels — a disaster. Marty tells Barack over coffee that he needs a more specific issue than gangs and real inroads with leaders, since each faith group stays loyal to different people."
      }
    ]
  },

  {
    id: 'obama-dreams-ch9',
    title: "Dreams from My Father: Chapter 9",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "rose",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Barack throws himself into organizing in Altgeld Gardens — holding street-corner meetings, chasing jobs with local leaders, and winning a promise of a job-training center for the Far South Side.",
    questions: [
      {
        id: 'od9-1',
        question: "What two unpleasant neighbors sit beside the Altgeld Gardens housing project?",
        options: [
          "A landfill and a sewage treatment plant",
          "A forest and a lake",
          "A shopping mall and a park",
          "A school and a hospital"
        ],
        correctAnswerIndex: 0,
        samplePassage: "At Chicago's southern edge sits the Altgeld Gardens public housing project. On one side of the development lies a landfill, and on another sits a sewage treatment plant, while the fish in the nearby Calumet River come out discolored and misshapen.",
        hint: "The passage names two industrial neighbors that pollute the area.",
        explanation: "A landfill and a sewage treatment plant flank the Gardens — which is why the chapter asks whether anyone in power cared about the residents' quality of life."
      },
      {
        id: 'od9-2',
        question: "After two years of organizing, who announces she is quitting?",
        options: [
          "Shirley",
          "Angela",
          "Mona",
          "Will"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack walks into a church in Altgeld to find Angela, Shirley, Will, and Mary looking sad. Angela announces that she is quitting, saying that after two years she feels like she has accomplished nothing, and Shirley backs her up.",
        hint: "The passage names the person who says two years of work added up to nothing.",
        explanation: "Angela quits after two years of feeling she accomplished nothing; Shirley agrees with her."
      },
      {
        id: 'od9-3',
        question: "Who does the organizer Mary remind Barack of?",
        options: [
          "Marty",
          "Shirley",
          "His mother Ann",
          "Angela"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Before one meeting, Barack chats with Mary at the coffee pot. Mary married a Black man who left her after they had two daughters, and her Irish family refuses to speak to her. Barack notes that she reminds him of his mother, Ann.",
        hint: "The passage says she brings to mind a close family member of Barack's.",
        explanation: "Mary, a white woman with an absent Black husband and two biracial daughters, reminds Barack of his mother Ann."
      },
      {
        id: 'od9-4',
        question: "About how many people show up to the first street-corner meeting?",
        options: [
          "About five",
          "About twelve",
          "About fifty",
          "About twenty"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Marty suggests holding street-corner meetings, since struggling residents will not attend meetings at an unfamiliar church. Barack helps Will and Mary prepare a flyer and stands with them on a corner, and to his surprise about twenty people show up and talk for an hour about what they want fixed.",
        hint: "The passage gives a round number close to two dozen.",
        explanation: "About 20 people came to the first corner meeting and talked for an hour about what they wanted fixed in their community."
      },
      {
        id: 'od9-5',
        question: "What does Rafiq hand Barack when they meet in Roseland?",
        options: [
          "A flyer accusing Arab shops of selling bad meat",
          "A job application",
          "A map of the neighborhood",
          "A list of church volunteers"
        ],
        correctAnswerIndex: 0,
        samplePassage: "In the Roseland shopping district, the group meets Rafiq al Shabazz, the president of an organization that helped elect Harold Washington. Rafiq hands Barack a flyer accusing Arab shops of selling bad meat and blames outsiders — Koreans, Arabs, and Jews — for mistreating Black people.",
        hint: "The passage describes a printed complaint about local shops.",
        explanation: "The flyer accuses Arab shops of selling bad meat; Rafiq's long-term goal is for Black residents to own the local businesses."
      },
      {
        id: 'od9-6',
        question: "According to Mr. Foster, how many job applicants do business owners turn down every week?",
        options: [
          "Ten",
          "Thirty",
          "Fifty",
          "Five"
        ],
        correctAnswerIndex: 1,
        samplePassage: "At the Chamber of Commerce, the group meets Mr. Foster, who had resigned as president the previous week. He tells them that business owners turn down thirty applicants every week, which dashes their hope of finding part-time work for Altgeld's youth.",
        hint: "The passage gives a number equal to three tens.",
        explanation: "Thirty applicants per week are turned away, so finding part-time jobs for Altgeld's young people looks very hard."
      },
      {
        id: 'od9-7',
        question: "What does Ms. Alvarez finally promise at the big meeting?",
        options: [
          "To close the job bank",
          "To resign as director",
          "A job intake and training center in the area within six months",
          "To hire Barack herself"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Barack and the women draft a letter to Ms. Alvarez, the director of the Mayor's Office of Employment and Training, demanding a job intake and training center for the Far South Side. About a hundred people attend the meeting, and Mona presses Ms. Alvarez until she promises an intake center in the area within six months.",
        hint: "The passage names a training center promised within half a year.",
        explanation: "Ms. Alvarez promises a MET job intake and training center for the Far South Side within six months."
      },
      {
        id: 'od9-8',
        question: "What was Marty's plan for dealing with the failing steel company?",
        options: [
          "Shut it down immediately",
          "Sell it to the city",
          "Turn it into a church",
          "Preserve jobs by working with churches, the city, and banks"
        ],
        correctAnswerIndex: 3,
        samplePassage: "One Saturday, Marty takes Barack and Angela to meet a local union president. Marty insists the steel company is going out of business and lays out a plan to try to preserve jobs by working with churches, the city, and banks, but the union officials say they must focus on negotiating with management right now.",
        hint: "The passage lists three partners Marty wanted to team up with.",
        explanation: "Marty wanted to save jobs by partnering with churches, the city, and banks; the union wanted to focus only on management negotiations."
      },
      {
        id: 'od9-9',
        question: "What did Shirley know Rafiq as when he was a kid?",
        options: [
          "Tommy",
          "Wally",
          "Jimmy",
          "Bobby"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Outside the building, Shirley says she has known Rafiq since he was a kid, back when everyone called him Wally, a neighbor's son. He changed his name when he left the gang life behind to become a Muslim.",
        hint: "The passage gives the childhood nickname Shirley remembers.",
        explanation: "Shirley knew him as Wally, the neighbor's son, before he gave up the gang life, became a Muslim, and took the name Rafiq."
      },
      {
        id: 'od9-10',
        question: "Why did the women suspect Marty of pushing a secret agenda?",
        options: [
          "He took a long vacation",
          "He refused to attend meetings",
          "The job bank money went somewhere",
          "He moved to a new city"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Angela, Shirley, and Mona are disappointed that the job bank turned out to be a bust. Although Marty goes weekly to argue with the people running the job bank, the women suspect he is pushing a secret agenda — after all, the money went somewhere.",
        hint: "The passage connects the suspicion to missing money.",
        explanation: "The job bank failed and its money disappeared, so the women suspected Marty of having a secret agenda."
      }
    ]
  },
  {
    id: 'obama-dreams-ch10',
    title: "Dreams from My Father: Chapter 10",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "amber",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Through a cold winter of organizing, Barack wrestles with questions of Black identity and pride — from Ruby's blue contact lenses to Rafiq's Black nationalism — and takes Ruby to a play where Black women tell their own stories.",
    questions: [
      {
        id: 'od10-1',
        question: "What does Marty encourage Barack to do as winter sets in?",
        options: [
          "Work even harder",
          "Take time off and build a life outside of work",
          "Move to a new neighborhood",
          "Quit organizing"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Winter arrives and makes the work harder, with people fighting over scarce parking spaces and skipping meetings. Marty encourages Barack to take time off and create a life for himself outside of work, but Barack does not listen.",
        hint: "The passage says what kind of life Marty wants Barack to build.",
        explanation: "Marty wants Barack to build a life beyond work; Barack ignores the advice and finds community within the work instead."
      },
      {
        id: 'od10-2',
        question: "What happened to the son of the family who sacrificed for his education?",
        options: [
          "He became a famous lawyer",
          "He moved to another country",
          "He was diagnosed with schizophrenia and could not work",
          "He joined the army"
        ],
        correctAnswerIndex: 2,
        samplePassage: "As Barack listens to community members' stories, one family tells of sacrificing everything so their son could earn a law degree — only for the son to be diagnosed with schizophrenia and become unable to work.",
        hint: "The passage names an illness that kept the son from working.",
        explanation: "Despite the family's sacrifices, the son developed schizophrenia and could not work."
      },
      {
        id: 'od10-3',
        question: "What shocks Barack when Ruby visits his office near Christmas?",
        options: [
          "She brings her whole family",
          "She quits the organization",
          "She asks for a raise",
          "She is wearing blue contact lenses"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Near Christmas, Barack invites Ruby to his office to give her his gift for her son Kyle. He is shocked to see Ruby wearing blue contact lenses and abruptly blurts out that her eyes looked better before, a comment he immediately regrets.",
        hint: "The passage describes something new about Ruby's eyes.",
        explanation: "Ruby was wearing blue contact lenses, which Barack saw as a sign of internalized racism — though he also realized his blurted comment was insensitive."
      },
      {
        id: 'od10-4',
        question: "What does Barack conclude causes more harm than poor self-esteem?",
        options: [
          "Poverty",
          "Fashion magazines",
          "A lack of churches",
          "Bad weather"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack eventually dismisses the idea that Black people just need self-esteem to save themselves. He concludes that while self-esteem might help, poverty does more harm than poor self-esteem.",
        hint: "The passage names a condition bigger than feelings about oneself.",
        explanation: "Barack decides poverty damages people more than low self-esteem does."
      },
      {
        id: 'od10-5',
        question: "What play does Barack take Ruby to see?",
        options: [
          "A Shakespeare play",
          "A musical about Chicago",
          "For Colored Girls Who Have Considered Suicide When the Rainbow is Enuf",
          "A comedy show"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Weeks later, Barack invites Ruby to a meeting on the north side. They eat at a Vietnamese restaurant, and then Barack takes her to a performance of For Colored Girls Who Have Considered Suicide When the Rainbow is Enuf by Ntozake Shange, where Black actresses tell their stories and dance. Ruby thanks Barack, and they drive home in silence.",
        hint: "The passage gives the full title of a play by Ntozake Shange.",
        explanation: "After a Vietnamese dinner, they watched Shange's play, performed by Black actresses who sang, danced, and told their stories."
      },
      {
        id: 'od10-6',
        question: "What does Rafiq ask Barack for one morning?",
        options: [
          "To get the MET center into a storefront near his office",
          "To find him a new job",
          "To speak at his church",
          "To write him a letter"
        ],
        correctAnswerIndex: 0,
        samplePassage: "One morning, Rafiq calls early and asks Barack to try to get the MET center into a storefront near his office. Barack thinks an alliance with Rafiq will be useful, since Ms. Alvarez is difficult to work with.",
        hint: "The passage mentions a storefront and the MET center.",
        explanation: "Rafiq wanted the MET jobs center placed in a storefront near his office."
      },
      {
        id: 'od10-7',
        question: "What does Barack decide about Rafiq's kind of nationalism?",
        options: [
          "It is a perfect solution",
          "It should be taught in schools",
          "It needs more funding",
          "It is a successful emotion but not a successful program"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Barack concludes that nationalism, at least as Rafiq peddles it, is more of an attitude than a program. He decides it is a successful emotion but not a successful program, because white people still control the markets and Black businesses must survive in a world white people created.",
        hint: "The passage contrasts an emotion with a program.",
        explanation: "Barack sees Rafiq's nationalism as a powerful feeling that doesn't actually change the rules of power."
      },
      {
        id: 'od10-8',
        question: "What happened to the Nation of Islam toiletry line that Barack watched?",
        options: [
          "It made millions",
          "It rose and fell",
          "It was never sold",
          "It became a grocery store"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack watches a Nation of Islam toiletry line rise and fall, and he figures it failed because white people still control the markets.",
        hint: "The passage describes the product line's short life in two words.",
        explanation: "The toiletry line rose and then fell, showing Barack that Black businesses still operate in markets controlled by white people."
      },
      {
        id: 'od10-9',
        question: "Why won't Rafiq ask his congregation to join protests?",
        options: [
          "He moved to a new city",
          "He refuses to ask them and is suspicious of Black people who would attend",
          "He forgot all about it",
          "He likes the city government"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Rafiq refuses to ask his congregation to show up to protests and is suspicious of any Black person willing to attend.",
        hint: "The passage says whom Rafiq is suspicious of.",
        explanation: "Rafiq won't bring his congregation to protests and distrusts Black people who would go."
      },
      {
        id: 'od10-10',
        question: "What kind of restaurant do Barack and Ruby eat at before the play?",
        options: [
          "A pizza place",
          "A burger joint",
          "A Vietnamese restaurant",
          "A Chinese buffet"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Before the play, Barack and Ruby eat dinner at a Vietnamese restaurant on the north side of the city.",
        hint: "The passage names the country's cuisine.",
        explanation: "They ate at a Vietnamese restaurant before heading to the performance."
      }
    ]
  },
  {
    id: 'obama-dreams-ch11',
    title: "Dreams from My Father: Chapter 11",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "emerald",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Barack's half-sister Auma visits from Germany, and over ten days she tells him the painful story of their father, the Old Man — his rise, his blacklisting, his drinking, and his death — ending with her plea that they go home to Kenya.",
    questions: [
      {
        id: 'od11-1',
        question: "Where has Auma been living when she visits Chicago?",
        options: [
          "Germany",
          "Kenya",
          "England",
          "Canada"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack rushes to the airport with a photograph of his half-sister Auma in his hand. When he looks up, he sees her in real life for the first time, arriving from Germany, and he knows immediately that he loves her.",
        hint: "The passage names the country she traveled from.",
        explanation: "Auma had been studying in Germany."
      },
      {
        id: 'od11-2',
        question: "What does Auma dislike about Germany?",
        options: [
          "The weather",
          "It claims to be progressive but people are still racist",
          "The food",
          "The language"
        ],
        correctAnswerIndex: 1,
        samplePassage: "In the car, Auma tells Barack how much she dislikes Germany. It claims to be progressive, but people there are still racist, which makes her think of what their father must have felt when he left home.",
        hint: "The passage contrasts Germany's self-image with how people act.",
        explanation: "Auma says Germany pretends to be progressive while its people are still racist."
      },
      {
        id: 'od11-3',
        question: "Who does Auma say Barack is stubborn like?",
        options: [
          "Marty",
          "Gramps",
          "The Old Man",
          "Lolo"
        ],
        correctAnswerIndex: 2,
        samplePassage: "When Barack tries to convince Auma to take a nap, she accuses him of being stubborn just like the Old Man, their father.",
        hint: "The passage names their shared father.",
        explanation: "Auma says Barack is stubborn like the Old Man, the father they share."
      },
      {
        id: 'od11-4',
        question: "How many brothers does Auma say were born around the time the Old Man took them to Nairobi?",
        options: [
          "Two",
          "Three",
          "Five",
          "Four"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Auma explains that four brothers were born around this time: Abo and Bernard to Kezia, Auma's mother, and David and Mark to Ruth.",
        hint: "The passage lists two pairs of brothers.",
        explanation: "Four brothers — Abo and Bernard (Kezia's sons), and David and Mark (Ruth's sons)."
      },
      {
        id: 'od11-5',
        question: "What job did the Old Man find after the president blacklisted him?",
        options: [
          "A small job with the Water Department",
          "A job at a bank",
          "A job driving a taxi",
          "A job at a newspaper"
        ],
        correctAnswerIndex: 0,
        samplePassage: "After speaking out against tribal divisions in Kenya's government, the president blacklisted the Old Man. He finally found a small job with the Water Department thanks to a sympathetic friend, but he began drinking and his friends cut him off.",
        hint: "The passage names a city utility.",
        explanation: "A sympathetic friend got him a small job with the Water Department."
      },
      {
        id: 'od11-6',
        question: "What helped Auma stay in school after her father could no longer pay her school fees?",
        options: [
          "A job at a store",
          "A scholarship from her headmistress",
          "Money from Barack",
          "A loan from a bank"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Auma survived thanks to boarding school. When the Old Man could no longer pay her school fees, the headmistress gave her a scholarship, letting her stay in school.",
        hint: "The passage says a school leader helped pay.",
        explanation: "Her headmistress gave her a scholarship so she could stay in boarding school."
      },
      {
        id: 'od11-7',
        question: "Why didn't Auma say goodbye to the Old Man when she left for Germany?",
        options: [
          "She forgot",
          "She missed her flight",
          "She was afraid he would force her to stay",
          "She was angry at Barack"
        ],
        correctAnswerIndex: 2,
        samplePassage: "When Auma won a scholarship to study in Germany, she left without saying goodbye, afraid that he would force her to stay. While in Germany, she and the Old Man began to piece their relationship back together.",
        hint: "The passage says she feared he would make her stay.",
        explanation: "She feared he would force her to stay, so she left silently — and only began repairing the relationship from Germany."
      },
      {
        id: 'od11-8',
        question: "At the airport, what does Auma say she and Barack must do?",
        options: [
          "Move to Germany",
          "Write to the president",
          "Find new jobs",
          "Go home to Alego and see their father"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Ten days later, as Auma and Barack sit at the airport waiting for her flight, Auma says they need to go home to Alego, their grandfather's land, and see their father.",
        hint: "The passage names the family's home place in Kenya.",
        explanation: "Auma says they must go home to Alego, where their father is buried."
      },
      {
        id: 'od11-9',
        question: "What disturbs Auma about the idea of marriage?",
        options: [
          "The cost of a wedding",
          "Watching the Old Man made marriage seem troubling",
          "She dislikes children",
          "She wants to stay in Chicago"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Back at Barack's apartment, a letter waits for Auma from a German law student she has been seeing. She sighs that after watching the Old Man, marriage disturbs her — and marrying this man would mean living in Germany.",
        hint: "The passage connects her feelings to their father's example.",
        explanation: "Watching the Old Man's troubled marriages made the idea of marriage disturbing to Auma."
      },
      {
        id: 'od11-10',
        question: "Where did the Old Man take Auma and Roy to live?",
        options: [
          "Hawaii",
          "London",
          "Nairobi",
          "Chicago"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Auma tells Barack that she was little when the Old Man returned from America with Ruth and took her and Roy to Nairobi. He was doing well then, working for an American oil company.",
        hint: "The passage names Kenya's capital city.",
        explanation: "The Old Man took Auma and Roy to Nairobi, where he worked for an American oil company."
      }
    ]
  },
  {
    id: 'obama-dreams-ch12',
    title: "Dreams from My Father: Chapter 12",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "sky",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Mayor Harold Washington cuts the ribbon on the new MET jobs center, and Barack's team launches an asbestos campaign in Altgeld — marching downtown with a small group of residents and winning a promise that the apartments will finally be tested.",
    questions: [
      {
        id: 'od12-1',
        question: "Who comes to cut the ribbon for the new MET center in Roseland?",
        options: [
          "Marty",
          "Reverend Wright",
          "Mayor Harold Washington",
          "Ms. Alvarez"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Rafiq fusses over the refreshment table and the photo of Harold Washington hanging in the new MET center in Roseland. When Washington arrives to cut the ribbon, he smiles and greets Angela by name, and she looks ready to pass out with excitement.",
        hint: "The passage names the mayor in the photograph on the wall.",
        explanation: "Mayor Harold Washington cut the ribbon for the new jobs center, greeting Angela by name."
      },
      {
        id: 'od12-2',
        question: "What does Sadie bring to Barack's attention?",
        options: [
          "A legal notice about contractors being hired to remove asbestos",
          "A letter from the mayor",
          "A broken window",
          "A job application"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack decides to focus on basic repairs in Altgeld, like fixing toilets and windows. Then a woman named Sadie approaches him with a legal notice announcing that Altgeld is hiring contractors to remove asbestos, and she worries the apartments may contain the dangerous material.",
        hint: "The passage mentions a legal notice and a dangerous building material.",
        explanation: "Sadie's notice revealed Altgeld was hiring asbestos-removal contractors, raising fears the apartments contained asbestos."
      },
      {
        id: 'od12-3',
        question: "How does Mr. Anderson react when Sadie asks to see the asbestos test results?",
        options: [
          "He hands them over calmly",
          "He laughs at the question",
          "He calls the police",
          "He assures her there is no asbestos but sputters"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Sadie sets up a meeting with Mr. Anderson, the property manager. He assures her there is no asbestos, but he sputters when she asks to see the test results.",
        hint: "The passage says he stumbles over his words when proof is requested.",
        explanation: "Mr. Anderson claimed there was no asbestos but couldn't produce test results, making Barack suspect a cover-up."
      },
      {
        id: 'od12-4',
        question: "How many people are willing to ride downtown to the CHA director's office?",
        options: [
          "Fifty",
          "Eight",
          "A hundred",
          "Thirty"
        ],
        correctAnswerIndex: 1,
        samplePassage: "After weeks of unreturned calls to the property manager, the CHA, and the mayor's office, the group plans to go downtown and demand answers. Sadie, Linda, and Bernadette manage to find only eight people willing to go.",
        hint: "The passage gives a single-digit number.",
        explanation: "Only eight people would go, but the trip still worked because a news crew showed up."
      },
      {
        id: 'od12-5',
        question: "What happens when a news crew arrives at the director's office?",
        options: [
          "The group runs away",
          "Barack gives a speech alone",
          "Barack gets Sadie to give a press conference",
          "The director calls the police"
        ],
        correctAnswerIndex: 2,
        samplePassage: "At the director's office, the secretary tries to shoo the group out just as a news crew arrives. Barack coaxes Sadie into giving a press conference, and as she speaks, the director's assistant hurries everyone into a conference room.",
        hint: "The passage says Barack persuades Sadie to speak to reporters.",
        explanation: "Sadie's press conference forced the director's office to meet with them."
      },
      {
        id: 'od12-6',
        question: "What do the women learn in the conference room?",
        options: [
          "The apartments are brand new",
          "The rent will go down",
          "The manager is getting a raise",
          "The apartments have never been tested for asbestos"
        ],
        correctAnswerIndex: 3,
        samplePassage: "In the conference room, the group learns that the apartments have never actually been tested for asbestos, and they secure a promise to begin testing immediately.",
        hint: "The passage reveals what was never done to the apartments.",
        explanation: "No one had ever tested for asbestos; the officials promised to start testing right away."
      },
      {
        id: 'od12-7',
        question: "Who pulls Barack out of his funk in this chapter?",
        options: [
          "Dr. Collier, an elementary school principal",
          "Harold Washington",
          "Rafiq",
          "Marty"
        ],
        correctAnswerIndex: 0,
        samplePassage: "When Barack wonders whether even the mayor feels as hopeless as he does, Dr. Collier, the principal of an elementary school, pulls him out of his funk and invites him to a parents' meeting.",
        hint: "The passage names a school principal.",
        explanation: "Dr. Collier, an elementary school principal, cheered Barack up and connected him with a parents' group."
      },
      {
        id: 'od12-8',
        question: "What joke does Will make about Barack's ambitions?",
        options: [
          "That Barack should move away",
          "That Barack wants Harold Washington's job",
          "That Barack should become a teacher",
          "That Barack talks too much"
        ],
        correctAnswerIndex: 1,
        samplePassage: "When Barack tries to explain his restlessness to Will, Will chuckles that Barack wants Harold Washington's job. Barack knows that isn't true — he just recognizes that Washington makes the city look like it is changing.",
        hint: "The passage says Will names a powerful job Barack supposedly wants.",
        explanation: "Will teases that Barack wants to be mayor, but Barack knows he is chasing something deeper."
      },
      {
        id: 'od12-9',
        question: "What basic repairs does Barack focus on in Altgeld?",
        options: [
          "Painting murals",
          "Repairing toilets and windows",
          "Building a playground",
          "Fixing the streets"
        ],
        correctAnswerIndex: 2,
        samplePassage: "After the ribbon cutting, Barack decides to focus on improving basic services in Altgeld, like repairing toilets and windows. He asks the women to canvass their blocks to find out what needs fixing.",
        hint: "The passage names two household fixtures.",
        explanation: "Barack started with basics — working toilets and windows — before the asbestos issue took over."
      },
      {
        id: 'od12-10',
        question: "Who is angry that the women failed to invite the mayor to the fall rally?",
        options: [
          "Rafiq",
          "Barack",
          "Mona",
          "Will"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack had reminded Will and Angela to get the mayor to commit to their fall rally, but after the quick ceremony the women are too starstruck to ask. Barack is angry, though Will reminds him that meeting Harold Washington will be the highlight of Angela's life.",
        hint: "The passage says who lost his temper over the missed invitation.",
        explanation: "Barack was angry they forgot to invite the mayor to the fall rally."
      }
    ]
  },
  {
    id: 'obama-dreams-ch13',
    title: "Dreams from My Father: Chapter 13",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "indigo",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "A year after the asbestos fight, Barack confronts the South Side's growing crisis of guns and drugs, mentors the troubled teenager Kyle, pushes for school reform, and visits his struggling brother Roy in Washington, D.C.",
    questions: [
      {
        id: 'od13-1',
        question: "In what year does this chapter take place?",
        options: [
          "1985",
          "1987",
          "1990",
          "1983"
        ],
        correctAnswerIndex: 1,
        samplePassage: "It is a year after the asbestos campaign. By 1987, Barack notices a change on the South Side: boys snap young saplings, other young men sit in wheelchairs, and many people now believe some boys are beyond help.",
        hint: "The passage names the year directly.",
        explanation: "The chapter is set in 1987, a year after the asbestos campaign, when drugs and guns have worsened."
      },
      {
        id: 'od13-2',
        question: "What does Johnnie tell Barack he once witnessed?",
        options: [
          "A bank robbery",
          "A parade",
          "A wedding",
          "A teenager committing suicide"
        ],
        correctAnswerIndex: 3,
        samplePassage: "One night, Johnnie is in an expansive mood as he and Barack finish dinner. He tells Barack about witnessing a teenager commit suicide, and then they hear a sudden pop outside and see teen boys chasing each other, the pursuers carrying a gun. Both men drop to the ground.",
        hint: "The passage describes a tragic thing Johnnie saw a young person do.",
        explanation: "Johnnie had seen a teenager take his own life — a sign of how desperate life on the South Side had become."
      },
      {
        id: 'od13-3',
        question: "How old is Kyle, Ruby's son, in this chapter?",
        options: [
          "Sixteen",
          "Twelve",
          "Nineteen",
          "Fourteen"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack thinks about Kyle, Ruby's son, who is sixteen now and whose behavior frightens his mother. One day Barack takes Kyle to play basketball and asks whether he is still thinking about joining the air force.",
        hint: "The passage gives Kyle's age as a teen number.",
        explanation: "Kyle is sixteen, and his mother Ruby is frightened by his angry behavior."
      },
      {
        id: 'od13-4',
        question: "What does Kyle say about becoming a pilot?",
        options: [
          "He will join next week",
          "They will never let a Black man fly a plane",
          "He already has a license",
          "He prefers basketball"
        ],
        correctAnswerIndex: 2,
        samplePassage: "On the basketball court, Barack asks Kyle if he is still thinking about the air force. Kyle insists that they will never let a Black man fly a plane and that he will stay in Chicago.",
        hint: "The passage states Kyle's belief about Black pilots.",
        explanation: "Kyle believes racism will keep him from ever flying, so he has given up on the air force."
      },
      {
        id: 'od13-5',
        question: "What does the counselor Asante say inner-city schools are like?",
        options: [
          "Fancy hotels",
          "Mini jails",
          "Country clubs",
          "Libraries"
        ],
        correctAnswerIndex: 1,
        samplePassage: "At Kyle's high school, the principal, Dr. King, introduces Barack and Johnnie to a counselor named Asante. Asante insists that inner-city schools are just mini jails and that education for Black youth is misguided, since Black kids must learn about the white culture that oppresses them.",
        hint: "The passage compares the schools to a place that locks people up.",
        explanation: "Asante calls the schools mini jails and says they teach Black kids the culture of the people who oppress them."
      },
      {
        id: 'od13-6',
        question: "What does Barack admit he has never done when Asante asks about his heritage?",
        options: [
          "Traveled to Europe",
          "Played basketball",
          "Visited Kenya",
          "Met his mother"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Before they leave, Asante asks Barack about his heritage and talks about his own last trip to Kenya. Barack admits he has never been to Kenya. In the car, he tells Johnnie he is afraid of what he might find there.",
        hint: "The passage names the African country.",
        explanation: "Barack has never been to Kenya, his father's homeland, and he is afraid of what he might discover there."
      },
      {
        id: 'od13-7',
        question: "Who teams up to build a counseling network for tutoring and mentoring?",
        options: [
          "Marty and Rafiq",
          "Sadie and Linda",
          "Angela and Mona",
          "Barack, Johnnie, Asante, and Dr. Collier"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Barack, Johnnie, Asante, and Dr. Collier begin to develop a counseling network to provide tutoring and mentoring for young people.",
        hint: "The passage lists four names, including a school principal and a counselor.",
        explanation: "The four of them build a tutoring and mentoring network for neighborhood youth."
      },
      {
        id: 'od13-8',
        question: "Where does Barack visit his brother Roy?",
        options: [
          "Washington, D.C.",
          "New York",
          "Los Angeles",
          "Atlanta"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack leaves Johnnie in charge for a weekend so he can visit his brother Roy in Washington, D.C. When Barack lands, Roy is not there to meet him, and when Barack calls, Roy admits he and his wife are fighting and asks Barack to stay in a hotel.",
        hint: "The passage names the nation's capital.",
        explanation: "Roy lives in Washington, D.C., where he is struggling with his marriage."
      },
      {
        id: 'od13-9',
        question: "What does Roy blame for his unhappiness?",
        options: [
          "His job",
          "The Old Man",
          "The weather",
          "Barack"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Over dinner at a Mexican restaurant overlooking a marina, Roy admits he does not like himself and blames the Old Man for it. He says their father drove them to get the best grades while living like a beggar, and he still feels haunted by those memories.",
        hint: "The passage says Roy points the finger at their father.",
        explanation: "Roy blames the Old Man — their father's drinking, temper, and impossible demands left Roy feeling haunted."
      },
      {
        id: 'od13-10',
        question: "What does Principal Dr. King offer along with his support for the program?",
        options: [
          "Money for books",
          "A new gym",
          "The resumes of his wife and daughter",
          "Free lunches"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Back at work, Johnnie reports that he met with Dr. King, who is thrilled to support their program — but King also handed over the resumes of his wife and daughter as job candidates. Barack and Johnnie dissolve into laughter at the principal's self-serving move.",
        hint: "The passage says the principal pushed two relatives for jobs.",
        explanation: "Dr. King offered his wife's and daughter's resumes, showing he was supporting the program partly for his own benefit."
      }
    ]
  },
  {
    id: 'obama-dreams-ch14',
    title: "Dreams from My Father: Chapter 14",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "purple",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "As Barack prepares to leave Chicago for Harvard Law School, he finds his way to Trinity United Church of Christ and Reverend Jeremiah Wright — and weeps during a sermon on hope — shortly after Mayor Harold Washington's sudden death.",
    questions: [
      {
        id: 'od14-1',
        question: "Who does Reverend Philips suggest Barack meet?",
        options: [
          "Reverend Jeremiah Wright of Trinity United Church of Christ",
          "Mayor Harold Washington",
          "Principal Dr. King",
          "Mr. Anderson"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack sits with Reverend Philips, talking about historically Black churches. Philips mentions Reverend Jeremiah Wright of Trinity United Church of Christ, and when he learns Barack does not attend church, he suggests Barack start going to win over the pastors.",
        hint: "The passage names a reverend and his church.",
        explanation: "Reverend Philips pointed Barack toward Reverend Jeremiah Wright of Trinity United Church of Christ."
      },
      {
        id: 'od14-2',
        question: "What does Barack secretly plan to do next year?",
        options: [
          "Run for mayor",
          "Leave for law school",
          "Move to Kenya forever",
          "Open a restaurant"
        ],
        correctAnswerIndex: 1,
        samplePassage: "On a beautiful September day, Barack sits in his car knowing that no one but Johnnie knows his plan: he will leave for law school next year. Johnnie has congratulated him, though Barack insists he will return to Chicago.",
        hint: "The passage names the kind of school.",
        explanation: "Barack has decided to leave organizing for law school, hoping it will teach him how power really works."
      },
      {
        id: 'od14-3',
        question: "When does Barack finally visit Reverend Wright?",
        options: [
          "In the spring",
          "At the end of October",
          "On Christmas Day",
          "In July"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack keeps meeting with Black pastors in the city. Several younger pastors point him toward Reverend Wright, and at the end of October he finally visits. Children and older women mill around the church after dancing classes, daycare, and Bible study.",
        hint: "The passage names a month near Halloween.",
        explanation: "At the end of October, Barack visits Reverend Wright at Trinity."
      },
      {
        id: 'od14-4',
        question: "About how many members does Trinity Church have?",
        options: [
          "About four hundred",
          "About forty",
          "About four million",
          "About four thousand"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Reverend Wright explains that he is trying to build a new sanctuary for a church of four thousand members with a variety of clubs. He says young men like Barack are the hardest to reach, since they think going to church makes them look weak.",
        hint: "The passage gives the size as thousands.",
        explanation: "Trinity has about 4,000 members and many clubs."
      },
      {
        id: 'od14-5',
        question: "When does Harold Washington die?",
        options: [
          "On Independence Day",
          "The day before Thanksgiving",
          "On New Year's Eve",
          "On his birthday"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Harold Washington dies unexpectedly the day before Thanksgiving, only months after winning reelection. The streets fall silent, people cry, and mourners visit his body at City Hall.",
        hint: "The passage names a holiday-eve.",
        explanation: "Washington died the day before Thanksgiving; his diverse coalition soon shattered."
      },
      {
        id: 'od14-6',
        question: "What does Barack see two rival aldermen doing after the funeral?",
        options: [
          "Whispering conspiratorially and hiding their smiles",
          "Fighting in the street",
          "Giving a speech together",
          "Leaving the city"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Soon after the funeral, Barack watches two aldermen — one white and one Black, from rival factions — whispering conspiratorially in their fancy suits and hiding their smiles from the crowd.",
        hint: "The passage describes secretive whispering.",
        explanation: "The two rival aldermen schemed together in secret, a sign that Washington's coalition was already breaking apart."
      },
      {
        id: 'od14-7',
        question: "At the farewell luncheon, who does NOT congratulate Barack on leaving?",
        options: [
          "Will",
          "Angela",
          "Shirley",
          "Mary"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Barack arranges a farewell luncheon for ministers and leaders and announces at the end that he is leaving. Everyone congratulates him except Mary, who asks why men always want more than they have. Barack walks her to her car.",
        hint: "The passage names the one person who questions his decision.",
        explanation: "Mary, unlike the others, asks why men always want more than they have."
      },
      {
        id: 'od14-8',
        question: "What does Reverend Wright's sermon make Barack realize about the church?",
        options: [
          "It should be bigger",
          "It needs more money",
          "It carries Black people's stories forward and makes them accessible",
          "It should close down"
        ],
        correctAnswerIndex: 2,
        samplePassage: "That Sunday, Barack puts on a suit and goes to Trinity. Reverend Wright preaches a sermon about keeping hope in a fallen world. As people cry out and rise, Barack realizes the church carries the stories of Black people forward and makes them accessible to everyone.",
        hint: "The passage says the church passes something important along.",
        explanation: "Barack realizes the church preserves and shares Black people's stories."
      },
      {
        id: 'od14-9',
        question: "How does Barack discover he has been crying during the service?",
        options: [
          "Reverend Wright points at him",
          "A boy next to him offers a tissue",
          "He sees himself in a mirror",
          "Mary tells him"
        ],
        correctAnswerIndex: 2,
        samplePassage: "As the choir sings, the boy sitting next to Barack offers him a tissue. Barack takes it, surprised — he had not realized he was crying.",
        hint: "The passage mentions a small kindness from a neighbor in the pew.",
        explanation: "A boy offered Barack a tissue, which was how he realized tears were running down his face."
      },
      {
        id: 'od14-10',
        question: "What does Reverend Philips say many of his congregants have done?",
        options: [
          "Started new businesses",
          "Moved to the suburbs",
          "Joined the army",
          "Became teachers"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Reverend Philips tells Barack that many of his congregants have moved to the suburbs and are unwilling to volunteer for programs that keep them in the city past dark.",
        hint: "The passage names a place outside the city.",
        explanation: "Many congregants moved to the suburbs, weakening the churches' hold on the city."
      }
    ]
  },

  {
    id: 'obama-dreams-ch15',
    title: "Dreams from My Father: Chapter 15",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "rose",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Barack arrives in Nairobi after three weeks in Europe: his luggage is lost, but his name is recognized at the airport, and his half-sister Auma and Aunt Zeituni welcome him into the bustling life of his Kenyan family.",
    questions: [
      {
        id: 'od15-1',
        question: "On the flight from London to Nairobi, who sat next to Barack?",
        options: [
          "A Kenyan businessman heading home to Mombasa",
          "A young British student traveling to South Africa to work with mining companies",
          "An American tourist going on a wildlife safari",
          "A Senegalese trader carrying bags of coffee"
        ],
        correctAnswerIndex: 1,
        samplePassage: "On the plane from London to Nairobi, Barack sat beside a young British student on his way to South Africa, where he planned to work with mining companies.",
        hint: "The passage names the student's destination and the industry he was joining.",
        explanation: "A young British student sat next to Barack; he was headed to South Africa to work with mining companies, and their conversation left Barack angry about how white people talked about Africa."
      },
      {
        id: 'od15-2',
        question: "Where did Barack's bag accidentally get sent?",
        options: [
          "Johannesburg",
          "Lagos",
          "Cairo",
          "Addis Ababa"
        ],
        correctAnswerIndex: 0,
        samplePassage: "At the nearly empty Nairobi airport, Barack learned his bag had never arrived — it had been sent on to Johannesburg by mistake.",
        hint: "The passage names the city the bag was flown to instead of Nairobi.",
        explanation: "The airline had sent Barack's bag to Johannesburg instead of Nairobi, leaving him with no luggage for two days."
      },
      {
        id: 'od15-3',
        question: "Who recognized Barack's family name at the airport?",
        options: [
          "Miss Omoro, an airport worker who had known the Old Man",
          "A taxi driver waiting outside the terminal",
          "The British Airways ticket agent",
          "A guard asking about his nephew in Texas"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Miss Omoro, who helped Barack at the airport, asked if he was related to Dr. Obama, explaining that the Old Man had been a family friend — the first time anyone had ever recognized his name.",
        hint: "The passage names the airport worker who connected Barack's name to his father.",
        explanation: "Miss Omoro recognized the Obama name and told Barack the Old Man had been a family friend, giving him his first feeling of belonging in Kenya."
      },
      {
        id: 'od15-4',
        question: "What kind of car did Auma drive to pick Barack up at the airport?",
        options: [
          "A brand-new white van",
          "A borrowed yellow taxi",
          "A sturdy green jeep",
          "A VW Beetle that barely ran"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Auma arrived in a VW Beetle that barely ran, with Aunt Zeituni arguing that Auma should sell her the car when she went back to Germany.",
        hint: "The passage names the small, struggling car Auma drove.",
        explanation: "Auma picked Barack up in her barely-running VW Beetle — and Zeituni was already insisting Auma should sell it to her."
      },
      {
        id: 'od15-5',
        question: "When Zeituni warned Auma not to let Barack \"get lost\" again, what did lost mean?",
        options: [
          "Wandering off in the Nairobi market",
          "Losing his luggage at the airport",
          "Moving to the West and never writing or visiting again",
          "Forgetting how to speak Luo"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Zeituni warned Auma not to let Barack get lost again — and Auma explained that lost meant disappearing to the West and never writing or visiting, the way men like Omar had.",
        hint: "The passage explains that lost describes people who go abroad and cut ties.",
        explanation: "Lost meant vanishing to the West and never writing or visiting again — a real fear, since family members like Omar had done exactly that."
      },
      {
        id: 'od15-6',
        question: "At the Nairobi market, what did Barack buy?",
        options: [
          "A wooden carving of an elephant",
          "A necklace for Auma, plus two wooden carvings",
          "A basket of fresh mangoes",
          "A colorful woven blanket"
        ],
        correctAnswerIndex: 1,
        samplePassage: "In the market Barack found wooden carvings like the ones the Old Man had once brought him, and after some bargaining he bought a necklace for Auma and two carvings.",
        hint: "The passage lists the items Barack purchased at the stall.",
        explanation: "Barack bought Auma a necklace and picked up two wooden carvings like the ones his father had brought him years earlier."
      },
      {
        id: 'od15-7',
        question: "Why did Auma get angry at the Nairobi cafe?",
        options: [
          "The waiters ignored them to serve an American family first",
          "The food arrived cold and late",
          "The bill was twice what the menu said",
          "A tourist took their table"
        ],
        correctAnswerIndex: 0,
        samplePassage: "At a cafe, two African waiters rushed to serve an arriving American family while ignoring Barack and Auma, so Auma scolded the waiter and threw a 100-shilling note at him.",
        hint: "The passage describes which customers the waiters chose to serve first.",
        explanation: "The waiters leapt to serve an American family while ignoring Barack and Auma — a humiliating echo of colonial times that made Auma furious."
      },
      {
        id: 'od15-8',
        question: "At Aunt Jane's apartment, what news about Barack thrilled the family?",
        options: [
          "That he had won a basketball trophy",
          "That he spoke fluent Swahili",
          "That he was buying a house in Nairobi",
          "That he was going to Harvard in the fall"
        ],
        correctAnswerIndex: 3,
        samplePassage: "At Aunt Jane's crowded apartment, the family fed Barack and listened politely to his stories about Chicago — but they were truly thrilled that he was going to Harvard in the fall.",
        hint: "The passage names the university Barack would attend.",
        explanation: "The relatives were thrilled Barack was headed to Harvard — Jane even told Bernard to study like his American brother."
      },
      {
        id: 'od15-9',
        question: "What did Jane whisper to Auma about Aunt Sarah?",
        options: [
          "Sarah was baking a cake for Barack's visit",
          "Sarah wanted to give Barack her house",
          "Sarah was disputing the Old Man's will and saying the children were not his",
          "Sarah had moved back to Germany"
        ],
        correctAnswerIndex: 2,
        samplePassage: "As they left, Jane whispered that Auma should take Barack to see Aunt Sarah, who was disputing the Old Man's will and insisting that Auma, Roy, and Bernard were not really the Old Man's children.",
        hint: "The passage names the legal fight Sarah had started over the estate.",
        explanation: "Sarah was disputing the Old Man's will, claiming Auma, Roy, and Bernard were not his children — and Auma warned Barack that Sarah really just wanted his money."
      },
      {
        id: 'od15-10',
        question: "How did Barack finally get his lost luggage back?",
        options: [
          "He bought all new clothes at the market",
          "The airline found it on its own the next morning",
          "A relative who knew the British Airways manager got the manager to arrange its delivery",
          "Auma drove to Johannesburg to fetch it"
        ],
        correctAnswerIndex: 2,
        samplePassage: "After two days of no help at the airline office, a relative appeared who knew the British Airways manager, and with his prodding the manager arranged to have Barack's bag delivered that same day.",
        hint: "The passage credits a family connection, not the airline, for solving the problem.",
        explanation: "Only a relative's connection to the British Airways manager got the bag delivered — teaching Barack Auma's lesson that in Kenya you get things done through family, friends, or tribe."
      }
    ]
  },
  {
    id: 'obama-dreams-ch16',
    title: "Dreams from My Father: Chapter 16",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "amber",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "In Nairobi, Barack plays basketball with Bernard, meets the combative Aunt Sarah in Mathare, and has awkward lunches with his father's ex-wife Ruth and his half-brother Mark, who wants nothing to do with his Kenyan roots.",
    questions: [
      {
        id: 'od16-1',
        question: "What did Bernard come to Auma's door to do with Barack?",
        options: [
          "Ask for money for school fees",
          "Invite him to a wedding",
          "Play basketball with him",
          "Borrow his camera"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Bernard showed up at Auma's doorstep so he could play basketball with Barack, then doubted they could run to the courts — and sure enough, he had to walk after a quarter mile.",
        hint: "The passage names the sport Bernard wanted to play.",
        explanation: "Bernard came to play basketball with Barack, though he tired quickly on the run to the courts."
      },
      {
        id: 'od16-2',
        question: "What did Bernard believe about life in America?",
        options: [
          "That everyone has a car and a phone, and work is easy to find",
          "That it snows there every single day",
          "That no one there plays basketball",
          "That all Americans speak Swahili"
        ],
        correctAnswerIndex: 0,
        samplePassage: "While they shot hoops, Bernard announced that in America everyone has a car and a phone, that finding work would be easy, and that he would come work for Barack's business — a business that did not exist.",
        hint: "The passage lists two things Bernard thought every American owned.",
        explanation: "Bernard imagined America as a place where everyone has a car and a phone and jobs are easy — and planned to work for a business Barack didn't even have."
      },
      {
        id: 'od16-3',
        question: "Where did Zeituni take Barack to visit Aunt Sarah?",
        options: [
          "A beach resort in Mombasa",
          "A farm outside Nairobi",
          "The University of Nairobi campus",
          "Mathare, a valley with a vast shantytown"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Zeituni took Barack to Mathare, a valley holding a vast shantytown, where they climbed to an upper-story apartment to visit Aunt Sarah, who spoke only Luo.",
        hint: "The passage describes the poor, crowded valley where Sarah lived.",
        explanation: "Sarah lived in Mathare, a valley of shantytowns — a far cry from the wealthy neighborhoods where Ruth lived."
      },
      {
        id: 'od16-4',
        question: "What shocking claim did Sarah make about Barack's grandmother?",
        options: [
          "That Granny had been a famous singer",
          "That Akumu, not Granny, was Barack's real grandmother",
          "That Granny was actually his aunt",
          "That she herself was his grandmother"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Speaking in English, Sarah spat that Akumu, not Granny, was Barack's grandmother — part of her argument that the family owed her support.",
        hint: "The passage names the other woman Sarah said was really Barack's grandmother.",
        explanation: "Sarah claimed Akumu — the Old Man's mother who ran away — was Barack's true grandmother, not Granny, as she demanded that he help support her."
      },
      {
        id: 'od16-5',
        question: "When Sarah asked Barack for help, what did he do?",
        options: [
          "He gave her money",
          "He promised to build her a house",
          "He refused and walked out",
          "He told her to ask Auma instead"
        ],
        correctAnswerIndex: 0,
        samplePassage: "When Sarah asked Barack why he wasn't helping them, he gave her money — and Zeituni quickly dragged him outside before Sarah could invite him to stay longer.",
        hint: "The passage says what Barack handed over when Sarah asked.",
        explanation: "Barack gave Sarah money when she asked, though Zeituni hurried him away before Sarah could draw him in further."
      },
      {
        id: 'od16-6',
        question: "According to Zeituni, who adopted Granny as his mother?",
        options: [
          "Onyango, after his first wife died",
          "Roy, when he was a small boy",
          "The Old Man, after Akumu ran away",
          "Bernard, when Jane raised him"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Zeituni explained that the Old Man adopted Granny as his mother after Akumu left, and that she never knew the whole truth of the family's quarrels.",
        hint: "The passage names which son chose Granny as his mother.",
        explanation: "After Akumu ran away, the Old Man chose Granny as his mother — while his sister Sarah stayed loyal to Akumu."
      },
      {
        id: 'od16-7',
        question: "What advice did Zeituni give Barack about the family?",
        options: [
          "Never visit Kenya again",
          "Give money to everyone who asks",
          "Write down every family story",
          "Draw the line and decide who is family"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Zeituni warned Barack not to judge the Old Man too harshly but to learn from him: draw the line and decide who is family, since the Old Man never learned to say no.",
        hint: "The passage repeats Zeituni's exact advice about setting boundaries.",
        explanation: "Zeituni told Barack to draw the line and decide who counts as family — the lesson the big-hearted Old Man, who never said no, had failed to learn."
      },
      {
        id: 'od16-8',
        question: "What did Auma tell Barack happened to David, Ruth's younger son?",
        options: [
          "He moved to England and became a doctor",
          "He insisted he was an Obama, ran away, and died while living with Roy",
          "He changed his name and never spoke to the family",
          "He stayed with Ruth and went to an international school"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Auma explained that after the bitter divorce, David insisted he was an Obama and ran away; Roy found him, he became the family favorite, and he died while living with Roy — breaking Roy's heart.",
        hint: "The passage traces David's path from running away to his death.",
        explanation: "David refused his new stepfamily's name, insisted he was an Obama, ran away to Roy's, and died while living there — a loss that devastated Roy."
      },
      {
        id: 'od16-9',
        question: "What kind of scientist was Barack's half-brother Mark training to be?",
        options: [
          "A chemist",
          "A biologist",
          "A physicist",
          "A geologist"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Over lunch Mark told Barack he was studying physics at Stanford, that he loved Shakespeare and Beethoven, and that he was cutting himself off from his Kenyan roots.",
        hint: "The passage names the science Mark studied at Stanford.",
        explanation: "Mark was training to be a physicist at Stanford — and told Barack flatly that he resented the Old Man and wanted nothing to do with his Kenyan past."
      },
      {
        id: 'od16-10',
        question: "Why did Auma laugh after hearing about Barack's lunch with Mark?",
        options: [
          "Ruth is the only wife with documents proving the Old Man is Mark's father",
          "Mark had told the same jokes as the Old Man",
          "Ruth had served American food by mistake",
          "Mark had fallen asleep at the table"
        ],
        correctAnswerIndex: 0,
        samplePassage: "When Barack told Auma about the lunch, she laughed — Ruth has the documents to prove that the Old Man is Mark's father, unlike any of the Old Man's other wives.",
        hint: "The passage names the papers only Ruth possesses.",
        explanation: "Auma laughed because Ruth is the one wife with legal documents proving the Old Man fathered Mark — a sharp contrast to the disputed paternity of the other children."
      }
    ]
  },
  {
    id: 'obama-dreams-ch17',
    title: "Dreams from My Father: Chapter 17",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "emerald",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Barack and Auma go on safari with a driver named Francis, debate colonialism and faith around the campfire, then return to a family feast celebrating Roy's arrival — where Roy reveals a painful secret about the night David died.",
    questions: [
      {
        id: 'od17-1',
        question: "Who drove Barack and Auma on their safari?",
        options: [
          "Francis, a driver for a travel agency",
          "Mr. Wilkerson, an English doctor",
          "Bernard, who wanted to see the animals",
          "A Masai warrior named Elizabeth"
        ],
        correctAnswerIndex: 0,
        samplePassage: "A driver named Francis took Barack, Auma, and several others out into the countryside on safari, picking up his young teenage niece Elizabeth along the way.",
        hint: "The passage names the driver of the safari van.",
        explanation: "Francis drove the safari van — a farmer at heart who drove for a travel agency because the Kenyan Coffee Union shorted farmers like him."
      },
      {
        id: 'od17-2',
        question: "What animals did the safari group pass on the way to the Great Rift Valley?",
        options: [
          "Lions, tigers, and bears",
          "Elephants, rhinos, and hippos",
          "Camels, ostriches, and hyenas",
          "Gazelle, wildebeest, and zebras"
        ],
        correctAnswerIndex: 3,
        samplePassage: "After slow going for several hours, they began to pass gazelle, wildebeest, and zebras, along with Masai herdsmen tending their cattle.",
        hint: "The passage lists three grazing animals they drove past.",
        explanation: "They passed gazelle, wildebeest, and zebras on the way to the Great Rift Valley, where they later watched animals drink at a watering hole."
      },
      {
        id: 'od17-3',
        question: "What had the two Masai night guards done to become warriors?",
        options: [
          "Climbed the tallest mountain in Kenya",
          "Killed lions to prove their manhood",
          "Memorized all the tribe's songs",
          "Built a new village by hand"
        ],
        correctAnswerIndex: 1,
        samplePassage: "In the evenings Barack spoke with the two Masai guardsmen, warriors who had killed lions to prove their manhood, and Auma asked them what they believed happened after death.",
        hint: "The passage names the dangerous animal the guards had killed.",
        explanation: "The Masai guards had killed lions to earn their status as warriors — and they smiled when Auma asked about the afterlife, saying they believed nothing happened."
      },
      {
        id: 'od17-4',
        question: "What did Mr. Wilkerson, the Englishman on the safari, do for a living in Malawi?",
        options: [
          "He ran a tea plantation",
          "He taught at a university",
          "He worked as a doctor for the government",
          "He managed a travel agency"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Mr. Wilkerson, an Englishman who had grown up on a Kenyan tea plantation, explained that after medical school he and his wife had moved to Malawi to work with the government as doctors.",
        hint: "The passage says what kind of work he did for Malawi's government.",
        explanation: "Mr. Wilkerson was a doctor working for Malawi's government — he called Africa home even though he knew Malawian doctors would one day take his place."
      },
      {
        id: 'od17-5',
        question: "What did the safari group argue about around the campfire?",
        options: [
          "Whether Christianity had been a force for good or for colonialism in Africa",
          "Which football team was the best in Kenya",
          "Whether the van could cross the river",
          "What to cook for breakfast"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Around the fire, Francis, who was Christian, argued with an Italian man who had left the church about whether Christianity had brought good or colonialism to Africa.",
        hint: "The passage names the religion at the center of the debate.",
        explanation: "Francis and an Italian ex-churchgoer debated whether Christianity had been a force for good or for colonialism — a question that hung over the whole trip."
      },
      {
        id: 'od17-6',
        question: "What surprise was waiting when Barack and Auma returned from the safari?",
        options: [
          "Their luggage had finally arrived",
          "Granny had come to Nairobi",
          "Barack had been accepted to Harvard",
          "Roy had arrived early with his girlfriend Amy"
        ],
        correctAnswerIndex: 3,
        samplePassage: "When Barack and Auma returned from the safari, they got word that Roy had arrived early from Washington, D.C. — and the family was planning a huge feast, with Roy's girlfriend Amy at his side.",
        hint: "The passage names the brother who came home early.",
        explanation: "Roy had arrived early from Washington, D.C. with Amy, his Kenyan girlfriend, and the family threw a feast at Jane's to celebrate."
      },
      {
        id: 'od17-7',
        question: "What business did Roy want to start?",
        options: [
          "A matatu bus company",
          "A coffee farm",
          "An import-export company selling Kenyan crafts in America",
          "A restaurant in Nairobi"
        ],
        correctAnswerIndex: 2,
        samplePassage: "After dinner Roy announced he would start an import-export company selling Kenyan crafts in America — and Auma was aghast at how much he had overpaid for the sample woodcarvings.",
        hint: "The passage names the two countries Roy's business would connect.",
        explanation: "Roy planned an import-export business selling Kenyan curios in America, but Auma scolded him for overpaying for the cheap sample carvings."
      },
      {
        id: 'od17-8',
        question: "What did Roy pour on the floor when he announced he would marry Amy?",
        options: [
          "A beer",
          "A glass of milk",
          "A cup of tea",
          "A bottle of water"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Roy announced to the room that he planned to marry Amy because she was an African woman who would not argue with him — and poured a beer onto the floor, which Jane rushed to clean up.",
        hint: "The passage names the drink Roy spilled as an offering.",
        explanation: "Roy poured a beer onto the floor as he announced his plan to marry Amy — a gesture that disgusted Auma but sent Jane scrambling to clean."
      },
      {
        id: 'od17-9',
        question: "What story did Zeituni tell about the Old Man and dancing?",
        options: [
          "He once danced with the president of Kenya",
          "He took Kezia dancing instead of doing Onyango's chores, and Onyango was furious",
          "He refused to ever dance at parties",
          "He taught Barack to dance at Jane's feast"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Zeituni boasted that she was the best dancer and the Old Man the best partner, recalling how he once took Kezia out dancing instead of doing Onyango's chores — Onyango was livid, but the Old Man just put on a record and called Kezia to dance.",
        hint: "The passage explains whose chores the Old Man skipped to go dancing.",
        explanation: "The Old Man skipped Onyango's chores to take Kezia dancing; when the furious Onyango confronted him, he simply put on a record and kept dancing — even calling Granny to join."
      },
      {
        id: 'od17-10',
        question: "What painful secret did Roy share about the night David died?",
        options: [
          "He had argued with David that morning",
          "He had been in jail in Nairobi, and David had begged for the keys to fetch his papers",
          "He had left David alone at the club",
          "He had refused to lend David money"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Outside the club, Roy confessed that he had been in jail the night David died — he had fought a man at a club and had no papers, so David had begged for the keys to go fetch them.",
        hint: "The passage explains where Roy was and what David was trying to do.",
        explanation: "Roy had been jailed after a club fight, and David died while fetching Roy's papers — Barack assured Roy it had been an accident, and Roy leapt up to dance."
      }
    ]
  },
  {
    id: 'obama-dreams-ch18',
    title: "Dreams from My Father: Chapter 18",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "sky",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Barack rides the train to Kisumu and travels on to the ancestral home in Alego, where Granny welcomes him, Roy shows him the family graves, and Sayid shares hard-won wisdom about the Old Man.",
    questions: [
      {
        id: 'od18-1',
        question: "How did Barack and his family travel to Kisumu?",
        options: [
          "By airplane",
          "By train",
          "By bus",
          "By boat"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Barack and most of his family boarded a train headed for Kisumu, and he stared out the window thinking about the railway the British had built.",
        hint: "The passage names the vehicle that carried the whole family west.",
        explanation: "They rode the train to Kisumu — the same railway the British built as their biggest engineering effort in Kenya."
      },
      {
        id: 'od18-2',
        question: "What was special about the year 1895, when Onyango was born?",
        options: [
          "It was the year the British began building the Kenya railway",
          "It was the year Kenya became independent",
          "It was the year Nairobi was founded",
          "It was the year the Old Man was born"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Barack's grandfather, Hussein Onyango, was born in 1895 — the very year construction began on the great railway the British pushed across Kenya.",
        hint: "The passage connects Onyango's birth year to the railway's beginning.",
        explanation: "Onyango was born in 1895, the year the British began building the Kenya railway — a project that reshaped the country he grew up in."
      },
      {
        id: 'od18-3',
        question: "What nickname did the family give the ancestral home in Alego?",
        options: [
          "The Big House",
          "Granny's Place",
          "The Old Homestead",
          "Home Squared"
        ],
        correctAnswerIndex: 3,
        samplePassage: "On the train, Auma and Roy explained it would take a day to reach Home Squared — the family's nickname for the ancestral home in the countryside known as Alego.",
        hint: "The passage gives the family's playful name for the homestead.",
        explanation: "The family called the ancestral home in Alego \"Home Squared\" — and the train, matatus, and a long walk finally brought them there."
      },
      {
        id: 'od18-4',
        question: "Why did the grandchildren call Onyango \"The Terror\"?",
        options: [
          "He told frightening ghost stories",
          "He kept a pet leopard",
          "He hit people with a stick for not following proper British etiquette",
          "He shouted at everyone at dinner"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Auma and Roy remembered Onyango — called The Terror — who would hit people with a stick for not following proper British etiquette, though Zeituni added that she had been his favorite and was still afraid of him.",
        hint: "The passage describes the punishment Onyango gave for bad manners.",
        explanation: "Onyango struck people with a stick if they broke proper British etiquette — even adult guests — which earned him the nickname \"The Terror.\""
      },
      {
        id: 'od18-5',
        question: "What covered the walls inside Granny's house?",
        options: [
          "The Old Man's Harvard diploma and family photos",
          "Colorful woven tapestries",
          "Maps of Kenya and newspaper clippings",
          "Portraits painted by local artists"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Granny led Barack into the house, whose walls were covered with the Old Man's Harvard diploma and family photos — including Onyango, baby pictures, and a Burmese woman.",
        hint: "The passage names the diploma hanging among the photographs.",
        explanation: "The walls displayed the Old Man's Harvard diploma alongside family photos — a shrine to the brilliant son Granny had loved."
      },
      {
        id: 'od18-6',
        question: "What did Roy show Barack outside Granny's house?",
        options: [
          "A new well the family had dug",
          "Onyango's old farming tools",
          "A mango tree planted by the Old Man",
          "Two cement tombs — Onyango's named grave and his father's nameless one"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Roy took Barack outside to two cement tombs: one bearing Hussein Onyango's name, and the other — the Old Man's — covered in yellow bathroom tiles with no nameplate at all.",
        hint: "The passage describes the two graves and what was missing from one.",
        explanation: "Roy showed Barack the two family tombs and asked him to make sure his father's grave someday gets a name — its yellow tiles still bore no nameplate."
      },
      {
        id: 'od18-7',
        question: "What favor did Granny ask Barack to do for her son Omar?",
        options: [
          "Send him money for school",
          "Tell him to come home if they ever meet",
          "Buy him a plane ticket to Kenya",
          "Find him a job in America"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Over tea, Granny said she had not heard from her son Omar in over a year and asked Barack to tell Omar to come home if they ever saw each other.",
        hint: "The passage names the son Granny had not heard from.",
        explanation: "Granny asked Barack to pass a message to Omar — she wanted nothing from him except a visit home."
      },
      {
        id: 'od18-8',
        question: "What are night runners, according to Auma?",
        options: [
          "Fast matatu drivers who work after dark",
          "Spirit men who take an animal's shape at night and can hex people",
          "Thieves who steal chickens from farms",
          "Guards who patrol the compound with lanterns"
        ],
        correctAnswerIndex: 1,
        samplePassage: "When they heard moaning in the dark, Auma joked it was the night runners — spirit men who take an animal's shape at night and can hex people — though Zeituni scolded her for treating them as a joke.",
        hint: "The passage describes the supernatural shape-shifters Auma named.",
        explanation: "Night runners were said to be spirit men who became animals at night and could hex people — and Onyango was the only person who had never feared them."
      },
      {
        id: 'od18-9',
        question: "What disappointed Abo about the gift Barack brought from America?",
        options: [
          "The cassette player was not a Sony",
          "The shirt was the wrong size",
          "The book was in English, not Luo",
          "The radio needed batteries"
        ],
        correctAnswerIndex: 0,
        samplePassage: "When Roy introduced Barack to Abo at Kendu Bay, Abo asked what Barack had brought him from America — and barely hid his disappointment that the cassette player was not a Sony.",
        hint: "The passage names the brand Abo had hoped for.",
        explanation: "Abo had hoped for a Sony and was visibly disappointed by the lesser cassette player — a small moment that showed how the family measured American gifts."
      },
      {
        id: 'od18-10',
        question: "According to Sayid, what was the Old Man's great error?",
        options: [
          "He spent too much time studying",
          "He refused to learn Luo",
          "He just wanted to belong, and could not see he could not both do serious government work and buy drinks for everyone",
          "He never visited Alego"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Sayid told Barack that Roy was like the Old Man, who used to buy drinks for everyone — a good man, but he could not understand that he could not write economic policy and buy drinks at the same time. He just wanted to belong.",
        hint: "The passage contrasts the Old Man's generous habit with his serious work.",
        explanation: "Sayid believed the Old Man's error was wanting so badly to belong that he bought drinks for everyone — never seeing that such generosity clashed with the discipline his government work required."
      }
    ]
  },
  {
    id: 'obama-dreams-ch19',
    title: "Dreams from My Father: Chapter 19",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "indigo",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Granny tells the full story of Onyango and the Old Man — from Onyango's harsh rise to the Old Man's fall — and Barack weeps at his father's grave, finally at peace with his family's past.",
    questions: [
      {
        id: 'od19-1',
        question: "How many generations back did Granny trace the family's men?",
        options: [
          "Three generations",
          "Five generations",
          "Ten generations",
          "Seven generations"
        ],
        correctAnswerIndex: 3,
        samplePassage: "When Barack asked Granny to tell him about Onyango, she began by listing the men in the family going back seven generations, starting with his great-grandfather Obama.",
        hint: "The passage states the exact number of generations Granny named.",
        explanation: "Granny traced the family back seven generations to Barack's great-grandfather Obama, who had been orphaned as a boy and became a village elder."
      },
      {
        id: 'od19-2',
        question: "Why did Onyango's father disown him?",
        options: [
          "Onyango refused to work on the farm",
          "Onyango came home dressed in white men's clothes, which his father believed hid that he had been circumcised against Luo custom",
          "Onyango stole cattle from a neighbor",
          "Onyango ran away to join the British Army"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Onyango disappeared and returned months later dressed in white men's clothes; his father Obama decided he was dressed that way to hide that he had been circumcised — against Luo custom — and disowned him.",
        hint: "The passage explains what the clothes were supposedly hiding.",
        explanation: "Onyango's father believed the white men's clothes hid a circumcision, which violated Luo custom — so he disowned his son, sending Onyango off to Kisumu."
      },
      {
        id: 'od19-3',
        question: "How did Onyango take Akumu as his wife?",
        options: [
          "He paid a hefty price and had his friends kidnap her",
          "He won her hand in a wrestling match",
          "Her family offered her to him as a gift",
          "She chose him at a village dance"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Onyango set his sights on the beautiful Akumu, who was promised to someone else — so he paid a hefty price and had his friends kidnap her.",
        hint: "The passage describes the price paid and the friends' role.",
        explanation: "Onyango paid a large bride price and had friends kidnap Akumu from the man she was promised to — a \"capture\" Granny called traditional, though Auma called it awful."
      },
      {
        id: 'od19-4',
        question: "How old was Granny when she married Onyango?",
        options: [
          "Twelve",
          "Twenty-one",
          "Sixteen",
          "Thirty"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Granny told Barack she was only sixteen when she married Onyango, while Akumu already had Sarah and the Old Man and was growing unhappy under Onyango's harsh demands.",
        hint: "The passage gives Granny's exact age at her wedding.",
        explanation: "Granny was sixteen when she became Onyango's wife — joining a household where Akumu was already chafing under Onyango's strict rule."
      },
      {
        id: 'od19-5',
        question: "What did Onyango accomplish after moving the family to Alego?",
        options: [
          "He built a school for the village",
          "He opened a shop in Kisumu",
          "He joined the district council",
          "He turned the bush into a profitable farm within a year"
        ],
        correctAnswerIndex: 3,
        samplePassage: "After forcing the move to Alego, where there was less crowding and more land, Onyango used the Western farming techniques he had learned to turn the bush into a profitable farm within a single year.",
        hint: "The passage names the time it took Onyango to make the farm succeed.",
        explanation: "Within a year Onyango had a thriving farm in Alego — he even sold his cattle because they eroded the soil, and baked bread and cakes in an oven he installed."
      },
      {
        id: 'od19-6',
        question: "What happened after Akumu ran away?",
        options: [
          "Onyango forgave her and brought her back",
          "Sarah and the Old Man tried to follow her to Kendu but got lost, and their father retrieved them",
          "Granny left Onyango as well",
          "The children never saw her again and forgot her"
        ],
        correctAnswerIndex: 1,
        samplePassage: "When the Old Man was nine and Sarah twelve, Akumu ran off with her new baby; weeks later the two children tried to reach her in Kendu, got lost, and were in bad shape when their father retrieved them.",
        hint: "The passage describes the children's failed journey to find their mother.",
        explanation: "Sarah and the young Old Man tried to follow Akumu to Kendu but got lost, and Onyango brought them home — after which Granny effectively became their mother."
      },
      {
        id: 'od19-7',
        question: "What was unusual about how the Old Man went to school?",
        options: [
          "He walked ten miles each way",
          "He taught the classes himself",
          "He skipped classes and showed up only for exams — yet finished at the top",
          "He was expelled twice for fighting"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Granny recalled that the Old Man was so smart he did not need to study: he mostly skipped school, showed up only for exams, and still finished at the top of his class.",
        hint: "The passage says which school days the Old Man actually attended.",
        explanation: "The Old Man barely attended classes, appearing only for exams — and still ranked at the top, boasting about it to his friends."
      },
      {
        id: 'od19-8',
        question: "How did the Old Man earn his chance to study in America?",
        options: [
          "He wrote letters to American universities, and one in Hawaii accepted him",
          "The Kenyan government gave him a scholarship",
          "A British officer paid his way",
          "He won a national essay contest"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Two Americans noticed how smart the Old Man was and offered to help; he wrote letters to American universities asking for applications, and one in Hawaii accepted him.",
        hint: "The passage names the letters and the state that said yes.",
        explanation: "The Old Man wrote to American universities requesting applications, and a university in Hawaii accepted him — launching the journey that led to Ann Dunham."
      },
      {
        id: 'od19-9',
        question: "What did Granny give Barack from the old leather trunk?",
        options: [
          "Onyango's walking stick and a photo album",
          "A register of domestic servants and the Old Man's letters to American universities",
          "A bag of coins and a beaded necklace",
          "The Old Man's Harvard diploma"
        ],
        correctAnswerIndex: 1,
        samplePassage: "At Barack's request, Granny brought out a leather trunk holding a small book — a register for domestic servants listing Onyango's employers — and the Old Man's letters to American universities.",
        hint: "The passage names the two items from the trunk.",
        explanation: "The trunk held Onyango's domestic-servant register and the Old Man's university letters — the papers Barack called his true inheritance."
      },
      {
        id: 'od19-10',
        question: "What happened as Barack stood weeping before the graves?",
        options: [
          "Granny joined him and sang a Luo song",
          "Auma read aloud from the servant register",
          "It began to rain, and Bernard arrived with an umbrella",
          "The whole family gathered to pray"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Crying before the graves, Barack felt all the parts of his life connect to that plot of land — and as it began to rain, Bernard arrived with an umbrella.",
        hint: "The passage names who came and what they carried as the rain started.",
        explanation: "Barack wept at the graves, finally feeling connected to his father and grandfather — and as rain fell, Bernard arrived with an umbrella, closing the circle of the journey."
      }
    ]
  }
];
