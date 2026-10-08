import { Book, Question } from '../types/quiz';
import { MAGIC_TREE_HOUSE_BOOKS } from './magicTreeHouseBooks';
import { CHAPTER_QUIZZES } from './chapterQuizzes';
import { SUPERBUGS_CHAPTERS } from './superbugsChapters';
import { OBAMA_DREAMS_CHAPTERS } from './obamaDreamsChapters';
import { SUPERBUGS_COMP_A } from './comprehension/superbugsCompA';
import { SUPERBUGS_COMP_B } from './comprehension/superbugsCompB';
import { SUPERBUGS_COMP_C } from './comprehension/superbugsCompC';
import { SUPERBUGS_COMP_D } from './comprehension/superbugsCompD';
import { SUPERBUGS_COMP_E } from './comprehension/superbugsCompE';
import { OBAMA_COMP_A } from './comprehension/obamaCompA';
import { OBAMA_COMP_B } from './comprehension/obamaCompB';

// Higher-order comprehension questions (main idea, tone, character, inference,
// author's point), keyed by chapter book id.
const COMPREHENSION: Record<string, Question[]> = {
  ...SUPERBUGS_COMP_A,
  ...SUPERBUGS_COMP_B,
  ...SUPERBUGS_COMP_C,
  ...SUPERBUGS_COMP_D,
  ...SUPERBUGS_COMP_E,
  ...OBAMA_COMP_A,
  ...OBAMA_COMP_B,
};

// Append the comprehension questions to each chapter set so every set
// has 8 detail questions + 4 comprehension questions = 12 total.
function withComprehension(books: Book[]): Book[] {
  return books.map((b) => ({
    ...b,
    questions: [...b.questions, ...(COMPREHENSION[b.id] ?? [])],
  }));
}

