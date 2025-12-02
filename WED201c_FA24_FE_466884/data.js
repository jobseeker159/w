const questions = [
  {
    id: 1,
    question: "Consider the code: h1 { color: blue; font-size: 20px; } Which of the following is called 'selector'?",
    options: [
      "color and font-size",
      "h1",
      "All parts of the code above",
      "blue and 20px"
    ],
    correct: 1,
    type: "single",
    explanation: "In CSS, the selector is the part that identifies which HTML elements the style rules will apply to. Here, 'h1' is the selector."
  },
  {
    id: 2,
    question: "div { border-width: 10px 3px 5px 9px; } What is the width of the left border?",
    options: [
      "9px",
      "5px",
      "3px",
      "10px"
    ],
    correct: 0,
    type: "single",
    explanation: "The border-width property follows the order: top, right, bottom, left. So 9px is the left border width."
  },
  {
    id: 3,
    question: "The image will scale down if it has to, but never scale up to be larger than its original size. Which code is right?",
    options: [
      "width: 100%",
      "max-width: 100%",
      "scale: 100%",
      "min-width: 100%"
    ],
    correct: 1,
    type: "single",
    explanation: "max-width: 100% ensures an image never exceeds its original size while allowing it to scale down."
  },
  {
    id: 4,
    question: "The # symbol specifies that the selector is a/an",
    options: [
      "id",
      "class",
      "first",
      "tag"
    ],
    correct: 0,
    type: "single",
    explanation: "In CSS, # is used to select elements by their id attribute."
  },
  {
    id: 5,
    question: "How many ways are there to integrate CSS into a web page?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correct: 1,
    type: "single",
    explanation: "The three main ways are: inline styles, internal style sheets (using <style> tag), and external style sheets."
  },
  {
    id: 6,
    question: "Which CSS property controls the text size?",
    options: [
      "font-height",
      "text-size",
      "text-style",
      "font-size"
    ],
    correct: 3,
    type: "single",
    explanation: "font-size is the standard CSS property for controlling text size."
  },
  {
    id: 7,
    question: "What syntax is used to insert an external style to the HTML document?",
    options: [
      "<a href='mystyle.css' rel='stylesheet'></a>",
      "<link href='mystyle.css' rel='stylesheet'>",
      "<source src='mystyle.css' rel='stylesheet'>",
      "<url href='mystyle.css' rel='stylesheet'>"
    ],
    correct: 1,
    type: "single",
    explanation: "The <link> tag with rel='stylesheet' is the correct way to link external CSS files."
  },
  {
    id: 8,
    question: "Which snippet of CSS is commonly used to center an element horizontally?",
    options: [
      "site-align: center;",
      "margin: auto 0;",
      "margin: 0 auto;",
      "margin: center;"
    ],
    correct: 2,
    type: "single",
    explanation: "margin: 0 auto; sets left and right margins to auto, centering the element horizontally."
  },
  {
    id: 9,
    question: "What property is used so the container becomes flexible?",
    options: [
      "display: flexible",
      "show: flex",
      "visibility: flexible",
      "display: flex"
    ],
    correct: 3,
    type: "single",
    explanation: "display: flex; enables the flexbox layout model for the container."
  },
  {
    id: 10,
    question: "In the following code snippet, what value is given for the bottom margin: margin: 15px 10px 3px 8px;",
    options: [
      "5px",
      "10px",
      "3px",
      "8px"
    ],
    correct: 2,
    type: "single",
    explanation: "The margin shorthand follows: top, right, bottom, left. So 3px is the bottom margin."
  },
  {
    id: 11,
    question: "What is the correct HTML for referring to an external style sheet stored in a subfolder called css?",
    options: [
      "<link rel='css/stylesheet' href='css/mystyle.css'>",
      "<link rel='stylesheet' href='css/mystyle.css'>",
      "<link rel='css/stylesheet' href='mystyle.css'>",
      "<style src='css/mystyle.css'>"
    ],
    correct: 1,
    type: "single",
    explanation: "The correct syntax is <link rel='stylesheet' href='css/mystyle.css'> with proper rel attribute and correct path."
  },
  {
    id: 12,
    question: "DTD stands for",
    options: [
      "Data type definition",
      "Define type of data",
      "Document type definition",
      "Documented type data"
    ],
    correct: 2,
    type: "single",
    explanation: "DTD stands for Document Type Definition, which defines the structure and legal elements of an XML/HTML document."
  },
  {
    id: 13,
    question: "The 'Box Model' in CSS is made up of?",
    options: [
      "width / height / border",
      "padding / border",
      "width / height",
      "width / height / border / padding"
    ],
    correct: 3,
    type: "single",
    explanation: "The CSS Box Model consists of content (width/height), padding, border, and margin (though margin is not listed in all options, the most complete answer is D)."
  },
  {
    id: 14,
    question: "How do you make the text bold?",
    options: [
      "style: bold;",
      "font-weight: bold;",
      "font: bold;",
      "text: bold;"
    ],
    correct: 1,
    type: "single",
    explanation: "font-weight: bold; is the correct CSS property for making text bold."
  },
  {
    id: 15,
    question: "1. var obj = '<img src=\"image.jpg\">' 2. ... 3. var tag = document.getElementById('demo') What statement is right to append a new image to the tag variable in the 3rd code line?",
    options: [
      "tag.innerHTML = obj",
      "tag.value = obj",
      "tag.text = obj",
      "tag.innerHTML = tag.innerHTML + obj"
    ],
    correct: [0,3],
    type: "multiple",
    explanation: "tag.innerHTML = obj replaces the content with the new image. The question asks for 2 answers but the provided answer key only shows A, so following the key."
  },
  {
    id: 16,
    question: "Which built-in method reverses the order of the elements of an array?",
    options: [
      "ChangeOrder(order)",
      "reverse()",
      "sort(order)",
      "None of the others"
    ],
    correct: 1,
    type: "single",
    explanation: "The reverse() method reverses the order of elements in an array."
  },
  {
    id: 17,
    question: "What keyword is used to insert at the [MISSING] in JavaScript? <script> [MISSING] myFunction() { } </script>",
    options: [
      "void",
      "int",
      "method",
      "function"
    ],
    correct: 3,
    type: "single",
    explanation: "The 'function' keyword is used to declare a function in JavaScript."
  },
  {
    id: 18,
    question: "Which tag is used to let the browser know that it is about to see JavaScript code?",
    options: [
      "<script>",
      "<head>",
      "<javascript>"
    ],
    correct: 0,
    type: "single",
    explanation: "The <script> tag is used to embed or reference JavaScript code in HTML."
  },
  {
    id: 19,
    question: "What is the output of the given code? (Random link generator)",
    options: [
      "write a link to either Visit W3Schools or to Visit WWF",
      "write a link to Visit W3Schools",
      "write a link to Visit WWF",
      "All of the others"
    ],
    correct: 0,
    type: "single",
    explanation: "Math.random() < 0.5 gives 50% chance for either link, so it randomly writes one of the two links."
  },
  {
    id: 20,
    question: "What statement do you use to print out a text to the document?",
    options: [
      "document.display('this is a text')",
      "document.show('this is a text')",
      "document.write('this is a text')"
    ],
    correct: 2,
    type: "single",
    explanation: "document.write() is used to write content directly to the HTML document."
  },
  {
    id: 21,
    question: "var data = [{id:1, name:'laptop'}, {id:2, name:'screen'}, {id:3, name:'keyboard'}]; What statement is right to get id = 1 of above array?",
    options: [
      "data[0]",
      "data[1]",
      "data[0].id",
      "data[1].id"
    ],
    correct: 2,
    type: "single",
    explanation: "Arrays are zero-indexed, so data[0].id accesses the id property of the first object."
  },
  {
    id: 22,
    question: "Boolean variables store either true or false.",
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: "Boolean variables can only store true or false values."
  },
  {
    id: 23,
    question: "What output is right of the given function that changes image source on mouseover?",
    options: [
      "To change the src property of the image with id='demo'",
      "To change the src property of the image",
      "To change the src property of the image that holds the event",
      "None of the others"
    ],
    correct: 0,
    type: "single",
    explanation: "The function changes the src of the element with id='demo' to the src of the hovered image."
  },
  {
    id: 24,
    question: "What code is added at [MISSING CODE] to create the array with items: 1, 2, 3, 4?",
    options: [
      "var arr = {1,2,3,4}",
      "var arr = [1,2,3,4]",
      "var arr = (1,2,3,4)",
      "var arr[] = {1,2,3,4}"
    ],
    correct: 1,
    type: "single",
    explanation: "Arrays in JavaScript are created with square brackets: var arr = [1,2,3,4];"
  },
  {
    id: 25,
    question: "What is returned when the method myFunction is called? (string.indexOf('Dumpty'))",
    options: [
      "true",
      "-1",
      "7",
      "0"
    ],
    correct: 2,
    type: "single",
    explanation: "indexOf() returns the starting index of the substring. 'Dumpty' starts at position 7 (counting from 0)."
  },
  {
    id: 26,
    question: "What statement do you use to create a new object?",
    options: [
      "var x=new Object()",
      "var x=new Number('123')",
      "var x=new product('111','laptop')",
      "All of the others"
    ],
    correct: 3,
    type: "single",
    explanation: "All three are valid ways to create objects in JavaScript."
  },
  {
    id: 27,
    question: "What statement do you insert to get a list of images in p tag with id='abc'?",
    options: [
      "var list='abc'.getElementsByTagName('img')",
      "var list=document.getElementById('abc').getElementsByTagName('img')",
      "var list=document.getElementById('abc').getElementsByClassName('img')",
      "var list=document.getElementById('abc').getElementsByName('img')"
    ],
    correct: 1,
    type: "single",
    explanation: "getElementById gets the element, then getElementsByTagName('img') gets all img tags within it."
  },
  {
    id: 28,
    question: "Which event is run when an element is clicked?",
    options: [
      "onDrop",
      "onClick",
      "onDragstart",
      "onAction"
    ],
    correct: 1,
    type: "single",
    explanation: "onClick is the event handler for click events."
  },
  {
    id: 29,
    question: "Consider two statements about JavaScript functions. Choose the right option.",
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 0,
    type: "single",
    explanation: "Both statements correctly describe JavaScript function declaration and purpose."
  },
  {
    id: 30,
    question: "Consider the following CSS rules. What is the width of any div elements on a 750px screen?",
    options: [
      "80%",
      "75%",
      "100%",
      "25%"
    ],
    correct: 0,
    type: "single",
    explanation: "The media query applies at min-width: 500px, but div width is 80% by default. The media query contains a syntax error (parentheses mismatch), so only the default applies."
  },
  {
    id: 31,
    question: "Consider the following CSS rules. What is the width of any div elements on a 500px screen?",
    options: [
      "80%",
      "75%",
      "100%",
      "25%"
    ],
    correct: 3,
    type: "single",
    explanation: "At 500px (max-width: 767px), the media query applies, setting width to 25%."
  },
  {
    id: 32,
    question: "Which of the following bootstrap style is to be used if you want to create a navbar that scrolls with the page?",
    options: [
      "navbar-static-top",
      "navbar-fixed",
      "navbar-fixed-top",
      ".fixed-top"
    ],
    correct: 0,
    type: "single",
    explanation: "navbar-static-top creates a navbar that scrolls with the page (not fixed)."
  },
  {
    id: 33,
    question: "Adaptive design with dynamic serving is..",
    options: [
      "Designing multiple pages, one for each type of major device",
      "Designing pages for the mobile view",
      "Designing pages for multiple platforms by incorporating fluid measurements and varying CSS rules"
    ],
    correct: 0,
    type: "single",
    explanation: "Adaptive design with dynamic serving involves creating different versions for different devices."
  },
  {
    id: 34,
    question: "The mobile version of your web page should have the same layout of every other version of your site.",
    options: [
      "True",
      "False"
    ],
    correct: 1,
    type: "single",
    explanation: "Mobile versions often have different layouts optimized for smaller screens."
  },
  {
    id: 35,
    question: "Which fluid measurement type returns a percentage of the viewport height?",
    options: [
      "vh",
      "vw",
      "hv",
      "ww"
    ],
    correct: 0,
    type: "single",
    explanation: "vh stands for viewport height (1vh = 1% of viewport height)."
  },
  {
    id: 36,
    question: "Consider the following CSS rule. Which statement is true?",
    options: [
      "The div elements will have a width of 25% only when the page is printed",
      "The div elements will only visible only when the page is printed",
      "The div elements will have a width of 80% only when the page is printed"
    ],
    correct: 0,
    type: "single",
    explanation: "@media print applies styles only when printing, setting width to 25% during print."
  },
  {
    id: 37,
    question: "Consider the following CSS rules. What is the width of any div elements on a 750px screen?",
    options: [
      "80%",
      "100%",
      "25%",
      "75%"
    ],
    correct: 2,
    type: "single",
    explanation: "At 750px (min-width: 500px), the media query applies, setting width to 25%."
  },
  {
    id: 38,
    question: "Choose the right statement about the responsive column code.",
    options: [
      "When the screen gets smaller than 768px, each child div should have a width of 50%",
      "When the screen gets greater than 768px, each child div should have a width of 50%",
      "Each column should have a width of 100% for any screen wide",
      "When the screen gets smaller than 768px, each column should have a width of 50%"
    ],
    correct: 1,
    type: "single",
    explanation: "The media query applies at min-width: 768px, and .col-6 is defined as 50% within that query."
  },
  {
    id: 39,
    question: "1 = 1% of viewport width",
    options: [
      "vh",
      "px",
      "vw",
      "etc"
    ],
    correct: 2,
    type: "single",
    explanation: "vw stands for viewport width (1vw = 1% of viewport width)."
  },
  {
    id: 40,
    question: "Consider the following code using Bootstrap 3: <div class='col-sm-2 col-lg-4'> In a lg viewport the div will be",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correct: 1,
    type: "single",
    explanation: "col-lg-4 means 4 columns wide on large (lg) viewports."
  },
  {
    id: 41,
    question: "Which code segment will keep people from being able to zoom in or out on your content?",
    options: [
      "<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'>",
      "<meta name='viewport' content='width=device-width, initial-scale=1'>",
      "It is impossible to lock the zoom ability"
    ],
    correct: 0,
    type: "single",
    explanation: "maximum-scale=1 prevents zooming in (limits maximum zoom to initial scale)."
  },
  {
    id: 42,
    question: "What options should be used in fluid layout design?",
    options: [
      "A,B,C",
      "B,C,E",
      "B,D,E",
      "A,C,D"
    ],
    correct: 3,
    type: "single",
    explanation: "Fluid layouts use relative units, grid systems, and viewport control (A, C, D)."
  },
  {
    id: 43,
    question: "Consider the following CSS rules. What is the width of any div elements on a 500px screen?",
    options: [
      "80%",
      "75%",
      "100%",
      "50%"
    ],
    correct: 0,
    type: "single",
    explanation: "There's a syntax error in the media query (parentheses mismatch), so the default 80% applies."
  },
  {
    id: 44,
    question: "Consider two statements about responsive design. Choose the right option.",
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 2,
    type: "single",
    explanation: "Statement 1 is correct (mobile-first approach). Statement 2 is false (responsive design uses fluid layouts, not separate ones for each device)."
  },
  {
    id: 45,
    question: "Which of the following is part of a URL?",
    options: [
      "Editor",
      "HTML",
      "Domain(or Host)"
    ],
    correct: 2,
    type: "single",
    explanation: "Domain/Host is a key component of a URL (e.g., example.com in https://example.com)."
  },
  {
    id: 46,
    question: "Which is the best/proper way to declare a section with h2 and progress elements?",
    options: [
      "Option A (with proper progress attributes)",
      "Option B (without proper progress attributes)",
      "Option C (with proper progress attributes)",
      "Option D (without proper progress attributes)"
    ],
    correct: 0,
    type: "single",
    explanation: "Option A uses correct semantic HTML with proper progress element attributes (value and max)."
  },
  {
    id: 47,
    question: "Which is the correct file extension for a web page?",
    options: [
      ".html",
      ".java",
      ".js",
      ".cpp"
    ],
    correct: 0,
    type: "single",
    explanation: ".html or .htm are the standard extensions for HTML web pages."
  },
  {
    id: 48,
    question: "Semantics is",
    options: [
      "the practice of giving content on the page meaning and structure by using proper element",
      "the set of rules that defines the combinations of symbols that are considered to be a correctly structured document",
      "circular"
    ],
    correct: 0,
    type: "single",
    explanation: "Semantic HTML uses elements that convey meaning about the content structure."
  },
  {
    id: 49,
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: [
      "<footer>",
      "<section>",
      "<bottom>",
      "<body>"
    ],
    correct: 0,
    type: "single",
    explanation: "<footer> is the semantic HTML element for footers."
  },
  {
    id: 50,
    question: "A _____ is a computer that is in charge of handling resource requests from multiple computers.",
    options: [
      "server",
      "client",
      "host",
      "domain"
    ],
    correct: 0,
    type: "single",
    explanation: "Servers handle requests from clients in a client-server model."
  },
  {
    id: 51,
    question: "W3C stands for",
    options: [
      "World Wide Web Consortium",
      "World Wide Web Cooperation",
      "WWW Consortium",
      "None of the others"
    ],
    correct: 0,
    type: "single",
    explanation: "W3C is the World Wide Web Consortium, the main international standards organization for the web."
  },
  {
    id: 52,
    question: "What data does the form send to myscript.aspx after submitting?",
    options: [
      "nothing",
      "female and ThiNo",
      "female and male",
      "1 and ThiNo"
    ],
    correct: 3,
    type: "single",
    explanation: "The checked radio button sends value='1', and the text input sends value='ThiNo'."
  },
  {
    id: 53,
    question: "Choose the correct HTML element to define important text",
    options: [
      "<b>",
      "<strong>",
      "<i>",
      "<important>"
    ],
    correct: 1,
    type: "single",
    explanation: "<strong> indicates strong importance, seriousness, or urgency (semantically correct for important text)."
  },
  {
    id: 54,
    question: "What option do you choose to create a table with 2 rows and 2 columns?",
    options: [
      "Option A (incorrect structure)",
      "Option B (incorrect structure)",
      "Option C (incorrect structure)",
      "Option D (correct: <table><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>)"
    ],
    correct: 3,
    type: "single",
    explanation: "Option D correctly creates a table with 2 rows (tr) and 2 columns (td in each row)."
  },
  {
    id: 55,
    question: "What does the tag <footer> typically contain?",
    options: [
      "copyright information",
      "logo or icon",
      "blog post",
      "the main content of a document"
    ],
    correct: 0,
    type: "single",
    explanation: "Footers typically contain copyright info, contact details, related documents, etc."
  },
  {
    id: 56,
    question: "Currently clicking and holding down the mouse button on represents",
    options: [
      "a:link pseudo class",
      "a:visited",
      "a:active",
      "a:hover"
    ],
    correct: 2,
    type: "single",
    explanation: ":active applies while an element is being activated (e.g., mouse button held down)."
  },
  {
    id: 57,
    question: "To access your cPanel account, you need ...",
    options: [
      "a username and password from your hosting server",
      "the username and password for your computer",
      "the port number for your account"
    ],
    correct: 0,
    type: "single",
    explanation: "cPanel requires login credentials provided by your hosting provider."
  },
  {
    id: 58,
    question: "What are the elements to help organize the data and structure of a table?",
    options: [
      "<caption>, <thead>, <tbody>, <tfoot>",
      "<caption>, <head>, <body>, <foot>",
      "<caption>, <header>, <body>, <footer>",
      "<caption>, <top>, <middle>, <bottom>"
    ],
    correct: 0,
    type: "single",
    explanation: "HTML table structure elements: <caption>, <thead>, <tbody>, <tfoot>."
  },
  {
    id: 59,
    question: "Which organization is responsible for assigning top-level domain names?",
    options: [
      "Internet Corporation for Assigned Numbers and Names (ICANN)",
      "Internet Domain Name Server (IDNS)",
      "World Wide Web Consortium (W3C)"
    ],
    correct: 0,
    type: "single",
    explanation: "ICANN manages domain names and IP addresses globally."
  },
  {
    id: 60,
    question: "Choose a way to resize content to the viewport.",
    options: [
      "Use CSS media queries to apply different styling for small and large screens",
      "Setting large absolute CSS widths for page elements",
      "let the content rely on a particular viewport width to render well",
      "use large fixed width element"
    ],
    correct: 0,
    type: "single",
    explanation: "Media queries are the standard responsive design technique for adapting to different viewport sizes."
  }
];