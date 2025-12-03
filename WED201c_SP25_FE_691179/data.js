const questions = [
  {
    id: 1,
    question: `The image will scale down if it has to, but never scale up to be larger than its original size. Which code is right?`,
    options: [
      "Width: 100%",
      "Max-width: 100%",
      "Scale: 100%",
      "Min-width: 100%"
    ],
    correct: 1,
    type: "single",
    explanation: `Using max-width: 100% ensures the image scales down when necessary but never scales up beyond its original dimensions. This is a common technique for responsive images.`
  },
  {
    id: 2,
    question: `What selector does the # symbol specify?`,
    options: [
      "Class",
      "Tags",
      "Id",
      "Pseudo-class"
    ],
    correct: 2,
    type: "single",
    explanation: `The # symbol is used to select elements by their id attribute in CSS. For example: #header { color: red; }`
  },
  {
    id: 3,
    question: `Which is the correct CSS syntax?`,
    options: [
      "{body:color:black;}",
      "body:color=black;",
      "{body:color=black;}",
      "body {color: black;}"
    ],
    correct: 3,
    type: "single",
    explanation: `The correct CSS syntax follows the pattern: selector { property: value; }`
  },
  {
    id: 4,
    question: `Which of the following option is the layout mode that is easy to design a flexible responsive layout?`,
    options: [
      "The table mode",
      "The position mode",
      "The Float mode",
      "The Flexible Box Layout"
    ],
    correct: 3,
    type: "single",
    explanation: `Flexbox (Flexible Box Layout) is designed for creating flexible and responsive layouts that work well across different screen sizes.`
  },
  {
    id: 5,
    question: `What unit is used to specify the size of an element that relative to the parent element?`,
    options: [
      "Vmax",
      "Vmin",
      "%",
      "Px"
    ],
    correct: 2,
    type: "single",
    explanation: `Percentage (%) units are relative to the size of the parent element. For example: width: 50% makes the element 50% as wide as its parent.`
  },
  {
    id: 6,
    question: `Which of the following property is used to set the text shadow around a text?`,
    options: [
      "white-space",
      "text-shadow",
      "text-decoration",
      "text-transform"
    ],
    correct: 1,
    type: "single",
    explanation: `The text-shadow property adds shadow to text. Syntax: text-shadow: h-shadow v-shadow blur-radius color;`
  },
  {
    id: 7,
    question: `In the following code snippet, what value is given for the bottom margin: margin: 15px 19px 3px 8px;`,
    options: [
      "5px",
      "10px",
      "3px",
      "8px"
    ],
    correct: 2,
    type: "single",
    explanation: `In CSS margin shorthand: margin: top right bottom left; So the third value (3px) is the bottom margin.`
  },
  {
    id: 8,
    question: `Consider the CSS code:<br><br>
<pre>div {
    transform: translate(50px, 100px);
}</pre><br>
Choose the right statement about the above code:`,
    options: [
      "Moves an element from its current position",
      "Moves an element from its (0,0) position",
      "Moves the &lt;div&gt; element 50 pixels to the right, and 100 pixels down from its current position",
      "Moves the &lt;div&gt; element 50 pixels to the right, and 100 pixels down from its (0,0) position"
    ],
    correct: 2,
    type: "single",
    explanation: `The translate() function moves an element relative to its current position. translate(50px, 100px) moves it 50px right and 100px down.`
  },
  {
    id: 9,
    question: `The # symbol specifies that the selector is?`,
    options: [
      "Class",
      "Tags",
      "Id",
      "Pseudo-class"
    ],
    correct: 2,
    type: "single",
    explanation: `#id-selector targets elements with a specific id attribute. Example: #header { } selects <div id="header">`
  },
  {
    id: 10,
    question: `How do you make each word in a text start with a capital letter?`,
    options: [
      "text-transform: capitalize",
      "transform: capitalize",
      "text-style: capitalize",
      "style capitalize"
    ],
    correct: 0,
    type: "single",
    explanation: `text-transform: capitalize transforms the first character of each word to uppercase.`
  },
  {
    id: 11,
    question: `Which of the following property is used to set the background image of an element?`,
    options: [
      "background-color",
      "background-image",
      "background-repeat",
      "background-position"
    ],
    correct: 1,
    type: "single",
    explanation: `background-image: url('image.jpg'); sets a background image for an element.`
  },
  {
    id: 12,
    question: `Descendant selectors (nav a { ... }) are more general than child selectors (nav > a { ... })`,
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: `Descendant selectors (space) match all descendants, while child selectors (>) only match direct children, making descendant selectors more general.`
  },
  {
    id: 13,
    question: `Which of the following line of code can be used to hide the image?`,
    options: [
      "img { display: 0; }",
      "img { display: block; }",
      "img { display: none; }",
      "img { display: empty; }"
    ],
    correct: 2,
    type: "single",
    explanation: `display: none; completely removes the element from the document flow, making it invisible.`
  },
  {
    id: 14,
    question: `Which snippet of CSS is commonly used to center a website horizontally?`,
    options: [
      "site-align: center",
      "margin: center",
      "margin: auto 0",
      "margin: 0 auto"
    ],
    correct: 3,
    type: "single",
    explanation: `margin: 0 auto; centers block-level elements horizontally within their container. 0 sets top/bottom margins, auto distributes left/right space equally.`
  },
  {
    id: 15,
    question: `What is the correct CSS syntax for making all the tag's font-size 14px?`,
    options: [
      'font: "14px";',
      "font-size: 14px;",
      "text-size: 14px;",
      "font-weight: 14px;"
    ],
    correct: 1,
    type: "single",
    explanation: `font-size: 14px; sets the text size to 14 pixels. font-size is the correct property for controlling text size.`
  },
  {
    id: 16,
    question: `Variables allow you to save data.`,
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: `In programming languages like JavaScript and CSS (with custom properties), variables allow storing and reusing values.`
  },
  {
    id: 17,
    question: `Consider the JavaScript code:<br><br>
<pre>function myFunction(a, b) {
    return a + b;
}</pre><br>
What code is the right statement to assign the sum of two integers 4,3 to the p tag?`,
    options: [
      'document.getElementById("demo").innerHTML = myFunction(4,3);',
      '&lt;p onClick="myFunction(4,3)"&gt;&lt;/p&gt;',
      'document.getElementById("demo").innerHTML = "4" + "3";',
      'document.getElementById("demo").innerHTML = myFunction("4","3");'
    ],
    correct: 0,
    type: "single",
    explanation: `document.getElementById("demo").innerHTML = myFunction(4,3); calls the function with numbers 4 and 3, adds them (result 7), and displays it in the element with id="demo".`
  },
  {
    id: 18,
    question: `Consider the JavaScript code:<br><br>
<pre>function change(obj) {
    while(obj.length &gt; 0) obj.remove(0);
}

&lt;select onchange="change(this)"&gt;
  &lt;option&gt;XS&lt;/option&gt;
  &lt;option&gt;S&lt;/option&gt;
  &lt;option&gt;M&lt;/option&gt;
&lt;/select&gt;</pre><br>
Choose a right statement:`,
    options: [
      "None of the others",
      "Remove an option",
      "Remove an option by zero-based index",
      "Remove all options by their index"
    ],
    correct: 3,
    type: "single",
    explanation: `The while loop removes options one by one starting from index 0 until no options remain, effectively removing all options from the select element.`
  },
  {
    id: 19,
    question: `Assume you have a page with four paragraph tags. What is the proper JavaScript code to change the content of the second paragraph to "What does the Fox say?"`,
    options: [
      'document.getElementById("second").innerHTML = "What does the Fox say?"',
      'document.getElementById("TagName(\'p\').innerHTML = "What does the Fox say?"',
      'document.getElementById("TagName(\'p\')[1].innerHTML = "What does the Fox say?"',
      'document.getElementById("p\')[2].innerHTML = "What does the Fox say?"',
      'document.getElementById("TagName(\'p\')[2].innerHTML = "What does the Fox say?"'
    ],
    correct: 2,
    type: "single",
    explanation: `document.getElementsByTagName('p')[1].innerHTML accesses the second paragraph (index 1 in zero-based indexing) and changes its content.`
  },
  {
    id: 20,
    question: `Which of the following function of String object returns the calling string value converted to lower case?`,
    options: [
      "toLocalLowerCase()",
      "toLowerCase()",
      "toString().LowerCase",
      "substring().LowerCase"
    ],
    correct: 1,
    type: "single",
    explanation: `The toLowerCase() method returns the calling string value converted to lowercase. Example: "HELLO".toLowerCase() returns "hello".`
  },
  {
    id: 21,
    question: `Consider the JavaScript code:<br><br>
<pre>var obj = document.createElement("img")
var tag = document.getElementById("demo")</pre><br>
What statement is the right to append obj object to tag object in the 3rd line?`,
    options: [
      "tag.innerHTML = obj",
      "tag.value = obj",
      "tag.text = obj",
      "tag.appendChild(obj)"
    ],
    correct: 3,
    type: "single",
    explanation: `The appendChild() method adds a node to the end of the list of children of a specified parent node. This is the proper way to add created elements to the DOM.`
  },
  {
    id: 22,
    question: `Consider the JavaScript array:<br><br>
<pre>var Person = [ 
  {firstName:"Mai", lastName:"Nguyen", age:46}, 
  {firstName: "Nga", lastName:"Tran", age:40} 
];</pre><br>
What statement do you use to change name = "Nga" to "My"?`,
    options: [
      'Person.firstName = "My"',
      'Person[0].firstName = "My"',
      'Person[1].firstName = "My"',
      'none of the others'
    ],
    correct: 2,
    type: "single",
    explanation: `Person[1].firstName accesses the firstName property of the second object in the array (index 1, zero-based) and changes it from "Nga" to "My".`
  },
  {
    id: 23,
    question: `What statement do you insert to get a list of images in p tag?<br><br>
HTML:<br>
<pre>&lt;p id="abc"&gt;
  &lt;img src="h1.jpg"&gt;
  &lt;img src="h2.jpg"&gt;
  &lt;img src="h3.jpg"&gt;
&lt;/p&gt;</pre>`,
    options: [
      'var list = "abc".getElementsByTagName("img")',
      'var list = document.getElementById("abc").getElementsByTagName("img")',
      'var list = document.getElementById("abc").getElementsByClassName("img")',
      'var list = document.getElementById("abc").getElementsByName("img")'
    ],
    correct: 1,
    type: "single",
    explanation: `document.getElementById("abc").getElementsByTagName("img") first gets the paragraph element with id="abc", then gets all img elements inside it.`
  },
  {
    id: 24,
    question: `Which of the following is not a valid operator?`,
    options: [
      "++",
      "+=",
      "==",
      "=+",
      "--"
    ],
    correct: 3,
    type: "single",
    explanation: `"=+" is not a valid JavaScript operator. The correct increment operator is "++", and assignment with addition is "+=".`
  },
  {
    id: 25,
    question: `Which of the following is not a valid method for generating output to the screen?`,
    options: [
      "print",
      "document.write",
      "alert",
      "prompt"
    ],
    correct: 0,
    type: "single",
    explanation: `While print() exists in some contexts, it's not a standard JavaScript method for screen output like document.write(), alert(), or prompt().`
  },
  {
    id: 26,
    question: `What does it mean that variables are case-sensitive?`,
    options: [
      "That all variables must use lowercase letters",
      "That the computer does not think that the variables name and Name are the same thing",
      "That all variables must use uppercase letters"
    ],
    correct: 1,
    type: "single",
    explanation: `Case-sensitive means myVariable and myvariable are treated as different identifiers. JavaScript is case-sensitive.`
  },
  {
    id: 27,
    question: `Boolean variables store either true or false.`,
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: `Boolean is a data type that can only have two values: true or false.`
  },
  {
    id: 28,
    question: `Which of these is not valid? (Hint, pay attention to if the method should return one thing or many things...)`,
    options: [
      "document.getElementsById(idName)",
      "document.getElementsByClassName(className)",
      "document.getElementsByTagName(tagName)",
      "document.getname(Name)"
    ],
    correct: 3,
    type: "single",
    explanation: `There is no document.getname() method. The correct methods are getElementById (singular), getElementsByClassName, and getElementsByTagName.`
  },
  {
    id: 29,
    question: `Consider the code:<br><br>
<pre>function change(obj) {
    obj.innerHTML = Date();
}

&lt;button&gt;click me&lt;/button&gt;</pre><br>
What is the right option to call the method change() when clicking on the button?`,
    options: [
      '&lt;a href="change(this)"&gt;&lt;button&gt;click me&lt;/button&gt;&lt;/a&gt;',
      '&lt;a src="change(this)"&gt;&lt;button&gt;click me&lt;/button&gt;&lt;/a&gt;',
      '&lt;button click="change(this)"&gt;click me&lt;/button&gt;',
      '&lt;button onClick="change()"&gt;click me&lt;/button&gt;',
      '&lt;button onClick="change(this)"&gt;click me&lt;/button&gt;'
    ],
    correct: 4,
    type: "single",
    explanation: `onClick="change(this)" passes the button element itself to the function, allowing obj.innerHTML to work on the button element.`
  },
  {
    id: 30,
    question: `What is the difference between == and === ?`,
    options: [
      "The === operator only checks for equivalent values, not equivalent type too",
      "The == operator only checks for equivalent values, not equivalent type too",
      "The == operator is the assignment operator, while === is the equality operator"
    ],
    correct: 1,
    type: "single",
    explanation: `== performs type coercion before comparison (so '5' == 5 is true), while === requires both value AND type to be equal (so '5' === 5 is false).`
  },
  {
    id: 31,
    question: `1 = 1% of viewport width`,
    options: [
      "vh",
      "px",
      "vw",
      "etc"
    ],
    correct: 2,
    type: "single",
    explanation: `vw (viewport width) units represent a percentage of the viewport's width. 1vw = 1% of viewport width.`
  },
  {
    id: 32,
    question: `Consider the following CSS rules:<br><br>
<pre>div { width: 80%; }
@media all and (min-width: 500px) {
    div { width: 25%; }
}</pre><br>
What is the width of any div elements on a 750px screen?`,
    options: [
      "80%",
      "100%",
      "25%",
      "75%"
    ],
    correct: 2,
    type: "single",
    explanation: `On a 750px screen, the media query condition (min-width: 500px) is true, so the width: 25% rule applies, overriding the 80% rule.`
  },
  {
    id: 33,
    question: `Choose the right statement about the class .col-xs-* in the Bootstrap 3 Grid System:`,
    options: [
      "The columns will automatically stack on top of each other when the screen is greater than 768px wide",
      "for phones - screens less than 768px wide",
      "shows how to get some equal-width columns starting at tablets and scaling to large desktops",
      "On mobile phones or screens that are greater than 996px wide, the columns will automatically stack"
    ],
    correct: 1,
    type: "single",
    explanation: `In Bootstrap 3, .col-xs-* classes are for extra small devices (phones) with screens less than 768px wide.`
  },
  {
    id: 34,
    question: `Consider the following CSS rules:<br><br>
<pre>div { width: 80%; }
@media all and (min-width: 500px) {
    div { width: 25%; }
}</pre><br>
What is the width of any div elements on a 750px screen?`,
    options: [
      "80%",
      "100%",
      "25%",
      "75%"
    ],
    correct: 2,
    type: "single",
    explanation: `This is the same as question 32. The media query applies when screen width is ≥500px, so at 750px, width is 25%.`
  },
  {
    id: 35,
    question: `Choose the right statement about the code below:<br><br>
<pre>img {
    max-width: 100%;
    height: auto;
}</pre>`,
    options: [
      "the image will scale down if it has to, but never scale up to be larger than its original size",
      "the image can be scaled up to be larger than its original size",
      "the image is displayed in the same its original size",
      "The image can scale up or down base on the viewport wide"
    ],
    correct: 0,
    type: "single",
    explanation: `max-width: 100% allows images to scale down to fit containers but prevents scaling beyond original size. height: auto maintains aspect ratio.`
  },
  {
    id: 36,
    question: `Choose the right statement about the code below:<br><br>
<pre>@media only screen and (max-width: 768px) {
    [class="col-"] {
        width: 100%;
    }
}</pre>`,
    options: [
      "When the screen (browser window) gets smaller than 768px, each column should have a width of 100%",
      "When the screen (browser window) gets greater than 768px, each column should have a width of 100%",
      "Each column should have a width of 100% for any screen wide",
      "When the screen (browser window) or mobile gets smaller than 768px, each column should have a width of 100%"
    ],
    correct: 0,
    type: "single",
    explanation: `The media query applies when max-width is 768px or less (screens ≤768px). At that size, columns with class containing "col-" become full-width.`
  },
  {
    id: 37,
    question: `Which measurement is easier and comfortable for the designer/developer to use when coding their CSS but does not provide the best experience for the user?`,
    options: [
      "me",
      "rem",
      "px",
      "%"
    ],
    correct: 2,
    type: "single",
    explanation: `px (pixels) are easy for developers but don't scale well for accessibility. Relative units like rem, em, and % are better for user experience.`
  },
  {
    id: 38,
    question: `Consider the below code:<br><br>
<pre>@media only screen and (max-width: 500px) {
    body {
        background-color: lightblue;
    }
}</pre><br>
Choose the right statement.`,
    options: [
      "If the device's width is larger than 500px, the background color will change to light blue",
      "If the device's width is smaller than 500px, the background color will change to light blue",
      "If the browser window is larger than 500px, the background color will change to light blue",
      "If the browser window is smaller than 500px, the background color will change to light blue"
    ],
    correct: 3,
    type: "single",
    explanation: `The media query uses max-width: 500px which triggers when the viewport/browser window is 500px or less, changing the background to light blue.`
  },
  {
    id: 39,
    question: `What of the following code do you choose to insert to check device width is 768px or smaller?<br><br>
<pre>@media only screen and ([MISSING CODE]) {
    body {
        background-image: url('img_flowers.jpg');
    }
}</pre>`,
    options: [
      "min-device-width: 768px",
      "min-width: 768px",
      "device-width: 768px",
      "max-device-width: 768px"
    ],
    correct: 3,
    type: "single",
    explanation: `max-device-width: 768px targets devices with screen width of 768px or less. This is commonly used for mobile-responsive design.`
  },
  {
    id: 40,
    question: `Which of the following is NOT a fluid measurement?`,
    options: [
      "rem",
      "px",
      "%",
      "me"
    ],
    correct: 1,
    type: "single",
    explanation: `px (pixels) is an absolute unit, not fluid. Fluid measurements like %, rem, em, vw, vh adjust relative to parent elements or viewport.`
  },
  {
    id: 41,
    question: `Consider two statements:
Statement 1: You can insert one or many "responsive breakpoints" in your stylesheet. But you should choose a mobile-first approach to design.
Statement 2: Responsive web design generates many completed layouts. These each layout is done individually for each device type.
Choose the right option`,
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 2,
    type: "single",
    explanation: `Statement 1 is true (mobile-first design with breakpoints is recommended). Statement 2 is false (responsive design uses one flexible layout, not separate layouts for each device).`
  },
  {
    id: 42,
    question: `What way is the best choice if you want to scale down if the image has to, but never scale up to be larger than its original size?`,
    options: [
      "Using the max-width property and set up the code 'max-width: 100%'",
      "Using the width property and set up the code 'width: 100%'",
      "Using the min-width property and set up the code 'min-width: 100%'",
      "Using the random-width property and set up the code 'random-width:100%'"
    ],
    correct: 0,
    type: "single",
    explanation: `max-width: 100% allows images to shrink to fit containers but prevents them from enlarging beyond their natural dimensions.`
  },
  {
    id: 43,
    question: `Which of the following code using Bootstrap 3 to insert to set up two equal columns in an xs viewport?<br><br>
<pre>&lt;div class="row"&gt;
  &lt;div class="MISSING CODE"&gt;&lt;/div&gt;
  &lt;div class="MISSING CODE"&gt;&lt;/div&gt;
&lt;/div&gt;</pre>`,
    options: [
      "col-md-3",
      "col-sm-4",
      "col-lg-3",
      "col-xs-6"
    ],
    correct: 3,
    type: "single",
    explanation: `In Bootstrap 3, col-xs-6 creates two equal columns (each 6 of 12 columns) for extra small (xs) viewports. 6 + 6 = 12 columns total.`
  },
  {
    id: 44,
    question: `Choose the right statement about viewport.`,
    options: [
      "The viewport is the user's visible area of a web page",
      "The viewport is the user's device-width",
      "The viewport is a tool to test any website's responsiveness",
      "The viewport is the screen's size"
    ],
    correct: 0,
    type: "single",
    explanation: `The viewport is the visible area of a webpage in the browser window, which varies by device and can be controlled with the viewport meta tag.`
  },
  {
    id: 45,
    question: `Consider the following code using Bootstrap 3:<br><br>
<pre>&lt;div class="col-sm-6 col-lg-4"&gt;</pre><br>
In a sm viewport the div will be how many columns wide?`,
    options: [
      "6",
      "4",
      "12",
      "10"
    ],
    correct: 0,
    type: "single",
    explanation: `In Bootstrap, col-sm-6 applies to small (sm) viewports and above. At sm viewport size, the div will be 6 columns wide (out of 12).`
  },
  {
    id: 46,
    question: `What statement block do you insert to create a list of options?<br><br>
<pre>&lt;select&gt;
  [MISSING CODE]
&lt;/select&gt;</pre>`,
    options: [
      "&lt;option&gt;a&lt;/option&gt; &lt;option&gt;b&lt;/option&gt; &lt;option&gt;c&lt;/option&gt;",
      "&lt;item&gt;a&lt;/item&gt; &lt;item&gt;b&lt;/item&gt; &lt;item&gt;c&lt;/item&gt;",
      "&lt;list&gt;a&lt;/list&gt; &lt;list&gt;b&lt;/list&gt; &lt;list&gt;c&lt;/list&gt;"
    ],
    correct: 0,
    type: "single",
    explanation: `HTML select elements use <option> tags to define the available options in a dropdown list.`
  },
  {
    id: 47,
    question: `Which of the following is the correct way to comment on HTML5?`,
    options: [
      "&lt;!-- HTML --&gt;",
      "&lt;#-- HTML --&gt;",
      "&lt;?-- HTML --&gt;",
      "&lt;$-- HTML --&gt;"
    ],
    correct: 0,
    type: "single",
    explanation: `HTML comments use the syntax: <!-- comment text -->. This works in all HTML versions, including HTML5.`
  },
  {
    id: 48,
    question: `Which of the following is an example of a top-level domain?`,
    options: [
      ".com",
      "umich.edu",
      "wikipedia.org",
      "Lazada.com"
    ],
    correct: 0,
    type: "single",
    explanation: `.com is a top-level domain (TLD). umich.edu and wikipedia.org are full domain names, with .edu and .org being the TLDs.`
  },
  {
    id: 49,
    question: `Choose the correct HTML element to define important text`,
    options: [
      "&lt;b&gt;",
      "&lt;strong&gt;",
      "&lt;i&gt;",
      "&lt;important&gt;"
    ],
    correct: 1,
    type: "single",
    explanation: `<strong> indicates that its contents have strong importance, seriousness, or urgency. <b> is for stylistic bold without semantic importance.`
  },
  {
    id: 50,
    question: `Element that currently has the user's mouse pointer hovering over it represents one of the following Pseudo Class.`,
    options: [
      ":hover",
      ":hovar",
      ":focus",
      ":gotfocus"
    ],
    correct: 0,
    type: "single",
    explanation: `The :hover pseudo-class applies when the user interacts with an element with a pointing device (like mouse), but does not necessarily activate it.`
  },
  {
    id: 51,
    question: `How can you open a link in a new tab/browser window?`,
    options: [
      '&lt;a href="url" target="_blank"&gt;',
      '&lt;a href="url" new&gt;',
      '&lt;a href="url" target="new"&gt;',
      '&lt;a href="url" target=newtab&gt;'
    ],
    correct: 0,
    type: "single",
    explanation: `target="_blank" opens the linked document in a new tab or window (depending on browser settings).`
  },
  {
    id: 52,
    question: `How do you add shadow to elements in CSS3?`,
    options: [
      "box-shadow: 10px 10px 5px grey;",
      "shadow-color: grey;",
      "shadow-right: 10px shadow-bottom: 10px;",
      "alpha-effect[shadow]: 10px 10px 5px grey;"
    ],
    correct: 0,
    type: "single",
    explanation: `box-shadow: h-offset v-offset blur-radius color; is the correct CSS3 syntax for adding shadows to elements.`
  },
  {
    id: 53,
    question: `Choose the right statement about the target attribute of a tag?`,
    options: [
      "Not supported in HTML5",
      "Specifies the relationship between the linked document and the current document",
      "Specifies the relationship between the current document and the linked document",
      "Specifies where to open the linked document"
    ],
    correct: 3,
    type: "single",
    explanation: `The target attribute specifies where to open the linked document (e.g., _blank for new tab, _self for same tab).`
  },
  {
    id: 54,
    question: `Which of the following are browsers?`,
    options: [
      "Chrome, Firefox, Safari",
      "Firefox, Windows, Chrome",
      "Safari, Mac, Sublime, Chrome"
    ],
    correct: 0,
    type: "single",
    explanation: `Chrome, Firefox, and Safari are web browsers. Windows and Mac are operating systems, Sublime is a text editor.`
  },
  {
    id: 55,
    question: `Consider the code:<br><br>
<pre>&lt;form&gt;
    &lt;input type="[missing code]" value="Send"/&gt;
&lt;/form&gt;</pre><br>
What option do you choose to send form data to a form-handler?`,
    options: [
      "button",
      "submit",
      "sendButton",
      "actionButton"
    ],
    correct: 1,
    type: "single",
    explanation: `<input type="submit"> creates a submit button. When clicked, it sends the form data to the form-handler specified in the form's action attribute.`
  },
  {
    id: 56,
    question: `How many type faces inside property "font-family"?`,
    options: [
      "1",
      "Maximum 2",
      "No Limit",
      "Maximum 3"
    ],
    correct: 2,
    type: "single",
    explanation: `The font-family property can contain multiple font names as a "fallback" system. If the first font isn't available, the browser tries the next one. There's no strict limit.`
  },
  {
    id: 57,
    question: `W3C stands for`,
    options: [
      "World Wide Web Consortium",
      "World Wide Web Cooperation",
      "WWW Consortium",
      "None of the others"
    ],
    correct: 0,
    type: "single",
    explanation: `W3C stands for World Wide Web Consortium, an international community that develops web standards.`
  },
  {
    id: 58,
    question: `Which tag is used to link from one page to another?`,
    options: [
      "&lt;h1&gt;",
      "&lt;p&gt;",
      "&lt;iframe&gt;",
      "&lt;a&gt;"
    ],
    correct: 3,
    type: "single",
    explanation: `The <a> (anchor) tag defines a hyperlink, which is used to link from one page to another. The href attribute specifies the link destination.`
  },
  {
    id: 59,
    question: `What should target = "_blank" do when included in a link tag?`,
    options: [
      "Opens the link in a new tab or window",
      'Opens the link in a in a tab called "_blank"',
      "This is not a valid expression"
    ],
    correct: 0,
    type: "single",
    explanation: `target="_blank" opens the linked document in a new browser tab or window, depending on the browser's settings.`
  },
  {
    id: 60,
    question: `What is the correct HTML for creating a hyperlink?`,
    options: [
      '&lt;a&gt;http://fpthem.edu.vn&lt;/a&gt;',
      '&lt;a url="http://fpthem.edu.vn"&gt;fpt-uni&lt;/a&gt;',
      '&lt;a href="http://fpthem.edu.vn"&gt;fpt-uni&lt;/a&gt;',
      '&lt;a name="http://fpthem.edu.vn"&gt;fpt-uni&lt;/a&gt;'
    ],
    correct: 2,
    type: "single",
    explanation: `The correct syntax is <a href="URL">link text</a>. The href attribute contains the destination URL.`
  }
];
