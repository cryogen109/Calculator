let string = "";
let buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        //результат при натисненні дорівнює
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("textarea").innerText = string;
        }
        //стирає всю стрінгу
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector("textarea").innerText = string;
        }
        //стирає один символ (слайсом)
        else if(e.target.innerHTML == "←"){
            string = string.slice(0,-1);
            document.querySelector("textarea").innerText = string;
        }
        else{
            string = string + e.target.innerText;
            document.querySelector("textarea").innerText = string;
        }

    })
})