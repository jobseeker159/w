const questions = [
    // ========== CÂU 1 ==========
    {
        id: 1,
        question: "The image will scale down if it has to, but never scale up to be larger than its original size. Which code is right?",
        options: [
            "Width: 100%",
            "Max-width: 100%",
            "Scale: 100%",
            "Min-width: 100%"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: max-width: 100% cho phép ảnh thu nhỏ theo container nhưng không vượt quá kích thước thật."
    },

    // ========== CÂU 2 ==========
    {
        id: 2,
        question: "What selector does the # symbol specify?",
        options: [
            "Class",
            "Tags",
            "Id",
            "Pseudo-class"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: Ký tự # đại diện cho ID Selector."
    },

    // ========== CÂU 3 ==========
    {
        id: 3,
        question: "Which is the correct CSS syntax?",
        options: [
            "{body;color:black;}",
            "body:color=black;",
            "{body:color=black;}",
            "body {color: black;}"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: Cú pháp chuẩn là selector { property: value; }."
    },

    // ========== CÂU 4 ==========
    {
        id: 4,
        question: "Which of the following option is the layout mode that is easy to design a flexible responsive layout?",
        options: [
            "The table mode",
            "The position mode",
            "The Float mode",
            "The Flexible Box Layout"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: Flexbox (Flexible Box Layout) được thiết kế cho responsive layout."
    },

    // ========== CÂU 5 ==========
    {
        id: 5,
        question: "What unit is used to specify the size of an element that relative to the parent element?",
        options: [
            "Vmax",
            "Vmin",
            "%",
            "Px"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: Đơn vị % dựa trên kích thước của phần tử cha."
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
        explanation: "Đáp án đúng là B: text-shadow."
    },

    // ========== CÂU 7 ==========
    {
        id: 7,
        question: "In the following code snippet, what value is given for the bottom margin: margin: 15px 10px 3px 8px;",
        options: [
            "5px",
            "10px",
            "3px",
            "8px"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: Thứ tự là Top (15) - Right (10) - Bottom (3) - Left (8)."
    },

    // ========== CÂU 8 ==========
    {
        id: 8,
        question: "div { \ntransform: translate(50px, 100px); \n} \nChoose the right statement about the above code:",
        options: [
            "Moves an element from its current position",
            "Moves an element from its (0,0) position",
            "Moves the <div> element 50 pixels to the right, and 100 pixels down from its current position",
            "Moves the <div> element 50 pixels to the right, and 100 pixels down from its (0,0) position"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: translate di chuyển phần tử so với vị trí hiện tại của nó."
    },

    // ========== CÂU 9 ==========
    {
        id: 9,
        question: "The # symbol specifies that the selector is?",
        options: [
            "Class",
            "Tags",
            "Id",
            "Pseudo-class"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 10 ==========
    {
        id: 10,
        question: "How do you make each word in a text start with a capital letter?",
        options: [
            "text-transform: capitalize",
            "transform: capitalize",
            "text-style: capitalize",
            "style capitalize"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 11 ==========
    {
        id: 11,
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

    // ========== CÂU 12 ==========
    {
        id: 12,
        question: "Descendant selectors \nnav a { ... } \nnav > a { ... } \nare more general than child selectors",
        options: [
            "True",
            "False"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: nav a (Descendant) chọn tất cả thẻ a bên trong, còn nav > a (Child) chỉ chọn con trực tiếp."
    },

    // ========== CÂU 13 ==========
    {
        id: 13,
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

    // ========== CÂU 14 ==========
    {
        id: 14,
        question: "Which snippet of CSS is commonly used to center a website horizontally?",
        options: [
            "site-align: center",
            "margin: center",
            "margin: auto 0",
            "margin: 0 auto"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: margin: 0 auto."
    },

    // ========== CÂU 15 ==========
    {
        id: 15,
        question: "What is the correct CSS syntax for making all the tag's font-size 14px?",
        options: [
            "font: \"14px\";",
            "font-size: 14px;",
            "text-size: 14px;",
            "font-weight: 14px;"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 16 ==========
    {
        id: 16,
        question: "Variables allow you to save data.",
        options: [
            "True",
            "False"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 17 ==========
    {
        id: 17,
        question: "<script> \nfunction myFunction(a, b) { \nreturn a + b; \n} \n</script> \n<body> \n<p id=\"demo\"></p> \n</body> \nWhat code is the right statement to assign the sum of two integers 4,3 to the p tag at the row [MISSINGCODE]?",
        options: [
            "document.getElementById(\"demo\").innerHTML = myFuntion(4,3);",
            "<p onclick=\"myFunction(4,3)\"></p>",
            "document.getElementById(\"demo\").innerHTML = \"4\" + \"3\";",
            "document.getElementById(\"demo\").innerHTML = myFuntion(\"4\",\"3\");"
        ],
        correct: 0, // Key: A (Lưu ý: Đề bài gốc viết sai chính tả 'myFuntion' ở đáp án, nhưng theo key đây là đáp án đúng)
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 18 ==========
    {
        id: 18,
        question: "function change(obj) { \nwhile(obj.length > 0) obj.remove(0); \n} \n<select onchange=\"change(this)\"> \n<option>XS</option> \n<option>S</option> \n<option>M</option> \n</select> \nChoose a right statement:",
        options: [
            "None of the others",
            "Remove an option",
            "Remove an option by zero-based index",
            "Remove all options by their index"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: Vòng lặp while sẽ xóa hết các options trong thẻ select."
    },

    // ========== CÂU 19 ==========
    {
        id: 19,
        question: "Assume you have a page with four paragraph tags. What is the proper JavaScript code to change the content of the second paragraph to \"What does the Fox say?\"",
        options: [
            "document.getElementById('second').innerHTML = \"What does the Fox say?\"",
            "document.getElementsByTagName('p').innerHTML = \"What does the Fox say?\"",
            "document.getElementsByTagName('p')[1].innerHTML = \"What does the Fox say?\"",
            "document.getElementById('p')[2].innerHTML = \"What does the Fox say?\"",
            "document.getElementByTagName('p')[2].innerHTML = \"What does the Fox say?\""
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: Index 1 đại diện cho phần tử thứ 2."
    },

    // ========== CÂU 20 ==========
    {
        id: 20,
        question: "Which of the following function of String object returns the calling string value converted to lower case?",
        options: [
            "toLocalLowerCase()",
            "toLowerCase()",
            "toString().LowerCase",
            "substring().LowerCase"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 21 ==========
    {
        id: 21,
        question: "var obj = document.createElement(\"img\") \nvar tag = document.getElementById(\"demo\") \nWhat statement is the right to append obj object to tag object in the 3rd line?",
        options: [
            "tag.innerHTML = obj",
            "tag.value = obj",
            "tag.text = obj",
            "tag.appendChild(obj)"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D."
    },

    // ========== CÂU 22 ==========
    {
        id: 22,
        question: "var Person = [ {firstName:\"Mai\", lastName:\"Nguyen\", age:46}, \n{firstName: \"Nga\", lastName:\"Tran\", age:40} ]; \nWhat statement do you use to change name = \"Nga\" to \"My\"?",
        options: [
            "Person.firstName = \"My\"",
            "Person[0].firstName = \"My\"",
            "Person[1].firstName = \"My\"",
            "none of the others"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: Person[1] là đối tượng thứ 2 (Nga)."
    },

    // ========== CÂU 23 ==========
    {
        id: 23,
        question: "What statement do you insert the 3rd code line to get a list of images in p tag? \n1. function demo() \n2. \n3. \n4. { \n} \n<p id=\"abc\"> \n<img src=\"h1.jpg\"> \n<img src=\"h2.jpg\"> \n<img src=\"h3.jpg\"> \n</p>",
        options: [
            "var list = \"abc\".getElementsByTagName(\"img\")",
            "var list = document.getElementById(\"abc\").getElementsByTagName(\"img\")",
            "var list = document.getElementById(\"abc\").getElementsByClassName(\"img\")",
            "var list = document.getElementById(\"abc\").getElementsByName(\"img\")"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 24 ==========
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
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: =+ không phải là toán tử hợp lệ."
    },

    // ========== CÂU 25 ==========
    {
        id: 25,
        question: "Which of the following is not a valid method for generating output to the screen?",
        options: [
            "print",
            "document.write",
            "alert",
            "prompt"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: print() dùng để mở hộp thoại in, không phải xuất nội dung ra màn hình web."
    },

    // ========== CÂU 26 ==========
    {
        id: 26,
        question: "What does it mean that variables are case-sensitive?",
        options: [
            "That all variables must use lowercase letters",
            "That the computer does not think that the variables name and Name are the same thing.",
            "That all variables must use uppercase letters"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 27 ==========
    {
        id: 27,
        question: "Boolean variables store either true or false.",
        options: [
            "True",
            "False"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 28 ==========
    {
        id: 28,
        question: "Which of these is not valid? (Hint, pay attention to if the method should return one thing or many things...)",
        options: [
            "document.getElementsById(idName)",
            "document.getElementsByClassName(className)",
            "document.getElementsByTagName(tagName)",
            "document.getname(Name)"
        ],
        correct: 3, // Key: D (Lưu ý: A cũng sai vì ID là duy nhất nên phải là getElementById - số ít, nhưng theo Key thì chọn D)
        type: "single",
        explanation: "Đáp án đúng là D (hoàn toàn không tồn tại)."
    },

    // ========== CÂU 29 ==========
    {
        id: 29,
        question: "Consider the code: \nfunction change(obj) { \nobj.innerHTML = Date(); \n} \n<button>click me</button> \nWhat is the right option to call the method change() when clicking on the button?",
        options: [
            "<a href=\"change(this)\"><button>click me</button></a>",
            "<a src=\"change(this)\"><button>click me</button></a>",
            "<button click=\"change(this)\">click me</button>",
            "<button onclick=\"change()\">click me</button>",
            "<button onclick=\"change(this)\">click me</button>"
        ],
        correct: 4, // Key: E
        type: "single",
        explanation: "Đáp án đúng là E: Cần truyền 'this' vào hàm."
    },

    // ========== CÂU 30 ==========
    {
        id: 30,
        question: "What is the difference between == and === ?",
        options: [
            "The === operator only checks for equivalent values, not equivalent type too.",
            "The == operator only checks for equivalent values, not equivalent type too.",
            "The == operator is the assignment operator, while === is the equality operator."
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 31 ==========
    {
        id: 31,
        question: "1 = 1% of viewport width",
        options: [
            "vh",
            "px",
            "vw",
            "etc"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: vw (Viewport Width)."
    },

    // ========== CÂU 32 ==========
    {
        id: 32,
        question: "Consider the following CSS rules: \nwidth: 80%; \ndiv { } \ndiv { } \n@media all and (min-width: 500px) { \nwidth: 25%; \n} \nWhat is the width of any div elements on a 750px screen?",
        options: [
            "80%",
            "100%",
            "25%",
            "75%"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: 750px > 500px nên áp dụng width 25%."
    },

    // ========== CÂU 33 ==========
    {
        id: 33,
        question: "Choose the right statement about the class .col-xs-* in the Bootstrap 3 Grid System:",
        options: [
            "The columns will automatically stack on top of each other when the screen is greater than 768px wide.",
            "for phones - screens less than 768px wide",
            "shows how to get some equal-width columns starting at tablets and scaling to large desktops.",
            "On mobile phones or screens that are greater than 996px wide, the columns will automatically stack"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: xs dành cho extra small devices (phones)."
    },

    // ========== CÂU 34 ==========
    {
        id: 34,
        question: "Consider the following CSS rules: \ndiv { \nwidth: 80%; \n} \n@media all and (min-width: 500px) { \ndiv { \nwidth: 25%; \n} \n} \nWhat is the width of any div elements on a 750px screen?",
        options: [
            "80%",
            "100%",
            "25%",
            "75%"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: Media query min-width 500px được kích hoạt."
    },

    // ========== CÂU 35 ==========
    {
        id: 35,
        question: "Choose the right statement about the code below: \nimg { \nmax-width: 100%; \nheight: auto; \n}",
        options: [
            "the image will scale down if it has to, but never scale up to be larger than its original size",
            "the image can be scaled up to be larger than its original size",
            "the image is displayed in the same its original size",
            "The image can scale up or down base on the viewport wide"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 36 ==========
    {
        id: 36,
        question: "Choose the right statement about the code below: \n@media only screen and (max-width: 768px) { \n[class*=\"col-\"] { \nwidth: 100%; \n} \n}",
        options: [
            "When the screen (browser window) gets smaller than 768px, each column should have a width of 100%",
            "When the screen (browser window) gets greater than 768px, each column should have a width of 100%",
            "Each column should have a width of 100% for any screen wide",
            "When the screen (browser window) or mobile gets smaller than 768px, each column should have a width of 100%"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 37 ==========
    {
        id: 37,
        question: "Which measurement is easier and comfortable for the designer/developer to use when coding their CSS but does not provide the best experience for the user?",
        options: [
            "me",
            "rem",
            "px",
            "%"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: px (pixel) là đơn vị tuyệt đối, dễ code nhưng kém linh hoạt cho user."
    },

    // ========== CÂU 38 ==========
    {
        id: 38,
        question: "Consider the below code: \n@media only screen and (max-width: 500px) { \nbody { \nbackground-color: lightblue; \n} \n} \nChoose the right statement.",
        options: [
            "If the device's width is larger than 500px, the background color will change to light blue",
            "If the device's width is smaller than 500px, the background color will change to light blue",
            "If the browser window is larger than 500px, the background color will change to light blue",
            "If the browser window is smaller than 500px, the background color will change to light blue"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: 'screen' refer tới browser window trong context này."
    },

    // ========== CÂU 39 ==========
    {
        id: 39,
        question: "What of the following code do you choose to insert at [MISSING CODE] to check device width is 768px or smaller? \n@media only screen and ([MISSING CODE]) { \nbody { \nbackground-image: url('img_flowers.jpg'); \n} \n}",
        options: [
            "min-device-width: 768px",
            "min-width: 768px",
            "device-width: 768px",
            "max-device-width: 768px"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: max-device-width kiểm tra độ rộng thiết bị vật lý."
    },

    // ========== CÂU 40 ==========
    {
        id: 40,
        question: "Which of the following is NOT a fluid measurement?",
        options: [
            "rem",
            "px",
            "%",
            "me"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B: px là đơn vị cố định (fixed/absolute)."
    },

    // ========== CÂU 41 ==========
    {
        id: 41,
        question: "Consider two statements: \nStatement 1: You can insert one or many \"responsive breakpoints\" in your stylesheet. But you should choose a mobile-first approach to design. \nStatement 2: Responsive web design generates many completed layouts These each layout is done individually for each device type. \nChoose the right option",
        options: [
            "Statement 1 is true, statement 2 is true",
            "Statement 1 is false, statement 2 is false",
            "Statement 1 is true, statement 2 is false",
            "Statement 1 is false, statement 2 is true"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C: Responsive design dùng 1 layout linh hoạt, không phải tạo nhiều layout riêng biệt cho từng thiết bị."
    },

    // ========== CÂU 42 ==========
    {
        id: 42,
        question: "What way is the best choice if you want to scale down if the image has to, but never scale up to be larger than its original size?",
        options: [
            "Using the max-width property and set up the code \"max-width: 100%\"",
            "Using the width property and set up the code \"width: 100%\"",
            "Using the min-width property and set up the code \"min-width: 100%\"",
            "Using the random-width property and set up the code \"random-width:100%\""
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 43 ==========
    {
        id: 43,
        question: "Which of the following code using Bootstrap 3 to insert at [MISSING CODE] to set up two equal columns in an xs viewport? \n<div class=\"row\"> \n<div class=\"MISSING CODE\"></div> \n</div> \n<div class=\"MISSING CODE\"></div>",
        options: [
            "col-md-3",
            "col-sm-4",
            "col-lg-3",
            "col-xs-6"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D: xs-6 + xs-6 = 12 columns."
    },

    // ========== CÂU 44 ==========
    {
        id: 44,
        question: "Choose the right statement about viewport.",
        options: [
            "The viewport is the user's visible area of a web page",
            "The viewport is the user's device-width",
            "The viewport is a tool to test any website's responsiveness",
            "The viewport is the screen's size"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 45 ==========
    {
        id: 45,
        question: "Consider the following code using Bootstrap 3: \n<div class = \"col-sm-6 col-lg-4\"> \nIn a sm viewport the div will be",
        options: [
            "6",
            "4",
            "12",
            "10"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A: class col-sm-6 quy định 6 cột trên màn hình small."
    },

    // ========== CÂU 46 ==========
    {
        id: 46,
        question: "What statement block do you insert the 3rd line to create a list of options? \n<body> \n<select> \n</select> \n</body>",
        options: [
            "<option>a</option> <option>b</option> <option>c</option>",
            "<item>a</item> <item>b</item> <item>c</item>",
            "<list>a</list> <list>b</list> <list>c</list>"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 47 ==========
    {
        id: 47,
        question: "Which of the following is the correct way to comment on HTML5?",
        options: [
            "<!-- HTML -->",
            "<#-- HTML -->",
            "<?-- HTML -->",
            "<$-- HTML -->"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 48 ==========
    {
        id: 48,
        question: "Which of the following is an example of a top-level domain?",
        options: [
            ".com",
            "umich.edu",
            "wikipedia.org",
            "Lazada.com"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A (.com, .org, .edu là TLD)."
    },

    // ========== CÂU 49 ==========
    {
        id: 49,
        question: "Choose the correct HTML element to define important text",
        options: [
            "<b>",
            "<strong>",
            "<i>",
            "<important>"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 50 ==========
    {
        id: 50,
        question: "Element that currently has the user's mouse pointer hovering over it represents one of the following Pseudo Class.",
        options: [
            ":hover",
            ":hovar",
            ":focus",
            ":gotfocus"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 51 ==========
    {
        id: 51,
        question: "How can you open a link in a new tab/browser window?",
        options: [
            "<a href=\"url\" target=\"_blank\">",
            "<a href=\"url\" new>",
            "<a href=\"url\" target=\"new\">",
            "<a href=\"url\" target=newtab>"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 52 ==========
    {
        id: 52,
        question: "How do you add shadow to elements in CSS3?",
        options: [
            "box-shadow: 10px 10px 5px grey;",
            "shadow-color: grey;",
            "shadow-right: 10px shadow-bottom: 10px;",
            "alpha-effect[shadow]: 10px 10px 5px grey;"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 53 ==========
    {
        id: 53,
        question: "Choose the right statement about the target attribute of a tag?",
        options: [
            "Not supported in HTML5.",
            "Specifies the relationship between the linked document and the current document",
            "Specifies the relationship between the current document and the linked document",
            "Specifies where to open the linked document"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D."
    },

    // ========== CÂU 54 ==========
    {
        id: 54,
        question: "Which of the following are browsers?",
        options: [
            "Chrome, Firefox, Safari",
            "Firefox, Windows, Chrome",
            "Safari, Mac, Sublime, Chrome"
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 55 ==========
    {
        id: 55,
        question: "Consider the code: \n<form> \n<input type=\"[missing code]\" value=\"Send\"/> \n</form> \nWhat option do you choose to send form data to a form-handler?",
        options: [
            "button",
            "submit",
            "sendButton",
            "actionButton"
        ],
        correct: 1, // Key: B
        type: "single",
        explanation: "Đáp án đúng là B."
    },

    // ========== CÂU 56 ==========
    {
        id: 56,
        question: "How many type faces inside property \"font-family\"?",
        options: [
            "1",
            "Maximum 2",
            "No Limit",
            "Maximum 3"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    },

    // ========== CÂU 57 ==========
    {
        id: 57,
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

    // ========== CÂU 58 ==========
    {
        id: 58,
        question: "Which tag is used to link from one page to another?",
        options: [
            "h1",
            "p",
            "Iframes",
            "a"
        ],
        correct: 3, // Key: D
        type: "single",
        explanation: "Đáp án đúng là D (anchor tag)."
    },

    // ========== CÂU 59 ==========
    {
        id: 59,
        question: "What should target = \"_blank\" do when included in a link tag?",
        options: [
            "Opens the link in a new tab or window",
            "Opens the link in a in a tab called \"_blank\"",
            "This is not a valid expression."
        ],
        correct: 0, // Key: A
        type: "single",
        explanation: "Đáp án đúng là A."
    },

    // ========== CÂU 60 ==========
    {
        id: 60,
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            "a>http://fpthcm.edu.vn</a>",
            "<a url=\"http://fpthcm.edu.vn\">fpt-uni</a>",
            "<a href=\"http://fpthcm.edu.vn\">fpt-uni</a>",
            "<a name=\"http://fpthcm.edu.vn\">fpt-uni</a>"
        ],
        correct: 2, // Key: C
        type: "single",
        explanation: "Đáp án đúng là C."
    }
];