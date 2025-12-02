const questions = [
  {
    id: 1,
    question: "Which of the following property is used to set the background image of an element?",
    options: [
      "background-color",
      "background-image",
      "background-repeat",
      "background-position"
    ],
    correct: 1,
    type: "single",
    explanation: "The background-image property sets one or more background images for an element."
  },
  {
    id: 2,
    question: "Which prefix do you need to get CSS3 properties to work on older Mozilla Firefox browsers?",
    options: [
      "-webkit-",
      "-moz-",
      "-0-",
      "-gecko-"
    ],
    correct: 1,
    type: "single",
    explanation: "-moz- is the vendor prefix for Mozilla Firefox browsers."
  },
  {
    id: 3,
    question: "What is the correct HTML for referring to an external style sheet?",
    options: [
      "<style src='mystyle.css'>",
      "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
      "<stylesheet>mystyle.css</stylesheet>",
      "<link href='stylesheet' type='text/css' style='mystyle.css'>"
    ],
    correct: 1,
    type: "single",
    explanation: "The <link> tag with rel='stylesheet' and href attribute is the correct way to link external CSS."
  },
  {
    id: 4,
    question: "Descendant selectors nav a { } are more general than child selectors nav > a { }",
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: "Descendant selectors (space) match any descendant, while child selectors (>) only match direct children."
  },
  {
    id: 5,
    question: "In the following code snippet, what value is given for the bottom margin? margin: 15px 10px 3px 8px;",
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
    id: 6,
    question: "What is the default value of the position property?",
    options: [
      "fixed",
      "static",
      "absolute",
      "relative"
    ],
    correct: 1,
    type: "single",
    explanation: "The default position value is static, which follows the normal document flow."
  },
  {
    id: 7,
    question: "You want all <p> elements to be center-aligned. What syntax is correct?",
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
    id: 8,
    question: "If you want your navigation bar to remain visible even when the user scrolls downward, which type of positioning should you use?",
    options: [
      "static",
      "absolute",
      "relative",
      "fixed"
    ],
    correct: 3,
    type: "single",
    explanation: "fixed positioning keeps an element in the same place relative to the viewport, even when scrolling."
  },
  {
    id: 9,
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
    id: 10,
    question: "Which of the following property is used to set the background image of an element?",
    options: [
      "background-color",
      "background-image",
      "background-repeat",
      "background-position"
    ],
    correct: 1,
    type: "single",
    explanation: "This is a duplicate of question 1. background-image property sets background images."
  },
  {
    id: 11,
    question: "Which CSS3 property allows you to change property values smoothly over a given duration?",
    options: [
      "focus",
      "hover",
      "change",
      "transition"
    ],
    correct: 3,
    type: "single",
    explanation: "The transition property enables smooth changes between property values over a specified duration."
  },
  {
    id: 12,
    question: "How do you make the text bold?",
    options: [
      "style: bold;",
      "font-weight: bold;",
      "font: bold;",
      "text: bold;"
    ],
    correct: 1,
    type: "single",
    explanation: "font-weight: bold; is the correct CSS property for bold text."
  },
  {
    id: 13,
    question: "Which of the following is a relative unit in CSS?",
    options: [
      "pc",
      "px",
      "mm",
      "em"
    ],
    correct: 3,
    type: "single",
    explanation: "em is a relative unit that depends on the parent element's font size."
  },
  {
    id: 14,
    question: "How do you properly access the third element in an array variable named fruit?",
    options: [
      "[fruit]3",
      "fruit[3]",
      "fruit_3",
      "None of the others"
    ],
    correct: 3,
    type: "single",
    explanation: "Arrays are zero-indexed, so the third element is at index 2, but none of the first three options are correct."
  },
  {
    id: 15,
    question: "Which of the following does not generate output directly to the screen?",
    options: [
      "console.log(message);",
      "element.innerHTML = message;",
      "document.write(message);"
    ],
    correct: 0,
    type: "single",
    explanation: "console.log() outputs to the browser console, not directly to the screen."
  },
  {
    id: 16,
    question: "What is the correct JavaScript syntax to insert at the [MISSING CODE]? function myFunction(num1, num2) { // MISSING CODE }",
    options: [
      "myFunction = num1 * num2;",
      "myFunction = num1.num2;",
      "return num1.num2;",
      "return num1 * num2;"
    ],
    correct: 3,
    type: "single",
    explanation: "The return statement sends a value back from the function. Here it should return the product."
  },
  {
    id: 17,
    question: "Which of the following is not a valid method for generating output to the screen?",
    options: [
      "print",
      "document.write",
      "alert",
      "prompt"
    ],
    correct: 0,
    type: "single",
    explanation: "print() is not a standard JavaScript method for screen output (it's a browser function for printing)."
  },
  {
    id: 18,
    question: "Every valid web page can be represented as a tree. This tree is referred to as the:",
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
    question: "What statement do you use to create a new object?",
    options: [
      "var x = new Object();",
      "var x = new Number('123');",
      "var x = new product('111', 'laptop');",
      "All of the others"
    ],
    correct: 3,
    type: "single",
    explanation: "All three are valid ways to create objects in JavaScript."
  },
  {
    id: 20,
    question: "Which of the following is the proper way to link to an external JavaScript file?",
    options: [
      "<script file='file.js'></script>",
      "<script>'file.js'></script>",
      "<script = 'file.js'></script>",
      "<script href='file.js'></script>",
      "<script src='file.js'></script>"
    ],
    correct: 4,
    type: "single",
    explanation: "The correct attribute for linking external JavaScript is src='file.js'."
  },
  {
    id: 21,
    question: "var fruits = ['Banana', 'Orange', 'Apple', 'Mango']; alert(typeof(fruits)); What is the output of the above code?",
    options: [
      "'Object'",
      "'Array'",
      "'undefined'",
      "'null'"
    ],
    correct: 0,
    type: "single",
    explanation: "In JavaScript, arrays are a type of object, so typeof returns 'object'."
  },
  {
    id: 22,
    question: "What is the correct statement about the code that copies h1 content to p?",
    options: [
      "Syntax error",
      "Retrieves the text of an <h1> element and copies it into a <p> element",
      "Retrieves the text of a <p> element and copies it into an <h1> element",
      "None of the others"
    ],
    correct: 1,
    type: "single",
    explanation: "The code gets innerHTML from h1 (id01) and sets it as innerHTML of p (id02)."
  },
  {
    id: 23,
    question: "var name = prompt('What is your name?'); What value is stored in name if the user clicks Cancel?",
    options: [
      "''",
      "null",
      "Empty",
      "undefined"
    ],
    correct: 1,
    type: "single",
    explanation: "When prompt() is cancelled, it returns null."
  },
  {
    id: 24,
    question: "What code should be added to [MISSING CODE] to set the value 'mango' to the input tag with id='demo'?",
    options: [
      "document.getElementById('demo').text = arr;",
      "document.getElementById('demo').value = arr[1];",
      "document.getElementById('demo') = arr[1];",
      "document.getElementById('demo').value = arr[2];"
    ],
    correct: 1,
    type: "single",
    explanation: "arr[1] is 'mango' (zero-indexed), and input elements use the value property."
  },
  {
    id: 25,
    question: "What code should be added at [MISSING CODE] to format the border of the input field as red, 3px, solid?",
    options: [
      "input.style.border = 'red';\ninput.style.border = '3px';\ninput.style.border = 'solid';",
      "input.style.borderStyle = 'red 3px solid';",
      "input.style.border = '3px solid red';",
      "input.style.border = 'solid+3px+red';"
    ],
    correct: 2,
    type: "single",
    explanation: "The border CSS property accepts width, style, and color in one string: '3px solid red'."
  },
  {
    id: 26,
    question: "What does mnemonic mean?",
    options: [
      "That variable names should start with lowercase letters and use uppercase letters if the variable has multiple parts, e.g. firstName.",
      "That variable names should be as short as possible, preferably with no more than two or three characters.",
      "That variable names should help describe the value being stored"
    ],
    correct: 2,
    type: "single",
    explanation: "Mnemonic variable names are descriptive and help remember what the variable stores."
  },
  {
    id: 27,
    question: "Which of the following is not a valid operator?",
    options: [
      "++",
      "+=",
      "==",
      "=+",
      "-"
    ],
    correct: 3,
    type: "single",
    explanation: "=+ is not a valid operator. It might be confused with += (addition assignment)."
  },
  {
    id: 28,
    question: "Which code segment will keep people from being able to zoom in or out on your content?",
    options: [
      "<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'>",
      "<meta name='viewport' content='width=device-width, initial-scale=1'>",
      "It is impossible to lock the zoom ability",
      "All of the others"
    ],
    correct: 0,
    type: "single",
    explanation: "maximum-scale=1 prevents zooming in by limiting maximum zoom to initial scale."
  },
  {
    id: 29,
    question: "Which of the following bootstrap classes are used to add a dropdown menu?",
    options: [
      "<nav class='dropdown-menu'>",
      "<ul class='dropdown-menu'>",
      "<ul class='nav nav-pills dropdown'>"
    ],
    correct: 1,
    type: "single",
    explanation: "In Bootstrap, dropdown-menu is typically applied to <ul> elements to create dropdowns."
  },
  {
    id: 30,
    question: "Consider the following code using Bootstrap 3: <div class='col-sm-6 col-lg-4'> In a small (sm) viewport the div will be how many columns wide?",
    options: [
      "6",
      "4",
      "12",
      "10"
    ],
    correct: 0,
    type: "single",
    explanation: "col-sm-6 means 6 columns on small (sm) viewports and above, until overridden by larger breakpoints."
  },
  {
    id: 31,
    question: "Statement 1: Responsive web design is a setup of the same HTML code to all devices and CSS is used to alter the rendering of the page on the device. Statement 2: The meta viewport tag gives the browser instructions on how to adjust the dimensions and scaling of the page to the width of the device. Choose the right option:",
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 0,
    type: "single",
    explanation: "Both statements correctly describe responsive web design and the meta viewport tag."
  },
  {
    id: 32,
    question: "Statement 1: You can insert one or many 'responsive breakpoints' in your stylesheet. But you should choose a mobile-first approach to design. Statement 2: Responsive web design generates many completed layouts. These each layout is done individually for each device type. Choose the right option:",
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 2,
    type: "single",
    explanation: "Statement 1 is correct. Statement 2 is false - responsive design uses fluid layouts, not separate ones."
  },
  {
    id: 33,
    question: "1 = 1% of viewport width",
    options: [
      "vh",
      "px",
      "vw",
      "vv"
    ],
    correct: 2,
    type: "single",
    explanation: "vw stands for viewport width (1vw = 1% of viewport width)."
  },
  {
    id: 34,
    question: "Which is a true statement about using a separate 'm.' site for your content?",
    options: [
      "It is difficult to keep multiple versions of your site consistent. Any updates must be made in multiple places.",
      "Some search engines require a .m version of your site.",
      "Users have control over which version of the page they can see, regardless of the device they are using."
    ],
    correct: 0,
    type: "single",
    explanation: "Maintaining separate mobile sites (like m.site.com) requires duplicate updates and can lead to inconsistency."
  },
  {
    id: 35,
    question: "Which is a benefit of using the Bootstrap CDN?",
    options: [
      "You always are linked to the latest Bootstrap code.",
      "You are able to customize the Bootstrap values which you cannot do with a local version of the code.",
      "Using the CDN is the only way to use Bootstrap for free.",
      "All of the others"
    ],
    correct: 0,
    type: "single",
    explanation: "CDN often provides the latest version, though customization is possible with both CDN and local versions."
  },
  {
    id: 36,
    question: "Consider the following code using Bootstrap 3: <div class='col-sm-2 col-lg-4'> In a large (lg) viewport the div will be:",
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
    id: 37,
    question: "The Bootstrap grid system works across multiple devices.",
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: "Bootstrap's grid system is responsive and works across different screen sizes."
  },
  {
    id: 38,
    question: "Statement 1: You only can insert one 'responsive breakpoint' in your stylesheet. Statement 2: Insert one breakpoint for testing the viewport size which is from 768px and down. You have to do: @media only screen and (max-width:768px){ } Choose the right option:",
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 3,
    type: "single",
    explanation: "Statement 1 is false - you can have multiple breakpoints. Statement 2 is correct about max-width media query."
  },
  {
    id: 39,
    question: "What grid classes that cross the page are in the Bootstrap 3 Grid System?",
    options: [
      "sm",
      "xs",
      "md",
      "lg",
      "All of the others"
    ],
    correct: 4,
    type: "single",
    explanation: "Bootstrap 3 has xs, sm, md, and lg grid classes for different screen sizes."
  },
  {
    id: 40,
    question: "Default size of H4 bootstrap heading:",
    options: [
      "16px",
      "18px",
      "24px",
      "36px"
    ],
    correct: 1,
    type: "single",
    explanation: "Bootstrap's default h4 font-size is 18px."
  },
  {
    id: 41,
    question: "Consider the following CSS rules: div { width: 80%; } @media all and (min-width: 500px) { div { width: 25%; } } What is the width of any div elements on a 350px screen?",
    options: [
      "100%",
      "80%",
      "25%",
      "75%"
    ],
    correct: 1,
    type: "single",
    explanation: "At 350px (min-width: 500px false), the media query doesn't apply, so default 80% is used."
  },
  {
    id: 42,
    question: "The mobile version of your web page should have the same layout of every other version of your site.",
    options: [
      "True",
      "False"
    ],
    correct: 1,
    type: "single",
    explanation: "Mobile layouts are often different from desktop for better usability on small screens."
  },
  {
    id: 43,
    question: "HTML uses HTML elements to annotate documents. This is a way of marking up the content to identify specific parts.",
    options: [
      "Hypertext",
      "Tags",
      "Elements",
      "Browse"
    ],
    correct: 1,
    type: "single",
    explanation: "HTML uses tags (like <p>, <div>) to mark up and structure content."
  },
  {
    id: 44,
    question: "Which is the correct file extension for a web page?",
    options: [
      ".html",
      ".java",
      ".js",
      ".cpp"
    ],
    correct: 0,
    type: "single",
    explanation: ".html or .htm are standard extensions for HTML web pages."
  },
  {
    id: 45,
    question: "What statement block do you insert on the 3rd line to create a list of options?",
    options: [
      "<option>a</option><option>b</option><option>c</option>",
      "<item>a</item><item>b</item><item>c</item>",
      "<list>a</list><list>b</list><list>c</list>"
    ],
    correct: 0,
    type: "single",
    explanation: "<select> dropdowns use <option> tags for each selectable item."
  },
  {
    id: 46,
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "a>http://fpthem.edu.vn",
      "<a url='http://fpthem.edu.vn'>fpt-uni</a>",
      "<a href='http://fpthem.edu.vn'>fpt-uni</a>",
      "<a name='http://fpthem.edu.vn'>fpt-uni</a>"
    ],
    correct: 2,
    type: "single",
    explanation: "The href attribute specifies the link destination in <a> tags."
  },
  {
    id: 47,
    question: "Which of the following is an example of a top-level domain?",
    options: [
      ".com",
      "umich.edu",
      "wikipedia.org"
    ],
    correct: 0,
    type: "single",
    explanation: ".com is a top-level domain (TLD). umich.edu and wikipedia.org are full domain names."
  },
  {
    id: 48,
    question: "What syntax do you use to insert a comment to the page HTML?",
    options: [
      "<!-- Write your comments here -->",
      "// Write your comments here",
      "/* Write your comments here */",
      "<@!-- Write your comments here -->"
    ],
    correct: 0,
    type: "single",
    explanation: "HTML comments use <!-- --> syntax."
  },
  {
    id: 49,
    question: "Which is the best/proper way to declare the header for a page?",
    options: [
      "Option A (using <head> incorrectly)",
      "Option B (using div instead of semantic elements)",
      "Option C (incorrect header tag)",
      "Option D (correct <header> with <nav>)"
    ],
    correct: 3,
    type: "single",
    explanation: "Option D uses proper semantic HTML5: <header> for the header section and <nav> for navigation."
  },
  {
    id: 50,
    question: "Which code properly creates the nested list structure shown?",
    options: [
      "Option A (correct nested ul/ol)",
      "Option B (not provided in full)",
      "Option C (correct answer from key)"
    ],
    correct: 2,
    type: "single",
    explanation: "The correct structure uses <ul> for main list and <ol> for ordered sublist (though only option C shown in key)."
  },
  {
    id: 51,
    question: "Consider the code: <form> <input type='[missing code]' value='Send'/> </form> What option do you choose to send form data to a form-handler?",
    options: [
      "button",
      "submit",
      "sendButton",
      "actionButton"
    ],
    correct: 1,
    type: "single",
    explanation: "type='submit' creates a button that submits the form data."
  },
  {
    id: 52,
    question: "A basic functionality of browsers is to translate HTML documents into viewable webpages.",
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: "Browsers parse HTML and render it as visible web pages."
  },
  {
    id: 53,
    question: "What type is the default display value of the div tag?",
    options: [
      "single",
      "block",
      "wrap",
      "inline"
    ],
    correct: 1,
    type: "single",
    explanation: "<div> elements are block-level by default (display: block)."
  },
  {
    id: 54,
    question: "W3C stands for:",
    options: [
      "World Wide Web Consortium",
      "World Wide Web Cooperation",
      "WWW Consortium"
    ],
    correct: 0,
    type: "single",
    explanation: "W3C is the World Wide Web Consortium, the main web standards organization."
  },
  {
    id: 55,
    question: "The Domain Name Service looks up the domain and returns the:",
    options: [
      "IP address",
      "server",
      "Host",
      "Domain"
    ],
    correct: 0,
    type: "single",
    explanation: "DNS translates domain names to IP addresses."
  },
  {
    id: 56,
    question: "What should target = '_blank' do when included in a link tag?",
    options: [
      "Opens the link in a new tab or window",
      "Opens the link in a tab called '_blank'",
      "This is not a valid expression"
    ],
    correct: 0,
    type: "single",
    explanation: "target='_blank' opens the linked document in a new tab/window."
  },
  {
    id: 57,
    question: "A ___ is a computer that is in charge of handling resource requests from multiple computers.",
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
    id: 58,
    question: "What are proprietary tags?",
    options: [
      "Tags used to define ownership of the content",
      "Tags that display copyright information",
      "Tags that work only on certain browsers"
    ],
    correct: 2,
    type: "single",
    explanation: "Proprietary tags are browser-specific and not part of web standards."
  },
  {
    id: 59,
    question: "Consider the following code using Bootstrap 3: <div class='col-sm-2 col-lg-4'> In a md viewport the div will be:",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correct: 0,
    type: "single",
    explanation: "Without md class, it falls back to sm (col-sm-2) for medium viewports."
  },
  {
    id: 60,
    question: "Which class provides a responsive fixed width container?",
    options: [
      ".container-fluid",
      ".container",
      ".container-fixed",
      "All of the others"
    ],
    correct: 1,
    type: "single",
    explanation: ".container provides a fixed-width responsive container in Bootstrap."
  }
];