const questions = [
  {
    id: 1,
    question: `Consider the code:<br><br>
<pre>h1 {
    color: blue;
    font-size: 20px;
}</pre><br>
Which of the following is called "selector"?`,
    options: [
      "color and font-size",
      "h1",
      "all parts of the code above",
      "blue and 20px"
    ],
    correct: 1,
    type: "single",
    explanation: `The selector is the part of a CSS rule that selects which HTML elements to style. In "h1 { color: blue; font-size: 20px; }", "h1" is the selector that targets all h1 elements.`
  },
  {
    id: 2,
    question: `<pre>div {
    border-width: 10px 3px 5px 9px;
}</pre><br>
What is the width of the left border?`,
    options: [
      "9px",
      "5px",
      "3px",
      "10px"
    ],
    correct: 0,
    type: "single",
    explanation: `In CSS border-width shorthand, values are specified in order: top, right, bottom, left. Therefore, 10px = top, 3px = right, 5px = bottom, 9px = left.`
  },
  {
    id: 3,
    question: `The image will scale down if it has to, but never scale up to be larger than its original size. Which code is right?`,
    options: [
      "Width: 100%",
      "Max-width: 100%",
      "Scale: 100%",
      "Min-width: 100%"
    ],
    correct: 1,
    type: "single",
    explanation: `max-width: 100% ensures the image scales down if necessary but never exceeds its original dimensions. width: 100% would force it to always fill the container, potentially scaling up beyond original size.`
  },
  {
    id: 4,
    question: `The # symbol specifies that the selector is a/an`,
    options: [
      "id",
      "class",
      "first",
      "tag"
    ],
    correct: 0,
    type: "single",
    explanation: `The # symbol in CSS is used to select elements by their id attribute. For example: #header { color: red; }`
  },
  {
    id: 5,
    question: `How many ways are there to integrate CSS into a web page?`,
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correct: 1,
    type: "single",
    explanation: `There are 3 main ways to integrate CSS: 1) Inline styles (style attribute), 2) Internal style sheet (style tag in head), 3) External style sheet (link tag).`
  },
  {
    id: 6,
    question: `Which CSS property controls the text size?`,
    options: [
      "font-height",
      "text-size",
      "text-style",
      "font-size"
    ],
    correct: 3,
    type: "single",
    explanation: `font-size is the CSS property that controls the size of text. The other options are not valid CSS properties for text size.`
  },
  {
    id: 7,
    question: `What syntax is used to insert an external style to the HTML document?`,
    options: [
      `&lt;a href="mystyle.css" rel="stylesheet"&gt;&lt;/a&gt;`,
      `&lt;link href="mystyle.css" rel="stylesheet"&gt;`,
      `&lt;source src="mystyle.css" rel="stylesheet"&gt;`,
      `&lt;url href="mystyle.css" rel="stylesheet"&gt;`
    ],
    correct: 1,
    type: "single",
    explanation: `The correct syntax to link an external CSS file is: &lt;link href="mystyle.css" rel="stylesheet"&gt;. This should be placed within the &lt;head&gt; section.`
  },
  {
    id: 8,
    question: `Which snippet of CSS is commonly used to center an element horizontally?`,
    options: [
      "site-align: center;",
      "margin: auto 0;",
      "margin: 0 auto;",
      "margin: center;"
    ],
    correct: 2,
    type: "single",
    explanation: `margin: 0 auto; is the standard way to center a block-level element horizontally within its container. The "0" sets top/bottom margins, "auto" distributes left/right space equally.`
  },
  {
    id: 9,
    question: `What property is used so the container becomes flexible?`,
    options: [
      "display: flexible",
      "show: flex",
      "visibility: flexible",
      "display: flex"
    ],
    correct: 3,
    type: "single",
    explanation: `display: flex; enables Flexbox layout, making the container flexible and its children able to flex to fill available space.`
  },
  {
    id: 10,
    question: `In the following code snippet, what value is given for the bottom margin: margin: 15px 10px 3px 8px;`,
    options: [
      "5px",
      "10px",
      "3px",
      "8px"
    ],
    correct: 2,
    type: "single",
    explanation: `In CSS margin shorthand, values are specified in order: top, right, bottom, left. So 15px = top, 10px = right, 3px = bottom, 8px = left.`
  },
  {
    id: 11,
    question: `What is the correct HTML for referring to an external style sheet stored in a subfolder called css?`,
    options: [
      `&lt;link rel="css/stylesheet" href="css/mystyle.css"&gt;`,
      `&lt;link rel="stylesheet" href="css/mystyle.css"&gt;`,
      `&lt;link rel="css/stylesheet" href="mystyle.css"&gt;`,
      `&lt;style src="css/mystyle.css"&gt;`
    ],
    correct: 1,
    type: "single",
    explanation: `The correct syntax is: &lt;link rel="stylesheet" href="css/mystyle.css"&gt;. The "rel" attribute should be "stylesheet", and the "href" should point to the file path.`
  },
  {
    id: 12,
    question: `DTD stands for`,
    options: [
      "Data type definition",
      "Define type of data",
      "Document type definition",
      "Documented type data"
    ],
    correct: 2,
    type: "single",
    explanation: `DTD stands for Document Type Definition, which defines the structure and legal elements of an XML or HTML document.`
  },
  {
    id: 13,
    question: `The "Box Model" in CSS is made up of?`,
    options: [
      "width / height / border",
      "padding / border",
      "width / height",
      "width / height / border / padding"
    ],
    correct: 3,
    type: "single",
    explanation: `The CSS Box Model consists of: content (width/height), padding, border, and margin. All four components make up the total space an element occupies.`
  },
  {
    id: 14,
    question: `How do you make the text bold?`,
    options: [
      "style: bold;",
      "font-weight: bold;",
      "font: bold;",
      "text: bold;"
    ],
    correct: 1,
    type: "single",
    explanation: `font-weight: bold; is the CSS property and value to make text appear bold. font-weight can also accept numeric values (100-900).`
  },
  {
    id: 15,
    question: `What statement is right to append a new image to the tag variable in the 3rd code line?<br><br>
<pre>1. var obj = "&lt;img src='image.jpg'&gt;"
2. ...
3. var tag = document.getElementById("demo")</pre><br>`,
    options: [
      "tag.innerHTML = obj",
      "tag.value = obj",
      "tag.text = obj",
      "tag.innerHTML = tag.innerHTML + obj"
    ],
    correct: 0,
    type: "single",
    explanation: `tag.innerHTML = obj replaces the entire content of the element with the new image. This is the simplest way to insert HTML content.`
  },
  {
    id: 16,
    question: `Which built-in method reverses the order of the elements of an array?`,
    options: [
      "ChangeOrder(order)",
      "reverse()",
      "sort(order)",
      "None of the others"
    ],
    correct: 1,
    type: "single",
    explanation: `The reverse() method reverses the order of elements in an array in place. The first element becomes last, and the last becomes first.`
  },
  {
    id: 17,
    question: `What keyword is used to insert at the [MISSING] in JavaScript?<br><br>
<pre>&lt;script&gt;
[MISSING] myFunction() {
}
&lt;/script&gt;</pre><br>`,
    options: [
      "void",
      "int",
      "method",
      "function"
    ],
    correct: 3,
    type: "single",
    explanation: `The "function" keyword is used to declare a function in JavaScript. The syntax is: function functionName() { ... }`
  },
  {
    id: 18,
    question: `Which tag is used to let the browser know that it is about to see JavaScript code?`,
    options: [
      "&lt;script&gt;",
      "&lt;head&gt;",
      "&lt;javascript&gt;"
    ],
    correct: 0,
    type: "single",
    explanation: `The &lt;script&gt; tag is used to embed or reference JavaScript code in an HTML document. It can contain code directly or reference an external file.`
  },
  {
    id: 19,
    question: `<br><br>
<pre>&lt;body&gt;
&lt;p id="demo"&gt;&lt;/p&gt;
&lt;script&gt;
if (Math.random() &lt; 0.5) {
    text = "&lt;a href='https://w3schools.com'&gt;Visit W3Schools&lt;/a&gt;";
} else {
    text = "&lt;a href='http://wwf.org'&gt;Visit WWF&lt;/a&gt;";
}
document.getElementById("demo").innerHTML = text;
&lt;/script&gt;
&lt;/body&gt;</pre><br>
What is the output?`,
    options: [
      "write a link to either Visit W3Schools or to Visit WWF",
      "write a link to Visit W3Schools",
      "write a link to Visit WWF",
      "All of the others"
    ],
    correct: 0,
    type: "single",
    explanation: `Math.random() returns a random number between 0 and 1. If it's less than 0.5, it displays W3Schools link; otherwise, it displays WWF link.`
  },
  {
    id: 20,
    question: `What statement do you use to print out a text to the document?`,
    options: [
      'document.display("this is a text")',
      'document.show("this is a text")',
      'document.write("this is a text")'
    ],
    correct: 2,
    type: "single",
    explanation: `document.write() writes HTML expressions or JavaScript code to a document. However, it should be used carefully as it can overwrite the entire document if used after page load.`
  },
  {
    id: 21,
    question: `<br><br>
<pre>var data = [
{
    id:1, name:"laptop"},
    {id:2, name:"screen"},
    {id:3, name:"keyboard"}
];</pre><br>
What statement is right to get id = 1 of above array?`,
    options: [
      "data[0]",
      "data[1]",
      "data[0].id",
      "data[1].id"
    ],
    correct: 2,
    type: "single",
    explanation: `Arrays are zero-indexed in JavaScript, so data[0] accesses the first object. data[0].id accesses the id property of that object, which is 1.`
  },
  {
    id: 22,
    question: `Boolean variables store either true or false.`,
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: `Boolean is a data type in JavaScript that can only have two values: true or false. It's used for logical operations and conditions.`
  },
  {
    id: 23,
    question: `What output is right of above function?<br><br>
<pre>function change(obj) {
    var tag = document.getElementById("demo");
    tag.src = obj.src;
}

&lt;body&gt;
    &lt;img src="image.jpg" id="demo"&gt;
    &lt;img src="image2.jpg" onmouseover="change(this)"&gt;
&lt;/body&gt;</pre><br>`,
    options: [
      "To change the src property of the image with id='demo'",
      "To change the src property of the image",
      "To change the src property of the image that holds the event",
      "None of the others"
    ],
    correct: 0,
    type: "single",
    explanation: `The function changes the src of the image with id="demo" to the src of the image that triggered the onmouseover event (passed as 'this').`
  },
  {
    id: 24,
    question: `<br><br>
<pre>What code is added at [MISSING CODE] to create the array with items: 1, 2, 3, 4?&lt;
    br&gt;
    &lt;
    br&gt;
    &lt;
    script&gt;
    &lt;
    br&gt;
        function createArray()  {
     MISSING CODE;
}&lt;
    br&gt;
    &lt;
    /script&gt;
    &lt;
    br&gt;
    &lt;
    input type="button" value="getValue" onclick="createArray()"&gt;
    </pre><br>`,
    options: [
      "var arr = {1,2,3,4}",
      "var arr = [1,2,3,4]",
      "var arr = (1,2,3,4)",
      "var arr[] = {1,2,3,4}"
    ],
    correct: 1,
    type: "single",
    explanation: `In JavaScript, arrays are created with square brackets: []. The correct syntax is: var arr = [1,2,3,4];`
  },
  {
    id: 25,
    question: `What is returned when the method myFunction is called?<br><br>
<pre>&lt;script&gt;
function myFunction() {
    var string = "Humpty Dumpty sat on the wall";
    return string.indexOf("Dumpty");
}
&lt;/script&gt;</pre><br>`,
    options: [
      "true",
      "-1",
      "7",
      "0"
    ],
    correct: 2,
    type: "single",
    explanation: `indexOf() returns the position of the first occurrence of a specified value. "Dumpty" starts at position 7 (H=0, u=1, m=2, p=3, t=4, y=5, space=6, D=7).`
  },
  {
    id: 26,
    question: `What statement do you use to create a new object?`,
    options: [
      "var x=new Object()",
      "var x=new Number('123')",
      "var x=new product('111','laptop')",
      "All of the others"
    ],
    correct: 3,
    type: "single",
    explanation: `All options are valid ways to create objects in JavaScript: Object constructor, Number object, and custom object constructor.`
  },
  {
    id: 27,
    question: `What statement do you insert the 3rd code line to get a list of images in p tag?<br><br>
<pre>function demo() {
}

&lt;p id="abc"&gt;
  &lt;img src="h1.jpg"&gt;
  &lt;img src="h2.jpg"&gt;
  &lt;img src="h3.jpg"&gt;
&lt;/p&gt;</pre><br>`,
    options: [
      'var list="abc".getElementsByTagName("img")',
      'var list=document.getElementById("abc").getElementsByTagName("img")',
      'var list=document.getElementById("abc").getElementsByClassName("img")',
      'var list=document.getElementById("abc").getElementsByName("img")'
    ],
    correct: 1,
    type: "single",
    explanation: `document.getElementById("abc") gets the p element, then .getElementsByTagName("img") gets all img elements inside it. This returns a live HTMLCollection of images.`
  },
  {
    id: 28,
    question: `Which event is run when an element is clicked?`,
    options: [
      "onDrop",
      "onClick",
      "onDragstart",
      "onAction"
    ],
    correct: 1,
    type: "single",
    explanation: `onClick is the event handler that runs when an element is clicked. In modern JavaScript, it's often written as onclick (lowercase).`
  },
  {
    id: 29,
    question: `Consider two statements:<br>1. A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().<br>2. A JavaScript function is a block of code designed to perform a particular task.<br>Choose the right option.`,
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 0,
    type: "single",
    explanation: `Both statements are true. A JavaScript function is indeed defined with the function keyword, name, and parentheses, and it is a block of code that performs a specific task.`
  },
  {
    id: 30,
    question: `Consider the following CSS rules:<br><br>
<pre>@media all and (min-width: 500px) {
    div { width: 25%; }
}
div { width: 80%; }</pre><br>
What is the width of any div elements on a 750px screen?`,
    options: [
      "80%",
      "75%",
      "100%",
      "25%"
    ],
    correct: 0,
    type: "single",
    explanation: `The media query applies when min-width is 500px or more. At 750px, the div width becomes 25%. However, note that in CSS, later rules override earlier ones if they have the same specificity. The media query rule comes first, then the general rule, so the general rule (80%) would override. But actually, media queries have their own specificity rules. In this case, both selectors have the same specificity (just "div"), so the last one wins. The media query is first, then the general rule, so at 750px, the width is 25%? Wait, I need to reconsider. Actually, when the media query condition is met, both rules apply. The general rule comes after, so it overrides. So width would be 80%.`
  },
  {
    id: 31,
    question: `Consider the following CSS rules:<br><br>
<pre>div { width: 80%; }
@media all and (max-width: 767px) {
    div { width: 25%; }
}</pre><br>
What is the width of any div elements on a 500px screen?`,
    options: [
      "80%",
      "75%",
      "100%",
      "25%"
    ],
    correct: 3,
    type: "single",
    explanation: `At 500px screen width, the media query condition (max-width: 767px) is true, so the width: 25% rule applies, overriding the 80% rule.`
  },
  {
    id: 32,
    question: `Which of the following bootstrap style is to be used if you want to create a navbar that scrolls with the page?`,
    options: [
      "navbar-static-top",
      "navbar-fixed",
      "navbar-fixed-top",
      ".fixed-top"
    ],
    correct: 0,
    type: "single",
    explanation: `navbar-static-top creates a navbar that scrolls with the page. navbar-fixed-top would fix it to the top of the viewport.`
  },
  {
    id: 33,
    question: `Adaptive design with dynamic serving is..`,
    options: [
      "Designing multiple pages, one for each type of major device (phone, tablet, laptop, and desktop)",
      "Designing pages for the mobile view.",
      "Designing pages for multiple platforms by incorporating fluid measurements and varying CSS rules."
    ],
    correct: 0,
    type: "single",
    explanation: `Adaptive design with dynamic serving involves creating multiple versions of a page for different devices and serving the appropriate version based on the device detected.`
  },
  {
    id: 34,
    question: `The mobile version of your web page should have the same layout of every other version of your site.`,
    options: [
      "True",
      "False"
    ],
    correct: 1,
    type: "single",
    explanation: `False. Mobile versions often need different layouts optimized for smaller screens and touch interactions. Responsive design adapts layouts for different screen sizes.`
  },
  {
    id: 35,
    question: `Which fluid measurement type returns a percentage of the viewport height?`,
    options: [
      "vh",
      "vw",
      "hv",
      "ww"
    ],
    correct: 0,
    type: "single",
    explanation: `vh stands for viewport height. 1vh = 1% of the viewport's height. Similarly, vw stands for viewport width.`
  },
  {
    id: 36,
    question: `Consider the following CSS rule:<br><br>
<pre>div { width: 80%; }
div { @media print { width: 25%; } }</pre><br>
Which of the following is a true statement?`,
    options: [
      "The div elements will have a width of 25% only when the page is printed",
      "The div elements will only visible only when the page is printed",
      "The div elements will have a width of 80% only when the page is printed"
    ],
    correct: 0,
    type: "single",
    explanation: `The @media print rule applies only when the page is being printed. So div elements will have width: 25% when printed, and width: 80% otherwise.`
  },
  {
    id: 37,
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
    id: 38,
    question: `Choose the right statement about the code below:<br><br>
<pre>@media only screen and (min-width: 768px) {
    .col-1 { width: 8.33%; }
    .col-2 { width: 16.66%; }
    .col-3 { width: 25%; }
    .col-9 { width: 75%; }
    .col-10 { width: 83.33%; }
    .col-11 { width: 91.66%; }
}
    .col-4 { width: 33.33%; }
    .col-5 { width: 41.66%; }
    .col-6 { width: 50%; }
    .col-7 { width: 58.33%; }
    .col-8 { width: 66.66%; }
    .col-12 { width: 100%; }

&lt;div class="row"&gt;
  &lt;div class="col-6"&gt; The city &lt;/div&gt;
  &lt;div class="col-6"&gt; Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city. &lt;/div&gt;
&lt;/div&gt;</pre><br>`,
    options: [
      "When the screen (browser window) gets smaller than 768px, each child div should have a width of 50%",
      "When the screen (browser window) gets greater than 768px, each child div should have a width of 50%",
      "Each column should have a width of 100% for any screen wide",
      "When the screen (browser window) or mobile gets smaller than 768px, each column should have a width of 50%"
    ],
    correct: 1,
    type: "single",
    explanation: `The media query applies when min-width is 768px or greater. Inside it, .col-6 is not defined, so outside the media query, .col-6 has width: 50% (line that says .col-6 {width: 50%;}). Therefore, when screen is ≥768px, each .col-6 div has 50% width.`
  },
  {
    id: 39,
    question: `1 = 1% of viewport width`,
    options: [
      "vh",
      "px",
      "vw",
      "etc"
    ],
    correct: 2,
    type: "single",
    explanation: `vw stands for viewport width. 1vw = 1% of the viewport's width. Similarly, 1vh = 1% of the viewport's height.`
  },
  {
    id: 40,
    question: `Consider the following code using Bootstrap 3:<br><br>
<pre>&lt;div class="col-sm-2 col-lg-4"&gt;</pre><br>
In a lg viewport the div will be`,
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correct: 1,
    type: "single",
    explanation: `In Bootstrap 3, col-lg-4 means the div will span 4 columns on large (lg) viewports. col-sm-2 applies to small viewports, but lg overrides it on large screens.`
  },
  {
    id: 41,
    question: `Which of the following code segments will keep people from being able to zoom in or out on your content?`,
    options: [
      `&lt;meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'&gt;`,
      `&lt;meta name='viewport' content='width=device-width, initial-scale=1'&gt;`,
      "It is impossible to lock the zoom ability"
    ],
    correct: 0,
    type: "single",
    explanation: `Setting maximum-scale=1 prevents zooming in, and combined with initial-scale=1, it essentially disables zooming. This is generally not recommended for accessibility reasons.`
  },
  {
    id: 42,
    question: `Consider some options:<br><br>
(A) Use relative units<br>
(B) we should set a static value for every HTML element, like 600 pixels.<br>
(C) Use a grid-view system<br>
(D) take control over the viewport, through the &lt;meta&gt; tag.<br>
(E) Use min-height, max-height properties for setting the size of the element.<br><br>
What option should be used in the fluid layout design?`,
    options: [
      "A,B,C",
      "B,C,E",
      "B,D,E",
      "A,C,D"
    ],
    correct: 3,
    type: "single",
    explanation: `For fluid layout design: use relative units (A), use a grid-view system (C), and control the viewport via meta tag (D). Static values (B) are not fluid, and min/max height (E) are useful but not core to fluid design.`
  },
  {
    id: 43,
    question: `Consider the following CSS rules:<br><br>
<pre>@media all and (max-width: 767px) {
  div {
    width: 50%;
  }
}

div {
  width: 80%;
}
</pre><br>
What is the width of any div elements on a 500px screen?`,
    options: [
      "80%",
      "75%",
      "100%",
      "50%"
    ],
    correct: 3,
    type: "single",
    explanation: `At 500px screen width, the media query condition (max-width: 767px) is true, so the width: 50% rule applies, overriding the 80% rule.`
  },
  {
    id: 44,
    question: `Consider two statements:<br><br>
Statement 1: You can insert one or many "responsive breakpoints" in your stylesheet. But you should choose a mobile-first approach to design.<br><br>
Statement 2: Responsive web design generates many completed layouts These each layout is done individually for each device type.<br><br>
Choose the right option`,
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 2,
    type: "single",
    explanation: `Statement 1 is true (mobile-first with breakpoints is a best practice). Statement 2 is false (responsive design uses one flexible layout that adapts, not separate layouts for each device).`
  },
  {
    id: 45,
    question: `Which of the following is part of a URL?`,
    options: [
      "Editor",
      "HTML",
      "Domain(or Host)"
    ],
    correct: 2,
    type: "single",
    explanation: `A URL consists of several parts including protocol, domain/host, port, path, query, and fragment. Domain (or host) is a core component.`
  },
  {
    id: 46,
    question: `Which is the best/proper way to declare a section that has an h2 heading and three progress elements?`,
    options: [
      "&lt;section&gt;<br>&nbsp;&nbsp;&lt;h2&gt;Achievements&lt;/h2&gt;<br>&nbsp;&nbsp;&lt;p&gt;Progress in this course (100%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress value='1'&gt;&lt;/progress&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Progress in the Specialization capstone (20%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress value='20' max='100'&gt;&lt;/progress&gt;&lt;br/&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Progress in life goals (70%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress value='70' max='100'&gt;&lt;/progress&gt;<br>&nbsp;&nbsp;&lt;/p&gt;<br>&lt;/section&gt;",
      "&lt;section&gt;Achievements<br>&nbsp;&nbsp;&lt;p&gt;Progress in this course (100%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress&gt;100%&lt;/progress&gt;&lt;br/&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Progress in the Specialization capstone (20%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress&gt;20%&lt;/progress&gt;&lt;br/&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Progress in life goals (70%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress&gt;70%&lt;/progress&gt;<br>&nbsp;&nbsp;&lt;/p&gt;<br>&lt;/section&gt;",
      "&lt;section&gt;<br>&nbsp;&nbsp;&lt;h2&gt;Achievements&lt;/h2&gt;<br>&nbsp;&nbsp;&lt;p&gt;Progress in this course (100%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress value='1'&gt;&lt;/progress&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Progress in the Specialization capstone (20%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress value='20' max='100'&gt;&lt;/progress&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Progress in life goals (70%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress value='70' max='100'&gt;&lt;/progress&gt;<br>&nbsp;&nbsp;&lt;/p&gt;<br>&lt;/section&gt;",
      "&lt;section&gt;<br>&nbsp;&nbsp;&lt;h2&gt;Achievements&lt;/h2&gt;<br>&nbsp;&nbsp;&lt;p&gt;Progress in this course (100%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress&gt;100%&lt;/progress&gt;&lt;br/&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Progress in the Specialization capstone (20%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress&gt;20%&lt;/progress&gt;&lt;br/&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Progress in life goals (70%)<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;progress&gt;70%&lt;/progress&gt;<br>&nbsp;&nbsp;&lt;/p&gt;<br>&lt;/section&gt;"
    ],
    correct: 0,
    type: "single",
    explanation: `Option A uses proper semantic HTML: section with h2 heading, progress elements with correct value attributes, and proper line breaks. The progress values are correctly set (1 for 100%, 20/100 for 20%, 70/100 for 70%).`
  },
  {
    id: 47,
    question: `Which is the correct file extension for a web page?`,
    options: [
      "html",
      "java",
      ".js",
      ".cpp"
    ],
    correct: 0,
    type: "single",
    explanation: `.html or .htm are the standard file extensions for HTML web pages. .js is for JavaScript, .java for Java source code, .cpp for C++ source code.`
  },
  {
    id: 48,
    question: `Semantics is`,
    options: [
      "the practice of giving content on the page meaning and structure by using proper element.",
      "the set of rules that defines the combinations of symbols that are considered to be a correctly structured document or fragment in that language",
      "circular"
    ],
    correct: 0,
    type: "single",
    explanation: `Semantics in HTML refers to using the appropriate elements to give meaning and structure to content, rather than just presentation. For example, using <header>, <nav>, <main> instead of just <div> elements.`
  },
  {
    id: 49,
    question: `Which HTML element is used to specify a footer for a document or section?`,
    options: [
      "&lt;footer&gt;",
      "&lt;section&gt;",
      "&lt;bottom&gt;",
      "<body>"
    ],
    correct: 0,
    type: "single",
    explanation: `The <footer> element represents a footer for its nearest ancestor sectioning content or sectioning root element. It typically contains information about the author, copyright, etc.`
  },
  {
    id: 50,
    question: `A is a computer that is in charge of handling resource requests from multiple computers.`,
    options: [
      "server",
      "client",
      "host",
      "domain"
    ],
    correct: 0,
    type: "single",
    explanation: `A server is a computer or system that provides resources, data, services, or programs to other computers (clients) over a network.`
  },
  {
    id: 51,
    question: `W3C stands for`,
    options: [
      "World Wide Web Consortium",
      "World Wide Web Cooperation",
      "WWW Consortium",
      "None of the others"
    ],
    correct: 0,
    type: "single",
    explanation: `W3C stands for World Wide Web Consortium, an international community that develops open standards to ensure the long-term growth of the Web.`
  },
  {
    id: 52,
    question: `Consider the code:<br><br>
<pre>&lt;form action="myscript.apsx"&gt;
  Gender:
  &lt;input type="radio" value="1" checked="checked"/&gt; female
  &lt;input type="radio" value="0"/&gt; male
  Full Name: &lt;input type="text" value="ThiNo"/&gt;
  &lt;input type="submit" value="submit"/&gt;
&lt;/form&gt;
</pre><br>
What data does the form send to the page myscript.aspx after submitting?`,
    options: [
      "nothing",
      "female and ThiNo",
      "female and male",
      "1 and ThiNo"
    ],
    correct: 3,
    type: "single",
    explanation: `The form sends the value of the checked radio button (value="1") and the text input value (value="ThiNo"). The labels "female" and "male" are not sent, only the values.`
  },
  {
    id: 53,
    question: `Choose the correct HTML element to define important text`,
    options: [
      "&lt;b&gt;",
      "&lt;strong&gt;",
      "&lt;i&gt;",
      "<important>"
    ],
    correct: 1,
    type: "single",
    explanation: `<strong> is used to indicate that its contents have strong importance, seriousness, or urgency. <b> is for stylistic bold without semantic importance.`
  },
  {
    id: 54,
    question: `What option do you choose to create a table with 2 rows and 2 columns?`,
    options: [
      "&lt;table&gt;<br>&nbsp;&nbsp;&lt;th&gt;&lt;tr&gt;&lt;/tr&gt;&lt;/th&gt;<br>&nbsp;&nbsp;&lt;th&gt;&lt;tr&gt;&lt;/tr&gt;&lt;/th&gt;<br>&lt;/table&gt;",
      "&lt;table&gt;<br>&nbsp;&nbsp;&lt;tr&gt;&lt;th&gt;&lt;/th&gt;&lt;/tr&gt;<br>&nbsp;&nbsp;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;<br>&lt;/table&gt;",
      "&lt;table&gt;<br>&nbsp;&nbsp;&lt;td&gt;&lt;tr&gt;&lt;/tr&gt;&lt;tr&gt;&lt;/tr&gt;&lt;/td&gt;<br>&nbsp;&nbsp;&lt;td&gt;&lt;tr&gt;&lt;/tr&gt;&lt;tr&gt;&lt;/tr&gt;&lt;/td&gt;<br>&lt;/table&gt;",
      "&lt;table&gt;<br>&nbsp;&nbsp;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;<br>&nbsp;&nbsp;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;<br>&lt;/table&gt;"
    ],
    correct: 3,
    type: "single",
    explanation: `Option D creates a proper table: 2 rows (<tr>), each with 2 cells (<td>). The other options have incorrect nesting of table elements.`
  },
  {
    id: 55,
    question: `What does the tag &lt;footer&gt; typically contain?`,
    options: [
      "copyright information",
      "logo or icon",
      "blog post",
      "the main content of a document"
    ],
    correct: 0,
    type: "single",
    explanation: `A <footer> typically contains information about its containing element: author info, copyright data, contact info, sitemap, back to top links, etc.`
  },
  {
    id: 56,
    question: `Currently clicking and holding down the mouse button on represents`,
    options: [
      "a:link pseudo class.",
      "a:visited",
      "a:active",
      "a:hover"
    ],
    correct: 2,
    type: "single",
    explanation: `:active applies while an element is being activated by the user, such as when clicking and holding down a mouse button.`
  },
  {
    id: 57,
    question: `To access your cPanel account, you need ...`,
    options: [
      "a username and password from your hosting server",
      "the username and password for your computer",
      "the port number for your account"
    ],
    correct: 0,
    type: "single",
    explanation: `cPanel is a web hosting control panel. To access it, you need the username and password provided by your hosting provider.`
  },
  {
    id: 58,
    question: `What are the elements to help organize the data and structure of a table?`,
    options: [
      "&lt;caption&gt;, &lt;head&gt;, &lt;body&gt;, &lt;foot&gt;",
      "&lt;caption&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;",
      "&lt;caption&gt;, &lt;head&gt;, &lt;body&gt;, &lt;foot&gt;",
      "<caption>, <head>, <body>, <foot>"
    ],
    correct: 1,
    type: "single",
    explanation: `HTML provides <thead>, <tbody>, and <tfoot> elements to structure tables into header, body, and footer sections. <caption> provides a title for the table.`
  },
  {
    id: 59,
    question: `Which organization is responsible for assigning top-level domain names?`,
    options: [
      "Internet Corporation for Assigned Numbers and Names (ICANN)",
      "Internet Domain Name Server (IDNS)",
      "World Wide Web Consortium (W3C)"
    ],
    correct: 0,
    type: "single",
    explanation: `ICANN (Internet Corporation for Assigned Names and Numbers) coordinates the global Internet's systems of unique identifiers, including top-level domain names.`
  },
  {
    id: 60,
    question: `Choose a way to resize content to the viewport.`,
    options: [
      "Use CSS media queries to apply different styling for small and large screens",
      "Setting large absolute CSS widths for page elements",
      "let the content rely on a particular viewport width to render well",
      "use large fixed width element"
    ],
    correct: 0,
    type: "single",
    explanation: `CSS media queries allow you to apply different styles based on viewport characteristics like width, enabling responsive design that adapts to different screen sizes.`
  }
];