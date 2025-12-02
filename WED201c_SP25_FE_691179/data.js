const questions = [
  {
    id: 1,
    question: "The image will scale down if it has to, but never scale up to be larger than its original size. Which code is right?",
    options: [
      "Width: 100%",
      "Max-width: 100%",
      "Scale: 100%",
      "Min-width: 100%"
    ],
    correct: 1,
    type: "single",
    explanation: "max-width: 100% ensures an image never exceeds its original size while allowing it to scale down."
  },
  {
    id: 2,
    question: "What selector does the # symbol specify?",
    options: [
      "Class",
      "Tags",
      "Id",
      "Pseudo-class"
    ],
    correct: 2,
    type: "single",
    explanation: "# is used for ID selectors in CSS."
  },
  {
    id: 3,
    question: "Which is the correct CSS syntax?",
    options: [
      "{body:color:black;}",
      "body:color=black;",
      "{body:color=black;}",
      "body {color: black;}"
    ],
    correct: 3,
    type: "single",
    explanation: "Correct CSS syntax is selector {property: value;}"
  },
  {
    id: 4,
    question: "Which of the following option is the layout mode that is easy to design a flexible responsive layout?",
    options: [
      "The table mode",
      "The position mode",
      "The Float mode",
      "The Flexible Box Layout"
    ],
    correct: 3,
    type: "single",
    explanation: "Flexbox (Flexible Box Layout) is designed for flexible responsive layouts."
  },
  {
    id: 5,
    question: "What unit is used to specify the size of an element that relative to the parent element?",
    options: [
      "Vmax",
      "Vmin",
      "%",
      "Px"
    ],
    correct: 2,
    type: "single",
    explanation: "Percentage (%) units are relative to the parent element's size."
  },
  {
    id: 6,
    question: "Which of the following property is used to set the text shadow around a text?",
    options: [
      "white-space",
      "text-shadow",
      "text-decoration",
      "text-transform"
    ],
    correct: 1,
    type: "single",
    explanation: "text-shadow property adds shadow to text."
  },
  {
    id: 7,
    question: "In the following code snippet, what value is given for the bottom margin: margin: 15px 19px 3px 8px;",
    options: [
      "5px",
      "10px",
      "3px",
      "8px"
    ],
    correct: 2,
    type: "single",
    explanation: "margin shorthand: top, right, bottom, left. So 3px is bottom margin."
  },
  {
    id: 8,
    question: "Choose the right statement about the transform: translate(50px, 100px); code:",
    options: [
      "Moves an element from its current position",
      "Moves an element from its (0,0) position",
      "Moves the <div> element 50 pixels to the right, and 100 pixels down from its current position",
      "Moves the <div> element 50 pixels to the right, and 100 pixels down from its (0,0) position"
    ],
    correct: 2,
    type: "single",
    explanation: "translate(x, y) moves element relative to its current position."
  },
  {
    id: 9,
    question: "The # symbol specifies that the selector is?",
    options: [
      "Class",
      "Tags",
      "Id",
      "Pseudo-class"
    ],
    correct: 2,
    type: "single",
    explanation: "# is used for ID selectors in CSS."
  },
  {
    id: 10,
    question: "How do you make each word in a text start with a capital letter?",
    options: [
      "text-transform: capitalize",
      "transform: capitalize",
      "text-style: capitalize",
      "style capitalize"
    ],
    correct: 0,
    type: "single",
    explanation: "text-transform: capitalize capitalizes the first letter of each word."
  },
  {
    id: 11,
    question: "Which of the following property is used to set the background image of an element?",
    options: [
      "background-color",
      "background-image",
      "background-repeat",
      "background-position"
    ],
    correct: 1,
    type: "single",
    explanation: "background-image property sets background images."
  },
  {
    id: 12,
    question: "Descendant selectors nav a { ... } are more general than child selectors nav > a { ... }",
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: "Descendant selectors (space) match any descendant, while child selectors (>) only match direct children."
  },
  {
    id: 13,
    question: "Which of the following line of code can be used to hide the image?",
    options: [
      "img { display: 0; }",
      "img { display: block; }",
      "img { display: none; }",
      "img { display: empty; }"
    ],
    correct: 2,
    type: "single",
    explanation: "display: none; completely hides the element."
  },
  {
    id: 14,
    question: "Which snippet of CSS is commonly used to center a website horizontally?",
    options: [
      "site-align: center",
      "margin: center",
      "margin: auto 0",
      "margin: 0 auto"
    ],
    correct: 3,
    type: "single",
    explanation: "margin: 0 auto; centers block elements horizontally."
  },
  {
    id: 15,
    question: "What is the correct CSS syntax for making all the tag's font-size 14px?",
    options: [
      'font: "14px";',
      "font-size: 14px;",
      "text-size: 14px;",
      "font-weight: 14px;"
    ],
    correct: 1,
    type: "single",
    explanation: "font-size: 14px; is the correct property for text size."
  },
  {
    id: 16,
    question: "Variables allow you to save data.",
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: "Variables are used to store data values in programming."
  },
  {
    id: 17,
    question: "What code is the right statement to assign the sum of two integers 4,3 to the p tag?",
    options: [
      'document.getElementById("demo").innerHTML = myFunction(4,3);',
      '<p onClick="myFunction(4,3)"></p>',
      'document.getElementById("demo").innerHTML = "4" + "3";',
      'document.getElementById("demo").innerHTML = myFunction("4","3");'
    ],
    correct: 0,
    type: "single",
    explanation: "Calling myFunction(4,3) returns 7, which is assigned to innerHTML."
  },
  {
    id: 18,
    question: "Choose a right statement about the change function that removes select options:",
    options: [
      "None of the others",
      "Remove an option",
      "Remove an option by zero-based index",
      "Remove all options by their index"
    ],
    correct: 3,
    type: "single",
    explanation: "The while loop removes all options one by one until length is 0."
  },
  {
    id: 19,
    question: "What is the proper JavaScript code to change the content of the second paragraph to 'What does the Fox say?'",
    options: [
      'document.getElementById("second").innerHTML = "What does the Fox say?"',
      'document.getElementById("TagName(\'p\').innerHTML = "What does the Fox say?"',
      'document.getElementById("TagName(\'p\')[1].innerHTML = "What does the Fox say?"',
      'document.getElementById("p\')[2].innerHTML = "What does the Fox say?"',
      'document.getElementById("TagName(\'p\')[2].innerHTML = "What does the Fox say?"'
    ],
    correct: 2,
    type: "single",
    explanation: "getElementsByTagName returns array-like object; index 1 is the second paragraph."
  },
  {
    id: 20,
    question: "Which function of String object returns the calling string value converted to lower case?",
    options: [
      "toLocalLowerCase()",
      "toLowerCase()",
      "toString().LowerCase",
      "substring().LowerCase"
    ],
    correct: 1,
    type: "single",
    explanation: "toLowerCase() converts a string to lowercase letters."
  },
  {
    id: 21,
    question: "What statement is the right to append obj object to tag object in the 3rd line?",
    options: [
      "tag.innerHTML = obj",
      "tag.value = obj",
      "tag.text = obj",
      "tag.appendChild(obj)"
    ],
    correct: 3,
    type: "single",
    explanation: "appendChild() adds a node to the end of the list of children of a parent node."
  },
  {
    id: 22,
    question: "What statement do you use to change name = 'Nga' to 'My' in the Person array?",
    options: [
      'Person.firstName = "My"',
      'Person[0].firstName = "My"',
      'Person[1].firstName = "My"',
      "none of the others"
    ],
    correct: 2,
    type: "single",
    explanation: "Person[1] is the second object (index 1), where firstName is 'Nga'."
  },
  {
    id: 23,
    question: "What statement do you insert to get a list of images in p tag with id='abc'?",
    options: [
      'var list = "abc".getElementsByTagName("img")',
      'var list = document.getElementById("abc").getElementsByTagName("img")',
      'var list = document.getElementById("abc").getElementsByClassName("img")',
      'var list = document.getElementById("abc").getElementsByName("img")'
    ],
    correct: 1,
    type: "single",
    explanation: "getElementById gets the element, then getElementsByTagName gets all img tags within it."
  },
  {
    id: 24,
    question: "Which of the following is not a valid operator?",
    options: [
      "++",
      "+=",
      "==",
      "=+",
      "--"
    ],
    correct: 3,
    type: "single",
    explanation: "=+ is not a valid operator (might be confused with +=)."
  },
  {
    id: 25,
    question: "Which of the following is not a valid method for generating output to the screen?",
    options: [
      "print",
      "document.write",
      "alert",
      "prompt"
    ],
    correct: 0,
    type: "single",
    explanation: "print() is a browser function for printing pages, not for screen output."
  },
  {
    id: 26,
    question: "What does it mean that variables are case-sensitive?",
    options: [
      "That all variables must use lowercase letters",
      "That the computer does not think that the variables name and Name are the same thing.",
      "That all variables must use uppercase letters"
    ],
    correct: 1,
    type: "single",
    explanation: "Case-sensitive means uppercase and lowercase letters are treated as different."
  },
  {
    id: 27,
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
    id: 28,
    question: "Which of these is not valid?",
    options: [
      "document.getElementsById(idName)",
      "document.getElementsByClassName(className)",
      "document.getElementsByTagName(tagName)",
      "document.getname(Name)"
    ],
    correct: 3,
    type: "single",
    explanation: "getname() is not a valid DOM method."
  },
  {
    id: 29,
    question: "What is the right option to call the method change() when clicking on the button?",
    options: [
      '<a href="change(this)"><button>click me</button></a>',
      '<a src="change(this)"><button>click me</button></a>',
      '<button click="change(this)">click me</button>',
      '<button onClick="change()">click me</button>',
      '<button onClick="change(this)">click me</button>'
    ],
    correct: 4,
    type: "single",
    explanation: "onClick='change(this)' passes the button element to the function."
  },
  {
    id: 30,
    question: "What is the difference between == and === ?",
    options: [
      "The === operator only checks for equivalent values, not equivalent type too.",
      "The == operator only checks for equivalent values, not equivalent type too.",
      "The == operator is the assignment operator, while === is the equality operator."
    ],
    correct: 1,
    type: "single",
    explanation: "== checks value equality with type coercion, === checks value and type equality."
  },
  {
    id: 31,
    question: "1 = 1% of viewport width",
    options: [
      "vh",
      "px",
      "vw",
      "etc"
    ],
    correct: 2,
    type: "single",
    explanation: "vw = viewport width (1vw = 1% of viewport width)."
  },
  {
    id: 32,
    question: "Consider the following CSS rules. What is the width of any div elements on a 750px screen?",
    options: [
      "80%",
      "100%",
      "25%",
      "75%"
    ],
    correct: 2,
    type: "single",
    explanation: "At 750px (min-width: 500px), media query applies, setting width to 25%."
  },
  {
    id: 33,
    question: "Choose the right statement about the class .col-xs-* in the Bootstrap 3 Grid System:",
    options: [
      "The columns will automatically stack on top of each other when the screen is greater than 768px wide.",
      "for phones - screens less than 768px wide",
      "shows how to get some equal-width columns starting at tablets and scaling to large desktops.",
      "On mobile phones or screens that are greater than 996px wide, the columns will automatically stack"
    ],
    correct: 1,
    type: "single",
    explanation: "xs (extra small) is for phones <768px in Bootstrap 3."
  },
  {
    id: 34,
    question: "Consider the following CSS rules. What is the width of any div elements on a 750px screen?",
    options: [
      "80%",
      "100%",
      "25%",
      "75%"
    ],
    correct: 2,
    type: "single",
    explanation: "Duplicate of question 32. At 750px, media query applies (25%)."
  },
  {
    id: 35,
    question: "Choose the right statement about the code: img { max-width: 100%; height: auto; }",
    options: [
      "the image will scale down if it has to, but never scale up to be larger than its original size",
      "the image can be scaled up to be larger than its original size",
      "the image is displayed in the same its original size",
      "The image can scale up or down base on the viewport wide"
    ],
    correct: 0,
    type: "single",
    explanation: "max-width: 100% prevents scaling beyond original size; height: auto maintains aspect ratio."
  },
  {
    id: 36,
    question: "Choose the right statement about the responsive column code with max-width: 768px:",
    options: [
      "When the screen (browser window) gets smaller than 768px, each column should have a width of 100%",
      "When the screen (browser window) gets greater than 768px, each column should have a width of 100%",
      "Each column should have a width of 100% for any screen wide",
      "When the screen (browser window) or mobile gets smaller than 768px, each column should have a width of 100%"
    ],
    correct: 0,
    type: "single",
    explanation: "max-width: 768px applies when screen is ≤768px, making columns full width."
  },
  {
    id: 37,
    question: "Which measurement is easier for developers but doesn't provide the best user experience?",
    options: [
      "me",
      "rem",
      "px",
      "%"
    ],
    correct: 2,
    type: "single",
    explanation: "px are easy for developers but not responsive; relative units are better for UX."
  },
  {
    id: 38,
    question: "Choose the right statement about the media query with max-width: 500px:",
    options: [
      "If the device's width is larger than 500px, the background color will change to light blue",
      "If the device's width is smaller than 500px, the background color will change to light blue",
      "If the browser window is larger than 500px, the background color will change to light blue",
      "If the browser window is smaller than 500px, the background color will change to light blue"
    ],
    correct: 3,
    type: "single",
    explanation: "max-width refers to viewport/browser window width in responsive design."
  },
  {
    id: 39,
    question: "What code do you choose to check device width is 768px or smaller?",
    options: [
      "min-device-width: 768px",
      "min-width: 768px",
      "device-width: 768px",
      "max-device-width: 768px"
    ],
    correct: 3,
    type: "single",
    explanation: "max-device-width: 768px targets devices with width ≤768px."
  },
  {
    id: 40,
    question: "Which of the following is NOT a fluid measurement?",
    options: [
      "rem",
      "px",
      "%",
      "me"
    ],
    correct: 1,
    type: "single",
    explanation: "px is an absolute unit, not fluid/responsive."
  },
  {
    id: 41,
    question: "Consider two statements about responsive design. Choose the right option:",
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 2,
    type: "single",
    explanation: "Statement 1: Correct (mobile-first). Statement 2: False (responsive uses fluid layouts, not separate ones)."
  },
  {
    id: 42,
    question: "What way is best to scale down images without scaling up beyond original size?",
    options: [
      'Using the max-width property and set up the code "max-width: 100%"',
      'Using the width property and set up the code "width: 100%"',
      'Using the min-width property and set up the code "min-width: 100%"',
      'Using the random-width property and set up the code "random-width:100%"'
    ],
    correct: 0,
    type: "single",
    explanation: "max-width: 100% limits image to its original size while allowing scaling down."
  },
  {
    id: 43,
    question: "Which Bootstrap 3 class creates two equal columns in xs viewport?",
    options: [
      "col-md-3",
      "col-sm-4",
      "col-lg-3",
      "col-xs-6"
    ],
    correct: 3,
    type: "single",
    explanation: "col-xs-6 creates 6-column width (half of 12) on extra small screens."
  },
  {
    id: 44,
    question: "Choose the right statement about viewport:",
    options: [
      "The viewport is the user's visible area of a web page",
      "The viewport is the user's device-width",
      "The viewport is a tool to test any website's responsiveness",
      "The viewport is the screen's size"
    ],
    correct: 0,
    type: "single",
    explanation: "Viewport is the visible area of the webpage in the browser window."
  },
  {
    id: 45,
    question: "Consider Bootstrap 3: <div class='col-sm-6 col-lg-4'> In a sm viewport the div will be",
    options: [
      "6",
      "4",
      "12",
      "10"
    ],
    correct: 0,
    type: "single",
    explanation: "col-sm-6 means 6 columns on small (sm) viewports and above."
  },
  {
    id: 46,
    question: "What statement block do you insert to create a list of options in <select>?",
    options: [
      "<option>a</option> <option>b</option> <option></option>",
      "<item>a</item> <item>b</item> <item></item>",
      "<list>a</list> <list>b</list> <list></list>"
    ],
    correct: 0,
    type: "single",
    explanation: "<select> dropdowns use <option> tags for each item."
  },
  {
    id: 47,
    question: "Which is the correct way to comment in HTML5?",
    options: [
      "<!-- HTML -->",
      "<#-- HTML -->",
      "<?-- HTML -->",
      "<$-- HTML -->"
    ],
    correct: 0,
    type: "single",
    explanation: "HTML comments use <!-- --> syntax."
  },
  {
    id: 48,
    question: "Which is an example of a top-level domain?",
    options: [
      ".com",
      "umich.edu",
      "wikipedia.org",
      "Lazada.com"
    ],
    correct: 0,
    type: "single",
    explanation: ".com is a TLD; others are full domain names."
  },
  {
    id: 49,
    question: "Choose the correct HTML element to define important text",
    options: [
      "<b>",
      "<strong>",
      "<i>",
      "<important>"
    ],
    correct: 1,
    type: "single",
    explanation: "<strong> indicates strong importance (semantically correct)."
  },
  {
    id: 50,
    question: "Element with mouse pointer hovering over it represents which pseudo-class?",
    options: [
      ":hover",
      ":hovar",
      ":focus",
      ":gotfocus"
    ],
    correct: 0,
    type: "single",
    explanation: ":hover applies when user hovers over element."
  },
  {
    id: 51,
    question: "How can you open a link in a new tab/browser window?",
    options: [
      '<a href="url" target="_blank">',
      '<a href="url" new>',
      '<a href="url" target="new">',
      '<a href="url" target=newtab>'
    ],
    correct: 0,
    type: "single",
    explanation: "target='_blank' opens link in new tab/window."
  },
  {
    id: 52,
    question: "How do you add shadow to elements in CSS3?",
    options: [
      "box-shadow: 10px 10px 5px grey;",
      "shadow-color: grey;",
      "shadow-right: 10px shadow-bottom: 10px;",
      "alpha-effect[shadow]: 10px 10px 5px grey;"
    ],
    correct: 0,
    type: "single",
    explanation: "box-shadow property adds shadows to elements."
  },
  {
    id: 53,
    question: "Choose the right statement about the target attribute of a tag?",
    options: [
      "Not supported in HTML5.",
      "Specifies the relationship between the linked document and the current document",
      "Specifies the relationship between the current document and the linked document",
      "Specifies where to open the linked document"
    ],
    correct: 3,
    type: "single",
    explanation: "target attribute specifies where to open the linked document."
  },
  {
    id: 54,
    question: "Which of the following are browsers?",
    options: [
      "Chrome, Firefox, Safari",
      "Firefox, Windows, Chrome",
      "Safari, Mac, Sublime, Chrome"
    ],
    correct: 0,
    type: "single",
    explanation: "Chrome, Firefox, Safari are web browsers."
  },
  {
    id: 55,
    question: "What input type sends form data to a form-handler?",
    options: [
      "button",
      "submit",
      "sendButton",
      "actionButton"
    ],
    correct: 1,
    type: "single",
    explanation: "type='submit' creates a submit button for forms."
  },
  {
    id: 56,
    question: "How many type faces inside property 'font-family'?",
    options: [
      "1",
      "Maximum 2",
      "No Limit",
      "Maximum 3"
    ],
    correct: 2,
    type: "single",
    explanation: "font-family can have multiple fallback fonts, no strict limit."
  },
  {
    id: 57,
    question: "W3C stands for",
    options: [
      "World Wide Web Consortium",
      "World Wide Web Cooperation",
      "WWW Consortium",
      "None of the others"
    ],
    correct: 0,
    type: "single",
    explanation: "W3C is World Wide Web Consortium, the web standards organization."
  },
  {
    id: 58,
    question: "Which tag is used to link from one page to another?",
    options: [
      "h1",
      "p",
      "Iframes",
      "a"
    ],
    correct: 3,
    type: "single",
    explanation: "<a> (anchor) tag creates hyperlinks."
  },
  {
    id: 59,
    question: "What should target = '_blank' do when included in a link tag?",
    options: [
      "Opens the link in a new tab or window",
      "Opens the link in a tab called '_blank'",
      "This is not a valid expression."
    ],
    correct: 0,
    type: "single",
    explanation: "target='_blank' opens link in new tab/window."
  },
  {
    id: 60,
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "a>http://fpthem.edu.vn</a>",
      '<a url="http://fpthem.edu.vn">fpt-uni</a>',
      '<a href="http://fpthem.edu.vn">fpt-uni</a>',
      '<a name="http://fpthem.edu.vn">fpt-uni</a>'
    ],
    correct: 2,
    type: "single",
    explanation: "href attribute specifies link destination in <a> tags."
  }
];