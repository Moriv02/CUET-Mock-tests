// Questions for Mock Test
const questions = [
    {
        question: "If A and B are partners sharing profits in the ratio of 3:2, and C joins the partnership bringing ₹50,000 as goodwill, with a new profit-sharing ratio of 5:3:2, what is the sacrificing ratio between A and B?",
        options: ["1:1", "3:2", "2:3", "5:3"],
        correctAnswer: "1:1"
    },
    {
        question: "Calculate the current ratio given the following data:\nCurrent Assets: ₹2,50,000\nCurrent Liabilities: ₹1,00,000",
        options: ["2:1", "2.5:1", "5:1", "1.5:1"],
        correctAnswer: "2.5:1"
    },
    {
        question: "A company issued 10,000 equity shares at ₹10 each with a premium of ₹2 per share. The allotment money includes the premium. What is the total amount collected on allotment?",
        options: ["₹70,000", "₹1,00,000", "₹1,20,000", "₹90,000"],
        correctAnswer: "₹1,20,000"
    },
    {
        question: "Which of the following is classified as an investing activity?",
        options: ["Payment of salaries", "Purchase of machinery", "Issue of shares", "Payment of interest"],
        correctAnswer: "Purchase of machinery"
    },
    {
        question: "Which is an advantage of a database management system in accounting?",
        options: ["Faster manual calculations", "Increased data redundancy", "Efficient data retrieval", "Limited access to information"],
        correctAnswer: "Efficient data retrieval"
    }
];

// Function to render the questions and evaluate answers
function runMockTest() {
    questions.forEach((q, index) => {
        // Display question
        console.log(`${index + 1}. ${q.question}`);
        
        // Display options
        q.options.forEach((option, i) => {
            console.log(`${i + 1}. ${option}`);
        });

        // Capture user's answer (replace with input mechanism for a real web application)
        let userAnswer = prompt(`Enter the correct option number for Question ${index + 1}:`);
        
        // Validate the answer
        const correctIndex = q.options.indexOf(q.correctAnswer) + 1;
        if (parseInt(userAnswer) === correctIndex) {
            console.log("Correct! 🎉");
        } else {
            console.log(`Wrong. The correct answer is: ${q.correctAnswer}`);
        }
        console.log("\n");
    });
}

// Run the mock test
runMockTest();
