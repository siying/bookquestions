import { Book } from '../types/quiz';
import { MAGIC_TREE_HOUSE_BOOKS } from './magicTreeHouseBooks';

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
          "She wanted to sell the pig at the county fair for money.",
          "She believed it was unfair to kill the pig just because he was born small and weak.",
          "She was worried the pig would run into Mrs. Zuckerman's kitchen.",
          "Her teacher told her to bring a farm animal for show-and-tell."
        ],
        correctAnswerIndex: 1,
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
          "Templeton the rat searches the dump for discarded newspaper and magazine clippings.",
          "Fern writes vocabulary words on slips of paper and pins them to the barn wall.",
          "The old sheep looks them up in an encyclopedia in the farmhouse library.",
          "Charlotte listens to the farmers talking during their morning coffee."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘I need new words for my web,’ said Charlotte. The old sheep turned to Templeton. ‘Templeton can help. Whenever he goes to the dump, he can bring back clippings of printed matter. He can tear out pieces of newspaper and bring them to Charlotte.’”",
        hint: "Look at the passage to see which barnyard character visits the dump and retrieves scraps of paper!",
        explanation: "Templeton the rat was persuaded by the old sheep to scavenge the town dump for cardboard wrappers and newspaper clippings containing words like 'TERRIFIC', 'RADIANT', and 'HUMBLE'."
      },
      {
        id: 'cw-4',
        question: "What is Templeton the rat's main motivation for helping Wilbur and Charlotte throughout the story?",
        options: [
          "He has a secret kind heart and loves making everyone happy.",
          "He is promised leftover food scraps, treats, and Wilbur's untouched trough meals.",
          "He wants Mr. Zuckerman to adopt him as a beloved house pet.",
          "He is competing against the barn mice for the title of barn leader."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Let him die,’ said Templeton. ‘I should worry.’ ‘Wilbur’s food is your food,’ whispered the old sheep. ‘If Wilbur dies, Lurvy will stop filling this trough. You’ll starve to death, rat.’ Templeton’s whiskers twitched. ‘Is that true?’ he asked. ‘All right, I’ll help.’”",
        hint: "The excerpt shows what Templeton cares about most: his stomach and Wilbur's trough food!",
        explanation: "Templeton is purely self-interested. He helps Wilbur because the old sheep reminds him that if Wilbur is slaughtered, there will be no tasty slops and leftovers in the trough for him to eat."
      },
      {
        id: 'cw-5',
        question: "What does the word 'RADIANT' woven in the web describe about Wilbur?",
        options: [
          "He emits an actual bright green glow in the dark.",
          "He looks glowing, healthy, happy, and full of joyful energy.",
          "He has learned how to do backflips in the mud puddle.",
          "He has pure white fur like fresh snow on a sunny morning."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Look at me, Charlotte!’ said Wilbur, racing around his pen, leaping into the air, and landing with a joyful twist. ‘Do I look radiant?’ Charlotte smiled gently. ‘You’re radiant to me, Wilbur. You shine with happiness and good health.’”",
        hint: "Check the excerpt: Charlotte explains that radiant means shining with health and happiness!",
        explanation: "Charlotte chooses 'RADIANT' from a soap advertisement snippet. Wilbur tries his best to jump, twirl, and beam with joy so he looks shiny, happy, and truly radiant to the crowds."
      },
      {
        id: 'cw-6',
        question: "Why was Charlotte unable to return home to the Zuckerman farm after the County Fair?",
        options: [
          "She decided to move to a new barn near the fairgrounds.",
          "She had completed her life cycle, was too old and weak, and was dying.",
          "The judges placed her in a glass jar to display in the fair museum.",
          "Templeton accidentally tore down her web and lost her in the sawdust."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘I won’t be going back to the barn, Wilbur,’ Charlotte whispered softly. ‘My time has come. A few days, perhaps, and I will be gone. In a few minutes I shall be dead.’ Wilbur threw himself on the ground in agony. ‘Charlotte!’ he cried. ‘My true friend!’”",
        hint: "Read Charlotte's gentle words in the excerpt: what natural process has reached its end for her?",
        explanation: "Charlotte had poured all her remaining strength into weaving her egg sac containing 514 eggs. Like natural barn spiders, she reached the natural end of her lifespan after egg laying."
      },
      {
        id: 'cw-7',
        question: "What promise did Wilbur make to Templeton so the rat would retrieve Charlotte's egg sac from the ceiling rafters?",
        options: [
          "Wilbur would give Templeton first choice of all food in his trough for the rest of his life.",
          "Wilbur would let Templeton sleep inside his warm straw bed every winter night.",
          "Wilbur promised to bite Lurvy if Lurvy ever tried to set rat traps.",
          "Wilbur said he would carry Templeton on his back across the entire county."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘Listen to me, Templeton!’ gasped Wilbur. ‘If you climb up and get that egg sac for me, I will make a solemn promise. From now on, you may eat first at every meal. I will not touch a single morsel until you have eaten your fill!’ Templeton’s eyes gleamed. ‘First choice? Every single day?’”",
        hint: "Notice what Wilbur offers regarding every meal that arrives in his trough!",
        explanation: "Wilbur made a binding vow allowing Templeton to feast first at every meal before Wilbur touched a bite, guaranteeing Templeton all the choice scraps and dessert."
      },
      {
        id: 'cw-8',
        question: "How did Wilbur safely transport the fragile egg sac back home from the fairgrounds?",
        options: [
          "He balanced it carefully on top of his snout while riding in the crate.",
          "He carried it gently inside his warm mouth beneath his tongue.",
          "He asked Fern to wrap it in her handkerchief and carry it in her pocket.",
          "He tucked it into Templeton's little pouch tied around the rat's neck."
        ],
        correctAnswerIndex: 1,
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
          "Joy, Aranea, and Nellie",
          "Ruby, Rose, and Daisy",
          "Hope, Faith, and Charity",
          "Penny, Polly, and Pip"
        ],
        correctAnswerIndex: 0,
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
          "An ordinary brown hat.",
          "A sleeping snake in the grass.",
          "A cave in a rocky mountain.",
          "An elephant standing behind a boulder."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“My Drawing Number One showed a boa constrictor digesting an elephant. But when I showed my masterpiece to the grown-ups and asked if it frightened them, they answered: ‘Why should anyone be frightened by a hat?’ So I had to draw Drawing Number Two showing the elephant inside.”",
        hint: "Look at the grown-ups' exact question in the excerpt: 'Why should anyone be frightened by a...?'",
        explanation: "Grown-ups lacked imagination and thought the boa constrictor holding an elephant was merely a hat, forcing the narrator to abandon drawing until he met the prince."
      },
      {
        id: 'lp-2',
        question: "What is the very first request the Little Prince makes to the narrator stranded in the Sahara desert?",
        options: [
          "“Please help me find water in this desert.”",
          "“Please draw me a sheep.”",
          "“Can you repair my airplane wings?”",
          "“Tell me where I can find the King.”"
        ],
        correctAnswerIndex: 1,
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
          "Their enormous roots will grow so large they split the tiny planet apart.",
          "They block all the sunsets from view.",
          "Their flowers produce a foul smell that drives away visitors."
        ],
        correctAnswerIndex: 1,
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
          "The Little Prince had watered her, protected her under a glass globe, and loved her deeply.",
          "She had diamond thorns and bloomed in the middle of winter.",
          "She was the only flower that could survive without sunlight."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘You are beautiful, but you are empty,’ the prince said to the garden of five thousand roses. ‘One could not die for you. To an ordinary passerby, my rose would look just like you. But my rose, all on her own, is more important than all of you, because she is the one I have watered. Because she is my rose.’”",
        hint: "Read the excerpt: what personal care did the prince give to his own rose that made her unique?",
        explanation: "The prince realized that what made his rose unique in all the universe was not that she was physically one-of-a-kind, but the love, time, and tender care he had dedicated to sheltering and watering her."
      },
      {
        id: 'lp-7',
        question: "What does the Fox mean when he teaches the Little Prince about 'taming'?",
        options: [
          "Training an animal to perform tricks with treats.",
          "Caging a wild creature so it cannot run away.",
          "Establishing affectionate emotional ties so you become unique to each other.",
          "Scaring away danger in the forest."
        ],
        correctAnswerIndex: 2,
        samplePassage: "“‘To me, you are still nothing more than a little boy who is just like a hundred thousand other little boys,’ said the fox. ‘And I have no need of you. But if you tame me, then we shall need each other. To me, you will be unique in all the world. To you, I shall be unique in all the world... It means to establish ties.’”",
        hint: "Check the fox's words in the passage: 'It means to establish...'",
        explanation: "To 'tame', according to the wise fox, means creating meaningful bonds of friendship and love. Through caring for someone, you become irreplaceable to each other."
      },
      {
        id: 'lp-8',
        question: "What famous secret does the Fox give to the Little Prince as a parting gift?",
        options: [
          "“Always follow the stars when you are lost.”",
          "“It is only with the heart that one can see rightly; what is essential is invisible to the eye.”",
          "“Words are the source of all misunderstandings, so never speak again.”",
          "“Only grow-ups know how to manage banks and money.”"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.’ ‘What is essential is invisible to the eye,’ the little prince repeated, so that he would be sure to remember.”",
        hint: "Look at the exact quotation the Little Prince repeats to himself to make sure he remembers!",
        explanation: "The fox's central wisdom is that true value—love, loyalty, beauty, friendship—cannot be measured with our eyes, but must be felt with the heart."
      },
      {
        id: 'lp-9',
        question: "What does the King on the first asteroid the prince visits insist upon?",
        options: [
          "Everyone must bow down and shine his shoes.",
          "He only issues 'reasonable orders' that can actually be obeyed.",
          "He demands that everyone bring him chocolate.",
          "He forces visitors to stay on his planet forever."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘I have the right to require obedience, because my orders are reasonable,’ the King was in the habit of saying. ‘If I ordered a general to fly from one flower to another like a butterfly, and the general did not obey, which of us would be in the wrong? It would be me. One must demand from each what each can perform.’”",
        hint: "Look at the King's rule in the passage: what kind of orders does he issue?",
        explanation: "The King was an absolute monarch, yet he prided himself on giving only reasonable commands—such as ordering the sun to set only when the time for sunset had arrived!"
      },
      {
        id: 'lp-10',
        question: "Why does the Little Prince allow the yellow snake in the desert to bite him at the end of the story?",
        options: [
          "He accidentally tripped over the snake while looking at the stars.",
          "He believed his physical body was too heavy to carry back to his beloved rose and Asteroid B-612.",
          "The snake tricked him into drinking poison disguised as water.",
          "He wanted to become invisible so he could explore Earth undetected."
        ],
        correctAnswerIndex: 1,
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
          "A single bar of Wonka chocolate.",
          "A toy wooden train carved by Grandpa Joe.",
          "A bowl of cabbage soup with extra potatoes."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“Only once a year, on his birthday, did Charlie Bucket ever taste a bit of chocolate. The whole family saved up their pennies for that very special occasion, and when the great day arrived, Charlie was always presented with one single small chocolate bar to eat all by himself. He would make it last for more than a month by nibbling just a tiny corner each day.”",
        hint: "What sweet treat did the family save up pennies to buy Charlie once a year?",
        explanation: "Because Charlie's family was so impoverished, he received only one chocolate bar each year on his birthday, which he treasured and rationed bite by bite for a month."
      },
      {
        id: 'cf-2',
        question: "How many Golden Tickets were hidden beneath the wrappers of Wonka chocolate bars worldwide?",
        options: [
          "3 tickets",
          "5 tickets",
          "7 tickets",
          "10 tickets"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Golden Tickets!’ read Mr. Bucket from the evening newspaper. ‘Mr. Willy Wonka has hidden five Golden Tickets underneath the ordinary paper wrappers of five ordinary candy bars. These five candy bars may be anywhere—in any shop in any street in any town in any country in the world!’”",
        hint: "Look at the headline read by Mr. Bucket in the excerpt above!",
        explanation: "Mr. Wonka hid exactly five Golden Tickets across the globe, offering five lucky children a tour of his secret factory and a lifetime supply of sweets."
      },
      {
        id: 'cf-3',
        question: "What bad habit led to Augustus Gloop's downfall in the Chocolate Room?",
        options: [
          "He was chewing experimental three-course dinner gum.",
          "He fell into the melted chocolate river because he greedily tried to drink from it.",
          "He demanded that his father buy him one of Wonka's trained squirrels.",
          "He kept staring at television screens and refused to move."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Augustus!’ cried Mr. Wonka. ‘Please do not do that! My chocolate must remain untouched by human hands!’ But Augustus was deaf to everything except his appetite. He was kneeling on the brown bank, scooping hot melted chocolate into his mouth as fast as he could. Then—SPLASH!—he tumbled right into the river and was sucked into the great glass pipe.”",
        hint: "Check the excerpt: what did Augustus do on the brown bank despite Mr. Wonka's warning?",
        explanation: "Augustus Gloop's uncontrollable gluttony drove him to kneel and scoop chocolate from the river, causing him to slip, fall in, and get sucked into a glass pipe leading to the fudge room."
      },
      {
        id: 'cf-4',
        question: "What happened to Violet Beauregarde after she snatched and chewed the prototype gum against Mr. Wonka's advice?",
        options: [
          "Her teeth turned into solid peppermint sticks.",
          "She grew giant rabbit ears that heard everything.",
          "She turned royal purple and inflated like a giant blueberry.",
          "She shrunk down until she was only one inch tall."
        ],
        correctAnswerIndex: 2,
        samplePassage: "“‘It’s blueberry pie and cream!’ shouted Violet. ‘It’s sensational!’ ‘Oh, heavens!’ screamed Mrs. Beauregarde. ‘Look at your nose! It’s turning blue!’ Within seconds, Violet’s cheeks, chin, arms, and belly were swelling up like a balloon filled with juice. She was turning into a giant, round, juicy blueberry!”",
        hint: "What fruit did Violet resemble as she puffed up and turned purple?",
        explanation: "When Violet reached the blueberry pie dessert stage of the untested chewing gum, she swelled into a massive purple blueberry and had to be rolled to the Juicing Room."
      },
      {
        id: 'cf-5',
        question: "Who works inside Willy Wonka's factory, creating the candies and singing witty cautionary songs?",
        options: [
          "The Oompa-Loompas from Loompaland",
          "A clan of magical elves from the North Pole",
          "Robots powered by peppermint clockwork gears",
          "Grandpa Joe's former factory co-workers"
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘They are Oompa-Loompas!’ Mr. Wonka announced. ‘Imported straight from Loompaland! They are wonderful workers, and they simply adore cocoa beans. In Loompaland, they lived on green caterpillars and dreamed of cocoa beans. I offered to pay them in cocoa beans if they came to live in my factory!’”",
        hint: "Read Mr. Wonka's quote: what is the name of these diminutive workers from Loompaland?",
        explanation: "Mr. Wonka rescued the Oompa-Loompas from the dangers of Loompaland and employed them in his factory, paying them in their most treasured food: cocoa beans."
      },
      {
        id: 'cf-6',
        question: "Why did the squirrels in the Nut Room attack Veruca Salt and throw her down the garbage chute?",
        options: [
          "She threw rocks at their acorn baskets.",
          "She tried to kidnap a squirrel, so they tested her head and judged her to be a 'bad nut'.",
          "She made fun of their fluffy tails.",
          "She tried to steal the golden walnut on the table."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“Twenty-five squirrels leaped onto Veruca’s shoulders and pinned her to the floor. Then the leader gave her forehead a firm tap with its knuckles. The squirrels listened to the hollow sound. ‘They’re testing her to see if she’s a bad nut,’ whispered Mr. Wonka. ‘And by Jove, they’ve decided she is! Down the garbage chute she goes!’”",
        hint: "What did the squirrels test on Veruca before shoving her into the rubbish chute?",
        explanation: "Veruca threw a tantrum demanding a trained nut-cracking squirrel. When she entered their room, the squirrels pinned her down, tapped her skull, decided she was a 'bad nut', and discarded her down the chute."
      },
      {
        id: 'cf-7',
        question: "What happened to television-obsessed Mike Teavee when he sent himself through Wonka Television?",
        options: [
          "He was permanently stuck inside a commercial for laundry detergent.",
          "He shrunk to a tiny miniature figure only a few inches high.",
          "He grew antennas out of his forehead that picked up cartoons.",
          "His skin became translucent like a glowing television monitor."
        ],
        correctAnswerIndex: 1,
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
          "He was respectful, patient, humble, and listened carefully to Mr. Wonka's rules.",
          "He knew secret cheat codes to bypass all of the factory's traps.",
          "He bribed the Oompa-Loompas with extra pennies."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘My dear boy,’ said Mr. Wonka, staring at Charlie with sparkling eyes. ‘That means you are the only one left! You won! I knew it would be you! You were quiet, polite, and didn’t let greed or arrogance get the best of you. You followed every rule and respected this magical place!’”",
        hint: "What virtues did Charlie display compared to the spoiled behavior of the other children?",
        explanation: "Unlike the other children who were spoiled, greedy, rude, or obsessive, Charlie was polite, grateful, and well-behaved, respecting Mr. Wonka and following all instructions."
      },
      {
        id: 'cf-10',
        question: "What grand prize does Mr. Wonka give to Charlie at the conclusion of the story?",
        options: [
          "A lifetime supply of five candy bars a week.",
          "The entire chocolate factory and everything inside it to run as his own.",
          "A mansion on the hill next door with ten servants.",
          "One million dollars in crisp brand-new banknotes."
        ],
        correctAnswerIndex: 1,
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
          "Turkish Delight",
          "Candied apples",
          "Hot cinnamon rolls"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“The Queen took out a small bottle and let a single drop fall upon the snow. Instantly there appeared a round box bound in green silk ribbon. Inside was several pounds of the most delicious Turkish Delight Edmund had ever tasted. Each piece was sweet and light to the very center, and the more he ate, the more he wanted.”",
        hint: "Look at the enchanted confectionery named in the excerpt!",
        explanation: "The White Witch gave Edmund magical Turkish Delight that created an insatiable craving, making him willing to betray his brother and sisters just to taste more."
      },
      {
        id: 'lww-4',
        question: "What cruel curse has the White Witch cast over all of Narnia?",
        options: [
          "The animals are forbidden from speaking.",
          "It is always winter, but never Christmas.",
          "The oceans have turned into poisonous vinegar.",
          "No flowers or trees can ever produce leaves."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘It is she that makes it always winter,’ Mr. Tumnus said with a shudder. ‘Always winter and never Christmas; think of that! A whole hundred years of snow, cold winds, and bare trees, without a single holiday or gift to bring hope.’”",
        hint: "Look at Mr. Tumnus's exact phrase in the passage: 'Always winter and...'",
        explanation: "The White Witch's tyrannical spell kept Narnia in a hundred-year frozen winter without spring, warmth, or Christmas to bring hope."
      },
      {
        id: 'lww-5',
        question: "Whose sudden arrival in Narnia is the first undeniable sign that the Witch's winter spell is beginning to thaw?",
        options: [
          "Father Christmas",
          "The Emperor-beyond-the-Sea",
          "A flock of golden eagles",
          "The King of Archenland"
        ],
        correctAnswerIndex: 0,
        samplePassage: "“He was a huge man in a bright red robe with a hood, trimmed with white fur, and a great white beard that fell like a foamy waterfall over his chest. ‘I’ve broken through at last,’ said Father Christmas. ‘She has kept me out for a long time, but Aslan is on the move. The Witch’s magic is weakening!’”",
        hint: "Who arrives in a red robe with a sledge and presents for the children?",
        explanation: "Father Christmas breaks through the melting snowdrifts, signaling that Aslan is approaching and the Witch's magical hold over Narnia is collapsing."
      },
      {
        id: 'lww-6',
        question: "What gifts does Father Christmas give to Lucy Pevensie to protect and heal her friends?",
        options: [
          "A small dagger and a cordial bottle made of diamond that can heal any wound or illness",
          "A silver sword and a shining shield bearing a red lion",
          "A bow with arrows that never miss and an ivory horn",
          "A golden cloak that makes the wearer completely invisible"
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘In this bottle,’ Father Christmas said, giving Lucy a little vial of diamond glass, ‘is a cordial made from the juice of fire-flowers. If you or any of your friends are hurt, a single drop will restore health. And here is a small dagger. You are only to use it in great danger, for you must not be in the battle.’”",
        hint: "Notice the healing vial made of diamond and the small weapon given to Lucy in the excerpt!",
        explanation: "Father Christmas gave Lucy a healing cordial capable of reviving the fatally wounded, alongside a small dagger for personal emergency defense."
      },
      {
        id: 'lww-7',
        question: "Why did the White Witch claim that she had the legal right to execute Edmund under the Deep Magic?",
        options: [
          "He broke a statue in her castle courtyard.",
          "He was a traitor who betrayed his own family.",
          "He was a human living illegally in Narnia.",
          "He stole the Turkish Delight without paying for it."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘You know the Deep Magic which the Emperor-beyond-the-Sea wrote on the Stone Table,’ the Witch said. ‘You know that every traitor belongs to me as my lawful prey and that for every treachery I have a right to kill. His life is forfeit to me!’”",
        hint: "Read what the Witch calls Edmund in the passage: 'every... belongs to me as my lawful prey'.",
        explanation: "Under the ancient Deep Magic engraved on the Stone Table, all traitors belonged to the White Witch, and blood was required for Edmund's treachery."
      },
      {
        id: 'lww-8',
        question: "How does Aslan save Edmund from being executed by the White Witch?",
        options: [
          "He defeats the Witch in a public fencing duel.",
          "He secretly offers his own life on the Stone Table as a substitute sacrifice.",
          "He banishes the Witch to the far frozen North with a roar.",
          "He transforms Edmund into a stone lion so he cannot be harmed."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“Aslan made a quiet agreement with the Witch in private. That night, unknown to the soldiers, Aslan walked solemnly to the Stone Table. He allowed the Witch and her cruel monsters to bind him, shear his mane, and strike him down so that Edmund could live.”",
        hint: "Look at the passage: what sacrifice did Aslan make at the Stone Table?",
        explanation: "Aslan willingly offered himself to be bound, humiliated, and sacrificed on the Stone Table in Edmund's place, satisfying the ancient law through selfless love."
      },
      {
        id: 'lww-9',
        question: "Why did Aslan miraculously rise from the dead the following morning?",
        options: [
          "Lucy poured her entire bottle of healing cordial on his mane.",
          "A Deeper Magic from before the dawn of time stated that if a willing victim with no treachery died in a traitor's place, the Stone Table would crack and death would reverse.",
          "The wood mice chewed through his wounds and revived his heart.",
          "The rising sun melted the Stone Table into warm spring water."
        ],
        correctAnswerIndex: 1,
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
          "She hid under her bed and refused to eat dinner.",
          "She walked by herself to the village public library every afternoon and read everything on the shelves.",
          "She secretly ordered encyclopedias using her mother's credit card.",
          "She wrote angry letters to the Prime Minister."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Daddy,’ she said, ‘do you think you could buy me a book?’ ‘What’s wrong with the telly?’ he barked. So every afternoon, as soon as her mother left for bingo, Matilda walked down to the village public library all by herself. Mrs. Phelps, the librarian, watched in amazement as a four-year-old girl sat reading Great Expectations by Charles Dickens.”",
        hint: "Where did Matilda go on her own while her mother played bingo?",
        explanation: "Undeterred by her father's refusal, four-year-old Matilda walked to the local library every day, reading classics by Dickens, Hemingway, and Austen under the watchful eye of Mrs. Phelps."
      },
      {
        id: 'mat-2',
        question: "How did Matilda punish her arrogant father, Mr. Wormwood, after he unjustly tore up her library book?",
        options: [
          "She put superglue along the inside rim of his favorite pork-pie hat.",
          "She painted his secondhand cars neon pink during the night.",
          "She let all the air out of his car tires before work.",
          "She replaced his hair tonic with green food coloring."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“Matilda slipped into the hall cloakroom with a tube of Superglue. She carefully ran a thin ring of glue all around the inside band of her father’s favorite hat. When Mr. Wormwood put it on to go to work, it stuck fast to his forehead. He had to keep it on all day, even when sleeping!”",
        hint: "Look at what Matilda applied to the inside band of her father's favorite pork-pie hat!",
        explanation: "To teach him a lesson for ripping up her book, Matilda coated the inside band of Mr. Wormwood's hat with superglue, forcing him to wear it everywhere, even to bed."
      },
      {
        id: 'mat-3',
        question: "What cruel punishment room does the terrifying headmistress, Miss Trunchbull, use to terrorize students?",
        options: [
          "The Dungeon",
          "The Chokey",
          "The Iron Closet",
          "The Spiky Shed"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Have you heard of The Chokey?’ whispered Hortensia. ‘It’s a tall, narrow cupboard with walls covered in broken glass and sharp nails sticking out. You can’t sit down, you can’t lean against the walls, and the Trunchbull locks you in there for hours in pitch darkness!’”",
        hint: "Read the horrifying name of the narrow, nail-lined cupboard in Hortensia's quote!",
        explanation: "Miss Trunchbull used 'The Chokey'—a narrow, pitch-dark closet lined with broken glass and rusty nails—to terrorize and torture innocent children."
      },
      {
        id: 'mat-4',
        question: "What heroic feat did young Bruce Bogtrotter accomplish during a school assembly to Miss Trunchbull's absolute fury?",
        options: [
          "He climbed to the very top of the flagpole and tied a white flag.",
          "He ate an entire massive sixteen-inch chocolate cake by himself down to the very last crumb.",
          "He caught Miss Trunchbull's hammer throw in mid-air.",
          "He recited the entire times table up to one hundred backward without stopping."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Eat!’ bellowed the Trunchbull. ‘You stole a slice of my private chocolate cake, so you will eat the entire cake!’ It was a monster, two feet across and covered in rich chocolate cream. Bruce chewed and choked, but he kept going. When he swallowed the final crumb, the whole school erupted in wild cheering!”",
        hint: "What gigantic chocolate dessert did Bruce finish eating in front of the whole school?",
        explanation: "Miss Trunchbull tried to punish Bruce Bogtrotter for stealing a slice of her cake by forcing him to eat an enormous chocolate cake until he burst, but Bruce miraculously finished every single bite to the school's cheers."
      },
      {
        id: 'mat-5',
        question: "What small amphibian did Lavender place into Miss Trunchbull's water pitcher to play a prank on her?",
        options: [
          "A green tree frog",
          "A slimy newt",
          "A spotted salamander",
          "A small pond toad"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“Lavender had captured a muddy newt with a bright orange belly from the pond. Before class began, she carefully tipped the creature into the glass water jug on the teacher’s table. When the Trunchbull poured a glass of water, plop! Out splashed the wriggling creature right into her cup!”",
        hint: "Check the passage: what pond creature with an orange belly did Lavender catch?",
        explanation: "Lavender caught a slimy newt in a pond and dropped it into Miss Trunchbull's water pitcher. When Trunchbull poured water, the newt splashed into her glass and startled her."
      },
      {
        id: 'mat-6',
        question: "How did Matilda discover her telekinetic power for the very first time?",
        options: [
          "She concentrated her intense eye gaze to tip over the glass of water containing the newt.",
          "She lifted her heavy desk into the air to stop Miss Trunchbull from hitting her.",
          "She opened the locked front gates of the school using her mind.",
          "She made her father's television screen explode during a broadcast."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“Matilda felt a strange fiery power surging behind her eyes. ‘Tip it over!’ she willed silently. ‘Tip it over!’ She focused all her mind’s energy onto the glass containing the newt. Tiny sparks of lightning seemed to shoot from her eyes, and suddenly, slowly, the heavy glass toppled over onto the Trunchbull’s chest!”",
        hint: "What object did Matilda focus her fiery eye energy on to topple it over?",
        explanation: "Enraged by Miss Trunchbull falsely accusing her of putting the newt in the glass, Matilda channeled her immense mental focus into her eyes, causing the glass to tip over onto the headmistress."
      },
      {
        id: 'mat-7',
        question: "What tragic secret connects the sweet teacher Miss Honey to Miss Trunchbull?",
        options: [
          "Miss Trunchbull is actually Miss Honey's cruel aunt who took over her father's house and stole her inheritance.",
          "Miss Honey used to be Miss Trunchbull's teacher in primary school.",
          "They are sisters who fought over the ownership of the school.",
          "Miss Trunchbull adopted Miss Honey from an orphanage in London."
        ],
        correctAnswerIndex: 0,
        samplePassage: "“‘Miss Trunchbull is my aunt,’ Miss Honey whispered. ‘Her name is Agatha. When my dear father, Dr. Magnus Honey, died under mysterious circumstances, she seized his house, kept all his money, and treated me like a slave for years.’”",
        hint: "Look at Miss Honey's revelation: what family relation is Miss Trunchbull to her?",
        explanation: "Miss Trunchbull is Miss Honey's aunt Agatha, who seized the family estate and salary after Dr. Magnus Honey's suspicious death, leaving Miss Honey to live in extreme poverty in a cottage without furniture or plumbing."
      },
      {
        id: 'mat-8',
        question: "How does Matilda use her telekinetic powers during class to permanently frighten Miss Trunchbull away?",
        options: [
          "She flies around the classroom like a superhero.",
          "She uses her mind to lift chalk and write a message on the blackboard pretending to be Magnus Honey's ghost.",
          "She locks Miss Trunchbull inside The Chokey from across the room.",
          "She causes all the windows in the assembly hall to shatter simultaneously."
        ],
        correctAnswerIndex: 1,
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
          "She moves into a luxury boarding school in Switzerland.",
          "Her parents agree to let Miss Honey adopt her, and they live happily together in Miss Honey's reclaimed house.",
          "She becomes the youngest headmistress of Crunchem Hall.",
          "She moves in with Mrs. Phelps at the village library."
        ],
        correctAnswerIndex: 1,
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
          "He wore a waistcoat and took a pocket watch out of his pocket, muttering that he was late.",
          "He had bright pink sunglasses and was playing an accordion.",
          "He dropped a gold key that unlocked an iron gate."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“There was nothing very remarkable in hearing the Rabbit say: ‘Oh dear! I shall be late!’ But when the Rabbit actually took a watch out of its waistcoat pocket, looked at it, and hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat pocket or a watch to take out of it!”",
        hint: "What clothing item and accessory did the White Rabbit pull out that shocked Alice?",
        explanation: "Alice had seen rabbits before, but never one wearing a waistcoat with a pocket watch checking the time and speaking English, sparking her irresistible curiosity."
      },
      {
        id: 'aw-2',
        question: "What happened to Alice when she drank from the glass bottle labeled 'DRINK ME' on the three-legged glass table?",
        options: [
          "She fell fast asleep for a hundred years.",
          "She shrank down until she was only ten inches high.",
          "She grew so tall her head bumped into the ceiling.",
          "She turned invisible from head to toe."
        ],
        correctAnswerIndex: 1,
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
          "They ran out of clean teacups and cannot wash dishes.",
          "The Hatter had a quarrel with Time, so Time stopped the clock at six o'clock forever.",
          "The Queen of Hearts ordered them to drink tea until sunset as a royal decree.",
          "The teapot is enchanted and never runs dry."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘It’s always six o’clock now,’ sighed the Hatter. ‘We had a dreadful quarrel last March, just before he went mad. I was singing for the Queen, and she screamed: ‘He’s murdering time!’ Ever since then, Time won’t do a thing I ask! It’s always six o’clock—always tea-time, and we’ve no time to wash the things between whiles!’”",
        hint: "Who did the Hatter quarrel with so that the clock remains permanently stuck at six o'clock?",
        explanation: "The Hatter offended Time at a concert, so Time froze the hour at six o'clock—tea-time—meaning they must continuously move around the table from one cup to the next."
      },
      {
        id: 'aw-5',
        question: "What riddle does the Mad Hatter pose to Alice that famously has no actual answer in the original story?",
        options: [
          "“Why is a raven like a writing desk?”",
          "“Where does the candle flame go when it is blown out?”",
          "“How many stars can dance on a teacup?”",
          "“Why does the moon smile on Tuesdays?”"
        ],
        correctAnswerIndex: 0,
        samplePassage: "“The Hatter opened his eyes very wide on hearing this; but all he said was, ‘Why is a raven like a writing desk?’ ‘Come, we shall have some fun now!’ thought Alice. ‘I’m glad they’ve begun asking riddles—I believe I can guess that.’ But when she gave up, the Hatter confessed: ‘I haven’t the slightest idea!’”",
        hint: "Look at the Hatter's riddle about a bird and a piece of furniture in the excerpt!",
        explanation: "The Hatter asked: 'Why is a raven like a writing desk?'. Alice spent time trying to deduce the answer, only for the Hatter and March Hare to admit they had no answer at all!"
      },
      {
        id: 'aw-6',
        question: "What are the playing-card gardeners furiously doing to the white rose trees when Alice enters the Queen's garden?",
        options: [
          "Pruning the thorns so they do not scratch the King.",
          "Painting the white roses red with paintbrushes because the Queen demanded red roses.",
          "Watering them with strawberry juice to make them smell like candy.",
          "Digging up their roots to plant tulip bulbs."
        ],
        correctAnswerIndex: 1,
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
          "“Lock them in the deepest tower!”",
          "“Off with their heads!”",
          "“Turn them into card games!”",
          "“Throw them down the well!”"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“The Queen turned crimson with fury, and glared at Alice like a wild beast. ‘Off with her head!’ the Queen shouted at the top of her voice. ‘Off with—’ ‘Nonsense!’ said Alice, very loudly and decidedly, and the Queen was silent.”",
        hint: "What severe order does the Queen shout in the passage?",
        explanation: "The tyrannical Queen of Hearts solves every trivial disagreement or annoyance by bellowing her infamous command: 'Off with their heads!'"
      },
      {
        id: 'aw-9',
        question: "What was the Knave of Hearts accused of stealing during the courtroom trial?",
        options: [
          "The Queen's golden crown",
          "The tarts baked by the Queen on a summer day",
          "The King's royal pocket watch",
          "The White Rabbit's white kid gloves"
        ],
        correctAnswerIndex: 1,
        samplePassage: "“The White Rabbit blew three blasts on the trumpet, unrolled the parchment scroll, and read as follows: ‘The Queen of Hearts, she made some tarts, all on a summer day: The Knave of Hearts, he stole those tarts, and took them quite away!’”",
        hint: "Look at the rhyme read by the White Rabbit in the courtroom excerpt!",
        explanation: "Based on the famous nursery rhyme, the Knave of Hearts stood trial before the King and Queen on charges of stealing a dish of freshly baked tarts."
      },
      {
        id: 'aw-10',
        question: "How does Alice wake up from her fantastical dream in Wonderland?",
        options: [
          "She falls into a pool of tears and splashes her face.",
          "When the Queen orders the cards to attack, Alice shouts 'You're nothing but a pack of cards!' and awakens with dry leaves brushing her face.",
          "The White Rabbit drops his pocket watch, which rings like an alarm clock.",
          "Her cat Dinah purrs loudly in her ear."
        ],
        correctAnswerIndex: 1,
        samplePassage: "“‘Who cares for you?’ said Alice (she had grown to her full size by this time). ‘You’re nothing but a pack of cards!’ At this the whole pack rose up into the air, and came flying down upon her. She gave a little scream, and woke up to find her head in the lap of her sister, gently brushing away some dead leaves that had fluttered down from the trees.”",
        hint: "Read Alice's bold shout to the court cards before she awakens under the tree!",
        explanation: "Realizing the absurdity of the courtroom, Alice declares that the court is merely a deck of ordinary playing cards. The cards flutter into the air, and Alice wakes up on the riverbank to find dead leaves drifting over her face."
      }
    ]
  }
];

export const DEFAULT_BOOKS: Book[] = [
  ...MAGIC_TREE_HOUSE_BOOKS,
  ...CLASSIC_BOOKS,
];
