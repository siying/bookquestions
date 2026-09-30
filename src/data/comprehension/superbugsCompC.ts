import { Question } from '../../types/quiz';

// Higher-order comprehension questions for Superbugs chapters 17-24.
// Set: main idea + tone/mood + two higher-order questions per chapter
// (character trait, inference, or author's point). Sample passages are
// paraphrased prose, never verbatim book quotes.
export const SUPERBUGS_COMP_C: Record<string, Question[]> = {
  "superbugs-ch17": [
    {
      id: "sb17-11",
      question: "What is the main idea of this chapter?",
      options: [
        "That McCarthy discovered a brand-new kind of bacteria in the hospital pharmacy",
        "That bringing a new drug to patients means passing through tense decision points about safety, side effects, and wise use",
        "That Tom Walsh's equations were impossible for anyone to understand",
        "That antibiotics should be given freely to everyone who asks"
      ],
      correctAnswerIndex: 1,
      samplePassage: "As the delivery of the new trial drug drew near, McCarthy faced a series of hard choices, from watching patients closely for bad reactions to deciding who could approve the medicine, and he learned that every new antibiotic brings both hope and risk.",
      hint: "The passage links the drug's arrival to the hard safety choices McCarthy had to make.",
      explanation: "The chapter's decision points are the tense moments when doctors, pharmacists, and gatekeepers must weigh a new drug's promise against its dangers. Options 0 and 2 describe minor details, and option 3 is an idea the chapter argues against."
    },
    {
      id: "sb17-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Tense",
        "Playful",
        "Triumphant",
        "Silly"
      ],
      correctAnswerIndex: 0,
      samplePassage: "With the drug delivery date approaching and serious side effects like hives or Stevens-Johnson syndrome on the table, McCarthy felt the weight of every safety decision, knowing a single mistake could harm a patient.",
      hint: "The passage shows McCarthy feeling the pressure of risky decisions.",
      explanation: "The chapter is full of high-stakes choices about a powerful new medicine, so the mood is tense, not playful or triumphant."
    },
    {
      id: "sb17-13",
      question: "Which of these best describes Tom Walsh in this chapter?",
      options: [
        "Careless about patient safety, since he rushed every decision",
        "Secretive and unwilling to explain his ideas to anyone",
        "Uninterested in the new trial drug",
        "A brilliant mentor who could make an impossible idea suddenly clear"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Tom Walsh would draw up equations that only he understood, and then, in a flash, he could make the most impossible idea clear to everyone around him.",
      hint: "The passage says Tom turned confusing math into clear answers.",
      explanation: "Tom was the brilliant teacher-figure who translated hard science into understanding. He cared deeply about safety, explained his thinking, and was central to the trial work, so options 0, 1, and 2 are contradicted."
    },
    {
      id: "sb17-14",
      question: "What can you infer from the fact that even one of the country's best hospital pharmacies had nothing like dalba?",
      options: [
        "The pharmacy was poorly managed",
        "Dalba was an ordinary drug found everywhere",
        "Dalba was a truly new and unusual medicine",
        "The hospital refused to stock any antibiotics"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Even though the hospital had one of the most robust pharmacies in the country, it carried nothing like dalba, which told McCarthy that this trial drug was unlike anything doctors had used before.",
      hint: "The passage says the missing drug proved how unusual dalba was.",
      explanation: "If the best pharmacies in the country do not have a drug, the fair conclusion is that the drug is genuinely new and different, not that the pharmacy failed or the drug is common."
    }
  ],
  "superbugs-ch18": [
    {
      id: "sb18-11",
      question: "What is the main idea of this chapter?",
      options: [
        "That Tom Walsh took a trip to Chicago to study miniature ponies",
        "That vending machines are important equipment in every hospital",
        "That even the best doctors sometimes face heartbreaking losses, and they need humor and friendship to keep going",
        "That stomach cancer can always be cured with the right antibiotic"
      ],
      correctAnswerIndex: 2,
      samplePassage: "When McCarthy learned that Piper Larson had stomach cancer and pictured her little boy growing up without his mother, he struggled to hold back tears, and only the warm humor of his mentor Tom could lift his spirits again.",
      hint: "The passage connects the sad diagnosis to the comfort Tom provided.",
      explanation: "The heart of the chapter is McCarthy confronting a loss no medicine could fix, and learning that doctors lean on each other in hard times. Options 0 and 1 are tiny details, and option 3 is contradicted, since antibiotics cannot cure cancer."
    },
    {
      id: "sb18-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Cheerful",
        "Playful",
        "Triumphant",
        "Somber"
      ],
      correctAnswerIndex: 3,
      samplePassage: "A young mother received terrible news about cancer while her small son lay on the hospital floor, and McCarthy had to wipe his eyes as he imagined the boy growing up without her.",
      hint: "The passage describes a sad scene that made McCarthy cry.",
      explanation: "The chapter deals with a dying young mother and a grieving doctor, so the mood is somber, serious and sad, even though Tom's joke brings one brief laugh."
    },
    {
      id: "sb18-13",
      question: "Which of these best describes Tom Walsh in this chapter?",
      options: [
        "A caring friend who used humor to lift McCarthy's spirits",
        "A cold colleague who ignored McCarthy's sadness",
        "A panicked doctor who did not know what to say",
        "A strict boss who cared only about hospital rules"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Sensing how heavy McCarthy felt after the terrible news about Piper, Tom launched into one of his funny mini-lectures about the miniature ponies of coastal Maryland until McCarthy finally laughed for real.",
      hint: "The passage says Tom told a funny story to cheer McCarthy up.",
      explanation: "Tom noticed his friend's grief and deliberately cheered him up with humor. He was not cold, panicked, or rule-obsessed, so options 1, 2, and 3 are contradicted."
    },
    {
      id: "sb18-14",
      question: "What can you infer from McCarthy wiping his eyes as he imagined Piper's son growing up without his mother?",
      options: [
        "He was angry at the little boy",
        "He felt deep compassion for Piper and her family",
        "He was bored by the hospital visit",
        "He blamed Piper for getting sick"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Watching the small boy on the hospital floor, McCarthy pictured him growing up without his mother, and the thought was so painful that he had to wipe his eyes.",
      hint: "The passage says picturing the boy's future brought McCarthy to tears.",
      explanation: "Doctors who did not care would not cry. The only fair conclusion is that McCarthy felt genuine compassion for this family."
    }
  ],
  "superbugs-ch19": [
    {
      id: "sb19-11",
      question: "What is the main idea of this chapter?",
      options: [
        "That while the official antifungal study crawled through committee, McCarthy and Tom raced to build a lightning-fast plan to get the drug to Candida auris patients",
        "That New Jersey office parks have excellent views of Manhattan",
        "That Tom Walsh lost his phone on the way to Jersey City",
        "That Candida auris was first found in a river in Brazil"
      ],
      correctAnswerIndex: 0,
      samplePassage: "With the official study stuck in committee and more patients catching the dangerous fungus, McCarthy and Tom traveled to New Jersey to meet Sylvia and design a plan that could move a new antifungal to sick patients with no delays.",
      hint: "The passage says the two men built a speedy plan while the paperwork moved slowly.",
      explanation: "The central story is the race against slow bureaucracy: patients were getting sicker while committees deliberated, so the team created a faster path. Options 1 and 3 are minor details, and option 3 is wrong anyway, since the fungus was found in Japan, not Brazil."
    },
    {
      id: "sb19-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Relaxed",
        "Urgent",
        "Gloomy",
        "Silly"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Patients across New York were catching a dangerous fungus that most doctors had never even heard of, so the team agreed that every call about a sick patient had to trigger immediate action with no delays.",
      hint: "The passage stresses speed and immediate action.",
      explanation: "Everything in the chapter pushes toward acting fast, springing into action, confirming infections quickly, and delivering the drug without delay, so the tone is urgent."
    },
    {
      id: "sb19-13",
      question: "Which of these best describes Sylvia in this chapter?",
      options: [
        "Confused about how the new antifungal worked",
        "Slow and cautious, preferring to wait before helping patients",
        "Enthusiastic about the new drug and ready to act fast for patients",
        "Uninterested in working with McCarthy and Tom"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Sylvia, a physician at the drug company, told the group how excited her company was about the new antifungal, and she helped design a plan in which someone would spring into action the moment a call came in.",
      hint: "The passage says Sylvia shared the company's excitement and helped build the fast plan.",
      explanation: "Sylvia understood the science, moved quickly, and had worked with Tom for years, so options 0, 1, and 3 are contradicted by the chapter."
    },
    {
      id: "sb19-14",
      question: "What can you infer from Tom promising the group that his phone was always on?",
      options: [
        "He expected the plan to fail",
        "He wanted to avoid talking to patients",
        "He was planning a vacation",
        "He took the rescue plan seriously and wanted to be reachable at any hour"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Tom promised the group that his phone was always on, so that whenever a call came about a patient with the dangerous fungus, someone on the team could respond right away.",
      hint: "The passage links his promise to responding quickly to patient calls.",
      explanation: "Promising round-the-clock availability only makes sense if Tom was fully committed to the plan and ready to help at any hour."
    }
  ],
  "superbugs-ch20": [
    {
      id: "sb20-11",
      question: "What is the main idea of this chapter?",
      options: [
        "That cefiderocol was invented in ancient Greece",
        "That Rockefeller University made the most important discovery of the century",
        "That lawmakers always act quickly to stop drug companies from raising prices",
        "That the chapter celebrates new antibiotics while warning that soaring prices could keep them from the patients who need them"
      ],
      correctAnswerIndex: 3,
      samplePassage: "McCarthy cheered the arrival of three brand-new antibiotics, including the clever Trojan horse drug cefiderocol, but he warned that if the price climbed too high, his hospital simply would not use it, no matter how well it worked.",
      hint: "The passage pairs the celebration of new drugs with the warning about price.",
      explanation: "The chapter holds two ideas together: joy at new weapons against superbugs, and fear that cost will block patients from receiving them. Options 0 and 2 are false, and option 1 belongs to the next chapter's story."
    },
    {
      id: "sb20-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Furious",
        "Grim",
        "Hopeful",
        "Playful"
      ],
      correctAnswerIndex: 2,
      samplePassage: "McCarthy opened the chapter with cheerful words about the productive meeting and celebrated three brand-new antibiotics as fresh weapons in the fight against superbugs, even as he kept one worried eye on their price.",
      hint: "The passage shows McCarthy celebrating new medicines.",
      explanation: "Despite the price worry, the chapter's dominant feeling is hope: new antibiotics are rare, and three at once felt like a real victory."
    },
    {
      id: "sb20-13",
      question: "Which of these best describes McCarthy in this chapter?",
      options: [
        "Willing to buy new drugs at any price, no matter the cost",
        "Practical and protective, drawing a firm line on what his hospital would pay",
        "Indifferent to the new antibiotics",
        "Trusting that lawmakers would fix the price problem"
      ],
      correctAnswerIndex: 1,
      samplePassage: "McCarthy said plainly that if cefiderocol became too expensive, his hospital would not use it, because a hospital budget cannot stretch to cover every costly drug, however well it works.",
      hint: "The passage says McCarthy set a firm price limit for the new drug.",
      explanation: "McCarthy celebrated the new drugs but protected his patients and budget with a clear limit. He was not indifferent, he was excited, and he did not trust lawmakers, since the chapter says they rarely act."
    },
    {
      id: "sb20-14",
      question: "What can you infer from McCarthy celebrating three new antibiotics yet warning that his hospital would not use cefiderocol if it cost too much?",
      options: [
        "He believed a new drug is only a real victory if patients can actually afford to receive it",
        "He thought the new antibiotics were worthless",
        "He wanted hospitals to spend unlimited money on drugs",
        "He believed lawmakers would quickly solve the price problem"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Even as he celebrated the clever new drugs, McCarthy drew a hard line on price, because a medicine that hospitals cannot afford will never reach the patients waiting for it.",
      hint: "The passage ties the celebration to the question of who can actually get the drug.",
      explanation: "Celebrating a drug while refusing to buy it at any price only makes sense if McCarthy measured success by patients actually receiving the medicine, not by the invention alone."
    }
  ],
  "superbugs-ch21": [
    {
      id: "sb21-11",
      question: "What is the main idea of this chapter?",
      options: [
        "That John D. Rockefeller visited his research campus every single day",
        "That the Rockefeller story runs from a dishonest medicine peddler to a family whose generous giving built one of the world's great medical research institutes",
        "That oil money is always harmful to society",
        "That scientists should never accept money from wealthy donors"
      ],
      correctAnswerIndex: 1,
      samplePassage: "The chapter begins with William Rockefeller Sr., a huckster who sold bogus medicines, and follows the family fortune from Standard Oil to the philanthropy that created the East River research campus where scientists would one day fight superbugs.",
      hint: "The passage traces the family from a fake-medicine seller to generous medical giving.",
      explanation: "The chapter's arc is the striking contrast: it starts with a dishonest peddler and ends with generosity that funded life-saving science. Options 2 and 3 are contradicted, since the chapter praises the philanthropy, and option 0 is false, since he visited only once."
    },
    {
      id: "sb21-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Scornful",
        "Fearful",
        "Silly",
        "Admiring"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter presents the Rockefeller giving as something tangible and lasting, describing how donated wealth built laboratories where generations of scientists pursued medical discoveries.",
      hint: "The passage speaks warmly of what the family's giving accomplished.",
      explanation: "McCarthy treats the Rockefeller philanthropy with respect and warmth, marveling at how generosity turned oil wealth into cures, an admiring tone, not a scornful or fearful one."
    },
    {
      id: "sb21-13",
      question: "Which of these best describes John D. Rockefeller in this chapter?",
      options: [
        "Showy and boastful about his donations",
        "Greedy and unwilling to share his fortune",
        "A quiet, generous giver who was cheerful beneath a stern public image",
        "Bitter and resentful toward his father's dishonesty"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Behind his stiff public persona, John D. Rockefeller was a cheerful man who gave away great sums to support research, yet visited the campus his money built only once in his life.",
      hint: "The passage contrasts his private cheerfulness and generosity with his distant image.",
      explanation: "He gave quietly and generously, without seeking the spotlight. The chapter never shows him boasting, hoarding, or nursing bitterness, so options 0, 1, and 3 are contradicted."
    },
    {
      id: "sb21-14",
      question: "What can you infer from John D. Rockefeller visiting his East River campus only once, even though it was just a few miles from his home?",
      options: [
        "He preferred giving quietly and did not need public attention for his generosity",
        "He disliked the scientists who worked there",
        "He forgot where the campus was located",
        "He wanted to tear the campus down"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Although the campus sat only a few miles from his New York City home, he visited it just once, suggesting that his giving was never about showing off or seeking praise.",
      hint: "The passage suggests his absence showed he gave without seeking attention.",
      explanation: "A donor who craves attention visits often. Visiting only once, while giving so much, points to quiet generosity, the only conclusion the chapter supports."
    }
  ],
  "superbugs-ch22": [
    {
      id: "sb22-11",
      question: "What is the main idea of this chapter?",
      options: [
        "That McCarthy proved lysins could never work",
        "That Rockefeller University should be torn down",
        "That McCarthy met Alex Chapman, learned about his unusual gut-bacteria research, and admitted his own doubts about the hyped-up idea of lysins",
        "That the NIH refused to fund any research on bacteria"
      ],
      correctAnswerIndex: 2,
      samplePassage: "McCarthy spent the chapter with Alex Chapman, whose team studied the intestinal bacteria of leukemia and transplant patients, and he confessed that he doubted lysins could really work, since he figured he would have heard of them if they did.",
      hint: "The passage names the new scientist and McCarthy's honest doubts.",
      explanation: "The chapter introduces Chapman's strange-but-serious research while McCarthy voices the skepticism that the next chapter will overturn. Options 0 and 3 are contradicted, he only doubted, and the NIH funded the work, and option 1 is absurd."
    },
    {
      id: "sb22-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Skeptical",
        "Ecstatic",
        "Terrified",
        "Bored"
      ],
      correctAnswerIndex: 0,
      samplePassage: "McCarthy admitted he doubted lysins could work, reasoning that as an infectious disease doctor he would have heard about them if they were real, and he recalled old miracle-cure hype like the remedies in an ancient English medical text.",
      hint: "The passage shows McCarthy doubting the new idea.",
      explanation: "McCarthy questions the lysin hype throughout the chapter, comparing it to past medical fads, a skeptical tone, not an excited or frightened one."
    },
    {
      id: "sb22-13",
      question: "Which of these best describes Alex Chapman in this chapter?",
      options: [
        "Lazy and uninterested in his own research",
        "Frightened of bacteria and unwilling to study them",
        "Famous for seeking attention and praise",
        "Dedicated to serious but unglamorous scientific work"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Chapman led a five-year NIH-funded study of intestinal bacteria and had earned a Young Investigator award, even though collecting and analyzing feces was far from glamorous.",
      hint: "The passage says his award-winning work was important but unglamorous.",
      explanation: "Chapman did demanding, respected science that nobody would call showy. The award and the major grant contradict the ideas that he was lazy, fearful, or attention-seeking."
    },
    {
      id: "sb22-14",
      question: "What can you infer from Chapman receiving a Young Investigator award for his gut-bacteria research?",
      options: [
        "Other scientists believed his unusual research was important",
        "He was the oldest scientist at the hospital",
        "His research had already cured every patient",
        "The award was given as a joke"
      ],
      correctAnswerIndex: 1,
      samplePassage: "The Young Investigator award was a sign that the scientific world was taking his unusual research seriously, and a growing number of scientists thought he was onto something big.",
      hint: "The passage says the award showed scientists took his work seriously.",
      explanation: "Scientific awards are given by fellow scientists, so earning one means his peers respected the work, the single fair conclusion."
    }
  ],
  "superbugs-ch23": [
    {
      id: "sb23-11",
      question: "What is the main idea of this chapter?",
      options: [
        "That visiting Fischetti's laboratory changed McCarthy's mind, as watching lysins burst bacteria apart convinced him they could become the next great weapon against superbugs",
        "That Fischetti decorated his office with a poster of a kitten",
        "That strep bacteria once killed soldiers in World War I",
        "That McCarthy decided to quit medicine and become a poet"
      ],
      correctAnswerIndex: 0,
      samplePassage: "In the laboratory of Fischetti, McCarthy watched bacteria explode under the attack of lysins and learned how these billion-year-old enzymes from bacteria-killing viruses had protected mice from enormous doses of strep.",
      hint: "The passage says the lab visit turned McCarthy from doubter to believer.",
      explanation: "The breakthrough of the title is McCarthy's change of heart: seeing is believing, and the exploding bacteria made lysins real to him. Options 1, 2, and 3 are small details or inventions."
    },
    {
      id: "sb23-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Dreary",
        "Sarcastic",
        "Amazed",
        "Nervous"
      ],
      correctAnswerIndex: 2,
      samplePassage: "McCarthy watched in wonder as lysins burst bacteria apart, saw the framed picture of exploding germs on the wall of Fischetti, and realized a single dose had protected mice from ten million strep bacteria.",
      hint: "The passage describes McCarthy's wonder at the bursting bacteria.",
      explanation: "The chapter glows with discovery, a skeptic watching germs explode and grasping a possible revolution in medicine. That is amazement, not sarcasm or gloom."
    },
    {
      id: "sb23-13",
      question: "Which of these best describes Vincent Fischetti in this chapter?",
      options: [
        "Secretive and unwilling to share his discoveries",
        "A generous veteran who spent nearly fifty years pursuing lysin science and welcomed McCarthy into his lab",
        "New to research and unsure of his own findings",
        "Careless about whether his work ever helped patients"
      ],
      correctAnswerIndex: 1,
      samplePassage: "After nearly fifty years of research at Rockefeller, Fischetti invited McCarthy to visit his laboratory, showed him the exploding bacteria, and patiently explained how lysins might prevent and treat infections.",
      hint: "The passage says the veteran scientist openly shared decades of work.",
      explanation: "Fischetti's long dedication and open invitation show generosity and commitment. He was not a newcomer, not secretive, and clearly cared about turning lysins into real treatments."
    },
    {
      id: "sb23-14",
      question: "What can you infer from McCarthy wanting to fully understand the lysin science before asking patients to sign consent forms?",
      options: [
        "He planned to run the trial without telling patients",
        "He did not trust Fischetti's research",
        "He wanted to impress his neighbors",
        "He felt a deep responsibility to protect the vulnerable patients in his care"
      ],
      correctAnswerIndex: 3,
      samplePassage: "McCarthy wanted to understand the science inside and out before approaching vulnerable patients with a consent form, because he knew they were trusting him with their safety.",
      hint: "The passage links his careful studying to his duty toward patients.",
      explanation: "Studying hard so that patients can make an informed choice is the act of a doctor who takes responsibility seriously, the only conclusion the chapter supports."
    }
  ],
  "superbugs-ch24": [
    {
      id: "sb24-11",
      question: "What is the main idea of this chapter?",
      options: [
        "That the infant's rash was caused by an ordinary skin allergy",
        "That Bruce Ivins was a hero who stopped the anthrax attacks",
        "That anthrax normally spreads through contaminated animal material",
        "That the 2001 anthrax attacks terrorized America, revealed the promise of Fischetti's anthrax-fighting lysin, and showed how slowly great discoveries reach patients"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Three weeks after the World Trade Center attack, anthrax-laced letters spread fear across the country, and McCarthy learned that the lab of Fischetti had already built a lysin that could detect and destroy anthrax, yet years later it still had not reached patients.",
      hint: "The passage connects the attacks, the lysin discovery, and the frustrating delay.",
      explanation: "The chapter weaves three threads: the terror of the attacks, the brilliance of the anthrax lysin, and the frustration that it sat unused. Options 0 and 1 are contradicted, and option 2 is a background detail, not the main idea."
    },
    {
      id: "sb24-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Cheerful",
        "Frightening",
        "Playful",
        "Calm"
      ],
      correctAnswerIndex: 1,
      samplePassage: "In the fearful weeks after September 11, deadly letters spread anthrax across the country, a dark rash appeared on the arm of an infant, and doctors faced a killer they had not seen in twenty-five years.",
      hint: "The passage describes a nation frightened by deadly letters.",
      explanation: "From the mysterious patient to the infant's rash to the suspected insider, the chapter is built on dread, a frightening tone, not a cheerful or calm one."
    },
    {
      id: "sb24-13",
      question: "Which of these best describes Bruce Ivins in this chapter?",
      options: [
        "A knowledgeable scientist who used his expertise to cause terrible harm",
        "A hero who worked to cure the anthrax victims",
        "A stranger who knew nothing about anthrax",
        "A brave whistleblower who tried to stop the attacks"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Investigators believed the attacks were the work of Bruce Ivins, a government scientist who worked on anthrax vaccines at Fort Detrick and therefore understood the deadly germ inside and out.",
      hint: "The passage says the suspect was an expert who knew anthrax well.",
      explanation: "The chapter presents Ivins as an insider whose deep knowledge made the attacks possible, the opposite of a hero, a stranger to the science, or a whistleblower."
    },
    {
      id: "sb24-14",
      question: "What can you infer from the fact that Fischetti's anthrax lysin paper was more than fifteen years old, yet the treatment was still not available to patients?",
      options: [
        "The lysin did not actually work",
        "Scientists had forgotten about anthrax",
        "Turning a brilliant laboratory discovery into a treatment for patients is a slow and difficult process",
        "Fischetti refused to share his discovery with anyone"
      ],
      correctAnswerIndex: 2,
      samplePassage: "More than fifteen years after the discovery landed on the cover of Nature, the lysin was still not available to patients or even in clinical trials, which left McCarthy deeply frustrated.",
      hint: "The passage shows a great discovery stuck for over fifteen years.",
      explanation: "The discovery was real and famous, and Fischetti shared it openly, so the long wait must mean the path from lab to patient is slow and hard, not that the science failed."
    }
  ],
};
