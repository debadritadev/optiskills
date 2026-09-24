// =============================================
// OptiSkill – Shared Data & Utilities
// =============================================
// NOTE: Authentication and all localStorage persistence have been
// moved to js/supabase.js (Supabase Auth + database).
// This file retains static content only: quiz data, color maps,
// and the question abstraction layer.
// =============================================


// ---- INTERNSHIPS DATA ----
const INTERNSHIPS = [
  {
    id: 1, title: 'Web Development Intern', company: 'TechCorp India', logo: 'TC',
    location: 'Remote', duration: '3 Months', stipend: '₹15,000/month',
    domain: 'Technology', skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    deadline: '2024-10-30', type: 'Paid',
    desc: 'Build and maintain web applications. Collaborate with senior developers. Exposure to full-stack development using React and Node.js.',
    color: 'blue'
  },
  {
    id: 2, title: 'Data Science Intern', company: 'Analytics Hub', logo: 'AH',
    location: 'Bangalore', duration: '2 Months', stipend: '₹12,000/month',
    domain: 'Data Science', skills: ['Python', 'Pandas', 'ML', 'SQL'],
    deadline: '2024-11-15', type: 'Paid',
    desc: 'Work on real datasets, build predictive models, and present data-driven insights. Hands-on experience with scikit-learn and Tableau.',
    color: 'green'
  },
  {
    id: 3, title: 'UI/UX Design Intern', company: 'DesignWave', logo: 'DW',
    location: 'Remote', duration: '2 Months', stipend: '₹8,000/month',
    domain: 'Design', skills: ['Figma', 'Adobe XD', 'Prototyping'],
    deadline: '2024-10-20', type: 'Paid',
    desc: 'Design intuitive user interfaces for mobile and web applications. Conduct user research and usability testing.',
    color: 'purple'
  },
  {
    id: 4, title: 'Marketing Intern', company: 'BrandBoost', logo: 'BB',
    location: 'Delhi', duration: '3 Months', stipend: '₹6,000/month',
    domain: 'Marketing', skills: ['SEO', 'Social Media', 'Content Writing'],
    deadline: '2024-11-01', type: 'Paid',
    desc: 'Manage social media campaigns, create content, and analyze marketing metrics to boost brand awareness.',
    color: 'pink'
  },
  {
    id: 5, title: 'Cloud Computing Intern', company: 'CloudSphere', logo: 'CS',
    location: 'Remote', duration: '4 Months', stipend: '₹18,000/month',
    domain: 'Technology', skills: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    deadline: '2024-12-01', type: 'Paid',
    desc: 'Assist in cloud infrastructure setup, maintenance, and deployment pipelines using AWS and Azure services.',
    color: 'indigo'
  },
  {
    id: 6, title: 'Finance & Accounting Intern', company: 'FinServ Ltd', logo: 'FS',
    location: 'Mumbai', duration: '2 Months', stipend: '₹7,000/month',
    domain: 'Finance', skills: ['Excel', 'Tally', 'Financial Modeling'],
    deadline: '2024-10-25', type: 'Paid',
    desc: 'Assist the finance team with reporting, reconciliation, and financial analysis using Excel and Tally.',
    color: 'yellow'
  },
];

// ---- SCHOLARSHIPS DATA ----
const SCHOLARSHIPS = [
  {
    id: 1, title: 'National Merit Scholarship 2024', org: 'Ministry of Education', logo: 'ME',
    amount: '₹50,000/year', eligibility: '10th/12th with 85%+', deadline: '2024-11-30',
    category: 'Merit', domain: 'All Streams',
    desc: 'Awarded to students excelling academically with financial need. Open to all Indian students.',
    color: 'blue'
  },
  {
    id: 2, title: 'STEM Excellence Award', org: 'TechFoundation India', logo: 'TF',
    amount: '₹75,000', eligibility: 'B.Tech / B.Sc students', deadline: '2024-10-15',
    category: 'Merit', domain: 'Engineering/Science',
    desc: 'Supporting future innovators in STEM. Essay submission and academic transcript required.',
    color: 'purple'
  },
  {
    id: 3, title: 'Girls Empowerment Scholarship', org: 'EmpowerHer NGO', logo: 'EH',
    amount: '₹30,000', eligibility: 'Female students, any stream', deadline: '2024-11-10',
    category: 'Special Category', domain: 'All Streams',
    desc: 'Aimed at empowering female students by reducing financial barriers to higher education.',
    color: 'pink'
  },
  {
    id: 4, title: 'Sports & Culture Scholarship', org: 'Youth India Council', logo: 'YI',
    amount: '₹25,000', eligibility: 'State/National level athletes/artists', deadline: '2024-12-01',
    category: 'Sports/Arts', domain: 'All Streams',
    desc: 'For students who have excelled in sports or arts at a state or national level.',
    color: 'green'
  },
  {
    id: 5, title: 'Minority Community Aid', org: 'Waqf Board / NMMS', logo: 'WB',
    amount: '₹40,000/year', eligibility: 'Minority community students', deadline: '2024-10-31',
    category: 'Need-based', domain: 'All Streams',
    desc: 'Financial aid for students from minority communities pursuing higher education.',
    color: 'orange'
  },
  {
    id: 6, title: 'Research & Innovation Grant', org: 'IIT Alumni Network', logo: 'IA',
    amount: '₹1,00,000', eligibility: 'PG / PhD students with research project', deadline: '2024-11-20',
    category: 'Research', domain: 'Science & Technology',
    desc: 'Supports postgraduate students engaged in innovative research with high societal impact.',
    color: 'indigo'
  },
];

