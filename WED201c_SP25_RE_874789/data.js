const questions = [
    // ========== CÂU 1 ==========
    {
        id: 1,
        question: "You want all p elements to be center-aligned. What syntax is the right?",
        options: [
            "paragraphs { color: red; text-align: center; }",
            "#p { color: red; text-align: center; }",
            "p { color: red; text-align: center; }",
            "p{ color: red; text-align: center; }"
        ],
        correct: 3, // Key: D (Lưu ý: C và D nội dung giống nhau nhưng Key chọn D)
        type: "single",
        explanation: "Đáp án đúng là D. Selector 'p' chọn tất cả các thẻ p."
    },

    // ========== CÂU 2 ==========
    {
        id: 2,
        question: "Which CSS3 property is used to center text? (Only provide the property name; do not give it a value.)",
        options: [
            "center",
            "text-align",
            "text-center",
            "align"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: text-align."
    },

    // ========== CÂU 3 ==========
    {
        id: 3,
        question: "Consider the code: \nh1 { color: blue; font-size: 20px; } \nWhich of the following is called \"selector\"?",
        options: [
            "color and font-size",
            "h1",
            "All parts of the code above",
            "blue and 20px"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: h1 là selector."
    },

    // ========== CÂU 4 ==========
    {
        id: 4,
        question: "What does <thead> stand for?",
        options: [
            "The head",
            "Table head",
            "Table header",
            "The td head"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 5 ==========
    {
        id: 5,
        question: "How much width will this div occupy? \ndiv{ \n  width: 100px; \n  padding: 10px; \n  margin: 5px; \n  border: 2px; \n}",
        options: [
            "124px",
            "100px",
            "104px",
            "134px"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: 100 + padding(10*2) + border(2*2) + margin(5*2) = 134px."
    },

    // ========== CÂU 6 ==========
    {
        id: 6,
        question: "Which of the following property is used to set the text shadow around a text?",
        options: [
            "white-space",
            "text-shadow",
            "text-decoration",
            "text-transform"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 7 ==========
    {
        id: 7,
        question: "How do you add a background color for all <h1> elements?",
        options: [
            "h1.all {background-color:#FFFFFF;}",
            "all.h1 {background-color:#FFFFFF;}",
            "h1 {background-color:#FFFFFF;}",
            "All of the others"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 8 ==========
    {
        id: 8,
        question: "div { \n  background-color: lightblue; \n  width: 200px; \n  padding: 25px; \n  border: 25px solid navy; \n} \nWhich method to choose the total width of the div tag is 200px?",
        options: [
            "box-sizing: content-box",
            "box-sizing: border-box",
            "box-sizing: Inherited"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: box-sizing: border-box tính cả padding và border vào width."
    },

    // ========== CÂU 9 ==========
    {
        id: 9,
        question: "Which of the following is the best example of declaring at-rule in CSS?",
        options: [
            "@-import",
            "@import",
            "at-import",
            "at@import"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 10 ==========
    {
        id: 10,
        question: "Which of the following line of code can be used to hide the image?",
        options: [
            "img { display: 0; }",
            "img { display: block; }",
            "img { display: none; }",
            "img { display: empty; }"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 11 ==========
    {
        id: 11,
        question: "Consider the code: \nhtml { font-size:16px; } \ndiv { font-size: 3rem; border: 1px solid black; } \n#mycss { font-size: 2rem; border: 1px solid red; } \n\n<p>This is a text</p> \n<div id=\"mycss\"> At here for your code </div> \n\nWhat is the right option?",
        options: [
            "The font-size of this document is 16px.",
            "The font-size of the div with id=\"mycss\" is 2 x the browser's font size.",
            "The rem unit sets the font-size relative to the browsers base font-size, and will not inherit from its parents.",
            "All of the others"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D."
    },

    // ========== CÂU 12 ==========
    {
        id: 12,
        question: "Assume that this code is linked together correctly. \n<p class = \"fancy plain\">Hi</p> \nWhat color font is used to display \"Hi\"? \n\np { \n  color: red; \n  padding: 10px 5px; \n  background: black; \n} \n.fancy { \n  font-family: cursive; \n  background: red; \n  color: green; \n} \n.plain { \n  font-family: Times, serif; \n  color: black; \n}",
        options: [
            "red",
            "green",
            "black",
            "browser default"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: Vì class .plain được định nghĩa sau class .fancy trong CSS nên màu black sẽ đè màu green."
    },

    // ========== CÂU 13 ==========
    {
        id: 13,
        question: "div { \n  background: url(img_flwr.gif); \n  background-size: 100% 100%; \n  background-repeat: no-repeat; \n} \nChoose the right statement about the size of background images?",
        options: [
            "the size of a background image was the actual size of the image",
            "Stretch the background image to completely cover the content area",
            "Stretch the background image so that exactly fit horizontally",
            "None of the others"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 14 ==========
    {
        id: 14,
        question: "Choose the right statement about the property \"font-weight\".",
        options: [
            "The font-weight property sets how thick or thin characters in text should be displayed.",
            "The font-weight property transforms the inner text of the element to italic style",
            "The font-weight property sets the font size of the element",
            "The font-weight property sets how opacity or clear characters in text should be displayed."
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 15 ==========
    {
        id: 15,
        question: "What tag do you use to add a JavaScript code in the HTML document?",
        options: [
            "<Scripting>",
            "<JS>",
            "<JavaScript>",
            "<Script>"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D."
    },

    // ========== CÂU 16 ==========
    {
        id: 16,
        question: "What is the correct syntax for referring to the external file \"mycode.js\"?",
        options: [
            "<link href=\"mycode.js\" type=\"javascript\"/>",
            "<script href=\"mycode.js\" type=\"javascript\"></script>",
            "<script referring To=\"mycode.js\" version=\"1.0\" type =\"javascript\"></script>",
            "<script src=\"mycode.js\"></script>"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D."
    },

    // ========== CÂU 17 ==========
    {
        id: 17,
        question: "What value is returned by 9% 5?",
        options: [
            "4",
            "1",
            "0",
            "1.8"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: 9 chia 5 dư 4."
    },

    // ========== CÂU 18 ==========
    {
        id: 18,
        question: "Every valid web page can be represented as a tree. This tree is referred to as the",
        options: [
            "DOM",
            "API",
            "JavaScript",
            "Element"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: Document Object Model."
    },

    // ========== CÂU 19 ==========
    {
        id: 19,
        question: "Which method is used to search for a match, and returns the position of the match?",
        options: [
            "match()",
            "search()",
            "test()",
            "replace()"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 20 ==========
    {
        id: 20,
        question: "Which of the following is the proper way to link to an external JavaScript file?",
        options: [
            "<script file = \"file.js\"></script>",
            "<script>\"file.js\"</script>",
            "<script = \"file.js\"></script>",
            "<script href=\"file.js\"></script>",
            "<script src = \"file.js\"></script>"
        ],
        correct: 4, // Key: E
        type: "single",
        explanation: "Đáp án đúng là E."
    },

    // ========== CÂU 21 ==========
    {
        id: 21,
        question: "var fruits, text=\"\", i; \nfruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"]; \nfruits[6] = \"Lemon\"; \nfor (i = 0; i < 7; i++) { \n    text += fruits[i] + \"<br/>\"; \n} \ndocument.write(text); \n\nWhat is the output of the above code?",
        options: [
            "Syntax error",
            "Banana Orange Apple Mango undefined undefined Lemon",
            "Banana Orange Apple Mango Lemon",
            "Banana Orange Apple Mango null null Lemon"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: Các phần tử ở index 4 và 5 chưa được định nghĩa (undefined)."
    },

    // ========== CÂU 22 ==========
    {
        id: 22,
        question: "Which of these options does NOT require the use of parentheses?",
        options: [
            "alert",
            "innerHTML",
            "document.write",
            "prompt"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: innerHTML là thuộc tính (property), không phải phương thức (method)."
    },

    // ========== CÂU 23 ==========
    {
        id: 23,
        question: "function change() { \n    var list = document.getElementsByTagName(\"ul\"); \n    for(var i = 0; i < list.length; i++) { \n        list[i].style.display = \"block\"; \n    } \n} \n<body onload=\"change()\"> \n    <li>link 11</li> \n    <li>link 12</li> \n    <ul> \n        <li>link 1 <ul> </ul> </li> \n        <li>link 2 <ul> </ul> </li> \n    </ul> \n</body> \n<li>link 21</li> \n<li>link 22</li> \n\nWhat statement is right?",
        options: [
            "To show all lists",
            "To show any list",
            "To hide all lists",
            "None of the others"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: Đoạn code đặt display: block cho các thẻ ul."
    },

    // ========== CÂU 24 ==========
    {
        id: 24,
        question: "var data = [{id:1, name:\"laptop\"}, {id:2, name:\"screen\"}, {id:3, name:\"keyboard\"}]; \n\nWhat statement is right to change the name of the first object?",
        options: [
            "data.name = \"new value\"",
            "data[0].name = \"new value\"",
            "name = \"new value\"",
            "None of the others"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 25 ==========
    {
        id: 25,
        question: "<p id=\"demo\"></p> \n\n<script> \ndocument.getElementById(\"demo\").innerHTML = Date(); \n</script> \n\nWhat does the script above do?",
        options: [
            "Assign the value of Date() to the element with id=\"demo\".",
            "Assign the value of Date() to the content of the element with id=\"demo\".",
            "Assign the value of Date() to the content (innerHTML) of the element with id=\"demo\"."
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 26 ==========
    {
        id: 26,
        question: "What statement do you use to create a new object?",
        options: [
            "var x = new Object()",
            "var x = new Number(\"123\")",
            "var x = new product(\"111\", \"laptop\")",
            "All of the others"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D."
    },

    // ========== CÂU 27 ==========
    {
        id: 27,
        question: "<script> \nfunction myFunction(obj){ \n    obj.style.position = \"fixed\"; \n    obj.style.bottom = 0; \n    obj.style.right = 0; \n    obj.style.width = \"100px\"; \n    obj.style.height = \"100px\"; \n    obj.style.backgroundColor = \"red\"; \n} \n</script> \n\n<div onclick=\"myFunction(this)\"></div> \n\nAnd two statements about the code: \n1. The div is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. \n2. The fixed div element is in the lower-right corner of the page. \n\nChoose the right statement.",
        options: [
            "Statement 1 is true and statement 2 is true",
            "Statement 1 is false and statement 2 is false",
            "Statement 1 is true and statement 2 is false",
            "Statement 1 is false and statement 2 is true"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 28 ==========
    {
        id: 28,
        question: "var fruits; \nfruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"]; \n\nI would like to display the length of the array \"fruits\". What statement do you use to insert the 3rd code line?",
        options: [
            "Window.alert(fruits);",
            "Window.alert(fruits.length);",
            "Window.alert(fruits.length());",
            "Window.alert(length);"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: Array.length là thuộc tính, không phải phương thức."
    },

    // ========== CÂU 29 ==========
    {
        id: 29,
        question: "When a function returns a node from the DOM, it is of type",
        options: [
            "Number",
            "Boolean",
            "Object",
            "String"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 30 ==========
    {
        id: 30,
        question: "Consider the following CSS rules: \n@media all and (min-width: 500px) { \n    div { \n        width: 25%; \n    } \n} \ndiv { \n    width: 80%; \n} \nWhat is the width of any div elements on a 750px screen?",
        options: [
            "80%",
            "The div won't display since media queries must go at the bottom of the screen.",
            "100%",
            "25%"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: Do tính chất Cascading, quy tắc 'div { width: 80% }' nằm sau media query nên sẽ ghi đè quy tắc trong media query."
    },

    // ========== CÂU 31 ==========
    {
        id: 31,
        question: "What is Responsive Web Design?",
        options: [
            "Responsive web design makes your web page look good on all devices.",
            "Responsive web design uses only HTML and CSS.",
            "Responsive web design is not a program or JavaScript.",
            "All of the others"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 32 ==========
    {
        id: 32,
        question: "Consider the following code using Bootstrap 3: \n<div class=\"col-sm-2 col-lg-4\"> \nIn a large viewport, the div will be how many columns wide?",
        options: [
            "2",
            "4",
            "6",
            "8"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: col-lg-4."
    },

    // ========== CÂU 33 ==========
    {
        id: 33,
        question: "Consider the following code where the font-size of a div is 32px, the font-size of a paragraph is .5em, and the font-size of a span element is .5em. \n<div> \n<p> \n<span></span>\n</p> \n</div> \nHow big is the font of the <span> element? What is the font-size of the span element in px?",
        options: [
            "32",
            "16",
            "64",
            "8"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: Div(32px) -> p(0.5em = 16px) -> span(0.5em of 16px = 8px)."
    },

    // ========== CÂU 34 ==========
    {
        id: 34,
        question: "Consider the following CSS rule: \ndiv { \nwidth: 80%; \n} \n@media print { \n    width: 25%; \n} \n\nWhich of the following is a true statement?",
        options: [
            "The div elements will have a width of 25% only when the page is printed.",
            "The div elements will only be visible when the page is printed.",
            "The div elements will have a width of 80% only when the page is printed."
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 35 ==========
    {
        id: 35,
        question: "What do you do if you have large content that needs to be displayed on the page?",
        options: [
            "Use a vertical scroll on both desktop and mobile devices, but not horizontally.",
            "Use a horizontal scroll on both desktop and mobile devices, but not vertically.",
            "Use both horizontal and vertical scroll on both desktop and mobile devices.",
            "Do nothing."
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 36 ==========
    {
        id: 36,
        question: "Consider the following CSS rules: \ndiv { \n    width: 80%; \n} \n\n@media all and (min-width: 500px) { \n    div { \n        width: 25%; \n    } \n} \n\nWhat is the width of any div elements on a 350px screen?",
        options: [
            "100%",
            "80%",
            "25%",
            "75%"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: Màn hình 350px < 500px nên media query không áp dụng, width là 80%."
    },

    // ========== CÂU 37 ==========
    {
        id: 37,
        question: "Responsive sites can have a mixture of fluid and absolute measurements.",
        options: [
            "True",
            "False"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 38 ==========
    {
        id: 38,
        question: "Bootstrap uses:",
        options: [
            "JavaScript",
            "HTML, CSS, and JavaScript",
            "HTML",
            "CSS"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 39 ==========
    {
        id: 39,
        question: "Which class adds zebra-stripes to a table?",
        options: [
            ".table-bordered",
            ".table-striped",
            ".even and .odd",
            ".table-zebra"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 40 ==========
    {
        id: 40,
        question: "The Bootstrap 3 grid system is based on how many columns?",
        options: [
            "10",
            "12",
            "14",
            "16"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 41 ==========
    {
        id: 41,
        question: "Which of the following statements best describes what pixels, ems, and rems have in common?",
        options: [
            "They are all units of measurement used to define the length of elements on a webpage.",
            "They are all fluid units of measurement used to define the length of elements on a webpage.",
            "They are all fluid units of measurement that define the screen resolution of a page."
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 42 ==========
    {
        id: 42,
        question: "Which of the following code segments will prevent users from being able to zoom in or out on your content?",
        options: [
            "<meta name = 'viewport' content='width=device-width, initial-scale=1, maximum-scale = 1'>",
            "<meta name = 'viewport' content='width=device-width, initial-scale=1'>",
            "It is impossible to lock the zoom ability",
            "All of the others"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 43 ==========
    {
        id: 43,
        question: "Which fluid measurement type returns a percentage of the viewport height?",
        options: [
            "vh",
            "vw",
            "height",
            "line-height"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: vh (viewport height)."
    },

    // ========== CÂU 44 ==========
    {
        id: 44,
        question: "Which fluid measurement type returns a percentage of the viewport width?",
        options: [
            "vw",
            "vh",
            "v",
            "hw"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: vw (viewport width)."
    },

    // ========== CÂU 45 ==========
    {
        id: 45,
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: [
            "<footer>",
            "<section>",
            "<bottom>",
            "<body>"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 46 ==========
    {
        id: 46,
        question: "Choose the correct HTML tag to make an emphasized text",
        options: [
            "u tag",
            "I tag",
            "i tag",
            "strong tag"
        ],
        correct: 1, // Key: B (Lưu ý: 'I tag' thường là Italic, nhưng Key là B. Emphasized thường là <em> hoặc <i>)
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 47 ==========
    {
        id: 47,
        question: "The reverse attribute allows a list to appear in a reverse order in an unordered list.",
        options: [
            "True",
            "False"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: Unordered list (<ul>) không có thứ tự nên không có reverse, attribute này dùng cho Ordered list (<ol>)."
    },

    // ========== CÂU 48 ==========
    {
        id: 48,
        question: "Which is the best/proper way to declare a section that has an h2 heading and an unordered list?",
        options: [
            "<section><h2>Favorite Foods</h2>stuff<li>more</li></section><ul></ul>stuff<li>again</li>",
            "<section><h2>Favorite Foods</h2><p><ul></ul></p></section>stuff<li>more</li>stuff<li>again</li>",
            "<section><h2>Favorite Foods</h2>stuff<li>more</li>stuff<ol></ol></section><li>again</li>",
            "<section><h2>Favorite Foods</h2><ul>stuff<li>more</li>stuff<li>again</li></ul></section>"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: Cấu trúc hợp lệ là Section -> H2 + UL."
    },

    // ========== CÂU 49 ==========
    {
        id: 49,
        question: "You want to create a hyperlink that links to the Google page. What is the best option to create this link?",
        options: [
            "<a href=\"http://www.google.com\">my link</a>",
            "<a name=\"http://www.google.com\" target=\"_blank\">my link</a>",
            "<a id=\"http://www.google.com\" target=\"_top\">my link</a>",
            "<a reference=\"http://www.google.com\">my link</a>"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 50 ==========
    {
        id: 50,
        question: "The components of a URL are",
        options: [
            "service, hostname and directory path",
            "service, hostname, port, directory-path",
            "service, port and directory path",
            "service, hostname and port"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 51 ==========
    {
        id: 51,
        question: "Which of the following are object-oriented concepts?",
        options: [
            "Modules and interfaces",
            "Modules and information hiding",
            "Classes, information hiding, and inheritance",
            "Concurrency and information hiding"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 52 ==========
    {
        id: 52,
        question: "The first graphical browser was... (Please use one word answer)",
        options: [
            "Mosaic",
            "Chrome",
            "Viola"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 53 ==========
    {
        id: 53,
        question: "W3C stands for",
        options: [
            "World Wide Web Consortium",
            "World Wide Web Cooperation",
            "WWW Consortium",
            "None of the others"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 54 ==========
    {
        id: 54,
        question: "Which of the following is an example of a top-level domain?",
        options: [
            ".com",
            "umich.edu",
            "wikipedia.org"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A (.com, .org, .edu là TLD, nhưng trong các option chỉ có .com đứng riêng lẻ)."
    },

    // ========== CÂU 55 ==========
    {
        id: 55,
        question: "Which of the following is used to represent an unvisited hyperlink?",
        options: [
            ":link",
            ":nonvisited",
            ":unvisited",
            ":fresh"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 56 ==========
    {
        id: 56,
        question: "These are special codes which separate HTML from ordinary text.",
        options: [
            "frames",
            "Tags",
            "Frameset",
            "All of the others"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 57 ==========
    {
        id: 57,
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            "<a>http://fpthcm.edu.vn</a>",
            "<a url=\"http://fpthcm.edu.vn\">fpt-uni</a>",
            "<a href=\"http://fpthcm.edu.vn\">fpt-uni</a>",
            "<a name=\"http://fpthcm.edu.vn\">fpt-uni</a>"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 58 ==========
    {
        id: 58,
        question: "What validation error will this code produce? \n<!DOCTYPE html> <html lang=\"en\"><head></head><body></body></html><p>Validate me!</p>",
        options: [
            "Element head is missing a required instance of the child element title.",
            "End of file seen when expecting text or an end tag.",
            "No error."
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: Thẻ head bắt buộc phải chứa thẻ title."
    },

    // ========== CÂU 59 ==========
    {
        id: 59,
        question: "Which of the following are browsers?",
        options: [
            "Chrome, Firefox, Safari",
            "Firefox, Windows, Chrome",
            "Safari, Mac, Sublime, Chrome",
            "Safari, Chrome, NetBeans"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 60 ==========
    {
        id: 60,
        question: "Every well-formed HTML document should include",
        options: [
            "doctype, head, body",
            "doctype, header, body",
            "header, nav, footer"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    }
];