export const CLASSIC_BOOKS: Book[] = [
  {
    id: 'charlottes-web',
    title: "Charlotte's Web",
    author: "E.B. White",
    coverEmoji: "🕷️",
    themeColor: "amber",
    readingLevel: "Grades 3 - 5 (Ages 8-11)",
    synopsis: "The heartwarming story of a little pig named Wilbur and his clever spider friend Charlotte, who weaves miracles in her web to save him.",
    questions: [
      {
        id: 'cw-1',
        question: "Why did Fern stop her father, Mr. Arable, from taking the little pig out to the woods at the very beginning of the story?",
        options: [
          "She believed it was unfair to kill the pig just because he was born small and weak.",
          "She wanted to sell the pig at the county fair for money.",
          "She was worried the pig would run into Mrs. Zuckerman's kitchen.",
          "Her teacher told her to bring a farm animal for show-and-tell."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“Fern pushed him away. ‘Please don’t kill it!’ she sobbed. ‘It’s unfair.’ Mr. Arable stopped. ‘Fern,’ he said gently, ‘you will have to learn to control yourself.’ ‘Control myself?’ yelled Fern. ‘This is a matter of life and death, and you talk about controlling myself? If I had been very small at birth, would you have killed me?’”",
        hint: "Notice how Fern compares the little pig's size at birth to her own when she was a baby!",
        explanation: "Fern pleaded for the piglet's life because he was a runt. She showed deep empathy, asking her father if he would have done the same to her if she had been born unusually small."
      },
      {
        id: 'cw-2',
        question: "What was the very first message that Charlotte wove into her spider web above Wilbur's pigpen?",
        options: [
          "TERRIFIC",
          "RADIANT",
          "SOME PIG",
          "HUMBLE"
        ],
        correctAnswerIndex: 2,
        samplePassage: "“Lurvy stopped and stared. On the web, neatly woven in block letters, was a word. It said: SOME PIG! Lurvy gave a gasp. He dropped his bucket and rubbed his eyes. He walked back to the house and called Mr. Zuckerman.”",
        hint: "Look at the excerpt above—what two words made Lurvy drop his bucket and rub his eyes in utter disbelief?",
        explanation: "Charlotte's first miraculous word was 'SOME PIG!'. It astonished Lurvy and Mr. Zuckerman, convincing everyone in town that Wilbur was an extraordinary animal."
      },
      {
        id: 'cw-3',
        question: "How does Charlotte get the words she weaves into her web after 'SOME PIG'?",
        options: [
          "Fern writes vocabulary words on slips of paper and pins them to the barn wall.",
          "Templeton the rat searches the dump for discarded newspaper and magazine clippings.",
          "The old sheep looks them up in an encyclopedia in the farmhouse library.",
          "Charlotte listens to the farmers talking during their morning coffee."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘I need new words for my web,’ said Charlotte. The old sheep turned to Templeton. ‘Templeton can help. Whenever he goes to the dump, he can bring back clippings of printed matter. He can tear out pieces of newspaper and bring them to Charlotte.’”",
        hint: "Look at the passage to see which barnyard character visits the dump and retrieves scraps of paper!",
        explanation: "Templeton the rat was persuaded by the old sheep to scavenge the town dump for cardboard wrappers and newspaper clippings containing words like 'TERRIFIC', 'RADIANT', and 'HUMBLE'."
      },
      {
        id: 'cw-4',
        question: "What is Templeton the rat's main motivation for helping Wilbur and Charlotte throughout the story?",
        options: [
          "He has a secret kind heart and loves making everyone happy.",
          "He is competing against the barn mice for the title of barn leader.",
          "He wants Mr. Zuckerman to adopt him as a beloved house pet.",
          "He is promised leftover food scraps, treats, and Wilbur's untouched trough meals."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“‘Let him die,’ said Templeton. ‘I should worry.’ ‘Wilbur’s food is your food,’ whispered the old sheep. ‘If Wilbur dies, Lurvy will stop filling this trough. You’ll starve to death, rat.’ Templeton’s whiskers twitched. ‘Is that true?’ he asked. ‘All right, I’ll help.’”",
        hint: "The excerpt shows what Templeton cares about most: his stomach and Wilbur's trough food!",
        explanation: "Templeton is purely self-interested. He helps Wilbur because the old sheep reminds him that if Wilbur is slaughtered, there will be no tasty slops and leftovers in the trough for him to eat."
      },
      {
        id: 'cw-5',
        question: "What does the word 'RADIANT' woven in the web describe about Wilbur?",
        options: [
          "He looks glowing, healthy, happy, and full of joyful energy.",
          "He emits an actual bright green glow in the dark.",
          "He has learned how to do backflips in the mud puddle.",
          "He has pure white fur like fresh snow on a sunny morning."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘Look at me, Charlotte!’ said Wilbur, racing around his pen, leaping into the air, and landing with a joyful twist. ‘Do I look radiant?’ Charlotte smiled gently. ‘You’re radiant to me, Wilbur. You shine with happiness and good health.’”",
        hint: "Check the excerpt: Charlotte explains that radiant means shining with health and happiness!",
        explanation: "Charlotte chooses 'RADIANT' from a soap advertisement snippet. Wilbur tries his best to jump, twirl, and beam with joy so he looks shiny, happy, and truly radiant to the crowds."
      },
      {
        id: 'cw-6',
        question: "Why was Charlotte unable to return home to the Zuckerman farm after the County Fair?",
        options: [
          "She decided to move to a new barn near the fairgrounds.",
          "The judges placed her in a glass jar to display in the fair museum.",
          "She had completed her life cycle, was too old and weak, and was dying.",
          "Templeton accidentally tore down her web and lost her in the sawdust."
        ],
        correctAnswerIndex: 2,
        samplePassage: "“‘I won’t be going back to the barn, Wilbur,’ Charlotte whispered softly. ‘My time has come. A few days, perhaps, and I will be gone. In a few minutes I shall be dead.’ Wilbur threw himself on the ground in agony. ‘Charlotte!’ he cried. ‘My true friend!’”",
        hint: "Read Charlotte's gentle words in the excerpt: what natural process has reached its end for her?",
        explanation: "Charlotte had poured all her remaining strength into weaving her egg sac containing 514 eggs. Like natural barn spiders, she reached the natural end of her lifespan after egg laying."
      },
      {
        id: 'cw-7',
        question: "What promise did Wilbur make to Templeton so the rat would retrieve Charlotte's egg sac from the ceiling rafters?",
        options: [
          "Wilbur would let Templeton sleep inside his warm straw bed every winter night.",
          "Wilbur would give Templeton first choice of all food in his trough for the rest of his life.",
          "Wilbur promised to bite Lurvy if Lurvy ever tried to set rat traps.",
          "Wilbur said he would carry Templeton on his back across the entire county."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Listen to me, Templeton!’ gasped Wilbur. ‘If you climb up and get that egg sac for me, I will make a solemn promise. From now on, you may eat first at every meal. I will not touch a single morsel until you have eaten your fill!’ Templeton’s eyes gleamed. ‘First choice? Every single day?’”",
        hint: "Notice what Wilbur offers regarding every meal that arrives in his trough!",
        explanation: "Wilbur made a binding vow allowing Templeton to feast first at every meal before Wilbur touched a bite, guaranteeing Templeton all the choice scraps and dessert."
      },
      {
        id: 'cw-8',
        question: "How did Wilbur safely transport the fragile egg sac back home from the fairgrounds?",
        options: [
          "He balanced it carefully on top of his snout while riding in the crate.",
          "He tucked it into Templeton's little pouch tied around the rat's neck.",
          "He asked Fern to wrap it in her handkerchief and carry it in her pocket.",
          "He carried it gently inside his warm mouth beneath his tongue."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“Wilbur placed the peach-colored sac on his tongue, pushed it gently against the roof of his mouth, and closed his lips without biting down. He breathed through his snout. He held it so carefully that not a single one of the 514 little eggs inside was harmed.”",
        hint: "Where did Wilbur place the egg sac so no one would see or drop it?",
        explanation: "Wilbur carried Charlotte's egg sac in his mouth, resting it safely on his tongue all the way back to the barn, guarding it with his life."
      },
      {
        id: 'cw-9',
        question: "In the spring, what happens when Charlotte's baby spiders hatch that initially breaks Wilbur's heart?",
        options: [
          "They all run away because they are afraid of pigs.",
          "They weave tiny parachutes of silk and float away on the warm breeze.",
          "They decide to leave the barn and live underwater with the frogs.",
          "The barn swallows chase them away from the rafters."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“Each baby spider stood on its head, spun a long streamer of silk into the air, and let the gentle warm breeze pull them up and away. ‘Goodbye! Goodbye!’ they cried. ‘Wait!’ screamed Wilbur, running in circles. ‘Where are you going? Don’t leave me!’”",
        hint: "Look at the passage: what did the baby spiders spin to let the breeze carry them away?",
        explanation: "The baby spiders practiced 'ballooning'—spinning silken threads that caught the spring breeze, carrying them off into the wide world to build webs of their own."
      },
      {
        id: 'cw-10',
        question: "What three baby spiders chose to stay behind in the barn cellar to be Wilbur's lifelong friends?",
        options: [
          "Hope, Faith, and Charity",
          "Ruby, Rose, and Daisy",
          "Joy, Aranea, and Nellie",
          "Penny, Polly, and Pip"
        ],
        correctAnswerIndex: 2,
        samplePassage: "“‘Three of us are staying,’ said a tiny voice from the doorpost. ‘We like this barn. We like you.’ Wilbur cried tears of happiness. He helped them choose their names: Joy, Aranea, and Nellie, after their wonderful mother.”",
        hint: "Read the excerpt above—which three names did Wilbur and the baby spiders choose?",
        explanation: "Three daughters—Joy, Aranea, and Nellie—stayed behind in the barn. Wilbur loved them deeply, although he never forgot his first and dearest friend, Charlotte."
      }
    ]
  },
  {
    id: 'the-little-prince',
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    coverEmoji: "🌹",
    themeColor: "indigo",
    readingLevel: "Grades 4 - 7 (Ages 9-13)",
    synopsis: "A poetic tale of an aviator stranded in the Sahara desert who meets a curious young prince from Asteroid B-612 who teaches him what is truly important in life.",
    questions: [
      {
        id: 'lp-1',
        question: "When the narrator was six years old, what did grown-ups think his Drawing Number One was?",
        options: [
          "A sleeping snake in the grass.",
          "An ordinary brown hat.",
          "A cave in a rocky mountain.",
          "An elephant standing behind a boulder."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“My Drawing Number One showed a boa constrictor digesting an elephant. But when I showed my masterpiece to the grown-ups and asked if it frightened them, they answered: ‘Why should anyone be frightened by a hat?’ So I had to draw Drawing Number Two showing the elephant inside.”",
        hint: "Look at the grown-ups' exact question in the excerpt: 'Why should anyone be frightened by a...?'",
        explanation: "Grown-ups lacked imagination and thought the boa constrictor holding an elephant was merely a hat, forcing the narrator to abandon drawing until he met the prince."
      },
      {
        id: 'lp-2',
        question: "What is the very first request the Little Prince makes to the narrator stranded in the Sahara desert?",
        options: [
          "“Please help me find water in this desert.”",
          "“Tell me where I can find the King.”",
          "“Can you repair my airplane wings?”",
          "“Please draw me a sheep.”"
        ],
        correctAnswerIndex: 3,
        samplePassage: "“I was awakened by an odd little voice. It said: ‘If you please—draw me a sheep!’ I leaped to my feet as if struck by lightning. I blinked my eyes hard. I looked closely. And I saw a most extraordinary small person examining me solemnly.”",
        hint: "Check the excerpt for the little voice's exact opening words when the narrator wakes up!",
        explanation: "The Little Prince miraculously appeared in the middle of the desolate desert and asked simply: 'If you please—draw me a sheep!'"
      },
      {
        id: 'lp-3',
        question: "Why does the Little Prince finally accept the drawing of a simple box with three small air holes?",
        options: [
          "Because he can imagine the exact sheep he wants resting inside the box.",
          "Because he plans to use the box to store his rose's petals.",
          "Because the narrator promised him the box was made of pure gold.",
          "Because the box was light enough to carry across the dunes."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“Out of patience, I scribbled a box with three holes and tossed it off: ‘This is only his box. The sheep you asked for is inside.’ But I was amazed to see the face of my young judge light up: ‘That is exactly the way I wanted it! Do you think this sheep will need a great deal of grass?’”",
        hint: "Notice how the prince's face lit up when told the sheep was inside the box!",
        explanation: "The prince rejected drawings of a sickly sheep and a ram with horns, but loved the box because his imagination allowed him to see the perfect sheep sleeping peacefully inside."
      },
      {
        id: 'lp-4',
        question: "Why is it so dangerous for baobab trees to sprout on the Little Prince's tiny asteroid B-612?",
        options: [
          "Their thorns are poisonous to the sheep.",
          "They block all the sunsets from view.",
          "Their enormous roots will grow so large they split the tiny planet apart.",
          "Their flowers produce a foul smell that drives away visitors."
        ],
        correctAnswerIndex: 2,
        samplePassage: "“Now there were terrible seeds on the planet of the little prince; and these were the seeds of the baobab. If you get to a baobab too late, you can never get rid of it. It spreads over the entire planet. It bores clear through with its roots. And if the planet is too small, and the baobabs too many, they split it in pieces.”",
        hint: "What do the roots of the baobab do to a tiny planet if not pulled out early?",
        explanation: "Baobabs are massive trees. If allowed to take root on a tiny asteroid, their invasive roots will rip the planet apart, which is why the prince pulls them out every morning."
      },
      {
        id: 'lp-5',
        question: "How many sunsets was the Little Prince able to watch in a single day simply by moving his chair?",
        options: [
          "12 sunsets",
          "44 sunsets",
          "100 sunsets",
          "3 sunsets"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘One day,’ you said to me, ‘I saw the sunset forty-four times!’ And a little later you added: ‘You know—one loves the sunset, when one is so sad...’ ‘Were you so sad, then, on the day of the forty-four sunsets?’ But the prince did not answer.”",
        hint: "Look at the specific number mentioned twice in the excerpt!",
        explanation: "Because Asteroid B-612 is so small, all the prince had to do was pull his chair forward a few steps to watch forty-four sunsets in one day whenever he felt melancholic."
      },
      {
        id: 'lp-6',
        question: "Why was the rose on Asteroid B-612 so special, despite her proud and demanding vanity?",
        options: [
          "She could speak human languages and predict the future.",
          "She was the only flower that could survive without sunlight.",
          "She had diamond thorns and bloomed in the middle of winter.",
          "The Little Prince had watered her, protected her under a glass globe, and loved her deeply."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“‘You are beautiful, but you are empty,’ the prince said to the garden of five thousand roses. ‘One could not die for you. To an ordinary passerby, my rose would look just like you. But my rose, all on her own, is more important than all of you, because she is the one I have watered. Because she is my rose.’”",
        hint: "Read the excerpt: what personal care did the prince give to his own rose that made her unique?",
        explanation: "The prince realized that what made his rose unique in all the universe was not that she was physically one-of-a-kind, but the love, time, and tender care he had dedicated to sheltering and watering her."
      },
      {
        id: 'lp-7',
        question: "What does the Fox mean when he teaches the Little Prince about 'taming'?",
        options: [
          "Establishing affectionate emotional ties so you become unique to each other.",
          "Caging a wild creature so it cannot run away.",
          "Training an animal to perform tricks with treats.",
          "Scaring away danger in the forest."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘To me, you are still nothing more than a little boy who is just like a hundred thousand other little boys,’ said the fox. ‘And I have no need of you. But if you tame me, then we shall need each other. To me, you will be unique in all the world. To you, I shall be unique in all the world... It means to establish ties.’”",
        hint: "Check the fox's words in the passage: 'It means to establish...'",
        explanation: "To 'tame', according to the wise fox, means creating meaningful bonds of friendship and love. Through caring for someone, you become irreplaceable to each other."
      },
      {
        id: 'lp-8',
        question: "What famous secret does the Fox give to the Little Prince as a parting gift?",
        options: [
          "“Always follow the stars when you are lost.”",
          "“Words are the source of all misunderstandings, so never speak again.”",
          "“It is only with the heart that one can see rightly; what is essential is invisible to the eye.”",
          "“Only grow-ups know how to manage banks and money.”"
        ],
        correctAnswerIndex: 2,
        samplePassage: "“‘And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.’ ‘What is essential is invisible to the eye,’ the little prince repeated, so that he would be sure to remember.”",
        hint: "Look at the exact quotation the Little Prince repeats to himself to make sure he remembers!",
        explanation: "The fox's central wisdom is that true value—love, loyalty, beauty, friendship—cannot be measured with our eyes, but must be felt with the heart."
      },
      {
        id: 'lp-9',
        question: "What does the King on the first asteroid the prince visits insist upon?",
        options: [
          "He only issues 'reasonable orders' that can actually be obeyed.",
          "Everyone must bow down and shine his shoes.",
          "He demands that everyone bring him chocolate.",
          "He forces visitors to stay on his planet forever."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘I have the right to require obedience, because my orders are reasonable,’ the King was in the habit of saying. ‘If I ordered a general to fly from one flower to another like a butterfly, and the general did not obey, which of us would be in the wrong? It would be me. One must demand from each what each can perform.’”",
        hint: "Look at the King's rule in the passage: what kind of orders does he issue?",
        explanation: "The King was an absolute monarch, yet he prided himself on giving only reasonable commands—such as ordering the sun to set only when the time for sunset had arrived!"
      },
      {
        id: 'lp-10',
        question: "Why does the Little Prince allow the yellow snake in the desert to bite him at the end of the story?",
        options: [
          "He accidentally tripped over the snake while looking at the stars.",
          "He wanted to become invisible so he could explore Earth undetected.",
          "The snake tricked him into drinking poison disguised as water.",
          "He believed his physical body was too heavy to carry back to his beloved rose and Asteroid B-612."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“‘It will look like I am dying, but it won’t be true,’ the prince told the aviator. ‘You understand... It is too far. I cannot carry this body with me. It is too heavy. It will look like an old abandoned shell. There is nothing sad about old shells... and my rose, I am responsible for her.’”",
        hint: "Notice what the prince says about his physical body being too heavy for the long journey home!",
        explanation: "The Little Prince explains that returning across the stars to Asteroid B-612 to protect his rose requires leaving behind his heavy mortal body, comparing it to shedding an empty shell."
      }
    ]
  },
  {
    id: 'charlie-chocolate-factory',
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    coverEmoji: "🍫",
    themeColor: "emerald",
    readingLevel: "Grades 3 - 6 (Ages 8-12)",
    synopsis: "Young Charlie Bucket lives in poverty until he finds a coveted Golden Ticket and wins a tour of Willy Wonka's mysterious and magical chocolate factory.",
    questions: [
      {
        id: 'cf-1',
        question: "What did Charlie Bucket receive once every year on his birthday that he savored for an entire month?",
        options: [
          "A brand new pair of leather winter boots.",
          "A toy wooden train carved by Grandpa Joe.",
          "A single bar of Wonka chocolate.",
          "A bowl of cabbage soup with extra potatoes."
        ],
        correctAnswerIndex: 2,
        samplePassage: "“Only once a year, on his birthday, did Charlie Bucket ever taste a bit of chocolate. The whole family saved up their pennies for that very special occasion, and when the great day arrived, Charlie was always presented with one single small chocolate bar to eat all by himself. He would make it last for more than a month by nibbling just a tiny corner each day.”",
        hint: "What sweet treat did the family save up pennies to buy Charlie once a year?",
        explanation: "Because Charlie's family was so impoverished, he received only one chocolate bar each year on his birthday, which he treasured and rationed bite by bite for a month."
      },
      {
        id: 'cf-2',
        question: "How many Golden Tickets were hidden beneath the wrappers of Wonka chocolate bars worldwide?",
        options: [
          "5 tickets",
          "3 tickets",
          "7 tickets",
          "10 tickets"
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘Golden Tickets!’ read Mr. Bucket from the evening newspaper. ‘Mr. Willy Wonka has hidden five Golden Tickets underneath the ordinary paper wrappers of five ordinary candy bars. These five candy bars may be anywhere—in any shop in any street in any town in any country in the world!’”",
        hint: "Look at the headline read by Mr. Bucket in the excerpt above!",
        explanation: "Mr. Wonka hid exactly five Golden Tickets across the globe, offering five lucky children a tour of his secret factory and a lifetime supply of sweets."
      },
      {
        id: 'cf-3',
        question: "What bad habit led to Augustus Gloop's downfall in the Chocolate Room?",
        options: [
          "He was chewing experimental three-course dinner gum.",
          "He kept staring at television screens and refused to move.",
          "He demanded that his father buy him one of Wonka's trained squirrels.",
          "He fell into the melted chocolate river because he greedily tried to drink from it."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“‘Augustus!’ cried Mr. Wonka. ‘Please do not do that! My chocolate must remain untouched by human hands!’ But Augustus was deaf to everything except his appetite. He was kneeling on the brown bank, scooping hot melted chocolate into his mouth as fast as he could. Then—SPLASH!—he tumbled right into the river and was sucked into the great glass pipe.”",
        hint: "Check the excerpt: what did Augustus do on the brown bank despite Mr. Wonka's warning?",
        explanation: "Augustus Gloop's uncontrollable gluttony drove him to kneel and scoop chocolate from the river, causing him to slip, fall in, and get sucked into a glass pipe leading to the fudge room."
      },
      {
        id: 'cf-4',
        question: "What happened to Violet Beauregarde after she snatched and chewed the prototype gum against Mr. Wonka's advice?",
        options: [
          "Her teeth turned into solid peppermint sticks.",
          "She turned royal purple and inflated like a giant blueberry.",
          "She grew giant rabbit ears that heard everything.",
          "She shrunk down until she was only one inch tall."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘It’s blueberry pie and cream!’ shouted Violet. ‘It’s sensational!’ ‘Oh, heavens!’ screamed Mrs. Beauregarde. ‘Look at your nose! It’s turning blue!’ Within seconds, Violet’s cheeks, chin, arms, and belly were swelling up like a balloon filled with juice. She was turning into a giant, round, juicy blueberry!”",
        hint: "What fruit did Violet resemble as she puffed up and turned purple?",
        explanation: "When Violet reached the blueberry pie dessert stage of the untested chewing gum, she swelled into a massive purple blueberry and had to be rolled to the Juicing Room."
      },
      {
        id: 'cf-5',
        question: "Who works inside Willy Wonka's factory, creating the candies and singing witty cautionary songs?",
        options: [
          "Robots powered by peppermint clockwork gears",
          "A clan of magical elves from the North Pole",
          "The Oompa-Loompas from Loompaland",
          "Grandpa Joe's former factory co-workers"
        ],
        correctAnswerIndex: 2,
        samplePassage: "“‘They are Oompa-Loompas!’ Mr. Wonka announced. ‘Imported straight from Loompaland! They are wonderful workers, and they simply adore cocoa beans. In Loompaland, they lived on green caterpillars and dreamed of cocoa beans. I offered to pay them in cocoa beans if they came to live in my factory!’”",
        hint: "Read Mr. Wonka's quote: what is the name of these diminutive workers from Loompaland?",
        explanation: "Mr. Wonka rescued the Oompa-Loompas from the dangers of Loompaland and employed them in his factory, paying them in their most treasured food: cocoa beans."
      },
      {
        id: 'cf-6',
        question: "Why did the squirrels in the Nut Room attack Veruca Salt and throw her down the garbage chute?",
        options: [
          "She tried to kidnap a squirrel, so they tested her head and judged her to be a 'bad nut'.",
          "She threw rocks at their acorn baskets.",
          "She made fun of their fluffy tails.",
          "She tried to steal the golden walnut on the table."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“Twenty-five squirrels leaped onto Veruca’s shoulders and pinned her to the floor. Then the leader gave her forehead a firm tap with its knuckles. The squirrels listened to the hollow sound. ‘They’re testing her to see if she’s a bad nut,’ whispered Mr. Wonka. ‘And by Jove, they’ve decided she is! Down the garbage chute she goes!’”",
        hint: "What did the squirrels test on Veruca before shoving her into the rubbish chute?",
        explanation: "Veruca threw a tantrum demanding a trained nut-cracking squirrel. When she entered their room, the squirrels pinned her down, tapped her skull, decided she was a 'bad nut', and discarded her down the chute."
      },
      {
        id: 'cf-7',
        question: "What happened to television-obsessed Mike Teavee when he sent himself through Wonka Television?",
        options: [
          "He was permanently stuck inside a commercial for laundry detergent.",
          "His skin became translucent like a glowing television monitor.",
          "He grew antennas out of his forehead that picked up cartoons.",
          "He shrunk to a tiny miniature figure only a few inches high."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“Mike Teavee waved cheerily from the screen, no bigger than an inch tall. Mr. Wonka reached out, picked up the tiny boy between his finger and thumb, and placed him in his mother’s hand. ‘He’s shrunk!’ cried Mrs. Teavee. ‘He’s tiny!’”",
        hint: "Look at the passage above—what size was Mike Teavee when Mr. Wonka picked him up?",
        explanation: "Mike Teavee jumped into the Television Chocolate transmitter to appear on TV, which broke him into millions of tiny pieces and reassembled him as a tiny miniature only a few inches tall."
      },
      {
        id: 'cf-8',
        question: "What was so extraordinary about Willy Wonka's Great Glass Elevator?",
        options: [
          "It had wings and could fly through outer space to Mars.",
          "It could move in any direction—up, down, sideways, slantways, and through roofs.",
          "It was entirely edible, made of hardened spun sugar and rock candy.",
          "It turned anyone who stepped inside into a musical singer."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘This is no ordinary elevator!’ said Mr. Wonka proudly. ‘It can go sideways, longways, slantways, and any other ways you can think of! It travels on invisible cables through every corner of the factory, and if you press this button, it can shoot right out through the glass roof into the sky!’”",
        hint: "Read the excerpt: what unique directions can the Great Glass Elevator travel?",
        explanation: "Wonka's Great Glass Elevator was not confined to moving up and down; it had thousands of buttons and could fly in every conceivable diagonal, lateral, and aerial direction."
      },
      {
        id: 'cf-9',
        question: "Why was Charlie Bucket the only child who reached the end of the factory tour safely?",
        options: [
          "He was wearing a special protective suit designed by Grandpa Joe.",
          "He knew secret cheat codes to bypass all of the factory's traps.",
          "He was respectful, patient, humble, and listened carefully to Mr. Wonka's rules.",
          "He bribed the Oompa-Loompas with extra pennies."
        ],
        correctAnswerIndex: 2,
        samplePassage: "“‘My dear boy,’ said Mr. Wonka, staring at Charlie with sparkling eyes. ‘That means you are the only one left! You won! I knew it would be you! You were quiet, polite, and didn’t let greed or arrogance get the best of you. You followed every rule and respected this magical place!’”",
        hint: "What virtues did Charlie display compared to the spoiled behavior of the other children?",
        explanation: "Unlike the other children who were spoiled, greedy, rude, or obsessive, Charlie was polite, grateful, and well-behaved, respecting Mr. Wonka and following all instructions."
      },
      {
        id: 'cf-10',
        question: "What grand prize does Mr. Wonka give to Charlie at the conclusion of the story?",
        options: [
          "The entire chocolate factory and everything inside it to run as his own.",
          "A lifetime supply of five candy bars a week.",
          "A mansion on the hill next door with ten servants.",
          "One million dollars in crisp brand-new banknotes."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘I am giving the entire factory to you, Charlie,’ Mr. Wonka said gently. ‘I have no family of my own, and I am getting old. I needed a good, sensible, loving child to whom I could teach all my secrets and hand over everything I have created.’”",
        hint: "Look at what Mr. Wonka announces he is giving to Charlie in the passage!",
        explanation: "The entire tour was a secret test. Mr. Wonka was searching for an honest, kind-hearted child successor to inherit and run his miraculous chocolate factory forever."
      }
    ]
  },
  {
    id: 'lion-witch-wardrobe',
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    coverEmoji: "🦁",
    themeColor: "sky",
    readingLevel: "Grades 4 - 7 (Ages 9-13)",
    synopsis: "Four siblings step through an old wardrobe into Narnia, a land frozen in eternal winter under the White Witch, awaiting the return of the Great Lion, Aslan.",
    questions: [
      {
        id: 'lww-1',
        question: "Who is the first of the four Pevensie siblings to discover the snowy world of Narnia inside the wardrobe?",
        options: [
          "Peter",
          "Susan",
          "Edmund",
          "Lucy"
        ],
        correctAnswerIndex: 3,
        samplePassage: "“Lucy stepped into the wardrobe among the long fur coats. She took another step, expecting to feel the hard wooden back. Instead, she felt cold prickly branches against her face, and soft powdery snow under her feet. Next moment she stood in the middle of a snowy wood at nighttime, looking at a lamppost.”",
        hint: "Who was exploring the spare room and stepped into the wardrobe first?",
        explanation: "Lucy, the youngest sibling, discovered Narnia first while playing hide-and-seek and explored the snowy woods where she met Mr. Tumnus."
      },
      {
        id: 'lww-2',
        question: "What creature is Mr. Tumnus, the friendly inhabitant Lucy meets under the lamppost?",
        options: [
          "A Centaur",
          "A Faun (half man, half goat)",
          "A Talking Beaver",
          "A Woodland Dwarf"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“He was only a little taller than Lucy herself and carried an umbrella. From the waist upward he was like a man, but his legs were shaped like a goat’s, with hoofs instead of feet, and he had a tail, curly hair, and two little horns sticking out of his forehead. He was a Faun.”",
        hint: "Read the excerpt: notice the creature with horns, curly hair, and goat legs!",
        explanation: "Mr. Tumnus is a Faun—a mythological creature with the upper body of a human and the lower body, horns, and hooves of a goat."
      },
      {
        id: 'lww-3',
        question: "What sweet treat did the White Witch use to enchant and manipulate Edmund?",
        options: [
          "Chocolate fudge brownies",
          "Candied apples",
          "Turkish Delight",
          "Hot cinnamon rolls"
        ],
        correctAnswerIndex: 2,
        samplePassage: "“The Queen took out a small bottle and let a single drop fall upon the snow. Instantly there appeared a round box bound in green silk ribbon. Inside was several pounds of the most delicious Turkish Delight Edmund had ever tasted. Each piece was sweet and light to the very center, and the more he ate, the more he wanted.”",
        hint: "Look at the enchanted confectionery named in the excerpt!",
        explanation: "The White Witch gave Edmund magical Turkish Delight that created an insatiable craving, making him willing to betray his brother and sisters just to taste more."
      },
      {
        id: 'lww-4',
        question: "What cruel curse has the White Witch cast over all of Narnia?",
        options: [
          "It is always winter, but never Christmas.",
          "The animals are forbidden from speaking.",
          "The oceans have turned into poisonous vinegar.",
          "No flowers or trees can ever produce leaves."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘It is she that makes it always winter,’ Mr. Tumnus said with a shudder. ‘Always winter and never Christmas; think of that! A whole hundred years of snow, cold winds, and bare trees, without a single holiday or gift to bring hope.’”",
        hint: "Look at Mr. Tumnus's exact phrase in the passage: 'Always winter and...'",
        explanation: "The White Witch's tyrannical spell kept Narnia in a hundred-year frozen winter without spring, warmth, or Christmas to bring hope."
      },
      {
        id: 'lww-5',
        question: "Whose sudden arrival in Narnia is the first undeniable sign that the Witch's winter spell is beginning to thaw?",
        options: [
          "The King of Archenland",
          "The Emperor-beyond-the-Sea",
          "A flock of golden eagles",
          "Father Christmas"
        ],
        correctAnswerIndex: 3,
        samplePassage: "“He was a huge man in a bright red robe with a hood, trimmed with white fur, and a great white beard that fell like a foamy waterfall over his chest. ‘I’ve broken through at last,’ said Father Christmas. ‘She has kept me out for a long time, but Aslan is on the move. The Witch’s magic is weakening!’”",
        hint: "Who arrives in a red robe with a sledge and presents for the children?",
        explanation: "Father Christmas breaks through the melting snowdrifts, signaling that Aslan is approaching and the Witch's magical hold over Narnia is collapsing."
      },
      {
        id: 'lww-6',
        question: "What gifts does Father Christmas give to Lucy Pevensie to protect and heal her friends?",
        options: [
          "A silver sword and a shining shield bearing a red lion",
          "A small dagger and a cordial bottle made of diamond that can heal any wound or illness",
          "A bow with arrows that never miss and an ivory horn",
          "A golden cloak that makes the wearer completely invisible"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘In this bottle,’ Father Christmas said, giving Lucy a little vial of diamond glass, ‘is a cordial made from the juice of fire-flowers. If you or any of your friends are hurt, a single drop will restore health. And here is a small dagger. You are only to use it in great danger, for you must not be in the battle.’”",
        hint: "Notice the healing vial made of diamond and the small weapon given to Lucy in the excerpt!",
        explanation: "Father Christmas gave Lucy a healing cordial capable of reviving the fatally wounded, alongside a small dagger for personal emergency defense."
      },
      {
        id: 'lww-7',
        question: "Why did the White Witch claim that she had the legal right to execute Edmund under the Deep Magic?",
        options: [
          "He broke a statue in her castle courtyard.",
          "He was a human living illegally in Narnia.",
          "He was a traitor who betrayed his own family.",
          "He stole the Turkish Delight without paying for it."
        ],
        correctAnswerIndex: 2,
        samplePassage: "“‘You know the Deep Magic which the Emperor-beyond-the-Sea wrote on the Stone Table,’ the Witch said. ‘You know that every traitor belongs to me as my lawful prey and that for every treachery I have a right to kill. His life is forfeit to me!’”",
        hint: "Read what the Witch calls Edmund in the passage: 'every... belongs to me as my lawful prey'.",
        explanation: "Under the ancient Deep Magic engraved on the Stone Table, all traitors belonged to the White Witch, and blood was required for Edmund's treachery."
      },
      {
        id: 'lww-8',
        question: "How does Aslan save Edmund from being executed by the White Witch?",
        options: [
          "He secretly offers his own life on the Stone Table as a substitute sacrifice.",
          "He defeats the Witch in a public fencing duel.",
          "He banishes the Witch to the far frozen North with a roar.",
          "He transforms Edmund into a stone lion so he cannot be harmed."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“Aslan made a quiet agreement with the Witch in private. That night, unknown to the soldiers, Aslan walked solemnly to the Stone Table. He allowed the Witch and her cruel monsters to bind him, shear his mane, and strike him down so that Edmund could live.”",
        hint: "Look at the passage: what sacrifice did Aslan make at the Stone Table?",
        explanation: "Aslan willingly offered himself to be bound, humiliated, and sacrificed on the Stone Table in Edmund's place, satisfying the ancient law through selfless love."
      },
      {
        id: 'lww-9',
        question: "Why did Aslan miraculously rise from the dead the following morning?",
        options: [
          "Lucy poured her entire bottle of healing cordial on his mane.",
          "The rising sun melted the Stone Table into warm spring water.",
          "The wood mice chewed through his wounds and revived his heart.",
          "A Deeper Magic from before the dawn of time stated that if a willing victim with no treachery died in a traitor's place, the Stone Table would crack and death would reverse."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“‘The Table was cracked in two!’ said Aslan. ‘The Witch knew the Deep Magic, but there is a Deeper Magic she did not know. If a willing victim who had committed no treachery was killed in a traitor’s stead, the Table would crack and Death itself would start working backward!’”",
        hint: "Read Aslan's explanation in the excerpt about the 'Deeper Magic from before the dawn of time'!",
        explanation: "The Deeper Magic unknown to the Witch decreed that an innocent, willing sacrifice on behalf of a traitor shatters death and resurrects the innocent victim."
      },
      {
        id: 'lww-10',
        question: "How do the four Pevensie children, now grown adult kings and queens of Narnia, accidentally return to their childhood in England?",
        options: [
          "They fall asleep during a royal banquet at Cair Paravel.",
          "While hunting the magical White Stag, they follow a path past an old lamppost and stumble through the coats of the wardrobe.",
          "Aslan blows a magical horn that teleports them back into the spare room.",
          "The Professor calls their names through a looking glass."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“While chasing the White Stag through the thicket, they came upon an iron lamppost. ‘This place seems strangely familiar,’ said King Peter. Pushing through the dense branches, they found the branches felt like fur coats... and suddenly they tumbled out of the wardrobe door into the empty spare room, children once again, where no time had passed!”",
        hint: "What landmark and animal did they pursue into the thicket that led back into the wardrobe?",
        explanation: "While hunting the White Stag years later as reigning monarchs, they rediscovered the lamppost, brushed past the fur coats, and tumbled right back into the spare room as children—where not a single minute had passed in England."
      }
    ]
  },
  {
    id: 'matilda',
    title: "Matilda",
    author: "Roald Dahl",
    coverEmoji: "📚",
    themeColor: "rose",
    readingLevel: "Grades 3 - 6 (Ages 8-12)",
    synopsis: "A brilliant, book-loving young girl with neglectful parents and a tyrannical headmistress discovers she possesses extraordinary telekinetic powers.",
    questions: [
      {
        id: 'mat-1',
        question: "What did Matilda do when her father refused to buy her books and told her to watch television instead?",
        options: [
          "She walked by herself to the village public library every afternoon and read everything on the shelves.",
          "She hid under her bed and refused to eat dinner.",
          "She secretly ordered encyclopedias using her mother's credit card.",
          "She wrote angry letters to the Prime Minister."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘Daddy,’ she said, ‘do you think you could buy me a book?’ ‘What’s wrong with the telly?’ he barked. So every afternoon, as soon as her mother left for bingo, Matilda walked down to the village public library all by herself. Mrs. Phelps, the librarian, watched in amazement as a four-year-old girl sat reading Great Expectations by Charles Dickens.”",
        hint: "Where did Matilda go on her own while her mother played bingo?",
        explanation: "Undeterred by her father's refusal, four-year-old Matilda walked to the local library every day, reading classics by Dickens, Hemingway, and Austen under the watchful eye of Mrs. Phelps."
      },
      {
        id: 'mat-2',
        question: "How did Matilda punish her arrogant father, Mr. Wormwood, after he unjustly tore up her library book?",
        options: [
          "She painted his secondhand cars neon pink during the night.",
          "She put superglue along the inside rim of his favorite pork-pie hat.",
          "She let all the air out of his car tires before work.",
          "She replaced his hair tonic with green food coloring."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“Matilda slipped into the hall cloakroom with a tube of Superglue. She carefully ran a thin ring of glue all around the inside band of her father’s favorite hat. When Mr. Wormwood put it on to go to work, it stuck fast to his forehead. He had to keep it on all day, even when sleeping!”",
        hint: "Look at what Matilda applied to the inside band of her father's favorite pork-pie hat!",
        explanation: "To teach him a lesson for ripping up her book, Matilda coated the inside band of Mr. Wormwood's hat with superglue, forcing him to wear it everywhere, even to bed."
      },
      {
        id: 'mat-3',
        question: "What cruel punishment room does the terrifying headmistress, Miss Trunchbull, use to terrorize students?",
        options: [
          "The Dungeon",
          "The Spiky Shed",
          "The Iron Closet",
          "The Chokey"
        ],
        correctAnswerIndex: 3,
        samplePassage: "“‘Have you heard of The Chokey?’ whispered Hortensia. ‘It’s a tall, narrow cupboard with walls covered in broken glass and sharp nails sticking out. You can’t sit down, you can’t lean against the walls, and the Trunchbull locks you in there for hours in pitch darkness!’”",
        hint: "Read the horrifying name of the narrow, nail-lined cupboard in Hortensia's quote!",
        explanation: "Miss Trunchbull used 'The Chokey'—a narrow, pitch-dark closet lined with broken glass and rusty nails—to terrorize and torture innocent children."
      },
      {
        id: 'mat-4',
        question: "What heroic feat did young Bruce Bogtrotter accomplish during a school assembly to Miss Trunchbull's absolute fury?",
        options: [
          "He climbed to the very top of the flagpole and tied a white flag.",
          "He caught Miss Trunchbull's hammer throw in mid-air.",
          "He ate an entire massive sixteen-inch chocolate cake by himself down to the very last crumb.",
          "He recited the entire times table up to one hundred backward without stopping."
        ],
        correctAnswerIndex: 2,
        samplePassage: "“‘Eat!’ bellowed the Trunchbull. ‘You stole a slice of my private chocolate cake, so you will eat the entire cake!’ It was a monster, two feet across and covered in rich chocolate cream. Bruce chewed and choked, but he kept going. When he swallowed the final crumb, the whole school erupted in wild cheering!”",
        hint: "What gigantic chocolate dessert did Bruce finish eating in front of the whole school?",
        explanation: "Miss Trunchbull tried to punish Bruce Bogtrotter for stealing a slice of her cake by forcing him to eat an enormous chocolate cake until he burst, but Bruce miraculously finished every single bite to the school's cheers."
      },
      {
        id: 'mat-5',
        question: "What small amphibian did Lavender place into Miss Trunchbull's water pitcher to play a prank on her?",
        options: [
          "A slimy newt",
          "A green tree frog",
          "A spotted salamander",
          "A small pond toad"
        ],
        correctAnswerIndex: 0,
        samplePassage: "“Lavender had captured a muddy newt with a bright orange belly from the pond. Before class began, she carefully tipped the creature into the glass water jug on the teacher’s table. When the Trunchbull poured a glass of water, plop! Out splashed the wriggling creature right into her cup!”",
        hint: "Check the passage: what pond creature with an orange belly did Lavender catch?",
        explanation: "Lavender caught a slimy newt in a pond and dropped it into Miss Trunchbull's water pitcher. When Trunchbull poured water, the newt splashed into her glass and startled her."
      },
      {
        id: 'mat-6',
        question: "How did Matilda discover her telekinetic power for the very first time?",
        options: [
          "She lifted her heavy desk into the air to stop Miss Trunchbull from hitting her.",
          "She concentrated her intense eye gaze to tip over the glass of water containing the newt.",
          "She opened the locked front gates of the school using her mind.",
          "She made her father's television screen explode during a broadcast."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“Matilda felt a strange fiery power surging behind her eyes. ‘Tip it over!’ she willed silently. ‘Tip it over!’ She focused all her mind’s energy onto the glass containing the newt. Tiny sparks of lightning seemed to shoot from her eyes, and suddenly, slowly, the heavy glass toppled over onto the Trunchbull’s chest!”",
        hint: "What object did Matilda focus her fiery eye energy on to topple it over?",
        explanation: "Enraged by Miss Trunchbull falsely accusing her of putting the newt in the glass, Matilda channeled her immense mental focus into her eyes, causing the glass to tip over onto the headmistress."
      },
      {
        id: 'mat-7',
        question: "What tragic secret connects the sweet teacher Miss Honey to Miss Trunchbull?",
        options: [
          "Miss Trunchbull adopted Miss Honey from an orphanage in London.",
          "Miss Honey used to be Miss Trunchbull's teacher in primary school.",
          "They are sisters who fought over the ownership of the school.",
          "Miss Trunchbull is actually Miss Honey's cruel aunt who took over her father's house and stole her inheritance."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“‘Miss Trunchbull is my aunt,’ Miss Honey whispered. ‘Her name is Agatha. When my dear father, Dr. Magnus Honey, died under mysterious circumstances, she seized his house, kept all his money, and treated me like a slave for years.’”",
        hint: "Look at Miss Honey's revelation: what family relation is Miss Trunchbull to her?",
        explanation: "Miss Trunchbull is Miss Honey's aunt Agatha, who seized the family estate and salary after Dr. Magnus Honey's suspicious death, leaving Miss Honey to live in extreme poverty in a cottage without furniture or plumbing."
      },
      {
        id: 'mat-8',
        question: "How does Matilda use her telekinetic powers during class to permanently frighten Miss Trunchbull away?",
        options: [
          "She flies around the classroom like a superhero.",
          "She locks Miss Trunchbull inside The Chokey from across the room.",
          "She uses her mind to lift chalk and write a message on the blackboard pretending to be Magnus Honey's ghost.",
          "She causes all the windows in the assembly hall to shatter simultaneously."
        ],
        correctAnswerIndex: 2,
        samplePassage: "“The piece of chalk rose into the air and began to write across the blackboard: ‘Agatha, this is Magnus. Give my Jenny her house. Give my Jenny her money. If you don’t, I will come and get you!’ The Trunchbull’s face turned white as chalk. She screamed, fainted to the floor, and fled the town forever!”",
        hint: "Look at what the floating piece of chalk wrote on the blackboard in the excerpt!",
        explanation: "Matilda practiced moving chalk with her eyes until she could write a terrifying message on the board demanding that Agatha return Jenny Honey's house, posing as the ghost of Miss Honey's late father Magnus."
      },
      {
        id: 'mat-9',
        question: "Why did Matilda's family suddenly pack their suitcases in a frenzy at the end of the story?",
        options: [
          "They won a free luxury holiday cruise around the Caribbean.",
          "Mr. Wormwood was fleeing the police because he was involved in selling stolen car parts.",
          "Their house was condemned by the city council.",
          "Mrs. Wormwood won the national bingo championship in Spain."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Hurry up!’ shouted Mr. Wormwood, throwing suitcases into the trunk. ‘We’re leaving for Spain right this minute!’ ‘Why?’ asked Matilda. ‘Because the police are after him!’ cried Mrs. Wormwood. ‘He’s been buying stolen motor cars and swapping their parts!’”",
        hint: "Why were the police chasing Mr. Wormwood?",
        explanation: "Mr. Wormwood's crooked business dealing in stolen cars was uncovered by detectives, forcing the family to flee to Spain to escape arrest."
      },
      {
        id: 'mat-10',
        question: "What happy ending is arranged for Matilda when her family leaves the country?",
        options: [
          "Her parents agree to let Miss Honey adopt her, and they live happily together in Miss Honey's reclaimed house.",
          "She moves into a luxury boarding school in Switzerland.",
          "She becomes the youngest headmistress of Crunchem Hall.",
          "She moves in with Mrs. Phelps at the village library."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘Let me stay with Miss Honey!’ Matilda begged. ‘You don’t care about me anyway!’ Mr. Wormwood shrugged. ‘One less mouth to feed,’ he grunted, signing the adoption papers on the boot of his car. Matilda threw her arms around Miss Honey as the Wormwoods sped off forever.”",
        hint: "Who does Matilda ask to stay with instead of moving to Spain?",
        explanation: "Her parents gladly surrendered custody because they never appreciated Matilda, allowing Miss Honey to officially adopt her so they could live together as a loving family in Dr. Honey's reclaimed home."
      }
    ]
  },
  {
    id: 'alice-wonderland',
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    coverEmoji: "🐇",
    themeColor: "purple",
    readingLevel: "Grades 4 - 8 (Ages 9-14)",
    synopsis: "Tumble down the rabbit hole with Alice as she navigates a nonsensical world of talking animals, mad tea parties, and the volatile Queen of Hearts.",
    questions: [
      {
        id: 'aw-1',
        question: "What unusual sight causes Alice to leap to her feet and follow the White Rabbit into the rabbit hole?",
        options: [
          "He was riding a tiny bicycle through the daisies.",
          "He had bright pink sunglasses and was playing an accordion.",
          "He wore a waistcoat and took a pocket watch out of his pocket, muttering that he was late.",
          "He dropped a gold key that unlocked an iron gate."
        ],
        correctAnswerIndex: 2,
        samplePassage: "“There was nothing very remarkable in hearing the Rabbit say: ‘Oh dear! I shall be late!’ But when the Rabbit actually took a watch out of its waistcoat pocket, looked at it, and hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat pocket or a watch to take out of it!”",
        hint: "What clothing item and accessory did the White Rabbit pull out that shocked Alice?",
        explanation: "Alice had seen rabbits before, but never one wearing a waistcoat with a pocket watch checking the time and speaking English, sparking her irresistible curiosity."
      },
      {
        id: 'aw-2',
        question: "What happened to Alice when she drank from the glass bottle labeled 'DRINK ME' on the three-legged glass table?",
        options: [
          "She fell fast asleep for a hundred years.",
          "She turned invisible from head to toe.",
          "She grew so tall her head bumped into the ceiling.",
          "She shrank down until she was only ten inches high."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“It was all very well to say ‘Drink me,’ but wise little Alice was not going to do that in a hurry without checking for poison. Finding no poison mark, she tasted it, and found it delicious. ‘What a curious feeling!’ said Alice. ‘I must be shutting up like a telescope!’ And so it was: she was now only ten inches high.”",
        hint: "Check the passage: how small did Alice become after sipping the bottle?",
        explanation: "Drinking from the 'DRINK ME' bottle caused Alice to shrink like a telescope until she was only ten inches tall, allowing her to see the little door to the garden."
      },
      {
        id: 'aw-3',
        question: "What bizarre physical feature characterizes the Cheshire Cat during his conversations with Alice?",
        options: [
          "He has rainbow-colored wings like a butterfly.",
          "He can vanish gradually, sometimes leaving only his wide grin floating in mid-air.",
          "He speaks exclusively in rhyming French riddles.",
          "He wears three pairs of spectacles stacked on his nose."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Well! I’ve often seen a cat without a grin,’ thought Alice, ‘but a grin without a cat! It’s the most curious thing I ever saw in all my life!’ The Cat vanished quite slowly, beginning with the end of the tail, and ending with the grin, which remained some time after the rest of it had gone.”",
        hint: "Look at Alice's quote in the passage: what remained floating after the cat's body vanished?",
        explanation: "The Cheshire Cat had the supernatural ability to disappear slowly piece by piece, famously leaving only his mischievous grin lingering in the air."
      },
      {
        id: 'aw-4',
        question: "Why are the Mad Hatter, the March Hare, and the Dormouse trapped in an eternal, never-ending tea party?",
        options: [
          "The Hatter had a quarrel with Time, so Time stopped the clock at six o'clock forever.",
          "They ran out of clean teacups and cannot wash dishes.",
          "The Queen of Hearts ordered them to drink tea until sunset as a royal decree.",
          "The teapot is enchanted and never runs dry."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘It’s always six o’clock now,’ sighed the Hatter. ‘We had a dreadful quarrel last March, just before he went mad. I was singing for the Queen, and she screamed: ‘He’s murdering time!’ Ever since then, Time won’t do a thing I ask! It’s always six o’clock—always tea-time, and we’ve no time to wash the things between whiles!’”",
        hint: "Who did the Hatter quarrel with so that the clock remains permanently stuck at six o'clock?",
        explanation: "The Hatter offended Time at a concert, so Time froze the hour at six o'clock—tea-time—meaning they must continuously move around the table from one cup to the next."
      },
      {
        id: 'aw-5',
        question: "What riddle does the Mad Hatter pose to Alice that famously has no actual answer in the original story?",
        options: [
          "“How many stars can dance on a teacup?”",
          "“Where does the candle flame go when it is blown out?”",
          "“Why is a raven like a writing desk?”",
          "“Why does the moon smile on Tuesdays?”"
        ],
        correctAnswerIndex: 2,
        samplePassage: "“The Hatter opened his eyes very wide on hearing this; but all he said was, ‘Why is a raven like a writing desk?’ ‘Come, we shall have some fun now!’ thought Alice. ‘I’m glad they’ve begun asking riddles—I believe I can guess that.’ But when she gave up, the Hatter confessed: ‘I haven’t the slightest idea!’”",
        hint: "Look at the Hatter's riddle about a bird and a piece of furniture in the excerpt!",
        explanation: "The Hatter asked: 'Why is a raven like a writing desk?'. Alice spent time trying to deduce the answer, only for the Hatter and March Hare to admit they had no answer at all!"
      },
      {
        id: 'aw-6',
        question: "What are the playing-card gardeners furiously doing to the white rose trees when Alice enters the Queen's garden?",
        options: [
          "Pruning the thorns so they do not scratch the King.",
          "Digging up their roots to plant tulip bulbs.",
          "Watering them with strawberry juice to make them smell like candy.",
          "Painting the white roses red with paintbrushes because the Queen demanded red roses."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“Three gardeners were busy painting a large white rose-tree red. ‘Would you tell me,’ said Alice, ‘why you are painting those roses?’ ‘Why, Miss,’ said Two, ‘the fact is, this ought to have been a red rose-tree, and we put in a white one by mistake. If the Queen was to find out, we should all have our heads cut off!’”",
        hint: "Why were the gardeners covering the white petals with red paint?",
        explanation: "The gardeners mistakenly planted a white rose bush instead of a red one. Terrified that the Queen of Hearts would execute them, they scrambled to paint all the petals red before she arrived."
      },
      {
        id: 'aw-7',
        question: "What live animals are used as balls and mallets during the Queen of Hearts' chaotic croquet match?",
        options: [
          "Rabbits as balls and ducks as mallets",
          "Hedgehogs as balls and flamingos as mallets",
          "Frogs as balls and storks as mallets",
          "Puppies as balls and geese as mallets"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“The croquet balls were live hedgehogs, the mallets were live flamingos, and the soldiers had to double themselves up and stand on their hands and feet to make the arches. The chief difficulty Alice found was in managing her flamingo: whenever she had its neck nicely straightened out, the flamingo would twist around and look up into her face!”",
        hint: "Look at the two animals mentioned in the first sentence of the excerpt!",
        explanation: "In Wonderland's ridiculous croquet game, live flamingos served as mallets (tucked under the arm) and curled-up hedgehogs served as balls that kept unrolling and walking away."
      },
      {
        id: 'aw-8',
        question: "What is the Queen of Hearts' catchphrase whenever anyone displeases her?",
        options: [
          "“Off with their heads!”",
          "“Lock them in the deepest tower!”",
          "“Turn them into card games!”",
          "“Throw them down the well!”"
        ],
        correctAnswerIndex: 0,
        samplePassage: "“The Queen turned crimson with fury, and glared at Alice like a wild beast. ‘Off with her head!’ the Queen shouted at the top of her voice. ‘Off with—’ ‘Nonsense!’ said Alice, very loudly and decidedly, and the Queen was silent.”",
        hint: "What severe order does the Queen shout in the passage?",
        explanation: "The tyrannical Queen of Hearts solves every trivial disagreement or annoyance by bellowing her infamous command: 'Off with their heads!'"
      },
      {
        id: 'aw-9',
        question: "What was the Knave of Hearts accused of stealing during the courtroom trial?",
        options: [
          "The Queen's golden crown",
          "The King's royal pocket watch",
          "The tarts baked by the Queen on a summer day",
          "The White Rabbit's white kid gloves"
        ],
        correctAnswerIndex: 2,
        samplePassage: "“The White Rabbit blew three blasts on the trumpet, unrolled the parchment scroll, and read as follows: ‘The Queen of Hearts, she made some tarts, all on a summer day: The Knave of Hearts, he stole those tarts, and took them quite away!’”",
        hint: "Look at the rhyme read by the White Rabbit in the courtroom excerpt!",
        explanation: "Based on the famous nursery rhyme, the Knave of Hearts stood trial before the King and Queen on charges of stealing a dish of freshly baked tarts."
      },
      {
        id: 'aw-10',
        question: "How does Alice wake up from her fantastical dream in Wonderland?",
        options: [
          "She falls into a pool of tears and splashes her face.",
          "Her cat Dinah purrs loudly in her ear.",
          "The White Rabbit drops his pocket watch, which rings like an alarm clock.",
          "When the Queen orders the cards to attack, Alice shouts 'You're nothing but a pack of cards!' and awakens with dry leaves brushing her face."
        ],
        correctAnswerIndex: 3,
        samplePassage: "“‘Who cares for you?’ said Alice (she had grown to her full size by this time). ‘You’re nothing but a pack of cards!’ At this the whole pack rose up into the air, and came flying down upon her. She gave a little scream, and woke up to find her head in the lap of her sister, gently brushing away some dead leaves that had fluttered down from the trees.”",
        hint: "Read Alice's bold shout to the court cards before she awakens under the tree!",
        explanation: "Realizing the absurdity of the courtroom, Alice declares that the court is merely a deck of ordinary playing cards. The cards flutter into the air, and Alice wakes up on the riverbank to find dead leaves drifting over her face."
      }
    ]
  },
  {
    id: 'fox-and-rabbit',
    title: 'Fox & Rabbit',
    author: 'Beth Ferry',
    coverEmoji: '🦊',
    themeColor: 'orange',
    readingLevel: 'Grades 1 - 4 (Ages 6-9)',
    synopsis: 'A full-color graphic novel about easygoing Fox and anxious Rabbit — total opposites who make the perfect pair. Across five funny stories they visit a fair, brave the beach, hunt for treasure, plant a garden, and open a lemonade stand, discovering the simple magic of true friendship.',
    questions: [
      {
        id: 'fr-1',
        question: 'At the beach, Rabbit is scared to go into the water — he keeps worrying about crabs, whales, and even a singing shark! What does Fox do?',
        options: [
          'Fox laughs at Rabbit and swims off to have fun by himself.',
          'Fox stays patient, reassures Rabbit, and gently coaxes him into the water little by little.',
          'Fox tells Rabbit he is not allowed to be scared and must jump in right away.',
          'Fox leaves Rabbit on the sand and finds someone braver to play with.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'At the beach, Rabbit invents one worry after another — “I feel a crab!” “I see a whale!” “I hear a shark!” Fox calmly answers each one (“There are no crabs… That’s just Sparrow fighting with some sea gulls”) and stays beside Rabbit all afternoon until they watch the sunset and find a message in a bottle together.',
        hint: 'Notice that Fox never makes fun of Rabbit’s worries — he stays beside him the whole afternoon.',
        explanation: 'A good friend doesn’t mock fear or run off. Fox is patient, answers each worry calmly, and encourages Rabbit step by step until Rabbit is brave enough to enjoy the water.'
      },
      {
        id: 'fr-2',
        question: 'How can Fox tell that Rabbit is feeling scared at the beach, even though Rabbit never says the words “I’m scared”?',
        options: [
          'Rabbit is laughing louder than usual.',
          'Rabbit asks Fox to race him into the deep water.',
          'Rabbit builds a giant sandcastle all by himself.',
          'Rabbit keeps imagining scary things in the water — crabs, whales, and sharks.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Rabbit never says “I’m scared.” Instead his fear comes out as wild imagining: “I feel a crab!” “I see a whale!” “I hear a shark!” “It’s a singing shark!” Fox hears what’s underneath the silly words.',
        hint: 'Worried words are a clue — what is Rabbit’s imagination doing?',
        explanation: 'Feelings don’t always come out as “I feel scared.” Rabbit’s wild worries about crabs, whales, and singing sharks are his fear talking. Noticing clues like this is called reading a friend’s feelings.'
      },
      {
        id: 'fr-3',
        question: 'The fair turns out to be the “UN-FAIR” fair — the games are so hard that it’s almost impossible to win a prize. What do Fox and Rabbit do?',
        options: [
          'They keep playing together and have a wonderful day anyway — being together is the real prize.',
          'They get angry, knock over the game booths, and demand their money back.',
          'Fox blames Rabbit for losing and says he will go to fairs alone from now on.',
          'They sit in a corner and pout until someone gives them a prize for free.'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'The pair soon notice the fair is the UN-FAIR fair — it isn’t easy to WIN a game and get a prize. They play on regardless, enjoying themselves more often than not, and by the end of the day they’ve won Fred the stuffed lion and a beach ball.',
        hint: 'Think about what mattered more to them at the end of the day — the prizes or the day itself?',
        explanation: 'Good sports don’t let losing ruin the day or the friendship. Fox and Rabbit enjoy every game together, and the shared laughter matters more than any stuffed prize.'
      },
      {
        id: 'fr-4',
        question: 'The first adventure starts with cloud gazing — one cloud looks like cotton candy, which gives them the idea to visit the fair nearby. What friending skill does this show?',
        options: [
          'Always sticking to the plan and never changing your mind.',
          'Only doing activities you already know you like.',
          'Saying yes to a friend’s idea and trying something new together, even if it wasn’t planned.',
          'Letting your friend do all the deciding while you just follow silently.'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'The first story opens with quiet cloud gazing. One cloud reminds them of COTTON CANDY — which makes them notice the fair that just happens to be close by. On a whim, off they go, and the day becomes an adventure.',
        hint: 'The fair wasn’t in their plans — what did they do when the idea popped up?',
        explanation: 'Great friends stay open. When a fun idea pops up, saying “let’s try it!” — like visiting the fair on a whim — turns an ordinary day into an adventure. That’s how they discovered cotton candy.'
      },
      {
        id: 'fr-5',
        question: 'On the way to Surprise Island, Fox and Rabbit bicker about whether the surprise will be a good surprise or a bad surprise (a “zinger”). Why is this kind of bickering OK between friends?',
        options: [
          'Because the one who argues loudest always gets to be right.',
          'Because it’s playful — they’re teasing, not trying to hurt each other’s feelings.',
          'Because bickering means they are not really friends anymore.',
          'Because Rabbit always gives in so Fox wins every argument.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'Following the treasure map to Surprise Island, the two fall into a friendly bicker about whether it will be a good surprise or a bad surprise — bad surprises are “zingers.” They disagree the whole way there and still have a grand time.',
        hint: 'Listen to the tone — are they trying to wound each other, or just having fun disagreeing?',
        explanation: 'Friends can disagree and tease each other playfully. The difference between friendly bickering and a real fight is simple: nobody’s feelings get hurt, and they’re still laughing together at the end.'
      },
      {
        id: 'fr-6',
        question: 'After finding a message in a bottle at the beach, Fox and Rabbit decide to follow the treasure map to Surprise Island. What makes this good teamwork?',
        options: [
          'Fox reads the map alone so Rabbit doesn’t slow him down.',
          'Rabbit decides everything and Fox just carries the snacks.',
          'They race to the island to see who gets there first.',
          'They make the plan together, share the excitement, and set off as a team.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'At the end of their long beach day, they discover a message in a bottle — a treasure map! The next story is the adventure of following it to Surprise Island, an expedition they choose and enjoy together.',
        hint: 'Who decided to go on the treasure hunt — one of them, or both of them?',
        explanation: 'Good communication means making plans together. Neither friend bosses the other around — they share the idea, agree on the adventure, and enjoy every step side by side.'
      },
      {
        id: 'fr-7',
        question: 'Fox and Rabbit plant the seeds they found on Surprise Island. Gardening is slow, dirty, hard work (hence the “groaning”!). What does doing it together teach us about friendship?',
        options: [
          'Friends stick with the boring, hard parts together instead of leaving all the work to one person.',
          'If a job is no fun, a good friend does it all for you while you nap.',
          'Friends should only do easy, fun things and skip anything that makes them groan.',
          'The friend who complains the least gets to keep everything that grows.'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'In “Gardening, Growing & Groaning,” the two plant the seeds that were the surprise on Surprise Island. It’s sweaty, slow work — they groan through it together — and there’s a surprise waiting at the very end.',
        hint: 'The title itself says “groaning” — but do they quit, or keep digging side by side?',
        explanation: 'Real friendship isn’t only fun games — it’s also sharing the dull, tough jobs. Sticking with it together, groans and all, is what makes the garden (and the friendship) grow.'
      },
      {
        id: 'fr-8',
        question: 'One of the planted seeds grows into a lemon tree — sour lemons, not sweet fruit! What do Fox and Rabbit do?',
        options: [
          'They cry about the lemons and never garden again.',
          'They throw the lemons away and blame each other for planting the wrong seeds.',
          'They squeeze the lemons, make lemonade together, and open a lemonade stand to share it.',
          'Fox eats all the lemons himself to prove he is the toughest.'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'The final story’s seedling turns out to be a LEMON. And when life gives you lemons, you make lemonade — so naturally, Fox and Rabbit squeeze, stir, and open a lemonade stand together.',
        hint: 'Remember the saying: when life gives you lemons… what do these two friends make?',
        explanation: 'Disappointments happen — even to best friends. Instead of sulking or blaming, Fox and Rabbit turn the sour surprise into something sweet they can share. That’s resilience plus teamwork.'
      },
      {
        id: 'fr-9',
        question: 'Fox is easygoing and Rabbit is anxious — they seem like total opposites. What is the book’s big lesson about different personalities in a friendship?',
        options: [
          'Opposites can never really be friends, so they should find friends exactly like themselves.',
          'Friends don’t have to be alike — accepting each other’s differences is what makes the pair perfect.',
          'Rabbit should stop being anxious so he can be more like Fox.',
          'Fox should stop being easygoing so he matches Rabbit’s worries.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'Easygoing Fox and anxious Rabbit seem like total opposites. But, somehow, they make the perfect pair! Across every story, Fox’s calm steadies Rabbit’s worries, and Rabbit’s careful heart keeps Fox grounded.',
        hint: 'The book says they “seem like total opposites. But, somehow, they make the perfect pair!” — what makes it work?',
        explanation: 'The best friendships aren’t between identical people. Fox’s calm steadies Rabbit’s worries, and Rabbit’s care keeps Fox grounded. Accepting differences — not fixing them — is the secret.'
      },
      {
        id: 'fr-10',
        question: 'Across all five stories, Fox and Rabbit face fears like heights, swimming, and even poisonous frogs. What helps them face these fears?',
        options: [
          'They pretend fears don’t exist and never talk about them.',
          'They avoid anything scary and stay home instead.',
          'Fox faces every fear alone to show off how brave he is.',
          'They face fears together — having a friend beside you makes scary things feel possible.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'On this first adventure, the pair discover new favorite things like sunsets, dandelions, and cotton candy — and face new fears like heights, swimming, and (poisonous!) frogs. Thankfully, there’s nothing Fox and Rabbit can’t do together!',
        hint: 'What is the one thing that is true in every story — the fair, the beach, the island, the garden?',
        explanation: 'Courage is easier with company. Whether it’s deep water or a dark swamp, knowing a friend is right beside you turns “I can’t” into “we can.” That’s the simple magic of true friendship.'
      }
    ]
  },
  {
    id: 'fox-and-rabbit-cues',
    title: 'Fox & Rabbit — Social Cues',
    author: 'Beth Ferry',
    coverEmoji: '👀',
    themeColor: 'lime',
    readingLevel: 'Grades 1 - 4 (Ages 6-9)',
    synopsis: 'A companion quiz for Fox & Rabbit (Book 1) that tests whether readers catch the subtle social cues — trust read in patience, comfort in silence, playful vs. real fights, and kindness in small moments.',
    questions: [
      {
        id: 'fr2-1',
        question: 'At the beach, Rabbit keeps telling Fox his worries — crabs, whales, singing sharks. How does Rabbit know it’s safe to keep sharing them?',
        options: [
          'Fox promises him a prize for every worry he shares.',
          'Fox answers every single worry calmly — no sighing, no eye-rolling, no walking away.',
          'Fox tells him worries are silly and he should stop.',
          'Rabbit doesn’t know; he’s just hoping for the best.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'Worry after worry pours out of Rabbit — crabs, whales, a singing shark. Fox never sighs, never rolls his eyes, never wanders off. He just keeps answering, calm as the water, until Rabbit dares to splash in.',
        hint: 'Don’t listen to promises — watch what Fox DOES, worry after worry.',
        explanation: 'Trust is read in consistent behavior, not words. Fox’s steady patience — no sighs, no eye-rolls, no walking away — is the cue that tells Rabbit (and the reader) this is a safe friend for scary feelings.'
      },
      {
        id: 'fr2-2',
        question: 'Fox and Rabbit notice the fair games are almost impossible to win — it’s the “UN-FAIR” fair. What’s the socially smart thing they do?',
        options: [
          'Accuse the booth workers of cheating at the top of their lungs.',
          'Keep spending all their money trying to beat the rigged games.',
          'Storm off in a huff and ruin the whole day.',
          'Notice the games are unfair, stop chasing prizes, and enjoy the day together anyway.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'It dawns on the pair that the fair is the UN-FAIR fair — winning is nearly impossible. They don’t throw a fit or empty their pockets fighting it; they simply change what the day is about: each other.',
        hint: 'When the game can’t be won, what’s the smartest move — fight the game, or change the goal?',
        explanation: 'Reading a situation accurately is a social superpower. They spot the rigged games, let go of the prizes, and choose the real win: a fun day together. Smart readers notice when to stop playing someone else’s game.'
      },
      {
        id: 'fr2-3',
        question: 'The book opens with Fox and Rabbit cloud gazing quietly together, hardly saying a word. What does comfortable silence tell you about a friendship?',
        options: [
          'That they’re so at ease they don’t need constant talking to have fun together.',
          'That they’re bored with each other already.',
          'That they’ve permanently run out of things to say.',
          'That one of them is secretly angry at the other.'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'The first story opens in easy quiet: two friends on their backs, watching clouds drift, one reminding them of cotton candy. No chatter, no awkwardness — just shared sky.',
        hint: 'Think of your own closest friend: is every happy moment full of talking?',
        explanation: 'Silence is a cue too. Comfortable quiet — no fidgeting, no tension — signals deep ease. Friends who can simply be together without performing are showing the strongest bond of all.'
      },
      {
        id: 'fr2-4',
        question: 'After a whole day at the UN-FAIR fair, they finally win Fred the stuffed lion. What would show the subtlest kindness in that moment?',
        options: [
          'Grabbing Fred and sprinting away before anyone can ask.',
          'Arguing loudly about who tried harder at the games.',
          'Offering Fred to the other first, without being asked.',
          'Leaving Fred at the booth because sharing is too hard.'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'By day’s end, against all odds, they’ve won Fred the stuffed lion — one prize, two friends, after hours of losing together.',
        hint: 'The kindest moves are the ones nobody demands. What could one friend simply OFFER?',
        explanation: 'The subtlest generosity needs no prompting: offering the prize first, freely. Readers who catch this cue understand that in strong friendships, giving feels as good as getting — no scoreboard required.'
      },
      {
        id: 'fr2-5',
        question: 'At sunset they find a message in a bottle. How can you tell they’re both equally thrilled, even before anyone speaks?',
        options: [
          'They immediately start arguing about who spotted it first.',
          'They both lean in close with wide eyes — bodies show excitement before words do.',
          'One of them wanders off, uninterested.',
          'You can’t tell; excitement is completely invisible.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'The bottle glints in the sunset. In the same instant both friends lean in, eyes wide, breath held — a shared gasp before a single word is spoken.',
        hint: 'Freeze the frame: what are their BODIES doing in that first second?',
        explanation: 'Big feelings arrive in the body first: leaning in, wide eyes, held breath. When both friends show the same cues at the same moment, you’re witnessing shared wonder — the sparkle before the adventure.'
      },
      {
        id: 'fr2-6',
        question: 'On the way to Surprise Island they bicker about good surprises versus bad “zingers.” How do you know it’s playful teasing, not a real fight?',
        options: [
          'Someone cries and storms off into the swamp.',
          'They stop speaking to each other for the rest of the day.',
          'One of them hurls the treasure map into the water.',
          'They’re giggling between arguments, and nobody’s feelings get hurt.'
        ],
        correctAnswerIndex: 3,
        samplePassage: '“Good surprise!” “Bad surprise — a ZINGER!” Back and forth they go all the way to Surprise Island — but the arguing comes with giggles, and when the island appears, they race ashore side by side.',
        hint: 'Real fights leave marks. What’s missing here that a real fight would have?',
        explanation: 'Tone is the tell: giggles between jabs, no tears, no storming off, still side by side at the end. Playful bickering has a lightness real conflict never does — learning the difference is a lifelong social skill.'
      },
      {
        id: 'fr2-7',
        question: 'Planting the seeds, they groan the whole time — yet they keep digging. What does groaning-while-continuing tell you?',
        options: [
          'That complaining isn’t the same as quitting — they’re committed even while grumbling.',
          'That they secretly hate each other.',
          'That gardening was a terrible idea they deeply regret.',
          'That they’ll never actually finish the garden.'
        ],
        correctAnswerIndex: 0,
        samplePassage: '“Gardening, Growing & Groaning” — the title says it all. They moan over every shovelful… and plant every single seed. The groans never once turn into goodbyes.',
        hint: 'Watch their FEET, not their mouths: do the feet stop?',
        explanation: 'Grumbling while continuing is one of friendship’s funniest honest cues: the mouth complains, but the hands keep working. Commitment isn’t the absence of groaning — it’s groaning and digging anyway, together.'
      },
      {
        id: 'fr2-8',
        question: 'When the seedling turns out to be a sour lemon tree instead of sweet fruit, there’s a beat of disappointment. What cue shows they’re already bouncing back?',
        options: [
          'They cry about the lemons for a full hour.',
          'They blame each other for planting the wrong seed.',
          'Someone grins and says “lemonade!” — disappointment flips into a plan almost instantly.',
          'They chop the lemon tree down in a rage.'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'A lemon. A sour, pucker-faced lemon — not the sweet surprise they’d imagined. The droop lasts about three seconds. Then a grin spreads: “LEMONADE!” And just like that, the disappointment becomes a stand.',
        hint: 'How LONG does the disappointment last? What replaces it?',
        explanation: 'Resilience has a tell: the speed of the pivot. A three-second droop followed by a grin and a plan shows disappointment processed, not buried. Readers who catch the quick grin are watching emotional agility in action.'
      },
      {
        id: 'fr2-9',
        question: 'At the fair they win a beach ball. During the game, how would a socially sharp player know it’s someone else’s turn?',
        options: [
          'Wait until someone yells at you to share.',
          'Notice who hasn’t had the ball in a while and pass it their way — without being asked.',
          'Keep the ball until you’re personally bored of it.',
          'Only pass to whoever shouts the loudest.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'The beach ball arcs between them in the sunshine — and the game stays fun because the ball keeps moving. Nobody has to demand a turn; the turns just… come.',
        hint: 'The best sharers don’t wait to be asked. What are they quietly tracking?',
        explanation: 'Turn-taking is a tracking skill: noticing who’s been waiting, who hasn’t touched the ball, and passing before anyone asks. The cue is in the counting — socially sharp players keep score so nobody else has to.'
      },
      {
        id: 'fr2-10',
        question: 'The beach day ends with both friends quietly watching the sunset. What does sharing a quiet, beautiful moment tell you?',
        options: [
          'That they’re simply too tired to talk.',
          'That the day was actually boring.',
          'That they have nothing left to say to each other.',
          'That some of the best friendship moments need no words at all — being present together is enough.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'The long beach day closes the way it should: two friends side by side, watching the sun melt into the water. No jokes, no plans — just shared sky and shared quiet.',
        hint: 'Remember the book’s opening — cloud gazing. How does the day END?',
        explanation: 'The sunset mirrors the opening clouds: the book begins and ends in comfortable shared quiet. That framing is the author’s biggest cue — presence itself, simply being there together, is the heart of the friendship.'
      }
    ]
  },
  {
    id: 'fox-and-rabbit-make-believe',
    title: 'Fox & Rabbit: Make Believe',
    author: 'Beth Ferry',
    coverEmoji: '🦉',
    themeColor: 'teal',
    readingLevel: 'Grades 1 - 4 (Ages 6-9)',
    synopsis: 'The second Fox & Rabbit graphic novel celebrates the magic of making believe — and making new friends. When imaginative Owl joins the circle, Fox must learn that friendship only grows bigger. Five funny stories, from ice cream to a corn maze to pumpkin carving.',
    questions: [
      {
        id: 'mb-1',
        question: 'When Owl becomes friends with Rabbit, Fox worries there might not be “enough friendship to go around.” What does Fox learn by the end?',
        options: [
          'That he should tell Rabbit to stop being friends with Owl.',
          'That friendship isn’t like a pie — welcoming Owl doesn’t make his friendship with Rabbit any smaller.',
          'That he should find a different best friend who has no other friends.',
          'That feeling jealous means Rabbit was never really his friend.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'Fox and Rabbit are the very best of friends — they do everything together. But when they meet a new friend, Owl, Fox isn’t so sure if there’s enough friendship to go around. Soon, Fox learns that it’s easy to be friends with Rabbit and Owl.',
        hint: 'Think about a pie: when you share it, there’s less for you. Is friendship like that?',
        explanation: 'Friendship isn’t a pie — it doesn’t get smaller when shared. Welcoming a new friend makes the circle bigger, not anyone’s piece smaller. Jealousy is a normal feeling, and it fades once you see there’s room for everyone.'
      },
      {
        id: 'mb-2',
        question: 'What do Fox and Rabbit do when they meet Owl, the new friend with the wonderful imagination?',
        options: [
          'They ignore Owl and hope he goes away.',
          'They tell Owl he can only watch, not play.',
          'They make Owl pass a difficult test before he can join.',
          'They welcome Owl, and soon discover how much fun his big imagination is.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Fox and Rabbit meet Owl, a new friend with a wonderful imagination. Instead of shutting him out, they let him into their games — and together the three of them sail the high seas, get swallowed by a whale, and defeat evil woodchucks.',
        hint: 'What happens after Owl joins — do the adventures get smaller or bigger?',
        explanation: 'Welcoming a new friend takes courage, but it pays off: Owl’s imagination makes every game bigger and better. Including others is how friendships — and adventures — grow.'
      },
      {
        id: 'mb-3',
        question: 'On the playground, the three friends sail the high seas, get swallowed by a whale, and defeat evil woodchucks — all without ever leaving the playground! What makes their pretend play work so well?',
        options: [
          'They build on one another’s ideas and imagine together instead of arguing about whose story to play.',
          'Fox decides the whole story alone while the others just watch quietly.',
          'They take turns ruining one another’s ideas.',
          'Only Owl is allowed to imagine, since the games were his idea.'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'Exploring the depths of Owl’s big imagination, the trio sail the high seas, get swallowed by a whale, and defeat evil woodchucks — all from the comfort of the playground. Every adventure is built together, idea upon idea.',
        hint: 'In the best pretend games, do players say “no, my way!” or “yes, and then…”?',
        explanation: 'Great pretend play runs on cooperation: each friend adds to the story instead of fighting over it. Saying “yes, and…” to one another’s ideas is what turns a playground into an ocean.'
      },
      {
        id: 'mb-4',
        question: 'Flush with their lemonade-stand earnings from the first book, Fox and Rabbit could have spent the money only on themselves. What do they do instead?',
        options: [
          'They hide the money so nobody else gets any.',
          'They spend it all on themselves and brag about it.',
          'They treat themselves AND their friends to ice cream.',
          'They argue about who earned more and split up the coins.'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'Flush with their lemonade-stand earnings, Fox and Rabbit start their summer by treating themselves — and their friends — to ice cream. The whole circle gets a scoop.',
        hint: 'Who gets ice cream in the first story — just Fox and Rabbit, or more friends too?',
        explanation: 'Good friends share their good fortune. Spending the lemonade money on ice cream for everyone turns a treat into a celebration — generosity is what makes friends want to stick around.'
      },
      {
        id: 'mb-5',
        question: 'After the bubble-gum blowing contest ends in disaster, Fox needs a trip to the hairdresser and ends up with a truly bad haircut. How do good friends act when a friend feels embarrassed?',
        options: [
          'They laugh at him and take photos to show everyone at school.',
          'They are kind about it and don’t tease him over something he already feels bad about.',
          'They pretend they don’t know him until his fur grows back.',
          'They tell him he deserved it for chewing so much gum.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'The bubble-gum blowing contest goes wrong — disastrously wrong for Fox’s fur — and ends with an emergency haircut that leaves Fox embarrassed. His friends don’t make it worse; they stick by him through the bad haircut, just as they share the good things like ice cream.',
        hint: 'When you feel embarrassed, does teasing make it better or worse?',
        explanation: 'Everyone has embarrassing moments. A good friend doesn’t pile on with teasing when someone already feels bad — kindness when a friend is down is what trust is built on.'
      },
      {
        id: 'mb-6',
        question: 'Fox enters the bubble-blowing contest full of confidence, and it ends with gum tangled through his fur — a total disaster! What’s the good-sport way to handle it?',
        options: [
          'Blame Rabbit for handing him the gum.',
          'Throw a tantrum and ruin everyone else’s fun too.',
          'Swear never to try anything new ever again.',
          'Laugh it off, clean up, and try again another day.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'The bubble-blowing contest is a fiasco for Fox — gum everywhere, fur ruined, haircut required. But the day goes on: there are playground adventures, a corn maze, and pumpkins waiting. One disaster doesn’t end the summer.',
        hint: 'After the gum disaster, does Fox’s summer end — or do the adventures keep coming?',
        explanation: 'Being a good sport means handling a flop with grace: no blaming, no tantrums. Laugh, clean up, and keep going — resilience turns a disaster into just a funny story later.'
      },
      {
        id: 'mb-7',
        question: 'Fox, Rabbit, and Owl get lost in a twisty corn maze. What helps them find their way out?',
        options: [
          'They stay calm, stick together, and work as a team instead of blaming one another.',
          'They each run in different directions, screaming.',
          'Fox blames Owl for getting them lost in the first place.',
          'They sit down in the corn and wait for someone else to rescue them.'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'In one story the friends wander into a corn maze and lose their way among the tall stalks. Nobody panics alone and nobody points fingers — they puzzle it out together and escape as a team.',
        hint: 'When you’re lost, does blaming each other help you find the exit?',
        explanation: 'Teamwork matters most when things go wrong. Staying calm, sticking together, and solving the problem as a team beats panic and blame every time — in a corn maze and everywhere else.'
      },
      {
        id: 'mb-8',
        question: 'Turtle is so slow that he usually misses out on most of the action. How do the friends treat Turtle?',
        options: [
          'They leave without him, since he’s too slow to be fun.',
          'They make fun of him for always arriving last.',
          'They keep including him anyway — a good friend is worth waiting for.',
          'They tell him he’s not invited to adventures anymore.'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'Turtle tends to miss everything due to chronic tardiness, yet he keeps showing up in the friends’ circle — at the ice cream outing, around the playground, and at the pumpkin carving. Nobody leaves him behind for being slow.',
        hint: 'Is Turtle ever kicked out of the group for being late?',
        explanation: 'Friends come at different speeds. Patient friends don’t ditch someone for being slow — they save Turtle a seat and a scoop. Inclusion means everyone belongs, even if they arrive last.'
      },
      {
        id: 'mb-9',
        question: 'Sparrow loves to eat — he’s hungry in every single story! How do the friends handle Sparrow’s enormous appetite?',
        options: [
          'They hide all the food whenever Sparrow comes around.',
          'They tell Sparrow he’s not welcome at picnics anymore.',
          'They scold him for eating too much.',
          'They accept him as he is and share their snacks.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Ever-hungry Sparrow pops up in story after story, always ready for a bite. The friends never shame him for it — from the ice cream outing to the pumpkin party, there’s always room (and food) for Sparrow.',
        hint: 'Do the friends ever try to change Sparrow, or do they just make room for him?',
        explanation: 'Every friend has quirks. Good friends don’t shame or exclude someone for being themselves — they accept Sparrow’s appetite the way they accept Turtle’s slowness, with room at the table.'
      },
      {
        id: 'mb-10',
        question: 'The book ends with the whole gang carving jack-o-lanterns together as summer turns to fall. Why is this the perfect ending for a book about friendship?',
        options: [
          'Because pumpkin carving is a competition, and winning is what matters.',
          'Because it shows the whole circle of friends — old and new — enjoying something together.',
          'Because it proves Fox and Rabbit don’t need anyone else.',
          'Because Halloween candy is the true meaning of friendship.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'The final story is an idyllic afternoon carving pumpkins — Fox, Rabbit, Owl, Sparrow, Turtle, all together as the season turns to fall. The circle that started as two now holds everyone.',
        hint: 'Who is at the pumpkin carving — just Fox and Rabbit, or the whole gang?',
        explanation: 'The pumpkin party shows how far the friendship has grown: from two friends to a whole circle, old and new alike. Celebrating together is the reward for every lesson — welcoming, sharing, and sticking together.'
      }
    ]
  },
  {
    id: 'fox-and-rabbit-make-believe-cues',
    title: 'Fox & Rabbit: Make Believe — Social Cues',
    author: 'Beth Ferry',
    coverEmoji: '🔍',
    themeColor: 'cyan',
    readingLevel: 'Grades 1 - 4 (Ages 6-9)',
    synopsis: 'A companion quiz for Fox & Rabbit: Make Believe that tests whether readers catch the subtle social cues — unspoken jealousy, masked embarrassment, quiet disappointment, and the difference between laughing with and laughing at.',
    questions: [
      {
        id: 'mb2-1',
        question: 'Fox never actually says the words “I’m jealous” when Owl joins the group. How can a careful reader tell that’s what he’s feeling?',
        options: [
          'Fox tells Owl to go away and never come back.',
          'Fox goes quiet, forces a smile, and hovers close to Rabbit — his behavior shows the feeling his words don’t say.',
          'Fox writes an angry letter about Owl.',
          'You can’t tell at all; feelings are completely invisible.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'When Owl joins the circle, Fox never announces “I’m jealous.” Instead he changes: he goes quieter than usual, his smiles look forced, and he sticks extra close to Rabbit — as if guarding a treasure.',
        hint: 'If the words don’t say it, where else can feelings show up?',
        explanation: 'Feelings leak through behavior. Going quiet, forcing smiles, and hovering close are classic signs of jealousy. Reading social cues means noticing what bodies and behavior say when words stay silent.'
      },
      {
        id: 'mb2-2',
        question: 'Imagine you’re Owl, joining two best friends who already share a hundred inside jokes. How might Owl be feeling at first, even while smiling?',
        options: [
          'Completely relaxed, as if he’s known them for years.',
          'Angry at Fox and Rabbit for being friends before he arrived.',
          'Bored — new groups are never interesting.',
          'A little nervous and left-out, hoping they’ll really let him in.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Owl arrives full of imagination and big smiles — but he’s stepping into an established duo where Fox and Rabbit already do everything together, and Fox isn’t sure about sharing at first.',
        hint: 'Think about the first day at a new school: you smile, but what’s happening underneath?',
        explanation: 'This is perspective-taking: imagining life in someone else’s paws. Being the new kid feels wobbly even behind a smile. Noticing that helps you welcome newcomers with extra kindness.'
      },
      {
        id: 'mb2-3',
        question: 'After the disastrous haircut, Fox insists he’s “totally fine” — but is he? What cue tells the real story?',
        options: [
          'His drooping ears and the way he avoids mirrors say otherwise — bodies tell the truth when words don’t.',
          'He throws a party to celebrate the wonderful haircut.',
          'He immediately asks for an even shorter haircut.',
          'Words are always true, so he must be perfectly fine.'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'The emergency haircut leaves Fox looking nothing like himself. “Totally fine!” he declares — while his ears droop, he dodges every mirror, and his usual bounce is gone.',
        hint: 'Compare what Fox SAYS with what Fox’s BODY does. Which one do you trust?',
        explanation: 'People often mask embarrassment with brave words. The subtle cue is the mismatch: drooping ears and mirror-dodging reveal the real feeling. Trust body language when words and bodies disagree.'
      },
      {
        id: 'mb2-4',
        question: 'Sparrow swoops in and eats half the picnic snacks every single time. Is Sparrow being rude?',
        options: [
          'Yes — eating a lot always means someone is rude.',
          'Yes, and the friends should ban him from picnics.',
          'Not really — that’s just Sparrow being Sparrow, and the friends know his heart is kind.',
          'Yes, so they should hide all the food whenever he appears.'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'Ever-hungry Sparrow appears in story after story, always ready for a bite. Nobody scolds him or hides the snacks — from the ice cream outing to the pumpkin party, there’s always room (and food) for Sparrow.',
        hint: 'Do the friends treat Sparrow like a villain — or like family?',
        explanation: 'Reading people means separating intent from impact. Sparrow isn’t trying to be rude; big appetite is simply who he is. Knowing someone’s kind heart lets you read their behavior generously instead of judging it.'
      },
      {
        id: 'mb2-5',
        question: 'Turtle arrives at the pumpkin-carving party after most pumpkins are already carved. He smiles and says “looks fun!” — but what might he be feeling underneath?',
        options: [
          'Pure joy — latecomers never feel bad about missing out.',
          'A twinge of disappointment at missing the fun, hidden under a brave smile.',
          'Burning anger at his friends for starting without him.',
          'Nothing at all — turtles don’t have feelings.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'Chronically tardy Turtle hurries in to find the pumpkin table nearly finished — jack-o-lanterns grinning everywhere. “Looks fun!” he says brightly, a little too brightly, eyeing the one uncarved pumpkin left.',
        hint: 'When have YOU smiled while feeling a little sad inside? What did that feel like?',
        explanation: 'Quiet disappointment often hides behind a brave smile — especially for someone who’s used to arriving late. A socially sharp reader catches it, and a kind friend responds by saving Turtle a pumpkin and a seat.'
      },
      {
        id: 'mb2-6',
        question: 'Before the bubble-blowing contest, Fox brags loudly about how he’ll blow the biggest bubble ever. What is Fox really doing?',
        options: [
          'Lying to everyone on purpose.',
          'Being mean to the other contestants.',
          'Cheating at the contest before it starts.',
          'Showing off because he wants admiration — bragging often covers up nerves.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Fox struts into the bubble-blowing contest announcing his coming victory to anyone who’ll listen — the loudest bragger on the playground. Minutes later, gum is tangled through his fur.',
        hint: 'Why do people brag the loudest right before something hard? What might they be feeling?',
        explanation: 'Bragging is often a mask for nerves or a bid for admiration, not true confidence. Reading that cue keeps you from being annoyed — and reminds you that the bragger might need encouragement, not an audience.'
      },
      {
        id: 'mb2-7',
        question: 'Lost in the corn maze, Owl points left and declares “I’m SURE it’s this way!” — but he’s wrong. What’s the respectful way to disagree?',
        options: [
          '“Let’s check together — we can try your way first, then mine if it dead-ends.”',
          '“You’re wrong, dummy. Follow me.”',
          'Silently follow even though you know it’s wrong, then say “I told you so.”',
          'Refuse to move another step until Owl admits he’s lost.'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'Deep in the corn maze, Owl points left with total confidence — and total wrongness. The moment hangs there: someone has to disagree with the friend who just led them astray.',
        hint: 'Which answer disagrees with the IDEA while still respecting the PERSON?',
        explanation: 'Disagreeing respectfully is a core social skill: challenge the idea (“let’s check together”) without attacking the person. Mockery, silent score-keeping, and ultimatums all poison teamwork; curiosity saves it.'
      },
      {
        id: 'mb2-8',
        question: 'At the ice cream store, Rabbit lets Fox pick his flavor first, even though Rabbit already knows exactly what he wants. What does this small moment show?',
        options: [
          'Rabbit doesn’t actually like ice cream at all.',
          'Rabbit is afraid of Fox.',
          'Rabbit is being considerate — small kindnesses are how friends show love.',
          'Rabbit forgot what his favorite flavor is.'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'At the ice cream store, Rabbit already knows his order by heart — yet he waves Fox ahead: “You first.” It’s a tiny moment, easy to miss between the sprinkles and the scoops.',
        hint: 'Big speeches aren’t the only way to show love. Where else can it hide?',
        explanation: 'Love often hides in small, easy-to-miss choices: letting a friend go first, saving the last bite, remembering a favorite flavor. Socially sharp readers collect these tiny kindnesses — they’re the real story of a friendship.'
      },
      {
        id: 'mb2-9',
        question: 'After Fox’s bad haircut, the friends laugh together about the bubble-gum disaster. What’s the difference between this laughter and mean teasing?',
        options: [
          'There is no difference — all laughing is mean.',
          'They’re laughing WITH Fox at the silly situation, not AT him — and Fox is laughing too.',
          'It’s only okay because Fox has a bad haircut.',
          'Mean teasing is fine as long as everyone can hear it.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'In the haircut’s aftermath, the whole group ends up giggling about the great gum catastrophe — and Fox, ears still drooping, giggles along with them. Nobody is the butt of the joke; the situation is.',
        hint: 'Here’s the test: is the person being laughed about laughing too?',
        explanation: 'The subtle cue is inclusion: laughing WITH means the person is in on the joke and smiling too; laughing AT means someone is the target and hurting. Check who’s laughing — it tells you everything.'
      },
      {
        id: 'mb2-10',
        question: 'During the whale adventure, how can you tell the pretend game is working for everyone — not just one person bossing the story?',
        options: [
          'One person does all the talking while the others just watch.',
          'Someone cries and quits the game halfway through.',
          'Owl decides everything because the game was his idea.',
          'Everyone adds ideas, everyone gets a part, and nobody is left out of the fun.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'The high-seas adventure works because it’s built together: Owl dreams up the whale, Fox steers the ship, Rabbit spots the woodchucks — every friend shapes the story, and every friend gets a starring moment.',
        hint: 'In a healthy game, does the fun belong to one captain or the whole crew?',
        explanation: 'Reading the room in group play means checking participation: balanced ideas, shared starring roles, nobody sidelined. When everyone’s fingerprints are on the fun, the game is healthy — that’s the cue.'
      }
    ]
  },
  {
    id: 'fox-rabbit-celebrate',
    title: 'Fox & Rabbit: Celebrate',
    author: 'Beth Ferry',
    coverEmoji: '🍕',
    themeColor: 'pink',
    readingLevel: 'Grades 1 - 4 (Ages 6-9)',
    synopsis: 'The third Fox & Rabbit graphic novel: five funny stories about Sparrow’s birthday, the world’s biggest pizza, and a lonely Dragon who has never had a friend. A celebration of courage, kindness, and including everyone.',
    questions: [
      {
        id: 'frc-1',
        question: 'What are Fox and Rabbit making for Sparrow’s birthday?',
        options: [
          'The world’s biggest birthday cake',
          'The world’s biggest pizza — with Owl’s help',
          'A giant ice cream sundae',
          'A tower of pancakes'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'Sparrow loves food, so Fox and Rabbit team up with Owl to create the world’s biggest pizza for Sparrow’s birthday — a humongous, cheesy masterpiece.',
        hint: 'What food does the whole plan revolve around — and who helps make it?',
        explanation: 'They make the world’s biggest pizza for Sparrow’s birthday, teaming up with Owl to pull it off.'
      },
      {
        id: 'frc-2',
        question: 'What problem stops them from finishing the giant pizza?',
        options: [
          'They run out of cheese',
          'Sparrow decides he doesn’t like pizza',
          'Dragon eats all the dough',
          'They don’t have the world’s biggest oven to bake it in'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'The giant pizza is built — but then the friends stare at each other. Their oven is far too small. “We don’t have the world’s biggest oven!” Rabbit groans.',
        hint: 'The pizza is huge — what does a huge pizza need that they don’t have?',
        explanation: 'They have no oven big enough to bake the world’s biggest pizza — so they must find another way.'
      },
      {
        id: 'frc-3',
        question: 'In the first story, what does Fox try to do for the other animals?',
        options: [
          'Fix their household problems',
          'Teach them all to read',
          'Build them a playground',
          'Cook dinner for the whole woods'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'Before the birthday plans begin, Fox hurries from burrow to burrow with a toolbox, trying to fix everyone’s household problems — a wobbly chair here, a leaky roof there.',
        hint: 'What is Fox carrying from burrow to burrow?',
        explanation: 'Fox tries to fix the other animals’ household problems — his good intentions kick off the book.'
      },
      {
        id: 'frc-4',
        question: 'Fox and Rabbit have never met Dragon, and they worry Dragon might like eating foxes and rabbits more than pizza. They go ask for help anyway. What does this show?',
        options: [
          'They are not afraid of anything at all',
          'They don’t care about staying safe',
          'Real courage means feeling scared and going anyway — especially to befriend someone new',
          'Dragons are never dangerous'
        ],
        correctAnswerIndex: 2,
        samplePassage: '“Dragon hopefully likes to eat pizza, not foxes or rabbits…” Fox gulps. Rabbit squeezes his paw. “Together?” “Together.” And off they go to meet Dragon.',
        hint: 'Are they unafraid — or afraid but going together?',
        explanation: 'They feel the fear and go anyway, together. That’s real courage — and it’s how new friendships begin.'
      },
      {
        id: 'frc-5',
        question: 'Dragon has never had a friend and never been to a birthday party. What do Fox and Rabbit do?',
        options: [
          'They invite Dragon to join the party and become friends',
          'They feel sorry for Dragon but leave him alone',
          'They decide Dragon is too different to join in',
          'They ask Dragon to stay hidden while the party happens'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'Dragon shuffles shyly. “I’ve never had a friend. I’ve never been to a birthday party.” Fox grins wide. “Then this will be your first of both!”',
        hint: 'Do they protect the party FROM Dragon — or share it WITH him?',
        explanation: 'They don’t just accept Dragon’s help — they include him fully: first friend, first party. Including the left-out is the whole point.'
      },
      {
        id: 'frc-6',
        question: 'When the giant pizza can’t be baked, Fox and Rabbit don’t give up — they ask Dragon for help. What’s the social skill here?',
        options: [
          'Never start anything you can’t finish all by yourself',
          'Asking for help is smart and brave, not weak',
          'Only Dragons are worth asking for help',
          'Big problems should just be abandoned'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'No oven, no pizza — disaster! But instead of quitting, Fox and Rabbit think of someone who could help: Dragon. Asking feels scary, but they do it anyway.',
        hint: 'Is asking for help giving up — or is it a strategy?',
        explanation: 'Asking for help is a strength, not a weakness. Smart friends don’t quit at the hard part — they recruit help.'
      },
      {
        id: 'frc-7',
        question: 'Fox tries to fix everyone’s household problems — and some fixes go hilariously wrong! What’s the kind-but-wise lesson about helping?',
        options: [
          'Never help anyone, ever',
          'Only help your very best friends',
          'Helping means doing absolutely everything yourself',
          'Good intentions matter — but good helping means checking what someone actually needs first'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Fox means well with every repair — but a “fixed” chair wobbles worse than before! Rabbit gently suggests: maybe ask what each friend actually needs before hammering away.',
        hint: 'Is the problem that Fox cares — or that he didn’t ask first?',
        explanation: 'Caring isn’t the problem; bulldozing is. The wise way to help: ask what’s actually needed before jumping in with the toolbox.'
      },
      {
        id: 'frc-8',
        question: 'This adventure “celebrates the ways in which differences can bring friends together.” What does Dragon add to the group?',
        options: [
          'Nothing — the friends were perfectly fine without him',
          'Only a way to bake the pizza',
          'A brand-new friend with his own special gifts — differences make the circle richer',
          'Trouble for everyone at the party'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'By the party’s end, Dragon isn’t just the oven-solver — he’s laughing, dancing, and belonging. The group is bigger, warmer, and more wonderful with him in it.',
        hint: 'Is Dragon just useful — or is he family now?',
        explanation: 'Dragon brings more than help: a whole new friend. Differences don’t divide the circle — they enrich it.'
      },
      {
        id: 'frc-9',
        question: 'Dragon has “never had a friend or been to a birthday party.” What can you infer about why Dragon stayed away from everyone?',
        options: [
          'Dragons simply hate parties',
          'Dragon was probably lonely and unsure he’d be welcome — hiding felt safer than risking rejection',
          'Dragon was far too busy to make friends',
          'The other animals had banned Dragon'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'Dragon lives apart from everyone, never visiting, never invited. When Fox and Rabbit finally knock, Dragon’s eyes go wide — as if no one has ever knocked before.',
        hint: 'If no one has ever knocked on your door, would you feel confident knocking on theirs?',
        explanation: 'You can infer Dragon stayed away from loneliness and fear of rejection — not from dislike. Being unwelcomed teaches you to stop trying, until someone kind knocks.'
      },
      {
        id: 'frc-10',
        question: 'The book ends with a humongous pizza and a fun party with all the animals of the woods — Dragon included. How does it feel?',
        options: [
          'Scary and tense',
          'Sad and quiet',
          'Boring and ordinary',
          'Warm and joyful — everyone together, everyone belonging'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Pizza for everyone! The whole woods gathers — Sparrow, Owl, Fox, Rabbit, and Dragon right in the middle of it all, grinning. No one is left out.',
        hint: 'A giant pizza, all your friends, nobody left out — what feeling fits?',
        explanation: 'The tone is warm and joyful: the glow of a true celebration, where everyone belongs.'
      }
    ]
  },
  {
    id: 'wimpy-kid-double-down-cues',
    title: 'Diary of a Wimpy Kid: Double Down — Social Cues',
    author: 'Jeff Kinney',
    coverEmoji: '🎬',
    themeColor: 'red',
    readingLevel: 'Grades 3 - 7 (Ages 8-12)',
    synopsis: 'A social-cues quiz for Diary of a Wimpy Kid: Double Down (Book 11) — reading fame-changed friends, masked fears, what parents are really upset about, and knowing when to quit a collapsing plan.',
    questions: [
      {
        id: 'dd2-1',
        question: 'After the tree rescue, Rowley does TV interviews and never once mentions Greg — even though Greg’s movie plan is what made him famous. What does this tell a careful reader about Rowley right now?',
        options: [
          'Rowley is just too shy to talk on camera.',
          'Fame has gone to Rowley’s head — he’s acting like the world revolves around him and forgetting who helped him get there.',
          'Rowley has completely forgotten who Greg is.',
          'Rowley is being humble on purpose.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'The fire-department rescue lands Rowley on the local news, then talk shows — he even skips school for interviews. Greg watches every one, waiting to hear his name. It never comes.',
        hint: 'Watch what success DOES to Rowley’s behavior — who does he remember, and who does he forget?',
        explanation: 'Success changes how people act, and the cue is in what they forget. Rowley skipping school for talk shows and never crediting Greg shows fame has gone to his head. Noticing when a friend’s success rewrites the friendship is a sharp social read.'
      },
      {
        id: 'dd2-2',
        question: 'Susan keeps arranging playdates with Maddox, a boy whose house has no TV, no video games, no electronics at all. What is Susan REALLY hoping will happen?',
        options: [
          'That Maddox will teach Greg to build giant Lego cities.',
          'That Greg will finally win the candy corn prize.',
          'That the two moms can enjoy coffee together in town.',
          'That Maddox will be a “good influence” and pull Greg away from screens.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Susan is disappointed that Greg spent her book-fair money on junk instead of books, and she’s convinced he has “hidden talents” being wasted on video games. So she befriends Maddox’s mom and engineers playdate after playdate.',
        hint: 'What has Susan been complaining about? Match the playdates to the complaint.',
        explanation: 'Adults often act on hopes they don’t state outright. Susan never says “I’m using Maddox to fix you” — but the pattern (complaints about screens + a screen-free role model + repeated playdates) reveals the real agenda. Reading the pattern behind the action is the cue.'
      },
      {
        id: 'dd2-3',
        question: 'Greg is convinced his whole life is a reality show and everyone around him is an actor — he even thinks Manny was “brought in” as a new star to replace him. What does this theory reveal about how Greg sees other people?',
        options: [
          'He sees them as supporting characters in HIS story, not as people with their own lives.',
          'He deeply respects everyone’s privacy and inner life.',
          'He secretly wants to become a television director.',
          'Nothing at all — it’s just a joke he doesn’t really believe.'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'Greg lays out his grand theory: Rodrick, Manny, everyone — all actors and robots in a show about HIM. Manny isn’t a little brother; he’s a replacement star. Even Nana is watching from heaven like an audience member.',
        hint: 'In Greg’s theory, whose story is the only one that matters?',
        explanation: 'How someone describes others reveals how they see them. Casting everyone as actors in your show means you’re not really seeing them as people with their own stories. Spotting self-centered framing — in Greg or in real life — is a key social cue.'
      },
      {
        id: 'dd2-4',
        question: 'When Greg shows Maddox a computer game, Maddox — who has never seen one before — goes absolutely wild. Should Greg conclude that Maddox is badly behaved?',
        options: [
          'Yes — going wild always means bad behavior.',
          'Yes, and Greg should make sure they never meet again.',
          'No — Maddox has never encountered a video game; his reaction is pure novelty, not naughtiness.',
          'Yes — which proves Susan’s role-model plan worked perfectly.'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'At the first playdate, Greg fires up a computer game and Maddox loses his mind with excitement — the kid has no TV, no games, no electronics at home. It’s all brand new to him.',
        hint: 'Before judging the reaction, ask: what is Maddox’s NORMAL? Has he ever seen this before?',
        explanation: 'Behavior means different things in different contexts. Maddox isn’t misbehaving — he’s experiencing something for the first time. The cue is to check someone’s background before judging their reaction; novelty looks a lot like naughtiness if you skip that step.'
      },
      {
        id: 'dd2-5',
        question: 'At Maddox’s house, Maddox shows off his giant Lego city but only lets Greg use the leftover bricks — then accuses Greg of stealing when a brick gets stuck in Greg’s arm. What cue tells you Maddox doesn’t really want to share?',
        options: [
          'Maddox’s house is old-fashioned and has no electronics.',
          'He guards the good pieces, offers only scraps, and assumes the worst the instant something goes wrong.',
          'He invited Greg over in the first place.',
          'Greg’s arm is simply too small for Lego bricks.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'Maddox unveils a glorious Lego city — then hands Greg the sad leftover pile. When a brick wedges painfully in Greg’s arm, Maddox doesn’t ask if he’s okay; he accuses Greg of stealing and kicks him out.',
        hint: 'Forget the invitation. Watch the SHARING: who gets the good pieces, and what happens at the first accident?',
        explanation: 'Real generosity shows in the details: which pieces you’re offered, and whether accidents get compassion or accusations. Guarding the good stuff plus instant blame is the classic cue of someone who invited you over but never intended to share.'
      },
      {
        id: 'dd2-6',
        question: 'After the witch decoration shrieks and the shelf crashes down, Rowley sprints outside, climbs a tree in a towel, babbles nonsense, and refuses to come down. How does Greg know Rowley is truly terrified — not just acting?',
        options: [
          'Rowley is secretly a brilliant actor.',
          'Rowley planned the whole scene for the news cameras.',
          'Rowley is laughing the entire time.',
          'Rowley won’t respond to reason, won’t come down even for Greg, and babbles — real panic doesn’t take direction.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'The electronic witch screams, the storage unit collapses, and Rowley bolts — out of the house, up the tree, babbling. Greg tries talking, then tries knocking him down with tennis balls. Rowley only climbs higher.',
        hint: 'Actors take direction. What does Rowley do when Greg tries to direct him?',
        explanation: 'Real fear has tells that acting doesn’t: unresponsiveness to reason, escalating instead of calming, babbling. When someone can’t be talked or coaxed down, you’re seeing genuine panic — and the kind response is comfort, not tennis balls.'
      },
      {
        id: 'dd2-7',
        question: 'Greg is mid-swing with a tennis racket, trying to knock Rowley out of the tree, when Dad’s car pulls into the driveway. How does Greg know he’s in enormous trouble before Dad says a single word?',
        options: [
          'Dad’s thunderous face, the slammed car door, and the frozen silence say everything — you can read trouble before anyone speaks.',
          'Dad waves hello cheerfully and asks to join in.',
          'Dad grabs a racket to help knock Rowley down.',
          'Greg doesn’t know; he assumes Dad will find it hilarious.'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'Frank Heffley arrives home to a tableau: the yard in chaos, a shelf’s worth of Halloween decorations everywhere, Rowley treed in a towel, Greg armed with a tennis racket — and a news crew filming it all.',
        hint: 'Close your eyes and picture Dad’s face in that driveway. What does it say?',
        explanation: 'Some of the fastest social reading we do is on a parent’s face: the set jaw, the slammed door, the silence before the storm. Greg doesn’t need words to know. Learning to read that early-warning face is a survival skill every kid develops.'
      },
      {
        id: 'dd2-8',
        question: 'Susan is furious about the movie disaster — but is it really about the mess in the furnace room? What is she actually upset about?',
        options: [
          'The geese eating all the gummy worms.',
          'The cost of the wasted tennis balls.',
          'Greg filmed OVER the tape of Manny’s first steps — an irreplaceable memory is gone forever.',
          'The news crew parking their van on the lawn.'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'The camera Greg and Rowley used belonged to Susan and Frank — and the “blank” tape they recorded their worm movie onto already held something: Manny’s first steps. Susan’s fury isn’t about clutter; it’s about what can never be re-recorded.',
        hint: 'Mess can be cleaned up. What did Greg destroy that CAN’T be cleaned up?',
        explanation: 'Anger is often about the deeper loss, not the surface mess. Susan’s real grief is the erased first-steps tape — a memory no chore can restore. The cue: when someone’s reaction seems bigger than the situation, look for the irreplaceable thing underneath.'
      },
      {
        id: 'dd2-9',
        question: 'Greg brags about reading the Spineticklers horror books — then has nightmares, including one where he grows a tail and everyone’s jealous of it. What cue reveals the books actually scare him?',
        options: [
          'He reads them twice as fast as normal books.',
          'He boasts about them by day but has bad dreams by night — the nightmares expose what the bragging hides.',
          'He recommends them enthusiastically to Rowley.',
          'He writes a fan letter to the author, I.M. Spooky.'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'After Susan makes him trade his book-fair junk for actual books, Greg picks the Spineticklers horror series and talks big about them. Then the dreams start — vivid, ridiculous, unmistakably scared dreams.',
        hint: 'Compare daytime Greg with nighttime Greg. Which one is performing?',
        explanation: 'Bragging is often a mask, and the mask slips when we sleep. Daytime boasts versus nighttime nightmares is the classic mismatch cue: what someone claims to handle versus what their dreams say they can’t. Trust the dreams.'
      },
      {
        id: 'dd2-10',
        question: 'Under the kitchen table, with geese pecking at the windows and Rowley panicking, Greg’s brilliant movie plan has completely collapsed. What’s the cue that it’s time to abandon the plan?',
        options: [
          'Keep filming no matter what — a real director never abandons a plan.',
          'Blame Rowley for everything going wrong.',
          'Pretend the geese aren’t there and stick to the script.',
          'When your plan has trapped you in your own house and terrified your friend, the plan — not the friend — is the problem.'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Greg and Rowley crouch under the kitchen table, plotting their next move while angry geese patrol outside. The “masterpiece” is in ruins — and Rowley is coming apart.',
        hint: 'Who is the plan serving right now — and who is it hurting?',
        explanation: 'Knowing when to quit is a social skill, not a failure. The cue is the cost: when the plan endangers people and the friendship, doubling down is the real mistake. Smart readers — and smart friends — recognize when the plan has become the villain.'
      }
    ]
  },
  {
    id: 'rowley-jefferson-awesome-friendly-adventure',
    title: "Rowley Jefferson's Awesome Friendly Adventure",
    author: 'Jeff Kinney',
    coverEmoji: '🐉',
    themeColor: 'blue',
    readingLevel: 'Grades 3 - 7 (Ages 8-12)',
    synopsis: "Rowley Jefferson writes his own fantasy adventure — Roland and Garg the Barbarian's quest to save Roland's mom from the White Warlock — while Greg critiques every chapter. A quiz about social cues: handling criticism, showing respect, and the kindness of heroes.",
    questions: [
      {
        id: 'rja-1',
        question: 'Who are the two heroes of Rowley’s adventure story, and what is their quest?',
        options: [
          'Sherlock Holmes and Stephen, solving mysteries',
          'Roland and Garg the Barbarian, questing to save Roland’s mom from the White Warlock',
          'Santa and the One-Eyed Wizard, delivering presents',
          'Christoph and Shae’Vana, trying to break a curse'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'Rowley’s story opens with two friends leaving their safe village: Roland, a kind young hero, and Garg the Barbarian, his big best friend. Their mission: rescue Roland’s mother from the evil White Warlock.',
        hint: 'Which pair leaves their village to rescue a mom?',
        explanation: 'The heroes are Roland and his best friend Garg the Barbarian, on a quest to save Roland’s mother from the White Warlock.'
      },
      {
        id: 'rja-2',
        question: 'Who does the White Warlock turn out to be?',
        options: [
          'Greg wearing a disguise',
          'Roland’s long-lost father',
          'The One-Eyed Wizard’s best friend',
          'Santa Claus — and the One-Eyed Wizard is his jealous brother'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'At the climax, the terrifying White Warlock laughs “ho ho ho” — and Roland realizes the truth: it’s Santa Claus! The One-Eyed Wizard is Santa’s brother, who tricked Roland into helping him take revenge.',
        hint: 'What does “ho ho ho” make you think of?',
        explanation: 'The White Warlock is Santa Claus; the One-Eyed Wizard is Santa’s brother, jealous over getting Flag Day while Santa got Christmas.'
      },
      {
        id: 'rja-3',
        question: 'After each chapter, Greg tells Rowley everything he did wrong. How can Rowley tell this feedback isn’t really meant to help the story?',
        options: [
          'Greg’s notes are all about making things “cooler” and more marketable — never about the story’s heart',
          'Greg writes his notes in messy handwriting',
          'Greg uses too many big words',
          'Greg never actually reads the chapters'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'After every chapter, Greg lists everything Rowley did “wrong” — more fights, scarier monsters, cooler names. Rowley notices the notes never mention the story’s heart, only how to sell it.',
        hint: 'Is Greg trying to improve the story — or sell it?',
        explanation: 'Helpful feedback cares about the story itself; Greg’s notes only chase what’s “cool” and sellable — that’s the cue it isn’t really help.'
      },
      {
        id: 'rja-4',
        question: 'When Roland calls Christoph “this guy,” Shae’Vana insists he has a name. What is she teaching?',
        options: [
          'That werewolves are too dangerous for the team',
          'That nicknames are more fun than real names',
          'That using someone’s real name shows respect — “this guy” shrinks a person into a thing',
          'That she enjoys correcting people'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'Roland suggests leaving the cursed vampire behind, calling him “this guy.” Shae’Vana stops him cold: the vampire has a NAME — Christoph.',
        hint: 'How does it feel to be called “this guy” instead of your name?',
        explanation: 'Names carry respect. Shae’Vana’s cue: calling someone “this guy” erases them; using their name honors them.'
      },
      {
        id: 'rja-5',
        question: 'Greg keeps pushing Rowley to make the story bloodthirstier, but Rowley keeps writing his own way. What does this show about handling criticism?',
        options: [
          'You should always obey your critics',
          'You can hear feedback without letting it bulldoze your own voice',
          'Critics are always right about stories',
          'Rowley should quit writing'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'Chapter after chapter, Greg demands more battles and plot twists. Rowley listens politely — then keeps writing his own gentle, kind story anyway.',
        hint: 'Does Rowley stop writing — or stop being himself?',
        explanation: 'Rowley models healthy criticism-skills: listen politely, then protect your own voice. Feedback is advice, not orders.'
      },
      {
        id: 'rja-6',
        question: 'Greg loves the Christmas chapter and tries to trademark the word “kind.” What does this reveal about how Greg sees the story?',
        options: [
          'He has finally fallen in love with the story',
          'He is being generous with his business ideas',
          'He deeply understands Rowley’s message',
          'He sees the story as a product to sell, not a story to love'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Greg adores the Christmas ending — because holiday books sell — and immediately tries to trademark the word “kind.” Rowley just shrugs; he never wanted to sell anything.',
        hint: 'Is Greg excited about the meaning — or the money?',
        explanation: 'Greg’s excitement is commercial, not heartfelt — he values the story’s price tag over its message. Reading motives is a key social cue.'
      },
      {
        id: 'rja-7',
        question: 'After the wizard apologizes, Roland invites him and Righty to live with his family. What does this show?',
        options: [
          'True forgiveness can turn even enemies into family',
          'Roland’s house is enormous',
          'Wizards make the best roommates',
          'Roland forgot all the bad things the wizard did'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'The defeated One-Eyed Wizard apologizes for being a jerk. Roland doesn’t just forgive him — he invites the wizard AND Righty to come live with his family.',
        hint: 'Is forgiveness just saying “it’s okay” — or is it this?',
        explanation: 'Roland shows forgiveness in action: not just pardoning the wizard, but welcoming him home. Kindness includes the reformed.'
      },
      {
        id: 'rja-8',
        question: 'Rowley doesn’t care about getting published — he just wants his dad to read the story aloud at bedtime. What does this teach about creating things?',
        options: [
          'Publishing books is bad',
          'Only bedtime stories are worth writing',
          'The best reason to create is love — for the joy of it and the people you love, not for fame',
          'Fathers are the only good readers'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'Rowley says he doesn’t care about publishing or trademarks. He wrote the book for himself and his parents — all he wants is for his dad to read it aloud as a bedtime story, voices and all.',
        hint: 'Who is Rowley writing FOR?',
        explanation: 'Rowley creates from love, not ambition — the healthiest motive. His audience of three (himself, Mom, Dad) is plenty.'
      },
      {
        id: 'rja-9',
        question: 'The One-Eyed Wizard got Flag Day while his brother Santa got Christmas — and has been bitter ever since. What can you infer about his real motive?',
        options: [
          'He hates flags',
          'Sibling jealousy — he feels overlooked and less celebrated than his brother',
          'He wants to become the new Santa',
          'He is afraid of snow and winter'
        ],
        correctAnswerIndex: 1,
        samplePassage: 'The One-Eyed Wizard got Flag Day while his brother Santa got Christmas — and he’s been bitter ever since, tricking Roland into helping him take revenge.',
        hint: 'How would YOU feel if your brother got Christmas and you got Flag Day?',
        explanation: 'You can infer the motive is jealousy: being the less-celebrated brother curdled into revenge. Unspoken hurt feelings often drive bad behavior.'
      },
      {
        id: 'rja-10',
        question: 'The book ends with Santa giving presents, the wizard apologizing, and everyone celebrating Christmas together at Roland’s home. How does the ending feel?',
        options: [
          'Scary and dark',
          'Sad and lonely',
          'Confusing and strange',
          'Warm and joyful — everyone forgiven, everyone together'
        ],
        correctAnswerIndex: 3,
        samplePassage: 'Santa hands out presents, the wizard apologizes, Shae’Vana and Christoph ride off together, and everyone celebrates Christmas at Roland’s home — the best Christmas ever.',
        hint: 'Presents, apologies, couples, Christmas dinner — what feeling adds up?',
        explanation: 'The tone is warm and joyful: forgiveness all around, everyone together — the cozy glow of a happy ending.'
      },
      {
        id: 'rja-11',
        question: 'Santa names him “Roland the Kind.” What does this say about what kind of hero Roland is?',
        options: [
          'His greatest power is kindness — he wins by caring, not by being the toughest fighter',
          'He is the best-looking hero',
          'He was only kind one time',
          'Kindness is literally his only ability'
        ],
        correctAnswerIndex: 0,
        samplePassage: 'For his final gift, Santa doesn’t give Roland gold or a sword. He gives him a title: “Roland the Kind.”',
        hint: 'Of all titles — “the Strong,” “the Brave” — Santa chose “the Kind.” Why?',
        explanation: 'It defines his heroism: Roland’s strength IS his kindness. The book argues caring beats conquering.'
      },
      {
        id: 'rja-12',
        question: 'The heroes go on a “quest” to save Roland’s mom. What does the word “quest” mean?',
        options: [
          'A quick trip to the store',
          'A fight with a monster',
          'A long, adventurous journey to accomplish something important',
          'A magical spell'
        ],
        correctAnswerIndex: 2,
        samplePassage: 'Roland and Garg leave their village on a “quest” — a long, dangerous journey to rescue Roland’s mother from the White Warlock.',
        hint: 'Think of knights in old tales — what were their quests?',
        explanation: '“Quest” means a long, adventurous journey undertaken to achieve something important — like rescuing Roland’s mom.'
      }
    ]
  }
];

export const DEFAULT_BOOKS: Book[] = [
  ...MAGIC_TREE_HOUSE_BOOKS,
  ...CLASSIC_BOOKS,
  ...withComprehension(CHAPTER_QUIZZES),
  ...withComprehension(SUPERBUGS_CHAPTERS),
  ...withComprehension(OBAMA_DREAMS_CHAPTERS),
];
