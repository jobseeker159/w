const questions = [
  {
    id: 1,
    question: `Which of the following property is used to set the background image of an element?`,
    options: [
      "background-color",
      "background-image",
      "background-repeat",
      "background-position"
    ],
    correct: 1,
    type: "single",
    explanation: `background-image: url('image.jpg'); sets a background image for an element. The other properties control different aspects of the background.`
  },
  {
    id: 2,
    question: `Which prefix do you need to get CSS3 properties to work on older Mozilla Firefox browsers?`,
    options: [
      "-webkit-",
      "-moz-",
      "-0-",
      "-gecko-"
    ],
    correct: 1,
    type: "single",
    explanation: `-moz- is the vendor prefix for Mozilla Firefox. -webkit- is for Chrome/Safari, -o- for Opera, and -ms- for Internet Explorer.`
  },
  {
    id: 3,
    question: `What is the correct HTML for referring to an external style sheet?`,
    options: [
      '<style src="mystyle.css">',
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      '<stylesheet>mystyle.css</stylesheet>',
      '<link href="stylesheet" type="text/css" style="mystyle.css">'
    ],
    correct: 1,
    type: "single",
    explanation: `The correct syntax is: <link rel="stylesheet" type="text/css" href="mystyle.css">. This links an external CSS file to the HTML document.`
  },
  {
    id: 4,
    question: `<br><br>
<pre>Descendant selectors nav a  {
} are more general than child selectors nav &gt;
     a  {
}</pre><br>`,
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: `Descendant selectors (space) match all descendants at any level, while child selectors (>) only match direct children. This makes descendant selectors more general.`
  },
  {
    id: 5,
    question: `In the following code snippet, what value is given for the bottom margin?<br><br>
<pre>margin: 15px 10px 3px 8px;</pre>`,
    options: [
      "5px",
      "10px",
      "3px",
      "8px"
    ],
    correct: 2,
    type: "single",
    explanation: `In CSS margin shorthand: margin: top right bottom left; So 15px = top, 10px = right, 3px = bottom, 8px = left.`
  },
  {
    id: 6,
    question: `What is the default value of the position property?`,
    options: [
      "fixed",
      "static",
      "absolute",
      "relative"
    ],
    correct: 1,
    type: "single",
    explanation: `The default value of the position property is static. Elements with position: static are positioned according to the normal flow of the document.`
  },
  {
    id: 7,
    question: `<br><br>
<pre>You want all &lt;p&gt; elements to be center-aligned. What syntax is correct?</pre><br>`,
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
    id: 8,
    question: `If you want your navigation bar to remain visible even when the user scrolls downward, which type of positioning should you use?`,
    options: [
      "static",
      "absolute",
      "relative",
      "fixed"
    ],
    correct: 3,
    type: "single",
    explanation: `position: fixed; positions an element relative to the viewport, so it stays in the same place even when the page is scrolled.`
  },
  {
    id: 9,
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
    id: 10,
    question: `Which of the following property is used to set the background image of an element?`,
    options: [
      "background-color",
      "background-image",
      "background-repeat",
      "background-position"
    ],
    correct: 1,
    type: "single",
    explanation: `background-image: url('image.jpg'); sets a background image for an element. This question is identical to question 1.`
  },
  {
    id: 11,
    question: `Which CSS3 property allows you to change property values smoothly over a given duration?`,
    options: [
      "focus",
      "hover",
      "change",
      "transition"
    ],
    correct: 3,
    type: "single",
    explanation: `The transition property allows you to change property values smoothly (with a transition effect) over a given duration.`
  },
  {
    id: 12,
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
    id: 13,
    question: `Which of the following is a relative unit in CSS?`,
    options: [
      "pc",
      "px",
      "mm",
      "em"
    ],
    correct: 3,
    type: "single",
    explanation: `em is a relative unit that is relative to the font-size of the element (or parent element). px is a fixed unit, mm is absolute, pc is picas (absolute).`
  },
  {
    id: 14,
    question: `How do you properly access the third element in an array variable named fruit?`,
    options: [
      "[fruit]3",
      "fruit[3]",
      "fruit_3",
      "None of the others"
    ],
    correct: 3,
    type: "single",
    explanation: `Arrays are zero-indexed in JavaScript, so the third element is at index 2. fruit[2] would be correct, but none of the given options show this.`
  },
  {
    id: 15,
    question: `Which of the following does not generate output directly to the screen?`,
    options: [
      "console.log(message);",
      "element.innerHTML = message;",
      "document.write(message);"
    ],
    correct: 0,
    type: "single",
    explanation: `console.log() outputs to the browser's console, not directly to the screen. innerHTML modifies the page content, and document.write() writes to the document.`
  },
  {
    id: 16,
    question: `<br><br>
<pre>What is the correct JavaScript syntax to insert at the [MISSING CODE]?&lt;
    br&gt;
    function myFunction(num1, num2)  {
    &lt;
    br&gt;
    // MISSING CODE&lt;
    br&gt;
}</pre><br>`,
    options: [
      "myFunction = num1 * num2;",
      "myFunction = num1.num2;",
      "return num1.num2;",
      "return num1 * num2;"
    ],
    correct: 3,
    type: "single",
    explanation: `The return statement specifies the value to be returned by the function. To return the product of num1 and num2, use return num1 * num2;`
  },
  {
    id: 17,
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
    id: 18,
    question: `Every valid web page can be represented as a tree. This tree is referred to as the:`,
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
    question: `What statement do you use to create a new object?`,
    options: [
      "var x = new Object();",
      "var x = new Number('123');",
      "var x = new product('111', 'laptop');",
      "All of the others"
    ],
    correct: 3,
    type: "single",
    explanation: `All options are valid ways to create objects in JavaScript: Object constructor, Number object, and custom object constructor.`
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
<pre>var fruits = ["Banana", "Orange", "Apple", "Mango"];
alert(typeof(fruits));
</pre><br>
What is the output of the above code?`,
    options: [
      '"Object"',
      '"Array"',
      '"undefined"',
      '"null"'
    ],
    correct: 0,
    type: "single",
    explanation: `In JavaScript, arrays are a type of object. typeof [] returns "object", not "array". Use Array.isArray() to specifically check for arrays.`
  },
  {
    id: 22,
    question: `<br><br>
<pre>&lt;h1 id="id01"&gt;My First Page&lt;/h1&gt;
&lt;p id="id02"&gt;&lt;/p&gt;
&lt;script&gt;
document.getElementById("id02").innerHTML =
document.getElementById("id01").innerHTML;
&lt;/script&gt;
</pre><br>
What is the correct statement?`,
    options: [
      "Syntax error",
      "Retrieves the text of an &lt;h1&gt; element and copies it into a &lt;p&gt; element",
  {
    id: 23,
    question: `<br><br>
<pre>var name = prompt("What is your name?");
</pre><br>
What value is stored in name if the user clicks Cancel?`,
    options: [
      '""',
      "null",
      "Empty",
      "undefined"
    ],
    correct: 1,
    type: "single",
    explanation: `When the user clicks Cancel in a prompt dialog, the prompt() function returns null. If they click OK without entering text, it returns an empty string ("").`
  },
  {
    id: 24,
    question: `What code should be added to [MISSING CODE] to set the value "mango" to the input tag with id="demo"?<br><br>
<pre>function myMethod() {
  var arr = ["apple", "mango", "kiwi", "orchid"];
  [MISSING CODE]
}

&lt;input type="text" id="demo"&gt;
&lt;input type="button" value="getValue" onclick="myMethod()"&gt;
</pre>`,
    options: [
      'document.getElementById("demo").text = arr;',
      'document.getElementById("demo").value = arr[1];',
      'document.getElementById("demo") = arr[1];',
      'document.getElementById("demo").value = arr[2];'
    ],
    correct: 1,
    type: "single",
    explanation: `arr[1] accesses "mango" (index 1, zero-based). To set the value of an input element, use the value property: element.value = "value".`
  },
  {
    id: 25,
    question: `<br><br>
<pre>What code should be added at [MISSING CODE] to format the border of the input field as red, 3px, solid?&lt;
    br&gt;
    &lt;
    br&gt;
    function show()  {
    &lt;
    br&gt;
        var input = document.getElementById("demo");
    &lt;
    br&gt;
        if (input.value.length == 0)  {
    &lt;
    br&gt;
        [MISSING CODE]&lt;
    br&gt;
}&lt;
    br&gt;
}</pre><br>`,
    options: [
      'input.style.border = "red";<br>input.style.border = "3px";<br>input.style.border = "solid";',
      'input.style.borderStyle = "red 3px solid";',
      'input.style.border = "3px solid red";',
      'input.style.border = "solid+3px+red";'
    ],
    correct: 2,
    type: "single",
    explanation: `The correct CSS border shorthand is: border: width style color; So "3px solid red" is correct. Setting multiple properties individually would overwrite each other.`
  },
  {
    id: 26,
    question: `What does mnemonic mean?`,
    options: [
      "That variable names should start with lowercase letters and use uppercase letters if the variable has multiple parts, e.g. firstName.",
      "That variable names should be as short as possible, preferably with no more than two or three characters.",
      "That variable names should help describe the value being stored"
    ],
    correct: 2,
    type: "single",
    explanation: `Mnemonic means aiding or designed to aid memory. In programming, mnemonic variable names help describe what the variable stores, making code more readable.`
  },
  {
    id: 27,
    question: `Which of the following is not a valid operator?`,
    options: [
      "++",
      "+=",
      "==",
      "=+",
      "-"
    ],
    correct: 3,
    type: "single",
    explanation: `"=+" is not a valid JavaScript operator. The correct increment operator is "++", and assignment with addition is "+=". The minus "-" is valid for subtraction/negation.`
  },
  {
    id: 28,
    question: `Which of the following code segments will keep people from being able to zoom in or out on your content?`,
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
    id: 29,
    question: `Which of the following bootstrap classes are used to add a dropdown menu?`,
    options: [
      '<nav class="dropdown-menu">',
      '<ul class="dropdown-menu">',
      '<ul class="nav nav-pills dropdown">'
    ],
    correct: 1,
    type: "single",
    explanation: `In Bootstrap, the .dropdown-menu class is applied to a <ul> element to create a dropdown menu. It's typically used within a .dropdown container.`
  },
  {
    id: 30,
    question: `Consider the following code using Bootstrap 3:<br><br>
<pre>&lt;div class="col-sm-6 col-lg-4"&gt;</pre><br>
In a small (sm) viewport the div will be how many columns wide?`,
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
    id: 31,
    question: `Statement 1: Responsive web design is a setup of the same HTML code to all devices and CSS is used to alter the rendering of the page on the device.<br><br>
Statement 2: The meta viewport tag gives the browser instructions on how to adjust the dimensions and scaling of the page to the width of the device.<br><br>
Choose the right option:`,
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 0,
    type: "single",
    explanation: `Both statements are true. Responsive design uses the same HTML with CSS media queries to adapt layout. The viewport meta tag controls page dimensions and scaling on mobile devices.`
  },
  {
    id: 32,
    question: `Statement 1: You can insert one or many "responsive breakpoints" in your stylesheet. But you should choose a mobile-first approach to design.<br><br>
Statement 2: Responsive web design generates many completed layouts. These each layout is done individually for each device type.<br><br>
Choose the right option:`,
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
    id: 33,
    question: `1 = 1% of viewport width`,
    options: [
      "vh",
      "px",
      "vw",
      "vv"
    ],
    correct: 2,
    type: "single",
    explanation: `vw stands for viewport width. 1vw = 1% of the viewport's width. Similarly, 1vh = 1% of the viewport's height.`
  },
  {
    id: 34,
    question: `Which of the following is a true statement about using a separate "m." site for your content?`,
    options: [
      "It is difficult to keep multiple versions of your site consistent. Any updates must be made in multiple places.",
      "Some search engines require a .m version of your site.",
      "Users have control over which version of the page they can see, regardless of the device they are using."
    ],
    correct: 0,
    type: "single",
    explanation: `Maintaining separate mobile sites (like m.example.com) requires duplicate content management, making consistency challenging and updates error-prone.`
  },
  {
    id: 35,
    question: `Which of the following is a benefit of using the Bootstrap CDN?`,
    options: [
      "You always are linked to the latest Bootstrap code.",
      "You are able to customize the Bootstrap values which you cannot do with a local version of the code.",
      "Using the CDN is the only way to use Bootstrap for free.",
      "All of the others"
    ],
    correct: 0,
    type: "single",
    explanation: `CDN (Content Delivery Network) benefits include faster loading (cached files), reduced server load, and automatic updates to the latest version (if you link to the latest).`
  },
  {
    id: 36,
    question: `Consider the following code using Bootstrap 3:<br><br>
<pre>&lt;div class="col-sm-2 col-lg-4"&gt;</pre><br>
In a large (lg) viewport the div will be:`,
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
    id: 37,
    question: `The Bootstrap grid system works across multiple devices.`,
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: `True. Bootstrap's responsive grid system adapts to all device sizes (phones, tablets, desktops) using a series of containers, rows, and columns.`
  },
  {
    id: 38,
    question: `<br><br>
<pre>Statement 1: You only can insert one "responsive breakpoint" in your stylesheet.&lt;
    br&gt;
    Statement 2: Insert one breakpoint for testing the viewport size which is from 768px and down. You have to do:&lt;
    br&gt;
    @media only screen and (max-width:768px) {
    &lt;
    br&gt;
}&lt;
    br&gt;
    &lt;
    br&gt;
    Choose the right option:</pre><br>`,
    options: [
      "Statement 1 is true, statement 2 is true",
      "Statement 1 is false, statement 2 is false",
      "Statement 1 is true, statement 2 is false",
      "Statement 1 is false, statement 2 is true"
    ],
    correct: 3,
    type: "single",
    explanation: `Statement 1 is false (you can have multiple breakpoints). Statement 2 is true (the media query shown targets screens up to 768px wide).`
  },
  {
    id: 39,
    question: `What grid classes that cross the page are in the Bootstrap 3 Grid System?`,
    options: [
      "sm",
      "xs",
      "md",
      "lg",
      "All of the others"
    ],
    correct: 4,
    type: "single",
    explanation: `Bootstrap 3 has four grid classes: xs (extra small), sm (small), md (medium), and lg (large). All are used to create responsive layouts.`
  },
  {
    id: 40,
    question: `Default size of H4 bootstrap heading:`,
    options: [
      "16px",
      "18px",
      "24px",
      "36px"
    ],
    correct: 1,
    type: "single",
    explanation: `In Bootstrap 3, the default font size for h4 is 18px. h1=36px, h2=30px, h3=24px, h4=18px, h5=14px, h6=12px.`
  },
  {
    id: 41,
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
    id: 42,
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
    id: 43,
    question: `HTML uses HTML elements to annotate documents. This is a way of marking up the content to identify specific parts.`,
    options: [
      "Hypertext",
      "Tags",
      "Elements",
      "Browse"
    ],
    correct: 1,
    type: "single",
    explanation: `HTML uses tags (like <p>, <h1>, <div>) to mark up content and create elements. Tags are the building blocks of HTML documents.`
  },
  {
    id: 44,
    question: `Which is the correct file extension for a web page?`,
    options: [
      ".html",
      ".java",
      ".js",
      ".cpp"
    ],
    correct: 0,
    type: "single",
    explanation: `.html or .htm are the standard file extensions for HTML web pages. .js is for JavaScript, .java for Java source code, .cpp for C++ source code.`
  },
  {
    id: 45,
    question: `What statement block do you insert on the 3rd line to create a list of options?<br><br>
<pre>&lt;body&gt;
&lt;select&gt;
&lt;!-- Insert here --&gt;
&lt;/select&gt;
&lt;/body&gt;
</pre>`,
    options: [
      "&lt;option&gt;a&lt;/option&gt;&lt;option&gt;b&lt;/option&gt;&lt;option&gt;c&lt;/option&gt;",
      "&lt;item&gt;a&lt;/item&gt;&lt;item&gt;b&lt;/item&gt;&lt;item&gt;c&lt;/item&gt;",
      "<list>a</list><list>b</list><list>c</list>"
    ],
    correct: 0,
    type: "single",
    explanation: `HTML select elements use <option> tags to define the available options in a dropdown list.`
  },
  {
    id: 46,
    question: `What is the correct HTML for creating a hyperlink?`,
    options: [
      'a>http://fpthem.edu.vn',
      '<a url="http://fpthem.edu.vn">fpt-uni</a>',
      '<a href="http://fpthem.edu.vn">fpt-uni</a>',
      '<a name="http://fpthem.edu.vn">fpt-uni</a>'
    ],
    correct: 2,
    type: "single",
    explanation: `The correct syntax is <a href="URL">link text</a>. The href attribute contains the destination URL.`
  },
  {
    id: 47,
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
    id: 48,
    question: `What syntax do you use to insert a comment to the page HTML?`,
    options: [
      "&lt;!-- Write your comments here --&gt;",
      "// Write your comments here",
      "/* Write your comments here */",
      "<@!-- Write your comments here -->"
    ],
    correct: 0,
    type: "single",
    explanation: `HTML comments use the syntax: <!-- comment text -->. // is for JavaScript/CSS comments, /* */ is for CSS multi-line comments.`
  },
  {
    id: 49,
    question: `Which is the best/proper way to declare the header for a page?`,
    options: [
      "&lt;head&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Mister Rogers&lt;/h1&gt;<br>&nbsp;&nbsp;&lt;nav&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='one.html'&gt;one&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='two.two.html'&gt;two&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='three.html'&gt;three&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='songs.html'&gt;Songs&lt;/a&gt;<br>&nbsp;&nbsp;&lt;/nav&gt;<br>&lt;/head&gt;",
      "&lt;div id='header'&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Mister Rogers&lt;/h1&gt;<br>&nbsp;&nbsp;&lt;div id='nav'&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='one.html'&gt;one&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='two.two.html'&gt;two&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='three.html'&gt;three&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='songs.html'&gt;Songs&lt;/a&gt;<br>&nbsp;&nbsp;&lt;/div&gt;<br>&lt;/div&gt;",
      "&lt;header&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Mister Rogers&lt;/h1&gt;<br>&nbsp;&nbsp;&lt;nav&gt;<br>&lt;/header&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='one.html'&gt;one&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='two.two.html'&gt;two&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='three.html'&gt;three&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='songs.html'&gt;Songs&lt;/a&gt;<br>&nbsp;&nbsp;&lt;/nav&gt;",
      "&lt;header&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Mister Rogers&lt;/h1&gt;<br>&nbsp;&nbsp;&lt;nav&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='one.html'&gt;one&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='two.two.html'&gt;two&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='three.html'&gt;three&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href='songs.html'&gt;Songs&lt;/a&gt;<br>&nbsp;&nbsp;&lt;/nav&gt;<br>&lt;/header&gt;"
    ],
    correct: 3,
    type: "single",
    explanation: `Option D uses the semantic HTML5 <header> element correctly, containing an <h1> and <nav> with proper nesting and closing tags.`
  },
  {
    id: 50,
    question: `Which code properly creates the nested list structure shown here?<br><br>
Vegetables<br>
Fruit<br>
&nbsp;&nbsp;Blueberries<br>
&nbsp;&nbsp;Bananas`,
    options: [
      `<ul><li>Vegetables</li><li>Fruit<ol><li>Blueberries</li><li>Bananas</li></ol></li></ul>`
    ],
    correct: 0,
    type: "single",
    explanation: `The structure shows an unordered list with Vegetables and Fruit, and Fruit has an ordered sublist of Blueberries and Bananas. The provided option correctly implements this.`
  },
  {
    id: 51,
    question: `Consider the code:<br><br>
<pre>&lt;form&gt;
  &lt;input type="[missing code]" value="Send"/&gt;
&lt;/form&gt;
</pre><br>
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
    id: 52,
    question: `A basic functionality of browsers is to translate HTML documents into viewable webpages.`,
    options: [
      "True",
      "False"
    ],
    correct: 0,
    type: "single",
    explanation: `True. Web browsers parse HTML documents and render them as visual web pages, applying CSS styling and executing JavaScript.`
  },
  {
    id: 53,
    question: `What type is the default display value of the div tag?`,
    options: [
      "single",
      "block",
      "wrap",
      "inline"
    ],
    correct: 1,
    type: "single",
    explanation: `<div> elements have display: block; by default, meaning they start on a new line and take up the full width available.`
  },
  {
    id: 54,
    question: `W3C stands for:`,
    options: [
      "World Wide Web Consortium",
      "World Wide Web Cooperation",
      "WWW Consortium"
    ],
    correct: 0,
    type: "single",
    explanation: `W3C stands for World Wide Web Consortium, an international community that develops open standards to ensure the long-term growth of the Web.`
  },
  {
    id: 55,
    question: `The Domain Name Service looks up the domain and returns the:`,
    options: [
      "IP address",
      "server",
      "Host",
      "Domain"
    ],
    correct: 0,
    type: "single",
    explanation: `DNS (Domain Name System) translates human-readable domain names (like google.com) into IP addresses (like 142.250.185.78) that computers use to connect.`
  },
  {
    id: 56,
    question: `What should target = "_blank" do when included in a link tag?`,
    options: [
      "Opens the link in a new tab or window",
      "Opens the link in a tab called \"_blank\"",
      "This is not a valid expression"
    ],
    correct: 0,
    type: "single",
    explanation: `target="_blank" opens the linked document in a new browser tab or window, depending on the browser's settings.`
  },
  {
    id: 57,
    question: `A ___ is a computer that is in charge of handling resource requests from multiple computers.`,
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
    id: 58,
    question: `What are proprietary tags?`,
    options: [
      "Tags used to define ownership of the content",
      "Tags that display copyright information",
      "Tags that work only on certain browsers"
    ],
    correct: 2,
    type: "single",
    explanation: `Proprietary tags are non-standard HTML tags that work only in specific browsers (e.g., <marquee> in old Internet Explorer, <blink> in old Netscape).`
  },
  {
    id: 59,
    question: `Consider the following code using Bootstrap 3:<br><br>
<pre>&lt;div class="col-sm-2 col-lg-4"&gt;</pre><br>
In a md viewport the div will be:`,
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correct: 0,
    type: "single",
    explanation: `In Bootstrap 3, col-sm-2 applies to small (sm) viewports and above (including md and lg). So on medium (md) viewports, the div will be 2 columns wide.`
  },
  {
    id: 60,
    question: `Which class provides a responsive fixed width container?`,
    options: [
      ".container-fluid",
      ".container",
      ".container-fixed",
      "All of the others"
    ],
    correct: 1,
    type: "single",
    explanation: `.container provides a responsive fixed width container that centers content and adjusts at breakpoints. .container-fluid is full width.`
  }
];