// ---- JOBS DATA ----
const PLACEMENTS = [
  {
    id: 1, title: 'Software Development Engineer', company: 'Infosys', logo: 'IS',
    location: 'Pune / Bangalore', package: '₹6.5 LPA', experience: 'Fresher',
    domain: 'Technology', skills: ['Java', 'DSA', 'Problem Solving', 'SQL'],
    deadline: '2024-10-31', type: 'Full-Time',
    desc: 'Join Infosys as an SDE and work on cutting-edge enterprise solutions for global clients.',
    color: 'blue'
  },
  {
    id: 2, title: 'Data Analyst', company: 'Flipkart', logo: 'FK',
    location: 'Bangalore', package: '₹9 LPA', experience: 'Fresher',
    domain: 'Data', skills: ['SQL', 'Python', 'Excel', 'Tableau'],
    deadline: '2024-11-10', type: 'Full-Time',
    desc: 'Analyze e-commerce data to derive actionable business insights. Work with large-scale datasets.',
    color: 'yellow'
  },
  {
    id: 3, title: 'Product Manager Trainee', company: 'Paytm', logo: 'PT',
    location: 'Noida', package: '₹7 LPA', experience: 'Fresher',
    domain: 'Product', skills: ['Analytical Thinking', 'Excel', 'Communication', 'Agile'],
    deadline: '2024-11-05', type: 'Full-Time',
    desc: 'Assist product managers in defining product roadmaps, running sprints and analyzing user data.',
    color: 'indigo'
  },
  {
    id: 4, title: 'HR Executive', company: 'HDFC Bank', logo: 'HB',
    location: 'Mumbai', package: '₹5.5 LPA', experience: 'Fresher',
    domain: 'HR', skills: ['Communication', 'MS Office', 'Recruiting', 'HRMS'],
    deadline: '2024-10-20', type: 'Full-Time',
    desc: 'Manage recruitment, onboarding, and employee relations for one of India\'s top banks.',
    color: 'green'
  },
  {
    id: 5, title: 'UI Developer', company: 'Wipro', logo: 'WP',
    location: 'Remote / Hyderabad', package: '₹6 LPA', experience: 'Fresher',
    domain: 'Technology', skills: ['React', 'CSS', 'JavaScript', 'Git'],
    deadline: '2024-11-25', type: 'Full-Time',
    desc: 'Build pixel-perfect, responsive UIs for enterprise clients using React and modern CSS.',
    color: 'purple'
  },
  {
    id: 6, title: 'Digital Marketing Executive', company: 'Zomato', logo: 'ZM',
    location: 'Gurugram', package: '₹5 LPA', experience: 'Fresher',
    domain: 'Marketing', skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
    deadline: '2024-11-15', type: 'Full-Time',
    desc: 'Drive brand campaigns across digital channels for Zomato\'s food delivery and dining platforms.',
    color: 'red'
  },
];

