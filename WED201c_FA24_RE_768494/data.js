const questions = [
    // ========== CÂU 1 ==========
    {
        id: 1,
        question: "Which of the following property is used to set the background image of an element?",
        options: [
            "background-color",
            "background-image",
            "background-repeat",
            "background-position"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: background-image dùng để đặt hình nền."
    },

    // ========== CÂU 2 ==========
    {
        id: 2,
        question: "Which prefix do you need to get CSS3 properties to work on older Mozilla Firefox browsers?",
        options: [
            "-webkit-",
            "-moz-",
            "-0-",
            "-gecko-"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: -moz- là prefix cho Firefox."
    },

    // ========== CÂU 3 ==========
    {
        id: 3,
        question: "What is the correct HTML for referring to an external style sheet?",
        options: [
            "<style src=\"mystyle.css\">",
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">",
            "<stylesheet>mystyle.css</stylesheet>",
            "<link href=\"stylesheet\" type=\"text/css\" style=\"mystyle.css\">"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: Sử dụng thẻ link với rel='stylesheet'."
    },

    // ========== CÂU 4 ==========
    {
        id: 4,
        question: "Descendant selectors nav a { } are more general than child selectors nav > a { }",
        options: [
            "True",
            "False"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: True."
    },

    // ========== CÂU 5 ==========
    {
        id: 5,
        question: "In the following code snippet, what value is given for the bottom margin?\nmargin: 15px 10px 3px 8px;",
        options: [
            "5px",
            "10px",
            "3px",
            "8px"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: Thứ tự là Top (15px) - Right (10px) - Bottom (3px) - Left (8px)."
    },

    // ========== CÂU 6 ==========
    {
        id: 6,
        question: "What is the default value of the position property?",
        options: [
            "fixed",
            "static",
            "absolute",
            "relative"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: static."
    },

    // ========== CÂU 7 ==========
    {
        id: 7,
        question: "You want all <p> elements to be center-aligned. What syntax is correct?",
        options: [
            "paragraphs { color: red; text-align: center; }",
            "#p { color: red; text-align: center; }",
            "p { color: red; text-align: center; }",
            "p{ color: red; text-align: center; }" 
        ],
        correct: 3, // Key: D (Lưu ý: C và D giống nhau về nội dung code, key chọn D)
        type: "single",
        explanation: "Đáp án đúng là D: Selector 'p' chọn tất cả thẻ <p>."
    },

    // ========== CÂU 8 ==========
    {
        id: 8,
        question: "If you want your navigation bar to remain visible even when the user scrolls downward, which type of positioning should you use?",
        options: [
            "static",
            "absolute",
            "relative",
            "fixed"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: fixed."
    },

    // ========== CÂU 9 ==========
    {
        id: 9,
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

    // ========== CÂU 10 ==========
    {
        id: 10,
        question: "Which of the following property is used to set the background image of an element?",
        options: [
            "background-color",
            "background-image",
            "background-repeat",
            "background-position"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 11 ==========
    {
        id: 11,
        question: "Which CSS3 property allows you to change property values smoothly over a given duration?",
        options: [
            "focus",
            "hover",
            "change",
            "transition"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D."
    },

    // ========== CÂU 12 ==========
    {
        id: 12,
        question: "How do you make the text bold?",
        options: [
            "style: bold;",
            "font-weight: bold;",
            "font: bold;",
            "text: bold;"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 13 ==========
    {
        id: 13,
        question: "Which of the following is a relative unit in CSS?",
        options: [
            "pc",
            "px",
            "mm",
            "em"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: em là đơn vị tương đối."
    },

    // ========== CÂU 14 ==========
    {
        id: 14,
        question: "How do you properly access the third element in an array variable named fruit?",
        options: [
            "[fruit]3",
            "fruit[3]",
            "fruit_3",
            "None of the others"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: Truy cập phần tử thứ 3 phải là fruit[2]. Các đáp án kia đều sai."
    },

    // ========== CÂU 15 ==========
    {
        id: 15,
        question: "Which of the following does not generate output directly to the screen?",
        options: [
            "console.log(message);",
            "element.innerHTML = message;",
            "document.write(message);"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: console.log xuất ra console của trình duyệt, không phải màn hình trang web."
    },

    // ========== CÂU 16 ==========
    {
        id: 16,
        question: "What is the correct JavaScript syntax to insert at the [MISSING CODE]?\nfunction myFunction(num1, num2) {\n    // MISSING CODE \n}",
        options: [
            "myFunction = num1 * num2;",
            "myFunction = num1.num2;",
            "return num1.num2;",
            "return num1 * num2;"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D."
    },

    // ========== CÂU 17 ==========
    {
        id: 17,
        question: "Which of the following is not a valid method for generating output to the screen?",
        options: [
            "print",
            "document.write",
            "alert",
            "prompt"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 18 ==========
    {
        id: 18,
        question: "Every valid web page can be represented as a tree. This tree is referred to as the:",
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
        question: "What statement do you use to create a new object?",
        options: [
            "var x = new Object();",
            "var x = new Number(\"123\");",
            "var x = new product(\"111\", \"laptop\");",
            "All of the others"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D."
    },

    // ========== CÂU 20 ==========
    {
        id: 20,
        question: "Which of the following is the proper way to link to an external JavaScript file?",
        options: [
            "<script file=\"file.js\"></script>",
            "<script>\"file.js\"</script>",
            "<script = \"file.js\"></script>",
            "<script href=\"file.js\"></script>",
            "<script src=\"file.js\"></script>"
        ],
        correct: 4, // Key: E
        type: "single",
        explanation: "Đáp án đúng là E: Sử dụng thuộc tính src."
    },

    // ========== CÂU 21 ==========
    {
        id: 21,
        question: "var fruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"]; \nalert(typeof(fruits)); \nWhat is the output of the above code?",
        options: [
            "\"Object\"",
            "\"Array\"",
            "\"undefined\"",
            "\"null\""
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: Trong JS, typeof array trả về 'object'."
    },

    // ========== CÂU 22 ==========
    {
        id: 22,
        question: "<h1 id=\"id01\">My First Page</h1> \n<p id=\"id02\"></p> \n<script> \ndocument.getElementById(\"id02\").innerHTML = \ndocument.getElementById(\"id01\").innerHTML; \n</script> \nWhat is the correct statement?",
        options: [
            "Syntax error",
            "Retrieves the text of an <h1> element and copies it into a <p> element",
            "Retrieves the text of a <p> element and copies it into an <h1> element",
            "None of the others"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 23 ==========
    {
        id: 23,
        question: "var name = prompt(\"What is your name?\"); \nWhat value is stored in name if the user clicks Cancel?",
        options: [
            "\"\"",
            "null",
            "Empty",
            "undefined"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 24 ==========
    {
        id: 24,
        question: "<script> \nfunction myMethod() { \nvar arr = [\"apple\", \"mango\", \"kiwi\", \"orchid\"]; \n[MISSING CODE] \n} \n</script> \n<input type=\"text\" id=\"demo\"> \n<form> \n    <input type=\"button\" value=\"getValue\" onclick=\"myMethod()\"> \n</form> \n\nWhat code should be added to [MISSING CODE] to set the value \"mango\" to the input tag with id=\"demo\"?",
        options: [
            "document.getElementById(\"demo\").text = arr;",
            "document.getElementById(\"demo\").value = arr[1];",
            "document.getElementById(\"demo\") = arr[1];",
            "document.getElementById(\"demo\").value = arr[2];"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: 'mango' ở index 1."
    },

    // ========== CÂU 25 ==========
    {
        id: 25,
        question: "<script> \nfunction show() { \n    var input = document.getElementById(\"demo\"); \n    if (input.value.length == 0) { \n        [MISSING CODE] \n    } \n} \n</script> \n<form> \n    <input type=\"text\" id=\"demo\" placeholder=\"input your name\"> \n    <input type=\"button\" value=\"send\" onclick=\"show()\"> \n</form> \n\nWhat code should be added at [MISSING CODE] to format the border of the input field as red, 3px, solid?",
        options: [
            "input.style.border = \"red\"; input.style.border = \"3px\"; input.style.border = \"solid\";",
            "input.style.borderStyle = \"red 3px solid\";",
            "input.style.border = \"3px solid red\";",
            "input.style.border = \"solid+3px+red\";"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 26 ==========
    {
        id: 26,
        question: "What does mnemonic mean?",
        options: [
            "That variable names should start with lowercase letters and use uppercase letters if the variable has multiple parts, e.g. firstName.",
            "That variable names should be as short as possible, preferably with no more than two or three characters.",
            "That variable names should help describe the value being stored"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 27 ==========
    {
        id: 27,
        question: "Which of the following is not a valid operator?",
        options: [
            "++",
            "+=",
            "==",
            "=+",
            "--"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: =+ không phải toán tử chuẩn (thường là lỗi gõ của +=)."
    },

    // ========== CÂU 28 ==========
    {
        id: 28,
        question: "Which of the following code segments will keep people from being able to zoom in or out on your content?",
        options: [
            "<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'>",
            "<meta name='viewport' content='width=device-width, initial-scale=1'>",
            "It is impossible to lock the zoom ability",
            "All of the others"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 29 ==========
    {
        id: 29,
        question: "Which of the following bootstrap classes are used to add a dropdown menu?",
        options: [
            "<nav class=\"dropdown-menu\">",
            "<ul class=\"dropdown-menu\">",
            "<ul class=\"nav nav-pills dropdown\">"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 30 ==========
    {
        id: 30,
        question: "Consider the following code using Bootstrap 3: <div class=\"col-sm-6 col-lg-4\"> \nIn a small (sm) viewport the div will be how many columns wide?",
        options: [
            "6",
            "4",
            "12",
            "10"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: col-sm-6 nghĩa là 6 cột trên màn hình small."
    },

    // ========== CÂU 31 ==========
    {
        id: 31,
        question: "Statement 1: Responsive web design is a setup of the same HTML code to all devices and CSS is used to alter the rendering of the page on the device. \nStatement 2: The meta viewport tag gives the browser instructions on how to adjust the dimensions and scaling of the page to the width of the device. \nChoose the right option:",
        options: [
            "Statement 1 is true, statement 2 is true",
            "Statement 1 is false, statement 2 is false",
            "Statement 1 is true, statement 2 is false",
            "Statement 1 is false, statement 2 is true"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 32 ==========
    {
        id: 32,
        question: "Statement 1: You can insert one or many \"responsive breakpoints\" in your stylesheet. But you should choose a mobile-first approach to design. \nStatement 2: Responsive web design generates many completed layouts. These each layout is done individually for each device type. \nChoose the right option:",
        options: [
            "Statement 1 is true, statement 2 is true",
            "Statement 1 is false, statement 2 is false",
            "Statement 1 is true, statement 2 is false",
            "Statement 1 is false, statement 2 is true"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 33 ==========
    {
        id: 33,
        question: "1 = 1% of viewport width",
        options: [
            "vh",
            "px",
            "vw",
            "vv"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: vw (viewport width)."
    },

    // ========== CÂU 34 ==========
    {
        id: 34,
        question: "Which of the following is a true statement about using a separate \"m.\" site for your content?",
        options: [
            "It is difficult to keep multiple versions of your site consistent. Any updates must be made in multiple places.",
            "Some search engines require a .m version of your site.",
            "Users have control over which version of the page they can see, regardless of the device they are using."
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 35 ==========
    {
        id: 35,
        question: "Which of the following is a benefit of using the Bootstrap CDN?",
        options: [
            "You always are linked to the latest Bootstrap code.",
            "You are able to customize the Bootstrap values which you cannot do with a local version of the code.",
            "Using the CDN is the only way to use Bootstrap for free.",
            "All of the others"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 36 ==========
    {
        id: 36,
        question: "Consider the following code using Bootstrap 3: <div class=\"col-sm-2 col-lg-4\"> \nIn a large (lg) viewport the div will be ... columns wide.",
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

    // ========== CÂU 37 ==========
    {
        id: 37,
        question: "The Bootstrap grid system works across multiple devices.",
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
        question: "Statement 1: You only can insert one \"responsive breakpoint\" in your stylesheet. \nStatement 2: Insert one breakpoint for testing the viewport size which is from 768px and down. You have to do: \n@media only screen and (max-width:768px){ } \n\nChoose the right option:",
        options: [
            "Statement 1 is true, statement 2 is true",
            "Statement 1 is false, statement 2 is false",
            "Statement 1 is true, statement 2 is false",
            "Statement 1 is false, statement 2 is true"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: Statement 1 sai, Statement 2 đúng."
    },

    // ========== CÂU 39 ==========
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
        correct: 4, // Key: E
        type: "single",
        explanation: "Đáp án đúng là E."
    },

    // ========== CÂU 40 ==========
    {
        id: 40,
        question: "Default size of H4 bootstrap heading:",
        options: [
            "16px",
            "18px",
            "24px",
            "36px"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 41 ==========
    {
        id: 41,
        question: "Consider the following CSS rules: \ndiv { \n  width: 80%; \n} \n@media all and (min-width: 500px) { \n  div { \n    width: 25%; \n  } \n} \nWhat is the width of any div elements on a 350px screen?",
        options: [
            "100%",
            "80%",
            "25%",
            "75%"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: Vì 350px < 500px nên media query không áp dụng, giữ nguyên width 80%."
    },

    // ========== CÂU 42 ==========
    {
        id: 42,
        question: "The mobile version of your web page should have the same layout of every other version of your site.",
        options: [
            "True",
            "False"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 43 ==========
    {
        id: 43,
        question: "HTML uses HTML elements to annotate documents. This is a way of marking up the content to identify specific parts.",
        options: [
            "Hypertext",
            "Tags",
            "Elements",
            "Browse"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 44 ==========
    {
        id: 44,
        question: "Which is the correct file extension for a web page?",
        options: [
            ".html",
            ".java",
            ".js",
            ".cpp"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 45 ==========
    {
        id: 45,
        question: "What statement block do you insert on the 3rd line to create a list of options?\n<body> \n  <select> \n    <!-- Insert here --> \n  </select> \n</body>",
        options: [
            "<option>a</option><option>b</option><option>c</option>",
            "<item>a</item><item>b</item><item>c</item>",
            "<list>a</list><list>b</list><list>c</list>"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 46 ==========
    {
        id: 46,
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            "a>http://fpthcm.edu.vn",
            "<a url=\"http://fpthcm.edu.vn\">fpt-uni</a>",
            "<a href=\"http://fpthcm.edu.vn\">fpt-uni</a>",
            "<a name=\"http://fpthcm.edu.vn\">fpt-uni</a>"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 47 ==========
    {
        id: 47,
        question: "Which of the following is an example of a top-level domain?",
        options: [
            ".com",
            "umich.edu",
            "wikipedia.org"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 48 ==========
    {
        id: 48,
        question: "What syntax do you use to insert a comment to the page HTML?",
        options: [
            "<!-- Write your comments here -->",
            "// Write your comments here",
            "/* Write your comments here */",
            "<@!-- Write your comments here -->"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 49 ==========
    {
        id: 49,
        question: "Which is the best/proper way to declare the header for a page?",
        options: [
            "<head> <h1>Mister Rogers</h1> <nav> ... </nav> </head>",
            "<div id=\"header\"> <h1>Mister Rogers</h1> <div id=\"nav\"> ... </div> </div>",
            "<header> <h1>Mister Rogers</h1> <nav> </header> ... </nav>",
            "<header> <h1>Mister Rogers</h1> <nav> <a href=\"one.html\">one</a> ... </nav> </header>"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D."
    },

    // ========== CÂU 50 ==========
    {
        id: 50,
        question: "Which code properly creates the nested list structure shown here?\nVegetables\nFruit\nBlueberries\nBananas",
        options: [
            "<ul> <li>Vegetables</li> <li>Fruit <ol> <li>Blueberries</li> <li>Bananas</li> </ol> </li> </ul>",
            "[Option missing in text source]",
            "[Option missing in text source]",
            "[Option missing in text source]"
        ],
        correct: 2, // Key: C (Lưu ý: Input text bị thiếu các đáp án B, C, D nhưng key chọn C)
        type: "single",
        explanation: "Đáp án đúng là C theo bảng đáp án (Lưu ý: Dữ liệu đầu vào thiếu nội dung cho đáp án này)."
    },

    // ========== CÂU 51 ==========
    {
        id: 51,
        question: "Consider the code: \n<form> <input type=\"[missing code]\" value=\"Send\"/> </form> \nWhat option do you choose to send form data to a form-handler?",
        options: [
            "button",
            "submit",
            "sendButton",
            "actionButton"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: input type='submit'."
    },

    // ========== CÂU 52 ==========
    {
        id: 52,
        question: "A basic functionality of browsers is to translate HTML documents into viewable webpages.",
        options: [
            "True",
            "False"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 53 ==========
    {
        id: 53,
        question: "What type is the default display value of the div tag?",
        options: [
            "single",
            "block",
            "wrap",
            "inline"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 54 ==========
    {
        id: 54,
        question: "W3C stands for:",
        options: [
            "World Wide Web Consortium",
            "World Wide Web Cooperation",
            "WWW Consortium"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 55 ==========
    {
        id: 55,
        question: "The Domain Name Service looks up the domain and returns the:",
        options: [
            "IP address",
            "server",
            "Host",
            "Domain"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 56 ==========
    {
        id: 56,
        question: "What should target = \"_blank\" do when included in a link tag?",
        options: [
            "Opens the link in a new tab or window",
            "Opens the link in a tab called \"_blank\"",
            "This is not a valid expression"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 57 ==========
    {
        id: 57,
        question: "A ___ is a computer that is in charge of handling resource requests from multiple computers.",
        options: [
            "server",
            "client",
            "host",
            "domain"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 58 ==========
    {
        id: 58,
        question: "What are proprietary tags?",
        options: [
            "Tags used to define ownership of the content",
            "Tags that display copyright information",
            "Tags that work only on certain browsers"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 59 ==========
    {
        id: 59,
        question: "Consider the following code using Bootstrap 3: \n<div class = \"col-sm-2 col-lg-4\"> \nIn a md viewport the div will be ... columns wide.",
        options: [
            "2",
            "4",
            "6",
            "8"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: Vì không có class col-md, nó sẽ dùng fallback của col-sm là 2 cột."
    },

    // ========== CÂU 60 ==========
    {
        id: 60,
        question: "Which class provides a responsive fixed width container?",
        options: [
            ".container-fluid",
            ".container",
            ".container-fixed",
            "All of the others"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    }
];