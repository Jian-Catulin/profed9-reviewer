// ==========================================
// 1. MULTIPLE CHOICE BANK (50 Items)
// ==========================================
const mcData = [
    // Paradigms & Purposes
    { question: "Which research purpose helps determine whether one or more variables can be used to anticipate a future outcome?", options: ["Prediction", "Exploration", "Explanation", "Description"], answer: "Prediction", explanation: "Prediction research specifically anticipates outcomes based on variables." },
    { question: "Which paradigm focuses heavily on finding 'what works best' to solve a problem and commonly utilizes mixed-method designs?", options: ["Pragmatist Paradigm", "Positivist Paradigm", "Essentialist Paradigm", "Realist Paradigm"], answer: "Pragmatist Paradigm", explanation: "Pragmatists care about practical solutions and will mix qualitative and quantitative methods to find what works." },
    { question: "A researcher assumes that reality can be objectively measured and tested through statistics. Which paradigm are they using?", options: ["Positivist Paradigm", "Pragmatist Paradigm", "Essentialist Paradigm", "Realist Paradigm"], answer: "Positivist Paradigm", explanation: "Positivism is the foundation of objective, quantitative research and statistical hypothesis testing." },
    { question: "If a researcher conducts a study to develop solutions and improve professional practices in a school, this is classified as:", options: ["Improvement or Applied Research", "Exploratory Research", "Descriptive Research", "Phenomenology"], answer: "Improvement or Applied Research", explanation: "Applied research directly addresses practical problems to improve current practices." },
    { question: "Which paradigm assumes that reality exists independently of human perception, but our understanding of it may be incomplete?", options: ["Realist Paradigm", "Positivist Paradigm", "Essentialist Paradigm", "Pragmatist Paradigm"], answer: "Realist Paradigm", explanation: "Realists seek to explain the underlying realities and causes behind events." },

    // Ethics, IP Law, Plagiarism & Citation
    { question: "Republic Act No. 8293 is formally known as the:", options: ["Intellectual Property Code of the Philippines", "Cybercrime Prevention Act", "Data Privacy Act", "Anti-Camcording Act"], answer: "Intellectual Property Code of the Philippines", explanation: "RA 8293 governs all intellectual property, including copyrights and patents." },
    { question: "Which government agency is responsible for granting patents and registering trademarks in the Philippines?", options: ["IPOPHL", "CHED", "NBI", "WIPO"], answer: "IPOPHL", explanation: "The Intellectual Property Office of the Philippines (IPOPHL) handles these registrations." },
    { question: "What legal right guarantees that an author must be attributed (Paternity Right) and protects the work from harmful distortion?", options: ["Moral Rights", "Economic Rights", "Fair Use", "Patent Rights"], answer: "Moral Rights", explanation: "Moral rights protect the personal connection and reputation of the author." },
    { question: "How long is a patent protected under Philippine law?", options: ["20 years", "10 years", "50 years", "Lifetime of the inventor"], answer: "20 years", explanation: "Patents grant exclusive technological rights for 20 years." },
    { question: "Under the Data Privacy Act (RA 10173), what must Higher Education Institutions secure before archiving student manuscripts in plagiarism checkers?", options: ["Student consent", "A patent", "A trademark", "Payment from the student"], answer: "Student consent", explanation: "Student data and intellectual property cannot be archived without explicit consent." },
    { question: "Which exception allows researchers and teachers to utilize limited portions of copyrighted material without prior permission?", options: ["Fair Use", "Creative Commons", "Prior Art", "Public Domain"], answer: "Fair Use", explanation: "Fair use permits limited use for commentary, teaching, and research." },
    { question: "Reusing your own previously published research in a new paper without proper disclosure is a violation known as:", options: ["Self-Plagiarism", "Improper Paraphrase", "Fair Use", "Direct Copying"], answer: "Self-Plagiarism", explanation: "Even if it is your own work, reusing it without disclosure is academically dishonest." },
    { question: "Turnitin provides a percentage score highlighting matched text blocks. This is called the:", options: ["Similarity Index", "Plagiarism Score", "Originality Metric", "Fair Use Percentage"], answer: "Similarity Index", explanation: "Turnitin provides a Similarity Index, which requires human evaluation to determine if actual plagiarism occurred." },
    { question: "Which citation style prioritizes the publication year (Author-Date format) and is commonly used in education and social sciences?", options: ["APA", "MLA", "Chicago", "IEEE"], answer: "APA", explanation: "The American Psychological Association (APA) style highlights the recency of research." },
    { question: "When conducting a patent search, researchers look for knowledge or technology that was already publicly available. This is known as:", options: ["Prior Art", "Trade Secrets", "Derivative Works", "Similarity Index"], answer: "Prior Art", explanation: "Identifying prior art helps researchers avoid 'reinventing the wheel'." },

    // Research Problem, Questions, Hypothesis
    { question: "An area, topic, or issue that has not been adequately explored in existing academic literature is called a:", options: ["Research Gap", "Problem Statement", "Null Hypothesis", "Prior Art"], answer: "Research Gap", explanation: "Identifying a gap justifies why the new research is necessary." },
    { question: "If a study focuses on real-world operational challenges and aims for immediate, actionable solutions, it is addressing a:", options: ["Practical Research Problem", "Theoretical Research Problem", "Methodological Gap", "Null Hypothesis"], answer: "Practical Research Problem", explanation: "Practical problems aim to fix concrete, real-world issues." },
    { question: "Which statement predicts that there is NO significant difference or relationship between variables?", options: ["Null Hypothesis", "Alternative Hypothesis", "Problem Statement", "Research Question"], answer: "Null Hypothesis", explanation: "The Null Hypothesis assumes no effect or relationship exists." },
    { question: "Why is it important to formulate clear research questions?", options: ["They keep the researcher focused on the main purpose of the study", "They replace the need for a literature review", "They legally protect the intellectual property", "They guarantee positive results"], answer: "They keep the researcher focused on the main purpose of the study", explanation: "Research questions guide the direction and methodology of the study." },
    { question: "A problem statement should provide a clear description of:", options: ["The specific issue or challenge the study seeks to address", "The statistical formulas to be used", "The exact budget required", "The similarity index"], answer: "The specific issue or challenge the study seeks to address", explanation: "It clearly communicates what is wrong and why it needs fixing." },

    // Qualitative Designs
    { question: "Which qualitative design focuses on exploring and conceptualizing human experience through personal stories arranged in chronological order?", options: ["Narrative Research", "Phenomenology", "Grounded Theory", "Ethnography"], answer: "Narrative Research", explanation: "Narrative research relies on personal stories and timelines." },
    { question: "A researcher wants to study the shared experiences of several nurses who survived a specific disaster. Which design is best?", options: ["Phenomenology", "Case Study", "Grounded Theory", "Descriptive Research"], answer: "Phenomenology", explanation: "Phenomenology explores the common or shared experiences of individuals who went through the exact same situation." },
    { question: "Which qualitative design focuses on understanding people, cultures, and communities by immersing the researcher in their natural environment?", options: ["Ethnography", "Grounded Theory", "Case Study", "Narrative Research"], answer: "Ethnography", explanation: "Ethnography requires observing a culture in its natural setting." },
    { question: "If a researcher intends to develop a completely new theory based on patterns found in participant data, they should use:", options: ["Grounded Theory", "Phenomenology", "Correlational Research", "Action Research"], answer: "Grounded Theory", explanation: "Grounded theory builds explanations 'grounded' directly in the gathered data." },
    { question: "Using multiple data sources, methods, or investigators to increase the credibility of qualitative findings is called:", options: ["Triangulation", "Similarity Checking", "Chunking", "Random Assignment"], answer: "Triangulation", explanation: "Triangulation strengthens conclusions by verifying them from multiple angles." },

    // Quantitative Designs
    { question: "Which quantitative design simply details the current characteristics or condition of a group, often using surveys?", options: ["Descriptive Research", "Experimental Research", "Correlational Research", "Action Research"], answer: "Descriptive Research", explanation: "Descriptive research aims to measure 'what is' without manipulating variables." },
    { question: "A study examines the connection between sleep hours and test scores without manipulating how much the students sleep. This is:", options: ["Correlational Research", "Experimental Research", "Descriptive Research", "Quasi-Experimental Research"], answer: "Correlational Research", explanation: "Correlational research looks for relationships without interfering." },
    { question: "Which research design tests cause-and-effect relationships by manipulating a variable and using strict random assignment?", options: ["Experimental Research", "Quasi-Experimental Research", "Correlational Research", "Phenomenology"], answer: "Experimental Research", explanation: "True experimental research requires random assignment and controlled manipulation." },
    { question: "If a researcher tests an intervention on existing classroom sections (where students cannot be randomly assigned), this is:", options: ["Quasi-Experimental Research", "Experimental Research", "Descriptive Research", "Action Research"], answer: "Quasi-Experimental Research", explanation: "Quasi-experiments lack random assignment because they use pre-existing groups." },
    { question: "Quantitative research is fundamentally designed to collect:", options: ["Numerical data for statistical analysis", "Personal stories and narratives", "Cultural observations", "Subjective opinions"], answer: "Numerical data for statistical analysis", explanation: "Quantitative research relies on numbers, measurements, and objective statistics." },

    // Action Research, Mixed Method, & Tech
    { question: "What are the four main steps in the continuous cycle of Action Research?", options: ["Planning, Acting, Observing, Reflecting", "Exploring, Describing, Explaining, Predicting", "Attention, Retention, Reproduction, Motivation", "Introduction, Methods, Results, Discussion"], answer: "Planning, Acting, Observing, Reflecting", explanation: "Action research is cyclical, moving through these four practical steps." },
    { question: "Action Research is commonly conducted by teachers or practitioners primarily to:", options: ["Improve a real situation or practical problem", "Develop high-level abstract theories", "Secure a trademark", "Publish a historical narrative"], answer: "Improve a real situation or practical problem", explanation: "It is hands-on research meant to solve immediate local issues." },
    { question: "In which mixed-method design are quantitative and qualitative data collected separately at the same time, and then integrated?", options: ["Convergent Design", "Explanatory Sequential Design", "Exploratory Sequential Design", "Embedded Design"], answer: "Convergent Design", explanation: "Convergent brings both data streams together simultaneously." },
    { question: "A researcher collects numerical survey data first, then conducts interviews to help explain the numerical results. This is an:", options: ["Explanatory Sequential Design", "Exploratory Sequential Design", "Convergent Design", "Action Research Design"], answer: "Explanatory Sequential Design", explanation: "Quantitative comes first, then Qualitative 'explains' it." },
    { question: "Which digital tool is specifically designed to help researchers organize their references and easily create citations?", options: ["Zotero", "Microsoft Excel", "Google Forms", "Turnitin"], answer: "Zotero", explanation: "Zotero is a dedicated reference management software." },
    { question: "Which digital search engine is specifically tailored to help researchers locate scholarly literature and peer-reviewed academic papers?", options: ["Google Scholar", "WIPO Patentscope", "Google Forms", "Turnitin"], answer: "Google Scholar", explanation: "Google Scholar filters out standard web results to focus purely on academic texts." },
    { question: "Which mixed-method design starts by collecting qualitative data first, and then uses quantitative data to test those initial findings?", options: ["Exploratory Sequential Design", "Explanatory Sequential Design", "Convergent Design", "Correlational Design"], answer: "Exploratory Sequential Design", explanation: "Qualitative 'explores' the topic first, then Quantitative verifies it." },
    { question: "Under RA 10175, what specific type of plagiarism is explicitly penalized with heightened penalties?", options: ["Cyber plagiarism", "Self-plagiarism", "Improper paraphrase", "Unintentional plagiarism"], answer: "Cyber plagiarism", explanation: "RA 10175 (Cybercrime Prevention Act) heavily penalizes online copyright infringement." },
    { question: "A researcher uses test scores and student interviews together to determine the most effective teaching strategy. This dual approach relies on:", options: ["Mixed-Method Research", "Descriptive Research", "Phenomenology", "Experimental Research"], answer: "Mixed-Method Research", explanation: "Combining test scores (quant) and interviews (qual) is a mixed-method approach." },
    { question: "To avoid 'reinventing the wheel', a researcher should conduct a:", options: ["Patent search", "Triangulation", "Quasi-experiment", "Similarity check"], answer: "Patent search", explanation: "Patent searching ensures the idea doesn't already exist in prior art." }
];

