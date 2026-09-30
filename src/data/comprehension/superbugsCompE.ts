import { Question } from '../../types/quiz';

// Higher-order comprehension questions for Superbugs chapters 33-40.
// Set: main idea + tone/mood + two higher-order questions per chapter
// (character trait, inference, or author's point). Sample passages are
// paraphrased prose, never verbatim book quotes.
export const SUPERBUGS_COMP_E: Record<string, Question[]> = {
  "superbugs-ch33": [
    {
      id: "sb33-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Developing a new antibiotic costs about a billion dollars and takes around ten years of testing.",
        "Investing in faster diagnosis and new antibiotics is worth it because it saves lives, slows superbugs, and saves the hospital money.",
        "Tom said patients come to the hospital for cutting-edge medicine.",
        "The hospital voted to add dalbavancin to its formulary after the ENHANCE trial."
      ],
      correctAnswerIndex: 1,
      samplePassage: "McCarthy argues that the hospital should spend money on faster diagnosis and new medicines. He says the payoff is real: patients get better sooner, fewer new superbugs appear, and the hospital spends less in the end.",
      hint: "The passage restates the case made by McCarthy that the investment pays off in lives, fewer superbugs, and savings.",
      explanation: "The chapter is the argument for investing: faster diagnosis and new antibiotics save lives, slow superbugs, and save money — even though a new drug costs about a billion dollars to develop."
    },
    {
      id: "sb33-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Gloomy",
        "Playful",
        "Furious",
        "Hopeful"
      ],
      correctAnswerIndex: 3,
      samplePassage: "McCarthy lays out an optimistic case. He shows that better diagnosis and new drugs can save lives, stop new superbugs from forming, and still leave the hospital with more money — a win for everyone involved.",
      hint: "The passage emphasizes the optimistic win-for-everyone argument McCarthy makes.",
      explanation: "The tone is hopeful: McCarthy is making an upbeat, confident case that spending on new antibiotics will pay off."
    },
    {
      id: "sb33-13",
      question: "Which of these best describes Dr. McCarthy in this chapter?",
      options: [
        "A persuasive advocate who argues that spending on diagnosis and new drugs pays off in saved lives and saved money.",
        "A defeated doctor who has given up on the idea that new antibiotics are worth the cost.",
        "A businessman who cares only about hospital profits and not about patients.",
        "A quiet observer who only repeats what Tom said and adds nothing of his own."
      ],
      correctAnswerIndex: 0,
      samplePassage: "McCarthy builds a careful case of his own, going beyond the words of Tom. He walks through the numbers and argues that the benefits — lives saved, superbugs slowed, money saved — make the investment worthwhile.",
      hint: "The passage describes McCarthy building his own argument with numbers and benefits.",
      explanation: "McCarthy is persuasive and practical here: he makes a dollars-and-lives case for investing in new antibiotics, rather than repeating Tom or giving up."
    },
    {
      id: "sb33-14",
      question: "What can you infer from the fact that new antibiotics cost about a billion dollars to develop but earn poor returns?",
      options: [
        "Scientists will still find new antibiotics quickly and cheaply.",
        "Hospitals will refuse to stock any new antibiotic.",
        "Drug companies will keep putting their money into more profitable medicines unless something changes.",
        "The ENHANCE trial results were too weak to convince anyone."
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter explains that returns on antibiotics are poor, so drug companies prefer to develop medicines like cancer drugs that earn far more money. McCarthy is arguing that this broken math is exactly why the world needs a new way to pay for antibiotics.",
      hint: "The passage links poor returns to companies choosing more profitable medicines.",
      explanation: "If antibiotics cost a billion dollars but earn little, companies will keep investing elsewhere — which is why McCarthy says the system itself must change."
    }
  ],
  "superbugs-ch34": [
    {
      id: "sb34-11",
      question: "What is the main idea of this chapter?",
      options: [
        "A young mother with an untreatable VRE infection sends McCarthy hunting for new drugs, and he discovers the soil-DNA search for new antibiotics led by Sean Brady.",
        "The hospital votes to add dalbavancin to its formulary after a successful trial.",
        "McCarthy visits a guarded patient named Clara to recruit her for his trial.",
        "A student asks why every scientist is not hunting for antibiotics the way Brady does."
      ],
      correctAnswerIndex: 0,
      samplePassage: "The chapter follows the search by McCarthy for a treatment that no existing drug can provide. His hunt leads him to Brady, whose computer scans of soil DNA uncovered malacidins, a brand-new family of antibiotics.",
      hint: "The passage connects the sick young mother to the discovery of the work of Brady.",
      explanation: "The heart of the chapter: an urgent, untreatable case drives McCarthy to look for brand-new antibiotics, and he finds the promising soil-DNA hunt of Brady."
    },
    {
      id: "sb34-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Gloomy",
        "Bitter",
        "Playful",
        "Hopeful"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter opens with a frightening case that no drug can fix, but it quickly turns to an exciting discovery. McCarthy is energized by the work of Brady, and he ends the chapter eager to team up and keep searching.",
      hint: "The passage moves from a scary case to an energizing discovery.",
      explanation: "Although the opening case is grim, the tone is hopeful: the clever discovery of Brady gives McCarthy — and the reader — reason to believe new antibiotics are coming."
    },
    {
      id: "sb34-13",
      question: "Which of these best describes Sean Brady in this chapter?",
      options: [
        "Stubborn, refusing to try any method besides testing chemicals one by one.",
        "Inventive, narrowing the search by scanning soil DNA with a computer instead of testing chemicals one by one.",
        "Lucky, stumbling onto malacidins by pure accident.",
        "Secretive, keeping his discovery hidden from everyone else."
      ],
      correctAnswerIndex: 1,
      samplePassage: "Brady did not rely on luck or the slow old testing method. He designed a computer search that hunts through soil DNA for a telling chemical pattern, and he shared the work as a team effort with ordinary citizens.",
      hint: "The passage credits Brady with a clever computer search and teamwork.",
      explanation: "Brady is inventive: his computer scan of soil DNA was the clever trick that found malacidins, and he treated the discovery as teamwork, not a lucky accident."
    },
    {
      id: "sb34-14",
      question: "Which of these best demonstrates the point made by the author that ordinary people can play a real part in scientific discovery?",
      options: [
        "McCarthy calls Brady at the end of the chapter, eager to talk.",
        "Brady uses a computer program to scan soil DNA.",
        "Malacidins were found through a team effort with help from everyday citizens, not by lucky accident.",
        "The young mother has VRE in her blood."
      ],
      correctAnswerIndex: 2,
      samplePassage: "The book stresses that malacidins were not a lucky accident. They came from a team effort produced by and for average citizens — the way science should work, according to McCarthy.",
      hint: "The passage says the discovery was teamwork by and for ordinary people.",
      explanation: "The point of McCarthy: big discoveries like malacidins happen when scientists work as a team that includes everyday people — science by and for regular citizens."
    }
  ],
  "superbugs-ch35": [
    {
      id: "sb35-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Clara happily joins the trial and her infection is cured right away.",
        "The failed visit to a guarded patient makes Dr. McCarthy question his own motives, and he turns his hopes to the search for new medicines in soil.",
        "McCarthy teaches an ethics seminar about turning lab discoveries into medicines.",
        "The computer of Brady scans soil DNA and finds a new family of antibiotics."
      ],
      correctAnswerIndex: 1,
      samplePassage: "The chapter centers on the visit to Clara by McCarthy, which goes badly and shakes him. He wonders whether the trial is about helping patients or helping his own career, then sits by the reservoir picturing new medicines hidden in the soil.",
      hint: "The passage follows the failed visit, his self-doubt, and his thoughts about soil.",
      explanation: "The core of the chapter: the Clara visit goes poorly, forces McCarthy to question his motives, and pushes him toward the hunt for new antibiotics."
    },
    {
      id: "sb35-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Playful",
        "Triumphant",
        "Reflective",
        "Furious"
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter is quiet and inward-looking. McCarthy replays the awkward visit, admits his answers failed, and asks himself hard questions about why he runs the trial at all.",
      hint: "The passage describes McCarthy replaying the visit and asking himself hard questions.",
      explanation: "The tone is reflective: McCarthy looks back on the visit, admits what went wrong, and honestly examines his own motives."
    },
    {
      id: "sb35-13",
      question: "Which of these best describes Clara in this chapter?",
      options: [
        "Guarded and sharp, asking tough questions that his answers fail to settle.",
        "Warm and trusting, signing up for the trial with a smile.",
        "Careless about her health, showing no interest in the trial at all.",
        "Rude and dismissive, refusing to listen to anything McCarthy says."
      ],
      correctAnswerIndex: 0,
      samplePassage: "Clara stays hard to read through the whole visit. She greets McCarthy with sharp, careful questions about the trial, and his answers do little to put her at ease.",
      hint: "The passage describes her tough questions and his failed answers.",
      explanation: "Clara is guarded and sharp: she probes McCarthy with important questions and stays unconvinced, which is what rattles him."
    },
    {
      id: "sb35-14",
      question: "What can you infer from the offer by McCarthy to leave and never come back if Clara prefers?",
      options: [
        "He did not care whether Clara joined the trial.",
        "He was angry with Clara for asking so many questions.",
        "He thought the trial was pointless and wanted to quit.",
        "He believes patients should join the trial only if they truly want to."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Sensing her hesitation, McCarthy gives her full control: he will leave, come back another day, or never return — whatever she wants. He refuses to pressure her into joining.",
      hint: "The passage says he gives her the choice and refuses to pressure her.",
      explanation: "His offer shows respect: joining the trial must be her free choice, not something she is talked into."
    }
  ],
  "superbugs-ch36": [
    {
      id: "sb36-11",
      question: "What is the main idea of this chapter?",
      options: [
        "McCarthy discovers malacidins by scanning soil DNA with a computer.",
        "The class learns how to run a clinical drug trial step by step.",
        "McCarthy proves that investors always put patients before profits.",
        "A classroom debate about the hard road from lab discovery to real medicine pushes McCarthy to investigate teixobactin himself."
      ],
      correctAnswerIndex: 3,
      samplePassage: "The seminar wrestles with a big problem: why is it so hard to turn a lab molecule into a medicine patients can use. A sharp question from a student lights a spark, and days later McCarthy is on the phone with scientist Kim Lewis chasing answers.",
      hint: "The passage links the class debate to the phone call about teixobactin.",
      explanation: "The point of the chapter: the ethics debate exposes how tough the drug pipeline is, and the curiosity of the students sends McCarthy hunting for the next lead."
    },
    {
      id: "sb36-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Gloomy",
        "Curious and lively",
        "Sleepy",
        "Bitter"
      ],
      correctAnswerIndex: 1,
      samplePassage: "The classroom buzzes with questions. Students debate soil antibiotics, investors, and the long road from lab to patient, and their curiosity is contagious enough to send their teacher off to investigate.",
      hint: "The passage describes a buzzing classroom full of questions.",
      explanation: "The tone is curious and lively: a spirited class debate full of sharp questions from the students."
    },
    {
      id: "sb36-13",
      question: "Which of these best describes Dr. McCarthy in this chapter?",
      options: [
        "Arrogant, dismissing his students questions as unimportant.",
        "Bored, lecturing without listening to anyone.",
        "Curious and humble, following up on the sharp question of a student by calling a scientist himself.",
        "All-knowing, already having every answer about teixobactin."
      ],
      correctAnswerIndex: 2,
      samplePassage: "McCarthy guides the ethics debate, but he also listens. When a student asks why every scientist is not hunting for drugs like Brady, he takes the question seriously enough to phone Kim Lewis himself a few days later.",
      hint: "The passage shows him listening and then chasing down answers himself.",
      explanation: "McCarthy is a teacher who learns: a question from a student is sharp enough to send him off to call a scientist and learn more."
    },
    {
      id: "sb36-14",
      question: "Which of these best demonstrates the point made by the author that turning a lab discovery into a real medicine is a long, costly struggle?",
      options: [
        "The class discusses investors because carrying a new molecule from the laboratory to patients is difficult and expensive.",
        "The students agree that new drugs reach patients quickly and cheaply.",
        "Brady tests soil chemicals one by one, the slow old way.",
        "Teixobactin was discovered in a New York City park."
      ],
      correctAnswerIndex: 0,
      samplePassage: "The seminar turns to venture capitalists for a reason: the journey from a promising molecule in a lab to a medicine in the hands of a patient takes years and enormous sums of money.",
      hint: "The passage ties investors to the long, expensive road from lab to patient.",
      explanation: "The point of the author: brilliant discoveries still need huge, risky investments to survive years of testing — which is why the class debates who pays and who profits."
    }
  ],
  "superbugs-ch37": [
    {
      id: "sb37-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Scientists should stop searching because all the good antibiotics have already been found.",
        "The iChip is a robot that digs through soil looking for treasure.",
        "McCarthy profiles the clever iChip hunt of Kim Lewis for soil antibiotics and the bottlenecks that stall new drugs, arguing the search must continue.",
        "McCarthy visits a guarded patient named Clara to recruit her for his trial."
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter follows the investigation into teixobactin and Kim Lewis: the iChip that grows stubborn bacteria, the thousands of compounds pulled from soil, and the stuck stages where new drugs die. It closes with a call to keep searching.",
      hint: "The passage names the iChip, the soil compounds, and the bottlenecks.",
      explanation: "The heart of the chapter: the soil hunt of Lewis is ingenious, the pipeline has painful choke points, and scientists must never stop searching."
    },
    {
      id: "sb37-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Hopeful and determined",
        "Hopeless",
        "Silly",
        "Angry"
      ],
      correctAnswerIndex: 0,
      samplePassage: "From the Maine soil to the iChip to thousands of new compounds, the chapter builds toward a confident ending: cures are waiting beneath the topsoil, and the hunt must go on.",
      hint: "The passage builds toward the hopeful ending about cures waiting underground.",
      explanation: "The tone is hopeful and determined: the chapter celebrates clever science and insists the search for new antibiotics must continue."
    },
    {
      id: "sb37-13",
      question: "Which of these best describes Kim Lewis in this chapter?",
      options: [
        "Careless, naming new bacteria without studying them first.",
        "Lazy, waiting for stubborn bacteria to grow in lab dishes on their own.",
        "Discouraged, convinced that no new antibiotics remain to be found.",
        "Clever and practical, building the iChip to grow bacteria that refuse lab dishes and fixing the slow stages of drug development."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Lewis invented the iChip to outwit bacteria that would not grow in a lab, and he spends his energy on bottlenecks — the stuck stages where promising discoveries die before becoming medicines.",
      hint: "The passage credits Lewis with the iChip and the attack on bottlenecks.",
      explanation: "Lewis is a practical problem-solver: instead of waiting, he builds tools like the iChip and attacks the choke points that slow new drugs down."
    },
    {
      id: "sb37-14",
      question: "What can you infer from the fact that the bacterium making teixobactin could never grow in a laboratory?",
      options: [
        "Teixobactin cannot help any patients.",
        "Many useful medicines have stayed hidden because the bacteria that make them cannot be grown in labs.",
        "Soil holds no useful chemicals at all.",
        "The iChip turned out to be a complete failure."
      ],
      correctAnswerIndex: 1,
      samplePassage: "The teixobactin maker was unknown to science precisely because it would not grow in a lab dish. The whole approach of Lewis assumes countless such bacteria — and their medicines — are still hiding for the same reason.",
      hint: "The passage says the germ stayed unknown because it would not grow in a lab.",
      explanation: "If the teixobactin bacterium stayed hidden just because labs could not grow it, then many other life-saving medicines are probably still hidden the same way."
    }
  ],
  "superbugs-ch38": [
    {
      id: "sb38-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Over lunch, Tom tells how a young patient named Anna survived a spinal infection, surgery, and a stroke — a story that reminds him why he became a doctor.",
        "McCarthy runs a dalbavancin trial for a patient with a spinal infection.",
        "Tom teaches an ethics class about investors and new drugs.",
        "Surgeons discover that the infection of Anna was caused by ordinary staph bacteria."
      ],
      correctAnswerIndex: 0,
      samplePassage: "The chapter is the story Tom tells over a salad: months of danger for Anna, a fungal infection, a stroke, and then the joyful moment she walked out holding the hand of her father. It ends with Tom remembering the loss that led him to medicine.",
      hint: "The passage follows the story of Tom from danger to the joyful walk home.",
      explanation: "The core of the chapter is the against-the-odds recovery of Anna as Tom tells it — and how her fight reminded him why he chose to be a doctor."
    },
    {
      id: "sb38-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Cold and clinical",
        "Playful and silly",
        "Warm and moving",
        "Bitter and angry"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Told over a quiet lunch, the story moves from months of fear to the tender image of Anna walking out hand in hand with her father, then to the memory of Tom of the mother whose death set him on this path.",
      hint: "The passage moves from fear to the tender image of Anna walking out.",
      explanation: "The tone is warm and moving: a frightening story told with care, ending in joy and in the memory of Tom of why he became a doctor."
    },
    {
      id: "sb38-13",
      question: "Which of these best describes Tom Walsh in this chapter?",
      options: [
        "Cold and distant, ignoring the difficult cases of other doctors.",
        "Reckless, skipping tests and guessing at the treatment of Anna.",
        "Impatient, giving up on Anna when her infection spread.",
        "Caring and devoted, tracking the progress of a young patient for months with an old inflammation test and treasuring her recovery."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Tom follows the case of Anna closely for months, using C-reactive protein to watch her progress, advising Dr. Levy, and later telling her story with obvious warmth — the ending clearly means the world to him.",
      hint: "The passage shows months of careful tracking and a warm telling of her recovery.",
      explanation: "Tom is caring and devoted: he sticks with the case of Anna for months, uses every tool he trusts, and celebrates her walk out of the hospital."
    },
    {
      id: "sb38-14",
      question: "Which of these best demonstrates the point made by the author that superbugs are not only bacteria?",
      options: [
        "Tom tracks the progress of Anna with an old 1930s inflammation test.",
        "The abscesses of Anna were caused by Aspergillus, a fungus, not a bacterium.",
        "McCarthy gives Anna dalbavancin and her infection clears up.",
        "The surgeons removed every last bit of infected material from Anna."
      ],
      correctAnswerIndex: 1,
      samplePassage: "The infected material in the scalp of Anna turned out to be Aspergillus — a fungus. The chapter uses her case to show that the word superbug covers more than bacteria.",
      hint: "The passage names a fungus as the cause of the abscesses of Anna.",
      explanation: "The case of Anna makes the point: dangerous, hard-to-treat infections can come from fungi like Aspergillus too, not just bacteria."
    }
  ],
  "superbugs-ch39": [
    {
      id: "sb39-11",
      question: "What is the main idea of this chapter?",
      options: [
        "A schoolteacher joins the trial, heals completely, and returns with a thank-you card from her class — a reversal for her and a reward for the trial.",
        "Clara, a guarded patient, refuses to join the dalbavancin trial.",
        "The MRSA infection of Jennifer spreads and the trial drug fails to help her.",
        "McCarthy argues that new antibiotics are too expensive to develop."
      ],
      correctAnswerIndex: 0,
      samplePassage: "The chapter follows Jennifer from her worried first visit — a red MRSA welt on her arm, her mind on her students — to her joyful return, healed, carrying a card her class signed for the doctors.",
      hint: "The passage follows Jennifer from worry to healing to the thank-you card.",
      explanation: "The arc of the chapter is the reversal of Jennifer — sick to healed — and the reward: her gratitude and the card of her class, showing what a new antibiotic can give back."
    },
    {
      id: "sb39-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Grim",
        "Suspenseful and frightening",
        "Bitter",
        "Warm and uplifting"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter glows with good news: a worried teacher is healed, she is back with her students, and she arrives at her follow-up with a big smile and a card from her class.",
      hint: "The passage emphasizes the good news and the big smile.",
      explanation: "The tone is warm and uplifting: the healing of Jennifer and the card of her class make this one of the happiest chapters of the book."
    },
    {
      id: "sb39-13",
      question: "Which of these best describes Jennifer in this chapter?",
      options: [
        "Selfish, joining the trial only to get attention.",
        "Careless, signing the consent form without reading it.",
        "Caring and selfless, worrying more about protecting her students than about herself.",
        "Dishonest, pretending her rash had healed when it had not."
      ],
      correctAnswerIndex: 2,
      samplePassage: "Reading the consent form, Jennifer brushes past her own worries to ask what she can do to protect her class. Her students come first, even when she is the one who is sick.",
      hint: "The passage says her first worry was protecting her students.",
      explanation: "Jennifer is caring and selfless: a true teacher, her first question is about keeping her students safe, not about herself."
    },
    {
      id: "sb39-14",
      question: "What can you infer from the fact that Jennifer brought a thank-you card signed by her class?",
      options: [
        "The card proves dalbavancin will cure every patient who takes it.",
        "Her recovery mattered to more people than just herself — her whole class felt grateful she was back.",
        "Jennifer disliked teaching and wanted to quit.",
        "McCarthy gave Jennifer the card as a gift."
      ],
      correctAnswerIndex: 1,
      samplePassage: "Jennifer arrives with a big smile and a card signed by her students. The class took the time to sign it because the return of their teacher meant something to them.",
      hint: "The passage says the signed card shows the class cared about her return.",
      explanation: "A whole class signing a card means the healing of Jennifer reached beyond her — her students were grateful to have their teacher back."
    }
  ],
  "superbugs-ch40": [
    {
      id: "sb40-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Bill takes a happy trip to Tuscany and returns in perfect health.",
        "McCarthy teaches his students how to perform the Whipple procedure.",
        "The battle of Bill with pancreatic cancer and a dangerous infection makes the antibiotic crisis personal, showing why new drugs are urgently needed.",
        "The hospital votes to stock a new antibiotic after a successful trial."
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter follows Bill from a bright trip to Tuscany into a frightening medical ordeal: pancreatic cancer, a massive Whipple surgery, and then staph bacteria in his spine. For McCarthy, the superbug crisis is suddenly about someone he loves.",
      hint: "The passage connects the ordeal of Bill to why new antibiotics are needed.",
      explanation: "The point of the chapter: the cancer and infection of Bill bring the crisis home — this is why the world urgently needs new antibiotics. Help wanted."
    },
    {
      id: "sb40-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Urgent and heartfelt",
        "Playful",
        "Bored",
        "Smug"
      ],
      correctAnswerIndex: 0,
      samplePassage: "The chapter reads like the frightened vigil of a family: a beloved father-in-law faces cancer and then a dangerous infection, and McCarthy writes with raw honesty about how much is at stake.",
      hint: "The passage describes the frightened vigil of a family over someone they love.",
      explanation: "The tone is urgent and heartfelt: the ordeal of Bill makes the need for new antibiotics feel personal and immediate."
    },
    {
      id: "sb40-13",
      question: "Which of these best describes Bill Morris in this chapter?",
      options: [
        "Fearful of doctors, refusing every treatment offered to him.",
        "Resilient, facing massive surgery, more chemotherapy, and a dangerous infection without giving up.",
        "Uncaring about his family, going through the ordeal alone.",
        "Perfectly healthy, with no medical problems at all."
      ],
      correctAnswerIndex: 1,
      samplePassage: "Bill endures a grueling Whipple operation, learns the cancer has reached a major vein, and still faces more chemotherapy and a spinal infection — yet he keeps fighting through each new blow.",
      hint: "The passage shows Bill enduring surgery, chemo, and infection while still fighting.",
      explanation: "Bill is resilient: through cancer surgery, more chemo, and a dangerous infection, he keeps going — the toughness of a lifelong coach and teacher."
    },
    {
      id: "sb40-14",
      question: "Which of these best demonstrates the point made by the author that the superbug crisis is personal and urgent?",
      options: [
        "The surgery of Bill removed every trace of cancer from his body.",
        "McCarthy stopped caring about new antibiotics after Bill got sick.",
        "Pancreatic cancer can be cured with old antibiotics alone.",
        "Even after surviving the Whipple, Bill faces staph bacteria in his spine — showing that someone the author loves needs new antibiotics now."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Bill survives the enormous surgery only to face another enemy: staph bacteria spreading in his spine. For McCarthy, the abstract crisis has a face — the face of his father-in-law.",
      hint: "The passage says the crisis now has a face: the face of Bill.",
      explanation: "The point of the author lands through Bill: when someone you love faces a dangerous infection, the need for new antibiotics is not abstract — it is urgent and personal."
    }
  ],
};
