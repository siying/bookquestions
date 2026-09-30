import { Book } from '../types/quiz';

// Chapters 3-40 of Superbugs: The Race to Stop an Epidemic by Matt McCarthy.
// (Chapters 1-2 live in chapterQuizzes.ts.) Sample passages are paraphrased
// scene summaries, not verbatim book quotes.
export const SUPERBUGS_CHAPTERS: Book[] = [

  {
    id: 'superbugs-ch3',
    title: "Superbugs: Chapter 3 – The Lucky Grenadier",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "rose",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Before designing his trial, McCarthy looks back at Gerhard Domagk, a German soldier who survived World War I and went on to discover the first sulfa antibiotics — drugs that could cure infections inside the body.",
    questions: [
      {
        id: 'sb3-1',
        question: "Who was the \"lucky grenadier\" of the chapter title?",
        options: [
          "An American pilot who flew in World War I",
          "Gerhard Domagk, a German scientist who had served as a grenadier in World War I",
          "A French nurse who worked in a battlefield hospital",
          "An English factory worker who made bandages"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The chapter tells the story of Gerhard Domagk, who enlisted in the German army as a grenadier when World War I broke out in 1914 and lived to become a pioneering medical researcher.",
        hint: "The passage names the German scientist and the soldier's job he held in the war.",
        explanation: "Gerhard Domagk was the lucky grenadier — he survived the war as a soldier and later discovered the first sulfa drugs."
      },
      {
        id: 'sb3-3',
        question: "What was Gerhard Domagk's guiding principle in life?",
        options: [
          "Scientists should keep their discoveries secret",
          "War is the best way to test new medicines",
          "Only rich patients deserve new drugs",
          "Whatever preserves life is good, and whatever destroys life is evil"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Domagk was a principled man who clung tightly to one guiding belief through all the dangers of his time: that whatever contributes to the preservation of life is good, and all that destroys life is evil.",
        hint: "The passage states his simple rule about saving lives versus destroying them.",
        explanation: "Domagk believed that anything preserving life is good and anything destroying life is evil — a moral compass that guided his research even under the Nazi regime."
      },
      {
        id: 'sb3-4',
        question: "What did Domagk discover that changed medicine?",
        options: [
          "A new kind of bandage",
          "A vaccine for the common cold",
          "Sulfa drugs, the first medicines that could cure bacterial infections inside the body",
          "A machine that cleans hospital floors"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Working at the Bayer laboratories, Domagk discovered that a red dye called Prontosil could cure deadly bacterial infections in mice — the first of the sulfa drugs, which became the first widely used antibiotics taken inside the body.",
        hint: "The passage names the red dye and the new family of germ-killing medicines it started.",
        explanation: "Domagk's discovery of Prontosil launched the sulfa drugs — the first antibiotics that could travel through the body to kill bacteria, years before penicillin was widely available."
      },
      {
        id: 'sb3-5',
        question: "What was dangerous about the early sulfa drugs?",
        options: [
          "Patients taking them routinely developed nausea, vomiting, rashes, and kidney failure",
          "They made patients grow extra tall",
          "They turned everyone's hair bright red",
          "They had no side effects at all"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The new medicines were powerful but risky: patients routinely developed nausea, vomiting, rash, and kidney failure while taking these sulfanilamide-based drugs.",
        hint: "The passage lists four unpleasant and dangerous side effects.",
        explanation: "Early sulfa drugs could cause nausea, vomiting, rashes, and kidney failure — a reminder that powerful new medicines must be tested carefully for safety."
      },
      {
        id: 'sb3-6',
        question: "What does the line \"the lucky soldier proved unlucky in the laboratory\" mean?",
        options: [
          "Domagk lost all his money gambling",
          "He broke every glass tube he touched",
          "He was unlucky to be born in Germany",
          "He survived the war but his experiments failed many times before he succeeded"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Though Domagk had been lucky to survive the trenches, in the laboratory he was unlucky again and again — experiment after experiment failed before his team finally found a compound that killed bacteria.",
        hint: "The passage contrasts his wartime luck with his string of failed experiments.",
        explanation: "Surviving the war was only half the story; Domagk endured years of failed laboratory experiments before his sulfa drug breakthrough."
      },
      {
        id: 'sb3-7',
        question: "After the war, what did Domagk do?",
        options: [
          "He opened a shoe store",
          "He became a professional baseball player",
          "He returned to medical school and became a researcher hunting for germ-killing chemicals",
          "He retired to a farm and never worked again"
        ],
        correctAnswerIndex: 2,
        samplePassage: "After the war Domagk went back to medical school, graduated, and became a researcher studying how chemical substances could disinfect and kill the germs that cause disease.",
        hint: "The passage says he went back to school and became a scientist studying germ-killing chemicals.",
        explanation: "Domagk returned to his interrupted medical studies and built a career searching for chemicals that could kill bacteria — the search that led to sulfa drugs."
      },
      {
        id: 'sb3-8',
        question: "Why did Domagk cling to his guiding principle even under the Nazi regime?",
        options: [
          "He wanted to impress his bosses",
          "He believed a scientist's work must protect life, not destroy it",
          "He was afraid of losing his job",
          "He wanted to win a prize"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Even as the Nazi regime pressured scientists, Domagk clung tightly to his guiding principle — a reminder that scientific work must serve the preservation of life, not its destruction.",
        hint: "The passage connects his principle to a scientist's duty toward life.",
        explanation: "Domagk held fast to his belief that science must preserve life, even when the government around him demanded otherwise."
      },
      {
        id: 'sb3-10',
        question: "Why does McCarthy begin his trial story with Domagk?",
        options: [
          "To show that a single determined researcher, guided by strong principles, can change medicine",
          "To prove that war is good for science",
          "To show that old medicines are always better",
          "To prove that luck is all that matters"
        ],
        correctAnswerIndex: 0,
        samplePassage: "McCarthy opens the trial-design section with Domagk because his story shows what the whole book is about: a determined researcher, guided by the principle of preserving life, pushing through failure to find a drug that saves lives.",
        hint: "The passage says Domagk's story captures the book's theme of principled, persistent research.",
        explanation: "Domagk's journey — from lucky soldier to persistent scientist — sets the pattern McCarthy hopes to follow: principled research that brings a life-saving drug to patients."
      }
    ]
  },
  {
    id: 'superbugs-ch4',
    title: "Superbugs: Chapter 4 – Embedded",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "amber",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Before asking anyone to join his trial, McCarthy studies the Tuskegee syphilis study — a forty-year American experiment in which doctors watched Black men suffer without treatment — and learns why strict ethical rules must come first.",
    questions: [
      {
        id: 'sb4-1',
        question: "What was the Tuskegee study?",
        options: [
          "A study of healthy diets in Alabama",
          "A successful cure for the common cold",
          "A forty-year U.S. government study that watched Black men suffer from untreated syphilis",
          "A program that gave free shoes to children"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter recounts the Tuskegee syphilis study, in which the U.S. Public Health Service followed hundreds of poor Black men with syphilis for forty years — studying the disease while deliberately not treating it.",
        hint: "The passage describes a decades-long government study of an untreated disease.",
        explanation: "The Tuskegee study followed Black men with syphilis for forty years without treating them, to observe what the disease did to their bodies."
      },
      {
        id: 'sb4-3',
        question: "What were the men in the study told they had?",
        options: [
          "They were told exactly what disease they had",
          "They were told they had the flu",
          "They were told nothing at all",
          "\"Bad blood\" — they were never told they had syphilis"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The men were told they were being treated for bad blood, a vague local term. They were never told they had syphilis, and they were never offered the penicillin that could have cured them.",
        hint: "The passage gives the misleading phrase the men were told.",
        explanation: "The men were told they had bad blood and never learned they had syphilis — so they could not make an informed choice about their care."
      },
      {
        id: 'sb4-4',
        question: "When penicillin became the standard cure for syphilis in the 1940s, what did the researchers do?",
        options: [
          "They cured every man in the study",
          "They still did not offer the men any treatment",
          "They apologized and ended the study",
          "They gave the men a different disease to study"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Even after penicillin became widely available and was recognized as the cure for syphilis, the researchers did not offer it to the men — they simply kept watching the disease progress.",
        hint: "The passage says the cure existed but was never given to the men.",
        explanation: "Even once penicillin could have cured them, the men were not offered treatment — the researchers chose to keep observing instead."
      },
      {
        id: 'sb4-5',
        question: "Who was Dr. Vonderlehr in the Tuskegee story?",
        options: [
          "A journalist who exposed the study",
          "The doctor in charge, who performed up to twenty spinal taps a day on the men",
          "A nurse who secretly treated the patients",
          "The president who ended the study"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Dr. Vonderlehr, an expert in skin and syphilis diseases and one of the Public Health Service's most gifted officers, directed the study — at times performing up to twenty spinal taps a day on the men.",
        hint: "The passage describes the doctor who ran the study and his painful daily procedures.",
        explanation: "Dr. Vonderlehr led the study, subjecting the men to painful procedures like repeated spinal taps while withholding the cure."
      },
      {
        id: 'sb4-6',
        question: "How did the Tuskegee study finally come to an end?",
        options: [
          "A former Public Health Service employee leaked the story to the Associated Press in July 1972, and public outrage stopped it",
          "The researchers ran out of paper",
          "The men all moved away",
          "A hurricane destroyed the records"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The study only ended when a former Public Health Service employee leaked the details to the Associated Press in July 1972. Once the story broke, outrage was swift and the study was shut down.",
        hint: "The passage describes a leak to a news agency that ended the study.",
        explanation: "A whistleblower leaked the story to the Associated Press in July 1972, and the resulting public outrage finally ended the forty-year study."
      },
      {
        id: 'sb4-7',
        question: "About how many men died as a direct result of going untreated?",
        options: [
          "None of them",
          "Exactly three men",
          "Around one hundred men",
          "Over one million men"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Because the disease was left to run its course, around one hundred men died as a direct result of their untreated condition, and many others unknowingly passed the infection to their families.",
        hint: "The passage gives the approximate number who died from the untreated disease.",
        explanation: "Around one hundred men died directly from untreated syphilis — a terrible cost of a study that offered its subjects no benefit."
      },
      {
        id: 'sb4-9',
        question: "Why is this chapter called \"Embedded\"?",
        options: [
          "Because bacteria were embedded in the men's teeth",
          "Because the doctors were embedded reporters",
          "Because the chapter is about computer chips",
          "Because the unethical study was embedded in — accepted by — the medical establishment for decades"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The study was no secret: what happened in Tuskegee had been openly discussed at medical conferences and written about by physicians for decades, yet the medical establishment let it continue.",
        hint: "The passage says the study was openly discussed by doctors for decades without being stopped.",
        explanation: "The study was embedded in the medical system — openly discussed for decades yet never stopped — showing how easily unethical research can become accepted."
      },
      {
        id: 'sb4-10',
        question: "What did the men receive instead of real treatment?",
        options: [
          "Nothing — treatment was simply never offered to them",
          "Free cars and houses",
          "The best medicines of the time",
          "Trips to Europe"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The men were not exactly denied treatment — it was simply never offered. They were examined and tested, but the cure that could have saved them was kept from them.",
        hint: "The passage says treatment was never offered, rather than openly refused.",
        explanation: "The cruel trick was quieter than refusal: treatment was simply never offered, so the men never knew what they were missing."
      }
    ]
  },
  {
    id: 'superbugs-ch5',
    title: "Superbugs: Chapter 5 – Safeguards",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "emerald",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Determined not to repeat history's mistakes, McCarthy learns the safeguards that protect trial volunteers: a strict written protocol, honest informed consent, and an independent review board that guards patients' safety.",
    questions: [
      {
        id: 'sb5-1',
        question: "What did Tom Walsh tell McCarthy about running a clinical trial?",
        options: [
          "Just give the drug to anyone who asks",
          "It is all about the protocol",
          "Skip the paperwork and move fast",
          "Let the drug company decide everything"
        ],
        correctAnswerIndex: 1,
        samplePassage: "When McCarthy set out to run his trial, his mentor Tom Walsh gave him the golden rule: it is all about the protocol — the detailed written plan that governs every step of the study.",
        hint: "The passage quotes Walsh's short rule about what matters most.",
        explanation: "Walsh taught McCarthy that everything depends on the protocol — the strict written plan that keeps a trial safe and scientific."
      },
      {
        id: 'sb5-2',
        question: "What is a clinical trial protocol?",
        options: [
          "The detailed written plan describing exactly how a trial will be run",
          "A handshake deal between doctors",
          "A secret drug recipe",
          "A hospital's lunch menu"
        ],
        correctAnswerIndex: 0,
        samplePassage: "A protocol is the trial's rulebook: a detailed written plan that spells out who can join, what drug they receive, what gets measured, and how patients are protected.",
        hint: "The passage describes the protocol as a written plan covering every part of the trial.",
        explanation: "The protocol is the complete written plan for a trial — without it, a study cannot be safe, fair, or scientifically valid."
      },
      {
        id: 'sb5-3',
        question: "What did the Beecher report of 1966 reveal?",
        options: [
          "That hospitals served good food",
          "That all doctors were perfect",
          "That penicillin no longer worked",
          "That 22 American studies had used patients as experimental subjects without informed consent"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Dr. Henry Beecher's famous 1966 report in a leading medical journal exposed 22 American studies in which patients had been used as experimental subjects without ever giving informed consent.",
        hint: "The passage gives the number of studies Beecher exposed.",
        explanation: "Beecher showed that even in the 1960s, American researchers were experimenting on patients without their informed consent — proof that safeguards were urgently needed."
      },
      {
        id: 'sb5-5',
        question: "What is an IRB?",
        options: [
          "An Institutional Review Board — an independent committee that reviews research to protect patients",
          "A new kind of antibiotic",
          "A hospital cafeteria",
          "A drug company's sales team"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The IRB, or Institutional Review Board, is an independent committee that reviews every research plan before it can begin, with the power to demand changes or stop a study that puts patients at risk.",
        hint: "The passage expands the initials and describes the committee's protective role.",
        explanation: "The Institutional Review Board is the independent watchdog that must approve a trial's protocol before any patient can be enrolled."
      },
      {
        id: 'sb5-6',
        question: "Whom does the IRB especially aim to protect?",
        options: [
          "Drug company profits",
          "Famous athletes",
          "Patients who might easily be exploited",
          "Hospital parking lots"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The IRB created a mechanism to protect patients — especially those who might easily be exploited, such as people who are very sick, poor, or unable to fully understand what they are agreeing to.",
        hint: "The passage names the vulnerable group the IRB was created to shield.",
        explanation: "The IRB exists above all to protect vulnerable patients — those too sick, poor, or powerless to protect themselves from exploitation."
      },
      {
        id: 'sb5-7',
        question: "Even after the Nuremberg trials punished Nazi doctors, what was still happening in the 1960s?",
        options: [
          "All research became perfectly ethical",
          "Patient abuse and exploitation were still so common that drastic action was needed",
          "Nobody did medical research anymore",
          "Doctors stopped treating patients"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Despite the lessons of the Nuremberg trials, patient abuse and exploitation were still so pervasive in the 1960s that something drastic had to be done — which is why review boards were created.",
        hint: "The passage says abuse continued even after Nuremberg, forcing drastic reform.",
        explanation: "The Nuremberg trials were not enough: unethical research continued into the 1960s, proving that permanent safeguards like IRBs were necessary."
      },
      {
        id: 'sb5-8',
        question: "Why do safeguards matter for McCarthy's own trial?",
        options: [
          "They make the trial more expensive",
          "They help him become famous",
          "They let him skip consent forms",
          "History shows researchers can harm patients without strict rules, so his trial must be tightly controlled"
        ],
        correctAnswerIndex: 3,
        samplePassage: "McCarthy knows the history of Tuskegee and the studies Beecher exposed, so he builds his trial around safeguards — a strict protocol, real informed consent, and IRB review — to make sure no patient is ever exploited.",
        hint: "The passage connects the historical abuses to the protections in his trial.",
        explanation: "Because history shows what happens without rules, McCarthy embraces safeguards — protocol, consent, and IRB review — as the foundation of his trial."
      },
      {
        id: 'sb5-9',
        question: "What does informed consent mean?",
        options: [
          "The doctor decides everything for the patient",
          "The patient signs a form without reading it",
          "The patient fully understands the risks and benefits and freely agrees to join the trial",
          "Consent is not needed for new drugs"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Informed consent means a patient understands what the trial involves — its risks, benefits, and alternatives — and then freely chooses whether to take part.",
        hint: "The passage describes understanding the risks and freely choosing.",
        explanation: "Informed consent is not just a signature: the patient must truly understand the risks and benefits and agree freely."
      },
      {
        id: 'sb6-2',
        question: "What did McCarthy choose as the focal point — the key thing to measure — in his trial?",
        options: [
          "The color of the hospital walls",
          "The number of visitors per patient",
          "Length of hospital stay",
          "The price of the drug"
        ],
        correctAnswerIndex: 2,
        samplePassage: "McCarthy decided that length of stay would be the focal point of his trial — the main measurement that would drive every decision about whether the new drug was working.",
        hint: "The passage names the hospital measurement he chose as the trial's focus.",
        explanation: "Length of hospital stay was the trial's key variable: if the drug worked, patients would get better and go home sooner."
      },
      {
        id: 'sb6-4',
        question: "Who was the \"terrified mechanic from Queens\"?",
        options: [
          "Tom Walsh",
          "Jackson",
          "Dr. Vonderlehr",
          "Alexander Fleming"
        ],
        correctAnswerIndex: 1,
        samplePassage: "McCarthy kept thinking about Jackson, the young mechanic from Queens with the infected bullet wound, whose terror in the emergency room showed him exactly what was at stake in the trial.",
        hint: "The passage names the young mechanic with the infected wound.",
        explanation: "Jackson — the mechanic from Queens with a drug-resistant infection — was the frightened patient McCarthy wanted his trial to help."
      },
      {
        id: 'sb6-5',
        question: "Why did McCarthy want to capture what it was like to be in the room with Jackson?",
        options: [
          "To write a movie script",
          "To impress his friends",
          "To avoid talking to patients",
          "To remember that behind every measurement is a frightened real person the trial must serve"
        ],
        correctAnswerIndex: 3,
        samplePassage: "McCarthy needed to capture what it was like to stand beside the terrified mechanic, so that every variable he measured would stay connected to the real, frightened people the trial was meant to save.",
        hint: "The passage says the memory kept the trial connected to real people.",
        explanation: "Remembering Jackson's fear kept McCarthy focused: the trial's numbers had to serve real, frightened patients — not just science."
      },
      {
        id: 'sb6-6',
        question: "What is a variable in a clinical trial?",
        options: [
          "Something the researchers measure to see whether the drug works",
          "A kind of bacteria",
          "A hospital hallway",
          "A doctor's vacation schedule"
        ],
        correctAnswerIndex: 0,
        samplePassage: "A variable is something the trial measures — like how long patients stay in the hospital — so researchers can tell whether the new drug is actually making a difference.",
        hint: "The passage defines it as something measured to judge the drug.",
        explanation: "Variables are the measurements — length of stay, recovery time, side effects — that let scientists judge whether a drug works."
      },
      {
        id: 'sb6-7',
        question: "Before testing dalba on anyone, what did McCarthy have to decide?",
        options: [
          "What to have for lunch",
          "Which baseball team to support",
          "Exactly what to measure, so the results would be clear and trustworthy",
          "What color to paint the laboratory"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Before a single patient could enroll, McCarthy had to decide precisely what the trial would measure — choosing the right variables was the only way the results could prove anything.",
        hint: "The passage says deciding what to measure came before any testing.",
        explanation: "Good trial design starts with choosing variables: decide what to measure first, or the results will mean nothing."
      },
      {
        id: 'sb6-8',
        question: "Why must a trial measure things carefully?",
        options: [
          "To fill out more paperwork",
          "So doctors can tell whether the new drug truly helps patients or not",
          "To make the trial take longer",
          "To confuse the drug company"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Careful measurement is what separates a real result from a guess: only by tracking variables precisely can doctors know whether the new drug genuinely helps patients.",
        hint: "The passage says precise tracking is how doctors know the drug helps.",
        explanation: "Without careful measurement, no one could tell whether patients improved because of the drug — or by chance."
      },
      {
        id: 'sb6-9',
        question: "What did McCarthy hope dalba would do for patients like Jackson?",
        options: [
          "Keep them in the hospital longer",
          "Give them superpowers",
          "Make their hospital bills bigger",
          "Cure their dangerous infections and get them home to their families faster"
        ],
        correctAnswerIndex: 3,
        samplePassage: "McCarthy hoped dalbavancin would do for patients like Jackson what older drugs could not: wipe out the resistant infection and send them home to their families sooner.",
        hint: "The passage describes curing the infection and going home sooner.",
        explanation: "The goal was simple and human: cure the infection and get patients like Jackson home faster."
      },
      {
        id: 'sb6-10',
        question: "Who guided McCarthy through the trial's design?",
        options: [
          "His mentor Tom Walsh",
          "A baseball coach",
          "A television producer",
          "Nobody — he worked entirely alone"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Through every design decision — from the protocol to the variables — McCarthy leaned on his mentor Tom Walsh, the veteran researcher who had run trials for decades.",
        hint: "The passage names the veteran mentor who guided the design.",
        explanation: "Tom Walsh, McCarthy's mentor and one of the world's leading infectious-disease researchers, guided him through designing the trial."
      }
    ]
  },
  {
    id: 'superbugs-ch7',
    title: "Superbugs: Chapter 7 – Deferment",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "indigo",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "The trial hits a wall: the review board demands changes to the protocol's risk level, delaying everything. McCarthy learns that deferment — slowing down for safety — is part of protecting patients.",
    questions: [
      {
        id: 'sb7-1',
        question: "What did the review board ask McCarthy to change in his protocol?",
        options: [
          "The hospital's paint color",
          "The risk level in the risk-level section of the protocol",
          "The name of the drug",
          "The day of the week"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Going through the protocol point by point, the reviewers told McCarthy to change the risk level in the risk-level section — the trial could not move forward until the safety protections were rewritten.",
        hint: "The passage names the exact section the reviewers flagged.",
        explanation: "The board required McCarthy to revise the protocol's risk level — a safety change that delayed the trial but protected future patients."
      },
      {
        id: 'sb7-2',
        question: "What does \"deferment\" mean for McCarthy's trial?",
        options: [
          "A celebration party",
          "An instant approval",
          "A delay — the trial cannot start until the protocol's problems are fixed",
          "A new drug formula"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Deferment meant waiting: with the protocol sent back for revisions, the trial was put on hold, and every week of delay was a week patients went without the new drug.",
        hint: "The passage describes the trial being put on hold.",
        explanation: "Deferment is a delay — the trial was deferred until McCarthy fixed what the reviewers flagged, no matter how urgently patients needed help."
      },
      {
        id: 'sb7-3',
        question: "How did McCarthy feel about the slow, frustrating process?",
        options: [
          "He loved every minute of it",
          "He never noticed the delay",
          "He felt frustrated, but reminded himself that careful review protects patients from harm",
          "He quit medicine entirely"
        ],
        correctAnswerIndex: 2,
        samplePassage: "McCarthy was frustrated by the slow pace, but he forced himself to remember why the caution existed: rushing a powerful new drug into people could harm the very patients he wanted to save.",
        hint: "The passage describes frustration balanced by remembering why caution matters.",
        explanation: "He was frustrated — but he understood that the slow review process exists to keep patients safe."
      },
      {
        id: 'sb7-4',
        question: "What is Tom Walsh's mantra?",
        options: [
          "\"Move fast and break things\"",
          "\"We defend the defenseless\"",
          "\"Winning is everything\"",
          "\"Never ask questions\""
        ],
        correctAnswerIndex: 1,
        samplePassage: "Walsh lived by a simple mantra that he repeated to McCarthy: we defend the defenseless — a reminder that their work existed to protect the vulnerable patients no one else could help.",
        hint: "The passage quotes Walsh's short motto about protecting the vulnerable.",
        explanation: "\"We defend the defenseless\" — Walsh's mantra reminded McCarthy that the trial's delays were in service of protecting vulnerable patients."
      },
      {
        id: 'sb7-5',
        question: "According to the chapter, who is the real enemy?",
        options: [
          "Disease — infections are the enemy",
          "Other doctors",
          "The review board",
          "The patients"
        ],
        correctAnswerIndex: 0,
        samplePassage: "McCarthy reframes the struggle: the review board is not the enemy — disease is the enemy, and infections are what they are all fighting together.",
        hint: "The passage names the true enemy they are all fighting.",
        explanation: "Disease is the enemy. The reviewers' delays were frustrating, but everyone — doctors and reviewers alike — was fighting infections."
      },
      {
        id: 'sb7-8',
        question: "Which old principle does McCarthy repeat in this chapter?",
        options: [
          "A baseball statistic",
          "A cooking recipe",
          "A traffic law",
          "Domagk's rule: whatever preserves life is good, and whatever destroys life is evil"
        ],
        correctAnswerIndex: 3,
        samplePassage: "In the middle of the frustrating delays, McCarthy returns to Domagk's guiding principle — whatever preserves life is good — reminding himself that the slow, careful path is the one that honors life.",
        hint: "The passage brings back the grenadier-scientist's rule about preserving life.",
        explanation: "Domagk's principle resurfaces: the delays, however painful, served the preservation of life — which is good."
      },
      {
        id: 'sb7-9',
        question: "What did McCarthy realize about the reviewers' demands?",
        options: [
          "They were random and meaningless",
          "They were trying to steal his ideas",
          "They were a joke",
          "They were necessary to ensure the new treatment would not endanger patients"
        ],
        correctAnswerIndex: 3,
        samplePassage: "McCarthy came to see that each demanded change — especially the risk-level revision — was necessary to make sure the experimental treatment would not endanger the people brave enough to try it.",
        hint: "The passage says the changes were necessary for patient safety.",
        explanation: "The reviewers weren't enemies; their demands made the trial safer for every volunteer who would join it."
      },
      {
        id: 'sb7-10',
        question: "In the end, what mattered more than speed?",
        options: [
          "Getting the trial's safety protections right",
          "Finishing first no matter what",
          "Avoiding all paperwork",
          "Beating a rival hospital"
        ],
        correctAnswerIndex: 0,
        samplePassage: "McCarthy concluded that getting the safety protections right mattered more than starting fast — a trial that hurries past its safeguards is a trial that risks repeating history's mistakes.",
        hint: "The passage says safety protections outweighed speed.",
        explanation: "Safety first: a delayed but well-protected trial is better than a fast one that puts patients at risk."
      }
    ]
  },
  {
    id: 'superbugs-ch8',
    title: "Superbugs: Chapter 8 – Oversight",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "purple",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "McCarthy explores why oversight matters on two fronts: scientists must use antibiotics wisely so bacteria don't outsmart them, and regulators like the FDA must review new drugs carefully before approval.",
    questions: [
      {
        id: 'sb8-1',
        question: "What is the \"fitness cost\" of antibiotic resistance?",
        options: [
          "The price of a gym membership for bacteria",
          "When bacteria mutate to resist antibiotics, they sacrifice something vital in return",
          "The cost of making new drugs",
          "A tax on hospitals"
        ],
        correctAnswerIndex: 1,
        samplePassage: "McCarthy explains that antibiotic resistance comes with a fitness cost: when bacteria mutate into superbugs that antibiotics cannot kill, they give up something vital in return — becoming weaker in other ways.",
        hint: "The passage describes what bacteria sacrifice when they become resistant.",
        explanation: "Resistance isn't free for bacteria: mutating to survive antibiotics costs them something vital, which can make them weaker in other ways."
      },
      {
        id: 'sb8-3',
        question: "\"Bacteria use antibiotics judiciously. Humans do not.\" What does this mean?",
        options: [
          "Bacteria are smarter than doctors",
          "Humans should never use antibiotics",
          "Bacteria invented antibiotics",
          "Bacteria use these germ-killing chemicals carefully, while humans overuse and misuse them"
        ],
        correctAnswerIndex: 3,
        samplePassage: "In nature, bacteria deploy antibiotic chemicals sparingly and strategically — but humans hand out antibiotics carelessly, for colds and livestock growth, giving bacteria endless chances to evolve resistance.",
        hint: "The passage contrasts careful natural use with careless human use.",
        explanation: "Bacteria use antibiotics wisely; humans overuse them — and that overuse is what trains bacteria to become resistant superbugs."
      },
      {
        id: 'sb8-4',
        question: "Why does McCarthy say we need \"a slow and steady drip\" of new antibiotics, not \"a flood\"?",
        options: [
          "Floods damage hospital basements",
          "Drips are cheaper than floods",
          "Patients prefer slow medicine",
          "Releasing many new antibiotics at once would speed up resistance; introducing them gradually preserves their power"
        ],
        correctAnswerIndex: 3,
        samplePassage: "McCarthy argues we do not want a flood of new antibiotics all at once — that would just teach bacteria to resist them all faster. A slow and steady drip preserves each drug's power for as long as possible.",
        hint: "The passage explains why gradual release beats releasing everything at once.",
        explanation: "A flood of new drugs would accelerate resistance; a slow, steady drip keeps each antibiotic useful longer — careful stewardship of precious medicines."
      },
      {
        id: 'sb8-5',
        question: "Who was Frances Oldham Kelsey?",
        options: [
          "A famous baseball player",
          "McCarthy's grandmother",
          "An FDA scientist who blocked approval of thalidomide in the U.S., preventing thousands of birth defects",
          "The inventor of penicillin"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Frances Oldham Kelsey was the FDA reviewer who, despite intense pressure from the drug company, repeatedly refused to approve thalidomide — a decision that spared thousands of American families from devastating birth defects.",
        hint: "The passage describes the FDA heroine who stood up to a drug company.",
        explanation: "Kelsey's stubborn, careful review at the FDA kept the dangerous drug thalidomide off the U.S. market — oversight at its heroic best."
      },
      {
        id: 'sb8-6',
        question: "Why does McCarthy think of Kelsey when he is frustrated by slow drug approval?",
        options: [
          "She reminds him that slow, careful review can save lives",
          "She was his neighbor",
          "She discovered penicillin",
          "She liked baseball too"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Whenever McCarthy grows frustrated by the slow pace of drug approval, he reminds himself of Frances Kelsey — proof that regulatory caution, however maddening, has historically protected the public from catastrophe.",
        hint: "The passage says Kelsey shows why slow review can be life-saving.",
        explanation: "Kelsey's story reminds McCarthy that slow approval isn't just bureaucracy — it has saved thousands of lives."
      },
      {
        id: 'sb8-7',
        question: "What is the FDA's job when it comes to new drugs?",
        options: [
          "To approve every drug immediately",
          "To advertise drugs on television",
          "To review new drugs carefully for safety and effectiveness before allowing them",
          "To set the price of medicine"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The FDA's oversight role is to examine each new drug's safety and effectiveness before it reaches patients — a slow process, but one that stands between the public and dangerous medicines.",
        hint: "The passage describes the FDA's careful safety review.",
        explanation: "The FDA provides oversight: carefully reviewing new drugs for safety and effectiveness before they can be sold — the Kelsey principle in action."
      },
      {
        id: 'sb8-8',
        question: "How does human misuse of antibiotics create superbugs?",
        options: [
          "Antibiotics make bacteria stronger directly",
          "Overuse and misuse give bacteria many chances to evolve ways to survive the drugs",
          "Doctors prescribe too few antibiotics",
          "Bacteria learn by watching television"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Every unnecessary antibiotic prescription — for a virus, or to fatten livestock — exposes bacteria to the drug and gives the toughest survivors a chance to multiply into resistant superbugs.",
        hint: "The passage links unnecessary prescriptions to evolving resistance.",
        explanation: "Misuse gives bacteria repeated exposure to antibiotics, letting the resistant survivors multiply — evolution in action, driven by human carelessness."
      },
      {
        id: 'sb8-10',
        question: "What did the 2008 financial crisis remind McCarthy of in the drug industry?",
        options: [
          "A system where there was plenty of finger-pointing but no one personally took the blame",
          "A great time to buy stocks",
          "The invention of antibiotics",
          "A baseball championship"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The crisis reminded McCarthy of the pharmaceutical industry's accountability problem: when things went wrong, there was plenty of finger-pointing, but no one personally took the blame for neglecting antibiotic development.",
        hint: "The passage describes blame without responsibility.",
        explanation: "Like the financial crisis, the antibiotic shortage came from a system where everyone pointed fingers but no one took responsibility — which is why oversight matters."
      }
    ]
  },
  {
    id: 'superbugs-ch9',
    title: "Superbugs: Chapter 9 – Backwater",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "rose",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "With the trial designed and reviewed, McCarthy wades through the final stretch of bureaucracy — rehearsing his case, leaning on Walsh's encouragement, and learning that slow preparation is part of doing important work well.",
    questions: [
      {
        id: 'sb9-1',
        question: "What problem does McCarthy face in this chapter?",
        options: [
          "Long delays caused by hospital bureaucracy and red tape",
          "A shortage of pencils",
          "A broken laboratory freezer",
          "A flood in the hospital basement"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The trial is stuck in a backwater of hospital bureaucracy — endless forms, committees, and waiting — and McCarthy feels like he is wading through mud while patients need the drug now.",
        hint: "The passage describes the trial being stuck in paperwork and waiting.",
        explanation: "Bureaucracy is the obstacle: the trial is ready in spirit but trapped in a slow system of forms and approvals."
      },
      {
        id: 'sb9-2',
        question: "What motto does McCarthy adopt to get through the delays?",
        options: [
          "\"Quit while you are ahead\"",
          "\"Improvise, adapt, and overcome\"",
          "\"Never try anything new\"",
          "\"Wait for someone else to fix it\""
        ],
        correctAnswerIndex: 1,
        samplePassage: "Faced with obstacle after obstacle, McCarthy adopts a soldier's motto: improvise, adapt, and overcome — find a way around each barrier instead of surrendering to it.",
        hint: "The passage quotes the three-part motto about finding a way forward.",
        explanation: "\"Improvise, adapt, and overcome\" becomes his guide: when the system blocks him, he finds another path instead of giving up."
      },
      {
        id: 'sb9-4',
        question: "What does Walsh keep telling McCarthy during the long wait?",
        options: [
          "Give up and go home",
          "Blame the review board",
          "Rewrite the whole protocol",
          "Stay focused and hang in there"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Whenever McCarthy despairs, Walsh steadies him with the same advice: stay focused and hang in there — the delays are painful, but quitting would abandon the patients waiting for help.",
        hint: "The passage quotes Walsh's encouragement to keep going.",
        explanation: "Walsh's steady message — stay focused and hang in there — keeps McCarthy from quitting during the bureaucratic slog."
      },
      {
        id: 'sb9-6',
        question: "What finally happens after all the delays?",
        options: [
          "The trial is canceled forever",
          "The trial gets the green light and is ready to begin",
          "McCarthy switches to a different career",
          "The drug is forgotten"
        ],
        correctAnswerIndex: 1,
        samplePassage: "After months of revisions, rehearsals, and waiting, the approvals finally come through: the trial is ready, and the first patients can soon be enrolled.",
        hint: "The passage says the approvals finally arrive and the trial can start.",
        explanation: "Persistence pays off: the trial clears its final hurdles and is ready to begin enrolling patients."
      },
      {
        id: 'sb9-7',
        question: "What does McCarthy mean when he says the real work is only beginning?",
        options: [
          "The paperwork will never end",
          "He still needs to find a new office",
          "Getting approval was just preparation; running the trial and caring for the patients is the harder job ahead",
          "He plans to write another book"
        ],
        correctAnswerIndex: 2,
        samplePassage: "With approval in hand, McCarthy realizes the bureaucratic battle was only the warm-up: the real work — running the trial safely and caring for the brave volunteers — is just beginning.",
        hint: "The passage contrasts the paperwork battle with the harder job ahead.",
        explanation: "Approval was preparation; the real work is the trial itself — enrolling patients, giving the drug, and watching over every volunteer."
      },
      {
        id: 'sb9-8',
        question: "How does McCarthy survive the frustrating bureaucracy?",
        options: [
          "By complaining until someone else does the work",
          "By ignoring all the rules",
          "By taking a long vacation",
          "By improvising, adapting, and staying committed to the patients waiting for the drug"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Instead of surrendering to the red tape, McCarthy improvises around each obstacle, adapts his plans, and holds onto his commitment to the patients who need a better antibiotic.",
        hint: "The passage describes working around obstacles while staying committed to patients.",
        explanation: "He gets through by improvising, adapting, and remembering whom the work is for: the patients waiting for the drug."
      },
      {
        id: 'sb9-9',
        question: "What lesson does the chapter teach about persistence?",
        options: [
          "Important work always happens fast",
          "Slow, boring preparation is part of doing something important well",
          "Bureaucracy should be ignored",
          "Rehearsing is a waste of time"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter's lesson is that the slow, unglamorous work — the forms, the rehearsals, the waiting — is not wasted time; it is part of doing something important well.",
        hint: "The passage says the slow preparation is part of doing the job right.",
        explanation: "Persistence means embracing the boring parts: careful preparation is what makes the important work succeed."
      },
      {
        id: 'sb9-10',
        question: "Who helps McCarthy stay on track through the backwater?",
        options: [
          "Tom Walsh, his mentor",
          "A rival drug company",
          "A television crew",
          "Nobody — he refuses all help"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Through the whole bureaucratic slog, Walsh is the voice that keeps McCarthy steady — reminding him to stay focused, hang in there, and remember the defenseless patients they are defending.",
        hint: "The passage names the mentor who steadies him.",
        explanation: "Tom Walsh, his mentor, is the steady voice that keeps McCarthy focused through the delays."
      }
    ]
  },
  {
    id: 'superbugs-ch10',
    title: "Superbugs: Chapter 10 – Ruth",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "amber",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "The trial meets its first patient: Ruth, an older Holocaust survivor with trouble swallowing. Through her story, McCarthy learns that informed consent is a human conversation — and that every patient is far more than a chart.",
    questions: [
      {
        id: 'sb10-1',
        question: "Who is Ruth?",
        options: [
          "An older Holocaust survivor and one of the first patients McCarthy meets as the trial's volunteer phase begins",
          "McCarthy's medical school classmate",
          "A drug company executive",
          "A fictional character in a novel"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Ruth is an older woman and a Holocaust survivor — one of the first real patients McCarthy encounters as the trial moves from paperwork to people, and her story opens the book's section on the volunteers.",
        hint: "The passage describes her as an older survivor and one of the first patients.",
        explanation: "Ruth, an older Holocaust survivor, is the first named patient story — the moment the trial becomes about real people, not just protocols."
      },
      {
        id: 'sb10-2',
        question: "What does Ruth's daughter Anne ask McCarthy?",
        options: [
          "Whether he can fix Ruth's trouble swallowing",
          "Whether he can lend her money",
          "Whether he knows a good restaurant",
          "Whether he can drive Ruth home"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Anne, Ruth's daughter, tells McCarthy that her mother is having trouble swallowing and asks the question every worried family member asks: can you fix it?",
        hint: "The passage says Anne asks about her mother's swallowing problem.",
        explanation: "Anne asks whether McCarthy can fix Ruth's trouble swallowing — a daughter's plea for help for her aging mother."
      },
      {
        id: 'sb10-4',
        question: "What childhood memory does Ruth still carry with her?",
        options: [
          "A trip to the beach",
          "Her love of shoes, after her ruby-red shoes were taken from her when she was young",
          "A favorite song",
          "A birthday cake"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Ruth still loves shoes — a lasting mark of her childhood, when her ruby-red shoes were taken from her as a young girl in the shadow of the Holocaust.",
        hint: "The passage describes her lifelong love of shoes and the pair taken in childhood.",
        explanation: "Her love of shoes traces back to childhood, when her ruby-red shoes were taken — a small, human detail that reveals the survivor behind the patient."
      },
      {
        id: 'sb10-5',
        question: "What does McCarthy learn about informed consent from meeting Ruth?",
        options: [
          "That a signature on a form is all that matters",
          "That consent is a careful conversation with an exhausted, vulnerable patient — not just a signature",
          "That consent is not needed for older patients",
          "That family members should be kept away"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Sitting with the exhausted Ruth, McCarthy sees that informed consent is not a form to be signed but a real conversation — making sure a vulnerable patient truly understands and freely agrees.",
        hint: "The passage describes consent as a real conversation, not just paperwork.",
        explanation: "Ruth teaches him that informed consent is a human conversation with a tired, vulnerable person — understanding and free choice, not just ink on paper."
      },
      {
        id: 'sb10-7',
        question: "What worries McCarthy about the hospital itself?",
        options: [
          "That the hallways are too long",
          "That the cafeteria is too expensive",
          "That a hospital can be a dangerous place, especially for an older patient",
          "That the elevators are too slow"
        ],
        correctAnswerIndex: 2,
        samplePassage: "McCarthy reflects that the hospital itself can be dangerous — especially for an older, frail patient like Ruth, for whom infections, falls, and confusion are constant risks.",
        hint: "The passage says the hospital poses special risks for older patients.",
        explanation: "Hospitals carry their own dangers — infections and other hazards — which weigh most heavily on frail older patients like Ruth."
      },
      {
        id: 'sb10-8',
        question: "What does Ruth's story show about patients in general?",
        options: [
          "That charts tell the whole story",
          "That older patients cannot join trials",
          "That every patient has a long life story that no chart fully captures",
          "That family members only get in the way"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Ruth's story reminds McCarthy — and the reader — that behind every chart is a whole life: a childhood, a trauma survived, small loves and losses that no medical record can hold.",
        hint: "The passage says every chart hides a whole life the record cannot hold.",
        explanation: "Every patient is a whole person with a history no chart captures — Ruth's ruby-red shoes say more about her than any diagnosis code."
      },
      {
        id: 'sb10-9',
        question: "What is the hardest part of enrolling someone like Ruth in a trial?",
        options: [
          "Finding her phone number",
          "Spelling her name correctly",
          "Filling out the insurance forms",
          "Making sure she truly understands the trial and freely agrees, when she is exhausted and vulnerable"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The hardest part is not the paperwork but the person: ensuring that an exhausted, vulnerable patient like Ruth genuinely understands what the trial involves and chooses it freely.",
        hint: "The passage says the challenge is genuine understanding and free choice.",
        explanation: "True informed consent with a vulnerable patient is the real challenge — understanding and freedom, not just a signed form."
      },
      {
        id: 'sb10-10',
        question: "What does Ruth teach McCarthy about being a doctor?",
        options: [
          "That speed matters more than kindness",
          "That charts are more important than people",
          "That older patients should be avoided",
          "That treating a patient means caring for the whole person, not just the disease"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Ruth teaches McCarthy the chapter's deepest lesson: a doctor treats a person, not a disease — and honoring the whole person, with her history and her ruby-red shoes, is what medicine is for.",
        hint: "The passage says the lesson is treating the person, not just the disease.",
        explanation: "Ruth's lesson: good medicine cares for the whole person — her story, her dignity, her life — not just the illness in her body."
      }
    ]
  },

  {
    id: 'superbugs-ch11',
    title: "Superbugs: Chapter 11 – George",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "emerald",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "George Hermann, a World War II veteran who once scanned the skies over New Guinea from a tiny propeller plane, now faces a stubborn skin infection — and decides to join McCarthy's experimental trial of a new antibiotic.",
    questions: [
      {
        id: 'sb11-1',
        question: "Where was George Hermann from?",
        options: [
          "A small town in Missouri",
          "A fishing village in Maine",
          "A farm in central Texas",
          "A city in southern California"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The chapter introduces George Hermann as a young man from Missouri who, back in 1944, boarded a military plane bound for New Guinea.",
        hint: "The passage names the Midwestern state George called home.",
        explanation: "George was a small-town boy from Missouri who enlisted in the military during World War II."
      },
      {
        id: 'sb11-2',
        question: "Why did George enlist in the military?",
        options: [
          "He wanted to become a doctor",
          "His family forced him to join",
          "He hoped to earn money for college",
          "He wanted a change of scenery and to be part of something larger than himself"
        ],
        correctAnswerIndex: 3,
        samplePassage: "George enlisted on a whim, hoping the military would give him a change of scenery and, as the saying goes, a chance to be part of something larger than himself.",
        hint: "The passage gives two reasons — one about seeing new places, one about purpose.",
        explanation: "George joined on a whim, looking for adventure and a sense of purpose in the war effort."
      },
      {
        id: 'sb11-3',
        question: "Where was George sent during World War II?",
        options: [
          "The beaches of Normandy",
          "New Guinea in the Pacific",
          "The deserts of North Africa",
          "The mountains of Italy"
        ],
        correctAnswerIndex: 1,
        samplePassage: "In 1944, the young man from Missouri boarded a military plane bound for New Guinea, where he would spend an eighteen-month tour of duty.",
        hint: "The passage names the Pacific island where George served.",
        explanation: "George was sent to New Guinea for an eighteen-month tour of duty in the Pacific."
      },
      {
        id: 'sb11-5',
        question: "What kind of plane did George fly in over New Guinea?",
        options: [
          "A Piper Cub propeller plane",
          "A giant four-engine bomber",
          "A fighter jet",
          "A seaplane"
        ],
        correctAnswerIndex: 0,
        samplePassage: "His eighteen-month tour was spent in a Piper Cub, a small propeller plane, with George seated behind the pilot as they searched for targets.",
        hint: "The passage names the small propeller plane he rode in.",
        explanation: "George flew in a Piper Cub, a tiny propeller plane, sitting right behind the pilot."
      },
      {
        id: 'sb11-6',
        question: "What illnesses spread through the barracks where George was stationed?",
        options: [
          "Measles and chickenpox",
          "Dysentery and ulcerative skin infections",
          "Malaria and yellow fever",
          "Tuberculosis and pneumonia"
        ],
        correctAnswerIndex: 2,
        samplePassage: "George watched with dismay as dysentery and ulcerative skin infections spread through the barracks, with few remedies available to help the sick men.",
        hint: "The passage names two miseries — one of the stomach, one of the skin.",
        explanation: "Dysentery and painful skin infections swept through the barracks, and medicines were hard to come by."
      },
      {
        id: 'sb11-7',
        question: "Decades later, how did George get to NewYork-Presbyterian Hospital for his skin infection?",
        options: [
          "He walked there from his apartment",
          "An ambulance rushed him there",
          "A friend drove him in a pickup truck",
          "He took a taxi and told the driver to drop him at the hospital"
        ],
        correctAnswerIndex: 3,
        samplePassage: "His doctor told him to go to the nearest emergency room, and George was in a taxi when he received the call, so he instructed the driver to drop him at NewYork-Presbyterian.",
        hint: "The passage says what kind of car he was riding in when he got the news.",
        explanation: "George was already in a taxi, so he simply asked the driver to take him to the hospital."
      },
      {
        id: 'sb11-8',
        question: "Which phrase made George think back to his World War II days?",
        options: [
          "Brave new world",
          "Guinea pig",
          "Top secret",
          "Ground zero"
        ],
        correctAnswerIndex: 1,
        samplePassage: "When someone mentioned that trial volunteers might not want to be a guinea pig, the phrase sparked George's memory of World War II and New Guinea and launched a conversation about dive-bombers and tommy guns.",
        hint: "The passage names the animal phrase that triggered his memories.",
        explanation: "The words guinea pig reminded George of being tested on — and of his wartime days in New Guinea."
      },
      {
        id: 'sb11-10',
        question: "What did George and Ruth have in common at the hospital?",
        options: [
          "They were brother and sister",
          "They shared the same doctor as children",
          "They had the same skin infection and both joined the trial",
          "They were both medical students"
        ],
        correctAnswerIndex: 2,
        samplePassage: "George and Ruth had spent the war on opposite sides of the world in very different circumstances, but now they were just across the hall from each other, confronting the same skin infection — and both were enrolled in the trial.",
        hint: "The passage says they were across the hall from each other with the same illness.",
        explanation: "Though their wartime experiences were totally different, George and Ruth ended up in neighboring hospital rooms with the same skin infection, both volunteering for the trial."
      }
    ]
  },

  {
    id: 'superbugs-ch12',
    title: "Superbugs: Chapter 12 – Mississippi Mud",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "sky",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "The story of vancomycin — from a scoop of Borneo dirt to a drug nicknamed Mississippi Mud — plus Erwin, an eager young medical student who signs up for the trial.",
    questions: [
      {
        id: 'sb12-1',
        question: "A few years after penicillin hit the market, what became obvious to doctors?",
        options: [
          "That penicillin cured every disease",
          "That they would need a new drug to treat infections",
          "That dirt was too dirty to study",
          "That hospitals should close on weekends"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Just a few years after penicillin hit the market, it became obvious to physicians that they would need something else to treat patients with infections, so the hunt for a new antibiotic began.",
        hint: "The passage says doctors realized penicillin alone would not be enough.",
        explanation: "Doctors saw that they needed another infection-fighting drug, which launched the search that led to vancomycin."
      },
      {
        id: 'sb12-3',
        question: "Who received the Borneo dirt sample?",
        options: [
          "E. C. Kornfield, an organic chemist at the Eli Lilly company",
          "Alexander Fleming, at his London laboratory",
          "A farmer looking for fertilizer",
          "A geologist studying rocks"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The Borneo dirt was sent to E. C. Kornfield, an organic chemist at the Eli Lilly company, who discovered that it contained a microbe making a brand-new substance.",
        hint: "The passage names the chemist and the drug company he worked for.",
        explanation: "Kornfield, a chemist at Eli Lilly, received the dirt and found the microbe that would become vancomycin."
      },
      {
        id: 'sb12-4',
        question: "What did the Borneo microbe make?",
        options: [
          "A new kind of plastic",
          "A sweet-smelling perfume",
          "A poison that killed plants",
          "A substance first called compound 05865, which became vancomycin"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Hidden in the sample was an organism called Streptomyces orientalis that made a substance first known as compound 05865, which would later be named vancomycin.",
        hint: "The passage gives the code number the new substance had before it got its real name.",
        explanation: "The microbe Streptomyces orientalis made compound 05865 — the future vancomycin."
      },
      {
        id: 'sb12-5',
        question: "What word is the name vancomycin based on?",
        options: [
          "Victory",
          "Vanilla",
          "Vanquish",
          "Vancouver"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The new drug was named vancomycin, its name derived from the word vanquish, because doctors hoped it would defeat the toughest infections.",
        hint: "The passage says the name comes from a word meaning to conquer or defeat.",
        explanation: "Vancomycin comes from vanquish — to defeat — because it was meant to conquer infections penicillin could not."
      },
      {
        id: 'sb12-6',
        question: "How long did it take for the Borneo dirt discovery to become an FDA-approved drug?",
        options: [
          "Six months",
          "One year",
          "Six years",
          "Thirty years"
        ],
        correctAnswerIndex: 1,
        samplePassage: "It took just six years for the dirt from Borneo to be turned into an FDA-approved medicine, a remarkably fast journey from soil to pharmacy.",
        hint: "The passage gives the number of years from dirt to approved drug.",
        explanation: "In only six years, the Borneo soil microbe became an approved drug — lightning-fast for medicine."
      },
      {
        id: 'sb12-7',
        question: "At first, which patients was vancomycin reserved for?",
        options: [
          "Children with colds",
          "Patients with severe infections that penicillin could not cure",
          "Anyone who asked for it",
          "Only professional athletes"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Vancomycin was initially reserved for patients with severe penicillin-resistant infections, saved as a special weapon for the hardest cases.",
        hint: "The passage says it was saved for the toughest infections penicillin failed against.",
        explanation: "Doctors held vancomycin in reserve for severe infections that penicillin could no longer defeat."
      },
      {
        id: 'sb12-8',
        question: "Who was Erwin Davis?",
        options: [
          "A fourth-year medical student from Nebraska visiting Manhattan",
          "A retired firefighter from Queens",
          "A drug company executive",
          "A high school science teacher"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Erwin Davis was a fourth-year medical student from Nebraska who had come to Manhattan to try out for a training spot at a neighboring hospital.",
        hint: "The passage describes him as a medical student far from home.",
        explanation: "Erwin was a Nebraska medical student in New York hoping to land a residency training spot."
      },
      {
        id: 'sb12-9',
        question: "In this chapter, what slowly dripped into Erwin's IV?",
        options: [
          "Salty chicken soup",
          "The drug nicknamed Mississippi Mud — vancomycin",
          "Plain drinking water",
          "Orange juice"
        ],
        correctAnswerIndex: 2,
        samplePassage: "As Erwin received his treatment, the drug nicknamed Mississippi Mud slowly dripped into his IV — the antibiotic vancomycin.",
        hint: "The passage names the nickname of the drug going into his IV.",
        explanation: "Erwin was given vancomycin — the brownish early form of the drug that earned the nickname Mississippi Mud."
      },
      {
        id: 'sb13-2',
        question: "How old was Soren when McCarthy met him?",
        options: [
          "Nineteen",
          "Twenty-five",
          "Forty-two",
          "Thirty-one"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter introduces Soren Gillickson as a thirty-one-year-old computer programmer who had been in a serious car accident three years earlier.",
        hint: "The passage states his exact age.",
        explanation: "Soren was thirty-one years old."
      },
      {
        id: 'sb13-3',
        question: "What put Soren in the hospital three years earlier?",
        options: [
          "A car accident that fractured his femur",
          "A bad case of the flu",
          "A broken arm from a bicycle fall",
          "An allergic reaction to peanuts"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Three years earlier, Soren had been in a car accident on East Fifty-Seventh Street and fractured his femur, and he was rushed to an emergency room where surgeons operated on his leg.",
        hint: "The passage describes the crash and the broken thigh bone.",
        explanation: "A car accident fractured Soren's femur — his thigh bone — and he needed surgery."
      },
      {
        id: 'sb13-4',
        question: "What did the hospital send Soren home with after his surgery?",
        options: [
          "A wheelchair he had to return",
          "A thirty-day prescription for the strong painkiller Dilaudid",
          "A set of crutches made of wood",
          "A book about physical therapy"
        ],
        correctAnswerIndex: 2,
        samplePassage: "When it was time for discharge, Soren was given a thirty-day prescription for a powerful painkiller called Dilaudid and sent on his way.",
        hint: "The passage names the strong pain medicine and how long the supply lasted.",
        explanation: "Soren went home with a month's supply of Dilaudid, a powerful opioid painkiller."
      },
      {
        id: 'sb13-5',
        question: "What happened when Soren's pain pills ran out a month later?",
        options: [
          "His doctor denied the refill request",
          "He threw the empty bottle away",
          "The pharmacy gave him a free refill",
          "He decided he no longer needed them"
        ],
        correctAnswerIndex: 0,
        samplePassage: "When he ran out a month later, Soren returned to his doctor, who denied the refill request, since the leg had healed nicely.",
        hint: "The passage says his doctor said no to more pills.",
        explanation: "His doctor refused more pills because the leg had healed — but by then Soren's path to addiction had already begun in the hospital."
      },
      {
        id: 'sb13-6',
        question: "What did McCarthy first notice about Soren in the emergency room?",
        options: [
          "He was wearing a cast on his leg",
          "He was reading a comic book",
          "His right hand trembled",
          "He was fast asleep"
        ],
        correctAnswerIndex: 2,
        samplePassage: "When Soren stumbled into the emergency room as a full-blown addict, the first thing McCarthy noticed was that his right hand trembled.",
        hint: "The passage describes a shaky hand McCarthy spotted right away.",
        explanation: "Soren's trembling right hand was a visible sign of his addiction."
      },
      {
        id: 'sb13-7',
        question: "What did Soren pull from his black backpack when McCarthy offered the trial?",
        options: [
          "His lunch",
          "A pen, asking where to sign",
          "A photograph of his dog",
          "His phone charger"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Soren reached into a black backpack near his feet to grab a pen and asked where to sign, and his eagerness gave McCarthy pause.",
        hint: "The passage says he grabbed something to write with and asked where to sign.",
        explanation: "Soren was almost too eager to sign up — like Erwin, he barely knew anything about the study."
      },
      {
        id: 'sb13-8',
        question: "What did the word on Soren's hospital wristband warn about?",
        options: [
          "A peanut allergy",
          "An allergy to sulfa drugs",
          "A fear of needles",
          "A bee sting allergy"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Soren showed McCarthy the word on his hospital wristband: Sulfa. When asked what happens if he gets sulfa drugs, he said his skin falls off, or tries to.",
        hint: "The passage names the drug family on his warning wristband.",
        explanation: "Soren was allergic to sulfa drugs — they could cause a terrible reaction where his skin blistered and peeled."
      },
      {
        id: 'sb13-9',
        question: "What happened to Soren's infected elbow?",
        options: [
          "Surgeons washed it out while he was sedated",
          "It healed on its own overnight",
          "It was wrapped in a bandage and ignored",
          "He treated it with ice at home"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Two hours later, Soren was back in the operating room, chemically sedated as a team of surgeons carefully washed out his infected elbow.",
        hint: "The passage describes surgeons cleaning out the infection while he slept.",
        explanation: "Surgeons had to wash out Soren's infected elbow in the operating room."
      },
      {
        id: 'sb14-1',
        question: "What was Donny Alexakis's job for twenty-two years?",
        options: [
          "A police officer in Chicago",
          "A New York City firefighter",
          "A subway conductor",
          "A construction worker"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Donny Alexakis had spent twenty-two years as a New York City firefighter before retiring to the mountains of Kentucky.",
        hint: "The passage names the brave profession Donny did for over two decades.",
        explanation: "Donny served 22 years as a New York City firefighter before retiring."
      },
      {
        id: 'sb14-3',
        question: "How old was Donny when McCarthy met him?",
        options: [
          "In his thirties",
          "In his forties",
          "In his late fifties",
          "In his eighties"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Donny was in his late fifties when McCarthy found him on a stretcher in the emergency room, vigorously scratching his right forearm.",
        hint: "The passage gives his age as late in a decade.",
        explanation: "Donny was in his late fifties."
      },
      {
        id: 'sb14-4',
        question: "What was Donny doing when McCarthy first saw him in the emergency room?",
        options: [
          "Scratching his right forearm",
          "Reading a newspaper",
          "Talking on his phone",
          "Eating a sandwich"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Donny was lying on a stretcher in the emergency room, vigorously scratching his right forearm as he spoke about that September morning.",
        hint: "The passage describes what his hands were doing as he talked.",
        explanation: "Donny could not stop scratching his forearm — a symptom of the transplant complication he was suffering."
      },
      {
        id: 'sb14-5',
        question: "About how many rescue workers were potentially exposed to the poisons at the World Trade Center site?",
        options: [
          "More than fifty thousand",
          "About five hundred",
          "Fewer than one hundred",
          "Exactly one thousand"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Donny was one of more than fifty thousand rescue workers potentially exposed to the poisonous dust and chemicals at the disaster site.",
        hint: "The passage gives a very large number of exposed rescue workers.",
        explanation: "Over 50,000 rescue workers may have been exposed to the toxic air at Ground Zero."
      },
      {
        id: 'sb14-6',
        question: "Roughly how many cancer-causing chemicals were in the smoke Donny breathed?",
        options: [
          "About seven",
          "About seventy",
          "About seven hundred",
          "About seven thousand"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Scientists later learned there were roughly seventy carcinogens — cancer-causing chemicals — in the smoke that rose from the fire and debris.",
        hint: "The passage gives the approximate number of carcinogens in the smoke.",
        explanation: "The smoke contained roughly seventy different cancer-causing chemicals."
      },
      {
        id: 'sb14-7',
        question: "Which chemical did Donny's doctors blame for his illness?",
        options: [
          "Benzene",
          "Chlorine",
          "Ammonia",
          "Helium"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Donny's doctors blamed benzene for his illness, pointing to the appearance of his bone marrow under the microscope as the clue.",
        hint: "The passage names the chemical linked to his damaged bone marrow.",
        explanation: "Doctors fingered benzene — one of the toxic chemicals in the smoke — based on how Donny's bone marrow looked."
      },
      {
        id: 'sb14-8',
        question: "Which law, championed by TV host Jon Stewart, is discussed in this chapter?",
        options: [
          "The Clean Air Act",
          "The Superbug Safety Act",
          "The Hospital Reform Act",
          "The Zadroga Act"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter discusses benzene and the Zadroga Act, with Jon Stewart described as a vocal proponent of the bill that helps sick first responders.",
        hint: "The passage names the act that supports ill 9/11 responders.",
        explanation: "The Zadroga Act provides health care for 9/11 first responders, and Jon Stewart campaigned hard for it."
      },
      {
        id: 'sb14-9',
        question: "What caused Donny's brutal, uncontrollable itching?",
        options: [
          "A sunburn",
          "Graft-versus-host disease",
          "A wool sweater",
          "Mosquito bites"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Donny's uncontrollable itching came from graft-versus-host disease, a dangerous complication of his transplant that McCarthy called brutal.",
        hint: "The passage names the transplant complication behind the itching.",
        explanation: "After his transplant, Donny developed graft-versus-host disease, which caused the relentless itching."
      },
      {
        id: 'sb15-2',
        question: "How many rounds of chemotherapy had Remy finished?",
        options: [
          "One",
          "Two",
          "Three",
          "Five"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter notes that Remy had just completed a fifth round of chemotherapy when the fungal infection took hold.",
        hint: "The passage gives the number of chemo rounds she had completed.",
        explanation: "Remy had endured five rounds of chemotherapy, which left her body very weak."
      },
      {
        id: 'sb15-3',
        question: "What antibiotic was Remy taking every day to prevent bacterial infections?",
        options: [
          "Penicillin",
          "Ciprofloxacin",
          "Aspirin",
          "Vitamin C"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Remy had been taking a daily antibiotic called ciprofloxacin to prevent bacterial infections, and her doctors debated whether to stop it.",
        hint: "The passage names the preventive antibiotic she was on.",
        explanation: "Remy took ciprofloxacin daily as a shield against bacteria — but it could not protect her from a fungus."
      },
      {
        id: 'sb15-4',
        question: "What happened after doctors gave Remy the powerful antibiotic meropenem?",
        options: [
          "She was cured within hours",
          "It failed — her white blood cell count kept rising and her blood pressure kept dropping",
          "She asked to go home immediately",
          "Her doctors celebrated with cake"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The meropenem failed to halt the warning signs: a rising white blood cell count and falling blood pressure showed the medicine was not the right choice.",
        hint: "The passage lists the bad signs that kept getting worse.",
        explanation: "Meropenem did not work — her infection kept raging, which terrified her doctors."
      },
      {
        id: 'sb15-5',
        question: "Why did Remy's aggressive cancer treatments make her situation worse?",
        options: [
          "They weakened her immune defenses",
          "They made her too tall",
          "They turned her hair green",
          "They made her allergic to water"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The chapter explains that the aggressive treatments for her leukemia had weakened her immune defenses, leaving her open to the fungal attack.",
        hint: "The passage says the treatments hurt her body's ability to fight germs.",
        explanation: "Chemotherapy destroys cancer cells but also weakens the immune system, so Remy could barely fight off the fungus."
      },
      {
        id: 'sb15-7',
        question: "What did a later MRI show about Remy's infection?",
        options: [
          "It had spread to her brain",
          "It had vanished completely",
          "It was contained and no longer spreading",
          "It had turned into a different disease"
        ],
        correctAnswerIndex: 3,
        samplePassage: "A later scan showed real progress: the infection was contained and no longer spreading, and Remy was no longer on the verge of death.",
        hint: "The passage describes the infection as stopped in its tracks.",
        explanation: "The MRI showed the infection was contained — a huge relief after she had been near death."
      },
      {
        id: 'sb15-8',
        question: "As Remy improved, what could she do again?",
        options: [
          "Fly an airplane",
          "Walk",
          "Play professional soccer",
          "Drive a car"
        ],
        correctAnswerIndex: 1,
        samplePassage: "As she got better, Remy was walking again and eager to get back to school, and her family began to hope she might graduate from high school.",
        hint: "The passage says she was on her feet again.",
        explanation: "Remy recovered enough to walk and even dream about returning to school."
      },
      {
        id: 'sb15-9',
        question: "What milestone did Remy's family start hoping she would reach?",
        options: [
          "Graduating from high school",
          "Winning a marathon",
          "Becoming a movie star",
          "Traveling to the moon"
        ],
        correctAnswerIndex: 0,
        samplePassage: "With Remy improving, her family began thinking that she might graduate from high school — a future that had seemed impossible when she was near death.",
        hint: "The passage names the school milestone her family dared to hope for.",
        explanation: "After nearly losing her, the family could finally imagine Remy graduating from high school."
      },
      {
        id: 'sb15-10',
        question: "How did the chapter describe Remy's condition at its worst?",
        options: [
          "Mildly uncomfortable",
          "On the verge of death",
          "Slightly bored",
          "Ready to run a race"
        ],
        correctAnswerIndex: 2,
        samplePassage: "At her lowest point, Remy was on the verge of death, with the fungal infection raging despite everything her doctors tried.",
        hint: "The passage uses a phrase meaning almost dying.",
        explanation: "Remy came terrifyingly close to dying before the new treatment plan turned things around."
      }
    ]
  },
  {
    id: 'superbugs-ch16',
    title: "Superbugs: Chapter 16 – A Quiet Revolution",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "amber",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "A look at bold new weapons against superbugs — treatments that harness the patient's own immune system, and a brand-new resistance enzyme called NDM-1.",
    questions: [
      {
        id: 'sb16-2',
        question: "What does immunotherapy use to fight disease?",
        options: [
          "Stronger antibiotics",
          "X-ray machines",
          "The patient's own immune system",
          "Ice baths"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter describes immunotherapy, a new approach that uses the patient's own immune system to attack disease instead of relying only on drugs.",
        hint: "The passage says the treatment turns the body's own defenses into the weapon.",
        explanation: "Immunotherapy trains and unleashes the patient's own immune system against the disease."
      },
      {
        id: 'sb16-3',
        question: "Which famous patient showed that immunotherapy could work?",
        options: [
          "Former president Jimmy Carter",
          "A famous astronaut",
          "A Olympic swimmer",
          "A rock star"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The chapter points to Jimmy Carter, whose advanced melanoma was treated with immunotherapy in 2015, adding years to his life.",
        hint: "The passage names the former president whose cancer treatment made headlines.",
        explanation: "Jimmy Carter's melanoma treatment in 2015 showed the world that immunotherapy could add years to a patient's life."
      },
      {
        id: 'sb16-5',
        question: "What is risky about immunotherapy?",
        options: [
          "It is too cheap to work",
          "It can make the immune system go haywire and attack the patient",
          "It only works on weekends",
          "It requires eating special candy"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The chapter warns that immunotherapy is risky: it can make the immune system go haywire, turning the body's defenses against the patient.",
        hint: "The passage says the unleashed immune system can attack the wrong target.",
        explanation: "An over-activated immune system can attack the patient's own body — which is why the treatment must be used carefully."
      },
      {
        id: 'sb16-6',
        question: "What hopeful fact did McCarthy note about immunotherapy's risks?",
        options: [
          "Its effects are often reversible",
          "It never has any side effects",
          "It works instantly every time",
          "It costs nothing at all"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Despite the risks, McCarthy notes a hopeful fact: immunotherapy is often effective and, importantly, its effects are reversible.",
        hint: "The passage says doctors can undo the treatment's effects.",
        explanation: "Unlike some treatments, immunotherapy's effects can often be reversed if something goes wrong — a real comfort to doctors."
      },
      {
        id: 'sb16-7',
        question: "Why was meropenem's failure against resistant bacteria called a disastrous development?",
        options: [
          "The drug tasted terrible",
          "It showed the bacteria were winning the tug-of-war against patients",
          "The drug company went bankrupt",
          "Doctors forgot how to spell it"
        ],
        correctAnswerIndex: 2,
        samplePassage: "When meropenem failed, McCarthy called it a disastrous development — a sign that bacteria were winning the tug-of-war against patients and their doctors.",
        hint: "The passage uses a tug-of-war image to describe the losing battle.",
        explanation: "Meropenem was one of the strongest antibiotics; its failure meant resistant bacteria were gaining the upper hand."
      },
      {
        id: 'sb16-8',
        question: "What was NDM-1?",
        options: [
          "A new hospital building",
          "A brand-new resistance enzyme doctors had never seen before",
          "A type of bandage",
          "A new kind of stethoscope"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter describes NDM-1, a brand-new resistance enzyme that no one had ever seen before and that could destroy powerful antibiotics.",
        hint: "The passage calls it a never-before-seen enzyme that defeats antibiotics.",
        explanation: "NDM-1 was a frightening new enzyme that let bacteria destroy even the strongest antibiotics."
      },
      {
        id: 'sb16-9',
        question: "How does NDM-1 spread from one bacterium to another?",
        options: [
          "Through the air like a sneeze",
          "On a tiny piece of DNA called a plasmid",
          "By hitching rides on mosquitoes",
          "Through contaminated water only"
        ],
        correctAnswerIndex: 1,
        samplePassage: "NDM-1 is carried on a plasmid — a small bit of DNA that passes easily from one bacterium to another, spreading resistance like a shared secret.",
        hint: "The passage names the tiny DNA packet that carries the resistance.",
        explanation: "Bacteria trade plasmids — tiny rings of DNA — and with them the NDM-1 resistance, spreading it fast."
      },
      {
        id: 'sb16-10',
        question: "Where was NDM-1 first discovered?",
        options: [
          "In Antarctica",
          "In bacteria from India",
          "On the moon",
          "In a Canadian forest"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter explains that NDM-1 — named for New Delhi — was first found in bacteria from India, and no one knew where it might spread next.",
        hint: "The passage points to the South Asian country in the enzyme's name.",
        explanation: "NDM-1 stands for New Delhi metallo-beta-lactamase-1, first spotted in bacteria from India."
      }
    ]
  },
  {
    id: 'superbugs-ch17',
    title: "Superbugs: Chapter 17 – Decision Points",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "emerald",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "As the trial drug's delivery day nears, McCarthy faces tense decisions about safety checks, side effects, and the gatekeepers who control new medicines.",
    questions: [
      {
        id: 'sb17-3',
        question: "What surprising fact did McCarthy note about his hospital's pharmacy?",
        options: [
          "It had no shelves",
          "It was run entirely by robots",
          "It only stocked candy",
          "Even though it was one of the country's best, it carried nothing like dalba"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Despite having one of the most robust pharmacies in the country, the hospital did not carry anything like dalba — the new drug was truly one of a kind there.",
        hint: "The passage says even a top pharmacy lacked this drug.",
        explanation: "Dalba was so new and unusual that even a world-class hospital pharmacy had nothing like it."
      },
      {
        id: 'sb17-4',
        question: "After dalba is given to a patient, what happens next?",
        options: [
          "The patient is sent home immediately",
          "The patient is watched closely for bad reactions",
          "The patient takes a nap in the lobby",
          "The patient is given a lollipop and discharged"
        ],
        correctAnswerIndex: 1,
        samplePassage: "After the drug is given, the patient is monitored closely for signs of a bad reaction, because safety comes first with any new medicine.",
        hint: "The passage says nurses keep a close eye on the patient afterward.",
        explanation: "With a new drug, doctors watch patients closely for any harmful reaction after each dose."
      },
      {
        id: 'sb17-5',
        question: "Which of these bad reactions is listed in the chapter?",
        options: [
          "Growing an extra finger",
          "Hives",
          "Turning invisible",
          "Speaking a new language"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter lists possible reactions to the new drug, ranging from itchiness or hives all the way to a severe condition called Stevens-Johnson syndrome.",
        hint: "The passage names itchy bumps on the skin as one possible reaction.",
        explanation: "Hives — itchy raised bumps on the skin — are one of the reactions doctors watch for."
      },
      {
        id: 'sb17-6',
        question: "How did McCarthy describe the careful safety process for new drugs?",
        options: [
          "Quick and careless",
          "Tedious but necessary",
          "Fun and exciting",
          "Completely pointless"
        ],
        correctAnswerIndex: 1,
        samplePassage: "McCarthy calls the monitoring process tedious but necessary, adding simply that the system works to protect patients.",
        hint: "The passage pairs a word meaning boring and slow with a word meaning needed.",
        explanation: "All the safety checks are slow and painstaking — but they keep patients safe."
      },
      {
        id: 'sb17-7',
        question: "Once the new drug is in stock, who enters the picture?",
        options: [
          "Another gatekeeper",
          "A pizza delivery driver",
          "A marching band",
          "A movie star"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Once a new drug such as dalba is in stock, another gatekeeper enters the picture — someone who decides how and when the precious medicine may be used.",
        hint: "The passage names the person who controls access to the drug.",
        explanation: "New drugs are guarded by gatekeepers — experts who make sure the medicine is used wisely and safely."
      },
      {
        id: 'sb17-8',
        question: "What did Tom Walsh draw up that only he understood?",
        options: [
          "A map of the hospital",
          "A cartoon of the staff",
          "A grocery list",
          "Equations"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Tom Walsh was the kind of brilliant mentor who would draw up equations that only he understood, then suddenly make an impossible idea clear.",
        hint: "The passage says he wrote math that baffled everyone else.",
        explanation: "Tom thought in equations — scribbling math only he could follow before revealing the answer."
      },
      {
        id: 'sb17-9',
        question: "What did doctors Finland and Weinstein warn about antibiotics back in 1953?",
        options: [
          "That antibiotics tasted bad",
          "That antibiotics could harm almost any organ in the body",
          "That antibiotics were too colorful",
          "That antibiotics should be given to everyone"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter recalls how Finland and Weinstein warned in 1953 that antibiotics could harm almost any organ, with reactions that were difficult to predict.",
        hint: "The passage says the two doctors warned the drugs could hurt many parts of the body.",
        explanation: "Even in 1953, wise doctors warned that antibiotics were powerful drugs that could damage nearly any organ."
      },
      {
        id: 'sb17-10',
        question: "What is the chapter's big lesson about deciding when to use antibiotics?",
        options: [
          "Decisions about antibiotics should balance benefits against risks",
          "Antibiotics should never be studied",
          "Doctors should decide by flipping a coin",
          "All new drugs are perfectly safe"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The chapter shows that every antibiotic decision is a decision point: doctors must weigh the good a drug can do against the harm it might cause, and use these precious medicines wisely.",
        hint: "The passage says doctors must weigh the good against the possible harm.",
        explanation: "The decision points of the title are moments when doctors balance an antibiotic's benefits against its risks."
      }
    ]
  },
  {
    id: 'superbugs-ch18',
    title: "Superbugs: Chapter 18 – Piper",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "sky",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Piper, a young mother admitted with a painful lump, receives devastating news — and McCarthy leans on his mentor's humor to cope.",
    questions: [
      {
        id: 'sb18-1',
        question: "Where did Tom Walsh travel at the start of the chapter?",
        options: [
          "Miami",
          "Seattle",
          "Boston",
          "Chicago"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter opens with Tom Walsh departing for Chicago, leaving McCarthy to face a difficult new case on his own.",
        hint: "The passage names the Midwestern city Tom flew to.",
        explanation: "Tom headed to Chicago, so McCarthy had to handle Piper's case without his mentor nearby."
      },
      {
        id: 'sb18-2',
        question: "What did McCarthy grab before heading to see the new patient?",
        options: [
          "His umbrella",
          "His stethoscope",
          "His lunchbox",
          "His bicycle"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Hearing about the new admission, McCarthy grabbed his stethoscope and headed to Piper's room to meet her.",
        hint: "The passage names the doctor's tool he took with him.",
        explanation: "McCarthy took his stethoscope — the listening tool around every doctor's neck — and went to Piper's room."
      },
      {
        id: 'sb18-3',
        question: "What symptom brought Piper Larson to the hospital?",
        options: [
          "A sore throat",
          "A sprained ankle",
          "A painful red lump near her left collarbone",
          "A headache"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Piper Larson had been admitted with a painful red lump near her left collarbone, which worried the emergency room doctors.",
        hint: "The passage describes the painful lump by her collarbone.",
        explanation: "A painful red lump near her collarbone was the symptom that brought Piper to the hospital."
      },
      {
        id: 'sb18-4',
        question: "What did the emergency room doctors first think Piper had?",
        options: [
          "A skin infection",
          "A broken bone",
          "Food poisoning",
          "An ear infection"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The emergency room physician suspected a skin infection and ordered intravenous vancomycin to treat it.",
        hint: "The passage says the ER doctor guessed it was an infection of the skin.",
        explanation: "At first, Piper's lump looked like a skin infection, so the ER started her on vancomycin."
      },
      {
        id: 'sb18-5',
        question: "What medicine did the ER order for Piper?",
        options: [
          "Cough syrup",
          "Aspirin",
          "Allergy pills",
          "Intravenous vancomycin"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Suspecting a skin infection, the emergency room physician ordered intravenous vancomycin for Piper.",
        hint: "The passage names the IV antibiotic the ER chose.",
        explanation: "The ER ordered IV vancomycin — the classic drug for serious skin infections."
      },
      {
        id: 'sb18-6',
        question: "What was Piper's real diagnosis?",
        options: [
          "A common cold",
          "A stomach ulcer",
          "Gastric carcinoma — stomach cancer",
          "A bee sting allergy"
        ],
        correctAnswerIndex: 2,
        samplePassage: "As McCarthy read through her documents, he discovered the devastating truth: Piper had gastric carcinoma, a cancer of the stomach.",
        hint: "The passage reveals the cancer diagnosis hidden in her chart.",
        explanation: "Piper did not just have an infection — she had stomach cancer, a heartbreaking discovery."
      },
      {
        id: 'sb18-7',
        question: "What was Piper's young son holding as he lay on the hospital floor?",
        options: [
          "A teddy bear",
          "A lollipop",
          "A video game",
          "A balloon"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Piper's young son was there with her, at one point lying on the floor holding a lollipop while his mother faced terrible news.",
        hint: "The passage names the sweet treat in the little boy's hand.",
        explanation: "The little boy lay on the floor with a lollipop — a small, heartbreaking detail McCarthy never forgot."
      },
      {
        id: 'sb18-8',
        question: "What did Piper's son ask to do?",
        options: [
          "Go to the vending machine",
          "Watch television",
          "Play outside",
          "Call his grandmother"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The boy asked if he could go to the vending machine, a perfectly ordinary request that made the moment even sadder.",
        hint: "The passage quotes his simple request about the snack machine.",
        explanation: "The boy's innocent request to visit the vending machine underscored how young he was."
      },
      {
        id: 'sb19-2',
        question: "Where was the dangerous fungus Candida auris first discovered?",
        options: [
          "In a hospital in London",
          "In a river in Brazil",
          "In the ear of a 70-year-old woman in Japan",
          "In a cave in Australia"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter explains that Candida auris was first found in the ear of a 70-year-old Japanese woman, and from there it spread to hospitals around the world.",
        hint: "The passage points to a body part and an island country.",
        explanation: "Scientists first spotted the fungus in a Japanese woman's ear, and it later spread across the globe."
      },
      {
        id: 'sb19-3',
        question: "Where were the drug company's offices located?",
        options: [
          "In a tall tower in Chicago",
          "At Exchange Place, a concrete office park in Jersey City",
          "On a farm outside Boston",
          "In a beach house in Miami"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The company had moved to Exchange Place, a concrete office park in Jersey City, which overlooks the Hudson River and the southern tip of Manhattan.",
        hint: "The passage names a New Jersey office park across the river from Manhattan.",
        explanation: "The offices sat in Jersey City, New Jersey — the Garden State — with a view of the Hudson River and lower Manhattan."
      },
      {
        id: 'sb19-4',
        question: "Who was Sylvia?",
        options: [
          "A physician who worked for the antifungal drug company",
          "A nurse in McCarthy's hospital",
          "A reporter writing about superbugs",
          "A patient with Candida auris"
        ],
        correctAnswerIndex: 0,
        samplePassage: "At the meeting, McCarthy and Tom sat down with Sylvia, a physician who worked for the drug company, and she told them how excited the company was about the new antifungal.",
        hint: "The passage describes Sylvia's job at the company.",
        explanation: "Sylvia was a doctor employed by the drug company, and she had worked with Tom on other projects for years."
      },
      {
        id: 'sb19-5',
        question: "What did Tom say the team needed before any patient called?",
        options: [
          "A bigger office",
          "A new phone system",
          "More laboratory mice",
          "A protocol"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Tom told the group they needed a protocol, a clear step-by-step plan, so that everyone would know exactly what to do when a sick patient needed the drug.",
        hint: "The passage names the step-by-step plan Tom asked for.",
        explanation: "Tom wanted a written protocol so the team could act fast instead of figuring things out in the moment."
      },
      {
        id: 'sb19-6',
        question: "According to Sylvia, what should happen when the team got a call about a sick patient?",
        options: [
          "Wait a week and call back",
          "Send the patient a letter",
          "Have someone ready to spring into action, confirm the Candida auris infection, and get the drug to the patient with no delays",
          "Ask the patient to travel to New Jersey"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Sylvia explained that when a call came in, someone had to be ready to spring into action, review the case, determine whether the patient had Candida auris, and get the drug to the patient with no delays.",
        hint: "The passage lists three quick jobs: review, confirm, and deliver.",
        explanation: "Sylvia's plan was built for speed — every call meant immediate review and fast delivery of the drug."
      },
      {
        id: 'sb19-7',
        question: "How many doctors had even heard of Candida auris?",
        options: [
          "Nearly every doctor in America",
          "Most doctors had never even heard of it",
          "Only doctors in Japan",
          "Every doctor in New York"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The chapter notes that most physicians had never even heard of Candida auris, which made identifying the infection quickly all the more urgent.",
        hint: "The passage says the fungus was unfamiliar to most physicians.",
        explanation: "Because the fungus was so new, most doctors did not know it existed — a dangerous gap the team wanted to close."
      },
      {
        id: 'sb19-9',
        question: "Why had one Candida auris patient been placed in a specialized hospital room?",
        options: [
          "To prevent the fungus from spreading to others",
          "To give him a quieter place to sleep",
          "To keep him near the cafeteria",
          "To test a new kind of bed"
        ],
        correctAnswerIndex: 0,
        samplePassage: "One patient had been placed in a specialized room to keep the fungus from spreading, and after repeated surgical procedures he was anxious to find a better option.",
        hint: "The passage gives the infection-control reason for the special room.",
        explanation: "The special room was an isolation measure to stop the stubborn fungus from reaching other patients."
      },
      {
        id: 'sb19-10',
        question: "The chapter is called 'Garden State' because the meeting took place in which state?",
        options: [
          "New York",
          "Connecticut",
          "Pennsylvania",
          "New Jersey"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The drug company's offices were in Jersey City, and New Jersey is nicknamed the Garden State, which gives the chapter its title.",
        hint: "The passage names the nickname of the state where Jersey City sits.",
        explanation: "Jersey City is in New Jersey, the Garden State — hence the chapter's name."
      }
    ]
  },
  {
    id: 'superbugs-ch20',
    title: "Superbugs: Chapter 20 – Trojan Horses",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "purple",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "McCarthy celebrates three brand-new antibiotics — including cefiderocol, the 'Trojan horse' drug that sneaks into bacteria in disguise — while worrying that a soaring price could keep it from the patients who need it.",
    questions: [
      {
        id: 'sb20-1',
        question: "What were the first two words of this chapter?",
        options: [
          "Terrible news,",
          "Good meeting,",
          "Hello again,",
          "Big problem,"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The chapter opens with McCarthy saying good meeting, a cheerful nod to the productive visit with Sylvia and the drug company in New Jersey.",
        hint: "The passage repeats the chapter's cheerful first words.",
        explanation: "McCarthy was upbeat after the New Jersey meeting, so the chapter starts on a happy note."
      },
      {
        id: 'sb20-2',
        question: "Which three new antibiotics does the chapter celebrate?",
        options: [
          "Lefamulin, vaborbactam, and cefiderocol",
          "Penicillin, aspirin, and insulin",
          "Vancomycin, morphine, and Benadryl",
          "Tylenol, Advil, and cough syrup"
        ],
        correctAnswerIndex: 0,
        samplePassage: "McCarthy lists three new antibiotics worth celebrating: lefamulin, vaborbactam, and cefiderocol, each a fresh weapon against hard-to-treat infections.",
        hint: "The passage names the trio of new drugs.",
        explanation: "All three were newly developed antibiotics, a rare bright spot in the fight against superbugs."
      },
      {
        id: 'sb20-3',
        question: "Why is cefiderocol called a 'Trojan horse' antibiotic?",
        options: [
          "It is shaped like a horse",
          "It was invented in ancient Greece",
          "It tricks bacteria into pulling the drug inside, like soldiers hidden in a wooden horse",
          "It only works on horses"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter describes cefiderocol's Trojan horse approach: the drug sneaks into bacteria in disguise, fooling the germs into hauling their own destroyer through the gates.",
        hint: "The passage compares the drug's trick to the ancient story of the wooden horse.",
        explanation: "Like the Greek soldiers hiding inside a giant wooden horse, the antibiotic hides its attack until it is already inside the enemy."
      },
      {
        id: 'sb20-4',
        question: "What worried McCarthy about cefiderocol?",
        options: [
          "It tasted terrible",
          "It had to be kept frozen",
          "It only came in pink pills",
          "Its price could surge so high that hospitals would not use it"
        ],
        correctAnswerIndex: 3,
        samplePassage: "McCarthy worried that the price of cefiderocol could surge, and he said plainly that his hospital would not use the drug if it became too expensive.",
        hint: "The passage names the money problem that could block the drug.",
        explanation: "A great drug does no good if it costs so much that hospitals cannot afford to give it to patients."
      },
      {
        id: 'sb20-6',
        question: "Who do experts usually ask to stop drug companies from hiking prices?",
        options: [
          "Movie stars",
          "Professional athletes",
          "Lawmakers",
          "Weather reporters"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter notes that experts usually call on lawmakers to step in and stop the price-hiking madness, but it adds that this rarely happens.",
        hint: "The passage names the elected officials experts turn to.",
        explanation: "Lawmakers could pass rules against extreme price hikes, but the chapter says they almost never do."
      },
      {
        id: 'sb20-7',
        question: "The chapter connects lefamulin, one of the new antibiotics, with which illness?",
        options: [
          "Pneumonia",
          "Chickenpox",
          "The common cold",
          "Hay fever"
        ],
        correctAnswerIndex: 0,
        samplePassage: "In the chapter's tour of new antibiotics, lefamulin stands out as a new treatment for pneumonia, a serious lung infection.",
        hint: "The passage links the new drug to a serious lung infection.",
        explanation: "Lefamulin was a new option for pneumonia, a lung infection that can turn dangerous when standard drugs fail."
      },
      {
        id: 'sb20-8',
        question: "Which university, just across Sixty-Eighth Street, was home to the extraordinary discovery?",
        options: [
          "Harvard University",
          "Stanford University",
          "Yale University",
          "Rockefeller University"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter ends by pointing across Sixty-Eighth Street to Rockefeller University, where scientists had quietly made an extraordinary discovery.",
        hint: "The passage names the university two blocks from McCarthy's offices.",
        explanation: "Rockefeller University, a medical research institute, sat almost next door — and its lysin discovery would soon change McCarthy's plans."
      },
      {
        id: 'sb20-9',
        question: "What does the chapter say the new antibiotics 'paled in comparison to'?",
        options: [
          "A bigger hospital",
          "An extraordinary discovery made just two blocks away",
          "A new parking garage",
          "A longer summer vacation"
        ],
        correctAnswerIndex: 1,
        samplePassage: "McCarthy writes that lefamulin, vaborbactam, and cefiderocol were reason enough to celebrate, but they paled in comparison to the extraordinary discovery unfolding two blocks away.",
        hint: "The passage says something nearby outshone even the new drugs.",
        explanation: "Exciting as the new antibiotics were, the secret lysin work at Rockefeller University impressed McCarthy even more."
      },
      {
        id: 'sb21-1',
        question: "What was William Rockefeller Sr. — John D. Rockefeller's father — like?",
        options: [
          "A quiet farmer who never left home",
          "A famous ship captain",
          "A huckster who peddled bogus medicines and sometimes pretended to be disabled to trick customers",
          "A beloved schoolteacher"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter opens with William Rockefeller Sr., a huckster and peddler of bogus medications who occasionally pretended to be disabled to manipulate his customers.",
        hint: "The passage describes the dishonest medicine salesman.",
        explanation: "John D. Rockefeller's father sold fake cures and used tricks to fool buyers — a sharp contrast with his son's later generosity."
      },
      {
        id: 'sb21-3',
        question: "What does the chapter say about the public's image of John D. Rockefeller?",
        options: [
          "Everyone always loved him",
          "Nobody knew who he was",
          "He was famous for telling jokes on stage",
          "Public perception didn't always match reality — behind his stiff public persona he was cheerful"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter notes that public perception doesn't always match reality, and that behind his arch public persona, John D. Rockefeller was a cheerful man.",
        hint: "The passage contrasts his public image with his private personality.",
        explanation: "People saw Rockefeller as stern and distant, but those who knew him found him warm and good-humored."
      },
      {
        id: 'sb21-4',
        question: "How many times did John D. Rockefeller visit his East River research campus?",
        options: [
          "Every single day",
          "Just once",
          "About fifty times",
          "Never — he refused to go"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Although the East River campus was only a few miles from his New York City home, John D. Rockefeller visited it just once in his life.",
        hint: "The passage gives the surprisingly small number of visits.",
        explanation: "He funded the institute generously but almost never set foot on its campus."
      },
      {
        id: 'sb21-5',
        question: "Where did the Rockefeller family's great fortune come from?",
        options: [
          "Standard Oil, the oil business",
          "A chain of lemonade stands",
          "A prize-winning racehorse stable",
          "A bestselling novel"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The chapter traces the family's rise to the vast fortune built on Standard Oil, the oil empire that John D. Rockefeller later turned toward philanthropy.",
        hint: "The passage names the famous oil company behind the wealth.",
        explanation: "Standard Oil made John D. Rockefeller enormously wealthy, and he gave much of it away to science and medicine."
      },
      {
        id: 'sb21-6',
        question: "Which of these best describes the chapter's main message about the Rockefellers?",
        options: [
          "Oil money is always bad",
          "Scientists should avoid wealthy donors",
          "Great wealth, given generously, can fuel life-saving medical research",
          "New Yorkers never visit their own city"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter argues that whatever people thought of the Rockefellers, their philanthropy built an institution whose scientists would one day fight superbugs.",
        hint: "The passage sums up how donated money turned into cures.",
        explanation: "The chapter's point is that Rockefeller generosity created the research home for breakthroughs like lysin science."
      },
      {
        id: 'sb21-7',
        question: "Which institution connects this chapter to the lysin story in the chapters that follow?",
        options: [
          "Central Park",
          "Times Square",
          "The Statue of Liberty",
          "Rockefeller University"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The East River campus at the heart of this chapter is Rockefeller University, the very place where Fischetti would later study bacteria-busting lysins.",
        hint: "The passage names the research campus that appears in both stories.",
        explanation: "The university the Rockefellers funded became the home of the lysin research McCarthy was about to discover."
      },
      {
        id: 'sb21-8',
        question: "What kind of place was the Rockefeller campus on the East River?",
        options: [
          "An amusement park",
          "A medical research institute",
          "A football stadium",
          "A shopping center"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The chapter traces the origins and history of Rockefeller University, the East River research campus built with Rockefeller money to pursue medical discoveries.",
        hint: "The passage describes the campus's scientific mission.",
        explanation: "Rockefeller University became one of the world's great centers for medical research."
      },
      {
        id: 'sb21-9',
        question: "What did William Rockefeller Sr. sometimes pretend in order to manipulate his customers?",
        options: [
          "To be disabled",
          "To be a doctor",
          "To be a policeman",
          "To be a pilot"
        ],
        correctAnswerIndex: 0,
        samplePassage: "William Sr. occasionally pretended to be disabled, using the sympathy trick to manipulate the customers buying his bogus medications.",
        hint: "The passage names the false condition he faked.",
        explanation: "Faking a disability was one of the huckster's tricks for winning over buyers of his fake cures."
      },
      {
        id: 'sb22-1',
        question: "What unusual thing does Alex Chapman study?",
        options: [
          "Cloud shapes",
          "Ancient coins",
          "Volcano sounds",
          "The bacteria living in people's intestines, by studying their feces"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Alex Chapman leads a five-year NIH-funded study examining the bacteria that live in the intestines of patients, which means collecting and analyzing their feces.",
        hint: "The passage names the unglamorous material Chapman collects.",
        explanation: "Chapman studies the gut microbiome — the bacteria in our intestines — by analyzing stool samples."
      },
      {
        id: 'sb22-2',
        question: "Who funds Chapman's five-year study?",
        options: [
          "A candy company",
          "The NIH, the National Institutes of Health",
          "A professional sports team",
          "A cruise line"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Chapman serves as principal investigator of a five-year study paid for by the NIH, the government's National Institutes of Health.",
        hint: "The passage names the government health agency behind the grant.",
        explanation: "The NIH bet federal research money that Chapman's gut-bacteria work could explain superbug infections."
      },
      {
        id: 'sb22-3',
        question: "Which patients' gut bacteria was Chapman studying?",
        options: [
          "Leukemia and stem-cell-transplant patients like Remy and Donny",
          "Olympic swimmers",
          "Professional chefs",
          "Astronauts in training"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The study focused on the intestinal bacteria of patients such as Remy and Donny, who have leukemia or have received a stem cell transplant.",
        hint: "The passage names two patients with serious blood conditions.",
        explanation: "The government hoped Chapman could learn why transplant and leukemia patients pick up superbug infections."
      },
      {
        id: 'sb22-6',
        question: "What was Chapman's morning routine before work?",
        options: [
          "He surfed at the beach",
          "He milked cows on a farm",
          "He flew a helicopter",
          "He dropped his kids at elementary school on the Upper East Side, then passed by Rockefeller"
        ],
        correctAnswerIndex: 3,
        samplePassage: "On a typical morning, Chapman drops his kids off at elementary school on Manhattan's Upper East Side, then passes by Rockefeller on his way to work.",
        hint: "The passage describes the school run and the famous landmark on his route.",
        explanation: "Chapman's ordinary family morning led him right past one of the world's great research institutes."
      },
      {
        id: 'sb22-7',
        question: "Why was McCarthy skeptical about lysins at first?",
        options: [
          "He thought they were too hard to pronounce",
          "He had never seen a laboratory",
          "He figured he would have heard about lysins if they really worked",
          "He was afraid of microscopes"
        ],
        correctAnswerIndex: 2,
        samplePassage: "McCarthy admits he doubted lysins could work, reasoning that if they were real, he would have heard about them — or so he thought.",
        hint: "The passage gives McCarthy's 'I would have known' reasoning.",
        explanation: "As an infectious-disease doctor, McCarthy assumed any real cure would already be famous — a belief the chapter would soon shake."
      },
      {
        id: 'sb22-8',
        question: "Which ancient remedy does McCarthy mention when doubting lysins?",
        options: [
          "Bald's Leechbook",
          "The pirate's treasure map",
          "The cookbook of Atlantis",
          "The wizard's spellbook"
        ],
        correctAnswerIndex: 0,
        samplePassage: "McCarthy recalls past medical hype, including remedies from Bald's Leechbook, an ancient text, to explain why he distrusted exciting new cure stories.",
        hint: "The passage names the old English medical text.",
        explanation: "Bald's Leechbook was a medieval collection of remedies — a reminder that miracle-cure hype is nothing new."
      },
      {
        id: 'sb22-9',
        question: "After doubting lysins, McCarthy asks: 'Have you talked to ___?'",
        options: [
          "Superman",
          "Tom",
          "The mayor",
          "His dentist"
        ],
        correctAnswerIndex: 1,
        samplePassage: "After laying out his doubts, McCarthy asks whether anyone has talked to Tom, his trusted colleague, about the lysin idea.",
        hint: "The passage names the colleague McCarthy wanted to consult.",
        explanation: "Tom Walsh was McCarthy's sounding board, and Tom knew about the Rockefeller lysin work."
      },
      {
        id: 'sb22-10',
        question: "Which three institutions formed an alliance to train physician-scientists?",
        options: [
          "Three pizza restaurants",
          "Three baseball teams",
          "McCarthy's hospital, Rockefeller University, and Memorial Sloan Kettering",
          "Three movie studios"
        ],
        correctAnswerIndex: 2,
        samplePassage: "McCarthy's hospital had formed a tri-institution alliance with its neighbors, Rockefeller University and Memorial Sloan Kettering, to train doctors who could also make discoveries.",
        hint: "The passage names the hospital's two famous neighbors.",
        explanation: "The alliance linked a hospital, a research university, and a cancer center to train a new kind of doctor-scientist."
      }
    ]
  },
  {
    id: 'superbugs-ch23',
    title: "Superbugs: Chapter 23 – Breakthrough",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "emerald",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "A visit to Vincent Fischetti's Rockefeller laboratory changes everything: McCarthy watches bacteria explode and learns how lysins, enzymes from bacteria-killing viruses, might become the next great weapon.",
    questions: [
      {
        id: 'sb23-2',
        question: "What did Fischetti invite McCarthy to do?",
        options: [
          "Run a marathon",
          "Buy a used car",
          "Adopt a puppy",
          "Visit his laboratory"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Fischetti invited McCarthy to come see his laboratory, where the lysin research was happening.",
        hint: "The passage names the invitation that starts the chapter's visit.",
        explanation: "The lab visit was McCarthy's chance to judge the lysin science for himself."
      },
      {
        id: 'sb23-3',
        question: "What are lysins, according to the chapter?",
        options: [
          "Tiny robots",
          "A kind of candy",
          "Enzymes that evolved over a billion years to degrade bacterial cell walls",
          "Musical instruments"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter explains that lysins are enzymes that evolved over a billion years to break down bacterial cell walls, bursting the germs apart.",
        hint: "The passage describes the billion-year-old wall-busting enzymes.",
        explanation: "Lysins are natural tools that chew through the walls of bacteria, making the germs explode."
      },
      {
        id: 'sb23-4',
        question: "Where do lysins come from?",
        options: [
          "Bacteria-killing viruses called bacteriophages",
          "Deep-sea volcanoes",
          "The rings of Saturn",
          "A factory in Ohio"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Fischetti's team worked with enzymes derived from bacteriophages, the viruses that kill bacteria, to prevent and treat infections.",
        hint: "The passage names the germ-killing viruses behind lysins.",
        explanation: "Bacteriophages are viruses that attack bacteria, and lysins are the wall-breaking enzymes they use."
      },
      {
        id: 'sb23-5',
        question: "What did the company ContraFect do?",
        options: [
          "Built roller coasters",
          "Bought the rights to Fischetti's lysins",
          "Opened a pizza chain",
          "Sold umbrellas"
        ],
        correctAnswerIndex: 1,
        samplePassage: "After Fischetti purified, cloned, and analyzed lysins, a company called ContraFect bought the rights to develop them.",
        hint: "The passage names the company's deal for the lysin discoveries.",
        explanation: "ContraFect licensed the lysin technology, hoping to turn the lab discovery into real medicines."
      },
      {
        id: 'sb23-7',
        question: "Those strep bacteria were the same kind that had killed whom?",
        options: [
          "Wounded soldiers on World War I battlefields",
          "Circus clowns",
          "Movie stars",
          "Famous chefs"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The chapter notes that the strep bacteria were the same ones that had killed wounded soldiers on the battlefields of World War I, where Fleming once served as a doctor.",
        hint: "The passage connects the germs to a wartime tragedy.",
        explanation: "Strep infections were mass killers in World War I — which made the lysin result feel historic."
      },
      {
        id: 'sb23-8',
        question: "What hung on Fischetti's office wall?",
        options: [
          "A poster of a kitten",
          "A map of Disneyland",
          "A menu from a diner",
          "A framed picture of exploding bacteria"
        ],
        correctAnswerIndex: 3,
        samplePassage: "On Fischetti's office wall hung a framed picture of exploding bacteria, his favorite reminder of what lysins do to germs.",
        hint: "The passage describes the bursting-germ artwork.",
        explanation: "The picture celebrated lysins' dramatic talent: making bacteria burst apart."
      },
      {
        id: 'sb23-9',
        question: "Why did McCarthy want to understand the lysin science fully?",
        options: [
          "To win a trivia contest",
          "Before asking vulnerable patients to sign consent forms for a trial",
          "To impress his neighbors",
          "To write a poem about it"
        ],
        correctAnswerIndex: 1,
        samplePassage: "McCarthy wanted to understand the science inside and out before approaching vulnerable patients with a consent form for a lysin trial.",
        hint: "The passage links his studying to future patients' permission slips.",
        explanation: "McCarthy felt he owed patients a full understanding before asking them to try an experimental treatment."
      },
      {
        id: 'sb23-10',
        question: "What did Fischetti convince McCarthy about broad-spectrum antibiotics?",
        options: [
          "They would last forever",
          "They tasted like strawberries",
          "Fighting bacteria with broad-spectrum warfare was becoming impractical",
          "They should be given to everyone daily"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Fischetti convinced McCarthy that broad-spectrum bacterial warfare was becoming impractical, since new dangers were appearing faster than new drugs.",
        hint: "The passage states Fischetti's warning about the old strategy.",
        explanation: "Blanket antibiotics were losing the race, Fischetti argued — medicine needed smarter, targeted weapons like lysins."
      }
    ]
  },
  {
    id: 'superbugs-ch24',
    title: "Superbugs: Chapter 24 – Anthrax",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "sky",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Three weeks after 9/11, anthrax-laced letters terrorize America — and McCarthy discovers that Fischetti's lab had already created a lysin that could detect and destroy anthrax.",
    questions: [
      {
        id: 'sb24-1',
        question: "When does this chapter's story begin?",
        options: [
          "On Christmas morning",
          "During the Super Bowl",
          "Three weeks after the World Trade Center attack",
          "On the first day of summer"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter opens three weeks after the World Trade Center attack, when doctors were suddenly facing a frightening new mystery.",
        hint: "The passage dates the story to just after 9/11.",
        explanation: "In the fearful weeks after September 11, 2001, a new danger arrived: anthrax."
      },
      {
        id: 'sb24-2',
        question: "What puzzled doctors about the first anthrax patient?",
        options: [
          "He claimed to be a Martian",
          "His white blood cell count was normal, which argued against infection, yet he had fever and confusion",
          "He refused to drink water",
          "He could not remember his name"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Doctors were unsure what to make of the case: the patient's normal white blood cell count argued against infection, but his fever and confusion pointed toward it.",
        hint: "The passage contrasts the reassuring blood test with the worrying symptoms.",
        explanation: "The mixed signals made the case confusing — the blood looked fine, but the patient was clearly very sick."
      },
      {
        id: 'sb24-3',
        question: "What grim record did the first anthrax death set?",
        options: [
          "The loudest sneeze ever recorded",
          "The fastest marathon run",
          "The tallest building climbed",
          "The first such death in the United States in twenty-five years"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter reports that the victim's death was the first anthrax death in the United States in twenty-five years.",
        hint: "The passage gives the quarter-century gap since the last U.S. death.",
        explanation: "Anthrax deaths had been vanishingly rare in America — which made this one shocking."
      },
      {
        id: 'sb24-4',
        question: "How did this anthrax case differ from the usual kind?",
        options: [
          "It did not come from the usual contact with contaminated animal material",
          "It happened underwater",
          "It only affected left-handed people",
          "It was caused by a plant"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Unlike typical anthrax cases, which come from contact with contaminated animal material, this infection had a far more sinister source.",
        hint: "The passage rules out the usual animal-product exposure.",
        explanation: "Ordinary anthrax comes from hides or wool; this case pointed to something deliberately sent."
      },
      {
        id: 'sb24-6',
        question: "Who did investigators believe was behind the 2001 anthrax attacks?",
        options: [
          "A famous actor",
          "Bruce Ivins, a government scientist who worked on anthrax vaccines",
          "A lost tourist",
          "A circus performer"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The attacks were likely the work of Bruce Ivins, a government scientist who worked on anthrax vaccines at Fort Detrick.",
        hint: "The passage names the vaccine scientist suspected in the attacks.",
        explanation: "Investigators concluded that an insider — a scientist who knew anthrax well — had mailed the deadly letters."
      },
      {
        id: 'sb24-7',
        question: "Where did Bruce Ivins work?",
        options: [
          "At a pizza parlor",
          "At a surf shop",
          "At a car wash",
          "At Fort Detrick, on anthrax vaccines"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Ivins worked at Fort Detrick, a government lab, where his job involved developing vaccines against anthrax.",
        hint: "The passage names the military lab where he worked.",
        explanation: "Fort Detrick was the Army's biodefense center — Ivins knew the germ inside and out."
      },
      {
        id: 'sb24-8',
        question: "What had Fischetti's team built to fight anthrax?",
        options: [
          "A lysin that could detect and destroy anthrax bacteria",
          "A time machine",
          "A chocolate-powered robot",
          "A new kind of umbrella"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Fischetti's team had developed a lysin that could both detect and destroy anthrax bacteria — a discovery important enough to land on the cover of Nature.",
        hint: "The passage names the anthrax-busting enzyme.",
        explanation: "The lysin acted like a smart bomb: it found anthrax germs and blew them apart."
      },
      {
        id: 'sb24-9',
        question: "How famous was the report of Fischetti's anthrax lysin?",
        options: [
          "Nobody ever read it",
          "It was written on a napkin",
          "It appeared on the cover of the journal Nature",
          "It was hidden in a drawer"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The discovery was so significant that it appeared on the cover of Nature, one of the world's most prestigious science journals.",
        hint: "The passage names the top journal that featured the finding.",
        explanation: "A Nature cover meant the whole scientific world noticed the anthrax-fighting lysin."
      },
      {
        id: 'sb25-1',
        question: "What does McCarthy do at the very start of the chapter?",
        options: [
          "Bakes a cake",
          "Imagines the conversations he will have with patients",
          "Takes a nap",
          "Paints his office"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The chapter opens with McCarthy imagining the conversations he would soon have, as the long-awaited trial was finally about to begin.",
        hint: "The passage describes the daydreaming that opens the chapter.",
        explanation: "After months of preparation, McCarthy pictured how he would talk to patients about the experimental drugs."
      },
      {
        id: 'sb25-2',
        question: "What drug was McCarthy giving his Candida auris patient for now?",
        options: [
          "Micafungin",
          "Aspirin",
          "Cough syrup",
          "Vitamin C"
        ],
        correctAnswerIndex: 0,
        samplePassage: "McCarthy told Tom Walsh that he was giving the Candida auris patient micafungin for now, though both men knew it would soon stop working.",
        hint: "The passage names the temporary antifungal.",
        explanation: "Micafungin was a stopgap — the fungus would soon outsmart it."
      },
      {
        id: 'sb25-4',
        question: "Who was the firefighter patient in this chapter?",
        options: [
          "A retired astronaut",
          "A famous chef",
          "A professional skateboarder",
          "An FDNY firefighter whose engine company rescued people on 9/11"
        ],
        correctAnswerIndex: 3,
        samplePassage: "A firefighter arrived short of breath, and his backstory was remarkable: he was FDNY, and on 9/11 his engine company had pulled people from the rubble.",
        hint: "The passage describes the 9/11 hero's engine company.",
        explanation: "The firefighter had rushed into danger on September 11 and now needed help breathing."
      },
      {
        id: 'sb25-5',
        question: "Why did the firefighter come to the hospital?",
        options: [
          "Shortness of breath",
          "A broken toe",
          "A toothache",
          "A sunburn"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The firefighter came in with shortness of breath, and McCarthy wondered whether he might have inhaled something harmful.",
        hint: "The passage names the breathing trouble that brought him in.",
        explanation: "The firefighter was struggling to breathe, and McCarthy wondered if it traced back to what he had inhaled on 9/11."
      },
      {
        id: 'sb25-6',
        question: "Where did McCarthy and Tom Walsh have their talk about the Candida auris patient?",
        options: [
          "At a baseball game",
          "At the conference table in Tom's office",
          "On a roller coaster",
          "In a taxi"
        ],
        correctAnswerIndex: 1,
        samplePassage: "McCarthy and Tom sat at the conference table in Tom's office to discuss the Candida auris patient and the plan for the new antifungal.",
        hint: "The passage names the office furniture where they met.",
        explanation: "The two colleagues mapped out the treatment plan around Tom's conference table."
      },
      {
        id: 'sb25-7',
        question: "How long had McCarthy been observing trial patients like Ruth, George, Erwin, and Donny?",
        options: [
          "One day",
          "A single hour",
          "Half a year",
          "Ten minutes"
        ],
        correctAnswerIndex: 2,
        samplePassage: "After half a year of observing patients such as Ruth and George and Erwin and Donny, McCarthy writes, it was finally time to get started.",
        hint: "The passage gives the months of preparation before the trial.",
        explanation: "Six months of careful watching had prepared McCarthy to finally launch the trial."
      },
      {
        id: 'sb25-9',
        question: "What new part of the book does the end of this chapter introduce?",
        options: [
          "A cookbook section",
          "A sports almanac",
          "A comic strip",
          "Part 5: Toward a Cure"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter closes by ushering in Part 5, titled Toward a Cure, as the story shifts from preparation to the trial itself.",
        hint: "The passage names the new part of the book.",
        explanation: "After four parts of buildup, the book turns toward the cure the team had been chasing."
      },
      {
        id: 'sb25-10',
        question: "Why is the chapter called 'Delivery'?",
        options: [
          "McCarthy ordered new furniture",
          "A pizza arrived at the hospital",
          "The long-awaited trial drugs were finally being delivered to patients",
          "Mail was delivered late"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter's title reflects the moment the team had waited for: the experimental drugs were finally being delivered to the patients who needed them.",
        hint: "The passage connects the title to the drugs reaching patients.",
        explanation: "After months of planning, the trial drugs were finally on their way to patients."
      }
    ]
  },
  {
    id: 'superbugs-ch26',
    title: "Superbugs: Chapter 26 – Meghan",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "purple",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Part 5 opens with Meghan, whose frightening purple leg wound reminds her of the movie Alien — but McCarthy must tell her she is not the right patient for his antibiotic trial.",
    questions: [
      {
        id: 'sb26-1',
        question: "What new part of the book begins with this chapter?",
        options: [
          "Part 5: Toward a Cure",
          "Part 1: The Beginning",
          "Part 9: The End",
          "Part 2: The Middle"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Chapter 26 opens Part 5, titled Toward a Cure, marking the moment the long-prepared trial finally gets underway.",
        hint: "The passage names the part that starts here.",
        explanation: "After months of observing patients, the book's final push toward a cure begins with Meghan's story."
      },
      {
        id: 'sb26-2',
        question: "What did Meghan's leg look like?",
        options: [
          "Perfectly healthy",
          "Covered in stickers",
          "Mostly scar tissue, with a purple crater where skin should have been",
          "Made of metal"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Meghan's leg was mostly a mass of scar tissue, with a purple crater-like sore where healthy skin should have been.",
        hint: "The passage describes the scarred leg and its purple hollow.",
        explanation: "Years of trouble had left her leg badly scarred, with a deep purple wound at its center."
      },
      {
        id: 'sb26-4',
        question: "What did Meghan do while describing her leg?",
        options: [
          "Sang a song",
          "Did a cartwheel",
          "Juggled three balls",
          "Ran a hand through her thick, grey hair and grimaced"
        ],
        correctAnswerIndex: 3,
        samplePassage: "As they stared at the wound, Meghan ran a hand through her thick, grey hair and grimaced.",
        hint: "The passage describes her gesture and her hair.",
        explanation: "The small, pained gesture showed how much the long ordeal had worn her down."
      },
      {
        id: 'sb26-5',
        question: "What did doctors call Meghan's purple wound?",
        options: [
          "A paper cut",
          "A freckle",
          "A violaceous ulcer",
          "A sunburn"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter describes the wound as a violaceous ulcer — violaceous meaning a deep purple color.",
        hint: "The passage gives the medical term for the purple sore.",
        explanation: "Violaceous is doctor-speak for violet-colored, and an ulcer is an open sore."
      },
      {
        id: 'sb26-6',
        question: "What did a surgeon think might help Meghan's leg?",
        options: [
          "Jumping rope every day",
          "A special boot to relieve pressure on the leg",
          "Wearing two left shoes",
          "Standing on one foot"
        ],
        correctAnswerIndex: 1,
        samplePassage: "A surgeon thought a special boot could relieve the pressure on Meghan's leg, though fitting it would have to wait until the infection was treated.",
        hint: "The passage names the pressure-relieving footwear.",
        explanation: "The boot would take weight off the wounded leg — but only after the infection was under control."
      },
      {
        id: 'sb26-7',
        question: "What difficult news did McCarthy have to deliver to Meghan?",
        options: [
          "They could help her, but not with antibiotics and not with dalba — she was the wrong patient for the trial",
          "She had won a prize",
          "Her leg was perfectly fine",
          "She needed to run a marathon"
        ],
        correctAnswerIndex: 0,
        samplePassage: "McCarthy had to tell Meghan that they were going to help her, but it wouldn't be with antibiotics and it wouldn't be with dalba — she was the wrong patient for the trial.",
        hint: "The passage states the two treatments that were ruled out.",
        explanation: "Her wound was not the kind of bacterial infection dalba could fix, so McCarthy apologized for wasting her time."
      },
      {
        id: 'sb26-9',
        question: "What did McCarthy do when he returned to his empty office?",
        options: [
          "Ordered dinner",
          "Watered the plants",
          "Called a taxi",
          "Pulled up Beethoven's Moonlight on his computer"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Half an hour later, back in his empty office, McCarthy nudged his mouse and pulled up Beethoven's Moonlight, letting the music fill the dark room.",
        hint: "The passage names the famous piano piece he played.",
        explanation: "After the hard conversation, McCarthy sat alone with Beethoven's gentle music."
      },
      {
        id: 'sb26-10',
        question: "What had to happen before Meghan could be fitted for the special boot?",
        options: [
          "She had to learn to swim",
          "The supposed infection had to be treated first",
          "She had to buy new socks",
          "Winter had to arrive"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The surgeon said the special boot would have to wait until the supposed infection in her leg was treated.",
        hint: "The passage gives the treatment that had to come first.",
        explanation: "Healing the wound came first; the boot would follow once the leg was ready."
      }
    ]
  },

  {
    id: 'superbugs-ch27',
    title: "Superbugs: Chapter 27 – Mantra",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "rose",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Dr. McCarthy meets Louis, a retired police officer in the dalba trial, whose motto — when the whistle blows, everybody goes — captures the all-hands fighting spirit of the race against superbugs.",
    questions: [
      {
        id: 'sb27-1',
        question: "What was Louis's job before he joined the drug trial?",
        options: [
          "A police officer",
          "A firefighter",
          "A schoolteacher",
          "A baseball player"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Louis was a retired police officer who joined the dalba trial as a patient. He liked to joke that he and his fellow officers had invented stop-and-frisk, the street policing tactic.",
        hint: "The passage says Louis joked about what he and his fellow officers invented on the streets.",
        explanation: "Louis was a retired police officer — he proudly joked that his generation of cops had invented stop-and-frisk."
      },
      {
        id: 'sb27-2',
        question: "Louis joked that he and his fellow officers invented stop-and-frisk. What does that tell you about him?",
        options: [
          "He had been a street police officer",
          "He had been a doctor",
          "He had invented a new medicine",
          "He had been a soldier in a war"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Louis spoke with pride about his years as a police officer, joking that he and his fellow officers had invented stop-and-frisk while patrolling the streets.",
        hint: "Stop-and-frisk is something police officers do on the street.",
        explanation: "The joke only makes sense because Louis spent his career as a street police officer."
      },
      {
        id: 'sb27-3',
        question: "What was Louis's personal motto?",
        options: [
          "When the going gets tough, go home",
          "When the whistle blows, everybody goes",
          "Slow and steady wins the race",
          "Never trust a doctor"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Louis lived by a simple motto from his policing days: when the whistle blows, everybody goes. It meant that when the call came, the whole team moved together without hesitation.",
        hint: "The passage gives his motto about a whistle and everybody going.",
        explanation: "His motto was about the whistle blowing and everybody going — a team-first rule from his days as a cop."
      },
      {
        id: 'sb27-5',
        question: "What did Louis ask the doctor for instead of a quick discharge?",
        options: [
          "A longer hospital stay with no treatment",
          "A tune-up so he could walk again",
          "A new wheelchair",
          "A transfer to another hospital"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Louis told the doctor he did not want a quick discharge from the hospital. He wanted a real tune-up so that he could walk again.",
        hint: "The passage says what Louis wanted instead of leaving quickly.",
        explanation: "Louis wanted a tune-up, not a quick discharge — his goal was to walk again."
      },
      {
        id: 'sb27-7',
        question: "What did Louis joke he would title his memoir?",
        options: [
          "My Life in Medicine",
          "The Quick Discharge",
          "When the Whistle Blows",
          "Walking Away"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Louis joked that if he ever wrote the story of his life, he would call it When the Whistle Blows, after his old police motto.",
        hint: "The passage says his memoir title came from his old motto.",
        explanation: "He joked his memoir would be called When the Whistle Blows, after his motto."
      },
      {
        id: 'sb27-8',
        question: "Who was the doctor running the trial Louis joined?",
        options: [
          "Dr. Tom Walsh",
          "Dr. Alexander Fleming",
          "Dr. Matt McCarthy",
          "Dr. Anthony Fauci"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The trial Louis joined was run by Dr. Matt McCarthy, a physician at NewYork-Presbyterian Hospital, working with his mentor Dr. Tom Walsh.",
        hint: "The passage names the physician who ran the trial.",
        explanation: "Dr. Matt McCarthy ran the trial, with guidance from his mentor Dr. Tom Walsh."
      },
      {
        id: 'sb27-9',
        question: "What experimental antibiotic was being tested in the trial?",
        options: [
          "Penicillin",
          "Vancomycin",
          "Aspirin",
          "Dalbavancin, nicknamed dalba"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The trial tested an experimental antibiotic called dalbavancin, nicknamed dalba, against serious skin infections caused by drug-resistant germs.",
        hint: "The passage names the experimental drug, also called by a short nickname.",
        explanation: "The trial tested dalbavancin — dalba for short — against drug-resistant skin infections."
      },
      {
        id: 'sb27-10',
        question: "What kind of infections was the trial trying to treat?",
        options: [
          "Broken bones",
          "The common cold",
          "Food poisoning",
          "Skin and soft tissue infections, including MRSA"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The trial aimed to treat skin and soft tissue infections, including infections caused by MRSA, a staph germ that resists many common antibiotics.",
        hint: "The passage names the infection type and the resistant germ.",
        explanation: "The trial targeted skin and soft tissue infections, including MRSA — staph infections that resist many common antibiotics."
      }
    ]
  },
  {
    id: 'superbugs-ch28',
    title: "Superbugs: Chapter 28 – Obstacles",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "amber",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Even though the hospital sees thousands of skin infections a year, finding the right patients for the dalba trial turns out to be full of obstacles — and McCarthy learns to see patients like Jackson the mechanic as whole people.",
    questions: [
      {
        id: 'sb28-1',
        question: "Why was finding patients for the trial so hard?",
        options: [
          "The hospital saw thousands of skin infections a year, but finding patients who qualified for the trial was still difficult",
          "Nobody in New York ever got skin infections",
          "The doctors forgot to look for patients",
          "The trial was kept a complete secret"
        ],
        correctAnswerIndex: 0,
        samplePassage: "McCarthy's hospital saw thousands of skin and soft tissue infections every year, yet finding patients who were right for the trial turned out to be full of obstacles.",
        hint: "The passage contrasts the huge number of infections with how hard it was to find the right patients.",
        explanation: "Even with thousands of infections a year, finding patients who fit the trial's rules was surprisingly difficult."
      },
      {
        id: 'sb28-2',
        question: "What does open-label mean in this trial?",
        options: [
          "The patients knew they were receiving the experimental drug",
          "The doctors kept the drug a secret from everyone",
          "The trial had no doctors at all",
          "The labels fell off the medicine bottles"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The trial was open-label, which meant the patients knew they were receiving the experimental drug dalba rather than a mystery treatment.",
        hint: "The passage explains what open-label meant for the patients.",
        explanation: "In an open-label trial, patients know they are getting the experimental drug."
      },
      {
        id: 'sb28-4',
        question: "Who was Jackson?",
        options: [
          "A police officer",
          "A mechanic from Queens",
          "A lawyer",
          "A teacher"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Jackson was a mechanic from Queens who came to the emergency room with a badly infected wound and became one of McCarthy's patients.",
        hint: "The passage names Jackson's trade and where he was from.",
        explanation: "Jackson was a mechanic from Queens with a severe wound infection."
      },
      {
        id: 'sb28-5',
        question: "Why did McCarthy want to think of Jackson as something other than a mechanic?",
        options: [
          "He disliked mechanics",
          "He wanted Jackson to change jobs",
          "To remember Jackson was a whole person, not just his job or his infection",
          "Mechanics were not allowed in the trial"
        ],
        correctAnswerIndex: 1,
        samplePassage: "McCarthy realized he needed to think of Jackson as something other than a mechanic — as a whole person with a life beyond his job and his infection.",
        hint: "The passage says McCarthy wanted to see the whole person.",
        explanation: "McCarthy wanted to see Jackson as a complete person, not just a job title or a medical case."
      },
      {
        id: 'sb28-7',
        question: "Which company made dalbavancin and provided it for the trial?",
        options: [
          "A car company",
          "A shoe company",
          "Allergan",
          "A bakery"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The drug company Allergan, based in Dublin, provided the dalbavancin for McCarthy's trial free of charge.",
        hint: "The passage names the Dublin-based drug company.",
        explanation: "Allergan, the Dublin-based pharmaceutical company, supplied the drug for free."
      },
      {
        id: 'sb28-8',
        question: "What is MRSA?",
        options: [
          "A type of vitamin",
          "A hospital cafeteria meal",
          "A staph germ that resists many common antibiotics",
          "A kind of bandage"
        ],
        correctAnswerIndex: 2,
        samplePassage: "MRSA is a staph germ that has become resistant to many common antibiotics, making its skin infections much harder to treat.",
        hint: "The passage describes MRSA as a resistant germ.",
        explanation: "MRSA is methicillin-resistant staph — a germ that shrugs off many common antibiotics."
      },
      {
        id: 'sb28-9',
        question: "What infections did the trial focus on?",
        options: [
          "Ear infections in pets",
          "Cavities in teeth",
          "Sunburns",
          "Skin and soft tissue infections"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The trial focused on skin and soft tissue infections, the kind McCarthy's hospital saw thousands of every year.",
        hint: "The passage names the infection type the hospital saw so often.",
        explanation: "The trial targeted skin and soft tissue infections."
      },
      {
        id: 'sb28-10',
        question: "Why did McCarthy run this trial in the first place?",
        options: [
          "To become famous",
          "To sell more bandages",
          "To close the hospital",
          "To find a better way to treat drug-resistant infections and help patients, hospitals, and doctors"
        ],
        correctAnswerIndex: 3,
        samplePassage: "McCarthy ran the trial to find out whether dalba could help patients heal faster while also helping the hospital and doctors use antibiotics wisely.",
        hint: "The passage lists who the trial was meant to help.",
        explanation: "He wanted a treatment that helped patients, the hospital, and doctors all at once."
      }
    ]
  },
  {
    id: 'superbugs-ch29',
    title: "Superbugs: Chapter 29 – First",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "emerald",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "The trial finally begins: the first patient, Mark, agrees to receive dalbavancin after asking Dr. McCarthy the hardest question of all — whether he would give the drug to his own mother.",
    questions: [
      {
        id: 'sb29-1',
        question: "What was the first patient's job?",
        options: [
          "A lawyer",
          "A chef",
          "A pilot",
          "A farmer"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The first person to receive the experimental drug in the trial was a lawyer, someone used to reading long legal documents very carefully.",
        hint: "The passage names the first patient's profession.",
        explanation: "The first patient dosed was a lawyer."
      },
      {
        id: 'sb29-2',
        question: "Why was the lawyer so careful with the trial's consent form?",
        options: [
          "He was used to reading legal documents closely",
          "He could not read",
          "He wanted to rewrite it",
          "He thought it was a menu"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The lawyer studied the long consent form with a professional eye, since reading the fine print of legal documents was part of his everyday work.",
        hint: "The passage connects his careful reading to his everyday work.",
        explanation: "Reading dense legal documents was his daily work, so he examined the consent form closely."
      },
      {
        id: 'sb29-3',
        question: "What personal question did the first patient ask Dr. McCarthy?",
        options: [
          "What McCarthy ate for lunch",
          "Whether McCarthy would give the new drug to his own mother",
          "Where McCarthy went to college",
          "What time visiting hours ended"
        ],
        correctAnswerIndex: 1,
        samplePassage: "After reading the consent form, the first patient looked McCarthy in the eye and asked whether he would give this brand-new drug to his own mother.",
        hint: "The passage describes the deeply personal question about McCarthy's family.",
        explanation: "He asked whether McCarthy would give the drug to his own mother."
      },
      {
        id: 'sb29-5',
        question: "Had anyone at the hospital received dalbavancin before this first patient?",
        options: [
          "Yes — hundreds of people",
          "No — he was the very first",
          "Yes — the doctors took it daily",
          "No — the drug did not exist yet"
        ],
        correctAnswerIndex: 1,
        samplePassage: "When the patient asked whether anyone at the hospital had ever been given the drug before, McCarthy had to answer no — this patient would be the first.",
        hint: "The passage says McCarthy answered no to that question.",
        explanation: "Nobody at the hospital had received it before; this patient was truly the first."
      },
      {
        id: 'sb29-6',
        question: "How did Mark describe feeling trapped by his illness?",
        options: [
          "Like floating on a cloud",
          "Like winning a race",
          "Like drowning in quicksand",
          "Like reading a book"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Mark said his illness felt like drowning in quicksand — stuck, sinking, and unable to climb out on his own.",
        hint: "The passage compares his illness to sinking in something thick.",
        explanation: "He said it felt like drowning in quicksand — trapped with no way out."
      },
      {
        id: 'sb29-8',
        question: "What did Mark mean when he said he felt like he was ossifying?",
        options: [
          "He was turning into a bird",
          "He felt like dancing",
          "He felt his body stiffening up, as if slowly turning to stone",
          "He was growing taller"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Mark said he kept thinking he was ossifying — he felt his body stiffening and losing its flexibility, as if he were slowly turning to stone.",
        hint: "The passage explains the word as stiffening like stone.",
        explanation: "Ossifying meant he felt his body stiffening up, like turning to stone."
      },
      {
        id: 'sb29-9',
        question: "What did Mark say when he agreed to join the trial?",
        options: [
          "He asked to wait a year",
          "He said no and walked out",
          "He asked for a different doctor",
          "Let's do it — he was ready to get out of the hospital"
        ],
        correctAnswerIndex: 3,
        samplePassage: "When Mark decided to join the trial, he told the doctor to go ahead with it — he was ready to get out of the hospital and reclaim his life.",
        hint: "The passage describes his eager agreement to move forward.",
        explanation: "Mark agreed eagerly — he was ready to do it and get out of the hospital."
      },
      {
        id: 'sb29-10',
        question: "How did McCarthy describe treating Mark's infection?",
        options: [
          "A waste of time",
          "An impossible task",
          "A magic trick",
          "A small victory"
        ],
        correctAnswerIndex: 3,
        samplePassage: "McCarthy thought of treating Mark's infection as a small victory — one meaningful win in the much larger fight against superbugs.",
        hint: "The passage calls the treatment a modest but meaningful win.",
        explanation: "He called it a small victory — one step forward in the bigger battle."
      }
    ]
  },
  {
    id: 'superbugs-ch30',
    title: "Superbugs: Chapter 30 – Alicia",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "sky",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Alicia has suffered through treatment after treatment that failed, but she keeps fighting — backed by her father's love, written out in a nine-page letter he carried in a binder.",
    questions: [
      {
        id: 'sb30-1',
        question: "What did McCarthy promise Alicia?",
        options: [
          "That he would do his best for her",
          "That she would never need a doctor again",
          "That he would cure everyone in the hospital",
          "That the trial was completely risk-free"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Facing Alicia's difficult case, McCarthy promised her simply that he would do his best to help her.",
        hint: "The passage gives his simple, honest promise.",
        explanation: "He promised to do his best for her."
      },
      {
        id: 'sb30-2',
        question: "What had happened with Alicia's earlier treatments?",
        options: [
          "They kept failing, one after another",
          "They cured her instantly",
          "She never tried any treatment",
          "She refused all help"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Alicia had been through treatment after treatment, and each one had failed — that was simply what happened every time.",
        hint: "The passage says failure was the repeated pattern.",
        explanation: "Her earlier treatments had repeatedly failed."
      },
      {
        id: 'sb30-4',
        question: "Why was Alicia upset with a doctor she had seen?",
        options: [
          "He was too friendly",
          "He judged her case without even examining her",
          "He gave her candy",
          "He arrived too early"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Alicia was upset because a doctor had made up his mind about her case without even examining her, even though she had come asking for help.",
        hint: "The passage says the doctor decided without an examination.",
        explanation: "The doctor dismissed her without even examining her."
      },
      {
        id: 'sb30-5',
        question: "What did Alicia want from her doctors?",
        options: [
          "To be ignored",
          "To be listened to and examined with care",
          "To be rushed out the door",
          "To be given no explanations"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Alicia came to the hospital seeking help, and what she wanted most was for doctors to listen to her and examine her with real care.",
        hint: "The passage describes what a patient seeking help hopes for.",
        explanation: "She wanted doctors who would truly listen and examine her carefully."
      },
      {
        id: 'sb30-6',
        question: "What was in the binder Alicia's family brought?",
        options: [
          "A comic book",
          "Hospital bills",
          "Her father's nine-page letter",
          "A map of the hospital"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The family brought a binder holding a nine-page letter Alicia's father had written — pages full of his thoughts about his daughter.",
        hint: "The passage describes the binder's contents and length.",
        explanation: "The binder held her father's nine-page letter."
      },
      {
        id: 'sb30-8',
        question: "What did the father's letter express?",
        options: [
          "His anger at the hospital",
          "A grocery list",
          "His love for his daughter",
          "Instructions for a recipe"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The binder held her father's nine-page letter, which was above all an expression of his love for his daughter.",
        hint: "The passage says what the letter was really about.",
        explanation: "The letter was an expression of a father's love for his daughter."
      },
      {
        id: 'sb30-9',
        question: "What does the binder show about Alicia's family?",
        options: [
          "They never visited her",
          "They forgot her birthday",
          "They moved far away",
          "They stood by her through her long illness"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The lovingly kept binder showed that Alicia's family, especially her father, stood by her through her long and painful illness.",
        hint: "The passage connects the binder to family support.",
        explanation: "Her family supported her devotedly through her long illness."
      },
      {
        id: 'sb30-10',
        question: "What kept Alicia going despite so many setbacks?",
        options: [
          "A lucky charm",
          "Ignoring the doctors",
          "Pretending she was fine",
          "Hope, determination, and her family's love"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Despite every failed treatment, Alicia kept going — carried by hope, her own determination, and the love of her family.",
        hint: "The passage names what sustained her through setbacks.",
        explanation: "Hope, determination, and her family's love kept her fighting."
      }
    ]
  },
  {
    id: 'superbugs-ch31',
    title: "Superbugs: Chapter 31 – Persuasion",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "indigo",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Recruiting patients means persuading frightened people to try an experimental drug — like Gerard, who is excited to join but worried about missing work, and whose requests test McCarthy's ethical boundaries.",
    questions: [
      {
        id: 'sb31-1',
        question: "What was Gerard worried about when considering the trial?",
        options: [
          "Missing work — he asked if he would need to be out for a week or more",
          "Missing his favorite TV show",
          "The color of the hospital walls",
          "Whether dogs were allowed"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Gerard worried about his job, asking the doctor whether he would need to be out of work for a week — or even more.",
        hint: "The passage quotes his worry about time away from work.",
        explanation: "Gerard worried about missing a week or more of work."
      },
      {
        id: 'sb31-2',
        question: "What did Gerard's worry show about patients?",
        options: [
          "They must balance getting care with keeping their jobs and income",
          "They never think about work",
          "They all want longer hospital stays",
          "They dislike doctors"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Gerard's question showed how patients must balance getting medical care with keeping their jobs and income.",
        hint: "The passage connects his worry to jobs and income.",
        explanation: "Sick people still have jobs and bills — health decisions affect their livelihoods."
      },
      {
        id: 'sb31-4',
        question: "Why did McCarthy tell a patient, I just can't?",
        options: [
          "He was too tired to talk",
          "He would not bend the trial's ethical rules, even when asked",
          "He did not like the patient",
          "He had lost his voice"
        ],
        correctAnswerIndex: 1,
        samplePassage: "When a patient asked McCarthy for something that would break the trial's ethical rules, he held firm and said he just couldn't do it.",
        hint: "The passage ties his refusal to the trial's rules.",
        explanation: "McCarthy wouldn't compromise the trial's ethics, even under pressure."
      },
      {
        id: 'sb31-5',
        question: "What did McCarthy believe about leaving some patients out of the trial?",
        options: [
          "Only rich patients should join",
          "Excluding them would do a disservice — trials need many kinds of people",
          "Trials work best with one patient",
          "Excluding people was always fine"
        ],
        correctAnswerIndex: 1,
        samplePassage: "McCarthy believed that excluding certain patients would do a disservice, because medical research needs many kinds of people to be fair and useful.",
        hint: "The passage explains why leaving people out hurts the research.",
        explanation: "He felt excluding patients would be a disservice — trials need diverse participants."
      },
      {
        id: 'sb31-7',
        question: "What is persuasion about in this chapter?",
        options: [
          "Selling cars",
          "Winning an argument with the hospital",
          "Convincing frightened patients to try an experimental drug",
          "Persuading doctors to take vacations"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter shows McCarthy persuading frightened patients to consider trying an experimental drug, explaining the risks and hopes honestly.",
        hint: "The passage describes what McCarthy was trying to convince patients of.",
        explanation: "It was about honestly persuading scared patients to try the new treatment."
      },
      {
        id: 'sb31-8',
        question: "Why might a patient hesitate to join a trial?",
        options: [
          "Trials are too much fun",
          "Patients love paperwork",
          "Fear of the unknown, missing work, and not fully understanding the risks",
          "Hospitals are too quiet"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Patients hesitated for very human reasons: fear of the unknown, worry about missing work, and trouble understanding the complex risks.",
        hint: "The passage lists human reasons for hesitation.",
        explanation: "Fear, work worries, and confusing risks all made patients hesitate."
      },
      {
        id: 'sb31-9',
        question: "What must patients do before joining a trial?",
        options: [
          "Sign without reading anything",
          "Pay a large fee",
          "Bring their own medicine",
          "Understand the risks and agree freely — giving informed consent"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Before joining, patients had to understand the risks and agree freely — the careful process called informed consent.",
        hint: "The passage names the careful agreement process.",
        explanation: "Patients must give informed consent: understanding the risks and agreeing freely."
      },
      {
        id: 'sb31-10',
        question: "What is the IRB?",
        options: [
          "A new kind of antibiotic",
          "A hospital cafeteria",
          "A type of bandage",
          "A review board that checks that trials are safe and fair for patients"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The IRB, the Institutional Review Board, is the committee that reviews trial plans to make sure they are safe and fair for patients.",
        hint: "The passage describes the committee's protective role.",
        explanation: "The Institutional Review Board reviews trials to protect patients."
      }
    ]
  },
  {
    id: 'superbugs-ch32',
    title: "Superbugs: Chapter 32 – The Rollout",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "purple",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "With early results looking good, the team plans how to roll the trial's lessons out to the wider world — starting, as Tom Walsh's favorite Sun Tzu saying goes, with careful preparation.",
    questions: [
      {
        id: 'sb32-1',
        question: "What old saying did Tom Walsh quote?",
        options: [
          "The battle is won before it is fought",
          "The early bird catches the worm",
          "A stitch in time saves nine",
          "Actions speak louder than words"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Tom Walsh quoted the ancient strategist Sun Tzu: the battle is won before it is fought — meaning preparation decides the outcome.",
        hint: "The passage gives the saying about winning before fighting.",
        explanation: "He quoted Sun Tzu: the battle is won before it is fought."
      },
      {
        id: 'sb32-3',
        question: "Who was Tom Walsh?",
        options: [
          "McCarthy's mentor, a world-famous infectious disease doctor",
          "The hospital janitor",
          "A patient in the trial",
          "The drug company's lawyer"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Tom Walsh was McCarthy's mentor of nearly ten years, a world-famous expert in infectious diseases who guided the trial.",
        hint: "The passage describes Tom's role and expertise.",
        explanation: "Dr. Tom Walsh was McCarthy's mentor and a world-renowned infectious disease expert."
      },
      {
        id: 'sb32-4',
        question: "Who were the backroom boys?",
        options: [
          "The hospital's security guards",
          "The microbiology lab team who worked behind the scenes",
          "A music band",
          "The cafeteria staff"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The backroom boys were the microbiology lab team — the scientists who worked behind the scenes identifying the germs.",
        hint: "The passage identifies the behind-the-scenes scientists.",
        explanation: "They were the microbiology lab team, working behind the scenes."
      },
      {
        id: 'sb32-5',
        question: "How did the team's view of the lab scientists change?",
        options: [
          "They were fired",
          "They became respected friends and partners, not just hidden helpers",
          "They were forgotten",
          "They moved to another country"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The lab scientists were no longer seen as hidden helpers in the back room — they had become respected friends and true partners in the fight.",
        hint: "The passage describes their new status as friends and partners.",
        explanation: "The backroom boys became valued friends and collaborators."
      },
      {
        id: 'sb32-7',
        question: "What did the team decide to do next?",
        options: [
          "Keep the results secret",
          "Stop the trial",
          "Get the word out on a larger scale",
          "Hide the medicine"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The team decided they needed to get the word out on a larger scale, sharing what they were learning far beyond their own hospital.",
        hint: "The passage states their decision to spread the news widely.",
        explanation: "They decided to share their findings on a much larger scale."
      },
      {
        id: 'sb32-8',
        question: "Why did they want to share the results widely?",
        options: [
          "To win a prize",
          "To confuse other doctors",
          "So more patients everywhere could benefit",
          "To sell more microscopes"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Sharing the results widely mattered because more patients everywhere could benefit from what the trial was discovering.",
        hint: "The passage gives the patient-centered reason for sharing.",
        explanation: "Wider sharing meant more patients could benefit from the discovery."
      },
      {
        id: 'sb32-9',
        question: "What drug was the word getting out about?",
        options: [
          "Penicillin",
          "Cough syrup",
          "Vitamins",
          "Dalbavancin, nicknamed dalba"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The growing buzz was about dalbavancin — dalba for short — the long-acting antibiotic being tested in the trial.",
        hint: "The passage names the drug at the center of the buzz.",
        explanation: "The excitement was about dalbavancin, dalba for short."
      },
      {
        id: 'sb32-10',
        question: "What did the rollout mean for the trial?",
        options: [
          "Rolling bandages in the supply room",
          "A new hospital hallway",
          "Rolling the medicine down a hill",
          "Spreading the trial's approach beyond the first hospital to help more people"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The rollout meant taking what the team had learned and spreading it beyond their own hospital so that more patients could be helped.",
        hint: "The passage explains rollout as expanding beyond one hospital.",
        explanation: "The rollout was about expanding the trial's lessons to help more people."
      }
    ]
  },
  {
    id: 'superbugs-ch33',
    title: "Superbugs: Chapter 33 – Investments",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "rose",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "McCarthy makes the case for investing in new antibiotics: faster diagnosis and smarter drug use save lives, slow superbugs, and save the hospital money — even though developing a new drug costs about a billion dollars.",
    questions: [
      {
        id: 'sb33-1',
        question: "What did Tom say patients come to the hospital for?",
        options: [
          "Cutting-edge medicine",
          "Free parking",
          "Fancy food",
          "Long naps"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Tom said that patients come to the hospital for cutting-edge medicine — and that providing it was what the team did best.",
        hint: "The passage quotes Tom on why patients choose the hospital.",
        explanation: "Patients come for cutting-edge medicine, Tom said."
      },
      {
        id: 'sb33-2',
        question: "What did Tom say the hospital does best?",
        options: [
          "Providing cutting-edge medicine",
          "Growing gardens",
          "Fixing cars",
          "Teaching swimming"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Tom said that providing cutting-edge medicine was what they did best at the hospital.",
        hint: "The passage repeats Tom's point about the hospital's strength.",
        explanation: "Providing cutting-edge medicine was what they did best."
      },
      {
        id: 'sb33-3',
        question: "What did McCarthy say mattered even more than length of stay?",
        options: [
          "Longer visiting hours",
          "Faster, more accurate diagnosis leading to better use of antibiotics",
          "Bigger hospital rooms",
          "More vending machines"
        ],
        correctAnswerIndex: 1,
        samplePassage: "McCarthy said the implications went far beyond length of stay — faster and more accurate diagnosis meant better use of antibiotics.",
        hint: "The passage names what went beyond shorter stays.",
        explanation: "Better, faster diagnosis and smarter antibiotic use mattered even more."
      },
      {
        id: 'sb33-5',
        question: "What was the team trying to do for patients with dangerous infections?",
        options: [
          "Ignore them until they felt better",
          "Identify them before it was too late",
          "Send them home immediately",
          "Wait for someone else to help"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The team was working to identify patients with dangerous infections before it was too late to help them.",
        hint: "The passage stresses acting in time.",
        explanation: "They wanted to find these patients before it was too late."
      },
      {
        id: 'sb33-6',
        question: "About how much does it cost to develop a new antibiotic?",
        options: [
          "About a hundred dollars",
          "About ten dollars",
          "About a billion dollars",
          "Nothing at all"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Developing a new antibiotic typically costs about a billion dollars and takes around ten years of testing before approval.",
        hint: "The passage gives the enormous price tag.",
        explanation: "A new antibiotic costs about a billion dollars to develop."
      },
      {
        id: 'sb33-7',
        question: "About how long does developing a new antibiotic take?",
        options: [
          "About ten days",
          "About ten minutes",
          "About ten years",
          "Overnight"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Developing a new antibiotic takes about ten years of preclinical and clinical testing before it can be approved.",
        hint: "The passage gives the long timeline.",
        explanation: "It takes about ten years of testing."
      },
      {
        id: 'sb33-8',
        question: "What did the published ENHANCE trial find?",
        options: [
          "Dalba made hospital stays longer",
          "No patients got better",
          "Patients treated with dalba left the hospital sooner — about three days instead of almost five",
          "The trial never finished"
        ],
        correctAnswerIndex: 2,
        samplePassage: "In the published ENHANCE trial, patients treated with dalba had shorter infection-related hospital stays — about 3.2 days compared with 4.8 days for usual care.",
        hint: "The passage compares the two groups' hospital stays.",
        explanation: "Dalba patients left sooner: about 3 days versus almost 5 with usual care."
      },
      {
        id: 'sb33-10',
        question: "Why do so few companies invest in developing new antibiotics?",
        options: [
          "Antibiotics are illegal",
          "Scientists are not interested",
          "Germs do not exist",
          "The financial returns are poor, so companies prefer drugs that earn more money"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Returns on investment for new antibiotics are poor, so drug companies would rather develop medicines like cancer drugs that earn far more money.",
        hint: "The passage explains the money reason behind the lack of investment.",
        explanation: "Antibiotics earn poor returns, so companies invest their billions elsewhere."
      }
    ]
  },

  {
    id: 'superbugs-ch34',
    title: "Superbugs: Chapter 34 – Into the Haystack",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "amber",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "A young mother is fighting a drug-resistant infection that no existing drug can beat, so Dr. McCarthy goes hunting for brand-new antibiotics. He discovers a scientist who uses computers to search soil DNA for hidden germ-killing molecules.",
    questions: [
      {
        id: 'sb34-2',
        question: "While hunting for treatments, whose study does Dr. McCarthy stumble upon?",
        options: [
          "Alexander Fleming",
          "Tom Walsh",
          "Sean Brady",
          "Kim Lewis"
        ],
        correctAnswerIndex: 2,
        samplePassage: "A few hours into his hunt for treatments, Dr. McCarthy comes across a study by a scientist named Sean Brady, who seems to be onto something big.",
        hint: "The passage gives the first and last name of the scientist behind the new discovery.",
        explanation: "McCarthy discovers the work of Sean Brady, a Rockefeller University microbiologist who hunts for new antibiotics hidden in soil."
      },
      {
        id: 'sb34-3',
        question: "Where does Sean Brady work?",
        options: [
          "At a hospital in Queens",
          "At Rockefeller University",
          "At a farm in Maine",
          "At a laboratory in Chicago"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Brady is a microbiologist at Rockefeller University with a PhD in chemistry, and his laboratory sits near another germ researcher's group.",
        hint: "The passage names a famous New York research university.",
        explanation: "Sean Brady works at Rockefeller University in New York, where he studies the DNA of soil microbes in search of new medicines."
      },
      {
        id: 'sb34-4',
        question: "What are malacidins?",
        options: [
          "A type of soil fertilizer",
          "A new surgical tool",
          "A kind of vitamin",
          "A newfound family of antibiotics from soil microbes"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Brady discovered malacidins, a new family of antibiotics found by reading the DNA of soil microbes. He showed that they could kill many kinds of bacteria, including MRSA.",
        hint: "The passage describes them as a new family of germ-killing medicines discovered in soil.",
        explanation: "Malacidins are a newly discovered family of antibiotics — the name is short for 'metagenomic acidic lipopeptide antibiotic-cidins' — and they can kill tough bacteria like MRSA."
      },
      {
        id: 'sb34-5',
        question: "What was Brady's clever trick for finding new antibiotics?",
        options: [
          "Using a computer to scan soil DNA for a telling chemical pattern",
          "Testing soil chemicals one by one, the slow old way",
          "Waiting for bacteria to surrender on their own",
          "Reading old books about mold"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Instead of testing chemicals one by one, Brady used a computer program to hunt through soil DNA from many climates for the genetic signature of calcium-dependent antibiotics.",
        hint: "The passage says he used a computer program to search DNA instead of testing one chemical at a time.",
        explanation: "Brady's key insight was to narrow the search: rather than testing compounds one at a time, he used a computer to scan soil DNA for the signature of calcium-dependent antibiotics."
      },
      {
        id: 'sb34-6',
        question: "Which dangerous germ could malacidins kill?",
        options: [
          "Only the germs that cause colds",
          "Only germs found in zoos",
          "MRSA, plus many other kinds of bacteria",
          "No germs at all"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Brady showed that malacidins could kill all kinds of bacteria, including MRSA, the feared drug-resistant staph germ.",
        hint: "The passage names a famous drug-resistant staph germ in all capital letters.",
        explanation: "Malacidins killed many kinds of bacteria, including MRSA (methicillin-resistant Staphylococcus aureus), one of the most feared superbugs."
      },
      {
        id: 'sb34-7',
        question: "What happened when malacidins were tested on rats with MRSA skin infections?",
        options: [
          "The rats became seriously ill",
          "The rats showed no side effects",
          "The rats refused to eat for days",
          "The experiment was never actually done"
        ],
        correctAnswerIndex: 1,
        samplePassage: "When malacidins were tested on rats with MRSA skin infections, the animals showed no side effects, which suggested the compound might one day be safe to test in people.",
        hint: "The passage says the animals showed no harmful reactions.",
        explanation: "The rats experienced no side effects — a promising sign that malacidins might be safe enough to test in humans someday."
      },
      {
        id: 'sb34-9',
        question: "Where were many of our best antibiotics — like vancomycin and daptomycin — first found?",
        options: [
          "In soil",
          "In outer space",
          "In candy factories",
          "In swimming pools"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The young mother's VRE infection shows how inefficient antibiotic discovery is, even though many of our best drugs, including vancomycin, daptomycin, and nystatin, were first discovered in soil.",
        hint: "The passage names the ground beneath our feet as the original source.",
        explanation: "Many great antibiotics were first discovered in soil, where microbes make chemicals to fight one another — which is exactly why Brady searches soil DNA for new ones."
      },
      {
        id: 'sb34-10',
        question: "After reading Brady's study, what does Dr. McCarthy do?",
        options: [
          "He decides the discovery is unimportant",
          "He keeps it secret from Tom Walsh",
          "He messages Tom Walsh about working with Brady",
          "He drives to Prospect Park to dig up soil himself"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Excited by what he read, McCarthy wonders if there is a chance to collaborate with Brady's team, and he sends a message to Tom Walsh suggesting they pursue it.",
        hint: "The passage says he contacts his mentor about teaming up with the scientist.",
        explanation: "McCarthy was energized by the discovery — it put a kick in his step — and he messaged his mentor Tom Walsh, hoping they could find a way to collaborate with Brady."
      }
    ]
  },
  {
    id: 'superbugs-ch35',
    title: "Superbugs: Chapter 35 – Angry Birds",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "emerald",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Dr. McCarthy visits a prickly patient named Clara to invite her into his drug trial, but the conversation goes badly. Afterwards he questions his own motives and turns his thoughts to the search for new medicines hidden in the soil.",
    questions: [
      {
        id: 'sb35-1',
        question: "Who is the patient Dr. McCarthy visits in this chapter?",
        options: [
          "Jennifer, a schoolteacher",
          "Clara",
          "Anna, a young girl",
          "Meghan, a teenager"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Most of the chapter follows Dr. McCarthy's visit to Clara, a patient he hopes to recruit for his dalbavancin drug trial.",
        hint: "The passage gives the patient's first name.",
        explanation: "Clara is the patient McCarthy visits to discuss the trial. She proves to be a tough, guarded person to talk to."
      },
      {
        id: 'sb35-2',
        question: "What infection does Clara have?",
        options: [
          "A urinary tract infection from a germ resistant to most antibiotics",
          "A skin infection on her leg",
          "A sinus infection",
          "The flu"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Clara has developed a urinary tract infection caused by a bacterium called Enterococcus faecalis, and the germ has become resistant to most antibiotics.",
        hint: "The passage names a bladder infection caused by a drug-resistant bacterium.",
        explanation: "Clara's urinary tract infection is caused by Enterococcus faecalis that resists most antibiotics — exactly the kind of case the new-drug trial targets."
      },
      {
        id: 'sb35-3',
        question: "Why does Dr. McCarthy come to see Clara?",
        options: [
          "To bring her flowers",
          "To discharge her from the hospital",
          "To ask her to join his antibiotic trial",
          "To teach her how to play chess"
        ],
        correctAnswerIndex: 2,
        samplePassage: "McCarthy explains the dalbavancin trial to Clara and invites her to take part, saying many people are watching to see how the trial turns out and she could help.",
        hint: "The passage says he invites her to take part in his drug study.",
        explanation: "McCarthy visits Clara to recruit her as a volunteer for the dalbavancin trial, hoping the new drug can beat her resistant infection."
      },
      {
        id: 'sb35-4',
        question: "What does McCarthy tell Clara about the trial drug?",
        options: [
          "Every hospital already uses it",
          "It has been used for decades",
          "It cures every disease known",
          "His hospital does not carry it, and he would be the first to try it"
        ],
        correctAnswerIndex: 3,
        samplePassage: "He tells Clara honestly that his hospital does not stock this drug and that he would be the first doctor there ever to use it.",
        hint: "The passage says the hospital does not have the drug and he would be its first user.",
        explanation: "McCarthy is upfront: the hospital doesn't carry dalbavancin, and he would be the first to ever use it — which is why Clara's careful questions matter so much."
      },
      {
        id: 'sb35-7',
        question: "After the visit, what big question does McCarthy ask himself?",
        options: [
          "Whether Clara will ever forgive him",
          "Whether the trial is about helping patients or helping himself",
          "What time his next meeting is",
          "How to get home faster"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Afterward he wonders whether the trial is really about enlightened self-interest — his own career — or something nobler.",
        hint: "The passage says he questions his own motives for running the trial.",
        explanation: "Clara's tough questions shake him, and he wonders if he's pushing the trial for his patients' sake or his own — enlightened self-interest, or something else?"
      },
      {
        id: 'sb35-8',
        question: "Where does McCarthy go later that day to think?",
        options: [
          "To his office",
          "To the hospital cafeteria",
          "To the library",
          "To sit by the park's reservoir"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Later in the day he sits by the park's reservoir, watching people stroll by while his mind drifts to the search for new medicines.",
        hint: "The passage names a body of water in the park where he sits.",
        explanation: "McCarthy sits by the park reservoir, watching passersby and imagining the millions of potentially useful molecules in the soil beneath their feet."
      },
      {
        id: 'sb35-9',
        question: "While sitting by the reservoir, what does McCarthy picture?",
        options: [
          "Millions of tiny molecules under people's feet that could become medicines",
          "Tiny germs floating in the air",
          "Doctors of the future",
          "New hospitals being built"
        ],
        correctAnswerIndex: 0,
        samplePassage: "As people walk past, he imagines the millions of molecules beneath their feet in the soil — hidden chemicals that might become tomorrow's antibiotics.",
        hint: "The passage says he pictures countless tiny molecules in the ground.",
        explanation: "He imagines the soil under the park as a treasure chest of molecules that could become new antibiotics — the haystack hiding life-saving needles."
      },
      {
        id: 'sb35-10',
        question: "Who does McCarthy call at the end of the chapter?",
        options: [
          "Tom Walsh",
          "The hospital pharmacy",
          "Sean Brady",
          "A newspaper reporter"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The chapter ends with McCarthy picking up his phone to call Sean Brady, the soil-antibiotic scientist, eager to talk about the hunt for new drugs.",
        hint: "The passage says he phones the scientist who studies antibiotics in dirt.",
        explanation: "Inspired by his thoughts at the reservoir, McCarthy calls Sean Brady to discuss the search for new antibiotics in soil."
      }
    ]
  },
  {
    id: 'superbugs-ch36',
    title: "Superbugs: Chapter 36 – Macaulay",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "sky",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "On Wednesday mornings, Dr. McCarthy teaches a medical ethics seminar for college students. When the class debates why it is so hard to turn a lab discovery into a real medicine, one student's question sends McCarthy off to call another scientist.",
    questions: [
      {
        id: 'sb36-1',
        question: "What does Dr. McCarthy do on Wednesday mornings in the spring?",
        options: [
          "Teaches an undergraduate seminar in medical ethics",
          "Sees patients at the hospital",
          "Writes in his office",
          "Attends a staff meeting"
        ],
        correctAnswerIndex: 0,
        samplePassage: "On Wednesday mornings in the spring, McCarthy teaches an undergraduate seminar in medical ethics, trading the hospital for a college classroom.",
        hint: "The passage says he teaches college students about right and wrong in medicine.",
        explanation: "McCarthy teaches an undergraduate medical ethics seminar — a class about the tough moral questions in medicine."
      },
      {
        id: 'sb36-2',
        question: "Which school runs the seminar?",
        options: [
          "Columbia University",
          "New York University",
          "Macaulay Honors College",
          "A medical school in Boston"
        ],
        correctAnswerIndex: 2,
        samplePassage: "The course is run by the Macaulay Honors College at the City University of New York, which gives the chapter its title.",
        hint: "The passage names the honors college that matches the chapter title.",
        explanation: "The seminar is run by Macaulay Honors College, part of the City University of New York — hence the chapter title 'Macaulay.'"
      },
      {
        id: 'sb36-3',
        question: "What does the class discuss that day?",
        options: [
          "Fleming's discovery of penicillin",
          "New soil antibiotics, investors, and why lab discoveries struggle to reach patients",
          "Hospital cafeteria menus",
          "The rules of baseball"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The students discuss Brady's malacidins, the venture capitalists who fund drug companies, and how hard it is to carry a molecule from the laboratory all the way to patients.",
        hint: "The passage lists soil antibiotics, money people, and the long road from lab to patient.",
        explanation: "The class debates the business of new drugs: exciting soil discoveries like malacidins, the investors involved, and the difficulty of turning a lab molecule into a medicine."
      },
      {
        id: 'sb36-4',
        question: "What does a curious student ask about Brady's approach?",
        options: [
          "When is the exam?",
          "How much does the drug cost?",
          "Can I join your lab?",
          "Why isn't everyone doing this?"
        ],
        correctAnswerIndex: 3,
        samplePassage: "A student, intrigued by Brady's soil-DNA method, asks whether anyone else is doing similar work — wondering aloud why every scientist isn't hunting for drugs this way.",
        hint: "The passage says the student wonders why more scientists don't use this method.",
        explanation: "The student is so impressed by Brady's method that she asks why every scientist isn't searching for antibiotics the same way."
      },
      {
        id: 'sb36-5',
        question: "Which other new antibiotic comes up in the discussion?",
        options: [
          "Teixobactin",
          "Penicillin",
          "Aspirin",
          "Vancomycin"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The conversation turns to teixobactin, another newly discovered antibiotic that was found in soil below a meadow in Maine.",
        hint: "The passage names the antibiotic found under a Maine meadow.",
        explanation: "The class also discusses teixobactin, a promising new antibiotic discovered in Maine soil — which gives McCarthy his next lead."
      },
      {
        id: 'sb36-6',
        question: "Where was teixobactin discovered?",
        options: [
          "In a New York City park",
          "In a hospital basement",
          "In soil below a meadow in Maine",
          "In a chemistry lab"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Teixobactin was discovered in the soil beneath a meadow in Maine, the student explains, amazing the class.",
        hint: "The passage names a grassy field in a New England state.",
        explanation: "Teixobactin came from soil under a Maine meadow — a reminder that new medicines can hide in the most ordinary places."
      },
      {
        id: 'sb36-7',
        question: "What does McCarthy do a few days after the class?",
        options: [
          "He grades papers all weekend",
          "He calls scientist Kim Lewis to learn more",
          "He visits Brady's lab",
          "He writes a textbook"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Just a few days after the student's question, McCarthy phones Kim Lewis, the scientist behind teixobactin, to find out more.",
        hint: "The passage says he telephones the teixobactin scientist.",
        explanation: "The student's curiosity is contagious: McCarthy calls Kim Lewis himself to learn the full story behind teixobactin."
      },
      {
        id: 'sb36-8',
        question: "Why does the chapter end with a phone call?",
        options: [
          "McCarthy needs lab results",
          "McCarthy wants to recruit Lewis for the trial",
          "McCarthy wants to invite Lewis to teach",
          "A student's question sparked his own hunt for answers"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The chapter closes with McCarthy reaching for the phone, because the student's sharp question made him want to investigate teixobactin himself.",
        hint: "The passage connects the call to the student's curious question.",
        explanation: "Good teaching goes both ways: the student's question sends the teacher off to learn more, launching the next chapter's investigation."
      },
      {
        id: 'sb37-1',
        question: "How does the chapter begin?",
        options: [
          "With a description of the Maine woods",
          "By questioning whether the discovery site was really a meadow, then introducing Kim Lewis",
          "With a history of Rockefeller University",
          "With a letter from a patient"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The chapter opens by doubting the storybook detail — maybe it wasn't a meadow after all — and then introduces Kim Lewis, the scientist who found teixobactin.",
        hint: "The passage says the opening questions the meadow story before naming the scientist.",
        explanation: "McCarthy opens by questioning the tale — maybe it wasn't a meadow — then profiles Kim Lewis, whose team discovered teixobactin in Maine soil."
      },
      {
        id: 'sb37-2',
        question: "Where was teixobactin found?",
        options: [
          "In the soil of Maine",
          "In a desert in Arizona",
          "In a New York park",
          "In a hospital garden"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Teixobactin, the new antibiotic, was discovered in soil in Maine — famously described as lying below a meadow.",
        hint: "The passage names a New England state known for rocky coasts.",
        explanation: "Teixobactin was found in Maine soil, showing that powerful new medicines can lurk in ordinary dirt."
      },
      {
        id: 'sb37-3',
        question: "What was special about the bacterium that makes teixobactin?",
        options: [
          "It is bigger than a breadbox",
          "It eats plastic",
          "It lives in the ocean",
          "It was unknown to science and could not grow in a lab"
        ],
        correctAnswerIndex: 3,
        samplePassage: "The bacterium that produces teixobactin was completely unknown to science, and no one had ever managed to grow it in a laboratory.",
        hint: "The passage says the germ was new to science and refused to grow in lab dishes.",
        explanation: "Most bacteria can't be grown in labs, so their medicines stay hidden. This mystery bacterium was one of them — until Lewis's gadget came along."
      },
      {
        id: 'sb37-4',
        question: "What did Kim Lewis name the new bacterium?",
        options: [
          "Bacterium mainensis",
          "Lewisella magna",
          "Eleftheria terrae",
          "Terra mysterium"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Lewis gave the newly discovered bacterium a scientific name: Eleftheria terrae.",
        hint: "The passage gives the two-word Latin name Lewis chose.",
        explanation: "Lewis named the bacterium Eleftheria terrae — a brand-new species that makes the promising antibiotic teixobactin."
      },
      {
        id: 'sb37-6',
        question: "Why is the iChip put back into the natural environment?",
        options: [
          "To keep it warm",
          "So bacteria that will not grow in a lab can grow at home in nature",
          "Because the lab is too small",
          "To protect it from rain"
        ],
        correctAnswerIndex: 1,
        samplePassage: "By placing the iChip back where the bacteria came from, the microbes get the natural conditions they need — conditions no laboratory dish can copy.",
        hint: "The passage says the bacteria need their natural home to grow.",
        explanation: "Many bacteria refuse to grow in lab dishes but thrive in their natural habitat. The iChip tricks them into growing by keeping them in nature."
      },
      {
        id: 'sb37-7',
        question: "What has Lewis's company pulled from soil using this approach?",
        options: [
          "Only a few useless rocks",
          "Just one compound",
          "Thousands of new compounds that might treat diseases from cancer to tuberculosis",
          "Fossils of dinosaurs"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Using the iChip approach, Lewis's company has retrieved thousands of new compounds from soil, with potential uses against everything from cancer to tuberculosis.",
        hint: "The passage says thousands of new chemicals for many diseases were found.",
        explanation: "The iChip has yielded thousands of potential new medicines from soil — not just antibiotics, but possible treatments for cancer, tuberculosis, and more."
      },
      {
        id: 'sb37-8',
        question: "What does Lewis spend most of his energy on?",
        options: [
          "Finding more meadows",
          "Naming new bacteria",
          "Raising money from patients",
          "Fixing bottlenecks where drug development slows down or stalls"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Lewis focuses less on single discoveries and more on bottlenecks — the points where turning a discovery into a medicine slows down or grinds to a halt.",
        hint: "The passage says he targets the choke points that slow down new medicines.",
        explanation: "Lewis believes the biggest wins come from fixing 'bottlenecks' — the slow, stuck stages where promising discoveries die before becoming real drugs."
      },
      {
        id: 'sb37-9',
        question: "What does McCarthy picture hidden beneath the topsoil?",
        options: [
          "Tiny molecules that could ease disease and stop epidemics",
          "Oil and gas",
          "Buried coins",
          "Old bones"
        ],
        correctAnswerIndex: 0,
        samplePassage: "McCarthy imagines the cures waiting underground: tiny molecules just beneath the topsoil that could ease suffering and stamp out epidemics — if we keep looking.",
        hint: "The passage describes picturing disease-fighting molecules under the soil.",
        explanation: "The chapter ends on hope: beneath our feet lie countless molecules that could cure disease — we just have to keep searching."
      },
      {
        id: 'sb38-2',
        question: "What kind of infection did Anna have?",
        options: [
          "A lung infection",
          "A skin rash",
          "A spinal infection",
          "An ear infection"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Anna suffered from infections of the spine, a dangerous condition that Tom tracked closely over many months.",
        hint: "The passage says the infection was in her backbone area.",
        explanation: "Anna had serious spinal infections — infections in and around her spine that threatened her health and mobility."
      },
      {
        id: 'sb38-3',
        question: "What old-fashioned test did Tom use to track Anna's progress?",
        options: [
          "An X-ray of her spine",
          "C-reactive protein, a 1930s inflammation test",
          "A blood pressure cuff",
          "A thermometer"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Tom used C-reactive protein, a marker of inflammation developed in the 1930s, to judge how Anna was responding to treatment — an old-school test he had once doubted.",
        hint: "The passage names an inflammation marker invented in the 1930s.",
        explanation: "Tom relied on C-reactive protein, an old 1930s test for inflammation, to see whether Anna's spinal infections were getting better."
      },
      {
        id: 'sb38-4',
        question: "Which doctor asked Tom for advice about Anna?",
        options: [
          "Dr. Fischetti",
          "Dr. McCarthy",
          "Dr. Brady",
          "Dr. Levy"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Dr. Levy consulted Tom about Anna's case, mentioning that she had an appointment with a spinal surgeon the next week.",
        hint: "The passage names the doctor who consulted Tom.",
        explanation: "Dr. Levy sought Tom's expertise on Anna's difficult case, showing how doctors team up on the toughest patients."
      },
      {
        id: 'sb38-5',
        question: "What did surgeons discover in Anna's scalp?",
        options: [
          "Several abscesses, or pockets of infection",
          "A broken bone",
          "A bad bruise",
          "A mild rash"
        ],
        correctAnswerIndex: 0,
        samplePassage: "When doctors examined Anna's scalp, they found several abscesses — painful pockets of infection that needed surgical treatment.",
        hint: "The passage says they found pockets of infection in her scalp.",
        explanation: "Surgeons found multiple abscesses in Anna's scalp — dangerous pockets of infection that had to be carefully removed."
      },
      {
        id: 'sb38-7',
        question: "Could the surgeons remove all of the infected material?",
        options: [
          "Yes, every last bit",
          "No, they could not get all of it out",
          "They removed it with medicine alone",
          "They used a laser instead"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The surgeons carefully scooped out the infected material, but they could not remove all of it without causing more harm.",
        hint: "The passage says some infected material had to be left behind.",
        explanation: "Surgery helped but couldn't remove everything — the infection was in such a delicate spot that taking it all out would have done more damage."
      },
      {
        id: 'sb38-8',
        question: "What frightening event did Anna suffer?",
        options: [
          "A broken arm",
          "A severe headache",
          "A fainting spell",
          "A stroke"
        ],
        correctAnswerIndex: 3,
        samplePassage: "In the middle of her ordeal, Anna suffered a stroke — yet she kept fighting and eventually recovered.",
        hint: "The passage names a sudden brain emergency.",
        explanation: "Anna suffered a stroke during her illness, making her recovery even more remarkable."
      },
      {
        id: 'sb38-9',
        question: "How did Anna leave the hospital?",
        options: [
          "Walking out on her own, hand in hand with her father",
          "In a wheelchair, still very weak",
          "Carried by nurses",
          "She moved to another hospital"
        ],
        correctAnswerIndex: 0,
        samplePassage: "When Anna was finally discharged, she walked out of the building on her own two feet, holding her father's hand.",
        hint: "The passage describes her walking out hand in hand with her dad.",
        explanation: "She walked out of the building holding her father's hand, Tom says — a joyful ending after surgery, a stroke, and months of danger."
      },
      {
        id: 'sb38-10',
        question: "What did Anna's story remind Tom of?",
        options: [
          "His own childhood illness",
          "A difficult case from his residency",
          "Losing his own mother to cancer, which inspired him to become a doctor",
          "His first day at the hospital"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Anna's stroke struck at nearly the same age Tom had been when he lost his mother to cancer — the loss that had set him on the path to medicine.",
        hint: "The passage connects Anna's age to the age Tom was when his mother died.",
        explanation: "Tom's mother died of cancer when he was young, and her death inspired him to become a doctor. Anna's fight reminded him why he chose this life."
      }
    ]
  },
  {
    id: 'superbugs-ch39',
    title: "Superbugs: Chapter 39 – Reversals and Rewards",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "rose",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "A schoolteacher named Jennifer joins the dalbavancin trial to treat a MRSA sore on her arm, worrying most about her students. Her infection heals completely, and she returns to the office with a thank-you card from her class.",
    questions: [
      {
        id: 'sb39-1',
        question: "Who is the patient in this chapter?",
        options: [
          "Clara, the guarded patient",
          "Jennifer, a schoolteacher",
          "Anna, Tom's patient",
          "Bill, the father-in-law"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The chapter centers on Jennifer, a schoolteacher who agrees to join the dalbavancin trial for her skin infection.",
        hint: "The passage names the teacher who joins the trial.",
        explanation: "Jennifer is a schoolteacher who simply wants to get back to her classroom — and the trial drug gives her that chance."
      },
      {
        id: 'sb39-2',
        question: "What did Jennifer's infection look like?",
        options: [
          "A red, raised sore on her forearm",
          "A small freckle",
          "A bruise on her knee",
          "A blister on her heel"
        ],
        correctAnswerIndex: 0,
        samplePassage: "Jennifer had an angry red welt on her forearm — the visible sign of her MRSA skin infection — as she looked over the trial paperwork.",
        hint: "The passage describes a red bump on her arm.",
        explanation: "Jennifer's MRSA showed as a red, raised welt on her forearm — the rash she hoped the trial drug would heal."
      },
      {
        id: 'sb39-3',
        question: "What germ caused Jennifer's infection?",
        options: [
          "The flu virus",
          "A cold germ",
          "MRSA",
          "Chickenpox"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Her infection was caused by MRSA, the drug-resistant staph germ that the dalbavancin trial was designed to fight.",
        hint: "The passage names the drug-resistant staph germ in capital letters.",
        explanation: "Jennifer had MRSA (methicillin-resistant Staphylococcus aureus), the resistant staph infection dalbavancin was being tested against."
      },
      {
        id: 'sb39-4',
        question: "What does Dr. McCarthy hand Jennifer?",
        options: [
          "A prescription pad",
          "A get-well card",
          "A hospital bill",
          "The trial's consent form"
        ],
        correctAnswerIndex: 3,
        samplePassage: "McCarthy hands Jennifer the consent form, and she adjusts her glasses to read through its pages carefully.",
        hint: "The passage says he gives her the form to join the study.",
        explanation: "Before joining any trial, patients read and sign a consent form. Jennifer studies hers closely — and asks a question McCarthy never expected."
      },
      {
        id: 'sb39-7',
        question: "What had happened to Jennifer's rash?",
        options: [
          "It had spread everywhere",
          "It had healed completely",
          "It had gotten worse",
          "It was exactly the same"
        ],
        correctAnswerIndex: 1,
        samplePassage: "She shows McCarthy the spot where the rash had been: it is completely healed, and she is back to her normal life.",
        hint: "The passage says the rash was gone.",
        explanation: "The dalbavancin worked — Jennifer's MRSA rash healed completely, the reversal the chapter celebrates."
      },
      {
        id: 'sb39-8',
        question: "What does healing mean for Jennifer?",
        options: [
          "She needs a second surgery",
          "She must take pills for a year",
          "She needs weekly checkups forever",
          "She is back to life as usual, back with her class"
        ],
        correctAnswerIndex: 3,
        samplePassage: "With the infection gone, Jennifer is back to life as usual — back in her classroom with the students she had worried about.",
        hint: "The passage says she returned to her normal life.",
        explanation: "Healed and happy, Jennifer returns to her classroom — the normal life the trial was meant to give back to patients."
      },
      {
        id: 'sb39-9',
        question: "Which moment best matches the 'Rewards' in the chapter title?",
        options: [
          "Jennifer's thank-you card from her students",
          "Jennifer's healed arm",
          "A research grant",
          "A newspaper article"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The emotional payoff comes when Jennifer hands over the card from her class — a small, heartfelt reward for everyone who worked on the trial.",
        hint: "The passage points to the card as the chapter's heartwarming payoff.",
        explanation: "The 'reward' is the thank-you card from Jennifer's class — proof that the trial gave a teacher her life back."
      },
      {
        id: 'sb39-10',
        question: "In the book's closing reflections, what does dalbavancin represent for patients like Jennifer?",
        options: [
          "A cure for every illness",
          "A replacement for all other drugs",
          "A way back to normal life, away from hospital dangers",
          "A reason to stay in the hospital"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Looking back, McCarthy writes that for Jennifer, dalbavancin meant returning to normal life — away from stretchers, X-rays, and the hidden dangers of long hospital stays.",
        hint: "The passage says the drug offers a path back to ordinary life.",
        explanation: "For Jennifer, dalbavancin wasn't just a drug — it was a ticket back to normal life, free from the risks and miseries of prolonged hospitalization."
      }
    ]
  },
  {
    id: 'superbugs-ch40',
    title: "Superbugs: Chapter 40 – Help Wanted",
    author: "Matt McCarthy",
    coverEmoji: "🦠",
    themeColor: "amber",
    readingLevel: "Grades 6+ (Ages 11+)",
    synopsis: "Dr. McCarthy's father-in-law Bill faces pancreatic cancer, a massive surgery, and then a dangerous staph infection. The family's frightening ordeal shows why the world urgently needs new antibiotics — help wanted.",
    questions: [
      {
        id: 'sb40-1',
        question: "Who is Bill Morris?",
        options: [
          "Dr. McCarthy's father-in-law",
          "A famous baseball player",
          "Tom Walsh's brother",
          "One of McCarthy's students"
        ],
        correctAnswerIndex: 0,
        samplePassage: "The chapter opens with McCarthy confiding in Tom Walsh: he doesn't know what to do — it's his father-in-law, Bill Morris, who is seriously ill.",
        hint: "The passage says Bill is related to McCarthy by marriage.",
        explanation: "Bill Morris is McCarthy's father-in-law — the father of his wife, Heather. His illness makes the antibiotic crisis personal for McCarthy."
      },
      {
        id: 'sb40-3',
        question: "Which jobs did Bill hold during his life?",
        options: [
          "Police officer, firefighter, and bus driver",
          "Stadium security guard, park gardener, and school gym teacher and coach",
          "Banker and lawyer",
          "He worked only as a teacher"
        ],
        correctAnswerIndex: 1,
        samplePassage: "Bill worked as a security guard at Shea Stadium and a gardener at Rockefeller Center, then spent a long career as a New York public school gym teacher, coach, and softball umpire.",
        hint: "The passage lists a stadium, a famous plaza garden, and a school job.",
        explanation: "Bill guarded Shea Stadium, gardened at Rockefeller Center, and then taught gym, coached, and umpired softball for New York public schools."
      },
      {
        id: 'sb40-4',
        question: "Who is Harrel?",
        options: [
          "Bill's sister",
          "Bill's nurse",
          "Tom Walsh's wife",
          "Bill's wife, also a teacher"
        ],
        correctAnswerIndex: 3,
        samplePassage: "Bill married Harrel, another teacher, and together they raised two children — including Heather, McCarthy's wife.",
        hint: "The passage says she is Bill's wife and a fellow teacher.",
        explanation: "Harrel is Bill's wife and McCarthy's mother-in-law. Like Bill, she was a teacher."
      },
      {
        id: 'sb40-6',
        question: "What serious illness did Bill develop?",
        options: [
          "A lung infection",
          "A broken hip",
          "Pancreatic cancer, with a tumor pressing on a major artery",
          "Skin cancer"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Doctors found a tumor on Bill's pancreas that was pressing against a major artery, making it unclear whether surgery was even possible.",
        hint: "The passage describes a tumor on the pancreas near a big blood vessel.",
        explanation: "Bill developed pancreatic cancer. The tumor sat against a major artery, so removing it safely looked nearly impossible."
      },
      {
        id: 'sb40-7',
        question: "What major surgery was Bill's only hope?",
        options: [
          "A simple biopsy",
          "The Whipple procedure",
          "A blood transfusion",
          "Physical therapy"
        ],
        correctAnswerIndex: 1,
        samplePassage: "The Whipple procedure — a massive operation that in one case McCarthy saw lasted eight hours — was Bill's only shot at removing the cancer.",
        hint: "The passage names the big pancreatic operation.",
        explanation: "The Whipple procedure, an enormous surgery to remove pancreatic tumors, was Bill's only chance — though it might not work."
      },
      {
        id: 'sb40-8',
        question: "How long had the Whipple surgery McCarthy once watched lasted?",
        options: [
          "Two hours",
          "Four hours",
          "Twelve hours",
          "Eight hours"
        ],
        correctAnswerIndex: 3,
        samplePassage: "McCarthy knew how grueling the operation was: a Whipple case he had once scrubbed in for had lasted eight full hours.",
        hint: "The passage gives the length of the operation in hours.",
        explanation: "The Whipple is a marathon operation — the one McCarthy observed lasted eight hours, showing how serious Bill's surgery would be."
      },
      {
        id: 'sb40-9',
        question: "What did surgeons discover during Bill's Whipple procedure?",
        options: [
          "The tumor had spread to the portal vein, a large vessel carrying blood to the liver",
          "The tumor was completely gone",
          "A second, smaller tumor in his arm",
          "That surgery had been unnecessary"
        ],
        correctAnswerIndex: 0,
        samplePassage: "During the Whipple, the Columbia team found that Bill's tumor had spread to the portal vein, the large vessel that carries blood to the liver, complicating the operation.",
        hint: "The passage says the cancer had reached a major vein leading to the liver.",
        explanation: "The cancer had spread to the portal vein, making the already huge surgery even harder — though the Columbia team pressed on to remove it."
      },
      {
        id: 'sb40-10',
        question: "What danger still threatened Bill after surgery?",
        options: [
          "A mild cold that needed no treatment",
          "A sprained wrist from the hospital bed",
          "Staph bacteria spreading in his spine, plus the need for more chemotherapy",
          "A lost wallet"
        ],
        correctAnswerIndex: 2,
        samplePassage: "Even after the Whipple, Bill wasn't safe: he needed more chemotherapy to destroy remaining cancer cells, and staph bacteria were still circulating in his spine.",
        hint: "The passage mentions spine infection and more cancer treatment.",
        explanation: "Bill survived the Whipple but still faced staph bacteria in his spine and more chemotherapy — the kind of infection battle the whole book warns about."
      }
    ]
  }
];
