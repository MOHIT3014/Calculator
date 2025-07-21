let input = document.getElementById("display");
let btn=document.querySelectorAll("button");

let str="";

let arr = Array.from(btn);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            str = eval(str);
            input.value = str;
        }
        else if (e.target.innerHTML == "C") {
            str = "";
            input.value = str;
        }
        else if (e.target.innerHTML == "Del") {
            str = str.slice(0, -1);
            input.value = str;
        }
        else {
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})
