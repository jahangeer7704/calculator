/* 
Hi this is JAHA , i have developed this calcultor using html css js  here u can see my all code

*/

document.addEventListener("readystatechange",(event)=>{
  if(event.target.readyState==="complete"){

    Appinit()
  }
})
function Appinit(){
//getting input as id and storing on let variables
let inpu1 = document.getElementById("inpu1");
let inpu2 = document.getElementById("inpu2");
let inpu3 = document.getElementById("inpu3");
let inpu4 = document.getElementById("inpu4");
let inpu5 = document.getElementById("inpu5");
let inpu6 = document.getElementById("inpu6");
let inpu7 = document.getElementById("inpu7");
let inpu8 = document.getElementById("inpu8");
let inpu9 = document.getElementById("inpu9");
let inpu0 = document.getElementById("inpu0");
let inpud = document.getElementById("inpud");
let inpu00 = document.getElementById("inpu00");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let ent = document.getElementById("ent");
let cls = document.getElementById("cls");
let del = document.getElementById("del");

//getting it to show the output data it is a screen
ele = document.getElementById("inp");

//declaring font size and position  as global
ele.style.fontSize = "40px";
ele.parentElement.style.justifyContent = "end";

// main working function & This function  is used as main function
let main = (val) => {
  // this variable is used to check some conditions
  let allin = ele.innerHTML;
  //this var is used to apply a output at the formal way using toLocaleString("en-us", option)
  let option = { style: "decimal" };
  //this condition checks the inner html contains the invalid operator combinations  assinment in html  " if it is true it print on inner html as INVALID"
  if (
    allin.includes("++") ||
    allin.includes("--") ||
    allin.includes("//") ||
    //  allin.includes("+*")||
    allin.includes("-*") ||
    allin.includes("/*") ||
    allin.includes("+/") ||
    allin.includes("-/") ||
    allin.includes("*/") ||
    allin.includes("+-") ||
    allin.includes("/-") ||
    allin.includes("*-") ||
    allin.includes("-+") ||
    allin.includes("*+") ||
    allin.includes("/+")
  ) {
    ele.parentElement.style.justifyContent = "center";

    ele.innerHTML = "INVALID INPUT";
  }
  //this is for when the evenlistener throws "cls " if true it make th inner html  null
  else if (val == "cls") {
    ele.innerHTML = "";
    ele.parentElement.style.justifyContent = "end";
  }
  //if this true this will delete the 1 lenth of innnerhtml  but  when the inner html not includes "INVALID" or "SYNTAX"
  // other wise it will,if syn or invalid is there it will make inner html as null
  else if (val == "del") {
    if (allin.includes("INVALID") || allin.includes("SYNTAX")) {
      ele.innerHTML = "";
    }
    //here the validation of -1 using slice or u use substring instead
     else {
      let dets = ele.innerHTML;
      ele.parentElement.style.justifyContent = "end";
      ele.innerHTML = dets.slice(0, dets.length - 1);
    }
  }
  //this is for when user enter any operator  already invalid or syntax err is present it make the  alert then reload the page
   else if (
    ele.innerHTML.includes("INVALID") ||
    ele.innerHTML.includes("SYNTAX")
  ) {
    alert("INVALID ");
    location.reload();
  } 
  //this is also said above  
  else if (val == "+" || val == "-" || val == "/" || val == "*") {
    let allin = ele.innerHTML;
    if (allin.includes("INVALID")) {
      alert("Due to operator collapse page needs reloded");// not able to handle this operators
      location.reload();
    } else if (
      allin.includes("++") ||
      allin.includes("--") ||
      allin.includes("//") ||
      allin.includes("**") ||
      allin.includes("+*") ||
      allin.includes("-*") ||
      allin.includes("/*") ||
      allin.includes("+/") ||
      allin.includes("-/") ||
      allin.includes("*/") ||
      allin.includes("/-") ||
      allin.includes("+-") ||
      allin.includes("*-") ||
      allin.includes("-+") ||
      allin.includes("*+") ||
      allin.includes("/+")
    ) {
      ele.parentElement.style.justifyContent = "center";

      ele.innerHTML = "INVALID INPUT";
    }//if this true it will append one val in innerhtml for only the length already is not greater then 16
    // making user to have evaluate 16 digits
    else if (allin.length < 16) {

      ele.append(val);
    } 
  }
  //when user press = this will first checks the inner html is null if null prints syntax err 
  else if (val == "ent") {
    if (ele.innerHTML == "") {
      ele.parentElement.style.justifyContent = "center";

      ele.innerHTML = "SYNTAX ERROR";
    } //otherwise it make a evaluation
     else {
      //this try block for user enters *3 like input using * / like operators  make error on eval
      try {
        let num = eval(ele.innerHTML);
      } catch (error) {
        window.onerror = () => {
          // Handle the error here without printing it
          // You can leave this function empty or add custom error handling logic here
          return true; // Prevent the error from being logged in the console
        };
//if catches makes syntax error
        ele.innerHTML = "SYNTAX ERROR";
      }
      // if not catches making evaluation 
      let num = eval(ele.innerHTML);
//num is not an integer it makle the float value tofixed(2)
//otherwise print num
      num = Number.isInteger(num) ? num : num.toFixed(2);

      ele.innerHTML = num.toLocaleString("en-us", option);
    }
  }//atlast its our main case here this append the integers at all above cases are false 
  //i made it as else if because i checked the already lenght of html innners
  else if (allin.length < 15) {
    ele.parentElement.style.justifyContent = "end";
  
    ele.append(val);
  }
};
//for adding event listeners to the all inputs
//this anonymous function will  pass parameter for the main() according to the user gui input
inpu1.addEventListener("click", () => {
  main(1);
});
inpu2.addEventListener("click", () => {
  main(2);
});
inpu3.addEventListener("click", () => {
  main(3);
});
inpu4.addEventListener("click", () => {
  main(4);
});
inpu5.addEventListener("click", () => {
  main(5);
});
inpu6.addEventListener("click", () => {
  main(6);
});
inpu7.addEventListener("click", () => {
  main(7);
});
inpu8.addEventListener("click", () => {
  main(8);
});
inpu9.addEventListener("click", () => {
  main(9);
});
inpu0.addEventListener("click", () => {
  main(0);
});
cls.addEventListener("click", () => {
  main("cls");
});
del.addEventListener("click", () => {
  main("del");
});
plus.addEventListener("click", () => {
  main("+");
});
minus.addEventListener("click", () => {
  main("-");
});
mul.addEventListener("click", () => {
  main("*");
});
div.addEventListener("click", () => {
  main("/");
});
ent.addEventListener("click", () => {
  main("ent");
});
inpud.addEventListener("click", () => {
  main(".");
});
inpu00.addEventListener("click", () => {
  main("00");
});


//for dark mode
let dark = document.getElementsByClassName("dark")
let bool=false
dark[0].addEventListener("click",()=>{
  darken(bool);

})

function darken(b){
  let scr=document.getElementById("scr")
  let button=document.getElementById("buttons")
  let con=document.getElementById("con")
  let iop=document.getElementsByClassName("iop")
  if(b==false){
    bool=true
  scr.style.backgroundColor="black"
con.style.backgroundColor="rgba(0, 0, 0, 0.714)"
inpu0.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpu1.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpu2.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpu3.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpu4.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpu5.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpu6.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpu7.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpu8.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpu9.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpu00.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
inpud.style.cssText="color:white;  box-shadow: inset 2px 2px 18px rgb(0, 0, 0);"
ele.style.cssText="color:white;"
dark[0].style.borderColor="black"
iop[1].style.cssText="color:lightgreen; box-shadow:inset 2px 2px 18px rgb(0, 0, 0);"
iop[2].style.cssText="color:lightgreen; box-shadow:inset 2px 2px 18px rgb(0, 0, 0);"
iop[3].style.cssText="color:lightgreen; box-shadow:inset 2px 2px 18px rgb(0, 0, 0);"
iop[4].style.cssText="color:lightgreen; box-shadow:inset 2px 2px 18px rgb(0, 0, 0);"
iop[5].style.cssText="color:lightgreen; box-shadow:inset 2px 2px 18px rgb(0, 0, 0);"
iop[0].style.cssText="color:lightgreen; box-shadow:inset 2px 2px 18px rgb(0, 0, 0);"
del.style.cssText="box-shadow:inset 2px 2px 18px rgb(0, 0, 0); color:red;" 
cls.style.cssText="box-shadow:inset 2px 2px 18px rgb(0, 0, 0); color:yellow;" 

}
  else{
    bool=false
  scr.style.backgroundColor="white"
  con.style.backgroundColor="rgba(253, 253, 253, 0.714)"
  inpu0.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpu1.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpu2.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpu3.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpu4.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpu5.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpu6.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpu7.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpu8.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpu9.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpu00.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  inpud.style.cssText="color:blac; box-shadow:inset 2px 2px 18px rgb(255, 255, 255)"
  iop[1].style.cssText="color:#9d00ff ; box-shadow: inset 2px 2px 18px rgb(255, 255, 255);"
  iop[2].style.cssText="color:#9d00ff ; box-shadow: inset 2px 2px 18px rgb(255, 255, 255);"
  iop[3].style.cssText="color:#9d00ff ; box-shadow: inset 2px 2px 18px rgb(255, 255, 255);"
  iop[4].style.cssText="color:#9d00ff ; box-shadow: inset 2px 2px 18px rgb(255, 255, 255);"
  iop[5].style.cssText="color:#9d00ff ; box-shadow: inset 2px 2px 18px rgb(255, 255, 255);"
  iop[0].style.cssText="color:#9d00ff ; box-shadow: inset 2px 2px 18px rgb(255, 255, 255);"
  del.style.cssText="box-shadow:inset 2px 2px 18px rgb(255, 255, 255); color:red;  color:orange;" 
cls.style.cssText="box-shadow:inset 2px 2px 18px rgb(255, 255, 255); color:yellow;  color:red;" 
  ele.style.color="black"
  dark[0].style.borderColor="white"
  }
}

}