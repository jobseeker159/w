const questions = [
  {
    id: 1,
    question: "You want all p elements to be center-aligned. What syntax is the right?",
    options: [
      "paragraphs { color: red; text-align: center; }",
      "#p { color: red; text-align: center; }",
      "p { color: red; text-align: center; }",
      "p{ color: red; text-align: center; }"
    ],
    correct: 3,
    type: "single",
    explanation: "The element selector 'p' targets all paragraph elements. Option C and D are identical except for spacing."
  },
  {
    id: 2,
    question: "Which CSS3 property is used to center text? (Only provide the property name; do not give it a value.)",
    options: [
      "center",
      "text-align",
      "text-center",
      "align"
    ],
    correct: 1,
    type: "single",
    explanation: "text-align property is used to align text horizontally."
  },
  {
    id: 3,
    question: "Consider the code: h1 { color: blue; font-size: 20px; } Which of the following is called 'selector'?",
    options: [
      "color and font-size",
      "h1",
      "All parts of the code above",
      "blue and 20px"
    ],
    correct: 1,
    type: "single",
    explanation: "The selector is 'h1' - it selects which HTML elements to style."
  },
  {
    id: 4,
    question: "What does <thead> stand for?",
    options: [
      "The head",
      "Table head",
      "Table header",
      "The td head"
    ],
    correct: 1,
    type: "single",
    explanation: "<thead> stands for 'table head' and contains header rows in an HTML table."
  },
  {
    id: 5,
    question: "How much width will this div occupy? div{ width: 100px; padding: 10px; margin: 5px; border: 2px; }",
    options: [
      "124px",
      "100px",
      "104px",
      "134px"
    ],
    correct: 3,
    type: "single",
    explanation: "Total width = width + padding-left + padding-right + border-left + border-right = 100 + 10 + 10 + 2 + 2 = 124px. But margin is not included in element's width. The answer key says D (134px), but that includes margin which is incorrect. Following the key: 134px."
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
    question: "How do you add a background color for all <h1> elements?",
    options: [
      "h1.all {background-color:#FFFFFF;}",
      "all.h1 {background-color:#FFFFFF;}",
      "h1 {background-color:#FFFFFF;}",
      "All of the others"
    ],
    correct: 2,
    type: "single",
    explanation: "Element selector 'h1' targets all h1 elements."
  },
  {
    id: 8,
    question: "div { background-color: lightblue; width: 200px; padding: 25px; border: 25px solid navy; } Which method to choose the total width of the div tag is 200px?",
    options: [
      "box-sizing: content-box",
      "box-sizing: border-box",
      "box-sizing: Inherited"
    ],
    correct: 1,
    type: "single",
    explanation: "box-sizing: border-box includes padding and border in the element's total width."
  },
  {
    id: 9,
    question: "Which of the following is the best example of declaring at-rule in CSS?",
    options: [
      "@-import",
      "@import",
      "at-import",
      "at@import"
    ],
    correct: 1,
    type: "single",
    explanation: "@import is an at-rule used to import external stylesheets."
  },
  {
    id: 10,
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
    id: 11,
    question: "Consider the rem unit code. What is the right option?",
    options: [
      "The font-size of this document is 16px.",
      "The font-size of the div with id='mycss' is 2 x the browser's font size.",
      "The rem unit sets the font-size relative to the browsers base font-size, and will not inherit from its parents.",
      "All of the others"
    ],
    correct: 3,
    type: "single",
    explanation: "All statements are correct about rem units and the given code."
  },
  {
    id: 12,
    question: "What color font is used to display 'Hi' in the given CSS conflict example?",
    options: [
      "red",
      "green",
      "black",
      "browser default"
    ],
    correct: 2,
    type: "single",
    explanation: ".plain class (color:black) overrides other color rules due to specificity."
  },
  {
    id: 13,
    question: "Choose the right statement about the size of background images with background-size: 100% 100%?",
    options: [
      "the size of a background image was the actual size of the image",
      "Stretch the background image to completely cover the content area",
      "Stretch the background image so that exactly fit horizontally",
      "None of the others"
    ],
    correct: 1,
    type: "single",
    explanation: "background-size: 100% 100% stretches the image to cover the entire element."
  },
  {
    id: 14,
    question: "Choose the right statement about the property 'font-weight'.",
    options: [
      "The font-weight property sets how thick or thin characters in text should be displayed.",
      "The font-weight property transforms the inner text of the element to italic style",
      "The font-weight property sets the font size of the element",
      "The font-weight property sets how opacity or clear characters in text should be displayed."
    ],
    correct: 0,
    type: "single",
    explanation: "font-weight controls the thickness of text (normal, bold, etc.)."
  },
  {
    id: 15,
    question: "What tag do you use to add a JavaScript code in the HTML document?",
    options: [
      "<Scripting>",
      "<JS>",
      "<JavaScript>",
      "<Script>"
    ],
    correct: 3,
    type: "single",
    explanation: "<script> tag is used for JavaScript code."
  },
  {
    id: 16,
    question: "What is the correct syntax for referring to the external file 'mycode.js'?",
    options: [
      '<link href="mycode.js" type="javascript"/>',
      '<script href="mycode.js" type="javascript"></script>',
      '<script referring To="mycode.js" version="1.0" type="javascript"></script>',
      '<script src="mycode.js"></script>'
    ],
    correct: 3,
    type: "single",
    explanation: "src attribute specifies the external JavaScript file."
  },
  {
    id: 17,
    question: "What value is returned by 9 % 5?",
    options: [
      "4",
      "1",
      "0",
      "1.8"
    ],
    correct: 0,
    type: "single",
    explanation: "Modulo operator returns remainder: 9 ÷ 5 = 1 remainder 4."
  },
  {
    id: 18,
    question: "Every valid web page can be represented as a tree. This tree is referred to as the",
    options: [
      "DOM",
      "API",
      "JavaScript",
      "Element"
    ],
    correct: 0,
    type: "single",
    explanation: "DOM (Document Object Model) represents the document as a tree structure."
  },
  {
    id: 19,
    question: "Which method is used to search for a match, and returns the position of the match?",
    options: [
      "match()",
      "search()",
      "test()",
      "replace()"
    ],
    correct: 1,
    type: "single",
    explanation: "search() method returns the index of the first match."
  },
  {
    id: 20,
    question: "Which of the following is the proper way to link to an external JavaScript file?",
    options: [
      '<script file = "file.js"></script>',
      '<script>"file.js"></script>',
      '<script = "file.js"></script>',
      '<script href="file.js"></script>',
      '<script src = "file.js"></script>'
    ],
    correct: 4,
    type: "single",
    explanation: "src attribute specifies the external JavaScript file."
  },
  {
    id: 21,
    question: "What is the output of the array code with fruits[6] = 'Lemon'?",
    options: [
      "Syntax error",
      "Banana Orange Apple Mango undefined undefined Lemon",
      "Banana Orange Apple Mango Lemon",
      "Banana Orange Apple Mango null null Lemon"
    ],
    correct: 1,
    type: "single",
    explanation: "Array indexes 4 and 5 are undefined (empty), index 6 is 'Lemon'."
  },
  {
    id: 22,
    question: "Which of these options does NOT require the use of parentheses?",
    options: [
      "alert",
      "innerHTML",
      "document.write",
      "prompt"
    ],
    correct: 1,
    type: "single",
    explanation: "innerHTML is a property, not a method, so it doesn't use parentheses."
  },
  {
    id: 23,
    question: "What statement is right about the change() function with list styling?",
    options: [
      "To show all lists",
      "To show any list",
      "To hide all lists",
      "None of the others"
    ],
    correct: 0,
    type: "single",
    explanation: "The function sets display: 'block' on all ul elements, making them visible."
  },
  {
    id: 24,
    question: "What statement is right to change the name of the first object in the data array?",
    options: [
      'data.name = "new value"',
      'data[0].name = "new value"',
      'name = "new value"',
      "None of the others"
    ],
    correct: 1,
    type: "single",
    explanation: "data[0] accesses first object, .name modifies its name property."
  },
  {
    id: 25,
    question: "What does the script with document.getElementById('demo').innerHTML = Date(); do?",
    options: [
      "Assign the value of Date() to the element with id='demo'.",
      "Assign the value of Date() to the content of the element with id='demo'.",
      "Assign the value of Date() to the content (innerHTML) of the element with id='demo'."
    ],
    correct: 2,
    type: "single",
    explanation: "innerHTML sets the HTML content inside the element."
  },
  {
    id: 26,
    question: "What statement do you use to create a new object?",
    options: [
      "var x = new Object()",
      "var x = new Number('123')",
      "var x = new product('111', 'laptop')",
      "All of the others"
    ],
    correct: 3,
    type: "single",
    explanation: "All three are valid ways to create objects in JavaScript."
  },
  {
    id: 27,
    question: "Consider two statements about the fixed position div code. Choose the right statement.",
    options: [
      "Statement 1 is true and statement 2 is true",
      "Statement 1 is false and statement 2 is false",
      "Statement 1 is true and statement 2 is false",
      "Statement 1 is false and statement 2 is true"
    ],
    correct: 0,
    type: "single",
    explanation: "Both statements correctly describe fixed positioning and the div's placement."
  },
  {
    id: 28,
    question: "What statement do you use to display the length of the array 'fruits'?",
    options: [
      "Window.alert(fruits);",
      "Window.alert(fruits.length);",
      "Window.alert(fruits.length());",
      "Window.alert(length);"
    ],
    correct: 1,
    type: "single",
    explanation: "length property returns array size, no parentheses needed."
  },
  {
    id: 29,
    question: "When a function returns a node from the DOM, it is of type",
    options: [
      "Number",
      "Boolean",
      "Object",
      "String"
    ],
    correct: 2,
    type: "single",
    explanation: "DOM nodes are objects in JavaScript."
  },
  {
    id: 30,
    question: "Consider the CSS rules. What is the width of any div elements on a 750px screen?",
    options: [
      "80%",
      "The div won't display since media queries must go at the bottom of the screen.",
      "100%",
      "25%"
    ],
    correct: 0,
    type: "single",
    explanation: "The media query has incorrect syntax (missing div selector inside), so only the default 80% applies."
  },
  {
    id: 31,
    question: "What is Responsive Web Design?",
    options: [
      "Responsive web design makes your web page look good on all devices.",
      "Responsive web design uses only HTML and CSS.",
      "Responsive web design is not a program or JavaScript.",
      "All of the others"
    ],
    correct: 0,
    type: "single",
    explanation: "Responsive design adapts to different screen sizes."
  },
  {
    id: 32,
    question: "Consider Bootstrap 3: <div class='col-sm-2 col-lg-4'> In a large viewport, the div will be how many columns wide?",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correct: 1,
    type: "single",
    explanation: "col-lg-4 means 4 columns on large (lg) viewports."
  },
  {
    id: 33,
    question: "How big is the font of the <span> element with nested em units?",
    options: [
      "32",
      "16",
      "64",
      "8"
    ],
    correct: 3,
    type: "single",
    explanation: "div=32px, p=.5em=16px, span=.5em of parent (p)=8px."
  },
  {
    id: 34,
    question: "Consider the CSS print media query. Which statement is true?",
    options: [
      "The div elements will have a width of 25% only when the page is printed.",
      "The div elements will only be visible when the page is printed.",
      "The div elements will have a width of 80% only when the page is printed."
    ],
    correct: 0,
    type: "single",
    explanation: "@media print applies styles only when printing."
  },
  {
    id: 35,
    question: "What do you do if you have large content that needs to be displayed on the page?",
    options: [
      "Use a vertical scroll on both desktop and mobile devices, but not horizontally.",
      "Use a horizontal scroll on both desktop and mobile devices, but not vertically.",
      "Use both horizontal and vertical scroll on both desktop and mobile devices.",
      "Do nothing."
    ],
    correct: 0,
    type: "single",
    explanation: "Vertical scrolling is standard; horizontal scrolling is generally avoided."
  },
  {
    id: 36,
    question: "Consider the CSS rules. What is the width of any div elements on a 350px screen?",
    options: [
      "100%",
      "80%",
      "25%",
      "75%"
    ],
    correct: 1,
    type: "single",
    explanation: "At 350px (min-width: 500px false), media query doesn't apply, so default 80% is used."
  },
  {
    id: 37,
    question: "Responsive sites can have a mixture of fluid and absolute measurements.",
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: "Responsive designs often mix relative and absolute units as needed."
  },
  {
    id: 38,
    question: "Bootstrap uses:",
    options: [
      "JavaScript",
      "HTML, CSS, and JavaScript",
      "HTML",
      "CSS"
    ],
    correct: 1,
    type: "single",
    explanation: "Bootstrap is a framework using HTML, CSS, and JavaScript."
  },
  {
    id: 39,
    question: "Which class adds zebra-stripes to a table?",
    options: [
      "table-bordered",
      "table-striped",
      ".even and .odd",
      ".table-zebra"
    ],
    correct: 1,
    type: "single",
    explanation: "table-striped class adds alternating row colors in Bootstrap."
  },
  {
    id: 40,
    question: "The Bootstrap 3 grid system is based on how many columns?",
    options: [
      "10",
      "12",
      "14",
      "16"
    ],
    correct: 1,
    type: "single",
    explanation: "Bootstrap uses a 12-column grid system."
  },
  {
    id: 41,
    question: "Which statement best describes what pixels, ems, and rems have in common?",
    options: [
      "They are all units of measurement used to define the length of elements on a webpage.",
      "They are all fluid units of measurement used to define the length of elements on a webpage.",
      "They are all fluid units of measurement that define the screen resolution of a page."
    ],
    correct: 0,
    type: "single",
    explanation: "All are CSS length units (px absolute, em/rem relative)."
  },
  {
    id: 42,
    question: "Which code segment will prevent users from being able to zoom in or out on your content?",
    options: [
      "<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'>",
      "<meta name='viewport' content='width=device-width, initial-scale=1'>",
      "It is impossible to lock the zoom ability",
      "All of the others"
    ],
    correct: 0,
    type: "single",
    explanation: "maximum-scale=1 prevents zooming in by limiting maximum zoom."
  },
  {
    id: 43,
    question: "Which fluid measurement type returns a percentage of the viewport height?",
    options: [
      "vh",
      "vw",
      "height",
      "line-height"
    ],
    correct: 0,
    type: "single",
    explanation: "vh = viewport height (1vh = 1% of viewport height)."
  },
  {
    id: 44,
    question: "Which fluid measurement type returns a percentage of the viewport width?",
    options: [
      "vw",
      "vh",
      "v",
      "hw"
    ],
    correct: 0,
    type: "single",
    explanation: "vw = viewport width (1vw = 1% of viewport width)."
  },
  {
    id: 45,
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
    id: 46,
    question: "Choose the correct HTML tag to make an emphasized text",
    options: [
      "u tag",
      "l tag",
      "i tag",
      "strong tag"
    ],
    correct: 1,
    type: "single",
    explanation: "Assuming 'l tag' means <em> (emphasis). The answer key shows B, likely referring to <em>."
  },
  {
    id: 47,
    question: "The reverse attribute allows a list to appear in a reverse order in an unordered list.",
    options: [
      "True",
      "False"
    ],
    correct: 1,
    type: "single",
    explanation: "reverse attribute works with <ol> (ordered lists), not <ul>."
  },
  {
    id: 48,
    question: "Which is the best/proper way to declare a section with h2 and unordered list?",
    options: [
      "Option A (incorrect structure)",
      "Option B (incorrect structure)",
      "Option C (incorrect structure)",
      "Option D (correct: <section><h2>Favorite Foods</h2><ul>...</ul></section>)"
    ],
    correct: 3,
    type: "single",
    explanation: "Option D uses proper semantic structure with <ul> inside <section>."
  },
  {
    id: 49,
    question: "You want to create a hyperlink that links to the Google page. What is the best option?",
    options: [
      '<a href="http://www.google.com">my_link</a>',
      '<a name="http://www.google.com" target="_blank">my_link</a>',
      '<a id="http://www.google.com" target="_top">my_link</a>',
      '<a reference="http://www.google.com">my_link</a>'
    ],
    correct: 0,
    type: "single",
    explanation: "href attribute specifies the link URL."
  },
  {
    id: 50,
    question: "The components of a URL are",
    options: [
      "service, hostname and directory path",
      "service, hostname, port, directory-path",
      "service, port and directory path",
      "service, hostname and port"
    ],
    correct: 1,
    type: "single",
    explanation: "URL components include protocol (service), hostname, port, and path."
  },
  {
    id: 51,
    question: "Which of the following are object-oriented concepts?",
    options: [
      "Modules and interfaces",
      "Modules and information hiding",
      "Classes, information hiding, and inheritance",
      "Concurrency and information hiding"
    ],
    correct: 2,
    type: "single",
    explanation: "Classes, encapsulation (information hiding), and inheritance are core OOP concepts."
  },
  {
    id: 52,
    question: "The first graphical browser was...",
    options: [
      "Mosaic",
      "Chrome",
      "Viola"
    ],
    correct: 0,
    type: "single",
    explanation: "Mosaic was the first widely used graphical web browser."
  },
  {
    id: 53,
    question: "W3C stands for",
    options: [
      "World Wide Web Consortium",
      "World Wide Web Cooperation",
      "WWW Consortium",
      "None of the others"
    ],
    correct: 0,
    type: "single",
    explanation: "W3C is the World Wide Web Consortium."
  },
  {
    id: 54,
    question: "Which of the following is an example of a top-level domain?",
    options: [
      ".com",
      "umich.edu",
      "wikipedia.org"
    ],
    correct: 0,
    type: "single",
    explanation: ".com is a TLD; others are full domain names."
  },
  {
    id: 55,
    question: "Which of the following is used to represent an unvisited hyperlink?",
    options: [
      ".link",
      ".nonvisited",
      ".unvisited",
      ".fresh"
    ],
    correct: 0,
    type: "single",
    explanation: ":link pseudo-class represents unvisited links."
  },
  {
    id: 56,
    question: "These are special codes which separate HTML from ordinary text.",
    options: [
      "frames",
      "Tags",
      "Frameset",
      "All of the others"
    ],
    correct: 1,
    type: "single",
    explanation: "HTML tags mark up content and separate it from plain text."
  },
  {
    id: 57,
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a>http://fpthem.edu.vn</a>",
      '<a url="http://fpthem.edu.vn">fpt-uni</a>',
      '<a href="http://fpthem.edu.vn">fpt-uni</a>',
      '<a name="http://fpthem.edu.vn">fpt-uni</a>'
    ],
    correct: 2,
    type: "single",
    explanation: "href attribute specifies the link destination."
  },
  {
    id: 58,
    question: "What validation error will this code produce?",
    options: [
      "Element head is missing a required instance of the child element title.",
      "End of file seen when expecting text or an end tag.",
      "No error."
    ],
    correct: 0,
    type: "single",
    explanation: "HTML requires <title> element inside <head>."
  },
  {
    id: 59,
    question: "Which of the following are browsers?",
    options: [
      "Chrome, Firefox, Safari",
      "Firefox, Windows, Chrome",
      "Safari, Mac, Sublime, Chrome",
      "Safari, Chrome, NetBeans"
    ],
    correct: 0,
    type: "single",
    explanation: "Chrome, Firefox, Safari are web browsers."
  },
  {
    id: 60,
    question: "Every well-formed HTML document should include",
    options: [
      "doctype, head, body",
      "doctype, header, body",
      "header, nav, footer"
    ],
    correct: 0,
    type: "single",
    explanation: "HTML documents need doctype, <html>, <head>, and <body>."
  }
];