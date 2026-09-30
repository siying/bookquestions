import { Question } from '../../types/quiz';

// Higher-order comprehension questions for Superbugs chapters 1-8.
// Set: main idea + tone/mood + two higher-order questions per chapter
// (character trait, inference, or author's point). Sample passages are
// paraphrased prose, never verbatim book quotes.
export const SUPERBUGS_COMP_A: Record<string, Question[]> = {
  "superbugs-ch1": [
    {
      id: "sb1-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Alexander Fleming invents the microscope and uses it to see germs for the first time.",
        "A French nurse discovers a red dye that cures infections in soldiers.",
        "A young army doctor named Alexander Fleming treats terrible battlefield wounds in World War I and begins his search for a way to stop deadly infections.",
        "New machine guns single-handedly win the war for the French and British armies."
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter follows Alexander Fleming, a young Scottish captain in the Royal Army Medical Corps, as he treats wounded soldiers at Boulogne in 1914. With no medicine that can stop wound infections, he begins studying how germs attack soldiers, setting him on a lifelong search for a cure.",
      hint: "Think about what the whole chapter is about: Fleming, the war, and the beginning of his search.",
      explanation: "The chapter introduces Fleming during World War I and shows how facing unstoppable infections pushed him toward the search that would define his career."
    },
    {
      id: "sb1-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "playful",
        "grim",
        "cheerful",
        "bored"
      ],
      correctAnswerIndex: 1,
      samplePassage: "The chapter describes shattered bones, dying soldiers, and diseases like tetanus that caused paralysis and suffocation. Fleming works amid heavy losses in a makeshift battlefield hospital, with no weapon against the germs killing his patients.",
      hint: "The passage is full of suffering and death, so which mood word matches that?",
      explanation: "Grim fits best: the chapter is dark and serious, filled with wounded soldiers and unstoppable infections."
    },
    {
      id: "sb1-13",
      question: "Which of these best describes Fleming in this chapter?",
      options: [
        "Observant and determined, studying infected wounds in the laboratory to understand how germs killed soldiers.",
        "Lazy and careless, ignoring the wounded men in his hospital.",
        "Timid and unwilling, begging his commanders to send him back to London.",
        "Cruel and dismissive, refusing to treat soldiers with serious injuries."
      ],
      correctAnswerIndex: 0,
      samplePassage: "Fleming not only treated the wounded but used the Boulogne base as a wound-research laboratory, carefully studying how battlefield wounds became infected. His curiosity about what was killing his patients went far beyond his daily duties.",
      hint: "Look at what Fleming did besides treating patients, and think about what that says about him.",
      explanation: "Fleming went beyond his duties to study infected wounds in the lab, showing an observant, determined scientist driven by curiosity."
    },
    {
      id: "sb1-14",
      question: "What can you infer from the fact that tetanus worried Fleming more than amputation or gangrene?",
      options: [
        "Tetanus was a mild illness that soldiers recovered from easily.",
        "Fleming had never heard of tetanus before this chapter.",
        "Very few soldiers ever caught tetanus during the war.",
        "Tetanus was an especially deadly and frightening threat to the soldiers."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Fleming imagined many terrible fates for his wounded patient, from amputation to gangrene, but tetanus worried him most. It caused paralysis and eventual suffocation, and it was already terrorizing many British soldiers in his hospital.",
      hint: "If Fleming feared tetanus more than amputation and gangrene, what must be true about it?",
      explanation: "Tetanus locked the body's muscles and stopped breathing, and it was striking many soldiers, which is why Fleming feared it most of all."
    }
  ],
  "superbugs-ch2": [
    {
      id: "sb2-11",
      question: "What is the main idea of this chapter?",
      options: [
        "A chance discovery of mold killing bacteria in Fleming's lab led to penicillin, but it took years of hard work by many scientists to turn it into a medicine.",
        "Fleming invented antibiotics on purpose while testing a new red dye at Oxford.",
        "The chapter explains how World War I battlefield hospitals were built in France.",
        "The 1945 Nobel Prize was given to Fleming alone for discovering mold."
      ],
      correctAnswerIndex: 0,
      samplePassage: "In September 1928 Fleming noticed that Penicillium mold had created a bacteria-free zone on a forgotten plate. He named the substance penicillin, but he could not purify it, and the discovery was ignored for a decade until Florey and Chain at Oxford turned it into a drug that saved soldiers in World War II.",
      hint: "Think about both halves of the story: the lucky accident and the years of work that followed.",
      explanation: "The chapter shows that the discovery was only the beginning — penicillin became a medicine through a decade of later work by other scientists."
    },
    {
      id: "sb2-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "gloomy",
        "angry",
        "hopeful",
        "terrified"
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter moves from a dusty London laboratory to a world-changing cure. A forgotten plate leads to a drug that saves millions, factories produce it in bulk, and three scientists share a Nobel Prize. The story ends with a triumph that still protects us today.",
      hint: "The chapter ends with a drug saving millions of lives, so what mood does that create?",
      explanation: "Hopeful is right: the chapter tells how a small accident grew into one of the greatest victories in the history of medicine."
    },
    {
      id: "sb2-13",
      question: "What can you infer from the fact that Fleming's 1929 report was largely ignored for about ten years?",
      options: [
        "Fleming never told anyone about his discovery.",
        "Scientists in 1929 already had plenty of antibiotics to choose from.",
        "Penicillin was so easy to make that no one thought it was interesting.",
        "A great discovery can be overlooked for years until other scientists take it up."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Fleming published his findings in 1929, but he could not purify the fragile substance, and the scientific world largely shrugged. About ten years later Florey and Chain dug up the forgotten paper and made penicillin into a real medicine.",
      hint: "The discovery was published but ignored, then revived a decade later. What does that tell you about how science moves?",
      explanation: "Fleming published his work, yet it sat forgotten until Florey and Chain revived it — showing that even important discoveries can be overlooked for years."
    },
    {
      id: "sb2-14",
      question: "Which of these best describes Florey and Chain in this chapter?",
      options: [
        "Secretive and dishonest, stealing the discovery and hiding it from the world.",
        "Persistent and hardworking, reviving forgotten research and turning penicillin into a real medicine.",
        "Uninterested in saving lives during the war.",
        "Bitter rivals who refused to work together on the project."
      ],
      correctAnswerIndex: 1,
      samplePassage: "About a decade after the discovery was ignored, Florey and Chain at Oxford dug up his forgotten paper. They figured out how to purify penicillin and proved it could cure infections, work that earned them a share of the 1945 Nobel Prize.",
      hint: "Think about what it took to turn a forgotten paper into a drug the world could use.",
      explanation: "Florey and Chain did the hard, persistent work of purifying penicillin and proving it cured infections, sharing the Nobel Prize for it."
    }
  ],
  "superbugs-ch3": [
    {
      id: "sb3-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Gerhard Domagk opens a successful bakery in Germany after the war.",
        "The chapter explains how Alexander Fleming discovered penicillin in 1928.",
        "Domagk becomes a famous general by leading grenadiers into battle.",
        "Gerhard Domagk survives World War I, holds to his life-saving principles, and through years of failed experiments discovers the first sulfa antibiotics."
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter traces Domagk from a grenadier wounded on the Western Front to a researcher at Bayer who clung to his belief that science must preserve life. After many failed experiments, he found that the red dye Prontosil could cure bacterial infections, launching the sulfa drugs.",
      hint: "Follow the whole arc of the chapter: soldier, scientist, and the discovery he kept failing toward.",
      explanation: "The chapter is the full story of Domagk — wartime survival, strong principles, and persistence through failure to the sulfa drug breakthrough."
    },
    {
      id: "sb3-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "admiring",
        "sorrowful",
        "angry",
        "silly"
      ],
      correctAnswerIndex: 0,
      samplePassage: "The chapter celebrates a man who survived the trenches, refused to bend his principles under the Nazi regime, and kept experimenting after one failure after another until he found a drug that saved countless lives. McCarthy clearly holds him up as a hero worth following.",
      hint: "The chapter treats Domagk as a hero. Which mood word matches that?",
      explanation: "Admiring is the best fit: the chapter praises Domagk as a principled, persistent scientist worthy of respect."
    },
    {
      id: "sb3-13",
      question: "Which of these best demonstrates the author's point that principles guide great science?",
      options: [
        "Domagk abandoned his guiding belief whenever it became inconvenient.",
        "Domagk held fast to his belief that science must preserve life, even under pressure from the Nazi regime.",
        "Domagk quit research the first time an experiment failed.",
        "Domagk refused to share his sulfa discovery with other doctors."
      ],
      correctAnswerIndex: 1,
      samplePassage: "Through all the dangers of his time, Domagk clung to his guiding principle: whatever preserves life is good, and whatever destroys life is evil. Even when the Nazi regime pressured scientists, he let this belief steer his research.",
      hint: "Look for the choice where his principles shape his actions under pressure.",
      explanation: "Domagk kept his principle that science must preserve life even when the government around him demanded otherwise."
    },
    {
      id: "sb3-14",
      question: "What can you infer from the fact that Domagk's experiments failed again and again before he succeeded?",
      options: [
        "Failed experiments prove a scientist is not very skilled.",
        "Domagk should have given up after his first few failures.",
        "Important breakthroughs often require persistence through repeated failure.",
        "Domagk found Prontosil on his very first day in the laboratory."
      ],
      correctAnswerIndex: 2,
      samplePassage: "Though Domagk had been lucky to survive the trenches, he was unlucky in the laboratory again and again. Experiment after experiment failed before his team finally found a compound that killed bacteria.",
      hint: "His breakthrough came only after years of failure. What does that say about how big discoveries happen?",
      explanation: "Domagk succeeded only because he kept going after one failure after another — persistence turned repeated failure into a breakthrough."
    }
  ],
  "superbugs-ch4": [
    {
      id: "sb4-11",
      question: "What is the main idea of this chapter?",
      options: [
        "The Tuskegee study gave free healthcare to hundreds of Black men in Alabama.",
        "A forty-year government study that watched Black men suffer without treatment shows why strict ethical rules must protect trial patients.",
        "The chapter explains how penicillin was discovered in a London laboratory.",
        "A whistleblower was punished for telling the truth about a medical study."
      ],
      correctAnswerIndex: 1,
      samplePassage: "For forty years, the U.S. Public Health Service followed hundreds of poor Black men with syphilis, telling them they had bad blood and never offering penicillin, the cure. The chapter uses this injustice to show McCarthy why his own trial must be bound by strict ethical safeguards.",
      hint: "Think about the whole chapter: the study itself, and the lesson McCarthy takes from it.",
      explanation: "The chapter recounts the forty-year injustice of Tuskegee and the lesson McCarthy draws: trials need strict ethical rules so patients are never exploited again."
    },
    {
      id: "sb4-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "playful",
        "cheerful",
        "hopeful",
        "furious"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter describes around one hundred men dying of an untreated disease while researchers watched, performed painful spinal taps, and withheld the cure even after it existed. McCarthy draws a blunt lesson: doctors do not always act in the best interests of their patients.",
      hint: "The chapter describes a terrible injustice. Which mood word matches the reaction to it?",
      explanation: "Furious fits: the chapter seethes with outrage at forty years of harm done to patients who deserved better."
    },
    {
      id: "sb4-13",
      question: "Which of these best describes the person who leaked the Tuskegee story in 1972?",
      options: [
        "Careless and dishonest, spreading rumors without knowing the facts.",
        "Loyal to the study leaders, trying to help them continue their work.",
        "Brave and principled, speaking up to stop forty years of harm.",
        "Greedy for money, selling the story for a large payment."
      ],
      correctAnswerIndex: 2,
      samplePassage: "The forty-year study only ended when a former Public Health Service employee leaked the details to the Associated Press in July 1972. The public outrage that followed shut the study down and saved the remaining men from further harm.",
      hint: "Think about what the leaker risked by speaking out, and what his actions achieved.",
      explanation: "Leaking the story took courage, and it ended decades of suffering — a brave, principled act."
    },
    {
      id: "sb4-14",
      question: "Which of these best demonstrates the author's point that researchers can harm patients when no rules restrain them?",
      options: [
        "Researchers kept watching men die of syphilis for forty years even after a cure existed.",
        "Every man in the study recovered fully without any help.",
        "Review boards stopped the study in its very first year.",
        "Penicillin had not been invented yet, so no cure was possible."
      ],
      correctAnswerIndex: 0,
      samplePassage: "Even after penicillin became the recognized cure for syphilis in the 1940s, the researchers did not offer it to the men. They simply kept observing the disease until a leak to the press in 1972 finally stopped the study.",
      hint: "Look for the choice where the lack of rules let researchers keep harming patients.",
      explanation: "With no rules to stop them, researchers watched men die for forty years even after penicillin could have cured them."
    }
  ],
  "superbugs-ch5": [
    {
      id: "sb5-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Modern trials protect patients with a strict written protocol, honest informed consent, and an independent review board that reviews the research plan.",
        "Beecher's report proved that all medical research should be banned forever.",
        "McCarthy decides that protocols are a waste of time and skips them.",
        "The chapter tells the story of Alexander Fleming's laboratory in London."
      ],
      correctAnswerIndex: 0,
      samplePassage: "Determined not to repeat the mistakes of Tuskegee, McCarthy learns the three safeguards of modern trials: a detailed written protocol that governs every step, informed consent so patients truly understand the risks, and an independent IRB that can demand changes or stop a dangerous study.",
      hint: "The chapter is about three protections. Which choice names all of them?",
      explanation: "The chapter lays out the safeguards — protocol, informed consent, and IRB review — that keep modern trials safe and honest."
    },
    {
      id: "sb5-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "playful",
        "scornful",
        "drowsy",
        "earnest"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter is serious and purposeful. McCarthy studies past abuses, takes the Beecher rule to heart, and builds his own trial on safeguards, treating the protection of patients as his highest duty.",
      hint: "The chapter is sincere and serious about doing research the right way. Which word fits?",
      explanation: "Earnest fits: the chapter is sincere and serious about putting ethics first in research."
    },
    {
      id: "sb5-13",
      question: "Which of these best describes Dr. Henry Beecher in this chapter?",
      options: [
        "Timid and silent, afraid to question what other doctors were doing.",
        "Greedy for fame, publishing reports he knew were false.",
        "Courageous and honest, exposing 22 unethical studies and insisting that ethics come before results.",
        "Indifferent to patients, caring only about collecting data."
      ],
      correctAnswerIndex: 2,
      samplePassage: "In 1966 Dr. Henry Beecher published a report exposing 22 American studies that had used patients as experimental subjects without informed consent. He concluded that an experiment is ethical or not from the start, and that good results can never justify unethical means.",
      hint: "Think about what it takes to accuse fellow doctors of wrongdoing in public.",
      explanation: "Beecher bravely exposed unethical research and stood by his rule: an experiment can never become ethical after the fact."
    },
    {
      id: "sb5-14",
      question: "What can you infer from the fact that unethical research continued even after the Nuremberg trials punished Nazi doctors?",
      options: [
        "Once doctors are punished, no new rules are ever needed.",
        "Safeguards must be permanent, since past punishments alone did not stop patient abuse.",
        "Medical research in the 1960s was completely free of ethical problems.",
        "The Nuremberg trials never took place."
      ],
      correctAnswerIndex: 1,
      samplePassage: "Even after the Nuremberg trials punished Nazi doctors, patient abuse and exploitation were still so common in the 1960s that drastic action was needed. That is why permanent safeguards like review boards were created.",
      hint: "If punishment alone did not stop the abuse, what kind of protection is needed instead?",
      explanation: "Punishing bad doctors was not enough to prevent new abuses, so lasting safeguards like IRBs had to be built into the system."
    }
  ],
  "superbugs-ch6": [
    {
      id: "sb6-11",
      question: "What is the main idea of this chapter?",
      options: [
        "McCarthy chooses the color of the hospital walls as his trial's focus.",
        "The chapter argues that doctors should measure nothing and simply guess whether drugs work.",
        "McCarthy decides to measure length of hospital stay as the key test of his drug, always remembering the frightened patients the numbers stand for.",
        "Jackson teaches McCarthy how to repair cars in the hospital garage."
      ],
      correctAnswerIndex: 2,
      samplePassage: "McCarthy decides that length of hospital stay will be the focal point of his trial: if dalbavancin works, patients will recover faster and go home sooner. He keeps thinking of Jackson, the terrified mechanic from Queens, so the measurements stay connected to real people.",
      hint: "The chapter has two threads: what he decides to measure, and the patient he keeps in mind.",
      explanation: "The chapter is about designing the trial around one key measurement — length of stay — while keeping patients like Jackson at the center."
    },
    {
      id: "sb6-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "compassionate",
        "mocking",
        "indifferent",
        "reckless"
      ],
      correctAnswerIndex: 0,
      samplePassage: "The chapter is full of care for frightened patients. McCarthy writes that doctors bring both compassion and science to the bedside, and he holds the terror Jackson felt in the emergency room in his mind as he designs the trial.",
      hint: "McCarthy cares deeply about frightened patients in this chapter. Which word matches that feeling?",
      explanation: "Compassionate is right: the chapter is warm and caring toward the patients behind the numbers."
    },
    {
      id: "sb6-13",
      question: "Which of these best demonstrates the author's point that science and compassion belong together?",
      options: [
        "McCarthy uses careful measurement so he can avoid talking to patients.",
        "McCarthy pairs careful measurement with remembering Jackson's fear, so his numbers serve real, frightened people.",
        "McCarthy believes compassion makes a doctor weak and unscientific.",
        "McCarthy lets the drug company choose every variable in the trial."
      ],
      correctAnswerIndex: 1,
      samplePassage: "McCarthy writes that doctors bring two things to the bedside: compassion for the frightened patient and the science needed to find a treatment that works. He deliberately ties every variable he measures to the real people the trial must serve.",
      hint: "Look for the choice where both the science and the caring show up together.",
      explanation: "McCarthy combines rigorous measurement with compassion, keeping Jackson's fear in mind so the trial serves real people."
    },
    {
      id: "sb6-14",
      question: "Which of these best describes Tom Walsh in this chapter?",
      options: [
        "Impatient and rushed, urging McCarthy to skip the safety steps.",
        "Selfish and secretive, refusing to share anything he learned from decades of trials.",
        "Fearful of new drugs, advising McCarthy to abandon the trial entirely.",
        "Wise and supportive, guiding McCarthy through every decision of the trial's design."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Through every design decision, from the protocol to the variables, McCarthy leaned on his mentor Tom Walsh, the veteran researcher who had run trials for decades and taught him that running a trial is all about the protocol.",
      hint: "Think about how a veteran mentor with decades of trial experience would help.",
      explanation: "Walsh is the wise, supportive mentor whose experience guides McCarthy through designing the trial."
    }
  ],
  "superbugs-ch7": [
    {
      id: "sb7-11",
      question: "What is the main idea of this chapter?",
      options: [
        "The review board approves McCarthy's protocol instantly with no questions.",
        "When the review board sends the protocol back for safety changes, McCarthy learns that protecting patients matters more than speed.",
        "McCarthy decides to fight disease by becoming a professional baseball player.",
        "Walsh quits the trial because the delays are too frustrating."
      ],
      correctAnswerIndex: 1,
      samplePassage: "The review board demands that McCarthy change the risk level in the risk-level section of his protocol, putting the trial on hold. Frustrated but thoughtful, he concludes that getting the safety protections right matters more than starting fast.",
      hint: "The chapter is about a delay, and the lesson McCarthy takes from it.",
      explanation: "Deferment teaches McCarthy the chapter's lesson: safety protections matter more than speed, even when the wait is painful."
    },
    {
      id: "sb7-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "delighted",
        "bored",
        "frustrated",
        "terrified"
      ],
      correctAnswerIndex: 2,
      samplePassage: "McCarthy is frustrated by the slow pace of regulatory review and the weeks of delay while patients need the drug. Yet he forces himself to remember that rushing a powerful new drug into people could harm the very patients he wants to save.",
      hint: "McCarthy wants to start the trial now but has to wait. How would that feel?",
      explanation: "Frustrated is the dominant mood: the chapter is about the agony of waiting while patients need help."
    },
    {
      id: "sb7-13",
      question: "Which of these best describes Tom Walsh in this chapter?",
      options: [
        "Encouraging and principled, reminding McCarthy that their work defends the defenseless.",
        "Angry at McCarthy for making mistakes in the protocol.",
        "Bored with the trial and eager to go home.",
        "Impatient with safety rules, urging McCarthy to ignore the reviewers."
      ],
      correctAnswerIndex: 0,
      samplePassage: "Walsh lives by the mantra he repeats to McCarthy: we defend the defenseless. His reminder helps McCarthy see the delays not as an obstacle but as part of protecting the vulnerable patients no one else can help.",
      hint: "Think about what Walsh's motto says about the kind of person he is.",
      explanation: "Walsh encourages McCarthy with his principled mantra, reframing the delay as part of defending vulnerable patients."
    },
    {
      id: "sb7-14",
      question: "What can you infer from the fact that the review board's delays actually caught safety problems McCarthy had missed?",
      options: [
        "Review boards exist only to annoy scientists.",
        "McCarthy was too careless to be a doctor.",
        "Slow reviews are always a complete waste of time.",
        "Careful oversight can catch safety problems that even a dedicated doctor might miss."
      ],
      correctAnswerIndex: 3,
      samplePassage: "Rewriting the protocol taught McCarthy a humbling lesson: the regulatory review he resented was actually a guardrail, catching safety problems he had missed and protecting future volunteers.",
      hint: "The delay found real problems. What does that say about the value of oversight?",
      explanation: "Even a careful, well-meaning doctor can miss safety problems — which is why an independent review is a valuable guardrail."
    }
  ],
  "superbugs-ch8": [
    {
      id: "sb8-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Bacteria are harmless, so antibiotics are no longer needed.",
        "The FDA should approve every new drug immediately without checking safety.",
        "The 2008 financial crisis proved that the drug industry works perfectly.",
        "To outlast antibiotic resistance, people must use antibiotics wisely and regulators must review new drugs carefully before approval."
      ],
      correctAnswerIndex: 3,
      samplePassage: "McCarthy argues that humans must stop overusing antibiotics, which trains bacteria to become resistant, and that oversight must continue after approval too. Both wise use and careful regulation are needed to keep precious drugs working.",
      hint: "The chapter covers two kinds of oversight: how we use drugs, and how new drugs are reviewed.",
      explanation: "The chapter's point is that stewardship and regulation together — wise use plus careful FDA review — are what keep antibiotics effective."
    },
    {
      id: "sb8-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "carefree",
        "cautionary",
        "silly",
        "cheerful"
      ],
      correctAnswerIndex: 1,
      samplePassage: "The chapter warns that resistance mechanisms already exist in nature for drugs humans have not invented yet, that overuse speeds up resistance, and that a flood of new antibiotics would only teach bacteria to defeat them faster. McCarthy holds up Frances Kelsey as proof that slow, careful review saves lives.",
      hint: "The chapter is full of warnings about what could go wrong. Which word fits?",
      explanation: "Cautionary fits: the chapter warns that carelessness with antibiotics and rushed approvals could cost us these life-saving drugs."
    },
    {
      id: "sb8-13",
      question: "Which of these best describes Frances Oldham Kelsey in this chapter?",
      options: [
        "Easily pressured, approving every drug the company pushed at her.",
        "Careless about safety, rushing thalidomide onto the market.",
        "Steadfast and careful, resisting company pressure and keeping a dangerous drug away from American families.",
        "Famous only because she discovered penicillin in her own laboratory."
      ],
      correctAnswerIndex: 2,
      samplePassage: "Frances Oldham Kelsey was the FDA reviewer who, despite intense pressure from the drug company, repeatedly refused to approve thalidomide. Her stubborn, careful review spared thousands of American families from devastating birth defects.",
      hint: "Think about what it took to keep saying no to a powerful drug company.",
      explanation: "Kelsey stood firm under pressure and kept a dangerous drug off the market, proving that careful oversight saves lives."
    },
    {
      id: "sb8-14",
      question: "Which of these best demonstrates the author's point that oversight must continue even after a drug is approved?",
      options: [
        "McCarthy notes that once an antibiotic is approved, the system must keep it available to the people who truly need it.",
        "The FDA closes down permanently after approving a single drug.",
        "Doctors should prescribe antibiotics for every cold and sore throat.",
        "Approved drugs never need to be restocked or tracked again."
      ],
      correctAnswerIndex: 0,
      samplePassage: "McCarthy notes that approval is only half the battle. Once an antibiotic is approved, the medical system must ensure it remains available to the people who need it most, rather than vanishing through shortages or high prices.",
      hint: "Look for the choice where work still has to be done after approval.",
      explanation: "McCarthy argues that approval alone is not enough — the drug must also stay available and affordable for the patients who need it."
    }
  ],
};
