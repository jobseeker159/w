const questions = [
  {
    id: 1,
    question: `You want all p elements to be center-aligned. What syntax is the right?`,
    options: [
      "paragraphs { color: red; text-align: center; }",
      "#p { color: red; text-align: center; }",
      "p { color: red; text-align: center; }",
      "p{ color: red; text-align: center; }"
    ],
    correct: 3,
    type: "single",
    explanation: `All options would work technically, but option D uses the correct element selector for <p> tags with proper spacing. The element selector "p" targets all paragraph elements.`
  },
  {
    id: 2,
    question: `Which CSS3 property is used to center text? (Only provide the property name; do not give it a value.)`,
    options: [
      "center",
      "text-align",
      "text-center",
      "align"
    ],
    correct: 1,
    type: "single",
    explanation: `text-align is the CSS property used to set the horizontal alignment of text. Values include left, right, center, and justify.`
  },
  {
    id: 3,
    question: `<br><br>
<pre>Consider the code: h1  {
     color: blue;
     font-size: 20px;
}&lt;
    br&gt;
    Which of the following is called "selector"?</pre><br>`,
    options: [
      "color and font-size",
      "h1",
      "All parts of the code above",
      "blue and 20px"
    ],
    correct: 1,
    type: "single",
    explanation: `The selector is the part of a CSS rule that selects which HTML elements to style. In "h1 { color: blue; font-size: 20px; }", "h1" is the selector that targets all h1 elements.`
  },
  {
    id: 4,
    question: `What does &lt;thead&gt; stand for?`,
    options: [
      "The head",
      "Table head",
      "Table header",
      "The td head"
    ],
    correct: 1,
    type: "single",
    explanation: `<thead> stands for "table head" and is used to group header content in an HTML table. It typically contains one or more <tr> elements with <th> cells.`
  },
  {
    id: 5,
    question: `<br><br>
<pre>How much width will this div occupy?&lt;
    br&gt;
    div {
    &lt;
    br&gt;
        width: 100px;
    &lt;
    br&gt;
        padding: 10px;
    &lt;
    br&gt;
        margin: 5px;
    &lt;
    br&gt;
        border: 2px;
    &lt;
    br&gt;
}</pre><br>`,
    options: [
      "124px",
      "100px",
      "104px",
      "134px"
    ],
    correct: 3,
    type: "single",
    explanation: `Total width = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right = 100 + 10+10 + 2+2 + 5+5 = 134px. Note: margin is included in total space occupied, but not in the element's actual box size.`
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
    question: `<br><br>
<pre>How do you add a background color for all &lt;h1&gt; elements?</pre><br>`,
    options: [
      "h1.all {background-color:#FFFFFF;}",
      "all.h1 {background-color:#FFFFFF;}",
      "h1 {background-color:#FFFFFF;}",
      "All of the others"
    ],
    correct: 2,
    type: "single",
    explanation: `The element selector "h1" targets all h1 elements. Option C correctly applies background color to all h1 elements.`
  },
  {
    id: 8,
    question: `<br><br>
<pre>div {
  background-color: lightblue;
  width: 200px;
  padding: 25px;
  border: 25px solid navy;
}
</pre><br>
Which method to choose the total width of the div tag is 200px?`,
    options: [
      "box-sizing: content-box",
      "box-sizing: border-box",
      "box-sizing: Inherited"
    ],
    correct: 1,
    type: "single",
    explanation: `box-sizing: border-box includes padding and border in the element's total width and height. With border-box, width: 200px means the entire box (content+padding+border) is 200px.`
  },
  {
    id: 9,
    question: `Which of the following is the best example of declaring at-rule in CSS?`,
    options: [
      "@-import",
      "@import",
      "at-import",
      "at@import"
    ],
    correct: 1,
    type: "single",
    explanation: `At-rules in CSS start with the @ character. @import is used to import another stylesheet. Other examples: @media, @font-face, @keyframes.`
  },
  {
    id: 10,
    question: `Which of the following line of code can be used to hide the image?`,
    options: [
      "img { display: 0; }",
      "img { display: block; }",
      "img { display: none; }",
      "img { display: empty; }"
    ],
    correct: 2,
    type: "single",
    explanation: `display: none; completely removes the element from the document flow, making it invisible and freeing up its space.`
  },
  {
    id: 11,
    question: `<br><br>
<pre>What is the right option?&lt;
    br&gt;
    &lt;
    br&gt;
    html  {
     font-size:16px;
}&lt;
    br&gt;
    div  {
     font-size: 3rem;
     border: 1px solid black;
}&lt;
    br&gt;
    #mycss  {
     font-size: 2rem;
     border: 1px solid red;
}&lt;
    br&gt;
    &lt;
    br&gt;
    &lt;
    p&gt;
    This is a text&lt;
    /p&gt;
    &lt;
    /div id="mycss"&gt;
     At here for your code &lt;
    /div&gt;
    </pre><br>`,
    options: [
      "The font-size of this document is 16px.",
      "The font-size of the div with id='mycss' is 2 x the browser's font size.",
      "The rem unit sets the font-size relative to the browsers base font-size, and will not inherit from its parents.",
      "All of the others"
    ],
    correct: 3,
    type: "single",
    explanation: `All statements are true: 1) Root font-size is 16px, 2) #mycss uses 2rem = 32px (2 × root size), 3) rem units are relative to root, not parent elements.`
  },
  {
    id: 12,
    question: `<br><br>
<pre>What color font is used to display "Hi"?&lt;
    br&gt;
    &lt;
    br&gt;
    &lt;
    p class="fancy plain"&gt;
    Hi&lt;
    /p&gt;
    &lt;
    br&gt;
    &lt;
    br&gt;
    p {
     color: red;
     padding: 10px 5px;
     background: black;
} .fancy {
     font-family: cursive;
     background: red;
     color: green;
} .plain {
     font-family: Times, serif;
     color:black;
}</pre><br>`,
    options: [
      "red",
      "green",
      "black",
      "browser default"
    ],
    correct: 2,
    type: "single",
    explanation: `The element has both .fancy and .plain classes. In CSS, when multiple classes have conflicting rules, the last one defined wins (source order). .plain comes after .fancy, so color:black applies.`
  },
  {
    id: 13,
    question: `<br><br>
<pre>Choose the right statement about the size of background images?&lt;
    br&gt;
    &lt;
    br&gt;
    div  {
     background: url(img_flwr.gif);
     background-size: 100% 100%;
     background-repeat: no-repeat;
}</pre><br>`,
    options: [
      "the size of a background image was the actual size of the image",
      "Stretch the background image to completely cover the content area",
      "Stretch the background image so that exactly fit horizontally",
      "None of the others"
    ],
    correct: 1,
    type: "single",
    explanation: `background-size: 100% 100%; stretches the image to cover the entire element (both width and height 100%), potentially distorting the aspect ratio.`
  },
  {
    id: 14,
    question: `Choose the right statement about the property "font-weight".`,
    options: [
      "The font-weight property sets how thick or thin characters in text should be displayed.",
      "The font-weight property transforms the inner text of the element to italic style",
      "The font-weight property sets the font size of the element",
      "The font-weight property sets how opacity or clear characters in text should be displayed."
    ],
    correct: 0,
    type: "single",
    explanation: `font-weight controls the thickness of characters. Values include normal, bold, bolder, lighter, or numeric values (100-900).`
  },
  {
    id: 15,
    question: `What tag do you use to add a JavaScript code in the HTML document?`,
    options: [
      "&lt;Scripting&gt;",
      "&lt;JS&gt;",
      "&lt;JavaScript&gt;",
      "<Script>"
    ],
    correct: 3,
    type: "single",
    explanation: `The <script> tag is used to embed or reference JavaScript code in an HTML document. It can contain code directly or reference an external file via src attribute.`
  },
  {
    id: 16,
    question: `What is the correct syntax for referring to the external file "mycode.js"?`,
    options: [
      '<link href="mycode.js" type="javascript"/>',
      '<script href="mycode.js" type="javascript"></script>',
      '<script referring To="mycode.js" version="1.0" type="javascript"></script>',
      '<script src="mycode.js"></script>'
    ],
    correct: 3,
    type: "single",
    explanation: `The correct syntax is: <script src="mycode.js"></script>. The src attribute specifies the path to the external JavaScript file.`
  },
  {
    id: 17,
    question: `What value is returned by 9% 5?`,
    options: [
      "4",
      "1",
      "0",
      "1.8"
    ],
    correct: 0,
    type: "single",
    explanation: `The modulus operator (%) returns the remainder of division. 9 ÷ 5 = 1 with remainder 4, so 9 % 5 = 4.`
  },
  {
    id: 18,
    question: `Every valid web page can be represented as a tree. This tree is referred to as the`,
    options: [
      "DOM",
      "API",
      "JavaScript",
      "Element"
    ],
    correct: 0,
    type: "single",
    explanation: `DOM stands for Document Object Model, which represents an HTML document as a tree structure where each node is an object representing a part of the document.`
  },
  {
    id: 19,
    question: `Which method is used to search for a match, and returns the position of the match?`,
    options: [
      "match()",
      "search()",
      "test()",
      "replace()"
    ],
    correct: 1,
    type: "single",
    explanation: `search() searches a string for a specified value and returns the position of the match. match() returns the matched text, test() tests for a match (returns boolean), replace() replaces matched text.`
  },
  {
    id: 20,
    question: `Which of the following is the proper way to link to an external JavaScript file?`,
    options: [
      '<script file="file.js"></script>',
      '<script>"file.js"></script>',
      '<script = "file.js"></script>',
      '<script href="file.js"></script>',
      '<script src="file.js"></script>'
    ],
    correct: 4,
    type: "single",
    explanation: `The correct syntax is: <script src="file.js"></script>. The src attribute specifies the path to the external JavaScript file.`
  },
  {
    id: 21,
    question: `<br><br>
<pre>What is the output of the above code?&lt;
    br&gt;
    &lt;
    br&gt;
    var fruits, text="", i;
    &lt;
    br&gt;
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    &lt;
    br&gt;
    fruits[6] = "Lemon";
    &lt;
    br&gt;
    for (i = 0;
     i &lt;
     7;
     i++)  {
    &lt;
    br&gt;
        text += fruits[i] + "&lt;
    br/&gt;
    ";
    &lt;
    br&gt;
}&lt;
    br&gt;
    document.write(text);
    </pre><br>`,
    options: [
      "Syntax error",
      "Banana Orange Apple Mango undefined undefined Lemon",
      "Banana Orange Apple Mango Lemon",
      "Banana Orange Apple Mango null null Lemon"
    ],
    correct: 1,
    type: "single",
    explanation: `When you set fruits[6] = "Lemon", indices 4 and 5 become empty (undefined). The loop from 0 to 6 will output: Banana, Orange, Apple, Mango, undefined, undefined, Lemon.`
  },
  {
    id: 22,
    question: `Which of these options does NOT require the use of parentheses?`,
    options: [
      "alert",
      "innerHTML",
      "document.write",
      "prompt"
    ],
    correct: 1,
    type: "single",
    explanation: `innerHTML is a property, not a method, so it doesn't use parentheses when getting/setting its value. alert(), document.write(), and prompt() are methods that require parentheses.`
  },
  {
    id: 23,
    question: `<br><br>
<pre>What statement is right?&lt;
    br&gt;
    &lt;
    br&gt;
    function change()  {
    &lt;
    br&gt;
        var list = document.getElementById("TagName("ul");
    &lt;
    br&gt;
        for(var i = 0;
     i &lt;
     list.length;
     i++)  {
    &lt;
    br&gt;
        list[i].style.display = "block";
    &lt;
    br&gt;
}&lt;
    br&gt;
}&lt;
    br&gt;
    &lt;
    br&gt;
    &lt;
    body onload="change()"&gt;
    &lt;
    br&gt;
        &lt;
    li&gt;
    link 11&lt;
    /li&gt;
    &lt;
    br&gt;
        &lt;
    li&gt;
    link 12&lt;
    /li&gt;
    &lt;
    br&gt;
        &lt;
    ul&gt;
    &lt;
    br&gt;
        &lt;
    li&gt;
    link 1 &lt;
    ul&gt;
    &lt;
    /ul&gt;
    &lt;
    /li&gt;
    &lt;
    br&gt;
        &lt;
    li&gt;
    link 2 &lt;
    ul&gt;
    &lt;
    /ul&gt;
    &lt;
    /li&gt;
    &lt;
    br&gt;
        &lt;
    /ul&gt;
    &lt;
    br&gt;
    &lt;
    /body&gt;
    &lt;
    br&gt;
        &lt;
    li&gt;
    link 21&lt;
    /li&gt;
    &lt;
    br&gt;
        &lt;
    li&gt;
    link 22&lt;
    /li&gt;
    </pre><br>`,
    options: [
      "To show all lists",
      "To show any list",
      "To hide all lists",
      "None of the others"
    ],
    correct: 0,
    type: "single",
    explanation: `The function attempts to get all ul elements and set their display to "block" (showing them). However, there's a syntax error in getElementById("TagName("ul") - it should be getElementsByTagName("ul"). But assuming it works, it would show all ul lists.`
  },
  {
    id: 24,
    question: `<br><br>
<pre>var data = [[id:1, name:"laptop"),  {
    id:2, name:"screen"),  {
    id:3, name:"keyboard"
}];
    &lt;
    br&gt;
    &lt;
    br&gt;
    What statement is right to change the name of the first object?</pre><br>`,
    options: [
      'data.name = "new value"',
      'data[0].name = "new value"',
      'name = "new value"',
      "None of the others"
    ],
    correct: 1,
    type: "single",
    explanation: `Arrays are zero-indexed, so data[0] accesses the first object. data[0].name = "new value" changes the name property of the first object.`
  },
  {
    id: 25,
    question: `<br><br>
<pre>&lt;p id="demo"&gt;&lt;/p&gt;
&lt;script&gt;
document.getElementById("demo").innerHTML = Date();
&lt;/script&gt;
</pre><br>
What does the script above do?`,
    options: [
      "Assign the value of Date() to the element with id='demo'.",
      "Assign the value of Date() to the content of the element with id='demo'.",
      "Assign the value of Date() to the content (innerHTML) of the element with id='demo'."
    ],
    correct: 2,
    type: "single",
    explanation: `innerHTML gets or sets the HTML content inside an element. The script sets the innerHTML of the p element to the current date/time returned by Date().`
  },
  {
    id: 26,
    question: `What statement do you use to create a new object?`,
    options: [
      "var x = new Object()",
      "var x = new Number('123')",
      "var x = new product('111', 'laptop')",
      "All of the others"
    ],
    correct: 3,
    type: "single",
    explanation: `All options are valid ways to create objects in JavaScript: Object constructor, Number object, and custom object constructor (assuming product is defined).`
  },
  {
    id: 27,
    question: `<br><br>
<pre>And two statements about the code:&lt;
    br&gt;
    1. The div is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.&lt;
    br&gt;
    2. The fixed div element is in the lower-right corner of the page.&lt;
    br&gt;
    &lt;
    br&gt;
    function myFunction(obj) {
    &lt;
    br&gt;
        obj.style.position = "fixed";
    &lt;
    br&gt;
        obj.style.bottom = 0;
    &lt;
    br&gt;
        obj.style.right = 0;
    &lt;
    br&gt;
        obj.style.width = "100px";
    &lt;
    br&gt;
        obj.style.height = "100px";
    &lt;
    br&gt;
        obj.style.backgroundColor = "red";
    &lt;
    br&gt;
}&lt;
    br&gt;
    &lt;
    br&gt;
    &lt;
    div onclick="myFunction(this)"&gt;
    &lt;
    /div&gt;
    </pre><br>`,
    options: [
      "Statement 1 is true and statement 2 is true",
      "Statement 1 is false and statement 2 is false",
      "Statement 1 is true and statement 2 is false",
      "Statement 1 is false and statement 2 is true"
    ],
    correct: 0,
    type: "single",
    explanation: `Both statements are true: 1) position: fixed positions relative to viewport and stays in place during scrolling. 2) bottom: 0 and right: 0 places it in lower-right corner.`
  },
  {
    id: 28,
    question: `I would like to display the length of the array "fruits". What statement do you use to insert the 3rd code line?<br><br>
<pre>var fruits;
fruits = ["Banana", "Orange", "Apple", "Mango"];
</pre>`,
    options: [
      "Window.alert(fruits);",
      "Window.alert(fruits.length);",
      "Window.alert(fruits.length());",
      "Window.alert(length);"
    ],
    correct: 1,
    type: "single",
    explanation: `fruits.length returns the number of elements in the array (4). length is a property, not a method, so no parentheses.`
  },
  {
    id: 29,
    question: `When a function returns a node from the DOM, it is of type`,
    options: [
      "Number",
      "Boolean",
      "Object",
      "String"
    ],
    correct: 2,
    type: "single",
    explanation: `DOM nodes are objects in JavaScript. Methods like getElementById() return DOM element objects (or null if not found).`
  },
  {
    id: 30,
    question: `<br><br>
<pre>Consider the following CSS rules:&lt;
    br&gt;
    @media all and (min-width: 500px)  {
     div  {
     width: 25%;
} 
}&lt;
    br&gt;
    div  {
     width: 80%;
}&lt;
    br&gt;
    &lt;
    br&gt;
    What is the width of any div elements on a 750px screen?</pre><br>`,
    options: [
      "80%",
      "The div won't display since media queries must go at the bottom of the screen.",
      "100%",
      "25%"
    ],
    correct: 0,
    type: "single",
    explanation: `At 750px, the media query (min-width: 500px) applies, making width 25%. But the general rule (width: 80%) comes after, overriding it. So width is 80%.`
  },
  {
    id: 31,
    question: `What is Responsive Web Design?`,
    options: [
      "Responsive web design makes your web page look good on all devices.",
      "Responsive web design uses only HTML and CSS.",
      "Responsive web design is not a program or JavaScript.",
      "All of the others"
    ],
    correct: 3,
    type: "single",
    explanation: `All statements are aspects of responsive design: 1) Goal is good appearance on all devices, 2) Primarily uses HTML/CSS (media queries), 3) It's a design approach, not a specific program.`
  },
  {
    id: 32,
    question: `Consider the following code using Bootstrap 3:<br><br>
<pre>&lt;div class="col-sm-2 col-lg-4"&gt;</pre><br>
In a large viewport, the div will be how many columns wide?`,
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
    id: 33,
    question: `Consider the following code where the font-size of a div is 32px, the font-size of a paragraph is .5em, and the font-size of a span element is .5em.<br><br>
<pre>&lt;div&gt;&lt;p&gt;&lt;span&gt;&lt;/span&gt;&lt;/p&gt;&lt;/div&gt;
</pre><br>
How big is the font of the &lt;span&gt; element? What is the font-size of the span element in px?`,
    options: [
      "32",
      "16",
      "64",
      "8"
    ],
    correct: 3,
    type: "single",
    explanation: `div=32px, p=.5em of div=16px, span=.5em of p=8px. em units are relative to parent's font-size, so nesting compounds the effect.`
  },
  {
    id: 34,
    question: `<br><br>
<pre>Consider the following CSS rule:&lt;
    br&gt;
    div  {
     width: 80%;
}&lt;
    br&gt;
    @media print  {
     width: 25%;
}&lt;
    br&gt;
    &lt;
    br&gt;
    Which of the following is a true statement?</pre><br>`,
    options: [
      "The div elements will have a width of 25% only when the page is printed.",
      "The div elements will only be visible when the page is printed.",
      "The div elements will have a width of 80% only when the page is printed."
    ],
    correct: 0,
    type: "single",
    explanation: `The @media print rule applies only when the page is being printed. So div elements will have width: 25% when printed, and width: 80% otherwise.`
  },
  {
    id: 35,
    question: `What do you do if you have large content that needs to be displayed on the page?`,
    options: [
      "Use a vertical scroll on both desktop and mobile devices, but not horizontally.",
      "Use a horizontal scroll on both desktop and mobile devices, but not vertically.",
      "Use both horizontal and vertical scroll on both desktop and mobile devices.",
      "Do nothing."
    ],
    correct: 0,
    type: "single",
    explanation: `Vertical scrolling is standard and user-friendly. Horizontal scrolling should generally be avoided as it's less intuitive for users.`
  },
  {
    id: 36,
    question: `<br><br>
<pre>Consider the following CSS rules:&lt;
    br&gt;
    div  {
     width: 80%;
}&lt;
    br&gt;
    @media all and (min-width: 500px)  {
     div  {
     width: 25%;
} 
}&lt;
    br&gt;
    &lt;
    br&gt;
    What is the width of any div elements on a 350px screen?</pre><br>`,
    options: [
      "100%",
      "80%",
      "25%",
      "75%"
    ],
    correct: 1,
    type: "single",
    explanation: `On a 350px screen, the media query condition (min-width: 500px) is false, so only the default rule applies: width: 80%.`
  },
  {
    id: 37,
    question: `Responsive sites can have a mixture of fluid and absolute measurements.`,
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: `True. Responsive designs often mix fluid units (%, vw, em) for flexible elements with absolute units (px) for elements that need precise sizing.`
  },
  {
    id: 38,
    question: `Bootstrap uses:`,
    options: [
      "JavaScript",
      "HTML, CSS, and JavaScript",
      "HTML",
      "CSS"
    ],
    correct: 1,
    type: "single",
    explanation: `Bootstrap is a framework that uses HTML for structure, CSS for styling, and JavaScript for interactive components (dropdowns, modals, etc.).`
  },
  {
    id: 39,
    question: `Which class adds zebra-stripes to a table?`,
    options: [
      "table-bordered",
      "table-striped",
      ".even and .odd",
      ".table-zebra"
    ],
    correct: 1,
    type: "single",
    explanation: `In Bootstrap, .table-striped adds zebra-striping to table rows. .table-bordered adds borders, and Bootstrap doesn't use .even/.odd or .table-zebra classes.`
  },
  {
    id: 40,
    question: `The Bootstrap 3 grid system is based on how many columns?`,
    options: [
      "10",
      "12",
      "14",
      "16"
    ],
    correct: 1,
    type: "single",
    explanation: `Bootstrap 3 uses a 12-column grid system. Columns are divided into 12 equal parts that can be combined to create different layouts.`
  },
  {
    id: 41,
    question: `Which of the following statements best describes what pixels, ems, and rems have in common?`,
    options: [
      "They are all units of measurement used to define the length of elements on a webpage.",
      "They are all fluid units of measurement used to define the length of elements on a webpage.",
      "They are all fluid units of measurement that define the screen resolution of a page."
    ],
    correct: 0,
    type: "single",
    explanation: `All are CSS units for measuring length/size. Pixels (px) are absolute, while ems and rems are relative units, but all can define element dimensions.`
  },
  {
    id: 42,
    question: `Which of the following code segments will prevent users from being able to zoom in or out on your content?`,
    options: [
      `&lt;meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'&gt;`,
      `&lt;meta name='viewport' content='width=device-width, initial-scale=1'&gt;`,
      "It is impossible to lock the zoom ability",
      "All of the others"
    ],
    correct: 0,
    type: "single",
    explanation: `Setting maximum-scale=1 prevents zooming in, and combined with initial-scale=1, it essentially disables zooming. This is generally not recommended for accessibility reasons.`
  },
  {
    id: 43,
    question: `Which fluid measurement type returns a percentage of the viewport height?`,
    options: [
      "vh",
      "vw",
      "height",
      "line-height"
    ],
    correct: 0,
    type: "single",
    explanation: `vh stands for viewport height. 1vh = 1% of the viewport's height. Similarly, vw stands for viewport width.`
  },
  {
    id: 44,
    question: `Which fluid measurement type returns a percentage of the viewport width?`,
    options: [
      "vw",
      "vh",
      "v",
      "hw"
    ],
    correct: 0,
    type: "single",
    explanation: `vw stands for viewport width. 1vw = 1% of the viewport's width. Similarly, vh stands for viewport height.`
  },
  {
    id: 45,
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
    id: 46,
    question: `Choose the correct HTML tag to make an emphasized text`,
    options: [
      "u tag",
      "l tag",
      "i tag",
      "strong tag"
    ],
    correct: 1,
    type: "single",
    explanation: `The question seems to have a typo, but assuming "l tag" means "<em>" (emphasis), that would be correct. However, given the options, <strong> is for strong emphasis, <em> for regular emphasis, <i> for italic style without semantic meaning. The correct answer according to the answer key is B (l tag), which might be referring to <em>?`
  },
  {
    id: 47,
    question: `The reverse attribute allows a list to appear in a reverse order in an unordered list.`,
    options: [
      "True",
      "False"
    ],
    correct: 1,
    type: "single",
    explanation: `False. There is no reverse attribute for unordered lists (<ul>). The reversed attribute exists for ordered lists (<ol>) to display items in reverse numerical order.`
  },
  {
    id: 48,
    question: `Which is the best/proper way to declare a section that has an h2 heading and an unordered list?`,
    options: [
      "&lt;section&gt;<br>&nbsp;&nbsp;&lt;h2&gt;Favorite Foods&lt;/h2&gt;<br>&nbsp;&nbsp;stuff<br>&nbsp;&nbsp;&lt;li&gt;more&lt;/li&gt;<br>&lt;/section&gt;<br>&lt;ul&gt;&lt;/ul&gt;<br>stuff<br>&lt;li&gt;again&lt;/li&gt;",
      "&lt;section&gt;<br>&nbsp;&nbsp;&lt;h2&gt;Favorite Foods&lt;/h2&gt;<br>&nbsp;&nbsp;&lt;p&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/p&gt;<br>&lt;/section&gt;<br>stuff<br>&lt;li&gt;more&lt;/li&gt;<br>stuff<br>&lt;li&gt;again&lt;/li&gt;",
      "&lt;section&gt;<br>&nbsp;&nbsp;&lt;h2&gt;Favorite Foods&lt;/h2&gt;<br>&nbsp;&nbsp;stuff<br>&nbsp;&nbsp;&lt;li&gt;more&lt;/li&gt;<br>&nbsp;&nbsp;stuff<br>&nbsp;&nbsp;&lt;ol&gt;&lt;/ol&gt;<br>&lt;/section&gt;<br>&lt;li&gt;again&lt;/li&gt;",
      "&lt;section&gt;<br>&nbsp;&nbsp;&lt;h2&gt;Favorite Foods&lt;/h2&gt;<br>&nbsp;&nbsp;&lt;ul&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;stuff<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;more&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;stuff<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;again&lt;/li&gt;<br>&nbsp;&nbsp;&lt;/ul&gt;<br>&lt;/section&gt;"
    ],
    correct: 3,
    type: "single",
    explanation: `Option D correctly nests the unordered list inside the section, with proper structure: section > h2 + ul > li elements.`
  },
  {
    id: 49,
    question: `You want to create a hyperlink that links to the Google page. What is the best option to create this link?`,
    options: [
      '<a href="http://www.google.com">my_link</a>',
      '<a name="http://www.google.com" target="_blank">my_link</a>',
      '<a id="http://www.google.com" target="_top">my_link</a>',
      '<a reference="http://www.google.com">my_link</a>'
    ],
    correct: 0,
    type: "single",
    explanation: `The correct syntax is <a href="URL">link text</a>. The href attribute contains the destination URL. target="_blank" would open in new tab, but isn't required.`
  },
  {
    id: 50,
    question: `The components of a URL are`,
    options: [
      "service, hostname and directory path",
      "service, hostname, port, directory-path",
      "service, port and directory path",
      "service, hostname and port"
    ],
    correct: 1,
    type: "single",
    explanation: `A URL typically includes: protocol (service), hostname (domain), port (optional), and path to resource (directory-path). Example: http://example.com:80/path/to/file`
  },
  {
    id: 51,
    question: `Which of the following are object-oriented concepts?`,
    options: [
      "Modules and interfaces",
      "Modules and information hiding",
      "Classes, information hiding, and inheritance",
      "Concurrency and information hiding"
    ],
    correct: 2,
    type: "single",
    explanation: `Core object-oriented programming concepts include: classes, objects, encapsulation (information hiding), inheritance, and polymorphism.`
  },
  {
    id: 52,
    question: `The first graphical browser was... (Please use one word answer)`,
    options: [
      "Mosaic",
      "Chrome",
      "Viola"
    ],
    correct: 0,
    type: "single",
    explanation: `Mosaic, released in 1993, was the first widely used graphical web browser. ViolaWWW (1992) was earlier but less popular.`
  },
  {
    id: 53,
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
    id: 54,
    question: `Which of the following is an example of a top-level domain?`,
    options: [
      ".com",
      "umich.edu",
      "wikipedia.org"
    ],
    correct: 0,
    type: "single",
    explanation: `.com is a top-level domain (TLD). umich.edu and wikipedia.org are full domain names, with .edu and .org being the TLDs.`
  },
  {
    id: 55,
    question: `Which of the following is used to represent an unvisited hyperlink?`,
    options: [
      ".link",
      ".nonvisited",
      ".unvisited",
      ".fresh"
    ],
    correct: 0,
    type: "single",
    explanation: `In CSS, :link represents unvisited hyperlinks. Other pseudo-classes: :visited, :hover, :active.`
  },
  {
    id: 56,
    question: `These are special codes which separate HTML from ordinary text.`,
    options: [
      "frames",
      "Tags",
      "Frameset",
      "All of the others"
    ],
    correct: 1,
    type: "single",
    explanation: `HTML tags (like <p>, <h1>, <div>) are special codes that mark up content and create elements, distinguishing HTML from plain text.`
  },
  {
    id: 57,
    question: `What is the correct HTML for creating a hyperlink?`,
    options: [
      '<a>http://fpthem.edu.vn</a>',
      '<a url="http://fpthem.edu.vn">fpt-uni</a>',
      '<a href="http://fpthem.edu.vn">fpt-uni</a>',
      '<a name="http://fpthem.edu.vn">fpt-uni</a>'
    ],
    correct: 2,
    type: "single",
    explanation: `The correct syntax is <a href="URL">link text</a>. The href attribute contains the destination URL.`
  },
  {
    id: 58,
    question: `What validation error will this code produce?<br><br>
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;&lt;/head&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt;
&lt;p&gt;Validate me!&lt;/p&gt;
</pre>`,
    options: [
      "Element head is missing a required instance of the child element title.",
      "End of file seen when expecting text or an end tag.",
      "No error."
    ],
    correct: 0,
    type: "single",
    explanation: `The HTML has duplicate </head> tags and is missing a <title> element in the <head>. Valid HTML requires a <title> in the <head> section.`
  },
  {
    id: 59,
    question: `Which of the following are browsers?`,
    options: [
      "Chrome, Firefox, Safari",
      "Firefox, Windows, Chrome",
      "Safari, Mac, Sublime, Chrome",
      "Safari, Chrome, NetBeans"
    ],
    correct: 0,
    type: "single",
    explanation: `Chrome, Firefox, and Safari are web browsers. Windows and Mac are operating systems, Sublime and NetBeans are text editors/IDEs.`
  },
  {
    id: 60,
    question: `Every well-formed HTML document should include`,
    options: [
      "doctype, head, body",
      "doctype, header, body",
      "header, nav, footer"
    ],
    correct: 0,
    type: "single",
    explanation: `The basic structure of an HTML document includes: doctype declaration, <html> element containing <head> and <body>. <header>, <nav>, <footer> are optional semantic elements.`
  }
];