// ==========================================
// 2. IDENTIFICATION BANK (80 Items)
// ==========================================
const identData = [
    // Purposes & Paradigms (1-10)
    { question: "Conducted to explore a topic that is not yet sufficiently understood.", answer: ["Exploration", "Exploration Research", "Exploratory Research"], explanation: "Exploratory research helps gain preliminary understanding." },
    { question: "Conducted to describe characteristics of a population or phenomenon.", answer: ["Description", "Descriptive Research"], explanation: "Describes the current condition of a group." },
    { question: "Seeks to understand why or how something happens and investigates relationships between variables.", answer: ["Explanation", "Explanatory Research"], explanation: "Explains the underlying reasons for phenomena." },
    { question: "Helps determine whether one or more variables can be used to anticipate a future outcome.", answer: ["Prediction", "Predictive Research"], explanation: "Uses data to forecast future events." },
    { question: "Conducted to develop solutions, improve practices, or address practical problems.", answer: ["Improvement", "Application", "Applied Research", "Improvement or Application"], explanation: "Directly solves operational real-world problems." },
    { question: "Paradigm assuming things have an underlying nature, focusing on identifying fundamental characteristics.", answer: ["Essentialist", "Essentialist Paradigm"], explanation: "Focuses on conceptual or theoretical foundations." },
    { question: "Paradigm focusing on 'what works best' to solve a problem, commonly using mixed methods.", answer: ["Pragmatist", "Pragmatist Paradigm"], explanation: "Values practical solutions over rigid theory." },
    { question: "Paradigm assuming reality exists independently of perception, seeking the underlying cause.", answer: ["Realist", "Realist Paradigm"], explanation: "Seeks to explain underlying realities." },
    { question: "Paradigm assuming reality can be objectively measured, associated with quantitative statistics.", answer: ["Positivist", "Positivist Paradigm"], explanation: "The foundation of hard quantitative science." },
    { question: "The moral principles and standards that guide researchers in conducting studies honestly.", answer: ["Research Ethics", "Ethics"], explanation: "Ethics ensure protection of participants and data integrity." },

    // IP Law & IPOPHL (11-25)
    { question: "The specific Republic Act known as the Intellectual Property Code of the Philippines.", answer: ["RA 8293", "Republic Act 8293", "Republic Act No. 8293"], explanation: "RA 8293 governs patents, trademarks, and copyright." },
    { question: "The government agency that protects new ideas and grants patents/trademarks in the Philippines.", answer: ["IPOPHL", "Intellectual Property Office of the Philippines"], explanation: "IPOPHL promotes innovation and enforces IP rules." },
    { question: "Republic Act No. 10175, which penalizes online copyright infringement and cyber plagiarism.", answer: ["Cybercrime Prevention Act", "RA 10175", "Republic Act 10175"], explanation: "This law applies strict penalties for digital theft." },
    { question: "Republic Act No. 10173, requiring HEIs to secure student consent before archiving papers.", answer: ["Data Privacy Act", "RA 10173", "Republic Act 10173"], explanation: "Protects the personal data of students and individuals." },
    { question: "Republic Act No. 10088, which criminalizes unauthorized recording of theatrical motion pictures.", answer: ["Anti-Camcording Act", "RA 10088", "Republic Act 10088"], explanation: "Strictly combats movie piracy in cinemas." },
    { question: "Refers to creations of the mind, such as inventions, literary/artistic works, and designs.", answer: ["Intellectual Property", "IP"], explanation: "Governed heavily by RA 8293." },
    { question: "A legal right granted to a creator to have exclusive control over their original work's use and reproduction.", answer: ["Copyright"], explanation: "Applies to literary, scientific, and artistic works." },
    { question: "The specific rights allowing an author to derive financial gain from their work.", answer: ["Economic Rights"], explanation: "Includes reproduction, distribution, and public performance." },
    { question: "The specific rights protecting the personal connection and attribution of the author.", answer: ["Moral Rights"], explanation: "Protects against distortion or lack of attribution." },
    { question: "Grants exclusive rights for new technological inventions, machinery, and industrial processes.", answer: ["Patents", "Patent"], explanation: "A core IP protection." },
    { question: "Protects distinctive signs, brand names, and logos that identify commercial goods.", answer: ["Trademarks", "Trademark"], explanation: "Protects brand identity in the marketplace." },
    { question: "The exception permitting limited use of copyrighted material without prior permission for teaching/research.", answer: ["Fair Use"], explanation: "A critical legal protection for educators and students." },
    { question: "The specific moral right demanding author identification on all copies of a work.", answer: ["Paternity Right", "Attribution"], explanation: "Ensures the creator gets credit." },
    { question: "The exact number of years a Patent is protected under Philippine law.", answer: ["20", "20 years"], explanation: "Patents expire after two decades." },
    { question: "The exact number of years a Trademark is protected before needing renewal.", answer: ["10", "10 years"], explanation: "Trademarks can be renewed indefinitely every 10 years." },

    // Plagiarism, Citation, & Tools (26-40)
    { question: "The practice of taking someone else's work or ideas and passing them off as one's own.", answer: ["Plagiarism"], explanation: "A major ethical and legal violation in research." },
    { question: "Verbatim duplication of text without quotation marks or source attribution.", answer: ["Direct Copying"], explanation: "The most blatant form of plagiarism." },
    { question: "Restructuring sentences while retaining the original ideas without providing citation.", answer: ["Improper Paraphrase", "Improper Paraphrasing"], explanation: "You must cite even if you change the words." },
    { question: "Reusing one's own previously published research without proper disclosure.", answer: ["Self-Plagiarism", "Self Plagiarism"], explanation: "Academia requires transparency even for your own past work." },
    { question: "A commercial text-matching engine used by institutions to verify paper originality.", answer: ["Turnitin"], explanation: "The standard tool used by HEIs globally." },
    { question: "The percentage score generated by Turnitin highlighting matched text blocks.", answer: ["Similarity Index", "Similarity Score"], explanation: "A high index requires human evaluation to check for plagiarism." },
    { question: "A formal reference placed directly within the body of your paper to identify a source.", answer: ["Citation", "In-text Citation"], explanation: "Points the reader to the full reference list." },
    { question: "A complete list of all the sources you have cited, appearing at the end of your paper.", answer: ["Referencing", "Reference List", "Bibliography"], explanation: "Contains full publication details." },
    { question: "The citation style prioritizing the publication year (Author-Date format) used in social sciences.", answer: ["APA", "American Psychological Association"], explanation: "APA focuses heavily on how recent the data is." },
    { question: "The citation style prioritizing exact location (Author-Page format) used in arts and humanities.", answer: ["MLA", "Modern Language Association"], explanation: "MLA helps track exact literary quotes." },
    { question: "The citation style employing superscript footnote numbers, common in history.", answer: ["Chicago", "Chicago Style", "CMOS"], explanation: "Keeps the main text clean of parenthesis." },
    { question: "The process of searching documents to determine if an invention is already known or patented.", answer: ["Patent Searching"], explanation: "Prevents duplicate research." },
    { question: "Knowledge or technology that was already publicly available before a patent filing date.", answer: ["Prior Art"], explanation: "If it is in the prior art, you cannot patent it." },
    { question: "An APA citation where the author's name is used as part of the actual sentence structure.", answer: ["Narrative Citation"], explanation: "e.g., 'According to Smith (2019)...'" },
    { question: "An APA citation placed entirely inside parentheses at the end of a sentence.", answer: ["Parenthetical Citation"], explanation: "e.g., '(Smith, 2019)'." },

    // Research Problems & Hypotheses (41-50)
    { question: "An area, topic, or issue not adequately explored or explained in existing literature.", answer: ["Research Gap"], explanation: "The foundation of a new academic study." },
    { question: "A clear description of the specific issue or challenge your study seeks to address.", answer: ["Problem Statement"], explanation: "Narrates what is wrong and why it matters." },
    { question: "A problem focusing on real-world operational challenges aiming for immediate, actionable solutions.", answer: ["Practical Research Problem", "Practical Problem"], explanation: "Solves immediate issues in the workplace or society." },
    { question: "A problem focusing on conceptual gaps or unverified models to expand academic literature.", answer: ["Theoretical Research Problem", "Theoretical Problem"], explanation: "Solves debates in academic theory." },
    { question: "Questions the study aims to answer, helping researchers stay focused on the main purpose.", answer: ["Research Questions"], explanation: "Directs the specific data collection." },
    { question: "A testable prediction stating what the researcher expects to happen.", answer: ["Hypothesis"], explanation: "Must be verifiable through data." },
    { question: "The hypothesis stating there is NO significant difference or relationship between variables.", answer: ["Null Hypothesis", "Null"], explanation: "The default assumption that statistics try to reject." },
    { question: "The hypothesis stating there IS a significant difference or relationship between variables.", answer: ["Alternative Hypothesis", "Alternative"], explanation: "The researcher's actual prediction." },
    { question: "Type of IP protecting confidential business formulas or proprietary commercial data.", answer: ["Trade Secrets", "Trade Secret"], explanation: "Protected as long as they remain confidential." },
    { question: "Statutory fine amounts for IP infringement under RA 8293 can reach up to this maximum amount.", answer: ["1,500,000", "1500000", "P1,500,000", "1.5M"], explanation: "Fines range from 50k to 1.5M." },

    // Qualitative Designs (51-60)
    { question: "A research approach analyzing non-numerical data to understand the 'WHY' and 'HOW'.", answer: ["Qualitative", "Qualitative Research"], explanation: "Relies on words, interviews, and observations." },
    { question: "Qualitative design exploring human experience represented in chronological textual stories.", answer: ["Narrative", "Narrative Research"], explanation: "Focuses on the timeline of personal stories." },
    { question: "Qualitative design exploring the common or shared experiences of several people.", answer: ["Phenomenology"], explanation: "Looks for the essence of a shared phenomenon." },
    { question: "Qualitative design used to develop a new theory based on patterns found in the data.", answer: ["Grounded Theory"], explanation: "The theory is 'grounded' in the participant data." },
    { question: "Qualitative design focusing on understanding people and cultures in their natural environment.", answer: ["Ethnography"], explanation: "Requires deep cultural immersion." },
    { question: "Qualitative design providing a detailed, in-depth investigation of one specific entity or event.", answer: ["Case Study"], explanation: "Looks deeply into a single bounded system." },
    { question: "A technique used to increase findings' credibility by using multiple data sources or methods.", answer: ["Triangulation"], explanation: "Cross-verifies data from different angles." },
    { question: "A type of triangulation that uses multiple researchers to observe the same phenomenon.", answer: ["Investigator Triangulation", "Investigator"], explanation: "Reduces individual researcher bias." },
    { question: "A type of triangulation that uses different perspectives to analyze the same data.", answer: ["Theoretical Triangulation", "Theoretical"], explanation: "Applies multiple theories to the same dataset." },
    { question: "Qualitative data generally consists of words, observations, and transcripts from:", answer: ["Interviews", "Interview"], explanation: "The primary method of gathering qualitative narratives." },

    // Quantitative Designs (61-70)
    { question: "A research approach collecting numerical data and using statistical analysis to measure variables.", answer: ["Quantitative", "Quantitative Research"], explanation: "Relies on numbers and objective measurement." },
    { question: "Quantitative design that simply details the current situation or characteristics of a group.", answer: ["Descriptive", "Descriptive Research"], explanation: "Often uses surveys to establish baseline data." },
    { question: "Quantitative design examining the relationship between variables without manipulating them.", answer: ["Correlational", "Correlational Research"], explanation: "Shows how variables move together." },
    { question: "Quantitative design examining an intervention using existing groups that are not randomly assigned.", answer: ["Quasi-Experimental", "Quasi-Experimental Research", "Quasi Experimental"], explanation: "Used when random assignment is impossible." },
    { question: "Quantitative design testing cause-and-effect by manipulating variables with random assignment.", answer: ["Experimental", "Experimental Research", "True Experimental"], explanation: "The most rigorous quantitative design." },
    { question: "A systematic, cyclical study conducted by practitioners to improve a real situation.", answer: ["Action Research"], explanation: "Used locally by teachers and administrators." },
    { question: "The first step in the Action Research cycle.", answer: ["Planning", "Plan"], explanation: "Identify the problem and plan a solution." },
    { question: "The second step in the Action Research cycle.", answer: ["Acting", "Act"], explanation: "Implement the planned solution." },
    { question: "The third step in the Action Research cycle.", answer: ["Observing", "Observe"], explanation: "Collect data and monitor the results." },
    { question: "The final step in the Action Research cycle before it repeats.", answer: ["Reflecting", "Reflect"], explanation: "Evaluate results and identify improvements." },

    // Mixed Method & Technology (71-80)
    { question: "A research approach combining both numerical and descriptive data in one study.", answer: ["Mixed-Method", "Mixed Method", "Mixed-Method Research"], explanation: "Provides a more complete understanding." },
    { question: "Mixed-method design where quantitative and qualitative data are collected separately at the same time.", answer: ["Convergent", "Convergent Design"], explanation: "Integrates two simultaneous data streams." },
    { question: "Mixed-method design where quantitative data is collected first, followed by qualitative data to explain it.", answer: ["Explanatory Sequential", "Explanatory Sequential Design", "Explanatory"], explanation: "Words explain the numbers." },
    { question: "Mixed-method design where qualitative data is collected first, followed by quantitative data to test it.", answer: ["Exploratory Sequential", "Exploratory Sequential Design", "Exploratory"], explanation: "Numbers test the initial words." },
    { question: "Digital tools and systems used to support research activities.", answer: ["Technology"], explanation: "Assists in searching, collecting, and analyzing data." },
    { question: "A digital tool widely used to create online questionnaires and collect responses.", answer: ["Google Forms"], explanation: "Standard tool for remote quantitative surveys." },
    { question: "A search engine specifically designed to help locate scholarly literature and academic papers.", answer: ["Google Scholar"], explanation: "Filters out non-academic web results." },
    { question: "A Microsoft tool used to organize numerical data and perform basic statistical calculations.", answer: ["Microsoft Excel", "Excel"], explanation: "Standard spreadsheet application." },
    { question: "A specific digital tool that helps researchers organize references and easily create citations.", answer: ["Zotero"], explanation: "A powerful reference management software." },
    { question: "An international database system provided by WIPO used to search for patent information.", answer: ["Patentscope", "WIPO Patentscope"], explanation: "Used for global prior art searches." }
];