// ---- SKILL ASSESSMENTS ----
const ASSESSMENTS = [
  {
    id: 'python', title: 'Python Basics', icon: 'fab fa-python', color: 'blue',
    questions: 20, time: '30 mins', level: 'Beginner', badge: '🐍',
    quizzes: [
  {
    "q": "What is the output of print(2**3)?",
    "options": [
      "6",
      "8",
      "9",
      "None"
    ],
    "ans": 1
  },
  {
    "q": "Which keyword is used to define a function in Python?",
    "options": [
      "function",
      "def",
      "func",
      "define"
    ],
    "ans": 1
  },
  {
    "q": "What data type is the result of 5/2 in Python 3?",
    "options": [
      "int",
      "float",
      "str",
      "bool"
    ],
    "ans": 1
  },
  {
    "q": "Which of these is a mutable data type?",
    "options": [
      "Tuple",
      "String",
      "List",
      "Int"
    ],
    "ans": 2
  },
  {
    "q": "What does len([1,2,3]) return?",
    "options": [
      "2",
      "3",
      "4",
      "Error"
    ],
    "ans": 1
  },
  {
    "q": "Which method adds an element to the end of a list?",
    "options": [
      "add()",
      "append()",
      "extend()",
      "insert()"
    ],
    "ans": 1
  },
  {
    "q": "How do you insert comments in Python code?",
    "options": [
      "// comment",
      "/* comment */",
      "# comment",
      "-- comment"
    ],
    "ans": 2
  },
  {
    "q": "Which function converts a string to lowercase?",
    "options": [
      "lower()",
      "toLower()",
      "toLowerCase()",
      "casefold()"
    ],
    "ans": 0
  },
  {
    "q": "What is the output of bool(0)?",
    "options": [
      "True",
      "False",
      "None",
      "0"
    ],
    "ans": 1
  },
  {
    "q": "Which collection is ordered, changeable, and allows duplicates?",
    "options": [
      "Set",
      "Dictionary",
      "List",
      "Tuple"
    ],
    "ans": 2
  },
  {
    "q": "What keyword is used to handle exceptions in Python?",
    "options": [
      "catch",
      "except",
      "rescue",
      "try-catch"
    ],
    "ans": 1
  },
  {
    "q": "What does the break statement do?",
    "options": [
      "Restarts loop",
      "Exits current loop",
      "Skips current iteration",
      "Stops program"
    ],
    "ans": 1
  },
  {
    "q": "Which operator is used for integer division in Python?",
    "options": [
      "/",
      "//",
      "%",
      "div"
    ],
    "ans": 1
  },
  {
    "q": "What is the correct file extension for Python files?",
    "options": [
      ".pt",
      ".py",
      ".python",
      ".pyt"
    ],
    "ans": 1
  },
  {
    "q": "What is the output of print(\"Python\"[1])?",
    "options": [
      "P",
      "y",
      "t",
      "h"
    ],
    "ans": 1
  },
  {
    "q": "How do you create a dictionary in Python?",
    "options": [
      "[]",
      "{}",
      "()",
      "set()"
    ],
    "ans": 1
  },
  {
    "q": "Which library is primarily used for numeric array operations?",
    "options": [
      "NumPy",
      "Flask",
      "Django",
      "Matplotlib"
    ],
    "ans": 0
  },
  {
    "q": "What is a lambda function in Python?",
    "options": [
      "A loop construct",
      "An anonymous inline function",
      "A built-in class",
      "A decorator"
    ],
    "ans": 1
  },
  {
    "q": "Which statement is used to create a generator in Python?",
    "options": [
      "return",
      "yield",
      "produce",
      "generate"
    ],
    "ans": 1
  },
  {
    "q": "What will type({}) return in Python?",
    "options": [
      "set",
      "dict",
      "list",
      "tuple"
    ],
    "ans": 1
  },
  {
    "q": "Which method removes all items from a dictionary?",
    "options": [
      "clear()",
      "remove()",
      "clean()",
      "del()"
    ],
    "ans": 0
  },
  {
    "q": "How do you start a for loop over a sequence of 0 to 4?",
    "options": [
      "for i in range(5):",
      "for i in range(4):",
      "for (i=0; i<5; i++)",
      "for i in 5:"
    ],
    "ans": 0
  },
  {
    "q": "What is the output of print(10 % 3)?",
    "options": [
      "3",
      "1",
      "0",
      "3.33"
    ],
    "ans": 1
  },
  {
    "q": "Which built-in module provides math functions like sqrt?",
    "options": [
      "numeric",
      "math",
      "algebra",
      "calc"
    ],
    "ans": 1
  },
  {
    "q": "Which method is called when an object is instantiated?",
    "options": [
      "__new__",
      "__init__",
      "__start__",
      "__construct__"
    ],
    "ans": 1
  }
]
  },
  {
    id: 'html-css', title: 'HTML & CSS', icon: 'fab fa-html5', color: 'orange',
    questions: 20, time: '30 mins', level: 'Beginner', badge: '🌐',
    quizzes: [
  {
    "q": "Which tag creates a hyperlink?",
    "options": [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    "ans": 1
  },
  {
    "q": "CSS stands for?",
    "options": [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    "ans": 2
  },
  {
    "q": "Which HTML attribute specifies an alternate text for an image?",
    "options": [
      "title",
      "src",
      "alt",
      "href"
    ],
    "ans": 2
  },
  {
    "q": "How do you select elements with class \"box\" in CSS?",
    "options": [
      "#box",
      ".box",
      "box",
      "*box"
    ],
    "ans": 1
  },
  {
    "q": "What does the <br> tag do?",
    "options": [
      "Bold text",
      "Line break",
      "Background color",
      "Border"
    ],
    "ans": 1
  },
  {
    "q": "Which HTML element represents the top-level heading?",
    "options": [
      "<h6>",
      "<head>",
      "<header>",
      "<h1>"
    ],
    "ans": 3
  },
  {
    "q": "Which CSS property controls the text color?",
    "options": [
      "text-color",
      "font-color",
      "color",
      "text-style"
    ],
    "ans": 2
  },
  {
    "q": "What is the default display value of a <div> element?",
    "options": [
      "inline",
      "inline-block",
      "block",
      "flex"
    ],
    "ans": 2
  },
  {
    "q": "Which CSS property is used to create space inside an element border?",
    "options": [
      "margin",
      "padding",
      "border-spacing",
      "gap"
    ],
    "ans": 1
  },
  {
    "q": "Which HTML5 element is used for native self-contained audio?",
    "options": [
      "<sound>",
      "<audio>",
      "<media>",
      "<music>"
    ],
    "ans": 1
  },
  {
    "q": "Which CSS unit is relative to the font-size of the root element (<html>)?",
    "options": [
      "em",
      "rem",
      "%",
      "vh"
    ],
    "ans": 1
  },
  {
    "q": "Which HTML attribute makes an input field required before submission?",
    "options": [
      "validate",
      "required",
      "mandatory",
      "need"
    ],
    "ans": 1
  },
  {
    "q": "In the CSS box model, what surrounds the padding?",
    "options": [
      "Margin",
      "Content",
      "Border",
      "Outline"
    ],
    "ans": 2
  },
  {
    "q": "Which CSS property changes the font of an element?",
    "options": [
      "font-style",
      "font-family",
      "font-weight",
      "text-family"
    ],
    "ans": 1
  },
  {
    "q": "Which HTML tag creates an unordered bulleted list?",
    "options": [
      "<ol>",
      "<ul>",
      "<li>",
      "<list>"
    ],
    "ans": 1
  },
  {
    "q": "How do you make text bold in CSS?",
    "options": [
      "font-weight: bold",
      "font-style: bold",
      "text-decoration: bold",
      "bold: true"
    ],
    "ans": 0
  },
  {
    "q": "Which CSS flexbox property aligns items along the cross axis?",
    "options": [
      "justify-content",
      "align-items",
      "flex-direction",
      "align-content"
    ],
    "ans": 1
  },
  {
    "q": "Which HTML element specifies navigation links?",
    "options": [
      "<nav>",
      "<navigate>",
      "<menu>",
      "<links>"
    ],
    "ans": 0
  },
  {
    "q": "What is the purpose of z-index in CSS?",
    "options": [
      "Zoom level",
      "Stack order of elements",
      "Opacity level",
      "Border width"
    ],
    "ans": 1
  },
  {
    "q": "Which CSS property makes an element hide while still taking up space?",
    "options": [
      "display: none",
      "visibility: hidden",
      "opacity: 0",
      "position: absolute"
    ],
    "ans": 1
  },
  {
    "q": "What does CSS Grid property grid-template-columns do?",
    "options": [
      "Defines rows",
      "Defines column track sizes",
      "Aligns items",
      "Sets grid gap"
    ],
    "ans": 1
  },
  {
    "q": "Which HTML attribute defines inline CSS styles?",
    "options": [
      "class",
      "style",
      "css",
      "theme"
    ],
    "ans": 1
  },
  {
    "q": "Which semantic HTML tag represents independent, self-contained content?",
    "options": [
      "<section>",
      "<article>",
      "<aside>",
      "<div>"
    ],
    "ans": 1
  },
  {
    "q": "How do you target an element with id \"header\" in CSS?",
    "options": [
      ".header",
      "#header",
      "*header",
      "header"
    ],
    "ans": 1
  },
  {
    "q": "Which CSS pseudo-class matches when a user hovers over an element?",
    "options": [
      ":hover",
      ":active",
      ":focus",
      ":visited"
    ],
    "ans": 0
  }
]
  },
  {
    id: 'aptitude', title: 'Aptitude & Reasoning', icon: 'fas fa-calculator', color: 'purple',
    questions: 20, time: '30 mins', level: 'Intermediate', badge: '🧠',
    quizzes: [
  {
    "q": "A train travels 60 km in 1 hour. How far in 2.5 hours?",
    "options": [
      "120 km",
      "150 km",
      "130 km",
      "100 km"
    ],
    "ans": 1
  },
  {
    "q": "What comes next: 2, 4, 8, 16, __?",
    "options": [
      "20",
      "24",
      "32",
      "30"
    ],
    "ans": 2
  },
  {
    "q": "If MANGO = 14, what is APPLE?",
    "options": [
      "15",
      "16",
      "14",
      "17"
    ],
    "ans": 0
  },
  {
    "q": "A person buys for ₹100, sells for ₹120. Profit %?",
    "options": [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "ans": 2
  },
  {
    "q": "Which is the odd one out: Circle, Square, Triangle, Cylinder?",
    "options": [
      "Circle",
      "Square",
      "Triangle",
      "Cylinder"
    ],
    "ans": 3
  },
  {
    "q": "What is 15% of 200?",
    "options": [
      "25",
      "30",
      "35",
      "40"
    ],
    "ans": 1
  },
  {
    "q": "If 5 workers complete a job in 12 days, how many days for 10 workers?",
    "options": [
      "6 days",
      "24 days",
      "5 days",
      "8 days"
    ],
    "ans": 0
  },
  {
    "q": "Next term in series: 3, 7, 15, 31, __?",
    "options": [
      "63",
      "62",
      "60",
      "64"
    ],
    "ans": 0
  },
  {
    "q": "Average of 10, 20, 30, 40, 50 is?",
    "options": [
      "25",
      "30",
      "35",
      "28"
    ],
    "ans": 1
  },
  {
    "q": "A clock shows 3:00. What is the angle between hour and minute hands?",
    "options": [
      "45°",
      "60°",
      "90°",
      "120°"
    ],
    "ans": 2
  },
  {
    "q": "Find missing letter in sequence: B, D, F, H, __?",
    "options": [
      "I",
      "J",
      "K",
      "L"
    ],
    "ans": 1
  },
  {
    "q": "If CAT is coded as 3120, how is DOG coded?",
    "options": [
      "4157",
      "4158",
      "3157",
      "4167"
    ],
    "ans": 0
  },
  {
    "q": "Speed = Distance / __?",
    "options": [
      "Acceleration",
      "Time",
      "Velocity",
      "Mass"
    ],
    "ans": 1
  },
  {
    "q": "Square root of 144 is?",
    "options": [
      "11",
      "12",
      "14",
      "16"
    ],
    "ans": 1
  },
  {
    "q": "If day after tomorrow is Friday, what day was yesterday?",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "ans": 0
  },
  {
    "q": "Ratio of boys to girls is 3:2 in a class of 50. Number of boys is?",
    "options": [
      "20",
      "30",
      "25",
      "35"
    ],
    "ans": 1
  },
  {
    "q": "Next prime number after 17 is?",
    "options": [
      "18",
      "19",
      "21",
      "23"
    ],
    "ans": 1
  },
  {
    "q": "A car covers 180 km in 3 hours. Speed in km/h is?",
    "options": [
      "50",
      "60",
      "70",
      "80"
    ],
    "ans": 1
  },
  {
    "q": "Simple Interest on ₹1000 at 10% per annum for 2 years is?",
    "options": [
      "₹100",
      "₹150",
      "₹200",
      "₹250"
    ],
    "ans": 2
  },
  {
    "q": "What comes next in series: 1, 4, 9, 16, 25, __?",
    "options": [
      "30",
      "35",
      "36",
      "49"
    ],
    "ans": 2
  },
  {
    "q": "If 2x + 6 = 14, what is x?",
    "options": [
      "3",
      "4",
      "5",
      "2"
    ],
    "ans": 1
  },
  {
    "q": "Probability of getting a Head in single coin toss is?",
    "options": [
      "1",
      "0.5",
      "0.25",
      "0"
    ],
    "ans": 1
  },
  {
    "q": "Sum of interior angles of a triangle is?",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "ans": 1
  },
  {
    "q": "Perimeter of a square of side 8 cm is?",
    "options": [
      "16 cm",
      "24 cm",
      "32 cm",
      "64 cm"
    ],
    "ans": 2
  },
  {
    "q": "Cube of 4 is?",
    "options": [
      "16",
      "32",
      "64",
      "128"
    ],
    "ans": 2
  }
]
  },
  {
    id: 'communication', title: 'Communication Skills', icon: 'fas fa-comments', color: 'green',
    questions: 20, time: '30 mins', level: 'Beginner', badge: '💬',
    quizzes: [
  {
    "q": "Which of these is the best way to start a formal email?",
    "options": [
      "Hey!",
      "Dear Sir/Madam",
      "Yo!",
      "Hello Friend"
    ],
    "ans": 1
  },
  {
    "q": "Active listening involves?",
    "options": [
      "Talking more",
      "Interrupting",
      "Paying full attention",
      "Checking your phone"
    ],
    "ans": 2
  },
  {
    "q": "What is the purpose of an executive summary?",
    "options": [
      "Tell a story",
      "Summarize key points briefly",
      "Give personal opinion",
      "Entertain the reader"
    ],
    "ans": 1
  },
  {
    "q": "\"I am good\" is a reply to?",
    "options": [
      "How are you?",
      "What time is it?",
      "Where are you?",
      "Goodbye"
    ],
    "ans": 0
  },
  {
    "q": "Non-verbal communication includes?",
    "options": [
      "Writing",
      "Body language",
      "Speaking",
      "Typing"
    ],
    "ans": 1
  },
  {
    "q": "What does maintaining eye contact in an interview communicate?",
    "options": [
      "Aggression",
      "Confidence & attentiveness",
      "Disinterest",
      "Confusion"
    ],
    "ans": 1
  },
  {
    "q": "Which tone is appropriate for professional business correspondence?",
    "options": [
      "Sarcastic",
      "Polite and clear",
      "Arrogant",
      "Overly casual"
    ],
    "ans": 1
  },
  {
    "q": "What should the Subject line in an email be?",
    "options": [
      "Empty",
      "Vague and witty",
      "Concise and descriptive",
      "Extremely long"
    ],
    "ans": 2
  },
  {
    "q": "In interpersonal communication, \"Feedback\" serves to?",
    "options": [
      "Stop conversation",
      "Confirm understanding",
      "Confuse speaker",
      "Show superiority"
    ],
    "ans": 1
  },
  {
    "q": "Which is a major barrier to effective communication?",
    "options": [
      "Clarity",
      "Empathy",
      "Noise and distractions",
      "Open-mindedness"
    ],
    "ans": 2
  },
  {
    "q": "Paraphrasing means?",
    "options": [
      "Copying word-for-word",
      "Restating ideas in your own words",
      "Criticizing the speaker",
      "Changing the topic"
    ],
    "ans": 1
  },
  {
    "q": "Which is an example of formal written communication?",
    "options": [
      "Sticky note",
      "Official memorandum / report",
      "Casual text message",
      "Social media dm"
    ],
    "ans": 1
  },
  {
    "q": "Constructive criticism should focus on?",
    "options": [
      "Personal traits",
      "Behavior & actionable improvement",
      "Blame",
      "Mockery"
    ],
    "ans": 1
  },
  {
    "q": "The 7 Cs of communication include Clarity, Conciseness, and?",
    "options": [
      "Cruelty",
      "Correctness",
      "Carelessness",
      "Chaos"
    ],
    "ans": 1
  },
  {
    "q": "When giving a presentation, the slide content should ideally be?",
    "options": [
      "Crowded walls of text",
      "Clear bullet points & visuals",
      "Completely blank",
      "Only code"
    ],
    "ans": 1
  },
  {
    "q": "A good sign-off for a business email to an external partner is?",
    "options": [
      "Catch ya later!",
      "Sincerely / Best regards",
      "Later!",
      "Peace out"
    ],
    "ans": 1
  },
  {
    "q": "What is the primary objective of negotiation in a workplace?",
    "options": [
      "Winning completely",
      "Reaching a mutually beneficial agreement",
      "Defeating the counterparty",
      "Avoiding discussion"
    ],
    "ans": 1
  },
  {
    "q": "Empathy in communication refers to?",
    "options": [
      "Feeling superior",
      "Understanding and sharing feelings of others",
      "Ignoring problems",
      "Judging others"
    ],
    "ans": 1
  },
  {
    "q": "What is an elevator pitch?",
    "options": [
      "A speech given inside an elevator",
      "A short, persuasive summary of an idea or self",
      "A long technical thesis",
      "A complaint to management"
    ],
    "ans": 1
  },
  {
    "q": "In team communication, what helps prevent misunderstandings?",
    "options": [
      "Assumptions",
      "Asking clarifying questions",
      "Silent treatment",
      "Gossiping"
    ],
    "ans": 1
  },
  {
    "q": "Which channel is best for delivering urgent, sensitive personnel news?",
    "options": [
      "Broadcast email",
      "Direct private meeting/call",
      "Public channel",
      "Text emoji"
    ],
    "ans": 1
  },
  {
    "q": "Which communication style is balanced and respectful of both parties?",
    "options": [
      "Passive",
      "Aggressive",
      "Assertive",
      "Passive-aggressive"
    ],
    "ans": 2
  },
  {
    "q": "What does FYA usually stand for in email correspondence?",
    "options": [
      "For Your Action",
      "For Your Anger",
      "For Your Account",
      "Forget Your Ask"
    ],
    "ans": 0
  },
  {
    "q": "Cultural sensitivity in global communication requires?",
    "options": [
      "Imposing your own habits",
      "Respecting diverse backgrounds and customs",
      "Ignoring differences",
      "Stereotyping"
    ],
    "ans": 1
  },
  {
    "q": "Before speaking in an important meeting, one should?",
    "options": [
      "Speak without thinking",
      "Organize thoughts and listen first",
      "Interrupt the chairperson",
      "Check notifications"
    ],
    "ans": 1
  }
]
  },
  {
    id: 'sql', title: 'SQL & Databases', icon: 'fas fa-database', color: 'indigo',
    questions: 20, time: '30 mins', level: 'Intermediate', badge: '🗄️',
    quizzes: [
  {
    "q": "Which SQL clause filters records?",
    "options": [
      "ORDER BY",
      "GROUP BY",
      "WHERE",
      "SELECT"
    ],
    "ans": 2
  },
  {
    "q": "What does PRIMARY KEY do?",
    "options": [
      "Sorts data",
      "Uniquely identifies rows",
      "Joins tables",
      "Filters duplicates"
    ],
    "ans": 1
  },
  {
    "q": "Which JOIN returns all records from both tables?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    "ans": 3
  },
  {
    "q": "SQL stands for?",
    "options": [
      "Structured Query Language",
      "Simple Query Logic",
      "Stored Queue Language",
      "Standard Query Layer"
    ],
    "ans": 0
  },
  {
    "q": "Which function counts the number of rows?",
    "options": [
      "SUM()",
      "AVG()",
      "COUNT()",
      "MAX()"
    ],
    "ans": 2
  },
  {
    "q": "Which command is used to add new data into a table?",
    "options": [
      "ADD",
      "INSERT INTO",
      "UPDATE",
      "CREATE"
    ],
    "ans": 1
  },
  {
    "q": "Which statement removes all rows from a table without logging individual row deletions?",
    "options": [
      "DELETE",
      "TRUNCATE",
      "DROP",
      "REMOVE"
    ],
    "ans": 1
  },
  {
    "q": "Which SQL keyword is used to sort results in ascending order?",
    "options": [
      "ASC",
      "DESC",
      "SORT",
      "ORDER"
    ],
    "ans": 0
  },
  {
    "q": "Which clause is used with aggregate functions to filter groups?",
    "options": [
      "WHERE",
      "HAVING",
      "ORDER BY",
      "LIMIT"
    ],
    "ans": 1
  },
  {
    "q": "What is a FOREIGN KEY?",
    "options": [
      "A key from another database",
      "A field in one table that refers to PRIMARY KEY in another",
      "A secondary index",
      "An encrypted column"
    ],
    "ans": 1
  },
  {
    "q": "Which SQL statement modifies existing records in a table?",
    "options": [
      "MODIFY",
      "ALTER",
      "UPDATE",
      "CHANGE"
    ],
    "ans": 2
  },
  {
    "q": "Which operator searches for a specified pattern in a column?",
    "options": [
      "IN",
      "LIKE",
      "BETWEEN",
      "MATCH"
    ],
    "ans": 1
  },
  {
    "q": "What does SELECT DISTINCT do?",
    "options": [
      "Sorts data",
      "Returns only unique values",
      "Counts rows",
      "Deletes duplicates from table"
    ],
    "ans": 1
  },
  {
    "q": "Which SQL command completely deletes an existing table and its schema?",
    "options": [
      "DELETE TABLE",
      "DROP TABLE",
      "REMOVE TABLE",
      "CLEAR TABLE"
    ],
    "ans": 1
  },
  {
    "q": "In a LIKE clause, which wildcard matches zero or more characters?",
    "options": [
      "_",
      "%",
      "*",
      "?"
    ],
    "ans": 1
  },
  {
    "q": "Which constraint ensures that all values in a column are unique?",
    "options": [
      "NOT NULL",
      "UNIQUE",
      "CHECK",
      "DEFAULT"
    ],
    "ans": 1
  },
  {
    "q": "Which SQL clause limits the number of returned rows in MySQL/PostgreSQL?",
    "options": [
      "TOP",
      "LIMIT",
      "ROWNUM",
      "MAX"
    ],
    "ans": 1
  },
  {
    "q": "What is an INDEX in SQL primarily used for?",
    "options": [
      "Data encryption",
      "Speeding up query retrieval",
      "Enforcing business logic",
      "Backing up tables"
    ],
    "ans": 1
  },
  {
    "q": "Which JOIN returns all rows from left table and matched rows from right table?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "CROSS JOIN"
    ],
    "ans": 1
  },
  {
    "q": "What does ACID stand for in database transactions?",
    "options": [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Clarity, Integrity, Distribution",
      "Access, Control, Identification, Data",
      "Automation, Concurrency, Indexing, Delivery"
    ],
    "ans": 0
  },
  {
    "q": "Which command creates a new table in SQL?",
    "options": [
      "NEW TABLE",
      "CREATE TABLE",
      "BUILD TABLE",
      "MAKE TABLE"
    ],
    "ans": 1
  },
  {
    "q": "Which function calculates the average value of a numeric column?",
    "options": [
      "MEAN()",
      "AVG()",
      "COUNT()",
      "SUM()"
    ],
    "ans": 1
  },
  {
    "q": "Which keyword groups rows that have the same values into summary rows?",
    "options": [
      "ORDER BY",
      "GROUP BY",
      "MERGE BY",
      "COLLECT BY"
    ],
    "ans": 1
  },
  {
    "q": "What is the default sort order for ORDER BY in SQL?",
    "options": [
      "Descending (DESC)",
      "Ascending (ASC)",
      "Random",
      "Insertion order"
    ],
    "ans": 1
  },
  {
    "q": "Which SQL sublanguage includes commands like GRANT and REVOKE?",
    "options": [
      "DQL",
      "DML",
      "DDL",
      "DCL"
    ],
    "ans": 3
  }
]
  },
];


// ---- COMPANY DUMMY POSTS (kept for reference only — real data comes from Supabase) ----
// const COMPANY_POSTS = [...]; // Removed — company postings are now stored in the 'opportunities' table.



const COLOR_MAP = {
  blue:   { bg: 'bg-blue-100',   text: 'text-blue-700',   badge: 'bg-blue-50 text-blue-600',   btn: 'bg-blue-600 hover:bg-blue-700' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-700', badge: 'bg-purple-50 text-purple-600', btn: 'bg-purple-600 hover:bg-purple-700' },
  green:  { bg: 'bg-green-100',  text: 'text-green-700',  badge: 'bg-green-50 text-green-600',  btn: 'bg-green-600 hover:bg-green-700' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', badge: 'bg-yellow-50 text-yellow-600', btn: 'bg-yellow-500 hover:bg-yellow-600' },
  pink:   { bg: 'bg-pink-100',   text: 'text-pink-700',   badge: 'bg-pink-50 text-pink-600',    btn: 'bg-pink-600 hover:bg-pink-700' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', badge: 'bg-indigo-50 text-indigo-600', btn: 'bg-indigo-600 hover:bg-indigo-700' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-700', badge: 'bg-orange-50 text-orange-600', btn: 'bg-orange-500 hover:bg-orange-600' },
  red:    { bg: 'bg-red-100',    text: 'text-red-700',    badge: 'bg-red-50 text-red-600',      btn: 'bg-red-600 hover:bg-red-700' },
};

// ---- APPLY HELPERS (localStorage — used with dummy listing data) ----
// These work alongside the static INTERNSHIPS / SCHOLARSHIPS / PLACEMENTS arrays.
// When those listings are migrated to Supabase, replace with
// applyToOpportunity() / hasApplied() from js/supabase.js.
function getApplied() {
  return JSON.parse(localStorage.getItem('optiskill_applied') || '[]');
}
function applyTo(id, type) {
  const applied = getApplied();
  const key = type + '-' + id;
  if (!applied.includes(key)) applied.push(key);
  localStorage.setItem('optiskill_applied', JSON.stringify(applied));
}
function isApplied(id, type) {
  return getApplied().includes(type + '-' + id);
}

// logout() shim — delegates to signOut() in js/supabase.js
// All pages call onclick="logout()" — this keeps them working.
function logout() {
  if (typeof signOut === 'function') { signOut(); }
  else { window.location.href = 'index.html'; }
}


// =========================================================================
// QUESTION DATASET ABSTRACTION (BACKEND & DATABASE READY)
// =========================================================================
/**
 * Interface to fetch assessment questions.
 * Designed to be replaced with a future backend/database API call, e.g.:
 * return fetch(`/api/assessments/${assessmentId}/questions`).then(r => r.json());
 */
async function getQuestions(assessmentId) {
  // Temporary mock source: returns the question pool for the requested assessment
  const assessment = ASSESSMENTS.find(a => a.id === assessmentId);
  if (!assessment) return [];
  return [...assessment.quizzes];
}

/**
 * Reusable randomized question selector.
 * Randomly picks 'count' unique questions from a given question dataset.
 */
function selectRandomQuestions(dataset, count = 20) {
  if (!dataset || !dataset.length) return [];
  // Fisher-Yates shuffle on a shallow copy to prevent duplicates
  const pool = [...dataset];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}
