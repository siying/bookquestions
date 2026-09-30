import { Question } from '../../types/quiz';

// Higher-order comprehension questions for Dreams from My Father chapters 1-9.
// Set: main idea + tone/mood + two higher-order questions per chapter
// (character trait, inference, or author's point). Sample passages are
// paraphrased prose, never verbatim book quotes.
export const OBAMA_COMP_A: Record<string, Question[]> = {
  "obama-dreams-ch1": [
    {
      id: "od1-11",
      question: "What is the main idea of Chapter 1?",
      options: [
        "A young man explains why his grandparents are called Gramps and Toot.",
        "A young man learns of his father's death and begins piecing together the story of the father he barely knew.",
        "A college student describes his classes at Columbia University.",
        "A boy describes his daily life growing up in Honolulu."
      ],
      correctAnswerIndex: 1,
      samplePassage: "The chapter opens with a late night phone call bringing news of the death of the father, then looks back at a childhood shaped by an absent father known mostly through family stories, and ends with the young man determined to uncover the real story of the man he barely knew.",
      hint: "The passage connects the opening phone call to the search for the story of the father.",
      explanation: "The death of his father sets the young Barack on a search to understand a man he knew only through stories, which is the driving thread of the whole chapter."
    },
    {
      id: "od1-12",
      question: "Which word best describes the tone of Chapter 1?",
      options: [
        "hopeful",
        "playful",
        "angry",
        "reflective"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter moves between the shock of the midnight phone call and quiet looks back at childhood, as the narrator weighs the heroic stories his family told against the mystery of a father who stayed away.",
      hint: "The passage shows the narrator looking back and weighing memories, not laughing or raging.",
      explanation: "The chapter is reflective: Obama looks back on his childhood and thoughtfully weighs what he was told about his father against what he never knew."
    },
    {
      id: "od1-13",
      question: "Which of these best describes the 21-year-old Barack in Chapter 1?",
      options: [
        "Determined, beginning to gather the scattered pieces of his father's story.",
        "Indifferent, shrugging off the news of his father's death.",
        "Angry at his mother for filling his head with stories about his father.",
        "Content, feeling he already understands his father completely."
      ],
      correctAnswerIndex: 0,
      samplePassage: "After the phone call, the young man turns over the few facts he has: a father who left when he was two, one month-long visit at age ten, and a head full of family stories. The gaps trouble him, and he begins to search for the real man behind the stories.",
      hint: "The passage shows him bothered by the gaps in what he knows and starting to search.",
      explanation: "He is determined: instead of shrugging off the news, he starts piecing together the story of a father he barely knew, which launches the whole memoir."
    },
    {
      id: "od1-14",
      question: "Most of what Barack knew about his father came from stories told by his mother and grandparents. What can you infer from this?",
      options: [
        "His father wrote him a letter every week of his childhood.",
        "His mother had never met his father.",
        "His father was largely absent from his daily life growing up.",
        "Barack spent his childhood living in Kenya."
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter explains that Barack learned about his father almost entirely from the glowing tales told by his mother and grandparents, since the man himself had left when Barack was two and visited only once.",
      hint: "The passage says his knowledge came from other people because the father himself was gone.",
      explanation: "If everything he knew came secondhand from family stories, his father must have been absent from his everyday life, which is why the stories could not explain the absence."
    }
  ],
  "obama-dreams-ch2": [
    {
      id: "od2-11",
      question: "What is the main idea of Chapter 2?",
      options: [
        "A boy learns to box because his mother asks Lolo to teach him.",
        "A mother wakes her son at 4:30 every morning for English lessons.",
        "A boy moves to Indonesia and learns hard lessons about strength, survival, and a world very different from his own.",
        "A boy tries unusual foods like roasted grasshopper at a school party."
      ],
      correctAnswerIndex: 2,
      samplePassage: "At six, Barack moves to Djakarta, where his stepfather Lolo teaches him to box, warns him about beggars, and shows him a life far rougher than Hawaii, while his mother drills him in English before dawn and he gets his first unsettling lessons about race.",
      hint: "The passage covers the move, the hard lessons from Lolo, and the strange new world.",
      explanation: "The center of the chapter is Barack's crash course in a tougher, stranger world under Lolo's unsentimental guidance: the boxing, the beggars, the new foods, and the first brushes with harder truths."
    },
    {
      id: "od2-12",
      question: "Which word best describes the tone of Chapter 2?",
      options: [
        "adventurous",
        "cozy",
        "gloomy",
        "dull"
      ],
      correctAnswerIndex: 0,
      samplePassage: "The chapter reads like the adventure of a boy in a strange land: new foods, boxing lessons, jungle stories of leeches, and a bustling foreign city, though darker moments, like the frightening magazine photograph, break through the excitement.",
      hint: "The passage is full of new experiences and discoveries, with only brief dark moments.",
      explanation: "Adventurous fits best: the chapter is told through a boy's wide eyes as he explores Indonesia, even as Lolo's hard lessons and the magazine photo add shadows."
    },
    {
      id: "od2-13",
      question: "Which of these best describes Lolo in Chapter 2?",
      options: [
        "Soft-hearted, shielding Barack from every hardship he faced.",
        "Scholarly, spending his evenings reading books aloud to Barack.",
        "Carefree, treating life in Djakarta like one long game.",
        "Practical and tough-minded, teaching Barack to face the world as it really is."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Lolo teaches Barack to box after local boys throw a rock at him, shows him leech scars from army service in New Guinea, and instructs him to be strong or clever and never to end up a beggar.",
      hint: "The passage lists his unsentimental lessons about strength and survival.",
      explanation: "Lolo is practical and tough-minded: every lesson, from boxing to the leech scars to the beggar rule, is about surviving a hard world."
    },
    {
      id: "od2-14",
      question: "Lolo told Barack not to give money to beggars, and above all not to end up a beggar himself. What can you infer Lolo believed?",
      options: [
        "That beggars were more important than family.",
        "That each person must look out for himself in a harsh world.",
        "That Djakarta had no poor people at all.",
        "That Barack should ask strangers for money."
      ],
      correctAnswerIndex: 1,
      samplePassage: "When beggars approached, Lolo instructed Barack to keep his money and his distance, warning him that weakness invites trouble and that he must never become one of the beggars himself.",
      hint: "The passage shows Lolo urging self-reliance rather than charity.",
      explanation: "Lolo's rule was unsentimental: in a hard world you protect yourself first and work hard enough never to need begging, a belief in self-reliance."
    }
  ],
  "obama-dreams-ch3": [
    {
      id: "od3-11",
      question: "What is the main idea of Chapter 3?",
      options: [
        "A boy returns to Hawaii, starts at a new school, and finally spends time with the father he has only heard about.",
        "Two grandparents argue every evening about who earns more money.",
        "A boy learns he has five brothers and a sister living in Kenya.",
        "A father gives his son a basketball for Christmas."
      ],
      correctAnswerIndex: 0,
      samplePassage: "At nine, Barack moves back to Hawaii to live with his grandparents and starts fifth grade at Punahou Academy. Then a telegram announces the month-long Christmas visit of his father, and the boy finally meets the man from the stories told by his mother, sharing music, dancing, and a goodbye that stays with him.",
      hint: "The passage follows the return to Hawaii, the new school, and the long-awaited visit.",
      explanation: "The arc of the chapter is the return to Hawaii and the first real time with his father: the school, the fights, and the telegram all lead to that visit."
    },
    {
      id: "od3-12",
      question: "Which word best describes the tone of Chapter 3?",
      options: [
        "furious",
        "cheerful",
        "bittersweet",
        "bored"
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter holds joy and pain side by side: the thrill of the visit of his father, with African records and dancing, against the sting of the playground shove that ended a friendship and the fights that filled the apartment each evening.",
      hint: "The passage mixes warm, happy moments with sad and painful ones.",
      explanation: "Bittersweet fits: the joyful Christmas visit and new-school excitement sit alongside the Coretta incident and the grandparents' nightly fights."
    },
    {
      id: "od3-13",
      question: "Which of these best describes Ann in Chapter 3?",
      options: [
        "Careless, ignoring Barack while his father visits Hawaii.",
        "Honest and thoughtful, preparing her son for a father he barely knows.",
        "Jealous, trying to keep Barack away from his father.",
        "Strict, drilling Barack in schoolwork every morning."
      ],
      correctAnswerIndex: 1,
      samplePassage: "Ann arrives a few weeks before the father and tells Barack what to expect, including the news that his father was recently in a car accident and that he has five brothers and a sister in Kenya.",
      hint: "The passage shows her giving Barack important truths before the visit.",
      explanation: "Ann is honest and thoughtful: she does not hide the hard facts, the accident and the unknown siblings, but prepares Barack so the visit will not blindside him."
    },
    {
      id: "od3-14",
      question: "Which of these best demonstrates the point the author makes that meeting his father did not answer all of his questions?",
      options: [
        "After the month-long visit, Barack understood his father's entire life story.",
        "His father promised to write every week and always kept that promise.",
        "Barack decided he never wanted to see or hear about his father again.",
        "The visit gave Barack joyful memories of music and dancing, yet left him with more questions than answers."
      ],
      correctAnswerIndex: 3,
      samplePassage: "The father teaches Barack to dance to African records and laughs with joy, creating a memory that lasts a lifetime, but the month ends with the man gone again and the boy still wondering about the father behind the stories.",
      hint: "The passage pairs a treasured memory with questions that remain unanswered.",
      explanation: "One joyful month could not fill a lifetime of absence: the dancing and laughter became treasured memories, but the deeper questions about his father stayed open."
    }
  ],
  "obama-dreams-ch4": [
    {
      id: "od4-11",
      question: "What is the main idea of Chapter 4?",
      options: [
        "Barack plays basketball for Punahou and on the university courts.",
        "Ray complains that no girls will date him because they are racist.",
        "Frank tells Barack that he and Gramps grew up fifty miles apart.",
        "A high school sophomore wrestles with what it means to be a young Black man in Hawaii."
      ],
      correctAnswerIndex: 3,
      samplePassage: "As a sophomore, Barack talks race with his friend Ray, seeks out hard truths from Frank, reads Black authors like Malcolm X, learns from older Black men on the university courts, and feels the gap between the love of his grandparents and the fear they feel toward Black strangers.",
      hint: "The passage shows him questioning and exploring his racial identity from many angles.",
      explanation: "Every thread, Ray, Frank, Malcolm X, basketball, and the bus-stop scare, feeds the same central question: how to understand himself as a young Black man."
    },
    {
      id: "od4-12",
      question: "Which word best describes the tone of Chapter 4?",
      options: [
        "cheerful",
        "searching",
        "calm",
        "smug"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Barack questions everyone and everything: he pushes back on the complaints of Ray, asks Frank for hard truths, puzzles over Malcolm X, and wonders what he would give up if he abandoned his white family.",
      hint: "The passage is full of questions and attempts to figure things out.",
      explanation: "The tone is searching: Barack is actively hunting for answers about identity, testing ideas from Ray, Frank, and the books he reads."
    },
    {
      id: "od4-13",
      question: "Which of these best describes Frank in Chapter 4?",
      options: [
        "Polite and comforting, reassuring Barack that racism no longer exists.",
        "Shy and withdrawn, avoiding any serious talk about race.",
        "Blunt and honest, telling Barack hard truths about race even when they sting.",
        "Angry at Barack personally and refusing to speak with him."
      ],
      correctAnswerIndex: 2,
      samplePassage: "Over poker and whiskey, Frank tells Barack that Black people never get to relax and must stay vigilant to survive, and that Gramps cannot know what it is like to be Black, leaving Barack fascinated and unsettled.",
      hint: "The passage shows Frank speaking plainly about painful realities.",
      explanation: "Frank is blunt and honest: he does not soften the truth about vigilance and fear, even though his words leave Barack uncomfortable and alone."
    },
    {
      id: "od4-14",
      question: "After hearing Frank's hard truths, Barack feels entirely alone. What can you infer from this?",
      options: [
        "He felt caught between his white family's love and the reality of being Black.",
        "He decided to stop visiting Frank and never speak to him again.",
        "He felt completely understood by his grandparents on the subject of race.",
        "He stopped caring about race and identity entirely."
      ],
      correctAnswerIndex: 0,
      samplePassage: "The words of Frank leave Barack feeling entirely alone: his grandparents love him, yet they are easily frightened by men who could be his brothers, and Frank insists they can never truly understand his experience.",
      hint: "The passage places him between loving grandparents and a truth they cannot share.",
      explanation: "His loneliness comes from being pulled two ways, loved by his white grandparents yet told they cannot understand what it means to be Black, a split he cannot resolve."
    }
  ],
  "obama-dreams-ch5": [
    {
      id: "od5-11",
      question: "What is the main idea of Chapter 5?",
      options: [
        "Barack and his roommate Hasan throw a messy party in their apartment.",
        "At college, Barack confronts his past habits and begins rethinking his identity and finding his voice.",
        "Regina asks if she can call Barack by his full name instead of Barry.",
        "Students in paramilitary uniforms drag Barack offstage at an anti-apartheid rally."
      ],
      correctAnswerIndex: 1,
      samplePassage: "At Occidental, Barack looks back on his high school drinking and drug use, argues about identity with friends like Joyce and Marcus, accepts the name Barack from Regina, and speaks at an anti-apartheid rally, slowly rediscovering his voice.",
      hint: "The passage traces his self-examination and growth through the college years.",
      explanation: "The chapter is about turning inward and changing: facing his drug use, rethinking identity, and taking the name Barack as he finds a more honest voice."
    },
    {
      id: "od5-12",
      question: "Which word best describes the tone of Chapter 5?",
      options: [
        "playful",
        "carefree",
        "introspective",
        "defiant"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Barack examines his own past with clear eyes, burns with shame over mocking Tim a year later, and realizes that fear, not pride, made him push Coretta and judge others.",
      hint: "The passage shows him looking inward and judging his own past behavior.",
      explanation: "The tone is introspective: much of the chapter is Barack honestly examining his own mistakes and motives, from drugs to the shame over Tim."
    },
    {
      id: "od5-13",
      question: "Which of these best describes Regina in Chapter 5?",
      options: [
        "Principled and direct, calling Barack out when he laughs at something cruel.",
        "Timid and silent, never sharing her own opinions.",
        "Carefree, always laughing along at Barack's jokes.",
        "Selfish, caring only about parties and fun."
      ],
      correctAnswerIndex: 0,
      samplePassage: "When Barack laughs about Mexican maids crying at their party mess, Regina shakes with anger, tells him her grandmother cleaned up after people like him, and walks out.",
      hint: "The passage shows her confronting Barack and leaving over a cruel joke.",
      explanation: "Regina is principled and direct: she refuses to laugh at cruelty, speaks up about her grandmother's dignity, and walks out rather than stay silent."
    },
    {
      id: "od5-14",
      question: "Regina asks to call him Barack instead of Barry, and he agrees. What can you infer this name change meant to Barack?",
      options: [
        "He wanted to hide from his family and his past.",
        "He was trying to impress his college professors.",
        "He no longer liked Regina and wanted distance from her.",
        "He was beginning to embrace his full identity and heritage."
      ],
      correctAnswerIndex: 3,
      samplePassage: "After Regina asks to use his full name, they spend the day talking about her family-filled childhood in Chicago, and Barack feels himself growing and rediscovering his voice.",
      hint: "The passage links the new name to growth and finding his voice.",
      explanation: "Dropping the nickname Barry for Barack signals him embracing his African name and heritage, part of the larger move in the chapter toward a more honest identity."
    }
  ],
  "obama-dreams-ch6": [
    {
      id: "od6-11",
      question: "What is the main idea of Chapter 6?",
      options: [
        "Barack sleeps in an alley on his first night in Manhattan.",
        "Ann takes Barack and Maya to see a movie called Black Orpheus.",
        "In New York, Barack disciplines his life and turns toward the story of the father he barely knew.",
        "Barack's uncle Omar lives in the United States."
      ],
      correctAnswerIndex: 2,
      samplePassage: "After transferring to Columbia, Barack gives up drugs, takes up running and journaling, applies himself to his studies, introduces himself as Barack instead of Barry, and, after the death of his father and a haunting dream, decides he must search for the story of his father.",
      hint: "The passage covers his new discipline and his turn toward his father's story.",
      explanation: "The arc of the chapter is transformation: cleaning up his life in New York and, shaken by his father's death, resolving to seek out the father he never knew."
    },
    {
      id: "od6-12",
      question: "Which word best describes the tone of Chapter 6?",
      options: [
        "determined",
        "carefree",
        "playful",
        "dreamy"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Barack refuses invitations to go out, applies himself to his studies, and chooses the straight and narrow, convinced that the city corrupts people too easily.",
      hint: "The passage shows him firmly choosing discipline over distraction.",
      explanation: "The tone is determined: he deliberately rebuilds his habits, no drugs, running, journaling, study, and sets himself on a serious path."
    },
    {
      id: "od6-13",
      question: "Which of these best describes Ann in Chapter 6?",
      options: [
        "Cynical and bitter, expecting the worst from the world.",
        "Narrow-minded, uninterested in anything from other cultures.",
        "Strict and controlling toward her grown children.",
        "Open-minded and idealistic, finding joy in art and other cultures."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Ann takes Barack and Maya to see Black Orpheus, the first foreign film she ever saw at sixteen, and is delighted by it, even though Barack feels embarrassed by how much she loves the film.",
      hint: "The passage shows her delight in a foreign film she has loved since she was young.",
      explanation: "Ann is open-minded and idealistic: her lifelong love of a foreign film and her eagerness to share it show a curious, generous spirit."
    },
    {
      id: "od6-14",
      question: "Which of these best demonstrates the point the author makes that his father remained a powerful presence even in absence?",
      options: [
        "Barack forgot all about his father once he moved to New York.",
        "A year after his father's death, a dream of meeting him in a jail cell left Barack waking up in tears.",
        "The letter from his father asked him to study law at Harvard.",
        "Barack decided his father had no influence on his life at all."
      ],
      correctAnswerIndex: 1,
      samplePassage: "A year after the death, Barack dreams of meeting his father in a jail cell and wakes up crying, then digs out the old letters of his father and realizes how present his father had been in his life, even just as a story.",
      hint: "The passage shows grief surfacing long after the death.",
      explanation: "The dream proves the point: even a father he barely knew could shake him to tears a year later, present in his life as a story and an image."
    }
  ],
  "obama-dreams-ch7": [
    {
      id: "od7-11",
      question: "What is the main idea of Chapter 7?",
      options: [
        "After college, Barack chooses community organizing over a comfortable corporate career.",
        "Barack works as a research assistant at a consulting house to pay off loans.",
        "Marty Kaufman phones Barack about a trainee organizing job in Chicago.",
        "A boy by the river asks Barack why the water runs in different directions."
      ],
      correctAnswerIndex: 0,
      samplePassage: "In 1983 Barack decides to become a community organizer, writes to civil rights groups with no reply, takes a high-paying consulting job that shames him, and finally accepts the offer of Marty to organize in Chicago.",
      hint: "The passage follows his decision and the choice between two very different paths.",
      explanation: "The chapter is about the choice: despite the easy money of consulting, Barack commits to grassroots organizing and heads for Chicago."
    },
    {
      id: "od7-12",
      question: "Which word best describes the tone of Chapter 7?",
      options: [
        "content",
        "playful",
        "indifferent",
        "restless"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Barack feels ashamed at the consulting house, watches his organizing dreams fade as he gets promoted, and sits by the river turning over his future until the question of a boy snaps him into action.",
      hint: "The passage shows him dissatisfied and unsettled until he finally moves.",
      explanation: "The tone is restless: he is uneasy in the corporate job, haunted by the organizing dream, and unable to settle until he leaves for Chicago."
    },
    {
      id: "od7-13",
      question: "Which of these best describes Marty Kaufman in Chapter 7?",
      options: [
        "Polished and formal, offering Barack a corner office and a big title.",
        "Blunt and demanding, insisting that an organizer must be angry.",
        "Timid and unsure, doubting whether organizing can work.",
        "Wealthy and relaxed, doing charity work on the side."
      ],
      correctAnswerIndex: 1,
      samplePassage: "Marty is pudgy and unkempt, and he insists that Barack must be angry if he wants to organize, explaining that he needs a Black person to help him since most of his work runs through churches.",
      hint: "The passage shows him speaking plainly and making firm demands.",
      explanation: "Marty is blunt and demanding: he lays out exactly what he needs, a Black trainee with real anger, with no polish or pretense."
    },
    {
      id: "od7-14",
      question: "Barack was ashamed to be the only Black employee at his level, though the Black secretaries treated him like a son. What can you infer?",
      options: [
        "He loved the consulting job and wanted a promotion.",
        "He decided organizing was a waste of time.",
        "He felt his corporate success separated him from the community he wanted to serve.",
        "The secretaries disliked him and wanted him to leave."
      ],
      correctAnswerIndex: 2,
      samplePassage: "The high pay does not match his values, and being the only Black employee at his level reminds him of being the outsider at Punahou, while the secretaries seem quietly disappointed that he will not climb the corporate ladder.",
      hint: "The passage shows success feeling like a betrayal of his deeper goals.",
      explanation: "His shame reveals the split: corporate success pulled him away from the Black community he hoped to serve, which is why the job felt wrong despite the money."
    }
  ],
  "obama-dreams-ch8": [
    {
      id: "od8-11",
      question: "What is the main idea of Chapter 8?",
      options: [
        "Marty drives Barack to see the old Wisconsin Steel plant.",
        "Barack organizes a meeting about gangs that only thirteen people attend.",
        "The organization wins $500,000 in state funding for a job placement program.",
        "Barack arrives in Chicago and begins the slow, humbling work of learning to organize a community."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Barack reaches Chicago, tours the South Side with Marty, meets church leaders like Deacon Will Milton, interviews residents about their self-interest, and learns how hard the work is when a gangs meeting draws only thirteen people.",
      hint: "The passage covers his arrival and his first stumbling steps as an organizer.",
      explanation: "The chapter is about beginnings: arriving in a new city and discovering, through small wins and clear failures, what organizing really demands."
    },
    {
      id: "od8-12",
      question: "Which word best describes the tone of Chapter 8?",
      options: [
        "earnest",
        "bitter",
        "playful",
        "defeated"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Barack throws himself into the work with sincere effort: sitting in the kitchens of residents, listening to their stories, and pressing on even after the disastrous gangs meeting.",
      hint: "The passage shows him working with sincere dedication despite setbacks.",
      explanation: "The tone is earnest: Barack approaches the work with genuine seriousness and keeps going, learning from failures like the thirteen-person meeting rather than quitting."
    },
    {
      id: "od8-13",
      question: "Which of these best describes Deacon Will Milton in Chapter 8?",
      options: [
        "Quiet and obedient, never questioning anyone in the church.",
        "Wealthy and powerful, running the whole organization.",
        "Outspoken and honest, calling out hypocrisy in the church.",
        "New to Chicago and unfamiliar with its churches."
      ],
      correctAnswerIndex: 2,
      samplePassage: "Will served in Vietnam, worked at a bank, and turned to Christ after being laid off. He calls out hypocrisy in the church and wears a collar even though he is married and not ordained.",
      hint: "The passage shows him speaking hard truths within his own church.",
      explanation: "Will is outspoken and honest: he names hypocrisy where he sees it, collar or no collar, which is why Barack is drawn to him."
    },
    {
      id: "od8-14",
      question: "Which of these best demonstrates the point the author makes that real organizing must start with what residents actually care about?",
      options: [
        "Barack decided to tell residents what their problems were.",
        "Marty tells Barack his job is to find out people's self-interest, because that is what will get them to organize.",
        "The gangs meeting succeeded because Barack picked the topic himself.",
        "Marty said organizing works best when leaders ignore the community."
      ],
      correctAnswerIndex: 1,
      samplePassage: "Marty gives Barack a list of people to interview and instructs him to discover their self-interest, explaining that only what residents truly care about will move them to act.",
      hint: "The passage states Marty's rule about what motivates people.",
      explanation: "The point is direct: people organize around their own self-interest, not the agenda of an organizer, which is why the self-chosen gangs meeting flopped."
    }
  ],
  "obama-dreams-ch9": [
    {
      id: "od9-11",
      question: "What is the main idea of Chapter 9?",
      options: [
        "A landfill and a sewage treatment plant sit beside the Altgeld Gardens housing project.",
        "In Altgeld Gardens, Barack learns that real victories come slowly, through the residents' own efforts.",
        "Rafiq hands Barack a flyer accusing Arab shops of selling bad meat.",
        "Ms. Alvarez promises a job training center within six months."
      ],
      correctAnswerIndex: 1,
      samplePassage: "Barack throws himself into organizing in Altgeld Gardens: holding street-corner meetings, chasing jobs with local leaders, surviving the resignation of Angela and the failed job bank, and finally winning a promise of a job training center for the Far South Side.",
      hint: "The passage follows the ups and downs of the whole organizing campaign.",
      explanation: "The arc of the chapter is the campaign itself: setbacks like the resignation and the job bank, small steps like the corner meetings, and the slow win of the training center."
    },
    {
      id: "od9-12",
      question: "Which word best describes the tone of Chapter 9?",
      options: [
        "triumphant",
        "despairing",
        "carefree",
        "resilient"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Angela quits feeling she accomplished nothing, the job bank money disappears, yet the group keeps meeting on street corners and finally presses Ms. Alvarez into promising a training center.",
      hint: "The passage shows the group absorbing blows and continuing anyway.",
      explanation: "Resilient fits: the chapter is full of discouragement, quitting and missing money, but the organizers absorb each blow and push on to a real victory."
    },
    {
      id: "od9-13",
      question: "Which of these best describes Mona in Chapter 9?",
      options: [
        "Persistent, pressing Ms. Alvarez until she promised the job training center.",
        "Shy and afraid to speak to any public official.",
        "Indifferent to the campaign for jobs.",
        "New to organizing and unfamiliar with the issues."
      ],
      correctAnswerIndex: 0,
      samplePassage: "At the big meeting with about a hundred people attending, Mona presses Ms. Alvarez, the director of the city office of employment and training, until she promises a job intake and training center for the Far South Side within six months.",
      hint: "The passage shows her refusing to back down until she gets the promise.",
      explanation: "Mona is persistent: she keeps the pressure on a powerful official until the community gets a concrete commitment."
    },
    {
      id: "od9-14",
      question: "About twenty people came to the first street-corner meeting and talked for an hour about what they wanted fixed. What can you infer?",
      options: [
        "Residents did not care about their community.",
        "Marty's idea of street-corner meetings was a failure.",
        "Residents would participate when meetings came to them instead of an unfamiliar church.",
        "The meeting lasted only five minutes."
      ],
      correctAnswerIndex: 2,
      samplePassage: "Since struggling residents would not attend meetings at an unfamiliar church, Marty suggested street-corner meetings, and to the surprise of Barack about twenty people showed up and talked for an hour.",
      hint: "The passage contrasts the empty church meetings with the lively corner meeting.",
      explanation: "The turnout proves the method: people who would not travel to a strange church would gather on their own corner, so the meeting had to meet them where they were."
    }
  ],
};
