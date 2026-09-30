import { Question } from '../../types/quiz';

// Higher-order comprehension questions for Superbugs chapters 25-32.
// Set: main idea + tone/mood + two higher-order questions per chapter
// (character trait, inference, or author's point). Sample passages are
// paraphrased prose, never verbatim book quotes.
export const SUPERBUGS_COMP_D: Record<string, Question[]> = {
  "superbugs-ch25": [
    {
      id: "sb25-11",
      question: "What is the main idea of this chapter?",
      options: [
        "The chapter is about a firefighter who teaches McCarthy how to put out fires",
        "McCarthy learns about the ethics of old medical experiments",
        "After months of preparation, the trial is finally ready to begin, and the long-awaited drugs are about to be delivered to patients",
        "The chapter explains how Scynexis built a new hospital"
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter opens on the eve of the trial, with McCarthy imagining the conversations he will have with patients after half a year of observing people like Ruth and George and Erwin and Donny, and the book turns into its final part, Toward a Cure, as the experimental drugs are finally delivered.",
      hint: "The passage describes months of preparation ending as the drugs finally reach patients.",
      explanation: "The chapter is a turning point: after half a year of watching and planning, the trial drugs are finally being delivered and the book moves toward a cure."
    },
    {
      id: "sb25-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Hopeful",
        "Grim",
        "Playful",
        "Furious"
      ],
      correctAnswerIndex: 0,
      samplePassage: "McCarthy imagines the conversations ahead with energy and care, and the chapter closes by ushering in the part of the book called Toward a Cure, as the team stands ready to start.",
      hint: "The passage notes the forward-looking mood as the trial finally begins.",
      explanation: "The chapter feels hopeful: months of waiting are over, the drugs are arriving, and the book turns toward a cure."
    },
    {
      id: "sb25-13",
      question: "What can you infer from McCarthy imagining his patient conversations before the trial begins?",
      options: [
        "He had only learned about the trial that morning",
        "He wanted to avoid speaking with patients",
        "He was sure the trial would be canceled",
        "He had spent half a year preparing and wanted to speak with patients honestly and with care"
      ],
      correctAnswerIndex: 3,
      samplePassage: "After half a year of observing patients like Ruth and George and Erwin and Donny, McCarthy pictures how he will talk with patients about the experimental drugs, thinking carefully about what each person will need to hear.",
      hint: "The passage connects his daydreaming to months of careful preparation.",
      explanation: "The only fair inference is that months of preparation made him thoughtful about how to speak honestly and kindly to patients. He had not just learned about the trial, and he was not avoiding or canceling anything."
    },
    {
      id: "sb25-14",
      question: "Which of these best demonstrates the point the author makes that resistant germs are an urgent threat?",
      options: [
        "McCarthy believed micafungin would cure every patient forever",
        "McCarthy and Tom already expected micafungin to fail, so they had the new Scynexis antifungal ready as the next step",
        "The firefighter was the only patient McCarthy worried about",
        "The trial was delayed because the new drugs did not exist yet"
      ],
      correctAnswerIndex: 1,
      samplePassage: "At the conference table in the office of Tom Walsh, McCarthy explains that he is giving his Candida auris patient micafungin for now, and both men know it will soon stop working, which is why he plans to switch to the new antifungal made by Scynexis.",
      hint: "The passage shows the two doctors already planning for the day the current drug fails.",
      explanation: "Resistance is so certain that the doctors treat micafungin as a stopgap and already have the next drug lined up — a clear sign of how urgent resistant germs are."
    }
  ],
  "superbugs-ch26": [
    {
      id: "sb26-11",
      question: "What is the main idea of this chapter?",
      options: [
        "McCarthy must tell Meghan, who came hoping the trial could help her, that she is the wrong patient for it — and the painful news stays with him afterward",
        "A surgeon fits Meghan with a special boot that cures her leg completely",
        "McCarthy discovers a new antibiotic that cures all purple wounds",
        "The chapter tells the story of how Beethoven wrote his piano music"
      ],
      correctAnswerIndex: 0,
      samplePassage: "The chapter centers on a difficult visit: Meghan arrives with a badly scarred leg and a purple wound she compares to the movie Alien, and McCarthy has to tell her that they will help her but not with antibiotics and not with dalba, because she is the wrong patient for the trial.",
      hint: "The passage focuses on the hard news McCarthy delivers to Meghan.",
      explanation: "Everything in the chapter leads to that one hard conversation: McCarthy must turn away a hopeful patient because the trial cannot help her."
    },
    {
      id: "sb26-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Cheerful",
        "Somber",
        "Playful",
        "Furious"
      ],
      correctAnswerIndex: 1,
      samplePassage: "After delivering the hard news and apologizing for wasting her time, McCarthy sits alone in his empty office with the gentle music of the Moonlight sonata filling the dark room.",
      hint: "The passage ends with a lonely doctor and quiet music in a dark office.",
      explanation: "The chapter is somber: a painful rejection, an apology, and a quiet, lonely ending with sad music."
    },
    {
      id: "sb26-13",
      question: "Which of these best describes Meghan in this chapter?",
      options: [
        "She angrily refuses all help from doctors",
        "She is cheerful and carefree about her wounded leg",
        "She has endured years of trouble with her leg and meets it with grim humor, comparing it to a monster movie",
        "She never lets any doctor look at her injury"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Years of trouble have left her leg mostly scar tissue with a purple crater where skin should be, yet when she describes it she jokes that it looks like the movie Alien, then grimaces and runs a hand through her thick grey hair.",
      hint: "The passage pairs her long suffering with her movie joke.",
      explanation: "Meghan is long-suffering but not bitter: she has lived with the wound for years and uses dark humor to face it. She sought help, not refused it."
    },
    {
      id: "sb26-14",
      question: "What can you infer from McCarthy sitting alone in his dark office with music playing after the visit?",
      options: [
        "He forgot about Meghan as soon as she left",
        "He was celebrating because the trial was succeeding",
        "He was angry at Meghan for taking up his time",
        "The hard conversation weighed on him, and he needed a quiet moment alone"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Half an hour after telling Meghan she was the wrong patient for the trial and apologizing for wasting her time, McCarthy is back in his empty office, where he pulls up the Moonlight sonata and lets the music fill the dark room.",
      hint: "The passage shows what he does in the quiet half hour after the visit.",
      explanation: "Turning a hopeful patient away was painful for McCarthy too — the lonely office and the music show he was sitting with the weight of what he had just done."
    }
  ],
  "superbugs-ch27": [
    {
      id: "sb27-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Louis invents a new antibiotic in the hospital laboratory",
        "McCarthy decides to quit the trial and become a police officer",
        "The chapter explains how the law of stop-and-frisk was passed",
        "Louis, a retired police officer in the dalba trial, lives by a team-first motto and wants a real tune-up so he can walk again, not a quick discharge"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter introduces Louis, a retired police officer who joined the dalba trial, who jokes that he and his fellow officers invented stop-and-frisk, lives by the motto that when the whistle blows everybody goes, and tells the doctor he wants a tune-up so he can walk again instead of a quick discharge.",
      hint: "The passage introduces Louis, his motto, and his goal of walking again.",
      explanation: "The chapter is about Louis: his fighting spirit, his team motto from his policing days, and his determination to truly heal."
    },
    {
      id: "sb27-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Tense",
        "Grim",
        "Warm",
        "Furious"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Louis jokes about his policing days and about the title of his future memoir, and the chapter closes on the all-hands spirit of his motto, as the team fights superbugs together.",
      hint: "The passage notes his jokes and the team spirit of the chapter.",
      explanation: "The chapter feels warm: the humor of Louis and his everybody-goes-together spirit make it an upbeat, encouraging story."
    },
    {
      id: "sb27-13",
      question: "Which of these best describes Louis in this chapter?",
      options: [
        "Selfish and unwilling to act unless someone orders him",
        "Tough, loyal, and determined: he brings a team-first spirit and wants to truly heal so he can walk again",
        "Timid and afraid of doctors",
        "Lazy and uninterested in getting better"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Louis lives by the rule that when the whistle blows, everybody goes, meaning the whole team moves together without hesitation, and he refuses a quick discharge because what matters to him is getting a real tune-up so he can walk again.",
      hint: "The passage links his motto to teamwork and his request to healing.",
      explanation: "Louis is a fighter: loyal to the team and determined to recover fully, not just leave the hospital quickly."
    },
    {
      id: "sb27-14",
      question: "Which of these best demonstrates the point the author makes that beating superbugs takes a team?",
      options: [
        "Louis lived by the rule that when the whistle blows, everybody goes — the whole team moves together without hesitation",
        "McCarthy ran the trial entirely alone with no help from anyone",
        "The drug company refused to supply dalba for the trial",
        "Louis asked to leave the hospital as fast as possible"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Louis learned on the streets that when the call came, the whole team moved together without hesitation, and McCarthy holds up that motto as the spirit of the race against superbugs.",
      hint: "The passage connects the motto to the shared fight against superbugs.",
      explanation: "The motto shows the point of the chapter: like police answering a call, everyone must act together to beat superbugs. McCarthy did not work alone, and Louis did not want a quick exit."
    }
  ],
  "superbugs-ch28": [
    {
      id: "sb28-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Jackson buys a brand-new car to celebrate joining the trial",
        "Even with thousands of skin infections a year, finding the right trial patients is hard — and McCarthy learns to see patients like Jackson the mechanic as whole people",
        "The chapter describes a flood that damaged the hospital",
        "A shoe company invents a new antibiotic called dalba"
      ],
      correctAnswerIndex: 1,
      samplePassage: "The hospital sees thousands of skin and soft tissue infections every year, yet McCarthy runs into mounting obstacles finding patients who qualify for the open-label trial, and through his time with Jackson, a frightened mechanic from Queens, he learns to think of patients as whole people rather than just cases.",
      hint: "The passage contrasts the huge number of infections with the difficulty of enrolling, and names Jackson.",
      explanation: "The two threads of the chapter are the struggle to enroll patients and the growing compassion of McCarthy for the frightened people behind the infections."
    },
    {
      id: "sb28-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Furious",
        "Playful",
        "Bored",
        "Reflective"
      ],
      correctAnswerIndex: 3,
      samplePassage: "McCarthy steps back from the rush to enroll patients and thinks hard about Jackson, deciding he must see the frightened mechanic as a whole person with a life beyond his job and his infection.",
      hint: "The passage shows McCarthy pausing to think deeply about Jackson.",
      explanation: "The chapter is reflective: McCarthy slows down and thinks carefully about what kind of doctor he wants to be."
    },
    {
      id: "sb28-13",
      question: "What can you infer from the quiet, hopeful question Jackson asks his doctor?",
      options: [
        "He was frightened and looking for hope and reassurance that he would be okay",
        "He wanted to buy a new car",
        "He was completely sure he would never recover",
        "He was bored and wanted to leave the hospital"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Frightened by his badly infected wound, Jackson asks his doctor a small, quiet question, searching the face of his doctor for an answer that will tell him he might be all right.",
      hint: "The passage describes a scared patient searching for comfort in the answer of his doctor.",
      explanation: "A frightened person asking a quiet, hopeful question is looking for reassurance — not a car, and not a reason to give up."
    },
    {
      id: "sb28-14",
      question: "Which of these best describes McCarthy in this chapter?",
      options: [
        "He cared only about his trial numbers and ignored his patients as people",
        "He gave up on the trial because enrolling patients was too hard",
        "He worked to see patients as whole people, not just infections or job titles",
        "He refused to listen when Jackson asked for reassurance"
      ],
      correctAnswerIndex: 2,
      samplePassage: "McCarthy realizes he must think of Jackson as something other than a mechanic, as a whole person with a life beyond his job and his infection, and he answers the quiet question from the frightened man with care.",
      hint: "The passage describes his decision to see the whole person.",
      explanation: "McCarthy grows in empathy here: he deliberately looks past the label of mechanic and the infection to the frightened person underneath."
    }
  ],
  "superbugs-ch29": [
    {
      id: "sb29-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Mark refuses to join the trial and the study never begins",
        "The chapter is about McCarthy learning to play the piano",
        "The first patient of the trial, Mark the lawyer, joins after McCarthy honestly answers his hardest question, and McCarthy sees the treatment as a small victory",
        "Mark asks about the hospital lunch menu instead of the drug"
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter follows the very first patient to receive dalbavancin, a lawyer named Mark who reads the consent form with a professional eye, asks whether McCarthy would give the new drug to his own mother, hears yes, and agrees to join, which McCarthy calls a small victory.",
      hint: "The passage follows the first dosing from the consent form to the eager agreement.",
      explanation: "The chapter is the true start of the trial: the first patient, the hardest question, an honest answer, and a small victory."
    },
    {
      id: "sb29-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Furious",
        "Hopeful",
        "Playful",
        "Despairing"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Mark describes his illness as drowning in quicksand and waking up gasping in the night, yet when he decides, he agrees eagerly, ready to get out of the hospital and reclaim his life, and McCarthy calls the treatment a small victory.",
      hint: "The passage pairs frightening illness with an eager, victorious start.",
      explanation: "Fear is present, but the feeling of the chapter is hopeful: a brave patient, an honest doctor, and the first real step forward."
    },
    {
      id: "sb29-13",
      question: "Which of these best describes Mark in this chapter?",
      options: [
        "Careful and brave: he read the fine print, asked the toughest question, and then agreed with courage",
        "Rash and thoughtless: he signed the form without reading a word",
        "Angry and hostile toward McCarthy",
        "Indifferent: he did not care whether the drug worked or not"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Mark studies the long consent form with the careful eye of a lawyer, asks the deeply personal question of whether McCarthy would give the drug to his own mother, and then agrees eagerly, ready to get out of the hospital.",
      hint: "The passage shows his careful reading and his bold question.",
      explanation: "Mark is both thoughtful and brave: he does his homework, asks the hardest question, and then steps forward."
    },
    {
      id: "sb29-14",
      question: "Which of these best demonstrates the point the author makes that a doctor must earn the trust of a patient?",
      options: [
        "McCarthy changed the subject when Mark asked a hard question",
        "The hospital hid the risks of the new drug from Mark",
        "McCarthy rushed Mark to sign without explaining anything",
        "McCarthy answered honestly that he would give the new drug to his own mother, and that honesty won the trust of Mark"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Caught off guard by the question, McCarthy pauses and answers honestly that yes, he would give the brand-new drug to his own mother, and Mark, satisfied by the honest answer, agrees to be the first to receive it.",
      hint: "The passage shows an honest answer leading to a willing patient.",
      explanation: "Trust was earned, not assumed: the honest answer from McCarthy to the hardest question convinced Mark to join."
    }
  ],
  "superbugs-ch30": [
    {
      id: "sb30-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Alicia gives up and refuses all medical care",
        "The chapter is about a cooking contest at the hospital",
        "The family of Alicia ignores her long illness",
        "Alicia keeps fighting after treatment after treatment has failed, carried by hope, determination, and the love in the nine-page letter of her father"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter tells the story of Alicia, who has endured treatment after treatment that failed yet is still here though still hurting, and of the binder her family brought holding the nine-page letter her father wrote as an expression of his love for his daughter.",
      hint: "The passage pairs her failed treatments with the letter of her father.",
      explanation: "The chapter is about endurance: Alicia keeps fighting through failed treatments, held up by hope and the love of her family."
    },
    {
      id: "sb30-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Tender",
        "Furious",
        "Playful",
        "Cold"
      ],
      correctAnswerIndex: 0,
      samplePassage: "McCarthy promises Alicia simply that he will do his best for her, and the family brings a binder holding nine pages her father wrote, full of his love for his daughter.",
      hint: "The passage notes the gentle promise and the loving letter.",
      explanation: "The chapter is tender: pain and setbacks are everywhere, but love and care soften every scene."
    },
    {
      id: "sb30-13",
      question: "Which of these best describes the father of Alicia in this chapter?",
      options: [
        "Absent and uninterested in the illness of Alicia",
        "Angry at Alicia for being sick",
        "Devoted: he wrote a nine-page letter full of love and the family kept it in a binder",
        "Forgetful: he never visited her in the hospital"
      ],
      correctAnswerIndex: 2,
      samplePassage: "The family brings a binder holding a nine-page letter written by the father of Alicia, pages full of his thoughts and his love for his daughter, showing a family that stood by her through her long illness.",
      hint: "The passage describes the letter and what it shows about the family.",
      explanation: "Her father is devoted: nine pages of love, carefully kept in a binder, is proof he stood by her."
    },
    {
      id: "sb30-14",
      question: "What can you infer from Alicia wanting doctors to listen to her and examine her with care?",
      options: [
        "She loved filling out hospital paperwork",
        "She had been judged by a doctor who never examined her, so she wanted careful and respectful care",
        "She was afraid of all doctors and refused all treatment",
        "She only cared about the food of the hospital"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Alicia was upset because a doctor had made up his mind about her case without even examining her, even though she had come asking for help, and what she wanted most was for doctors to listen and examine her with real care.",
      hint: "The passage links her wish to what a previous doctor had done.",
      explanation: "Her wish follows directly from being dismissed: after one doctor judged her without an exam, she wanted doctors who would truly listen and look carefully."
    }
  ],
  "superbugs-ch31": [
    {
      id: "sb31-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Gerard is furious and refuses to consider the trial",
        "Persuading frightened patients to try an experimental drug is hard — they balance fear, work, and trust — and McCarthy will not bend his ethical rules to win them over",
        "The chapter is about a car dealership",
        "McCarthy agrees to break the rules of the trial whenever a patient asks"
      ],
      correctAnswerIndex: 1,
      samplePassage: "The chapter shows McCarthy trying to persuade frightened patients to consider the experimental drug, from Gerard, who worries about missing a week of work yet finds the trial kind of exciting, to a patient whose request would break the rules and gets the answer that McCarthy just cannot do it.",
      hint: "The passage names the worry of Gerard and the firm refusal of McCarthy.",
      explanation: "Persuasion is the work of the chapter: winning patients over honestly, without crossing ethical lines."
    },
    {
      id: "sb31-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Playful",
        "Bored",
        "Earnest",
        "Furious"
      ],
      correctAnswerIndex: 2,
      samplePassage: "McCarthy explains the risks and hopes honestly to each frightened patient, holds firm when asked to bend the rules, and reflects that all his paperwork is pointless unless doctor and patient trust each other as partners.",
      hint: "The passage shows honest, serious conversations with patients.",
      explanation: "The chapter is earnest: McCarthy is sincere and serious about honesty, ethics, and trust."
    },
    {
      id: "sb31-13",
      question: "Which of these best describes Gerard in this chapter?",
      options: [
        "Angry and unwilling to speak with any doctor",
        "Bored by the trial and falling asleep during the visit",
        "Demanding: he ordered McCarthy to break the rules of the trial",
        "Worried and hopeful at once: anxious about missing work, but finding the trial kind of exciting"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Gerard asks whether he would need to be out of work for a week or more, yet despite his worries he admits that joining the trial feels kind of exciting to him, a chance to try something new.",
      hint: "The passage pairs his job worry with his excitement.",
      explanation: "Gerard is a mix of worry and hope: practical concerns about his job, but genuine excitement about the new treatment."
    },
    {
      id: "sb31-14",
      question: "Which of these best demonstrates the point the author makes that doctor and patient must be partners?",
      options: [
        "McCarthy realized all his paperwork was pointless if the patient would not follow his advice — doctor and patient had to trust each other as partners",
        "Patients should sign the consent form without reading anything",
        "Doctors should make every decision without explaining anything",
        "Trust does not matter as long as the paperwork is complete"
      ],
      correctAnswerIndex: 0,
      samplePassage: "McCarthy reflects that he can sift through hundreds of pages of documents, but it is all pointless if the patient is not willing to follow his advice, because doctor and patient have to trust each other and work as partners.",
      hint: "The passage ties the paperwork to the need for partnership.",
      explanation: "The point of the chapter is partnership: no amount of paperwork can replace a patient who trusts the doctor and works with him."
    }
  ],
  "superbugs-ch32": [
    {
      id: "sb32-11",
      question: "What is the main idea of this chapter?",
      options: [
        "With early results looking good, the team plans to share the lessons of the trial widely — starting with careful preparation — so more patients everywhere can benefit",
        "The trial is canceled and the results are kept secret",
        "The microbiology lab scientists are fired from the hospital",
        "Tom Walsh quits medicine and moves to another country"
      ],
      correctAnswerIndex: 0,
      samplePassage: "With word getting out about dalba and more doctors asking about it, the team decides to get the word out on a larger scale, guided by the saying Tom Walsh loves, that the battle is won before it is fought, meaning careful preparation decides success.",
      hint: "The passage describes the decision to share results on a larger scale.",
      explanation: "The rollout is the heart of the chapter: good early news, careful planning, and a decision to spread the lessons far beyond one hospital."
    },
    {
      id: "sb32-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Grim",
        "Anxious",
        "Furious",
        "Optimistic"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Word is getting out about dalba, the backroom boys of the microbiology lab have become respected friends and partners, and the team plans to share what it is learning with the wider world.",
      hint: "The passage lists the good news spreading through the chapter.",
      explanation: "The chapter is optimistic: the drug is working, the team is united, and the future looks bright."
    },
    {
      id: "sb32-13",
      question: "What can you infer from the team going from calling the lab scientists the backroom boys to treating them as respected friends and partners?",
      options: [
        "The doctors never needed the lab team at all",
        "The work of the lab team proved so valuable that the doctors came to respect them deeply",
        "The lab scientists were replaced by a brand-new staff",
        "The lab team refused to help with the trial"
      ],
      correctAnswerIndex: 1,
      samplePassage: "The microbiology lab team started out as the backroom boys, the scientists working behind the scenes, but they are no longer seen as hidden helpers — they have become respected friends and true partners in the fight.",
      hint: "The passage traces their change in status from hidden helpers to partners.",
      explanation: "Respect is earned: the behind-the-scenes work of the lab team proved so important that the doctors came to see them as true partners."
    },
    {
      id: "sb32-14",
      question: "Which of these best demonstrates the point the author makes that preparation decides success?",
      options: [
        "The team started treating patients with no plan at all",
        "Tom Walsh believed that luck alone would decide the outcome",
        "Tom Walsh reminded the team of Sun Tzu: the battle is won before it is fought, so careful planning decides success before the work begins",
        "The team decided that preparation was a waste of time"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Tom Walsh quotes the ancient strategist Sun Tzu, that the battle is won before it is fought, and for the trial team the saying means that careful preparation and planning decide their success long before the first patient is treated.",
      hint: "The passage applies the old saying to the planning of the trial.",
      explanation: "The point of the chapter is preparation: like a battle planned before it is fought, the success of the trial was decided by the careful groundwork."
    }
  ],
};