// ---------------------------------------------------------
// ADD QUESTION TYPES 
// ---------------------------------------------------------
mcData.forEach(q => q.type = "mc");
identData.forEach(q => q.type = "ident");


// ==========================================
// APP LOGIC & TRACKERS (WITH LOCAL STORAGE)
// ==========================================
let totalAnswered = parseInt(localStorage.getItem("profed9_answered")) || 0;
let totalCorrect = parseInt(localStorage.getItem("profed9_correct")) || 0;
let totalIncorrect = parseInt(localStorage.getItem("profed9_incorrect")) || 0;
let wrongQuestions = JSON.parse(localStorage.getItem("profed9_wrong")) || [];

let currentQuizData = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let currentMode = ""; 

const dashboard = document.getElementById("dashboard-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const identContainer = document.getElementById("identification-container");
const identInput = document.getElementById("ident-input");
const submitIdentBtn = document.getElementById("submit-ident-btn");
const nextBtn = document.getElementById("next-btn");
const questionCounter = document.getElementById("question-counter");
const explanationBox = document.getElementById("explanation-box");
const explanationTitle = document.getElementById("explanation-title");
const explanationText = document.getElementById("explanation-text");

// ---------------------------------------------------------
// DYNAMICALLY CREATE BUTTONS
// ---------------------------------------------------------
const retryBtn = document.createElement("button");
retryBtn.id = "retry-btn";
retryBtn.className = "hidden";
retryBtn.style.marginTop = "20px";
retryBtn.style.backgroundColor = "#e53e3e"; 
retryBtn.style.color = "white";
retryBtn.style.padding = "12px 24px";
retryBtn.style.border = "none";
retryBtn.style.borderRadius = "4px";
retryBtn.style.fontSize = "1rem";
retryBtn.style.fontWeight = "bold";
retryBtn.style.cursor = "pointer";
retryBtn.style.width = "100%";
retryBtn.addEventListener("click", () => startQuiz(wrongQuestions, "retry"));

const clearBtn = document.createElement("button");
clearBtn.id = "clear-btn";
clearBtn.textContent = "🗑️ Clear Saved Progress";
clearBtn.style.marginTop = "10px";
clearBtn.style.backgroundColor = "transparent";
clearBtn.style.color = "#a0aec0";
clearBtn.style.border = "1px solid #4a5568";
clearBtn.style.padding = "10px 24px";
clearBtn.style.borderRadius = "4px";
clearBtn.style.cursor = "pointer";
clearBtn.style.width = "100%";
clearBtn.addEventListener("click", () => {
    if(confirm("Are you sure you want to reset all your scores and missed questions?")) {
        // Clear only ProfEd 9 data
        localStorage.removeItem("profed9_answered");
        localStorage.removeItem("profed9_correct");
        localStorage.removeItem("profed9_incorrect");
        localStorage.removeItem("profed9_wrong");
        totalAnswered = 0; totalCorrect = 0; totalIncorrect = 0; wrongQuestions = [];
        updateDashboardStats();
    }
});

dashboard.appendChild(retryBtn);
dashboard.appendChild(clearBtn);

// Listeners
document.getElementById("mode-mc-btn").addEventListener("click", () => startQuiz(mcData, "mc"));
document.getElementById("mode-ident-btn").addEventListener("click", () => startQuiz(identData, "ident"));
document.getElementById("return-btn").addEventListener("click", returnToDashboard);
document.getElementById("restart-btn").addEventListener("click", returnToDashboard);
nextBtn.addEventListener("click", loadNextQuestion);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateDashboardStats() {
    document.getElementById("stat-answered").textContent = totalAnswered;
    document.getElementById("stat-correct").textContent = totalCorrect;
    document.getElementById("stat-incorrect").textContent = totalIncorrect;
    
    let accuracy = totalAnswered === 0 ? 0 : Math.round((totalCorrect / totalAnswered) * 100);
    document.getElementById("stat-accuracy").textContent = accuracy + "%";

    if (wrongQuestions.length > 0) {
        retryBtn.classList.remove("hidden");
        retryBtn.textContent = `🚨 Retry Missed Questions (${wrongQuestions.length})`;
    } else {
        retryBtn.classList.add("hidden");
    }
}

function returnToDashboard() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    dashboard.classList.remove("hidden");
    updateDashboardStats();
}

