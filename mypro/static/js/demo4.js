document.addEventListener('DOMContentLoaded', function() {
                alert("Welcome to Demo 4 Page!");

                // document.getElementById("btnClickMe").addEventListener("click", function(){
                //     alert("Button Clicked!");
                // });

                var btn = document.getElementById("btnClickMe");
                btn.addEventListener("click", function(){
                    alert("Button Clicked!");
                });

                var btnAdd = document.getElementById("btnAdd");
                btnAdd.addEventListener("click", function(){
                    Additon();
                });

                function Additon(){
                    var num1 = 10;
                    var num2 = 20;
                    var sum = num1 + num2;
                    alert("Sum of " + num1 + " and " + num2 + " is : " + sum);
                }

                var btn2 = document.getElementsByName("btn2");
                btn2[1].addEventListener("dblclick", function(){
                    alert("Double Clicked!");
                });

                var btnClassA = document.getElementsByClassName("classA");
                btnClassA[0].addEventListener("mouseover", function(){
                    alert("Mouse Over on Class A Button!");
                });
                btnClassA[0].addEventListener("mouseout", function(){
                    alert("Mouse Out on Class A Button!");
                });

                var txt = document.getElementById("txt1");
                txt.addEventListener("keypress", function(event){
                    alert("Input Text Key Pressed: " + event.key);
                    var value = event.target.value;
                    console.log("Current Input Value: " + value);
                });

                var CourseSelect = document.getElementById("ddlCourse");
                CourseSelect.addEventListener("change", function(event){
                    var selectedValue = event.target.value;
                    alert("Select Dropdown Changed to: " + selectedValue);
                });

                var spans = document.getElementsByTagName("span");
                for(var i=0; i<spans.length; i++){
                    if(i == 0 || i == 2){
                        spans[i].style.color = "blue";
                        spans[i].style.fontWeight = "bold";
                    } else {
                        spans[i].style.color = "red";
                        spans[i].style.fontWeight = "bold";
                        spans[i].style.fontSize = "20px";
                        spans[i].style.fontFamily = "Times New Roman";
                        spans[i].style.textDecoration = "underline";
                    }                    
                }

                var greetHeader = document.querySelector("#Greet");
                greetHeader.style.color = "orange";

                var h1tags = document.querySelectorAll("h1");
                for(var i=0; i<h1tags.length; i++){
                    h1tags[i].style.textDecoration = "underline";
                }

                var messageClass = document.querySelector(".message");
                messageClass.style.color = "blue";
            });
