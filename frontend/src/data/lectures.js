 const lectures=[
    {
      id:1,
      branch:"CSE",
      year:"Second Year",
      semester:4,
      subject:"Data Structures",  
      topic:"Arrays",
      learningGoal:"Detailed",
      channel:"CodeHelp by Love Babbar",
      instructor:"Love Babbar",
      duration:"18 Hours",
      rating:4.9,
      views:"2.5M",
      language:"Hindi",
      difficulty:"Beginner",
      link: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
      notes:true,
      quiz:true,
      summary: `
Arrays are linear data structures used to store elements of the same data type in contiguous memory locations.

Topics covered:
• Introduction to Arrays
• Traversal
• Insertion
• Deletion
• Searching
• Time Complexity
• Interview Questions
`,
    },
    {
      id: 2,
      branch:"CSE",
      year:"Second Year",
      semester:4,
      subject:"Data Structures",
      topic:"Arrays",
      learningGoal:"Revision",  
      channel:"CodeHelp by Love Babbar",
      instructor:"Love Babbar",
      duration:"2 hours",
      rating:4.8,
      views:"800K",
      language:"Hindi",
      difficulty:"Intermediate",
      link:"https://www.youtube.com/watch?v=RBSGKlAvoiM",
      notes:true,
      quiz: [
    {
        question: "What is an Array?",
        options: [
            "Linear Data Structure",
            "Tree",
            "Graph",
            "Stack"
        ],
        answer: "Linear Data Structure"
    },
    {
        question: "Arrays store elements in?",
        options: [
            "Random Memory",
            "Contiguous Memory",
            "Heap Only",
            "Linked Nodes"
        ],
        answer: "Contiguous Memory"
    },
    {
        question: "What is the time complexity of accessing an array element by index?",
        options: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n²)"
        ],
        answer: "O(1)"
    }
],
      summary: `
Arrays are linear data structures used to store elements of the same data type in contiguous memory locations.

Topics covered:
• Introduction to Arrays
• Traversal
• Insertion
• Deletion
• Searching
• Time Complexity
• Interview Questions
`,
    },
    {
        id: 3,
    branch: "CSE",
    year: "Second Year",
    semester: 4,
    subject: "DBMS",
    topic: "Normalization",
    learningGoal: "Detailed",
    channel: "Apna College",
    instructor: "Shradha Khapra",
    duration: "12 Hours",
    rating: 4.9,
    views: "3.4M",
    language: "Hindi",
    difficulty: "Beginner",
    link: "https://www.youtube.com/watch?v=dl00fOOYLOM",
    notes: true,
    quiz: true,
    summary: true
    },
    {
        id: 4,
    branch: "CSE",
    year: "Second Year",
    semester: 4,
    subject: "DBMS",
    topic: "Normalization",
    learningGoal: "Revision",
    channel: "Gate Smashers",
    instructor: "Gate Smashers",
    duration: "1 Hour",
    rating: 4.8,
    views: "1.8M",
    language: "Hindi",
    difficulty: "Intermediate",
    link: "https://www.youtube.com/results?search_query=gate+smashers+dbms+normalization",
    quiz: true,
    summary:true,
      notes:`
Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.

There are different normal forms:

1NF
• Remove repeating groups
• Every column contains atomic values

2NF
• Remove partial dependency
• Every non-key attribute depends on the whole primary key

3NF
• Remove transitive dependency
• Non-key attributes depend only on the primary key

Advantages

• Reduces duplicate data
• Improves consistency
• Easier maintenance
• Better storage utilization
`
    }
  ];
  export default lectures;