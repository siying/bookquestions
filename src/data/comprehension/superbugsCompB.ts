import { Question } from '../../types/quiz';

// Higher-order comprehension questions for Superbugs chapters 9-16.
// Set: main idea + tone/mood + two higher-order questions per chapter
// (character trait, inference, or author's point). Sample passages are
// paraphrased prose, never verbatim book quotes.
export const SUPERBUGS_COMP_B: Record<string, Question[]> = {
  "superbugs-ch9": [
    {
      id: "sb9-11",
      question: "What is the main idea of this chapter?",
      options: [
        "McCarthy studies the Tuskegee study to learn about ethics in medical research",
        "Tom Walsh teaches McCarthy to improvise, adapt, and overcome every obstacle",
        "McCarthy pushes through slow hospital bureaucracy to get his trial approved, learning that careful preparation is part of doing important work well",
        "McCarthy decides that length of hospital stay will be the key measurement in his trial"
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter follows McCarthy through the final stretch of hospital bureaucracy. He rehearses his case again and again, leans on the encouragement of Walsh, and waits through review after review. At last the approvals arrive and the trial can begin, teaching him that slow and careful preparation is part of doing important work well.",
      hint: "The passage describes the long wait, the rehearsals, and the approval that finally lets the trial start.",
      explanation: "The chapter is about the bureaucratic backwater McCarthy must cross before his trial can begin. Rehearsing, revising, and waiting feel slow and boring, but they are the preparation that makes the trial safe and ready. The other options describe details from other chapters or only small parts of this one."
    },
    {
      id: "sb9-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Hopeful",
        "Bitter",
        "Playful",
        "Furious"
      ],
      correctAnswerIndex: 0,
      samplePassage: "McCarthy feels frustrated by the endless waiting, yet he refuses to quit. Walsh keeps urging him to stay focused and hang in there. When the approvals finally come through, the mood lifts toward hope and determination.",
      hint: "The passage mixes frustration with steady encouragement and a hopeful ending.",
      explanation: "Hopeful fits best. McCarthy is frustrated by the delays, but the chapter is not angry or bitter. Walsh keeps him steady, and the trial wins approval in the end, so the tone is one of hope and determination."
    },
    {
      id: "sb9-13",
      question: "Which of these best demonstrates the author's point that slow preparation is part of doing important work well?",
      options: [
        "McCarthy skips all the forms so he can start the trial sooner",
        "McCarthy quits the trial when the review board slows him down",
        "Walsh tells McCarthy that rehearsing is a waste of time",
        "McCarthy rehearses his explanations again and again and waits through every review until the trial earns approval"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Instead of skipping the paperwork or quitting, McCarthy rehearses his explanations until he can defend the trial clearly, waits through each slow review, and earns approval. The careful work that felt like a backwater turns out to be part of doing the job well.",
      hint: "The passage points to the rehearsals and the waiting as proof that slow work matters.",
      explanation: "McCarthy does the slow work, rehearsing and waiting through every review, and that preparation is what makes the trial ready. The wrong options are contradicted by the chapter: he does the forms, keeps going, and Walsh supports him."
    },
    {
      id: "sb9-14",
      question: "What can you infer from the fact that McCarthy kept rehearsing his trial explanations?",
      options: [
        "He planned to become a professional public speaker",
        "He believed the trial was worth the effort to defend",
        "He thought reviewers would never approve the trial",
        "He had forgotten how the drug was supposed to work"
      ],
      correctAnswerIndex: 1,
      samplePassage: "McCarthy practices his pitch over and over so he can explain clearly why the drug should work and why the trial deserves to move forward.",
      hint: "The passage says he practices explaining the drug and the trial again and again.",
      explanation: "A reader can infer that McCarthy believes the trial is worth defending, since he puts so much effort into explaining it well. He would not rehearse so hard for something he did not care about."
    }
  ],
  "superbugs-ch10": [
    {
      id: "sb10-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Ruth teaches McCarthy that charts hold the whole truth about a patient",
        "The trial's first patients teach McCarthy that informed consent is a human conversation and that every patient is more than a chart",
        "McCarthy designs his trial around measuring length of hospital stay",
        "A new antibiotic is discovered in a scoop of dirt from Borneo"
      ],
      correctAnswerIndex: 1,
      samplePassage: "The chapter introduces Ruth, an older Holocaust survivor with trouble swallowing, and her daughter Anne. Meeting them shows McCarthy that informed consent is a real conversation with a vulnerable person, and that every patient has a life story no chart can capture.",
      hint: "The passage names Ruth, Anne, and the two big lessons about consent and charts.",
      explanation: "This is the main idea: through Ruth, the trial becomes about real people. McCarthy learns that consent is a human conversation and that patients are more than their medical records. The other options contradict the chapter or come from other chapters."
    },
    {
      id: "sb10-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Mocking",
        "Frantic",
        "Cold",
        "Tender"
      ],
      correctAnswerIndex: 3,
      samplePassage: "McCarthy sits with the exhausted Ruth, listens to Anne, apologizes for the harsh emergency-room visit, and reflects on her childhood and her love of shoes. The writing is gentle and caring throughout.",
      hint: "The passage describes McCarthy listening, apologizing, and reflecting with care.",
      explanation: "Tender fits best. The chapter treats Ruth with gentleness and compassion, never with mockery, panic, or coldness."
    },
    {
      id: "sb10-13",
      question: "Which of these best describes McCarthy in this chapter?",
      options: [
        "Humble and caring — he apologizes to Ruth for her harsh emergency-room experience",
        "Impatient — he rushes Ruth to sign the consent form without talking to her",
        "Indifferent — he never learns anything about Ruth's life",
        "Dishonest — he hides the trial's risks from Ruth"
      ],
      correctAnswerIndex: 0,
      samplePassage: "McCarthy apologizes to Ruth for what she endured in the emergency room, taking responsibility for the failures of the system instead of pretending they did not happen.",
      hint: "The passage describes him apologizing for the emergency-room experience.",
      explanation: "Apologizing for something he did not personally cause shows humility and care. The chapter contradicts the wrong options: he talks with Anne, learns Ruth's story, and works to make sure she understands the trial."
    },
    {
      id: "sb10-14",
      question: "What can you infer from Anne's remark that much of Ruth's real story is missing from her chart?",
      options: [
        "Charts are never used in hospitals",
        "Doctors should ignore charts completely",
        "Only family members can read medical charts",
        "Doctors need to talk with patients and families to learn the whole story"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Anne tells McCarthy that much of who Ruth really is never made it into the official record. The chart holds diagnoses, but it misses her childhood, her survival, and her love of shoes.",
      hint: "The passage says the chart misses most of who Ruth is.",
      explanation: "A reader can infer that doctors must talk with patients and families, because the chart alone leaves out too much of the whole person."
    }
  ],
  "superbugs-ch11": [
    {
      id: "sb11-11",
      question: "What is the main idea of this chapter?",
      options: [
        "George Hermann, a World War II veteran from Missouri, faces a stubborn skin infection and cheerfully volunteers for McCarthy's trial",
        "Scientists discover vancomycin in a scoop of dirt from Borneo",
        "George refuses to join the trial because he fears being a guinea pig",
        "McCarthy learns about informed consent from an older Holocaust survivor"
      ],
      correctAnswerIndex: 0,
      samplePassage: "The chapter tells the story of George Hermann, a young man from Missouri who flew over New Guinea as an air observer in World War II. Decades later he arrives at the hospital with a stubborn skin infection and cheerfully volunteers for the trial.",
      hint: "The passage covers his wartime service and his cheerful decision to join the trial.",
      explanation: "That is the heart of the chapter: George's remarkable past and his willing choice to join the trial. The other options describe other chapters or contradict his happy-to-help attitude."
    },
    {
      id: "sb11-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Sarcastic",
        "Gloomy",
        "Admiring",
        "Anxious"
      ],
      correctAnswerIndex: 2,
      samplePassage: "McCarthy tells the story of George flying behind the pilot in a tiny plane, dodging enemy dive-bombers, then facing illness decades later with the same brave spirit. The writing shows deep respect for the veteran.",
      hint: "The passage highlights brave service and respect for the veteran.",
      explanation: "Admiring fits best. McCarthy writes about George with respect for his courage, not with sarcasm, gloom, or anxiety."
    },
    {
      id: "sb11-13",
      question: "Which of these best describes George in this chapter?",
      options: [
        "Fearful — the words guinea pig make him refuse to join the trial",
        "Brave and generous — he recalls dodging dive-bombers in the war and gladly signs up, saying he is happy to help",
        "Selfish — he joins only for the payment volunteers receive",
        "Forgetful — he cannot remember anything about his wartime service"
      ],
      correctAnswerIndex: 1,
      samplePassage: "When someone mentions trial volunteers being guinea pigs, George laughs and recalls his war days. He signs the consent form and hands it back, saying he is happy to help.",
      hint: "The passage describes his cheerful response and his willing signature.",
      explanation: "George is brave and generous: a veteran of dangerous missions who gladly volunteers to help others. The wrong options are contradicted by the chapter, since he signs willingly, remembers his service clearly, and asks for nothing."
    },
    {
      id: "sb11-14",
      question: "Which of these best demonstrates the author's point that the trial's volunteers have already lived lives of courage?",
      options: [
        "George took a taxi to the hospital",
        "Erwin asks how to spend his volunteer payment",
        "George demanded payment before he would sign",
        "George spent eighteen months flying over New Guinea as an air observer, searching for targets while dodging enemy dive-bombers"
      ],
      correctAnswerIndex: 3,
      samplePassage: "George enlisted on a whim to see new places and be part of something larger than himself, then spent eighteen months in a small plane over New Guinea, searching for targets while dodging enemy dive-bombers.",
      hint: "The passage describes his choice to serve and the danger he faced.",
      explanation: "That wartime record demonstrates the point: George was already living a life of courage long before he joined the trial. The wrong options are minor details, come from another chapter, or are contradicted by his cheerful willingness."
    }
  ],
  "superbugs-ch12": [
    {
      id: "sb12-11",
      question: "What is the main idea of this chapter?",
      options: [
        "A retired firefighter battles leukemia and a mysterious skin infection",
        "Tom Walsh blocks approval of a dangerous new drug",
        "McCarthy rehearses his pitch to get his trial approved",
        "The chapter traces vancomycin from a scoop of Borneo dirt to a life-saving drug, and introduces Erwin, a young medical student who joins the trial"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter traces the story of vancomycin, from a scoop of dirt collected in Borneo to a chemist at the Eli Lilly company, from a substance called compound 05865 to an approved drug nicknamed Mississippi Mud. It also introduces Erwin, a young medical student who joins the trial.",
      hint: "The passage follows the drug from dirt to nickname and names the new volunteer.",
      explanation: "The main idea combines both threads: the history of vancomycin and the arrival of Erwin. The other options describe other chapters or twist the facts."
    },
    {
      id: "sb12-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Mournful",
        "Awestruck",
        "Sarcastic",
        "Bored"
      ],
      correctAnswerIndex: 1,
      samplePassage: "McCarthy marvels at the journey from a handful of island dirt to a medicine that defeats infections penicillin cannot touch, a discovery that moved from soil to pharmacy in only six years.",
      hint: "The passage expresses wonder at the speed and strangeness of the discovery.",
      explanation: "Awestruck fits best. The chapter treats the discovery with wonder at how a scoop of dirt became a life-saving drug. It is not sad, mocking, or boring."
    },
    {
      id: "sb12-13",
      question: "Which of these best describes Erwin in this chapter?",
      options: [
        "Careful and thoughtful — he studies the consent form for days before signing",
        "Fearful — he backs out of the trial at the last moment",
        "Casual about a serious choice — he grabs a pen, signs quickly, and asks how to spend the volunteer money",
        "Angry — he argues with McCarthy about the drug"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Erwin signs the consent paper, hands it back, and immediately asks his companion how they should spend the money, since trial volunteers are paid for taking part. His eagerness gives McCarthy pause.",
      hint: "The passage shows him signing fast and already thinking about the payment.",
      explanation: "Erwin treats a serious medical decision casually, signing quickly and focusing on the money. The wrong options are contradicted by the chapter: he does not study the form, does not back out, and shows no anger."
    },
    {
      id: "sb12-14",
      question: "What can you infer from Erwin asking how to spend the volunteer money right after signing?",
      options: [
        "Some volunteers may join a trial mainly for the payment, without thinking carefully about the risks",
        "All trial volunteers are medical students",
        "The trial paid volunteers millions of dollars",
        "Erwin had already spent the money before signing"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Right after signing, Erwin asks his companion how they should spend the money that volunteers receive, and McCarthy feels uneasy about whether Erwin took the decision seriously.",
      hint: "The passage links the quick signing to the payment question.",
      explanation: "A reader can infer that paying volunteers can draw in people who join for the money without thinking carefully about the risks, which is exactly what worried McCarthy."
    }
  ],
  "superbugs-ch13": [
    {
      id: "sb13-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Scientists discover that immunotherapy can cure advanced melanoma",
        "George Hermann volunteers for the trial after his taxi ride to the hospital",
        "McCarthy learns that bacteria trade resistance on tiny pieces of DNA",
        "Soren, a young programmer whose surgery led to a painkiller addiction, considers joining the trial, raising hard questions about medicine and addiction"
      ],
      correctAnswerIndex: 3,
      samplePassage: "The chapter follows Soren Gillickson, a thirty-one-year-old computer programmer. After a car accident and surgery, a month of strong painkillers pulls him into addiction. Now, with an infected elbow, he considers joining the trial, and McCarthy faces hard questions about addiction and paid volunteers.",
      hint: "The passage connects the surgery, the painkillers, the addiction, and the trial decision.",
      explanation: "That is the main idea: Soren's story shows how hospital painkillers can start an addiction, and his eagerness to join raises hard questions. The other options come from other chapters."
    },
    {
      id: "sb13-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Somber",
        "Lighthearted",
        "Comic",
        "Triumphant"
      ],
      correctAnswerIndex: 0,
      samplePassage: "McCarthy describes a promising young man transformed into a trembling addict by the very medicines a hospital gave him, a tragedy the chapter says medicine can never fully make up for.",
      hint: "The passage calls the outcome a tragedy medicine cannot undo.",
      explanation: "Somber fits best. The chapter is sad and serious about how addiction began in a hospital. It is not lighthearted, comic, or triumphant."
    },
    {
      id: "sb13-13",
      question: "Which of these best demonstrates the author's point that prescription painkillers can start a life-ruining addiction?",
      options: [
        "Soren's doctor wisely refuses to give him any pain medicine after surgery",
        "Soren recovers from surgery and never thinks about painkillers again",
        "Soren goes home with a thirty-day supply of Dilaudid and returns years later as a trembling addict",
        "Soren's addiction begins at a party with friends"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Soren goes home from the hospital with a thirty-day prescription for the powerful painkiller Dilaudid. When the pills run out, his doctor refuses a refill, but by then the path to addiction has already begun, and years later he arrives as a trembling addict.",
      hint: "The passage traces the addiction back to the prescription after surgery.",
      explanation: "That sequence demonstrates the point: ordinary prescription painkillers started a life-changing addiction. The wrong options are contradicted by the chapter, since he did receive the pills, his addiction is real, and it began in the hospital, not at a party."
    },
    {
      id: "sb13-14",
      question: "Which of these best describes McCarthy in this chapter?",
      options: [
        "Reckless — he rushes every eager volunteer into the trial without a second thought",
        "Thoughtful and cautious — Soren's eagerness to sign gives him pause about whether volunteers are choosing carefully",
        "Indifferent — he does not notice anything unusual about Soren",
        "Hostile — he refuses to speak with Soren because of his addiction"
      ],
      correctAnswerIndex: 1,
      samplePassage: "When McCarthy offers the trial, Soren reaches into a black backpack for a pen and asks where to sign, and his eagerness gives McCarthy pause.",
      hint: "The passage says the quick eagerness makes McCarthy hesitate.",
      explanation: "McCarthy is thoughtful and cautious: he does not rush eager volunteers in, but pauses to wonder whether they are choosing carefully. The wrong options are contradicted by the chapter, since he notices the trembling hand, engages with Soren, and offers the trial."
    }
  ],
  "superbugs-ch14": [
    {
      id: "sb14-11",
      question: "What is the main idea of this chapter?",
      options: [
        "A teenage girl battles leukemia and a fungal infection at the same time",
        "Donny, a retired New York City firefighter exposed to poisons on 9/11, battles leukemia, a transplant complication, and a mysterious skin infection",
        "Jimmy Carter shows that immunotherapy can extend a cancer patient's life",
        "A scientist in Borneo discovers the drug vancomycin"
      ],
      correctAnswerIndex: 1,
      samplePassage: "The chapter follows Donny Alexakis, who served twenty-two years as a New York City firefighter and joined the rescue effort after September 11. Now in his late fifties, he battles leukemia, a brutal transplant complication, and a mysterious skin infection.",
      hint: "The passage names his service, his illnesses, and the infection.",
      explanation: "That is the main idea: Donny's life of duty and the many medical battles he now faces. The other options describe other chapters."
    },
    {
      id: "sb14-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Solemn",
        "Playful",
        "Careless",
        "Frantic"
      ],
      correctAnswerIndex: 0,
      samplePassage: "McCarthy writes with gravity about the rescue workers exposed to poisons at the disaster site, the seventy cancer-causing chemicals in the smoke, and the suffering of a retired firefighter who answered the call of duty.",
      hint: "The passage treats the 9/11 responders and their suffering with gravity.",
      explanation: "Solemn fits best. The chapter is serious and respectful about duty and sacrifice, never playful, careless, or frantic."
    },
    {
      id: "sb14-13",
      question: "Which of these best describes Donny in this chapter?",
      options: [
        "Cowardly — he avoided the 9/11 rescue effort to stay safe",
        "Bitter — he blames other firefighters for his illness",
        "Forgetful — he cannot remember anything about September 11",
        "Dutiful and selfless — though retired, he rushed to help with the rescue effort and had already served twenty-two years as a firefighter"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Though retired and sitting on his Kentucky deck when the towers were struck, Donny rushed to help with the rescue effort, joining more than fifty thousand workers exposed to the poisonous dust.",
      hint: "The passage says the retired firefighter rushed to the rescue effort anyway.",
      explanation: "Donny is dutiful and selfless: he had already served twenty-two years and could have stayed home, but he went to help. The wrong options are contradicted by the chapter, since he joined the effort and spoke clearly about that morning."
    },
    {
      id: "sb14-14",
      question: "What can you infer from the discovery that Donny's skin infection was caused by a fungus, not bacteria?",
      options: [
        "Donny never had any infection at all",
        "Fungi are harmless to humans",
        "The antibiotics his doctors tried could not cure him, because antibiotics fight bacteria, not fungi",
        "Donny's leukemia was caused by the fungus"
      ],
      correctAnswerIndex: 2,
      samplePassage: "Tests reveal that the skin infection troubling Donny comes from a fungus, not bacteria, a twist that changes how his doctors think about his case.",
      hint: "The passage says the infection is fungal, not bacterial.",
      explanation: "A reader can infer that the antibiotics aimed at bacteria could not cure a fungal infection, since antibiotics fight bacteria. That is why the discovery changed the doctors' plan."
    }
  ],
  "superbugs-ch15": [
    {
      id: "sb15-11",
      question: "What is the main idea of this chapter?",
      options: [
        "Remy, a teenager with leukemia and a dangerous fungal infection, nearly dies but recovers after Walsh guides her doctors from afar",
        "A new resistance enzyme called NDM-1 spreads around the world on tiny pieces of DNA",
        "Erwin the medical student joins the trial for the volunteer payment",
        "Ruth's daughter Anne asks McCarthy to fix her mother's trouble swallowing"
      ],
      correctAnswerIndex: 0,
      samplePassage: "The chapter follows Remy, a teenager fighting acute leukemia and a dangerous fungal infection at the same time. After five rounds of chemotherapy, she stands on the verge of death, but with guidance from Walsh her doctors contain the infection, and she begins to walk and hope again.",
      hint: "The passage describes her two illnesses, her near death, and her recovery.",
      explanation: "That is the main idea: Remy's terrifying fight and her hard-won recovery. The other options describe other chapters."
    },
    {
      id: "sb15-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Dull",
        "Silly",
        "Hopeless",
        "Hopeful"
      ],
      correctAnswerIndex: 3,
      samplePassage: "Remy lies on the verge of death as drug after drug fails, and her family despairs. Then the infection is contained, she starts walking, and her family dares to hope she might graduate from high school.",
      hint: "The passage moves from near death to walking and hope.",
      explanation: "Hopeful fits best. The chapter begins in terror but ends with recovery and a family daring to dream of graduation, so hope wins over despair."
    },
    {
      id: "sb15-13",
      question: "Which of these best describes Tom Walsh in this chapter?",
      options: [
        "Uninvolved — he ignores calls from Remy's doctors",
        "Selfish — he keeps his expertise to himself",
        "Generous with his expertise — he calls from far away, tells the doctors how to proceed, and asks for updates on Remy",
        "Impatient — he gives up on Remy when the first drug fails"
      ],
      correctAnswerIndex: 2,
      samplePassage: "From far away, Walsh calls the doctors treating Remy, tells them how to proceed, and asks them to keep him posted on her condition.",
      hint: "The passage describes him guiding the doctors by phone.",
      explanation: "Walsh is generous with his expertise: he does not have to help, but he directs Remy's care from afar and stays involved. The wrong options are contradicted by the chapter, since he answers the call and keeps guiding the team."
    },
    {
      id: "sb15-14",
      question: "What can you infer from the fact that Remy's daily antibiotic ciprofloxacin could not stop her fungal infection?",
      options: [
        "Ciprofloxacin caused Remy's leukemia",
        "Antibiotics do not work against fungi, so different germs need different medicines",
        "Remy was not taking her medicine at all",
        "All antibiotics are useless against every germ"
      ],
      correctAnswerIndex: 1,
      samplePassage: "Remy takes the antibiotic ciprofloxacin every day to prevent bacterial infections, yet a fungal infection still takes hold and nearly kills her.",
      hint: "The passage says the daily antibiotic could not stop the fungus.",
      explanation: "A reader can infer that antibiotics do not work against fungi, so different kinds of germs need different kinds of medicine. That is why the bacterial shield failed."
    }
  ],
  "superbugs-ch16": [
    {
      id: "sb16-11",
      question: "What is the main idea of this chapter?",
      options: [
        "McCarthy finally gets his trial approved after months of bureaucracy",
        "Ruth teaches McCarthy that every patient is more than a chart",
        "The chapter explores bold new weapons against superbugs, like immunotherapy, and frightening new threats, like the resistance enzyme NDM-1",
        "George Hermann flies over New Guinea in a tiny propeller plane"
      ],
      correctAnswerIndex: 2,
      samplePassage: "The chapter steps back to ask why the terrible infection struck Remy and explores two sides of a quiet revolution in medicine: the promise of immunotherapy, which turns the immune system against disease, and the threat of NDM-1, a brand-new resistance enzyme spreading between bacteria.",
      hint: "The passage names the new treatment hope and the new resistance threat.",
      explanation: "That is the main idea: the chapter surveys bold new weapons and frightening new dangers in the race against superbugs. The other options describe other chapters."
    },
    {
      id: "sb16-12",
      question: "Which word best describes the tone of this chapter?",
      options: [
        "Frantic",
        "Thoughtful",
        "Sarcastic",
        "Sleepy"
      ],
      correctAnswerIndex: 1,
      samplePassage: "McCarthy weighs the hope of treatments that harness the immune system against the alarm of bacteria that already resist drugs not yet invented, pausing to think about where medicine is headed.",
      hint: "The passage describes him weighing hope against alarm.",
      explanation: "Thoughtful fits best. The chapter pauses the patient stories to reflect on big questions about the future of medicine, rather than rushing in panic or joking."
    },
    {
      id: "sb16-13",
      question: "Which of these best demonstrates the author's point that doctors need entirely new strategies, not just more antibiotics?",
      options: [
        "Bacteria already carry resistance to drugs humans have not invented yet, and a brand-new enzyme called NDM-1 defeats even the strongest antibiotics",
        "Doctors should stop using antibiotics completely",
        "Immunotherapy has no risks at all",
        "Jimmy Carter invented immunotherapy in 2015"
      ],
      correctAnswerIndex: 0,
      samplePassage: "Scientists find that bacteria in nature already carry resistance to drugs humans have not invented yet, and a brand-new enzyme called NDM-1 appears that can destroy even the strongest antibiotics.",
      hint: "The passage says nature is already ahead of the newest drugs.",
      explanation: "Those facts demonstrate the point: if bacteria outrun every new antibiotic, doctors need entirely new strategies like immunotherapy. The wrong options are contradicted by the chapter, since antibiotics are still precious, immunotherapy carries real risks, and Carter received the treatment rather than inventing it."
    },
    {
      id: "sb16-14",
      question: "What can you infer from the fact that immunotherapy's effects are often reversible?",
      options: [
        "Immunotherapy never causes side effects",
        "Doctors should use immunotherapy on every patient",
        "Immunotherapy works instantly in all cases",
        "If the immune system starts attacking the patient, doctors can undo the treatment's effects, making it safer to try"
      ],
      correctAnswerIndex: 3,
      samplePassage: "McCarthy notes a hopeful fact about immunotherapy: although it can make the immune system go haywire, its effects are often reversible.",
      hint: "The passage says the treatment effects can be undone.",
      explanation: "A reader can infer that doctors can reverse the treatment if the immune system turns against the patient, which makes a risky therapy safer to attempt."
    }
  ],
};
