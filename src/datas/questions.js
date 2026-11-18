const questions = [
    {
        id:1,
        question:"what is React ?",
        options:[
            "Programming language",
            "JavaScript Library",
            "Database",
            "Operating System"

        ],
        correctAnswer :"JavaScript Library"
    },
    {
        id:2,
        question : "Which hook is used to manage state in React ?",
        options: [
            "useEffect",
            "useRef",
            "useState",
            "useMemo"
        ],
        correctAnswer : "useState"

    },
    {
        id:3,
        question :"Which method is used to display list items in React?",
        options :[
             "filter()",
             "map()",
             "reduce()",
             "find()"
        ],
        correctAnswer: "map()"

    },
    {
        id: 4,
        question: "Which language is used with React?",
        options :[
            "Python",
            "Java",
            "JavaScript",
            "PHP"
        ],
        correctAnswer: "JavaScript"
    },
    {
        id : 5,
        question: "what is JSX",
        options :[
            "A database",
            "A JavaScript Syntax Extension",
            " A CSS Framework",
            "A Browser"
        ],
        correctAnswer :"A JavaScript Syntax Extension"
    },

{
    id: 6,
    question: "Which hook is used to handle side effects in React?",
    options: [
        "useState",
        "useEffect",
        "useRef",
        "useMemo"
    ],
    correctAnswer: "useEffect"
},
{
    id: 7,
    question: "What is the correct way to pass data from parent to child component?",
    options: [
        "State",
        "Props",
        "Hooks",
        "Events"
    ],
    correctAnswer: "Props"
},
{
    id: 8,
    question: "Which command is used to create a React app using Vite?",
    options: [
        "npm create vite@latest",
        "npm start react",
        "node create react",
        "npm install react-app"
    ],
    correctAnswer: "npm create vite@latest"
},
{
    id: 9,
    question: "What is the purpose of the useRef hook?",
    options: [
        "To manage state",
        "To fetch API data",
        "To access DOM elements",
        "To create components"
    ],
    correctAnswer: "To access DOM elements"
},
{
    id: 10,
    question: "Which syntax is used to render a component in JSX?",
    options: [
        "<Component />",
        "[Component]",
        "{Component}",
        "(Component)"
    ],
    correctAnswer: "<Component />"
}


];

export default questions;