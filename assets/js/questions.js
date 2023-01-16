//Array of objects containing the questions and answers
var quizQuestions = [
    {
        question: "How to access an element which ID is 'name'?",
        answers: [
            "document.getElementsByTagName('name')",
            "docuemnt.getElementById('name')",
            "document.QuerySelector('name')",
            "document.querySelectorAll('name')"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "The Document Object Model (DOM) is a hierarchy that closely resemble what object?",
            answers: [
                "A tower",
                "A spiderweb",
                "A tree",
                "A tournament bracket"
            ],
        correctAnswerIndex: 3
    },

    {
        question: "Which method selects the first matching element in the document?",
        answers: [
            "document.querySelectorAll()",
            "docuemnt.getElementByClass()",
            "document.QuerySelector()",
            "document.getElementsByTagName()"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "What method allows us to add an attribute to a DOM element?",
            answers: [
                "element.getAttribute()",
                "element.createAttribute()",
                "element.makeAttribute()",
                "element.setAttribute()"
            ],
        correctAnswerIndex: 4
    },
    {
        question: "How to prevent an event from bubbling?",
        answers: [
            "stopPropagation(event)",
            "event.stopPropagation()",
            "event.preventDefault()",
            "event.stop()"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "How to change the color of the second child element of the element 'list'?",
        answers: [
            "list.children[1].style.color = 'blue'",
            "document.querySelector(list, blue)",
            "list[1].setAttributes(style, color:blue)",
            "document.body.children[1].setAttributes(style,color:blue)"
        ],
        correctAnswerIndex: 1
    }
]