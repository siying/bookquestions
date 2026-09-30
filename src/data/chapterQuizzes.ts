import { Book } from '../types/quiz';

// Chapter-level quiz sets. Sample passages are paraphrased scene summaries
// (not verbatim book quotes) — replace with exact excerpts if desired.
export const CHAPTER_QUIZZES: Book[] = [
  {
    id: 'superbugs-ch1',
    title: "Superbugs: Chapter 1 – The Fog of War",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "emerald",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "In October 1914, a young Scottish army doctor named Alexander Fleming faces the horrors of infected battlefield wounds in France — and the deadly germs no medicine can yet stop.",
    questions: [
      {
        id: 'sb1-1',
        question: "In October 1914, what was Alexander Fleming's role on the Western Front?",
        options: [
          "A captain in England's Royal Army Medical Corps",
          "A nurse in a Paris civilian hospital",
          "A pharmacist selling medicine in London",
          "A pilot flying reconnaissance missions"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The chapter opens on October 24, 1914, with Alexander Fleming, a thirty-four-year-old doctor from Scotland, serving as a captain in England's Royal Army Medical Corps at a makeshift battlefield hospital in France.",
        hint: "The passage names both his rank and the army medical service he belonged to.",
        explanation: "Fleming was a 34-year-old Scottish doctor serving as a captain in the Royal Army Medical Corps, just eleven weeks into the Great War."
      },
      {
        id: 'sb1-2',
        question: "Where was the makeshift hospital where Fleming treated wounded soldiers?",
        options: [
          "In a Paris subway station",
          "At a military base in Boulogne, France",
          "On a hospital ship in the English Channel",
          "In a castle outside Berlin"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Fleming cared for a throng of wounded men at a makeshift military base in Boulogne, France, that doubled as a wound-research laboratory.",
        hint: "Look for the French coastal town named in the passage.",
        explanation: "The base was in Boulogne, France — part field hospital, part laboratory where Fleming studied how wounds became infected."
      },
      {
        id: 'sb1-3',
        question: "What injury did the soldier in the chapter's opening scene have?",
        options: [
          "A bullet had grazed his left ear",
          "Shrapnel had cut his hand",
          "A bullet had pierced his right thigh, pulverizing his femur",
          "He had broken his ankle falling from a horse"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The doctor examined the fresh wound and shook his head. The bullet had pierced the soldier's right thigh, pulverizing his femur before exiting the back of the leg, leaving behind a bloody mess.",
        hint: "The passage describes exactly where the bullet entered and what bone it shattered.",
        explanation: "A bullet tore through the soldier's right thigh and shattered his femur — the kind of wound that almost always became infected."
      },
      {
        id: 'sb1-4',
        question: "Of all the fates Fleming imagined for the wounded soldier, which one worried him most?",
        options: [
          "Losing his eyesight",
          "Tetanus",
          "A broken nose",
          "Getting lost behind enemy lines"
        ],
        correctAnswerIndex: 1,
        samplePassage: "There was no shortage of terrible fates befalling soldiers with this kind of injury, from amputation to gangrene, even organ failure. But Fleming was most worried about tetanus — a lethal condition causing paralysis and eventual suffocation — that was terrorizing so many British soldiers in his battlefield hospital.",
        hint: "The passage names the infection Fleming feared above amputation and gangrene.",
        explanation: "Fleming feared tetanus most — a bacterial infection that causes paralysis and suffocation, and it was striking many British soldiers."
      },
      {
        id: 'sb1-5',
        question: "According to the chapter, what does tetanus do to its victims?",
        options: [
          "It makes bones grow extra thick",
          "It turns the skin bright blue",
          "It causes paralysis and eventual suffocation",
          "It makes people sleep for weeks at a time"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Fleming dreaded tetanus most of all: a lethal condition causing paralysis and eventual suffocation that was terrorizing British soldiers on the Western Front.",
        hint: "The passage describes two terrible effects — one on movement, one on breathing.",
        explanation: "Tetanus causes the body's muscles to lock up in paralysis, eventually suffocating the victim — which is why Fleming feared it above all."
      },
      {
        id: 'sb1-6',
        question: "How long had the Great War been going on when Fleming examined the soldier on October 24, 1914?",
        options: [
          "Nearly three years",
          "Only four days",
          "Almost a full year",
          "Just eleven weeks"
        ],
        correctAnswerIndex: 3,
        samplePassage: "It was October 24, 1914. The Great War was just eleven weeks old, and already losses were heavy.",
        hint: "The passage states the war's age in weeks.",
        explanation: "The war was only eleven weeks old, yet casualties were already enormous — a sign of how deadly modern weapons had become."
      },
      {
        id: 'sb1-7',
        question: "After being defeated in the forest fight at the Battle of the Ardennes, what did the French and British armies do?",
        options: [
          "They surrendered immediately",
          "They sailed back home to England",
          "They hid in the mountains of Switzerland",
          "They began a slow, humiliating retreat toward the French capital"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Two weeks after arriving in France, French and British infantry were brutally defeated by the Imperial German Army in a forest fight at the Battle of the Ardennes. The unexpected drubbing triggered a slow and humiliating retreat as the Germans marched toward Paris.",
        hint: "The passage describes the armies falling back toward Paris after their defeat.",
        explanation: "The defeat at the Ardennes forced the French and British into a long retreat toward Paris as the German army advanced."
      },
      {
        id: 'sb1-8',
        question: "What astonishing thing happened on September 6, 1914?",
        options: [
          "The war ended with a peace treaty",
          "Six French field armies and the British Expeditionary Force halted and counterattacked",
          "Fleming discovered penicillin",
          "It snowed in the middle of summer"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Then, on September 6, something astonishing happened: thirty miles northeast of Paris, six French field armies and the British Expeditionary Force suddenly halted and counterattacked along a one-hundred-mile front.",
        hint: "The passage describes armies stopping their retreat and striking back.",
        explanation: "On September 6 the Allies stopped retreating and counterattacked — the First Battle of the Marne — in one of history's bloodiest engagements."
      },
      {
        id: 'sb1-9',
        question: "What made the fighting along the one-hundred-mile front so bloody?",
        options: [
          "Soldiers fought with swords and shields",
          "The armies had no weapons at all",
          "Powerful new artillery — machine guns, howitzers, and mortars",
          "A terrible flood swept through the trenches"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Owing to remarkable advances in artillery — powerful new machine guns, howitzers, and mortars — it was one of the bloodiest engagements in the history of warfare.",
        hint: "The passage lists three kinds of powerful new weapons.",
        explanation: "New weapons — machine guns, howitzers, and mortars — made the battles horrifically bloody and filled hospitals with wounded men."
      },
      {
        id: 'sb1-10',
        question: "Besides treating patients, what else was the Boulogne military base used for?",
        options: [
          "A wound-research laboratory",
          "A bakery for the troops",
          "A training school for pilots",
          "A prison for captured officers"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Fleming worked at a makeshift military base in Boulogne, France, that doubled as a wound-research laboratory, where he studied how battlefield wounds became infected.",
        hint: "The passage says the base had a second purpose involving the study of wounds.",
        explanation: "The base doubled as a wound-research laboratory — Fleming wasn't just treating wounds, he was studying why they became infected, which set him on the path to his later discovery."
      }
    ]
  },
  {
    id: 'superbugs-ch2',
    title: "Superbugs: Chapter 2",
    author: "Matt McCarthy",
    coverEmoji: "🧫",
    themeColor: "sky",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Fourteen years after the war, a forgotten dish of bacteria in Fleming's London laboratory grows something extraordinary: a mold that kills germs.",
    questions: [
      {
        id: 'sb2-1',
        question: "After the war, where did Fleming continue his research?",
        options: [
          "On a hospital ship in the Atlantic",
          "St. Mary's Hospital Medical School in London",
          "On a farm in the Scottish countryside",
          "Back at the Boulogne battlefield hospital"
        ],
        correctAnswerIndex: 1,
        samplePassage: "After the war, Fleming returned to London to work at St. Mary's Hospital Medical School, where he kept studying the bacteria that had killed so many wounded soldiers.",
        hint: "The passage names a London hospital and its medical school.",
        explanation: "Fleming joined St. Mary's Hospital Medical School in London, where he spent years hunting for something that could kill harmful bacteria."
      },
      {
        id: 'sb2-2',
        question: "What kind of bacteria was growing on the plate Fleming had left in his laboratory?",
        options: [
          "Staphylococcus bacteria",
          "Tetanus bacteria",
          "Cholera bacteria",
          "Tuberculosis bacteria"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Before leaving for his summer vacation, Fleming had left out glass plates smeared with Staphylococcus bacteria — and one of them would change the history of medicine.",
        hint: "The passage names the round bacteria Fleming was growing on the plates.",
        explanation: "The plates held Staphylococcus, the same family of bacteria behind many deadly wound infections."
      },
      {
        id: 'sb2-3',
        question: "What had accidentally contaminated Fleming's bacteria plate while he was away?",
        options: [
          "Dust blown in from the street",
          "A splash of spilled tea",
          "Spores of Penicillium mold",
          "A drop of rainwater from a leaky roof"
        ],
        correctAnswerIndex: 2,
        samplePassage: "When Fleming returned, he found that a stray spore of Penicillium mold had drifted onto one of his bacteria plates and started growing there.",
        hint: "The passage names the fuzzy fungus that landed on the plate.",
        explanation: "A Penicillium mold spore — likely drifting from another laboratory — had contaminated the plate by pure chance."
      },
      {
        id: 'sb2-4',
        question: "When did Fleming return from vacation to find the moldy plate?",
        options: [
          "Christmas of 1914",
          "The summer of 1945",
          "The spring of 1901",
          "September 1928"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Fleming had gone away for the summer of 1928. When he came back to his laboratory that September, he noticed something odd about one forgotten plate.",
        hint: "The passage gives the month and year he returned.",
        explanation: "He returned in September 1928 to find the famous contaminated plate — the 'chance observation' of the book's title."
      },
      {
        id: 'sb2-5',
        question: "What did Fleming notice about the bacteria growing near the mold?",
        options: [
          "They had turned bright green",
          "There were no bacteria growing close to the mold",
          "They had doubled in number overnight",
          "They had started to glow in the dark"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Just as he was about to throw the plate away, Fleming noticed something remarkable: there were no bacteria growing close to the mold. Something in the fungus had killed the surrounding microbes.",
        hint: "The passage describes an empty zone around the mold where bacteria should have been.",
        explanation: "The mold had created a clear bacteria-free zone around itself — visible proof that it produced something lethal to germs."
      },
      {
        id: 'sb2-6',
        question: "What did Fleming name the bacteria-killing substance made by the mold?",
        options: [
          "Moldicillin",
          "Flemingine",
          "Penicillin",
          "Staphylocillin"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Fleming realized the mold was secreting a substance that destroyed bacteria, and he named it penicillin, after the Penicillium mold that made it.",
        hint: "The passage says the name came from the mold itself.",
        explanation: "He called it penicillin, after Penicillium — the name that would one day save hundreds of millions of lives."
      },
      {
        id: 'sb2-7',
        question: "Why didn't penicillin become a medicine right away after Fleming's 1929 report?",
        options: [
          "Fleming could not purify or stabilize it, and few scientists paid attention",
          "The government banned all research on molds",
          "Fleming lost his laboratory notes in a fire",
          "Doctors preferred treating infections with tetanus shots"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Fleming published his findings in 1929, but he could not purify the fragile substance or make it stable enough for patients — and the scientific world largely shrugged and moved on.",
        hint: "The passage gives two reasons: a problem with the substance itself, and a problem with how others reacted.",
        explanation: "Penicillin was too unstable to use as a drug with 1920s chemistry, and Fleming couldn't convince others it mattered — so the discovery sat ignored for about a decade."
      },
      {
        id: 'sb2-8',
        question: "Which team of scientists revived penicillin research at Oxford about a decade later?",
        options: [
          "Marie Curie and her daughter Irène",
          "Alexander Fleming working alone",
          "Students of Louis Pasteur",
          "Howard Florey and Ernst Chain"
        ],
        correctAnswerIndex: 3,
        samplePassage: "About ten years later, with another world war looming, Howard Florey and Ernst Chain at Oxford University dug up Fleming's forgotten paper and set out to turn penicillin into a real medicine.",
        hint: "The passage names the two Oxford scientists who restarted the work.",
        explanation: "Florey and Chain's Oxford team figured out how to purify penicillin and proved it could cure infections — work that earned them a share of the Nobel Prize."
      },
      {
        id: 'sb2-9',
        question: "During which conflict did penicillin finally become widely used to save soldiers' lives?",
        options: [
          "The Crimean War",
          "The American Civil War",
          "World War II",
          "The Napoleonic Wars"
        ],
        correctAnswerIndex: 2,
        samplePassage: "By the middle of World War II, factories were producing penicillin in bulk, and it was saving the lives of wounded soldiers who would once have died of infected wounds.",
        hint: "The passage names the second great war of the twentieth century.",
        explanation: "Mass-produced penicillin arrived in time for World War II, dramatically cutting deaths from infected wounds."
      },
      {
        id: 'sb2-10',
        question: "In 1945, who shared the Nobel Prize for penicillin?",
        options: [
          "Fleming alone",
          "Fleming, Florey, and Chain",
          "Florey and Pasteur",
          "Fleming and Joseph Lister"
        ],
        correctAnswerIndex: 1,
        samplePassage: "In 1945, the Nobel Prize was shared three ways: Alexander Fleming for the discovery, and Howard Florey and Ernst Chain for turning it into a life-saving drug.",
        hint: "The passage says the prize was split three ways.",
        explanation: "Fleming, Florey, and Chain shared the 1945 Nobel Prize — honoring both the lucky discovery and the hard work that made it a medicine."
      }
    ]
  },
  {
    id: 'obama-dreams-ch1',
    title: "Dreams from My Father: Chapter 1",
    author: "Barack Obama",
    coverEmoji: "🌺",
    themeColor: "indigo",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "A phone call in the night brings shattering news, and a young man begins to piece together the story of the father he barely knew.",
    questions: [
      {
        id: 'od1-1',
        question: "How does Chapter 1 begin?",
        options: [
          "With Barack's high-school graduation ceremony",
          "With his first day of work as a lawyer",
          "With a phone call telling the 21-year-old Barack that his father has died",
          "With a family trip to Disneyland"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter opens with Barack Obama as a 21-year-old student at Columbia University, receiving a late-night call from his aunt in Nairobi: his father has been killed in a car accident.",
        hint: "The passage describes a nighttime phone call bringing terrible news to a college student.",
        explanation: "The memoir opens with the shock of his father's death — the event that sends Obama searching for the story of the man he barely knew."
      },
      {
        id: 'od1-2',
        question: "How did Barack Obama Sr. die?",
        options: [
          "In a car accident in Kenya",
          "Of old age in Hawaii",
          "In a plane crash in Indonesia",
          "He is still alive during the chapter"
        ],
        correctAnswerIndex: 0,
        samplePassage: "His aunt's voice on the phone is blunt: Barry's father is dead, killed in a car accident in Kenya.",
        hint: "The passage names the kind of accident and the country where it happened.",
        explanation: "Barack Obama Sr. died in an automobile accident in Kenya in 1982, when his son was 21."
      },
      {
        id: 'od1-3',
        question: "Where and when was Barack Obama born?",
        options: [
          "In Nairobi, Kenya, in 1965",
          "In Jakarta, Indonesia, in 1960",
          "In Chicago, Illinois, in 1962",
          "In Honolulu, Hawaii, in 1961"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Looking back, Obama recalls his beginnings: born in 1961 in Honolulu, Hawaii, to a white American mother and a Black Kenyan father.",
        hint: "The passage names an island state and a year in the early 1960s.",
        explanation: "Barack Obama was born in Honolulu, Hawaii, in 1961 — the child of an American mother and a Kenyan father."
      },
      {
        id: 'od1-4',
        question: "Who was Obama's mother?",
        options: [
          "A Kenyan nurse named Auma",
          "Ann Dunham, a white American woman from Kansas",
          "Madelyn Dunham, his grandmother",
          "A schoolteacher from Indonesia"
        ],
        correctAnswerIndex: 1,
        samplePassage: "His mother, Ann Dunham, was a white American woman from Kansas whose family had settled in Hawaii — the person who raised him and filled his head with stories of his father.",
        hint: "The passage gives her name and the state her family came from.",
        explanation: "Ann Dunham, a white woman from Kansas, raised Barack largely on her own and shaped his early view of the world — and of his absent father."
      },
      {
        id: 'od1-5',
        question: "Who was Barack Obama Sr.?",
        options: [
          "An Indonesian geologist",
          "A Hawaiian surfing champion",
          "A Kenyan who came to Hawaii to study",
          "A Chicago community organizer"
        ],
        correctAnswerIndex: 2,
        samplePassage: "His father, Barack Obama Sr., was a Kenyan who had come to the University of Hawaii as that school's first African student, full of promise and ambition.",
        hint: "The passage describes a student who traveled from Africa to Hawaii.",
        explanation: "Obama Sr. was a brilliant Kenyan student — the University of Hawaii's first African student — who dreamed of helping build the new nation of Kenya."
      },
      {
        id: 'od1-6',
        question: "How old was young Barack when his father left Hawaii?",
        options: [
          "Just two years old, when his father left to study at Harvard",
          "Ten years old",
          "Eighteen years old",
          "His father never left"
        ],
        correctAnswerIndex: 0,
        samplePassage: "When Barack was only two, his father won a scholarship to study at Harvard — but there was no money to bring the family along, so father and son were separated.",
        hint: "The passage gives his age as a toddler and names the famous university.",
        explanation: "Obama Sr. left for Harvard when Barack was two, and the separation became permanent — father and son would spend almost no time together afterward."
      },
      {
        id: 'od1-7',
        question: "According to his mother's stories, why did his parents part?",
        options: [
          "They had a big argument about money",
          "His father wanted to become a farmer",
          "His mother wanted to move to Chicago",
          "So his father could study at Harvard and then return to serve Kenya"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Ann's version of the story was noble and simple: they had married young and parted only so that Barack Sr. could earn his degree at Harvard and return to Kenya to serve his newly independent country.",
        hint: "The passage describes a selfless reason tied to Harvard and Kenya.",
        explanation: "Ann told Barack his parents separated so his father could finish his education and serve Kenya — a story that made his father seem larger than life, even as Obama later wondered about the harder truths behind it."
      },
      {
        id: 'od1-8',
        question: "What were the nicknames of Obama's grandparents, Stanley and Madelyn Dunham?",
        options: [
          "Papa and Nana",
          "Gramps and Toot",
          "Grammy and Pop",
          "Uncle Stan and Auntie Madge"
        ],
        correctAnswerIndex: 1,
        samplePassage: "With his father gone, Barack was raised in Hawaii by his mother's parents: his grandfather Stanley, called Gramps, and his grandmother Madelyn, called Toot.",
        hint: "The passage gives two short, playful nicknames.",
        explanation: "Gramps and Toot — Stanley and Madelyn Dunham — gave Barack a warm, stable home in Honolulu while his mother worked and studied."
      },
      {
        id: 'od1-9',
        question: "How old was Barack when his father came to visit Hawaii?",
        options: [
          "Ten years old, for a month-long visit",
          "Two years old",
          "Twenty-one years old",
          "His father never visited"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Aside from his first two years, Barack spent almost no time with his father — except for one month-long visit to Hawaii when Barack was ten years old.",
        hint: "The passage gives his age as ten and the length of the stay.",
        explanation: "The 1971 visit, when Barack was ten, was the only extended time he ever spent with his father — and it left him with more questions than answers."
      },
      {
        id: 'od1-10',
        question: "Growing up, where did most of what Barack knew about his father come from?",
        options: [
          "Letters his father wrote every single week",
          "Newspaper articles about Kenya",
          "Idealized stories told by his mother and grandparents",
          "Home movies the family watched together"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Most of what young Barack knew of his father came not from the man himself but from the glowing stories his mother and grandparents told — tales that made him seem heroic but explained nothing about his absence.",
        hint: "The passage says his knowledge came from other people's tales, not from his father directly.",
        explanation: "Ann, Gramps, and Toot painted Obama Sr. as a brilliant, heroic figure — but the stories couldn't explain why he had stayed away, leaving Barack to sort out myth from reality."
      }
    ]
  },
  {
    id: 'obama-dreams-ch2',
    title: "Dreams from My Father: Chapter 2",
    author: "Barack Obama",
    coverEmoji: "🌏",
    themeColor: "purple",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "At six years old, Barack moves to Indonesia, where his stepfather Lolo teaches him hard lessons about strength, survival, and the wider world.",
    questions: [
      {
        id: 'od2-1',
        question: "At what age — and in what year — did Barack move to Indonesia?",
        options: [
          "At age 2, in 1963",
          "At age 10, in 1971",
          "At age 12, in 1973",
          "At age 6, in 1967"
        ],
        correctAnswerIndex: 3,
        samplePassage: "In 1967, when Barack was six years old, he and his mother left Hawaii for Djakarta, Indonesia, to join his stepfather Lolo Soetoro.",
        hint: "The passage gives the year and his age as a young schoolboy.",
        explanation: "Barack was six when the family moved to Indonesia in 1967 — a move that plunged him into a completely foreign world."
      },
      {
        id: 'od2-2',
        question: "Who was Lolo Soetoro?",
        options: [
          "Barack's Kenyan father",
          "Barack's Indonesian stepfather",
          "Barack's grandfather",
          "Barack's schoolteacher"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Lolo Soetoro, the Indonesian man Ann had married, was waiting for them in Djakarta — a stepfather Barack would come to know as practical, distant, and full of hard lessons.",
        hint: "The passage names the Indonesian man his mother married.",
        explanation: "Lolo Soetoro was Barack's Indonesian stepfather — not his biological father, but a major guiding figure in his boyhood."
      },
      {
        id: 'od2-3',
        question: "Why did Lolo teach Barack to box?",
        options: [
          "Because some boys had thrown a rock at Barack's head",
          "Because Barack wanted to join the army",
          "Because boxing was a required school subject",
          "Because Lolo had been a professional boxer"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Two years after arriving, Lolo decided Barack needed boxing lessons — some local boys had recently thrown a rock at Barack's head, and Lolo felt his stepson had to learn to defend himself.",
        hint: "The passage describes what the local boys did to Barack.",
        explanation: "After boys threw a rock at his head, Lolo — who believed a man must be able to protect himself — taught Barack to box."
      },
      {
        id: 'od2-4',
        question: "What were the scars on Lolo's leg from?",
        options: [
          "A bicycle accident in Hawaii",
          "A cooking burn",
          "Leeches in New Guinea",
          "An old boxing match"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Sitting together after the boxing lesson, Barack noticed scars on Lolo's leg. Lolo explained they were from leeches during his army service in the jungles of New Guinea.",
        hint: "The passage names the jungle creature and the place where Lolo served.",
        explanation: "The scars came from leeches in New Guinea, where Lolo had served — a glimpse of how much tougher Lolo's life had been than Barack's."
      },
      {
        id: 'od2-5',
        question: "What lesson about strength did Lolo teach Barack?",
        options: [
          "Never trust anyone who is strong",
          "Always run away from every fight",
          "Strength doesn't matter at all",
          "Be strong yourself; if you can't be strong, be clever"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Lolo told Barack that men take advantage of weakness in other men — so he should be strong himself, and if he couldn't be strong, he should at least be clever.",
        hint: "The passage gives two options Lolo offered: strength, or its backup plan.",
        explanation: "Lolo's hard pragmatism: the world preys on the weak, so be strong — or, failing that, be clever enough to make peace with the strong."
      },
      {
        id: 'od2-6',
        question: "What did Lolo teach Barack about beggars?",
        options: [
          "Don't give them money, and don't end up a beggar yourself",
          "Give them all the money you carry",
          "Invite every beggar to live in your house",
          "Ignore everyone who is poor"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Lolo instructed Barack on how to handle the beggars of Djakarta: don't give them money, keep your distance — and above all, don't end up a beggar yourself.",
        hint: "The passage gives Lolo's two-part rule about beggars.",
        explanation: "Lolo's lesson was unsentimental: don't hand out money, and work hard enough that you never become one of them — a stark contrast to Ann's gentler worldview."
      },
      {
        id: 'od2-7',
        question: "What demanding lesson routine did Ann set for Barack in Indonesia?",
        options: [
          "Midnight swimming practice",
          "Waking him at 4:30 in the morning for English lessons",
          "Making him memorize the entire dictionary",
          "No lessons at all — she let him play"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Worried about his schooling, Ann woke Barack at 4:30 every morning to drill him in English before he went off to his Indonesian school.",
        hint: "The passage names a very early hour and the subject she taught.",
        explanation: "Ann rose before dawn to teach Barack English at 4:30 a.m. — her way of making sure Indonesia wouldn't cost him his American education."
      },
      {
        id: 'od2-8',
        question: "At age nine, what did Barack see in a Life magazine that gave him his first unsettling lesson about race?",
        options: [
          "A photograph of his father as a young man",
          "A photograph of a Black man that deeply disturbed him",
          "An advertisement for his Punahou school",
          "A colorful map of Kenya"
        ],
        correctAnswerIndex: 2,
        samplePassage: "At nine, in the Djakarta library, Barack came across a photograph in Life magazine of a Black man — an image about race that frightened him so much he was afraid to ask his mother what it meant.",
        hint: "The passage describes a frightening magazine image he couldn't bring himself to ask about.",
        explanation: "The photograph gave nine-year-old Barack his first direct confrontation with racism — something he buried like an ostrich hiding its head, as he later put it."
      },
      {
        id: 'od2-9',
        question: "Which unusual foods did Barack try while living in Indonesia?",
        options: [
          "Pizza and hamburgers",
          "Dog meat, snake meat, and roasted grasshopper",
          "Ice cream and chocolate cake",
          "Sushi and noodle soup"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Life with Lolo was one long adventure for a boy: he learned to eat what was put in front of him, including dog meat, snake meat, and roasted grasshopper.",
        hint: "The passage lists three unusual meats, including an insect.",
        explanation: "Under Lolo's roof Barack ate dog meat, snake meat, and roasted grasshopper — part of his crash course in a very different way of life."
      },
      {
        id: 'od2-10',
        question: "Why did Ann eventually send ten-year-old Barack back to Hawaii?",
        options: [
          "He missed his video games",
          "She was worried about his education and safety, and Lolo had changed",
          "He was expelled from his Indonesian school",
          "Lolo insisted the boy should stay"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Ann grew lonely and uneasy: Lolo, once full of life, had gone quiet and withdrawn, and she feared for Barack's schooling and safety. So at ten, Barack was sent back to Hawaii to live with his grandparents.",
        hint: "The passage names her worries and how Lolo had changed.",
        explanation: "Ann saw Lolo growing depressed and distant and worried Indonesia was no place for Barack's future — so she sent him to Gramps and Toot in Hawaii."
      }
    ]
  }
];
