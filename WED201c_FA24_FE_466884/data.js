const questions = [
    // ========== CÂU 1 ==========
    {
        id: 1,
        question: "Consider the code:\nh1 { color: blue; font-size: 20px; }\n\nWhich of the following is called \"selector\"?",
        options: [
            "color and font-size",
            "h1",
            "All parts of the code above",
            "blue and 20px"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Đáp án đúng là B (h1) theo bảng đáp án."
    },

    // ========== CÂU 2 ==========
    {
        id: 2,
        question: "div { border-width: 10px 3px 5px 9px; }\n\nWhat is the width of the left border?",
        options: [
            "9px",
            "5px",
            "3px",
            "10px"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Thứ tự border-width là: top right bottom left. Vậy left là 9px."
    },

    // ========== CÂU 3 ==========
    {
        id: 3,
        question: "The image will scale down if it has to, but never scale up to be larger than its original size.\nWhich code is right?",
        options: [
            "width: 100%",
            "max-width: 100%",
            "scale: 100%",
            "min-width: 100%"
        ],
        correct: 1, // B
        type: "single",
        explanation: "max-width: 100% giúp ảnh co nhỏ lại được nhưng không phóng to quá kích thước gốc."
    },

    // ========== CÂU 4 ==========
    {
        id: 4,
        question: "The # symbol specifies that the selector is a/an",
        options: [
            "id",
            "class",
            "first",
            "tag"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Ký tự # đại diện cho ID selector."
    },

    // ========== CÂU 5 ==========
    {
        id: 5,
        question: "How many ways are there to integrate CSS into a web page?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Có 3 cách: Inline, Internal (trong thẻ style), và External (file css riêng)."
    },

    // ========== CÂU 6 ==========
    {
        id: 6,
        question: "Which CSS property controls the text size?",
        options: [
            "font-height",
            "text-size",
            "text-style",
            "font-size"
        ],
        correct: 3, // D
        type: "single",
        explanation: "font-size dùng để chỉnh kích thước chữ."
    },

    // ========== CÂU 7 ==========
    {
        id: 7,
        question: "What syntax is used to insert an external style to the HTML document?",
        options: [
            "<a href=\"mystyle.css\" rel=\"stylesheet\"></a>",
            "<link href=\"mystyle.css\" rel=\"stylesheet\">",
            "<source src=\"mystyle.css\" rel=\"stylesheet\">",
            "<url href=\"mystyle.css\" rel=\"stylesheet\">"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Thẻ <link> được dùng để liên kết file CSS ngoài."
    },

    // ========== CÂU 8 ==========
    {
        id: 8,
        question: "Which snippet of CSS is commonly used to center an element horizontally?",
        options: [
            "site-align: center;",
            "margin: auto 0;",
            "margin: 0 auto;",
            "margin: center;"
        ],
        correct: 2, // C
        type: "single",
        explanation: "margin: 0 auto; giúp căn giữa phần tử khối theo chiều ngang."
    },

    // ========== CÂU 9 ==========
    {
        id: 9,
        question: "What property is used so the container becomes flexible?",
        options: [
            "display: flexible",
            "show: flex",
            "visibility: flexible",
            "display: flex"
        ],
        correct: 3, // D
        type: "single",
        explanation: "display: flex kích hoạt Flexbox."
    },

    // ========== CÂU 10 ==========
    {
        id: 10,
        question: "In the following code snippet, what value is given for the bottom margin:\nmargin: 15px 10px 3px 8px;",
        options: [
            "5px",
            "10px",
            "3px",
            "8px"
        ],
        correct: 2, // C
        type: "single",
        explanation: "Thứ tự: Top (15), Right (10), Bottom (3), Left (8)."
    },

    // ========== CÂU 11 ==========
    {
        id: 11,
        question: "What is the correct HTML for referring to an external style sheet stored in a subfolder called css?",
        options: [
            "<link rel=\"css/stylesheet\" href=\"css/mystyle.css\">",
            "<link rel=\"stylesheet\" href=\"css/mystyle.css\">",
            "<link rel=\"css/stylesheet\" href=\"mystyle.css\">",
            "<style src=\"css/mystyle.css\">"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Đường dẫn đúng là css/mystyle.css và rel phải là stylesheet."
    },

    // ========== CÂU 12 ==========
    {
        id: 12,
        question: "DTD stands for",
        options: [
            "Data type definition",
            "Define type of data",
            "Document type definition",
            "Documented type data"
        ],
        correct: 2, // C
        type: "single",
        explanation: "DTD là viết tắt của Document Type Definition."
    },

    // ========== CÂU 13 ==========
    {
        id: 13,
        question: "The \"Box Model\" in CSS is made up of?",
        options: [
            "width / height / border",
            "padding / border",
            "width / height",
            "width / height / border / padding"
        ],
        correct: 3, // D
        type: "single",
        explanation: "Box Model gồm Content (width/height), Padding, Border và Margin."
    },

    // ========== CÂU 14 ==========
    {
        id: 14,
        question: "How do you make the text bold?",
        options: [
            "style: bold;",
            "font-weight: bold;",
            "font: bold;",
            "text: bold;"
        ],
        correct: 1, // B
        type: "single",
        explanation: "font-weight: bold; làm chữ đậm."
    },

    // ========== CÂU 15 (MULTIPLE CHOICE) ==========
    {
        id: 15,
        question: "1. var obj = \"<img src='image.jpg'>\"\n2. ...\n3. var tag = document.getElementById(\"demo\")\nWhat statement is right to append a new image to the tag variable in the 3rd code line?",
        options: [
            "tag.innerHTML = obj",
            "tag.value = obj",
            "tag.text = obj",
            "tag.innerHTML = tag.innerHTML + obj"
        ],
        correct: [0, 3], // A và D theo đáp án đề bài
        type: "multiple",
        explanation: "Theo đáp án được cung cấp (A D). Lưu ý: D là cách chính xác để 'append' (nối thêm), còn A sẽ thay thế nội dung cũ."
    },

    // ========== CÂU 16 ==========
    {
        id: 16,
        question: "Which built-in method reverses the order of the elements of an array?",
        options: [
            "ChangeOrder(order)",
            "reverse()",
            "sort(order)",
            "None of the others"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Phương thức reverse() đảo ngược mảng."
    },

    // ========== CÂU 17 ==========
    {
        id: 17,
        question: "What keyword is used to insert at the [MISSING] in JavaScript?\n<script>\n  [MISSING] myFunction() {\n  }\n</script>",
        options: [
            "void",
            "int",
            "method",
            "function"
        ],
        correct: 3, // D
        type: "single",
        explanation: "Từ khóa 'function' dùng để khai báo hàm."
    },

    // ========== CÂU 18 ==========
    {
        id: 18,
        question: "Which tag is used to let the browser know that it is about to see JavaScript code?",
        options: [
            "<script>",
            "<head>",
            "<javascript>"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Thẻ <script> chứa mã JS."
    },

    // ========== CÂU 19 ==========
    {
        id: 19,
        question: "<body>\n  <p id=\"demo\"></p>\n  <script>\n    if (Math.random() < 0.5) {\n      text = \"<a href='https://w3schools.com'>Visit W3Schools</a>\";\n    } else {\n      text = \"<a href='http://wwf.org'>Visit WWF</a>\";\n    }\n    document.getElementById(\"demo\").innerHTML = text;\n  </script>\n</body>\n\nWhat is the output?",
        options: [
            "write a link to either Visit W3Schools or to Visit WWF",
            "write a link to Visit W3Schools",
            "write a link to Visit WWF",
            "All of the others"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Hàm Math.random() trả về giá trị ngẫu nhiên nên kết quả có thể là một trong hai link."
    },

    // ========== CÂU 20 ==========
    {
        id: 20,
        question: "What statement do you use to print out a text to the document?",
        options: [
            "document.display(\"this is a text\")",
            "document.show(\"this is a text\")",
            "document.write(\"this is a text\")"
        ],
        correct: 2, // C
        type: "single",
        explanation: "document.write() in nội dung ra màn hình."
    },

    // ========== CÂU 21 ==========
    {
        id: 21,
        question: "var data = [\n{id:1, name:\"laptop\"},\n{id:2, name:\"screen\"},\n{id:3, name:\"keyboard\"}\n];\nWhat statement is right to get id = 1 of above array?",
        options: [
            "data[0]",
            "data[1]",
            "data[0].id",
            "data[1].id"
        ],
        correct: 2, // C
        type: "single",
        explanation: "Phần tử đầu tiên là data[0], truy cập thuộc tính id là data[0].id."
    },

    // ========== CÂU 22 ==========
    {
        id: 22,
        question: "Boolean variables store either true or false.",
        options: [
            "True",
            "False"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Đúng, kiểu Boolean chỉ chứa true hoặc false."
    },

    // ========== CÂU 23 ==========
    {
        id: 23,
        question: "function change(obj) {\nvar tag = document.getElementById(\"demo\")\ntag.src = obj.src;\n}\n<body>\n<img src=\"image.jpg\" id=\"demo\">\n<img src=\"image2.jpg\" onmouseover=\"change(this)\">\n</body>\nWhat output is right of above function?",
        options: [
            "To change the src property of the image with id=\"demo\"",
            "To change the src property of the image",
            "To change the src property of the image that holds the event",
            "None of the others"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Hàm lấy src của ảnh hiện tại gán vào src của ảnh có id='demo'."
    },

    // ========== CÂU 24 ==========
    {
        id: 24,
        question: "Consider the code:\n<script>\nfunction createArray() { MISSING CODE; }\n</script>\n<input type=\"button\" value=\"getValue\" onclick=\"createArray()\">\nWhat code is added at [MISSING CODE] to create the array with items: 1, 2, 3, 4?",
        options: [
            "var arr = {1,2,3,4}",
            "var arr = [1,2,3,4]",
            "var arr = {1,2,3,4}",
            "var arr[] = {1,2,3,4}"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Mảng trong JS được khai báo bằng ngoặc vuông []."
    },

    // ========== CÂU 25 ==========
    {
        id: 25,
        question: "What is returned when the method myFunction is called?\n<script>\n  function myFunction(){\n    var string = \"Humpty Dumpty sat on the wall\";\n    return string.indexOf(\"Dumpty\");\n  }\n</script>",
        options: [
            "true",
            "-1",
            "7",
            "0"
        ],
        correct: 2, // C
        type: "single",
        explanation: "Chuỗi 'Dumpty' bắt đầu tại vị trí index 7."
    },

    // ========== CÂU 26 ==========
    {
        id: 26,
        question: "What statement do you use to create a new object?",
        options: [
            "var x=new Object()",
            "var x=new Number(\"123\")",
            "var x=new product(\"111\",\"laptop\")",
            "All of the others"
        ],
        correct: 3, // D
        type: "single",
        explanation: "Tất cả các cách trên đều tạo ra object (Object chuẩn, wrapper object, hoặc custom object)."
    },

    // ========== CÂU 27 ==========
    {
        id: 27,
        question: "What statement do you insert the 3rd code line to get a list of images in p tag?\nfunction demo() { }\n\n<p id=\"abc\"> <img src=\"h1.jpg\"> <img src=\"h2.jpg\"> <img src=\"h3.jpg\"> </p>",
        options: [
            "var list=\"abc\".getElementsByTagName(\"img\")",
            "var list=document.getElementById(\"abc\").getElementsByTagName(\"img\")",
            "var list=document.getElementById(\"abc\").getElementsByClassName(\"img\")",
            "var list=document.getElementById(\"abc\").getElementsByName(\"img\")"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Cần lấy Element theo ID trước, sau đó tìm thẻ img bên trong nó."
    },

    // ========== CÂU 28 ==========
    {
        id: 28,
        question: "Which event is run when an element is clicked?",
        options: [
            "onDrop",
            "onClick",
            "onDragstart",
            "onAction"
        ],
        correct: 1, // B
        type: "single",
        explanation: "onClick là sự kiện click chuột."
    },

    // ========== CÂU 29 ==========
    {
        id: 29,
        question: "Consider two statements:\nA JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().\nA JavaScript function is a block of code designed to perform a particular task.\nChoose the right option.",
        options: [
            "Statement 1 is true, statement 2 is true",
            "Statement 1 is false, statement 2 is false",
            "Statement 1 is true, statement 2 is false",
            "Statement 1 is false, statement 2 is true"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Cả hai phát biểu về định nghĩa hàm JS đều đúng."
    },

    // ========== CÂU 30 ==========
    {
        id: 30,
        question: "Consider the following CSS rules:\n@media all and (min-width: 500px){ div{\nwidth: 25%;\n}\n}\ndiv{\nwidth: 80%;\n}\nWhat is the width of any div elements on a 750px screen?",
        options: [
            "80%",
            "75%",
            "100%",
            "25%"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Do quy tắc 'div { width: 80% }' viết sau @media query nên nó sẽ ghi đè quy tắc trong media query."
    },

    // ========== CÂU 31 ==========
    {
        id: 31,
        question: "Consider the following CSS rules:\ndiv{\nwidth: 80%;\n}\n@media all and (max-width: 767px){\ndiv{\nwidth: 25%;\n}\n}\nWhat is the width of any div elements on a 500px screen?",
        options: [
            "80%",
            "75%",
            "100%",
            "25%"
        ],
        correct: 3, // D
        type: "single",
        explanation: "Màn hình 500px thỏa mãn max-width: 767px, và media query viết sau nên width là 25%."
    },

    // ========== CÂU 32 ==========
    {
        id: 32,
        question: "Which of the following bootstrap style is to be used if you want to create a navbar that scrolls with the page?",
        options: [
            "navbar-static-top",
            "navbar-fixed",
            "navbar-fixed-top",
            ".fixed-top"
        ],
        correct: 0, // A
        type: "single",
        explanation: "navbar-static-top tạo navbar cuộn theo trang (không cố định)."
    },

    // ========== CÂU 33 ==========
    {
        id: 33,
        question: "Adaptive design with dynamic serving is..",
        options: [
            "Designing multiple pages, one for each type of major device (phone, tablet, laptop, and desktop)",
            "Designing pages for the mobile view.",
            "Designing pages for multiple platforms by incorporating fluid measurements and varying CSS rules."
        ],
        correct: 0, // A
        type: "single",
        explanation: "Dynamic serving phục vụ các phiên bản trang khác nhau cho các thiết bị khác nhau."
    },

    // ========== CÂU 34 ==========
    {
        id: 34,
        question: "The mobile version of your web page should have the same layout of every other version of your site.",
        options: [
            "True",
            "False"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Sai. Mobile version thường cần layout khác (ví dụ: 1 cột) so với desktop."
    },

    // ========== CÂU 35 ==========
    {
        id: 35,
        question: "Which fluid measurement type returns a percentage of the viewport height?",
        options: [
            "vh",
            "vw",
            "hv",
            "ww"
        ],
        correct: 0, // A
        type: "single",
        explanation: "vh = viewport height."
    },

    // ========== CÂU 36 ==========
    {
        id: 36,
        question: "Consider the following CSS rule:\n div{ width: 80%;\n }\n div{\n @media print {\n width: 25%;\n }\n }\n Which of the following is a true statement?",
        options: [
            "The div elements will have a width of 25% only when the page is printed",
            "The div elements will only visible only when the page is printed",
            "The div elements will have a width of 80% only when the page is printed"
        ],
        correct: 0, // A
        type: "single",
        explanation: "@media print chỉ áp dụng khi in."
    },

    // ========== CÂU 37 ==========
    {
        id: 37,
        question: "Consider the following CSS rules:\n div{\n width: 80%;\n }\n @media all and (min-width: 500px){\n div{\n width: 25%;\n }\n}\nWhat is the width of any div elements on a 750px screen?",
        options: [
            "80%",
            "100%",
            "25%",
            "75%"
        ],
        correct: 2, // C
        type: "single",
        explanation: "Màn hình 750px > 500px, media query viết sau nên width là 25%."
    },

    // ========== CÂU 38 ==========
    {
        id: 38,
        question: "Choose the right statement about the code below:\n@media only screen and (min-width: 768px) {\n.col-1 {width: 8.33%;}\n...\n.col-6 {width: 50%;}\n...\n}\n<div class=\"row\"> <div class=\"col-6\"> The city </div> <div class=\"col-6\">...</div> </div>",
        options: [
            "When the screen (browser window) gets smaller than 768px, each child div should have a width of 50%",
            "When the screen (browser window) gets greater than 768px, each child div should have a width of 50%",
            "Each column should have a width of 100% for any screen wide",
            "When the screen (browser window) or mobile gets smaller than 768px, each column should have a width of 50%"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Media query áp dụng min-width: 768px, nên class col-6 (50%) chỉ áp dụng khi màn hình lớn hơn 768px."
    },

    // ========== CÂU 39 ==========
    {
        id: 39,
        question: "1 = 1% of viewport width",
        options: [
            "vh",
            "px",
            "vw",
            "etc"
        ],
        correct: 2, // C
        type: "single",
        explanation: "vw = viewport width."
    },

    // ========== CÂU 40 ==========
    {
        id: 40,
        question: "Consider the following code using Bootstrap 3:\n<div class = \"col-sm-2 col-lg-4\"> In a lg viewport the div will be ... columns wide.",
        options: [
            "2",
            "4",
            "6",
            "8"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Ở màn hình lg (large), class col-lg-4 được kích hoạt, nên độ rộng là 4 cột."
    },

    // ========== CÂU 41 ==========
    {
        id: 41,
        question: "Which of the following code segments will keep people from being able to zoom in or out on your content?",
        options: [
            "<meta name = 'viewport' content='width=device-width, initial-scale=1, maximum-scale = 1'>",
            "<meta name = 'viewport' content='width=device-width, initial-scale=1'>",
            "It is impossible to lock the zoom ability"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Thuộc tính maximum-scale=1 ngăn chặn việc zoom."
    },

    // ========== CÂU 42 ==========
    {
        id: 42,
        question: "Consider some options:\n (A) Use relative units\n (B) we should set a static value for every HTML element, like 600 pixels.\n (C) Use a grid-view system\n (D) take control over the viewport, through the <meta> tag.\n (E) Use min-height, max-height properties for setting the size of the element.\n What option should be used in the fluid layout design?",
        options: [
            "A,B,C",
            "B,C,E",
            "B,D,E",
            "A,C,D"
        ],
        correct: 3, // D
        type: "single",
        explanation: "Fluid layout cần đơn vị tương đối (A), grid system (C) và viewport meta tag (D)."
    },

    // ========== CÂU 43 ==========
    {
        id: 43,
        question: "Consider the following CSS rules:\n @media all and (max-width: 767px){ div{\n width: 50%;\n }\n }\n div{\n width: 80%;\n }\n What is the width of any div elements on a 500px screen?",
        options: [
            "80%",
            "75%",
            "100%",
            "50%"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Quy tắc div {width: 80%} viết sau media query nên nó ghi đè, dù màn hình 500px thỏa mãn điều kiện."
    },

    // ========== CÂU 44 ==========
    {
        id: 44,
        question: "Consider two statements:\n Statement 1: You can insert one or many \"responsive breakpoints\" in your stylesheet. But you should choose a mobile-first approach to design.\n Statement 2: Responsive web design generates many completed layouts These each layout is done individually for each device type.\n Choose the right option",
        options: [
            "Statement 1 is true, statement 2 is true",
            "Statement 1 is false, statement 2 is false",
            "Statement 1 is true, statement 2 is false",
            "Statement 1 is false, statement 2 is true"
        ],
        correct: 2, // C
        type: "single",
        explanation: "Statement 1 đúng. Statement 2 sai vì RWD dùng chung 1 layout linh hoạt chứ không phải nhiều layout riêng biệt hoàn toàn."
    },

    // ========== CÂU 45 ==========
    {
        id: 45,
        question: "Which of the following is part of a URL?",
        options: [
            "Editor",
            "HTML",
            "Domain(or Host)"
        ],
        correct: 2, // C
        type: "single",
        explanation: "Domain (tên miền) là một phần của URL."
    },

    // ========== CÂU 46 ==========
    {
        id: 46,
        question: "Which is the best/proper way to declare a section that has an h2 heading and three progress elements?",
        options: [
            "<section> \n<h2>Achievements</h2> <p>Progress in this course (100%) <progress value=\"1\"></progress> Progress in the Specialization capstone (20%)<progress value=\"20\" max=\"100\"></progress><br/> Progress in life goals (70%) <progress value=\"70\" max=\"100\"></progress></p> </section>",
            "<section> Achievements <p>Progress in this course (100%) <progress>100%</progress><br/> ... </section>",
            "<section> <h2>Achievements</h2> <p>Progress in this course (100%)<progress value=\"1\"></progress> ... </section>",
            "<section> <h2>Achievements</h2> <p>Progress in this course (100%) <progress>100%</progress><br/> ... </section>"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Đáp án A sử dụng đúng thẻ <progress> với các thuộc tính value và max."
    },

    // ========== CÂU 47 ==========
    {
        id: 47,
        question: "Which is the correct file extension for a web page?",
        options: [
            ".html",
            ".java",
            ".js",
            ".cpp"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Trang web có đuôi mở rộng là .html."
    },

    // ========== CÂU 48 ==========
    {
        id: 48,
        question: "Semantics is",
        options: [
            "the practice of giving content on the page meaning and structure by using proper element.",
            "the set of rules that defines the combinations of symbols that are considered to be a correctly structured document or fragment in that language",
            "circular"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Semantics trong HTML là việc sử dụng đúng thẻ mang ý nghĩa cho nội dung."
    },

    // ========== CÂU 49 ==========
    {
        id: 49,
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: [
            "<footer>",
            "<section>",
            "<bottom>",
            "<body>"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Thẻ <footer> dùng cho phần chân trang."
    },

    // ========== CÂU 50 ==========
    {
        id: 50,
        question: "A is a computer that is in charge of handling resource requests from multiple computers.",
        options: [
            "server",
            "client",
            "host",
            "domain"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Server (máy chủ) xử lý yêu cầu từ các máy khác."
    },

    // ========== CÂU 51 ==========
    {
        id: 51,
        question: "W3C stands for",
        options: [
            "World Wide Web Consortium",
            "World Wide Web Cooperation",
            "WWW Consortium",
            "None of the others"
        ],
        correct: 0, // A
        type: "single",
        explanation: "W3C = World Wide Web Consortium."
    },

    // ========== CÂU 52 ==========
    {
        id: 52,
        question: "Consider the code:\n<form action=\"myscript.apsx\"> Gender: <input type=\"radio\" value=\"1\" checked=\"checked\"/> female <input type=\"radio\" value=\"0\"/> male Full Name: <input type=\"text\" value=\"ThiNo\"/> <input type=\"submit\" value=\"submit\"/> </form>\nWhat data does the form send to the page myscript.aspx after submitting?",
        options: [
            "nothing",
            "female and ThiNo",
            "female and male",
            "1 and ThiNo"
        ],
        correct: 3, // D
        type: "single",
        explanation: "Radio checked có value='1' và text input có value='ThiNo'. Dữ liệu gửi đi là giá trị của các input."
    },

    // ========== CÂU 53 ==========
    {
        id: 53,
        question: "Choose the correct HTML element to define important text",
        options: [
            "<b>",
            "<strong>",
            "<i>",
            "<important>"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Thẻ <strong> dùng để định nghĩa văn bản quan trọng (về mặt ngữ nghĩa)."
    },

    // ========== CÂU 54 ==========
    {
        id: 54,
        question: "What option do you choose to create a table with 2 rows and 2 columns?",
        options: [
            "<table> <th> <tr></tr></th> <th><tr></tr></th> </table>",
            "<table> <tr><th></th></tr> <tr><td></td></tr> </table>",
            "<table> <td><tr></tr><tr></tr></td> <td><tr></tr><tr></tr></td> </table>",
            "<table> <tr><td></td><td></td></tr> <tr><td></td><td></td></tr> </table>"
        ],
        correct: 3, // D
        type: "single",
        explanation: "Cấu trúc đúng: Table -> Tr (hàng) -> Td (cột). Đáp án D có 2 thẻ tr, mỗi thẻ tr chứa 2 thẻ td."
    },

    // ========== CÂU 55 ==========
    {
        id: 55,
        question: "What does the tag <footer> typically contain?",
        options: [
            "copyright information",
            "logo or icon",
            "blog post",
            "the main content of a document"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Footer thường chứa thông tin bản quyền."
    },

    // ========== CÂU 56 ==========
    {
        id: 56,
        question: "Currently clicking and holding down the mouse button on represents",
        options: [
            "a:link pseudo class.",
            "a:visited",
            "a:active",
            "a:hover"
        ],
        correct: 2, // C
        type: "single",
        explanation: ":active là trạng thái khi đang nhấn giữ chuột."
    },

    // ========== CÂU 57 ==========
    {
        id: 57,
        question: "To access your cPanel account, you need ...",
        options: [
            "a username and password from your hosting server",
            "the username and password for your computer",
            "the port number for your account"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Cần tài khoản do nhà cung cấp hosting cấp."
    },

    // ========== CÂU 58 ==========
    {
        id: 58,
        question: "What are the elements to help organize the data and structure of a table?",
        options: [
            "<caption>, <head>, <body>, <foot>",
            "<caption>, <thead>, <tbody>, <foot>",
            "<caption>, <thead>, <tbody>, <tfoot>",
            "<caption>, <thead>, <body>, <foot>"
        ],
        correct: 2, // C
        type: "single",
        explanation: "Các thẻ cấu trúc bảng gồm caption, thead, tbody, tfoot."
    },

    // ========== CÂU 59 ==========
    {
        id: 59,
        question: "Which organization is responsible for assigning top-level domain names?",
        options: [
            "Internet Corporation for Assigned Numbers and Names (ICANN)",
            "Internet Domain Name Server (IDNS)",
            "World Wide Web Consortium (W3C)"
        ],
        correct: 0, // A
        type: "single",
        explanation: "ICANN chịu trách nhiệm quản lý tên miền."
    },

    // ========== CÂU 60 ==========
    {
        id: 60,
        question: "Choose a way to resize content to the viewport.",
        options: [
            "Use CSS media queries to apply different styling for small and large screens",
            "Setting large absolute CSS widths for page elements",
            "let the content rely on a particular viewport width to render well",
            "use large fixed width element"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Sử dụng CSS Media Queries để điều chỉnh kiểu dáng cho các kích thước màn hình khác nhau."
    }
];