function startQuiz(dataArray, mode) {
    currentQuizData = [...dataArray]; 
    shuffleArray(currentQuizData);    
    
    currentMode = mode;
    currentQuestionIndex = 0;
    currentScore = 0;
    
    dashboard.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = currentQuizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuizData.length}`;

    if (currentQuestion.type === "mc") {
        optionsContainer.classList.remove("hidden");
        shuffleArray(currentQuestion.options);
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.addEventListener("click", () => selectAnswer(button, option, currentQuestion.answer, currentQuestion.explanation));
            optionsContainer.appendChild(button);
        });
    } else if (currentQuestion.type === "ident") {
        identContainer.classList.remove("hidden");
        submitIdentBtn.onclick = () => {
            selectAnswer(null, identInput.value.trim(), currentQuestion.answer, currentQuestion.explanation);
        };
    }
}

function selectAnswer(button, selected, correct, explanation) {
    const normalizedSelected = selected.trim().toLowerCase();
    
    const isCorrect = Array.isArray(correct) 
        ? correct.some(ans => normalizedSelected === ans.trim().toLowerCase())
        : normalizedSelected === correct.trim().toLowerCase();

    const displayAnswer = Array.isArray(correct) ? correct[0] : correct;
    const currentQuestion = currentQuizData[currentQuestionIndex];
    
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach(btn => btn.disabled = true);
    identInput.disabled = true;
    submitIdentBtn.disabled = true;

    totalAnswered++;
    if (isCorrect) {
        totalCorrect++;
        currentScore++;
        if (button) button.classList.add("correct");
        
        explanationBox.className = "explanation-correct";
        explanationTitle.textContent = "CORRECT";
        explanationTitle.style.color = "#48bb78";

        wrongQuestions = wrongQuestions.filter(q => q.question !== currentQuestion.question);
    } else {
        totalIncorrect++;
        if (button) button.classList.add("incorrect");
        
        explanationBox.className = "explanation-incorrect";
        explanationTitle.textContent = "NOT QUITE";
        explanationTitle.style.color = "#f56565";

        if (!wrongQuestions.some(q => q.question === currentQuestion.question)) {
            wrongQuestions.push(currentQuestion);
        }
    }

    localStorage.setItem("profed9_answered", totalAnswered);
    localStorage.setItem("profed9_correct", totalCorrect);
    localStorage.setItem("profed9_incorrect", totalIncorrect);
    localStorage.setItem("profed9_wrong", JSON.stringify(wrongQuestions));

    explanationText.innerHTML = `<strong>Answer:</strong> ${displayAnswer}<br><br><strong>📚 More Info:</strong> ${explanation}`;
    
    explanationBox.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        loadQuestion();
    } else {
        quizScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        document.getElementById("final-score").textContent = `You scored ${currentScore} out of ${currentQuizData.length}`;
    }
}

function resetState() {
    explanationBox.classList.add("hidden");
    nextBtn.classList.add("hidden");
    optionsContainer.innerHTML = "";
    optionsContainer.classList.add("hidden");
    identContainer.classList.add("hidden");
    identInput.value = "";
    identInput.disabled = false;
    submitIdentBtn.disabled = false;
}

updateDashboardStats();