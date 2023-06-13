const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');

// Sample quiz data
const quizData = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
      answer: 'Hyper Text Markup Language'
    },
    {
      question: 'What does CSS stand for?',
      options: ['Colorful Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets'],
      answer: 'Cascading Style Sheets'
    },
    {
      question: 'What does JS stand for?',
      options: ['JavaScript', 'Java Style', 'JustScript'],
      answer: 'JavaScript'
    },
    {
      question: 'What is the default method of the HTTP protocol?',
      options: ['GET', 'POST', 'PUT'],
      answer: 'GET'
    },
    {
      question: 'Which tag is used to create a hyperlink in HTML?',
      options: ['<a>', '<h1>', '<p>'],
      answer: '<a>'
    },
    {
      question: 'Which CSS property is used to change the text color of an element?',
      options: ['color', 'background-color', 'font-size'],
      answer: 'color'
    },
    {
      question: 'Which JavaScript method is used to remove the last element from an array?',
      options: ['pop()', 'shift()', 'splice()'],
      answer: 'pop()'
    },
    {
      question: 'What does the "typeof" operator in JavaScript return?',
      options: ['The data type of a variable', 'The value of a variable', 'The length of a variable'],
      answer: 'The data type of a variable'
    },
    {
      question: 'What is the largest heading tag in HTML?',
      options: ['<h1>', '<h2>', '<h3>'],
      answer: '<h1>'
    },
    {
      question: 'Which CSS property is used to add spacing between HTML elements?',
      options: ['margin', 'padding', 'border'],
      answer: 'margin'
    },
    {
      question: 'Which JavaScript keyword is used to declare a variable?',
      options: ['let', 'var', 'const'],
      answer: 'var'
    },
    {
      question: 'What is the correct syntax for a comment in HTML?',
      options: ['<!-- comment -->', '// comment', '/* comment */'],
      answer: '<!-- comment -->'
    },
    {
      question: 'What is the result of the expression 4 + "4" in JavaScript?',
      options: ['44', '8', 'NaN'],
      answer: '44'
    },
    {
      question: 'Which CSS property is used to make text bold?',
      options: ['font-weight', 'text-decoration', 'text-align'],
      answer: 'font-weight'
    },
    {
      question: 'Which JavaScript method is used to add an element to the end of an array?',
      options: ['push()', 'concat()', 'join()'],
      answer: 'push()'
    },
    {
      question: 'What does the "document.getElementById()" method return?',
      options: ['An HTML element', 'A CSS property', 'A JavaScript variable'],
      answer: 'An HTML element'
    },
    {
      question: 'Which HTML element is used to define a table row?',
      options: ['<tr>', '<td>', '<th>'],
      answer: '<tr>'
    },
    {
      question: 'Which CSS property is used to control the spacing between lines of text?',
      options: ['line-height', 'text-indent', 'text-transform'],
      answer: 'line-height'
    },
    {
      question: 'What is the correct syntax for a JavaScript function?',
      options: ['function myFunction()', 'myFunction()', 'function = myFunction()'],
      answer: 'function myFunction()'
    },
    {
      question: 'Which HTML attribute is used to specify an image source?',
      options: ['src', 'alt', 'href'],
      answer: 'src'
    },
    {
      question: 'Which CSS property is used to create rounded corners?',
      options: ['border-radius', 'margin', 'padding'],
      answer: 'border-radius'
    },
    {
      question: 'What is the result of the expression "10" + 5 in JavaScript?',
      options: ['"105"', '15', 'Error'],
      answer: '"105"'
    },
    {
      question: 'Which JavaScript method is used to convert a string to uppercase?',
      options: ['toUpperCase()', 'toLowerCase()', 'charAt()'],
      answer: 'toUpperCase()'
    },
    {
      question: 'What is the correct way to include an external JavaScript file?',
      options: ['<script src="script.js">', '<script href="script.js">', '<script file="script.js">'],
      answer: '<script src="script.js">'
    },
    {
      question: 'Which HTML element is used to define a navigation menu?',
      options: ['<nav>', '<ul>', '<li>'],
      answer: '<nav>'
    },
    {
      question: 'Which CSS property is used to change the background color of an element?',
      options: ['background-color', 'color', 'border-color'],
      answer: 'background-color'
    },
    {
      question: 'What is the result of the expression "10" - 5 in JavaScript?',
      options: ['5', '15', 'Error'],
      answer: '5'
    },
    {
      question: 'Which JavaScript method is used to return the length of an array?',
      options: ['length()', 'size()', 'count()'],
      answer: 'length()'
    },
    {
      question: 'What does the CSS property "display: none;" do?',
      options: ['Hides an element', 'Changes the font size', 'Adds a border to an element'],
      answer: 'Hides an element'
    },
    {
        question: 'What is the primary function of an operating system?',
        options: ['Manage hardware resources', 'Perform calculations', 'Create documents'],
        answer: 'Manage hardware resources'
      },
      {
        question: 'What is the main programming language used for web development?',
        options: ['JavaScript', 'Python', 'C++'],
        answer: 'JavaScript'
      },
      {
        question: 'What does CPU stand for?',
        options: ['Central Processing Unit', 'Computer Processing Unit', 'Central Processor Unit'],
        answer: 'Central Processing Unit'
      },
      {
        question: 'What is the purpose of an IP address?',
        options: ['Identify a device on a network', 'Store data', 'Run programs'],
        answer: 'Identify a device on a network'
      },
      {
        question: 'What is the correct syntax for a CSS class selector?',
        options: ['.classname', '#classname', 'classname'],
        answer: '.classname'
      },
      {
        question: 'Which data structure operates on a "last-in, first-out" basis?',
        options: ['Stack', 'Queue', 'Array'],
        answer: 'Stack'
      },
      {
        question: 'What is the file extension for a Cascading Style Sheet (CSS) file?',
        options: ['.css', '.html', '.js'],
        answer: '.css'
      },
      {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
        answer: 'Hyper Text Markup Language'
      },
      {
        question: 'Which programming language is often used for machine learning and data analysis?',
        options: ['Python', 'Java', 'C#'],
        answer: 'Python'
      },
      {
        question: 'What does the acronym "URL" stand for?',
        options: ['Uniform Resource Locator', 'Universal Reference Locator', 'Unified Resource Link'],
        answer: 'Uniform Resource Locator'
      },
      {
        question: 'Which HTML tag is used to define an unordered list?',
        options: ['<ul>', '<ol>', '<li>'],
        answer: '<ul>'
      },
      {
        question: 'What is the purpose of a function in programming?',
        options: ['Perform a specific task', 'Store data', 'Style web pages'],
        answer: 'Perform a specific task'
      },
      {
        question: 'Which protocol is used to send email over the Internet?',
        options: ['SMTP', 'HTTP', 'FTP'],
        answer: 'SMTP'
      },
      {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets'],
        answer: 'Cascading Style Sheets'
      },
      {
        question: 'Which programming language is often used for game development?',
        options: ['C++', 'Ruby', 'PHP'],
        answer: 'C++'
      },
      {
        question: 'What is the purpose of an "if-else" statement in programming?',
        options: ['Conditional execution of code', 'Looping over code', 'Defining a function'],
        answer: 'Conditional execution of code'
      },
      {
        question: 'Which data structure operates on a "first-in, first-out" basis?',
        options: ['Queue', 'Stack', 'Linked list'],
        answer: 'Queue'
      },
      {
        question: 'Which programming language is often used for building Android apps?',
        options: ['Java', 'Swift', 'C#'],
        answer: 'Java'
      },
      {
        question: 'What is the file extension for a JavaScript file?',
        options: ['.js', '.html', '.css'],
        answer: '.js'
      },
      {
        question: 'What is the purpose of a database?',
        options: ['Store and organize data', 'Display web pages', 'Run programs'],
        answer: 'Store and organize data'
      },
      {
        question: 'Which CSS property is used to change the text color of an element?',
        options: ['color', 'background-color', 'font-size'],
        answer: 'color'
      },
      {
        question: 'Which programming language is often used for iOS app development?',
        options: ['Swift', 'Python', 'C++'],
        answer: 'Swift'
      },
      {
        question: 'What is the purpose of a loop in programming?',
        options: ['Repeat a set of instructions', 'Declare variables', 'Perform mathematical operations'],
        answer: 'Repeat a set of instructions'
      },
      {
        question: 'Which protocol is used to transfer files over the Internet?',
        options: ['FTP', 'SMTP', 'HTTP'],
        answer: 'FTP'
      },
      {
        question: 'What is the purpose of a function in CSS?',
        options: ['Group and reuse CSS properties', 'Manipulate data', 'Perform calculations'],
        answer: 'Group and reuse CSS properties'
      },
      {
        question: 'Which programming language is often used for web scraping and automation?',
        options: ['Python', 'JavaScript', 'Ruby'],
        answer: 'Python'
      },
      {
        question: 'What does the acronym "HTTP" stand for?',
        options: ['Hypertext Transfer Protocol', 'Hypertext Markup Language', 'Hyperlink Transfer Protocol'],
        answer: 'Hypertext Transfer Protocol'
      },
      {
        question: 'What is the purpose of the "box-sizing" CSS property?',
        options: ['Control the sizing of elements', 'Change the color of text', 'Apply animations'],
        answer: 'Control the sizing of elements'
      },
      {
        question: 'Which programming language is often used for data analysis and statistical computing?',
        options: ['R', 'Java', 'C#'],
        answer: 'R'
      },
      {
        question: 'What is the purpose of a conditional statement in programming?',
        options: ['Make decisions based on conditions', 'Define variables', 'Perform arithmetic operations'],
        answer: 'Make decisions based on conditions'
      },
      {
        question: 'Which database management system is most commonly used for web applications?',
        options: ['MySQL', 'Oracle', 'SQLite'],
        answer: 'MySQL'
      }
    
  ];
  
  let currentQuestion = 0;

  function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
  
    questionContainer.innerText = currentQuiz.question;
    optionsContainer.innerHTML = '';
  
    currentQuiz.options.forEach((option, index) => {
      const optionElement = document.createElement('label');
      optionElement.innerHTML = `<input type="radio" name="answer" value="${option}">${option}`;
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function showResults() {
    quizContainer.innerHTML = `<h2>You've completed the quiz!</h2>
                               <p>Your score: ${calculateScore()} out of 5 (There are more up to ${quizData.length} Questions)</p>`;
  }
  
  function calculateScore() {
    let score = 0;
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer && selectedAnswer.value === quizData[currentQuestion].answer) {
      score++;
    }
    return score;
  }
  
  loadQuestion();
  
  submitButton.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      return;
    }
  
    if (currentQuestion < 4) { // Change '4' to the number of questions you want to render
      currentQuestion++;
      loadQuestion();
    } else {
      showResults();
    }
  });
  
